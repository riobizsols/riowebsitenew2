#!/usr/bin/env bash
# Full audit: crawlers, Lighthouse (mobile + desktop), light load test, bundle size.
# Usage:
#   ./scripts/audit-landing-page.sh
#   BASE_URL=https://riobizsols.com ./scripts/audit-landing-page.sh
#   BASE_URL=http://127.0.0.1:3003 ./scripts/audit-landing-page.sh

set -euo pipefail

BASE_URL="${BASE_URL:-https://riobizsols.com}"
PATH_SLUG="/asset-maintenance-management-software-v2"
URL="${BASE_URL%/}${PATH_SLUG}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"

echo "=============================================="
echo " EAM v2 landing page audit"
echo " URL: $URL"
echo "=============================================="
echo ""

echo "--- 1) Crawler / Ads bot checks ---"
BASE_URL="${BASE_URL%/}" bash "$ROOT/scripts/verify-alm-landing-crawlers.sh" || true
echo ""

echo "--- 2) Response time (AdsBot) ---"
curl -sS -A "AdsBot-Google" -o /dev/null -w "HTTP %{http_code} | TTFB %{time_starttransfer}s | Total %{time_total}s | Size %{size_download} bytes\n" "$URL" || echo "Request failed"
echo ""

echo "--- 3) Main JS bundle (from HTML) ---"
MAIN_JS=$(curl -sS "$URL" | grep -oE 'static/js/main\.[a-f0-9]+\.js' | head -1 || true)
if [ -n "$MAIN_JS" ]; then
  JS_URL="${BASE_URL%/}/${MAIN_JS}"
  curl -sSI "$JS_URL" | grep -i content-length || echo "Could not read bundle size"
  echo "Bundle path: $MAIN_JS"
  if echo "$MAIN_JS" | grep -q 'main\.92096f4f\.js'; then
    echo "Note: matches optimized local build hash (good)."
  elif curl -sSI "$JS_URL" 2>/dev/null | grep -qi 'content-length: 163'; then
    echo "WARNING: ~1.6MB main bundle — deploy latest npm run build (expected ~162KB main.js)."
  fi
else
  echo "Could not detect main.js in HTML"
fi
echo ""

if ! command -v npx >/dev/null 2>&1; then
  echo "Skip Lighthouse/load test (npx not found)"
  exit 0
fi

echo "--- 4) Lighthouse MOBILE (lab, ~1 min) ---"
LH_M="/tmp/lh-audit-mobile-$$.json"
npx --yes lighthouse@11.7.1 "$URL" \
  --only-categories=performance,accessibility,best-practices,seo \
  --form-factor=mobile \
  --chrome-flags="--headless --no-sandbox" \
  --output=json --output-path="$LH_M" --quiet || true
node -e "
const r=require(process.argv[1]);
const c=r.categories,a=r.audits;
const pct=id=>c[id]?Math.round(c[id].score*100):'n/a';
console.log('Performance:',pct('performance'),'| A11y:',pct('accessibility'),'| Best Practices:',pct('best-practices'),'| SEO:',pct('seo'));
['largest-contentful-paint','first-contentful-paint','total-blocking-time','cumulative-layout-shift','speed-index'].forEach(id=>{
  if(a[id]) console.log(' ',a[id].title+':',a[id].displayValue);
});
" "$LH_M" 2>/dev/null || echo "Lighthouse mobile failed"
echo ""

echo "--- 5) Lighthouse DESKTOP performance (~30s) ---"
LH_D="/tmp/lh-audit-desktop-$$.json"
npx --yes lighthouse@11.7.1 "$URL" \
  --only-categories=performance \
  --form-factor=desktop --preset=desktop \
  --chrome-flags="--headless --no-sandbox" \
  --output=json --output-path="$LH_D" --quiet || true
node -e "
const r=require(process.argv[1]);
console.log('Desktop Performance:',Math.round(r.categories.performance.score*100));
const a=r.audits;
['largest-contentful-paint','total-blocking-time','cumulative-layout-shift'].forEach(id=>{if(a[id])console.log(' ',a[id].title+':',a[id].displayValue);});
" "$LH_D" 2>/dev/null || echo "Lighthouse desktop failed"
echo ""

echo "--- 6) Light load test (10 connections, 15s) ---"
npx --yes autocannon@7.15.0 -c 10 -d 15 "$URL" 2>&1 | tail -12
echo ""
echo "Done. Re-run PageSpeed: https://pagespeed.web.dev/"
