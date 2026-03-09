import React from 'react';
import { Link } from 'react-router-dom';
import './RioALMPricing.css';
import { FaCheckCircle } from 'react-icons/fa';

const MEMS_PRICING = {
  inr: {
    currency: '₹',
    region: 'India (INR)',
    plans: [
      {
        name: 'Single Hospital',
        scope: '1 hospital / campus',
        price: '4,25,000',
        description: 'Ideal for standalone multispecialty hospitals or large specialty centers.'
      },
      {
        name: 'Hospital Network',
        scope: 'Up to 5 hospitals',
        price: '9,50,000',
        description: 'For groups with multiple locations and centralized biomedical governance.',
        highlight: true
      }
    ],
    amc: '12% of license value per year (from Year 2)',
    notes: 'Taxes extra as applicable. Integrations and custom workflows are quoted based on scope.'
  },
  usd: {
    currency: '$',
    region: 'International (USD)',
    plans: [
      {
        name: 'Single Hospital',
        scope: '1 hospital / campus',
        price: '5,500',
        description: 'Ideal for standalone multispecialty hospitals or large specialty centers.'
      },
      {
        name: 'Hospital Network',
        scope: 'Up to 5 hospitals',
        price: '12,500',
        description: 'For groups with multiple locations and centralized biomedical governance.',
        highlight: true
      }
    ],
    amc: '12% of license value per year (from Year 2)',
    notes: 'Taxes extra as applicable. Integrations and custom workflows are quoted based on scope.'
  }
};

export default function RioMEMSPricing() {
  const [region, setRegion] = React.useState<'inr' | 'usd'>('inr');

  const config = region === 'inr' ? MEMS_PRICING.inr : MEMS_PRICING.usd;

  return (
    <div className="rio-pricing-page">
      {/* Hero */}
      <section className="pricing-hero">
        <div className="pricing-container">
          <h1 className="pricing-hero-title">
            RIO MEMS Pricing
            <br />
            <span className="subtitle-small">
              Medical Equipment Maintenance System for Hospitals
            </span>
          </h1>
          <p className="pricing-hero-subheading">
            One-time licensing with optional annual AMC. Unlimited users for your biomedical,
            maintenance, and clinical teams.
          </p>
          <div className="pricing-hero-ctas">
            <Link
              to="/products/medical-equipment-maintenance/contact"
              className="btn btn-primary-large"
            >
              Book RIO MEMS Demo
            </Link>
            <a href="mailto:tony.rozario@riobizsols.com" className="btn btn-secondary-large">
              Request RIO MEMS Proposal
            </a>
          </div>
        </div>
      </section>

      {/* Region Switcher */}
      <section className="region-switcher-section">
        <div className="pricing-container">
          <p className="region-note">Indicative pricing – final quote depends on scope and rollout.</p>
          <div className="region-toggle">
            <button
              className={`region-btn ${region === 'inr' ? 'active' : ''}`}
              onClick={() => setRegion('inr')}
            >
              🇮🇳 India (INR)
            </button>
            <button
              className={`region-btn ${region === 'usd' ? 'active' : ''}`}
              onClick={() => setRegion('usd')}
            >
              🌍 International (USD)
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pricing-cards-section">
        <div className="pricing-container">
          <h2 className="section-title">RIO MEMS License Options</h2>
          <div className="pricing-cards-grid">
            {config.plans.map((plan) => (
              <div
                key={plan.name}
                className={`pricing-card ${plan.highlight ? 'highlight' : ''}`}
              >
                {plan.highlight && <div className="badge-popular">Most Popular</div>}
                <h3 className="card-plan-name">{plan.name}</h3>
                <p className="card-description">{plan.description}</p>
                <div className="card-sites">
                  <span className="sites-badge">{plan.scope}</span>
                </div>
                <div className="card-price">
                  <span className="currency">{config.currency}</span>
                  <span className="amount">{plan.price}</span>
                  <span className="period">one-time license</span>
                </div>
                <div className="card-highlights">
                  <div className="highlight-item">
                    <FaCheckCircle /> Unlimited users
                  </div>
                  <div className="highlight-item">
                    <FaCheckCircle /> All RIO MEMS core modules
                  </div>
                  <div className="highlight-item">
                    <FaCheckCircle /> Standard implementation support
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="region-note" style={{ marginTop: 24 }}>
            <strong>AMC (Annual Maintenance Contract):</strong> {config.amc}
          </p>
          <p className="region-note">{config.notes}</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta-section">
        <div className="pricing-container">
          <h2 className="cta-headline">
            Want a tailored RIO MEMS quote for your hospital or network?
          </h2>
          <p className="cta-subline">
            Share your number of locations, bed strength, and device count – we will send a
            proposal aligned to your reality.
          </p>
          <div className="final-ctas">
            <Link
              to="/products/medical-equipment-maintenance/contact"
              className="btn btn-primary-large"
            >
              Talk to an Expert
            </Link>
            <a href="mailto:tony.rozario@riobizsols.com" className="btn btn-secondary-large">
              Email Requirements
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

