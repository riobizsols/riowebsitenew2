/** Paths that use standalone landings (no main site chrome / bootstrap). */

export const ALM_GENERIC_PATHS = new Set([
  '/uk/asset-maintenance-management-software',
  '/asset-maintenance-management-software',
]);

export const CMMS_LANDING_PATHS = new Set([
  '/asset-maintenance-management-software-v2',
  '/cmms-maintenance-management-software',
  '/uk/cmms-maintenance-management-software',
]);

export const EAM_CLASSIC_LANDING_PATHS = new Set([
  '/eam-maintenance-management-software',
  '/uk/eam-maintenance-management-software',
]);

/** @deprecated use CMMS_LANDING_PATHS */
export const ALM_LANDING_PATHS = new Set([
  ...ALM_GENERIC_PATHS,
  ...CMMS_LANDING_PATHS,
  ...EAM_CLASSIC_LANDING_PATHS,
]);

export const EAM_ADS_LANDING_PATH = '/cmms-maintenance-management-software';

export function normalizePathname(pathname) {
  return (pathname || '/').replace(/\/+$/, '') || '/';
}

export function isAlmGenericPath(pathname) {
  return ALM_GENERIC_PATHS.has(normalizePathname(pathname));
}

export function isCmmsLandingPath(pathname) {
  return CMMS_LANDING_PATHS.has(normalizePathname(pathname));
}

export function isEamClassicLandingPath(pathname) {
  return EAM_CLASSIC_LANDING_PATHS.has(normalizePathname(pathname));
}

/** Any standalone ALM/EAM/CMMS landing (lite chrome, no site bootstrap). */
export function isAlmLandingPath(pathname) {
  const path = normalizePathname(pathname);
  return (
    isAlmGenericPath(path) || isCmmsLandingPath(path) || isEamClassicLandingPath(path)
  );
}

/** CMMS ads landing — lightweight entry in index.js */
export function isEamAdsLandingPath(pathname) {
  return isCmmsLandingPath(pathname);
}
