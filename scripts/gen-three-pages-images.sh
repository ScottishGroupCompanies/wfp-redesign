#!/bin/bash
# Generate all images for government-buildings, museums-libraries, churches
# Parallel — Leonardo Ultimate 10 concurrent
NB2="/Users/christianneaengenheyster/.openclaw/workspace/scripts/nano-banana-2.js"
IMG="/Users/christianneaengenheyster/.openclaw/workspace/projects/window-film-philadelphia/public/images"

run() {
  local label="$1" prompt="$2" out="$3"; shift 3
  if [ -f "$out" ]; then echo "⏭  skip: $label"; return; fi
  node "$NB2" "$prompt" "$out" "$@" && echo "✓ $label" || echo "✗ FAILED: $label"
}

START=$(date +%s)
echo "Firing all images in parallel..."

# ═══════════════════════════════════════════════════
# GOVERNMENT BUILDINGS (gv-)
# ═══════════════════════════════════════════════════

run "gv-hero" "Professional photograph of Philadelphia City Hall exterior, dramatic civic architecture, ornate stone facade, clear blue sky, government building Philadelphia" "$IMG/gv-hero.jpg" &
run "gv-cta-bg" "Aerial or wide-angle view of Philadelphia civic district, City Hall tower visible, urban government buildings, golden hour light" "$IMG/gv-cta-bg.jpg" --width 2752 --height 1536 &
run "gv-whatis" "Modern government office building lobby interior, large windows, civic space, clean professional environment, natural light" "$IMG/gv-whatis.jpg" &
run "gv-why" "Government office interior, west-facing windows with intense afternoon glare on staff computer screens, open plan civic workspace" "$IMG/gv-why.jpg" &
run "gv-type-courthouse" "Philadelphia federal courthouse exterior, modern glass and stone facade, civic architecture, professional" "$IMG/gv-type-courthouse.jpg" &
run "gv-type-cityhall" "Municipal government office building interior corridor, public-facing permit counter, professional civic environment" "$IMG/gv-type-cityhall.jpg" &
run "gv-type-police" "Philadelphia police precinct or public safety building exterior, professional, urban setting" "$IMG/gv-type-police.jpg" &
run "gv-type-federal" "Federal government office building exterior, large glazed facade, institutional architecture, Philadelphia urban setting" "$IMG/gv-type-federal.jpg" &
run "gv-blast" "Security and blast mitigation window film on large government building glass panels, professional installation, clear film barely visible" "$IMG/gv-blast.jpg" &
run "gv-energy" "Government building exterior with energy-efficient solar control window film installed, modern civic building, Philadelphia" "$IMG/gv-energy.jpg" &
run "gv-uv" "Government office interior showing protected documents and furnishings near windows, warm professional lighting, civic space" "$IMG/gv-uv.jpg" &
run "gv-privacy" "Government office with one-way privacy window film, staff working at desks, corridor visible outside but interior private" "$IMG/gv-privacy.jpg" &
run "gv-slider-blast" "Blast mitigation and safety security window film installed on large government building glass facade, professional installation" "$IMG/gv-slider-blast.jpg" --width 2752 --height 1536 &
run "gv-slider-security" "Anti-intrusion security window film on government building entry glass doors, institutional architecture, Philadelphia" "$IMG/gv-slider-security.jpg" --width 2752 --height 1536 &
run "gv-slider-energy" "Solar control window film on large government office building windows, energy efficiency, modern civic building Philadelphia" "$IMG/gv-slider-energy.jpg" --width 2752 --height 1536 &
run "gv-slider-uv" "UV protection window film in government building, protecting documents and furnishings near windows, civic office interior" "$IMG/gv-slider-uv.jpg" --width 2752 --height 1536 &
run "gv-slider-privacy" "One-way privacy window film on government office windows, staff visible inside working, privacy maintained from street" "$IMG/gv-slider-privacy.jpg" --width 2752 --height 1536 &
run "gv-slider-decorative" "Decorative frosted window film on government building interior glass partitions, professional civic office environment" "$IMG/gv-slider-decorative.jpg" --width 2752 --height 1536 &
run "gv-case-study" "Philadelphia government office building window film installation, professional technicians installing clear film on large windows" "$IMG/gv-case-study.jpg" --width 848 --height 1264 &
run "gv-gallery-1" "Philadelphia City Hall exterior detail, ornate stone architecture, civic grandeur, window film installed on modern addition" "$IMG/gv-gallery-1.jpg" &
run "gv-gallery-2" "Government courthouse interior lobby, large windows with solar control film, marble floors, professional civic space" "$IMG/gv-gallery-2.jpg" &
run "gv-gallery-3" "Police precinct building exterior, security window film on ground floor glass, professional installation, urban Philadelphia" "$IMG/gv-gallery-3.jpg" &
run "gv-gallery-4" "Federal office building large glazed facade, solar control film reducing glare, government workers inside at desks" "$IMG/gv-gallery-4.jpg" &
run "gv-gallery-5" "Government permit office, public service counter with privacy film on glass partitions, professional civic environment" "$IMG/gv-gallery-5.jpg" &
run "gv-gallery-6" "Historic Philadelphia government building exterior, stone facade with modern window film installation barely visible" "$IMG/gv-gallery-6.jpg" &
run "gv-gallery-7" "Philadelphia government building campus aerial view, multiple civic buildings, urban institutional setting" "$IMG/gv-gallery-7.jpg" &
run "gv-resources" "Government window film specifications and compliance documentation spread on professional desk" "$IMG/gv-resources.jpg" &
run "gv-testimonial-1" "Professional facilities manager in government office building, reviewing building plans, professional attire, natural office light" "$IMG/gv-testimonial-1.jpg" --width 1024 --height 1024 &
run "gv-testimonial-2" "Government building operations director at desk, professional environment, Philadelphia city office setting" "$IMG/gv-testimonial-2.jpg" --width 1024 --height 1024 &
run "gv-testimonial-3" "Federal property administrator in modern government building lobby, professional attire, bright civic space" "$IMG/gv-testimonial-3.jpg" --width 1024 --height 1024 &

# ═══════════════════════════════════════════════════
# MUSEUMS & LIBRARIES (mu-)
# ═══════════════════════════════════════════════════

run "mu-hero" "Philadelphia Museum of Art or grand museum exterior, classical columns, large windows, beautiful natural light, cultural institution" "$IMG/mu-hero.jpg" &
run "mu-cta-bg" "Philadelphia Benjamin Franklin Parkway with museum buildings, cultural district, beautiful Philadelphia, golden hour" "$IMG/mu-cta-bg.jpg" --width 2752 --height 1536 &
run "mu-whatis" "Museum gallery interior with paintings on walls, beautiful filtered natural light through treated windows, no glare on artwork" "$IMG/mu-whatis.jpg" &
run "mu-why" "Museum gallery with intense unfiltered sunlight washing out artwork near windows, visitor struggling to see display, conservation concern" "$IMG/mu-why.jpg" &
run "mu-type-art-museum" "Art museum gallery interior, large paintings, filtered natural light, visitors viewing artwork, professional museum setting" "$IMG/mu-type-art-museum.jpg" &
run "mu-type-library" "Public library reading room, natural light through large windows, readers at tables, warm comfortable atmosphere, Philadelphia" "$IMG/mu-type-library.jpg" &
run "mu-type-history" "History museum exhibition space, glass display cases, artifacts, filtered light, professional museum environment" "$IMG/mu-type-history.jpg" &
run "mu-type-archive" "Archive or special collections room, rare books and documents near windows with UV-protective film, conservation environment" "$IMG/mu-type-archive.jpg" &
run "mu-uv" "Museum conservation specialist examining artifact near window with UV-protective film, warm filtered light, professional conservation setting" "$IMG/mu-uv.jpg" &
run "mu-glare" "Museum gallery with glare-free viewing, visitors comfortably examining artwork, no window wash-out, beautiful natural light" "$IMG/mu-glare.jpg" &
run "mu-energy" "Modern museum or library building with solar control window film, energy efficient, beautiful cultural institution exterior" "$IMG/mu-energy.jpg" &
run "mu-security" "Security window film on museum entrance glass doors, professional installation, cultural institution entry, Philadelphia" "$IMG/mu-security.jpg" &
run "mu-slider-uv" "UV conservation film protecting museum artifacts and artwork from solar radiation, gallery interior, paintings and sculptures" "$IMG/mu-slider-uv.jpg" --width 2752 --height 1536 &
run "mu-slider-glare" "Glare reduction window film in museum gallery, visitors viewing art without squinting, beautiful controlled natural light" "$IMG/mu-slider-glare.jpg" --width 2752 --height 1536 &
run "mu-slider-energy" "Energy efficiency solar control film on large museum windows, climate-controlled gallery, professional institution" "$IMG/mu-slider-energy.jpg" --width 2752 --height 1536 &
run "mu-slider-security" "Security window film on museum public entrance glass, professional installation, cultural institution protection" "$IMG/mu-slider-security.jpg" --width 2752 --height 1536 &
run "mu-slider-privacy" "Privacy window film on museum special collections room, rare books and manuscripts protected, conservation environment" "$IMG/mu-slider-privacy.jpg" --width 2752 --height 1536 &
run "mu-slider-decorative" "Decorative frosted window film used as exhibit partition in museum, design-forward cultural institution interior" "$IMG/mu-slider-decorative.jpg" --width 2752 --height 1536 &
run "mu-case-study" "Philadelphia university library south-facing reading room, large windows with solar control film installed, students studying comfortably" "$IMG/mu-case-study.jpg" --width 848 --height 1264 &
run "mu-gallery-1" "Philadelphia Museum of Art grand facade with large windows, sunlight on steps, cultural landmark" "$IMG/mu-gallery-1.jpg" &
run "mu-gallery-2" "Museum gallery interior, artwork well-lit by filtered natural light, professional display, no UV damage visible" "$IMG/mu-gallery-2.jpg" &
run "mu-gallery-3" "Public library branch interior, reading tables by large windows, soft natural light, comfortable community space" "$IMG/mu-gallery-3.jpg" &
run "mu-gallery-4" "Conservation specialist installing UV-protective window film on museum gallery windows, professional installation" "$IMG/mu-gallery-4.jpg" &
run "mu-gallery-5" "History museum exhibition hall, glass display cases with artifacts, beautiful filtered light protecting collections" "$IMG/mu-gallery-5.jpg" &
run "mu-gallery-6" "University library special collections room, ornate historic architecture, natural light through treated windows" "$IMG/mu-gallery-6.jpg" &
run "mu-gallery-7" "Philadelphia cultural district aerial or wide shot, multiple museums along Benjamin Franklin Parkway" "$IMG/mu-gallery-7.jpg" &
run "mu-resources" "Museum conservation documentation, window film UV protection specifications, professional documents on curator desk" "$IMG/mu-resources.jpg" &
run "mu-testimonial-1" "Museum curator in gallery, examining artwork under soft natural light, professional, knowledgeable" "$IMG/mu-testimonial-1.jpg" --width 1024 --height 1024 &
run "mu-testimonial-2" "Library director or branch manager at desk in public library, warm natural light, professional librarian environment" "$IMG/mu-testimonial-2.jpg" --width 1024 --height 1024 &
run "mu-testimonial-3" "Museum collections manager reviewing conservation records, professional, artifact-rich museum setting" "$IMG/mu-testimonial-3.jpg" --width 1024 --height 1024 &

# ═══════════════════════════════════════════════════
# CHURCHES (ch-)
# ═══════════════════════════════════════════════════

run "ch-hero" "Historic Philadelphia church exterior, beautiful historic stone architecture, traditional religious building, urban setting, early morning light" "$IMG/ch-hero.jpg" &
run "ch-cta-bg" "Philadelphia historic church district, multiple church spires and facades, beautiful historic religious architecture, golden evening light" "$IMG/ch-cta-bg.jpg" --width 2752 --height 1536 &
run "ch-whatis" "Church sanctuary interior, beautiful filtered light through stained glass windows, wooden pews, warm peaceful atmosphere" "$IMG/ch-whatis.jpg" &
run "ch-why" "Church sanctuary interior, intense unfiltered afternoon sunlight streaming through clear windows, congregants uncomfortable in hot light" "$IMG/ch-why.jpg" &
run "ch-type-cathedral" "Grand historic cathedral interior Philadelphia, soaring architecture, stained glass windows, magnificent religious space" "$IMG/ch-type-cathedral.jpg" &
run "ch-type-parish" "Neighborhood parish church exterior Philadelphia, traditional brick architecture, community religious building, welcoming" "$IMG/ch-type-parish.jpg" &
run "ch-type-modern" "Modern multi-purpose church campus exterior, large contemporary glass panels, worship center, suburban Philadelphia setting" "$IMG/ch-type-modern.jpg" &
run "ch-type-synagogue" "Traditional synagogue interior or exterior, warm religious architecture, Philadelphia, house of worship" "$IMG/ch-type-synagogue.jpg" &
run "ch-uv" "Church interior with stained glass windows protected by UV film, colors vibrant, historic glass preserved, warm sanctuary light" "$IMG/ch-uv.jpg" &
run "ch-energy" "Church fellowship hall interior, large windows with solar control film installed, congregation gathering, warm comfortable space" "$IMG/ch-energy.jpg" &
run "ch-comfort" "Church sanctuary with glare-free comfortable seating, congregation enjoying service, windows with treated film, natural light balanced" "$IMG/ch-comfort.jpg" &
run "ch-security" "Church entrance door with security window film on glass panels, professional installation, historic church exterior, Philadelphia" "$IMG/ch-security.jpg" &
run "ch-slider-uv" "UV protection window film preserving historic church stained glass, interior view, colors protected and vibrant" "$IMG/ch-slider-uv.jpg" --width 2752 --height 1536 &
run "ch-slider-energy" "Energy saving window film on church sanctuary windows, reduced heat gain, comfortable congregation seating, peaceful interior" "$IMG/ch-slider-energy.jpg" --width 2752 --height 1536 &
run "ch-slider-comfort" "Glare reduction film in church sanctuary, congregation comfortable during sunlit services, natural light maintained without harshness" "$IMG/ch-slider-comfort.jpg" --width 2752 --height 1536 &
run "ch-slider-security" "Security window film on church entry glass, anti-intrusion protection, historic church Philadelphia exterior" "$IMG/ch-slider-security.jpg" --width 2752 --height 1536 &
run "ch-slider-graffiti" "Anti-graffiti window film protecting church architectural glass from vandalism, historic religious building, urban Philadelphia" "$IMG/ch-slider-graffiti.jpg" --width 2752 --height 1536 &
run "ch-slider-decorative" "Decorative frosted privacy film on church office windows or fellowship hall glass partition, warm religious interior" "$IMG/ch-slider-decorative.jpg" --width 2752 --height 1536 &
run "ch-case-study" "Historic North Philadelphia AME church exterior, beautiful late 19th century brick architecture, window film installation recently completed" "$IMG/ch-case-study.jpg" --width 848 --height 1264 &
run "ch-gallery-1" "Old Christ Church Philadelphia exterior, historic colonial religious architecture, among America's oldest churches" "$IMG/ch-gallery-1.jpg" &
run "ch-gallery-2" "Church sanctuary interior with beautiful stained glass windows, warm filtered light, historic pews, religious art" "$IMG/ch-gallery-2.jpg" &
run "ch-gallery-3" "Modern church campus fellowship hall interior, large windows, congregation social gathering, warm community space" "$IMG/ch-gallery-3.jpg" &
run "ch-gallery-4" "Church technician installing conservation-grade window film on historic stained glass window, careful professional installation" "$IMG/ch-gallery-4.jpg" &
run "ch-gallery-5" "Philadelphia church exterior at golden hour, historic stone facade, traditional religious architecture, beautiful evening light" "$IMG/ch-gallery-5.jpg" &
run "ch-gallery-6" "Church office or administrative area with privacy film on glass partition, warm professional religious organization setting" "$IMG/ch-gallery-6.jpg" &
run "ch-gallery-7" "Philadelphia historic church district wide view, multiple church facades and spires, urban religious heritage landscape" "$IMG/ch-gallery-7.jpg" &
run "ch-resources" "Church window film compliance documentation, historic preservation approval forms, conservation specifications, pastor or facilities manager reviewing" "$IMG/ch-resources.jpg" &
run "ch-testimonial-1" "Church pastor in historic sanctuary, warm professional religious leader, natural light from stained glass windows" "$IMG/ch-testimonial-1.jpg" --width 1024 --height 1024 &
run "ch-testimonial-2" "Church facilities committee chair or building manager, professional, reviewing building plans in church office" "$IMG/ch-testimonial-2.jpg" --width 1024 --height 1024 &
run "ch-testimonial-3" "Modern church administrator, contemporary church office setting, professional, reviewing operations documents" "$IMG/ch-testimonial-3.jpg" --width 1024 --height 1024 &

wait
echo "✅ All images done in $(($(date +%s)-START))s"
