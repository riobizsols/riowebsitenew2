import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './RioALMLanding.css';

const DELETION_FORM_PATH = '/products/la-law/account-deletion/request';

const LaLawAccountDeletion = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="rio-alm-overview-page">
      <Helmet>
        <title>La Law Account Deletion Request | RIO BizSols</title>
        <meta
          name="description"
          content="Submit your La Law account deletion request. Steps, data scope, retention note, and timeline. Provided by RIO BizSols Private Limited."
        />
        <link rel="canonical" href="https://riobizsols.com/products/la-law/account-deletion" />
      </Helmet>

      <section className="alm-hero la-law-account-deletion-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">La Law Account Deletion Request</h1>
            <p className="hero-subtitle">Submit your request to delete account data.</p>
            <p className="hero-subtext">Provided by RIO BizSols Private Limited.</p>
            <div className="hero-ctas">
              <Link to={DELETION_FORM_PATH} className="btn btn-primary">
                Continue to deletion portal
              </Link>
              <Link to="/products/la-law" className="btn btn-secondary">
                Back to La Law overview
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="alm-how-it-works">
        <div className="container">
          <h2 className="section-title">Steps</h2>
          <p className="section-subtitle">Follow these steps when you complete the deletion request form</p>
          <div className="steps-container">
            <div className="step-item">
              <div className="step-circle">1</div>
              <h3>Step 1</h3>
              <p>Provide your registered account details.</p>
            </div>
            <div className="step-divider" />
            <div className="step-item">
              <div className="step-circle">2</div>
              <h3>Step 2</h3>
              <p>Choose full deletion, account-only, or specific-data deletion.</p>
            </div>
            <div className="step-divider" />
            <div className="step-item">
              <div className="step-circle">3</div>
              <h3>Step 3</h3>
              <p>Submit request. Our team reviews and processes it manually.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="alm-modules la-law-deletion-details">
        <div className="container">
          <h2 className="section-title">What to expect</h2>
          <p className="section-subtitle">
            Scope of deletion, how long review takes, and how to open the request form
          </p>

          <div className="la-law-deletion-details-grid">
            <article className="la-law-deletion-card">
              <h3 className="la-law-deletion-card-title">Data that can be deleted</h3>
              <ul className="la-law-deletion-card-list">
                <li>Account and profile details</li>
                <li>Case records</li>
                <li>Complainant and accused details</li>
                <li>Petition entries</li>
                <li>Uploaded and generated documents linked to your account</li>
              </ul>
            </article>

            <article className="la-law-deletion-card la-law-deletion-card--timeline">
              <h3 className="la-law-deletion-card-title">Request processing timeline</h3>
              <p className="la-law-deletion-card-highlight">7 business days</p>
              <p className="la-law-deletion-card-text">
                We aim to review and action account deletion requests within this window once your request is
                submitted using the form.
              </p>
            </article>
          </div>

          <div className="la-law-deletion-retention">
            <h3 className="la-law-deletion-retention-title">Retention note</h3>
            <p className="la-law-deletion-retention-text">
              Deletion requests are reviewed manually. Some data may be retained until review is completed and
              actioned by our team.
            </p>
          </div>

          <div className="la-law-deletion-portal-panel">
            <div className="la-law-deletion-portal-copy">
              <p className="la-law-deletion-portal-lead">
                When you are ready, continue to the secure request form to submit your deletion details.
              </p>
              <p className="la-law-deletion-portal-contact">
                Questions?{' '}
                <Link to="/contact" className="la-law-deletion-portal-contact-link">
                  Contact RIO BizSols
                </Link>
              </p>
            </div>
            <div className="la-law-deletion-portal-actions">
              <Link to={DELETION_FORM_PATH} className="btn btn-primary">
                Open deletion request form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LaLawAccountDeletion;
