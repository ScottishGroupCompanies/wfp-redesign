#!/bin/bash
# Generate all 29 restaurant page images sequentially
# Leonardo Basic = 1 pending job at a time
NB2="/Users/christianneaengenheyster/.openclaw/workspace/scripts/nano-banana-2.js"
IMG="/Users/christianneaengenheyster/.openclaw/workspace/projects/window-film-philadelphia/public/images"

set -e
run() {
  local label="$1"; local prompt="$2"; local out="$3"; shift 3
  echo ">>> [$label] $(date '+%H:%M:%S')"
  node "$NB2" "$prompt" "$out" "$@" && echo "✓ $label" || echo "✗ FAILED: $label"
}

# BATCH 1 — hero, whatis, why (1376×768)
run "rt-hero" "Elegant Philadelphia restaurant exterior with floor-to-ceiling windows along a brick streetscape, late afternoon warm golden light, diners visible inside at white-tablecloth tables, inviting atmosphere, real architectural photography" "$IMG/rt-hero.jpg"
run "rt-whatis" "Window film installer applying tint film to a large restaurant storefront window interior, squeegee in hand, dining tables visible in background, natural light, candid documentary style photography" "$IMG/rt-whatis.jpg"
run "rt-why" "Restaurant diners visibly squinting and shielding eyes from intense sunset glare through large west-facing windows, uncomfortable dining experience, realistic candid photography" "$IMG/rt-why.jpg"
echo "--- BATCH 1 DONE ---"

# BATCH 2 — space type cards (1376×768)
run "rt-type-fine-dining" "Upscale fine dining restaurant interior, white tablecloths, crystal glassware, large windows with soft filtered ambient light, elegant warm atmosphere, Philadelphia restaurant" "$IMG/rt-type-fine-dining.jpg"
run "rt-type-casual" "Busy casual neighborhood bistro interior, exposed brick walls, wood furniture, large street-facing windows, lively lunch crowd, Philadelphia neighborhood restaurant" "$IMG/rt-type-casual.jpg"
run "rt-type-cafe" "Cozy Philadelphia coffee shop with large window seating area, barista behind counter, natural light through tinted windows, mix of laptop workers and coffee drinkers" "$IMG/rt-type-cafe.jpg"
run "rt-type-bar" "Trendy Philadelphia cocktail bar interior, amber lighting, bottles displayed behind bar, street-level windows with frosted lower panels, evening atmosphere" "$IMG/rt-type-bar.jpg"
echo "--- BATCH 2 DONE ---"

# BATCH 3 — benefit rows (1376×768)
run "rt-glare" "Restaurant dining room with comfortable evenly-lit tables near large windows, diners relaxed without squinting, warm filtered natural light, Philadelphia interior" "$IMG/rt-glare.jpg"
run "rt-energy" "Commercial rooftop HVAC equipment above a Philadelphia restaurant building, energy efficiency concept, city rooftop skyline background, overcast sky" "$IMG/rt-energy.jpg"
run "rt-privacy" "Elegant frosted glass partition in upscale restaurant creating an intimate private dining alcove, decorative geometric film pattern, warm ambient candlelight, Philadelphia" "$IMG/rt-privacy.jpg"
run "rt-uv" "Restaurant booth with rich well-preserved upholstery fabric near a sunlit window, vibrant warm fabric colors showing no fading, natural filtered light, close-up detail" "$IMG/rt-uv.jpg"
echo "--- BATCH 3 DONE ---"

# BATCH 4 — slider images (2752×1536)
run "rt-slider-solar" "Panoramic Philadelphia restaurant interior with floor-to-ceiling windows, warm filtered sunlight through solar control film, comfortable diners at tables, wide cinematic format" "$IMG/rt-slider-solar.jpg" --width 2752 --height 1536
run "rt-slider-privacy" "Wide Philadelphia restaurant scene with frosted decorative film on glass partitions and branded window panels, intimate private dining rooms, warm atmosphere, wide cinematic format" "$IMG/rt-slider-privacy.jpg" --width 2752 --height 1536
run "rt-slider-security" "Restaurant storefront exterior at dusk in Philadelphia, brick building, street-level security window film, urban commercial corridor, wide cinematic format" "$IMG/rt-slider-security.jpg" --width 2752 --height 1536
echo "--- BATCH 4 DONE ---"

# BATCH 5 — slider images cont. (2752×1536)
run "rt-slider-antigraffiti" "Philadelphia restaurant street-level glass facade, clean pristine windows on a busy pedestrian corridor, brick buildings and sidewalk, wide cinematic format" "$IMG/rt-slider-antigraffiti.jpg" --width 2752 --height 1536
run "rt-slider-lowe" "Philadelphia restaurant exterior in winter evening, warm amber light glowing from inside dining room through large windows, energy-efficient building, wide cinematic format" "$IMG/rt-slider-lowe.jpg" --width 2752 --height 1536
run "rt-slider-daylight" "Restaurant interior with soft diffused natural daylight evenly spread across dining tables, no harsh shadows, bright airy morning atmosphere, Philadelphia cafe, wide cinematic format" "$IMG/rt-slider-daylight.jpg" --width 2752 --height 1536
echo "--- BATCH 5 DONE ---"

# BATCH 6 — case study + gallery 1-3 (1376×768)
run "rt-case-study" "Upscale BYOB restaurant facade on a quiet Philadelphia street at evening, west-facing windows with subtle solar control film, Rittenhouse Square neighborhood brick buildings, warm evening light" "$IMG/rt-case-study.jpg"
run "rt-gallery-1" "Elegant fine dining room interior with floor-to-ceiling windows, soft filtered natural light, white tablecloths and glassware, no visible glare, diners relaxed" "$IMG/rt-gallery-1.jpg"
run "rt-gallery-2" "Cafe interior view from counter, dual-zone frosted lower window panels with clear glass above, barista working, bright open airy atmosphere, Philadelphia" "$IMG/rt-gallery-2.jpg"
run "rt-gallery-3" "Philadelphia bar exterior at evening, warm amber light glowing from inside, branded decorative window film visible on storefront glass, pedestrians walking past" "$IMG/rt-gallery-3.jpg"
echo "--- BATCH 6 DONE ---"

# BATCH 7 — gallery 4-7 (1376×768)
run "rt-gallery-4" "Restaurant exterior with solar control window film on large storefront windows, Philadelphia brick streetscape, daytime, clean modern appearance" "$IMG/rt-gallery-4.jpg"
run "rt-gallery-5" "Private dining room with frosted Fasara film partition, intimate table setting for four, warm candlelight, Philadelphia upscale restaurant" "$IMG/rt-gallery-5.jpg"
run "rt-gallery-6" "Restaurant booth near large window, beautiful preserved upholstery in warm tones, natural light without harsh UV, vibrant colors" "$IMG/rt-gallery-6.jpg"
run "rt-gallery-7" "Philadelphia neighborhood BYOB restaurant interior, all tables occupied with diners, comfortable filtered light through treated windows, lively evening service" "$IMG/rt-gallery-7.jpg"
echo "--- BATCH 7 DONE ---"

# BATCH 8 — resources (1376×768)
run "rt-resources" "Technical specification sheets and case study documents arranged on a desk beside a coffee cup, professional warm office lighting, close-up detail" "$IMG/rt-resources.jpg"
echo "--- BATCH 8 DONE ---"

# BATCH 9 — testimonials (1024×1024 square)
run "rt-testimonial-1" "Candid photo of a confident man in his early 50s standing in an upscale restaurant dining room, arms relaxed at sides, surrounded by set tables and warm ambient lighting, proud expression, real lifestyle photography, no studio backdrop" "$IMG/rt-testimonial-1.jpg" --width 1024 --height 1024
run "rt-testimonial-2" "Candid photo of a woman in her early 40s standing behind a cafe host stand, welcoming expression, coffee display and pastries visible behind her, natural window light filtering in, documentary style, real cafe environment" "$IMG/rt-testimonial-2.jpg" --width 1024 --height 1024
run "rt-testimonial-3" "Candid photo of a bar manager in his early 30s standing near large restaurant windows overlooking a Philadelphia street, checking a tablet in hand, relaxed working pose, realistic lifestyle photography" "$IMG/rt-testimonial-3.jpg" --width 1024 --height 1024
echo "--- BATCH 9 DONE ---"

# BATCH 10 — CTA background (2752×1536)
run "rt-cta-bg" "Philadelphia Old City restaurant district at golden hour, cobblestone street with al fresco dining tables and umbrellas, couples and groups dining outside, warm amber evening light, wide panoramic cinematic format" "$IMG/rt-cta-bg.jpg" --width 2752 --height 1536
echo "--- BATCH 10 DONE ---"

echo ""
echo "=== ALL 29 IMAGES DONE ==="
ls -lh "$IMG"/rt-*.jpg | awk '{print $5, $9}'
