import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import '../../css/ServiceComparison.css';
import { trackServiceInterest } from '../../services/visitorTracking';

const WebDevComparison = () => {
  const handleCTA = (service) => {
    trackServiceInterest(`webdev_${service}`);
  };

  const serviceOptions = [
    {
      name: 'Website (Brochure/CMS)',
      icon: '📄',
      ideal: 'For businesses that need an online home',
      features: [
        '5-20 pages typically',
        'Content management system (easy updates)',
        'Mobile-responsive design',
        'Basic SEO foundation',
        'Contact forms & lead capture',
        'Blog functionality',
        'GDPR/compliance features'
      ],
      timeline: '4-8 weeks',
      cost: '$$$',
      costDetail: 'One-time build + modest hosting',
      whatYouGet: 'A professional online presence that represents your business. Clients can learn about you, find your services, and reach out. It\'s your digital storefront.',
      notFor: 'Real-time transactions, complex user interactions, or apps.'
    },
    {
      name: 'Web Application (SaaS/Tools)',
      icon: '⚙️',
      ideal: 'For solving real business problems digitally',
      features: [
        'User accounts & authentication',
        'Real-time data processing',
        'Custom workflows',
        'Advanced analytics',
        'API integrations',
        'Scalable architecture',
        'Security & compliance'
      ],
      timeline: '12-20 weeks',
      cost: '$$$$$',
      costDetail: 'Build + ongoing hosting + maintenance',
      whatYouGet: 'A tool that actually does something. Processes data. Manages workflows. Saves your team hours every week. This is your competitive edge.',
      notFor: 'Simple brochure sites or one-off content.'
    },
    {
      name: 'E-commerce Platform',
      icon: '🛒',
      ideal: 'For businesses selling products online',
      features: [
        'Product catalog management',
        'Shopping cart & checkout',
        'Payment processing',
        'Inventory tracking',
        'Order management',
        'Customer analytics',
        'Shipping integrations'
      ],
      timeline: '6-14 weeks',
      cost: '$$$$',
      costDetail: 'Build + payment fees (% per transaction)',
      whatYouGet: 'A storefront that sells 24/7. Handles payments, shipping, customer management. Turns browsers into buyers.',
      notFor: 'Services-only businesses or simple info sites.'
    },
    {
      name: 'Mobile App (iOS/Android)',
      icon: '📱',
      ideal: 'For apps users actually keep on their phones',
      features: [
        'Native performance',
        'Offline functionality',
        'Push notifications',
        'Device hardware access',
        'App store presence',
        'Cross-platform reach',
        'Regular updates'
      ],
      timeline: '16-32 weeks',
      cost: '$$$$$$',
      costDetail: 'Build + app store fees + ongoing maintenance',
      whatYouGet: 'An app that lives on phones. Direct user engagement. Higher conversion. Think of it as a relationship with your users.',
      notFor: 'Anything that could just be a website. Sometimes web apps are smarter.'
    },
    {
      name: 'Web Portal / Dashboard',
      icon: '📊',
      ideal: 'For internal teams or client access',
      features: [
        'Role-based access',
        'Custom reporting',
        'Data visualization',
        'File management',
        'Collaboration tools',
        'Audit trails',
        'White-label options'
      ],
      timeline: '10-16 weeks',
      cost: '$$$$',
      costDetail: 'Build + hosting + maybe per-user fees',
      whatYouGet: 'A command center. Your team (or clients) log in, see what matters, take action. Massive productivity boost.',
      notFor: 'Basic information sharing.'
    }
  ];

  const comparisonMatrix = [
    { aspect: 'Budget', website: 'Low to Medium', app: 'Medium', ecommerce: 'Medium to High', mobile: 'High', portal: 'Medium to High' },
    { aspect: 'Timeline', website: 'Quick', app: 'Moderate', ecommerce: 'Moderate', mobile: 'Longer', portal: 'Moderate' },
    { aspect: 'Complexity', website: 'Simple', app: 'Complex', ecommerce: 'Complex', mobile: 'Very Complex', portal: 'Complex' },
    { aspect: 'Maintenance', website: 'Minimal', app: 'Regular', ecommerce: 'Regular', mobile: 'Ongoing', portal: 'Regular' },
    { aspect: 'ROI Speed', website: 'Immediate', app: 'Medium-term', ecommerce: 'Quick', mobile: 'Longer', portal: 'Immediate' },
    { aspect: 'Scalability', website: 'Good', app: 'Excellent', ecommerce: 'Excellent', mobile: 'Excellent', portal: 'Good' },
  ];

  const decisionFramework = [
    {
      question: 'Do people buy from you online?',
      yes: 'E-commerce or Web App',
      no: 'Website or Portal'
    },
    {
      question: 'Do your users need this on their phones?',
      yes: 'Mobile App or Web App',
      no: 'Website or E-commerce'
    },
    {
      question: 'Are you solving a complex business problem?',
      yes: 'Web App or Portal',
      no: 'Website'
    },
    {
      question: 'Will you need 1,000+ concurrent users?',
      yes: 'Web App or Platform',
      no: 'Website or E-commerce'
    },
  ];

  return (
    <>
      <Helmet>
        <title>Web Development Solutions Comparison | Website vs App vs E-commerce | RioBizSols</title>
        <meta name="description" content="Compare web solutions: websites, web applications, e-commerce, mobile apps, and portals. Find the right tech for your business." />
        <meta name="keywords" content="web development, website vs app, e-commerce platform, web application, mobile app comparison" />
        <meta property="og:title" content="Web Development Solutions Comparison | RioBizSols" />
        <meta property="og:description" content="Choose the right web solution for your business: brochure sites, web apps, e-commerce, mobile apps, or portals." />
        <meta property="og:url" content="https://riobizsols.com/compare/web-development" />
        <link rel="canonical" href="https://riobizsols.com/compare/web-development" />
      </Helmet>

      <div className="comparison-page">
        {/* Hero */}
        <div className="comparison-hero">
          <h1 className="comparison-hero-title">Web Solutions: What Does Your Business Actually Need?</h1>
          <p className="comparison-hero-subtitle">
            Website. App. E-commerce. Portal. Let's cut through the noise and find what fits.
          </p>
        </div>

        {/* Decision Framework */}
        <section className="decision-framework">
          <div className="container">
            <h2>Quick Decision Guide</h2>
            <div className="framework-grid">
              {decisionFramework.map((item, idx) => (
                <div key={idx} className="framework-card">
                  <p className="fw-question">{item.question}</p>
                  <div className="fw-answer">
                    <span className="fw-yes">✓ {item.yes}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="comparison-overview">
          <div className="container">
            <h2>The Five Paths</h2>
            <div className="service-grid">
              {serviceOptions.map((service, idx) => (
                <div key={idx} className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.name}</h3>
                  <p className="service-tagline">{service.ideal}</p>
                  <div className="service-meta">
                    <span className="meta-item">⏱️ {service.timeline}</span>
                    <span className="meta-item">💰 {service.cost}</span>
                  </div>
                  <Link to="/our-service/web-development" className="service-learn-more">Explore →</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Comparison */}
        <section className="comparison-matrix-section">
          <div className="container">
            <h2>The Real Talk Comparison</h2>
            <div className="matrix-wrapper">
              <table className="comparison-matrix">
                <thead>
                  <tr>
                    <th>Criteria</th>
                    {serviceOptions.map((s, i) => <th key={i}>{s.name}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {comparisonMatrix.map((row, idx) => (
                    <tr key={idx}>
                      <td className="matrix-label">{row.aspect}</td>
                      <td>{row.website}</td>
                      <td>{row.app}</td>
                      <td>{row.ecommerce}</td>
                      <td>{row.mobile}</td>
                      <td>{row.portal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Service Deep Dives */}
        <section className="service-deep-dive">
          <div className="container">
            <h2>The Deep Dive</h2>
            <div className="deep-dive-grid">
              {serviceOptions.map((service, idx) => (
                <div key={idx} className="dive-card">
                  <h3>{service.name}</h3>
                  <div className="dive-section">
                    <strong>What you're building:</strong>
                    <p>{service.whatYouGet}</p>
                  </div>
                  <div className="dive-section">
                    <strong>Key features:</strong>
                    <ul className="feature-list">
                      {service.features.map((f, i) => <li key={i}>✓ {f}</li>)}
                    </ul>
                  </div>
                  <div className="dive-section">
                    <strong>Timeline & Cost:</strong>
                    <p>{service.timeline} • {service.costDetail}</p>
                  </div>
                  <div className="dive-section not-for">
                    <strong>⚠️ Not ideal for:</strong>
                    <p>{service.notFor}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="comparison-cta">
          <div className="container">
            <h2>Still Not Sure? Let's Talk It Through.</h2>
            <p>Every business is different. Your needs are unique. Our job is to listen and recommend what actually makes sense—not what's fanciest or most expensive.</p>
            <Link to="/contact" className="cta-button primary" onClick={() => handleCTA('comparison_page')}>
              Schedule a Consultation
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default WebDevComparison;
