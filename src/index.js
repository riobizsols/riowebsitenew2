import {
  isAlmGenericPath,
  isCmmsLandingPath,
  isEamClassicLandingPath,
} from './utils/almLandingPaths';

const path = window.location.pathname;

let bootstrap;
if (isCmmsLandingPath(path)) {
  bootstrap = import('./landing-entry').then((m) => m.startLanding());
} else if (isEamClassicLandingPath(path)) {
  bootstrap = import('./eam-classic-entry').then((m) => m.startEamClassicLanding());
} else if (isAlmGenericPath(path)) {
  bootstrap = import('./alm-landing-entry').then((m) => m.startAlmLanding());
} else {
  bootstrap = import('./site-entry').then((m) => m.startSite());
}

bootstrap.catch((error) => {
  console.error('Failed to start app:', error);
});
