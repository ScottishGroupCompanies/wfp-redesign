#!/usr/bin/env node
// Reconcile the two audits into a CONSERVATIVE, safe-to-delete set.
// A file is "safe to delete" only if BOTH are true:
//   (a) it never appears in built dist/ output, AND
//   (b) its basename appears nowhere in src/ (catches CSS url() in <style>
//       blocks, data files, and anything Astro processes so the literal URL
//       doesn't survive into final HTML).
// Anything referenced in src/ but absent from dist is KEPT and reported
// separately (likely CSS background-images, or refs on routes worth a look).

import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join, relative, extname, basename } from 'node:path';

const ROOT = process.cwd();
const IMG_DIR = join(ROOT, 'public/images');

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out); else out.push(p);
  }
  return out;
}

// Build one big src/ text blob
const TEXT_EXT = new Set(['.astro','.ts','.tsx','.js','.mjs','.jsx','.md','.mdx','.json','.html','.css','.vue','.svelte']);
let src = '';
for (const f of walk(join(ROOT, 'src'))) {
  if (TEXT_EXT.has(extname(f).toLowerCase())) src += '\n' + readFileSync(f, 'utf8');
}

const unusedDist = readFileSync(join(ROOT,'scripts/images-unused-dist.txt'),'utf8')
  .split('\n').map(s=>s.trim()).filter(Boolean);

function refInSrc(rel) {
  const base = basename(rel);
  const esc = base.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  return new RegExp('[/"\'`(\\s]'+esc+'(?=["\'`)\\s?#]|$)').test(src);
}

const safeDelete = [];
const keepCssRef = [];   // unused in dist but referenced in src (keep!)
for (const rel of unusedDist) {
  if (refInSrc(rel)) keepCssRef.push(rel); else safeDelete.push(rel);
}

function sizeOf(rel){try{return statSync(join(IMG_DIR,rel)).size;}catch{return 0;}}
const sum=a=>a.reduce((x,r)=>x+sizeOf(r),0);
const mb=b=>(b/1048576).toFixed(1);
function byExt(a){const m={};for(const r of a){const e=extname(r).toLowerCase();m[e]=(m[e]||0)+1;}return Object.entries(m).sort((x,y)=>y[1]-x[1]).map(([e,c])=>`${e}:${c}`).join('  ');}

console.log('=== RECONCILED SAFE-TO-DELETE SET ===');
console.log(`Unused in dist:                 ${unusedDist.length}  (${mb(sum(unusedDist))} MB)`);
console.log(`  → also unref in src (DELETE): ${safeDelete.length}  (${mb(sum(safeDelete))} MB)`);
console.log(`  → but referenced in src (KEEP):${keepCssRef.length}  (${mb(sum(keepCssRef))} MB)`);
console.log('');
console.log('SAFE-TO-DELETE by ext: ', byExt(safeDelete));
console.log('KEEP(css/src-ref) by ext:', byExt(keepCssRef));
console.log('');
console.log('Sample of KEEP-because-src-referenced (likely CSS background-image):');
keepCssRef.slice(0,20).forEach(r=>console.log('  '+r));

writeFileSync(join(ROOT,'scripts/images-safe-to-delete.txt'), safeDelete.sort().join('\n')+'\n');
writeFileSync(join(ROOT,'scripts/images-keep-src-ref.txt'), keepCssRef.sort().join('\n')+'\n');
console.log('');
console.log('Wrote scripts/images-safe-to-delete.txt and scripts/images-keep-src-ref.txt');
