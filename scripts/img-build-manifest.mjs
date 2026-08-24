// Build a static manifest: base "/images/foo.webp" -> {variants:[640,1024,...], srcWidth}
// Uses /tmp/need-variants.tsv for source widths (already computed) + disk scan for variants.
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const root = process.cwd();

// source widths from the need list
const srcW = {};
for (const l of fs.readFileSync('/tmp/need-variants.tsv','utf8').split('\n').filter(Boolean)) {
  const [w, rel] = l.split('\t'); srcW[rel] = +w;
}

// scan variant files on disk
const files = execSync('find public/images -type f -name "*-*.webp"', { cwd: root })
  .toString().split('\n').filter(Boolean);

const map = {};
for (const f of files) {
  const rel = '/' + path.relative('public', f);
  const m = rel.match(/^(.*)-(640|1024|1536)\.webp$/);
  if (!m) continue;
  const base = m[1] + '.webp';
  (map[base] = map[base] || []).push(+m[2]);
}

const out = {};
for (const base of Object.keys(map)) {
  out[base] = { variants: [...new Set(map[base])].sort((a,b)=>a-b), srcWidth: srcW[base] || null };
}

fs.mkdirSync(path.join(root,'src/lib'), { recursive: true });
fs.writeFileSync(path.join(root,'src/lib/image-variants.json'), JSON.stringify(out));
console.log('manifest entries:', Object.keys(out).length);
console.log('sample:', JSON.stringify(Object.entries(out).slice(0,3), null, 2));
const noSrc = Object.entries(out).filter(([,v])=>!v.srcWidth).length;
console.log('entries missing srcWidth:', noSrc);
