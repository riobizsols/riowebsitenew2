import { getApiBaseUrl } from './urlHelper';
import { trackWhatsAppClick } from './gtm';

const CLICK_DEDUP_MS = 120_000;
const configCache = new Map();

function parseWaMeUrl(url) {
  try {
    const parsed = new URL(url);
    return {
      phone: parsed.pathname.replace(/\D/g, ''),
      text: parsed.searchParams.get('text') || '',
    };
  } catch {
    return { phone: '', text: '' };
  }
}

function buildWaMeUrl(phone, text) {
  const digits = String(phone || '').replace(/\D/g, '');
  if (!digits) return '';
  if (!text) return `https://wa.me/${digits}`;
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}

/**
 * Resolve click-to-chat URL: server phone (if any) + page-specific prefill from fallbackUrl.
 */
export async function resolveWhatsAppUrl(fallbackUrl) {
  const fallback = parseWaMeUrl(fallbackUrl);
  const cacheKey = fallbackUrl;
  if (configCache.has(cacheKey)) return configCache.get(cacheKey);

  const resolved = {
    phone: fallback.phone || '918884910777',
    url: fallbackUrl,
  };

  try {
    const response = await fetch(`${getApiBaseUrl()}/api/whatsapp/config`);
    if (response.ok) {
      const data = await response.json();
      const phone = data?.phone || resolved.phone;
      const text = fallback.text || parseWaMeUrl(data?.url || '').text;
      resolved.phone = phone;
      resolved.url = buildWaMeUrl(phone, text) || fallbackUrl;
    }
  } catch {
    /* use fallback */
  }

  configCache.set(cacheKey, resolved);
  return resolved;
}

function getVisitorId() {
  if (typeof window === 'undefined') return 'unknown';
  try {
    const key = 'rio_website_chat_visitor_id';
    let id = localStorage.getItem(key);
    if (!id) {
      id =
        typeof crypto !== 'undefined' && crypto.randomUUID
          ? crypto.randomUUID()
          : `v_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
      localStorage.setItem(key, id);
    }
    return id;
  } catch {
    return 'unknown';
  }
}

function shouldSendClickNotify(visitorId) {
  if (typeof window === 'undefined') return false;
  try {
    const key = `rio_wa_click_${visitorId}`;
    const last = Number(sessionStorage.getItem(key) || 0);
    if (Date.now() - last < CLICK_DEDUP_MS) return false;
    sessionStorage.setItem(key, String(Date.now()));
    return true;
  } catch {
    return true;
  }
}

/**
 * Track WhatsApp CTA in GA4/GTM only. Does not block navigation.
 * Optional server notify uses sendBeacon (no email unless enabled on server).
 */
export function trackWhatsAppCtaClick(source = 'landing_page') {
  trackWhatsAppClick(source);

  const visitorId = getVisitorId();
  if (!shouldSendClickNotify(visitorId)) return;

  const payload = JSON.stringify({
    visitorId,
    source,
    sourcePage:
      typeof window !== 'undefined'
        ? `${window.location.origin}${window.location.pathname}${window.location.search}`
        : '',
    referrer: typeof document !== 'undefined' ? document.referrer : '',
  });

  const url = `${getApiBaseUrl()}/api/whatsapp/click-notify`;
  if (typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function') {
    const blob = new Blob([payload], { type: 'application/json' });
    navigator.sendBeacon(url, blob);
    return;
  }

  void fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: payload,
    keepalive: true,
  });
}
