#!/usr/bin/env bash
# Lighthouse mobile performance for key site pages.
# Usage:
#   ./scripts/audit-site-pages.sh
#   BASE_URL=http://127.0.0.1:3456 ./scripts/audit-site-pages.sh

set -euo pipefail

BASE_URL="${BASE_URL:-https://riobizsols.com}"

declare -a PAGES=(
  "/|Home"
  "/about|About"
  "/contact|Contact"
  "/our-service|Services"
  "/products/rio-eam|RIO EAM product"
  "/asset-maintenance-management-software|ALM landing v1"
  "/asset-maintenance-management-software-v2|ALM landing v2"
  "/blog|Blog"
  "/products/la-law|La Law product"
)

echo "=============================================="
echo " Site pages — mobile performance audit"
echo " Base: ${BASE_URL%/}"
echo "=============================================="
printf "%-28s %6s %8s %8s %8s\n" "Page" "Score" "LCP" "CLS" "TBT"
echo "----------------------------------------------------------------------"

for entry in "${PAGES[@]}"; do
  path="${entry%%|*}"
  label="${entry##*|}"
  url="${BASE_URL%/}${path}"
  lh="/tmp/lh-site-audit-${label// /-}.json"

  npx --yes lighthouse@11.7.1 "$url" \
    --only-categories=performance \
    --form-factor=mobile \
    --chrome-flags="--headless --no-sandbox" \
    --output=json --output-path="$lh" --quiet 2>/dev/null || true

  node -e "
    const r=require('$lh');
    const a=r.audits;
    const score=Math.round(r.categories.performance.score*100);
    const lcp=a['largest-contentful-paint']?.displayValue||'?';
    const cls=a['cumulative-layout-shift']?.displayValue||'?';
    const tbt=a['total-blocking-time']?.displayValue||'?';
    console.log('${label}|'+score+'|'+lcp+'|'+cls+'|'+tbt);
  " 2>/dev/null | while IFS='|' read -r name score lcp cls tbt; do
    printf "%-28s %6s %8s %8s %8s  %s\n" "$name" "$score" "$lcp" "$cls" "$tbt" "$url"
  done
done

echo ""
echo "Done."
