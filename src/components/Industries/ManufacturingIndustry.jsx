import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import '../../css/IndustryLanding.css';
import { trackServiceInterest } from '../../services/visitorTracking';

const ManufacturingIndustry = () => {
  const handleCTA = (action) => {
    trackServiceInterest(`manufacturing_${action}`);
  };

  const challenges = [
    {
      icon: '🏭',
      title: 'We\'re Drowning in Manual Processes',
      description: 'Inventory is tracked in spreadsheets. Maintenance logs are on paper. Quality records are a nightmare. Someone knows where everything is—but it\'s in their head.',
      solution: 'Odoo ERP with inventory management, maintenance tracking, and quality control modules'
    },
    {
      icon: '⚙️',
      title: 'Equipment Breaks and We Lose Millions',
      description: 'Unplanned downtime kills margins. Preventive maintenance is guesswork. You\'re reactive, not proactive.',
      solution: 'Maintenance management systems, IoT tracking, predictive maintenance planning'
    },
    {
      icon: '📊',
      title: 'We Have No Visibility Into Production',
      description: 'Is production on schedule? Which batch has quality issues? Where\'s the bottleneck? Nobody really knows.',
      solution: 'Real-time production tracking, quality dashboards, bottleneck analysis'
    },
    {
      icon: '👷',
      title: 'We Can\'t Find Skilled Workers',
      description: 'Turnover is high. Contractors are expensive. You need machine operators, welders, electricians—and they\'re hard to find.',
      solution: 'Staffing solutions, contractor placement, training partnerships'
    },
    {
      icon: '📦',
      title: 'Supply Chain is a Black Box',
      description: 'You don\'t know where materials are. Suppliers are hard to track. Lead times are unpredictable. You\'re always surprised.',
      solution: 'Supply chain visibility, vendor management, demand forecasting'
    },
    {
      icon: '💼',
      title: 'We\'re Not a "Tech Company" So We Got Left Behind',
      description: 'You know manufacturing. But digital transformation feels overwhelming. Where do you even start?',
      solution: 'Expert guidance, Odoo implementation, change management, training'
    }
  ];

  const solutions = [
    {
      name: 'Odoo ERP for Manufacturing',
      what: 'Inventory, production, maintenance, finances—all connected in one system.',
      outcomes: 'Track everything. Know what you have. Know what you need. Know what\'s broken.'
    },
    {
      name: 'Staffing Solutions',
      what: 'Find skilled workers for production, maintenance, and supervisory roles. Temporary or permanent.',
      outcomes: 'Reduce turnover. Fill gaps quickly. Build your bench strength.'
    },
    {
      name: 'Custom Web Applications',
      what: 'Custom dashboards, mobile apps for floor workers, real-time production tracking.',
      outcomes: 'Your team sees what matters. Decisions are based on data, not guessing.'
    },
    {
      name: 'Quality & Compliance',
      what: 'Systems to track quality, compliance documentation, and audit trails.',
      outcomes: 'Regulatory ready. Customer confidence. Fewer recalls and rework.'
    },
    {
      name: 'Supply Chain Consulting',
      what: 'Visibility into suppliers, lead times, demand forecasting.',
      outcomes: 'Right materials, right time. Inventory costs down. Production stays smooth.'
    }
  ];

  const implementationPath = [
    {
      phase: 'Assessment',
      timeline: '2-4 weeks',
      what: 'We audit your current processes, systems, and pain points. We interview operations, maintenance, and finance teams.',
      goal: 'Clear roadmap for what to fix first'
    },
    {
      phase: 'Quick Wins',
      timeline: '1-3 months',
      what: 'Fix the most painful manual processes. Get immediate wins. Build momentum.',
      goal: 'Prove the value of digitization'
    },
    {
      phase: 'ERP Implementation',
      timeline: '3-6 months',
      what: 'Roll out Odoo with inventory, production, maintenance, and finance modules. Train your team.',
      goal: 'Single source of truth for all operations'
    },
    {
      phase: 'Optimization',
      timeline: 'Ongoing',
      what: 'Monitor, improve, and add advanced features. Mobile apps for floor workers. Real-time dashboards.',
      goal: 'Continuous efficiency gains'
    }
  ];

  const realManufacturing = [
    {
      company: 'Metal Fabrication Shop (50 employees)',
      problem: 'Inventory was chaos. Maintenance reactive. Quality tracking was non-existent. Margins eroding.',
      solution: 'Odoo with inventory tracking, maintenance scheduling, quality control modules. Mobile app for operators.',
      result: 'Inventory accuracy 95% (was 60%). Downtime cut 40%. Quality scrap down 35%. ROI in 14 months.'
    },
    {
      company: 'Food Processing Plant (100+ employees)',
      problem: 'Staffing is constant struggle. Seasonal swings. Compliance tracking is manual. Audits are nightmares.',
      solution: 'Staffing for seasonal workers. Odoo for compliance documentation. Custom compliance dashboards.',
      result: 'Seasonal staffing fills in 1 week (was 3 weeks). Compliance audit pass on first try. Payroll automated.'
    },
    {
      company: 'Automotive Parts Supplier',
      problem: 'Supply chain is opaque. Can\'t forecast demand. Suppliers aren\'t transparent. Delivering late.',
      solution: 'Supply chain visibility system. Demand forecasting. Supplier portal. Custom dashboard.',
      result: 'On-time delivery 98% (was 82%). Inventory optimized. Lead times predictable.'
    }
  ];

  const whyChoose = [
    {
      title: 'We Understand Manufacturing',
      description: 'We\'ve worked with dozens of plants. We know equipment downtime costs money. Compliance isn\'t optional. Worker safety matters.'
    },
    {
      title: 'We Implement Practical Systems',
      description: 'Not fancy tech that doesn\'t work on the floor. Practical tools your team actually uses. Odoo works for manufacturing.'
    },
    {
      title: 'We Speak Your Language',
      description: 'Margins. Efficiency. Compliance. ROI. We don\'t use jargon. We tell you exactly what something costs and what you get.'
    },
    {
      title: 'We Manage the Implementation',
      description: 'You run your plant. We handle the tech transition. We train your team. We don\'t leave until it\'s working.'
    },
    {
      title: 'We Help You Compete',
      description: 'Bigger competitors have systems. You need them too. Digital manufacturing isn\'t optional anymore.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Manufacturing Solutions | ERP, Inventory, Maintenance, Staffing | RioBizSols</title>
        <meta name="description" content="Digital transformation for manufacturers. Odoo ERP, inventory management, maintenance tracking, and skilled staffing solutions." />
        <meta name="keywords" content="manufacturing ERP, Odoo manufacturing, inventory management, maintenance management, manufacturing staffing" />
        <meta property="og:title" content="Manufacturing Business Solutions | RioBizSols" />
        <meta property="og:description" content="Get control of your operations. Modern systems for inventory, production, maintenance, and staffing." />
        <meta property="og:url" content="https://riobizsols.com/industry/manufacturing" />
        <link rel="canonical" href="https://riobizsols.com/industry/manufacturing" />
      </Helmet>

      <div className="industry-landing">
        {/* Hero */}
        <section className="industry-hero manufacturing">
          <div className="hero-content">
            <h1>Stop Running Your Plant on Spreadsheets.</h1>
            <p>You manage a complex operation. You deserve systems that actually work. Real-time visibility. Less paperwork. Better margins.</p>
            <div className="hero-ctas">
              <Link to="/contact" className="cta-primary" onClick={() => handleCTA('hero_contact')}>
                Get a Free Operations Audit
              </Link>
              <Link to="/our-service/odoo" className="cta-secondary">
                Learn About Odoo ERP
              </Link>
            </div>
          </div>
          <div className="hero-background">
            <div className="hero-shape"></div>
          </div>
        </section>

        {/* Challenges */}
        <section className="challenges-section">
          <div className="container">
            <h2>The Manufacturing Reality</h2>
            <p className="section-intro">Sound familiar? These are the problems we solve for manufacturers.</p>
            <div className="challenges-grid">
              {challenges.map((challenge, idx) => (
                <div key={idx} className="challenge-card">
                  <div className="challenge-icon">{challenge.icon}</div>
                  <h3>{challenge.title}</h3>
                  <p className="challenge-text">{challenge.description}</p>
                  <p className="challenge-solution"><strong>We solve it with:</strong> {challenge.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="services-mapping">
          <div className="container">
            <h2>Our Manufacturing Solutions</h2>
            <div className="services-grid">
              {solutions.map((solution, idx) => (
                <div key={idx} className="service-mapping-card">
                  <h3>{solution.name}</h3>
                  <p className="service-why">{solution.what}</p>
                  <p className="service-impact">✓ {solution.outcomes}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Path */}
        <section className="timeline-section">
          <div className="container">
            <h2>How We Do This</h2>
            <p className="section-intro">We don't just drop a system and leave. We implement it. We train your team. We make it work.</p>
            <div className="timeline-grid">
              {implementationPath.map((phase, idx) => (
                <div key={idx} className="timeline-card">
                  <h4 className="phase-name">{phase.phase}</h4>
                  <p className="phase-goal"><strong>Timeline:</strong> {phase.timeline}</p>
                  <p className="phase-what">{phase.what}</p>
                  <p className="phase-goal"><strong>Goal:</strong> {phase.goal}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Real Stories */}
        <section className="scenarios-section">
          <div className="container">
            <h2>Real Manufacturing Success</h2>
            <div className="scenarios-grid">
              {realManufacturing.map((story, idx) => (
                <div key={idx} className="scenario-card">
                  <h4>{story.company}</h4>
                  <div className="scenario-part">
                    <strong>The Challenge:</strong>
                    <p>{story.problem}</p>
                  </div>
                  <div className="scenario-part">
                    <strong>Our Approach:</strong>
                    <p>{story.solution}</p>
                  </div>
                  <div className="scenario-part result">
                    <strong>The Results:</strong>
                    <p>{story.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="why-choose-section">
          <div className="container">
            <h2>Why Manufacturers Choose RioBizSols</h2>
            <div className="why-grid">
              {whyChoose.map((item, idx) => (
                <div key={idx} className="why-card">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta">
          <div className="container">
            <h2>Ready to Modernize?</h2>
            <p>Your plant runs on smart people doing manual work. Give them better tools. Get better results.</p>
            <Link to="/contact" className="cta-primary large" onClick={() => handleCTA('final_cta')}>
              Schedule Your Operations Review
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default ManufacturingIndustry;
