import {
  isAlmGenericPath,
  isCmmsLandingPath,
  isEamClassicLandingPath,
  normalizePathname,
} from './almLandingPaths';

/**
 * Standalone ads/marketing landings only — no main site navbar, footer, or widgets.
 * All /products/* routes (RIO EAM, RIO MEMS, AIssist, La Law, and sub-pages) use full site chrome.
 */
export function isLiteChromePath(pathname) {
  const path = normalizePathname(pathname);
  return (
    isAlmGenericPath(path) ||
    isCmmsLandingPath(path) ||
    isEamClassicLandingPath(path)
  );
}
