const EMAIL_RE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const NAME_RE = /^[a-zA-Z][a-zA-Z\s.'-]*$/;
const COUNTRY_RE = /^[a-zA-Z][a-zA-Z\s.'-]*$/;

/** National number length (without country code) */
const PHONE_LIMITS = {
  "+91": { min: 10, max: 10, label: "10-digit Indian mobile" },
  "+1": { min: 10, max: 10, label: "10-digit US/Canada mobile" },
  "+44": { min: 10, max: 10, label: "10-digit UK mobile" },
  "+971": { min: 9, max: 9, label: "9-digit UAE mobile" },
  "+65": { min: 8, max: 8, label: "8-digit Singapore mobile" },
};

const DEFAULT_PHONE_LIMITS = { min: 7, max: 10, label: "mobile" };

export function getPhoneLimits(countryCode = "+91") {
  return PHONE_LIMITS[countryCode] ?? DEFAULT_PHONE_LIMITS;
}

export function sanitizePhoneInput(value, countryCode = "+91") {
  const { max } = getPhoneLimits(countryCode);
  return String(value).replace(/\D/g, "").slice(0, max);
}

export function sanitizeNameInput(value) {
  return String(value)
    .replace(/[^a-zA-Z\s.'-]/g, "")
    .slice(0, 80);
}

export function sanitizeCompanyInput(value) {
  return String(value).replace(/[<>]/g, "").slice(0, 100);
}

export function sanitizeCountryInput(value) {
  return String(value)
    .replace(/[^a-zA-Z\s.'-]/g, "")
    .slice(0, 60);
}

export function sanitizeMessageInput(value) {
  return String(value).slice(0, 1000);
}

export function validateFullName(name) {
  const value = name.trim();
  if (!value) return "Full name is required.";
  if (value.length < 2) return "Full name must be at least 2 characters.";
  if (value.length > 80) return "Full name is too long.";
  if (!NAME_RE.test(value)) {
    return "Full name can only contain letters, spaces, hyphens, and apostrophes.";
  }
  return "";
}

export function validateCompany(company) {
  const value = company.trim();
  if (!value) return "Company name is required.";
  if (value.length < 2) return "Company name must be at least 2 characters.";
  if (value.length > 100) return "Company name is too long.";
  return "";
}

export function validateEmail(email) {
  const value = email.trim();
  if (!value) return "Work email is required.";
  if (value.length > 254) return "Email is too long.";
  if (!EMAIL_RE.test(value)) return "Enter a valid work email address.";
  return "";
}

export function validatePhone(phone, { required = true, countryCode = "+91" } = {}) {
  const limits = getPhoneLimits(countryCode);
  const digits = sanitizePhoneInput(phone, countryCode);

  if (!digits) return required ? "Mobile number is required." : "";

  if (limits.min === limits.max) {
    if (digits.length !== limits.max) {
      return `Enter a valid ${limits.label} number.`;
    }
    return "";
  }

  if (digits.length < limits.min) {
    return `Enter at least ${limits.min} digits.`;
  }
  if (digits.length > limits.max) {
    return `Mobile number cannot exceed ${limits.max} digits.`;
  }
  return "";
}

export function validateIndustry(industry) {
  if (!industry) return "Please select your industry.";
  return "";
}

export function validateCountry(country) {
  const value = country.trim();
  if (!value) return "Country is required.";
  if (value.length < 2) return "Country must be at least 2 characters.";
  if (!COUNTRY_RE.test(value)) {
    return "Country can only contain letters, spaces, hyphens, and apostrophes.";
  }
  return "";
}

export function validateRequiredSelect(value, label) {
  if (!value) return `Please select ${label}.`;
  return "";
}

export function validateMessage(message) {
  if (!message.trim()) return "";
  if (message.length > 1000) return "Message must be 1000 characters or less.";
  return "";
}

export function validateHeroLeadForm(form) {
  return {
    fullName2: validateFullName(form.fullName2),
    company2: validateCompany(form.company2),
    phone2: validatePhone(form.phone2, {
      required: true,
      countryCode: form.countryCode,
    }),
    email2: validateEmail(form.email2),
    industry: validateIndustry(form.industry),
    message: validateMessage(form.message),
  };
}

export function validatePricingLeadForm(form) {
  return {
    fullName2: validateFullName(form.fullName2),
    company2: validateCompany(form.company2),
    email2: validateEmail(form.email2),
    phone2: validatePhone(form.phone2, { required: false, countryCode: "+91" }),
    country2: validateCountry(form.country2),
    industry: validateIndustry(form.industry),
    sites: validateRequiredSelect(form.sites, "number of sites"),
    assets: validateRequiredSelect(form.assets, "approximate asset count"),
    message: validateMessage(form.message),
  };
}

export function firstFieldError(fieldErrors) {
  return Object.values(fieldErrors).find(Boolean) || "";
}
