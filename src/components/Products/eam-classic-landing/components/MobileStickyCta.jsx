import WhatsAppButton from "./WhatsAppButton";

export default function MobileStickyCta({ onBookDemo }) {
  return (
    <div className="v2-mobile-sticky-cta" role="region" aria-label="Quick actions">
      <div className="v2-mobile-sticky-cta-inner">
        <button
          type="button"
          className="v2-sticky-btn v2-sticky-btn--book"
          onClick={onBookDemo}
        >
          Book a meeting
        </button>
        <WhatsAppButton
          className="v2-sticky-btn v2-sticky-btn--wa"
          source="eam_classic_mobile_sticky"
          label="WhatsApp"
        />
      </div>
    </div>
  );
}
