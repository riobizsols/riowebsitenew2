import { CONTACT } from "../assets";
import { getApiBaseUrl } from "./api";
import { UTM_KEYS } from "./utm";
import { getOrCreateVisitorId } from "./visitor";
import { trackGenerateLead } from "../../../../utils/gtm";

let bookingListenerAttached = false;
let bookingHandled = false;
let calendlyAssetsPromise = null;

function ensureCalendlyAssets() {
  if (calendlyAssetsPromise) return calendlyAssetsPromise;

  calendlyAssetsPromise = new Promise((resolve) => {
    if (!document.querySelector('link[data-calendly-css="true"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      link.setAttribute('data-calendly-css', 'true');
      document.head.appendChild(link);
    }

    const existingScript = document.querySelector('script[data-calendly-widget="true"]');
    if (existingScript) {
      if (window.Calendly?.initPopupWidget) {
        resolve(true);
        return;
      }
      existingScript.addEventListener('load', () => resolve(true), { once: true });
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.setAttribute('data-calendly-widget', 'true');
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });

  return calendlyAssetsPromise;
}

function waitForCalendly(maxMs = 5000) {
  return new Promise((resolve) => {
    if (window.Calendly?.initPopupWidget) {
      resolve(true);
      return;
    }

    const started = Date.now();
    const timer = window.setInterval(() => {
      if (window.Calendly?.initPopupWidget) {
        window.clearInterval(timer);
        resolve(true);
        return;
      }
      if (Date.now() - started >= maxMs) {
        window.clearInterval(timer);
        resolve(false);
      }
    }, 100);
  });
}

function buildCalendlyUrl(baseUrl, utmParams = {}) {
  try {
    const url = new URL(baseUrl);
    UTM_KEYS.forEach((key) => {
      if (utmParams[key]) url.searchParams.set(key, utmParams[key]);
    });
    return url.toString();
  } catch {
    return baseUrl;
  }
}

function isCalendlyEventScheduled(event) {
  const origin = String(event?.origin || "");
  if (!origin.includes("calendly.com")) return false;
  const name = event?.data?.event;
  return name === "calendly.event_scheduled";
}

async function notifyDemoBooking({ calendlyEventPayload }) {
  const sourcePage =
    typeof window !== "undefined"
      ? `${window.location.origin}${window.location.pathname}${window.location.search}${window.location.hash}`
      : "unknown";

  try {
    await fetch(`${getApiBaseUrl()}/api/chatbot/demo-booking-notify`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        visitorId: getOrCreateVisitorId(),
        selectedService: "Demo / Consultation (Calendly)",
        selectedSlot: "Calendly confirmed and scheduled",
        sourcePage,
        bookingStage: "confirmed",
        calendlyUrl: CONTACT.calendly,
        calendlyEventPayload,
      }),
    });
  } catch (error) {
    console.warn("Demo booking notify failed:", error);
  }

  trackGenerateLead("calendly_demo_booking", { source_page: sourcePage });
}

export function initCalendlyBookingListener() {
  if (bookingListenerAttached || typeof window === "undefined") return;
  bookingListenerAttached = true;

  window.addEventListener("message", (event) => {
    if (!isCalendlyEventScheduled(event)) return;
    if (bookingHandled) return;
    bookingHandled = true;

    void notifyDemoBooking({
      calendlyEventPayload: event?.data?.payload || null,
    });

    window.setTimeout(() => {
      bookingHandled = false;
    }, 5000);
  });
}

export async function openCalendlyPopup(utmParams = {}, url = CONTACT.calendly) {
  bookingHandled = false;
  const urlWithUtm = buildCalendlyUrl(url, utmParams);
  await ensureCalendlyAssets();
  const ready = await waitForCalendly();

  if (ready) {
    window.Calendly.initPopupWidget({ url: urlWithUtm });
    return;
  }

  window.open(urlWithUtm, "_blank", "noopener,noreferrer");
}
