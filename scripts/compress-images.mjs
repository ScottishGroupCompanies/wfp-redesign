/**
 * compress-images.mjs
 * Converts every .jpg/.jpeg/.png in public/images/ to a .webp sibling.
 * - Hero images (bgImage targets): max 1600px wide, quality 82
 * - All others: max 1200px wide, quality 80
 * - Skips files that already have a .webp sibling with same mtime.
 * - Writes a manifest of all output paths to scripts/webp-manifest.json
 *
 * Run: node scripts/compress-images.mjs
 */

import sharp from 'sharp';
import { readdir, stat, writeFile } from 'fs/promises';
import { join, extname, basename } from 'path';

const IMAGES_DIR = new URL('../public/images/', import.meta.url).pathname;

// Hero images that need tighter 1600px cap + slightly higher quality
const HERO_PATTERNS = [
  'wfp-landing-hero', 'wfp-camden-hero-bg', 'wfp-expert-installation',
  'wfp-premium-films', 'wfp-footer-bg', 'wfp-office-hero', 'wfp-retail-hero',
  'wfp-hotel-hero', 'wfp-restaurant-hero', 'wfp-church-hero', 'wfp-government-hero',
  'wfp-museums-library-hero', 'wfp-schools-universities-hero', 'wfp-airport-hero',
  'bp-stats-home-large', 'bp-stats-home-card', 'wfp-bp-stats', 'wfp-camden-window-film-service',
  'commercial-window-film-upper-darby', 'commercial-window-film-camden',
];

function isHero(filename) {
  const base = basename(filename, extname(filename)).toLowerCase();
  return HERO_PATTERNS.some(p => base.includes(p));
}

async function getAllImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    if (!e.isFile()) continue;
    const ext = extname(e.name).toLowerCase();
    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
      files.push(join(dir, e.name));
    }
  }
  return files;
}

async function convert(src) {
  const ext = extname(src);
  const out = src.replace(new RegExp(`\\${ext}$`), '.webp');

  // Skip if webp already exists and is newer
  try {
    const [srcStat, outStat] = await Promise.all([stat(src), stat(out)]);
    if (outStat.mtimeMs >= srcStat.mtimeMs) return { src, out, status: 'skipped' };
  } catch { /* out doesn't exist yet */ }

  const hero = isHero(src);
  const maxW = hero ? 1600 : 1200;
  const quality = hero ? 82 : 80;

  try {
    const image = sharp(src);
    const meta = await image.metadata();
    const pipeline = meta.width > maxW
      ? image.resize({ width: maxW, withoutEnlargement: true })
      : image;

    await pipeline.webp({ quality }).toFile(out);
    const [srcSize, outSize] = await Promise.all([
      stat(src).then(s => s.size),
      stat(out).then(s => s.size),
    ]);
    const saving = Math.round((1 - outSize / srcSize) * 100);
    return { src, out, status: 'converted', saving };
  } catch (err) {
    return { src, out, status: 'error', error: err.message };
  }
}

const files = await getAllImages(IMAGES_DIR);
console.log(`Found ${files.length} raster images. Converting...`);

// Process in batches of 12 to avoid OOM
const BATCH = 12;
const results = [];
for (let i = 0; i < files.length; i += BATCH) {
  const batch = files.slice(i, i + BATCH);
  const res = await Promise.all(batch.map(convert));
  results.push(...res);
  const done = Math.min(i + BATCH, files.length);
  const pct = Math.round(done / files.length * 100);
  process.stdout.write(`\r  ${done}/${files.length} (${pct}%)   `);
}
console.log('\n');

const converted = results.filter(r => r.status === 'converted');
const skipped   = results.filter(r => r.status === 'skipped');
const errors    = results.filter(r => r.status === 'error');

if (errors.length) {
  console.error('ERRORS:');
  errors.forEach(e => console.error('  ', e.src, '->', e.error));
}

console.log(`Converted: ${converted.length}  |  Skipped (up-to-date): ${skipped.length}  |  Errors: ${errors.length}`);

// Compute savings stats
if (converted.length) {
  const avgSaving = Math.round(converted.reduce((s, r) => s + (r.saving || 0), 0) / converted.length);
  console.log(`Average size reduction: ${avgSaving}%`);
}

// Write manifest mapping original paths to webp paths (relative to public/)
const manifest = {};
for (const r of results) {
  if (r.status === 'converted' || r.status === 'skipped') {
    const relSrc = r.src.replace(IMAGES_DIR, '/images/');
    const relOut = r.out.replace(IMAGES_DIR, '/images/');
    manifest[relSrc] = relOut;
  }
}

await writeFile(
  new URL('../scripts/webp-manifest.json', import.meta.url).pathname,
  JSON.stringify(manifest, null, 2)
);
console.log('Manifest written to scripts/webp-manifest.json');
