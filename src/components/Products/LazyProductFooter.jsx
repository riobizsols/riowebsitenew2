import { lazy, Suspense } from 'react';
import LazyWhenVisible from '../LazyWhenVisible';

const CTABanner = lazy(() => import('./CTABanner'));
const FAQAccordion = lazy(() => import('./FAQAccordion'));

export function LazyProductCTA(props) {
  return (
    <LazyWhenVisible
      loader={() => import('./CTABanner')}
      minHeight={120}
      rootMargin="0px 0px 160px 0px"
      componentProps={props}
    />
  );
}

export function LazyProductFAQ({ faqs, minHeight = 200 }) {
  return (
    <LazyWhenVisible
      loader={() => import('./FAQAccordion')}
      minHeight={minHeight}
      rootMargin="0px 0px 120px 0px"
      componentProps={{ faqs }}
    />
  );
}

/** Fallback wrapper when CTABanner is imported directly but deferred. */
export function DeferredCTABanner(props) {
  return (
    <Suspense fallback={<div style={{ minHeight: 120 }} aria-hidden="true" />}>
      <CTABanner {...props} />
    </Suspense>
  );
}

export function DeferredFAQAccordion({ faqs }) {
  return (
    <Suspense fallback={<div style={{ minHeight: 200 }} aria-hidden="true" />}>
      <FAQAccordion faqs={faqs} />
    </Suspense>
  );
}
