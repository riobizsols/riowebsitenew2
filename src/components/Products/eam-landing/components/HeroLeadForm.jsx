import { useState } from "react";
import { FiLock } from "react-icons/fi";
import { formOptions } from "../data";
import { getApiBaseUrl } from "../utils/api";
import { captureUtmParams } from "../utils/utm";

const initial = {
  fullName2: "",
  company2: "",
  countryCode: "+91",
  phone2: "",
  email2: "",
  industry: "",
  message: "",
};

function isValidEmail(e) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim());
}

export default function HeroLeadForm() {
  const [form, setForm] = useState(initial);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const update = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.fullName2.trim() || form.fullName2.trim().length < 2) {
      setError("Please enter your full name.");
      return;
    }
    if (!form.company2.trim()) {
      setError("Please enter your company name.");
      return;
    }
    if (!isValidEmail(form.email2)) {
      setError("Please enter a valid work email.");
      return;
    }

    const payload = {
      ...form,
      phone2: `${form.countryCode} ${form.phone2}`.trim(),
      ...captureUtmParams(),
      landing_page: typeof window !== "undefined" ? window.location.href : "",
      referrer: typeof document !== "undefined" ? document.referrer : "",
    };

    setSubmitting(true);

    try {
      const response = await fetch(`${getApiBaseUrl()}/api/pricing-request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Demo request failed");

      setSuccess(true);
      setForm(initial);
    } catch (submitError) {
      console.error("Error submitting demo request:", submitError);
      setError("Unable to send your request right now. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="v2-hero-form-card" id="demo-form">
      <h2 className="v2-hero-form-title">Request a CMMS Demo / Pricing</h2>

      {success ? (
        <div className="v2-form-success" role="status">
          Thank you. Our team will contact you shortly to schedule your demo.
        </div>
      ) : (
        <form className="v2-hero-form" onSubmit={handleSubmit} noValidate>
          {error && <div className="v2-form-error">{error}</div>}

          <div>
            <label htmlFor="hero-fullName">Full Name</label>
            <input
              id="hero-fullName"
              name="fullName2"
              type="text"
              placeholder="Your name"
              required
              value={form.fullName2}
              onChange={update}
            />
          </div>

          <div>
            <label htmlFor="hero-company">Company Name</label>
            <input
              id="hero-company"
              name="company2"
              type="text"
              placeholder="Company"
              required
              value={form.company2}
              onChange={update}
            />
          </div>

          <div>
            <label htmlFor="hero-phone">Mobile / WhatsApp Number</label>
            <div className="v2-phone-row">
              <select
                name="countryCode"
                value={form.countryCode}
                onChange={update}
                aria-label="Country code"
              >
                {formOptions.countryCodes.map(({ code, label }) => (
                  <option key={code} value={code}>
                    {label}
                  </option>
                ))}
              </select>
              <input
                id="hero-phone"
                name="phone2"
                type="tel"
                placeholder="Phone number"
                value={form.phone2}
                onChange={update}
              />
            </div>
          </div>

          <div>
            <label htmlFor="hero-email">Work Email</label>
            <input
              id="hero-email"
              name="email2"
              type="email"
              placeholder="you@company.com"
              required
              value={form.email2}
              onChange={update}
            />
          </div>

          <div>
            <label htmlFor="hero-industry">Industry</label>
            <select
              id="hero-industry"
              name="industry"
              required
              value={form.industry}
              onChange={update}
            >
              <option value="" disabled>
                Select industry
              </option>
              {formOptions.industries.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="hero-message">Message / Requirement</label>
            <textarea
              id="hero-message"
              name="message"
              rows={3}
              placeholder="Tell us about your maintenance needs"
              value={form.message}
              onChange={update}
            />
          </div>

          <button
            className="v2-btn-primary v2-full-btn"
            type="submit"
            disabled={submitting}
          >
            {submitting ? "Sending…" : "Book My Demo"}
          </button>

          <p className="v2-form-trust">
            <FiLock size={14} aria-hidden="true" />
            Your information is secure and will only be used to contact you.
          </p>
        </form>
      )}
    </div>
  );
}
