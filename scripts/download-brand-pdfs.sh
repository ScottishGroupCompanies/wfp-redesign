#!/bin/bash
# Download and keyword-rename PDFs from LLumar, Solar Gard, Madico, Huper Optik
# for mass-transit, restaurants, and retail application pages

RES="/Users/christianneaengenheyster/.openclaw/workspace/projects/window-film-philadelphia/public/resources"
DL() {
  local url="$1" out="$2"
  echo ">>> Downloading: $out"
  curl -sL "$url" -o "$RES/$out" --max-time 30
  local size=$(wc -c < "$RES/$out" 2>/dev/null)
  if [ "$size" -gt 5000 ]; then
    echo "✓ $out ($size bytes)"
  else
    echo "✗ FAILED or stub: $out ($size bytes) — removing"
    rm -f "$RES/$out"
  fi
}

echo "=== LLumar Anti-Graffiti ==="
DL "https://llumar.com/content/dam/eastman/performance-films/llumar/nar/documents/english/arch/3p-specs-arch-safety-anti-graffiti.pdf" \
   "llumar-anti-graffiti-window-film-spec-sheet-philadelphia.pdf"

echo "=== LLumar Safety & Security ==="
DL "https://llumar.com/content/dam/eastman/performance-films/llumar/nar/documents/english/arch/llumar-safety-security-film-guide.pdf" \
   "llumar-safety-security-window-film-philadelphia-guide.pdf"
DL "https://llumar.com/content/dam/eastman/performance-films/llumar/documents/LLSP0009NA_SafetySecurityBrochure.pdf" \
   "llumar-safety-security-window-film-brochure-philadelphia.pdf"

echo "=== LLumar Decorative (for restaurants) ==="
DL "https://llumar.com/content/dam/eastman/performance-films/llumar/nar/documents/english/arch/llumar-dusted-crystal-decorative-window-film-spec.pdf" \
   "llumar-decorative-privacy-window-film-restaurant-spec-philadelphia.pdf"

echo "=== Solar Gard Safety ==="
DL "https://www.solargard.com/wp-content/uploads/2019/10/SolarGard_Safety_Security_Brochure_2019.pdf" \
   "solar-gard-safety-security-window-film-brochure-philadelphia.pdf"
DL "https://www.solargard.com/wp-content/uploads/2020/09/Solar-Gard-Stainless-Steel-Safety-Film-Spec-Sheet.pdf" \
   "solar-gard-stainless-safety-window-film-mass-transit-spec.pdf"

echo "=== Vista Decorative / Privacy (for restaurants) ==="
DL "https://llumar.com/content/dam/eastman/performance-films/llumar/nar/documents/english/arch/vista-arch-decorative-window-film-specs.pdf" \
   "vista-decorative-privacy-window-film-restaurant-philadelphia-spec.pdf"

echo "=== Madico Safety & Security ==="
DL "https://madico.com/wp-content/uploads/2019/04/Madico-Safety-Security-Film-Tear-Sheet.pdf" \
   "madico-safety-security-window-film-mass-transit-spec-philadelphia.pdf"
DL "https://madico.com/wp-content/uploads/2021/02/Madico-Commercial-Brochure.pdf" \
   "madico-commercial-window-film-philadelphia-brochure.pdf"

echo "=== Huper Optik ==="
DL "https://www.huperoptik.com/wp-content/uploads/2019/08/Huper-Optik-Commercial-Performance-Data-Sheet.pdf" \
   "huper-optik-commercial-solar-control-window-film-philadelphia-specs.pdf"
DL "https://www.huperoptik.com/wp-content/uploads/2020/03/Huper-Optik-Security-Film-Spec-Sheet.pdf" \
   "huper-optik-safety-security-window-film-transit-philadelphia-spec.pdf"

echo ""
echo "=== RESULTS ==="
ls -lh "$RES"/*.pdf | grep -E "llumar-anti|llumar-safety|llumar-deco|solar-gard-safety|solar-gard-stain|vista-deco|madico|huper" | awk '{print $5, $9}' 2>/dev/null || echo "No new files found"
