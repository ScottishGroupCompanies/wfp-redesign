#!/usr/bin/env node
// benefits-layout-a-checker.cjs — v4 (2026-07-20)
// Usage: node scripts/benefits-layout-a-checker.cjs --slug safety-and-security --prefix sf
// Usage: node scripts/benefits-layout-a-checker.cjs --slug solar --prefix sol --dir services
const fs = require('fs'), path = require('path');
const args = process.argv.slice(2);
const slug = args[args.indexOf('--slug')+1];
const prefix = args[args.indexOf('--prefix')+1];
var _dirIdx=args.indexOf('--dir'); var dirArg=_dirIdx!==-1?args[_dirIdx+1]:'benefits';
var _kwIdx=args.indexOf('--kw'); var kwArg=_kwIdx!==-1?args[_kwIdx+1]:'window film';
if (!slug||!prefix){console.error('Usage: --slug <slug> --prefix <prefix> [--dir <subdir>] [--kw "primary keyword"]');process.exit(1);}
const ROOT=path.join(__dirname,'..');
const pagePath=path.join(ROOT,'src/pages/'+dirArg+'/'+slug+'.astro');
const builtPath=path.join(ROOT,'dist/'+dirArg+'/'+slug+'/index.html');
if(!fs.existsSync(pagePath)){console.error('Page not found: '+pagePath);process.exit(1);}
const src=fs.readFileSync(pagePath,'utf8');
const builtHtml=fs.existsSync(builtPath)?fs.readFileSync(builtPath,'utf8'):null;
let passed=0,failed=0;
const failures=[],warnings=[];
function check(label,ok,detail,warn){
  detail=detail||'';warn=warn||false;
  if(ok){console.log('  OK '+label+(detail?' -- '+detail:''));passed++;}
  else{var msg=label+(detail?' -- '+detail:'');
    if(warn){console.log('  WARN '+msg);warnings.push(msg);}
    else{console.log('  FAIL '+msg);failed++;failures.push(msg);}}
}
var visible=src.replace(/<script[\s\S]*?<\/script>/gi,' ').replace(/<style[\s\S]*?<\/style>/gi,' ').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
var visibleWords=visible.split(/\s+/).length;
var css=(src.match(/<style>([\s\S]*?)<\/style>/)||['',''])[1];
console.log('\n[1] BUILD');
check('Built HTML exists',!!builtHtml,builtHtml?'':'Run npm run build first');
console.log('\n[2] LAYOUT A COMPONENTS');
[['Hero Subpage','hs__title'],['Accordion Vertical','accv__panel'],['Bento Grid','bgp__grid'],['Accordion Benefits','accb__wrap'],['Before/After','before-after__frame'],['WWD Panels','wwd__panel'],['Gallery Banner','gallery-banner--light'],['Testimonial Stack','tstack__deck'],['Process Roadmap','prm__map'],['FAQ','faq__list'],['CTA Avatars','ctav__stack']].forEach(function(c){check('CSS: '+c[0],css.includes(c[1]));});
console.log('\n[3] HERO');
check('Library hero (hs)',src.includes('class="hs"'));
check('No old ag-hero',!src.includes('class="ag-hero"'));
check('Hero bg image',src.includes('class="hs__bg"'));
check('Contact linked',src.includes('href="/contact/"'));
check('Hero CTA: All Benefits',src.includes('>All Benefits<'));
console.log('\n[4] H1 + META');
var title=(src.match(/const title = ['"]([^'"]+)['"]/)||[])[1]||'';
check('Title <=60',title.length>0&&title.length<=60,title.length+' chars');
var kwRe=new RegExp(kwArg,'i');
check(kwArg+' in title',kwRe.test(title));
check('Philadelphia in title',/philadelphia/i.test(title));
check('No Philly abbrev',!/philly/i.test(title));
var desc=(src.match(/const description = ['"]([^'"]+)['"]/)||[])[1]||'';
check('Desc <=160',desc.length>0&&desc.length<=160,desc.length+' chars');
check('KW in desc',kwRe.test(desc));
check('KW near desc start',new RegExp('^[^.]{0,40}'+kwArg,'i').test(desc.trim()));
var h1raw=(src.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)||[])[1]||'';
var h1=h1raw.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
check('H1 <=60',h1.length>0&&h1.length<=60,'"'+h1+'" ('+h1.length+')');
check('KW in H1',kwRe.test(h1));
check('Philadelphia in H1',/philadelphia/i.test(h1));
console.log('\n[5] KEYWORD DENSITY');
var kw=(visible.match(new RegExp(kwArg,'gi'))||[]).length;
var density=kw/visibleWords*100;
check('Density 0.5-1.5%',density>=0.5&&density<=1.5,density.toFixed(3)+'% ('+kw+' in '+visibleWords+' visible words)');
console.log('\n[6] IMAGE FILENAMES');
var imgSrcs=[];var imgRe=/src="\/images\/([^"]+\.jpg)"/g;var imgM;
while((imgM=imgRe.exec(src))!==null)imgSrcs.push(imgM[1]);
var shortImgs=imgSrcs.filter(function(f){return /^[a-z]{2,3}-[a-z]/.test(f)&&f.length<30;});
check('No short-code filenames',shortImgs.length===0,shortImgs.slice(0,3).join(', '));
var kwImgs=imgSrcs.filter(function(f){return /window.film|film.philadelphia/i.test(f);});
check('>=10 keyword-rich filenames',kwImgs.length>=10,kwImgs.length+' found');
console.log('\n[7] COLORS (no navy)');
['#0d1b2a','#12293f','#162e4d','rgba(13,27,42','rgba(18,41,63'].forEach(function(c){check('No navy: '+c,!css.includes(c));});
console.log('\n[8] HEADINGS');
var h2re=/<h2[^>]*>([\s\S]*?)<\/h2>/g;var h2m;var h2s=[];
while((h2m=h2re.exec(src))!==null)h2s.push(h2m[1].replace(/<[^>]+>/g,'').trim());
['Three','Four','Five','Six','Seven','Eight'].forEach(function(w){var hit=h2s.find(function(h){return h.includes(w);});check('No "'+w+'" in H2',!hit,hit||'');});
check('H1 before H2',src.indexOf('<h1')<src.indexOf('<h2'));
check('CTA not glass-only',!src.includes('Protect Your Philadelphia Glass')||slug.includes('glass'));
console.log('\n[9] LINKS');
var hrefRe=/href="(\/[^"#]+)"/g;var hm;var hset=new Set();
while((hm=hrefRe.exec(src))!==null)hset.add(hm[1]);
var intLinks=Array.from(hset);
var extLinks=src.match(/href="https?:\/\/[^"]+"/g)||[];
check('>=2 internal links',intLinks.length>=2,intLinks.length+' found');
check('Contact linked',intLinks.some(function(l){return l.includes('/contact');}));
check('External link',extLinks.length>=1,extLinks.length+' found');
check('No links in hero sub',!/<p class="hs__sub"[^>]*>(?:(?!<\/p>)[\s\S])*?<a /.test(src));
check('No links in headings',!/<h([1-6])[^>]*>(?:(?!<\/h\1>)[\s\S])*?<a /.test(src));
check('Inline link CSS present',src.includes('accb__detail-inner a'));
// Links must be spread across >=2 distinct accb__detail-inner blocks
var accbInners=(src.match(/<div class="accb__detail-inner">[\s\S]*?<\/div>/g)||[]);
var accbBlocksWithLinks=accbInners.filter(function(b){return /<a href=/.test(b);}).length;
check('Links in >=2 accb rows',accbBlocksWithLinks>=2,accbBlocksWithLinks+' rows have links');
// Both link zones must have visible CSS (same green+underline treatment)
check('Link CSS: accb__detail-inner a',src.includes('accb__detail-inner a'));
check('Link CSS: accv__desc a',src.includes('accv__desc a'));
console.log('\n[10] IMAGES');
var imgs=src.match(/<img[^>]+>/g)||[];
check('All imgs: title',imgs.filter(function(t){return !t.includes('title=');}).length===0,imgs.filter(function(t){return !t.includes('title=');}).length+' missing');
check('All imgs: alt',imgs.filter(function(t){return !t.includes('alt=');}).length===0,imgs.filter(function(t){return !t.includes('alt=');}).length+' missing');
check('Before image',src.includes('-before.jpg')||src.includes('-before-'));
check('After image',src.includes('-after.jpg')||src.includes('-after-'));
console.log('\n[10b] RESOURCES SECTION');
check('res-section present',src.includes('res-section'));
check('res-section CSS',css.includes('res-section'));
var pdfLinks=(src.match(/href="\/resources\/[^"]+\.pdf"/g)||[]);
check('>=3 PDFs linked',pdfLinks.length>=3,pdfLinks.length+' found');
var pdfOk=pdfLinks.every(function(l){var f=l.replace('href="','').replace('"','');var fp=path.join(ROOT,'public',f);if(!fs.existsSync(fp))return false;var h=fs.readFileSync(fp).slice(0,5).toString();return h.startsWith('%PDF-');});
check('All PDFs exist + valid',pdfOk);
console.log('\n[11] SCHEMA');
check('faqItems defined',src.includes('const faqItems'));
var faqCount=(src.match(/question:/g)||[]).length;
check('10 FAQs',faqCount===10,faqCount+' found');
check('pageSchemas defined',src.includes('const pageSchemas'));
check('BreadcrumbList',src.includes('"BreadcrumbList"'));
check('WebPage',src.includes('"WebPage"'));
check('ItemList',src.includes('"ItemList"'));
check('Product',src.includes('"Product"'));
check('dateModified dynamic',src.includes('new Date().toISOString()'));
check('No hardcoded date',!/dateModified.*"20\d\d-\d\d-\d\d"/.test(src));
check('No inline ld+json',!src.includes('<script type="application/ld+json">'));
if(builtHtml){var sc=(builtHtml.match(/application\/ld\+json/g)||[]).length;check('>=7 schema in HTML',sc>=7,sc+' found');}
console.log('\n[12] GEO BLOCK');
check('GEO block',src.includes(prefix+'-geo'));
check('GEO hidden',src.includes('display:none'));
check('GEO DL',src.includes('<dl>'));
var dtCount=(src.match(/<dt>/g)||[]).length;
check('GEO >=6 DTs',dtCount>=6,dtCount+' DTs');
var liCount=(src.match(/<li>/g)||[]).length;
check('GEO >=12 LIs',liCount>=12,liCount+' LIs');
check('Named entities',/philadelphia|SEPTA|Old City|Center City|Fishtown/i.test(src));
console.log('\n[13] CONTENT POLICY');
check('No time estimates',!/\d+-\d+\s*(min|hour|hr)/.test(src));
check('No per-sq-ft',!/\$\d+.*per\s*(sq|square)\s*foot/.test(src));
check('No automotive',!/\b(car|vehicle|automobile)\b|auto\s*tint/i.test(src));
check('No bulletproof',!/bullet.?proof/i.test(src));
check('No "All X Benefits" CTA',!/All \w+ Benefits/.test(src));
var noStyle=src.replace(/<style>[\s\S]*?<\/style>/,'');
check('No stats in trust bar',!/swt-trust__label[\s\S]{0,300}(%|ANSI|ASTM|blocks up to)/.test(noStyle));
var line='-'.repeat(52);
console.log('\n'+line);
console.log('  OK: '+passed+'  FAIL: '+failed+'  WARN: '+warnings.length);
if(failures.length){console.log('\n  FAILURES:');failures.forEach(function(f){console.log('    FAIL '+f);});}
if(warnings.length){console.log('\n  WARNINGS:');warnings.forEach(function(w){console.log('    WARN '+w);});}
console.log(failed?'\n  NOT READY TO COMMIT':'\n  READY TO COMMIT');
process.exit(failed>0?1:0);
