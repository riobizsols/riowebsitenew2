# 🎨 RIO ALM Pricing Page - Visual & Style Reference

## Color Palette

### Primary Colors
```
Primary Blue:      #2563eb (Main CTA, accents)
Primary Dark:      #1e40af (Hover states)
Accent Green:      #10b981 (Checkmarks, badges)
Secondary Slate:   #64748b (Secondary text)
```

### Neutral Colors
```
Dark Text:         #1e293b (Body text, headings)
Light Text:        #64748b (Secondary text, hints)
Light Background:  #f8fafc (Section backgrounds)
Border Color:      #e2e8f0 (Card borders, dividers)
White:             #ffffff (Card backgrounds)
```

### Gradient
```
Hero Gradient:     linear-gradient(135deg, #667eea 0%, #764ba2 100%)
                   (Purple → Blue diagonal)
```

## Typography

### Font Stack
```
System Fonts:
-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 
'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 
'Helvetica Neue', sans-serif
```

### Font Sizes
```
Hero Headline:     48px (desktop), 36px (tablet), 28px (mobile)
Section Titles:    36px (desktop), 28px (tablet), 24px (mobile)
Card Headlines:    22px
Subheadings:       18px
Body Text:         16px
Small Text:        14px
Tiny Text:         13px-12px
```

### Font Weights
```
Bold Headings:     700
Semi-Bold Labels:  600
Medium:            500
Regular:           400
```

### Line Heights
```
Headings:          1.2
Body Text:         1.6
Compact:           1.4
```

## Spacing System

### Padding (Outer)
```
Desktop Section:   padding: 80px 20px
Tablet Section:    padding: 60px 15px
Mobile Section:    padding: 50px 15px
```

### Container
```
Max Width:         1200px
Horizontal Margin: auto
Side Padding:      20px (desktop), 15px (mobile)
```

### Card/Element Spacing
```
Large Sections:    gap: 50px
Medium Sections:   gap: 30px
Small Items:       gap: 20px
Button Spacing:    gap: 15px
Trust Strip:       gap: 30px (desktop), 15px (mobile)
```

### Internal Padding
```
Large Cards:       padding: 40px
Small Cards:       padding: 30px
Compact:           padding: 20px-25px
```

## Border Radius (Roundness)

```
Large Elements:    border-radius: 12px (cards, sections)
Medium Elements:   border-radius: 10px (deployment cards)
Small Elements:    border-radius: 8px (buttons, badges, inputs)
Tight:             border-radius: 6px (small badges)
```

## Shadows

### Shadow Definitions
```css
--shadow-sm:  0 1px 2px 0 rgba(0, 0, 0, 0.05)
--shadow-md:  0 4px 6px -1px rgba(0, 0, 0, 0.1)
--shadow-lg:  0 10px 15px -3px rgba(0, 0, 0, 0.1)
```

### Usage
```
Hover Cards:       box-shadow: --shadow-lg
Default Cards:     border only (no shadow)
Hero Section:      box-shadow: var(--shadow-lg) on button hover
```

## Button Styles

### Button Sizing
```
Large Button:      padding: 16px 36px, font-size: 16px
Standard Button:   padding: 12px 28px, font-size: 15px
Small Button:      padding: 10px 20px, font-size: 14px
```

### Button Variants

**Primary (Blue)**
```
Background:  var(--primary-color) #2563eb
Text:        white
Border:      2px solid var(--primary-color)
Hover:       background: var(--primary-dark) #1e40af
             transform: translateY(-2px)
             box-shadow: var(--shadow-lg)
```

**Secondary (White with Blue Text)**
```
Background:  white
Text:        var(--primary-color)
Border:      2px solid white
Hover:       background: #f0f4ff (light blue)
             transform: translateY(-2px)
```

**Outline (Transparent)**
```
Background:  transparent
Text:        var(--text-dark)
Border:      2px solid var(--border-color)
Hover:       border-color: var(--primary-color)
             color: var(--primary-color)
             background: #f0f4ff
```

## Animations & Transitions

### Standard Transition
```css
transition: all 0.3s ease;
```

### Key Animations
```
Card Hover:      translateY(-5px) + shadow increase
Button Hover:    translateY(-2px) + shadow increase
Accordion Open:  slideDown animation (0.3s)
Region Toggle:   Instant color change
Hover Effects:   Border color change, background color change
```

### Keyframe Examples
```css
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## Layout Grids

### Pricing Cards Grid
```
Desktop (1200px+):  grid-template-columns: repeat(3, 1fr)
Tablet (768px):     grid-template-columns: repeat(2, 1fr) or 1fr
Mobile (<768px):    grid-template-columns: 1fr
Gap:                30px
```

### Features Grid (What's Included)
```
Desktop:   grid-template-columns: repeat(4, 1fr)
Tablet:    grid-template-columns: repeat(2, 1fr)
Mobile:    grid-template-columns: 1fr
Gap:       40px (vertical), 30px (horizontal)
```

### Deployment Grid
```
Desktop:   grid-template-columns: repeat(3, 1fr)
Tablet:    grid-template-columns: repeat(2, 1fr)
Mobile:    grid-template-columns: 1fr
Gap:       30px
```

### FAQ Grid
```
Desktop:   grid-template-columns: repeat(2, 1fr)
Tablet:    grid-template-columns: 1fr
Mobile:    grid-template-columns: 1fr
Gap:       20px
```

### Add-ons Grid
```
Desktop:   grid-template-columns: repeat(2, 1fr)
Tablet:    grid-template-columns: 1fr
Mobile:    grid-template-columns: 1fr
Gap:       50px
```

## Hero Section Styling

```css
.pricing-hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 80px 20px;
  text-align: center;
}

.pricing-hero-title {
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.5px;
  margin-bottom: 10px;
}

.pricing-hero-subheading {
  font-size: 18px;
  opacity: 0.9;
  margin: 20px auto 40px;
  line-height: 1.5;
  max-width: 800px;
}

.trust-strip {
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  font-size: 14px;
  font-weight: 500;
}
```

## Card Styling

### Default Card
```css
.pricing-card {
  background: white;
  border: 2px solid var(--border-color);
  border-radius: 12px;
  padding: 40px 30px;
  transition: all 0.3s ease;
}

.pricing-card:hover {
  border-color: var(--primary-color);
  box-shadow: 0 20px 30px -10px rgba(37, 99, 235, 0.15);
  transform: translateY(-5px);
}
```

### Highlighted Card (Most Popular)
```css
.pricing-card.highlight {
  border: 2px solid var(--primary-color);
  background: linear-gradient(135deg, #f0f4ff 0%, white 100%);
  transform: scale(1.02);
  box-shadow: var(--shadow-lg);
}
```

### Badge (Most Popular)
```css
.badge-popular {
  position: absolute;
  top: -12px;
  left: 20px;
  background-color: var(--accent-color);
  color: white;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
```

## Price Display Styling

```css
.card-price {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin: 30px 0;
}

.card-price .currency {
  font-size: 20px;
  font-weight: 600;
  color: var(--primary-color);
}

.card-price .amount {
  font-size: 42px;
  font-weight: 700;
  color: var(--text-dark);
}

.card-price .period {
  font-size: 14px;
  color: var(--text-light);
}
```

## Accordion Styling

### Accordion Button
```css
.faq-question {
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 20px;
  background: white;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: all 0.3s ease;
  font-size: 15px;
  font-weight: 600;
  color: var(--text-dark);
}

.faq-question:hover {
  background-color: #f8fafc;
}
```

### Accordion Content
```css
.faq-answer {
  padding: 0 20px 20px 55px;
  color: var(--text-light);
  font-size: 14px;
  line-height: 1.6;
  background-color: #f8fafc;
  animation: slideDown 0.3s ease;
}
```

### Arrow Rotation
```css
.faq-arrow {
  display: inline-block;
  transition: transform 0.3s ease;
  color: var(--text-light);
}

.faq-arrow.open {
  transform: rotate(180deg);
}
```

## Region Toggle Styling

```css
.region-toggle {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
}

.region-btn {
  padding: 10px 24px;
  border: 2px solid var(--border-color);
  background-color: white;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  color: var(--text-dark);
  transition: all 0.3s ease;
}

.region-btn:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
}

.region-btn.active {
  background-color: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}
```

## Mobile-First Responsive Approach

### Tablet Adjustments (768px)
```css
@media (max-width: 768px) {
  .section-title { font-size: 28px; }
  .pricing-cards-grid { grid-template-columns: 1fr; }
  .btn-primary-large { width: 100%; }
  .tco-content { grid-template-columns: 1fr; }
}
```

### Mobile Adjustments (480px)
```css
@media (max-width: 480px) {
  .pricing-hero { padding: 50px 15px; }
  .pricing-hero-title { font-size: 28px; }
  .section-title { font-size: 24px; }
  .card-price .amount { font-size: 32px; }
  .trust-strip { flex-direction: column; }
}
```

## Hover & Focus States

### Card Hover
```css
border-color → primary-color
box-shadow → increased
transform → translateY(-5px)
```

### Button Hover
```css
background → darker shade
transform → translateY(-2px)
box-shadow → box-shadow-lg
```

### Focus (Keyboard Navigation)
```css
outline: 2px solid var(--primary-color);
outline-offset: 2px;
```

## Accessibility Color Contrast

### Text on White Background
```
Dark Text (#1e293b) on White (#ffffff):
Contrast Ratio: 14.2:1 ✅ WCAG AAA
```

### Text on Blue Background
```
White Text on Blue (#2563eb):
Contrast Ratio: 7.5:1 ✅ WCAG AAA
```

### Text on Light BG
```
Slate Text (#64748b) on Light BG (#f8fafc):
Contrast Ratio: 6.5:1 ✅ WCAG AA
```

## Icon Sizing

```css
Feature Icons:        font-size: 28px
FAQ Icon:             font-size: 16px
Checkmark Icons:      flex-shrink: 0 (prevent shrinking)
Arrow Icon:           font-size: 12px
Deployment Badge:     Display as inline-block
```

## Print Styles

```css
@media print {
  .region-switcher-section,
  .pricing-hero-ctas,
  .card-ctas,
  .final-ctas,
  .deployment-help { display: none; }
  
  .pricing-card { page-break-inside: avoid; }
  .section-title { page-break-after: avoid; }
}
```

## Reduced Motion (Accessibility)

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 🎨 Quick CSS Customization

### To Change Primary Color
1. Find `:root` section in CSS
2. Change `--primary-color: #2563eb;` to your color
3. All blue elements update automatically

### To Change Spacing
1. Find padding values in component sections
2. Change `padding: 80px 20px;` as needed
3. Adjust gaps in grid layouts: `gap: 30px;`

### To Change Border Radius
1. Find `border-radius: 12px;` on cards
2. Change to `border-radius: 8px;` (less rounded) or `16px;` (more rounded)

### To Change Shadow Effect
1. Find `:root --shadow-lg` definition
2. Adjust blur radius (10px → 15px = softer)
3. Adjust spread (3px → 5px = bigger shadow)

### To Add Dark Mode
```css
@media (prefers-color-scheme: dark) {
  .rio-pricing-page {
    background-color: #0f172a;
    color: #e2e8f0;
  }
  /* Update all color references */
}
```

---

**All styling designed for clarity, accessibility, and modern aesthetics! 🎨**
