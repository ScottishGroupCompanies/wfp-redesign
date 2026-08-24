// Delete original jpg/jpeg/png from public/ ONLY for files that converted
// AND whose .webp sibling now exists. Backups already live in _originals-backup/.
// Favicon / skipped / errored files are never touched.
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const publicDir = path.join(root, 'public');
const log = fs.readFileSync('/tmp/img-convert-log.tsv', 'utf8').split('\n').filter(Boolean);

let deleted = 0, kept = 0, missingWebp = 0, freedKB = 0;
for (const line of log) {
  const [act, src, dst] = line.split('\t');
  if (act !== 'CONVERT' && act !== 'DONE') { kept++; continue; }
  const absOrig = path.join(publicDir, src.replace(/^\//, ''));
  const absWebp = path.join(publicDir, dst.replace(/^\//, ''));
  const absBackup = path.join(root, '_originals-backup', src.replace(/^\//, ''));
  // safety: only delete if webp exists, original exists, and a backup exists
  if (fs.existsSync(absWebp) && fs.existsSync(absOrig) && fs.existsSync(absBackup)) {
    freedKB += fs.statSync(absOrig).size / 1024;
    fs.unlinkSync(absOrig);
    deleted++;
  } else if (!fs.existsSync(absWebp)) {
    missingWebp++;
  }
}
console.log('deleted originals :', deleted);
console.log('missing webp (kept):', missingWebp);
console.log('freed             :', (freedKB/1024).toFixed(1), 'MB');
