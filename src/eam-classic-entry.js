import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import './landing-reset.css';
import { normalizePathname } from './utils/almLandingPaths';

export async function startEamClassicLanding() {
  const { default: RioEAMLanding } = await import('./components/Products/RioEAMLanding');
  const pagePath = normalizePathname(window.location.pathname);
  const showWhatsApp = pagePath !== '/uk/eam-maintenance-management-software';
  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <React.StrictMode>
      <HelmetProvider>
        <RioEAMLanding showWhatsApp={showWhatsApp} pagePath={pagePath} />
      </HelmetProvider>
    </React.StrictMode>
  );
}
