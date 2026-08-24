#!/usr/bin/env node
// Image usage audit: which files in public/images are referenced anywhere the
// frontend could resolve them. Strategy: gather ALL text from src/ (+ a few root
// configs that can reference images) into one big blob, then for each file on
// disk under public/images, test whether its basename appears literally in that
// blob. This catches string literals, data-file entries, content collections,
// and variable-interpolated paths (since the literal basename still lives in a
// data/const somewhere in src/).

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, extname, basename } from 'node:path';

const ROOT = process.cwd();
const IMG_DIR = join(ROOT, 'public/images');

// ---- 1. Collect all source text that could reference an image ----
const SRC_DIRS = ['src'];
// Root-level files that legitimately reference images at build/deploy time.
const EXTRA_FILES = ['astro.config.mjs', 'astro.config.ts', 'vercel.json'];
const TEXT_EXT = new Set([
  '.astro', '.ts', '.tsx', '.js', '.mjs', '.jsx', '.md', '.mdx',
  '.json', '.html', '.css', '.vue', '.svelte',
]);

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

let blob = '';
const scannedFiles = [];
for (const d of SRC_DIRS) {
  const abs = join(ROOT, d);
  for (const f of walk(abs)) {
    if (TEXT_EXT.has(extname(f).toLowerCase())) {
      blob += '\n' + readFileSync(f, 'utf8');
      scannedFiles.push(relative(ROOT, f));
    }
  }
}
for (const f of EXTRA_FILES) {
  const p = join(ROOT, f);
  try { blob += '\n' + readFileSync(p, 'utf8'); scannedFiles.push(f); } catch {}
}

// ---- 2. List all image files on disk ----
const IMG_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp', '.svg', '.avif', '.gif']);
const allImages = walk(IMG_DIR)
  .filter(f => IMG_EXT.has(extname(f).toLowerCase()))
  .map(f => relative(IMG_DIR, f)); // path relative to public/images

// ---- 3. For each image, is its basename referenced? ----
// We test the basename (filename only) because refs use /images/foo.jpg OR
// subdir paths /images/blog/foo.jpg — basename match is the safe superset.
// To avoid false "used" from a short basename being a substring of another,
// we require the basename to appear as a whole token (bounded by non-filename chars).
const used = [];
const unused = [];

for (const rel of allImages) {
  const base = basename(rel);
  // Escape regex specials in filename
  const esc = base.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // Whole-token match: preceded by / or quote or start, followed by quote/space/) etc.
  const re = new RegExp('[/"\'`(\\s]' + esc + '(?=["\'`)\\s?#]|$)');
  if (re.test(blob)) used.push(rel);
  else unused.push(rel);
}

// ---- 4. Size accounting ----
function sizeOf(rel) {
  try { return statSync(join(IMG_DIR, rel)).size; } catch { return 0; }
}
const sum = arr => arr.reduce((a, r) => a + sizeOf(r), 0);
const mb = b => (b / 1048576).toFixed(1);

const usedBytes = sum(used);
const unusedBytes = sum(unused);

console.log('=== IMAGE USAGE AUDIT ===');
console.log(`Source files scanned:       ${scannedFiles.length}`);
console.log(`Total images on disk:       ${allImages.length}`);
console.log(`  USED (referenced):        ${used.length}  (${mb(usedBytes)} MB)`);
console.log(`  UNUSED (no reference):    ${unused.length}  (${mb(unusedBytes)} MB)`);
console.log('');

// Breakdown by extension for used/unused
function byExt(arr) {
  const m = {};
  for (const r of arr) { const e = extname(r).toLowerCase(); m[e] = (m[e]||0)+1; }
  return Object.entries(m).sort((a,b)=>b[1]-a[1]).map(([e,c])=>`${e}:${c}`).join('  ');
}
console.log('USED by ext:   ', byExt(used));
console.log('UNUSED by ext: ', byExt(unused));

// Write manifests for review
import { writeFileSync } from 'node:fs';
writeFileSync(join(ROOT, 'scripts/images-used.txt'), used.sort().join('\n') + '\n');
writeFileSync(join(ROOT, 'scripts/images-unused.txt'), unused.sort().join('\n') + '\n');
console.log('');
console.log('Wrote scripts/images-used.txt and scripts/images-unused.txt');
