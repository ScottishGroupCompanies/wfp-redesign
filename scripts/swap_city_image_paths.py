"""Repoint image paths in a city page from Philadelphia placeholders to the
city's own SEO filenames — ONLY for slots whose generated file exists.
Usage: python3 swap_city_image_paths.py <city>
"""
import os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
city = sys.argv[1]
page = os.path.join(ROOT, f"src/pages/cities/{city}.astro")
imgdir = os.path.join(ROOT, "public/images")

s = open(page, encoding="utf-8").read()
refs = sorted(set(re.findall(r'/images/window-film-philadelphia-pa-[a-z0-9-]+\.jpg', s)))
swapped, missing = [], []
for ref in refs:
    slot_file = ref.replace('/images/window-film-philadelphia-pa-', f'window-film-{city}-pa-')
    new_ref = '/images/' + slot_file
    fp = os.path.join(imgdir, slot_file)
    if os.path.exists(fp) and os.path.getsize(fp) > 10000:
        s = s.replace(ref, new_ref)
        swapped.append(new_ref)
    else:
        missing.append(slot_file)

if missing:
    print(f"NOT SWAPPING {city} — missing files:")
    for m in missing:
        print("  -", m)
    print(f"{len(swapped)} would swap, {len(missing)} missing. No write.")
else:
    open(page, "w", encoding="utf-8").write(s)
    left = re.findall(r'/images/window-film-philadelphia-pa-[a-z0-9-]+\.jpg', s)
    print(f"WROTE {city}: swapped {len(swapped)} paths. Remaining philadelphia refs: {len(left)}")
