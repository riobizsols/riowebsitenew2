import WhatsAppButton from "./WhatsAppButton";

export default function MobileStickyCta({ onBookDemo, showWhatsApp = true }) {
  return (
    <div className="v2-mobile-sticky-cta" role="region" aria-label="Quick actions">
      <div className="v2-mobile-sticky-cta-inner">
        <button
          type="button"
          className={`v2-sticky-btn v2-sticky-btn--book${showWhatsApp ? "" : " v2-sticky-btn--book-only"}`}
          onClick={onBookDemo}
        >
          Book a meeting
        </button>
        {showWhatsApp && (
          <WhatsAppButton
            className="v2-sticky-btn v2-sticky-btn--wa"
            source="eam_classic_mobile_sticky"
            label="WhatsApp"
          />
        )}
      </div>
    </div>
  );
}
