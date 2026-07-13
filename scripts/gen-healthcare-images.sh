#!/bin/bash
# Generate all 29 healthcare page images — parallel (Leonardo Ultimate)
NB2="/Users/christianneaengenheyster/.openclaw/workspace/scripts/nano-banana-2.js"
IMG="/Users/christianneaengenheyster/.openclaw/workspace/projects/window-film-philadelphia/public/images"

run() {
  local label="$1" prompt="$2" out="$3"; shift 3
  if [ -f "$out" ]; then echo "⏭  skip: $label"; return; fi
  node "$NB2" "$prompt" "$out" "$@" && echo "✓ $label" || echo "✗ FAILED: $label"
}

START=$(date +%s)
echo "Firing all 29 healthcare images in parallel... $(date '+%H:%M:%S')"

# Hero, whatis, why (1376×768)

# Space type cards (1376×768)
# batch 1
run "he-hero"   "Modern Philadelphia hospital or medical center exterior, glass curtain wall facade, professional healthcare architecture, bright overcast day, clean and authoritative, professional photography" "$IMG/he-hero.jpg" &
run "he-whatis" "Window film installer applying tint film to large hospital corridor windows, professional installation in healthcare setting, clean clinical environment, candid documentary photography" "$IMG/he-whatis.jpg" &
run "he-why"    "Bright modern hospital patient room with large windows, warm comfortable natural light streaming in softly, hospital bed with clean linens, healing and restorative environment, beautiful and aspirational" "$IMG/he-why.jpg" &
run "he-type-hospital"   "Large Philadelphia hospital building exterior, professional medical architecture, glass facades, ambulance bay visible, modern healthcare campus" "$IMG/he-type-hospital.jpg" &
run "he-type-clinic"     "Modern outpatient medical clinic waiting room interior, comfortable seating, soft filtered natural light through large windows, calm and professional healthcare environment" "$IMG/he-type-clinic.jpg" &
wait
sleep 3


# Benefit rows (1376×768)
# batch 2
run "he-type-surgical"   "Surgical center or ambulatory care facility corridor, clean clinical white walls, large windows with filtered natural light, sterile professional healthcare environment" "$IMG/he-type-surgical.jpg" &
run "he-type-dental"     "Modern dental office waiting room with comfortable seating, natural light through treated windows, plants, calm and welcoming patient environment, Philadelphia" "$IMG/he-type-dental.jpg" &
run "he-uv"       "Hospital patient room with comfortable soft natural light through large windows, patient resting in bed, healing warm environment, no harsh UV, clean and calming" "$IMG/he-uv.jpg" &
run "he-energy"   "Large Philadelphia hospital building exterior showing expansive glass curtain wall, rooftop mechanical equipment, energy efficiency concept, urban medical campus" "$IMG/he-energy.jpg" &
run "he-privacy"  "Hospital consultation room with frosted privacy film on glass partition, physician and patient in conversation visible as silhouettes, privacy and professionalism" "$IMG/he-privacy.jpg" &
wait
sleep 3


# Slider images (2752×1536)
# batch 3
run "he-security" "Hospital pharmacy or nurse station with reinforced security film on glass windows, professional healthcare security environment, modern medical facility" "$IMG/he-security.jpg" &
run "he-slider-uv"          "Wide hospital patient ward corridor with large windows, soft warm filtered natural light, nurses at station, clean clinical environment, wide cinematic format" "$IMG/he-slider-uv.jpg" --width 2752 --height 1536 &
run "he-slider-energy"      "Wide exterior of Philadelphia medical center campus, large glass facades, modern healthcare architecture, wide cinematic format" "$IMG/he-slider-energy.jpg" --width 2752 --height 1536 &
run "he-slider-privacy"     "Wide hospital corridor with frosted film on consultation room glass, privacy partitions, professional medical setting, wide cinematic format" "$IMG/he-slider-privacy.jpg" --width 2752 --height 1536 &
run "he-slider-security"    "Wide hospital pharmacy or secure medication area with safety film on glass windows, professional healthcare security, wide cinematic format" "$IMG/he-slider-security.jpg" --width 2752 --height 1536 &
wait
sleep 3


# Case study + gallery (1376×768)
# batch 4
run "he-slider-glare"       "Wide hospital waiting room with comfortable seating near large windows, soft even light, patients and visitors relaxed, no harsh glare, wide cinematic format" "$IMG/he-slider-glare.jpg" --width 2752 --height 1536 &
run "he-slider-decorative"  "Wide medical office lobby with frosted branded decorative film on glass partitions, modern healthcare branding, professional and welcoming, wide cinematic format" "$IMG/he-slider-decorative.jpg" --width 2752 --height 1536 &
run "he-case-study"  "Philadelphia hospital or medical office building exterior, urban medical district, glass and brick facade, professional healthcare architecture, warm afternoon light" "$IMG/he-case-study.jpg" &
run "he-gallery-1"   "Hospital patient room with large treated windows, soft filtered natural light, patient resting comfortably, healing and calming environment" "$IMG/he-gallery-1.jpg" &
run "he-gallery-2"   "Medical clinic waiting room with comfortable chairs, large windows with frosted lower panels, plants, calm welcoming patient environment, Philadelphia" "$IMG/he-gallery-2.jpg" &
wait
sleep 3

# batch 5
run "he-gallery-3"   "Hospital corridor with large windows along one side, nurses walking, clinical cleanliness, soft controlled natural light through treated glass" "$IMG/he-gallery-3.jpg" &
run "he-gallery-4"   "Dental or medical office reception desk with frosted privacy glass partition, modern healthcare interior, professional and welcoming" "$IMG/he-gallery-4.jpg" &
run "he-gallery-5"   "Hospital pharmacy window with security film, medication storage visible, professional secure healthcare environment, Philadelphia medical facility" "$IMG/he-gallery-5.jpg" &
run "he-gallery-6"   "Medical building exterior entrance with clear safety film on glass doors, patients entering, professional healthcare campus, Philadelphia" "$IMG/he-gallery-6.jpg" &
run "he-gallery-7"   "Hospital rooftop or aerial view of Philadelphia medical campus, multiple buildings, glass facades, urban healthcare district" "$IMG/he-gallery-7.jpg" &
wait
sleep 3


# Resources (1376×768)

# Testimonials (1024×1024)

# CTA background (2752×1536)
# batch 6
run "he-resources" "Healthcare facility management compliance documents, energy audit reports, and spec sheets arranged on a conference table, professional meeting environment" "$IMG/he-resources.jpg" &
run "he-testimonial-1" "Candid photo of a hospital facilities director in his 50s standing in a modern hospital corridor, professional healthcare attire, confident expression, realistic documentary style, no studio backdrop" "$IMG/he-testimonial-1.jpg" --width 1024 --height 1024 &
run "he-testimonial-2" "Candid photo of a woman in her 40s, healthcare administrator, standing in a bright hospital lobby near large windows, professional business attire, natural light, realistic lifestyle photography" "$IMG/he-testimonial-2.jpg" --width 1024 --height 1024 &
run "he-testimonial-3" "Candid photo of a medical office manager in his 40s standing in a clinic waiting room, casual professional attire, welcoming expression, natural window light, realistic" "$IMG/he-testimonial-3.jpg" --width 1024 --height 1024 &
run "he-cta-bg" "Philadelphia hospital campus at golden hour, glass facade glowing warm amber, professional medical architecture, urban healthcare district, wide panoramic cinematic format" "$IMG/he-cta-bg.jpg" --width 2752 --height 1536 &
wait
sleep 3


wait
END=$(date +%s)
echo ""
echo "=== RESULTS (wall-clock: $((END-START))s) ==="
PASS=0 FAIL=0
for f in he-hero he-whatis he-why he-type-hospital he-type-clinic he-type-surgical he-type-dental \
          he-uv he-energy he-privacy he-security \
          he-slider-uv he-slider-energy he-slider-privacy he-slider-security he-slider-glare he-slider-decorative \
          he-case-study he-gallery-1 he-gallery-2 he-gallery-3 he-gallery-4 he-gallery-5 he-gallery-6 he-gallery-7 \
          he-resources he-testimonial-1 he-testimonial-2 he-testimonial-3 he-cta-bg; do
  file="$IMG/$f.jpg"
  if [ -f "$file" ] && [ "$(wc -c < "$file")" -gt 10000 ]; then
    echo "✓ $f"; PASS=$((PASS+1))
  else
    echo "✗ MISSING: $f"; FAIL=$((FAIL+1))
  fi
done
echo ""
echo "$PASS / $((PASS+FAIL)) images generated"
