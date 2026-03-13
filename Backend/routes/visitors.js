const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Data storage file (using JSON for simplicity - use MongoDB in production)
const visitorsDataFile = path.join(__dirname, '../data/visitors.json');
const formsDataFile = path.join(__dirname, '../data/form_submissions.json');

// Ensure data directory exists
const dataDir = path.join(__dirname, '../data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Initialize data files if they don't exist
const initializeDataFiles = () => {
  if (!fs.existsSync(visitorsDataFile)) {
    fs.writeFileSync(visitorsDataFile, JSON.stringify([]));
  }
  if (!fs.existsSync(formsDataFile)) {
    fs.writeFileSync(formsDataFile, JSON.stringify([]));
  }
};

initializeDataFiles();

// Helper function to read data
const readData = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

// Helper function to write data
const writeData = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error writing data:', error);
  }
};

// Track initial visitor profile
router.post('/track', (req, res) => {
  try {
    const visitorProfile = req.body;
    const visitors = readData(visitorsDataFile);

    // Check if visitor already exists
    const existingIndex = visitors.findIndex(v => v.visitorId === visitorProfile.visitorId);

    if (existingIndex > -1) {
      // Update existing visitor
      visitors[existingIndex] = {
        ...visitors[existingIndex],
        ...visitorProfile,
        lastActivity: new Date().toISOString(),
      };
    } else {
      // Add new visitor
      visitors.push({
        ...visitorProfile,
        createdAt: new Date().toISOString(),
      });
    }

    writeData(visitorsDataFile, visitors);

    console.log(`✓ Visitor tracked: ${visitorProfile.visitorId} from ${visitorProfile.company || 'Unknown Company'} (${visitorProfile.location?.country || 'Unknown Country'})`);

    res.json({ 
      success: true, 
      visitorId: visitorProfile.visitorId,
      message: 'Visitor profile tracked successfully' 
    });
  } catch (error) {
    console.error('Error tracking visitor:', error);
    res.status(500).json({ error: 'Failed to track visitor' });
  }
});

// Update visitor behavior (creates visitor if not found, so no 404 from stale localStorage)
router.post('/update', (req, res) => {
  try {
    const { visitorId, behavior, lastActivity } = req.body;
    const visitors = readData(visitorsDataFile);

    const visitorIndex = visitors.findIndex(v => v.visitorId === visitorId);
    if (visitorIndex > -1) {
      visitors[visitorIndex].behavior = behavior;
      visitors[visitorIndex].lastActivity = lastActivity;
      writeData(visitorsDataFile, visitors);
      res.json({ success: true, message: 'Visitor updated successfully' });
    } else {
      // Visitor not in backend yet (e.g. from localStorage after backend restart) – create them
      visitors.push({
        visitorId,
        behavior: behavior || {},
        lastActivity: lastActivity || new Date().toISOString(),
        createdAt: new Date().toISOString(),
      });
      writeData(visitorsDataFile, visitors);
      res.json({ success: true, message: 'Visitor created from update' });
    }
  } catch (error) {
    console.error('Error updating visitor:', error);
    res.status(500).json({ error: 'Failed to update visitor' });
  }
});

// Track form submission with contact details
router.post('/form-submission', (req, res) => {
  try {
    const submissionData = req.body;
    const submissions = readData(formsDataFile);

    submissions.push({
      ...submissionData,
      createdAt: new Date().toISOString(),
      ip: req.ip,
    });

    writeData(formsDataFile, submissions);

    console.log(`✓ Form submitted by: ${submissionData.formData.email || 'Unknown'} (Form: ${submissionData.formType})`);

    res.json({ 
      success: true, 
      message: 'Form submission tracked successfully' 
    });
  } catch (error) {
    console.error('Error tracking form submission:', error);
    res.status(500).json({ error: 'Failed to track form submission' });
  }
});

// Get visitor analytics
router.get('/analytics', (req, res) => {
  try {
    const visitors = readData(visitorsDataFile);

    const analytics = {
      totalVisitors: visitors.length,
      uniqueCompanies: [...new Set(visitors.map(v => v.company).filter(c => c))].length,
      uniqueCountries: [...new Set(visitors.map(v => v.location?.country).filter(c => c))].length,
      deviceBreakdown: {
        mobile: visitors.filter(v => v.device?.type === 'mobile').length,
        tablet: visitors.filter(v => v.device?.type === 'tablet').length,
        desktop: visitors.filter(v => v.device?.type === 'desktop').length,
      },
      topCompanies: getTopCompanies(visitors, 10),
      topCountries: getTopCountries(visitors, 10),
      topPages: getTopPages(visitors, 10),
      topServices: getTopServices(visitors, 10),
      avgScrollDepth: getAverageScrollDepth(visitors),
      formSubmissionRate: (readData(formsDataFile).length / visitors.length * 100).toFixed(2) + '%',
    };

    res.json(analytics);
  } catch (error) {
    console.error('Error getting analytics:', error);
    res.status(500).json({ error: 'Failed to get analytics' });
  }
});

// Get all form submissions
router.get('/form-submissions', (req, res) => {
  try {
    const submissions = readData(formsDataFile);
    res.json(submissions);
  } catch (error) {
    console.error('Error getting form submissions:', error);
    res.status(500).json({ error: 'Failed to get form submissions' });
  }
});

// Get all visitors
router.get('/all', (req, res) => {
  try {
    const visitors = readData(visitorsDataFile);
    res.json(visitors);
  } catch (error) {
    console.error('Error getting visitors:', error);
    res.status(500).json({ error: 'Failed to get visitors' });
  }
});

// Get specific visitor
router.get('/:visitorId', (req, res) => {
  try {
    const visitors = readData(visitorsDataFile);
    const visitor = visitors.find(v => v.visitorId === req.params.visitorId);

    if (visitor) {
      res.json(visitor);
    } else {
      res.status(404).json({ error: 'Visitor not found' });
    }
  } catch (error) {
    console.error('Error getting visitor:', error);
    res.status(500).json({ error: 'Failed to get visitor' });
  }
});

// Helper functions
const getTopCompanies = (visitors, limit) => {
  const companies = {};
  visitors.forEach(v => {
    if (v.company) {
      companies[v.company] = (companies[v.company] || 0) + 1;
    }
  });

  return Object.entries(companies)
    .sort(([, a], [, b]) => b - a)
    .slice(0, limit)
    .map(([company, count]) => ({ company, visits: count }));
};

const getTopCountries = (visitors, limit) => {
  const countries = {};
  visitors.forEach(v => {
    const country = v.location?.country;
    if (country) {
      countries[country] = (countries[country] || 0) + 1;
    }
  });

  return Object.entries(countries)
    .sort(([, a], [, b]) => b - a)
    .slice(0, limit)
    .map(([country, visits]) => ({ country, visits }));
};

const getTopPages = (visitors, limit) => {
  const pages = {};
  visitors.forEach(v => {
    v.behavior?.pagesVisited?.forEach(page => {
      const pageName = page.page;
      pages[pageName] = (pages[pageName] || 0) + 1;
    });
  });

  return Object.entries(pages)
    .sort(([, a], [, b]) => b - a)
    .slice(0, limit)
    .map(([page, views]) => ({ page, views }));
};

const getTopServices = (visitors, limit) => {
  const services = {};
  visitors.forEach(v => {
    v.behavior?.servicesInterested?.forEach(service => {
      services[service] = (services[service] || 0) + 1;
    });
  });

  return Object.entries(services)
    .sort(([, a], [, b]) => b - a)
    .slice(0, limit)
    .map(([service, interest]) => ({ service, interest }));
};

const getAverageScrollDepth = (visitors) => {
  if (visitors.length === 0) return 0;
  const total = visitors.reduce((sum, v) => sum + (v.behavior?.scrollDepth || 0), 0);
  return Math.round(total / visitors.length);
};

module.exports = router;
