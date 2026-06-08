import React from 'react';
import { Helmet } from 'react-helmet-async';
import EamLandingApp from './eam-landing/EamLandingApp';
import { ASSETS } from './eam-landing/assets';
import './eam-landing/App.css';

const SITE_BASE = 'https://riobizsols.com';

const V2_CRITICAL_CSS = `
.rio-v2-landing{min-height:100vh}
.v2-topbar-inner{min-height:76px}
.v2-hero-visual{min-height:280px}
.v2-hero-dashboard-wrap{aspect-ratio:900/414}
`;

const RioALMLandingV2 = ({
  showWhatsApp = true,
  pagePath = '/cmms-maintenance-management-software',
}) => {
  const pageUrl = `${SITE_BASE}${pagePath}`;

  return (
    <>
      <Helmet>
        <style>{V2_CRITICAL_CSS}</style>
        <title>CMMS &amp; Maintenance Management Software | RIO BizSols</title>
        <meta
          name="description"
          content="RIO CMMS helps maintenance teams move beyond Excel — plan preventive maintenance, manage breakdowns, assign work orders, and maintain audit-ready records in one system."
        />
        <meta
          name="keywords"
          content="enterprise asset management software, EAM software, CMMS software, preventive maintenance software, calibration tracking software, vendor contract management, audit ready maintenance"
        />
        <meta property="og:title" content="RIO EAM - Enterprise Asset Management Software" />
        <meta
          property="og:description"
          content="RIO EAM helps maintenance and operations teams manage preventive maintenance, breakdowns, work orders, calibration, vendors, documents, and asset history in one system."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content="https://www.riobizsols.com/alm-dashboard-user.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RIO EAM - Enterprise Asset Management Software" />
        <meta
          name="twitter:description"
          content="Manage assets, maintenance, calibration, vendors, and audit-ready records from one platform."
        />
        <meta name="twitter:image" content="https://www.riobizsols.com/alm-dashboard-user.png" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link rel="canonical" href={pageUrl} />
        <link rel="preload" as="image" href={ASSETS.dashboardDesktop} fetchPriority="high" />
      </Helmet>
      <EamLandingApp showWhatsApp={showWhatsApp} />
    </>
  );
};

export default RioALMLandingV2;
