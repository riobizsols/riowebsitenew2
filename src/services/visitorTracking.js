/**
 * Visitor Tracking Service
 * Captures visitor profile, behavior, and engagement data
 */

import { getApiBaseUrl } from '../utils/urlHelper';

// Generate unique visitor ID
const generateVisitorId = () => {
  return 'visitor_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
};

// Get or create session ID
const getOrCreateSessionId = () => {
  let sessionId = sessionStorage.getItem('sessionId');
  if (!sessionId) {
    sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    sessionStorage.setItem('sessionId', sessionId);
  }
  return sessionId;
};

// Get device type
const getDeviceType = () => {
  const userAgent = navigator.userAgent;
  if (/mobile/i.test(userAgent)) return 'mobile';
  if (/tablet|ipad/i.test(userAgent)) return 'tablet';
  return 'desktop';
};

// Get operating system
const getOperatingSystem = () => {
  const userAgent = navigator.userAgent;
  if (/Win/.test(userAgent)) return 'Windows';
  if (/Mac/.test(userAgent)) return 'MacOS';
  if (/Linux/.test(userAgent)) return 'Linux';
  if (/Android/.test(userAgent)) return 'Android';
  if (/iPhone|iPad|iPod/.test(userAgent)) return 'iOS';
  return 'Unknown';
};

// Get browser name
const getBrowserName = () => {
  const userAgent = navigator.userAgent;
  if (userAgent.indexOf('Chrome') > -1 && userAgent.indexOf('Chromium') === -1) return 'Chrome';
  if (userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') === -1) return 'Safari';
  if (userAgent.indexOf('Firefox') > -1) return 'Firefox';
  if (userAgent.indexOf('Edge') > -1 || userAgent.indexOf('Edg') > -1) return 'Edge';
  if (userAgent.indexOf('Trident') > -1) return 'IE';
  return 'Other';
};

// Get browser version
const getBrowserVersion = () => {
  const userAgent = navigator.userAgent;
  let match = userAgent.match(/(?:Chrome|Safari|Firefox|Edge|Edg)\/(\d+)/);
  return match ? match[1] : 'Unknown';
};

// ---- Payload trimming helpers (prevents backend 413 Payload Too Large) ----
const trimArray = (arr, max) => (Array.isArray(arr) ? arr.slice(-max) : []);

const sanitizeBehavior = (behavior) => {
  if (!behavior || typeof behavior !== 'object') return behavior;

  const pagesVisitedRecent = trimArray(behavior.pagesVisited, 10);
  // Keep detailed `data` only for the latest entry; older entries can be large over time.
  const lastIndex = pagesVisitedRecent.length - 1;

  const pagesVisited = pagesVisitedRecent.map((entry, idx) => {
    if (!entry || typeof entry !== 'object') return entry;
    if (idx === lastIndex) return entry;
    return { page: entry.page, timestamp: entry.timestamp };
  });

  return {
    ...behavior,
    pagesVisited,
    servicesInterested: trimArray(behavior.servicesInterested, 20),
    ctaClicked: trimArray(behavior.ctaClicked, 20),
  };
};

// Get UTM parameters
const getUTMParameters = () => {
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source') || null,
    utm_medium: params.get('utm_medium') || null,
    utm_campaign: params.get('utm_campaign') || null,
    utm_content: params.get('utm_content') || null,
    utm_term: params.get('utm_term') || null,
  };
};

// Get company from IP using ipapi.co
const getCompanyFromIP = async () => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    return {
      ip: data.ip,
      country: data.country_name || null,
      country_code: data.country_code || null,
      city: data.city || null,
      region: data.region || null,
      timezone: data.timezone || null,
      org: data.org || null,
      isp: data.isp || null,
      latitude: data.latitude || null,
      longitude: data.longitude || null,
    };
  } catch (error) {
    console.warn('Could not fetch IP info:', error);
    return null;
  }
};

// Get referrer information
const getReferrerInfo = () => {
  const referrer = document.referrer;
  return {
    referrer: referrer || null,
    isDirectTraffic: referrer === '',
    isFromGoogle: referrer.includes('google.com'),
    isFromLinkedIn: referrer.includes('linkedin.com'),
    isFromFacebook: referrer.includes('facebook.com'),
    isFromTwitter: referrer.includes('twitter.com'),
  };
};

// Initialize visitor profile
export const initializeVisitorProfile = async () => {
  const visitorId = generateVisitorId();
  const sessionId = getOrCreateSessionId();

  // Get IP and company info
  const ipInfo = await getCompanyFromIP();

  const visitorProfile = {
    visitorId,
    sessionId,
    timestamp: new Date().toISOString(),
    
    // Device & Browser
    device: {
      type: getDeviceType(),
      os: getOperatingSystem(),
      browser: getBrowserName(),
      browserVersion: getBrowserVersion(),
      userAgent: navigator.userAgent,
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      cookiesEnabled: navigator.cookieEnabled,
    },

    // Location & Company
    location: ipInfo ? {
      ip: ipInfo.ip,
      country: ipInfo.country,
      country_code: ipInfo.country_code,
      city: ipInfo.city,
      region: ipInfo.region,
      timezone: ipInfo.timezone,
      latitude: ipInfo.latitude,
      longitude: ipInfo.longitude,
    } : null,
    company: ipInfo?.org || null,

    // Traffic Source
    source: {
      ...getUTMParameters(),
      ...getReferrerInfo(),
    },

    // Behavior (will be updated)
    behavior: {
      pagesVisited: [],
      servicesInterested: [],
      engagementScore: 0,
      scrollDepth: 0,
      timeOnSite: 0,
      formSubmitted: false,
      ctaClicked: [],
    },

    // Timing
    firstVisit: new Date().toISOString(),
    lastActivity: new Date().toISOString(),
  };

  // Store in localStorage
  localStorage.setItem('visitorProfile', JSON.stringify(visitorProfile));

  // Send initial tracking data to backend
  try {
    const res = await fetch(`${getApiBaseUrl()}/api/visitors/track`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(visitorProfile),
    });
    if (!res.ok) {
      console.warn('Could not send visitor profile. Status:', res.status);
    }
  } catch (error) {
    console.warn('Could not send visitor profile:', error);
  }

  return visitorProfile;
};

// Get existing or create new visitor profile
export const getVisitorProfile = async () => {
  let profile = localStorage.getItem('visitorProfile');
  
  if (profile) {
    return JSON.parse(profile);
  } else {
    return await initializeVisitorProfile();
  }
};

// Track page view
export const trackPageView = (pageName, pageData = {}) => {
  const profile = JSON.parse(localStorage.getItem('visitorProfile'));
  
  if (profile) {
    profile.behavior.pagesVisited.push({
      page: pageName,
      timestamp: new Date().toISOString(),
      data: pageData,
    });
    profile.lastActivity = new Date().toISOString();

    // Trim payload to avoid backend 413 (Payload Too Large)
    profile.behavior = sanitizeBehavior(profile.behavior);
    
    localStorage.setItem('visitorProfile', JSON.stringify(profile));
    
    // Send update to backend
    fetch(`${getApiBaseUrl()}/api/visitors/update`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        visitorId: profile.visitorId,
        behavior: profile.behavior,
        lastActivity: profile.lastActivity,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          console.warn('Could not update visitor. Status:', res.status);
        }
      })
      .catch((error) => console.warn('Could not update visitor:', error));
  }
};

// Track service interest
export const trackServiceInterest = (service) => {
  const profile = JSON.parse(localStorage.getItem('visitorProfile'));
  
  if (profile) {
    if (!profile.behavior.servicesInterested.includes(service)) {
      profile.behavior.servicesInterested.push(service);
    }
    profile.behavior.servicesInterested = trimArray(profile.behavior.servicesInterested, 20);
    profile.lastActivity = new Date().toISOString();
    localStorage.setItem('visitorProfile', JSON.stringify(profile));
  }
};

// Track CTA clicks
export const trackCTAClick = (ctaName) => {
  const profile = JSON.parse(localStorage.getItem('visitorProfile'));

  if (!profile) return;

  // Backfill legacy misspelling to avoid runtime errors
  if (!profile.behavior) profile.behavior = {};
  if (!Array.isArray(profile.behavior.ctaClicked)) {
    const legacy = profile.behavior.cctaClicked;
    profile.behavior.ctaClicked = Array.isArray(legacy) ? legacy : [];
  }

  profile.behavior.ctaClicked.push({
    cta: ctaName,
    timestamp: new Date().toISOString(),
  });
  profile.behavior.ctaClicked = trimArray(profile.behavior.ctaClicked, 20);
  profile.lastActivity = new Date().toISOString();
  localStorage.setItem('visitorProfile', JSON.stringify(profile));
};

// Track scroll depth
export const trackScrollDepth = () => {
  const windowHeight = window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;
  const scrolled = window.scrollY;
  const scrollPercent = Math.round(((scrolled + windowHeight) / docHeight) * 100);

  const profile = JSON.parse(localStorage.getItem('visitorProfile'));
  if (profile) {
    profile.behavior.scrollDepth = Math.max(profile.behavior.scrollDepth, scrollPercent);
    localStorage.setItem('visitorProfile', JSON.stringify(profile));
  }
};

// Track time on site
export const trackTimeOnSite = () => {
  const profile = JSON.parse(localStorage.getItem('visitorProfile'));
  
  if (profile) {
    const firstVisit = new Date(profile.firstVisit);
    const now = new Date();
    const timeSpent = Math.floor((now - firstVisit) / 1000); // in seconds
    profile.behavior.timeOnSite = timeSpent;
    localStorage.setItem('visitorProfile', JSON.stringify(profile));
  }
};

// Track form submission
export const trackFormSubmission = (formType, formData = {}) => {
  const profile = JSON.parse(localStorage.getItem('visitorProfile'));
  
  if (profile) {
    profile.behavior.formSubmitted = true;
    profile.lastActivity = new Date().toISOString();
    localStorage.setItem('visitorProfile', JSON.stringify(profile));
    
    // Send detailed form tracking to backend
    fetch(`${getApiBaseUrl()}/api/visitors/form-submission`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        visitorId: profile.visitorId,
        sessionId: profile.sessionId,
        formType,
        formData: {
          email: formData.email || null,
          name: formData.firstname || null,
          phone: formData.phone || null,
          company: formData.company || null,
        },
        timestamp: new Date().toISOString(),
      }),
    }).catch(error => console.warn('Could not track form submission:', error));
  }
};

const visitorTrackingService = {
  initializeVisitorProfile,
  getVisitorProfile,
  trackPageView,
  trackServiceInterest,
  trackCTAClick,
  trackScrollDepth,
  trackTimeOnSite,
  trackFormSubmission,
};

export default visitorTrackingService;
