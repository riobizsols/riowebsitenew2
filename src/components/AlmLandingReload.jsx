import { useEffect } from 'react';

/** Full reload so index.js boots the lightweight ALM entry (no App.js / router). */
export default function AlmLandingReload() {
  useEffect(() => {
    window.location.reload();
  }, []);

  return null;
}
