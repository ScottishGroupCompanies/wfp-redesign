#!/usr/bin/env node
// benefits-layout-a-checker.cjs
// Usage: node scripts/benefits-layout-a-checker.cjs --slug decorative-film --prefix dc
const fs = require('fs'), path = require('path');
const args = process.argv.slice(2);
const slug = args[args.indexOf('--slug') + 1];
const prefix = args[args.indexOf('--prefix') + 1];
if (!slug || !prefix) { console.error('Usage: --slug <slug> --prefix <prefix>'); process.exit(1); }
const ROOT = path.join(__dirname, '..');
const pagePath = path.join(ROOT, 'src/pages/benefits/' + slug + '.astro');
const builtPath = path.join(ROOT, 'dist/benefits/' + slug + '/index.html');
if (!fs.existsSync(pagePath)) { console.error('Page not found: ' + pagePath); process.exit(1); }
const src = fs.readFileSync(pagePath, 'utf8');
const builtHtml = fs.existsSync(builtPath) ? fs.readFileSync(builtPath, 'utf8') : null;
let passed = 0, failed = 0;
const failures = [], warnings = [];
function check(label, ok, detail, warn) {
  detail = detail || ''; warn = warn || false;
  if (ok) { console.log('  OK ' + label + (detail ? ' -- ' + detail : '')); passed++; }
  else {
    var msg = label + (detail ? ' -- ' + detail : '');
    if (warn) { console.log('  WARN ' + msg); warnings.push(msg); }
    else { console.log('  FAIL ' + msg); failed++; failures.push(msg); }
  }
}
var visible = src.replace(/<script[\s\S]*?<\/script>/gi,' ').replace(/<style[\s\S]*?<\/style>/gi,' ').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
var visibleWords = visible.split(/\s+/).length;
var css = (src.match(/<style>([\s\S]*?)<\/style>/) || ['',''])[1];
console.log('\n[1] BUILD');
check('Built HTML exists', !!builtHtml, builtHtml ? '' : 'Run npm run build first');
console.log('\n[2] LAYOUT A COMPONENTS');
var components = [['Hero Subpage','hs__title'],['Accordion Vertical','accv__panel'],['Bento Grid','bgp__grid'],['Accordion Benefits','accb__wrap'],['Before/After','before-after__frame'],['WWD Panels','wwd__panel'],['Gallery Banner','gallery-banner--light'],['Testimonial Stack','tstack__deck'],['Process Roadmap','prm__map'],['FAQ','faq__list'],['CTA Avatars','ctav__stack']];
for (var ci = 0; ci < components.length; ci++) check('CSS: ' + components[ci][0], css.includes(components[ci][1]));
console.log('\n[3] HERO');
check('Library hero (hs)', src.includes('class="hs"'));
check('No old ag-hero', !src.includes('class="ag-hero"'));
check('Hero bg image', src.includes('class="hs__bg"'));
check('Contact linked', src.includes('href="/contact/"'));
console.log('\n[4] H1 + META');
var title = (src.match(/const title = ['"]([^'"]+)['"]/) || [])[1] || '';
check('Title <=60', title.length > 0 && title.length <= 60, title.length + ' chars');
check('window film in title', /window film/i.test(title));
check('Philadelphia in title', /philadelphia/i.test(title));
check('No Philly abbrev', !/philly/i.test(title));
var desc = (src.match(/const description = ['"]([^'"]+)['"]/) || [])[1] || '';
check('Desc <=160', desc.length > 0 && desc.length <= 160, desc.length + ' chars');
check('KW in desc', /window film/i.test(desc));
check('KW near desc start', /^[^.]{0,30}window film/i.test(desc.trim()));
var h1raw = (src.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || '';
var h1 = h1raw.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
check('H1 <=60', h1.length > 0 && h1.length <= 60, '"' + h1 + '" (' + h1.length + ')');
check('KW in H1', /window film/i.test(h1));
check('Philadelphia in H1', /philadelphia/i.test(h1));
console.log('\n[5] KEYWORD DENSITY');
var kw = (visible.match(/window film/gi) || []).length;
var density = kw / visibleWords * 100;
check('Density 0.5-1.5%', density >= 0.5 && density <= 1.5, density.toFixed(3) + '% (' + kw + ' in ' + visibleWords + ' visible words)');
console.log('\n[6] IMAGE FILENAMES');
var imgSrcs = [];
var imgRe = /src="\/images\/([^"]+\.jpg)"/g; var imgM;
while ((imgM = imgRe.exec(src)) !== null) imgSrcs.push(imgM[1]);
var shortImgs = imgSrcs.filter(function(f){ return /^[a-z]{2,3}-[a-z]/.test(f) && f.length < 30; });
check('No short-code filenames', shortImgs.length === 0, shortImgs.slice(0,3).join(', '));
var kwImgs = imgSrcs.filter(function(f){ return /window.film|film.philadelphia/i.test(f); });
check('>=10 keyword-rich filenames', kwImgs.length >= 10, kwImgs.length + ' found');
console.log('\n[7] COLORS (no navy)');
var navyColors = ['#0d1b2a','#12293f','#162e4d','rgba(13,27,42','rgba(18,41,63'];
for (var ni = 0; ni < navyColors.length; ni++) check('No navy: ' + navyColors[ni], !css.includes(navyColors[ni]));
console.log('\n[8] HEADINGS');
var h2re = /<h2[^>]*>([\s\S]*?)<\/h2>/g; var h2m; var h2s = [];
while ((h2m = h2re.exec(src)) !== null) h2s.push(h2m[1].replace(/<[^>]+>/g,'').trim());
var numWords = ['Three','Four','Five','Six','Seven','Eight'];
for (var nwi = 0; nwi < numWords.length; nwi++) { var hit = h2s.find(function(h){ return h.includes(numWords[nwi]); }); check('No "' + numWords[nwi] + '" in H2', !hit, hit || ''); }
check('H1 before H2', src.indexOf('<h1') < src.indexOf('<h2'));
check('CTA not glass-only', !src.includes('Protect Your Philadelphia Glass') || slug.includes('glass'));
console.log('\n[9] LINKS');
var hrefRe = /href="(\/[^"#]+)"/g; var hm; var hset = new Set();
while ((hm = hrefRe.exec(src)) !== null) hset.add(hm[1]);
var intLinks = Array.from(hset);
var extLinks = src.match(/href="https?:\/\/[^"]+"/g) || [];
check('>=2 internal links', intLinks.length >= 2, intLinks.length + ' found');
check('Contact linked', intLinks.some(function(l){ return l.includes('/contact'); }));
check('External link', extLinks.length >= 1, extLinks.length + ' found');
console.log('\n[10] IMAGES');
var imgs = src.match(/<img[^>]+>/g) || [];
var noTitle = imgs.filter(function(t){ return !t.includes('title='); });
var noAlt = imgs.filter(function(t){ return !t.includes('alt='); });
check('All imgs: title', noTitle.length === 0, noTitle.length + ' missing');
check('All imgs: alt', noAlt.length === 0, noAlt.length + ' missing');
check('Before image', src.includes('-before.jpg'));
check('After image', src.includes('-after.jpg'));
console.log('\n[10b] RESOURCES SECTION');
check('res-section present', src.includes('class="res-section"'));
check('res-section CSS', css.includes('res-section'));
var pdfLinks = src.match(/href="\/resources\/[^"]+\.pdf"/g) || [];
check('>=3 PDF resources', pdfLinks.length >= 3, pdfLinks.length + ' found');
var badPdfs = pdfLinks.filter(function(l){ var f=l.match(/\/resources\/([^"]+\.pdf)/); return f&&(!/%PDF/i.test(f[1]))&&(require('fs').existsSync(require('path').join(ROOT,'public/resources',f[1]))?require('fs').readFileSync(require('path').join(ROOT,'public/resources',f[1])).slice(0,5).toString()!=='%PDF-':false); });
for (var pi = 0; pi < pdfLinks.length; pi++) {
  var pfname = (pdfLinks[pi].match(/\/resources\/([^"]+\.pdf)/) || [])[1];
  if (!pfname) continue;
  var pfpath = require('path').join(ROOT,'public/resources',pfname);
  var pfexists = require('fs').existsSync(pfpath);
  check('PDF exists: '+pfname.substring(0,50), pfexists);
  if (pfexists) { var pfmagic = require('fs').readFileSync(pfpath).slice(0,5).toString(); check('PDF valid: '+pfname.substring(0,40), pfmagic.startsWith('%PDF'), pfmagic); }
}
console.log('\n[11] SCHEMA');
check('faqItems defined', src.includes('const faqItems'));
var faqCount = (src.match(/question:/g) || []).length;
check('10 FAQs', faqCount === 10, faqCount + ' found');
check('pageSchemas defined', src.includes('const pageSchemas'));
check('BreadcrumbList', src.includes('"BreadcrumbList"'));
check('WebPage', src.includes('"WebPage"'));
check('ItemList', src.includes('"ItemList"'));
check('Product', src.includes('"Product"'));
check('dateModified dynamic', src.includes('new Date().toISOString()'));
check('No hardcoded date', !/dateModified.*"20\d\d-\d\d-\d\d"/.test(src));
check('No inline ld+json', !src.includes('<script type="application/ld+json">'));
if (builtHtml) { var sc = (builtHtml.match(/application\/ld\+json/g) || []).length; check('>=7 schema in HTML', sc >= 7, sc + ' found'); }
console.log('\n[12] GEO BLOCK');
check('GEO block', src.includes(prefix + '-geo'));
check('GEO hidden', src.includes('display:none'));
check('GEO DL', src.includes('<dl>'));
var dtCount = (src.match(/<dt>/g) || []).length;
check('GEO >=6 DTs', dtCount >= 6, dtCount + ' DTs');
var liCount = (src.match(/<li>/g) || []).length;
check('GEO >=12 LIs', liCount >= 12, liCount + ' LIs');
check('Named entities', /philadelphia|SEPTA|Old City|Center City|Fishtown/i.test(src));
console.log('\n[13] CONTENT POLICY');
check('No time estimates', !/\d+-\d+\s*(min|hour|hr)/.test(src));
check('No per-sq-ft', !/\$\d+.*per\s*(sq|square)\s*foot/.test(src));
check('No automotive', !/\b(car|vehicle|automobile|auto\s*tint|automotive)\b/i.test(src));
check('No bulletproof', !/bullet.?proof/i.test(src));
var line = '-'.repeat(52);
console.log('\n' + line);
console.log('  OK: ' + passed + '  FAIL: ' + failed + '  WARN: ' + warnings.length);
if (failures.length) { console.log('\n  FAILURES:'); failures.forEach(function(f){ console.log('    FAIL ' + f); }); }
if (warnings.length) { console.log('\n  WARNINGS:'); warnings.forEach(function(w){ console.log('    WARN ' + w); }); }
console.log(failed ? '\n  NOT READY TO COMMIT' : '\n  READY TO COMMIT');
process.exit(failed > 0 ? 1 : 0);