# RIO ALM UK Landing Page Document

## Page Overview

- **Page Name:** RIO ALM UK Paid Ads Landing Page
- **Primary URL:** `/uk/asset-maintenance-management-software`
- **Live URL (Production):** `https://www.riobizsols.com/uk/asset-maintenance-management-software`
- **Primary Goal:** Convert UK paid-ads visitors into demo and pricing enquiries
- **Target Region:** United Kingdom
- **Primary Audience:** Maintenance and operations decision-makers in asset-heavy organizations

## Campaign Intent

This page is built as a focused ads landing page (not a general company profile page).  
It is designed for Google Ads and Microsoft Ads traffic with strong conversion intent:

- Book a **20-minute demo**
- Request **UK pricing**

The page messaging explicitly uses **Asset Lifecycle Management** and **Maintenance Management** wording to avoid confusion with other ALM meanings (Application Lifecycle Management / Asset Liability Management).

## Target Industries

- Manufacturing and industrial units
- Facilities management
- Healthcare, clinics, and care facilities
- Hotels, education, and multi-site businesses

## Core Value Proposition

RIO ALM helps UK teams centralize asset records and maintenance workflows in one controlled system, including:

- Asset register
- Preventive and breakdown maintenance
- Inspection and calibration tracking
- Vendor and AMC/CMC contract tracking
- Mobile updates
- Audit-ready history and role-based traceability

## CTA Strategy

- **Primary CTA:** Book a 20-minute Demo
- **Secondary CTA:** Request UK Pricing

CTA placements:

- Hero section
- Mid-page CTA section
- Footer CTA
- Sticky CTA (mobile + desktop)

## Landing Page Structure Implemented

1. Hero section with dashboard-style visual and lead form
2. Problem section (Excel/email/paper challenges)
3. Solution section (6 feature cards)
4. UK industry relevance section (4 cards)
5. Compliance/audit readiness section
6. SAP PM/ERP compatibility section
7. Deployment options section (Cloud / Private Cloud / On-Prem)
8. Why RIO ALM section
9. Demo CTA section
10. Detailed lead capture form section
11. FAQ section (8 FAQs)
12. Footer CTA section

## SEO and Metadata

- **Meta Title:** Asset Maintenance Management Software UK | RIO ALM
- **Meta Description:** RIO ALM helps UK manufacturing, healthcare, facility and multi-site teams manage assets, preventive maintenance, breakdowns, calibration, vendors, documents and audit-ready records.
- **H1:** Asset & Maintenance Management Software for UK Operations Teams
- Open Graph title and description included
- Canonical URL included
- Clean route for SEO and ad relevance

## Schema Markup Included

- `SoftwareApplication` schema
- `FAQPage` schema

## Tracking Placeholders Included

The page includes clearly marked placeholders for:

- `<!-- GA4 Tracking Code Here -->`
- `<!-- Google Ads Conversion Tracking Code Here -->`
- `<!-- Microsoft UET Tag Here -->`
- `<!-- LinkedIn Insight Tag Here -->`

## Lead Form Details

### Hero Form (short, above the fold)

- Full Name
- Company Name
- Work Email
- Phone Number
- Country

### Detailed Form (lower section)

- Full Name
- Company Name
- Work Email
- Phone Number
- Country
- Industry
- Number of Sites
- Approximate Asset Count
- Message / Requirement

### Current Submit Behavior

- Prevents default submit
- Shows success message:
  - `Thank you. Our team will review your requirement and contact you shortly.`
- Includes placeholder payload handling for future integrations

### Integration-Ready Targets

- Odoo CRM
- Email API
- Webhook
- Google Sheet
- Backend endpoint

## Design Direction Implemented

- Modern B2B SaaS style
- White background + blue/navy accents
- Card-based sections with soft shadows
- Professional icon usage
- Rounded UI components
- Responsive layout
- Mobile sticky CTA
- Accessible contrast-oriented styling

## Technical Implementation Notes

- Built as React component page:
  - `src/components/Products/RioALMUkLanding.jsx`
- Styles:
  - `src/components/Products/RioALMUkLanding.css`
- Route registered in:
  - `src/App.js`
- Header/footer hidden for this landing route to keep ad-page focus

## Build Verification

- Production build completed successfully (`exit code 0`)
- Build reported existing project ESLint warnings in unrelated files
- Landing page itself compiles and is functional

## Quick Access Links

- **Local:** `http://localhost:3000/uk/asset-maintenance-management-software`
- **Network:** `http://192.168.0.119:3000/uk/asset-maintenance-management-software`
- **Production:** `https://www.riobizsols.com/uk/asset-maintenance-management-software`
