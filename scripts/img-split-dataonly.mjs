// Decide, for each of the 120 "data-only" large images, whether it renders as a
// VISIBLE <img> (via a component template like AccordionBenefits) or is METADATA-ONLY
// (OG image / JSON-LD / <link preload> / video poster / blog frontmatter).
// Strategy: an image is "renderable" if it is the value of a data field (image:/img:/photo:/src:)
// that feeds a component known to emit <img>. Metadata-only patterns are explicit.
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const large = fs.readFileSync('/tmp/large-dataonly.tsv','utf8').split('\n').filter(Boolean)
  .map(l=>{const [w,rel]=l.split('\t');return {w:+w,rel};});

const exts=new Set(['.astro','.ts','.tsx','.js','.mjs','.json','.md','.mdx']);
function walk(d,o=[]){for(const e of fs.readdirSync(d,{withFileTypes:true})){const p=path.join(d,e.name);e.isDirectory()?walk(p,o):exts.has(path.extname(e.name).toLowerCase())&&o.push(p);}return o;}
const files=walk(path.join(root,'src')).map(f=>({f,t:fs.readFileSync(f,'utf8')}));

const META_PATTERNS = [
  /"image"\s*:/,            // JSON-LD schema
  /rel=["']preload["']/,    // <link preload>
  /poster=/,                // video poster
];
const renderable=[], metaOnly=[], ambiguous=[];
for(const {rel,w} of large){
  let rendersImg=false, everyRefIsMeta=true, seen=0;
  for(const {f,t} of files){
    if(!t.includes(rel)) continue;
    // check each line containing rel
    for(const line of t.split('\n')){
      if(!line.includes(rel)) continue;
      seen++;
      const isFrontmatterImage = /^\s*image\s*:/.test(line) && f.endsWith('.md');
      const isMeta = META_PATTERNS.some(re=>re.test(line)) || isFrontmatterImage;
      // data field feeding a component: image:/img:/photo:/bg:/src: in .astro/.ts array
      const isDataField = /(^|\s)(image|img|photo|bg|src|thumbnail)\s*:\s*['"`]/.test(line) && !f.endsWith('.md');
      const isBgProp = /\bbg=/.test(line);
      if(!isMeta) everyRefIsMeta=false;
      if(isDataField || isBgProp) rendersImg=true;
    }
  }
  if(rendersImg) renderable.push({rel,w});
  else if(everyRefIsMeta && seen>0) metaOnly.push({rel,w});
  else ambiguous.push({rel,w});
}
console.log('data-only large total:', large.length);
console.log('  renderable (data field -> component <img>):', renderable.length);
console.log('  metadata-only (OG/preload/poster/frontmatter):', metaOnly.length);
console.log('  ambiguous:', ambiguous.length);
fs.writeFileSync('/tmp/data-renderable.tsv', renderable.map(x=>`${x.w}\t${x.rel}`).join('\n')+'\n');
console.log('\nmetadata-only:');
metaOnly.forEach(x=>console.log('  ',x.rel));
console.log('\nambiguous:');
ambiguous.forEach(x=>console.log('  ',x.rel));
