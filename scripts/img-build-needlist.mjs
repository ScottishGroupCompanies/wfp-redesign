// Build the final list of large images that RENDER as visible <img> (need variants).
// = all 289 large  MINUS  css-only (35)  MINUS  metadata-only (8).
import fs from 'node:fs';

const read = p => { try { return fs.readFileSync(p,'utf8').split('\n').filter(Boolean); } catch { return []; } };

// all large: "w\th\trel"
const all = read('/tmp/large-imgs.tsv').map(l=>{const a=l.split('\t');return {w:+a[0], rel:a[2]};});
// css-only rels
const css = new Set(read('/tmp/large-cssonly.tsv').map(l=>l.split('\t')[1]));
// metadata-only rels (from split-dataonly output, hardcode the 8 identified)
const meta = new Set([
  '/images/wfp-church-hero.webp',
  '/images/wfp-retail-hero.webp',
  '/images/blog/wfp-blog-best-frosted-glass-window-film-philadelphia.webp',
  '/images/blog/wfp-blog-decorative-window-film-philadelphia-business-trends.webp',
  '/images/blog/wfp-blog-best-sidelight-window-film-philadelphia-transform-entryways.webp',
  '/images/wfp-office-hero.webp',
  '/images/vista-products/vs-70-sr-cdf-spectrally-selective.webp',
  '/images/vista-products/ve-35-sr-cdf-low-e.webp',
]);

const need = all.filter(x => !css.has(x.rel) && !meta.has(x.rel));
fs.writeFileSync('/tmp/need-variants.tsv', need.map(x=>`${x.w}\t${x.rel}`).join('\n')+'\n');
console.log('total large           :', all.length);
console.log('  minus css-only      :', css.size);
console.log('  minus metadata-only :', meta.size);
console.log('NEED VARIANTS         :', need.length);
console.log('  by width bucket:');
const b={};
for(const x of need){const k= x.w>=2001?'>=2001': x.w>=1601?'1601-2000': x.w>=1401?'1401-1600':'1201-1400'; b[k]=(b[k]||0)+1;}
for(const k of ['1201-1400','1401-1600','1601-2000','>=2001']) console.log('   ',k, b[k]||0);
