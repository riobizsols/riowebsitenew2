import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

function deferBootstrapJs() {
  const load = () => {
    void import('bootstrap/dist/js/bootstrap.bundle.min.js');
  };
  if (typeof window.requestIdleCallback === 'function') {
    window.requestIdleCallback(load, { timeout: 8000 });
  } else {
    window.setTimeout(load, 3000);
  }
}

function deferBootstrapCss() {
  const load = () => {
    void import('bootstrap/dist/css/bootstrap.min.css');
  };
  if (typeof window.requestAnimationFrame === 'function') {
    window.requestAnimationFrame(load);
  } else {
    window.setTimeout(load, 0);
  }
}

export async function startSite() {
  await import('./index.css');

  const { default: App } = await import('./App');
  const root = ReactDOM.createRoot(document.getElementById('root'));
  const app = (
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );

  root.render(
    process.env.NODE_ENV === 'production' ? app : <React.StrictMode>{app}</React.StrictMode>
  );

  deferBootstrapCss();
  deferBootstrapJs();
}
