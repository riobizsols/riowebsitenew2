import { Link } from 'react-router-dom';
import FeatureCard from './FeatureCard';
import { LazyProductCTA, LazyProductFAQ } from './LazyProductFooter';
import LazyImage from '../LazyImage';
import { ENTERPRISE_SECURITY } from '../../utils/productImages';
import './RioALMLanding.css';

export default function RioALMLandingBelowFold({ outcomes, keyFeatures, faqs }) {
  return (
    <>
      {/* Outcomes Section */}
      <section className="alm-outcomes">
        <div className="container">
          <h2 className="section-title">Why Organizations Choose RIO EAM</h2>
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

      {/* What is RIO EAM */}
      <section className="alm-overview">
        <div className="container">
          <div className="overview-content">
            <h2 className="section-title">What is RIO EAM?</h2>
            <p className="section-text">
              RIO EAM is an enterprise Enterprise Asset Managment platform designed for organizations 
              that need comprehensive control over physical assets—from procurement through retirement.
            </p>
            <p className="section-text">
              Whether managing biomedical equipment in hospitals, service equipment in dealerships, 
              machinery in manufacturing plants, or facilities in educational institutions, RIO EAM 
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
              <p>Configure RIO EAM workflows, approval rules, and access controls tailored to your organization.</p>
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
                Deploy RIO EAM on your own infrastructure. Maintain complete control and data ownership. 
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
              <LazyImage
                src={ENTERPRISE_SECURITY.src}
                alt="Enterprise-grade security controls"
                className="security-image"
                width={ENTERPRISE_SECURITY.width}
                height={ENTERPRISE_SECURITY.height}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="alm-industries">
        <div className="container">
          <h2 className="section-title">Industries We Serve</h2>
          <p className="section-subtitle">
            RIO EAM is trusted by organizations across diverse sectors
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
            Spreadsheets create operational risk. RIO EAM provides enterprise control.
          </p>
          <div className="comparison-table">
            <div className="comparison-header">
              <div className="comparison-col">Capability</div>
              <div className="comparison-col">Spreadsheets</div>
              <div className="comparison-col">RIO EAM</div>
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
          <LazyProductFAQ faqs={faqs} />
        </div>
      </section>

      {/* Final CTA */}
      <LazyProductCTA
        title="Ready to Transform Your Asset Management?"
        subtitle="Get a personalized demo and see how RIO EAM can streamline your operations, reduce downtime, and ensure compliance."
        ctaText="Schedule Your Demo"
      />

      {/* Blog Section */}
      <section className="alm-blog-section">
        <div className="container">
          <h2 className="section-title">Learn More: RIO EAM Insights & Best Practices</h2>
          <p className="section-subtitle" style={{ marginBottom: '40px', textAlign: 'center' }}>
            Explore industry insights, implementation guides, and asset management best practices
          </p>
          <div className="blog-cards">
            <Link to="/blog/3" className="blog-card-link">
              <div className="blog-card-small">
                <h4>Transform Your Enterprise Asset Managment</h4>
                <p>Discover how RIO EAM reduces downtime, ensures compliance, and optimizes asset operations</p>
                <span className="read-more">Read Article →</span>
              </div>
            </Link>
            <Link to="/blog/4" className="blog-card-link">
              <div className="blog-card-small">
                <h4>Five Key Benefits of Enterprise Asset Management</h4>
                <p>Understand the measurable business value of comprehensive enterprise asset managment solutions</p>
                <span className="read-more">Read Article →</span>
              </div>
            </Link>
            <Link to="/blog/5" className="blog-card-link">
              <div className="blog-card-small">
                <h4>Ensuring Compliance and Audit Readiness</h4>
                <p>Learn how RIO EAM maintains audit trails and compliance documentation automatically</p>
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
            Explore More About RIO EAM
          </h3>
          <div className="nav-links">
            <Link to="/products/rio-eam/features" className="nav-link-card">
              <h4>Features</h4>
              <p>Detailed breakdown of all capabilities</p>
              <span>→</span>
            </Link>
            <Link to="/products/rio-eam/industries" className="nav-link-card">
              <h4>Industries</h4>
              <p>How RIO EAM serves your sector</p>
              <span>→</span>
            </Link>
            <Link to="/products/rio-eam/deployment" className="nav-link-card">
              <h4>Deployment</h4>
              <p>Hosting and implementation options</p>
              <span>→</span>
            </Link>
            <Link to="/products/rio-eam/contact" className="nav-link-card">
              <h4>Contact Us</h4>
              <p>Request a demo or proposal</p>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
