# CMMS v2 hero — layout snapshot (2026-05-29)

## Dev URLs
- **Frontend:** http://localhost:3001/asset-maintenance-management-software-v2 (`PORT=3001` in `.env.development.local`; 3000 is another app)
- **Backend API:** http://localhost:3003

## Assets
- Logo: `src/assets/images/RIO-Logo.png`
- Desktop dashboard: `src/assets/images/rio-alm-dashboard f.png`
- Mobile: `public/rio-alm-asset-management-mobile.png`

## Hero grid (desktop, >900px)
| Row | Left column | Right column |
|-----|-------------|--------------|
| 1 | Intro (eyebrow, H1, sub, CTAs) | Form (full height, rows 1–3) |
| 2 | Feature icons (full width, 6 items, 2-line labels, pair dividers) | (form continues) |
| 3 | Dashboard stack (laptop + overlapping phone) | (form continues) |

## Dashboard stack
- Laptop screenshot left, phone mock overlapping on the right (absolute position inside `.v2-showcase-inner`)
- Sized to fit left column beside form (~300px desktop height)

## Key files
- `components/Hero.jsx` — layout structure
- `components/ProductShowcase.jsx` — dashboard images
- `components/HeroLeadForm.jsx` — demo/pricing form
- `App.css` — `.v2-hero-layout`, `.v2-hero-highlights`, `.v2-hero-showcase-wrap`

## Responsive
- ≤900px: single column — intro → icons → showcase (desktop then phone stacked) → form
