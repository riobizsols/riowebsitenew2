import { FiCheckCircle, FiGlobe, FiSettings, FiShield, FiSmartphone, FiZap } from "react-icons/fi";
import { trustBarItems } from "../data";
import WhatsAppButton from "./WhatsAppButton";

const trustIcons = [FiZap, FiShield, FiSettings, FiSmartphone, FiGlobe];

export default function CtaStrip({ onBookDemo, onRequestPricing, showWhatsApp = true }) {
  return (
    <section className="v2-final-cta" id="cta">
      <div className="v2-container">
        <div className="v2-final-cta-inner">
          <div className="v2-final-cta-copy">
            <h2>Ready to Simplify Your Maintenance Management?</h2>
            <p>
              Book a short demo and see how our CMMS can help you manage maintenance
              smarter, faster and with complete clarity.
            </p>
          </div>
          <div className="v2-final-cta-actions">
            <button className="v2-btn-cta-light" type="button" onClick={onBookDemo}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Book a CMMS Demo
            </button>
            <button className="v2-btn-cta-light" type="button" onClick={onRequestPricing}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              Get Pricing / Quote
            </button>
            {showWhatsApp && (
              <WhatsAppButton className="v2-final-wa v2-btn-cta-whatsapp" source="footer_cta" />
            )}
          </div>
        </div>

        <div className="v2-final-cta-trust" aria-label="Product highlights">
          {trustBarItems.map((label, i) => {
            const Icon = trustIcons[i] || FiCheckCircle;
            return (
              <div className="v2-trust-item" key={label}>
                <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
                <span>{label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
