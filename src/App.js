import './App.css';
import { lazy, Suspense, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import ScrollToTop from './ScrollToTop/ScrollToTop';
import CanonicalLink from './Canonical';
import EamAdsLandingReload from './components/Products/EamAdsLandingReload';
import AlmLandingReload from './components/AlmLandingReload';
import EamClassicLandingReload from './components/Products/EamClassicLandingReload';
import LandingThankYouReload from './components/Products/LandingThankYouReload';
import DeferredSiteWidgets from './components/DeferredSiteWidgets';
import { isLiteChromePath } from './utils/sitePaths';
import { assertSingleGoogleTag, trackVirtualPageView } from './utils/gtm';
import { runOnceOnInteraction } from './utils/deferUntilInteraction';
import * as Lazy from './lazyRoutes';

import NavbarShell from './components/NavbarShell';

const Header = lazy(() => import('./components/Navbar'));
const SchemaMarkup = lazy(() => import('./components/SchemeMarkup'));

const PIXEL_ID = '2112408199250636';
let marketingPixelInitialized = false;

function RouteLoadingFallback() {
  return null;
}

function AppContent() {
  const location = useLocation();
  const isInitialRoute = useRef(true);
  const normalizedPath = location.pathname.replace(/\/+$/, '') || '/';
  const useLiteChrome = isLiteChromePath(normalizedPath);

  useEffect(() => {
    assertSingleGoogleTag();
  }, []);

  useEffect(() => {
    const initPixel = async () => {
      if (marketingPixelInitialized) return;
      marketingPixelInitialized = true;
      try {
        const ReactPixel = (await import('react-facebook-pixel')).default;
        ReactPixel.init(PIXEL_ID, { autoConfig: true, debug: false });
        ReactPixel.pageView();
      } catch (error) {
        console.warn('Deferred Meta Pixel init failed:', error);
      }
    };

    let started = false;
    const startOnce = () => {
      if (started) return;
      started = true;
      initPixel();
      ['scroll', 'click', 'touchstart', 'keydown'].forEach((ev) => {
        window.removeEventListener(ev, startOnce, true);
      });
    };

    return runOnceOnInteraction(startOnce);
  }, []);

  useEffect(() => {
    if (useLiteChrome) return undefined;

    let cancelled = false;
    let cleanupTracking = () => {};

    const initTracking = async () => {
      try {
        const visitorTracking = await import('./services/visitorTracking');
        if (cancelled) return;

        await visitorTracking.getVisitorProfile();
        if (cancelled) return;

        visitorTracking.trackPageView('App Load', {
          url: window.location.href,
          title: document.title,
        });

        const handleScroll = () => visitorTracking.trackScrollDepth();
        window.addEventListener('scroll', handleScroll, { passive: true });
        const timeInterval = window.setInterval(() => visitorTracking.trackTimeOnSite(), 15000);

        cleanupTracking = () => {
          window.removeEventListener('scroll', handleScroll);
          window.clearInterval(timeInterval);
        };
      } catch (error) {
        console.warn('Error initializing visitor tracking:', error);
      }
    };

    const stopInteractionWait = runOnceOnInteraction(() => {
      if (typeof window.requestIdleCallback === 'function') {
        window.requestIdleCallback(() => initTracking(), { timeout: 8000 });
      } else {
        window.setTimeout(initTracking, 1000);
      }
    });

    return () => {
      cancelled = true;
      stopInteractionWait();
      cleanupTracking();
    };
  }, [useLiteChrome]);

  useEffect(() => {
    if (useLiteChrome) return undefined;

    const pagePath = `${location.pathname}${location.search}${location.hash}`;

    const trackRoute = async () => {
      try {
        const visitorTracking = await import('./services/visitorTracking');
        visitorTracking.trackPageView(document.title, {
          url: window.location.href,
          title: document.title,
        });
      } catch {
        /* optional */
      }

      if (isInitialRoute.current) {
        isInitialRoute.current = false;
        return;
      }

      trackVirtualPageView({
        page_path: pagePath,
        page_title: document.title,
        page_location: window.location.href,
      });

      if (marketingPixelInitialized) {
        try {
          const ReactPixel = (await import('react-facebook-pixel')).default;
          ReactPixel.pageView();
        } catch {
          /* optional */
        }
      }
    };

    const timer = window.setTimeout(trackRoute, 100);
    return () => window.clearTimeout(timer);
  }, [location.pathname, location.search, location.hash, useLiteChrome]);

  return (
    <div className="App">
      {!useLiteChrome && <CanonicalLink baseUrl="https://riobizsols.com/" />}
      {!useLiteChrome && (
        <Suspense fallback={null}>
          <SchemaMarkup />
        </Suspense>
      )}
      {!useLiteChrome && (
        <Suspense fallback={<NavbarShell />}>
          <Header />
        </Suspense>
      )}
      <ScrollToTop />
      <Suspense fallback={<RouteLoadingFallback />}>
        <Routes>
          <Route path="/index" element={<Navigate to="/" replace />} />
          <Route path="/" element={<Lazy.Home />} />
          <Route path="/our-service" element={<Lazy.MainServices />} />
          <Route path="/blog" element={<Lazy.BlogList />} />
          <Route path="/blog/:id" element={<Lazy.BlogDetail />} />
          <Route path="/contact" element={<Lazy.Contact />} />
          <Route path="/about" element={<Lazy.About />} />
          <Route path="/our-service/staffing" element={<Lazy.Staffing />} />
          <Route path="/our-service/staffing/short-term-staffing" element={<Lazy.Shortterm />} />
          <Route path="/our-service/staffing/long-term-staffing" element={<Lazy.Longterm />} />
          <Route path="/our-service/staffing/temp-to-hire" element={<Lazy.Temp />} />
          <Route path="/our-service/staffing/directhire" element={<Lazy.Hire />} />
          <Route path="/our-service/staffing/lateral-hiring" element={<Lazy.Lateral />} />
          <Route path="/our-service/staffing/executive-hiring" element={<Lazy.Executive />} />
          <Route path="/our-service/digital-marketing" element={<Lazy.Digitalmarketing />} />
          <Route path="/our-service/app-development" element={<Lazy.AppDevelopmentNew />} />
          <Route path="/our-service/web-development" element={<Lazy.WebDevelopment />} />
          <Route path="/our-service/ipr/" element={<Lazy.Ipr />} />
          <Route path="/our-service/odoo/" element={<Lazy.Odoo />} />
          <Route path="/our-service/digital-marketing/branding" element={<Lazy.Branding />} />
          <Route path="/our-service/digital-marketing/content-marketing" element={<Lazy.ContentMarketing />} />
          <Route path="/our-service/digital-marketing/pay-per-click" element={<Lazy.PayPerClick />} />
          <Route path="/our-service/digital-marketing/social-media-marketing" element={<Lazy.SocialMediaMarketing />} />
          <Route path="/our-service/digital-marketing/seo" element={<Lazy.Seo />} />
          <Route path="/our-service/web-development/web-ui-ux" element={<Lazy.WebUIUX />} />
          <Route path="/our-service/web-development/web-development-sub" element={<Lazy.WebDevelopSub />} />
          <Route path="/our-service/web-development/web-maintenance" element={<Lazy.WebMainten />} />
          <Route path="/our-service/web-development/web-analytics" element={<Lazy.WebAnalytics />} />
          <Route path="/our-service/web-development/web-hosting-service" element={<Lazy.WebHostingService />} />
          <Route path="/our-service/odoo/website" element={<Lazy.Website />} />
          <Route path="/our-service/odoo/sale-management" element={<Lazy.SaleManagement />} />
          <Route path="/our-service/odoo/finance-management" element={<Lazy.FinanceManagement />} />
          <Route path="/our-service/odoo/inventory-manfacturing" element={<Lazy.InventoryManufacturing />} />
          <Route path="/our-service/odoo/human-resource" element={<Lazy.HumanResource />} />
          <Route path="/our-service/odoo/marketing" element={<Lazy.Marketing />} />
          <Route path="/our-service/odoo/services" element={<Lazy.OdooServices />} />
          <Route path="/our-service/odoo/productivity" element={<Lazy.Productivity />} />
          <Route path="/our-service/odoo/customization" element={<Lazy.Customization />} />
          <Route path="/our-service/app-development/custom-ios-android-app-development" element={<Lazy.Iosapp />} />
          <Route path="/our-service/app-development/cross-plat-form-app-development" element={<Lazy.CrossPlatformAppDevelopment />} />
          <Route path="/our-service/app-development/uiux-design" element={<Lazy.Uiux />} />
          <Route path="/our-service/app-development/consulting-prototyping" element={<Lazy.ConsultingPrototyping />} />
          <Route path="/our-service/app-development/maintenance-post-warranty-support" element={<Lazy.Maintenance />} />
          <Route path="/our-service/staffing/contractual" element={<Lazy.Contractual />} />
          <Route path="/our-service/staffing/freshhire" element={<Lazy.Freshhire />} />
          <Route path="/cbe/our-service/app-development" element={<Lazy.CbeAppDevelopment />} />
          <Route path="/cbe/our-service/staffing" element={<Lazy.CbeStaffing />} />
          <Route path="/cbe/our-service/odoo" element={<Lazy.CbeOdoo />} />
          <Route path="/cbe/our-service/web-development" element={<Lazy.CbeWebDevelopment />} />
          <Route path="/cbe/our-service/digital-marketing" element={<Lazy.CbeDigitalMarketing />} />
          <Route path="/privacy-policy" element={<Lazy.PrivacyPolicy />} />
          <Route path="/cal/our-service/digital-marketing" element={<Lazy.CalDigitalMarketing />} />
          <Route path="/cal/our-service/web-development" element={<Lazy.CalWebDevelopment />} />
          <Route path="/cal/our-service/staffing" element={<Lazy.CalStaffing />} />
          <Route path="/blr/our-service/staffing" element={<Lazy.BlrStaffing />} />
          <Route path="/blr/our-service/web-development" element={<Lazy.BlrWebDevelopment />} />
          <Route path="/blr/our-service/digital-marketing" element={<Lazy.BlrDigitalMarketing />} />

          <Route path="/products/rio-eam" element={<Lazy.RioALMLanding />} />
          <Route path="/products/rio-eam/pricing" element={<Lazy.RioALMPricing />} />
          <Route path="/products/rio-eam/features" element={<Lazy.RioALMFeatures />} />
          <Route path="/products/rio-eam/industries" element={<Lazy.RioALMIndustries />} />
          <Route path="/products/rio-eam/deployment" element={<Lazy.RioALMDeployment />} />
          <Route path="/products/rio-eam/contact" element={<Lazy.RioALMContact />} />

          <Route path="/products/rio-alm" element={<Navigate to="/products/rio-eam" replace />} />
          <Route path="/products/rio-alm/pricing" element={<Navigate to="/products/rio-eam/pricing" replace />} />
          <Route path="/products/rio-alm/features" element={<Navigate to="/products/rio-eam/features" replace />} />
          <Route path="/products/rio-alm/industries" element={<Navigate to="/products/rio-eam/industries" replace />} />
          <Route path="/products/rio-alm/deployment" element={<Navigate to="/products/rio-eam/deployment" replace />} />
          <Route path="/products/rio-alm/contact" element={<Navigate to="/products/rio-eam/contact" replace />} />

          <Route path="/products/medical-equipment-maintenance" element={<Lazy.MedicalEquipmentMaintenance />} />
          <Route path="/products/medical-equipment-maintenance/features" element={<Lazy.RioMEMSFeatures />} />
          <Route path="/products/medical-equipment-maintenance/industries" element={<Lazy.RioMEMSIndustries />} />
          <Route path="/products/medical-equipment-maintenance/pricing" element={<Lazy.RioMEMSPricing />} />
          <Route path="/products/medical-equipment-maintenance/contact" element={<Lazy.RioALMContact />} />

          <Route path="/products/aissist" element={<Lazy.AissistLanding />} />
          <Route path="/products/la-law/account-deletion/request" element={<Lazy.LaLawAccountDeletionForm />} />
          <Route path="/products/la-law/account-deletion" element={<Lazy.LaLawAccountDeletion />} />
          <Route path="/products/la-law" element={<Lazy.LaLawLanding />} />

          <Route path="/uk/asset-maintenance-management-software" element={<AlmLandingReload />} />
          <Route path="/asset-maintenance-management-software" element={<AlmLandingReload />} />
          <Route path="/cmms-maintenance-management-software" element={<EamAdsLandingReload />} />
          <Route path="/uk/cmms-maintenance-management-software" element={<EamAdsLandingReload />} />
          <Route
            path="/asset-maintenance-management-software-v2"
            element={<Navigate to="/cmms-maintenance-management-software" replace />}
          />
          <Route path="/eam-maintenance-management-software" element={<EamClassicLandingReload />} />
          <Route path="/uk/eam-maintenance-management-software" element={<EamClassicLandingReload />} />
          <Route path="/cmms-maintenance-management-software/thank-you" element={<LandingThankYouReload />} />
          <Route path="/uk/cmms-maintenance-management-software/thank-you" element={<LandingThankYouReload />} />
          <Route path="/eam-maintenance-management-software/thank-you" element={<LandingThankYouReload />} />
          <Route path="/uk/eam-maintenance-management-software/thank-you" element={<LandingThankYouReload />} />
          <Route path="/asset-maintenance-management-software/thank-you" element={<LandingThankYouReload />} />
          <Route path="/uk/asset-maintenance-management-software/thank-you" element={<LandingThankYouReload />} />

          <Route path="/compare/staffing" element={<Lazy.StaffingComparison />} />
          <Route path="/compare/web-development" element={<Lazy.WebDevComparison />} />
          <Route path="/compare/digital-marketing" element={<Lazy.DigitalMarketingComparison />} />
          <Route path="/compare/app-development" element={<Lazy.AppDevComparison />} />

          <Route path="/industry/tech-startup" element={<Lazy.TechStartupIndustry />} />
          <Route path="/industry/ecommerce" element={<Lazy.EcommerceIndustry />} />
          <Route path="/industry/manufacturing" element={<Lazy.ManufacturingIndustry />} />
          <Route path="/industry/healthcare" element={<Lazy.HealthcareIndustry />} />
          <Route path="/industry/saas" element={<Lazy.SaasIndustry />} />
          <Route path="/admin/chat" element={<Lazy.AdminChat />} />
        </Routes>
      </Suspense>
      {!useLiteChrome && <DeferredSiteWidgets />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
