/** Optimized product images in /public/products/ (generated at build time). */

const pub = process.env.PUBLIC_URL || '';

function publicImage(path) {
  return `${pub}${path}`;
}

function srcSet(baseName, widths) {
  return widths.map((w) => `${publicImage(`/products/${baseName}-${w}.png`)} ${w}w`).join(', ');
}

/** RIO EAM / dashboard hero — displayed ~589px wide on desktop. */
export const RIO_EAM_DASHBOARD = {
  src: publicImage('/products/rio-eam-dashboard-720.png'),
  preload: publicImage('/products/rio-eam-dashboard-720.png'),
  srcSet: srcSet('rio-eam-dashboard', [480, 720, 960]),
  sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 589px',
  width: 1600,
  height: 737,
};

export const ENTERPRISE_SECURITY = {
  src: publicImage('/products/enterprise-security-400.png'),
  width: 400,
  height: 533,
};

export const LA_LAW_HERO = {
  src: publicImage('/products/la-law-hero-400.png'),
  preload: publicImage('/products/la-law-hero-400.png'),
  srcSet: srcSet('la-law-hero', [400, 560]),
  sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 589px',
  width: 1200,
  height: 800,
};

export const MEMS_COMPLIANCE = {
  src: publicImage('/products/mems-compliance-400.png'),
  width: 400,
  height: 400,
};

export const DEPLOYMENT_SECURITY = {
  src: publicImage('/products/alm-deployment-security-200.png'),
  width: 200,
  height: 200,
};
