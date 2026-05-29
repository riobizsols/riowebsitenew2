import { useEffect } from 'react';

/** Full reload so index.js boots the lightweight landing entry (no App.js / router). */
export default function EamAdsLandingReload() {
  useEffect(() => {
    window.location.reload();
  }, []);

  return null;
}
