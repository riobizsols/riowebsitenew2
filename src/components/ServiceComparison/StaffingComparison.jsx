import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FiCheck, FiX } from 'react-icons/fi';
import '../../css/ServiceComparison.css';
import { trackServiceInterest } from '../../services/visitorTracking';

const StaffingComparison = () => {
  const [selectedTab, setSelectedTab] = useState('overview');

  const handleCTA = (service) => {
    trackServiceInterest(`staffing_${service}`);
  };

  const comparisonData = [
    {
      feature: 'Duration',
      temporary: '3-6 months (typical)',
      permanent: '6+ months to permanent',
      lateral: 'Permanent (strategic)',
      freshhire: 'First-time talent, permanent'
    },
    {
      feature: 'Best for',
      temporary: 'Project spikes, seasonal work',
      permanent: 'Core team expansion',
      lateral: 'Leadership, specialized roles',
      freshhire: 'Entry-level, high-growth scaling'
    },
    {
      feature: 'Hiring timeline',
      temporary: '1-2 weeks',
      permanent: '3-6 weeks',
      lateral: '2-4 weeks',
      freshhire: '3-8 weeks'
    },
    {
      feature: 'Experience level',
      temporary: 'Mid to senior',
      permanent: 'Any level',
      lateral: 'Senior, experienced',
      freshhire: 'Entry-level, recent grads'
    },
    {
      feature: 'Cost structure',
      temporary: 'Per-day/week rates',
      permanent: 'Placement fee (one-time)',
      lateral: 'Placement fee (premium)',
      freshhire: 'Placement fee + training'
    },
    {
      feature: 'Training needs',
      temporary: 'Minimal',
      permanent: 'Varies',
      lateral: 'Quick ramp-up',
      freshhire: 'Full onboarding'
    },
    {
      feature: 'Risk level',
      temporary: 'Low (easy to exit)',
      permanent: 'Medium',
      lateral: 'Low (proven track record)',
      freshhire: 'Medium-High (unproven)'
    },
    {
      feature: 'Long-term cost',
      temporary: 'Higher per unit',
      permanent: 'Lowest over time',
      lateral: 'Premium initially',
      freshhire: 'Lower if retention is high'
    }
  ];

  const serviceOptions = [
    {
      name: 'Temporary Staffing',
      description: 'Your short-term power move',
      icon: '⚡',
      ideal: "When your team needs breathing room or you're testing new roles",
      details: {
        what: 'We bring in experienced professionals for 3-6 months. Think of them as your squad for the sprint.',
        when: 'Project overload? Unexpected departures? Seasonal crunch? Perfect.',
        benefit: 'No long-term commitment. Flexibility to grow or scale back. Your team gets experience without hiring risk.'
      }
    },
    {
      name: 'Permanent Hiring',
      description: 'Building your dream team',
      icon: '🏗️',
      ideal: "When you're ready to grow your core team",
      details: {
        what: 'We find, vet, and place full-time team members. No shortcuts—just the right fit.',
        when: 'Expanding departments, filling critical gaps, or building new teams.',
        benefit: 'One placement fee. Our team sticks around. You invest in your future, and we make sure it sticks.'
      }
    },
    {
      name: 'Lateral Hiring',
      description: 'Proven talent, ready to lead',
      icon: '🎯',
      ideal: 'When you need serious experience fast',
      details: {
        what: 'Senior professionals from your industry. They get it. No handholding required.',
        when: "Leadership roles, specialized skills, or when mediocre just doesn't cut it.",
        benefit: "Track records that speak for themselves. They're ready from day one. Your team gets an instant upgrade."
      }
    },
    {
      name: 'Fresh Hire Program',
      description: "Invest in tomorrow's leaders today",
      icon: '🌱',
      ideal: "When you're scaling fast and building culture",
      details: {
        what: 'Talented newcomers hungry to learn. Fresh energy, genuine enthusiasm, no baggage.',
        when: 'Rapid scaling, entry-level roles, or when you want to shape talent your way.',
        benefit: 'Build loyalty from day one. Save on salaries. Get invested, loyal team members who grow with you.'
      }
    }
  ];

  const useCases = [
    {
      scenario: 'Your API team just landed a huge contract',
      problem: "You need 3 senior developers in 2 weeks. You don't have hiring bandwidth.",
      solution: 'Temporary staffing.',
      why: "Quick turnaround, experienced pros, zero commitment until you're sure the contract delivers."
    },
    {
      scenario: "You're a 10-person startup. You're tripling in size this year.",
      problem: "You need to hire 20+ people, but you don't have an HR team. Culture is everything.",
      solution: 'Permanent hiring + Fresh hire program.',
      why: "We find talent that fits your culture. Fresh hires bring energy and loyalty. You grow with people who believe in your mission."
    },
    {
      scenario: 'Your VP of Engineering just quit. You\'re in panic mode.',
      problem: "You need a leader ASAP. Someone who knows infrastructure, team dynamics, and your industry.",
      solution: 'Lateral hiring.',
      why: "Proven leaders from your space. They've solved your exact problems before. They hit the ground running."
    },
    {
      scenario: 'Your QA team is burned out. Test coverage is slipping.',
      problem: "You need bodies, but you also need people who'll care about quality long-term.",
      solution: 'Fresh hires + training + mentorship.',
      why: "Fresh talent is cheaper. We train them right. In 6 months, they're core. In 2 years, they're leaders."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Staffing Solutions Comparison | Temporary vs Permanent vs Lateral | RioBizSols</title>
        <meta name="description" content="Compare staffing solutions: temporary, permanent, lateral, and fresh hire programs. Find the right staffing strategy for your business growth." />
        <meta name="keywords" content="staffing comparison, temporary staffing, permanent hiring, lateral hire, recruitment strategy" />
        <meta property="og:title" content="Staffing Solutions Comparison | RioBizSols" />
        <meta property="og:description" content="Find the right staffing solution for your needs: temporary, permanent, lateral hiring, or fresh talent programs." />
        <meta property="og:url" content="https://riobizsols.com/compare/staffing" />
        <link rel="canonical" href="https://riobizsols.com/compare/staffing" />
      </Helmet>

      <div className="comparison-page">
        {/* Hero */}
        <div className="comparison-hero">
          <h1 className="comparison-hero-title">Staffing Solutions: Which Path is Right for You?</h1>
          <p className="comparison-hero-subtitle">
            Four ways to grow your team. Same goal: finding humans who actually fit.
          </p>
        </div>

        {/* Quick Overview */}
        <section className="comparison-overview">
          <div className="container">
            <h2>The Quick Version</h2>
            <div className="service-grid">
              {serviceOptions.map((service, idx) => (
                <div key={idx} className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.name}</h3>
                  <p className="service-tagline">{service.description}</p>
                  <p className="service-ideal">{service.ideal}</p>
                  <Link to="/our-service/staffing" className="service-learn-more">Learn more →</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Comparison - Card Based */}
        <section className="comparison-table-section">
          <div className="container">
            <h2>Head-to-Head Breakdown</h2>
            <div className="comparison-cards-grid">
              {comparisonData.map((row, idx) => (
                <div key={idx} className="comparison-feature-card">
                  <h4 className="feature-title">{row.feature}</h4>
                  <div className="feature-options">
                    <div className="feature-option">
                      <span className="option-label">Temporary</span>
                      <p className="option-value">{row.temporary}</p>
                    </div>
                    <div className="feature-option">
                      <span className="option-label">Permanent</span>
                      <p className="option-value">{row.permanent}</p>
                    </div>
                    <div className="feature-option">
                      <span className="option-label">Lateral Hire</span>
                      <p className="option-value">{row.lateral}</p>
                    </div>
                    <div className="feature-option">
                      <span className="option-label">Fresh Hire</span>
                      <p className="option-value">{row.freshhire}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="scenarios-section">
          <div className="container">
            <h2>Real Scenarios. Real Solutions.</h2>
            <p className="section-subtitle">See how our staffing solutions work in the real world</p>
            <div className="scenarios-grid">
              {useCases.map((useCase, idx) => (
                <div key={idx} className="scenario-card">
                  <div className="scenario-number">{String(idx + 1).padStart(2, '0')}</div>
                  <h3 className="scenario-title">{useCase.scenario}</h3>
                  <div className="scenario-detail problem-detail">
                    <span className="detail-badge problem-badge">Problem</span>
                    <p>{useCase.problem}</p>
                  </div>
                  <div className="scenario-detail solution-detail">
                    <span className="detail-badge solution-badge">Solution</span>
                    <p className="solution-text">{useCase.solution}</p>
                  </div>
                  <div className="scenario-detail why-detail">
                    <span className="detail-badge why-badge">Impact</span>
                    <p>{useCase.why}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="dive-deeper-section">
          <div className="container">
            <h2>Dive Deeper</h2>
            <p className="section-subtitle">Everything you need to know about each staffing solution</p>
            <div className="dive-grid">
              {serviceOptions.map((service, idx) => (
                <div key={idx} className="dive-service-card">
                  <div className="service-header">
                    <span className="service-emoji">{service.icon}</span>
                    <h3>{service.name}</h3>
                  </div>
                  <div className="service-details">
                    <div className="detail-block">
                      <h4 className="detail-heading">What is it?</h4>
                      <p>{service.details.what}</p>
                    </div>
                    <div className="detail-block">
                      <h4 className="detail-heading">When do you need it?</h4>
                      <p>{service.details.when}</p>
                    </div>
                    <div className="detail-block highlight-block">
                      <h4 className="detail-heading">The upside?</h4>
                      <p>{service.details.benefit}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="comparison-cta">
          <div className="container">
            <h2>Ready to Talk About Your Hiring?</h2>
            <p>Not sure which option fits? Let's figure it out together. No pressure, no jargon—just real talk about what your team needs.</p>
            <Link to="/contact" className="cta-button primary" onClick={() => handleCTA('comparison_page')}>
              Let's Chat
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default StaffingComparison;
