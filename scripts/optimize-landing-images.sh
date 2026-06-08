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
echo "Done."
