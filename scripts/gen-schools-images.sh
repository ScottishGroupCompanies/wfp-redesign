#!/bin/bash
# Generate all 29 schools/universities page images — parallel (Leonardo Ultimate)
NB2="/Users/christianneaengenheyster/.openclaw/workspace/scripts/nano-banana-2.js"
IMG="/Users/christianneaengenheyster/.openclaw/workspace/projects/window-film-philadelphia/public/images"

run() {
  local label="$1" prompt="$2" out="$3"; shift 3
  if [ -f "$out" ]; then echo "⏭  skip: $label"; return; fi
  node "$NB2" "$prompt" "$out" "$@" && echo "✓ $label" || echo "✗ FAILED: $label"
}

START=$(date +%s)
echo "Firing all 29 school/university images in parallel... $(date '+%H:%M:%S')"

# Hero, whatis, why (1376×768)

# Space type cards (1376×768)
# batch 1
run "sc-hero"   "Philadelphia university campus building exterior with tall arched windows and brick facade, students walking on campus paths, bright autumn day, classic collegiate architecture, professional photography" "$IMG/sc-hero.jpg" &
run "sc-whatis" "Window film installer applying safety film to large classroom windows in a school building, professional installation, bright classroom interior visible, candid documentary photography" "$IMG/sc-whatis.jpg" &
run "sc-why"    "Bright modern Philadelphia school classroom with large south-facing windows, warm natural light streaming across student desks, colorful educational materials on walls, beautiful and inviting, aspirational school environment" "$IMG/sc-why.jpg" &
run "sc-type-k12"        "Modern Philadelphia public elementary school building exterior, brick facade, large windows, children's artwork visible inside, bright and welcoming campus" "$IMG/sc-type-k12.jpg" &
run "sc-type-university" "Philadelphia university lecture hall interior, tiered seating, large windows with filtered natural light, students at desks, academic atmosphere" "$IMG/sc-type-university.jpg" &
wait
sleep 3


# Benefit rows (1376×768)
# batch 2
run "sc-type-charter"    "Charter school hallway with large windows lining one side, students between classes, bright and modern interior, Philadelphia urban school setting" "$IMG/sc-type-charter.jpg" &
run "sc-type-childcare"  "Bright daycare or preschool classroom in Philadelphia, child-sized furniture, colorful walls, large filtered windows with soft natural light, safe warm environment" "$IMG/sc-type-childcare.jpg" &
run "sc-security" "School main entrance with reinforced glass panels and clear safety film, controlled access point, professional security appearance, Philadelphia school exterior" "$IMG/sc-security.jpg" &
run "sc-uv"       "School library or classroom interior with bright comfortable natural light through treated windows, students reading at tables, no harsh UV, vibrant book colors preserved" "$IMG/sc-uv.jpg" &
run "sc-glare"    "School computer lab or smartboard classroom with students focused on screens, soft even natural light from side windows, no glare on monitors or whiteboard, productive learning environment" "$IMG/sc-glare.jpg" &
wait
sleep 3


# Slider images (2752×1536)
# batch 3
run "sc-energy"   "Philadelphia school building rooftop with HVAC equipment, aerial view of campus buildings, energy efficiency concept, urban educational campus" "$IMG/sc-energy.jpg" &
run "sc-slider-safety"      "Wide Philadelphia school building entrance with large treated glass doors and windows, safe and welcoming exterior, students arriving, wide cinematic format" "$IMG/sc-slider-safety.jpg" --width 2752 --height 1536 &
run "sc-slider-uv"          "Wide bright school library interior, students studying at long tables near large windows with filtered sunlight, colorful books on shelves, wide cinematic format" "$IMG/sc-slider-uv.jpg" --width 2752 --height 1536 &
run "sc-slider-glare"       "Wide school classroom with interactive whiteboard, students engaged, soft even light from treated side windows, no monitor glare, wide cinematic format" "$IMG/sc-slider-glare.jpg" --width 2752 --height 1536 &
run "sc-slider-energy"      "Wide exterior of a Philadelphia university building, large glass curtain wall, urban campus setting, morning light, wide cinematic format" "$IMG/sc-slider-energy.jpg" --width 2752 --height 1536 &
wait
sleep 3


# Case study + gallery (1376×768)
# batch 4
run "sc-slider-decorative"  "Wide school hallway with frosted privacy film on office windows, modern educational interior, branded design elements on glass, wide cinematic format" "$IMG/sc-slider-decorative.jpg" --width 2752 --height 1536 &
run "sc-slider-security"    "Wide Philadelphia school gymnasium or cafeteria with large windows, safety film on glass, students inside, secure modern school environment, wide cinematic format" "$IMG/sc-slider-security.jpg" --width 2752 --height 1536 &
run "sc-case-study"  "Philadelphia neighborhood school building exterior, brick rowhouse district, large windows with safety film, tree-lined street, warm afternoon light" "$IMG/sc-case-study.jpg" &
run "sc-gallery-1"   "Elementary school classroom with bright comfortable natural light through large treated windows, students at tables, teacher at whiteboard, warm learning environment" "$IMG/sc-gallery-1.jpg" &
run "sc-gallery-2"   "University building glass entrance doors and lobby windows with clear safety film, students passing through, modern academic architecture" "$IMG/sc-gallery-2.jpg" &
wait
sleep 3

# batch 5
run "sc-gallery-3"   "School hallway with frosted film on counselor and administrative office windows, privacy and professionalism, modern interior" "$IMG/sc-gallery-3.jpg" &
run "sc-gallery-4"   "Philadelphia high school computer lab, students at workstations, soft even light from treated windows, no screen glare, focused productive atmosphere" "$IMG/sc-gallery-4.jpg" &
run "sc-gallery-5"   "School library reading area near large windows, filtered warm natural light, students studying, comfortable and UV-protected environment" "$IMG/sc-gallery-5.jpg" &
run "sc-gallery-6"   "School main entrance exterior with security-grade film on glass panels, Philadelphia urban street, professional and welcoming appearance" "$IMG/sc-gallery-6.jpg" &
run "sc-gallery-7"   "University campus aerial view, Philadelphia skyline in background, multiple brick academic buildings with large windows, autumn foliage" "$IMG/sc-gallery-7.jpg" &
wait
sleep 3


# Resources (1376×768)

# Testimonials (1024×1024)

# CTA background (2752×1536)
# batch 6
run "sc-resources" "School facility management documents, compliance binders, and spec sheets spread on a conference table, professional meeting environment" "$IMG/sc-resources.jpg" &
run "sc-testimonial-1" "Candid photo of a school principal or facilities director in his 50s standing in a school hallway, professional attire, confident friendly expression, realistic documentary style, no studio backdrop" "$IMG/sc-testimonial-1.jpg" --width 1024 --height 1024 &
run "sc-testimonial-2" "Candid photo of a woman in her 40s, school district administrator, standing in a bright school lobby near large windows, professional business attire, natural light, realistic lifestyle photography" "$IMG/sc-testimonial-2.jpg" --width 1024 --height 1024 &
run "sc-testimonial-3" "Candid photo of a university facilities manager in his 40s on a campus walkway, brick buildings in background, casual professional attire, confident natural pose, realistic" "$IMG/sc-testimonial-3.jpg" --width 1024 --height 1024 &
run "sc-cta-bg" "Philadelphia university campus at golden hour, red brick buildings with large windows glowing warm amber, tree-lined paths, students walking, wide panoramic cinematic format" "$IMG/sc-cta-bg.jpg" --width 2752 --height 1536 &
wait
sleep 3


wait
END=$(date +%s)
echo ""
echo "=== RESULTS (wall-clock: $((END-START))s) ==="
PASS=0 FAIL=0
for f in sc-hero sc-whatis sc-why sc-type-k12 sc-type-university sc-type-charter sc-type-childcare \
          sc-security sc-uv sc-glare sc-energy \
          sc-slider-safety sc-slider-uv sc-slider-glare sc-slider-energy sc-slider-decorative sc-slider-security \
          sc-case-study sc-gallery-1 sc-gallery-2 sc-gallery-3 sc-gallery-4 sc-gallery-5 sc-gallery-6 sc-gallery-7 \
          sc-resources sc-testimonial-1 sc-testimonial-2 sc-testimonial-3 sc-cta-bg; do
  file="$IMG/$f.jpg"
  if [ -f "$file" ] && [ "$(wc -c < "$file")" -gt 10000 ]; then
    echo "✓ $f"; PASS=$((PASS+1))
  else
    echo "✗ MISSING: $f"; FAIL=$((FAIL+1))
  fi
done
echo ""
echo "$PASS / $((PASS+FAIL)) images generated"
