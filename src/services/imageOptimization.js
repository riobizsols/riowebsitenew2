/**
 * Image Optimization Utility
 * Generates optimized image URLs with responsive srcsets
 * Works with Cloudinary or any CDN supporting image transformation
 */

// Base Cloudinary URL (update with your account)
const CLOUDINARY_BASE = 'https://res.cloudinary.com/dhzg3dnfc/image/upload';

/**
 * Generate responsive image URLs for different device sizes with WebP support
 * @param {string} publicId - Cloudinary public ID or relative path
 * @param {object} options - Configuration options
 * @returns {object} - URLs and srcsets for different formats
 */
export const generateResponsiveImage = (publicId, options = {}) => {
  const {
    defaultWidth = 800,
    quality = 'auto',
    format = 'auto',
    sizes = [320, 640, 960, 1280, 1920],
    crop = 'auto'
  } = options;

  // Handle both Cloudinary IDs and regular paths
  const isCloudinary = publicId.includes('res.cloudinary.com') || publicId.includes('cloudinary');
  
  if (!isCloudinary) {
    // For local images, return as-is
    return {
      src: publicId,
      srcSet: null,
      webpSrcSet: null,
      sizes: '(max-width: 480px) 100vw, (max-width: 768px) 90vw, (max-width: 1200px) 80vw, 70vw',
      defaultWidth
    };
  }

  // Generate JPEG srcSet for responsive images (highest compatibility)
  const jpgSrcSet = sizes
    .map(size => `${CLOUDINARY_BASE}/f_auto,q_${quality},w_${size},c_${crop}/${publicId} ${size}w`)
    .join(', ');

  // Generate WebP srcSet (30-40% smaller file size)
  const webpSrcSet = sizes
    .map(size => `${CLOUDINARY_BASE}/f_webp,q_${quality},w_${size},c_${crop}/${publicId} ${size}w`)
    .join(', ');

  // Sizes attribute for responsive loading strategy
  const sizesAttr = '(max-width: 480px) 100vw, (max-width: 768px) 90vw, (max-width: 1200px) 80vw, 70vw';

  return {
    src: `${CLOUDINARY_BASE}/f_auto,q_${quality},w_${defaultWidth},c_${crop}/${publicId}`,
    srcSet: jpgSrcSet,
    webpSrcSet: webpSrcSet,
    sizes: sizesAttr,
    defaultWidth,
    quality
  };
};

/**
 * Get optimized image URL for a specific size
 * @param {string} publicId - Image public ID or path
 * @param {number} width - Desired width
 * @param {object} options - Additional options
 * @returns {string} - Optimized image URL
 */
export const getOptimizedImage = (publicId, width = 800, options = {}) => {
  const {
    quality = 'auto',
    format = 'auto',
    crop = 'auto'
  } = options;

  if (publicId.includes('cloudinary')) {
    return `${CLOUDINARY_BASE}/f_${format},q_${quality},w_${width},c_${crop}/${publicId}`;
  }
  return publicId;
};

/**
 * Generate critical CSS inline for above-the-fold content
 * This improves LCP by reducing render-blocking resources
 */
export const criticalCSSMetaTags = `
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Digital Solutions for Business Growth">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://res.cloudinary.com">
  <link rel="dns-prefetch" href="https://www.googletagmanager.com">
`;

/**
 * Preload critical resources
 * Helps improve LCP and overall performance
 */
export const preloadResources = () => {
  // Preload critical images
  const criticalImages = [
    '/path/to/hero-image.jpg',
    '/path/to/logo.png'
  ];

  criticalImages.forEach(image => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = image;
    document.head.appendChild(link);
  });

  // Prefetch DNS for third-party services
  const thirdPartyDomains = [
    'https://www.googletagmanager.com',
    'https://connect.facebook.net',
    'https://res.cloudinary.com'
  ];

  thirdPartyDomains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = domain;
    document.head.appendChild(link);
  });
};

/**
 * Defer non-critical CSS loading
 * Improves First Contentful Paint (FCP)
 */
export const deferNonCriticalCSS = (href) => {
  if (document.readyState === 'loading') {
    // CSS hasn't finished loading yet, use inline script
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.media = 'print';
    link.onload = function() {
      this.media = 'all';
    };
    document.head.appendChild(link);
  } else {
    // CSS has already loaded
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
  }
};

/**
 * Get WebP srcSet for Cloudinary images
 * Returns WebP versions for faster loading (30-40% file size reduction)
 * @param {string} cloudinaryId - Cloudinary image ID
 * @param {array} sizes - Array of widths to generate
 * @param {string} quality - Quality setting (auto, 80, etc.)
 * @returns {string} - WebP srcSet string
 */
export const getWebpSrcSet = (cloudinaryId, sizes = [320, 640, 960, 1280, 1920], quality = 'auto') => {
  return sizes
    .map(size => `${CLOUDINARY_BASE}/f_webp,q_${quality},w_${size},c_auto/${cloudinaryId} ${size}w`)
    .join(', ');
};

/**
 * Detect browser WebP support and return appropriate format
 * @returns {boolean} - True if browser supports WebP
 */
export const supportsWebP = () => {
  const canvas = document.createElement('canvas');
  return canvas.toDataURL('image/webp').indexOf('image/webp') === 0;
};

/**
 * Generate picture element HTML for art direction
 * Allows different images for different viewport sizes
 * @param {object} sources - { mobile: url, tablet: url, desktop: url }
 * @param {string} fallback - Fallback image URL
 * @param {string} alt - Alt text
 * @returns {string} - HTML picture element
 */
export const generatePictureElement = (sources, fallback, alt) => {
  return `
    <picture>
      <source media="(min-width: 1200px)" srcSet="${sources.desktop}">
      <source media="(min-width: 768px)" srcSet="${sources.tablet}">
      <source media="(max-width: 767px)" srcSet="${sources.mobile}">
      <img src="${fallback}" alt="${alt}" loading="lazy" />
    </picture>
  `;
};

/**
 * Compress and optimize text content
 * Reduces bundle size
 */
export const compressText = (text) => {
  return text
    .replace(/\s+/g, ' ') // Remove extra whitespace
    .trim();
};

/**
 * Image size recommendations by viewport
 * Use these to set width/height attributes to prevent CLS
 */
export const getImageDimensions = (type = 'default') => {
  const dimensions = {
    hero: { width: 1920, height: 600 },
    card: { width: 400, height: 300 },
    thumbnail: { width: 200, height: 200 },
    avatar: { width: 100, height: 100 },
    banner: { width: 1200, height: 400 },
    default: { width: 800, height: 600 }
  };

  return dimensions[type] || dimensions.default;
};

export default {
  generateResponsiveImage,
  getOptimizedImage,
  preloadResources,
  deferNonCriticalCSS,
  compressText,
  getImageDimensions,
  getWebpSrcSet,
  supportsWebP,
  generatePictureElement,
};
