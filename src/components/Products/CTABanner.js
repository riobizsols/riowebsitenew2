import React from 'react';
import './CTABanner.css';

// Use an internal route so it works on localhost and on the deployed site
const CONTACT_URL = "/products/rio-alm/contact";

const CTABanner = ({ 
  title = "Ready to Transform Your Asset Management?",
  subtitle = "Get a personalized demo and discover how RIO ALM can streamline your operations.",
  ctaText = "Request a Demo"
}) => {
  return (
    <section className="cta-banner">
      <div className="cta-banner-content">
        <h2 className="cta-title">{title}</h2>
        <p className="cta-subtitle">{subtitle}</p>
        <div className="cta-buttons">
          <a href={CONTACT_URL} className="cta-btn cta-btn-primary">
            {ctaText}
          </a>
          <a href={CONTACT_URL} className="cta-btn cta-btn-secondary">
            Get a Proposal
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
