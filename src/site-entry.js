import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import reportWebVitals from './reportwebvitals';

function deferBootstrapJs() {
  const load = () => {
    void import('bootstrap/dist/js/bootstrap.bundle.min.js');
  };
  if (document.readyState === 'complete') {
    load();
  } else {
    window.addEventListener('load', load, { once: true });
  }
}

export async function startSite() {
  await import('./index.css');
  await import('bootstrap/dist/css/bootstrap.min.css');

  const { default: App } = await import('./App');
  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  );

  deferBootstrapJs();
  reportWebVitals();
}
