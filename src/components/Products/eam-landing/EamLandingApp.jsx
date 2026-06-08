import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PainPoints from "./components/PainPoints";
import LazyWhenVisible from "./components/LazyWhenVisible";
import MobileStickyCta from "./components/MobileStickyCta";
import { initCalendlyBookingListener, openCalendlyPopup } from "./utils/calendly";
import { captureUtmParams } from "./utils/utm";

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
        <PainPoints />
        <LazyWhenVisible loader={loadFeatures} minHeight={420} rootMargin="0px 0px 80px 0px" />
        <LazyWhenVisible loader={loadWhyRioAlm} minHeight={360} rootMargin="0px 0px 80px 0px" />
        <LazyWhenVisible loader={loadIndustries} minHeight={440} rootMargin="0px 0px 80px 0px" />
        <LazyWhenVisible loader={loadCtaStrip} minHeight={160} rootMargin="0px 0px 80px 0px" componentProps={ctaStripProps} />
        <div ref={pricingRef}>
          <LazyWhenVisible loader={loadLeadForm} minHeight={480} />
        </div>
      </main>
      <LazyWhenVisible loader={loadFooter} minHeight={200} />
      <MobileStickyCta onBookDemo={onBookDemo} />
    </div>
  );
}
