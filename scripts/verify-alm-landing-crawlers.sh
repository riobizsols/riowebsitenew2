#!/usr/bin/env bash
# Verify ALM v2 landing page returns HTTP 200 for ads/search crawlers.
# Usage: ./scripts/verify-alm-landing-crawlers.sh
#        BASE_URL=https://www.riobizsols.com ./scripts/verify-alm-landing-crawlers.sh

set -euo pipefail

BASE_URL="${BASE_URL:-https://riobizsols.com}"
PATH_SLUG="/asset-maintenance-management-software-v2"
URL="${BASE_URL%/}${PATH_SLUG}"

PASS=0
FAIL=0

# LiteSpeed/curl sometimes hit "Error in the HTTP2 framing layer" (curl 16); retry HTTP/1.1.
fetch_http_code() {
  local url="$1"
  local ua="$2"
  local code
  code=$(curl -sS -o /dev/null -w "%{http_code}" -A "$ua" --max-time 25 "$url" 2>/dev/null) || code="000"
  if [ "$code" = "000" ] || [ -z "$code" ]; then
    code=$(curl -sS --http1.1 -o /dev/null -w "%{http_code}" -A "$ua" --max-time 25 "$url" 2>/dev/null) || code="000"
  fi
  echo "$code"
}

fetch_http_code_redirect() {
  local url="$1"
  local ua="$2"
  local final
  final=$(curl -sS -o /dev/null -w "%{http_code}" -L -A "$ua" --max-time 25 "$url" 2>/dev/null) || final="000"
  if [ "$final" = "000" ]; then
    final=$(curl -sS --http1.1 -o /dev/null -w "%{http_code}" -L -A "$ua" --max-time 25 "$url" 2>/dev/null) || final="000"
  fi
  echo "$final"
}

check() {
  local name="$1"
  local url="$2"
  local ua="$3"
  local expect="${4:-200}"

  local code
  code=$(fetch_http_code "$url" "$ua")

  if [ "$code" = "$expect" ]; then
    echo "PASS  $name  HTTP $code"
    PASS=$((PASS + 1))
  else
    echo "FAIL  $name  HTTP $code (expected $expect)"
    FAIL=$((FAIL + 1))
  fi
}

echo "=== ALM landing crawler checks ==="
echo "URL: $URL"
echo ""

check "Default (curl)" "$URL" "curl/8.0"
check "Googlebot" "$URL" "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"
check "AdsBot-Google" "$URL" "Mozilla/5.0 (compatible; AdsBot-Google; +http://www.google.com/adsbot.html)"
check "AdsBot-Google-Mobile" "$URL" "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Mobile Safari/537.36 (compatible; AdsBot-Google-Mobile; +http://www.google.com/mobile/adsbot.html)"
check "Bingbot" "$URL" "Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)"
check "PageSpeed Insights" "$URL" "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Google Page Speed Insights"

echo ""
echo "=== Redirect chain (should end at HTTPS 200) ==="
for start in \
  "http://riobizsols.com${PATH_SLUG}" \
  "http://www.riobizsols.com${PATH_SLUG}" \
  "https://www.riobizsols.com${PATH_SLUG}"; do
  final=$(fetch_http_code_redirect "$start" "AdsBot-Google")
  if [ "$final" = "200" ]; then
    echo "PASS  $start -> final HTTP 200"
    PASS=$((PASS + 1))
  else
    echo "FAIL  $start -> final HTTP $final"
    FAIL=$((FAIL + 1))
  fi
done

echo ""
echo "=== Prerendered HTML (title + no Forbidden) ==="
body=$(curl -sS -A "AdsBot-Google" --max-time 25 "$URL" 2>/dev/null) || body=""
if [ -z "$body" ]; then
  body=$(curl -sS --http1.1 -A "AdsBot-Google" --max-time 25 "$URL" 2>/dev/null) || body=""
fi
if echo "$body" | grep -qiE '<title>.*(RIO ALM|RIO EAM)'; then
  echo "PASS  HTML contains expected page title"
  PASS=$((PASS + 1))
else
  echo "FAIL  HTML missing expected <title>"
  FAIL=$((FAIL + 1))
fi
if echo "$body" | grep -qi '403 Forbidden'; then
  echo "FAIL  HTML body contains '403 Forbidden'"
  FAIL=$((FAIL + 1))
else
  echo "PASS  HTML body does not contain '403 Forbidden'"
  PASS=$((PASS + 1))
fi

echo ""
echo "=== Summary: $PASS passed, $FAIL failed ==="
if [ "$FAIL" -gt 0 ]; then
  echo "If failures persist, check cPanel/LiteSpeed: ModSecurity, Bot Fight, country block, IP deny list."
  echo "Ensure latest Backend/server.js (alm prerender routes) is deployed and Node/PM2 restarted."
  exit 1
fi
exit 0
