import { lazy, Suspense, useEffect, useState } from 'react';

const ExitIntentPopup = lazy(() => import('./ExitIntent/ExitIntentPopup'));
const WhatsAppFloat = lazy(() => import('./WhatsAppFloat'));
const Footerbottom = lazy(() => import('./Footerbottom'));

function FooterPlaceholder() {
  return <div className="deferred-footer-placeholder" aria-hidden="true" />;
}

function DeferredExtras() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const reveal = () => setShow(true);
    if (typeof window.requestIdleCallback === 'function') {
      const id = window.requestIdleCallback(reveal, { timeout: 5000 });
      return () => window.cancelIdleCallback(id);
    }
    const timeoutId = window.setTimeout(reveal, 2500);
    return () => window.clearTimeout(timeoutId);
  }, []);

  if (!show) return null;

  return (
    <Suspense fallback={null}>
      <ExitIntentPopup />
      <WhatsAppFloat />
    </Suspense>
  );
}

/** Footer loads immediately; popups deferred to reduce CLS and main-thread work. */
export default function DeferredSiteWidgets() {
  return (
    <div className="site-footer-shell">
      <Suspense fallback={<FooterPlaceholder />}>
        <Footerbottom />
      </Suspense>
      <DeferredExtras />
    </div>
  );
}
