import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

export async function startAlmLanding() {
  const { default: RioALMGenericLanding } = await import('./components/Products/RioALMGenericLanding');
  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <React.StrictMode>
      <HelmetProvider>
        <RioALMGenericLanding />
      </HelmetProvider>
    </React.StrictMode>
  );
}
