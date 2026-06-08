import { isAlmLandingPath, isEamAdsLandingPath } from './utils/almLandingPaths';

const path = window.location.pathname;

let bootstrap;
if (isEamAdsLandingPath(path)) {
  bootstrap = import('./landing-entry').then((m) => m.startLanding());
} else if (isAlmLandingPath(path)) {
  bootstrap = import('./alm-landing-entry').then((m) => m.startAlmLanding());
} else {
  bootstrap = import('./site-entry').then((m) => m.startSite());
}

bootstrap.catch((error) => {
  console.error('Failed to start app:', error);
});
