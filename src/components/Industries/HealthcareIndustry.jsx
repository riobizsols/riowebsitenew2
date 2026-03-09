import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../../css/IndustryLanding.css';
import { trackServiceInterest } from '../../services/visitorTracking';

const HealthcareIndustry = () => {
  const handleCTA = (action) => {
    trackServiceInterest(`healthcare_${action}`);
  };

  const painPoints = [
    {
      icon: '🏥',
      title: 'Administrative Work is Crushing Your Clinical Time',
      description: 'Staff spends half their day on paperwork, scheduling, and data entry. Time that should be patient care is lost to admin work.',
      solution: 'Practice management systems, appointment scheduling, electronic health records integration'
    },
    {
      icon: '📋',
      title: 'We\'re Not HIPAA Compliant and It Scares Us',
      description: 'Patient data is everywhere—email, spreadsheets, USB drives. One breach and you\'re done. Compliance feels overwhelming.',
      solution: 'Secure systems, compliance audits, secure data storage, access controls'
    },
    {
      icon: '💼',
      title: 'Staffing is Our Biggest Challenge',
      description: 'Finding nurses, medical assistants, and specialists is a nightmare. Turnover is high. Coverage is always tight.',
      solution: 'Specialized healthcare staffing, temporary and permanent placements, pre-vetted candidates'
    },
    {
      icon: '💰',
      title: 'We\'re Hemorrhaging Money on Inefficiency',
      description: 'Insurance claims are processed manually. Billing mistakes are constant. Patients get charged wrong. Collections are a nightmare.',
      solution: 'Billing system automation, claims processing, revenue cycle management'
    },
    {
      icon: '📊',
      title: 'We Have No Idea If We\'re Actually Running Efficiently',
      description: 'You don\'t have real data on costs per patient, revenue per provider, or operational efficiency.',
      solution: 'Healthcare analytics, operational dashboards, performance metrics'
    },
    {
      icon: '🌐',
      title: 'Patients Want Online Booking and We Can\'t Deliver',
      description: 'Your competitors have online scheduling, patient portals, and telehealth. You still have a phone line.',
      solution: 'Patient portal development, online booking, telehealth platform integration'
    }
  ];

  const services = [
    {
      name: 'Practice Management Systems',
      what: 'Odoo-based systems for scheduling, patient records, billing, and compliance.',
      benefit: 'Reduce admin work 60%. Improve patient experience. Better compliance.'
    },
    {
      name: 'Healthcare Staffing',
      what: 'Nurses, medical assistants, specialists—temporary or permanent. Pre-vetted and experienced.',
      benefit: 'Fill shifts in 48-72 hours. Reduce burnout. Improve staff retention.'
    },
    {
      name: 'Patient Portal Development',
      what: 'Custom patient portals, online booking, telehealth integration.',
      benefit: 'Improve patient satisfaction. Reduce no-shows. Enable remote care.'
    },
    {
      name: 'Billing & Revenue Cycle',
      what: 'Automated billing, claims processing, insurance management.',
      benefit: 'Reduce claim denials. Improve cash flow. Cut billing errors.'
    },
    {
      name: 'HIPAA Compliance',
      what: 'Secure data handling, compliance audits, staff training.',
      benefit: 'Sleep at night. Protect patient data. Avoid penalties.'
    }
  ];

  const organizationJourney = [
    {
      type: 'Small Practice (1-5 providers)',
      focus: 'Admin automation, compliance, basic analytics',
      pain: 'Manual scheduling, billing errors, compliance concerns'
    },
    {
      type: 'Growing Practice (5-20 providers)',
      focus: 'Staffing solutions, patient portal, revenue optimization',
      pain: 'Staffing gaps, patient expectations, efficiency'
    },
    {
      type: 'Large Practice/Clinic Network (20+ providers)',
      focus: 'Advanced analytics, multi-location management, telehealth',
      pain: 'Scaling operations, maintaining standards, competitive pressure'
    },
    {
      type: 'Specialty Healthcare',
      focus: 'Specialized workflows, compliance requirements, patient engagement',
      pain: 'Regulatory complexity, staff expertise, patient retention'
    }
  ];

  const realCases = [
    {
      facility: 'Pediatric Clinic (12 providers)',
      problem: 'Admin staff working 50+ hour weeks on scheduling and billing. Billing errors 15%. Patient no-shows 25%. Compliance anxiety.',
      solution: 'Odoo practice management system. Online booking portal. Automated billing reminders. HIPAA-compliant infrastructure.',
      result: 'Admin work down 40%. Billing errors 2%. No-shows 8%. Passed compliance audit with zero findings.'
    },
    {
      facility: 'Primary Care Network (5 locations, 30 providers)',
      problem: 'Can\'t find good coverage. Agency fees are killing margins. Retention terrible. Each location using different systems.',
      solution: 'Staffing partnership for consistent hiring. Unified Odoo system across all locations. Staff cross-training.',
      result: 'Turnover down 35%. Agency fees cut 50%. System unified. Staff satisfaction up 40%.'
    },
    {
      facility: 'Specialty Surgery Center',
      problem: 'Patients want telehealth and online booking. Pre-op paperwork is still being printed. Insurance denials at 12%.',
      solution: 'Telehealth integration. Digital pre-op forms. Insurance verification automation. Patient portal.',
      result: 'Patient satisfaction scores up 35%. Insurance denials 4%. Paperwork 90% digital. Telehealth launched.'
    }
  ];

  const whyChoose = [
    {
      title: 'We Understand Healthcare',
      description: 'HIPAA compliance, clinical workflows, insurance complexity, staffing shortages—we\'ve solved these problems repeatedly.'
    },
    {
      title: 'We Focus on Patient Care',
      description: 'Better systems mean less admin work. Less admin work means more time with patients. That\'s what matters.'
    },
    {
      title: 'We Know Your Business Model',
      description: 'Insurance reimbursements. Compliance costs. Staffing constraints. We build systems that work within your reality.'
    },
    {
      title: 'We\'re Compliant',
      description: 'HIPAA, security, data protection—it\'s built into everything we do. Not an afterthought.'
    },
    {
      title: 'We Help You Compete',
      description: 'Patients expect modern healthcare experiences. We help you deliver them without breaking compliance or budgets.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Healthcare Solutions | Practice Management, Staffing, Telehealth | RioBizSols</title>
        <meta name="description" content="Healthcare IT solutions: practice management systems, staffing, patient portals, telehealth, and HIPAA-compliant infrastructure." />
        <meta name="keywords" content="healthcare IT, practice management, medical staffing, telehealth platform, HIPAA compliance, patient portal" />
        <meta property="og:title" content="Healthcare Business Solutions | RioBizSols" />
        <meta property="og:description" content="Modern systems for modern healthcare. Practice management, staffing, compliance, and patient engagement." />
        <meta property="og:url" content="https://riobizsols.com/industry/healthcare" />
        <link rel="canonical" href="https://riobizsols.com/industry/healthcare" />
      </Helmet>

      <div className="industry-landing">
        {/* Hero */}
        <section className="industry-hero healthcare">
          <div className="hero-content">
            <h1>Modern Systems for Modern Healthcare.</h1>
            <p>Stop drowning in admin work. Get compliant. Find good staff. Let your team focus on what matters—patient care.</p>
            <div className="hero-ctas">
              <Link to="/contact" className="cta-primary" onClick={() => handleCTA('hero_contact')}>
                Let's Discuss Your Challenges
              </Link>
              <Link to="/our-service/odoo" className="cta-secondary">
                Learn About Our Platform
              </Link>
            </div>
          </div>
          <div className="hero-background">
            <div className="hero-shape"></div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="challenges-section">
          <div className="container">
            <h2>The Healthcare Challenge</h2>
            <p className="section-intro">You\'re managing complex operations while delivering care. That\'s hard. Let\'s fix the tech part.</p>
            <div className="challenges-grid">
              {painPoints.map((point, idx) => (
                <div key={idx} className="challenge-card">
                  <div className="challenge-icon">{point.icon}</div>
                  <h3>{point.title}</h3>
                  <p className="challenge-text">{point.description}</p>
                  <p className="challenge-solution"><strong>Solution:</strong> {point.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="services-mapping">
          <div className="container">
            <h2>How We Help Healthcare Organizations</h2>
            <div className="services-grid">
              {services.map((service, idx) => (
                <div key={idx} className="service-mapping-card">
                  <h3>{service.name}</h3>
                  <p className="service-why">{service.what}</p>
                  <p className="service-impact">✓ {service.benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Organization Journey */}
        <section className="timeline-section">
          <div className="container">
            <h2>Solutions for Every Size</h2>
            <p className="section-intro">Whether you\'re a single practice or a network, we scale with you.</p>
            <div className="timeline-grid">
              {organizationJourney.map((org, idx) => (
                <div key={idx} className="timeline-card">
                  <h4 className="phase-name">{org.type}</h4>
                  <p className="phase-goal"><strong>Our Focus:</strong> {org.focus}</p>
                  <p className="phase-what"><strong>Your Pain:</strong> {org.pain}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Real Cases */}
        <section className="scenarios-section">
          <div className="container">
            <h2>Real Healthcare Success</h2>
            <div className="scenarios-grid">
              {realCases.map((case_, idx) => (
                <div key={idx} className="scenario-card">
                  <h4>{case_.facility}</h4>
                  <div className="scenario-part">
                    <strong>The Challenge:</strong>
                    <p>{case_.problem}</p>
                  </div>
                  <div className="scenario-part">
                    <strong>What We Built:</strong>
                    <p>{case_.solution}</p>
                  </div>
                  <div className="scenario-part result">
                    <strong>The Impact:</strong>
                    <p>{case_.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="why-choose-section">
          <div className="container">
            <h2>Why Healthcare Chooses RioBizSols</h2>
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
            <h2>Ready to Modernize Your Practice?</h2>
            <p>Less admin. Better systems. More time for patients. Let\'s make that happen.</p>
            <Link to="/contact" className="cta-primary large" onClick={() => handleCTA('final_cta')}>
              Schedule a Healthcare Strategy Call
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default HealthcareIndustry;
