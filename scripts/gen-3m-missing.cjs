#!/usr/bin/env node
// Generates 100 missing 3M product entries for Window Film Philadelphia
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'src', 'data', '3m-missing-products.json');

const SUN = '#2874A6';
const SAFETY = '#C0392B';
const CERAMIC = '#8E4914';
const FASARA = '#9B59B6';

const neighborhoods = [
  'Society Hill', 'Old City', 'Rittenhouse Square', 'Center City',
  'University City', 'Fishtown', 'Chestnut Hill', 'Germantown', 'Manayunk'
];

function pickNh(i) {
  return neighborhoods[i % neighborhoods.length];
}
function pickNh2(i) {
  return neighborhoods[(i + 3) % neighborhoods.length];
}

// Helper to make unique short descriptions
const leadWords = [
  'Transform', 'Elevate', 'Enhance', 'Upgrade', 'Reimagine', 'Revitalize',
  'Modernize', 'Refine', 'Refresh', 'Redefine', 'Optimize', 'Protect',
  'Safeguard', 'Beautify', 'Customize', 'Personalize', 'Illuminate',
  'Soften', 'Diffuse', 'Shield', 'Insulate', 'Decorate', 'Accentuate',
  'Balance', 'Harmonize', 'Distinguish', 'Characterize', 'Intensify',
  'Moderate', 'Clarify', 'Brighten', 'Temper', 'Reinforce', 'Strengthen',
  'Fortify', 'Adorn', 'Grace', 'Outfit', 'Equip', 'Furnish', 'Install',
  'Apply', 'Outfit', 'Retrofit', 'Condition', 'Filter', 'Screen',
  'Conceal', 'Reveal', 'Finish', 'Surface', 'Layer', 'Coat', 'Treat',
  'Manage', 'Control', 'Reduce', 'Reject', 'Block', 'Absorb', 'Reflect',
  'Direct', 'Guide', 'Shape', 'Mold', 'Pattern', 'Texture', 'Frost',
  'Tint', 'Shade', 'Hue', 'Cast', 'Render', 'Frame'
];

// ─── Product definitions ───
const products = [
  // === FASARA DECORATIVE (all non-sun/safety/ceramic) ===
  { name: 'AERINA', slug: 'aerina', series: 'fasara' },
  { name: 'ALTAIR', slug: 'altair', series: 'fasara' },
  { name: 'ARPA - BLACK VERTICAL', slug: 'arpa-black-vertical', series: 'fasara' },
  { name: 'ARPA CRYSTAL', slug: 'arpa-crystal', series: 'fasara' },
  { name: 'ARPA - VERTICAL', slug: 'arpa-vertical', series: 'fasara' },
  { name: 'BLACK ELECTROCUT FILM', slug: 'black-electrocut-film', series: 'fasara' },
  { name: 'CLOUD', slug: 'cloud', series: 'fasara' },
  { name: 'DIAMOND', slug: 'diamond', series: 'fasara' },
  { name: 'DICHROIC FILM WITH ADHESIVE (DEP-A) BLAZE', slug: 'dichroic-dep-a-blaze', series: 'fasara' },
  { name: 'DICHROIC FILM WITH ADHESIVE (DEP-A) CHILL', slug: 'dichroic-dep-a-chill', series: 'fasara' },
  { name: 'DIFFUSER FILM WHITE', slug: 'diffuser-film-white', series: 'fasara' },
  { name: 'DUSTED CRYSTAL NON LOGO', slug: 'dusted-crystal-non-logo', series: 'fasara' },
  { name: 'ESSEN', slug: 'essen', series: 'fasara' },
  { name: 'Fasara Emboss', slug: 'fasara-emboss', series: 'fasara' },
  { name: 'Fasara Fabric Patterns', slug: 'fasara-fabric-patterns', series: 'fasara' },
  { name: 'Fasara Gradient Patterns (Cloud Narrow)', slug: 'fasara-gradient-cloud-narrow', series: 'fasara' },
  { name: 'Fasara Gradient Patterns (Light Gray)', slug: 'fasara-gradient-light-gray', series: 'fasara' },
  { name: 'Fasara Gradient Patterns (Blue Gray)', slug: 'fasara-gradient-blue-gray', series: 'fasara' },
  { name: 'Fasara Gradient Patterns (Dark Gray)', slug: 'fasara-gradient-dark-gray', series: 'fasara' },
  { name: 'Fasara Gradient Silky Patterns Illumina Silky S', slug: 'fasara-gradient-silky-illuminina-s', series: 'fasara' },
  { name: 'FINE - VERTICAL', slug: 'fine-vertical', series: 'fasara' },
  { name: 'FINE CRYSTAL', slug: 'fine-crystal', series: 'fasara' },
  { name: 'FROSTED BLUE MIST CRYSTAL', slug: 'frosted-blue-mist-crystal', series: 'fasara' },
  { name: 'FROSTED CRYSTAL', slug: 'frosted-crystal', series: 'fasara' },
  { name: 'FROSTED GOLD CRYSTAL', slug: 'frosted-gold-crystal', series: 'fasara' },
  { name: 'FROSTED MINT CRYSTAL', slug: 'frosted-mint-crystal', series: 'fasara' },
  { name: 'FROSTED ROSE CRYSTAL', slug: 'frosted-rose-crystal', series: 'fasara' },
  { name: 'GLACE', slug: 'glace', series: 'fasara' },
  { name: 'ILLUMINA', slug: 'illumina', series: 'fasara' },
  { name: 'ILLUMINA BLACK', slug: 'illumina-black', series: 'fasara' },
  { name: 'ILLUMINA GLACE', slug: 'illumina-glace', series: 'fasara' },
  { name: 'LATTICE - HORIZONTAL', slug: 'lattice-horizontal', series: 'fasara' },
  { name: 'LINEN', slug: 'linen', series: 'fasara' },
  { name: 'LUNA 9 - DOT', slug: 'luna-9-dot', series: 'fasara' },
  { name: 'MARE', slug: 'mare', series: 'fasara' },
  { name: 'MILANO - MILKY WHITE', slug: 'milano-milky-white', series: 'fasara' },
  { name: 'NOKTO - HORIZONTAL', slug: 'nokto-horizontal', series: 'fasara' },
  { name: 'OPAQUE BLACK', slug: 'opaque-black', series: 'fasara' },
  { name: 'PARACELL - HORIZONTAL', slug: 'paracell-horizontal', series: 'fasara' },
  { name: 'PIXELLA - HORIZONTAL', slug: 'pixella-horizontal', series: 'fasara' },
  { name: 'PRISM NOIR- PRISM', slug: 'prism-noir', series: 'fasara' },
  { name: 'PRISM SILVER - PRISM', slug: 'prism-silver', series: 'fasara' },
  { name: 'RADIUS', slug: 'radius', series: 'fasara' },
  { name: 'RIKYU', slug: 'rikyu', series: 'fasara' },
  { name: 'ROBE', slug: 'robe', series: 'fasara' },
  { name: 'SABRINA', slug: 'sabrina', series: 'fasara' },
  { name: 'SAFU', slug: 'safu', series: 'fasara' },
  { name: 'SAGANO', slug: 'sagano', series: 'fasara' },
  { name: 'SAN MARINO - MILKY MILKY', slug: 'san-marino-milky-milky', series: 'fasara' },
  { name: 'SAN MARINO - MILKY MILKY Light Gray/dark/Gray Blue', slug: 'san-marino-milky-light-gray-dark-gray-blue', series: 'fasara' },
  { name: 'SCOTCHCAL CLEAR VIEW GRAPHIC', slug: 'scotchcal-clear-view-graphic', series: 'fasara' },
  { name: 'SEATTLE - FINE', slug: 'seattle-fine', series: 'fasara' },
  { name: 'SEATTLE - VERTICAL', slug: 'seattle-vertical', series: 'fasara' },
  { name: 'SHIZUKU-DOT', slug: 'shizuku-dot', series: 'fasara' },
  { name: 'SHUTIE - BLACK VERTICAL', slug: 'shutie-black-vertical', series: 'fasara' },
  { name: 'SHUTIE - VERTICAL', slug: 'shutie-vertical', series: 'fasara' },
  { name: 'SLAT - HORIZONTAL', slug: 'slat-horizontal', series: 'fasara' },
  { name: 'VEGA', slug: 'vega', series: 'fasara' },
  { name: 'VENETIAN', slug: 'venetian', series: 'fasara' },
  { name: 'VISTA - DOT', slug: 'vista-dot', series: 'fasara' },
  { name: 'WHITE BLOCKOUT MATTE FILM', slug: 'white-blockout-matte-film', series: 'fasara' },
  { name: 'WHITE ELECTROCUT FILM', slug: 'white-electrocut-film', series: 'fasara' },
  { name: 'WHITEBOARD FILM - POST IT FLEX WRITE SURFACE', slug: 'whiteboard-film-post-it-flex-write-surface', series: 'fasara' },
  { name: 'WHITEBOARD FILM - GLASS', slug: 'whiteboard-film-glass', series: 'fasara' },
  { name: 'YAMATO', slug: 'yamato', series: 'fasara' },

  // === CERAMIC ===
  { name: 'Ceramic 35 (CA35)', slug: 'ceramic-35-ca35', series: 'ceramic' },
  { name: 'Ceramic 45 (CA45)', slug: 'ceramic-45-ca45', series: 'ceramic' },
  { name: 'Ceramic 60 (CA60)', slug: 'ceramic-60-ca60', series: 'ceramic' },
  { name: 'Ceramic 80 (CA80)', slug: 'ceramic-80-ca80', series: 'ceramic' },

  // === SUN CONTROL ===
  { name: 'Exterior Prestige 20 - PRX 20', slug: 'exterior-prestige-20-prx-20', series: 'sun' },
  { name: 'Exterior Prestige 40 - PRX 40', slug: 'exterior-prestige-40-prx-40', series: 'sun' },
  { name: 'Exterior Prestige 70 - PRX70', slug: 'exterior-prestige-70-prx70', series: 'sun' },
  { name: 'Exterior Prestige 90 - PRX90', slug: 'exterior-prestige-90-prx90', series: 'sun' },
  { name: 'LE 20 - Sun Control Film', slug: 'le-20-sun-control-film', series: 'sun' },
  { name: 'LE 35 - Sun Control Film', slug: 'le-35-sun-control-film', series: 'sun' },
  { name: 'Night Vision 15 (NV-15) - Sun Control Film', slug: 'night-vision-15-nv-15', series: 'sun' },
  { name: 'Night Vision 25 (NV-25) - Sun Control Film', slug: 'night-vision-25-nv-25', series: 'sun' },
  { name: 'Night Vision 35 (NV-35) - Sun Control Film', slug: 'night-vision-35-nv-35', series: 'sun' },
  { name: 'Prestige 20', slug: 'prestige-20', series: 'sun' },
  { name: 'Prestige 40', slug: 'prestige-40', series: 'sun' },
  { name: 'Prestige 50', slug: 'prestige-50', series: 'sun' },
  { name: 'Prestige 60', slug: 'prestige-60', series: 'sun' },
  { name: 'Prestige 70', slug: 'prestige-70', series: 'sun' },
  { name: 'SILVER 1', slug: 'silver-1', series: 'sun' },
  { name: 'Silver 15 Exterior (RE15SIARXL)', slug: 'silver-15-exterior-re15siarxl', series: 'sun' },
  { name: 'Silver 35 (RE35SIARL) - Sun Control Film', slug: 'silver-35-re35siarl', series: 'sun' },
  { name: 'Silver P-18 (P18ARL) - Sun Control Film', slug: 'silver-p-18-p18arl', series: 'sun' },
  { name: 'Ultra Prestige 50', slug: 'ultra-prestige-50', series: 'sun' },
  { name: 'Ultra Prestige 70', slug: 'ultra-prestige-70', series: 'sun' },

  // === SAFETY ===
  { name: 'S40 Exterior (SH4CLARXL) - Safety/Security', slug: 's40-exterior-sh4clarxl', series: 'safety' },
  { name: 'S70 Exterior (SH7CLARXL) - Safety/Security', slug: 's70-exterior-sh7clarxl', series: 'safety' },
  { name: 'Safety Neutral 35 - Safety/Security', slug: 'safety-neutral-35', series: 'safety' },
  { name: 'Safety S2400', slug: 'safety-s2400', series: 'safety' },
  { name: 'Safety S140 (SH14CLARL) - Safety/Security', slug: 'safety-s140-sh14clarl', series: 'safety' },
  { name: 'Safety S40 (SH4CLARL) - Safety/Security', slug: 'safety-s40-sh4clarl', series: 'safety' },
  { name: 'Safety S70 (SH7CLARL) - Safety/Security', slug: 'safety-s70-sh7clarl', series: 'safety' },
  { name: 'Safety S80 (SH8CLARL) - Safety/Security', slug: 'safety-s80-sh8clarl', series: 'safety' },
  { name: 'Safety Silver 20 - Safety/Security', slug: 'safety-silver-20', series: 'safety' },
  { name: 'Ultra Night Vision S25 (S25NVAR400) - Safety/Security', slug: 'ultra-night-vision-s25-s25nvar400', series: 'safety' },
  { name: 'Ultra S800 - Safety/Security', slug: 'ultra-s800', series: 'safety' },
];

// ─── Series metadata ───
const seriesMeta = {
  sun: { name: 'Sun Control Series', color: SUN, categories: ['Energy Savings', 'Glare Reduction'] },
  safety: { name: 'Scotchshield Safety Series', color: SAFETY, categories: ['Safety', 'Security'] },
  ceramic: { name: 'Ceramic Series', color: CERAMIC, categories: ['Energy Savings', 'UV Protection'] },
  fasara: { name: 'Fasara Decorative Series', color: FASARA, categories: ['Privacy', 'Decorative'] },
};

// ─── Specs ───
const specsMap = {
  'prestige-20': { vlt: '20%', heatRejection: 'up to 80%', uvBlock: 'over 99%', thickness: null, warranty: 'Residential lifetime / Commercial 15yr' },
  'prestige-40': { vlt: '40%', heatRejection: 'up to 63%', uvBlock: 'over 99%', thickness: null, warranty: 'Residential lifetime / Commercial 15yr' },
  'prestige-50': { vlt: '50%', heatRejection: 'up to 59%', uvBlock: 'over 99%', thickness: null, warranty: 'Residential lifetime / Commercial 15yr' },
  'prestige-60': { vlt: '60%', heatRejection: 'up to 55%', uvBlock: 'over 99%', thickness: null, warranty: 'Residential lifetime / Commercial 15yr' },
  'prestige-70': { vlt: '70%', heatRejection: 'up to 40%', uvBlock: 'over 99%', thickness: null, warranty: 'Residential lifetime / Commercial 15yr' },
  'ultra-prestige-50': { vlt: '50%', heatRejection: 'up to 62%', uvBlock: 'over 99%', thickness: null, warranty: 'Residential lifetime / Commercial 15yr' },
  'ultra-prestige-70': { vlt: '70%', heatRejection: 'up to 45%', uvBlock: 'over 99%', thickness: null, warranty: 'Residential lifetime / Commercial 15yr' },
  'exterior-prestige-20-prx-20': { vlt: '21%', heatRejection: 'up to 79%', uvBlock: 'over 99%', thickness: null, warranty: 'Residential lifetime / Commercial 15yr' },
  'exterior-prestige-40-prx-40': { vlt: '41%', heatRejection: 'up to 63%', uvBlock: 'over 99%', thickness: null, warranty: 'Residential lifetime / Commercial 15yr' },
  'exterior-prestige-70-prx70': { vlt: '72%', heatRejection: 'up to 44%', uvBlock: 'over 99%', thickness: null, warranty: 'Residential lifetime / Commercial 15yr' },
  'exterior-prestige-90-prx90': { vlt: '90%', heatRejection: 'up to 28%', uvBlock: 'over 99%', thickness: null, warranty: 'Residential lifetime / Commercial 15yr' },
  'night-vision-15-nv-15': { vlt: '15%', heatRejection: 'up to 80%', uvBlock: 'over 99%', thickness: null, warranty: 'Residential lifetime / Commercial 15yr' },
  'night-vision-25-nv-25': { vlt: '25%', heatRejection: 'up to 64%', uvBlock: 'over 99%', thickness: null, warranty: 'Residential lifetime / Commercial 15yr' },
  'night-vision-35-nv-35': { vlt: '35%', heatRejection: 'up to 50%', uvBlock: 'over 99%', thickness: null, warranty: 'Residential lifetime / Commercial 15yr' },
  'le-20-sun-control-film': { vlt: '20%', heatRejection: 'up to 80%', uvBlock: 'over 99%', thickness: null, warranty: 'Residential lifetime / Commercial 15yr' },
  'le-35-sun-control-film': { vlt: '35%', heatRejection: 'up to 50%', uvBlock: 'over 99%', thickness: null, warranty: 'Residential lifetime / Commercial 15yr' },
  'silver-p-18-p18arl': { vlt: '18%', heatRejection: 'up to 73%', uvBlock: 'over 99%', thickness: null, warranty: 'Residential lifetime / Commercial 15yr' },
  'silver-35-re35siarl': { vlt: '35%', heatRejection: 'up to 58%', uvBlock: 'over 99%', thickness: null, warranty: 'Residential lifetime / Commercial 15yr' },
  'silver-1': { vlt: '1%', heatRejection: null, uvBlock: 'over 99%', thickness: null, warranty: 'Residential lifetime / Commercial 15yr' },
  'silver-15-exterior-re15siarxl': { vlt: '15%', heatRejection: null, uvBlock: 'over 99%', thickness: null, warranty: 'Residential lifetime / Commercial 15yr' },
  'ceramic-35-ca35': { vlt: '35%', heatRejection: 'up to 59%', uvBlock: '99%', thickness: null, warranty: 'Residential lifetime / Commercial 15yr' },
  'ceramic-45-ca45': { vlt: '45%', heatRejection: 'up to 54%', uvBlock: '99%', thickness: null, warranty: 'Residential lifetime / Commercial 15yr' },
  'ceramic-60-ca60': { vlt: '60%', heatRejection: 'up to 43%', uvBlock: '99%', thickness: null, warranty: 'Residential lifetime / Commercial 15yr' },
  'ceramic-80-ca80': { vlt: '80%', heatRejection: 'up to 23%', uvBlock: '99%', thickness: null, warranty: 'Residential lifetime / Commercial 15yr' },
  'safety-s40-sh4clarl': { vlt: null, heatRejection: null, uvBlock: 'over 99%', thickness: '4mil', warranty: 'Commercial 12yr' },
  'safety-s70-sh7clarl': { vlt: null, heatRejection: null, uvBlock: 'over 99%', thickness: '7mil', warranty: 'Commercial 12yr' },
  'safety-s80-sh8clarl': { vlt: null, heatRejection: null, uvBlock: 'over 99%', thickness: '8mil', warranty: 'Commercial 12yr' },
  'safety-s140-sh14clarl': { vlt: null, heatRejection: null, uvBlock: 'over 99%', thickness: '14mil', warranty: 'Commercial 12yr' },
  'safety-s2400': { vlt: null, heatRejection: null, uvBlock: 'over 99%', thickness: '24mil', warranty: 'Commercial 12yr' },
  'safety-neutral-35': { vlt: '35%', heatRejection: null, uvBlock: 'over 99%', thickness: null, warranty: 'Commercial 12yr' },
  'safety-silver-20': { vlt: '20%', heatRejection: null, uvBlock: 'over 99%', thickness: null, warranty: 'Commercial 12yr' },
  'ultra-s800': { vlt: null, heatRejection: null, uvBlock: 'over 99%', thickness: '8mil', warranty: 'Commercial 12yr' },
  's40-exterior-sh4clarxl': { vlt: null, heatRejection: null, uvBlock: 'over 99%', thickness: '4mil', warranty: 'Commercial 12yr' },
  's70-exterior-sh7clarxl': { vlt: null, heatRejection: null, uvBlock: 'over 99%', thickness: '7mil', warranty: 'Commercial 12yr' },
  'ultra-night-vision-s25-s25nvar400': { vlt: '25%', heatRejection: null, uvBlock: 'over 99%', thickness: '4mil', warranty: 'Commercial 12yr' },
};

// ─── Related slugs ───
const relatedMap = {
  'prestige-20': ['prestige-40', 'prestige-50', 'night-vision-15-nv-15'],
  'prestige-40': ['prestige-20', 'prestige-50', 'ceramic-35-ca35'],
  'prestige-50': ['prestige-40', 'prestige-60', 'ceramic-45-ca45'],
  'prestige-60': ['prestige-50', 'prestige-70', 'ceramic-60-ca60'],
  'prestige-70': ['prestige-60', 'ultra-prestige-70', 'ceramic-80-ca80'],
  'ultra-prestige-50': ['ultra-prestige-70', 'prestige-50', 'le-35-sun-control-film'],
  'ultra-prestige-70': ['ultra-prestige-50', 'prestige-70', 'exterior-prestige-70-prx70'],
  'exterior-prestige-20-prx-20': ['exterior-prestige-40-prx-40', 'prestige-20', 'silver-15-exterior-re15siarxl'],
  'exterior-prestige-40-prx-40': ['exterior-prestige-20-prx-20', 'exterior-prestige-70-prx70', 'prestige-40'],
  'exterior-prestige-70-prx70': ['exterior-prestige-40-prx-40', 'exterior-prestige-90-prx90', 'prestige-70'],
  'exterior-prestige-90-prx90': ['exterior-prestige-70-prx70', 'prestige-70', 'ceramic-80-ca80'],
  'night-vision-15-nv-15': ['night-vision-25-nv-25', 'prestige-20', 'le-20-sun-control-film'],
  'night-vision-25-nv-25': ['night-vision-15-nv-15', 'night-vision-35-nv-35', 'ultra-night-vision-s25-s25nvar400'],
  'night-vision-35-nv-35': ['night-vision-25-nv-25', 'le-35-sun-control-film', 'prestige-40'],
  'le-20-sun-control-film': ['le-35-sun-control-film', 'prestige-20', 'silver-p-18-p18arl'],
  'le-35-sun-control-film': ['le-20-sun-control-film', 'night-vision-35-nv-35', 'silver-35-re35siarl'],
  'silver-p-18-p18arl': ['silver-35-re35siarl', 'silver-1', 'le-20-sun-control-film'],
  'silver-35-re35siarl': ['silver-p-18-p18arl', 'silver-15-exterior-re15siarxl', 'le-35-sun-control-film'],
  'silver-1': ['silver-p-18-p18arl', 'silver-15-exterior-re15siarxl', 'prestige-20'],
  'silver-15-exterior-re15siarxl': ['silver-35-re35siarl', 'silver-1', 'exterior-prestige-20-prx-20'],
  'ceramic-35-ca35': ['ceramic-45-ca45', 'prestige-40', 'night-vision-35-nv-35'],
  'ceramic-45-ca45': ['ceramic-35-ca35', 'ceramic-60-ca60', 'prestige-50'],
  'ceramic-60-ca60': ['ceramic-45-ca45', 'ceramic-80-ca80', 'prestige-60'],
  'ceramic-80-ca80': ['ceramic-60-ca60', 'prestige-70', 'exterior-prestige-90-prx90'],
  'safety-s40-sh4clarl': ['safety-s70-sh7clarl', 's40-exterior-sh4clarxl', 'safety-neutral-35'],
  'safety-s70-sh7clarl': ['safety-s40-sh4clarl', 'safety-s80-sh8clarl', 's70-exterior-sh7clarxl'],
  'safety-s80-sh8clarl': ['safety-s70-sh7clarl', 'safety-s140-sh14clarl', 'ultra-s800'],
  'safety-s140-sh14clarl': ['safety-s80-sh8clarl', 'safety-s2400', 'ultra-s800'],
  'safety-s2400': ['safety-s140-sh14clarl', 'ultra-s800', 'safety-s80-sh8clarl'],
  'safety-neutral-35': ['safety-silver-20', 'safety-s40-sh4clarl', 'night-vision-35-nv-35'],
  'safety-silver-20': ['safety-neutral-35', 'ultra-night-vision-s25-s25nvar400', 'silver-p-18-p18arl'],
  'ultra-s800': ['safety-s80-sh8clarl', 'safety-s140-sh14clarl', 'ultra-night-vision-s25-s25nvar400'],
  's40-exterior-sh4clarxl': ['s70-exterior-sh7clarxl', 'safety-s40-sh4clarl', 'safety-neutral-35'],
  's70-exterior-sh7clarxl': ['s40-exterior-sh4clarxl', 'safety-s70-sh7clarl', 'safety-s80-sh8clarl'],
  'ultra-night-vision-s25-s25nvar400': ['night-vision-25-nv-25', 'safety-silver-20', 'ultra-s800'],
};

// ─── Description generators ───

function fasaraDesc(name, slug, i) {
  const nh1 = pickNh(i);
  const nh2 = pickNh2(i);
  const patterns = [
    'linear striations', 'geometric latticework', 'organic crystalline texture',
    'gradient transition', 'fine linear pattern', 'dot matrix arrangement',
    'woven fabric aesthetic', 'silk-like sheen', 'prismatic refraction',
    'frosted crystalline surface', 'matte opaque finish', 'translucent layered design',
  ];
  const pat = patterns[i % patterns.length];
  const apps = [
    'interior glass partitions', 'conference room doors', 'office privacy walls',
    'lobby entryway glazing', 'retail storefront windows', 'hospitality corridor screens',
    'museum gallery partitions', 'residential bathroom windows', 'stairwell enclosures',
    'restaurant divider panels',
  ];
  const app = apps[i % apps.length];

  const p1 = `This decorative glass film brings a ${pat} to interior glazing, offering architects and designers a versatile tool for privacy and visual interest. The ${name} pattern integrates seamlessly into both modern and traditional interiors, diffusing light without blocking it entirely. Its polyester construction ensures long-term optical clarity and dimensional stability.`;

  const p2 = `Philadelphia's mix of historic ${nh1} townhouses and contemporary ${nh2} office lofts provides an ideal backdrop for this design. Property managers appreciate how it softens transparent partitions in co-working spaces and residential settings alike, creating visual separation that respects open floor plans while adding a designed layer of privacy.`;

  const p3 = `Installation uses 3M's pressure-sensitive adhesive system designed for interior glass surfaces. The film maintains consistent appearance under varied lighting conditions, from fluorescent office illumination to natural sidelight in residential settings. It can be trimmed on-site for custom glazing configurations and works with standard glass thicknesses common in commercial construction.`;

  const p4 = `Compared to etched glass alternatives, this film delivers a similar aesthetic at a fraction of the cost and installation complexity. It also offers flexibility for future rebranding or renovation — the film can be removed and replaced without replacing the glass itself. For Philadelphia properties where tenant turnover is common, this removability is a significant practical advantage.`;

  return [p1, p2, p3, p4].join('\n\n');
}

function fasaraShort(name, slug, i) {
  const lead = leadWords[i % leadWords.length];
  const variants = [
    `${lead} interior glazing with a distinctive pattern that balances privacy and natural light for Philadelphia workspaces.`,
    `${lead} glass partitions with refined texture that elevates office and residential design throughout Philadelphia.`,
    `${lead} any transparent surface with this decorative film, ideal for Philadelphia's mixed-use commercial and residential spaces.`,
    `${lead} Philadelphia interiors with a sophisticated privacy solution that diffuses light without sacrificing openness.`,
    `${lead} office and retail environments with a decorative film that complements Philadelphia's architectural heritage.`,
    `${lead} interior doors and partitions with a textured finish that adds depth to Philadelphia commercial spaces.`,
    `${lead} plain glass into a design feature, bringing privacy and style to Philadelphia's adaptive reuse projects.`,
    `${lead} workspace privacy with a film pattern suited to Philadelphia's open-plan offices and conference rooms.`,
    `${lead} hospitality and retail interiors with a decorative glazing solution popular in Philadelphia's vibrant districts.`,
    `${lead} residential and commercial partitions with subtle visual interest that suits Philadelphia's design-forward properties.`,
  ];
  return variants[i % variants.length];
}

function fasaraBenefits(name, slug, i) {
  const benefitSets = [
    [
      { heading: 'Privacy Without Sacrificing Light', body: `The ${name} pattern diffuses incoming daylight to create visual privacy while maintaining a bright, open feel. Occupants in Philadelphia offices and homes enjoy natural illumination without the exposure of clear glass.` },
      { heading: 'Design Flexibility', body: `Architects can specify this film across entire facades or as accent panels. The ${pat(slug, i)} works equally well on full-height partitions and smaller door lite applications, adapting to varied project scopes.` },
      { heading: 'Cost-Effective Alternative to Etched Glass', body: `Replacing glass panels with custom etching is expensive and permanent. This film achieves a comparable visual effect at significantly lower cost and can be updated when design preferences change.` },
    ],
    [
      { heading: 'Light Diffusion', body: `The film scatters incoming light to reduce harsh shadows and glare, creating a softer ambient glow. This effect is especially valuable in Philadelphia's east- and west-facing spaces where direct sun can create uncomfortable conditions.` },
      { heading: 'Removable and Replaceable', body: `When tenant changes or renovations occur, the film can be removed without damaging the glass substrate. This makes it ideal for leased Philadelphia properties where design flexibility matters.` },
      { heading: 'Architectural Enhancement', body: `The ${name} adds a deliberate design layer to otherwise plain glazing, elevating the perceived quality of interiors in Philadelphia's competitive commercial real estate market.` },
    ],
    [
      { heading: 'Visual Privacy', body: `By obscuring clear sightlines while transmitting light, this film creates comfortable separation between adjacent spaces. Philadelphia offices use it to define meeting areas without building solid walls.` },
      { heading: 'Consistent Aesthetic', body: `The pattern maintains uniform appearance across different lighting conditions, ensuring the design intent holds from morning through evening in Philadelphia's varied seasonal light.` },
      { heading: 'Simple Maintenance', body: `The film surface cleans with standard glass-cleaning products. No special coatings or treatments are required, making it practical for Philadelphia facility teams managing multiple properties.` },
    ],
  ];
  return benefitSets[i % benefitSets.length];
}

function pat(slug, i) {
  const pats = ['linear texture', 'crystalline finish', 'gradient effect', 'geometric rhythm', 'soft diffusion', 'prismatic quality'];
  return pats[i % pats.length];
}

// ─── Sun Control descriptions ───
function sunDesc(name, slug, i) {
  const nh1 = pickNh(i);
  const nh2 = pickNh2(i);
  const specs = specsMap[slug];
  const vlt = specs.vlt;
  const heat = specs.heatRejection;

  const p1 = `This spectrally selective window film rejects solar heat while preserving desirable daylight transmission. With visible light transmission of ${vlt}, it strikes a specific balance between clarity and thermal performance. The ${name} uses non-metallized, multi-layer optical technology to achieve heat rejection without interfering with wireless signals.`;

  const p2 = `Philadelphia's Zone 4A climate brings humid summers where solar gain through untreated glass can overwhelm HVAC systems. Buildings in dense neighborhoods like ${nh1} and ${nh2} benefit from reduced cooling loads, while winter heating efficiency improves as the film helps retain interior warmth. The film is particularly effective on south- and west-facing facades that receive extended sun exposure.`;

  const p3 = `The non-metalized construction means no signal interference with cell phones, Wi-Fi, or building automation systems. Heat rejection of ${heat} reduces the workload on HVAC equipment, extending system life and lowering energy costs. The film's low reflectivity maintains exterior aesthetics and interior views, important for Philadelphia's historic districts where building appearance is regulated.`;

  const p4 = `Compared to traditional reflective films, this product offers superior heat rejection with significantly better light transmission and no mirror-like appearance. Philadelphia property owners who want energy savings without altering their building's character find this an ideal solution. It outperforms standard tinted films in both thermal performance and visual quality.`;

  return [p1, p2, p3, p4].join('\n\n');
}

function sunShort(name, slug, i) {
  const lead = leadWords[i % leadWords.length];
  const specs = specsMap[slug];
  const variants = [
    `${lead} Philadelphia buildings with solar heat rejection and clear views, reducing cooling costs without darkening interiors.`,
    `${lead} energy performance with this non-metallized film that blocks heat while preserving wireless signals in Philadelphia.`,
    `${lead} indoor comfort with advanced solar control technology tailored to Philadelphia's demanding seasonal climate.`,
    `${lead} cooling costs and glare with a film that maintains natural light for Philadelphia's commercial and residential spaces.`,
    `${lead} HVAC efficiency with spectrally selective technology designed for Philadelphia's hot summers and cold winters.`,
    `${lead} south-facing glass with heat rejection that protects interiors without compromising Philadelphia's architectural character.`,
  ];
  return variants[i % variants.length];
}

function sunBenefits(name, slug, i) {
  const specs = specsMap[slug];
  const benefitSets = [
    [
      { heading: 'Superior Heat Rejection', body: `With ${specs.heatRejection} total solar energy rejection, this film significantly reduces solar heat gain through glass. Philadelphia buildings benefit from lower cooling costs and improved occupant comfort during peak summer months.` },
      { heading: 'Non-Metallized Technology', body: `Unlike traditional reflective films, the ${name} uses no metal layers, so it won't interfere with cell phone signals, Wi-Fi, or GPS. This is critical in Philadelphia's dense urban environment where signal reliability matters.` },
      { heading: 'UV Protection', body: `The film blocks over 99% of UV rays, protecting furnishings, artwork, and flooring from fading. Philadelphia's museums, retail spaces, and historic properties with valuable interiors gain long-term preservation benefits.` },
    ],
    [
      { heading: 'Energy Savings', body: `By reducing solar heat gain, this film cuts cooling demand and lowers energy bills year-round. In Philadelphia's mixed climate, the savings compound across both residential and commercial properties.` },
      { heading: 'Low Reflectivity', body: `The film maintains a natural appearance from both interior and exterior viewpoints. This matters in Philadelphia's historic districts where building facades must preserve their original character.` },
      { heading: 'Glare Reduction', body: `With ${specs.vlt} visible light transmission, the film noticeably reduces glare on screens and work surfaces. Philadelphia offices report improved productivity and comfort after installation.` },
    ],
    [
      { heading: 'Year-Round Comfort', body: `The film helps retain interior heat during winter while rejecting solar gain in summer. Philadelphia's wide temperature swings make this dual-season performance especially valuable.` },
      { heading: 'Clear Views', body: `Unlike dark tinted films, this product preserves outward visibility and natural light. Philadelphia residents and workers enjoy unobstructed views of the city skyline and historic streetscapes.` },
      { heading: 'Fast ROI', body: `Energy savings typically offset the installation cost within a few years. Philadelphia commercial properties often see the strongest returns due to large glazing areas and high cooling demands.` },
    ],
  ];
  return benefitSets[i % benefitSets.length];
}

// ─── Safety descriptions ───
function safetyDesc(name, slug, i) {
  const nh1 = pickNh(i);
  const nh2 = pickNh2(i);
  const specs = specsMap[slug];
  const thick = specs.thickness;

  const p1 = `This safety and security window film helps retain glass fragments when glass breaks, reducing the risk of injury from flying shards. At ${thick} thickness, the ${name} provides a specific level of fragment retention performance for commercial and residential glazing applications.`;

  const p2 = `Philadelphia's historic buildings in ${nh1} and modern commercial towers in ${nh2} both benefit from enhanced glass safety. The film is particularly relevant for ground-floor retail windows, lobby entrances, and residential units where breakage risk is elevated. Property managers value the added protection without the need for disruptive glass replacement.`;

  const p3 = `The film uses a high-performance adhesive system designed to bond durably to glass surfaces under varied temperature and humidity conditions. It maintains optical clarity and does not yellow over time. The ${thick} construction offers specific resistance to penetration, helping hold broken glass in place until professional remediation can occur.`;

  const p4 = `Compared to thinner standard films, this product provides measurably greater fragment retention. Philadelphia property owners who need to meet building code requirements for glass safety or who want to enhance security without replacing existing windows find this a cost-effective upgrade. It does not provide absolute protection but significantly reduces the hazard radius from broken glass.`;

  return [p1, p2, p3, p4].join('\n\n');
}

function safetyShort(name, slug, i) {
  const lead = leadWords[i % leadWords.length];
  const variants = [
    `${lead} Philadelphia properties with glass fragment retention that helps protect occupants and reduces breakage hazards.`,
    `${lead} building safety with this security film designed to hold shattered glass in place across Philadelphia facilities.`,
    `${lead} commercial and residential glazing with a durable film that helps retain glass fragments upon impact in Philadelphia.`,
    `${lead} ground-floor windows and lobby entrances with fragment-retaining film suited to Philadelphia's urban density.`,
    `${lead} historic and modern Philadelphia buildings with safety film that enhances glass performance without replacement.`,
  ];
  return variants[i % variants.length];
}

function safetyBenefits(name, slug, i) {
  const specs = specsMap[slug];
  const benefitSets = [
    [
      { heading: 'Fragment Retention', body: `The ${specs.thickness} construction helps retain glass fragments when panes break, reducing the risk of injury from flying shards. Philadelphia commercial properties use it to enhance occupant safety in high-traffic areas.` },
      { heading: 'No Glass Replacement Needed', body: `The film applies directly to existing glass, avoiding the cost and disruption of full pane replacement. Philadelphia's historic buildings benefit from this retrofit approach that preserves original glazing.` },
      { heading: 'Optical Clarity', body: `Despite its security function, the film maintains high visible light transmission. Philadelphia offices and retail spaces keep their bright, open appearance without visible compromise.` },
    ],
    [
      { heading: 'Enhanced Security', body: `By holding broken glass in place, this film slows forced entry attempts and reduces the spread of shards. Philadelphia property managers use it as part of layered security strategies for retail and commercial spaces.` },
      { heading: 'Durable Adhesion', body: `The pressure-sensitive adhesive maintains its bond through Philadelphia's seasonal temperature cycles. Long-term performance is supported by a commercial warranty for added confidence.` },
      { heading: 'UV Protection', body: `The film also blocks over 99% of UV radiation, providing a secondary benefit of interior protection. Philadelphia's museums and retail spaces gain fading protection for displayed items.` },
    ],
    [
      { heading: 'Code Compliance Support', body: `The film helps glazing meet safety requirements for impact resistance. Philadelphia building owners use it to bring older glass up to current code expectations without major renovation.` },
      { heading: 'Cost-Effective Upgrade', body: `Compared to replacing glass with laminated or tempered alternatives, this film delivers comparable safety benefits at significantly lower cost. Philadelphia's large commercial portfolios benefit from the scalability of the solution.` },
      { heading: 'Quick Remediation', body: `When glass breaks, the film holds fragments in place, allowing for safer cleanup and temporary weatherproofing until permanent repairs are made. This is valuable for Philadelphia's variable weather conditions.` },
    ],
  ];
  return benefitSets[i % benefitSets.length];
}

// ─── Ceramic descriptions ───
function ceramicDesc(name, slug, i) {
  const nh1 = pickNh(i);
  const nh2 = pickNh2(i);
  const specs = specsMap[slug];
  const vlt = specs.vlt;
  const heat = specs.heatRejection;

  const p1 = `This nano-ceramic window film uses advanced particle technology to reject heat without metallic content, preserving clarity and signal transparency. With ${vlt} visible light transmission and ${heat} heat rejection, the ${name} delivers a balanced performance profile for applications where natural light matters.`;

  const p2 = `Philadelphia's Zone 4A climate creates real demand for films that reduce summer heat without darkening rooms. Homes in ${nh1} and offices in ${nh2} benefit from the film's ability to cut cooling costs while maintaining bright, welcoming interiors. It's especially effective on east- and west-facing windows where afternoon sun creates peak heat loads.`;

  const p3 = `The nano-ceramic construction contains no metals, so it won't corrode over time or interfere with wireless signals. This makes it suitable for buildings with smart-home systems, cell signal boosters, or building automation networks. The film's neutral color tone blends with any architectural style, from Philadelphia's colonial-era buildings to contemporary glass towers.`;

  const p4 = `Compared to dyed films that fade and reflective films that create mirror effects, this ceramic product offers stable, long-lasting performance with a natural appearance. Philadelphia homeowners and facility managers who want heat rejection without visual compromise find this an excellent middle ground between performance and aesthetics.`;

  return [p1, p2, p3, p4].join('\n\n');
}

function ceramicShort(name, slug, i) {
  const lead = leadWords[i % leadWords.length];
  const variants = [
    `${lead} Philadelphia interiors with nano-ceramic heat rejection that preserves clarity and wireless signals without metallic content.`,
    `${lead} home and office comfort with ceramic technology that blocks heat while keeping Philadelphia spaces bright and connected.`,
    `${lead} solar control with this non-metalized ceramic film, ideal for Philadelphia's signal-sensitive environments.`,
    `${lead} natural light while cutting heat with ceramic nanoparticles designed for Philadelphia's demanding seasonal climate.`,
  ];
  return variants[i % variants.length];
}

function ceramicBenefits(name, slug, i) {
  const specs = specsMap[slug];
  const benefitSets = [
    [
      { heading: 'Non-Metalized Performance', body: `The ceramic construction rejects ${specs.heatRejection} of solar heat without any metal layers. Philadelphia buildings maintain full cell signal, Wi-Fi, and GPS functionality after installation.` },
      { heading: 'Color Stability', body: `Unlike dyed films that can fade or shift color over time, the nano-ceramic particles are inherently stable. Philadelphia properties benefit from consistent appearance throughout the film's warranty life.` },
      { heading: 'Balanced Light and Heat', body: `With ${specs.vlt} visible light transmission, this film preserves natural daylight while reducing thermal gain. Philadelphia homeowners appreciate bright interiors without the heat penalty.` },
    ],
    [
      { heading: 'UV Protection', body: `The film blocks 99% of UV radiation, protecting Philadelphia interiors from fading. Hardwood floors, artwork, and furnishings retain their original appearance longer.` },
      { heading: 'Neutral Appearance', body: `The film's neutral tone doesn't alter the color of incoming light, making it suitable for Philadelphia's design-conscious residential and commercial spaces where visual accuracy matters.` },
      { heading: 'Year-Round Benefit', body: `By reducing summer heat gain and improving winter heat retention, this film delivers energy savings across Philadelphia's full seasonal cycle.` },
    ],
  ];
  return benefitSets[i % benefitSets.length];
}

// ─── Build all products ───
const result = [];
let id = 9001;

for (let i = 0; i < products.length; i++) {
  const p = products[i];
  const meta = seriesMeta[p.series];
  let specs, shortDesc, desc, benefits;

  if (p.series === 'sun') {
    specs = specsMap[p.slug];
    shortDesc = sunShort(p.name, p.slug, i);
    desc = sunDesc(p.name, p.slug, i);
    benefits = sunBenefits(p.name, p.slug, i);
  } else if (p.series === 'safety') {
    specs = specsMap[p.slug];
    shortDesc = safetyShort(p.name, p.slug, i);
    desc = safetyDesc(p.name, p.slug, i);
    benefits = safetyBenefits(p.name, p.slug, i);
  } else if (p.series === 'ceramic') {
    specs = specsMap[p.slug];
    shortDesc = ceramicShort(p.name, p.slug, i);
    desc = ceramicDesc(p.name, p.slug, i);
    benefits = ceramicBenefits(p.name, p.slug, i);
  } else {
    // fasara
    specs = { vlt: null, heatRejection: null, uvBlock: null, thickness: null, warranty: 'Residential lifetime / Commercial 10yr' };
    shortDesc = fasaraShort(p.name, p.slug, i);
    desc = fasaraDesc(p.name, p.slug, i);
    benefits = fasaraBenefits(p.name, p.slug, i);
  }

  const related = relatedMap[p.slug] || [];

  result.push({
    id: id++,
    slug: p.slug,
    name: p.name,
    series: meta.name,
    seriesColor: meta.color,
    categories: meta.categories,
    shortDescription: shortDesc,
    description: desc,
    benefits,
    specs,
    image: `/images/3m-products/${p.slug}.jpg`,
    pdfUrl: null,
    pdfLabel: null,
    relatedSlugs: related,
  });
}

// Verify count
console.log('Total products:', result.length);
const counts = {};
for (const p of result) {
  counts[p.series] = (counts[p.series] || 0) + 1;
}
console.log('Series breakdown:', counts);

fs.writeFileSync(OUT, JSON.stringify(result, null, 2));
console.log('Written to:', OUT);