#!/usr/bin/env node
/**
 * cities-page-checker.cjs — comprehensive pre-commit QA for wfphilly city pages
 * Usage: node scripts/cities-page-checker.cjs --slug camden
 *
 * Checks: build, CSS, content policy, SEO, GEO, schema, images, headings,
 *         internal/external links, component imports, no leftover Camden content.
 *
 * Exit code 0 = PASS, 1 = FAIL.
 */

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const slugIdx = args.indexOf('--slug');

if (slugIdx === -1) {
  console.error('Usage: node scripts/cities-page-checker.cjs --slug <slug>');
  process.exit(1);
}

const slug = args[slugIdx + 1];
const ROOT = path.join(__dirname, '..');
const pagePath = path.join(ROOT, `src/pages/cities/${slug}.astro`);
const pageUrlPath = `/cities/${slug}/`;

if (!fs.existsSync(pagePath)) {
  console.error(`Page not found: ${pagePath}`);
  process.exit(1);
}

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

// Strip tags for visible-text checks
const visible = src
  .replace(/<script[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style[\s\S]*?<\/style>/gi, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();
const visibleWords = visible.split(/\s+/).filter(Boolean).length;
const css = (src.match(/<style>([\s\S]*?)<\/style>/) || ['', ''])[1];

// ─── 1. BUILD ──────────────────────────────────────────────────────────────
console.log('\n[1] BUILD');
check('Built HTML exists', builtHtml !== null, 'Run npm run build first');

// ─── 2. COMPONENT IMPORTS ──────────────────────────────────────────────────
console.log('\n[2] COMPONENT IMPORTS');
check('AccordionBenefits imported', src.includes("import AccordionBenefits"));
check('GalleryBanner imported', src.includes("import GalleryBanner"));
check('TestimonialSpotlight imported', src.includes("import TestimonialSpotlight"));
check('CtaLightRays imported', src.includes("import CtaLightRays"));
check('AccordionFAQ imported', src.includes("import AccordionFAQ"));
check('ScrollReveal imported', src.includes("import ScrollReveal"));
check('BaseLayout imported', src.includes("import BaseLayout"));
check('BrandLogos imported', src.includes("import BrandLogos"));

// ─── 3. COMPONENT USAGE ────────────────────────────────────────────────────
console.log('\n[3] COMPONENT USAGE');
check('<AccordionBenefits used', src.includes('<AccordionBenefits'));
check('<GalleryBanner used', src.includes('<GalleryBanner'));
check('<TestimonialSpotlight used', src.includes('<TestimonialSpotlight'));
check('<CtaLightRays used', src.includes('<CtaLightRays'));
check('<AccordionFAQ used', src.includes('<AccordionFAQ'));
check('<ScrollReveal used', src.includes('<ScrollReveal'));
check('<BrandLogos used', src.includes('<BrandLogos'));

// ─── 4. NO OLD COMPONENTS ──────────────────────────────────────────────────
console.log('\n[4] NO OLD COMPONENTS');
check('No old cam-films section', !src.includes('class="cam-films"'), 'Old film types tab section still present');
check('No old cam-masonry section', !src.includes('class="cam-masonry"'), 'Old masonry gallery still present');
check('No old cam-testimonials section', !src.includes('class="cam-testimonials"'), 'Old testimonial grid still present');
check('No old cam-cinematic-cta section', !src.includes('class="cam-cinematic-cta"'), 'Old cinematic CTA still present');
check('No old ip-faq section', !src.includes('class="ip-faq"'), 'Old FAQ accordion still present');
check('No old Benefits import', !src.includes("import Benefits from"), 'Old Benefits component import still present');

// ─── 5. CONTENT POLICY ─────────────────────────────────────────────────────
console.log('\n[5] CONTENT POLICY');
const policyTerms = [
  'per sq ft', 'per square foot',
  '$5–$9', '$6–$10', '$7–$12', '$4–$6',
  '$5-$9', '$6-$10', '$7-$12', '$4-$6',
  '$400–$900', '$400-$900',
];
let policyClean = true;
for (const term of policyTerms) {
  if (visible.toLowerCase().includes(term.toLowerCase())) {
    check(`No "${term}"`, false, 'Found in page content');
    policyClean = false;
  }
}
if (policyClean) check('No per-sq-ft pricing violations', true);
check('No time estimates', !/\d+-\d+\s*(min|hour|hr)/i.test(visible), '', true);
check('No automotive content', !/\b(car|vehicle|automobile)\b|auto\s*tint/i.test(visible), '', true);
check('No "bulletproof" claims', !/bullet.?proof/i.test(visible), '', true);

// ─── 6. SEO ────────────────────────────────────────────────────────────────
console.log('\n[6] SEO');
const titleMatch = src.match(/const title = '([^']+)'/);
const descMatch = src.match(/const description = '([^']+)'/);
const title = titleMatch ? titleMatch[1] : '';
const desc = descMatch ? descMatch[1] : '';

check('Meta title present', title.length > 0);
check(`Meta title ≤60 chars (${title.length})`, title.length <= 60, title);
check('Meta description present', desc.length > 0);
check(`Meta desc ≤160 chars (${desc.length})`, desc.length <= 160, `${desc.length} chars`);
check('Keyword in first 10 words of desc', /window film/i.test((desc.split(' ').slice(0, 10).join(' '))));

// H1
const h1Raw = (src.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || ['', ''])[1];
const h1Text = h1Raw.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
const h1Count = (src.match(/<h1\b/gi) || []).length;
check('Exactly 1 H1', h1Count === 1, `Found ${h1Count}`);
check(`H1 ≤60 chars (${h1Text.length})`, h1Text.length <= 60, h1Text);
check('H1 contains "window film"', /window film/i.test(h1Text));
check('H1 different from title tag', h1Text !== title);

// Heading hierarchy — H1 before H2, H2 before H3
const h1Pos = src.indexOf('<h1');
const h2Pos = src.indexOf('<h2');
const h3Pos = src.indexOf('<h3');
check('H1 appears before H2', h1Pos < h2Pos && h1Pos !== -1);
if (h3Pos !== -1) {
  check('H2 appears before H3', h2Pos < h3Pos && h2Pos !== -1);
}

// H2 count
const h2Count = (src.match(/<h2\b/gi) || []).length;
check('Multiple H2s (≥8)', h2Count >= 8, `Found ${h2Count}`);

// Keyword density — city pages have GEO keyword lists that inflate this
const kwCount = (visible.toLowerCase().match(/window film/g) || []).length;
const density = (kwCount / visibleWords * 100);
check(`Keyword density 0.5–2.5% (${density.toFixed(2)}%)`, density >= 0.5 && density <= 2.5, `${kwCount} in ${visibleWords} words`);

// Canonical
check('Canonical URL present', src.includes(`canonical="https://www.windowfilmphiladelphia.net${pageUrlPath}"`));

// ─── 7. INTERNAL LINKS ─────────────────────────────────────────────────────
console.log('\n[7] INTERNAL LINKS');
const internalLinks = [...new Set((src.match(/href="(\/(?:benefits|services|cities)\/[^"]+)"/g) || []))];
check(`4+ internal links (${internalLinks.length})`, internalLinks.length >= 4, internalLinks.join(', '));
const benefitsLinks = internalLinks.filter(l => l.includes('/benefits/'));
check(`2+ /benefits/ links (${benefitsLinks.length})`, benefitsLinks.length >= 2, benefitsLinks.join(', '));
check('Contact link present', src.includes('href="/contact/"'));
// No duplicate internal link URLs
const allInternal = (src.match(/href="(\/(?:benefits|services|cities)\/[^"]+)"/g) || []);
const intDupes = allInternal.filter((v, i, a) => a.indexOf(v) !== i);
check('No repeated internal link URLs', intDupes.length === 0, intDupes.join(', '));

// ─── 8. EXTERNAL LINKS ─────────────────────────────────────────────────────
console.log('\n[8] EXTERNAL LINKS');
const externalLinks = [...new Set((src.match(/href="(https:\/\/[^"]+)"/g) || [])
  .filter(l => !l.includes('schema.org') && !l.includes('google.com/maps')))];
check('At least 1 external link', externalLinks.length >= 1, externalLinks.join(', '));
const extDupes = externalLinks.filter((v, i, a) => a.indexOf(v) !== i);
check('No repeated external link URLs', extDupes.length === 0, extDupes.join(', '));

// ─── 9. GEO BLOCK ──────────────────────────────────────────────────────────
console.log('\n[9] GEO BLOCK');
check('GEO block present', src.includes('aria-hidden="true"') && src.includes('geo'));
check('GEO display:none in CSS', css.includes('display: none') || css.includes('display:none'));
const geoMatch = src.match(/class="[^"]*geo[^"]*"[^>]*>([\s\S]*?)<\/div>/);
const geoContent = geoMatch ? geoMatch[1] : '';
check('GEO has <p> paragraph', geoContent.includes('<p>'));
check('GEO paragraph 50+ words', (geoMatch && (geoMatch[1].replace(/<[^>]+>/g, '').split(/\s+/).filter(Boolean).length >= 50)) || false, '', true);
check('GEO has <dl> Q&A', geoContent.includes('<dl>'));
const dtCount = (geoContent.match(/<dt>/g) || []).length;
check(`GEO has ≥5 <dt> Q&A (${dtCount})`, dtCount >= 5);
const liCount = (geoContent.match(/<li>/g) || []).length;
check(`GEO has ≥12 <li> keyword variants (${liCount})`, liCount >= 12);
check('GEO mentions city name', geoContent.toLowerCase().includes(slug.replace(/-/g, ' ')));

// ─── 10. SCHEMA ────────────────────────────────────────────────────────────
console.log('\n[10] SCHEMA');
check('pageSchemas defined in frontmatter', src.includes('const pageSchemas'));
check('schemas prop passed to BaseLayout', src.includes('schemas={pageSchemas}'));
check('BreadcrumbList schema', src.includes("'BreadcrumbList'") || src.includes('"BreadcrumbList"'));
check('WebPage schema', src.includes("'WebPage'") || src.includes('"WebPage"'));
check('dateModified dynamic', src.includes('new Date().toISOString()'));
check('No hardcoded dateModified', !/dateModified.*"20\d\d-\d\d-\d\d"/.test(src));
check('No inline ld+json scripts', !src.includes('<script type="application/ld+json">'));
check('faqItems passed to BaseLayout', src.includes('faqItems={faqItems}'));
check('Speakable cssSelector present', src.includes('SpeakableSpecification') || src.includes('speakable'));

// Verify built HTML has schema
if (builtHtml) {
  const scriptBlocks = [...builtHtml.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  check(`Schema blocks in HTML (found ${scriptBlocks.length})`, scriptBlocks.length >= 4, `${scriptBlocks.length} found`);
  let parseErrors = 0;
  const foundTypes = [];
  for (const [, content] of scriptBlocks) {
    try {
      const obj = JSON.parse(content.trim());
      foundTypes.push(obj['@type']);
    } catch {
      parseErrors++;
    }
  }
  check('All schemas valid JSON', parseErrors === 0, `${parseErrors} parse error(s)`);
  // BaseLayout auto-generates: LocalBusiness, FAQPage, Service, (HowTo)
  // pageSchemas provides: BreadcrumbList, WebPage
  check('Schema: LocalBusiness', foundTypes.includes('LocalBusiness'));
  check('Schema: FAQPage', foundTypes.includes('FAQPage'));
  check('Schema: BreadcrumbList', foundTypes.includes('BreadcrumbList'));
  check('Schema: WebPage', foundTypes.includes('WebPage'));
}

// ─── 11. IMAGES ───────────────────────────────────────────────────────────
console.log('\n[11] IMAGES');
const imgTags = src.match(/<img [^>]*>/g) || [];
check(`Images present (${imgTags.length})`, imgTags.length > 0);

// All have alt
const imgsNoAlt = imgTags.filter(t => !t.includes('alt='));
check('All images have alt text', imgsNoAlt.length === 0, `${imgsNoAlt.length} missing`);

// All have title
const imgsNoTitle = imgTags.filter(t => !t.includes('title='));
check('All images have title attr', imgsNoTitle.length === 0, `${imgsNoTitle.length} missing`);

// All image files exist on disk
const imgRefs = [...new Set((src.match(/src="\/images\/([^"]+)"/g) || []).map(m => m.replace('src="/images/', '').replace('"', '')))];
let missingImgs = [];
for (const img of imgRefs) {
  const imgPath = path.join(ROOT, 'public/images', img);
  if (!fs.existsSync(imgPath)) missingImgs.push(img);
}
check(`All images on disk (${imgRefs.length - missingImgs.length}/${imgRefs.length})`, missingImgs.length === 0, missingImgs.join(', '));

// Keyword-rich filenames — no generic short codes
const shortImgs = imgRefs.filter(f => /^[a-z]{2,3}-[a-z0-9]\./.test(f) || f.length < 20);
check('No short-code filenames', shortImgs.length === 0, shortImgs.slice(0, 5).join(', '));
const kwImgs = imgRefs.filter(f => /window.film|film|camden|solar|security|privacy|decorative|graffiti|uv|glare|energy|safety|brand|gallery|testimonial|hero/i.test(f));
check(`≥10 keyword-rich filenames (${kwImgs.length})`, kwImgs.length >= 10, `${kwImgs.length} found`);

// No duplicate image src
const imgSrcList = (src.match(/src="\/images\/([^"]+)"/g) || []).map(m => m.replace('src="/images/', '').replace('"', ''));
const imgDupes = imgSrcList.filter((v, i, a) => a.indexOf(v) !== i);
check('No duplicate images', imgDupes.length === 0, [...new Set(imgDupes)].join(', '));

// ─── 12. NO LEFTOVER CAMDEN CONTENT ────────────────────────────────────────
console.log('\n[12] NO LEFTOVER SOURCE CONTENT');
// If this is NOT the camden page, make sure no Camden-specific text leaked
if (slug !== 'camden') {
  const camdenTerms = ['Camden', 'Cramer Hill', 'Cooper University', 'Ben Franklin Bridge', 'Rutgers-Camden', 'Federal Street', 'Broadway'];
  let camdenLeak = [];
  for (const term of camdenTerms) {
    // Check visible body (not in CSS class names or image filenames)
    if (visible.includes(term)) camdenLeak.push(term);
  }
  check('No Camden-specific text leaked', camdenLeak.length === 0, camdenLeak.join(', '));

  // ─── 12b. CONTENT UNIQUENESS (not just city-name swaps) ───────────────
  console.log('\n[12b] CONTENT UNIQUENESS (vs camden.astro)');
  const camdenPath = path.join(ROOT, 'src/pages/cities/camden.astro');
  if (fs.existsSync(camdenPath)) {
    const camdenSrc = fs.readFileSync(camdenPath, 'utf8');

    // Compare H2 headings — normalize by removing city names and state abbrevs
    const normalize = (s) => s.replace(/Camden|Philadelphia|Cherry Hill|Newark|Voorhees|Haddonfield|Collingswood|Pennsauken|Merchantville|Maple Shade|Trenton|Atlantic City|Reading|Upper Darby/g, 'CITY').replace(/NJ|PA/g, 'ST').replace(/South Jersey|Delaware Valley/g, 'REGION').trim();
    const camdenH2s = (camdenSrc.match(/<h2[^>]*>([\s\S]*?)<\/h2>/g) || []).map(h => normalize(h.replace(/<[^>]+>/g, '').trim())).filter(h => h.length > 5);
    const pageH2s = (src.match(/<h2[^>]*>([\s\S]*?)<\/h2>/g) || []).map(h => normalize(h.replace(/<[^>]+>/g, '').trim())).filter(h => h.length > 5);
    let dupH2s = [];
    for (const h of pageH2s) {
      if (camdenH2s.includes(h)) dupH2s.push(h);
    }
    check('No H2 headings match Camden (after city-name normalization)', dupH2s.length === 0, `${dupH2s.length} matches: ${dupH2s.slice(0, 3).join(' | ')}`);

    // Compare FAQ questions
    const camdenQs = (camdenSrc.match(/question:\s*'([^']+)'/g) || []).map(q => normalize(q.replace(/question:\s*'/, '').replace(/'$/, '')));
    const pageQs = (src.match(/question:\s*'([^']+)'/g) || []).map(q => normalize(q.replace(/question:\s*'/, '').replace(/'$/, '')));
    let dupQs = [];
    for (const q of pageQs) {
      if (camdenQs.includes(q)) dupQs.push(q);
    }
    check('No FAQ questions match Camden (after normalization)', dupQs.length === 0, `${dupQs.length} matches: ${dupQs.slice(0, 2).join(' | ')}`);

    // Compare testimonial names and quotes (only name: fields in TestimonialSpotlight items array)
    const camdenNames = (camdenSrc.match(/^\s+name:\s*'([^']+)'/gm) || []).map(n => n.replace(/^\s+name:\s*'/, '').replace(/'$/, ''));
    const pageNames = (src.match(/^\s+name:\s*'([^']+)'/gm) || []).map(n => n.replace(/^\s+name:\s*'/, '').replace(/'$/, ''));
    let dupNames = [];
    for (const n of pageNames) {
      if (camdenNames.includes(n)) dupNames.push(n);
    }
    check('No testimonial names match Camden', dupNames.length === 0, dupNames.join(', '));

    const camdenQuotes = (camdenSrc.match(/quote:\s*'([^']+)'/g) || []).map(q => normalize(q.slice(0, 80)));
    const pageQuotes = (src.match(/quote:\s*'([^']+)'/g) || []).map(q => normalize(q.slice(0, 80)));
    let dupQuotes = [];
    for (const q of pageQuotes) {
      if (camdenQuotes.includes(q)) dupQuotes.push(q.slice(0, 50));
    }
    check('No testimonial quotes match Camden (after normalization)', dupQuotes.length === 0, `${dupQuotes.length} matches`);

    // Compare component prop headings only (title= and heading= on component tags, not img title=, iframe title=, or schema name:)
    const camdenProps = (camdenSrc.match(/^\s+(?:title|heading)="([^"]+)"/gm) || []).map(p => normalize(p.replace(/^\s+(?:title|heading)="/, '').replace(/"$/, ''))).filter(p => !p.includes('service area map') && !p.includes('City of'));
    const pageProps = (src.match(/^\s+(?:title|heading)="([^"]+)"/gm) || []).map(p => normalize(p.replace(/^\s+(?:title|heading)="/, '').replace(/"$/, ''))).filter(p => !p.includes('service area map') && !p.includes('City of'));
    let dupProps = [];
    for (const p of pageProps) {
      if (camdenProps.includes(p) && p.length > 10) dupProps.push(p);
    }
    check('No component prop headings match Camden (after normalization)', dupProps.length === 0, `${dupProps.length} matches: ${dupProps.slice(0, 2).join(' | ')}`);
  }
} else {
  check('Camden page (skip leak check)', true);
}

// ─── 13. CSS — NO BLUE ────────────────────────────────────────────────────
console.log('\n[13] COLORS — NO BLUE');
const blueColors = ['#0d1b2a', '#12293f', '#162e4d', 'rgba(13,27,42', 'rgba(18,41,63'];
for (const c of blueColors) {
  check(`No blue ${c}`, !css.includes(c), '', true);
}

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

if (failed > 0) {
  console.log('\n⚠️  Fix all failures above before committing.');
  console.log('    If a sub-agent built this page, send the failures back for revision.');
}

process.exit(failed > 0 ? 1 : 0);
