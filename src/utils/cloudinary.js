const CLOUDINARY_HOST = 'res.cloudinary.com';

/**
 * Insert Cloudinary transforms after /upload/ for smaller, modern formats.
 * @param {string} url - Full Cloudinary URL or protocol-relative URL
 * @param {{ width?: number, quality?: string, format?: string, crop?: string }} opts
 */
export function cloudinaryUrl(url, opts = {}) {
  if (!url) return url;

  const { width, quality = 'auto', format = 'auto', crop = 'limit' } = opts;
  const normalized = String(url).replace(/^\/\//, 'https://');

  if (!normalized.includes(CLOUDINARY_HOST) || !normalized.includes('/upload/')) {
    return normalized;
  }

  if (/\/upload\/[^/]*f_/.test(normalized) || /\/upload\/[^/]*w_/.test(normalized)) {
    return normalized;
  }

  const parts = [`f_${format}`, `q_${quality}`];
  if (width) parts.push(`w_${width}`, `c_${crop}`);

  return normalized.replace('/upload/', `/upload/${parts.join(',')}/`);
}

export function cloudinarySrcSet(url, widths = [320, 480, 640, 800], opts = {}) {
  const base = String(url).replace(/^\/\//, 'https://');
  if (!base.includes(CLOUDINARY_HOST)) return null;

  return widths
    .map((w) => `${cloudinaryUrl(base, { ...opts, width: w })} ${w}w`)
    .join(', ');
}

/** Hero image used above the fold on the home page. */
export const HOME_HERO_IMAGE_ID =
  'v1732599895/rio_main_website/u9grcwa3mm6fz6e816nn.png';

export const HOME_HERO_CLOUDINARY =
  'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599895/rio_main_website/u9grcwa3mm6fz6e816nn.png';

export function homeHeroImage(width = 720) {
  return cloudinaryUrl(HOME_HERO_CLOUDINARY, { width, format: 'auto', quality: 'auto' });
}

export function clientLogoImage(url, width = 140) {
  return cloudinaryUrl(url, { width, format: 'auto', quality: 'auto' });
}

export const ABOUT_HERO_CLOUDINARY =
  'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599892/rio_main_website/rzllor2rlfpunfelj6o0.jpg';

/** LCP image on /about — sized to displayed width (~1340px desktop, smaller on mobile). */
export function aboutHeroImage(width = 1340) {
  return cloudinaryUrl(ABOUT_HERO_CLOUDINARY, {
    width,
    format: 'auto',
    quality: 'auto',
    crop: 'limit',
  });
}

export function aboutHeroOgImage() {
  return cloudinaryUrl(ABOUT_HERO_CLOUDINARY, { width: 1200, format: 'auto', quality: 'auto' });
}

/** Blog listing card thumbnail (~400px displayed, container 220px tall). */
export function blogCardImage(url, width = 480) {
  return cloudinaryUrl(url, { width, format: 'auto', quality: 'auto', crop: 'fill' });
}

/** Blog detail hero banner. */
export function blogHeroImage(url, width = 960) {
  return cloudinaryUrl(url, { width, format: 'auto', quality: 'auto', crop: 'limit' });
}
