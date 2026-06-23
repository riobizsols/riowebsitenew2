import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import ReactPixel from "react-facebook-pixel";
import { getApiBaseUrl } from "../../../utils/urlHelper";
import { trackGenerateLead, trackVirtualPageView, ensureGtmLoaded } from "../../../utils/gtm";
import { trackMouseflowPageView } from "../../../utils/mouseflow";
import {
  buildPricingApiPayload,
  clearLeadInFlight,
  getLandingBaseFromThankYou,
  markLeadInFlight,
  markLeadSent,
  readPendingLead,
  wasLeadSent,
} from "../../../utils/landingThankYou";
import NavbarShell from "../../NavbarShell";
import "./LandingThankYouPage.css";

const Header = lazy(() => import("../../Navbar"));
const Footerbottom = lazy(() => import("../../Footerbottom"));

const SUCCESS_MESSAGE =
  "Thank you for reaching out. Our team has received your request and will contact you shortly to help with a demo or pricing.";
const ERROR_MESSAGE =
  "We could not send your request right now. Please go back and try again.";
const EMPTY_MESSAGE =
  "Thank you for your interest in RIO BizSols. Our team will contact you.";

export default function LandingThankYouPage() {
  const [status, setStatus] = useState("loading");
  const startedRef = useRef(false);
  const basePath = getLandingBaseFromThankYou(window.location.pathname);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    (async () => {
      await ensureGtmLoaded();

      trackVirtualPageView({
        page_title: "Thank You - RIO BizSols",
        page_path: window.location.pathname,
      });
      trackMouseflowPageView({ page_path: window.location.pathname });

      const pending = readPendingLead();
      if (!pending) {
        setStatus("empty");
        return;
      }

      if (wasLeadSent(pending.submissionId)) {
        setStatus("success");
        return;
      }

      if (!markLeadInFlight(pending.submissionId)) {
        return;
      }

      const apiPayload = buildPricingApiPayload(pending);
      if (!apiPayload) {
        clearLeadInFlight(pending.submissionId);
        setStatus("empty");
        return;
      }

      try {
        const response = await fetch(`${getApiBaseUrl()}/api/pricing-request`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(apiPayload),
        });

        if (!response.ok) throw new Error("Lead request failed");

        await ensureGtmLoaded();
        trackGenerateLead(pending.trackingEvent || "landing_form", {
          industry: pending.industry || "",
        });
        ReactPixel.track("Lead");

        markLeadSent(pending.submissionId);
        clearLeadInFlight(pending.submissionId);
        setStatus("success");
      } catch (error) {
        console.error("[thank-you] Lead submit failed:", error);
        clearLeadInFlight(pending.submissionId);
        setStatus("error");
      }
    })();
  }, []);

  return (
    <div className="landing-thank-you-page landing-thank-you-page--site">
      <Helmet>
        <title>Thank You | RIO BizSols</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Suspense fallback={<NavbarShell />}>
        <Header />
      </Suspense>

      <main className="landing-thank-you-main">
        <div className="landing-thank-you-card">
          <h1>Thank You</h1>
          <p className="landing-thank-you-lead">
            Your request has been submitted successfully.
          </p>

          {status === "loading" && (
            <p className="landing-thank-you-status landing-thank-you-status--loading" role="status">
              Sending your request…
            </p>
          )}

          {status === "success" && (
            <p className="landing-thank-you-status landing-thank-you-status--success" role="status">
              {SUCCESS_MESSAGE}
            </p>
          )}

          {status === "error" && (
            <p className="landing-thank-you-status landing-thank-you-status--error" role="alert">
              {ERROR_MESSAGE}
            </p>
          )}

          {status === "empty" && (
            <p className="landing-thank-you-status landing-thank-you-status--success" role="status">
              {EMPTY_MESSAGE}
            </p>
          )}

          <a className="landing-thank-you-back" href={basePath}>
            Back to landing page
          </a>
        </div>
      </main>

      <Suspense fallback={<div className="deferred-footer-placeholder" aria-hidden="true" />}>
        <div className="site-footer-shell">
          <Footerbottom />
        </div>
      </Suspense>
    </div>
  );
}
