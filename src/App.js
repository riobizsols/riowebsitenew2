import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { useEffect } from 'react';
import Header from './components/Navbar';
import Home from './components/pages/Home';
import Footerbottom from './components/Footerbottom';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import { MainServices } from './components/pages';
import Contact from './components/pages/Contact';
import * as visitorTracking from './services/visitorTracking';
import webVitalsMonitor from './services/webVitalsMonitor';
import Staffing from './components/Services/Staffing';
import Longterm from './components/sub_pages/Staffing/Longterm';
import Shortterm from './components/sub_pages/Staffing/Shortterm';
import Hire from './components/sub_pages/Staffing/Hire';
import Freshhire from './components/sub_pages/Staffing/Freshhire';
import Lateral from './components/sub_pages/Staffing/Lateral';
import Executive from './components/sub_pages/Staffing/Executive';
import Digitalmarketing from './components/Services/Digitalmarketing';
import Ipr from './components/Services/Ipr';
import Odoo from './components/Services/Odoo';
import Website from './components/sub_pages/Odoo/Website'
import SaleManagement from './components/sub_pages/Odoo/SaleManagement'
import Branding from './components/sub_pages/DigitalMarketing/Branding'
import AppDevelopmentNew from './components/Services/AppDevelopmentNew';
import { ContentMarketing } from './components/sub_pages/DigitalMarketing/ContentMarketing';
import PayPerClick from './components/sub_pages/DigitalMarketing/PayPerClick';
import SocialMediaMarketing from './components/sub_pages/DigitalMarketing/SocialMediaMarketing';
import Seo from './components/sub_pages/DigitalMarketing/Seo';
import WebDevelopment from './components/Services/WebDevelopment';
import FinanceManagement from './components/sub_pages/Odoo/FinanceManagement';
import InventoryManufacturing from './components/sub_pages/Odoo/InventoryManufacturing';
import HumanResource from './components/sub_pages/Odoo/HumanResource';
import Marketing from './components/sub_pages/Odoo/Marketing';
import OdooServices from './components/sub_pages/Odoo/OdooServices';
import Productivity from './components/sub_pages/Odoo/Productivity';
import Customization from './components/sub_pages/Odoo/Customization';
import Iosapp from './components/sub_pages/AppDevelopment/Iosapp';
import CrossPlatformAppDevelopment from './components/sub_pages/AppDevelopment/CrossPlatformAppDevelopment';
import Uiux from './components/sub_pages/AppDevelopment/Uiux';
import ConsultingPrototyping from './components/sub_pages/AppDevelopment/ConsultingPrototyping';
import Maintenance from './components/sub_pages/AppDevelopment/Maintenance';
import About from './components/pages/About';
import Contractual from './components/sub_pages/Staffing/Contractual';
import WebUIUX from './components/sub_pages/WebDevelopment/WebUIUX';
import Temp from './components/sub_pages/Staffing/Temp'
import WebDevelopSub from './components/sub_pages/WebDevelopment/WebDevelopSub';
import WebMainten from './components/sub_pages/WebDevelopment/WebMainten';
import WebAnalytics from './components/sub_pages/WebDevelopment/WebAnalytics';
import WebHostingService from './components/sub_pages/WebDevelopment/WebHostingService';
import CbeAppDevelopment from './components/Cbe/CbeAppdevelopment';
import CbeStaffing from './components/Cbe/CbeStaffing';
import CbeOdoo from './components/Cbe/CbeOdoo';
import CbeWebDevelopment from './components/Cbe/CbeWebDevelopment';
import CbeDigitalMarketing from './components/Cbe/CbeDigitalMarketing';
import BlrStaffing from './components/Blr/BlrStaffing';
import BlrWebDevelopment from './components/Blr/BlrWebDevelopmaent';
import BlrDigitalMarketing from './components/Blr/BlrDigitalMarketing';
import PrivacyPolicy from './components/pages/PrivatePolicy';
import CalDigitalMarketing from './components/Cal/CalDigitalMarketing';
import CalWebDevelopment from './components/Cal/CalWebDevelopment';
import CalStaffing from './components/Cal/CalStaffing';
import CanonicalLink from './Canonical';
import SchemaMarkup from './components/SchemeMarkup';
import BlogList from './components/pages/BlogList';
import BlogDetail from './components/pages/BlogDetail';
import RioALMLanding from './components/Products/RioALMLanding';
import RioALMFeatures from './components/Products/RioALMFeatures';
import RioALMIndustries from './components/Products/RioALMIndustries';
import RioALMDeployment from './components/Products/RioALMDeployment';
import RioALMContact from './components/Products/RioALMContact';
import RioALMPricing from './components/Products/RioALMPricing';
import MedicalEquipmentMaintenance from './components/Products/MedicalEquipmentMaintenance';
import RioMEMSFeatures from './components/Products/RioMEMSFeatures';
import RioMEMSIndustries from './components/Products/RioMEMSIndustries';
import RioMEMSPricing from './components/Products/RioMEMSPricing';
import AissistLanding from './components/Products/AissistLanding';
import RioALMGenericLanding from './components/Products/RioALMGenericLanding';
import ExitIntentPopup from './components/ExitIntent/ExitIntentPopup';
import WhatsAppFloat from './components/WhatsAppFloat';
import StaffingComparison from './components/ServiceComparison/StaffingComparison';
import WebDevComparison from './components/ServiceComparison/WebDevComparison';
import DigitalMarketingComparison from './components/ServiceComparison/DigitalMarketingComparison';
import AppDevComparison from './components/ServiceComparison/AppDevComparison';
import TechStartupIndustry from './components/Industries/TechStartupIndustry';
import EcommerceIndustry from './components/Industries/EcommerceIndustry';
import ManufacturingIndustry from './components/Industries/ManufacturingIndustry';
import HealthcareIndustry from './components/Industries/HealthcareIndustry';
import SaasIndustry from './components/Industries/SaasIndustry';
function AppContent() {
  const location = useLocation();
  const isUkAlmLanding =
    location.pathname === '/uk/asset-maintenance-management-software' ||
    location.pathname === '/asset-maintenance-management-software';

  return (
    <div className="App">
      <CanonicalLink baseUrl="https://riobizsols.com/" />
      <SchemaMarkup />
      {!isUkAlmLanding && <Header />}
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/our-service' element={<MainServices/>} />
        <Route path='/blog' element={<BlogList/>}/>
        <Route path='/blog/:id' element={<BlogDetail/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/our-service/staffing' element={<Staffing/>}/>
        <Route path='/our-service/staffing/short-term-staffing' element={<Shortterm/>}/>
        <Route path='/our-service/staffing/long-term-staffing' element={<Longterm/>}/>
        <Route path='/our-service/staffing/temp-to-hire' element={<Temp/>}/>
        <Route path='/our-service/staffing/directhire' element={<Hire/>}/>
        {/* <Route path='/our-service/staffing/freshers-hiring' element={<Freshhire/>}/> */}
        <Route path='/our-service/staffing/lateral-hiring' element={<Lateral/>}/>
        {/* <Route path='/our-service/staffing/contractual-staffing' element={<Contractual/>}/> */}
        <Route path='/our-service/staffing/executive-hiring' element={<Executive/>}/>
        <Route path='/our-service/digital-marketing' element={<Digitalmarketing/>}/>
        <Route path='/our-service/app-development' element={<AppDevelopmentNew/>}/>
        <Route path='/our-service/web-development' element={<WebDevelopment/>}/>
        <Route path='/our-service/ipr/' element={<Ipr/>}/>
        <Route path='/our-service/odoo/' element={<Odoo/>}/>
         <Route path ='/our-service/digital-marketing/branding' element={<Branding/>}/>
         <Route path ='/our-service/digital-marketing/content-marketing' element={<ContentMarketing/>}/>
         <Route path ='/our-service/digital-marketing/pay-per-click' element={<PayPerClick/>}/>
         <Route path ='/our-service/digital-marketing/social-media-marketing' element={<SocialMediaMarketing/>}/>
         <Route path ='/our-service/digital-marketing/seo' element={<Seo/>}/>
         <Route path='/our-service/web-development/web-ui-ux' element={<WebUIUX/>}/>
         <Route path='/our-service/web-development/web-development-sub' element={<WebDevelopSub/>}/>
         <Route path='/our-service/web-development/web-maintenance' element={<WebMainten/>}/>
         <Route path='/our-service/web-development/web-analytics' element={<WebAnalytics/>}/>
         <Route path='/our-service/web-development/web-hosting-service' element={<WebHostingService/>}/>
         <Route path ='/our-service/odoo/website' element={<Website/>}/>
         <Route path ='/our-service/odoo/sale-management' element={<SaleManagement/>}/>
         <Route path ='/our-service/odoo/finance-management' element={<FinanceManagement/>}/>
          <Route path = '/our-service/odoo/inventory-manfacturing' element={<InventoryManufacturing/>}/>
          <Route path = '/our-service/odoo/human-resource' element={<HumanResource/>}/>
          <Route path = '/our-service/odoo/marketing' element={<Marketing/>}/>
          <Route path = '/our-service/odoo/services' element={<OdooServices/>}/>
          <Route path = '/our-service/odoo/productivity' element={<Productivity/>}/>
          <Route path = '/our-service/odoo/customization' element={<Customization/>}/>
          <Route path ='/our-service/app-development/custom-ios-android-app-development' element={<Iosapp/>}/>
          <Route path ='/our-service/app-development/cross-plat-form-app-development' element={<CrossPlatformAppDevelopment/>}/>
          <Route path ='/our-service/app-development/uiux-design' element={<Uiux/>}/>
          <Route path ='/our-service/app-development/consulting-prototyping' element={<ConsultingPrototyping/>}/>
          <Route path ='/our-service/app-development/maintenance-post-warranty-support' element={<Maintenance/>}/>
          <Route path = '/about' element={<About/>}/>
          <Route path ='/our-service/staffing/contractual' element={<Contractual/>}/>
          {/* <Route path ='/our-service/staffing/executive' element={<Executive/>}/> */}
          <Route path ='/our-service/staffing/freshhire' element={<Freshhire/>}/>
          <Route path='/cbe/our-service/app-development' element={<CbeAppDevelopment/>}/>
         <Route path='/cbe/our-service/staffing' element={<CbeStaffing/>}/>
         <Route path='/cbe/our-service/odoo' element={<CbeOdoo/>}/>
         <Route path='/cbe/our-service/web-development' element={<CbeWebDevelopment/>}/>
         <Route path='/cbe/our-service/digital-marketing' element={<CbeDigitalMarketing/>}/>
         <Route path="/privacy-policy"  element={<PrivacyPolicy/>}/>
         <Route path='/cal/our-service/digital-marketing'  element={<CalDigitalMarketing/>}/>
         <Route path='/cal/our-service/web-development'  element={<CalWebDevelopment/>}/>
         <Route path='/cal/our-service/staffing'  element={<CalStaffing/>}/>
         <Route path='/blr/our-service/staffing' element={<BlrStaffing/>}/>
         <Route path='/blr/our-service/web-development' element={<BlrWebDevelopment/>}/>
         <Route path='/blr/our-service/digital-marketing' element={<BlrDigitalMarketing/>}/>

        {/* Product Routes */}
         <Route path='/products/rio-alm' element={<RioALMLanding/>}/>
         <Route path='/products/rio-alm/pricing' element={<RioALMPricing/>}/>
         <Route path='/products/rio-alm/features' element={<RioALMFeatures/>}/>
         <Route path='/products/rio-alm/industries' element={<RioALMIndustries/>}/>
         <Route path='/products/rio-alm/deployment' element={<RioALMDeployment/>}/>
         <Route path='/products/rio-alm/contact' element={<RioALMContact/>}/>

         {/* RIO MEMS Product Routes */}
         <Route path='/products/medical-equipment-maintenance' element={<MedicalEquipmentMaintenance/>}/>
         <Route path='/products/medical-equipment-maintenance/features' element={<RioMEMSFeatures/>}/>
         <Route path='/products/medical-equipment-maintenance/industries' element={<RioMEMSIndustries/>}/>
         <Route path='/products/medical-equipment-maintenance/pricing' element={<RioMEMSPricing/>}/>
         <Route path='/products/medical-equipment-maintenance/contact' element={<RioALMContact/>}/>

         {/* AIssist Product Route */}
         <Route path='/products/aissist' element={<AissistLanding/>}/>
         <Route path='/uk/asset-maintenance-management-software' element={<RioALMGenericLanding/>}/>
         <Route path='/asset-maintenance-management-software' element={<RioALMGenericLanding/>}/>

         {/* Service Comparison Routes */}
         <Route path='/compare/staffing' element={<StaffingComparison/>}/>
         <Route path='/compare/web-development' element={<WebDevComparison/>}/>
         <Route path='/compare/digital-marketing' element={<DigitalMarketingComparison/>}/>
         <Route path='/compare/app-development' element={<AppDevComparison/>}/>

         {/* Industry-Specific Landing Pages */}
         <Route path='/industry/tech-startup' element={<TechStartupIndustry/>}/>
         <Route path='/industry/ecommerce' element={<EcommerceIndustry/>}/>
         <Route path='/industry/manufacturing' element={<ManufacturingIndustry/>}/>
         <Route path='/industry/healthcare' element={<HealthcareIndustry/>}/>
         <Route path='/industry/saas' element={<SaasIndustry/>}/>
      </Routes>
      {!isUkAlmLanding && <ExitIntentPopup />}
      {!isUkAlmLanding && <WhatsAppFloat />}
      {!isUkAlmLanding && <Footerbottom />}
    </div>
  );
}

function App() {
  // Initialize visitor tracking on app mount
  useEffect(() => {
    const initTracking = async () => {
      try {
        // Initialize Web Vitals monitoring
        webVitalsMonitor.init();

        // Initialize visitor tracking
        const profile = await visitorTracking.getVisitorProfile();
        console.log('✓ Visitor tracking initialized:', profile.visitorId);

        // Track page view on route change
        visitorTracking.trackPageView('App Load', {
          url: window.location.href,
          title: document.title
        });

        // Track scroll depth on scroll
        const handleScroll = () => {
          visitorTracking.trackScrollDepth();
        };
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Track time on site periodically
        const timeInterval = setInterval(() => {
          visitorTracking.trackTimeOnSite();
        }, 10000); // Every 10 seconds

        // Cleanup
        return () => {
          window.removeEventListener('scroll', handleScroll);
          clearInterval(timeInterval);
        };
      } catch (error) {
        console.warn('Error initializing visitor tracking:', error);
      }
    };

    initTracking();
  }, []);
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
