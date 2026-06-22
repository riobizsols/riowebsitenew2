import { useState } from "react";
import { formOptions } from "../data";
import { getApiBaseUrl } from "../utils/api";
import {
  firstFieldError,
  sanitizeCompanyInput,
  sanitizeCountryInput,
  sanitizeMessageInput,
  sanitizeNameInput,
  sanitizePhoneInput,
  validateCompany,
  validateCountry,
  validateEmail,
  validateFullName,
  validateIndustry,
  validateMessage,
  validatePhone,
  validatePricingLeadForm,
  validateRequiredSelect,
} from "../utils/formValidation";
import { captureUtmParams } from "../utils/utm";
import { trackGenerateLead } from "../../../../utils/gtm";
import ReactPixel from "react-facebook-pixel";
import FaqList from "./FaqList";

const initial = {
  fullName2: "",
  company2: "",
  email2: "",
  phone2: "",
  country2: "",
  industry: "",
  sites: "",
  assets: "",
  message: "",
};

const fieldValidators = {
  fullName2: validateFullName,
  company2: validateCompany,
  email2: validateEmail,
  phone2: (value) => validatePhone(value, { required: false }),
  country2: validateCountry,
  industry: validateIndustry,
  sites: (value) => validateRequiredSelect(value, "number of sites"),
  assets: (value) => validateRequiredSelect(value, "approximate asset count"),
  message: validateMessage,
};

const fieldSanitizers = {
  fullName2: sanitizeNameInput,
  company2: sanitizeCompanyInput,
  country2: sanitizeCountryInput,
  message: sanitizeMessageInput,
};

function FieldError({ message }) {
  if (!message) return null;
  return (
    <p className="v2-field-error" role="alert">
      {message}
    </p>
  );
}

export default function LeadForm({ trackingEvent = "cmms_pricing_form" }) {
  const [form, setForm] = useState(initial);
  const [fieldErrors, setFieldErrors] = useState({});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const inputClass = (name) => (fieldErrors[name] ? "v2-input-error" : undefined);

  const validateField = (name, value) => {
    const validate = fieldValidators[name];
    const message = validate ? validate(value) : "";
    setFieldErrors((prev) => ({ ...prev, [name]: message }));
    return message;
  };

  const update = (e) => {
    const { name, value } = e.target;
    const next =
      name === "phone2"
        ? sanitizePhoneInput(value, "+91")
        : fieldSanitizers[name]
          ? fieldSanitizers[name](value)
          : value;
    setForm((prev) => ({ ...prev, [name]: next }));
    if (fieldErrors[name]) validateField(name, next);
  };

  const handleBlur = (e) => {
    validateField(e.target.name, e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validatePricingLeadForm(form);
    setFieldErrors(errors);
    const firstError = firstFieldError(errors);
    if (firstError) {
      setError(firstError);
      return;
    }
    setError("");

    const payload = {
      ...form,
      ...captureUtmParams(),
      landing_page:
        typeof window !== "undefined" ? window.location.href : "",
      referrer: typeof document !== "undefined" ? document.referrer : "",
    };

    setSubmitting(true);

    try {
      const response = await fetch(`${getApiBaseUrl()}/api/pricing-request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Pricing request failed");

      trackGenerateLead(trackingEvent, { industry: form.industry });
      ReactPixel.track("Lead");
      setSuccess(true);
      setForm(initial);
      setFieldErrors({});
    } catch (submitError) {
      console.error("Error submitting pricing request:", submitError);
      setError(
        "Unable to send pricing request right now. Please try again in a moment."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="v2-pricing-section" id="pricing">
      <div className="v2-container">
        <div className="v2-form-faq-layout">
          <div className="v2-form-col">
            <h2 className="v2-form-heading">Get Pricing / Quote</h2>
            <p className="v2-form-subheading">
              Share your requirement and we will send a tailored pricing response
              to your team.
            </p>

            {success ? (
              <div className="v2-form-success" role="status">
                Thank you. Your pricing request has been sent to
                tony.rozario@riobizsols.com.
              </div>
            ) : (
              <form className="v2-form" onSubmit={handleSubmit} noValidate>
                {error && <div className="v2-form-error">{error}</div>}
                <div className="v2-form-grid">
                  <div>
                    <label htmlFor="fullName2">Full Name *</label>
                    <input
                      id="fullName2"
                      name="fullName2"
                      type="text"
                      autoComplete="name"
                      required
                      value={form.fullName2}
                      className={inputClass("fullName2")}
                      aria-invalid={fieldErrors.fullName2 ? "true" : undefined}
                      onChange={update}
                      onBlur={handleBlur}
                    />
                    <FieldError message={fieldErrors.fullName2} />
                  </div>
                  <div>
                    <label htmlFor="company2">Company Name *</label>
                    <input
                      id="company2"
                      name="company2"
                      type="text"
                      autoComplete="organization"
                      required
                      value={form.company2}
                      className={inputClass("company2")}
                      aria-invalid={fieldErrors.company2 ? "true" : undefined}
                      onChange={update}
                      onBlur={handleBlur}
                    />
                    <FieldError message={fieldErrors.company2} />
                  </div>
                  <div>
                    <label htmlFor="email2">Work Email *</label>
                    <input
                      id="email2"
                      name="email2"
                      type="email"
                      autoComplete="email"
                      required
                      value={form.email2}
                      className={inputClass("email2")}
                      aria-invalid={fieldErrors.email2 ? "true" : undefined}
                      onChange={update}
                      onBlur={handleBlur}
                    />
                    <FieldError message={fieldErrors.email2} />
                  </div>
                  <div>
                    <label htmlFor="phone2">Phone Number</label>
                    <input
                      id="phone2"
                      name="phone2"
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={10}
                      autoComplete="tel"
                      value={form.phone2}
                      className={inputClass("phone2")}
                      aria-invalid={fieldErrors.phone2 ? "true" : undefined}
                      onChange={update}
                      onBlur={handleBlur}
                    />
                    <FieldError message={fieldErrors.phone2} />
                  </div>
                  <div>
                    <label htmlFor="country2">Country *</label>
                    <input
                      id="country2"
                      name="country2"
                      type="text"
                      placeholder="Country"
                      autoComplete="country-name"
                      required
                      value={form.country2}
                      className={inputClass("country2")}
                      aria-invalid={fieldErrors.country2 ? "true" : undefined}
                      onChange={update}
                      onBlur={handleBlur}
                    />
                    <FieldError message={fieldErrors.country2} />
                  </div>
                  <div>
                    <label htmlFor="industry">Industry *</label>
                    <select
                      id="industry"
                      name="industry"
                      required
                      value={form.industry}
                      className={inputClass("industry")}
                      aria-invalid={fieldErrors.industry ? "true" : undefined}
                      onChange={update}
                      onBlur={handleBlur}
                    >
                      <option value="" disabled>
                        Select Industry
                      </option>
                      {formOptions.industries.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                    <FieldError message={fieldErrors.industry} />
                  </div>
                  <div>
                    <label htmlFor="sites">Number of Sites *</label>
                    <select
                      id="sites"
                      name="sites"
                      required
                      value={form.sites}
                      className={inputClass("sites")}
                      aria-invalid={fieldErrors.sites ? "true" : undefined}
                      onChange={update}
                      onBlur={handleBlur}
                    >
                      <option value="" disabled>
                        Select Site Count
                      </option>
                      {formOptions.sites.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                    <FieldError message={fieldErrors.sites} />
                  </div>
                  <div>
                    <label htmlFor="assets">Approximate Asset Count *</label>
                    <select
                      id="assets"
                      name="assets"
                      required
                      value={form.assets}
                      className={inputClass("assets")}
                      aria-invalid={fieldErrors.assets ? "true" : undefined}
                      onChange={update}
                      onBlur={handleBlur}
                    >
                      <option value="" disabled>
                        Select Asset Count
                      </option>
                      {formOptions.assetCounts.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                    <FieldError message={fieldErrors.assets} />
                  </div>
                  <div className="v2-full-width">
                    <label htmlFor="message">Message / Requirement</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      maxLength={1000}
                      value={form.message}
                      className={inputClass("message")}
                      aria-invalid={fieldErrors.message ? "true" : undefined}
                      onChange={update}
                      onBlur={handleBlur}
                    />
                    <FieldError message={fieldErrors.message} />
                  </div>
                </div>
                <button
                  className="v2-btn-primary v2-full-btn"
                  type="submit"
                  disabled={submitting}
                >
                  {submitting ? "Sending…" : "Send Pricing Request"}
                </button>
              </form>
            )}
          </div>

          <div className="v2-faq-col" id="faq">
            <FaqList variant="sidebar" />
          </div>
        </div>
      </div>
    </section>
  );
}
