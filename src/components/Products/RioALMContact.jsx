import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FiPhone, FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import './RioALMContact.css';

const HEADQUARTERS_ADDRESS = {
  company: 'RIO BizSols Pvt Ltd',
  street: '', // e.g. '123, Example Road, Koramangala'
  city: 'Bangalore',
  stateCountry: 'Karnataka, India',
};
const CONTACT_PHONE = '+91 80 1234 5678';

const RioALMContact = () => {
  const submittingRef = useRef(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: 'Demo Request',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    if (e && typeof e.preventDefault === 'function') {
      e.preventDefault();
    }
    // Get form: from submit event (e.target) or from button click (e.currentTarget.form)
    const form = (e.target && e.target.tagName === 'FORM')
      ? e.target
      : (e.currentTarget && e.currentTarget.form) || (e.target && e.target.closest && e.target.closest('form'));
    if (form && !form.checkValidity()) {
      form.reportValidity();
      return;
    }
    if (submittingRef.current) return;
    submittingRef.current = true;
    // In a real application, this would send to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: 'Demo Request',
        message: ''
      });
      submittingRef.current = false;
    }, 3000);
  };

  return (
    <>
      <Helmet>
        <title>Contact RIO ALM | Request Demo or Proposal</title>
        <meta name="description" content="Get in touch with RIO ALM team. Request a demo, get a proposal, or ask questions about our asset lifecycle management platform." />
      </Helmet>

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="hero-title">Get in Touch</h1>
          <p className="hero-subtitle">
            We're here to help. Contact us to discuss your asset management needs.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <h2 className="section-title">Send us a Message</h2>
              {submitted ? (
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <h3>Thank You!</h3>
                  <p>Your message has been sent successfully. We'll get back to you soon.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} action="#">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="company" className="form-label">Company</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-input"
                      required
                    >
                      <option value="Demo Request">Request a Demo</option>
                      <option value="Proposal">Get a Proposal</option>
                      <option value="Question">Ask a Question</option>
                      <option value="Partnership">Partnership Inquiry</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-input"
                      rows="5"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="submit-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmit(e);
                    }}
                  >
                    <FiSend className="btn-icon" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="contact-info-section">
              <h2 className="section-title">Contact Information</h2>
              
              <div className="contact-info-block">
                <h3 className="info-title">Headquarters</h3>
                <div className="info-item">
                  <FiMapPin className="info-icon" />
                  <div className="info-content">
                    <p>{HEADQUARTERS_ADDRESS.company}</p>
                    {HEADQUARTERS_ADDRESS.street && <p>{HEADQUARTERS_ADDRESS.street}</p>}
                    <p>{HEADQUARTERS_ADDRESS.city}</p>
                    <p>{HEADQUARTERS_ADDRESS.stateCountry}</p>
                  </div>
                </div>
              </div>

              <div className="contact-info-block">
                <h3 className="info-title">Get in Touch</h3>
                <div className="info-item">
                  <FiPhone className="info-icon" />
                  <div className="info-content">
                    <p className="info-label">Phone</p>
                    <p><a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}>{CONTACT_PHONE}</a></p>
                  </div>
                </div>
                <div className="info-item">
                  <FiMail className="info-icon" />
                  <div className="info-content">
                    <p className="info-label">Email</p>
                    <p><a href="mailto:info@riobizsols.com">info@riobizsols.com</a></p>
                  </div>
                </div>
              </div>

              <div className="contact-info-block">
                <h3 className="info-title">What to Expect</h3>
                <ul className="expectation-list">
                  <li>Quick response within 24 hours</li>
                  <li>Initial consultation call</li>
                  <li>Custom demo for your use case</li>
                  <li>Tailored proposal and timeline</li>
                  <li>Dedicated implementation support</li>
                </ul>
              </div>

              <div className="quick-contact">
                <h3 className="info-title">Quick Links</h3>
                <div className="quick-links">
                  <a href="/products/rio-alm/features" className="quick-link">
                    View All Features →
                  </a>
                  <a href="/products/rio-alm/industries" className="quick-link">
                    Explore Industries →
                  </a>
                  <a href="/products/rio-alm/deployment" className="quick-link">
                    Deployment Options →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-card">
              <h3>How long does a demo take?</h3>
              <p>Our demos typically last 30-45 minutes and are tailored to your specific use case and industry.</p>
            </div>
            <div className="faq-card">
              <h3>What's included in a proposal?</h3>
              <p>Proposals include implementation timeline, resource requirements, licensing costs, and support options.</p>
            </div>
            <div className="faq-card">
              <h3>Can we start with a pilot?</h3>
              <p>Yes! Many organizations start with a pilot deployment in one branch or department before full rollout.</p>
            </div>
            <div className="faq-card">
              <h3>How soon can we go live?</h3>
              <p>Implementation typically takes 6-16 weeks depending on scope, complexity, and your organization's readiness.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RioALMContact;
