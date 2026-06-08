import { ASSETS } from "../assets";
import WhatsAppButton from "./WhatsAppButton";

export default function Hero({ onBookDemo, onRequestPricing }) {
  return (
    <section className="v2-hero" id="top">
      <div className="v2-container v2-hero-grid">
        <div className="v2-hero-text">
          <p className="v2-eyebrow">CMMS &amp; Enterprise Asset Management Software</p>
          <h1>
            Still tracking maintenance, breakdowns, and assets in Excel?
          </h1>
          <p className="v2-hero-sub">
            RIO EAM helps maintenance and operations teams manage preventive
            maintenance, breakdowns, work orders, calibration, vendors,
            documents, and asset history in one system.
          </p>
          <div className="v2-hero-cta-stack">
            <div className="v2-hero-ctas">
              <button className="v2-btn-primary" type="button" onClick={onBookDemo}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                Book a 20-minute Demo
              </button>
              <button className="v2-btn-outline" type="button" onClick={onRequestPricing}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                Get Pricing / Quote
              </button>
            </div>
            <WhatsAppButton className="v2-hero-wa" source="hero" />
          </div>
          <ul className="v2-trust-row">
            <li>
              <svg className="v2-trust-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <path d="M8 12l2.5 2.5L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Preventive maintenance
            </li>
            <li>
              <svg className="v2-trust-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <path d="M8 12l2.5 2.5L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Work orders &amp; breakdowns
            </li>
            <li>
              <svg className="v2-trust-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <path d="M8 12l2.5 2.5L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Audit-ready records
            </li>
          </ul>
        </div>

        <div className="v2-hero-visual">
          <div className="v2-hero-dashboard-wrap">
            <img
              src={ASSETS.dashboardDesktop}
              alt="RIO EAM dashboard with asset and maintenance metrics"
              className="v2-hero-dashboard-img"
              width={900}
              height={414}
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>
          <div className="v2-phone-mock" aria-hidden="true">
            <div className="v2-phone-screen">
              <img
                src={ASSETS.dashboardMobile}
                alt=""
                className="v2-hero-mobile-img"
                width={360}
                height={780}
                loading="lazy"
                decoding="async"
                width={178}
                height={340}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
