import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FiActivity, FiAlertCircle, FiCalendar, FiCheckCircle, FiClipboard, FiClock, FiDatabase, FiFileText, FiGrid, FiLayers, FiMapPin, FiMonitor, FiSettings, FiShield, FiSmartphone, FiTool, FiTruck, FiUsers } from 'react-icons/fi';
import './RioALMGenericLanding.css';
import { getApiBaseUrl } from '../../utils/urlHelper';

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

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
const UTM_STORAGE_KEY = 'rio_alm_landing_utm';

const RioALMGenericLanding = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPricingSubmitted, setIsPricingSubmitted] = useState(false);
  const [isPricingSubmitting, setIsPricingSubmitting] = useState(false);
  const [pricingError, setPricingError] = useState('');
  const [utmParams, setUtmParams] = useState({
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_term: '',
    utm_content: '',
  });
  const calendlyUrl =
    process.env.REACT_APP_CALENDLY_URL ||
    'https://calendly.com/tony-rozario-vs6w/30min';

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!document.querySelector('script[data-calendly-widget="true"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.setAttribute('data-calendly-widget', 'true');
      document.body.appendChild(script);
    }

    // Capture UTM parameters from the current URL and persist them so the
    // values survive scroll / form-fill / page reload during the same session.
    try {
      const search = typeof window !== 'undefined' ? window.location.search : '';
      const params = new URLSearchParams(search);
      const fromUrl = {};
      UTM_KEYS.forEach((key) => {
        const value = params.get(key);
        if (value) fromUrl[key] = value;
      });

      const stored = (() => {
        try {
          const raw = window.sessionStorage.getItem(UTM_STORAGE_KEY);
          return raw ? JSON.parse(raw) : {};
        } catch {
          return {};
        }
      })();

      const merged = UTM_KEYS.reduce((acc, key) => {
        acc[key] = fromUrl[key] || stored[key] || '';
        return acc;
      }, {});

      setUtmParams(merged);

      const hasAny = Object.values(fromUrl).some(Boolean);
      if (hasAny) {
        try {
          window.sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(merged));
        } catch {}
      }
    } catch (error) {
      console.warn('UTM capture failed:', error?.message || error);
    }
  }, []);

  const faqSchema = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is RIO ALM?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'RIO ALM is Asset Lifecycle Management software that helps organizations manage assets, maintenance, inspections, calibration, vendor contracts, documents, depreciation, and asset lifecycle records from one platform.'
          }
        },
        {
          '@type': 'Question',
          name: 'Is RIO ALM the same as CMMS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'RIO ALM includes CMMS-style maintenance management features, but it also covers wider asset lifecycle functions such as asset registry, document tracking, vendor contracts, depreciation, expiry, and scrap management.'
          }
        },
        {
          '@type': 'Question',
          name: 'Can RIO ALM be used by manufacturing companies?',
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
          name: 'Can RIO ALM integrate with SAP PM or ERP?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, integration can be planned based on the customer system landscape. RIO ALM can work alongside SAP PM or ERP for selected asset, maintenance, document, and workflow processes.'
          }
        },
        {
          '@type': 'Question',
          name: 'Is on-prem deployment available?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. RIO ALM can be deployed on cloud, private cloud, or on-prem depending on customer IT policy.'
          }
        },
        {
          '@type': 'Question',
          name: 'Is the system suitable for multi-location companies?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. RIO ALM supports branch, department, floor, location, and role-based asset tracking.'
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
      name: 'RIO ALM - Asset Lifecycle Management Software',
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
        'RIO ALM helps organizations manage assets, preventive maintenance, breakdowns, calibration, vendors, documents and audit-ready records.'
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

  const jumpToPricingForm = () => {
    const formSection = document.getElementById('pricing-contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openCalendlyDemo = () => {
    // Append captured UTM parameters so Calendly tracking and the
    // confirmation email retain campaign attribution end-to-end.
    let urlWithUtm = calendlyUrl;
    try {
      const u = new URL(calendlyUrl);
      UTM_KEYS.forEach((key) => {
        if (utmParams[key]) u.searchParams.set(key, utmParams[key]);
      });
      urlWithUtm = u.toString();
    } catch {
      urlWithUtm = calendlyUrl;
    }

    if (window.Calendly && typeof window.Calendly.initPopupWidget === 'function') {
      window.Calendly.initPopupWidget({ url: urlWithUtm });
      return;
    }
    window.open(urlWithUtm, '_blank', 'noopener,noreferrer');
  };

  const handlePricingFormSubmit = async (event) => {
    event.preventDefault();
    if (isPricingSubmitting) return;

    const formEl = event.currentTarget;
    const formData = new FormData(formEl);
    const payload = {
      ...Object.fromEntries(formData.entries()),
      ...utmParams,
      landing_page: typeof window !== 'undefined' ? window.location.href : '',
      referrer: typeof document !== 'undefined' ? document.referrer : '',
    };
    const apiBase = getApiBaseUrl();

    setPricingError('');
    setIsPricingSubmitting(true);

    try {
      const response = await fetch(`${apiBase}/api/pricing-request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error('Pricing request failed');
      }

      setIsPricingSubmitted(true);
      formEl.reset();
    } catch (error) {
      console.error('Error submitting pricing request:', error);
      setPricingError('Unable to send pricing request right now. Please try again in a moment.');
    } finally {
      setIsPricingSubmitting(false);
    }
  };

  return (
    <div className="rio-uk-landing">
      <Helmet>
        <title>Asset Maintenance Management Software | RIO ALM</title>
        <meta
          name="description"
          content="RIO ALM helps organizations manage assets, preventive maintenance, breakdowns, calibration, vendors, documents and audit-ready records."
        />
        <meta
          name="keywords"
          content="asset management software, asset maintenance software, CMMS software, EAM software, preventive maintenance software, planned preventive maintenance software, equipment maintenance software, asset lifecycle management software, maintenance tracking software, work order management software, calibration management software"
        />
        <meta property="og:title" content="RIO ALM - Asset Lifecycle & Maintenance Management Software" />
        <meta
          property="og:description"
          content="Centralize asset records, automate maintenance, track calibration, manage vendors, and keep audit-ready records with RIO ALM."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.riobizsols.com/asset-maintenance-management-software" />
        <meta property="og:image" content="https://www.riobizsols.com/alm-dashboard-user.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RIO ALM - Asset Lifecycle & Maintenance Management Software" />
        <meta name="twitter:description" content="Centralize asset records, automate maintenance, track calibration, manage vendors, and keep audit-ready records with RIO ALM." />
        <meta name="twitter:image" content="https://www.riobizsols.com/alm-dashboard-user.png" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://www.riobizsols.com/asset-maintenance-management-software" />
        <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
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
          <span>Asset Lifecycle Management Demo Enquiries</span>
        </div>
      </section>

      <section className="uk-hero section-space">
        <div className="uk-container uk-grid-hero">
          <div className="hero-content">
            <p className="uk-tag">Asset Lifecycle Management & Maintenance Management</p>
            <h1>Asset &amp; Maintenance Management Software for UK Operations Teams</h1>
            <p className="hero-subcopy">
              RIO ALM helps organizations track assets, automate maintenance, manage inspections, store documents, and
              maintain audit-ready records from one central system.
            </p>
            <p>
              Built for operations teams that need better maintenance discipline, visibility, and service control.
            </p>
            <div className="hero-image-grid">
              <img
                src="/alm-dashboard-user.png"
                alt="RIO ALM asset lifecycle management dashboard"
                loading="eager"
              />
            </div>
            <div className="cta-row">
              <button className="btn-primary-uk" onClick={openCalendlyDemo} type="button">
                Book a 20-minute Demo
              </button>
              <button className="btn-secondary-uk" onClick={jumpToPricingForm} type="button">
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
            <form id="uk-landing-form" className="lead-form" onSubmit={handleFormSubmit}>
              <h3>Request a Demo / Pricing</h3>
              <p className="micro-proof">No long sales cycle on first call. Get a practical product walkthrough.</p>
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
          <h2>RIO ALM brings your asset lifecycle into one controlled system</h2>
          <p>
            From asset purchase to maintenance, inspection, calibration, vendor service, depreciation, and scrap, RIO
            ALM helps teams manage the full asset lifecycle with better visibility and accountability.
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
            For companies already using SAP PM, ERP, or other internal systems, RIO ALM can act as a front-end or
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
            RIO ALM can be positioned as a flexible operational layer around SAP PM or ERP, depending on the
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
          <h2>Why companies choose RIO ALM</h2>
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
            Unlike generic asset registers, RIO ALM is built to manage the complete asset lifecycle from procurement to
            maintenance, compliance records, depreciation, expiry, and scrap.
          </p>
        </div>
      </section>

      <section className="section-space cta-strip">
        <div className="uk-container center">
          <h2>See how RIO ALM can fit your operation</h2>
          <p>
            Book a short demo and we&apos;ll show how your team can manage assets, maintenance, calibration, vendors,
            documents, and audit records in one system.
          </p>
          <div className="cta-row center">
            <button className="btn-primary-uk" onClick={openCalendlyDemo} type="button">
              Book a 20-minute Demo
            </button>
            <button className="btn-secondary-uk" onClick={jumpToPricingForm} type="button">
              Request Pricing
            </button>
          </div>
          <p className="cta-helper">Prefer email first? Use the pricing form and we will respond with a scoped estimate.</p>
        </div>
      </section>

      <section className="section-space alt-bg" id="pricing-contact-form">
        <div className="uk-container">
          <h2>Request Pricing</h2>
          <p className="mb-20">Share your requirement and we will send a pricing response to your team.</p>
          <form className="lead-form lead-form-bottom" onSubmit={handlePricingFormSubmit}>
            {isPricingSubmitted ? (
              <p className="form-success">
                Thank you. Your pricing request has been sent to tony.rozario@riobizsols.com.
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
                {UTM_KEYS.map((key) => (
                  <input key={key} type="hidden" name={key} value={utmParams[key] || ''} readOnly />
                ))}
                <div className="full-width">
                  {pricingError && <p className="form-error">{pricingError}</p>}
                  <button className="btn-primary-uk full-btn" type="submit" disabled={isPricingSubmitting}>
                    {isPricingSubmitting ? 'Sending...' : 'Send Pricing Request'}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>

      <section className="section-space">
        <div className="uk-container">
          <h2>Frequently asked questions</h2>
          <div className="faq-list">
            {[
              {
                q: 'What is RIO ALM?',
                a: 'RIO ALM is Asset Lifecycle Management software that helps organizations manage assets, maintenance, inspections, calibration, vendor contracts, documents, depreciation, and asset lifecycle records from one platform.'
              },
              {
                q: 'Is RIO ALM the same as CMMS?',
                a: 'RIO ALM includes CMMS-style maintenance management features, but it also covers wider asset lifecycle functions such as asset registry, document tracking, vendor contracts, depreciation, expiry, and scrap management.'
              },
              {
                q: 'Can RIO ALM be used by manufacturing companies?',
                a: 'Yes. Manufacturing companies can use it for plant equipment tracking, preventive maintenance, breakdown management, engineer assignments, inspections, and maintenance history.'
              },
              {
                q: 'Can it support healthcare or clinic equipment?',
                a: 'Yes. It can help healthcare and clinic teams track equipment, service schedules, calibration records, vendor service reports, and audit-ready maintenance documentation.'
              },
              {
                q: 'Can RIO ALM integrate with SAP PM or ERP?',
                a: 'Yes, integration can be planned based on the customer’s system landscape. RIO ALM can work alongside SAP PM or ERP for selected asset, maintenance, document, and workflow processes.'
              },
              {
                q: 'Is on-prem deployment available?',
                a: 'Yes. RIO ALM can be deployed on cloud, private cloud, or on-prem depending on customer IT policy.'
              },
              {
                q: 'Is the system suitable for multi-location companies?',
                a: 'Yes. RIO ALM supports branch, department, floor, location, and role-based asset tracking.'
              },
              {
                q: 'How do we get pricing?',
                a: 'Pricing depends on the number of locations, asset volume, modules, deployment model, implementation scope, and support needs. Visitors can request pricing through the form.'
              }
            ].map((faq) => (
              <details className="faq-item" key={faq.q}>
                <summary>
                  <span>{faq.q}</span>
                  <span className="faq-icon" aria-hidden="true">+</span>
                </summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space footer-cta">
        <div className="uk-container center">
          <h2>Ready to move beyond Excel-based asset and maintenance tracking?</h2>
          <button className="btn-primary-uk" onClick={openCalendlyDemo} type="button">
            Book a Demo
          </button>
          <p className="small-footer-text">
            RIO BizSols Pvt Ltd | Asset Lifecycle Management Software | Demo Enquiries
          </p>
        </div>
      </section>

      <div className="mobile-sticky-cta">
        <button onClick={openCalendlyDemo} type="button">Book a 20-minute Demo</button>
      </div>

      <div className="desktop-sticky-cta">
        <button className="btn-primary-uk" onClick={openCalendlyDemo} type="button">
          Book a 20-minute Demo
        </button>
        <button className="btn-secondary-uk" onClick={jumpToPricingForm} type="button">
          Request Pricing
        </button>
      </div>
    </div>
  );
};

export default RioALMGenericLanding;
