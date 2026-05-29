import React from 'react';
import { Helmet } from 'react-helmet-async';
import EamLandingApp from './eam-landing/EamLandingApp';
import './eam-landing/App.css';

const RioALMLandingV2 = () => (
  <>
    <Helmet>
      <title>Enterprise Asset Management Software | RIO EAM</title>
      <meta
        name="description"
        content="RIO EAM helps organizations track assets, automate maintenance, manage inspections, and maintain audit-ready records from one central system."
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
      <meta
        property="og:url"
        content="https://www.riobizsols.com/asset-maintenance-management-software-v2"
      />
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
      <link
        rel="canonical"
        href="https://www.riobizsols.com/asset-maintenance-management-software-v2"
      />
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <EamLandingApp />
  </>
);

export default RioALMLandingV2;
