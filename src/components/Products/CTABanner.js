import React from 'react';
import './CTABanner.css';
import { Link } from 'react-router-dom';

const CTABanner = ({ 
  title = "Ready to Transform Your Asset Management?",
  subtitle = "Get a personalized demo and discover how RIO ALM can streamline your operations.",
  ctaText = "Request a Demo",
  ctaLink = "/contact"
}) => {
  return (
    <section className="cta-banner">
      <div className="cta-banner-content">
        <h2 className="cta-title">{title}</h2>
        <p className="cta-subtitle">{subtitle}</p>
        <div className="cta-buttons">
          <Link to={ctaLink} className="cta-btn cta-btn-primary">
            {ctaText}
          </Link>
          <Link to="/products/rio-alm/contact" className="cta-btn cta-btn-secondary">
            Get a Proposal
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
