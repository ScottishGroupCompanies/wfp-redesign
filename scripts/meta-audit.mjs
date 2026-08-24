// Read-only metadata audit over built dist/ HTML.
// Extracts title / description / canonical / og:* / robots per page and flags:
//  - duplicate titles, duplicate descriptions
//  - missing/empty title or description
//  - length problems (title >60 or <20, desc >160 or <70)
//  - canonical missing / non-absolute / not self-referencing
//  - OG gaps
// Emits a summary + writes full details to /tmp/meta-audit.json
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const root = process.cwd();
const SITE = 'https://windowfilmphiladelphia.net';
const files = execSync('find dist -name index.html -type f', { cwd: root }).toString().split('\n').filter(Boolean);

const pick = (html, re) => { const m = html.match(re); return m ? m[1].trim() : null; };
const decode = s => s == null ? s : s
  .replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>')
  .replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&#x27;/g,"'");

function urlOf(f) {
  // dist/foo/bar/index.html -> /foo/bar/
  let p = f.replace(/^dist/, '').replace(/index\.html$/, '');
  if (!p.endsWith('/')) p += '/';
  return p === '' ? '/' : p;
}

const rows = [];
for (const f of files) {
  const html = fs.readFileSync(path.join(root, f), 'utf8');
  const head = html.slice(0, html.indexOf('</head>') + 7);
  rows.push({
    url: urlOf(f),
    title: decode(pick(head, /<title>([\s\S]*?)<\/title>/i)),
    desc: decode(pick(head, /<meta\s+name="description"\s+content="([\s\S]*?)"/i)),
    canonical: pick(head, /<link\s+rel="canonical"\s+href="([\s\S]*?)"/i),
    ogTitle: pick(head, /<meta\s+property="og:title"\s+content="([\s\S]*?)"/i),
    ogDesc: pick(head, /<meta\s+property="og:description"\s+content="([\s\S]*?)"/i),
    ogImage: pick(head, /<meta\s+property="og:image"\s+content="([\s\S]*?)"/i),
    robots: pick(head, /<meta\s+name="robots"\s+content="([\s\S]*?)"/i),
  });
}

// group duplicates (exclude noindex pages from dup penalty)
const indexable = rows.filter(r => !(r.robots || '').includes('noindex'));
function dupMap(key) {
  const m = {};
  for (const r of indexable) {
    const v = (r[key] || '').trim();
    if (!v) continue;
    (m[v] = m[v] || []).push(r.url);
  }
  return Object.entries(m).filter(([,urls]) => urls.length > 1);
}
const dupTitles = dupMap('title');
const dupDescs = dupMap('desc');

const missingTitle = rows.filter(r => !r.title);
const missingDesc = rows.filter(r => !r.desc);
const longTitle = rows.filter(r => r.title && r.title.length > 60);
const shortTitle = rows.filter(r => r.title && r.title.length < 20);
const longDesc = rows.filter(r => r.desc && r.desc.length > 160);
const shortDesc = rows.filter(r => r.desc && r.desc.length < 70);
const canonMissing = rows.filter(r => !r.canonical);
const canonNotAbs = rows.filter(r => r.canonical && !r.canonical.startsWith('http'));
const canonMismatch = rows.filter(r => r.canonical && r.canonical.startsWith(SITE) &&
  r.canonical.replace(SITE,'').replace(/\/$/,'') !== r.url.replace(/\/$/,''));
const ogGaps = rows.filter(r => !r.ogTitle || !r.ogDesc || !r.ogImage);

fs.writeFileSync('/tmp/meta-audit.json', JSON.stringify({ rows, dupTitles, dupDescs }, null, 2));

console.log('=== METADATA AUDIT ===');
console.log('pages audited            :', rows.length, `(indexable: ${indexable.length})`);
console.log('');
console.log('DUPLICATE titles (groups):', dupTitles.length);
console.log('DUPLICATE descriptions   :', dupDescs.length);
console.log('missing title            :', missingTitle.length);
console.log('missing description      :', missingDesc.length);
console.log('title > 60 chars         :', longTitle.length);
console.log('title < 20 chars         :', shortTitle.length);
console.log('desc  > 160 chars        :', longDesc.length);
console.log('desc  < 70 chars         :', shortDesc.length);
console.log('canonical missing        :', canonMissing.length);
console.log('canonical not absolute   :', canonNotAbs.length);
console.log('canonical != page URL    :', canonMismatch.length);
console.log('OG gaps (title/desc/img) :', ogGaps.length);

if (dupTitles.length) {
  console.log('\n--- DUPLICATE TITLE GROUPS ---');
  for (const [t, urls] of dupTitles) { console.log(`\n"${t}"  (${urls.length})`); urls.forEach(u=>console.log('   ', u)); }
}
if (dupDescs.length) {
  console.log('\n--- DUPLICATE DESCRIPTION GROUPS ---');
  for (const [d, urls] of dupDescs) { console.log(`\n"${d.slice(0,80)}..."  (${urls.length})`); urls.forEach(u=>console.log('   ', u)); }
}
if (canonMismatch.length) {
  console.log('\n--- CANONICAL != PAGE URL ---');
  canonMismatch.slice(0,20).forEach(r=>console.log(`  ${r.url}  ->  ${r.canonical}`));
}

console.log('\n--- MISSING FIELDS (which pages) ---');
console.log('no title    :', missingTitle.map(r=>r.url).join(', ') || 'none');
console.log('no desc     :', missingDesc.map(r=>r.url).join(', ') || 'none');
console.log('no canonical:', canonMissing.map(r=>r.url).join(', ') || 'none');
console.log('OG gaps     :', ogGaps.map(r=>r.url).join(', ') || 'none');

console.log('\n--- DESC LENGTH OUTLIERS ---');
console.log('> 160:'); longDesc.forEach(r=>console.log(`  [${r.desc.length}] ${r.url}`));
console.log('< 70:'); shortDesc.forEach(r=>console.log(`  [${r.desc.length}] ${r.url} :: "${r.desc}"`));

console.log('\n--- WORST 15 LONG TITLES (>60) ---');
[...longTitle].sort((a,b)=>b.title.length-a.title.length).slice(0,15)
  .forEach(r=>console.log(`  [${r.title.length}] ${r.url}\n        "${r.title}"`));
