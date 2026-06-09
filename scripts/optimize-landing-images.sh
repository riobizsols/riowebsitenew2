#!/usr/bin/env bash
# Smaller variants for the EAM v2 ads landing (run before npm run build).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PUBLIC="$ROOT/public"

if ! command -v sips >/dev/null 2>&1; then
  echo "sips not found (macOS); skipping image optimization."
  exit 0
fi

optimize() {
  local src="$1" max="$2" dest="$3"
  if [ ! -f "$src" ]; then return 0; fi
  cp "$src" "$dest"
  sips -Z "$max" "$dest" >/dev/null
  echo "  $dest"
}

echo "Optimizing landing images..."
optimize "$PUBLIC/alm-dashboard-user.png" 900 "$PUBLIC/alm-dashboard-user-900.png"
optimize "$PUBLIC/rio-alm-asset-management-mobile.png" 640 "$PUBLIC/rio-alm-asset-management-mobile-640.png"
optimize "$PUBLIC/manufacturing-industrial-rio-alm.png" 600 "$PUBLIC/manufacturing-industrial-rio-alm-600.png"

ASSETS="$ROOT/src/assets/images"
PRODUCTS="$PUBLIC/products"
mkdir -p "$PRODUCTS"

echo "Optimizing product page images..."
if [ -f "$ASSETS/rio-alm-dashboard f.png" ]; then
  for size in 480 720 960; do
    optimize "$ASSETS/rio-alm-dashboard f.png" "$size" "$PRODUCTS/rio-eam-dashboard-${size}.png"
  done
fi
if [ -f "$ASSETS/enterprise-security.png" ]; then
  optimize "$ASSETS/enterprise-security.png" 400 "$PRODUCTS/enterprise-security-400.png"
fi
if [ -f "$ASSETS/login_background.png" ]; then
  for size in 400 560; do
    optimize "$ASSETS/login_background.png" "$size" "$PRODUCTS/la-law-hero-${size}.png"
  done
fi
if [ -f "$ASSETS/mems compliance.png" ]; then
  optimize "$ASSETS/mems compliance.png" 400 "$PRODUCTS/mems-compliance-400.png"
fi
if [ -f "$ASSETS/alm deployment security icon.png" ]; then
  optimize "$ASSETS/alm deployment security icon.png" 200 "$PRODUCTS/alm-deployment-security-200.png"
fi

if [ -f "$ASSETS/US.jpg" ]; then
  cp "$ASSETS/US.jpg" "$PUBLIC/footer-us.jpg"
  sips -Z 200 "$PUBLIC/footer-us.jpg" >/dev/null
  echo "  $PUBLIC/footer-us.jpg"
fi
if [ -f "$ASSETS/India.jpg" ]; then
  cp "$ASSETS/India.jpg" "$PUBLIC/footer-india.jpg"
  sips -Z 200 "$PUBLIC/footer-india.jpg" >/dev/null
  echo "  $PUBLIC/footer-india.jpg"
fi

echo "Done."
