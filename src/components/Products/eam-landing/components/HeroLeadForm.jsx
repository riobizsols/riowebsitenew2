import { useState } from "react";
import { FiLock } from "react-icons/fi";
import { formOptions } from "../data";
import { getApiBaseUrl } from "../utils/api";
import {
  firstFieldError,
  getPhoneLimits,
  sanitizeCompanyInput,
  sanitizeMessageInput,
  sanitizeNameInput,
  sanitizePhoneInput,
  validateCompany,
  validateEmail,
  validateFullName,
  validateHeroLeadForm,
  validateIndustry,
  validateMessage,
  validatePhone,
} from "../utils/formValidation";
import { captureUtmParams } from "../utils/utm";
import { trackGenerateLead } from "../../../../utils/gtm";
import ReactPixel from "react-facebook-pixel";

const initial = {
  fullName2: "",
  company2: "",
  countryCode: "+91",
  phone2: "",
  email2: "",
  industry: "",
  message: "",
};

const fieldSanitizers = {
  fullName2: sanitizeNameInput,
  company2: sanitizeCompanyInput,
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

export default function HeroLeadForm({
  trackingEvent = "cmms_hero_form",
  formTitle = "Request a CMMS Demo / Pricing",
  product = "CMMS",
}) {
  const [form, setForm] = useState(initial);
  const [fieldErrors, setFieldErrors] = useState({});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const phoneDigitLimit = getPhoneLimits(form.countryCode).max;

  const inputClass = (name) => (fieldErrors[name] ? "v2-input-error" : undefined);

  const validateField = (name, value, countryCode = form.countryCode) => {
    let message = "";
    if (name === "fullName2") message = validateFullName(value);
    else if (name === "company2") message = validateCompany(value);
    else if (name === "phone2") {
      message = validatePhone(value, { required: true, countryCode });
    } else if (name === "email2") message = validateEmail(value);
    else if (name === "industry") message = validateIndustry(value);
    else if (name === "message") message = validateMessage(value);

    setFieldErrors((prev) => ({ ...prev, [name]: message }));
    return message;
  };

  const update = (e) => {
    const { name, value } = e.target;

    if (name === "countryCode") {
      setForm((prev) => {
        const phone2 = sanitizePhoneInput(prev.phone2, value);
        if (fieldErrors.phone2) {
          const message = validatePhone(phone2, { required: true, countryCode: value });
          setFieldErrors((fe) => ({ ...fe, phone2: message }));
        }
        return { ...prev, countryCode: value, phone2 };
      });
      return;
    }

    const next =
      name === "phone2"
        ? sanitizePhoneInput(value, form.countryCode)
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
    const errors = validateHeroLeadForm(form);
    setFieldErrors(errors);
    const firstError = firstFieldError(errors);
    if (firstError) {
      setError(firstError);
      return;
    }
    setError("");

    const payload = {
      ...form,
      product,
      request_type: "demo",
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

      trackGenerateLead(trackingEvent, { industry: form.industry });
      ReactPixel.track("Lead");
      setSuccess(true);
      setForm(initial);
      setFieldErrors({});
    } catch (submitError) {
      console.error("Error submitting demo request:", submitError);
      setError("Unable to send your request right now. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="v2-hero-form-card" id="demo-form">
      <h2 className="v2-hero-form-title">{formTitle}</h2>

      {success ? (
        <div className="v2-form-success" role="status">
          Thank you. Our team will contact you shortly to schedule your demo.
        </div>
      ) : (
        <form className="v2-hero-form" onSubmit={handleSubmit} noValidate>
          {error && <div className="v2-form-error">{error}</div>}

          <div>
            <label htmlFor="hero-fullName">Full Name *</label>
            <input
              id="hero-fullName"
              name="fullName2"
              type="text"
              placeholder="Enter your full name"
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
            <label htmlFor="hero-company">Company Name *</label>
            <input
              id="hero-company"
              name="company2"
              type="text"
              placeholder="Enter company name"
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
            <label htmlFor="hero-phone">Mobile / WhatsApp Number *</label>
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
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="Enter mobile number"
                autoComplete="tel-national"
                maxLength={phoneDigitLimit}
                required
                value={form.phone2}
                className={inputClass("phone2")}
                aria-invalid={fieldErrors.phone2 ? "true" : undefined}
                onChange={update}
                onBlur={handleBlur}
              />
            </div>
            <FieldError message={fieldErrors.phone2} />
          </div>

          <div>
            <label htmlFor="hero-email">Work Email *</label>
            <input
              id="hero-email"
              name="email2"
              type="email"
              placeholder="Enter work email"
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
            <label htmlFor="hero-industry">Industry *</label>
            <select
              id="hero-industry"
              name="industry"
              required
              value={form.industry}
              className={inputClass("industry")}
              aria-invalid={fieldErrors.industry ? "true" : undefined}
              onChange={update}
              onBlur={handleBlur}
            >
              <option value="" disabled>
                Select your industry
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
            <label htmlFor="hero-message">Message / Requirement</label>
            <textarea
              id="hero-message"
              name="message"
              rows={3}
              maxLength={1000}
              placeholder="Tell us about your requirement"
              value={form.message}
              className={inputClass("message")}
              aria-invalid={fieldErrors.message ? "true" : undefined}
              onChange={update}
              onBlur={handleBlur}
            />
            <FieldError message={fieldErrors.message} />
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
