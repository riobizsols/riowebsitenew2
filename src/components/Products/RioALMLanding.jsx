import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  FiPackage, FiTool, FiUsers, FiFileText, 
  FiBarChart2, FiSmartphone, 
  FiLayers, FiLock
} from 'react-icons/fi';
import { HiShieldCheck } from 'react-icons/hi';
import FeatureCard from './FeatureCard';
import CTABanner from './CTABanner';
import FAQAccordion from './FAQAccordion';
import RioAlmDashboard from '../../assets/images/rio-alm-dashboard f.png';
import './RioALMLanding.css';

const RioALMLanding = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const keyFeatures = [
    {
      icon: <FiPackage />,
      title: "Centralized Asset Repository",
      description: "All equipment and assets in one unified system with complete tracking from procurement to retirement."
    },
    {
      icon: <FiTool />,
      title: "Preventive Maintenance Scheduling",
      description: "Time-based and usage-based maintenance planning with automated work order generation."
    },
    {
      icon: <FiUsers />,
      title: "Vendor & AMC Management",
      description: "Track vendor SLAs, CMC/AMC contracts, and monitor performance metrics."
    },
    {
      icon: <FiFileText />,
      title: "Compliance Document Management",
      description: "Store and organize manuals, calibration reports, service records, and audit evidence."
    },
    {
      icon: <FiBarChart2 />,
      title: "Depreciation & Finance Reporting",
      description: "Generate depreciation reports and asset accounting insights for financial planning."
    },
    {
      icon: <FiSmartphone />,
      title: "Mobile Scanning & Updates",
      description: "QR/Barcode scanning and maintenance updates directly from mobile devices."
    },
    {
      icon: <FiLayers />,
      title: "Multi-location & Multi-branch Support",
      description: "Manage assets across multiple facilities, departments, and geographic locations."
    },
    {
      icon: <FiLock />,
      title: "Role-Based Access Control",
      description: "Granular permissions and workflows tailored to user roles and organizational structure."
    }
  ];

  const outcomes = [
    {
      title: "Reduce Equipment Downtime",
      description: "Proactive maintenance scheduling minimizes unexpected failures and operational disruptions."
    },
    {
      title: "Audit-Ready Compliance",
      description: "Complete documentation and audit trails ensure regulatory readiness and traceability."
    },
    {
      title: "Faster Preventive Maintenance",
      description: "Automated scheduling and mobile work orders accelerate maintenance execution."
    },
    {
      title: "Vendor Accountability",
      description: "SLA tracking and performance metrics hold vendors accountable and ensure service quality."
    },
    {
      title: "Financial Clarity",
      description: "Accurate depreciation reports and asset accounting for better financial planning."
    },
    {
      title: "Operational Control",
      description: "Complete visibility and control over assets, workflows, and approvals across the organization."
    }
  ];

  const faqs = [
    {
      question: "Is RIO ALM cloud-based or on-premises?",
      answer: "RIO ALM offers flexible deployment options. You can deploy it on-premises for complete data ownership, in a private cloud environment, or opt for a managed hosting solution. Choose the option that best fits your organization's security and infrastructure requirements."
    },
    {
      question: "How long does implementation typically take?",
      answer: "Implementation timelines vary based on organizational size and complexity. Typical deployments range from 6-16 weeks, including discovery, configuration, data migration, user training, and phased rollout. We offer flexible phased rollout options by branch or department."
    },
    {
      question: "Can you help migrate data from spreadsheets or legacy systems?",
      answer: "Yes, we provide comprehensive data migration support. Our team helps map existing data, clean and validate records, and import them into RIO ALM with minimal disruption to your operations."
    },
    {
      question: "Is mobile scanning included?",
      answer: "Yes, RIO ALM includes mobile scanning capabilities with QR code and barcode support. Field teams can update asset status, log maintenance activities, and capture evidence directly from their mobile devices."
    },
    {
      question: "Can I manage multiple branches in a single deployment?",
      answer: "Absolutely. RIO ALM is built for multi-location organizations. You can manage assets, workflows, and access controls across multiple branches, departments, and facilities from a single system."
    },
    {
      question: "How customizable are the workflows?",
      answer: "RIO ALM offers highly configurable workflows and approval processes. You can set up multi-level approvals, define different rules for asset types, departments, or maintenance categories, without requiring code changes."
    },
    {
      question: "What is the pricing model?",
      answer: "RIO ALM operates on a one-time implementation and licensing model, not strictly SaaS. Pricing depends on deployment scope, asset volume, and number of users. Optional annual support and maintenance packages are available from year 2 onwards."
    },
    {
      question: "Does RIO ALM integrate with other systems like ERP or HMS?",
      answer: "Yes, RIO ALM offers API-based integration capabilities with ERP systems, HMIS, and other enterprise applications. Integration scope and requirements are discussed during the implementation planning phase."
    }
  ];

  return (
    <div className="rio-alm-overview-page">
      <Helmet>
        <title>RIO ALM - Enterprise Asset Lifecycle Management Software Solution</title>
        <meta name="description" content="RIO ALM is an enterprise asset lifecycle management platform providing complete visibility from procurement to maintenance, compliance, and depreciation reporting. Deploy on-premises, cloud, or hybrid." />
        <meta name="keywords" content="asset management software, ALM, asset lifecycle management, maintenance management, preventive maintenance, compliance management, asset depreciation, work order management" />
        <meta name="author" content="RioBizSols" />
        
        {/* Open Graph Tags for Social Sharing */}
        <meta property="og:type" content="product" />
        <meta property="og:title" content="RIO ALM - Enterprise Asset Lifecycle Management Software" />
        <meta property="og:description" content="Complete visibility and control over asset lifecycle from procurement to compliance to depreciation reporting. On-premises, cloud, or managed hosting." />
        <meta property="og:url" content="https://riobizsols.com/products/rio-alm" />
        <meta property="og:site_name" content="RioBizSols" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RIO ALM - Enterprise Asset Lifecycle Management" />
        <meta name="twitter:description" content="End-to-end asset management with maintenance scheduling, compliance, and depreciation reporting." />
        
        {/* Canonical Link */}
        <link rel="canonical" href="https://riobizsols.com/products/rio-alm" />
        
        {/* Schema.org Product & SoftwareApplication Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Product", "SoftwareApplication"],
            "name": "RIO ALM",
            "description": "Enterprise Asset Lifecycle Management Platform",
            "manufacturer": {
              "@type": "Organization",
              "name": "RioBizSols",
              "url": "https://riobizsols.com"
            },
            "applicationCategory": "BusinessApplication",
            "operatingSystem": ["Web", "Mobile"],
            "offers": {
              "@type": "Offer",
              "price": "Contact for pricing",
              "priceCurrency": "USD",
              "availability": "https://schema.org/OnlineOnly"
            },
            "features": [
              "Asset Lifecycle Tracking",
              "Preventive Maintenance Scheduling",
              "Vendor & AMC Management",
              "Compliance Document Management",
              "Depreciation & Finance Reporting",
              "Mobile Scanning",
              "Multi-location Support",
              "Role-Based Access Control"
            ]
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="alm-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Complete Control Over Your Assets</h1>
            <p className="hero-subtitle">
              RIO ALM gives you end-to-end visibility and control over asset lifecycle—from procurement 
              and maintenance to compliance and depreciation reporting.
            </p>
            <p className="hero-subtext">
              On-premises, private cloud, or managed hosting. Highly configurable workflows. Your data, your control.
            </p>
            <div className="hero-ctas">
              <Link to="/products/rio-alm/contact" className="btn btn-primary">
                Request a Demo
              </Link>
              <Link to="/products/rio-alm/features" className="btn btn-secondary">
                Explore Features
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="dashboard-placeholder">
              <div className="placeholder-header">Dashboard Preview</div>
              <img
                src={RioAlmDashboard}
                alt="RIO ALM dashboard preview"
                className="hero-dashboard-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="alm-outcomes">
        <div className="container">
          <h2 className="section-title">Why Organizations Choose RIO ALM</h2>
          <p className="section-subtitle">
            Measurable outcomes that impact your bottom line
          </p>
          <div className="outcomes-grid">
            {outcomes.map((outcome, index) => (
              <div key={index} className="outcome-card">
                <div className="outcome-icon">✓</div>
                <h3 className="outcome-title">{outcome.title}</h3>
                <p className="outcome-description">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is RIO ALM */}
      <section className="alm-overview">
        <div className="container">
          <div className="overview-content">
            <h2 className="section-title">What is RIO ALM?</h2>
            <p className="section-text">
              RIO ALM is an enterprise Asset Lifecycle Management platform designed for organizations 
              that need comprehensive control over physical assets—from procurement through retirement.
            </p>
            <p className="section-text">
              Whether managing biomedical equipment in hospitals, service equipment in dealerships, 
              machinery in manufacturing plants, or facilities in educational institutions, RIO ALM 
              provides the visibility, control, and compliance readiness your organization needs.
            </p>
            
            <h3 className="subsection-title">Asset Lifecycle Journey</h3>
            <div className="lifecycle-diagram">
              <div className="lifecycle-step">
                <div className="step-number">1</div>
                <div className="step-label">Procure</div>
              </div>
              <div className="lifecycle-arrow">→</div>
              <div className="lifecycle-step">
                <div className="step-number">2</div>
                <div className="step-label">Track</div>
              </div>
              <div className="lifecycle-arrow">→</div>
              <div className="lifecycle-step">
                <div className="step-number">3</div>
                <div className="step-label">Maintain</div>
              </div>
              <div className="lifecycle-arrow">→</div>
              <div className="lifecycle-step">
                <div className="step-number">4</div>
                <div className="step-label">Audit</div>
              </div>
              <div className="lifecycle-arrow">→</div>
              <div className="lifecycle-step">
                <div className="step-number">5</div>
                <div className="step-label">Retire</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Modules Section */}
      <section className="alm-modules">
        <div className="container">
          <h2 className="section-title">Core Capabilities</h2>
          <p className="section-subtitle">
            Comprehensive modules working together to manage your complete asset lifecycle
          </p>
          <div className="modules-grid">
            {keyFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="alm-how-it-works">
        <div className="container">
          <h2 className="section-title">How Implementation Works</h2>
          <p className="section-subtitle">
            A structured approach to get you up and running quickly
          </p>
          <div className="steps-container">
            <div className="step-item">
              <div className="step-circle">1</div>
              <h3>Discovery & Assessment</h3>
              <p>Understand your current asset management process, pain points, and requirements.</p>
            </div>
            <div className="step-divider"></div>
            <div className="step-item">
              <div className="step-circle">2</div>
              <h3>Configuration & Setup</h3>
              <p>Configure RIO ALM workflows, approval rules, and access controls tailored to your organization.</p>
            </div>
            <div className="step-divider"></div>
            <div className="step-item">
              <div className="step-circle">3</div>
              <h3>Data Migration</h3>
              <p>Migrate and validate existing asset data, contracts, and historical records.</p>
            </div>
            <div className="step-divider"></div>
            <div className="step-item">
              <div className="step-circle">4</div>
              <h3>Training & Rollout</h3>
              <p>Comprehensive training and phased rollout by branch or department.</p>
            </div>
            <div className="step-divider"></div>
            <div className="step-item">
              <div className="step-circle">5</div>
              <h3>Ongoing Support</h3>
              <p>Dedicated support and optional AMC/maintenance packages for long-term success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="alm-deployment">
        <div className="container">
          <h2 className="section-title">Flexible Deployment Options</h2>
          <p className="section-subtitle">
            Choose the deployment model that aligns with your organization's requirements
          </p>
          <div className="deployment-options">
            <div className="deployment-card">
              <h3 className="deployment-title">On-Premises</h3>
              <p className="deployment-description">
                Deploy RIO ALM on your own infrastructure. Maintain complete control and data ownership. 
                Ideal for organizations with strict data residency requirements or existing IT infrastructure.
              </p>
              <ul className="deployment-benefits">
                <li>Complete data ownership</li>
                <li>Runs within your firewall</li>
                <li>No external dependencies</li>
                <li>Customization flexibility</li>
              </ul>
            </div>
            <div className="deployment-card">
              <h3 className="deployment-title">Private Cloud</h3>
              <p className="deployment-description">
                Deploy in your private cloud environment (AWS, Azure, or your hosted infrastructure). 
                Combines cloud benefits with control over deployment environment.
              </p>
              <ul className="deployment-benefits">
                <li>Scalability as you grow</li>
                <li>Your cloud account</li>
                <li>Data ownership retained</li>
                <li>Easy backup and recovery</li>
              </ul>
            </div>
            <div className="deployment-card">
              <h3 className="deployment-title">Managed Hosting</h3>
              <p className="deployment-description">
                Let us manage hosting and infrastructure. Focus on operations while we handle 
                system administration, updates, and support.
              </p>
              <ul className="deployment-benefits">
                <li>Hands-off infrastructure</li>
                <li>Automatic updates</li>
                <li>Professional maintenance</li>
                <li>24/7 monitoring included</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Access Control */}
      <section className="alm-security">
        <div className="container">
          <div className="security-content">
            <div className="security-text">
              <h2 className="section-title">Enterprise-Grade Security</h2>
              <p className="section-subtitle">Your data and compliance are our priority</p>
              <ul className="security-features">
                <li>
                  <strong>Role-Based Access Control:</strong> Granular permissions for users, 
                  departments, and locations.
                </li>
                <li>
                  <strong>Audit Logging:</strong> Complete audit trails for all asset changes, 
                  approvals, and maintenance activities.
                </li>
                <li>
                  <strong>Multi-level Approvals:</strong> Enforce approval workflows to maintain 
                  operational controls.
                </li>
                <li>
                  <strong>Compliance Ready:</strong> Generate audit-ready reports for regulatory 
                  compliance and internal audits.
                </li>
                <li>
                  <strong>Data Encryption:</strong> Industry-standard encryption for data in transit 
                  and at rest.
                </li>
              </ul>
            </div>
            <div className="security-visual">
              <div className="security-icon-badge" aria-hidden="true">
                <HiShieldCheck className="security-icon-symbol" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="alm-industries">
        <div className="container">
          <h2 className="section-title">Industries We Serve</h2>
          <p className="section-subtitle">
            RIO ALM is trusted by organizations across diverse sectors
          </p>
          <div className="industries-grid">
            <div className="industry-card">
              <h3>Healthcare</h3>
              <p className="industry-label">Hospitals, Clinics, Diagnostics</p>
              <ul className="industry-benefits">
                <li>Biomedical equipment maintenance</li>
                <li>Compliance & calibration tracking</li>
                <li>Preventive maintenance scheduling</li>
                <li>Regulatory audit readiness</li>
              </ul>
            </div>
            <div className="industry-card">
              <h3>Automotive</h3>
              <p className="industry-label">Dealerships, Service Centers</p>
              <ul className="industry-benefits">
                <li>Multi-branch asset tracking</li>
                <li>Service equipment management</li>
                <li>Tooling and spare parts control</li>
                <li>Service SLA management</li>
              </ul>
            </div>
            <div className="industry-card">
              <h3>Manufacturing</h3>
              <p className="industry-label">Plants, Factories, Production Facilities</p>
              <ul className="industry-benefits">
                <li>Production equipment tracking</li>
                <li>Preventive maintenance</li>
                <li>Downtime reduction</li>
                <li>Compliance reporting</li>
              </ul>
            </div>
            <div className="industry-card">
              <h3>Hospitality</h3>
              <p className="industry-label">Hotels, Resorts, Facilities</p>
              <ul className="industry-benefits">
                <li>Facility equipment management</li>
                <li>Preventive maintenance</li>
                <li>Guest experience continuity</li>
                <li>Multi-property coordination</li>
              </ul>
            </div>
            <div className="industry-card">
              <h3>Education</h3>
              <p className="industry-label">Colleges, Universities, Schools</p>
              <ul className="industry-benefits">
                <li>Campus-wide asset control</li>
                <li>Lab equipment maintenance</li>
                <li>Multi-building coordination</li>
                <li>Budget planning support</li>
              </ul>
            </div>
            <div className="industry-card">
              <h3>Infrastructure</h3>
              <p className="industry-label">Facilities Management, Services</p>
              <ul className="industry-benefits">
                <li>Building system management</li>
                <li>Equipment preventive maintenance</li>
                <li>Tenant SLA compliance</li>
                <li>Cost tracking & reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Spreadsheets Comparison */}
      <section className="alm-comparison">
        <div className="container">
          <h2 className="section-title">Why Not Just Use Spreadsheets?</h2>
          <p className="section-subtitle">
            Spreadsheets create operational risk. RIO ALM provides enterprise control.
          </p>
          <div className="comparison-table">
            <div className="comparison-header">
              <div className="comparison-col">Capability</div>
              <div className="comparison-col">Spreadsheets</div>
              <div className="comparison-col">RIO ALM</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-col"><strong>Data Validation</strong></div>
              <div className="comparison-col">Manual, error-prone</div>
              <div className="comparison-col">✓ Automated rules</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-col"><strong>Real-time Collaboration</strong></div>
              <div className="comparison-col">Version conflicts, delays</div>
              <div className="comparison-col">✓ Live updates for all users</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-col"><strong>Audit Trails</strong></div>
              <div className="comparison-col">Impossible to track</div>
              <div className="comparison-col">✓ Complete history</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-col"><strong>Access Control</strong></div>
              <div className="comparison-col">All-or-nothing access</div>
              <div className="comparison-col">✓ Granular permissions</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-col"><strong>Automated Workflows</strong></div>
              <div className="comparison-col">Manual processing</div>
              <div className="comparison-col">✓ Auto-approvals, alerts</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-col"><strong>Scalability</strong></div>
              <div className="comparison-col">Breaks down with volume</div>
              <div className="comparison-col">✓ Handles millions of assets</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-col"><strong>Mobile Access</strong></div>
              <div className="comparison-col">Not practical</div>
              <div className="comparison-col">✓ Full mobile app</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-col"><strong>Integration</strong></div>
              <div className="comparison-col">Manual data entry</div>
              <div className="comparison-col">✓ API integrations</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="alm-faq">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Final CTA */}
      <CTABanner 
        title="Ready to Transform Your Asset Management?"
        subtitle="Get a personalized demo and see how RIO ALM can streamline your operations, reduce downtime, and ensure compliance."
        ctaText="Schedule Your Demo"
      />

      {/* Blog Section */}
      <section className="alm-blog-section">
        <div className="container">
          <h2 className="section-title">Learn More: RIO ALM Insights & Best Practices</h2>
          <p className="section-subtitle" style={{ marginBottom: '40px', textAlign: 'center' }}>
            Explore industry insights, implementation guides, and asset management best practices
          </p>
          <div className="blog-cards">
            <Link to="/blog/3" className="blog-card-link">
              <div className="blog-card-small">
                <h4>Transform Your Asset Lifecycle Management</h4>
                <p>Discover how RIO ALM reduces downtime, ensures compliance, and optimizes asset operations</p>
                <span className="read-more">Read Article →</span>
              </div>
            </Link>
            <Link to="/blog/4" className="blog-card-link">
              <div className="blog-card-small">
                <h4>Five Key Benefits of Enterprise Asset Management</h4>
                <p>Understand the measurable business value of comprehensive asset lifecycle management solutions</p>
                <span className="read-more">Read Article →</span>
              </div>
            </Link>
            <Link to="/blog/5" className="blog-card-link">
              <div className="blog-card-small">
                <h4>Ensuring Compliance and Audit Readiness</h4>
                <p>Learn how RIO ALM maintains audit trails and compliance documentation automatically</p>
                <span className="read-more">Read Article →</span>
              </div>
            </Link>
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/blog" className="cta-button-secondary">
              View All Blog Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="alm-nav-section">
        <div className="container">
          <h3 className="section-subtitle" style={{ marginBottom: '40px', textAlign: 'center' }}>
            Explore More About RIO ALM
          </h3>
          <div className="nav-links">
            <Link to="/products/rio-alm/features" className="nav-link-card">
              <h4>Features</h4>
              <p>Detailed breakdown of all capabilities</p>
              <span>→</span>
            </Link>
            <Link to="/products/rio-alm/industries" className="nav-link-card">
              <h4>Industries</h4>
              <p>How RIO ALM serves your sector</p>
              <span>→</span>
            </Link>
            <Link to="/products/rio-alm/deployment" className="nav-link-card">
              <h4>Deployment</h4>
              <p>Hosting and implementation options</p>
              <span>→</span>
            </Link>
            <Link to="/products/rio-alm/contact" className="nav-link-card">
              <h4>Contact Us</h4>
              <p>Request a demo or proposal</p>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RioALMLanding;
