import { Helmet } from "react-helmet-async";
import EamClassicLandingApp from "./eam-classic-landing/EamClassicLandingApp";
import "./eam-landing/App.css";
import "./eam-classic-landing/App.css";

const SITE_BASE = "https://riobizsols.com";

/** RIO EAM landing from F:\\Landing page (hero + WhyRioAlm + bottom pricing form). */
export default function RioEAMLanding({
  showWhatsApp = true,
  pagePath = "/eam-maintenance-management-software",
}) {
  const pageUrl = `${SITE_BASE}${pagePath}`;

  return (
    <>
      <Helmet>
        <title>Enterprise Asset Management Software | RIO EAM</title>
        <meta
          name="description"
          content="RIO EAM helps maintenance and operations teams manage preventive maintenance, breakdowns, work orders, calibration, vendors, documents, and asset history in one system."
        />
        <meta
          property="og:title"
          content="RIO EAM - Enterprise Asset Management Software"
        />
        <meta
          property="og:description"
          content="Move beyond Excel — plan preventive maintenance, manage breakdowns, assign work orders, and keep audit-ready records with RIO EAM."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta
          property="og:image"
          content="https://riobizsols.com/alm-dashboard-user.png"
        />
        <link rel="canonical" href={pageUrl} />
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <EamClassicLandingApp showWhatsApp={showWhatsApp} />
    </>
  );
}
