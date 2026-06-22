import { isAlmGenericPath, normalizePathname } from './almLandingPaths';

export const PENDING_LEAD_KEY = 'rio_landing_pending_lead';
export const SENT_LEAD_PREFIX = 'rio_landing_sent_';
export const IN_FLIGHT_PREFIX = 'rio_landing_inflight_';
export const THANK_YOU_SUFFIX = '/thank-you';

export function isLandingThankYouPath(pathname) {
  const path = normalizePathname(pathname);
  return path.endsWith(THANK_YOU_SUFFIX) && path.length > THANK_YOU_SUFFIX.length;
}

export function getLandingBaseFromThankYou(pathname) {
  const path = normalizePathname(pathname);
  if (!isLandingThankYouPath(path)) return path;
  return path.slice(0, -THANK_YOU_SUFFIX.length) || '/';
}

export function getThankYouPath(landingPathname) {
  const base = normalizePathname(landingPathname);
  if (isLandingThankYouPath(base)) return base;
  return `${base}${THANK_YOU_SUFFIX}`;
}

export function getThankYouTheme(basePath) {
  return isAlmGenericPath(basePath) ? 'alm' : 'v2';
}

export function savePendingLead(data) {
  const submissionId = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  const pending = { ...data, submissionId, savedAt: Date.now() };
  sessionStorage.setItem(PENDING_LEAD_KEY, JSON.stringify(pending));
  return submissionId;
}

export function readPendingLead() {
  try {
    const raw = sessionStorage.getItem(PENDING_LEAD_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function clearPendingLead() {
  sessionStorage.removeItem(PENDING_LEAD_KEY);
}

export function markLeadSent(submissionId) {
  if (submissionId) {
    sessionStorage.setItem(`${SENT_LEAD_PREFIX}${submissionId}`, '1');
  }
  clearPendingLead();
}

export function wasLeadSent(submissionId) {
  return Boolean(submissionId && sessionStorage.getItem(`${SENT_LEAD_PREFIX}${submissionId}`));
}

export function markLeadInFlight(submissionId) {
  if (!submissionId) return false;
  const key = `${IN_FLIGHT_PREFIX}${submissionId}`;
  if (sessionStorage.getItem(key)) return false;
  sessionStorage.setItem(key, '1');
  return true;
}

export function clearLeadInFlight(submissionId) {
  if (submissionId) {
    sessionStorage.removeItem(`${IN_FLIGHT_PREFIX}${submissionId}`);
  }
}

export function buildPricingApiPayload(pending) {
  if (!pending) return null;
  const { submissionId, trackingEvent, savedAt, ...apiPayload } = pending;
  return apiPayload;
}

export function redirectToThankYou(landingPathname) {
  const path =
    typeof landingPathname === 'string' && landingPathname
      ? landingPathname
      : window.location.pathname;
  window.location.assign(getThankYouPath(path));
}
