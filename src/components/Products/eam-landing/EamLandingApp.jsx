import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LazyWhenVisible from "./components/LazyWhenVisible";
import MobileStickyCta from "./components/MobileStickyCta";
import { initCalendlyBookingListener, openCalendlyPopup } from "./utils/calendly";
import { captureUtmParams } from "./utils/utm";

const loadPainPoints = () => import("./components/PainPoints");
const loadFeatures = () => import("./components/Features");
const loadWhyRioAlm = () => import("./components/WhyRioAlm");
const loadIndustries = () => import("./components/Industries");
const loadCtaStrip = () => import("./components/CtaStrip");
const loadLeadForm = () => import("./components/LeadForm");
const loadFooter = () => import("./components/Footer");

export default function App() {
  const pricingRef = useRef(null);
  const [utmParams, setUtmParams] = useState(() => captureUtmParams());

  useEffect(() => {
    window.scrollTo(0, 0);
    setUtmParams(captureUtmParams());
    initCalendlyBookingListener();
  }, []);

  const scrollToPricing = useCallback(() => {
    pricingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const onBookDemo = useCallback(() => {
    openCalendlyPopup(utmParams);
  }, [utmParams]);

  const onRequestPricing = useCallback(() => {
    scrollToPricing();
  }, [scrollToPricing]);

  const ctaStripProps = { onBookDemo };

  return (
    <div className="rio-v2-landing">
      <Header onBookDemo={onBookDemo} onRequestPricing={onRequestPricing} />
      <main>
        <Hero onBookDemo={onBookDemo} onRequestPricing={onRequestPricing} />
        <LazyWhenVisible loader={loadPainPoints} minHeight={280} />
        <LazyWhenVisible loader={loadFeatures} minHeight={360} />
        <LazyWhenVisible loader={loadWhyRioAlm} minHeight={320} />
        <LazyWhenVisible loader={loadIndustries} minHeight={400} />
        <LazyWhenVisible loader={loadCtaStrip} minHeight={120} componentProps={ctaStripProps} />
        <div ref={pricingRef}>
          <LazyWhenVisible loader={loadLeadForm} minHeight={480} />
        </div>
      </main>
      <LazyWhenVisible loader={loadFooter} minHeight={200} />
      <MobileStickyCta onBookDemo={onBookDemo} />
    </div>
  );
}
