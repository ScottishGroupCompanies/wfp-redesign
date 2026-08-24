// Robust classification: for each large webp, read every src/ text file and
// check literal presence inside <img ...> tags, url(...) and JSON "image" style refs.
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const root = process.cwd();
const large = fs.readFileSync('/tmp/large-imgs.tsv','utf8').split('\n').filter(Boolean)
  .map(l => { const [w,h,rel] = l.split('\t'); return { w:+w, rel }; });

// gather all src text files
const exts = new Set(['.astro','.ts','.tsx','.js','.mjs','.cjs','.json','.md','.mdx','.html','.css']);
function walk(d,out=[]){for(const e of fs.readdirSync(d,{withFileTypes:true})){const p=path.join(d,e.name);e.isDirectory()?walk(p,out):exts.has(path.extname(e.name).toLowerCase())&&out.push(p);}return out;}
const files = walk(path.join(root,'src')).map(f => ({ f, t: fs.readFileSync(f,'utf8') }));

// For each large image, find every <img ...> tag that contains its rel path.
const imgTagRe = /<img\b[^>]*>/gi;
const results = { imgWired: [], cssOnly: [], dataOnly: [], other: [] };
for (const { rel, w } of large) {
  let inImgTag = false, inCss = false, inData = false;
  for (const { t } of files) {
    if (!t.includes(rel)) continue;
    // any <img> tag containing this rel?
    const tags = t.match(imgTagRe) || [];
    if (tags.some(tag => tag.includes(rel))) inImgTag = true;
    if (t.includes(`url('${rel}')`) || t.includes(`url("${rel}")`) || t.includes(`url(${rel})`)) inCss = true;
    if (t.includes(`"${rel}"`) || t.includes(`'${rel}'`)) inData = true; // may overlap with img/css; used as fallback
  }
  if (inImgTag) results.imgWired.push({ rel, w });
  else if (inCss) results.cssOnly.push({ rel, w });
  else if (inData) results.dataOnly.push({ rel, w });
  else results.other.push({ rel, w });
}
console.log('large >=1201 total:', large.length);
console.log('  <img>-wired :', results.imgWired.length);
console.log('  css-only    :', results.cssOnly.length);
console.log('  data-only   :', results.dataOnly.length);
console.log('  other       :', results.other.length);

fs.writeFileSync('/tmp/large-imgwired.tsv', results.imgWired.map(x=>`${x.w}\t${x.rel}`).join('\n')+'\n');
fs.writeFileSync('/tmp/large-dataonly.tsv', results.dataOnly.map(x=>`${x.w}\t${x.rel}`).join('\n')+'\n');
fs.writeFileSync('/tmp/large-cssonly.tsv', results.cssOnly.map(x=>`${x.w}\t${x.rel}`).join('\n')+'\n');
console.log('\ndata-only samples:');
results.dataOnly.slice(0,20).forEach(x=>console.log(' ', x.w, x.rel));
console.log('\nother (neither img/css/data - investigate) samples:');
results.other.slice(0,20).forEach(x=>console.log(' ', x.w, x.rel));
