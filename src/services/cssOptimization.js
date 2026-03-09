/**
 * Critical CSS Extractor & Optimizer
 * Identifies and inlines critical CSS for above-the-fold content
 * Defers non-critical CSS to improve FCP and LCP
 */

/**
 * Critical CSS for above-the-fold content
 * Include: Navigation, Hero, CTA buttons, first visible cards
 */
export const CRITICAL_CSS = `
/* ===== RESET & BASICS ===== */
* { margin: 0; padding: 0; box-sizing: border-box; }
html, body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; }

/* ===== NAVIGATION ===== */
nav { background: #fff; box-shadow: 0 2px 4px rgba(0,0,0,0.1); position: sticky; top: 0; z-index: 1000; }
nav a { color: #333; text-decoration: none; padding: 12px 16px; display: inline-block; }
nav a:hover { color: #0066cc; }

/* ===== HERO SECTION ===== */
.hero { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 60px 20px; text-align: center; min-height: 60vh; display: flex; align-items: center; justify-content: center; }
.hero h1 { font-size: 48px; margin-bottom: 20px; font-weight: bold; }
.hero p { font-size: 20px; margin-bottom: 30px; opacity: 0.9; }

/* ===== CTA BUTTONS ===== */
.btn { display: inline-block; padding: 12px 30px; border-radius: 6px; font-weight: 600; text-decoration: none; cursor: pointer; transition: all 0.3s ease; }
.btn-primary { background: #0066cc; color: white; }
.btn-primary:hover { background: #0052a3; transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,102,204,0.3); }
.btn-secondary { background: #f0f0f0; color: #333; }
.btn-secondary:hover { background: #e0e0e0; }

/* ===== CARDS ===== */
.card { background: white; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); overflow: hidden; transition: all 0.3s ease; }
.card:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.15); transform: translateY(-4px); }
.card-header { padding: 20px; border-bottom: 1px solid #f0f0f0; }
.card-body { padding: 20px; }
.card-footer { padding: 20px; background: #f9f9f9; border-top: 1px solid #f0f0f0; }

/* ===== GRID LAYOUT ===== */
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; padding: 20px; }

/* ===== TEXT UTILITIES ===== */
h1, h2, h3 { color: #333; margin-bottom: 10px; }
h1 { font-size: 32px; font-weight: bold; }
h2 { font-size: 24px; font-weight: bold; }
p { line-height: 1.6; color: #666; }

/* ===== CONTAINER ===== */
.container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .hero h1 { font-size: 32px; }
  .hero p { font-size: 16px; }
  .btn { padding: 10px 20px; font-size: 14px; }
  .grid { grid-template-columns: 1fr; }
  nav { padding: 10px 0; }
}
`;

/**
 * Inline critical CSS in document head
 * Call this in App.js useEffect or in a <script> tag
 */
export function inlineCriticalCSS() {
  // Check if already injected
  if (document.getElementById('critical-css')) return;

  const style = document.createElement('style');
  style.id = 'critical-css';
  style.textContent = CRITICAL_CSS;
  
  // Insert before other stylesheets
  const firstStyle = document.querySelector('style, link[rel="stylesheet"]');
  if (firstStyle) {
    firstStyle.parentNode.insertBefore(style, firstStyle);
  } else {
    document.head.appendChild(style);
  }

  console.log('✓ Critical CSS inlined');
}

/**
 * Defer non-critical CSS asynchronously
 * Uses media query trick to load CSS without blocking render
 * @param {string} href - URL to CSS file
 */
export function deferCriticalCSS(href) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  link.media = 'print'; // Start with print media (won't apply to screen)
  
  // When CSS loads, switch media query to apply to screen
  link.onload = function() {
    this.media = 'all';
  };
  
  document.head.appendChild(link);
}

/**
 * Preload CSS without blocking render
 * Modern browsers support: <link rel="preload" as="style">
 * @param {string} href - URL to CSS file
 */
export function preloadCSS(href) {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'style';
  link.href = href;
  document.head.appendChild(link);
}

/**
 * Remove unused CSS rules (basic version)
 * In production, use tools like PurgeCSS or Tailwind's built-in optimizer
 */
export function removeUnusedCSS() {
  const stylesheets = document.styleSheets;
  const unusedRules = [];

  for (let stylesheet of stylesheets) {
    try {
      const rules = stylesheet.cssRules || stylesheet.rules;
      
      for (let rule of rules) {
        const selector = rule.selectorText;
        if (!selector) continue;

        // Check if selector exists in DOM
        try {
          if (document.querySelectorAll(selector).length === 0) {
            unusedRules.push({
              selector,
              source: stylesheet.href || 'inline'
            });
          }
        } catch (e) {
          // Invalid selector, skip
        }
      }
    } catch (e) {
      // Cross-origin stylesheet, skip
    }
  }

  if (process.env.NODE_ENV === 'development' && unusedRules.length > 0) {
    console.warn('⚠️ Unused CSS selectors found:', unusedRules);
  }

  return unusedRules;
}

/**
 * Minify CSS string
 * Removes comments, extra whitespace, unnecessary characters
 * @param {string} css - CSS string to minify
 * @returns {string} - Minified CSS
 */
export function minifyCSS(css) {
  return css
    // Remove comments
    .replace(/\/\*[\s\S]*?\*\//g, '')
    // Remove newlines and extra spaces
    .replace(/[\n\r\t]/g, '')
    .replace(/\s{2,}/g, ' ')
    // Remove spaces around special characters
    .replace(/\s*([{}:;,>+~])\s*/g, '$1')
    // Remove last semicolon before closing brace
    .replace(/;}/g, '}')
    // Remove leading/trailing whitespace
    .trim();
}

/**
 * CSS Performance Optimization Strategy
 * Apply in sequence for best results
 */
export const CSS_OPTIMIZATION_STRATEGY = {
  /**
   * Step 1: Inline Critical CSS
   * - Improves FCP (First Contentful Paint)
   * - Affects LCP if critical images are styled
   */
  step1_inlineCritical: () => {
    inlineCriticalCSS();
  },

  /**
   * Step 2: Defer Non-Critical CSS
   * - Reduces render-blocking CSS
   * - Uses media query trick for browser support
   */
  step2_deferNonCritical: (cssFiles) => {
    cssFiles.forEach(href => {
      deferCriticalCSS(href);
    });
  },

  /**
   * Step 3: Preload Important CSS
   * - For CSS that will be needed soon
   * - Doesn't block render but gets priority
   */
  step3_preloadImportant: (cssFiles) => {
    cssFiles.forEach(href => {
      preloadCSS(href);
    });
  },

  /**
   * Step 4: Remove Unused CSS
   * - Reduces CSS bundle size
   * - Use PurgeCSS in build process for production
   */
  step4_removeUnused: () => {
    removeUnusedCSS();
  },

  /**
   * Apply all optimizations
   */
  applyAll: function(nonCriticalFiles = [], preloadFiles = []) {
    this.step1_inlineCritical();
    if (nonCriticalFiles.length) this.step2_deferNonCritical(nonCriticalFiles);
    if (preloadFiles.length) this.step3_preloadImportant(preloadFiles);
    if (process.env.NODE_ENV === 'development') this.step4_removeUnused();
  }
};

/**
 * CSS Metrics Tracker
 * Monitors CSS-related performance metrics
 */
export const CSS_METRICS = {
  /**
   * Get total CSS size (bytes)
   */
  getTotalCSSSize: () => {
    let total = 0;
    document.styleSheets.forEach(sheet => {
      if (sheet.cssRules) {
        sheet.cssRules.forEach(rule => {
          total += rule.cssText.length;
        });
      }
    });
    return total;
  },

  /**
   * Get number of CSS rules
   */
  getCSSRuleCount: () => {
    let count = 0;
    document.styleSheets.forEach(sheet => {
      if (sheet.cssRules) {
        count += sheet.cssRules.length;
      }
    });
    return count;
  },

  /**
   * Get stylesheet sources
   */
  getStylesheetSources: () => {
    const sheets = [];
    document.styleSheets.forEach(sheet => {
      sheets.push({
        href: sheet.href || 'inline',
        rules: sheet.cssRules?.length || 0
      });
    });
    return sheets;
  },

  /**
   * Report CSS metrics
   */
  report: function() {
    console.log('📊 CSS Metrics:');
    console.log(`  Total CSS Size: ${(this.getTotalCSSSize() / 1024).toFixed(2)} KB`);
    console.log(`  CSS Rules: ${this.getCSSRuleCount()}`);
    console.log(`  Stylesheets: ${this.getStylesheetSources().length}`);
    this.getStylesheetSources().forEach(sheet => {
      console.log(`    - ${sheet.href}: ${sheet.rules} rules`);
    });
  }
};

export default {
  CRITICAL_CSS,
  inlineCriticalCSS,
  deferCriticalCSS,
  preloadCSS,
  removeUnusedCSS,
  minifyCSS,
  CSS_OPTIMIZATION_STRATEGY,
  CSS_METRICS
};
