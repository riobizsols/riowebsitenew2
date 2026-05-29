import { isEamAdsLandingPath } from './utils/almLandingPaths';

const bootstrap = isEamAdsLandingPath(window.location.pathname)
  ? import('./landing-entry').then((m) => m.startLanding())
  : import('./site-entry').then((m) => m.startSite());

bootstrap.catch((error) => {
  console.error('Failed to start app:', error);
});
