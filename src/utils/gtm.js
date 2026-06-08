/**
 * GTM dataLayer helpers.
 *
 * - One GTM container is loaded from public/index.html
 * - GA4 + Google Ads tags are configured inside GTM
 * - App code pushes events to dataLayer only
 */

export const GTM_CONTAINER_ID =
  process.env.REACT_APP_GTM_ID || 'GTM-KNTZ9KWB';

export function initDataLayer() {
  if (typeof window === 'undefined') return [];
  window.dataLayer = window.dataLayer || [];
  return window.dataLayer;
}

export function pushToDataLayer(payload) {
  if (typeof window === 'undefined') return;
  initDataLayer();
  window.dataLayer.push(payload);
}

export function trackVirtualPageView(overrides = {}) {
  if (typeof window === 'undefined') return;

  const pagePath =
    overrides.page_path ??
    `${window.location.pathname}${window.location.search}${window.location.hash}`;
  const pageTitle = overrides.page_title ?? document.title;
  const pageLocation = overrides.page_location ?? window.location.href;

  pushToDataLayer({
    event: 'virtual_page_view',
    page_path: pagePath,
    page_title: pageTitle,
    page_location: pageLocation,
  });
}

export function trackGenerateLead(source = 'unknown', extra = {}) {
  pushToDataLayer({
    event: 'generate_lead',
    lead_source: source,
    ...extra,
  });
}

export function trackWhatsAppClick(source = 'unknown') {
  pushToDataLayer({
    event: 'whatsapp_click',
    click_source: source,
  });
}

/** Dev-only: warn if gtag or duplicate GTM containers are present. */
export function assertSingleGtmContainer() {
  if (typeof window === 'undefined' || process.env.NODE_ENV === 'production') {
    return;
  }

  const gtmScripts = document.querySelectorAll(
    'script[src*="googletagmanager.com/gtm.js"]'
  );
  const containerIds = [...gtmScripts]
    .map((el) => el.src.match(/[?&]id=([^&]+)/)?.[1])
    .filter(Boolean);

  if (containerIds.length > 1) {
    console.warn(
      '[GTM] Multiple GTM containers detected. Use only one:',
      containerIds
    );
  }

  if (containerIds.length === 1 && containerIds[0] !== GTM_CONTAINER_ID) {
    console.warn(
      `[GTM] Loaded ${containerIds[0]} but app expects ${GTM_CONTAINER_ID}.`
    );
  }

  const gtagScripts = document.querySelectorAll(
    'script[src*="googletagmanager.com/gtag/js"]'
  );
  if (gtagScripts.length > 0) {
    console.warn(
      '[GTM] gtag.js detected. Keep GTM-only setup to avoid duplicate tracking.'
    );
  }
}

/** @deprecated kept for compatibility with older imports */
export const assertSingleGoogleTag = assertSingleGtmContainer;
