import { CONTACT } from "../assets";
import { getApiBaseUrl } from "./api";
import { getOrCreateVisitorId } from "./visitor";
import { trackWhatsAppClick } from "../../../../utils/gtm";

let cachedConfig = null;

export async function getWhatsAppConfig() {
  if (cachedConfig) return cachedConfig;

  try {
    const response = await fetch(`${getApiBaseUrl()}/api/whatsapp/config`);
    if (response.ok) {
      const data = await response.json();
      if (data?.url) {
        cachedConfig = data;
        return data;
      }
    }
  } catch {
    /* fall back to local config */
  }

  cachedConfig = {
    phone: "918884910777",
    url: CONTACT.whatsapp,
  };
  return cachedConfig;
}

export async function notifyWhatsAppClick(source = "landing_page") {
  trackWhatsAppClick(source);

  try {
    await fetch(`${getApiBaseUrl()}/api/whatsapp/click-notify`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        visitorId: getOrCreateVisitorId(),
        source,
        sourcePage:
          typeof window !== "undefined"
            ? `${window.location.origin}${window.location.pathname}${window.location.search}`
            : "",
        referrer: typeof document !== "undefined" ? document.referrer : "",
      }),
    });
  } catch {
    /* non-blocking */
  }
}
