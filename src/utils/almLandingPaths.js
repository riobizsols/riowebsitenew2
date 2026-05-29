/** Paths that use standalone ALM/EAM landings (no main site chrome / bootstrap). */
export const ALM_LANDING_PATHS = new Set([
  '/uk/asset-maintenance-management-software',
  '/asset-maintenance-management-software',
  '/asset-maintenance-management-software-v2',
]);

export const EAM_ADS_LANDING_PATH = '/asset-maintenance-management-software-v2';

export function normalizePathname(pathname) {
  return (pathname || '/').replace(/\/+$/, '') || '/';
}

export function isAlmLandingPath(pathname) {
  return ALM_LANDING_PATHS.has(normalizePathname(pathname));
}

export function isEamAdsLandingPath(pathname) {
  return normalizePathname(pathname) === EAM_ADS_LANDING_PATH;
}
