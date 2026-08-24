#!/usr/bin/env python3
"""Generate city-page images via Higgsfield CLI, SEO-named. Drive-drop resilient.
Usage: python3 gen_city_images.py <city> [start] [count]
Saves: public/images/window-film-<city>-pa-<slot>.jpg
- Downloads to internal /tmp first, then copies onto the (external) SSD, to reduce
  sustained write I/O on the SSD.
- Catches FileNotFoundError / OSError (SSD unmount) and exits gracefully with a
  clear message instead of a raw traceback. Resumable: skips existing files.
"""
import json, os, shutil, subprocess, sys, tempfile, urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
city = sys.argv[1]
MANIFEST = os.path.join(ROOT, "scripts", f"{city}_image_manifest.json")
OUTDIR = os.path.join(ROOT, "public", "images")
LOG = os.path.join(ROOT, "scripts", f"_{city}_img_progress.log")
TMP = tempfile.gettempdir()  # internal disk

def drive_up():
    return os.path.isdir(OUTDIR)

def log(msg):
    print(msg, flush=True)
    try:
        with open(LOG, "a") as f:
            f.write(msg + "\n")
    except OSError:
        pass  # SSD may be gone; stdout still captured

jobs = json.load(open(MANIFEST))
start = int(sys.argv[2]) if len(sys.argv) > 2 else 0
count = int(sys.argv[3]) if len(sys.argv) > 3 else len(jobs)
jobs = jobs[start:start+count]

for j in jobs:
    slot, aspect, prompt = j["slot"], j["aspect"], j["prompt"]
    if not drive_up():
        log(f"ABORT {slot}: SSD not mounted — stopping cleanly. Remount and re-run (resumable).")
        sys.exit(3)
    out = os.path.join(OUTDIR, f"window-film-{city}-pa-{slot}.jpg")
    try:
        if os.path.exists(out) and os.path.getsize(out) > 10000:
            log(f"SKIP {slot} (exists)")
            continue
    except OSError:
        log(f"ABORT {slot}: SSD dropped during stat — stopping. Remount and re-run.")
        sys.exit(3)

    cmd = ["higgsfield","generate","create","gpt_image_2",
           "--prompt", prompt, "--aspect_ratio", aspect,
           "--quality","high","--resolution","2k","--wait","--wait-timeout","8m"]
    try:
        r = subprocess.run(cmd, cwd=ROOT, capture_output=True, text=True, timeout=600)
    except subprocess.TimeoutExpired:
        log(f"TIMEOUT {slot}")
        continue

    url = ""
    for ln in r.stdout.splitlines():
        ln = ln.strip()
        if ln.startswith("http"):
            url = ln
    if not url:
        log(f"FAIL {slot} :: rc={r.returncode} :: {r.stdout[-160:]} {r.stderr[-160:]}")
        continue

    # 1) download to internal /tmp (keeps sustained writes off the SSD)
    tmpf = os.path.join(TMP, f"wf_{city}_{slot}.jpg")
    try:
        urllib.request.urlretrieve(url, tmpf)
    except Exception as e:
        log(f"DLFAIL {slot} :: {e} :: {url}")
        continue

    # 2) copy onto SSD (single write); if drive gone, stop cleanly
    if not drive_up():
        log(f"ABORT {slot}: SSD dropped before copy — image cached at {tmpf}. Remount and re-run.")
        sys.exit(3)
    try:
        shutil.copyfile(tmpf, out)
        sz = os.path.getsize(out)
        os.remove(tmpf)
        log(f"OK {slot} :: {sz} bytes :: {url}")
    except OSError as e:
        log(f"ABORT {slot}: SSD write failed ({e}) — cached at {tmpf}. Remount and re-run.")
        sys.exit(3)

log(f"=== {city} batch segment done ===")
