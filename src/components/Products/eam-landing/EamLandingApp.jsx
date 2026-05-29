import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PainPoints from "./components/PainPoints";
import Features from "./components/Features";
import WhyRioAlm from "./components/WhyRioAlm";
import Industries from "./components/Industries";
import CtaStrip from "./components/CtaStrip";
import LeadForm from "./components/LeadForm";
import Footer from "./components/Footer";
import MobileStickyCta from "./components/MobileStickyCta";
import { initCalendlyBookingListener, openCalendlyPopup } from "./utils/calendly";
import { captureUtmParams } from "./utils/utm";

export default function App() {
  const pricingRef = useRef(null);
  const [utmParams, setUtmParams] = useState(() => captureUtmParams());

  useEffect(() => {
    window.scrollTo(0, 0);
    setUtmParams(captureUtmParams());
    initCalendlyBookingListener();

    if (!document.querySelector('script[data-calendly-widget="true"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.setAttribute('data-calendly-widget', 'true');
      document.body.appendChild(script);
    }
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

  return (
    <div className="rio-v2-landing">
      <Header onBookDemo={onBookDemo} onRequestPricing={onRequestPricing} />
      <main>
        <Hero onBookDemo={onBookDemo} onRequestPricing={onRequestPricing} />
        <PainPoints />
        <Features />
        <WhyRioAlm />
        <Industries />
        <CtaStrip onBookDemo={onBookDemo} />
        <div ref={pricingRef}>
          <LeadForm />
        </div>
      </main>
      <Footer />
      <MobileStickyCta onBookDemo={onBookDemo} />
    </div>
  );
}
