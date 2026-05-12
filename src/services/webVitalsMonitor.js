/**
 * Web Vitals Monitoring Service
 * Tracks Core Web Vitals: LCP, FID, CLS
 * Sends data to analytics or monitoring service
 */

// Web Vitals thresholds (green = good, orange = needs improvement, red = poor)
export const WEB_VITALS_THRESHOLDS = {
  // Largest Contentful Paint - when main content is visible
  LCP: {
    good: 2500,      // < 2.5s
    poor: 4000       // > 4s
  },
  // First Input Delay - responsiveness to user input
  FID: {
    good: 100,       // < 100ms
    poor: 300        // > 300ms
  },
  // Cumulative Layout Shift - visual stability
  CLS: {
    good: 0.1,       // < 0.1
    poor: 0.25       // > 0.25
  },
  // First Contentful Paint - first content appears
  FCP: {
    good: 1800,      // < 1.8s
    poor: 3000       // > 3s
  },
  // Time to First Byte - server response time
  TTFB: {
    good: 600,       // < 600ms
    poor: 1800       // > 1.8s
  }
};

class WebVitalsMonitor {
  constructor() {
    this.vitals = {};
    this.observers = {};
    this.initialized = false;
  }

  /**
   * Initialize Web Vitals monitoring
   * Call this once on app startup
   */
  init() {
    if (this.initialized) return;

    this.measureLCP();
    this.measureFID();
    this.measureCLS();
    this.measureFCP();
    this.measureTTFB();

    this.initialized = true;
    console.log('✓ Web Vitals monitoring initialized');
  }

  /**
   * Largest Contentful Paint (LCP)
   * Measures when the largest content element becomes visible
   * Target: < 2.5s
   */
  measureLCP() {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          if (!entries || entries.length === 0) return;
          
          const lastEntry = entries[entries.length - 1];
          const value = lastEntry.renderTime || lastEntry.loadTime;
          if (value === undefined) return;
          
          this.vitals.LCP = {
            value: value,
            rating: this.getRating('LCP', value),
            element: lastEntry.element ? lastEntry.element.tagName : 'unknown',
            timestamp: new Date().toISOString()
          };

          this.logVital('LCP', this.vitals.LCP);
          this.sendToAnalytics('LCP', this.vitals.LCP);
        });

        observer.observe({ type: 'largest-contentful-paint', buffered: true });
        this.observers.LCP = observer;
      } catch (e) {
        console.warn('LCP measurement not supported:', e);
      }
    }
  }

  /**
   * First Input Delay (FID)
   * Measures delay between user input and browser response
   * Target: < 100ms
   */
  measureFID() {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          if (!entries || entries.length === 0) return;
          
          const firstEntry = entries[0];
          if (!firstEntry || firstEntry.processingDuration === undefined) return;

          this.vitals.FID = {
            value: firstEntry.processingDuration,
            rating: this.getRating('FID', firstEntry.processingDuration),
            name: firstEntry.name,
            timestamp: new Date().toISOString()
          };

          this.logVital('FID', this.vitals.FID);
          this.sendToAnalytics('FID', this.vitals.FID);
        });

        observer.observe({ type: 'first-input', buffered: true });
        this.observers.FID = observer;
      } catch (e) {
        console.warn('FID measurement not supported:', e);
      }
    }
  }

  /**
   * Cumulative Layout Shift (CLS)
   * Measures unexpected layout shifts during page load
   * Target: < 0.1
   */
  measureCLS() {
    if ('PerformanceObserver' in window) {
      try {
        let clsValue = 0;
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          if (!entries || entries.length === 0) return;
          
          for (const entry of entries) {
            if (!entry.hadRecentInput) {
              clsValue += entry.value || 0;
            }
          }

          this.vitals.CLS = {
            value: clsValue,
            rating: this.getRating('CLS', clsValue),
            timestamp: new Date().toISOString()
          };

          this.logVital('CLS', this.vitals.CLS);
          this.sendToAnalytics('CLS', this.vitals.CLS);
        });

        observer.observe({ type: 'layout-shift', buffered: true });
        this.observers.CLS = observer;
      } catch (e) {
        console.warn('CLS measurement not supported:', e);
      }
    }
  }

  /**
   * First Contentful Paint (FCP)
   * Measures when first content element appears
   * Target: < 1.8s
   */
  measureFCP() {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          if (!entries || entries.length === 0) return;
          
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');

          if (fcpEntry && fcpEntry.startTime !== undefined) {
            this.vitals.FCP = {
              value: fcpEntry.startTime,
              rating: this.getRating('FCP', fcpEntry.startTime),
              timestamp: new Date().toISOString()
            };

            this.logVital('FCP', this.vitals.FCP);
            this.sendToAnalytics('FCP', this.vitals.FCP);
          }
        });

        observer.observe({ type: 'paint', buffered: true });
        this.observers.FCP = observer;
      } catch (e) {
        console.warn('FCP measurement not supported:', e);
      }
    }
  }

  /**
   * Time to First Byte (TTFB)
   * Measures server response time
   * Target: < 600ms
   */
  measureTTFB() {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          if (!entries || entries.length === 0) return;
          
          const navigationEntry = entries.find(entry => entry.name === 'navigation');

          if (navigationEntry && navigationEntry.responseStart !== undefined && navigationEntry.fetchStart !== undefined) {
            const ttfb = navigationEntry.responseStart - navigationEntry.fetchStart;

            this.vitals.TTFB = {
              value: ttfb,
              rating: this.getRating('TTFB', ttfb),
              timestamp: new Date().toISOString()
            };

            this.logVital('TTFB', this.vitals.TTFB);
            this.sendToAnalytics('TTFB', this.vitals.TTFB);
          }
        });

        observer.observe({ type: 'navigation', buffered: true });
        this.observers.TTFB = observer;
      } catch (e) {
        console.warn('TTFB measurement not supported:', e);
      }
    }
  }

  /**
   * Get performance rating (good/needs improvement/poor)
   * @param {string} vital - Vital name (LCP, FID, CLS, etc)
   * @param {number} value - Measured value
   * @returns {string} - Rating (good, warning, poor)
   */
  getRating(vital, value) {
    const thresholds = WEB_VITALS_THRESHOLDS[vital];
    if (!thresholds) return 'unknown';

    if (value <= thresholds.good) return 'good';
    if (value <= thresholds.poor) return 'warning';
    return 'poor';
  }

  /**
   * Log vital to console in development
   */
  logVital(name, data) {
    if (process.env.NODE_ENV === 'development') {
      // Safety check for undefined data or value
      if (!data || data.value === undefined) {
        console.warn(`⚠️ ${name}: Data unavailable (value is undefined)`);
        return;
      }

      const emoji = {
        good: '✅',
        warning: '⚠️',
        poor: '❌',
        unknown: '❓'
      }[data.rating] || '📊';

      console.log(`${emoji} ${name}: ${data.value.toFixed(2)} (${data.rating})`);
    }
  }

  /**
   * Send vital data to analytics service
   * Implement this to send to your monitoring backend
   */
  sendToAnalytics(name, data) {
    // Safety check for undefined data
    if (!data || data.value === undefined) {
      console.warn(`⚠️ Analytics: Cannot send ${name} - value is undefined`);
      return;
    }

    // Send to custom backend
    const analytics = window.__analytics || {};
    if (analytics.trackEvent) {
      analytics.trackEvent(`web_vital_${name}`, {
        value: data.value,
        rating: data.rating
      });
    }
  }

  /**
   * Get all measured vitals
   */
  getVitals() {
    return { ...this.vitals };
  }

  /**
   * Get summary of performance
   */
  getSummary() {
    const summary = {};
    Object.keys(this.vitals).forEach(vital => {
      summary[vital] = {
        value: this.vitals[vital].value,
        rating: this.vitals[vital].rating,
        target: WEB_VITALS_THRESHOLDS[vital].good
      };
    });
    return summary;
  }

  /**
   * Check if all vitals are in the good range
   */
  isPerformanceGood() {
    return Object.values(this.vitals).every(vital => vital.rating === 'good');
  }

  /**
   * Cleanup observers
   */
  destroy() {
    Object.values(this.observers).forEach(observer => {
      if (observer && observer.disconnect) {
        observer.disconnect();
      }
    });
    this.initialized = false;
  }
}

// Export singleton instance
export const webVitalsMonitor = new WebVitalsMonitor();

export default webVitalsMonitor;
