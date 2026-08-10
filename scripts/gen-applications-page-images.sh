#!/bin/bash
# Generate images for the redesigned /applications/ overview page
# 1 hero + 1 intro + 12 bento cards = 14 images
NB2="/Users/christianneaengenheyster/.openclaw/workspace/scripts/nano-banana-2.js"
IMG="/Users/christianneaengenheyster/.openclaw/workspace/projects/window-film-philadelphia/public/images/applications"

mkdir -p "$IMG"

run() {
  local label="$1" prompt="$2" out="$3"; shift 3
  if [ -f "$out" ]; then echo "⏭  skip: $label"; return; fi
  node "$NB2" "$prompt" "$out" "$@" && echo "✓ $label" || echo "✗ FAILED: $label"
}

START=$(date +%s)
echo "Firing batch 1 (hero + intro + 6 bento cards)..."

# ═══ HERO (1376×768) ═══
run "hero" "Single cohesive scene, photorealistic architectural photography of diverse Philadelphia buildings in a single wide shot, modern office tower glass facade next to a historic brick rowhome and a retail storefront, all with professional window film installed, golden hour light, urban cityscape, no text or signage on buildings, no logos, professional photography" "$IMG/window-film-applications-philadelphia-hero.jpg" &

# ═══ INTRO IMAGE (1376×768) ═══
run "intro" "Single cohesive scene, photorealistic interior of a Philadelphia building showing diverse window film applications, large windows with solar control film, comfortable interior, filtered natural light, modern professional space, no text, no logos, professional architectural photography" "$IMG/window-film-applications-philadelphia-intro.jpg" &

# ═══ BENTO CARDS — 6 images (1200×896) ═══
run "bento-homes" "Single cohesive scene, photorealistic Philadelphia rowhome interior, cozy living room with large windows having residential window film, warm natural light, hardwood floors, no people, no text, professional interior photography" "$IMG/window-film-applications-philadelphia-homes-condos.jpg" &

run "bento-office" "Single cohesive scene, photorealistic modern Philadelphia office building interior, open plan workspace with floor-to-ceiling windows having solar control window film, comfortable glare-free environment, no people, no text, professional commercial photography" "$IMG/window-film-applications-philadelphia-office.jpg" &

run "bento-retail" "Single cohesive scene, photorealistic Philadelphia retail storefront interior, display windows with security and anti-graffiti window film, merchandise visible, clean modern shop, no people, no text, professional commercial photography" "$IMG/window-film-applications-philadelphia-retail.jpg" &

run "bento-restaurants" "Single cohesive scene, photorealistic Philadelphia restaurant interior, large windows with solar control window film, comfortable dining room with natural light, tables set for dinner, no people, no text, professional commercial photography" "$IMG/window-film-applications-philadelphia-restaurants.jpg" &

run "bento-hotels" "Single cohesive scene, photorealistic Philadelphia hotel lobby, elegant interior with large windows having decorative and solar control window film, luxury hospitality setting, no people, no text, professional architectural photography" "$IMG/window-film-applications-philadelphia-hotels.jpg" &

run "bento-transit" "Single cohesive scene, photorealistic Philadelphia transit station interior, large glass panels with safety and security window film, modern transportation hub, natural light, no people, no text, professional architectural photography" "$IMG/window-film-applications-philadelphia-mass-transit.jpg" &

wait
echo "Batch 1 done."

echo "Firing batch 2 (6 more bento cards)..."

# ═══ BENTO CARDS — 6 more images (1200×896) ═══
run "bento-schools" "Single cohesive scene, photorealistic Philadelphia school classroom, large windows with safety and security window film, bright educational space, desks and chairs, no people, no text, professional educational photography" "$IMG/window-film-applications-philadelphia-schools.jpg" &

run "bento-healthcare" "Single cohesive scene, photorealistic Philadelphia hospital interior, patient room with large windows having UV protection and privacy window film, clean medical environment, no people, no text, professional healthcare photography" "$IMG/window-film-applications-philadelphia-healthcare.jpg" &

run "bento-government" "Single cohesive scene, photorealistic Philadelphia government building exterior, historic municipal building with security window film on windows, professional civic architecture, no text, no logos, professional architectural photography" "$IMG/window-film-applications-philadelphia-government.jpg" &

run "bento-secured" "Single cohesive scene, photorealistic secured building interior, reinforced glass entry with security and ballistic window film, modern institutional setting, no people, no text, professional architectural photography" "$IMG/window-film-applications-philadelphia-secured.jpg" &

run "bento-museums" "Single cohesive scene, photorealistic Philadelphia museum gallery interior, artwork on walls, large windows with UV protection window film, filtered natural light protecting exhibits, no people, no text, professional cultural institution photography" "$IMG/window-film-applications-philadelphia-museums.jpg" &

run "bento-churches" "Single cohesive scene, photorealistic Philadelphia church interior, historic stained glass windows with protective window film, ornate architecture, warm light, no people, no text, professional architectural photography" "$IMG/window-film-applications-philadelphia-churches.jpg" &

wait
END=$(date +%s)
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "ALL IMAGES done in $((END - START))s"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
ls -la "$IMG/" | wc -l
echo "files in directory"
