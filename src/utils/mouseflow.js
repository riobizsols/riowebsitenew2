/**
 * Mouseflow session replay / heatmaps.
 * Loader is in public/index.html; use this for SPA route changes.
 */

export function trackMouseflowPageView(overrides = {}) {
  if (typeof window === 'undefined') return;

  const pagePath =
    overrides.page_path ??
    `${window.location.pathname}${window.location.search}${window.location.hash}`;

  window._mfq = window._mfq || [];
  window._mfq.push(['newPageView', pagePath]);
}
