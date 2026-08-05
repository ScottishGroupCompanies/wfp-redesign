#!/bin/bash
# Generate all images for the commercial service page
# Uses Leonardo NB2 for most images + GPT Image edit for before/after pair
NB2="/Users/christianneaengenheyster/.openclaw/workspace/scripts/nano-banana-2.js"
GPT="/Users/christianneaengenheyster/.openclaw/workspace/scripts/generate-before-after.js"
IMG="/Users/christianneaengenheyster/.openclaw/workspace/projects/window-film-philadelphia/public/images/commercial"

mkdir -p "$IMG"

run() {
  local label="$1" prompt="$2" out="$3"; shift 3
  if [ -f "$out" ]; then echo "⏭  skip: $label"; return; fi
  node "$NB2" "$prompt" "$out" "$@" && echo "✓ $label" || echo "✗ FAILED: $label"
}

START=$(date +%s)
echo "Firing all commercial page images in parallel..."

# ═══ HERO (1376×768) ═══
run "hero" "Single cohesive scene, photorealistic architectural photography of a modern Philadelphia office building exterior, tall glass facade reflecting blue sky, commercial window film installed, professional corporate architecture, clean lines, downtown setting" "$IMG/commercial-window-tinting-philadelphia-hero.jpg" &

# ═══ BEFORE/AFTER — via GPT Image edit API ═══
# Will run separately after NB2 batch

# ═══ INTRO IMAGE (1376×768) ═══
run "intro" "Single cohesive scene, photorealistic interior of a Philadelphia commercial office space, large floor-to-ceiling windows with solar control window film, comfortable work environment, employees at desks, natural light without glare, professional commercial photography" "$IMG/commercial-window-tinting-philadelphia-interior.jpg" &

# ═══ GALLERY BANNER — 5 portrait images (848×1264) ═══
run "gallery-1" "Single cohesive scene, commercial office building lobby in Philadelphia, large windows with window film, modern corporate interior, professional architectural photography" "$IMG/commercial-window-film-philadelphia-gallery-1.jpg" --width 848 --height 1264 &
run "gallery-2" "Single cohesive scene, retail storefront in Philadelphia with anti-graffiti window film installed, clean modern shopfront, professional commercial photography" "$IMG/commercial-window-film-philadelphia-gallery-2.jpg" --width 848 --height 1264 &
run "gallery-3" "Single cohesive scene, hotel lobby in Philadelphia with decorative window film on glass partitions, elegant hospitality interior, professional architectural photography" "$IMG/commercial-window-film-philadelphia-gallery-3.jpg" --width 848 --height 1264 &
run "gallery-4" "Single cohesive scene, restaurant interior in Philadelphia with solar control window film on large windows, comfortable dining atmosphere, professional commercial photography" "$IMG/commercial-window-film-philadelphia-gallery-4.jpg" --width 848 --height 1264 &
run "gallery-5" "Single cohesive scene, museum interior in Philadelphia with UV protection window film, artwork on walls, filtered natural light, professional cultural institution photography" "$IMG/commercial-window-film-philadelphia-gallery-5.jpg" --width 848 --height 1264 &

# ═══ HOUSING/PROPERTY TYPES — 3 images (1200×896) ═══
run "type-office" "Single cohesive scene, modern Philadelphia office tower exterior, glass curtain wall with solar control window film, corporate downtown architecture, professional architectural photography" "$IMG/commercial-window-tinting-philadelphia-office-tower.jpg" &
run "type-retail" "Single cohesive scene, Philadelphia retail storefront with large display windows, commercial window film installed, vibrant shopping district, professional commercial photography" "$IMG/commercial-window-tinting-philadelphia-retail.jpg" &
run "type-hospitality" "Single cohesive scene, Philadelphia hotel exterior with large windows, commercial window film for energy efficiency and comfort, elegant hospitality architecture, professional photography" "$IMG/commercial-window-tinting-philadelphia-hospitality.jpg" &

# ═══ SLIDER — 3 full-bleed images (2752×1536) ═══
run "slider-experience" "Single cohesive scene, photorealistic aerial view of Philadelphia commercial district, multiple office buildings with window film installed, golden hour light, professional architectural photography" "$IMG/commercial-window-tinting-philadelphia-slider-experience.jpg" --width 2752 --height 1536 &
run "slider-certified" "Single cohesive scene, professional installer applying commercial window film to large office building glass, precision tools, commercial installation in progress, professional photography" "$IMG/commercial-window-tinting-philadelphia-slider-certified.jpg" --width 2752 --height 1536 &
run "slider-consultation" "Single cohesive scene, commercial window film consultant meeting with building manager in a Philadelphia office, discussing film samples and building plans, professional business meeting photography" "$IMG/commercial-window-tinting-philadelphia-slider-consultation.jpg" --width 2752 --height 1536 &

# ═══ ACCORDION BENEFITS — 8 images (1200×896) ═══
run "benefit-energy" "Single cohesive scene, commercial office building with solar control window film, HVAC system visible, energy efficiency concept, Philadelphia office interior, professional photography" "$IMG/energy-saving-window-film-philadelphia-commercial.jpg" &
run "benefit-uv" "Single cohesive scene, commercial office interior with UV protection window film, protecting office furniture and equipment near windows, professional commercial photography, Philadelphia" "$IMG/uv-protection-window-film-philadelphia-commercial.jpg" &
run "benefit-security" "Single cohesive scene, security window film on commercial building glass entrance, forced entry protection, professional commercial installation, Philadelphia office building" "$IMG/safety-security-window-film-philadelphia-commercial.jpg" &
run "benefit-glare" "Single cohesive scene, commercial office with glare reduction window film, employees working at computers without screen glare, comfortable productive workspace, Philadelphia, professional photography" "$IMG/glare-reduction-window-film-philadelphia-commercial.jpg" &
run "benefit-privacy" "Single cohesive scene, commercial office with one-way privacy window film, conference room glass partitions, professional corporate interior, Philadelphia, architectural photography" "$IMG/privacy-window-film-philadelphia-commercial.jpg" &
run "benefit-decorative" "Single cohesive scene, decorative window film on commercial office glass partitions, frosted branded design, modern corporate interior, Philadelphia, professional architectural photography" "$IMG/decorative-window-film-philadelphia-commercial.jpg" &
run "benefit-antigraffiti" "Single cohesive scene, anti-graffiti window film on retail storefront glass, clean protected surface, Philadelphia commercial street, professional photography" "$IMG/anti-graffiti-window-film-philadelphia-commercial.jpg" &
run "benefit-solar" "Single cohesive scene, solar control window film on large commercial building windows, heat rejection concept, Philadelphia office interior, professional architectural photography" "$IMG/solar-control-window-film-philadelphia-commercial.jpg" &

# ═══ BENTO GRID — 6 images (1200×896) ═══
run "bento-office" "Single cohesive scene, Philadelphia office building exterior with commercial window tinting, modern glass facade, professional architectural photography" "$IMG/commercial-window-tinting-philadelphia-bento-office.jpg" &
run "bento-install" "Single cohesive scene, professional commercial window film installation in progress, installer applying film to large office window, precision work, Philadelphia" "$IMG/commercial-window-tinting-philadelphia-bento-install.jpg" &
run "bento-finished" "Single cohesive scene, completed commercial window film installation, office interior with treated windows, comfortable professional workspace, Philadelphia" "$IMG/commercial-window-tinting-philadelphia-bento-finished.jpg" &
run "bento-retail" "Single cohesive scene, Philadelphia retail store with commercial window tinting, display windows with film, professional storefront photography" "$IMG/commercial-window-tinting-philadelphia-bento-retail.jpg" &
run "bento-hotel" "Single cohesive scene, Philadelphia hotel with commercial window film, hospitality interior, elegant lobby with treated windows, professional photography" "$IMG/commercial-window-tinting-philadelphia-bento-hotel.jpg" &
run "bento-restaurant" "Single cohesive scene, Philadelphia restaurant with commercial window tinting, comfortable dining room with glare-free windows, professional commercial photography" "$IMG/commercial-window-tinting-philadelphia-bento-restaurant.jpg" &

# ═══ PROCESS SLIDESHOW — 4 images (1200×896) ═══
run "process-consult" "Single cohesive scene, commercial window film consultant assessing large office building windows, measuring and evaluating glass, professional site assessment, Philadelphia" "$IMG/commercial-window-tinting-philadelphia-consultation.jpg" &
run "process-prep" "Single cohesive scene, precision plotter cutting commercial window film to exact dimensions, professional workshop, large-format film preparation, Philadelphia" "$IMG/commercial-window-film-preparation-philadelphia.jpg" &
run "process-install" "Single cohesive scene, professional installer applying commercial window film to large office building glass, squeegeeing from center outward, commercial installation in progress, Philadelphia" "$IMG/commercial-window-tinting-philadelphia-installation.jpg" &
run "process-walkthrough" "Single cohesive scene, installer and building manager doing final walkthrough of completed commercial window film installation, professional handover, Philadelphia office" "$IMG/commercial-window-tinting-philadelphia-walkthrough.jpg" &

# ═══ TESTIMONIAL AVATARS — 4 images (848×848) ═══
run "testimonial-1" "Professional headshot of a commercial property manager, female, 40s, business attire, confident expression, natural office lighting, Philadelphia corporate setting" "$IMG/commercial-window-tinting-philadelphia-testimonial-1.jpg" --width 848 --height 848 &
run "testimonial-2" "Professional headshot of a retail business owner, male, 50s, casual business attire, friendly expression, natural lighting, Philadelphia setting" "$IMG/commercial-window-tinting-philadelphia-testimonial-2.jpg" --width 848 --height 848 &
run "testimonial-3" "Professional headshot of a hotel operations director, female, 30s, professional attire, warm expression, natural lighting, Philadelphia hospitality setting" "$IMG/commercial-window-tinting-philadelphia-testimonial-3.jpg" --width 848 --height 848 &
run "testimonial-4" "Professional headshot of a commercial facilities manager, male, 40s, business casual, professional expression, natural lighting, Philadelphia corporate setting" "$IMG/commercial-window-tinting-philadelphia-testimonial-4.jpg" --width 848 --height 848 &

# ═══ BENTO GRID SYMMETRIC — 6 application subpage images (1200×896) ═══
run "sym-office" "Single cohesive scene, Philadelphia office building with commercial window tinting, modern glass tower, professional architectural photography" "$IMG/commercial-window-tinting-philadelphia-sym-office.jpg" &
run "sym-retail" "Single cohesive scene, Philadelphia retail storefront with commercial window tinting, modern shopfront, professional commercial photography" "$IMG/commercial-window-tinting-philadelphia-sym-retail.jpg" &
run "sym-hotel" "Single cohesive scene, Philadelphia hotel building with commercial window tinting, elegant hospitality architecture, professional photography" "$IMG/commercial-window-tinting-philadelphia-sym-hotel.jpg" &
run "sym-restaurant" "Single cohesive scene, Philadelphia restaurant with commercial window tinting, inviting dining establishment exterior, professional photography" "$IMG/commercial-window-tinting-philadelphia-sym-restaurant.jpg" &
run "sym-museum" "Single cohesive scene, Philadelphia museum building with commercial window tinting, cultural institution architecture, professional photography" "$IMG/commercial-window-tinting-philadelphia-sym-museum.jpg" &
run "sym-church" "Single cohesive scene, Philadelphia church with commercial window tinting, historic faith center, professional architectural photography" "$IMG/commercial-window-tinting-philadelphia-sym-church.jpg" &

wait
END=$(date +%s)
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "NB2 batch done in $((END - START))s"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# ═══ BEFORE/AFTER via GPT Image edit API ═══
echo "Generating before/after pair via GPT Image edit API..."
# Create a custom before/after script for commercial
node -e "
const fs = require('fs');
const path = require('path');

const envPath = path.join(process.env.HOME, '.hermes', '.env');
const envContent = fs.readFileSync(envPath, 'utf8');
const apiKeyMatch = envContent.match(/^OPENAI_API_KEY=(.+)\$/m);
if (!apiKeyMatch) { console.error('❌ OPENAI_API_KEY not found'); process.exit(1); }
const API_KEY = apiKeyMatch[1].trim();

const OUT_DIR = '$IMG';
const BEFORE_PATH = path.join(OUT_DIR, 'commercial-window-tinting-philadelphia-before.jpg');
const AFTER_PATH = path.join(OUT_DIR, 'commercial-window-tinting-philadelphia-after.jpg');

async function generateBefore() {
  console.log('🎨 Generating BEFORE (harsh glare, no film)...');
  const response = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: { 'Authorization': \`Bearer \${API_KEY}\`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'gpt-image-1',
      prompt: 'Photorealistic interior photograph of a Philadelphia commercial office space. Large floor-to-ceiling windows on the west wall let in harsh, bright, glaring afternoon sunlight. The windows are overexposed and blown out. Hot spots of light hit the desks and computer monitors near the windows. The office has modern workstations, ergonomic chairs, and carpet flooring. Employees are squinting at their screens. The overall feeling is uncomfortably bright and washed out near the windows. Professional interior photography, natural daylight, high detail, wide angle, 16:9 landscape composition. The camera is positioned centered in the office facing the windows.',
      size: '1536x1024',
      quality: 'high',
      n: 1,
    }),
  });
  const data = await response.json();
  if (!data.data || !data.data[0]) { console.error('Before generation failed:', JSON.stringify(data)); process.exit(1); }
  const b64 = data.data[0].b64_json;
  fs.writeFileSync(BEFORE_PATH, Buffer.from(b64, 'base64'));
  console.log('✓ Before saved');
  return BEFORE_PATH;
}

async function generateAfter(beforePath) {
  console.log('🎨 Generating AFTER (film applied) from before...');
  const beforeBuffer = fs.readFileSync(beforePath);
  const formData = new FormData();
  formData.append('model', 'gpt-image-1');
  formData.append('prompt', 'Apply window film to the glass. The harsh glare through the windows is now soft, even, comfortable light. No hot spots on desks or monitors. The windows show a gentle tinted appearance — not dark, just filtered. The office feels cool and comfortable. Do NOT change the room layout, furniture, camera angle, window frames, or composition. Only change the quality of light coming through the windows from harsh to soft.');
  formData.append('size', '1536x1024');
  formData.append('quality', 'high');
  formData.append('n', '1');
  formData.append('image', new Blob([beforeBuffer]), 'before.png');

  const response = await fetch('https://api.openai.com/v1/images/edits', {
    method: 'POST',
    headers: { 'Authorization': \`Bearer \${API_KEY}\` },
    body: formData,
  });
  const data = await response.json();
  if (!data.data || !data.data[0]) { console.error('After generation failed:', JSON.stringify(data)); process.exit(1); }
  const b64 = data.data[0].b64_json;
  fs.writeFileSync(AFTER_PATH, Buffer.from(b64, 'base64'));
  console.log('✓ After saved');
}

(async () => {
  try {
    if (!fs.existsSync(BEFORE_PATH) || !fs.existsSync(AFTER_PATH)) {
      const bp = await generateBefore();
      await generateAfter(bp);
      console.log('✅ Before/after pair complete');
    } else {
      console.log('⏭  Before/after already exists');
    }
  } catch (e) { console.error('❌', e.message); process.exit(1); }
})();
"

echo ""
echo "════════════════════════════════════════"
echo "ALL IMAGES COMPLETE"
echo "════════════════════════════════════════"
ls -la "$IMG/" | wc -l
echo "files generated"
