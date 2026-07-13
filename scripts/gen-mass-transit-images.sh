#!/bin/bash
# Generate all 29 mass-transit page images sequentially
NB2="/Users/christianneaengenheyster/.openclaw/workspace/scripts/nano-banana-2.js"
IMG="/Users/christianneaengenheyster/.openclaw/workspace/projects/window-film-philadelphia/public/images"

run() {
  local label="$1"; local prompt="$2"; local out="$3"; shift 3
  echo ">>> [$label] $(date '+%H:%M:%S')"
  node "$NB2" "$prompt" "$out" "$@" && echo "✓ $label" || echo "✗ FAILED: $label"
}

# BATCH 1 — hero, whatis, why
run "mb-hero" "Philadelphia International Airport terminal interior, floor-to-ceiling windows with passengers at gate seating, bright modern aviation architecture, warm natural light, realistic architectural photography" "$IMG/mb-hero.jpg"
run "mb-whatis" "Window film installer on a ladder applying tint film to large transit station glass panels, professional work environment, urban station interior, candid documentary style photography" "$IMG/mb-whatis.jpg"
run "mb-why" "Grand Beaux-Arts train station waiting hall at golden hour, dramatic natural light streaming through massive arched windows, elegant historic architecture, beautiful and aspirational, no uncomfortable passengers" "$IMG/mb-why.jpg"
echo "--- BATCH 1 DONE ---"

# BATCH 2 — space type cards
run "mb-type-airport" "Modern airport terminal gate area, large panoramic windows overlooking tarmac and aircraft, passengers seated comfortably in gate seating, contemporary aviation architecture" "$IMG/mb-type-airport.jpg"
run "mb-type-septa" "SEPTA subway station platform with glazed canopy panels and clean glass, urban Philadelphia underground transit, modern station design" "$IMG/mb-type-septa.jpg"
run "mb-type-rail" "Grand Beaux-Arts train station waiting hall interior, soaring ceilings, tall arched windows, passengers waiting, warm golden light — 30th Street Station style" "$IMG/mb-type-rail.jpg"
run "mb-type-bus" "Modern bus terminal with large glass facade, urban Philadelphia street, clean contemporary transit architecture, buses visible outside" "$IMG/mb-type-bus.jpg"
echo "--- BATCH 2 DONE ---"

# BATCH 3 — benefit rows
run "mb-anti-graffiti" "Clean pristine transit station glass and stainless steel surfaces in a Philadelphia urban station, graffiti-free polished surfaces, professional maintenance environment, realistic" "$IMG/mb-anti-graffiti.jpg"
run "mb-security" "Airport security checkpoint area with clear optically transparent glass partitions, professional public safety environment, modern terminal interior, realistic" "$IMG/mb-security.jpg"
run "mb-glare" "Airport terminal waiting area with comfortable passengers seated near large windows, soft warm filtered natural light, no harsh glare, modern gate seating, relaxed atmosphere" "$IMG/mb-glare.jpg"
run "mb-energy" "Large transit station or airport terminal exterior showing expansive glass curtain wall facade, mechanical HVAC equipment on rooftop, energy management concept, Philadelphia urban" "$IMG/mb-energy.jpg"
echo "--- BATCH 3 DONE ---"

# BATCH 4 — slider images (2752×1536)
run "mb-slider-solar" "Panoramic Philadelphia airport terminal concourse, floor-to-ceiling windows with warm filtered sunlight, comfortable passengers, wide cinematic format" "$IMG/mb-slider-solar.jpg" --width 2752 --height 1536
run "mb-slider-antigraffiti" "Wide SEPTA transit station interior with pristine clean glass and stainless steel surfaces, Philadelphia urban transit environment, wide cinematic format" "$IMG/mb-slider-antigraffiti.jpg" --width 2752 --height 1536
run "mb-slider-security" "Wide airport terminal zone with clear safety glass partitions, security checkpoint, professional public infrastructure, wide cinematic format" "$IMG/mb-slider-security.jpg" --width 2752 --height 1536
echo "--- BATCH 4 DONE ---"

# BATCH 5 — slider images cont.
run "mb-slider-privacy" "Wide transit operations center with frosted privacy film on glass overlooking terminal floor below, professional secure environment, wide cinematic format" "$IMG/mb-slider-privacy.jpg" --width 2752 --height 1536
run "mb-slider-lowe" "Philadelphia historic train station exterior in winter evening, warm amber light glowing from inside terminal through energy-efficient windows, wide cinematic format" "$IMG/mb-slider-lowe.jpg" --width 2752 --height 1536
run "mb-slider-daylight" "Transit station concourse with exterior-mounted film on glazed canopy, bright diffused natural daylight, modern architecture, passengers below, wide cinematic format" "$IMG/mb-slider-daylight.jpg" --width 2752 --height 1536
echo "--- BATCH 5 DONE ---"

# BATCH 6 — case study + gallery 1-3
run "mb-case-study" "30th Street Station Philadelphia grand Beaux-Arts train station hall interior, soaring windows, classical columns, warm afternoon light, iconic American train station" "$IMG/mb-case-study.jpg"
run "mb-gallery-1" "PHL airport gate area seating near large treated windows, passengers comfortable, morning light streaming in softly, modern aviation interior" "$IMG/mb-gallery-1.jpg"
run "mb-gallery-2" "SEPTA station platform with clean glazed canopy, urban Philadelphia above-ground station, natural light through glass panels" "$IMG/mb-gallery-2.jpg"
run "mb-gallery-3" "30th Street Station grand hall interior, tall arched windows with warm natural light, passengers on benches waiting, classic Amtrak terminal" "$IMG/mb-gallery-3.jpg"
echo "--- BATCH 6 DONE ---"

# BATCH 7 — gallery 4-7
run "mb-gallery-4" "Close-up of optically clear safety film on airport ticketing window glass, nearly invisible protection, professional environment" "$IMG/mb-gallery-4.jpg"
run "mb-gallery-5" "Window film technician applying anti-graffiti film to stainless steel transit station panel, professional installation, urban station" "$IMG/mb-gallery-5.jpg"
run "mb-gallery-6" "Modern bus terminal glass facade, clean and contemporary, Philadelphia urban streetscape, buses and passengers outside" "$IMG/mb-gallery-6.jpg"
run "mb-gallery-7" "Transit hub waiting area with comfortable passengers seated near large windows, relaxed and at ease, soft filtered light, Philadelphia" "$IMG/mb-gallery-7.jpg"
echo "--- BATCH 7 DONE ---"

# BATCH 8 — resources
run "mb-resources" "Technical specification documents, compliance sheets, and a laptop on a professional facilities management desk, warm office lighting" "$IMG/mb-resources.jpg"
echo "--- BATCH 8 DONE ---"

# BATCH 9 — testimonials (1024×1024)
run "mb-testimonial-1" "Candid photo of a confident man in his 50s standing in a transit station corridor, holding a tablet, facilities professional work attire, realistic documentary style, no studio backdrop" "$IMG/mb-testimonial-1.jpg" --width 1024 --height 1024
run "mb-testimonial-2" "Candid photo of a professional woman in her 40s in an airport terminal setting near large windows, business attire, natural terminal light, realistic lifestyle photography" "$IMG/mb-testimonial-2.jpg" --width 1024 --height 1024
run "mb-testimonial-3" "Candid photo of a man in his 40s standing in a grand train station hall near tall arched windows, business casual, confident posture, warm natural light, realistic" "$IMG/mb-testimonial-3.jpg" --width 1024 --height 1024
echo "--- BATCH 9 DONE ---"

# BATCH 10 — CTA (2752×1536)
run "mb-cta-bg" "Philadelphia International Airport terminal exterior at golden sunset, large glass facade panels glowing warm amber, aircraft on tarmac, wide panoramic cinematic format" "$IMG/mb-cta-bg.jpg" --width 2752 --height 1536
echo "--- BATCH 10 DONE ---"

echo ""
echo "=== ALL 29 IMAGES DONE ==="
ls -lh "$IMG"/mb-*.jpg 2>/dev/null | awk '{print $5, $9}'
