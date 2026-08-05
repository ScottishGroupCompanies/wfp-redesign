#!/bin/bash
# Generate missing commercial images — batch 2, smaller groups to avoid rate limits
NB2="/Users/christianneaengenheyster/.openclaw/workspace/scripts/nano-banana-2.js"
IMG="/Users/christianneaengenheyster/.openclaw/workspace/projects/window-film-philadelphia/public/images/commercial"

run() {
  local label="$1" prompt="$2" out="$3"; shift 3
  if [ -f "$out" ]; then echo "⏭  skip: $label"; return; fi
  node "$NB2" "$prompt" "$out" "$@" && echo "✓ $label" || echo "✗ FAILED: $label"
}

echo "=== Batch 2: 31 missing images (8 at a time) ==="

# Batch 2a: hero + intro + housing types
run "hero" "Single cohesive scene, photorealistic architectural photography of a modern Philadelphia office building exterior, tall glass facade reflecting blue sky, commercial window film installed, professional corporate architecture, clean lines, downtown setting" "$IMG/commercial-window-tinting-philadelphia-hero.jpg" &
run "interior" "Single cohesive scene, photorealistic interior of a Philadelphia commercial office space, large floor-to-ceiling windows with solar control window film, comfortable work environment, employees at desks, natural light without glare, professional commercial photography" "$IMG/commercial-window-tinting-philadelphia-interior.jpg" &
run "office-tower" "Single cohesive scene, modern Philadelphia office tower exterior, glass curtain wall with solar control window film, corporate downtown architecture, professional architectural photography" "$IMG/commercial-window-tinting-philadelphia-office-tower.jpg" &
run "retail" "Single cohesive scene, Philadelphia retail storefront with large display windows, commercial window film installed, vibrant shopping district, professional commercial photography" "$IMG/commercial-window-tinting-philadelphia-retail.jpg" &
run "hospitality" "Single cohesive scene, Philadelphia hotel exterior with large windows, commercial window film for energy efficiency and comfort, elegant hospitality architecture, professional photography" "$IMG/commercial-window-tinting-philadelphia-hospitality.jpg" &
run "gallery-1" "Single cohesive scene, commercial office building lobby in Philadelphia, large windows with window film, modern corporate interior, professional architectural photography" "$IMG/commercial-window-film-philadelphia-gallery-1.jpg" --width 848 --height 1264 &
run "gallery-2" "Single cohesive scene, retail storefront in Philadelphia with anti-graffiti window film installed, clean modern shopfront, professional commercial photography" "$IMG/commercial-window-film-philadelphia-gallery-2.jpg" --width 848 --height 1264 &
run "gallery-3" "Single cohesive scene, hotel lobby in Philadelphia with decorative window film on glass partitions, elegant hospitality interior, professional architectural photography" "$IMG/commercial-window-film-philadelphia-gallery-3.jpg" --width 848 --height 1264 &
wait
echo "Batch 2a done"

sleep 5

# Batch 2b: gallery-5 + sliders + bento
run "gallery-5" "Single cohesive scene, museum interior in Philadelphia with UV protection window film, artwork on walls, filtered natural light, professional cultural institution photography" "$IMG/commercial-window-film-philadelphia-gallery-5.jpg" --width 848 --height 1264 &
run "slider-experience" "Single cohesive scene, photorealistic aerial view of Philadelphia commercial district, multiple office buildings with window film installed, golden hour light, professional architectural photography" "$IMG/commercial-window-tinting-philadelphia-slider-experience.jpg" --width 2752 --height 1536 &
run "slider-certified" "Single cohesive scene, professional installer applying commercial window film to large office building glass, precision tools, commercial installation in progress, professional photography" "$IMG/commercial-window-tinting-philadelphia-slider-certified.jpg" --width 2752 --height 1536 &
run "slider-consultation" "Single cohesive scene, commercial window film consultant meeting with building manager in a Philadelphia office, discussing film samples and building plans, professional business meeting photography" "$IMG/commercial-window-tinting-philadelphia-slider-consultation.jpg" --width 2752 --height 1536 &
run "bento-finished" "Single cohesive scene, completed commercial window film installation, office interior with treated windows, comfortable professional workspace, Philadelphia" "$IMG/commercial-window-tinting-philadelphia-bento-finished.jpg" &
run "bento-retail" "Single cohesive scene, Philadelphia retail store with commercial window tinting, display windows with film, professional storefront photography" "$IMG/commercial-window-tinting-philadelphia-bento-retail.jpg" &
run "bento-restaurant" "Single cohesive scene, Philadelphia restaurant with commercial window tinting, comfortable dining room with glare-free windows, professional commercial photography" "$IMG/commercial-window-tinting-philadelphia-bento-restaurant.jpg" &
run "walkthrough" "Single cohesive scene, installer and building manager doing final walkthrough of completed commercial window film installation, professional handover, Philadelphia office" "$IMG/commercial-window-tinting-philadelphia-walkthrough.jpg" &
wait
echo "Batch 2b done"

sleep 5

# Batch 2c: benefits + sym
run "benefit-energy" "Single cohesive scene, commercial office building with solar control window film, HVAC system visible, energy efficiency concept, Philadelphia office interior, professional photography" "$IMG/energy-saving-window-film-philadelphia-commercial.jpg" &
run "benefit-uv" "Single cohesive scene, commercial office interior with UV protection window film, protecting office furniture and equipment near windows, professional commercial photography, Philadelphia" "$IMG/uv-protection-window-film-philadelphia-commercial.jpg" &
run "benefit-security" "Single cohesive scene, security window film on commercial building glass entrance, forced entry protection, professional commercial installation, Philadelphia office building" "$IMG/safety-security-window-film-philadelphia-commercial.jpg" &
run "benefit-decorative" "Single cohesive scene, decorative window film on commercial office glass partitions, frosted branded design, modern corporate interior, Philadelphia, professional architectural photography" "$IMG/decorative-window-film-philadelphia-commercial.jpg" &
run "benefit-solar" "Single cohesive scene, solar control window film on large commercial building windows, heat rejection concept, Philadelphia office interior, professional architectural photography" "$IMG/solar-control-window-film-philadelphia-commercial.jpg" &
run "sym-office" "Single cohesive scene, Philadelphia office building with commercial window tinting, modern glass tower, professional architectural photography" "$IMG/commercial-window-tinting-philadelphia-sym-office.jpg" &
run "sym-retail" "Single cohesive scene, Philadelphia retail storefront with commercial window tinting, modern shopfront, professional commercial photography" "$IMG/commercial-window-tinting-philadelphia-sym-retail.jpg" &
run "sym-hotel" "Single cohesive scene, Philadelphia hotel building with commercial window tinting, elegant hospitality architecture, professional photography" "$IMG/commercial-window-tinting-philadelphia-sym-hotel.jpg" &
wait
echo "Batch 2c done"

sleep 5

# Batch 2d: remaining sym + testimonials
run "sym-restaurant" "Single cohesive scene, Philadelphia restaurant with commercial window tinting, inviting dining establishment exterior, professional photography" "$IMG/commercial-window-tinting-philadelphia-sym-restaurant.jpg" &
run "sym-museum" "Single cohesive scene, Philadelphia museum building with commercial window tinting, cultural institution architecture, professional photography" "$IMG/commercial-window-tinting-philadelphia-sym-museum.jpg" &
run "sym-church" "Single cohesive scene, Philadelphia church with commercial window tinting, historic faith center, professional architectural photography" "$IMG/commercial-window-tinting-philadelphia-sym-church.jpg" &
run "testimonial-2" "Professional headshot of a retail business owner, male, 50s, casual business attire, friendly expression, natural lighting, Philadelphia setting" "$IMG/commercial-window-tinting-philadelphia-testimonial-2.jpg" --width 848 --height 848 &
run "testimonial-3" "Professional headshot of a hotel operations director, female, 30s, professional attire, warm expression, natural lighting, Philadelphia hospitality setting" "$IMG/commercial-window-tinting-philadelphia-testimonial-3.jpg" --width 848 --height 848 &
run "testimonial-4" "Professional headshot of a commercial facilities manager, male, 40s, business casual, professional expression, natural lighting, Philadelphia corporate setting" "$IMG/commercial-window-tinting-philadelphia-testimonial-4.jpg" --width 848 --height 848 &
wait
echo "Batch 2d done"

# Before/after via GPT Image edit (fix the mimetype issue)
echo "Generating before/after pair..."
node -e "
const fs = require('fs');
const path = require('path');

const envPath = path.join(process.env.HOME, '.hermes', '.env');
const envContent = fs.readFileSync(envPath, 'utf8');
const apiKeyMatch = envContent.match(/^OPENAI_API_KEY=(.+)\$/m);
if (!apiKeyMatch) { console.error('No OPENAI_API_KEY'); process.exit(1); }
const API_KEY = apiKeyMatch[1].trim();

const OUT_DIR = '$IMG';
const BEFORE_PATH = path.join(OUT_DIR, 'commercial-window-tinting-philadelphia-before.jpg');
const AFTER_PATH = path.join(OUT_DIR, 'commercial-window-tinting-philadelphia-after.jpg');

// Check if before already exists (from batch 1)
if (!fs.existsSync(BEFORE_PATH)) {
  console.error('Before image not found. Run batch 1 first.');
  process.exit(1);
}

// Convert the JPEG to PNG format for the edit API
const { execSync } = require('child_process');
const pngPath = BEFORE_PATH.replace(/\.jpg$/, '.png');
try {
  execSync('sips -s format png \"' + BEFORE_PATH + '\" --out \"' + pngPath + '\"', {stdio:'inherit'});
} catch(e) {
  // Try ImageMagick
  try { execSync('convert \"' + BEFORE_PATH + '\" \"' + pngPath + '\"', {stdio:'inherit'}); }
  catch(e2) { console.error('Need sips or ImageMagick to convert'); process.exit(1); }
}

const beforeBuffer = fs.readFileSync(pngPath);
const formData = new FormData();
formData.append('model', 'gpt-image-1');
formData.append('prompt', 'Apply window film to the glass. The harsh glare through the windows is now soft, even, comfortable light. No hot spots on desks or monitors. The windows show a gentle tinted appearance — not dark, just filtered. The office feels cool and comfortable. Do NOT change the room layout, furniture, camera angle, window frames, or composition. Only change the quality of light coming through the windows from harsh to soft.');
formData.append('size', '1536x1024');
formData.append('quality', 'high');
formData.append('n', '1');
formData.append('image', new Blob([beforeBuffer], { type: 'image/png' }), 'before.png');

(async () => {
  console.log('Generating AFTER from before (as PNG)...');
  const response = await fetch('https://api.openai.com/v1/images/edits', {
    method: 'POST',
    headers: { 'Authorization': \`Bearer \${API_KEY}\` },
    body: formData,
  });
  const data = await response.json();
  if (!data.data || !data.data[0]) { console.error('After failed:', JSON.stringify(data)); process.exit(1); }
  fs.writeFileSync(AFTER_PATH, Buffer.from(data.data[0].b64_json, 'base64'));
  console.log('✓ After saved');
  // Clean up temp PNG
  try { fs.unlinkSync(pngPath); } catch(e) {}
})();
"

echo ""
echo "════════════════════════════════════════"
echo "ALL MISSING IMAGES COMPLETE"
echo "════════════════════════════════════════"
ls "$IMG/" | wc -l
