import { heroHighlights } from "../../eam-landing/data";
import ProductShowcase from "../../eam-landing/components/ProductShowcase";
import HeroLeadForm from "../../eam-landing/components/HeroLeadForm";
import WhatsAppButton from "../../eam-landing/components/WhatsAppButton";

export default function Hero({ onBookDemo, onRequestPricing }) {
  return (
    <section className="v2-hero" id="top">
      <div className="v2-container v2-hero-layout">
        <div className="v2-hero-intro">
          <p className="v2-eyebrow">EAM &amp; Machine Management Software</p>
          <h1>
            Still tracking maintenance, breakdowns, and work orders in Excel?
          </h1>
          <p className="v2-hero-sub">
            RIO EAM helps maintenance and operations teams manage preventive
            maintenance, breakdowns, work orders, calibration, vendors,
            documents, and asset history in one system.
          </p>
          <div className="v2-hero-ctas">
            <button className="v2-btn-primary" type="button" onClick={onBookDemo}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Book an EAM Demo
            </button>
            <button className="v2-btn-outline" type="button" onClick={onRequestPricing}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
              Get Pricing / Quote
            </button>
            <WhatsAppButton className="v2-hero-wa-inline" source="eam_classic_hero" />
          </div>
        </div>

        <ul className="v2-hero-highlights">
          {heroHighlights.map(({ icon: Icon, line1, line2 }) => (
            <li key={`${line1}-${line2}`}>
              <span className="v2-hero-highlight-icon" aria-hidden="true">
                <Icon size={24} strokeWidth={1.5} />
              </span>
              <span className="v2-hero-highlight-text">
                <span>{line1}</span>
                <span>{line2}</span>
              </span>
            </li>
          ))}
        </ul>

        <div className="v2-hero-showcase-wrap">
          <ProductShowcase inline />
        </div>

        <div className="v2-hero-aside">
          <HeroLeadForm />
        </div>
      </div>
    </section>
  );
}
