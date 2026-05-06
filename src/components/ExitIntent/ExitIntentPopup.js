import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../css/ExitIntent.css';
import { trackCTAClick } from '../../services/visitorTracking';

const DISMISS_KEY = 'exitIntentLastDismissed';
const COOLDOWN_MS = 1000 * 60 * 60 * 6; // 6 hours
const getDismissKey = (variantKey) => `${DISMISS_KEY}_${variantKey}`;

const contentVariants = [
  {
    key: 'rio_alm',
    match: (path) => path.startsWith('/products/rio-alm'),
    badge: 'Rio ALM',
    title: 'Talk to an ALM specialist',
    body: 'We will map your approval flows, SLAs, and integrations into a live demo.',
    bullets: [
      'Process walkthrough tailored to your industry',
      'Integration plan for your stack',
      'Migration and rollout options'
    ],
    primaryLabel: 'Schedule ALM consult',
    primaryHref: '/products/rio-alm/contact'
  },
  {
    key: 'staffing',
    match: (path) => path.includes('/our-service/staffing'),
    badge: 'Staffing',
    title: 'Get a hiring gameplan',
    body: 'Share your roles and we will propose a sourcing and SLA plan.',
    bullets: [
      'Role-by-role sourcing strategy',
      'SLA and coverage plan',
      'Onboarding and compliance steps'
    ],
    primaryLabel: 'Plan my hires',
    primaryHref: '/our-service/staffing'
  },
  {
    key: 'digital_marketing',
    match: (path) => path.includes('/our-service/digital-marketing'),
    badge: 'Digital Marketing',
    title: 'Request a growth teardown',
    body: 'We will review your funnel and hand you quick wins for acquisition and conversion.',
    bullets: [
      'Channel mix and budget guidance',
      'Landing page and CRO quick wins',
      'Measurement plan with KPIs'
    ],
    primaryLabel: 'Review my funnel',
    primaryHref: '/our-service/digital-marketing'
  },
  {
    key: 'app_dev',
    match: (path) => path.includes('/our-service/app-development'),
    badge: 'App Development',
    title: 'Get a build roadmap',
    body: 'We will scope your app, timeline, and architecture options.',
    bullets: [
      'Architecture and tech stack options',
      'Milestones and release plan',
      'Integration and QA approach'
    ],
    primaryLabel: 'Plan my build',
    primaryHref: '/our-service/app-development'
  },
  {
    key: 'web_dev',
    match: (path) => path.includes('/our-service/web-development'),
    badge: 'Web Development',
    title: 'Get a site optimization plan',
    body: 'We will review performance, UX, and SEO to ship fast improvements.',
    bullets: [
      'Performance and Core Web Vitals check',
      'UX and IA recommendations',
      'SEO and structured data quick wins'
    ],
    primaryLabel: 'Optimize my site',
    primaryHref: '/our-service/web-development'
  },
  {
    key: 'odoo',
    match: (path) => path.includes('/our-service/odoo'),
    badge: 'Odoo',
    title: 'Get an Odoo blueprint',
    body: 'We will map your modules, data, and rollout plan.',
    bullets: [
      'Module fit and customization plan',
      'Data migration and training approach',
      'Integration and support options'
    ],
    primaryLabel: 'Plan my Odoo rollout',
    primaryHref: '/our-service/odoo'
  },
];

const defaultContent = {
  key: 'default',
  badge: 'Before you go',
  title: 'Get a 15-minute site audit',
  body: 'Share your goals and we will send quick wins tailored to your funnel.',
  bullets: ['Inbound funnel review', 'Conversion quick wins', 'No cost, no spam'],
  primaryLabel: 'Book a call',
  primaryHref: '/contact'
};

const getContentForPath = (pathname) => {
  return contentVariants.find((variant) => variant.match(pathname)) || defaultContent;
};

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openedRef = useRef(false);
  const mountTimeRef = useRef(Date.now());
  const location = useLocation();
  const content = getContentForPath(location.pathname);
  const debug = Boolean(new URLSearchParams(window.location.search).get('debugExitIntent'));

  // Expose a manual trigger for debugging
  useEffect(() => {
    window.__triggerExitIntentPopup = () => setIsOpen(true);
    return () => {
      delete window.__triggerExitIntentPopup;
    };
  }, []);

  // Reset timers on route change
  useEffect(() => {
    mountTimeRef.current = Date.now();
    openedRef.current = false;
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    openedRef.current = isOpen;
  }, [isOpen]);

  useEffect(() => {
    // Simple timer-based trigger as fallback (more reliable)
    const timeoutMs = 8000; // 8 seconds
    
    if (debug) console.log('exit-intent timer: setting', { timeoutMs, variant: content.key });
    
    const timer = setTimeout(() => {
      if (debug) console.log('exit-intent timer: fired!', { openedRef: openedRef.current });
      
      if (openedRef.current) {
        if (debug) console.log('  -> blocked (already open ref)');
        return;
      }

      const key = getDismissKey(content.key);
      const lastDismissed = Number(localStorage.getItem(key) || 0);
      const elapsed = Date.now() - lastDismissed;
      
      if (debug) console.log('  -> cooldown check', { key, lastDismissed, elapsed, threshold: COOLDOWN_MS });
      
      if (elapsed < COOLDOWN_MS) {
        if (debug) console.log('  -> blocked (cooldown active)');
        return;
      }

      if (debug) console.log('*** exit-intent: timer trigger - OPENING ***');
      setIsOpen(true);
      openedRef.current = true;
      localStorage.setItem(key, String(Date.now()));
    }, timeoutMs);

    return () => {
      if (debug) console.log('exit-intent timer: cleanup (clearing timer)');
      clearTimeout(timer);
    };
  }, [content.key, debug]);

  const close = () => setIsOpen(false);

  const handlePrimary = () => {
    trackCTAClick(`exit_intent_primary_${content.key}`);
    close();
  };

  const handleSecondary = () => {
    trackCTAClick(`exit_intent_dismiss_${content.key}`);
    close();
  };

  if (!isOpen) return null;

  return (
    <div className="exit-intent-backdrop" role="dialog" aria-modal="true" aria-label="Stay in touch">
      <div className="exit-intent-modal">
        <button className="exit-intent-close" onClick={close} aria-label="Close">X</button>
        <div className="exit-intent-badge">{content.badge}</div>
        <h3 className="exit-intent-title">{content.title}</h3>
        <p className="exit-intent-body">{content.body}</p>
        {content.bullets && content.bullets.length > 0 && (
          <ul className="exit-intent-list">
            {content.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        <div className="exit-intent-actions">
          <Link to={content.primaryHref} className="exit-intent-primary" onClick={handlePrimary}>
            {content.primaryLabel}
          </Link>
          <button type="button" className="exit-intent-secondary" onClick={handleSecondary}>
            No thanks
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
