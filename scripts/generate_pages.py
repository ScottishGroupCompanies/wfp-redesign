#!/usr/bin/env python3
"""
WFP Page Generator
Reads manifest-scoped.json and writes all Astro page files.
"""
import json, os, re
from pathlib import Path

MANIFEST = "/mnt/wslg/distro/home/zvivas/.hermes/profiles/site-scout/home/wfp-scrape/manifest-scoped.json"
SITE = "/home/zvivas/wfp-site"
IMG_DIR = f"{SITE}/public/images"

with open(MANIFEST) as f:
    data = json.load(f)

image_index = data["image_index"]
pages = data["pages"]
img_available = set(os.listdir(IMG_DIR))

# ── Image resolution ─────────────────────────────────────────────
SHARED = {
    'philadelphia-featured-image-2-scaled.jpg',
    'window-film-philadelphia-applications-scaled.jpg',
    'window-film-philadelphia-benefits.jpg',
    'window-film-philadelphia-dark.png',
    'window-film-philadelphia-resources.jpg',
    'window-film-philadelphia-white-1.png',
    '3m-window-film-philadelphia-300x150.jpg',
    'casper-window-film-philadelphia-300x150.jpg',
    'cbond-window-film-philadelphia-300x150.jpg',
    'graffiti-shield-window-film-philadelphia-300x150.jpg',
    'hanita-coatings-window-film-philadelphia-300x150.jpg',
    'hdclear-window-film-philadelphia-300x150.jpg',
    'huper-optik-window-film-philadelphia-300x150.jpg',
    'llumar-window-film-philadelphia-300x150.jpg',
    'madico-window-film-philadelphia-300x150.jpg',
    'solar-gard-window-film-philadelphia-300x150.jpg',
    'solyx-window-film-philadelphia-300x150.jpg',
    'vista-window-film-philadelphia-300x150.jpg',
}

def resolve_image(wp_url):
    if not wp_url:
        return '', ''
    basename = wp_url.split('/')[-1]
    if basename in SHARED:
        return '', ''
    if 'wp-content/plugins' in wp_url:
        return '', ''
    if 'wfphilly-blog-image' in wp_url:
        return '', ''
    if re.search(r'/file-\d+\.png', wp_url):
        return '', ''
    if re.search(r'-300x\d+\.(jpg|png)$', wp_url):
        return '', ''

    info = image_index.get(wp_url)
    if info:
        fname = info['local_path'].replace('images/', '')
        if fname in img_available:
            return '/images/' + fname, info.get('alt', '') or ''

    # Fallback: strip -scaled or -NNNxNNN
    stripped  = re.sub(r'-scaled(\.\w+)$', r'\1', basename)
    stripped2 = re.sub(r'-\d+x\d+(\.\w+)$', r'\1', basename)
    for url2, info2 in image_index.items():
        b2 = url2.split('/')[-1]
        if b2 in (stripped, stripped2) and b2 != basename:
            fname2 = info2['local_path'].replace('images/', '')
            if fname2 in img_available:
                return '/images/' + fname2, info2.get('alt', '') or ''
    return '', ''

def get_content_images(page):
    seen, results = set(), []
    for img in page.get('images', []):
        local, alt = resolve_image(img['src'])
        if local and local not in seen:
            seen.add(local)
            results.append({'src': local, 'alt': alt})
    return results

def url_to_path(url):
    path = url.rstrip('/').replace('https://www.windowfilmphiladelphia.net', '')
    if not path:
        return '/'
    return path + '/'

def make_astro_path(url):
    path = url_to_path(url)
    if path == '/':
        return SITE + '/src/pages/index.astro'
    parts = path.strip('/').split('/')
    dirs, name = parts[:-1], parts[-1]
    dir_path = '/'.join(dirs) if dirs else ''
    if dir_path:
        full_dir = SITE + '/src/pages/' + dir_path
    else:
        full_dir = SITE + '/src/pages'
    os.makedirs(full_dir, exist_ok=True)
    return full_dir + '/' + name + '.astro'

def esc_sq(s):
    """Escape for single-quoted Astro frontmatter strings."""
    return s.replace('\\', '\\\\').replace("'", "\\'")

def render_baf_component(sec, img, flip, alt_bg):
    heading = esc_sq(sec.get('heading', ''))
    body_raw = sec.get('body_text', '').strip()
    body_esc = esc_sq(body_raw[:800])
    
    if img:
        img_src = img['src']
        img_alt = esc_sq(img['alt'])
        flip_str = 'true' if flip else 'false'
        alt_str  = 'true' if alt_bg else 'false'
        return (
            "<BackAndForthSection\n"
            "  heading={'" + heading + "'}\n"
            "  body={'" + body_esc + "'}\n"
            "  imageSrc={'" + img_src + "'}\n"
            "  imageAlt={'" + img_alt + "'}\n"
            "  flip={" + flip_str + "}\n"
            "  altBg={" + alt_str + "}\n"
            "/>"
        )
    else:
        # text-only block
        paras = re.split(r'(?<=[.!?])\s{3,}', body_raw)
        paras = [p.strip() for p in paras if p.strip()][:3]
        para_html = '\n        '.join('<p>' + p + '</p>' for p in paras) if paras else '<p>' + body_raw[:400] + '</p>'
        heading_clean = sec.get('heading', '')
        return (
            '<section class="section-pad">\n'
            '  <div class="container">\n'
            '    <h2>' + heading_clean + '</h2>\n'
            '    ' + para_html + '\n'
            '  </div>\n'
            '</section>'
        )

def make_page(page):
    url = page['url']
    page_type = page.get('page_type', '')
    title = (page.get('title_tag') or page.get('h1') or 'Window Film Philadelphia').strip()
    desc  = (page.get('meta_description') or '').strip()
    h1    = (page.get('h1') or title).strip()

    canonical_path = url_to_path(url)
    canonical_url  = 'https://www.windowfilmphiladelphia.net' + canonical_path

    sections = page.get('body_sections', [])
    content_images = get_content_images(page)
    hero_img = content_images[0] if content_images else None
    hero_src = hero_img['src'] if hero_img else '/images/2021-08-window-film-philadelphia-benefits.jpg'
    hero_alt = esc_sq(hero_img['alt'] if hero_img else 'Window Film Philadelphia')

    # Filter to sections that have both heading and body
    content_sections = [s for s in sections if s.get('heading') and s.get('body_text')]

    # Build BAF blocks
    baf_parts = []
    for i, sec in enumerate(content_sections[:8]):
        img  = content_images[i] if i < len(content_images) else None
        flip = (i % 2 == 1)
        baf_parts.append(render_baf_component(sec, img, flip, flip))

    baf_block = '\n\n  '.join(baf_parts)

    cta_block = '''<section class="cta-strip">
    <div class="container">
      <h2>Get Your Free Quote Today</h2>
      <p>Philadelphia&#39;s leading window film contractor. Contact us for a free consultation and estimate.</p>
      <a href="/contact/" class="btn btn--accent">Contact Us</a>
    </div>
  </section>'''

    # Hero style uses background-image overlay
    hero_style = (
        "background-image: linear-gradient(rgba(0,30,90,0.72), rgba(0,30,90,0.88)), "
        "url('" + hero_src + "'); background-size: cover; background-position: center;"
    )

    hero_block = (
        '<section class="page-hero" style="' + hero_style + '">\n'
        '    <div class="container">\n'
        '      <h1>' + h1 + '</h1>\n'
        '    </div>\n'
        '  </section>'
    )

    # Layout import depth
    parts = canonical_path.strip('/').split('/')
    depth = len(parts)
    layout_rel = '../' * depth + 'layouts/BaseLayout.astro'
    comp_rel   = '../' * depth + 'components/BackAndForthSection.astro'

    title_esc = esc_sq(title)
    desc_esc  = esc_sq(desc)
    canon_esc = canonical_url

    page_code = (
        "---\n"
        "import BaseLayout from '" + layout_rel + "';\n"
        "import BackAndForthSection from '" + comp_rel + "';\n"
        "\n"
        "const title = '" + title_esc + "';\n"
        "const description = '" + desc_esc + "';\n"
        "---\n"
        "\n"
        "<BaseLayout title={title} description={description} canonical='" + canon_esc + "'>\n"
        "  " + hero_block + "\n"
        "\n"
        "  " + baf_block + "\n"
        "\n"
        "  " + cta_block + "\n"
        "</BaseLayout>\n"
    )

    return page_code


# ── Generate all pages ───────────────────────────────────────────
SKIP_TYPES = {'spam', 'other', 'shop_product', 'shop_index', 'portfolio', 'team', 'careers', 'blog_index', 'category'}

generated = 0
skipped  = 0

for page in pages:
    pt = page.get('page_type', '')
    if pt in SKIP_TYPES:
        skipped += 1
        continue
    if page.get('http_status', 200) == 404:
        skipped += 1
        continue

    astro_path = make_astro_path(page['url'])
    code = make_page(page)

    Path(astro_path).parent.mkdir(parents=True, exist_ok=True)
    with open(astro_path, 'w', encoding='utf-8') as f:
        f.write(code)
    generated += 1
    print(f"  WROTE {astro_path.replace(SITE, '')}")

print(f"\nDone: {generated} pages generated, {skipped} skipped.")
