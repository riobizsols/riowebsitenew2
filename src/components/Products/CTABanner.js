import React from 'react';
import './CTABanner.css';

// Default: RIO ALM demo request. Override with `contactPath` for other products (e.g. La Law → /contact).
const DEFAULT_CONTACT_PATH = "/products/rio-alm/contact";

const CTABanner = ({
  title = "Ready to Transform Your Asset Management?",
  subtitle = "Get a personalized demo and discover how RIO ALM can streamline your operations.",
  ctaText = "Request a Demo",
  contactPath = DEFAULT_CONTACT_PATH,
}) => {
  return (
    <section className="cta-banner">
      <div className="cta-banner-content">
        <h2 className="cta-title">{title}</h2>
        <p className="cta-subtitle">{subtitle}</p>
        <div className="cta-buttons">
          <a href={contactPath} className="cta-btn cta-btn-primary">
            {ctaText}
          </a>
          <a href={contactPath} className="cta-btn cta-btn-secondary">
            Get a Proposal
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
