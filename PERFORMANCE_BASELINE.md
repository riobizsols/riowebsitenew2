# Site performance baseline (mobile Lighthouse)

Measured **before** the site-wide optimization deploy (production still on `main.47f5f754.js` ~1.6 MB).

| Page | URL | Score | LCP | CLS | TBT |
|------|-----|------:|-----|-----|-----|
| Home | https://riobizsols.com/ | **39** | 15.3s | 0.011 | 760ms |
| About | https://riobizsols.com/about | **38** | 15.5s | 0.188 | 510ms |
| Contact | https://riobizsols.com/contact | **51** | 12.4s | 0.001 | 410ms |
| Services | https://riobizsols.com/our-service | **22** | 20.2s | 0.597 | 490ms |
| RIO EAM product | https://riobizsols.com/products/rio-eam | **41** | 20.9s | 0 | 650ms |
| ALM landing v1 | https://riobizsols.com/asset-maintenance-management-software | **41** | 9.2s | 0.042 | 880ms |
| ALM landing v2 | https://riobizsols.com/asset-maintenance-management-software-v2 | **35** | 8.2s | 0.250 | 580ms |
| Blog | https://riobizsols.com/blog | **37** | 13.8s | 0 | 890ms |
| La Law product | https://riobizsols.com/products/la-law | **34** | 11.9s | 0.012 | 1270ms |

**Root cause on production:** `main.*.js` is ~**1.6 MB** (old bundle). Local optimized build uses ~**8 KB** `main.*.js` + route chunks.

## What was optimized (deploy `build/` + `Backend/`)

1. **Code-split entries** — v2, v1/UK ALM, and main site boot separate bundles.
2. **Lite chrome** — product pages skip main navbar, footer, WhatsApp, exit popup.
3. **Deferred GTM** — after `load` on main site; interaction-based on v2 ads URL.
4. **Deferred Bootstrap JS** — CSS only on first paint; JS after `load`.
5. **Deferred widgets** — footer, WhatsApp, exit intent load on idle.
6. **Home page** — below-fold sections lazy-loaded on scroll.
7. **ALM prerender** — empty `#root` for React landings (fixes CLS).

## Projected scores (local optimized build, pre-deploy lab test)

| Page | Score | LCP | CLS | TBT |
|------|------:|-----|-----|-----|
| Home | **70** | 7.9s | 0.011 | 170ms |
| About | **69** | 5.0s | 0.188 | 100ms |
| Contact | **75** | 5.2s | 0.001 | 170ms |
| Services | **47** | 25.7s | 0.55 | 190ms |
| RIO EAM product | **66** | 9.5s | 0 | 180ms |
| ALM landing v1 | **92** | 2.9s | 0 | 190ms |
| ALM landing v2 | **93** | 3.1s | 0 | 100ms |
| Blog | **71** | 6.7s | 0 | 190ms |
| La Law product | **65** | 15.1s | 0 | 210ms |

> Largest gain comes from deploying the new `build/` (~8 KB main.js). Services page still needs image/CDN tuning after deploy.

## After deploy — re-run audit

```bash
npm run audit:site
# or locally:
BASE_URL=http://127.0.0.1:3003 npm run audit:site
```

Also verify bundle size:

```bash
curl -sS https://riobizsols.com/ | grep -o 'main\.[a-f0-9]*\.js'
# Should NOT be ~1.6 MB content-length
```
