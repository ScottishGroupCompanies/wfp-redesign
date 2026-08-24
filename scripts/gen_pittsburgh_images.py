#!/usr/bin/env python3
"""Generate Pittsburgh city-page images via Higgsfield CLI and save under
SEO filenames: public/images/window-film-pittsburgh-pa-<slot>.jpg
Resumable: skips slots whose output file already exists.
Appends a log line per slot to scripts/_pgh_img_progress.log
"""
import json, os, subprocess, sys, urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MANIFEST = os.path.join(ROOT, "scripts", "pittsburgh_image_manifest.json")
OUTDIR = os.path.join(ROOT, "public", "images")
LOG = os.path.join(ROOT, "scripts", "_pgh_img_progress.log")

jobs = json.load(open(MANIFEST))
# Optional slice: argv[1]=start index, argv[2]=count
start = int(sys.argv[1]) if len(sys.argv) > 1 else 0
count = int(sys.argv[2]) if len(sys.argv) > 2 else len(jobs)
jobs = jobs[start:start+count]

def log(msg):
    line = msg + "\n"
    with open(LOG, "a") as f:
        f.write(line)
    print(msg, flush=True)

for j in jobs:
    slot, aspect, prompt = j["slot"], j["aspect"], j["prompt"]
    out = os.path.join(OUTDIR, f"window-film-pittsburgh-pa-{slot}.jpg")
    if os.path.exists(out) and os.path.getsize(out) > 10000:
        log(f"SKIP {slot} (exists)")
        continue
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
        log(f"FAIL {slot} :: rc={r.returncode} :: {r.stdout[-200:]} {r.stderr[-200:]}")
        continue
    try:
        urllib.request.urlretrieve(url, out)
        sz = os.path.getsize(out)
        log(f"OK {slot} :: {sz} bytes :: {url}")
    except Exception as e:
        log(f"DLFAIL {slot} :: {e} :: {url}")

log("=== batch segment done ===")
