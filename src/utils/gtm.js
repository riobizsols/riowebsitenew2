/**
 * Google Tag (gtag.js) — single tag on the page.
 *
 * - Loaded once from public/index.html (GOOGLE_TAG_ID).
 * - Link GA4 + Google Ads accounts as "destinations" in Google tag settings
 *   (Tag Assistant then shows one G- ID with AW- / GA4 beneath it).
 * - Do not add GTM or extra gtag('config', 'AW-…') snippets in the app.
 */

export const GOOGLE_TAG_ID =
  process.env.REACT_APP_GOOGLE_TAG_ID || 'G-TZL33ZKGSQ';

export function initDataLayer() {
  if (typeof window === 'undefined') return [];
  window.dataLayer = window.dataLayer || [];
  return window.dataLayer;
}

function gtag(...args) {
  if (typeof window === 'undefined') return;
  initDataLayer();
  if (typeof window.gtag === 'function') {
    window.gtag(...args);
  } else {
    window.dataLayer.push(args);
  }
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

  gtag('config', GOOGLE_TAG_ID, {
    page_path: pagePath,
    page_title: pageTitle,
    page_location: pageLocation,
  });
}

export function trackGenerateLead(source = 'unknown', extra = {}) {
  gtag('event', 'generate_lead', {
    lead_source: source,
    ...extra,
  });
}

export function trackWhatsAppClick(source = 'unknown') {
  gtag('event', 'whatsapp_click', {
    click_source: source,
  });
}

/** Dev-only: warn if GTM or duplicate Google tags are present. */
export function assertSingleGoogleTag() {
  if (typeof window === 'undefined' || process.env.NODE_ENV === 'production') {
    return;
  }

  const gtmScripts = document.querySelectorAll(
    'script[src*="googletagmanager.com/gtm.js"]'
  );
  if (gtmScripts.length > 0) {
    console.warn(
      '[Google Tag] GTM is still loaded. Remove GTM from index.html to use a single Google tag.'
    );
  }

  const gtagScripts = document.querySelectorAll(
    'script[src*="googletagmanager.com/gtag/js"]'
  );
  const tagIds = [...gtagScripts]
    .map((el) => el.src.match(/[?&]id=([^&]+)/)?.[1])
    .filter(Boolean);

  if (tagIds.length > 1) {
    console.warn(
      '[Google Tag] Multiple gtag.js IDs detected. Use only one Google tag:',
      tagIds
    );
  }

  if (tagIds.length === 1 && tagIds[0] !== GOOGLE_TAG_ID) {
    console.warn(
      `[Google Tag] Loaded ${tagIds[0]} but app expects ${GOOGLE_TAG_ID}.`
    );
  }
}

/** @deprecated use assertSingleGoogleTag */
export const assertSingleGtmContainer = assertSingleGoogleTag;
