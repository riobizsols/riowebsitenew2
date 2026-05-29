import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FiActivity, FiAlertCircle, FiCalendar, FiCheckCircle, FiClipboard, FiClock, FiDatabase, FiFileText, FiGrid, FiLayers, FiMapPin, FiMonitor, FiSettings, FiShield, FiSmartphone, FiTool, FiTruck, FiUsers } from 'react-icons/fi';
import './RioALMUkLanding.css';

const featureCards = [
  {
    icon: <FiDatabase />,
    title: 'Centralized Asset Register',
    description:
      'Maintain asset details, serial numbers, purchase information, warranty, insurance, documents, location, department, floor, and ownership history.'
  },
  {
    icon: <FiTool />,
    title: 'Preventive & Breakdown Maintenance',
    description:
      'Create planned maintenance schedules, raise breakdown tickets, assign engineers, track work orders, and maintain complete service history.'
  },
  {
    icon: <FiCheckCircle />,
    title: 'Inspection & Calibration Tracking',
    description:
      'Plan inspections, record results, track calibration due dates, attach certificates, and avoid missed compliance-related activities.'
  },
  {
    icon: <FiUsers />,
    title: 'Vendor & Contract Management',
    description:
      'Track AMC/CMC contracts, vendor assignments, service performance, contract validity, and maintenance cost history.'
  },
  {
    icon: <FiSmartphone />,
    title: 'Mobile Scanning & Updates',
    description:
      'Enable maintenance teams to scan assets, update service status, upload photos, and close work orders from mobile devices.'
  },
  {
    icon: <FiShield />,
    title: 'Audit Logs & Role-Based Access',
    description:
      'Maintain complete activity history with role-based menus, approvals, and traceability for internal reviews and audits.'
  }
];

const RioALMUkLanding = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formType, setFormType] = useState('Demo');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqSchema = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is RIO EAM?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'RIO EAM is Enterprise Asset Managment software that helps organizations manage assets, maintenance, inspections, calibration, vendor contracts, documents, depreciation, and asset lifecycle records from one platform.'
          }
        },
        {
          '@type': 'Question',
          name: 'Is RIO EAM the same as CMMS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'RIO EAM includes CMMS-style maintenance management features, but it also covers wider asset lifecycle functions such as asset registry, document tracking, vendor contracts, depreciation, expiry, and scrap management.'
          }
        },
        {
          '@type': 'Question',
          name: 'Can RIO EAM be used by manufacturing companies?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Manufacturing companies can use it for plant equipment tracking, preventive maintenance, breakdown management, engineer assignments, inspections, and maintenance history.'
          }
        },
        {
          '@type': 'Question',
          name: 'Can it support healthcare or clinic equipment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. It can help healthcare and clinic teams track equipment, service schedules, calibration records, vendor service reports, and audit-ready maintenance documentation.'
          }
        },
        {
          '@type': 'Question',
          name: 'Can RIO EAM integrate with SAP PM or ERP?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, integration can be planned based on the customer system landscape. RIO EAM can work alongside SAP PM or ERP for selected asset, maintenance, document, and workflow processes.'
          }
        },
        {
          '@type': 'Question',
          name: 'Is on-prem deployment available?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. RIO EAM can be deployed on cloud, private cloud, or on-prem depending on customer IT policy.'
          }
        },
        {
          '@type': 'Question',
          name: 'Is the system suitable for multi-location companies?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. RIO EAM supports branch, department, floor, location, and role-based asset tracking.'
          }
        },
        {
          '@type': 'Question',
          name: 'How do we get pricing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pricing depends on the number of locations, asset volume, modules, deployment model, implementation scope, and support needs. Visitors can request pricing through the form.'
          }
        }
      ]
    }),
    []
  );

  const softwareSchema = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'RIO EAM - Enterprise Asset Managment Software',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      offers: {
        '@type': 'Offer',
        price: 'Contact for pricing',
        priceCurrency: 'GBP'
      },
      areaServed: 'Global',
      publisher: {
        '@type': 'Organization',
        name: 'RIO BizSols Pvt Ltd',
        url: 'https://www.riobizsols.com/'
      },
      description:
        'RIO EAM helps organizations manage assets, preventive maintenance, breakdowns, calibration, vendors, documents and audit-ready records.'
    }),
    []
  );

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Placeholder: wire this payload to Odoo CRM, Email API, webhook, Google Sheet, or backend endpoint.
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    console.log('Landing lead payload (placeholder):', payload);
    setIsSubmitted(true);
  };

  const jumpToForm = (type = 'Demo') => {
    setFormType(type);
    const form = document.getElementById('uk-landing-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="rio-uk-landing">
      <Helmet>
        <title>Asset Maintenance Management Software | RIO EAM</title>
        <meta
          name="description"
          content="RIO EAM helps organizations manage assets, preventive maintenance, breakdowns, calibration, vendors, documents and audit-ready records."
        />
        <meta
          name="keywords"
          content="asset management software, asset maintenance software, CMMS software, EAM software, preventive maintenance software, planned preventive maintenance software, equipment maintenance software, enterprise asset managment software, maintenance tracking software, work order management software, calibration management software"
        />
        <meta property="og:title" content="RIO EAM - Asset Lifecycle & Maintenance Management Software" />
        <meta
          property="og:description"
          content="Centralize asset records, automate maintenance, track calibration, manage vendors, and keep audit-ready records with RIO EAM."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.riobizsols.com/asset-maintenance-management-software" />
        <link rel="canonical" href="https://www.riobizsols.com/asset-maintenance-management-software" />
        <script type="application/ld+json">{JSON.stringify(softwareSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div
        className="tracking-placeholders"
        aria-hidden="true"
        dangerouslySetInnerHTML={{
          __html: `
            <!-- GA4 Tracking Code Here -->
            <!-- Google Ads Conversion Tracking Code Here -->
            <!-- Microsoft UET Tag Here -->
            <!-- LinkedIn Insight Tag Here -->
          `
        }}
      />

      <section className="lp-topbar">
        <div className="uk-container lp-topbar-inner">
          <strong>RIO BizSols Pvt Ltd</strong>
          <span>Enterprise Asset Managment Demo Enquiries</span>
        </div>
      </section>

      <section className="uk-hero section-space">
        <div className="uk-container uk-grid-hero">
          <div className="hero-content">
            <p className="uk-tag">Enterprise Asset Managment & Maintenance Management</p>
            <h1>Asset &amp; Maintenance Management Software for Operations Teams</h1>
            <p className="hero-subcopy">
              RIO EAM helps organizations track assets, automate maintenance, manage inspections, store documents, and
              maintain audit-ready records from one central system.
            </p>
            <p>
              Built for operations teams that need better maintenance discipline, visibility, and service control.
            </p>
            <div className="hero-image-grid">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80"
                alt="Asset management dashboard overview"
                loading="eager"
              />
              <img
                src="https://images.unsplash.com/photo-1581092335397-9fa341108f95?auto=format&fit=crop&w=1200&q=80"
                alt="Mobile maintenance and field technician workflow"
                loading="lazy"
              />
            </div>
            <div className="cta-row">
              <button className="btn-primary-uk" onClick={() => jumpToForm('Demo')} type="button">
                Book a 20-minute Demo
              </button>
              <button className="btn-secondary-uk" onClick={() => jumpToForm('Pricing')} type="button">
                Request Pricing
              </button>
            </div>
            <p className="trust-line">
              Built by RIO BizSols for asset-heavy businesses that need better control, visibility, and maintenance
              discipline.
            </p>
            <div className="trust-pill-row">
              <span>Manufacturing</span>
              <span>Facilities Management</span>
              <span>Healthcare & Clinics</span>
              <span>Multi-site Operations</span>
            </div>
          </div>

          <div className="hero-form-wrap">
            <div className="dashboard-card">
              <h3>Operational Snapshot</h3>
              <div className="dashboard-grid">
                <div><span>Total Assets</span><strong>12,480</strong></div>
                <div><span>Maintenance Due</span><strong>156</strong></div>
                <div><span>Breakdown Tickets</span><strong>22</strong></div>
                <div><span>Calibration Pending</span><strong>48</strong></div>
                <div><span>Asset Expiry</span><strong>31</strong></div>
                <div><span>Vendor Performance</span><strong>89%</strong></div>
              </div>
            </div>
            <form id="uk-landing-form" className="lead-form" onSubmit={handleFormSubmit}>
              <h3>Request a Demo / Pricing</h3>
              <p className="micro-proof">No long sales cycle on first call. Get a practical product walkthrough.</p>
              <p className="form-intent">You selected: {formType}</p>
              {isSubmitted ? (
                <p className="form-success">
                  Thank you. Our team will review your requirement and contact you shortly.
                </p>
              ) : (
                <>
                  <label htmlFor="name">Full Name</label>
                  <input id="name" name="name" required />
                  <label htmlFor="company">Company Name</label>
                  <input id="company" name="company" required />
                  <label htmlFor="email">Work Email</label>
                  <input id="email" type="email" name="email" required />
                  <label htmlFor="phone">Phone Number</label>
                  <input id="phone" name="phone" />
                  <label htmlFor="country">Country</label>
                  <input id="country" name="country" placeholder="Country" required />
                  <button className="btn-primary-uk full-btn" type="submit">Book My Demo</button>
                </>
              )}
            </form>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="uk-container">
          <div className="mini-proof-bar">
            <div><strong>20-minute demo</strong><span>Focused on your actual workflow</span></div>
            <div><strong>Operational process fit</strong><span>Supports multi-site operational teams</span></div>
            <div><strong>Flexible deployment</strong><span>Cloud, private cloud, or on-prem</span></div>
          </div>
          <h2>Still managing assets and maintenance through Excel, emails, and paper records?</h2>
          <p>
            Many asset-heavy businesses lose visibility when asset records, maintenance schedules, service documents,
            vendor details, and audit records are spread across multiple files and teams.
          </p>
          <div className="card-grid three-col">
            {[
              'Missed preventive maintenance schedules',
              'No single view of assets across locations',
              'Breakdown tracking becomes reactive',
              'Calibration certificates are difficult to find',
              'Vendor service history is scattered',
              'Audit preparation takes too much manual effort'
            ].map((item) => (
              <div className="info-card" key={item}>
                <FiAlertCircle />
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space alt-bg">
        <div className="uk-container">
          <h2>RIO EAM brings your asset lifecycle into one controlled system</h2>
          <p>
            From asset purchase to maintenance, inspection, calibration, vendor service, depreciation, and scrap, RIO
            EAM helps teams manage the full asset lifecycle with better visibility and accountability.
          </p>
          <div className="card-grid three-col">
            {featureCards.map((feature) => (
              <article className="info-card" key={feature.title}>
                {feature.icon}
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="uk-container">
          <h2>RIO EAM in action across desktop and mobile workflows</h2>
          <p>
            Track assets, monitor maintenance status, and update work orders with a practical interface built for both
            operations teams and field users.
          </p>
          <div className="visual-gallery">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1280&q=80"
              alt="Operations dashboard and maintenance analytics view"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1280&q=80"
              alt="Team reviewing maintenance and asset tracking reports"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1280&q=80"
              alt="Mobile workflow for field maintenance updates"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="uk-container">
          <h2>Designed for businesses with critical assets and maintenance responsibility</h2>
          <div className="card-grid two-col">
            <article className="info-card">
              <FiSettings />
              <h3>Manufacturing &amp; Industrial Units</h3>
              <ul className="tick-list">
                <li>Plant equipment maintenance</li>
                <li>Breakdown reporting</li>
                <li>Engineer assignment</li>
                <li>Inspection records</li>
                <li>Maintenance history</li>
                <li>Asset downtime visibility</li>
              </ul>
            </article>
            <article className="info-card">
              <FiMapPin />
              <h3>Facilities Management</h3>
              <ul className="tick-list">
                <li>Multi-site asset tracking</li>
                <li>Service schedules</li>
                <li>Contractor/vendor management</li>
                <li>Work order tracking</li>
                <li>Asset condition records</li>
              </ul>
            </article>
            <article className="info-card">
              <FiActivity />
              <h3>Healthcare, Clinics &amp; Care Facilities</h3>
              <ul className="tick-list">
                <li>Medical and non-medical equipment tracking</li>
                <li>Calibration certificates</li>
                <li>Preventive maintenance history</li>
                <li>Vendor service records</li>
                <li>Audit-ready documentation</li>
              </ul>
            </article>
            <article className="info-card">
              <FiGrid />
              <h3>Hotels, Education &amp; Multi-Site Businesses</h3>
              <ul className="tick-list">
                <li>Room/floor-wise assets</li>
                <li>AMC tracking</li>
                <li>Maintenance requests</li>
                <li>Asset movement</li>
                <li>Replacement and scrap tracking</li>
              </ul>
            </article>
          </div>
        </div>
      </section>


      <section className="section-space">
        <div className="uk-container">
          <h2>Can work alongside SAP PM, ERP, or your existing systems</h2>
          <p>
            For companies already using SAP PM, ERP, or other internal systems, RIO EAM can act as a front-end or
            extension layer for selected asset and maintenance workflows.
          </p>
          <div className="card-grid two-col">
            {[
              { icon: <FiLayers />, text: 'Equipment and asset master synchronization' },
              { icon: <FiTool />, text: 'Maintenance notifications and work order touchpoints' },
              { icon: <FiClipboard />, text: 'Inspection and measurement result capture' },
              { icon: <FiFileText />, text: 'Document and attachment linkage' },
              { icon: <FiClock />, text: 'Custom approval workflows' },
              { icon: <FiUsers />, text: 'Role-based access for non-SAP users' },
              { icon: <FiMonitor />, text: 'Potential to reduce dependency on expensive named-user access where applicable' }
            ].map((point) => (
              <div className="info-card compact" key={point.text}>
                {point.icon}
                <p>{point.text}</p>
              </div>
            ))}
          </div>
          <p className="note-line">
            RIO EAM can be positioned as a flexible operational layer around SAP PM or ERP, depending on the
            customer&apos;s architecture and integration needs.
          </p>
        </div>
      </section>

      <section className="section-space alt-bg">
        <div className="uk-container">
          <h2>Flexible deployment for different IT policies</h2>
          <div className="card-grid three-col">
            <article className="info-card">
              <FiMonitor />
              <h3>Cloud Deployment</h3>
              <p>For companies that want faster rollout and lower infrastructure management.</p>
            </article>
            <article className="info-card">
              <FiShield />
              <h3>Private Cloud</h3>
              <p>For companies that want dedicated hosting and stronger control.</p>
            </article>
            <article className="info-card">
              <FiTruck />
              <h3>On-Prem Deployment</h3>
              <p>For companies that prefer hosting within their own IT environment.</p>
            </article>
          </div>
          <p className="note-line">RIO BizSols can support implementation, configuration, training, and ongoing support.</p>
        </div>
      </section>

      <section className="section-space">
        <div className="uk-container">
          <h2>Why companies choose RIO EAM</h2>
          <div className="card-grid three-col">
            {[
              'Practical workflows for asset-heavy teams',
              'Configurable approvals and user roles',
              'Mobile-friendly maintenance updates',
              'Multi-location asset visibility',
              'Audit-ready service and document history',
              'Implementation support from RIO BizSols'
            ].map((point) => (
              <div className="info-card compact" key={point}>
                <FiCalendar />
                <p>{point}</p>
              </div>
            ))}
          </div>
          <p className="note-line">
            Unlike generic asset registers, RIO EAM is built to manage the complete asset lifecycle from procurement to
            maintenance, compliance records, depreciation, expiry, and scrap.
          </p>
        </div>
      </section>

      <section className="section-space cta-strip">
        <div className="uk-container center">
          <h2>See how RIO EAM can fit your operation</h2>
          <p>
            Book a short demo and we&apos;ll show how your team can manage assets, maintenance, calibration, vendors,
            documents, and audit records in one system.
          </p>
          <div className="cta-row center">
            <button className="btn-primary-uk" onClick={() => jumpToForm('Demo')} type="button">
              Book a 20-minute Demo
            </button>
            <button className="btn-secondary-uk" onClick={() => jumpToForm('Pricing')} type="button">
              Request Pricing
            </button>
          </div>
          <p className="cta-helper">Prefer email first? Use the pricing form and we will respond with a scoped estimate.</p>
        </div>
      </section>

      <section className="section-space alt-bg">
        <div className="uk-container">
          <h2>Request a Demo / Pricing</h2>
          <p className="mb-20">Additional details help us tailor the demo for your operation.</p>
          <form className="lead-form lead-form-bottom" onSubmit={handleFormSubmit}>
            {isSubmitted ? (
              <p className="form-success">
                Thank you. Our team will review your requirement and contact you shortly.
              </p>
            ) : (
              <div className="bottom-form-grid">
                <div>
                  <label htmlFor="fullName2">Full Name</label>
                  <input id="fullName2" name="fullName2" required />
                </div>
                <div>
                  <label htmlFor="company2">Company Name</label>
                  <input id="company2" name="company2" required />
                </div>
                <div>
                  <label htmlFor="email2">Work Email</label>
                  <input id="email2" type="email" name="email2" required />
                </div>
                <div>
                  <label htmlFor="phone2">Phone Number</label>
                  <input id="phone2" name="phone2" />
                </div>
                <div>
                  <label htmlFor="country2">Country</label>
                  <input id="country2" name="country2" placeholder="Country" required />
                </div>
                <div>
                  <label htmlFor="industry">Industry</label>
                  <select id="industry" name="industry" required>
                    <option value="">Select Industry</option>
                    <option>Manufacturing</option>
                    <option>Healthcare / Clinics</option>
                    <option>Facilities Management</option>
                    <option>Hospitality</option>
                    <option>Education</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="sites">Number of Sites</label>
                  <select id="sites" name="sites" required>
                    <option value="">Select Site Count</option>
                    <option>1</option>
                    <option>2-5</option>
                    <option>6-20</option>
                    <option>20+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="assets">Approximate Asset Count</label>
                  <select id="assets" name="assets" required>
                    <option value="">Select Asset Count</option>
                    <option>Below 500</option>
                    <option>500-2,000</option>
                    <option>2,000-10,000</option>
                    <option>10,000+</option>
                  </select>
                </div>
                <div className="full-width">
                  <label htmlFor="message">Message / Requirement</label>
                  <textarea id="message" name="message" rows="4" />
                </div>
                <div className="full-width">
                  <button className="btn-primary-uk full-btn" type="submit">Book My Demo</button>
                </div>
              </div>
            )}
          </form>
          <p className="integration-note">
            Ready to connect later with Odoo CRM, Email API, webhook, Google Sheet, or backend endpoint.
          </p>
        </div>
      </section>

      <section className="section-space">
        <div className="uk-container">
          <h2>Frequently asked questions</h2>
          <div className="faq-list">
            {[
              {
                q: 'What is RIO EAM?',
                a: 'RIO EAM is Enterprise Asset Managment software that helps organizations manage assets, maintenance, inspections, calibration, vendor contracts, documents, depreciation, and asset lifecycle records from one platform.'
              },
              {
                q: 'Is RIO EAM the same as CMMS?',
                a: 'RIO EAM includes CMMS-style maintenance management features, but it also covers wider asset lifecycle functions such as asset registry, document tracking, vendor contracts, depreciation, expiry, and scrap management.'
              },
              {
                q: 'Can RIO EAM be used by manufacturing companies?',
                a: 'Yes. Manufacturing companies can use it for plant equipment tracking, preventive maintenance, breakdown management, engineer assignments, inspections, and maintenance history.'
              },
              {
                q: 'Can it support healthcare or clinic equipment?',
                a: 'Yes. It can help healthcare and clinic teams track equipment, service schedules, calibration records, vendor service reports, and audit-ready maintenance documentation.'
              },
              {
                q: 'Can RIO EAM integrate with SAP PM or ERP?',
                a: 'Yes, integration can be planned based on the customer’s system landscape. RIO EAM can work alongside SAP PM or ERP for selected asset, maintenance, document, and workflow processes.'
              },
              {
                q: 'Is on-prem deployment available?',
                a: 'Yes. RIO EAM can be deployed on cloud, private cloud, or on-prem depending on customer IT policy.'
              },
              {
                q: 'Is the system suitable for multi-location companies?',
                a: 'Yes. RIO EAM supports branch, department, floor, location, and role-based asset tracking.'
              },
              {
                q: 'How do we get pricing?',
                a: 'Pricing depends on the number of locations, asset volume, modules, deployment model, implementation scope, and support needs. Visitors can request pricing through the form.'
              }
            ].map((faq) => (
              <article className="faq-item" key={faq.q}>
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space footer-cta">
        <div className="uk-container center">
          <h2>Ready to move beyond Excel-based asset and maintenance tracking?</h2>
          <button className="btn-primary-uk" onClick={() => jumpToForm('Demo')} type="button">
            Book a Demo
          </button>
          <p className="small-footer-text">
            RIO BizSols Pvt Ltd | Enterprise Asset Managment Software | Demo Enquiries
          </p>
        </div>
      </section>

      <div className="mobile-sticky-cta">
        <button onClick={() => jumpToForm('Demo')} type="button">Book a 20-minute Demo</button>
      </div>

      <div className="desktop-sticky-cta">
        <button className="btn-primary-uk" onClick={() => jumpToForm('Demo')} type="button">
          Book a 20-minute Demo
        </button>
        <button className="btn-secondary-uk" onClick={() => jumpToForm('Pricing')} type="button">
          Request Pricing
        </button>
      </div>
    </div>
  );
};

export default RioALMUkLanding;
