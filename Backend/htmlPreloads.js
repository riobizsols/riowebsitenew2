const fs = require('fs');
const path = require('path');

/** LCP image preloads injected into index.html before React boots (fixes discovery delay). */
const ROUTE_PRELOADS = {
  '/': [
    'https://res.cloudinary.com/dhzg3dnfc/image/upload/f_auto,q_auto,w_720/v1732599895/rio_main_website/u9grcwa3mm6fz6e816nn.png',
  ],
  '/about': [
    'https://res.cloudinary.com/dhzg3dnfc/image/upload/f_auto,q_auto,w_1340,c_limit/v1732599892/rio_main_website/rzllor2rlfpunfelj6o0.jpg',
  ],
  '/blog': [
    'https://res.cloudinary.com/dhzg3dnfc/image/upload/f_auto,q_auto,w_480,c_fill/v1732599940/rio_main_website/zsmbw34rfoookdmgmcpv.png',
  ],
  '/products/rio-eam': ['/products/rio-eam-dashboard-720.png'],
  '/products/la-law': ['/products/la-law-hero-400.png'],
};

function normalizeRoute(pathname) {
  return (pathname || '/').replace(/\/+$/, '') || '/';
}

function getPreloadHrefs(pathname) {
  return ROUTE_PRELOADS[normalizeRoute(pathname)] || [];
}

let cachedIndexHtml = null;
let cachedIndexPath = null;

function readIndexHtml(buildPath) {
  const indexPath = path.join(buildPath, 'index.html');
  if (cachedIndexPath !== indexPath || !cachedIndexHtml) {
    cachedIndexHtml = fs.readFileSync(indexPath, 'utf8');
    cachedIndexPath = indexPath;
  }
  return cachedIndexHtml;
}

function injectImagePreloads(html, hrefs) {
  if (!hrefs.length) return html;
  if (html.includes('data-rio-lcp-preload')) return html;

  const tags = hrefs
    .map(
      (href) =>
        `    <link rel="preload" as="image" href="${href}" fetchpriority="high" data-rio-lcp-preload />`
    )
    .join('\n');

  return html.replace('</head>', `${tags}\n  </head>`);
}

function sendIndexWithPreloads(req, res, buildPath) {
  const preloads = getPreloadHrefs(req.path);
  res.set('Cache-Control', 'no-cache');

  if (!preloads.length) {
    return res.sendFile(path.join(buildPath, 'index.html'));
  }

  try {
    const html = injectImagePreloads(readIndexHtml(buildPath), preloads);
    res.set('Content-Type', 'text/html; charset=utf-8');
    return res.status(200).send(html);
  } catch (error) {
    console.error('[html-preload] Failed:', error.message);
    return res.sendFile(path.join(buildPath, 'index.html'));
  }
}

module.exports = {
  getPreloadHrefs,
  injectImagePreloads,
  sendIndexWithPreloads,
};
