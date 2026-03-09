const Sitemap = require('react-router-sitemap').default;
const path = require('path');

// Import your routes
const routes = [
    '/',
    '/our-service',
    '/our-service/staffing',
    '/our-service/staffing/short-term-staffing',
    '/our-service/staffing/long-term-staffing',
    '/our-service/staffing/temp-to-hire',
    '/our-service/staffing/directhire',
    '/our-service/staffing/freshhire',
    '/our-service/staffing/lateral-hiring',
    '/our-service/staffing/executive-hiring',
    '/our-service/staffing/contractual',
    '/our-service/digital-marketing/',
    '/our-service/digital-marketing/branding',
    '/our-service/digital-marketing/content-marketing',
    '/our-service/digital-marketing/pay-per-click',
    '/our-service/digital-marketing/social-media-marketing',
    '/our-service/digital-marketing/seo',
    '/our-service/app-development',
    '/our-service/app-development/custom-ios-android-app-development',
    '/our-service/app-development/cross-plat-form-app-development',
    '/our-service/app-development/uiux-design',
    '/our-service/app-development/consulting-prototyping',
    '/our-service/app-development/maintenance-post-warranty-support',
    '/our-service/web-development',
    '/our-service/web-development/web-ui-ux',
    '/our-service/web-development/web-development-sub',
    '/our-service/web-development/web-hosting-service',
    '/our-service/web-development/web-maintenance',
    '/our-service/web-development/web-analytics',
    '/our-service/odoo/',
    '/our-service/odoo/website',
    '/our-service/odoo/sale-management',
    '/our-service/odoo/finance-management',
    '/our-service/odoo/inventory-manfacturing',
    '/our-service/odoo/human-resource',
    '/our-service/odoo/marketing',
    '/our-service/odoo/services',
    '/our-service/odoo/productivity',
    '/our-service/odoo/customization',
    '/our-service/ipr/',
];

function generateSitemap() {
    return new Sitemap(routes)
        .build('https://riobizsols.com/') // Replace with your domain
        .save(path.resolve('./public/sitemap.xml'));
}

generateSitemap();
