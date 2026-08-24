// Convert referenced images to WebP. Resumable & safe.
//  - backs up each original to _originals-backup/<mirrored path> before touching it
//  - JPG / JPEG / opaque PNG -> lossy webp q82, max width 2560 (no upscale)
//  - PNG with alpha (logos) -> lossless webp, alpha preserved, max width 2560
//  - favicon .png -> SKIPPED (must stay png)
//  - already-.webp inputs -> SKIPPED
//  - if output .webp already exists AND backup exists -> SKIPPED (resume)
// Writes a TSV action log so the reference-rewrite step knows exactly what changed.
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

sharp.cache(false);
sharp.concurrency(4); // gentle on the SSD

const root = process.cwd();
const publicDir = path.join(root, 'public');
const backupRoot = path.join(root, '_originals-backup');
const MAXW = 2560;
const Q = 82;
const SKIP_BASENAMES = new Set(['wfp-favicon.png']); // keep as-is

const used = fs.readFileSync('/tmp/used.txt', 'utf8').split('\n').filter(Boolean);
const logPath = '/tmp/img-convert-log.tsv';
const logLines = [];

let converted = 0, skippedWebp = 0, skippedFav = 0, resumed = 0, errors = 0;
let bytesBefore = 0, bytesAfter = 0;

for (const rel of used) {                         // rel like /images/foo/bar.jpg
  const relNoSlash = rel.replace(/^\//, '');       // images/foo/bar.jpg
  const absIn = path.join(publicDir, relNoSlash);
  const base = path.basename(rel);
  const ext = path.extname(rel).toLowerCase();

  if (ext === '.webp') { skippedWebp++; continue; }
  if (SKIP_BASENAMES.has(base)) { skippedFav++; logLines.push(`SKIP_FAVICON\t${rel}\t${rel}`); continue; }

  if (!fs.existsSync(absIn)) { errors++; logLines.push(`ERR_MISSING\t${rel}\t`); continue; }

  const relWebp = rel.replace(/\.(jpe?g|png)$/i, '.webp');
  const absOut = path.join(publicDir, relWebp.replace(/^\//, ''));
  const absBackup = path.join(backupRoot, relNoSlash);

  // resume: if webp exists and backup exists, assume done
  if (fs.existsSync(absOut) && fs.existsSync(absBackup)) {
    resumed++;
    logLines.push(`DONE\t${rel}\t${relWebp}`);
    continue;
  }

  try {
    // 1. backup original (only if not already backed up)
    if (!fs.existsSync(absBackup)) {
      fs.mkdirSync(path.dirname(absBackup), { recursive: true });
      fs.copyFileSync(absIn, absBackup);
    }

    const meta = await sharp(absIn).metadata();
    const hasAlpha = !!meta.hasAlpha && ext === '.png';
    const inSize = fs.statSync(absIn).size;

    let pipe = sharp(absIn).rotate(); // respect EXIF orientation
    if (meta.width && meta.width > MAXW) {
      pipe = pipe.resize({ width: MAXW, withoutEnlargement: true });
    }
    if (hasAlpha) {
      pipe = pipe.webp({ lossless: true });        // logos: keep transparency crisp
    } else {
      pipe = pipe.flatten({ background: '#ffffff' }).webp({ quality: Q });
    }
    await pipe.toFile(absOut);

    const outSize = fs.statSync(absOut).size;
    bytesBefore += inSize;
    bytesAfter += outSize;
    converted++;
    logLines.push(`CONVERT\t${rel}\t${relWebp}`);

    if (converted % 200 === 0) {
      fs.writeFileSync(logPath, logLines.join('\n') + '\n'); // checkpoint
      console.log(`  ...${converted} converted`);
    }
  } catch (e) {
    errors++;
    logLines.push(`ERR\t${rel}\t${e.message}`);
    console.log(`ERR ${rel}: ${e.message}`);
  }
}

fs.writeFileSync(logPath, logLines.join('\n') + '\n');
console.log('\n=== SUMMARY ===');
console.log('converted        :', converted);
console.log('resumed (already):', resumed);
console.log('skipped .webp    :', skippedWebp);
console.log('skipped favicon  :', skippedFav);
console.log('errors           :', errors);
console.log('bytes before (converted only):', (bytesBefore/1048576).toFixed(1), 'MB');
console.log('bytes after  (converted only):', (bytesAfter/1048576).toFixed(1), 'MB');
if (bytesBefore) console.log('reduction        :', (100*(1-bytesAfter/bytesBefore)).toFixed(1), '%');
console.log('log written to   :', logPath);
