// Generate responsive width variants for the 246 renderable large images.
// Widths 640/1024/1536; skip any variant width >= source width (no upscale).
// Output: foo-640.webp beside foo.webp. Resumable (skip existing). q82.
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

sharp.cache(false);
sharp.concurrency(4);

const root = process.cwd();
const publicDir = path.join(root, 'public');
const WIDTHS = [640, 1024, 1536];
const Q = 82;

const need = fs.readFileSync('/tmp/need-variants.tsv','utf8').split('\n').filter(Boolean)
  .map(l=>{const [w,rel]=l.split('\t');return {srcW:+w, rel};});

let made=0, skipExist=0, skipUpscale=0, errors=0;
let i=0;
for (const { srcW, rel } of need) {
  i++;
  const absIn = path.join(publicDir, rel.replace(/^\//,''));
  if (!fs.existsSync(absIn)) { errors++; console.log('MISSING src', rel); continue; }
  for (const w of WIDTHS) {
    if (w >= srcW) { skipUpscale++; continue; }           // don't upscale
    const outRel = rel.replace(/\.webp$/i, `-${w}.webp`);
    const absOut = path.join(publicDir, outRel.replace(/^\//,''));
    if (fs.existsSync(absOut)) { skipExist++; continue; }  // resume
    try {
      await sharp(absIn).resize({ width: w, withoutEnlargement: true }).webp({ quality: Q }).toFile(absOut);
      made++;
    } catch (e) { errors++; console.log('ERR', outRel, e.message); }
  }
  if (i % 50 === 0) console.log(`  ...${i}/${need.length} images processed, ${made} variants made`);
}
console.log('\n=== VARIANT SUMMARY ===');
console.log('variants made      :', made);
console.log('skipped (exists)   :', skipExist);
console.log('skipped (upscale)  :', skipUpscale);
console.log('errors             :', errors);
