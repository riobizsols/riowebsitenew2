import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PainPoints from "./components/PainPoints";
import Features from "./components/Features";
import StructuredOperations from "./components/StructuredOperations";
import Industries from "./components/Industries";
import CtaStrip from "./components/CtaStrip";
import MobileStickyCta from "./components/MobileStickyCta";
import { initCalendlyBookingListener, openCalendlyPopup } from "./utils/calendly";
import { captureUtmParams } from "./utils/utm";

export default function EamLandingApp() {
  const [utmParams, setUtmParams] = useState(() => captureUtmParams());

  useEffect(() => {
    window.scrollTo(0, 0);
    setUtmParams(captureUtmParams());
    initCalendlyBookingListener();

    if (!document.querySelector('script[data-calendly-widget="true"]')) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.setAttribute("data-calendly-widget", "true");
      document.body.appendChild(script);
    }
  }, []);

  const scrollToForm = useCallback(() => {
    document.getElementById("demo-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const onBookDemo = useCallback(() => {
    openCalendlyPopup(utmParams);
  }, [utmParams]);

  const onRequestPricing = useCallback(() => {
    scrollToForm();
  }, [scrollToForm]);

  return (
    <div className="rio-v2-landing">
      <Header />
      <main>
        <section className="v2-hero-wrap">
          <Hero onBookDemo={onBookDemo} onRequestPricing={onRequestPricing} />
        </section>
        <PainPoints />
        <Features />
        <StructuredOperations />
        <Industries />
        <CtaStrip onBookDemo={onBookDemo} onRequestPricing={onRequestPricing} />
      </main>
      <MobileStickyCta onBookDemo={onBookDemo} />
    </div>
  );
}
