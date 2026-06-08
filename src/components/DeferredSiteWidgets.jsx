import { lazy, Suspense, useEffect, useState } from 'react';

const ExitIntentPopup = lazy(() => import('./ExitIntent/ExitIntentPopup'));
const WhatsAppFloat = lazy(() => import('./WhatsAppFloat'));
const Footerbottom = lazy(() => import('./Footerbottom'));

export default function DeferredSiteWidgets() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const reveal = () => setShow(true);

    if (typeof window.requestIdleCallback === 'function') {
      const id = window.requestIdleCallback(reveal, { timeout: 4000 });
      return () => window.cancelIdleCallback(id);
    }

    const timeoutId = window.setTimeout(reveal, 2000);
    return () => window.clearTimeout(timeoutId);
  }, []);

  if (!show) return null;

  return (
    <Suspense fallback={null}>
      <ExitIntentPopup />
      <WhatsAppFloat />
      <Footerbottom />
    </Suspense>
  );
}
