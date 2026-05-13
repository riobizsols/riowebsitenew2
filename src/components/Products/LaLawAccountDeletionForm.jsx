import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import './RioALMLanding.css';

/** Mansoor API — public account deletion (used only by this form). */
const ACCOUNT_DELETION_REQUEST_URL =
  'https://web.rioassetmanagement.net/mansoor-api/api/account-deletion/request';

const ACTION_OPTIONS = [
  {
    value: 'delete_account_and_personal_data',
    label: 'Delete account and personal data',
  },
  { value: 'delete_account_only', label: 'Delete account only' },
  { value: 'delete_specific_data', label: 'Delete specific data' },
];

const IDS = {
  fullName: 'la-law-deletion-fullName',
  email: 'la-law-deletion-email',
  phoneNumber: 'la-law-deletion-phoneNumber',
  reason: 'la-law-deletion-reason',
  requestedDataAction: 'la-law-deletion-requestedDataAction',
  specificDataDetails: 'la-law-deletion-specificDataDetails',
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LaLawAccountDeletionForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [reason, setReason] = useState('');
  const [requestedDataAction, setRequestedDataAction] = useState(
    'delete_account_and_personal_data'
  );
  const [specificDataDetails, setSpecificDataDetails] = useState('');

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);
  const [submitError, setSubmitError] = useState(null);
  const feedbackRef = useRef(null);

  useEffect(() => {
    if (!submitMessage && !submitError) return;
    const id = requestAnimationFrame(() => {
      const el = feedbackRef.current;
      if (!el) return;
      el.scrollIntoView({ behavior: 'auto', block: 'center' });
      el.focus({ preventScroll: true });
    });
    return () => cancelAnimationFrame(id);
  }, [submitMessage, submitError]);

  const validate = () => {
    const next = {};
    if (!fullName.trim()) next.fullName = 'Full name is required.';
    if (!email.trim()) next.email = 'Email is required.';
    else if (!emailPattern.test(email.trim())) next.email = 'Enter a valid email address.';
    if (requestedDataAction === 'delete_specific_data' && !specificDataDetails.trim()) {
      next.specificDataDetails = 'Describe which data to delete.';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitMessage(null);
    setSubmitError(null);
    if (!validate() || isSubmitting) return;

    const body = {
      fullName: fullName.trim(),
      email: email.trim(),
      requestedDataAction,
    };
    if (phoneNumber.trim()) body.phoneNumber = phoneNumber.trim();
    if (reason.trim()) body.reason = reason.trim();
    if (requestedDataAction === 'delete_specific_data') {
      body.specificDataDetails = specificDataDetails.trim();
    }

    setIsSubmitting(true);
    try {
      const res = await fetch(ACCOUNT_DELETION_REQUEST_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const text = await res.text();
      let data = null;
      try {
        data = text ? JSON.parse(text) : null;
      } catch {
        data = null;
      }

      if (res.ok && (res.status === 201 || res.status === 200)) {
        const msg =
          data && typeof data.message === 'string'
            ? data.message
            : 'Your deletion request was submitted successfully.';
        setSubmitMessage(typeof msg === 'string' ? msg : 'Request submitted.');
        setFullName('');
        setEmail('');
        setPhoneNumber('');
        setReason('');
        setRequestedDataAction('delete_account_and_personal_data');
        setSpecificDataDetails('');
        setErrors({});
      } else {
        const errMsg =
          (data && (data.message || data.error)) ||
          (res.status === 400 ? 'Please check the form and try again.' : 'Something went wrong. Try again later.');
        setSubmitError(typeof errMsg === 'string' ? errMsg : 'Request failed.');
      }
    } catch (err) {
      console.error(err);
      setSubmitError(
        'Could not reach the server. If you are on a strict network, try again later or contact support.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rio-alm-overview-page">
      <Helmet>
        <title>Request account deletion | La Law | RIO BizSols</title>
        <meta
          name="description"
          content="Submit a La Law account and data deletion request. Requests are sent securely to RIO asset management services for manual review."
        />
        <link rel="canonical" href="https://riobizsols.com/products/la-law/account-deletion/request" />
      </Helmet>

      <section className="alm-hero la-law-account-deletion-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Account deletion request</h1>
            <p className="hero-subtitle">
              Complete the form below. Your request is sent securely for our team to review and process.
            </p>
            <p className="hero-subtext">Provided by RIO BizSols Private Limited.</p>
            <div className="hero-ctas">
              <Link to="/products/la-law/account-deletion" className="btn btn-secondary">
                Back to deletion information
              </Link>
              <Link to="/products/la-law" className="btn btn-secondary">
                La Law overview
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="alm-modules la-law-deletion-form-section">
        <div className="container">
          <div className="la-law-deletion-form-wrap">
            <Form onSubmit={handleSubmit} className="la-law-deletion-form" noValidate>
              <div className="la-law-deletion-field mb-3">
                <label htmlFor={IDS.fullName} className="la-law-deletion-field-label">
                  Full name <span className="la-law-deletion-req" aria-hidden="true">*</span>
                </label>
                <Form.Control
                  id={IDS.fullName}
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  isInvalid={!!errors.fullName}
                  autoComplete="name"
                  placeholder="As registered on your account"
                  aria-required="true"
                />
                <Form.Control.Feedback type="invalid">{errors.fullName}</Form.Control.Feedback>
              </div>

              <div className="la-law-deletion-field mb-3">
                <label htmlFor={IDS.email} className="la-law-deletion-field-label">
                  Email <span className="la-law-deletion-req" aria-hidden="true">*</span>
                </label>
                <Form.Control
                  id={IDS.email}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  isInvalid={!!errors.email}
                  autoComplete="email"
                  placeholder="Registered email address"
                  aria-required="true"
                />
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
              </div>

              <div className="la-law-deletion-field mb-3">
                <label htmlFor={IDS.phoneNumber} className="la-law-deletion-field-label">
                  Phone number <span className="la-law-deletion-opt">(optional)</span>
                </label>
                <Form.Control
                  id={IDS.phoneNumber}
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  autoComplete="tel"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div className="la-law-deletion-field mb-3">
                <label htmlFor={IDS.reason} className="la-law-deletion-field-label">
                  Reason <span className="la-law-deletion-opt">(optional)</span>
                </label>
                <Form.Control
                  id={IDS.reason}
                  as="textarea"
                  rows={3}
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Brief reason for deletion"
                />
              </div>

              <div className="la-law-deletion-field mb-3">
                <label htmlFor={IDS.requestedDataAction} className="la-law-deletion-field-label">
                  What should be deleted?
                </label>
                <Form.Select
                  id={IDS.requestedDataAction}
                  value={requestedDataAction}
                  onChange={(e) => setRequestedDataAction(e.target.value)}
                  aria-describedby="la-law-deletion-action-help"
                >
                  {ACTION_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </Form.Select>
                <Form.Text id="la-law-deletion-action-help" className="la-law-deletion-help">
                  Choose full deletion, account only, or specific data (then describe below).
                </Form.Text>
              </div>

              {requestedDataAction === 'delete_specific_data' && (
                <div className="la-law-deletion-field mb-4">
                  <label htmlFor={IDS.specificDataDetails} className="la-law-deletion-field-label">
                    Specific data to delete <span className="la-law-deletion-req" aria-hidden="true">*</span>
                  </label>
                  <Form.Control
                    id={IDS.specificDataDetails}
                    as="textarea"
                    rows={4}
                    value={specificDataDetails}
                    onChange={(e) => setSpecificDataDetails(e.target.value)}
                    isInvalid={!!errors.specificDataDetails}
                    placeholder="Describe exactly what should be removed (e.g. case ID, document names, dates)."
                    aria-required="true"
                  />
                  <Form.Control.Feedback type="invalid">{errors.specificDataDetails}</Form.Control.Feedback>
                </div>
              )}

              <div className="d-flex flex-wrap gap-2 align-items-center">
                <Button
                  type="submit"
                  variant="primary"
                  size="sm"
                  className="btn-submit-deletion"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Spinner animation="border" size="sm" className="me-2" role="status" />
                      Submitting…
                    </>
                  ) : (
                    'Submit deletion request'
                  )}
                </Button>
              </div>

              {(submitMessage || submitError) && (
                <div ref={feedbackRef} className="la-law-deletion-feedback" tabIndex={-1}>
                  {submitMessage && (
                    <Alert
                      variant="success"
                      className="mb-0 mt-3"
                      onClose={() => setSubmitMessage(null)}
                      dismissible
                    >
                      {submitMessage}
                    </Alert>
                  )}
                  {submitError && (
                    <Alert
                      variant="danger"
                      className="mb-0 mt-3"
                      onClose={() => setSubmitError(null)}
                      dismissible
                    >
                      {submitError}
                    </Alert>
                  )}
                </div>
              )}
            </Form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LaLawAccountDeletionForm;
