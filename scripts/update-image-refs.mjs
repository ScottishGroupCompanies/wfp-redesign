/**
 * update-image-refs.mjs
 * Replaces all .jpg / .jpeg / .png image references with .webp equivalents
 * in all .astro files under src/, and CSS files under src/styles/.
 *
 * Only replaces paths that reference /images/ (public assets).
 * Does NOT touch imports, favicons (wfp-favicon.png), or logo PNGs used
 * in <img> as brand logos (those are small enough to leave as-is).
 *
 * EXCLUSIONS (leave as original format):
 *   - /images/wfp-favicon.png (favicon — browser may not support webp favicon well)
 *   - /images/2021-08-window-film-philadelphia-dark.png (logo — tiny 10KB PNG, OG image default)
 *   - /images/window-film-philadelphia-logo-white.png (logo)
 *   - wfphilly-blog-image-*.png (blog thumbnails — already PNG, small)
 *
 * Run: node scripts/update-image-refs.mjs
 */

import { readdir, readFile, writeFile, stat } from 'fs/promises';
import { join, extname, resolve } from 'path';

const ROOT = new URL('..', import.meta.url).pathname;
const SRC  = join(ROOT, 'src');

const EXCLUDE_FILES = new Set([
  'wfp-favicon.png',
  '2021-08-window-film-philadelphia-dark.png',
  'window-film-philadelphia-logo-white.png',
  '2021-08-window-film-philadelphia-white-1.png',
]);

function shouldExclude(filename) {
  if (EXCLUDE_FILES.has(filename)) return true;
  if (filename.startsWith('wfphilly-blog-image-')) return true;
  if (filename.startsWith('file-1491') || filename.startsWith('wfp-favicon')) return true;
  return false;
}

/** Replace /images/foo.jpg  →  /images/foo.webp (and .jpeg, .png variants) */
function replaceImageRefs(content) {
  return content.replace(
    /\/images\/([\w\-.]+)\.(jpg|jpeg|png)/gi,
    (match, name, ext) => {
      if (shouldExclude(`${name}.${ext}`)) return match;
      return `/images/${name}.webp`;
    }
  );
}

async function getAllAstroFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const fullPath = join(dir, e.name);
    if (e.isDirectory()) {
      files.push(...await getAllAstroFiles(fullPath));
    } else if (e.isFile() && (e.name.endsWith('.astro') || e.name.endsWith('.css'))) {
      files.push(fullPath);
    }
  }
  return files;
}

const files = await getAllAstroFiles(SRC);
console.log(`Found ${files.length} .astro/.css files to process`);

let changed = 0;
const changeLog = [];

for (const file of files) {
  const original = await readFile(file, 'utf8');
  const updated  = replaceImageRefs(original);
  if (updated !== original) {
    await writeFile(file, updated, 'utf8');
    const relPath = file.replace(ROOT, '');
    changeLog.push(relPath);
    changed++;
  }
}

console.log(`\nUpdated ${changed} files:`);
changeLog.forEach(f => console.log(' ', f));
console.log('\nDone. Run npm run build to verify.');
