import { useEffect, useRef, useState } from 'react';

/**
 * Loads a route section only when it nears the viewport (smaller initial JS parse).
 */
export default function LazyWhenVisible({
  loader,
  minHeight = 200,
  rootMargin = '320px 0px',
  componentProps,
}) {
  const ref = useRef(null);
  const [Component, setComponent] = useState(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return undefined;
    const el = ref.current;
    if (!el) return undefined;

    const load = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      loader().then((mod) => setComponent(() => mod.default));
    };

    if (!('IntersectionObserver' in window)) {
      load();
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          load();
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [loader]);

  return (
    <div ref={ref} style={Component ? undefined : { minHeight }}>
      {Component ? <Component {...componentProps} /> : null}
    </div>
  );
}
