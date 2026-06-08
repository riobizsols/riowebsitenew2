import {
  isAlmGenericPath,
  isCmmsLandingPath,
  isEamClassicLandingPath,
  normalizePathname,
} from './almLandingPaths';

/** Product pages with their own layout — skip main site navbar/footer/widgets. */
const PRODUCT_LANDING_PREFIXES = [
  '/products/rio-eam',
  '/products/rio-alm',
  '/products/medical-equipment-maintenance',
  '/products/aissist',
  '/products/la-law',
];

export function isProductLandingPath(pathname) {
  const path = normalizePathname(pathname);
  return PRODUCT_LANDING_PREFIXES.some(
    (prefix) => path === prefix || path.startsWith(`${prefix}/`)
  );
}

/** Main marketing chrome (nav, footer, popups) is not needed on these routes. */
export function isLiteChromePath(pathname) {
  const path = normalizePathname(pathname);
  return (
    isAlmGenericPath(path) ||
    isCmmsLandingPath(path) ||
    isEamClassicLandingPath(path) ||
    isProductLandingPath(path)
  );
}
