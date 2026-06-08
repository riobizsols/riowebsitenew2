/**
 * SEO/Ads-crawler ready prerender for the RIO EAM landing page.
 *
 * Why:
 * - Google AdsBot, Microsoft Ads crawler, PageSpeed Insights and similar
 *   tools struggle to render JavaScript-only React pages quickly.
 * - This module returns a fully-rendered HTML snapshot for the landing
 *   route. The same JS bundle still loads, so the React app hydrates on
 *   top for normal users (interactive form, Calendly, etc.).
 *
 * Usage:
 *   const { renderAlmLandingHtml } = require('./almLandingPrerender');
 *   app.get('/asset-maintenance-management-software', (req, res) => {
 *     res.set('Cache-Control', 'public, max-age=300');
 *     res.send(renderAlmLandingHtml(buildPath));
 *   });
 */

const fs = require('fs');
const path = require('path');

const SITE_BASE_URL = 'https://www.riobizsols.com';
const DEFAULT_PAGE_PATH = '/asset-maintenance-management-software';
const CMMS_PAGE_PATH = '/cmms-maintenance-management-software';
const EAM_PAGE_PATH = '/eam-maintenance-management-software';
const DEFAULT_PAGE_URL = `${SITE_BASE_URL}${DEFAULT_PAGE_PATH}`;

function isCmmsLandingPath(pathname = '') {
  const p = (pathname || '/').replace(/\/+$/, '') || '/';
  return (
    p === CMMS_PAGE_PATH ||
    p === '/uk/cmms-maintenance-management-software' ||
    p === '/asset-maintenance-management-software-v2'
  );
}

function isEamLandingPath(pathname = '') {
  return pathname === EAM_PAGE_PATH;
}

const PAGE_TITLE = 'Asset Maintenance Management Software | RIO EAM';
const PAGE_TITLE_V2 = 'Enterprise Asset Managment Software | RIO EAM';
const PAGE_DESCRIPTION =
  'RIO EAM helps organizations manage assets, preventive maintenance, breakdowns, calibration, vendors, documents and audit-ready records.';
const PAGE_DESCRIPTION_V2 =
  'RIO EAM helps you manage the complete asset lifecycle - from procurement to maintenance, calibration, and disposal - in one centralized system.';
const OG_TITLE = 'RIO EAM - Asset Lifecycle & Maintenance Management Software';
const OG_DESCRIPTION =
  'Centralize asset records, automate maintenance, track calibration, manage vendors, and keep audit-ready records with RIO EAM.';
const OG_DESCRIPTION_V2 =
  'Struggling to keep track of your assets, maintenance & compliance? RIO EAM gives you complete asset visibility, reduces downtime, and keeps you audit-ready.';

const FAQ_ENTRIES = [
  {
    q: 'What is RIO EAM?',
    a: 'RIO EAM is Enterprise Asset Managment software that helps organizations manage assets, maintenance, inspections, calibration, vendor contracts, documents, depreciation, and asset lifecycle records from one platform.',
  },
  {
    q: 'Is RIO EAM the same as CMMS?',
    a: 'RIO EAM includes CMMS-style maintenance management features, but it also covers wider asset lifecycle functions such as asset registry, document tracking, vendor contracts, depreciation, expiry, and scrap management.',
  },
  {
    q: 'Can RIO EAM be used by manufacturing companies?',
    a: 'Yes. Manufacturing companies can use it for plant equipment tracking, preventive maintenance, breakdown management, engineer assignments, inspections, and maintenance history.',
  },
  {
    q: 'Can it support healthcare or clinic equipment?',
    a: 'Yes. It can help healthcare and clinic teams track equipment, service schedules, calibration records, vendor service reports, and audit-ready maintenance documentation.',
  },
  {
    q: 'Can RIO EAM integrate with SAP PM or ERP?',
    a: 'Yes, integration can be planned based on the customer system landscape. RIO EAM can work alongside SAP PM or ERP for selected asset, maintenance, document, and workflow processes.',
  },
  {
    q: 'Is on-prem deployment available?',
    a: 'Yes. RIO EAM can be deployed on cloud, private cloud, or on-prem depending on customer IT policy.',
  },
  {
    q: 'Is the system suitable for multi-location companies?',
    a: 'Yes. RIO EAM supports branch, department, floor, location, and role-based asset tracking.',
  },
  {
    q: 'How do we get pricing?',
    a: 'Pricing depends on the number of locations, asset volume, modules, deployment model, implementation scope, and support needs. Visitors can request pricing through the form.',
  },
];

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ENTRIES.map((entry) => ({
    '@type': 'Question',
    name: entry.q,
    acceptedAnswer: { '@type': 'Answer', text: entry.a },
  })),
};

const SOFTWARE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'RIO EAM - Enterprise Asset Managment Software',
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
  description: PAGE_DESCRIPTION,
};

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildSeoHead({
  pageUrl = DEFAULT_PAGE_URL,
  title = PAGE_TITLE,
  description = PAGE_DESCRIPTION,
  ogTitle = OG_TITLE,
  ogDescription = OG_DESCRIPTION,
  preloadLcpImage = '',
} = {}) {
  const preloadLink = preloadLcpImage
    ? `<link rel="preload" as="image" href="${escapeHtml(preloadLcpImage)}" fetchpriority="high" />`
    : '';

  return [
    `<title>${escapeHtml(title)}</title>`,
    `<meta name="description" content="${escapeHtml(description)}" />`,
    `<meta name="keywords" content="asset management software, asset maintenance software, CMMS software, EAM software, preventive maintenance software, planned preventive maintenance software, equipment maintenance software, enterprise asset managment software, maintenance tracking software, work order management software, calibration management software" />`,
    `<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />`,
    `<link rel="canonical" href="${pageUrl}" />`,
    preloadLink,
    `<meta property="og:title" content="${escapeHtml(ogTitle)}" />`,
    `<meta property="og:description" content="${escapeHtml(ogDescription)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:url" content="${pageUrl}" />`,
    `<meta property="og:image" content="${SITE_BASE_URL}/alm-dashboard-user.png" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(ogTitle)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(ogDescription)}" />`,
    `<meta name="twitter:image" content="${SITE_BASE_URL}/alm-dashboard-user.png" />`,
    `<script type="application/ld+json">${JSON.stringify(SOFTWARE_SCHEMA)}</script>`,
    `<script type="application/ld+json">${JSON.stringify(FAQ_SCHEMA)}</script>`,
    `<!-- GA4 Tracking Code Here -->`,
    `<!-- Google Ads Conversion Tracking Code Here -->`,
    `<!-- Microsoft UET Tag Here -->`,
    `<!-- LinkedIn Insight Tag Here -->`,
  ].join('\n    ');
}

function buildPrerenderedBody(isV2 = false) {
  const heroImageSrc = isV2 ? '/alm-dashboard-user-900.png' : '/alm-dashboard-user.png';
  const faqHtml = FAQ_ENTRIES.map(
    (entry) =>
      `<details class="prerender-faq-item"><summary><strong>${escapeHtml(entry.q)}</strong></summary><p>${escapeHtml(entry.a)}</p></details>`
  ).join('\n');

  return `
  <main class="prerender-landing">
    <header class="prerender-header">
      <strong>RIO BizSols Pvt Ltd</strong>
      <span>Enterprise Asset Managment Demo Enquiries</span>
    </header>

    <section class="prerender-hero">
      <p class="prerender-tag">Enterprise Asset Managment &amp; Maintenance Management</p>
      <h1>Asset &amp; Maintenance Management Software for UK Operations Teams</h1>
      <p>
        RIO EAM helps organizations track assets, automate maintenance, manage inspections, store documents, and
        maintain audit-ready records from one central system.
      </p>
      <p>
        Built for operations teams that need better maintenance discipline, visibility, and service control.
      </p>
      <img src="${heroImageSrc}" alt="RIO EAM enterprise asset managment dashboard" width="900" height="450" />
      <div class="prerender-cta">
        <a class="prerender-btn-primary" href="#pricing-contact-form">Book a 20-minute Demo</a>
        <a class="prerender-btn-secondary" href="#pricing-contact-form">Request Pricing</a>
      </div>
      <p>Built by RIO BizSols for asset-heavy businesses that need better control, visibility, and maintenance discipline.</p>
    </section>

    <section>
      <h2>Still managing assets and maintenance through Excel, emails, and paper records?</h2>
      <p>
        Many asset-heavy businesses lose visibility when asset records, maintenance schedules, service documents,
        vendor details, and audit records are spread across multiple files and teams.
      </p>
      <ul>
        <li>Missed preventive maintenance schedules</li>
        <li>No single view of assets across locations</li>
        <li>Breakdown tracking becomes reactive</li>
        <li>Calibration certificates are difficult to find</li>
        <li>Vendor service history is scattered</li>
        <li>Audit preparation takes too much manual effort</li>
      </ul>
    </section>

    <section>
      <h2>RIO EAM brings your asset lifecycle into one controlled system</h2>
      <ul>
        <li><strong>Centralized Asset Register:</strong> Maintain asset details, serial numbers, purchase information, warranty, insurance, documents, location, department, floor, and ownership history.</li>
        <li><strong>Preventive &amp; Breakdown Maintenance:</strong> Create planned maintenance schedules, raise breakdown tickets, assign engineers, track work orders, and maintain complete service history.</li>
        <li><strong>Inspection &amp; Calibration Tracking:</strong> Plan inspections, record results, track calibration due dates, attach certificates, and avoid missed compliance-related activities.</li>
        <li><strong>Vendor &amp; Contract Management:</strong> Track AMC/CMC contracts, vendor assignments, service performance, contract validity, and maintenance cost history.</li>
        <li><strong>Mobile Scanning &amp; Updates:</strong> Enable maintenance teams to scan assets, update service status, upload photos, and close work orders from mobile devices.</li>
        <li><strong>Audit Logs &amp; Role-Based Access:</strong> Maintain complete activity history with role-based menus, approvals, and traceability for internal reviews and audits.</li>
      </ul>
    </section>

    <section>
      <h2>Designed for businesses with critical assets and maintenance responsibility</h2>
      <ul>
        <li>Manufacturing &amp; Industrial Units</li>
        <li>Facilities Management</li>
        <li>Healthcare, Clinics &amp; Care Facilities</li>
        <li>Hotels, Education &amp; Multi-Site Businesses</li>
      </ul>
    </section>

    <section>
      <h2>Flexible deployment for different IT policies</h2>
      <ul>
        <li><strong>Cloud Deployment:</strong> Faster rollout and lower infrastructure management.</li>
        <li><strong>Private Cloud:</strong> Dedicated hosting and stronger control.</li>
        <li><strong>On-Prem Deployment:</strong> Hosting within your own IT environment.</li>
      </ul>
    </section>

    <section id="pricing-contact-form">
      <h2>Request Pricing</h2>
      <p>Share your requirement and we will send a pricing response to your team.</p>
      <form action="/api/pricing-request" method="post">
        <label>Full Name<input name="fullName2" required /></label>
        <label>Company Name<input name="company2" required /></label>
        <label>Work Email<input name="email2" type="email" required /></label>
        <label>Phone Number<input name="phone2" /></label>
        <label>Country<input name="country2" required /></label>
        <label>Industry
          <select name="industry" required>
            <option value="">Select Industry</option>
            <option>Manufacturing</option>
            <option>Healthcare / Clinics</option>
            <option>Facilities Management</option>
            <option>Hospitality</option>
            <option>Education</option>
            <option>Other</option>
          </select>
        </label>
        <label>Number of Sites
          <select name="sites" required>
            <option value="">Select Site Count</option>
            <option>1</option>
            <option>2-5</option>
            <option>6-20</option>
            <option>20+</option>
          </select>
        </label>
        <label>Approximate Asset Count
          <select name="assets" required>
            <option value="">Select Asset Count</option>
            <option>Below 500</option>
            <option>500-2,000</option>
            <option>2,000-10,000</option>
            <option>10,000+</option>
          </select>
        </label>
        <label>Message / Requirement<textarea name="message" rows="4"></textarea></label>
        <input type="hidden" name="utm_source" />
        <input type="hidden" name="utm_medium" />
        <input type="hidden" name="utm_campaign" />
        <input type="hidden" name="utm_term" />
        <input type="hidden" name="utm_content" />
        <button type="submit">Send Pricing Request</button>
      </form>
    </section>

    <section>
      <h2>Frequently asked questions</h2>
      ${faqHtml}
    </section>

    <footer class="prerender-footer">
      <p>RIO BizSols Pvt Ltd | Enterprise Asset Managment Software | Demo Enquiries</p>
    </footer>
  </main>
  `;
}

function buildPrerenderStyles() {
  return `
  .prerender-landing { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #0f1c3f; max-width: 1100px; margin: 0 auto; padding: 24px 16px 80px; }
  .prerender-header { display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: 1px solid #dce7fb; }
  .prerender-hero h1 { font-size: 2rem; line-height: 1.2; margin: 12px 0; }
  .prerender-hero img { width: 100%; height: auto; border-radius: 12px; margin: 18px 0; box-shadow: 0 10px 24px rgba(13, 52, 116, 0.12); }
  .prerender-tag { display: inline-block; background: #e9f1ff; color: #17448a; font-weight: 600; border-radius: 999px; padding: 6px 12px; }
  .prerender-cta { display: flex; gap: 12px; flex-wrap: wrap; margin: 16px 0; }
  .prerender-btn-primary, .prerender-btn-secondary { display: inline-block; padding: 12px 18px; border-radius: 10px; text-decoration: none; font-weight: 600; }
  .prerender-btn-primary { background: #0e4aa8; color: #fff; }
  .prerender-btn-secondary { background: #e8eefc; color: #0d3270; }
  .prerender-faq-item { background: #fff; border: 1px solid #e5ecf9; border-radius: 12px; padding: 12px 16px; margin: 8px 0; }
  .prerender-footer { margin-top: 30px; color: #4a5881; }
  form { display: grid; gap: 10px; max-width: 720px; }
  form label { display: grid; gap: 4px; font-weight: 600; color: #19386f; }
  form input, form select, form textarea { width: 100%; padding: 10px; border: 1px solid #ced8ee; border-radius: 8px; }
  form button { background: #0e4aa8; color: #fff; padding: 12px 18px; border: 0; border-radius: 8px; cursor: pointer; font-weight: 600; }
  `;
}

function readBuildIndex(buildPath) {
  if (!buildPath) return null;
  try {
    const indexPath = path.join(buildPath, 'index.html');
    if (!fs.existsSync(indexPath)) return null;
    return fs.readFileSync(indexPath, 'utf8');
  } catch (error) {
    console.warn('[alm-prerender] Failed to read build/index.html:', error.message);
    return null;
  }
}

/** Inline layout guards while the landing CSS chunk loads (reduces mobile CLS). */
const V2_CRITICAL_CSS = `
  .rio-v2-landing{min-height:100vh}
  .v2-topbar-inner{min-height:76px}
  .v2-hero-visual{min-height:280px}
  .v2-hero-dashboard-wrap{aspect-ratio:900/414}
`;

function injectIntoBuiltIndex(html, seoHead, prerenderedBody, prerenderStyles, options = {}) {
  if (!html) return null;
  const { criticalCss = '' } = options;
  const rootReplacement =
    prerenderedBody.trim().length > 0
      ? `<div id="root">${prerenderedBody}</div>`
      : '<div id="root"></div>';

  const updated = html
    .replace(/<title>[\s\S]*?<\/title>/i, seoHead)
    .replace('</head>', `<style>${prerenderStyles}</style>${criticalCss ? `<style>${criticalCss}</style>` : ''}</head>`)
    .replace('<div id="root"></div>', rootReplacement);

  return updated;
}

function renderAlmLandingHtml(buildPath, options = {}) {
  const { pathname = DEFAULT_PAGE_PATH } = options;
  const isV2 = isCmmsLandingPath(pathname);
  const isEam = isEamLandingPath(pathname) || pathname === '/uk/eam-maintenance-management-software';
  const isReactAlmLanding =
    isV2 ||
    isEam ||
    pathname === '/asset-maintenance-management-software' ||
    pathname === '/uk/asset-maintenance-management-software';
  const pageUrl = isEam
    ? `https://riobizsols.com${pathname}`
    : `${SITE_BASE_URL}${pathname}`;

  const seoHead = buildSeoHead({
    pageUrl,
    title: isV2 ? PAGE_TITLE_V2 : PAGE_TITLE,
    description: isV2 ? PAGE_DESCRIPTION_V2 : PAGE_DESCRIPTION,
    ogTitle: isV2 ? 'RIO EAM - Enterprise Asset Managment Software' : OG_TITLE,
    ogDescription: isV2 ? OG_DESCRIPTION_V2 : OG_DESCRIPTION,
    preloadLcpImage: isV2 ? `${SITE_BASE_URL}/alm-dashboard-user-900.png` : '',
  });
  // React ALM landings: empty #root avoids CLS when the client bundle mounts.
  const prerenderedBody = isReactAlmLanding ? '' : buildPrerenderedBody(false);
  const prerenderStyles = isReactAlmLanding ? '' : buildPrerenderStyles();

  const builtIndex = readBuildIndex(buildPath);
  const fromBuild = injectIntoBuiltIndex(builtIndex, seoHead, prerenderedBody, prerenderStyles, {
    criticalCss: isV2 ? V2_CRITICAL_CSS : '',
  });
  if (fromBuild) return fromBuild;

  // Fallback for dev mode where build/index.html does not exist yet.
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    ${seoHead}
    ${prerenderStyles ? `<style>${prerenderStyles}</style>` : ''}
    ${isReactAlmLanding && isV2 ? `<style>${V2_CRITICAL_CSS}</style>` : ''}
  </head>
  <body>
    <div id="root">${prerenderedBody}</div>
  </body>
</html>`;
}

module.exports = {
  renderAlmLandingHtml,
  PAGE_TITLE,
  PAGE_DESCRIPTION,
};
