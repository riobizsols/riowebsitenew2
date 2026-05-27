import { ASSETS, SITE } from "../assets";
import WhatsAppButton from "./WhatsAppButton";

function CalendarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <rect x="7" y="13" width="3" height="3" rx="0.5" fill="#ef4444" />
    </svg>
  );
}

function TagIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="7" cy="7" r="1.5" fill="#eab308" stroke="#ca8a04" />
    </svg>
  );
}

export default function Header({ onBookDemo, onRequestPricing }) {
  return (
    <header className="v2-topbar">
      <div className="v2-container v2-topbar-inner">
        <a href={SITE.home} className="v2-logo-link" aria-label="RIO BizSols">
          <img src={ASSETS.logo} alt="RIO BizSols" className="v2-logo" />
        </a>

        <div className="v2-topbar-cta">
          <button
            className="v2-btn-header v2-btn-header--primary"
            type="button"
            onClick={onBookDemo}
          >
            <CalendarIcon />
            Book a 20-minute Demo
          </button>
          <button
            className="v2-btn-header v2-btn-header--outline"
            type="button"
            onClick={onRequestPricing}
          >
            <TagIcon />
            Get Pricing
          </button>
          <WhatsAppButton iconOnly className="v2-topbar-wa" source="header" />
        </div>
      </div>
    </header>
  );
}
