import { lazy } from 'react';

/** Google Ads v2 landing uses src/landing-entry.js (not App.js). */
const lazyDefault = (factory) => lazy(factory);

export const Home = lazyDefault(() => import('./components/pages/Home'));
export const MainServices = lazyDefault(() =>
  import('./components/pages').then((m) => ({ default: m.MainServices }))
);
export const Contact = lazyDefault(() => import('./components/pages/Contact'));
export const About = lazyDefault(() => import('./components/pages/About'));
export const BlogList = lazyDefault(() => import('./components/pages/BlogList'));
export const BlogDetail = lazyDefault(() => import('./components/pages/BlogDetail'));
export const PrivacyPolicy = lazyDefault(() => import('./components/pages/PrivatePolicy'));
export const AdminChat = lazyDefault(() => import('./components/pages/AdminChat'));

export const Staffing = lazyDefault(() => import('./components/Services/Staffing'));
export const Longterm = lazyDefault(() => import('./components/sub_pages/Staffing/Longterm'));
export const Shortterm = lazyDefault(() => import('./components/sub_pages/Staffing/Shortterm'));
export const Hire = lazyDefault(() => import('./components/sub_pages/Staffing/Hire'));
export const Freshhire = lazyDefault(() => import('./components/sub_pages/Staffing/Freshhire'));
export const Lateral = lazyDefault(() => import('./components/sub_pages/Staffing/Lateral'));
export const Executive = lazyDefault(() => import('./components/sub_pages/Staffing/Executive'));
export const Temp = lazyDefault(() => import('./components/sub_pages/Staffing/Temp'));
export const Contractual = lazyDefault(() => import('./components/sub_pages/Staffing/Contractual'));

export const Digitalmarketing = lazyDefault(() => import('./components/Services/Digitalmarketing'));
export const Branding = lazyDefault(() => import('./components/sub_pages/DigitalMarketing/Branding'));
export const ContentMarketing = lazyDefault(() =>
  import('./components/sub_pages/DigitalMarketing/ContentMarketing').then((m) => ({
    default: m.ContentMarketing,
  }))
);
export const PayPerClick = lazyDefault(() => import('./components/sub_pages/DigitalMarketing/PayPerClick'));
export const SocialMediaMarketing = lazyDefault(() =>
  import('./components/sub_pages/DigitalMarketing/SocialMediaMarketing')
);
export const Seo = lazyDefault(() => import('./components/sub_pages/DigitalMarketing/Seo'));

export const AppDevelopmentNew = lazyDefault(() => import('./components/Services/AppDevelopmentNew'));
export const Iosapp = lazyDefault(() => import('./components/sub_pages/AppDevelopment/Iosapp'));
export const CrossPlatformAppDevelopment = lazyDefault(() =>
  import('./components/sub_pages/AppDevelopment/CrossPlatformAppDevelopment')
);
export const Uiux = lazyDefault(() => import('./components/sub_pages/AppDevelopment/Uiux'));
export const ConsultingPrototyping = lazyDefault(() =>
  import('./components/sub_pages/AppDevelopment/ConsultingPrototyping')
);
export const Maintenance = lazyDefault(() => import('./components/sub_pages/AppDevelopment/Maintenance'));

export const WebDevelopment = lazyDefault(() => import('./components/Services/WebDevelopment'));
export const WebUIUX = lazyDefault(() => import('./components/sub_pages/WebDevelopment/WebUIUX'));
export const WebDevelopSub = lazyDefault(() => import('./components/sub_pages/WebDevelopment/WebDevelopSub'));
export const WebMainten = lazyDefault(() => import('./components/sub_pages/WebDevelopment/WebMainten'));
export const WebAnalytics = lazyDefault(() => import('./components/sub_pages/WebDevelopment/WebAnalytics'));
export const WebHostingService = lazyDefault(() =>
  import('./components/sub_pages/WebDevelopment/WebHostingService')
);

export const Ipr = lazyDefault(() => import('./components/Services/Ipr'));
export const Odoo = lazyDefault(() => import('./components/Services/Odoo'));
export const Website = lazyDefault(() => import('./components/sub_pages/Odoo/Website'));
export const SaleManagement = lazyDefault(() => import('./components/sub_pages/Odoo/SaleManagement'));
export const FinanceManagement = lazyDefault(() => import('./components/sub_pages/Odoo/FinanceManagement'));
export const InventoryManufacturing = lazyDefault(() =>
  import('./components/sub_pages/Odoo/InventoryManufacturing')
);
export const HumanResource = lazyDefault(() => import('./components/sub_pages/Odoo/HumanResource'));
export const Marketing = lazyDefault(() => import('./components/sub_pages/Odoo/Marketing'));
export const OdooServices = lazyDefault(() => import('./components/sub_pages/Odoo/OdooServices'));
export const Productivity = lazyDefault(() => import('./components/sub_pages/Odoo/Productivity'));
export const Customization = lazyDefault(() => import('./components/sub_pages/Odoo/Customization'));

export const CbeAppDevelopment = lazyDefault(() => import('./components/Cbe/CbeAppdevelopment'));
export const CbeStaffing = lazyDefault(() => import('./components/Cbe/CbeStaffing'));
export const CbeOdoo = lazyDefault(() => import('./components/Cbe/CbeOdoo'));
export const CbeWebDevelopment = lazyDefault(() => import('./components/Cbe/CbeWebDevelopment'));
export const CbeDigitalMarketing = lazyDefault(() => import('./components/Cbe/CbeDigitalMarketing'));
export const BlrStaffing = lazyDefault(() => import('./components/Blr/BlrStaffing'));
export const BlrWebDevelopment = lazyDefault(() => import('./components/Blr/BlrWebDevelopmaent'));
export const BlrDigitalMarketing = lazyDefault(() => import('./components/Blr/BlrDigitalMarketing'));
export const CalDigitalMarketing = lazyDefault(() => import('./components/Cal/CalDigitalMarketing'));
export const CalWebDevelopment = lazyDefault(() => import('./components/Cal/CalWebDevelopment'));
export const CalStaffing = lazyDefault(() => import('./components/Cal/CalStaffing'));

export const RioALMLanding = lazyDefault(() => import('./components/Products/RioALMLanding'));
export const RioALMFeatures = lazyDefault(() => import('./components/Products/RioALMFeatures'));
export const RioALMIndustries = lazyDefault(() => import('./components/Products/RioALMIndustries'));
export const RioALMDeployment = lazyDefault(() => import('./components/Products/RioALMDeployment'));
export const RioALMContact = lazyDefault(() => import('./components/Products/RioALMContact'));
export const RioALMPricing = lazyDefault(() => import('./components/Products/RioALMPricing'));
export const MedicalEquipmentMaintenance = lazyDefault(() =>
  import('./components/Products/MedicalEquipmentMaintenance')
);
export const RioMEMSFeatures = lazyDefault(() => import('./components/Products/RioMEMSFeatures'));
export const RioMEMSIndustries = lazyDefault(() => import('./components/Products/RioMEMSIndustries'));
export const RioMEMSPricing = lazyDefault(() => import('./components/Products/RioMEMSPricing'));
export const AissistLanding = lazyDefault(() => import('./components/Products/AissistLanding'));
export const LaLawLanding = lazyDefault(() => import('./components/Products/LaLawLanding'));
export const LaLawAccountDeletion = lazyDefault(() => import('./components/Products/LaLawAccountDeletion'));
export const LaLawAccountDeletionForm = lazyDefault(() =>
  import('./components/Products/LaLawAccountDeletionForm')
);
export const RioALMGenericLanding = lazyDefault(() => import('./components/Products/RioALMGenericLanding'));

export const StaffingComparison = lazyDefault(() => import('./components/ServiceComparison/StaffingComparison'));
export const WebDevComparison = lazyDefault(() => import('./components/ServiceComparison/WebDevComparison'));
export const DigitalMarketingComparison = lazyDefault(() =>
  import('./components/ServiceComparison/DigitalMarketingComparison')
);
export const AppDevComparison = lazyDefault(() => import('./components/ServiceComparison/AppDevComparison'));

export const TechStartupIndustry = lazyDefault(() => import('./components/Industries/TechStartupIndustry'));
export const EcommerceIndustry = lazyDefault(() => import('./components/Industries/EcommerceIndustry'));
export const ManufacturingIndustry = lazyDefault(() => import('./components/Industries/ManufacturingIndustry'));
export const HealthcareIndustry = lazyDefault(() => import('./components/Industries/HealthcareIndustry'));
export const SaasIndustry = lazyDefault(() => import('./components/Industries/SaasIndustry'));
