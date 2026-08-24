#!/usr/bin/env node
// Definitive usage audit: scan the BUILT output (dist/) HTML + other text assets
// for /images/... references. This resolves every dynamic path, component prop,
// and content-collection loop into concrete final URLs — the ground truth for
// "used on the frontend". Then diff against files on disk in public/images.

import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join, relative, extname, basename } from 'node:path';

const ROOT = process.cwd();
const IMG_DIR = join(ROOT, 'public/images');
const DIST = join(ROOT, 'dist');

const IMG_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp', '.svg', '.avif', '.gif']);
// Text files in dist to scan for references
const TEXT_EXT = new Set(['.html', '.xml', '.txt', '.json', '.css', '.js', '.md']);

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

// 1. Collect referenced image paths from dist text output.
// Match /images/<path>.<ext> including subdirs, stop at quote/space/paren/?#.
const refRe = /\/images\/[^"'`)\s?#>]+\.(?:jpg|jpeg|png|webp|svg|avif|gif)/gi;
const referenced = new Set(); // stored as path relative to public/images (no leading /images/)

let distTextFiles = 0;
for (const f of walk(DIST)) {
  if (!TEXT_EXT.has(extname(f).toLowerCase())) continue;
  distTextFiles++;
  const txt = readFileSync(f, 'utf8');
  let m;
  while ((m = refRe.exec(txt)) !== null) {
    let p = m[0].replace(/^\/images\//, '');
    // decode %20 etc.
    try { p = decodeURIComponent(p); } catch {}
    referenced.add(p);
  }
}

// 2. Actual image files on disk
const allImages = walk(IMG_DIR)
  .filter(f => IMG_EXT.has(extname(f).toLowerCase()))
  .map(f => relative(IMG_DIR, f).split('\\').join('/'));

const onDisk = new Set(allImages);

// 3. Classify
const used = [];
const unused = [];
for (const rel of allImages) {
  if (referenced.has(rel)) used.push(rel); else unused.push(rel);
}

// 3b. Referenced-but-missing (broken links pointing at files not on disk)
const missing = [...referenced].filter(r => !onDisk.has(r)).sort();

// 4. Sizes
function sizeOf(rel) { try { return statSync(join(IMG_DIR, rel)).size; } catch { return 0; } }
const sum = arr => arr.reduce((a, r) => a + sizeOf(r), 0);
const mb = b => (b / 1048576).toFixed(1);

function byExt(arr) {
  const m = {};
  for (const r of arr) { const e = extname(r).toLowerCase(); m[e] = (m[e]||0)+1; }
  return Object.entries(m).sort((a,b)=>b[1]-a[1]).map(([e,c])=>`${e}:${c}`).join('  ');
}

console.log('=== DIST-BASED IMAGE USAGE AUDIT (ground truth) ===');
console.log(`Dist text files scanned:    ${distTextFiles}`);
console.log(`Distinct /images refs found:${referenced.size}`);
console.log(`Total images on disk:       ${allImages.length}  (${mb(sum(allImages))} MB)`);
console.log(`  USED (in built HTML):     ${used.length}  (${mb(sum(used))} MB)`);
console.log(`  UNUSED (never referenced):${unused.length}  (${mb(sum(unused))} MB)`);
console.log(`  Referenced but MISSING:   ${missing.length}`);
console.log('');
console.log('USED by ext:   ', byExt(used));
console.log('UNUSED by ext: ', byExt(unused));
if (missing.length) {
  console.log('');
  console.log('MISSING (referenced in HTML, not on disk):');
  missing.slice(0, 40).forEach(m => console.log('  ' + m));
  if (missing.length > 40) console.log(`  ...and ${missing.length-40} more`);
}

writeFileSync(join(ROOT, 'scripts/images-used-dist.txt'), used.sort().join('\n') + '\n');
writeFileSync(join(ROOT, 'scripts/images-unused-dist.txt'), unused.sort().join('\n') + '\n');
writeFileSync(join(ROOT, 'scripts/images-missing-dist.txt'), missing.join('\n') + '\n');
console.log('');
console.log('Wrote scripts/images-{used,unused,missing}-dist.txt');
