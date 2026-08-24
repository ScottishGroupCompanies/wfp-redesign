"""Repoint all image paths in pittsburgh.astro from the Philadelphia placeholder
names to the new Pittsburgh SEO filenames, but ONLY for slots whose generated
file actually exists on disk. Reports any that are still missing.
"""
import os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
page = os.path.join(ROOT, "src/pages/cities/pittsburgh.astro")
imgdir = os.path.join(ROOT, "public/images")

s = open(page, encoding="utf-8").read()

# Every philadelphia image path referenced in the page
refs = sorted(set(re.findall(r'/images/window-film-philadelphia-pa-[a-z0-9-]+\.jpg', s)))
swapped, missing = [], []
for ref in refs:
    slot_file = ref.replace('/images/window-film-philadelphia-pa-', 'window-film-pittsburgh-pa-')
    new_ref = '/images/' + slot_file
    if os.path.exists(os.path.join(imgdir, slot_file)) and os.path.getsize(os.path.join(imgdir, slot_file)) > 10000:
        s = s.replace(ref, new_ref)
        swapped.append(new_ref)
    else:
        missing.append(slot_file)

if missing:
    print("NOT SWAPPING — missing generated files:")
    for m in missing:
        print("  -", m)
    print(f"\n{len(swapped)} would swap, {len(missing)} missing. No file written.")
else:
    open(page, "w", encoding="utf-8").write(s)
    print(f"WROTE: swapped {len(swapped)} image paths to pittsburgh filenames.")
    # sanity: any philadelphia image refs left?
    left = re.findall(r'/images/window-film-philadelphia-pa-[a-z0-9-]+\.jpg', s)
    print("Remaining philadelphia image refs:", len(left))
