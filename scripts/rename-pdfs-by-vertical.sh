#!/bin/bash
# Rename/copy PDFs so each page's files start with the vertical keyword
# Rule: only add content descriptors that match what the PDF actually covers
# Shared files get copied with page-specific names; originals removed after
set -e
RES="/Users/christianneaengenheyster/.openclaw/workspace/projects/window-film-philadelphia/public/resources"
cd "$RES"

mv_if() { [ -f "$1" ] && mv "$1" "$2" && echo "renamed: $2" || echo "SKIP (missing): $1"; }
cp_if() { [ -f "$1" ] && cp "$1" "$2" && echo "copied:  $2" || echo "SKIP (missing): $1"; }

echo "=== MASS TRANSIT PAGE ==="
mv_if "3m-silver-20-solar-control-commercial-transit-window-film-spec.pdf" \
      "mass-transit-window-film-3m-silver-20-solar-control-spec-philadelphia.pdf"
mv_if "solar-gard-safety-security-14mil-window-film-transit-philadelphia-spec.pdf" \
      "mass-transit-window-film-solar-gard-14mil-safety-security-spec-philadelphia.pdf"
mv_if "solar-gard-safety-security-8mil-window-film-transit-philadelphia-spec.pdf" \
      "airport-window-film-solar-gard-8mil-safety-security-spec-philadelphia.pdf"
# Shared — copy with transit keyword
cp_if "3m-commercial-window-film-energy-efficiency-brochure.pdf" \
      "mass-transit-airport-window-film-energy-efficiency-brochure-3m-philadelphia.pdf"
cp_if "3m-scotchshield-ultra-s800-technical-data-sheet-philadelphia.pdf" \
      "mass-transit-window-film-3m-scotchshield-safety-security-technical-data-philadelphia.pdf"
cp_if "vista-spectraselect-solar-safety-window-film-specs.pdf" \
      "mass-transit-airport-window-film-vista-spectraselect-solar-safety-spec-philadelphia.pdf"
cp_if "llumar-anti-graffiti-window-film-spec-sheet-philadelphia.pdf" \
      "mass-transit-window-film-llumar-anti-graffiti-spec-philadelphia.pdf"

echo ""
echo "=== RESTAURANTS PAGE ==="
mv_if "3m-markthal-food-market-window-film-case-study.pdf" \
      "restaurant-window-film-3m-markthal-food-market-case-study-philadelphia.pdf"
mv_if "solar-gard-graffitigard-anti-graffiti-window-film-philadelphia-spec.pdf" \
      "restaurant-window-film-solar-gard-graffitigard-anti-graffiti-spec-philadelphia.pdf"
# Shared — copy with restaurant keyword
cp_if "3m-commercial-window-film-energy-efficiency-brochure.pdf" \
      "restaurant-window-film-energy-efficiency-brochure-3m-philadelphia.pdf"
cp_if "3m-prestige-70-solar-control-window-film-philadelphia.pdf" \
      "restaurant-window-film-3m-prestige-70-solar-control-spec-philadelphia.pdf"
cp_if "3m-fasara-decorative-film-product-bulletin-philadelphia.pdf" \
      "restaurant-window-film-3m-fasara-decorative-privacy-bulletin-philadelphia.pdf"
cp_if "llumar-anti-graffiti-window-film-spec-sheet-philadelphia.pdf" \
      "restaurant-window-film-llumar-anti-graffiti-spec-philadelphia.pdf"

echo ""
echo "=== RETAIL PAGE ==="
mv_if "3m-scotchshield-jewelry-retail-security-window-film-case-study.pdf" \
      "retail-store-window-film-3m-scotchshield-smash-grab-security-case-study-philadelphia.pdf"
mv_if "3m-daylight-redirecting-film-retail-store-case-study.pdf" \
      "retail-window-film-3m-daylight-redirecting-natural-light-case-study-philadelphia.pdf"
mv_if "3m-window-film-national-retail-pharmacy-case-study.pdf" \
      "retail-store-window-film-3m-national-pharmacy-case-study-philadelphia.pdf"
# Shared — copy with retail keyword
cp_if "3m-prestige-70-solar-control-window-film-philadelphia.pdf" \
      "retail-window-film-3m-prestige-70-solar-control-spec-philadelphia.pdf"
cp_if "3m-fasara-decorative-film-product-bulletin-philadelphia.pdf" \
      "retail-store-window-film-3m-fasara-decorative-branding-bulletin-philadelphia.pdf"
cp_if "3m-scotchshield-ultra-s800-product-bulletin-philadelphia.pdf" \
      "retail-window-film-3m-scotchshield-ultra-s800-security-bulletin-philadelphia.pdf"

echo ""
echo "=== HOMES & CONDOS PAGE ==="
mv_if "llumar-low-e-energy-saving-window-film-philadelphia-performance-specs.pdf" \
      "residential-window-film-llumar-low-e-energy-saving-spec-philadelphia.pdf"
mv_if "llumar-reflective-privacy-window-film-philadelphia-performance-specs.pdf" \
      "home-window-film-llumar-reflective-privacy-spec-philadelphia.pdf"
mv_if "vista-low-e-energy-saving-window-film-philadelphia-spec-sheet.pdf" \
      "residential-window-film-vista-low-e-energy-saving-spec-philadelphia.pdf"
# Shared — copy with residential keyword
cp_if "3m-prestige-70-solar-control-window-film-philadelphia.pdf" \
      "residential-window-film-3m-prestige-70-solar-control-spec-philadelphia.pdf"
cp_if "3m-thinsulate-cc75-technical-bulletin-philadelphia.pdf" \
      "home-window-film-3m-thinsulate-cc75-energy-saving-low-e-bulletin-philadelphia.pdf"

echo ""
echo "=== OFFICE PAGE ==="
mv_if "3m-night-vision-office-building-case-study-philadelphia.pdf" \
      "commercial-office-window-film-3m-night-vision-case-study-philadelphia.pdf"
mv_if "3m-daylight-redirecting-film-office-case-study-philadelphia.pdf" \
      "commercial-office-window-film-3m-daylight-redirecting-case-study-philadelphia.pdf"
mv_if "3m-daylight-redirecting-film-walgreens-commercial-case-study-philadelphia.pdf" \
      "commercial-window-film-3m-daylight-redirecting-walgreens-case-study-philadelphia.pdf"
mv_if "llumar-solar-control-architectural-window-film-philadelphia-specs-na.pdf" \
      "commercial-office-window-film-llumar-solar-control-architectural-spec-philadelphia.pdf"
# Shared — copy with office keyword
cp_if "3m-prestige-70-solar-control-window-film-philadelphia.pdf" \
      "commercial-office-window-film-3m-prestige-70-solar-control-spec-philadelphia.pdf"

echo ""
echo "=== HOTEL PAGE ==="
mv_if "solar-gard-days-inn-hotel-window-film-case-study.pdf" \
      "hotel-window-film-solar-gard-days-inn-case-study-philadelphia.pdf"
mv_if "llumar-resort-hotel-custom-window-film-case-study.pdf" \
      "hotel-window-film-llumar-resort-custom-film-case-study-philadelphia.pdf"
mv_if "3m-hotel-architectural-finishes-case-study.pdf" \
      "hotel-window-film-3m-architectural-finishes-case-study-philadelphia.pdf"
mv_if "3m-commercial-window-film-energy-efficiency-hotels.pdf" \
      "hotel-window-film-3m-energy-efficiency-brochure-philadelphia.pdf"
mv_if "llumar-architectural-solar-control-window-film-specs.pdf" \
      "hotel-window-film-llumar-architectural-solar-control-spec-philadelphia.pdf"
# Shared — copy with hotel keyword
cp_if "vista-spectraselect-solar-safety-window-film-specs.pdf" \
      "hotel-window-film-vista-spectraselect-solar-safety-spec-philadelphia.pdf"

echo ""
echo "=== Done. Removing originals that were fully replaced by copies ==="
# Only remove originals that are shared and have been copied for all their pages
# 3m-commercial-window-film-energy-efficiency-brochure → copied for mass-transit + restaurants
# (hotel already moved to hotel-window-film-3m-energy-efficiency...)
[ -f "3m-commercial-window-film-energy-efficiency-brochure.pdf" ] && rm "3m-commercial-window-film-energy-efficiency-brochure.pdf" && echo "removed: 3m-commercial-window-film-energy-efficiency-brochure.pdf"

echo ""
echo "=== FINAL FILE LIST ==="
ls *.pdf | sort
