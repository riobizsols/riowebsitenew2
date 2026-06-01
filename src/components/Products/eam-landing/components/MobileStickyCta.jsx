import WhatsAppButton from "./WhatsAppButton";

export default function MobileStickyCta({ onBookDemo, onRequestPricing }) {
  return (
    <div className="v2-mobile-sticky-cta" role="region" aria-label="Quick actions">
      <div className="v2-mobile-sticky-cta-inner">
        <button
          type="button"
          className="v2-sticky-btn v2-sticky-btn--book"
          onClick={onBookDemo}
        >
          Book
        </button>
        <button
          type="button"
          className="v2-sticky-btn v2-sticky-btn--pricing"
          onClick={onRequestPricing}
        >
          Get Pricing
        </button>
        <WhatsAppButton
          className="v2-sticky-btn v2-sticky-btn--wa"
          source="mobile_sticky"
          label="WhatsApp"
        />
      </div>
    </div>
  );
}
