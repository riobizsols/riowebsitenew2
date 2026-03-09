/**
 * useWebVitals Hook
 * React hook for consuming Web Vitals data in components
 * Automatically initializes monitoring on first use
 */

import { useEffect, useState } from 'react';
import webVitalsMonitor from '../services/webVitalsMonitor';

export function useWebVitals() {
  const [vitals, setVitals] = useState({});
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Initialize monitoring on first use
    if (!webVitalsMonitor.initialized) {
      webVitalsMonitor.init();
    }
    setIsReady(true);

    // Poll for updates
    const interval = setInterval(() => {
      setVitals(webVitalsMonitor.getVitals());
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return {
    vitals,
    isReady,
    getSummary: () => webVitalsMonitor.getSummary(),
    isPerformanceGood: () => webVitalsMonitor.isPerformanceGood(),
    getVitals: () => webVitalsMonitor.getVitals()
  };
}

export default useWebVitals;
