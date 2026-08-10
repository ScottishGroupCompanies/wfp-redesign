#!/bin/bash
# Generate images for the redesigned /benefits/ overview page
# 1 hero + 1 intro + 12 benefit cards = 14 images
NB2="/Users/christianneaengenheyster/.openclaw/workspace/scripts/nano-banana-2.js"
IMG="/Users/christianneaengenheyster/.openclaw/workspace/projects/window-film-philadelphia/public/images/benefits-overview"

mkdir -p "$IMG"

run() {
  local label="$1" prompt="$2" out="$3"; shift 3
  if [ -f "$out" ]; then echo "⏭  skip: $label"; return; fi
  node "$NB2" "$prompt" "$out" "$@" && echo "✓ $label" || echo "✗ FAILED: $label"
}

START=$(date +%s)
echo "Firing batch 1 (hero + intro + 5 benefit cards)..."

# ═══ HERO (1376×768) ═══
run "hero" "Single cohesive scene, photorealistic close-up of window film being applied to a large glass pane, professional installer's hands using a squeegee, warm natural light filtering through the film, shallow depth of field, no text, no logos, professional photography" "$IMG/window-film-benefits-philadelphia-hero.jpg" &

# ═══ INTRO IMAGE (1376×768) ═══
run "intro" "Single cohesive scene, photorealistic interior of a Philadelphia building with window film installed, comfortable temperature, filtered natural light, modern space with furniture that shows no UV fading, no people, no text, professional architectural photography" "$IMG/window-film-benefits-philadelphia-intro.jpg" &

# ═══ BENEFIT CARDS — batch 1 (5 images, 1200×896) ═══
run "energy" "Single cohesive scene, photorealistic interior of a Philadelphia office, thermostat showing comfortable temperature, large windows with solar control window film, HVAC concept, energy efficiency, no people, no text, professional photography" "$IMG/energy-saving-window-film-philadelphia-benefit.jpg" &

run "uv" "Single cohesive scene, photorealistic Philadelphia living room interior, large windows with UV protection window film, hardwood floors and furniture protected from fading, bright filtered light, no people, no text, professional interior photography" "$IMG/uv-protection-window-film-philadelphia-benefit.jpg" &

run "privacy" "Single cohesive scene, photorealistic Philadelphia office conference room, glass partitions with frosted privacy window film, professional corporate interior, no people, no text, professional architectural photography" "$IMG/privacy-window-film-philadelphia-benefit.jpg" &

run "glare" "Single cohesive scene, photorealistic Philadelphia office workspace, computer monitors near large windows with glare reduction window film, clear screen visibility, comfortable lighting, no people, no text, professional photography" "$IMG/glare-reduction-window-film-philadelphia-benefit.jpg" &

run "antigraffiti" "Single cohesive scene, photorealistic Philadelphia retail storefront, large glass window with anti-graffiti film applied, clean protected surface, urban commercial street, no people, no text, professional photography" "$IMG/anti-graffiti-window-film-philadelphia-benefit.jpg" &

wait
echo "Batch 1 done."

echo "Firing batch 2 (5 more benefit cards)..."
run "safety" "Single cohesive scene, photorealistic close-up of safety security window film applied to glass, film holding cracked glass together, impact resistance concept, no people, no text, professional photography" "$IMG/safety-security-window-film-philadelphia-benefit.jpg" &

run "solar" "Single cohesive scene, photorealistic Philadelphia building exterior, large windows with solar control window film reflecting heat, blue sky, thermography concept of heat rejection, no text, no logos, professional architectural photography" "$IMG/solar-control-window-film-philadelphia-benefit.jpg" &

run "decorative" "Single cohesive scene, photorealistic Philadelphia office lobby, glass partitions with decorative frosted window film pattern, modern branded interior design, no people, no text, professional architectural photography" "$IMG/decorative-window-film-philadelphia-benefit.jpg" &

run "exterior-wraps" "Single cohesive scene, photorealistic Philadelphia commercial building exterior with large format graphic window film wrap, full building facade with promotional design, no text on image, no logos, professional architectural photography" "$IMG/exterior-building-wrap-philadelphia-benefit.jpg" &

run "exterior-refinish" "Single cohesive scene, photorealistic Philadelphia historic building exterior, old windows updated with exterior refinishing window film, refreshed appearance, no text, no logos, professional architectural photography" "$IMG/exterior-refinishing-window-film-philadelphia-benefit.jpg" &

wait
echo "Batch 2 done."

echo "Firing batch 3 (5 more benefit cards)..."
run "mirror" "Single cohesive scene, photorealistic close-up of mirror refinishing film being applied to a decorative mirror surface, protective overlay, professional installation, no people, no text, professional photography" "$IMG/mirror-refinishing-window-film-philadelphia-benefit.jpg" &

run "bird" "Single cohesive scene, photorealistic modern glass building with bird strike prevention window film, subtle dot pattern visible on glass, birds flying safely around building, no text, no logos, professional architectural photography" "$IMG/bird-strike-window-film-philadelphia-benefit.jpg" &

run "school-security" "Single cohesive scene, photorealistic Philadelphia school entrance, glass doors with security window film, safety concept, educational building, no people, no text, professional photography" "$IMG/school-security-window-film-philadelphia-benefit.jpg" &

run "blast" "Single cohesive scene, photorealistic government building window with blast mitigation window film, security concept, reinforced glass, no people, no text, professional architectural photography" "$IMG/blast-mitigation-window-film-philadelphia-benefit.jpg" &

run "ballistic" "Single cohesive scene, photorealistic secured facility entrance with ballistic resistant window film on glass, high security building, reinforced glass panels, no people, no text, professional architectural photography" "$IMG/ballistic-resistant-window-film-philadelphia-benefit.jpg" &

wait
END=$(date +%s)
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "ALL IMAGES done in $((END - START))s"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
ls -1 "$IMG/" | wc -l
echo "files generated"
