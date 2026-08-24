// Enumerate webp images >=1201px wide, and classify how each is referenced
// in src/ ( <img src=> vs CSS url() vs data-driven image: ).
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const root = process.cwd();
const publicDir = path.join(root, 'public');

// all webp on disk (skip existing -NNN variant files if any)
const files = execSync('find public/images -name "*.webp" -type f', { cwd: root })
  .toString().split('\n').filter(Boolean)
  .filter(f => !/-\d{3,4}\.webp$/.test(f)); // ignore already-generated variants

// find >=1201 wide
const large = [];
for (const f of files) {
  try {
    const m = await sharp(f).metadata();
    if (m.width && m.width >= 1201) {
      const rel = '/' + path.relative(publicDir, f);
      large.push({ rel, w: m.width, h: m.height });
    }
  } catch {}
}
console.log('webp >=1201px wide:', large.length);

// grep whole src/ once for each ref type
function grepCount(rel, pattern) {
  try {
    return execSync(`grep -rlF ${JSON.stringify(rel)} src/ | wc -l`, { cwd: root }).toString().trim();
  } catch { return '0'; }
}

// Classify: for each large image, is it referenced by <img ... src="rel"> anywhere?
let imgWired = 0, cssOnly = 0, dataOnly = 0, unref = 0;
const imgList = [];
for (const { rel, w } of large) {
  const esc = rel.replace(/[.[\]/]/g, m => '\\'+m);
  let inImg = '0', inCss = '0', inData = '0';
  try { inImg = execSync(`grep -rhoE '<img[^>]*src="${esc}"' src/ | wc -l`, { cwd: root }).toString().trim(); } catch {}
  try { inCss = execSync(`grep -rhoF "url('${rel}')" src/ | wc -l`, { cwd: root }).toString().trim(); } catch {}
  try { inData = execSync(`grep -rhoF '"${rel}"' src/ | wc -l`, { cwd: root }).toString().trim(); } catch {}
  const anyImg = parseInt(inImg) > 0;
  if (anyImg) { imgWired++; imgList.push(`${w}w\t${rel}\t(img:${inImg} css:${inCss} data:${inData})`); }
  else if (parseInt(inCss) > 0) cssOnly++;
  else if (parseInt(inData) > 0) dataOnly++;
  else unref++;
}
console.log('  wired via <img>      :', imgWired);
console.log('  css url() only        :', cssOnly);
console.log('  data-driven image: only:', dataOnly);
console.log('  not found in src       :', unref);

fs.writeFileSync('/tmp/large-imgs.tsv', large.map(l=>`${l.w}\t${l.h}\t${l.rel}`).join('\n')+'\n');
console.log('\nfull list -> /tmp/large-imgs.tsv');
console.log('\n=== sample <img>-wired large images ===');
for (const l of imgList.slice(0,15)) console.log(l);
