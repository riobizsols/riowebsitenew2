import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { isAlmLandingPath } from './utils/almLandingPaths';
import reportWebVitals from './reportwebvitals';

async function loadSiteBootstrap() {
  await import('bootstrap/dist/css/bootstrap.min.css');
  await import('bootstrap/dist/js/bootstrap.bundle.min.js');
}

export async function startSite() {
  await import('./index.css');
  if (!isAlmLandingPath(window.location.pathname)) {
    await loadSiteBootstrap();
  }

  const { default: App } = await import('./App');
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  );

  reportWebVitals();
}
