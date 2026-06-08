import { useEffect } from 'react';

/** Full reload so index.js boots the lightweight EAM classic entry. */
export default function EamClassicLandingReload() {
  useEffect(() => {
    window.location.reload();
  }, []);

  return null;
}
