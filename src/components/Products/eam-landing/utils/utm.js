export const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
];

const UTM_STORAGE_KEY = "rio_eam_landing_utm";

export function captureUtmParams() {
  if (typeof window === "undefined") {
    return UTM_KEYS.reduce((acc, key) => ({ ...acc, [key]: "" }), {});
  }

  try {
    const params = new URLSearchParams(window.location.search);
    const fromUrl = {};
    UTM_KEYS.forEach((key) => {
      const value = params.get(key);
      if (value) fromUrl[key] = value;
    });

    let stored = {};
    try {
      const raw = window.sessionStorage.getItem(UTM_STORAGE_KEY);
      stored = raw ? JSON.parse(raw) : {};
    } catch {
      stored = {};
    }

    const merged = UTM_KEYS.reduce((acc, key) => {
      acc[key] = fromUrl[key] || stored[key] || "";
      return acc;
    }, {});

    if (Object.values(fromUrl).some(Boolean)) {
      try {
        window.sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(merged));
      } catch {
        /* ignore storage errors */
      }
    }

    return merged;
  } catch {
    return UTM_KEYS.reduce((acc, key) => ({ ...acc, [key]: "" }), {});
  }
}
