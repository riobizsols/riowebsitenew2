import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FiServer, FiGitBranch, FiDatabase } from 'react-icons/fi';
import { HiShieldCheck } from 'react-icons/hi';
import CTABanner from './CTABanner';
import './RioALMDeployment.css';

const RioALMDeployment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>RIO ALM Deployment Options | On-Premises, Private Cloud, Managed</title>
        <meta name="description" content="Choose your RIO ALM deployment: on-premises, private cloud, or managed hosting. Full data ownership and flexibility." />
      </Helmet>

      {/* Hero Section */}
      <section className="deployment-hero">
        <div className="container">
          <h1 className="hero-title">Flexible Deployment Options</h1>
          <p className="hero-subtitle">
            Choose the deployment model that best fits your organization's needs
          </p>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="deployment-options-section">
        <div className="container">
          <div className="deployment-grid">
            {/* On-Premises */}
            <div className="deployment-option">
              <div className="option-header">
                <FiServer className="option-icon" />
                <h2 className="option-title">On-Premises</h2>
              </div>
              <p className="option-description">
                Deploy RIO ALM on your own infrastructure and maintain complete control over your system.
              </p>
              <h3 className="benefits-title">Benefits</h3>
              <ul className="benefits-list">
                <li>Complete data ownership and control</li>
                <li>Runs entirely within your firewall</li>
                <li>No external dependencies or connectivity requirements</li>
                <li>Meets strict data residency requirements</li>
                <li>Full customization flexibility</li>
                <li>Leverage existing IT infrastructure</li>
              </ul>
              <h3 className="requirements-title">Requirements</h3>
              <ul className="requirements-list">
                <li>Windows Server or Linux environment</li>
                <li>SQL Server or PostgreSQL database</li>
                <li>Minimum 16GB RAM, 100GB storage</li>
                <li>Network configuration and firewall setup</li>
                <li>IT team for ongoing maintenance</li>
              </ul>
            </div>

            {/* Private Cloud */}
            <div className="deployment-option">
              <div className="option-header">
                <FiGitBranch className="option-icon" />
                <h2 className="option-title">Private Cloud</h2>
              </div>
              <p className="option-description">
                Deploy in your private cloud environment for scalability with complete control.
              </p>
              <h3 className="benefits-title">Benefits</h3>
              <ul className="benefits-list">
                <li>Deployment in your cloud account (AWS, Azure, GCP)</li>
                <li>Maintain data ownership and control</li>
                <li>Scale resources as you grow</li>
                <li>Automatic backup and disaster recovery</li>
                <li>Easy integration with existing cloud services</li>
                <li>Pay only for resources you use</li>
              </ul>
              <h3 className="requirements-title">Requirements</h3>
              <ul className="requirements-list">
                <li>Active cloud account (AWS, Azure, GCP, etc.)</li>
                <li>Cloud infrastructure knowledge</li>
                <li>Network and security group configuration</li>
                <li>Optional: Cloud deployment automation</li>
              </ul>
            </div>

            {/* Managed Hosting */}
            <div className="deployment-option">
              <div className="option-header">
                <FiDatabase className="option-icon" />
                <h2 className="option-title">Managed Hosting</h2>
              </div>
              <p className="option-description">
                Let us manage hosting and infrastructure while you focus on your operations.
              </p>
              <h3 className="benefits-title">Benefits</h3>
              <ul className="benefits-list">
                <li>Hands-off infrastructure management</li>
                <li>Automatic system updates and patches</li>
                <li>24/7 monitoring and professional support</li>
                <li>Automated backups and disaster recovery</li>
                <li>Predictable monthly costs</li>
                <li>Highest uptime SLAs (99.9%+)</li>
              </ul>
              <h3 className="requirements-title">What's Included</h3>
              <ul className="requirements-list">
                <li>Hosted infrastructure in secure data centers</li>
                <li>Database management and optimization</li>
                <li>Automated backups and recovery</li>
                <li>Security patches and updates</li>
                <li>Performance monitoring</li>
                <li>Dedicated support team</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="deployment-comparison">
        <div className="container">
          <h2 className="section-title">Deployment Comparison</h2>
          <div className="comparison-table">
            <div className="table-header">
              <div className="table-cell criteria-cell">Criteria</div>
              <div className="table-cell">On-Premises</div>
              <div className="table-cell">Private Cloud</div>
              <div className="table-cell">Managed Hosting</div>
            </div>
            <div className="table-row">
              <div className="table-cell criteria-cell">Data Ownership</div>
              <div className="table-cell">✓ Full</div>
              <div className="table-cell">✓ Full</div>
              <div className="table-cell">✓ Full</div>
            </div>
            <div className="table-row">
              <div className="table-cell criteria-cell">Setup Complexity</div>
              <div className="table-cell">High</div>
              <div className="table-cell">Medium</div>
              <div className="table-cell">Low</div>
            </div>
            <div className="table-row">
              <div className="table-cell criteria-cell">Ongoing Maintenance</div>
              <div className="table-cell">Your IT Team</div>
              <div className="table-cell">Your IT Team</div>
              <div className="table-cell">✓ Managed</div>
            </div>
            <div className="table-row">
              <div className="table-cell criteria-cell">Scalability</div>
              <div className="table-cell">Limited</div>
              <div className="table-cell">✓ Elastic</div>
              <div className="table-cell">✓ Elastic</div>
            </div>
            <div className="table-row">
              <div className="table-cell criteria-cell">Uptime SLA</div>
              <div className="table-cell">Your Responsibility</div>
              <div className="table-cell">Your Responsibility</div>
              <div className="table-cell">✓ 99.9%+</div>
            </div>
            <div className="table-row">
              <div className="table-cell criteria-cell">Cost Model</div>
              <div className="table-cell">CapEx + OpEx</div>
              <div className="table-cell">OpEx (Pay as you use)</div>
              <div className="table-cell">Fixed Monthly</div>
            </div>
            <div className="table-row">
              <div className="table-cell criteria-cell">Backup & Recovery</div>
              <div className="table-cell">Your Responsibility</div>
              <div className="table-cell">Your Setup</div>
              <div className="table-cell">✓ Automated</div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="implementation-section">
        <div className="container">
          <h2 className="section-title">Implementation & Rollout</h2>
          <div className="implementation-grid">
            <div className="impl-card">
              <h3>Phased Rollout</h3>
              <p>Deploy by branch, department, or location to minimize disruption and ensure successful adoption.</p>
            </div>
            <div className="impl-card">
              <h3>Data Migration</h3>
              <p>We handle migration from legacy systems, spreadsheets, or other asset management tools.</p>
            </div>
            <div className="impl-card">
              <h3>Integration Support</h3>
              <p>Integrate with your existing ERP, HMIS, or accounting systems via APIs.</p>
            </div>
            <div className="impl-card">
              <h3>Training & Support</h3>
              <p>Comprehensive training for end users, admins, and IT teams to ensure smooth adoption.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="security-section">
        <div className="container">
          <div className="security-grid">
            <div className="security-content">
              <div className="security-heading-row">
                <h2 className="section-title">Security & Compliance</h2>
                <p className="security-text security-text-inline">
                  RIO ALM protects your asset and maintenance data with enterprise-grade controls, whether you deploy it on-premises, in your own cloud, or via our managed hosting.
                </p>
              </div>
              <ul className="security-list">
                <li><strong>Data Encryption:</strong> Industry-standard encryption for data in transit and at rest</li>
                <li><strong>Access Control:</strong> Role-based access control with granular permissions</li>
                <li><strong>Audit Logging:</strong> Complete audit trails for compliance and forensics</li>
                <li><strong>Backup & Recovery:</strong> Automated backups with disaster recovery procedures</li>
                <li><strong>Compliance Ready:</strong> Supports compliance with various regulations and standards</li>
                <li><strong>Network Security:</strong> Firewall-compatible, VPN-friendly architecture</li>
              </ul>
            </div>
            <div className="security-visual">
              <HiShieldCheck size={50} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Choose Your Deployment Model"
        subtitle="Let's discuss which deployment option best fits your organization's requirements and infrastructure."
        ctaText="Discuss Deployment Options"
      />
    </>
  );
};

export default RioALMDeployment;
