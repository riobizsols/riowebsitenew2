#!/usr/bin/env node
/**
 * Cross-platform pre-build image optimization.
 * Uses macOS `sips` when available; otherwise skips (committed images in public/ are used).
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const PUBLIC = path.join(ROOT, 'public');
const ASSETS = path.join(ROOT, 'src', 'assets', 'images');
const PRODUCTS = path.join(PUBLIC, 'products');

function hasSips() {
  if (process.platform !== 'darwin') return false;
  try {
    execSync('sips --version', { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

function optimize(src, max, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
  execSync(`sips -Z ${max} "${dest}"`, { stdio: 'ignore' });
  console.log(`  ${path.relative(ROOT, dest)}`);
}

function main() {
  if (!hasSips()) {
    console.log(
      'Skipping image optimization (sips is macOS-only). Using committed images in public/.'
    );
    return;
  }

  console.log('Optimizing landing images...');
  optimize(
    path.join(PUBLIC, 'alm-dashboard-user.png'),
    900,
    path.join(PUBLIC, 'alm-dashboard-user-900.png')
  );
  optimize(
    path.join(PUBLIC, 'rio-alm-asset-management-mobile.png'),
    640,
    path.join(PUBLIC, 'rio-alm-asset-management-mobile-640.png')
  );
  optimize(
    path.join(PUBLIC, 'manufacturing-industrial-rio-alm.png'),
    600,
    path.join(PUBLIC, 'manufacturing-industrial-rio-alm-600.png')
  );

  fs.mkdirSync(PRODUCTS, { recursive: true });
  console.log('Optimizing product page images...');

  const dashboardSrc = path.join(ASSETS, 'rio-alm-dashboard f.png');
  if (fs.existsSync(dashboardSrc)) {
    for (const size of [480, 720, 960]) {
      optimize(dashboardSrc, size, path.join(PRODUCTS, `rio-eam-dashboard-${size}.png`));
    }
  }

  const enterpriseSrc = path.join(ASSETS, 'enterprise-security.png');
  if (fs.existsSync(enterpriseSrc)) {
    optimize(enterpriseSrc, 400, path.join(PRODUCTS, 'enterprise-security-400.png'));
  }

  const loginBgSrc = path.join(ASSETS, 'login_background.png');
  if (fs.existsSync(loginBgSrc)) {
    for (const size of [400, 560]) {
      optimize(loginBgSrc, size, path.join(PRODUCTS, `la-law-hero-${size}.png`));
    }
  }

  const memsSrc = path.join(ASSETS, 'mems compliance.png');
  if (fs.existsSync(memsSrc)) {
    optimize(memsSrc, 400, path.join(PRODUCTS, 'mems-compliance-400.png'));
  }

  const almDeploySrc = path.join(ASSETS, 'alm deployment security icon.png');
  if (fs.existsSync(almDeploySrc)) {
    optimize(almDeploySrc, 200, path.join(PRODUCTS, 'alm-deployment-security-200.png'));
  }

  const usSrc = path.join(ASSETS, 'US.jpg');
  if (fs.existsSync(usSrc)) {
    const dest = path.join(PUBLIC, 'footer-us.jpg');
    fs.copyFileSync(usSrc, dest);
    execSync(`sips -Z 200 "${dest}"`, { stdio: 'ignore' });
    console.log(`  ${path.relative(ROOT, dest)}`);
  }

  const indiaSrc = path.join(ASSETS, 'India.jpg');
  if (fs.existsSync(indiaSrc)) {
    const dest = path.join(PUBLIC, 'footer-india.jpg');
    fs.copyFileSync(indiaSrc, dest);
    execSync(`sips -Z 200 "${dest}"`, { stdio: 'ignore' });
    console.log(`  ${path.relative(ROOT, dest)}`);
  }

  console.log('Done.');
}

main();
