import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

const PIXEL_ID = '2112408199250636';
let pixelInitialized = false;

function initDeferredMarketingPixel() {
  if (pixelInitialized) return;
  pixelInitialized = true;

  const run = async () => {
    try {
      const ReactPixel = (await import('react-facebook-pixel')).default;
      ReactPixel.init(PIXEL_ID, { autoConfig: true, debug: false });
      ReactPixel.pageView();
    } catch (error) {
      console.warn('Deferred Meta Pixel init failed:', error);
    }
  };

  if (typeof window.requestIdleCallback === 'function') {
    window.requestIdleCallback(run, { timeout: 5000 });
  } else {
    window.setTimeout(run, 3000);
  }
}

export async function startLanding() {
  const { default: RioALMLandingV2 } = await import('./components/Products/RioALMLandingV2');
  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <React.StrictMode>
      <HelmetProvider>
        <RioALMLandingV2 />
      </HelmetProvider>
    </React.StrictMode>
  );

  initDeferredMarketingPixel();
}
