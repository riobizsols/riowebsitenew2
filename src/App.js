import './App.css';
import { Suspense, useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel';
import Header from './components/Navbar';
import Footerbottom from './components/Footerbottom';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import ScrollToTop from './ScrollToTop/ScrollToTop';
import CanonicalLink from './Canonical';
import SchemaMarkup from './components/SchemeMarkup';
import EamAdsLandingReload from './components/Products/EamAdsLandingReload';
import ExitIntentPopup from './components/ExitIntent/ExitIntentPopup';
import WhatsAppFloat from './components/WhatsAppFloat';
import { isAlmLandingPath } from './utils/almLandingPaths';
import * as Lazy from './lazyRoutes';

const pixelOptions = { autoConfig: true, debug: false };
const PIXEL_ID = '2112408199250636';
let marketingPixelInitialized = false;

function RouteLoadingFallback() {
  return null;
}

function AppContent() {
  const location = useLocation();
  const normalizedPath = location.pathname.replace(/\/+$/, '') || '/';
  const isAlmLandingPage = isAlmLandingPath(normalizedPath);

  useEffect(() => {
    const initPixel = () => {
      if (marketingPixelInitialized) return;
      marketingPixelInitialized = true;
      ReactPixel.init(PIXEL_ID, pixelOptions);
      ReactPixel.pageView();
    };

    if (isAlmLandingPage) {
      if (window.requestIdleCallback) {
        const id = window.requestIdleCallback(initPixel, { timeout: 5000 });
        return () => window.cancelIdleCallback(id);
      }
      const timeoutId = window.setTimeout(initPixel, 3000);
      return () => window.clearTimeout(timeoutId);
    }

    initPixel();
    return undefined;
  }, [isAlmLandingPage]);

  useEffect(() => {
    if (isAlmLandingPage) return undefined;

    let cancelled = false;
    let cleanupTracking = () => {};

    const initTracking = async () => {
      try {
        const [{ default: webVitalsMonitor }, visitorTracking] = await Promise.all([
          import('./services/webVitalsMonitor'),
          import('./services/visitorTracking'),
        ]);
        if (cancelled) return;

        webVitalsMonitor.init();
        const profile = await visitorTracking.getVisitorProfile();
        if (cancelled) return;

        console.log('✓ Visitor tracking initialized:', profile.visitorId);
        visitorTracking.trackPageView('App Load', {
          url: window.location.href,
          title: document.title,
        });

        const handleScroll = () => visitorTracking.trackScrollDepth();
        window.addEventListener('scroll', handleScroll, { passive: true });
        const timeInterval = window.setInterval(() => visitorTracking.trackTimeOnSite(), 10000);

        cleanupTracking = () => {
          window.removeEventListener('scroll', handleScroll);
          window.clearInterval(timeInterval);
        };
      } catch (error) {
        console.warn('Error initializing visitor tracking:', error);
      }
    };

    initTracking();
    return () => {
      cancelled = true;
      cleanupTracking();
    };
  }, [isAlmLandingPage]);

  return (
    <div className="App">
      {!isAlmLandingPage && <CanonicalLink baseUrl="https://riobizsols.com/" />}
      {!isAlmLandingPage && <SchemaMarkup />}
      {!isAlmLandingPage && <Header />}
      <ScrollToTop />
      <Suspense fallback={<RouteLoadingFallback />}>
        <Routes>
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
          <Route path="/uk/asset-maintenance-management-software" element={<Lazy.RioALMGenericLanding />} />
          <Route path="/asset-maintenance-management-software" element={<Lazy.RioALMGenericLanding />} />
          <Route path="/asset-maintenance-management-software-v2" element={<EamAdsLandingReload />} />

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
      {!isAlmLandingPage && <ExitIntentPopup />}
      {!isAlmLandingPage && <WhatsAppFloat />}
      {!isAlmLandingPage && <Footerbottom />}
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
