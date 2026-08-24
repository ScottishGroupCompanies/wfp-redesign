// Rewrite image references in src/ from original ext -> .webp,
// but ONLY for files that actually converted (per the convert log).
// Favicon and any non-converted path are left untouched.
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const srcDir = path.join(root, 'src');
const logPath = '/tmp/img-convert-log.tsv';

// Build map: original ref (/images/..jpg) -> webp ref, for CONVERT + DONE only.
const map = new Map();
for (const line of fs.readFileSync(logPath, 'utf8').split('\n')) {
  if (!line) continue;
  const [act, src, dst] = line.split('\t');
  if ((act === 'CONVERT' || act === 'DONE') && src && dst) map.set(src, dst);
}
console.log('convertible refs in map:', map.size);

const textExt = new Set(['.astro','.ts','.tsx','.js','.mjs','.cjs','.json','.md','.mdx','.html','.css']);
function walk(dir, out=[]) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (textExt.has(path.extname(e.name).toLowerCase())) out.push(p);
  }
  return out;
}

const files = walk(srcDir);
let filesChanged = 0, totalReplacements = 0;
const perFile = [];

for (const f of files) {
  let t = fs.readFileSync(f, 'utf8');
  let n = 0;
  // Replace each mapped path. Escape regex specials; ensure the char after the
  // path is a boundary (quote, paren, space, #, ?, end) so we don't clip a longer name.
  for (const [orig, webp] of map) {
    if (!t.includes(orig)) continue;
    const esc = orig.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(esc + '(?=["\'\\)\\s?#>]|$)', 'g');
    t = t.replace(re, (m) => { n++; return webp; });
  }
  if (n > 0) {
    fs.writeFileSync(f, t);
    filesChanged++; totalReplacements += n;
    perFile.push(`${n}\t${path.relative(root, f)}`);
  }
}

console.log('files changed     :', filesChanged);
console.log('total replacements:', totalReplacements);
console.log('\ntop files:');
perFile.sort((a,b)=>parseInt(b)-parseInt(a));
for (const l of perFile.slice(0,25)) console.log('  ', l);
