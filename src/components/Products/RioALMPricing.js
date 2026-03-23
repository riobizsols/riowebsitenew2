import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './RioALMPricing.css';
import { FaCheckCircle, FaQuestionCircle, FaGlobe, FaServer, FaShieldAlt, FaMobile, FaChartLine, FaClipboardList, FaUserTie, FaPlug } from 'react-icons/fa';

// ============================================================================
// PRICING CONFIG - EASY TO EDIT
// ============================================================================
const PRICING_CONFIG = {
  inr: {
    currency: '₹',
    currencyCode: 'INR',
    region: 'India (INR)',
    plans: {
      single: {
        name: 'Single Site',
        sites: '1 site',
        price: '3,49,000',
        priceRaw: 349000,
        highlight: false,
        description: 'Perfect for single-location operations'
      },
      multi: {
        name: 'Multi Site',
        sites: 'Up to 5 sites',
        price: '7,99,000',
        priceRaw: 799000,
        highlight: true,
        description: 'Most popular for growing businesses'
      },
      enterprise: {
        name: 'Enterprise / Chain',
        sites: 'Up to 15 sites',
        price: '14,99,000',
        priceRaw: 1499000,
        highlight: false,
        description: 'For large-scale multi-location operations'
      }
    },
    additionalSites: {
      multi: '₹60,000 per additional site',
      enterprise: '₹45,000 per additional site'
    },
    amc: '12% of license value per year (from Year 2)',
    hosting: {
      prod: '₹1,20,000/year',
      devProd: '₹2,10,000/year'
    },
    notes: {
      taxes: 'Taxes extra as applicable (GST).',
      integrations: 'Integrations billed based on scope.'
    }
  },
  usd: {
    currency: '$',
    currencyCode: 'USD',
    region: 'International (USD)',
    plans: {
      single: {
        name: 'Single Site',
        sites: '1 site',
        price: '4,500',
        priceRaw: 4500,
        highlight: false,
        description: 'Perfect for single-location operations'
      },
      multi: {
        name: 'Multi Site',
        sites: 'Up to 5 sites',
        price: '10,500',
        priceRaw: 10500,
        highlight: true,
        description: 'Most popular for growing businesses'
      },
      enterprise: {
        name: 'Enterprise / Chain',
        sites: 'Up to 15 sites',
        price: '19,500',
        priceRaw: 19500,
        highlight: false,
        description: 'For large-scale multi-location operations'
      }
    },
    additionalSites: {
      multi: '$750 per additional site',
      enterprise: '$600 per additional site'
    },
    amc: '12% of license value per year (from Year 2)',
    hosting: {
      prod: '$1,500/year',
      devProd: '$2,500/year'
    },
    notes: {
      taxes: 'Taxes extra as applicable.',
      integrations: 'Integrations billed based on scope.'
    }
  }
};

// ============================================================================
// FEATURES DATA
// ============================================================================
const FEATURES_DATA = [
  {
    icon: <FaClipboardList />,
    title: 'Centralized Asset Repository',
    desc: 'Multi-location ready, organize assets by department, location, or custom attributes'
  },
  {
    icon: <FaChartLine />,
    title: 'Preventive Maintenance Scheduling',
    desc: 'Auto-scheduled maintenance with reminders, SLA tracking, and compliance proof'
  },
  {
    icon: <FaClipboardList />,
    title: 'Work Orders & Breakdown Maintenance',
    desc: 'Instant work order creation, technician assignment, status tracking'
  },
  {
    icon: <FaUserTie />,
    title: 'Vendor-Managed Workflows',
    desc: 'Manage vendor contracts, AMC/CMC, SLAs, and expiry alerts in one place'
  },
  {
    icon: <FaShieldAlt />,
    title: 'Contract Management (AMC/CMC)',
    desc: 'Track vendor agreements, auto-renew alerts, SLA monitoring'
  },
  {
    icon: <FaGlobe />,
    title: 'Multi-Location Asset Tracking',
    desc: 'Department-wise, employee-wise, floor-wise, location-wise organization'
  },
  {
    icon: <FaMobile />,
    title: 'Mobile QR/Barcode Scanning',
    desc: 'Update maintenance, asset details on-site with mobile app'
  },
  {
    icon: <FaShieldAlt />,
    title: 'Audit-Ready Compliance Logs',
    desc: 'Complete audit trail, evidence repository, regulatory compliance'
  },
  {
    icon: <FaChartLine />,
    title: 'Asset Depreciation & Reporting',
    desc: 'Financial reporting, export-ready, MTTR/MTBF analysis'
  },
  {
    icon: <FaClipboardList />,
    title: 'Scrap & Disposal Tracking',
    desc: 'Track scrap assets, disposal records, scrap sales optional module'
  },
  {
    icon: <FaShieldAlt />,
    title: 'Role-Based Access Control',
    desc: 'Customize menu visibility, screen access by role'
  },
  {
    icon: <FaClipboardList />,
    title: 'Configurable Workflows',
    desc: 'Design custom approval workflows, define business logic'
  },
  {
    icon: <FaClipboardList />,
    title: 'Custom Fields & Smart Grouping',
    desc: 'Define custom fields per asset type, intelligent linkage'
  },
  {
    icon: <FaChartLine />,
    title: 'Dashboards & Reports',
    desc: 'Downtime tracking, MTTR/MTBF metrics, SLA response times'
  },
  {
    icon: <FaGlobe />,
    title: 'Multilingual UI',
    desc: 'Support for multiple languages, global operations ready'
  },
  {
    icon: <FaPlug />,
    title: 'Integration-Ready',
    desc: 'Connect to HMS, ERP, Inventory, Finance systems (scope-based)'
  }
];

// ============================================================================
// DEPLOYMENT OPTIONS
// ============================================================================
const DEPLOYMENT_OPTIONS = [
  {
    title: 'Customer-Hosted',
    subtitle: 'On-Premise / Private Cloud',
    badge: 'Full Control',
    description: 'You host it; we implement & support',
    bestFor: 'Data control, compliance, internal IT',
    includes: [
      'Installation & setup',
      'Security hardening guidance',
      'Backup configuration guidance',
      'Ongoing technical support'
    ]
  },
  {
    title: 'RIO-Hosted Private Cloud',
    subtitle: 'Secure, Managed Hosting',
    badge: 'Fast Rollout',
    description: 'We host; you focus on operations',
    bestFor: 'Fast deployment, minimal IT overhead',
    includes: [
      '99.5% uptime SLA',
      'Automated backups',
      'Security monitoring',
      'Optional from Year 2'
    ]
  },
  {
    title: 'Hybrid',
    subtitle: 'Central + Local Flexibility',
    badge: 'Flexible',
    description: 'Central governance + local workflows',
    bestFor: 'Chains with multiple locations, varied needs',
    includes: [
      'Central dashboard',
      'Local data retention',
      'Custom integration',
      'Scalable architecture'
    ]
  }
];

// ============================================================================
// RIO ALM PRICING COMPONENT
// ============================================================================
export default function RioALMPricing() {
  const [region, setRegion] = useState(null);
  const [expandedPlan, setExpandedPlan] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Detect region on mount
  useEffect(() => {
    const savedRegion = localStorage.getItem('rioAlmRegion');
    if (savedRegion) {
      setRegion(savedRegion);
    } else {
      // Try geolocation - default to India if available, else International
      detectRegion();
    }
  }, []);

  const detectRegion = async () => {
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      const country = data.country_code;
      
      if (country === 'IN') {
        setRegion('inr');
      } else {
        setRegion('usd');
      }
    } catch (error) {
      // Fallback: International (USD)
      setRegion('usd');
    }
  };

  const handleRegionChange = (newRegion) => {
    setRegion(newRegion);
    localStorage.setItem('rioAlmRegion', newRegion);
  };

  if (!region) {
    return <div className="pricing-loading">Loading pricing...</div>;
  }

  const config = region === 'inr' ? PRICING_CONFIG.inr : PRICING_CONFIG.usd;

  return (
    <div className="rio-pricing-page">
      {/* ===== HERO SECTION ===== */}
      <section className="pricing-hero">
        <div className="pricing-hero-inner">
          <div className="pricing-hero-container">
            <div className="pricing-hero-left">
              <h1 className="pricing-hero-title">
                RIO ALM Pricing<br />
                <span className="subtitle-small">Per-Site Licensing, Flexible Deployment</span>
              </h1>
              <div className="pricing-hero-ctas">
                <Link to="/products/rio-alm/contact" className="btn btn-primary-large">
                  Book a Demo
                </Link>
                <Link to="/products/rio-alm/contact" className="btn btn-secondary-large">
                  Get a Proposal
                </Link>
              </div>
            </div>
            <div className="pricing-hero-right">
              <ul className="pricing-hero-points">
                <li>Site-based pricing (not per-user). Unlimited users & assets included.</li>
                <li>Customer-hosted (on-prem/private cloud) or RIO-hosted private cloud.</li>
              </ul>
              <div className="trust-strip">
                <span>✓ Unlimited Users</span>
                <span>✓ Unlimited Assets</span>
                <span>✓ Role-Based Access</span>
                <span>✓ Audit-Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== REGION SWITCHER ===== */}
      <section className="region-switcher-section">
        <div className="pricing-container">
          <p className="region-note">
            Prices shown are based on your region. You can switch anytime.
          </p>
          <div className="region-toggle">
            <button
              className={`region-btn ${region === 'inr' ? 'active' : ''}`}
              onClick={() => handleRegionChange('inr')}
            >
              🇮🇳 India (INR)
            </button>
            <button
              className={`region-btn ${region === 'usd' ? 'active' : ''}`}
              onClick={() => handleRegionChange('usd')}
            >
              🌍 International (USD)
            </button>
          </div>
        </div>
      </section>

      {/* ===== PRICING CARDS ===== */}
      <section className="pricing-cards-section">
        <div className="pricing-container">
          <h2 className="section-title">Choose Your Plan</h2>
          
          <div className="pricing-cards-grid">
            {Object.entries(config.plans).map(([key, plan]) => (
              <div
                key={key}
                className={`pricing-card ${plan.highlight ? 'highlight' : ''}`}
              >
                {plan.highlight && <div className="badge-popular">Most Popular</div>}
                
                <h3 className="card-plan-name">{plan.name}</h3>
                <p className="card-description">{plan.description}</p>
                
                <div className="card-sites">
                  <span className="sites-badge">{plan.sites}</span>
                </div>

                <div className="card-price">
                  <span className="currency">{config.currency}</span>
                  <span className="amount">{plan.price}</span>
                  <span className="period">one-time</span>
                </div>

                <div className="card-highlights">
                  <div className="highlight-item">
                    <FaCheckCircle /> Unlimited Users
                  </div>
                  <div className="highlight-item">
                    <FaCheckCircle /> Unlimited Assets
                  </div>
                  <div className="highlight-item">
                    <FaCheckCircle /> Role-Based Access
                  </div>
                  <div className="highlight-item">
                    <FaCheckCircle /> Audit Logs
                  </div>
                </div>

                <div className="card-ctas">
                  <Link to="/products/rio-alm/contact" className="btn btn-primary">
                    Book Demo
                  </Link>
                  <Link to="/products/rio-alm/contact" className="btn btn-outline">
                    Get Proposal
                  </Link>
                </div>

                <div
                  className="card-details-toggle"
                  onClick={() => setExpandedPlan(expandedPlan === key ? null : key)}
                >
                  <span>Plan Details</span>
                  <span className={`arrow ${expandedPlan === key ? 'open' : ''}`}>▼</span>
                </div>

                {expandedPlan === key && (
                  <div className="card-details-content">
                    <div className="detail-group">
                      <strong>What's Included:</strong>
                      <ul>
                        <li>Centralized asset repository</li>
                        <li>Preventive & breakdown maintenance</li>
                        <li>Mobile QR/barcode scanning</li>
                        <li>AMC/CMC contract management</li>
                        <li>Multi-location dashboards</li>
                        <li>Role-based access control</li>
                        <li>Audit-ready compliance logs</li>
                        <li>Custom workflows & fields</li>
                        <li>Asset depreciation tracking</li>
                        <li>Integration-ready architecture</li>
                      </ul>
                    </div>
                    {key === 'multi' && (
                      <div className="detail-group">
                        <strong>Additional Sites:</strong>
                        <p>{config.additionalSites.multi}</p>
                      </div>
                    )}
                    {key === 'enterprise' && (
                      <div className="detail-group">
                        <strong>Additional Sites:</strong>
                        <p>{config.additionalSites.enterprise}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT'S INCLUDED ===== */}
      <section className="whats-included-section">
        <div className="pricing-container">
          <div className="whats-heading-row">
            <h2 className="section-title">What's Included in All Plans</h2>
            <p className="section-subtitle">
              Every RIO ALM license includes unlimited users, unlimited assets, and all core features.
            </p>
          </div>

          <div className="features-grid">
            {FEATURES_DATA.map((feature, idx) => (
              <div key={idx} className="feature-item">
                <div className="feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DEPLOYMENT OPTIONS ===== */}
      <section className="deployment-section">
        <div className="pricing-container">
          <div className="deployment-heading-row">
            <h2 className="section-title">Choose Your Deployment</h2>
            <p className="section-subtitle">
              Flexibility to match your infrastructure and operations needs.
            </p>
          </div>

          <div className="deployment-grid">
            {DEPLOYMENT_OPTIONS.map((option, idx) => (
              <div key={idx} className="deployment-card">
                <div className="deployment-badge">{option.badge}</div>
                <h3>{option.title}</h3>
                <p className="deployment-subtitle-text">{option.subtitle}</p>
                <p className="deployment-description">{option.description}</p>
                
                <div className="deployment-bestfor">
                  <strong>Best For:</strong>
                  <p>{option.bestFor}</p>
                </div>

                <div className="deployment-includes">
                  <strong>Includes:</strong>
                  <ul>
                    {option.includes.map((item, i) => (
                      <li key={i}>
                        <FaCheckCircle /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="deployment-help">
            <p className="help-text">Need help choosing the right deployment?</p>
            <Link to="/contact" className="btn btn-outline-small">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* ===== ADD-ONS & SERVICES ===== */}
      <section className="addons-section">
        <div className="pricing-container">
          <h2 className="section-title">Add-ons & Optional Services</h2>

          <div className="addons-grid">
            <div className="addons-column">
              <h4 className="addon-type-title">One-Time Services</h4>
              <table className="addon-table">
                <tbody>
                  <tr>
                    <td>
                      <strong>Implementation & Configuration</strong>
                      <span className="addon-note">Included in plan</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Data Migration</strong>
                      <span className="addon-note">Baseline included; additional billed per scope</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Additional Site Rollout</strong>
                      <span className="addon-note">{config.additionalSites.multi} / {config.additionalSites.enterprise}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Custom Integrations</strong>
                      <span className="addon-note">Quote-based (scope-dependent)</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Custom Workflows / Forms / Reports</strong>
                      <span className="addon-note">Quote-based (scope-dependent)</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="addons-column">
              <h4 className="addon-type-title">Annual Services (Year 2+)</h4>
              <table className="addon-table">
                <tbody>
                  <tr>
                    <td>
                      <strong>AMC (Annual Maintenance Contract)</strong>
                      <span className="addon-note">{config.amc}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Hosting - Production</strong>
                      <span className="addon-note">{config.hosting.prod}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Hosting - Dev + Production</strong>
                      <span className="addon-note">{config.hosting.devProd}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Extended Support</strong>
                      <span className="addon-note">24/7 support (quote-based)</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Training & Onboarding</strong>
                      <span className="addon-note">Per team or on-demand (quoted)</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="addon-notes">
            <p><strong>Note:</strong> {config.notes.taxes} {config.notes.integrations}</p>
          </div>
        </div>
      </section>

      {/* ===== TCO COMPARISON ===== */}
      <section className="tco-section">
        <div className="pricing-container">
          <h2 className="section-title">Why Per-Site Beats Per-User Pricing</h2>

          <div className="tco-content">
            <div className="tco-left">
              <h3>Traditional Per-User Pricing</h3>
              <p>
                Many tools charge monthly or annually per user. As your team grows, costs multiply. A team of 50 users costs dramatically more than a team of 10.
              </p>
              <p className="tco-example">
                <strong>Example:</strong> $50/user/month × 50 users = $2,500/month<br />
                Then hire 10 more users = $3,000/month (20% cost jump)
              </p>
            </div>

            <div className="tco-separator">
              <span className="vs-text">vs</span>
            </div>

            <div className="tco-right">
              <h3 style={{ color: '#2563eb' }}>RIO ALM Site-Based Pricing</h3>
              <p>
                One flat price per site, regardless of team size. Unlimited users, unlimited assets—your costs stay predictable as you scale.
              </p>
              <p className="tco-example" style={{ borderColor: '#2563eb' }}>
                <strong>Example:</strong> {config.currency}{config.plans.single.price} per site<br />
                Hire 50 more users = <strong>same price</strong> (0% cost increase)
              </p>
            </div>
          </div>

          <div className="tco-benefit">
            <h4>The RIO ALM Advantage</h4>
            <ul>
              <li><FaCheckCircle /> <strong>Predictable costs:</strong> No surprises as your team grows</li>
              <li><FaCheckCircle /> <strong>Unlimited collaboration:</strong> All users included, no seat limits</li>
              <li><FaCheckCircle /> <strong>Scale fearlessly:</strong> Add assets and users at no extra licensing cost</li>
              <li><FaCheckCircle /> <strong>Simple budgeting:</strong> Fixed annual investment per site</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== FAQs ===== */}
      <section className="faq-section">
        <div className="pricing-container">
          <h2 className="section-title">Frequently Asked Questions</h2>

          <div className="faq-grid">
            {[
              {
                q: "What counts as a 'Site'?",
                a: "A site is a physical location (factory, warehouse, office, store, etc.) where assets are managed. Multi-site licenses allow you to manage multiple locations under unified administration with separate or shared dashboards."
              },
              {
                q: "Does pricing include unlimited users and assets?",
                a: "Yes! Every RIO ALM license includes unlimited users, unlimited assets, and unlimited work orders. No per-user or per-asset surcharges."
              },
              {
                q: "Can we host on our own server or private cloud?",
                a: "Absolutely. RIO ALM supports on-premise deployment (your server/VM) and private cloud (AWS, Azure, GCP in your account). We provide implementation and support; you maintain control."
              },
              {
                q: "What is AMC and what does it cover?",
                a: "AMC (Annual Maintenance Contract) from Year 2 onwards (12% of license value) includes software updates, bug fixes, minor enhancements, and priority support."
              },
              {
                q: "Are integrations included?",
                a: "Basic integration architecture is included. Custom integrations with your HMS, ERP, Inventory, or Finance systems are scope-based and quoted separately."
              },
              {
                q: "How long does implementation take?",
                a: "Typically 2–6 weeks depending on scope, complexity, data migration, and customizations. We'll provide a timeline during your demo."
              },
              {
                q: "Do you support multi-location dashboards and role-based access?",
                a: "Yes. All plans include multi-location asset dashboards, granular role-based access control, and location-wise organization."
              },
              {
                q: "Can we start with single-site and upgrade later?",
                a: "Yes, absolutely. Start with Single-Site and upgrade to Multi-Site or Enterprise at any time. We'll prorate any differences."
              },
              {
                q: "What about taxes and additional costs?",
                a: "License prices exclude GST (India) or local taxes as applicable. Integrations and custom development are billed based on scope."
              },
              {
                q: "Do you offer a free trial or demo?",
                a: "Yes! Book a personalized demo to see RIO ALM in action. We'll walk you through features, answer questions, and discuss your specific use case."
              }
            ].map((faq, idx) => (
              <div key={idx} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                >
                  <span className="faq-icon">
                    <FaQuestionCircle />
                  </span>
                  <span className="faq-text">{faq.q}</span>
                  <span className={`faq-arrow ${expandedFaq === idx ? 'open' : ''}`}>▼</span>
                </button>

                {expandedFaq === idx && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA SECTION ===== */}
      <section className="final-cta-section">
        <div className="pricing-container">
          <h2 className="cta-headline">
            Ready to bring control, compliance, and uptime to your assets?
          </h2>

          <p className="cta-subline">
            Start your RIO ALM journey today. Quick demos, flexible deployment, predictable pricing.
          </p>

          <div className="final-ctas">
            <Link to="/products/rio-alm/contact" className="btn btn-primary-large">
              Book a Demo
            </Link>
            <Link to="/products/rio-alm/contact" className="btn btn-secondary-large">
              Get a Proposal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
