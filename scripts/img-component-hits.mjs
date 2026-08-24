// For each candidate component, determine whether any image it renders is in the
// need-variants set. We do this by finding the component's usages, and checking
// whether the data/props passed include a path from need-variants.
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const root = process.cwd();
const need = new Set(fs.readFileSync('/tmp/need-variants.tsv','utf8').split('\n').filter(Boolean).map(l=>l.split('\t')[1]));

// gather all src text
const exts=new Set(['.astro','.ts','.js','.mjs','.json','.md','.mdx']);
function walk(d,o=[]){for(const e of fs.readdirSync(d,{withFileTypes:true})){const p=path.join(d,e.name);e.isDirectory()?walk(p,o):exts.has(path.extname(e.name).toLowerCase())&&o.push(p);}return o;}
const files=walk(path.join(root,'src'));

// For each need-variants path, which file(s) contain it, and is that file a page
// that uses one of the candidate components? Simplest: report, per file that
// contains >=1 need-variants path, which candidate components it imports.
const candidates = ['Benefits','GalleryBanner','CTATintSlider','BentoGridSymmetric','BentoGridPhoto','BackAndForthSection','ApplicationsGrid','NavbarMegaImage','Header','AccordionBenefits','HeroSubpage','BeforeAfterSlider','TrustStrip','ProcessRoadmap','HowItWorksSlideshow'];

const compHit = {}; // component -> count of pages that both import it AND contain a need path
for (const f of files) {
  const t = fs.readFileSync(f,'utf8');
  const needPaths = [...need].filter(p=>t.includes(p));
  if (!needPaths.length) continue;
  for (const c of candidates) {
    if (new RegExp(`import\\s+${c}\\b`).test(t) || t.includes(`<${c}`)) {
      compHit[c] = compHit[c] || { pages:0, samplePaths:new Set() };
      compHit[c].pages++;
      needPaths.slice(0,2).forEach(p=>compHit[c].samplePaths.add(p));
    }
  }
}
console.log('Components rendering (potentially) large images, by pages that pair them with a need-variants path:\n');
for (const [c,info] of Object.entries(compHit).sort((a,b)=>b[1].pages-a[1].pages)) {
  console.log(`${String(info.pages).padStart(3)} pages  ${c}`);
  console.log('     e.g.', [...info.samplePaths].slice(0,2).join(', '));
}
