export default function CtaStrip({ onBookDemo }) {
  return (
    <section className="v2-cta-strip">
      <div className="v2-container">
        <div className="v2-cta-strip-inner">
          <div className="v2-cta-strip-text">
            <div className="v2-cta-badge" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2H2v10l9.29 9.29a1 1 0 0 0 1.41 0l7.29-7.29a1 1 0 0 0 0-1.41L12 2z"/><circle cx="7" cy="7" r="1" fill="currentColor"/></svg>
            </div>
            <div>
              <h3>Want to replace Excel-based maintenance tracking?</h3>
              <p>RIO EAM gives you real-time visibility, control, and audit-ready records.</p>
            </div>
          </div>
          <div className="v2-cta-strip-actions">
            <button className="v2-btn-primary v2-btn-light-on-dark" type="button" onClick={onBookDemo}>
              Book a Demo
            </button>
            <button className="v2-btn-outline-white" type="button">
              Talk to Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
