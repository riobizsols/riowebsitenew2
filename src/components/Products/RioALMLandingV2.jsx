import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  FiActivity,
  FiAlertCircle,
  FiBarChart2,
  FiCheckCircle,
  FiClipboard,
  FiDatabase,
  FiFileText,
  FiShield,
  FiSmartphone,
  FiTool,
  FiUsers,
  FiArrowRight,
} from 'react-icons/fi';
import RioLogo from '../../assets/images/RIO-Logo.png';
import './RioALMLandingV2.css';
import { getApiBaseUrl } from '../../utils/urlHelper';

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
const UTM_STORAGE_KEY = 'rio_alm_landing_v2_utm';

const problemCards = [
  { icon: <FiClipboard />, text: 'Missed preventive maintenance schedules' },
  { icon: <FiBarChart2 />, text: 'No single view of assets across locations' },
  { icon: <FiAlertCircle />, text: 'Breakdown tracking becomes reactive and delayed' },
  { icon: <FiFileText />, text: 'Calibration certificates are difficult to find' },
  { icon: <FiUsers />, text: 'Vendor service history is scattered' },
  { icon: <FiCheckCircle />, text: 'Audit preparation takes too much manual effort' },
];

const featureCards = [
  {
    icon: <FiDatabase />,
    title: 'Centralized Asset Register',
    description:
      'Maintain all asset details, documents, warranty, location, department, floor, and ownership history in one place.',
  },
  {
    icon: <FiTool />,
    title: 'Preventive & Breakdown Maintenance',
    description:
      'Plan schedules, raise work orders, assign engineers, and track maintenance history end-to-end.',
  },
  {
    icon: <FiCheckCircle />,
    title: 'Inspection & Calibration Tracking',
    description:
      'Schedule inspections, record results, track calibration due dates and store service certificates digitally.',
  },
  {
    icon: <FiUsers />,
    title: 'Vendor & Contract Management',
    description:
      'Manage AMC/CMC contracts, vendor performance, service history, and contract validity.',
  },
  {
    icon: <FiSmartphone />,
    title: 'Mobile Scanning & Updates',
    description:
      'Empower field teams to scan assets, update status, upload photos, and close work orders on the go.',
  },
  {
    icon: <FiShield />,
    title: 'Audit Logs & Role-Based Access',
    description:
      'Ensure accountability with complete activity logs, approvals, and role-based access control.',
  },
];

const industries = [
  {
    title: 'Manufacturing & Industrial',
    image: '/manufacturing-industrial-rio-alm.png',
    points: [
      'Plant equipment maintenance',
      'Breakdown tracking',
      'Engineer assignment',
      'Inspection records',
      'Downtime reduction',
    ],
  },
  {
    title: 'Healthcare & Hospitals',
    image:
      'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=80',
    points: [
      'Medical & non-medical assets',
      'Calibration & compliance',
      'Preventive maintenance',
      'Vendor service records',
      'Audit-ready documentation',
    ],
  },
  {
    title: 'Facilities Management',
    image:
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80',
    points: [
      'Multi-site asset tracking',
      'Service schedules',
      'Contractor management',
      'Work order tracking',
      'Asset condition monitoring',
    ],
  },
  {
    title: 'Hospitality, Education & Other Sectors',
    image:
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80',
    points: [
      'Room/floor-wise assets',
      'AMC tracking',
      'Maintenance requests',
      'Asset movement',
      'Replacement & scrap tracking',
    ],
  },
];

const faqs = [
  {
    q: 'What is RIO ALM?',
    a: 'RIO ALM is Asset Lifecycle Management software that helps organizations manage assets, maintenance, inspections, calibration, vendor contracts, documents, depreciation, and asset lifecycle records from one platform.',
  },
  {
    q: 'Is RIO ALM the same as CMMS?',
    a: 'RIO ALM includes CMMS-style maintenance management features, but it also covers wider asset lifecycle functions such as asset registry, document tracking, vendor contracts, depreciation, expiry, and scrap management.',
  },
  {
    q: 'Can RIO ALM be used by manufacturing companies?',
    a: 'Yes. Manufacturing companies can use it for plant equipment tracking, preventive maintenance, breakdown management, engineer assignments, inspections, and maintenance history.',
  },
  {
    q: 'Can it support healthcare or clinic equipment?',
    a: 'Yes. It can help healthcare and clinic teams track equipment, service schedules, calibration records, vendor service reports, and audit-ready maintenance documentation.',
  },
  {
    q: 'Can RIO ALM integrate with SAP PM or ERP?',
    a: 'Yes, integration can be planned based on the customer system landscape. RIO ALM can work alongside SAP PM or ERP for selected asset, maintenance, document, and workflow processes.',
  },
  {
    q: 'Is on-prem deployment available?',
    a: 'Yes. RIO ALM can be deployed on cloud, private cloud, or on-prem depending on customer IT policy.',
  },
  {
    q: 'How do we get pricing?',
    a: 'Pricing depends on the number of locations, asset volume, modules, deployment model, implementation scope, and support needs. Use the pricing form below.',
  },
];

const RioALMLandingV2 = () => {
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

      if (Object.values(fromUrl).some(Boolean)) {
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
      mainEntity: faqs.map((entry) => ({
        '@type': 'Question',
        name: entry.q,
        acceptedAnswer: { '@type': 'Answer', text: entry.a },
      })),
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
        priceCurrency: 'GBP',
      },
      areaServed: 'Global',
      publisher: {
        '@type': 'Organization',
        name: 'RIO BizSols Pvt Ltd',
        url: 'https://www.riobizsols.com/',
      },
      description:
        'RIO ALM helps organizations manage the complete asset lifecycle - from procurement to maintenance, calibration, and disposal in one centralized system.',
    }),
    []
  );

  const openCalendlyDemo = () => {
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

  const jumpToPricingForm = () => {
    const form = document.getElementById('v2-pricing-form');
    if (form) form.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error('Pricing request failed');
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
    <div className="rio-v2-landing">
      <Helmet>
        <title>Asset Lifecycle Management Software | RIO ALM</title>
        <meta
          name="description"
          content="RIO ALM helps you manage the complete asset lifecycle - from procurement to maintenance, calibration, and disposal - in one centralized system."
        />
        <meta
          name="keywords"
          content="asset lifecycle management software, asset management software, CMMS software, EAM software, preventive maintenance software, calibration tracking software, vendor contract management, audit ready maintenance"
        />
        <meta property="og:title" content="RIO ALM - Asset Lifecycle Management Software" />
        <meta
          property="og:description"
          content="Struggling to keep track of your assets, maintenance & compliance? RIO ALM gives you complete asset visibility, reduces downtime, and keeps you audit-ready."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.riobizsols.com/asset-maintenance-management-software-v2" />
        <meta property="og:image" content="https://www.riobizsols.com/alm-dashboard-user.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RIO ALM - Asset Lifecycle Management Software" />
        <meta
          name="twitter:description"
          content="Manage the complete asset lifecycle - from procurement to disposal - in one centralized system."
        />
        <meta name="twitter:image" content="https://www.riobizsols.com/alm-dashboard-user.png" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://www.riobizsols.com/asset-maintenance-management-software-v2" />
        <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
        <script type="application/ld+json">{JSON.stringify(softwareSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div
        className="v2-tracking-placeholders"
        aria-hidden="true"
        dangerouslySetInnerHTML={{
          __html: `
            <!-- GA4 Tracking Code Here -->
            <!-- Google Ads Conversion Tracking Code Here -->
            <!-- Microsoft UET Tag Here -->
            <!-- LinkedIn Insight Tag Here -->
          `,
        }}
      />

      <header className="v2-topbar">
        <div className="v2-container v2-topbar-inner">
          <a href="/" className="v2-logo-link" aria-label="RIO BizSols">
            <img src={RioLogo} alt="RIO BizSols" className="v2-logo" />
          </a>
          <div className="v2-topbar-right">
            <button className="v2-btn-primary v2-btn-sm" onClick={openCalendlyDemo} type="button">
              Book a 20-minute Demo
            </button>
          </div>
        </div>
      </header>

      <section className="v2-hero">
        <div className="v2-container v2-hero-grid">
          <div className="v2-hero-text">
            <p className="v2-eyebrow">ASSET LIFECYCLE MANAGEMENT SOFTWARE</p>
            <h1>
              Struggling to keep track of your assets, maintenance &amp; compliance?
            </h1>
            <p className="v2-hero-sub">
              RIO ALM helps you manage the complete asset lifecycle &ndash; from procurement to maintenance,
              calibration, and disposal &ndash; in one centralized system.
            </p>
            <div className="v2-hero-ctas">
              <button className="v2-btn-primary" onClick={openCalendlyDemo} type="button">
                <span className="v2-btn-icon">📅</span> Book a 20-minute Demo
              </button>
              <button className="v2-btn-outline" onClick={jumpToPricingForm} type="button">
                <span className="v2-btn-icon">🏷️</span> Get Pricing / Quote
              </button>
            </div>
            <ul className="v2-trust-row">
              <li><FiCheckCircle /> Complete Asset Visibility</li>
              <li><FiCheckCircle /> Reduce Downtime</li>
              <li><FiCheckCircle /> Audit-Ready Records</li>
            </ul>
          </div>

          <div className="v2-hero-visual">
            <div className="v2-hero-dashboard-wrap">
              <img
                src="/alm-dashboard-user.png"
                alt="RIO ALM desktop dashboard with asset and maintenance metrics"
                className="v2-hero-dashboard-img"
                width={900}
                height={520}
                loading="eager"
                decoding="async"
              />
            </div>

            <div className="v2-phone-mock">
              <div className="v2-phone-screen">
                <img
                  src="/rio-alm-asset-management-mobile.png"
                  alt="RIO ALM Asset Management mobile app welcome screen with totals and quick actions"
                  className="v2-hero-mobile-img"
                  width={360}
                  height={780}
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="v2-problem-strip">
        <div className="v2-container">
          <h2>Many organizations still rely on spreadsheets, emails, and paper records to manage critical assets.</h2>
          <div className="v2-problem-grid">
            {problemCards.map((p) => (
              <div className="v2-problem-card" key={p.text}>
                <div className="v2-problem-icon">{p.icon}</div>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="v2-features">
        <div className="v2-container">
          <h2>RIO ALM &ndash; Manage the Entire Asset Lifecycle</h2>
          <p className="v2-section-sub">
            From asset procurement to maintenance, inspection, calibration, vendor management, and disposal &ndash;
            control everything in one platform.
          </p>
          <div className="v2-feature-grid">
            {featureCards.map((f) => (
              <article className="v2-feature-card" key={f.title}>
                <div className="v2-feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="v2-industries">
        <div className="v2-container">
          <h2>Built for Multiple Industries</h2>
          <p className="v2-section-sub">
            RIO ALM adapts to your industry-specific asset and maintenance needs.
          </p>
          <div className="v2-industry-grid">
            {industries.map((ind) => (
              <article className="v2-industry-card" key={ind.title}>
                <div
                  className="v2-industry-image"
                  style={{ backgroundImage: `url(${ind.image})` }}
                  role="img"
                  aria-label={ind.title}
                />
                <div className="v2-industry-body">
                  <h3>{ind.title}</h3>
                  <ul>
                    {ind.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="v2-cta-strip">
        <div className="v2-container v2-cta-strip-inner">
          <div className="v2-cta-strip-text">
            <div className="v2-cta-badge"><FiActivity /></div>
            <div>
              <h3>See how RIO ALM can transform your asset and maintenance management.</h3>
              <p>Book a personalized demo and explore how it works for your organization.</p>
            </div>
          </div>
          <button className="v2-btn-primary v2-btn-light" onClick={openCalendlyDemo} type="button">
            Book a 20-minute Demo <FiArrowRight />
          </button>
        </div>
      </section>

      <section className="v2-pricing-section" id="v2-pricing-form">
        <div className="v2-container">
          <h2>Get Pricing / Quote</h2>
          <p className="v2-section-sub">
            Share your requirement and we will send a tailored pricing response to your team.
          </p>
          <form className="v2-form" onSubmit={handlePricingFormSubmit}>
            {isPricingSubmitted ? (
              <p className="v2-form-success">
                Thank you. Your pricing request has been sent to tony.rozario@riobizsols.com.
              </p>
            ) : (
              <div className="v2-form-grid">
                <div>
                  <label htmlFor="v2_fullName2">Full Name</label>
                  <input id="v2_fullName2" name="fullName2" required />
                </div>
                <div>
                  <label htmlFor="v2_company2">Company Name</label>
                  <input id="v2_company2" name="company2" required />
                </div>
                <div>
                  <label htmlFor="v2_email2">Work Email</label>
                  <input id="v2_email2" type="email" name="email2" required />
                </div>
                <div>
                  <label htmlFor="v2_phone2">Phone Number</label>
                  <input id="v2_phone2" name="phone2" />
                </div>
                <div>
                  <label htmlFor="v2_country2">Country</label>
                  <input id="v2_country2" name="country2" placeholder="Country" required />
                </div>
                <div>
                  <label htmlFor="v2_industry">Industry</label>
                  <select id="v2_industry" name="industry" required defaultValue="">
                    <option value="" disabled>Select Industry</option>
                    <option>Manufacturing</option>
                    <option>Healthcare / Clinics</option>
                    <option>Facilities Management</option>
                    <option>Hospitality</option>
                    <option>Education</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="v2_sites">Number of Sites</label>
                  <select id="v2_sites" name="sites" required defaultValue="">
                    <option value="" disabled>Select Site Count</option>
                    <option>1</option>
                    <option>2-5</option>
                    <option>6-20</option>
                    <option>20+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="v2_assets">Approximate Asset Count</label>
                  <select id="v2_assets" name="assets" required defaultValue="">
                    <option value="" disabled>Select Asset Count</option>
                    <option>Below 500</option>
                    <option>500-2,000</option>
                    <option>2,000-10,000</option>
                    <option>10,000+</option>
                  </select>
                </div>
                <div className="v2-full-width">
                  <label htmlFor="v2_message">Message / Requirement</label>
                  <textarea id="v2_message" name="message" rows="4" />
                </div>
                {UTM_KEYS.map((key) => (
                  <input key={key} type="hidden" name={key} value={utmParams[key] || ''} readOnly />
                ))}
                <div className="v2-full-width">
                  {pricingError && <p className="v2-form-error">{pricingError}</p>}
                  <button className="v2-btn-primary v2-full-btn" type="submit" disabled={isPricingSubmitting}>
                    {isPricingSubmitting ? 'Sending...' : 'Send Pricing Request'}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>

      <section className="v2-faqs">
        <div className="v2-container">
          <h2>Frequently asked questions</h2>
          <div className="v2-faq-list">
            {faqs.map((faq) => (
              <details className="v2-faq-item" key={faq.q}>
                <summary>
                  <span>{faq.q}</span>
                  <span className="v2-faq-icon" aria-hidden="true">+</span>
                </summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="v2-footer">
        <div className="v2-container v2-footer-inner">
          <img src={RioLogo} alt="RIO BizSols" className="v2-footer-logo" />
          <p>RIO BizSols Pvt Ltd | Asset Lifecycle Management Software | Demo Enquiries</p>
        </div>
      </footer>

      <div className="v2-mobile-sticky-cta">
        <button onClick={openCalendlyDemo} type="button">Book a 20-minute Demo</button>
      </div>
    </div>
  );
};

export default RioALMLandingV2;
