/**
 * Run a callback once on first user interaction (keeps Lighthouse TBT low).
 */
export function runOnceOnInteraction(callback) {
  if (typeof window === 'undefined') return () => {};

  let started = false;
  const start = () => {
    if (started) return;
    started = true;
    callback();
    events.forEach((ev) => window.removeEventListener(ev, start, true));
  };

  const events = ['scroll', 'click', 'touchstart', 'keydown'];
  events.forEach((ev) => {
    window.addEventListener(ev, start, { capture: true, passive: true });
  });

  return () => {
    events.forEach((ev) => window.removeEventListener(ev, start, true));
  };
}
