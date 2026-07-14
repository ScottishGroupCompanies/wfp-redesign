#!/usr/bin/env node
/**
 * page-checker.js — comprehensive pre-commit QA for wfphilly application pages
 * Usage: node scripts/page-checker.js --slug homes-condos --prefix hc
 */

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const slugIdx = args.indexOf('--slug');
const prefixIdx = args.indexOf('--prefix');

if (slugIdx === -1 || prefixIdx === -1) {
  console.error('Usage: node page-checker.js --slug <slug> --prefix <prefix>');
  process.exit(1);
}

const slug = args[slugIdx + 1];
const prefix = args[prefixIdx + 1];
const ROOT = path.join(__dirname, '..');

const appSrcPath = path.join(ROOT, `src/pages/applications/${slug}.astro`);
const rootSrcPath = path.join(ROOT, `src/pages/${slug}.astro`);
const isRootPage = !fs.existsSync(appSrcPath) && fs.existsSync(rootSrcPath);
const pagePath = isRootPage ? rootSrcPath : appSrcPath;
const pageUrlPath = isRootPage ? `/${slug}/` : `/applications/${slug}/`;
const src = fs.readFileSync(pagePath, 'utf8');
const builtHtml = (() => {
  const p = path.join(ROOT, `dist${pageUrlPath}index.html`);
  return fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : null;
})();

let passed = 0;
let failed = 0;
const failures = [];
const warnings = [];

function check(label, condition, detail = '', isWarn = false) {
  if (condition) {
    console.log(`  ✓ ${label}`);
    passed++;
  } else {
    const msg = detail ? `${label} — ${detail}` : label;
    if (isWarn) {
      console.log(`  ⚠ ${msg}`);
      warnings.push(msg);
    } else {
      console.log(`  ✗ ${msg}`);
      failed++;
      failures.push(msg);
    }
  }
}

// ─── 1. BUILD ──────────────────────────────────────────────────────────────
console.log('\n[1] BUILD');
check('Built HTML exists', builtHtml !== null, 'Run npm run build first');

// ─── 2. CSS COMPLETENESS ───────────────────────────────────────────────────
console.log('\n[2] CSS COMPLETENESS');
const cssMatch = src.match(/<style>([\s\S]*?)<\/style>/);
const css = cssMatch ? cssMatch[1] : '';
const requiredCss = [
  ['of-row', '.of-row'],
  ['of-ftype', '.of-ftype'],
  ['of-gallery__grid', '.of-gallery__grid'],
  ['res-section__', '.res-section__'],
  ['cam-tcard', '.cam-tcard'],
  ['swt-faq__layout', '.swt-faq__layout'],
  ['priv-cinematic-cta', '.priv-cinematic-cta'],
  ['ip-local', '.ip-local'],
  ['swt-trust', '.swt-trust'],
  [`${prefix}-hero`, `.${prefix}-hero`],
];
for (const [label, cls] of requiredCss) {
  check(label, css.includes(cls.replace('.', '')));
}

// ─── 3. CONTENT POLICY ─────────────────────────────────────────────────────
console.log('\n[3] CONTENT POLICY');
const policyTerms = [
  '45-90 minutes', '45–90 minutes',
  '60-90 minutes', '60–90 minutes',
  'per room', 'same day installation',
  '$3–$6', '$3-$6', 'per sq ft', 'per square foot',
  'save $', 'save up to $',
];
const srcNoStyle = src.replace(/<style>[\s\S]*?<\/style>/, '').replace(/<script>[\s\S]*?<\/script>/, '');
let policyClean = true;
for (const term of policyTerms) {
  if (srcNoStyle.includes(term)) {
    check(`No "${term}"`, false, `Found in page content`);
    policyClean = false;
  }
}
if (policyClean) check('No time/price violations', true);

// ─── 4. SEO ────────────────────────────────────────────────────────────────
console.log('\n[4] SEO');
const titleMatch = src.match(/const title = '([^']+)'/);
const descMatch = src.match(/const description = '([^']+)'/);
const title = titleMatch ? titleMatch[1] : '';
const desc = descMatch ? descMatch[1] : '';
check('Meta title present', title.length > 0);
check(`Meta title ≤60 chars (${title.length})`, title.length <= 60, title);
check('Meta description present', desc.length > 0);
check(`Meta desc ≤160 chars (${desc.length})`, desc.length <= 160, desc);

// Heading structure
const h1count = (src.match(/<h1\b/gi) || []).length;
const h2count = (src.match(/<h2\b/gi) || []).length;
check('Exactly 1 H1', h1count === 1, `Found ${h1count}`);
check('Multiple H2s', h2count >= 4, `Found only ${h2count}`);

// Keyword density (rough — strip all tags)
const textOnly = src.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').toLowerCase();
const wordCount = textOnly.split(' ').filter(Boolean).length;
const kwCount = (textOnly.match(/window film/g) || []).length;
const density = (kwCount / wordCount * 100).toFixed(2);
check(`Keyword density 0.4–1.2% (${density}%)`, parseFloat(density) >= 0.4 && parseFloat(density) <= 1.2);

// Internal links
const internalLinks = [...new Set(src.match(/href="(\/benefits\/[^"]+)"/g) || [])];
check(`4+ contextual internal links (${internalLinks.length})`, internalLinks.length >= 4, internalLinks.join(', '));
const allInternalLinks = (src.match(/href="(\/benefits\/[^"]+)"/g) || []);
const dupes = allInternalLinks.filter((v, i, a) => a.indexOf(v) !== i);
check('No repeated internal link URLs', dupes.length === 0, dupes.join(', '));

// External links
const externalLinks = (src.match(/href="(https:\/\/[^"]+)"/g) || []);
check('At least 1 external link', externalLinks.length >= 1);
const extDupes = externalLinks.filter((v, i, a) => a.indexOf(v) !== i);
check('No repeated external link URLs', extDupes.length === 0, extDupes.join(', '));
const badExt = externalLinks.filter(l => l.includes('www.www.'));
check('No malformed external URLs', badExt.length === 0, badExt.join(', '));

// Alt text
const imgsNoAlt = (src.match(/<img(?![^>]*alt=)[^>]*>/gi) || []);
check('All images have alt text', imgsNoAlt.length === 0, `${imgsNoAlt.length} missing`);

// Canonical
check('Canonical URL present', src.includes(`canonical="https://www.windowfilmphiladelphia.net${pageUrlPath}"`));

// ─── 5. GEO ────────────────────────────────────────────────────────────────
console.log('\n[5] GEO BLOCK');
const geoClass = `${prefix}-geo`;
check('GEO block present', src.includes(geoClass));
check('GEO display:none', css.includes(`${geoClass}`) && css.includes('display: none'), '', true);
const geoContent = (src.match(new RegExp(`class="${geoClass}"[\\s\\S]{0,5000}`)) || [''])[0];
check('GEO has paragraph (50+ words)', (geoContent.match(/<p>/g) || []).length > 0 && geoContent.length > 500);
check('GEO has keyword list', geoContent.includes('<ul>') || geoContent.includes('<li>'));

// ─── 6. SCHEMA ─────────────────────────────────────────────────────────────
console.log('\n[6] SCHEMA');
if (!builtHtml) {
  check('Schema check', false, 'No built HTML — run npm run build');
} else {
  const scriptBlocks = [...builtHtml.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  check(`7 schema blocks (found ${scriptBlocks.length})`, scriptBlocks.length === 7);
  const expectedTypes = ['LocalBusiness', 'FAQPage', 'Service', 'BreadcrumbList', 'WebPage', 'ItemList', 'Product'];
  const foundTypes = [];
  let schemaParseErrors = 0;
  for (const [, content] of scriptBlocks) {
    try {
      const obj = JSON.parse(content.trim());
      foundTypes.push(obj['@type']);
    } catch {
      schemaParseErrors++;
    }
  }
  check('All schemas valid JSON', schemaParseErrors === 0, `${schemaParseErrors} parse error(s)`);
  for (const t of expectedTypes) {
    check(`Schema: ${t}`, foundTypes.includes(t));
  }
  // Check FAQPage has 10 questions
  const faqBlock = scriptBlocks.find(([, c]) => { try { return JSON.parse(c.trim())['@type'] === 'FAQPage'; } catch { return false; } });
  if (faqBlock) {
    const faqObj = JSON.parse(faqBlock[1].trim());
    const qCount = (faqObj.mainEntity || []).length;
    check(`FAQPage has 10 questions (found ${qCount})`, qCount === 10);
    // Check no time/price in FAQ answers
    const faqClean = (faqObj.mainEntity || []).every(q => {
      const a = q.acceptedAnswer?.text || '';
      return !policyTerms.some(t => a.includes(t));
    });
    check('FAQ answers: no time/price claims', faqClean);
  }
}

// ─── 7. IMAGES ─────────────────────────────────────────────────────────────
console.log('\n[7] IMAGES');
const imgRefs = [...new Set((src.match(/src="\/images\/([^"]+)"/g) || []).map(m => m.replace('src="/images/', '').replace('"', '')))];
let missingImgs = [];
for (const img of imgRefs) {
  const imgPath = path.join(ROOT, 'public/images', img);
  if (!fs.existsSync(imgPath)) missingImgs.push(img);
}
check(`All images on disk (${imgRefs.length - missingImgs.length}/${imgRefs.length})`, missingImgs.length === 0, missingImgs.join(', '));

// ─── 8. PDFS ───────────────────────────────────────────────────────────────
console.log('\n[8] RESOURCES / PDFs');
const pdfRefs = [...new Set((src.match(/href="\/resources\/([^"]+\.pdf)"/g) || []).map(m => m.replace('href="/resources/', '').replace('"', '')))];
let missingPdfs = [];
for (const pdf of pdfRefs) {
  const pdfPath = path.join(ROOT, 'public/resources', pdf);
  if (!fs.existsSync(pdfPath)) missingPdfs.push(pdf);
}
check(`All PDFs on disk (${pdfRefs.length - missingPdfs.length}/${pdfRefs.length})`, missingPdfs.length === 0, missingPdfs.join(', '));

// ─── 9. JS / INTERACTIVE ───────────────────────────────────────────────────
console.log('\n[9] JAVASCRIPT');
const scriptMatch = src.match(/<script>([\s\S]*?)<\/script>/);
const js = scriptMatch ? scriptMatch[1] : '';
check('Script block present', js.length > 0);
check('Slider JS present', js.includes(`${prefix.charAt(0).toUpperCase() + prefix.slice(1)}FtypeTrack`) || js.includes('FtypeTrack'));
check('FAQ accordion JS present', js.includes('swt-faq__item') && js.includes('addEventListener'));
check('No broken IIFE joins', !js.match(/\}\)\(\);[^(\n\s]/));

// ─── 10. KEY SECTIONS ──────────────────────────────────────────────────────
console.log('\n[10] KEY SECTIONS');
check('Hero section', src.includes(`${prefix}-hero`));
check('Trust bar (BrandLogos)', src.includes('BrandLogos'));
check('Film types slider', src.includes('of-ftype'));
check('Gallery grid', src.includes('of-gallery__grid'));
check('Resources section', src.includes('res-section__'));
check('Testimonials (cam-tcard)', src.includes('cam-tcard'));
check('Neighborhoods (ip-local)', src.includes('ip-local'));
check('FAQ section', src.includes('swt-faq'));
check('GEO block', src.includes(`${prefix}-geo`));
check('CTA (priv-cinematic-cta)', src.includes('priv-cinematic-cta'));
check('CTA has background image', src.includes(`priv-cinematic-cta__media`) && src.includes(`url('/images/${prefix}-cta-bg.jpg')`));
check('CTA has vignette div', src.includes('priv-cinematic-cta__vignette'));

// ─── SUMMARY ───────────────────────────────────────────────────────────────
console.log('\n' + '═'.repeat(60));
console.log(`RESULT: ${failed === 0 ? '✅ PASS' : '❌ FAIL'}`);
console.log(`  Passed: ${passed}  Failed: ${failed}  Warnings: ${warnings.length}`);
if (failures.length > 0) {
  console.log('\nFAILURES:');
  failures.forEach((f, i) => console.log(`  ${i + 1}. ${f}`));
}
if (warnings.length > 0) {
  console.log('\nWARNINGS:');
  warnings.forEach(w => console.log(`  ⚠ ${w}`));
}
console.log('═'.repeat(60));
process.exit(failed > 0 ? 1 : 0);
