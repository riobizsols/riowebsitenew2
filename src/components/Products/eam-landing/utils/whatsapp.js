import { CONTACT } from "../assets";
import { resolveWhatsAppUrl, trackWhatsAppCtaClick } from "../../../../utils/landingWhatsApp";

let cachedConfig = null;

/** @deprecated Use resolveWhatsAppUrl(CONTACT.whatsapp) */
export async function getWhatsAppConfig() {
  if (cachedConfig) return cachedConfig;
  cachedConfig = await resolveWhatsAppUrl(CONTACT.whatsapp);
  return cachedConfig;
}

/** @deprecated Use trackWhatsAppCtaClick */
export async function notifyWhatsAppClick(source = "landing_page") {
  trackWhatsAppCtaClick(source);
}
