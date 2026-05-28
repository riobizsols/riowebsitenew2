# RIO EAM Pricing Page - Testing Guide

## Pre-Launch Testing Checklist

### ✅ Functional Testing

#### Region Detection & Toggle
- [ ] **Auto-detect on first load**: Open `/products/rio-eam/pricing` in an incognito/private window
  - Expected: INR prices shown if visitor appears to be in India; USD if elsewhere
  - If geolocation fails: Should fallback to USD without errors
  
- [ ] **Region toggle works**: Click "🇮🇳 India (INR)" button
  - Expected: Prices update to INR format immediately
  
- [ ] **Region toggle to USD**: Click "🌍 International (USD)" button
  - Expected: Prices update to USD format immediately
  
- [ ] **LocalStorage persistence**: Toggle to a region, refresh page
  - Expected: Previously selected region is preserved
  - Test: Open F12 → Application → LocalStorage → Find `rioAlmRegion`

#### Pricing Cards
- [ ] **All three plans render**: Single Site, Multi Site, Enterprise
- [ ] **"Most Popular" badge appears**: Only on Multi Site card
- [ ] **Prices display correctly**: Match PRICING_CONFIG values
- [ ] **"Plan Details" accordion works**: Click to expand, click again to collapse
  - Expected: Content slides down/up smoothly
  - Check: Shows "What's Included" bullets and additional site pricing

#### Buttons & Links
- [ ] **"Book a Demo" buttons**: All point to `/products/rio-eam/contact`
- [ ] **"Get a Proposal" buttons**: All point to email mailto link
  - Test: Click → Opens email client with correct recipient
- [ ] **"Contact Our Team" link**: Opens mailto link
- [ ] **Contact info links**: Email and WhatsApp links functional
  - Email: `tony.rozario@riobizsols.com`
  - WhatsApp: Opens WhatsApp for `+91 88884910777`

#### Accordions & Expandables
- [ ] **Plan Details accordion**: Expands/collapses smoothly
- [ ] **FAQ accordion**: Click questions to expand/collapse
  - Expected: Smooth animation, arrow rotates 180°
  - Check: All 10 FAQs can be expanded independently

#### Feature Grid (What's Included)
- [ ] **All 16 features render**: Check scrolling down
- [ ] **Icons display correctly**: All icons visible, colors correct
- [ ] **Text is readable**: Proper contrast, proper sizing

#### Deployment Options
- [ ] **All 3 cards render**: Customer-Hosted, RIO-Hosted, Hybrid
- [ ] **Badges visible**: "Full Control", "Fast Rollout", "Flexible"
- [ ] **Includes lists**: All bullet points visible
- [ ] **"Contact Our Team" CTA**: Link functional

#### Add-ons Section
- [ ] **Two-column layout** (desktop): One-time & Annual side-by-side
- [ ] **Tables render correctly**: All rows visible
- [ ] **Mobile layout** (≤768px): Single column, full width

#### TCO Comparison
- [ ] **Layout**: Left | VS | Right (desktop)
- [ ] **Mobile layout** (≤768px): Stacked vertically
- [ ] **Benefit list**: All 4 checkmark items visible

#### Final CTA Section
- [ ] **Headline readable**: "Ready to bring control..."
- [ ] **CTA buttons visible**: "Book a Demo" and "Get a Proposal"
- [ ] **Contact info displays**: Email and WhatsApp
- [ ] **Disclaimer visible**: Taxes and integrations note

---

### ✅ Responsive Design Testing

#### Desktop (1200px+)
- [ ] All 3 pricing cards in single row
- [ ] Grid layouts (features, deployment) display properly
- [ ] Hero section full width with proper spacing
- [ ] No horizontal scrolling
- [ ] Text is readable (not too small)

#### Tablet (768px - 1024px)
- [ ] Layout adjusts gracefully
- [ ] Pricing cards may stack (verify CSS breakpoint)
- [ ] Buttons remain clickable
- [ ] Tables are readable
- [ ] No text overflow

#### Mobile (480px - 767px)
- [ ] Single column layout
- [ ] Pricing cards stack vertically
- [ ] All accordions work with touch
- [ ] Buttons are large enough (48x48px minimum)
- [ ] No horizontal scrolling
- [ ] Trust strip stacks vertically
- [ ] Region toggle buttons full width

#### Small Mobile (< 480px)
- [ ] Text sizes appropriate
- [ ] All buttons clickable without zooming
- [ ] Padding and spacing adjusted
- [ ] Feature grid shows 1 column
- [ ] FAQ text wraps properly

**Test using:**
- Chrome DevTools (F12 → Device Toolbar)
- Firefox Responsive Design Mode
- Real mobile devices (iPhone, Android)
- Tablet devices

---

### ✅ Cross-Browser Testing

Test in each browser:
- [ ] **Chrome** (latest version)
- [ ] **Firefox** (latest version)
- [ ] **Safari** (Mac & iOS)
- [ ] **Edge** (Windows)

Check:
- [ ] CSS renders correctly
- [ ] Animations smooth (no jank)
- [ ] Geolocation works (or fallback graceful)
- [ ] LocalStorage works
- [ ] No console errors

---

### ✅ Accessibility Testing

#### Color Contrast
- [ ] Text on backgrounds meets WCAG AA (4.5:1 for body text)
- [ ] Links are understandable (not color-only)
- [ ] Use: Chrome DevTools → Lighthouse → Accessibility

#### Keyboard Navigation
- [ ] Tab through entire page from top to bottom
- [ ] All buttons, links, accordions are reachable
- [ ] Focus indicators visible (blue outline around elements)
- [ ] No keyboard traps (can always move forward with Tab)
- [ ] Accordions expandable via keyboard (Enter/Space)

#### Screen Reader
- [ ] Use NVDA (Windows) or VoiceOver (Mac)
- [ ] Page title announced
- [ ] Headings (h1, h2, h3) announced correctly
- [ ] Link text is descriptive ("Book Demo" not "Click Here")
- [ ] Button text clear
- [ ] Form labels associated (if applicable)

#### Mobile Accessibility
- [ ] Touch targets ≥48x48px
- [ ] Text zoom to 200% without loss of function
- [ ] No auto-playing media
- [ ] Color not only means of conveying info

**Use Lighthouse (F12):**
- Run Accessibility audit
- Target score: ≥90

---

### ✅ Performance Testing

#### Page Load
- [ ] Page loads in < 3 seconds (fast 3G)
- [ ] No layout shift (CLS < 0.1)
- [ ] Images optimized (if any)
- [ ] CSS/JS minified

**Test using:**
- Chrome DevTools → Performance tab
- Lighthouse (F12)
- WebPageTest.org

#### Runtime Performance
- [ ] Smooth scrolling (60fps)
- [ ] Accordions open/close without lag
- [ ] Animations smooth (no stuttering)
- [ ] Region toggle instant

**Debug:**
- F12 → Performance → Record → Perform action → Stop
- Look for frame rate > 50fps

---

### ✅ SEO Testing

#### Structure
- [ ] One h1 tag (main headline)
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Semantic HTML (`<section>`, `<nav>`, `<article>`)

#### Meta Tags
- [ ] Page title descriptive (if using Helmet)
- [ ] Meta description present
- [ ] Mobile viewport meta tag
- [ ] Open Graph tags (for social sharing)

**Test using:**
- Lighthouse (F12)
- MozBar (browser extension)
- Screaming Frog SEO Spider

#### Content
- [ ] No duplicate content
- [ ] Links not broken
- [ ] Image alt tags (if applicable)
- [ ] Keywords naturally included

---

### ✅ Content Testing

#### Accuracy
- [ ] All prices are correct (double-check with finance)
- [ ] Pricing notes are accurate:
  - "Taxes extra as applicable (GST)"
  - "Integrations billed based on scope"
- [ ] Feature descriptions accurate to actual product
- [ ] FAQ answers are correct and helpful
- [ ] Contact email/phone are correct

#### Completeness
- [ ] All 9 sections present:
  1. Hero
  2. Region Switcher
  3. Pricing Cards
  4. What's Included
  5. Deployment Options
  6. Add-ons & Services
  7. TCO Comparison
  8. FAQs
  9. Final CTA
- [ ] All 3 plans have content
- [ ] All features visible
- [ ] All FAQs present

#### Copy Quality
- [ ] No typos (use browser spell-check)
- [ ] Grammar is correct
- [ ] Tone consistent (professional B2B)
- [ ] No placeholder text remaining

---

### ✅ Integration Testing

#### With App.js
- [ ] Route `/products/rio-eam/pricing` works
- [ ] Component imports without errors
- [ ] Header/Navbar displays
- [ ] Footer displays
- [ ] No console errors on page load

#### With Navigation
- [ ] Can reach pricing page from menu (if added)
- [ ] Can navigate back to other products
- [ ] ScrollToTop works (jumps to top on route change)
- [ ] Exit Intent popup doesn't interfere

#### With External Services
- [ ] Geolocation API (ipapi.co) responds
- [ ] Email links open correctly
- [ ] WhatsApp link opens WhatsApp/Web
- [ ] Analytics/tracking (if configured) works

---

### ✅ Data Testing

#### Pricing Config
- [ ] All prices are strings in PRICING_CONFIG:
  ```javascript
  price: '3,49,000',  // ✅ String
  price: 3,49,000     // ❌ Would fail
  ```
- [ ] All priceRaw are numbers:
  ```javascript
  priceRaw: 349000    // ✅ Number
  priceRaw: '349000'  // ❌ Would fail conversion
  ```
- [ ] INR and USD have identical structure

#### Features
- [ ] Each feature has: icon, title, desc
- [ ] Icons are valid react-icons
- [ ] No missing required fields
- [ ] 16 features present

#### Deployment Options
- [ ] 3 deployment options present
- [ ] Each has: title, subtitle, badge, description, bestFor, includes[]
- [ ] Includes arrays have 4 items each

---

### ✅ Error Handling

#### Network Issues
- [ ] Geolocation timeout: Falls back to USD gracefully
- [ ] Invalid response: No console errors, uses fallback
- [ ] Page works offline: All essential content visible

#### User Actions
- [ ] Rapidly clicking toggle: No double-renders or bugs
- [ ] Clicking same accordion multiple times: Works smoothly
- [ ] Scrolling while animations play: Smooth, no conflicts

#### Browser Limitations
- [ ] No console errors in any browser
- [ ] LocalStorage unavailable: Still works (no localStorage, but page functions)
- [ ] JavaScript disabled: Page structure still visible (graceful degradation)

---

## Test Scenarios

### Scenario 1: First-Time Visitor (India)
1. Visit `/products/rio-eam/pricing` from India
2. INR prices should auto-display
3. LocalStorage shows `rioAlmRegion: 'inr'`
4. ✅ Success: User sees India pricing immediately

### Scenario 2: Region Toggle
1. Visit pricing page (any region)
2. Click region toggle
3. Prices update immediately
4. Toggle again—other region shows
5. Refresh page—toggle choice persists
6. ✅ Success: Toggle works, choice saved

### Scenario 3: Expand Plan Details
1. Click "Plan Details" on a pricing card
2. Accordion opens smoothly (animation visible)
3. Shows 10 included features + additional site pricing
4. Click again—accordion closes
5. ✅ Success: Accordion works smoothly

### Scenario 4: Mobile User
1. Visit on iPhone/Android or 480px viewport
2. All content visible without horizontal scroll
3. Tap "Book Demo"—opens contact page
4. Tap "Get Proposal"—opens email
5. ✅ Success: Full functionality on mobile

### Scenario 5: Keyboard Navigation
1. Press Tab repeatedly from top of page
2. Focus moves through all interactive elements:
   - Region buttons
   - Plan CTAs
   - Accordions
   - FAQ questions
   - Final CTA buttons
3. All focus indicators visible (blue outline)
4. ✅ Success: Full keyboard accessibility

### Scenario 6: Slow Network (Fast 3G)
1. Throttle network to "Fast 3G" in DevTools
2. Load `/products/rio-eam/pricing`
3. Page loads and becomes interactive < 3 seconds
4. All content eventually visible
5. ✅ Success: Acceptable performance on slow connection

---

## Known Limitations & Workarounds

| Issue | Cause | Workaround |
|-------|-------|-----------|
| Geolocation fails in some regions | IP blocking, privacy settings | Falls back to USD, user can toggle |
| LocalStorage not available | Private/Incognito mode | Page still works, no persistence |
| Icons not showing | react-icons not installed | Should be pre-installed; reinstall if needed |
| Prices look wrong | Number format mismatch | Ensure `price` is string, `priceRaw` is number |
| Mobile layout broken | CSS cache | Hard refresh (Ctrl+Shift+R) |

---

## Testing Tools

**Recommended:**
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/) (F12)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) (F12 → Lighthouse)
- [WAVE Accessibility Checker](https://wave.webaim.org/) (Browser extension)
- [Responsively App](https://responsively.app/) (Multi-device testing)
- [BrowserStack](https://www.browserstack.com/) (Real device testing)

---

## Test Report Template

```markdown
# RIO EAM Pricing Page - Test Report

**Date:** [Date]
**Tester:** [Name]
**Environment:** [Browser/Device]

## Results

| Test Case | Status | Notes |
|-----------|--------|-------|
| Auto-detect region | ✅ PASS / ❌ FAIL | [Notes] |
| Region toggle | ✅ PASS / ❌ FAIL | [Notes] |
| Plan details accordion | ✅ PASS / ❌ FAIL | [Notes] |
| Mobile responsiveness | ✅ PASS / ❌ FAIL | [Notes] |
| Keyboard navigation | ✅ PASS / ❌ FAIL | [Notes] |
| All links functional | ✅ PASS / ❌ FAIL | [Notes] |

## Issues Found
- [Issue 1]
- [Issue 2]

## Sign-Off
- [✅/❌] Ready for production
- Signed: ________________
```

---

## Continuous Testing

After launch:
- [ ] Monitor console for JS errors (Sentry/LogRocket)
- [ ] Track geolocation success rate
- [ ] Monitor CTA click-through rates
- [ ] Review user feedback
- [ ] Test monthly across browsers/devices
- [ ] Update pricing annually or as needed

---

**Last Updated:** Jan 24, 2026
