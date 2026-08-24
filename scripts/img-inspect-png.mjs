// Inspect referenced PNGs for alpha channel. Read-only.
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const used = fs.readFileSync('/tmp/used.txt', 'utf8').split('\n').filter(Boolean);
const pngs = used.filter(p => p.toLowerCase().endsWith('.png'));

for (const rel of pngs) {
  const abs = path.join(root, 'public', rel);
  try {
    const m = await sharp(abs).metadata();
    const kb = (fs.statSync(abs).size / 1024).toFixed(0);
    const dim = (m.width + 'x' + m.height).padEnd(11);
    console.log(`${m.hasAlpha ? 'ALPHA ' : 'opaque'}  ${dim}  ${kb.padStart(6)}KB  ${rel}`);
  } catch (e) {
    console.log(`ERR    ${rel}  ${e.message}`);
  }
}
