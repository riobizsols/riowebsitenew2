import { useEffect } from "react";

/** Full reload so index.js boots the lightweight thank-you entry. */
export default function LandingThankYouReload() {
  useEffect(() => {
    window.location.reload();
  }, []);

  return null;
}
