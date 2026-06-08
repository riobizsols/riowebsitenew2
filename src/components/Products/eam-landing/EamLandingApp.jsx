import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PainPoints from "./components/PainPoints";
import LazyWhenVisible from "./components/LazyWhenVisible";
import MobileStickyCta from "./components/MobileStickyCta";
import { initCalendlyBookingListener, openCalendlyPopup } from "./utils/calendly";
import { captureUtmParams } from "./utils/utm";

const loadFeatures = () => import("./components/Features");
const loadStructuredOperations = () => import("./components/StructuredOperations");
const loadIndustries = () => import("./components/Industries");
const loadCtaStrip = () => import("./components/CtaStrip");

export default function EamLandingApp({ showWhatsApp = true }) {
  const [utmParams, setUtmParams] = useState(() => captureUtmParams());

  useEffect(() => {
    window.scrollTo(0, 0);
    setUtmParams(captureUtmParams());
    initCalendlyBookingListener();
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

  const ctaStripProps = { onBookDemo, onRequestPricing, showWhatsApp };

  return (
    <div className="rio-cmms-landing rio-v2-landing">
      <Header
        onBookDemo={onBookDemo}
        onRequestPricing={onRequestPricing}
        showWhatsApp={showWhatsApp}
      />
      <main>
        <section className="v2-hero-wrap">
          <Hero
            onBookDemo={onBookDemo}
            onRequestPricing={onRequestPricing}
            showWhatsApp={showWhatsApp}
          />
        </section>
        <PainPoints />
        <LazyWhenVisible loader={loadFeatures} minHeight={420} rootMargin="0px 0px 80px 0px" />
        <LazyWhenVisible loader={loadStructuredOperations} minHeight={360} rootMargin="0px 0px 80px 0px" />
        <LazyWhenVisible loader={loadIndustries} minHeight={440} rootMargin="0px 0px 80px 0px" />
        <LazyWhenVisible loader={loadCtaStrip} minHeight={160} rootMargin="0px 0px 80px 0px" componentProps={ctaStripProps} />
      </main>
      <MobileStickyCta onBookDemo={onBookDemo} showWhatsApp={showWhatsApp} />
    </div>
  );
}
