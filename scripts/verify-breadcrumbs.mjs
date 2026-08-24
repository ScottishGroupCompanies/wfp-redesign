// Verify breadcrumb JSON-LD: well-formed, absolute URLs, and NO page has >1 BreadcrumbList.
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const root = process.cwd();
const files = execSync('find dist -name index.html -type f', { cwd: root }).toString().split('\n').filter(Boolean);

const scriptRe = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
let dupes = [], parseErrors = [], relativeUrls = [], sampleShown = false;
let pagesWithBc = 0;

for (const f of files) {
  const html = fs.readFileSync(path.join(root, f), 'utf8');
  const blocks = [...html.matchAll(scriptRe)].map(m => m[1]);
  const parsed = [];
  for (const b of blocks) {
    try { parsed.push(JSON.parse(b)); }
    catch { parseErrors.push(f); }
  }
  const bcs = parsed.filter(s => s && s['@type'] === 'BreadcrumbList');
  if (bcs.length > 0) pagesWithBc++;
  if (bcs.length > 1) dupes.push(`${f} (${bcs.length})`);
  // check absolute item URLs
  for (const bc of bcs) {
    for (const li of (bc.itemListElement || [])) {
      if (li.item && !/^https?:\/\//.test(li.item)) relativeUrls.push(`${f}: ${li.item}`);
    }
  }
  // show one sample from a newly-added page
  if (!sampleShown && f.includes('resources/property-code')) {
    console.log('SAMPLE — resources/property-code BreadcrumbList:');
    console.log(JSON.stringify(bcs[0], null, 2));
    sampleShown = true;
  }
}

console.log('\n=== VERIFY ===');
console.log('pages scanned          :', files.length);
console.log('pages with BreadcrumbList:', pagesWithBc);
console.log('JSON parse errors      :', parseErrors.length, parseErrors.slice(0,5));
console.log('pages with DUPLICATE bc:', dupes.length, dupes.slice(0,10));
console.log('relative (non-abs) URLs:', relativeUrls.length, relativeUrls.slice(0,5));
