# RIO ALM Pricing Page - Implementation Guide

## Overview

A modern, high-converting pricing page for RIO ALM (Asset Lifecycle Management) with region-based pricing (India INR vs International USD), responsive design, and complete feature transparency.

**Live Route:** `/products/rio-alm/pricing`

---

## Key Features

### ✅ Pricing Configuration
- **Easy-to-edit centralized config** at the top of the component
- **Two regions**: India (INR) and International (USD)
- **Automatic region detection** via IP geolocation
- **LocalStorage persistence** - user's choice is remembered
- **Quick toggle** to switch regions anytime

### ✅ Responsive Design
- **Desktop-first** approach with excellent mobile experience
- **Max width**: 1200px with proper padding
- **Sticky CTAs** on mobile for accessibility
- **Tablet & mobile optimizations** for all sections
- **WCAG accessibility** standards (color contrast, keyboard navigation, focus states)

### ✅ Nine Complete Sections
1. **Hero** - Headline, subheadline, CTAs, trust strip
2. **Region Switcher** - Auto-detect + manual toggle
3. **Pricing Cards** - 3 plans with expandable details
4. **What's Included** - 16 feature grid items
5. **Deployment Options** - 3 deployment models
6. **Add-ons & Services** - One-time + annual services
7. **TCO Comparison** - Why per-site beats per-user
8. **FAQs** - 10 pre-written questions with expandable answers
9. **Final CTA** - Strong closing with contact details

### ✅ Brand & Style
- **Modern gradient hero** (purple/blue)
- **Soft shadows & rounded corners** (8-12px border-radius)
- **Whitespace-generous** layout
- **Professional B2B tone** - confident, clear, trustworthy
- **Color palette**:
  - Primary: `#2563eb` (blue)
  - Accent: `#10b981` (green)
  - Secondary: `#64748b` (slate)
  - Light BG: `#f8fafc`

---

## How to Customize

### 1. Update Pricing Data

Edit the `PRICING_CONFIG` object at the top of `RioALMPricing.js`:

```javascript
const PRICING_CONFIG = {
  inr: {
    currency: '₹',
    currencyCode: 'INR',
    region: 'India (INR)',
    plans: {
      single: {
        name: 'Single Site',
        sites: '1 site',
        price: '3,49,000',        // ← UPDATE HERE
        priceRaw: 349000,
        highlight: false,
        description: 'Perfect for single-location operations'
      },
      // ... other plans
    },
    additionalSites: {
      multi: '₹60,000 per additional site',    // ← UPDATE HERE
      enterprise: '₹45,000 per additional site'
    },
    amc: '12% of license value per year (from Year 2)',  // ← UPDATE HERE
    hosting: {
      prod: '₹1,20,000/year',        // ← UPDATE HERE
      devProd: '₹2,10,000/year'
    },
    notes: {
      taxes: 'Taxes extra as applicable (GST).',
      integrations: 'Integrations billed based on scope.'
    }
  },
  usd: {
    // Same structure for USD pricing
    currency: '$',
    plans: {
      single: {
        price: '4,500',        // ← UPDATE HERE
        priceRaw: 4500,
        // ...
      },
      // ...
    }
    // ...
  }
};
```

**Pro Tip:** The `priceRaw` field (numeric) is for calculations; `price` (string) is for display.

### 2. Update Features

Edit the `FEATURES_DATA` array to add/remove features:

```javascript
const FEATURES_DATA = [
  {
    icon: <FaClipboardList />,  // Use react-icons
    title: 'Centralized Asset Repository',
    desc: 'Multi-location ready, organize assets by department, location, or custom attributes'
  },
  // Add or remove features here
];
```

**Available icons** (from react-icons/fa):
- `FaClipboardList` - for lists/assets
- `FaChartLine` - for analytics/reporting
- `FaUserTie` - for users/roles
- `FaShieldAlt` - for security/compliance
- `FaMobile` - for mobile features
- `FaPlugCircle` - for integrations
- `FaGlobe` - for multi-location
- etc.

### 3. Update Deployment Options

Edit the `DEPLOYMENT_OPTIONS` array:

```javascript
const DEPLOYMENT_OPTIONS = [
  {
    title: 'Customer-Hosted',
    subtitle: 'On-Premise / Private Cloud',
    badge: 'Full Control',
    description: 'You host it; we implement & support',
    bestFor: 'Data control, compliance, internal IT',
    includes: [
      'Installation & setup',
      'Security hardening guidance',
      // Add/remove items
    ]
  },
  // Other deployment options
];
```

### 4. Update FAQs

The FAQs are in the render function. Find the section that starts with:

```javascript
{[
  {
    q: "What counts as a 'Site'?",
    a: "A site is a physical location..."
  },
  // Edit or add more FAQs here
].map((faq, idx) => (
```

### 5. Update Contact Info

Look for the final CTA section:

```javascript
<a href="mailto:tony.rozario@riobizsols.com" className="btn btn-primary">
  Book Demo
</a>
```

Replace email and phone number as needed:
- Email: `tony.rozario@riobizsols.com`
- Phone: `+91 88884910777`

---

## Region Detection Logic

The page uses **automatic IP-based geolocation**:

1. **On mount**, checks `localStorage` for saved region preference
2. If not found, calls `https://ipapi.co/json/` to detect country
3. If country == `IN` → defaults to **India (INR)**
4. Else → defaults to **International (USD)**
5. User can manually toggle anytime; choice is saved to `localStorage`

**Fallback**: If geolocation fails, defaults to USD (International).

---

## Styling & Customization

### CSS File: `RioALMPricing.css`

The CSS is well-organized with sections:

```css
:root {
  --primary-color: #2563eb;
  --accent-color: #10b981;
  --text-dark: #1e293b;
  --text-light: #64748b;
  --light-bg: #f8fafc;
  --border-color: #e2e8f0;
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  /* ... other variables */
}
```

**To change brand colors:**
1. Update the CSS variables in `:root`
2. All components will automatically update

**To adjust spacing:**
- Padding: Look for `padding: 80px 20px;` (adjust first number)
- Gaps: `gap: 30px;` (adjust for spacing between items)
- Max-width: `.pricing-container { max-width: 1200px; }` (adjust if needed)

### Responsive Breakpoints

```css
@media (max-width: 768px) {
  /* Tablet adjustments */
}

@media (max-width: 480px) {
  /* Mobile adjustments */
}
```

---

## Component Structure

```
RioALMPricing.js
├── Config
│   ├── PRICING_CONFIG (INR + USD)
│   ├── FEATURES_DATA (16 features)
│   └── DEPLOYMENT_OPTIONS (3 options)
├── State
│   ├── region (inr / usd)
│   ├── expandedPlan (plan details accordion)
│   └── expandedFaq (FAQ accordion)
├── Effects
│   └── useEffect (region detection on mount)
└── Render
    ├── Hero Section
    ├── Region Switcher
    ├── Pricing Cards (3 cards with accordions)
    ├── What's Included (feature grid)
    ├── Deployment Options (3 cards)
    ├── Add-ons & Services (two-column table)
    ├── TCO Comparison
    ├── FAQs (expandable list)
    └── Final CTA
```

---

## SEO & Meta Tags

The page includes:
- ✅ Semantic HTML (h1, h2, h3, sections)
- ✅ Descriptive heading hierarchy
- ✅ Accessible color contrast (WCAG AA)
- ✅ Keyboard navigation (all interactive elements focusable)
- ✅ Mobile viewport optimization

**To add page metadata**, update your routing or parent layout component:

```javascript
// In parent layout or Helmet
<Helmet>
  <title>RIO ALM Pricing - Per-Site Licensing | RIO BizSols</title>
  <meta name="description" content="Transparent, flexible RIO ALM pricing. Per-site licensing with unlimited users and assets. Region-based pricing (India INR, International USD)." />
  <meta name="keywords" content="RIO ALM pricing, asset lifecycle management, per-site licensing, India, international" />
</Helmet>
```

---

## Integration Points

### Route in App.js
```javascript
import RioALMPricing from './components/Products/RioALMPricing';

<Route path='/products/rio-alm/pricing' element={<RioALMPricing/>}/>
```

### Link to Pricing Page
```javascript
<a href="/products/rio-alm/pricing">View Pricing</a>
```

### From Navbar
Consider adding a "Pricing" link in your navigation menu.

---

## Performance Notes

- **No external dependencies** beyond react-icons (already installed)
- **Lightweight geolocation** via ipapi.co (free, reliable)
- **CSS-only animations** (no JS-heavy libraries)
- **Lazy-loaded images** if you add any
- **LocalStorage** for region preference (no server calls after first detection)

---

## Accessibility Checklist

- ✅ Color contrast (WCAG AA 4.5:1 for text)
- ✅ Keyboard navigation (tab through all elements)
- ✅ Focus indicators (outline on `:focus`)
- ✅ Semantic HTML (`<section>`, `<h1-h3>`, `<button>`, `<a>`)
- ✅ ARIA labels (if needed; component uses native HTML)
- ✅ Mobile touch targets (min 48x48px)
- ✅ Reduced motion support (`prefers-reduced-motion`)

---

## Common Customizations

### Change Hero Gradient
```css
.pricing-hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  /* ↑ Change these hex colors */
}
```

### Make Cards Stack Differently on Desktop
```css
.pricing-cards-grid {
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  /* Change minmax(320px, ...) to adjust card width */
}
```

### Adjust Card Highlight (Most Popular)
```css
.pricing-card.highlight {
  transform: scale(1.02);
  /* Reduce scale(1.02) to scale(1.01) for subtle effect */
}
```

### Change Button Colors
```css
.btn-primary {
  background-color: var(--primary-color);
  /* Change --primary-color in :root */
}
```

---

## Testing Checklist

Before going live:

- [ ] Verify pricing numbers are correct for both regions
- [ ] Test region toggle and localStorage persistence
- [ ] Check responsive design on mobile, tablet, desktop
- [ ] Test all accordion toggles (plan details, FAQs)
- [ ] Verify all CTA links work (demo, proposal, contact)
- [ ] Test keyboard navigation (Tab through entire page)
- [ ] Check color contrast with accessibility tool
- [ ] Load page with slow internet (test geolocation timeout)
- [ ] Verify email links open email client
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Check for console errors (F12 dev tools)
- [ ] Test on real mobile devices (not just browser emulation)

---

## Troubleshooting

### Region Detection Not Working
- Check browser console for errors
- Verify ipapi.co is accessible (may be blocked in some regions)
- Falls back to USD automatically if geolocation fails
- User can always manually toggle region

### Prices Not Showing
- Ensure all `price` strings in `PRICING_CONFIG` are formatted correctly
- Check that you're not accidentally editing `priceRaw` instead of `price`
- Verify no typos in object keys (e.g., `plans.single`, not `plans.Single`)

### Accordions Not Expanding
- Check browser console for JS errors
- Verify state management (expandedPlan, expandedFaq) is working
- Ensure onClick handlers are attached to correct elements

### Styling Issues on Mobile
- Clear browser cache (Ctrl+Shift+Delete)
- Check CSS media queries are loading
- Verify no conflicting global CSS from other components

---

## Future Enhancements

Ideas for future versions:

1. **Custom Quote Tool** - Users input sites/users, get estimated cost
2. **Comparison Matrix** - Side-by-side plan comparison table
3. **ROI Calculator** - Compare RIO ALM vs manual asset management
4. **Testimonials** - Add customer quotes below TCO section
5. **Video Demo** - Embed product demo video in pricing cards
6. **Form Integration** - "Get a Proposal" form with pre-fill
7. **Analytics** - Track pricing page metrics (region viewed, plan clicked, CTA engagement)
8. **A/B Testing** - Test different headlines or CTA text

---

## Contact & Support

- **Primary Contact**: tony.rozario@riobizsols.com
- **WhatsApp**: +91 88884910777
- **Product Website**: https://www.riobizsols.com/products/rio-alm

---

## License & Ownership

This pricing page is proprietary to RIO BizSols Pvt Ltd. All pricing, branding, and content are confidential.

---

## Version History

- **v1.0** (Jan 24, 2026) - Initial release with full feature set, region detection, responsive design, and 9 sections.

---

**Ready to customize? Start with `PRICING_CONFIG` and update your pricing numbers!**
