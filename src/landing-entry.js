import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { normalizePathname } from './utils/almLandingPaths';

/** Meta Pixel is loaded via GTM — avoid duplicate third-party JS on CMMS landings. */
export async function startLanding() {
  const { default: RioALMLandingV2 } = await import('./components/Products/RioALMLandingV2');
  const pagePath = normalizePathname(window.location.pathname);
  const showWhatsApp = pagePath !== '/uk/cmms-maintenance-management-software';
  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <React.StrictMode>
      <HelmetProvider>
        <RioALMLandingV2 showWhatsApp={showWhatsApp} pagePath={pagePath} />
      </HelmetProvider>
    </React.StrictMode>
  );
}
