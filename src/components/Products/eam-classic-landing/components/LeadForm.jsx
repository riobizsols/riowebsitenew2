import { useState } from "react";
import { formOptions } from "../data";
import { getApiBaseUrl } from "../utils/api";
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

function isValidEmail(e) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim());
}

export default function LeadForm() {
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

      trackGenerateLead("eam_classic_pricing_form", { industry: form.industry });
      ReactPixel.track("Lead");
      setSuccess(true);
      setForm(initial);
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
                    <label htmlFor="fullName2">Full Name</label>
                    <input
                      id="fullName2"
                      name="fullName2"
                      type="text"
                      required
                      value={form.fullName2}
                      onChange={update}
                    />
                  </div>
                  <div>
                    <label htmlFor="company2">Company Name</label>
                    <input
                      id="company2"
                      name="company2"
                      type="text"
                      required
                      value={form.company2}
                      onChange={update}
                    />
                  </div>
                  <div>
                    <label htmlFor="email2">Work Email</label>
                    <input
                      id="email2"
                      name="email2"
                      type="email"
                      required
                      value={form.email2}
                      onChange={update}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone2">Phone Number</label>
                    <input
                      id="phone2"
                      name="phone2"
                      type="tel"
                      value={form.phone2}
                      onChange={update}
                    />
                  </div>
                  <div>
                    <label htmlFor="country2">Country</label>
                    <input
                      id="country2"
                      name="country2"
                      type="text"
                      placeholder="Country"
                      required
                      value={form.country2}
                      onChange={update}
                    />
                  </div>
                  <div>
                    <label htmlFor="industry">Industry</label>
                    <select
                      id="industry"
                      name="industry"
                      required
                      value={form.industry}
                      onChange={update}
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
                  </div>
                  <div>
                    <label htmlFor="sites">Number of Sites</label>
                    <select
                      id="sites"
                      name="sites"
                      required
                      value={form.sites}
                      onChange={update}
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
                  </div>
                  <div>
                    <label htmlFor="assets">Approximate Asset Count</label>
                    <select
                      id="assets"
                      name="assets"
                      required
                      value={form.assets}
                      onChange={update}
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
                  </div>
                  <div className="v2-full-width">
                    <label htmlFor="message">Message / Requirement</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={update}
                    />
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
