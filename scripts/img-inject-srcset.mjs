// Inject srcset + sizes into LITERAL <img src="/images/....webp"> tags whose src
// is one of the 134 large <img>-wired images. Skips tags that already have srcset.
// sizes policy inferred from class/context:
//   full-bleed (class has bg|hero|slider|__bg|cover|prop-slider) -> 100vw
//   otherwise -> content default
// Writes changes in place; prints a per-file + per-image report. DRY-RUN by default.
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const DRY = !process.argv.includes('--apply');

// large <img>-wired set
const wired = new Set(
  fs.readFileSync('/tmp/large-imgwired.tsv','utf8').split('\n').filter(Boolean)
    .map(l => l.split('\t')[1])
);
// manifest: which have variants (only inject if variants exist)
const manifest = JSON.parse(fs.readFileSync(path.join(root,'src/lib/image-variants.json'),'utf8'));

const SIZES_CONTENT = '(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px';
const SIZES_FULL = '100vw';
const FULLBLEED_RE = /(class|className)="[^"]*(hero|slider|__bg|-bg\b|cover|prop-slider|full-bleed)[^"]*"/i;
// images we never want to touch (site logo, etc. — fixed tiny display, no srcset benefit)
const EXCLUDE = new Set(['/images/logo.webp']);

function srcsetFor(src) {
  const e = manifest[src];
  if (!e) return '';
  const parts = e.variants.map(w => `${src.replace(/\.webp$/i,`-${w}.webp`)} ${w}w`);
  if (e.srcWidth) parts.push(`${src} ${e.srcWidth}w`);
  return parts.join(', ');
}

// Decide sizes for a tag: fixed width="N" -> that px; full-bleed -> 100vw; else content
function sizesFor(tag) {
  const wm = tag.match(/\bwidth="(\d+)"/);
  if (wm) {
    const px = parseInt(wm[1], 10);
    // responsive-safe: cap the intrinsic display width, allow full width on small screens
    return `(max-width: ${px}px) 100vw, ${px}px`;
  }
  if (FULLBLEED_RE.test(tag)) return SIZES_FULL;
  return SIZES_CONTENT;
}

// walk pages + components (literal tags live mostly in pages)
const exts = new Set(['.astro','.html','.mdx']);
function walk(d,o=[]){for(const e of fs.readdirSync(d,{withFileTypes:true})){const p=path.join(d,e.name);e.isDirectory()?walk(p,o):exts.has(path.extname(e.name).toLowerCase())&&o.push(p);}return o;}
const files = walk(path.join(root,'src'));

const imgTagRe = /<img\b[^>]*?>/gis;
let filesChanged = 0, tagsChanged = 0, skippedHasSrcset = 0, skippedNoVariants = 0;
const report = [];

for (const f of files) {
  let t = fs.readFileSync(f,'utf8');
  let localChanged = 0;
  t = t.replace(imgTagRe, (tag) => {
    // literal src="/images/....webp" only
    const m = tag.match(/\bsrc="(\/images\/[^"]+\.webp)"/);
    if (!m) return tag;
    const src = m[1];
    if (!wired.has(src)) return tag;
    if (EXCLUDE.has(src)) return tag;
    if (/\bsrcset=/.test(tag)) { skippedHasSrcset++; return tag; }
    const ss = srcsetFor(src);
    if (!ss) { skippedNoVariants++; return tag; }
    const sizes = sizesFor(tag);
    // insert srcset + sizes right after src="..."
    const injected = tag.replace(
      /(\bsrc="\/images\/[^"]+\.webp")/,
      `$1 srcset="${ss}" sizes="${sizes}"`
    );
    localChanged++; tagsChanged++;
    report.push(`${sizes}\t${src}\t${path.relative(root,f)}`);
    return injected;
  });
  if (localChanged > 0) {
    if (!DRY) fs.writeFileSync(f, t);
    filesChanged++;
  }
}

console.log(DRY ? '=== DRY RUN (pass --apply to write) ===' : '=== APPLIED ===');
console.log('files changed        :', filesChanged);
console.log('tags injected        :', tagsChanged);
console.log('skipped (had srcset) :', skippedHasSrcset);
console.log('skipped (no variants):', skippedNoVariants);
console.log('\nsizes distribution:');
const bySizes = {};
for (const r of report) { const s = r.split('\t')[0]; bySizes[s] = (bySizes[s]||0)+1; }
for (const [s,n] of Object.entries(bySizes).sort((a,b)=>b[1]-a[1])) console.log(`  ${String(n).padStart(3)}  ${s}`);
console.log('\nsample injections:');
report.slice(0,15).forEach(r=>console.log('  ',r));
