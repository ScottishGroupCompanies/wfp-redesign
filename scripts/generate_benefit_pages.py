#!/usr/bin/env python3
"""
Generates all 15 Benefits sub-pages from extracted XML content.
Run from /home/zvivas/wfp-site/
"""
import os

PAGES_DIR = "/home/zvivas/wfp-site/src/pages/benefits"

# ── helpers ───────────────────────────────────────────────────────────────────
def esc(s):
    return s.replace("'", "\\'")

def page(slug, title, desc, h1, hero_img, hero_alt, sections, hero_lead=""):
    """
    sections = list of dicts:
      { heading, body (str or list of strs for <ul>), img, img_alt, flip, cta_label, cta_href }
    body: str = paragraph(s); list = bullet list
    """
    lines = [
        "---",
        "import BaseLayout from '../../layouts/BaseLayout.astro';",
        "import BackAndForthSection from '../../components/BackAndForthSection.astro';",
        "import BrandLogos from '../../components/BrandLogos.astro';",
        "import CTAStrip from '../../components/CTAStrip.astro';",
        "",
        f"const title = '{esc(title)}';",
        f"const description = '{esc(desc)}';",
        "---",
        "",
        f"<BaseLayout title={{title}} description={{description}} canonical='https://www.windowfilmphiladelphia.net/benefits/{slug}/'>",
        "",
        f"  <section class=\"page-hero\" style=\"background-image: linear-gradient(rgba(40,40,40,0.62), rgba(40,40,40,0.80)), url('{hero_img}'); background-size: cover; background-position: center;\">",
        "    <div class=\"container\">",
        f"      <h1>{h1}</h1>",
    ]
    if hero_lead:
        lines.append(f"      <p>{esc(hero_lead)}</p>")
    lines += ["    </div>", "  </section>", ""]

    for i, sec in enumerate(sections):
        flip = sec.get('flip', i % 2 == 1)
        alt_bg = flip
        body = sec['body']
        img = sec.get('img', '')
        img_alt = sec.get('img_alt', '')
        heading = sec['heading']
        cta_label = sec.get('cta_label', '')
        cta_href  = sec.get('cta_href', '')

        if img:
            # BAF section
            if isinstance(body, list):
                # render bullet list inside a prose wrapper
                body_str = "\\n".join(body)
                lines.append(f"  <BackAndForthSection")
                lines.append(f"    heading={{\"{esc(heading)}\"}}")
                lines.append(f"    body={{\"{esc(body_str)}\"}}")
                lines.append(f"    imageSrc={{'{img}'}}")
                lines.append(f"    imageAlt={{'{esc(img_alt)}'}}")
                lines.append(f"    flip={{{str(flip).lower()}}}")
                lines.append(f"    altBg={{{str(alt_bg).lower()}}}")
                if cta_label:
                    lines.append(f"    ctaLabel={{'{esc(cta_label)}'}}")
                    lines.append(f"    ctaHref={{'{cta_href}'}}")
                lines.append(f"  />")
            else:
                lines.append(f"  <BackAndForthSection")
                lines.append(f"    heading={{\"{esc(heading)}\"}}")
                lines.append(f"    body={{\"{esc(str(body))}\"}}")
                lines.append(f"    imageSrc={{'{img}'}}")
                lines.append(f"    imageAlt={{'{esc(img_alt)}'}}")
                lines.append(f"    flip={{{str(flip).lower()}}}")
                lines.append(f"    altBg={{{str(alt_bg).lower()}}}")
                if cta_label:
                    lines.append(f"    ctaLabel={{'{esc(cta_label)}'}}")
                    lines.append(f"    ctaHref={{'{cta_href}'}}")
                lines.append(f"  />")
        else:
            # text-only / list section
            bg = "var(--color-bg-section)" if alt_bg else "var(--color-bg-white)"
            lines.append(f"  <section class=\"section-pad\" style=\"background:{bg}\">")
            lines.append(f"    <div class=\"container\" style=\"max-width:780px\">")
            lines.append(f"      <h2>{heading}</h2>")
            if isinstance(body, list):
                lines.append("      <ul class=\"benefit-list\">")
                for item in body:
                    lines.append(f"        <li>{item}</li>")
                lines.append("      </ul>")
            else:
                for para in str(body).split('\n'):
                    if para.strip():
                        lines.append(f"      <p>{para.strip()}</p>")
            if cta_label:
                lines.append(f"      <a href=\"{cta_href}\" class=\"btn btn--primary\" style=\"margin-top:1.5rem;display:inline-block\">{cta_label}</a>")
            lines.append("    </div>")
            lines.append("  </section>")

        lines.append("")

    lines += [
        "  <BrandLogos />",
        "  <CTAStrip />",
        "",
        "</BaseLayout>",
        "",
        "<style>",
        ".benefit-list {",
        "  padding-left: 1.5em;",
        "  margin-top: 0.75rem;",
        "}",
        ".benefit-list li {",
        "  margin-bottom: 0.5rem;",
        "  color: var(--color-text-secondary);",
        "  line-height: 1.6;",
        "}",
        "</style>",
    ]
    return '\n'.join(lines)

# ── Page definitions ───────────────────────────────────────────────────────────

PAGES = {}

# 1. Energy Savings
PAGES['energy-saving-window-film-philadephia'] = page(
    slug='energy-saving-window-film-philadephia',
    title='Energy Saving Window Film Philadelphia | Solar Films',
    desc='Looking to cut energy costs? Window Film Philadelphia offers high-quality energy-saving window films in Philadelphia. Get a Quote Now!',
    h1='Energy Saving Window Film in Philadelphia',
    hero_img='/images/energy-saving-window-film-philadelphia.png',
    hero_alt='Energy saving window film Philadelphia',
    hero_lead="Save on your utility costs with energy saving window film in Philadelphia — available for residential and commercial properties throughout the Philadelphia metro area.",
    sections=[
        dict(
            heading='Energy Saving Window Film in Philadelphia',
            body="Save on your utility costs with energy saving window film in Philadelphia! Energy costs can be a concern for any residential or commercial property owner. In order to keep buildings comfortable all year round, finding an energy-saving solution can help you lower your costs.\n\nWindow film offers a great way to address these issues without the high costs and long operational downtime. Window Film Philadelphia is honored to provide comprehensive energy-saving window film options from 3M, LLumar, Vista, and other industry-leading brands. Whether you are in the market for low-e window film for your Center City office or heat blocking film for your Chestnut Hill home, we have you covered!",
            img='/images/energy-saving-window-film-philadelphia.png',
            img_alt='Energy saving window film Philadelphia',
            flip=False,
        ),
        dict(
            heading='About Energy Saving Window Film',
            body="In Philadelphia, where extreme weather contributes to high energy demands — summer temperatures peaking at 86°F and cold winters — energy-saving window film is a crucial addition to buildings. Window film significantly rejects solar heat and insulates glass windows and doors, reducing the need for costly air conditioning in summer and heating in winter. By mitigating heat gain and preventing UV rays from entering, it helps maintain consistent indoor temperatures, addressing hot and cold spots effectively.\n\nFor property owners facing increased electricity rates, this film offers a cost-effective alternative to window replacement. It effectively turns single-pane windows into double-pane equivalents, enhancing insulative properties without extensive renovations — and can assist in achieving LEED certification.",
            img='/images/energy-saving-window-film-philly.jpg',
            img_alt='Energy saving window film Philadelphia',
            flip=True,
        ),
        dict(
            heading='Save Money & Improve Comfort',
            body=[
                'Save an average of 30% on cooling costs in summer and 10–15% in winter',
                'Eliminate uncomfortable hot and cold spots throughout your property',
                'Improve comfort while lowering energy costs year-round',
                'Insulate existing glass doors and windows without replacement',
                'Reject solar heat and UV radiation for a more consistent indoor temperature',
                'Cost-effective alternative to full window replacement',
            ],
            img='/images/energy-conserving-window-film-philadelphia.jpg',
            img_alt='Energy conserving window film Philadelphia',
            flip=False,
        ),
        dict(
            heading='Work with the Leading Energy-Saving Window Film Contractor in Philadelphia',
            body="Window Film Philadelphia is honored to provide leading services for energy-saving window film for Philadelphia residential and commercial properties. We have helped countless buildings improve their energy conservation and would love the opportunity to help improve your property. Contact us today for more information!",
            img='/images/low-e-window-film-philadelphia.jpg',
            img_alt='Low-e window film Philadelphia',
            flip=True,
            cta_label='Get a Free Quote',
            cta_href='/contact/',
        ),
    ]
)

# 2. UV Protection
PAGES['uv-blocking-window-film-philadelphia'] = page(
    slug='uv-blocking-window-film-philadelphia',
    title='UV Blocking Window Film Philadelphia | Window Film Philadelphia',
    desc='Window Film Philadelphia is the trusted source for UV blocking window film in Philadelphia. Protect interiors and reduce fading. Get a quote today!',
    h1='UV Blocking Window Film in Philadelphia',
    hero_img='/images/window-film-philadelphia-uv-blocking-solar-shield-1.jpg',
    hero_alt='UV blocking window film Philadelphia',
    hero_lead="Window Film Philadelphia is the trusted source for UV blocking window film in Philadelphia, PA — blocking up to 99.9% of harmful UV rays to protect people, furnishings, and flooring.",
    sections=[
        dict(
            heading='UV Blocking Window Film in Philadelphia',
            body="Window Film Philadelphia is the trusted source for UV blocking window film in Philadelphia, Pennsylvania. Our films block up to 99.9% of UVA and UVB rays, protecting people, furniture, and flooring. With access to a wide selection from leading brands like 3M, Vista, and LLumar, clients enjoy outstanding results from just one installation — saving on energy costs and improving comfort year-round. Whether you want to safeguard valuables in your commercial property or prevent hardwood floors in your home from fading, we will help you find the perfect solution.",
            img='/images/window-film-philadelphia-uv-glare-reduction.jpg',
            img_alt='UV blocking window film Philadelphia',
            flip=False,
        ),
        dict(
            heading='Why Philadelphia Properties Need UV Protection',
            body="The sun's UV rays are one of the leading causes of interior fading and material breakdown. Furniture, carpets, hardwood flooring, and artwork are all vulnerable to sun damage. UV window film acts like an invisible shield, filtering out harmful rays while still letting natural light into your space.\n\nFor homeowners, this means protecting your investment and extending the life of your decor. For businesses, it means lower maintenance costs, a more comfortable environment for employees, and an improved customer experience.",
            img='/images/window-film-philadelphia-uv-protection-solar-filter-1.jpg',
            img_alt='UV protection window film Philadelphia',
            flip=True,
        ),
        dict(
            heading='Energy Savings and Return on Investment',
            body="UV window films do not just protect interiors — they also improve energy efficiency. By reducing solar heat gain, films keep indoor temperatures more consistent and reduce strain on cooling systems. This often translates to significant savings on monthly energy bills.\n\nMost property owners see a return on investment within two to five years. With rising energy costs, UV window film is one of the smartest upgrades for Philadelphia properties looking to save money long-term.",
            img='/images/window-film-philadelphia-uv-blocking-tint-1.jpg',
            img_alt='UV blocking window film energy savings Philadelphia',
            flip=False,
        ),
        dict(
            heading='Benefits of UV Blocking Window Film',
            body=[
                'Blocks up to 99.9% of UVA and UVB rays — the equivalent of SPF 1,000',
                'Prevents fading of furniture, flooring, artwork, and merchandise',
                'Reduces solar heat gain to lower cooling costs',
                'Maintains natural light and clear views',
                'Protects occupants from UV-related skin and eye health risks',
                'Improves energy efficiency and can support LEED certification',
            ],
            img='/images/window-film-philadelphia-uv-reflective-solar-control-1.jpg',
            img_alt='UV protection benefits window film Philadelphia',
            flip=True,
        ),
        dict(
            heading='Partner with Philadelphia\'s Top UV Blocking Window Film Experts',
            body="Ready to protect your property from harmful UV rays? Window Film Philadelphia offers customized solutions for homes and businesses throughout the city. With years of experience and access to the best brands in the industry, we deliver installations that combine comfort, efficiency, and long-term value. Contact us at (267) 394-7980 or email contact@windowfilmphiladelphia.net to get started.",
            img='/images/window-film-philadelphia-uv-blocking-sunlight-protection-1.jpg',
            img_alt='UV window film contractor Philadelphia',
            flip=False,
            cta_label='Get a Free Quote',
            cta_href='/contact/',
        ),
    ]
)

# 3. Privacy
PAGES['privacy-window-film-philadelphia'] = page(
    slug='privacy-window-film-philadelphia',
    title='Privacy Window Film in Philadelphia | Window Film Philadelphia',
    desc='Window Film Philadelphia delivers high-quality privacy window film in Philadelphia to protect your interiors and increase your comfort.',
    h1='Privacy Window Film for Philadelphia',
    hero_img='/images/privacy-window-film-philadelphia.jpg',
    hero_alt='Privacy window film Philadelphia',
    hero_lead="Are you looking for the best solutions for privacy window film in Philadelphia? Window Film Philadelphia provides both exterior and interior privacy solutions for residential and commercial properties.",
    sections=[
        dict(
            heading='Privacy Window Film for Philadelphia',
            body="Are you looking for the best solutions for privacy window film in Philadelphia? Privacy concerns can impact any property type, whether your home or business is located close to other properties, within street view, or lacks foliage. Privacy issues can ultimately lead to discomfort, lack of productivity, and safety and security concerns. To maintain proper privacy throughout your property, you will need to find an effective solution. Window Film Philadelphia is honored to provide a comprehensive selection of decorative privacy films for your property.",
            img='/images/privacy-window-film-philadelphia.jpg',
            img_alt='Privacy window film Philadelphia',
            flip=False,
        ),
        dict(
            heading='About Privacy Window Film',
            body="Our premium privacy solutions are designed for both exterior windows and interior glass features, giving you the perfect balance of privacy and style. Block unwanted outside views while still enjoying optically clear visibility from the inside. For offices, interior decorative films can enhance privacy in conference rooms, lobbies, and open spaces without sacrificing natural sunlight. With countless finishes, patterns, and hues available, privacy window film can completely transform your property while improving comfort, security, and design.",
            img='/images/privacy-window-tinting-philadelphia.jpg',
            img_alt='Privacy window tinting Philadelphia',
            flip=True,
        ),
        dict(
            heading='The Benefits of Privacy Window Film for Philadelphia Properties',
            body=[
                'Blocks unwanted views into your property from the outside',
                'Maintains optically clear views from the inside out',
                'Custom decorative privacy options for interior glass features',
                'Modernizes the appearance of your building',
                'Available in various hues, finishes, and reflective properties',
                'Maintains natural sunlight throughout your space',
            ],
            img='/images/privacy-window-film-contractor-philadelphia.jpg',
            img_alt='Privacy window film contractor Philadelphia',
            flip=False,
        ),
        dict(
            heading="Work With Philadelphia's Leading Privacy Window Film Contractor",
            body="Window Film Philadelphia is honored to provide leading privacy window film services throughout the Philadelphia area for both residential and commercial properties. We have helped countless buildings across the city improve their privacy and would love the opportunity to help improve your property. Contact us today for more information!",
            img='/images/frosted-privacy-window-film-scaled-1.jpeg',
            img_alt='Frosted privacy window film Philadelphia',
            flip=True,
            cta_label='Get a Free Quote',
            cta_href='/contact/',
        ),
    ]
)

# 4. Glare Reduction
PAGES['glare-reduction'] = page(
    slug='glare-reduction',
    title='Anti-Glare Window Film in Philadelphia | Get a Quote!',
    desc='Window Film Philadelphia offers premium window film for anti-glare in Philadelphia to reduce eye strain, improve comfort, and block harsh sunlight in your space.',
    h1='Anti-Glare Window Film Solutions for Properties in Philadelphia',
    hero_img='/images/glare-reduction-window-film-philadelphia.jpg',
    hero_alt='Glare reduction window film Philadelphia',
    hero_lead="Anti-glare window film in Philadelphia can be a game-changer for homes and businesses. Window Film Philadelphia provides comprehensive glare-reduction solutions for properties throughout the Philadelphia area.",
    sections=[
        dict(
            heading='Anti-Glare Window Film Solutions for Properties in Philadelphia',
            body="Anti glare window film in Philadelphia can be a game-changer for homes and businesses, especially those without surrounding foliage. With sunshine many days out of the year, it is important to find effective solutions that improve the comfort and productivity of your building. When it comes to glare, traditional window treatments can often be less aesthetically pleasing and require manual operation. Window Film Philadelphia is honored to provide comprehensive glare-reduction solutions for properties across Philadelphia.",
            img='/images/glare-reduction-window-film-philadelphia.jpg',
            img_alt='Glare reduction window film Philadelphia',
            flip=False,
        ),
        dict(
            heading='About Glare Reduction Window Film',
            body="Glare reduction window film helps properties minimize glare caused by direct sunlight. Glare creates an environment that leads to eye fatigue, headaches, and reduced productivity. This leading solution provides the benefit of maintaining natural sunlight — unlike blackout shades or blinds that eliminate daylight entirely. Our films selectively filter harsh light while preserving clear, comfortable views.",
            img='/images/glare-preventing-window-film-philadelphia.jpg',
            img_alt='Glare preventing window film Philadelphia',
            flip=True,
        ),
        dict(
            heading='The Impact of Anti-Glare Window Film in Philadelphia',
            body=[
                'Effectively reduces glare, creating a more visually balanced indoor environment',
                'Improves screen-viewing comfort by minimizing harsh light reflections',
                'Maintains natural sunlight while filtering out intense, disruptive rays',
                'Reduces headaches, eye fatigue, and squinting throughout the day',
                'Optimizes comfort and productivity for offices, homes, and commercial spaces',
            ],
            img='/images/glare-reducing-window-film-philadelphia.jpg',
            img_alt='Glare reducing window film Philadelphia',
            flip=False,
        ),
        dict(
            heading='Work with the Best Anti-Glare Window Film Contractor in Philadelphia',
            body="Window Film Philadelphia is honored to provide leading anti-glare window film services for residential and commercial properties. We have helped countless buildings minimize glare and would love the opportunity to help improve your property. Contact us today for more information about anti-glare window film in Philadelphia!",
            img='/images/2021-08-philadelphia-window-film-glare-reduction.jpg',
            img_alt='Anti-glare window film Philadelphia',
            flip=True,
            cta_label='Get a Free Quote',
            cta_href='/contact/',
        ),
    ]
)

# 5. Anti-Graffiti
PAGES['anti-graffiti'] = page(
    slug='anti-graffiti',
    title='Anti-Graffiti Film in Philadelphia - Window Film Philadelphia',
    desc='Window Film Philadelphia offers anti-graffiti film in Philadelphia to protect glass from scratches, vandalism, and costly damage. Call today for a free quote!',
    h1='Anti-Graffiti Film in Philadelphia for Commercial Buildings',
    hero_img='/images/anti-graffiti-surface-film-philadelphia.jpg',
    hero_alt='Anti-graffiti film Philadelphia',
    hero_lead="Anti-graffiti film in Philadelphia offers essential protection for commercial properties vulnerable to vandalism, graffiti, and property crimes throughout the metro area.",
    sections=[
        dict(
            heading='Anti-Graffiti Film in Philadelphia for Commercial Buildings',
            body="Anti-graffiti film in Philadelphia offers essential protection for commercial properties vulnerable to vandalism, graffiti, and other property crimes throughout the metro area. To keep expensive surfaces in high foot-traffic areas — schools, businesses, mass transit systems, and other commercial properties — safe from vandalism, a reliable solution is required. Anti-graffiti film offers an effective way to protect surfaces while providing exclusive benefits for commercial property owners. Window Film Philadelphia is honored to provide comprehensive anti-graffiti solutions for commercial properties.",
            img='/images/anti-graffiti-surface-film-philadelphia.jpg',
            img_alt='Anti-graffiti surface film Philadelphia',
            flip=False,
        ),
        dict(
            heading='The Basics of Anti-Graffiti Film',
            body="Anti-graffiti surface film is a specialty film product that works as a sacrificial layer for protecting commercial surfaces against vandalism, graffiti, and daily wear and tear. Available in numerous finishes for metal, mirrored, glass, and other custom non-porous surfaces, anti-graffiti film defends against new damage while concealing any existing damage. Once damaged, it is easily removed and replaced by a professional window film contractor.",
            img='/images/anti-graffiti-window-film-philadelphia.jpg',
            img_alt='Anti-graffiti window film Philadelphia',
            flip=True,
        ),
        dict(
            heading='The Benefits of Anti-Graffiti Film for Philadelphia Properties',
            body=[
                'Conceals existing damage such as scratches, graffiti, or blemishes',
                'Withstands new damage including acid etching, marker stains, and abrasions',
                'Provides a sacrificial layer for 24/7 protection of underlying surfaces',
                'Tamper-proof to the public, deterring vandals from causing significant damage',
                'Easily removed and replaced by a professional — minimal downtime',
                'Custom printing available for non-porous surfaces',
                'Reduces repair and replacement costs for vandalized surfaces',
            ],
            img='/images/How-to-remove-tagging-graffiti-Philadelphia.png',
            img_alt='Anti-graffiti film how to remove graffiti Philadelphia',
            flip=False,
        ),
        dict(
            heading="Work With Philadelphia's Leading Anti-Graffiti Film Contractor",
            body="We at Window Film Philadelphia are honored to provide leading anti-graffiti surface film services for commercial properties throughout Philadelphia. Our team has helped countless businesses keep their surfaces protected and would love the opportunity to help defend your expensive investments. Contact us today for more information!",
            img='/images/2021-08-philadelphia-window-film-anti-graffiti-window-film-scratches-film.jpg',
            img_alt='Anti-graffiti window film contractor Philadelphia',
            flip=True,
            cta_label='Get a Free Quote',
            cta_href='/contact/',
        ),
    ]
)

# 6. Updating Surfaces
PAGES['updating-surfaces'] = page(
    slug='updating-surfaces',
    title='3M DI-NOC Experts in Philadelphia | Window Film Philadelphia',
    desc='Window Film Philadelphia specializes in 3M DI-NOC film installation in Philadelphia, helping you achieve stunning design transformations. Get in touch with us!',
    h1='3M DI-NOC Film Installation in Philadelphia',
    hero_img='/images/surface-window-film.jpg',
    hero_alt='3M DI-NOC surface film Philadelphia',
    hero_lead="Update surfaces with 3M DI-NOC in Philadelphia. Window Film Philadelphia is honored to provide comprehensive 3M DI-NOC services for updating surfaces throughout Philadelphia properties.",
    sections=[
        dict(
            heading='3M DI-NOC Film Installation in Philadelphia',
            body="Keeping your property fresh and up to date can be a significant task for any business owner. In order to keep your expensive surfaces in the best condition possible while ensuring they are modern for the best guest experience, it is important to find ways to update regularly. Interior design and renovations can be significantly costly and lead to undesirable operational downtime. A great, cost-effective alternative is 3M DI-NOC. Window Film Philadelphia is honored to provide comprehensive 3M DI-NOC services for updating surfaces throughout Philadelphia properties.",
            img='/images/surface-window-film.jpg',
            img_alt='3M DI-NOC surface film Philadelphia',
            flip=False,
        ),
        dict(
            heading='What Is 3M DI-NOC?',
            body="3M DI-NOC is a premium architectural finish designed to replicate the appearance of high-end materials like wood, marble, metal, and more. Engineered for durability and style, DI-NOC can be applied to a wide range of surfaces, allowing you to revitalize outdated designs and conceal imperfections effortlessly. With fast installation and virtually endless design options, DI-NOC is the ideal choice for modernizing your commercial interiors without interrupting operations.",
            img='/images/surface-film.jpg',
            img_alt='Surface film 3M DI-NOC Philadelphia',
            flip=True,
        ),
        dict(
            heading='Why 3M DI-NOC Is Perfect for Philadelphia Properties',
            body=[
                'Cost-Effective: Achieve a high-end look without the expense of full renovations',
                'Quick Installation: Minimal operational downtime means your business stays productive',
                'Endless Design Options: Available in an extensive array of textures, patterns, and finishes',
                'Realistic Appearance: Mimics the look of premium materials like wood, stone, and metal',
                'Durable and Long-Lasting: Resistant to wear, scratches, and impact',
                'Sustainable: An eco-friendly alternative to replacing entire surfaces',
            ],
            img='/images/3m-dinoc-surface-film-philadelphia.jpg',
            img_alt='3M DI-NOC surface film Philadelphia',
            flip=False,
        ),
        dict(
            heading="Work with Philadelphia's Leading 3M DI-NOC Experts",
            body="At Window Film Philadelphia, we take pride in offering comprehensive 3M DI-NOC services in Philadelphia to transform your commercial space. Our experienced team has helped countless businesses achieve stunning, cost-effective updates tailored to their specific needs. Contact us today to learn more about how DI-NOC can refresh your property.",
            img='/images/updating-surfaces-window-filmphiladelphia.jpg',
            img_alt='Updating surfaces window film Philadelphia',
            flip=True,
            cta_label='Get a Free Quote',
            cta_href='/contact/',
        ),
    ]
)

# 7. Safety and Security
PAGES['safety-and-security'] = page(
    slug='safety-and-security',
    title='Security Window Film Philadelphia | Window Film Philadelphia',
    desc='Window Film Philadelphia provides durable and effective security window film solutions in Philadelphia to safeguard your property from vandalism and forced entry.',
    h1='Security Window Film in Philadelphia',
    hero_img='/images/safety-and-security-window-film-philadelphia.png',
    hero_alt='Security window film Philadelphia',
    hero_lead="Safety and security window film for Philadelphia properties is an effective way to prepare for potential threats, provide peace of mind, limit liability, and mitigate harm.",
    sections=[
        dict(
            heading='Security Window Film in Philadelphia',
            body="Safety and security window film for Philadelphia properties is an effective way to prepare for potential threats, provide peace of mind, limit liability, and mitigate harm. While there are many security solutions available on the market, the options are quite limited when it comes to your existing glass doors and windows. For properties looking for a more effective, elevated alternative to security bars, window film can provide all the benefits you are looking for. Window Film Philadelphia is honored to provide comprehensive safety and security window film solutions for homes and businesses.",
            img='/images/safety-and-security-window-film-philadelphia.png',
            img_alt='Safety and security window film Philadelphia',
            flip=False,
        ),
        dict(
            heading='About Safety and Security Window Film',
            body="Safety and security window film for Philadelphia properties utilizes specialty window film along with an attachment system to significantly enhance the durability and strength of your existing glass. This passive, 24/7 security system protects against natural disasters, break-ins, burglaries, freak accidents, and more.\n\nIn Philadelphia, where the overall crime rate is 54 per 1,000 residents, safety and security window films offer an invaluable layer of protection. These films enhance the strength and durability of windows and glass doors — particularly in central neighborhoods where the risk of crime is higher.",
            img='/images/security-window-film-philadelphia.jpg',
            img_alt='Security window film Philadelphia',
            flip=True,
        ),
        dict(
            heading='Why Choose Security Window Film in Philadelphia',
            body=[
                'Mitigate broken glass hazards to minimize the risk of injury and death',
                'Easy cleanup for minimized operational downtime after an incident',
                'Upgrades standard glass to meet tempered glass safety standards',
                'Lasts the lifetime of your windows with no maintenance required',
                'Invisible, passive 24/7 security that does not alter window appearance',
                'Deters intruders and provides additional response time for evacuation',
            ],
            img='/images/safety-window-film-philadelphia.jpg',
            img_alt='Safety window film Philadelphia',
            flip=False,
        ),
        dict(
            heading="Work with Philadelphia's Leading Safety and Security Window Film Contractor",
            body="Window Film Philadelphia is honored to provide leading services of safety and security window film for residential and commercial properties in Philadelphia. We have helped countless buildings defend against threats and would love the opportunity to help protect your property. Reach out today to learn how we can enhance your security and peace of mind.",
            img='/images/safety-security-window-film-philadelphia.jpg',
            img_alt='Safety security window film Philadelphia',
            flip=True,
            cta_label='Get a Free Quote',
            cta_href='/contact/',
        ),
    ]
)

# 8. Exterior Building Wraps
PAGES['exterior-building-wraps'] = page(
    slug='exterior-building-wraps',
    title='Exterior Building Wrap Solutions in Philadelphia | Call Now!',
    desc='Window Film Philadelphia provides professional exterior building wrap services in Philadelphia to enhance and protect your building\'s facade. Contact now!',
    h1='Exterior Building Wrap in Philadelphia',
    hero_img='/images/exterior-building-wrap-window-film-philadelphia.png',
    hero_alt='Exterior building wrap Philadelphia',
    hero_lead="To achieve amazing, head-turning marketing collateral, brick-and-mortar businesses can utilize exterior building wraps in Philadelphia — from promoting upcoming events to improving brand visibility.",
    sections=[
        dict(
            heading='Exterior Building Wrap in Philadelphia',
            body="To achieve amazing, head-turning marketing collateral, brick-and-mortar businesses can utilize exterior building wraps in Philadelphia to really make use of their real estate. From promoting upcoming events to improving brand visibility and everything in between, there is a vast scope of solutions available. One of the most creative ways to do that is with custom building wraps. These premium decorative window film solutions are perfect for any commercial property. Window Film Philadelphia is proud to offer complete building wrap options for Philadelphia businesses.",
            img='/images/exterior-building-wrap-window-film-philadelphia.png',
            img_alt='Exterior building wrap Philadelphia',
            flip=False,
        ),
        dict(
            heading='What You Need to Know About Exterior Building Wraps',
            body="Exterior building wraps for Philadelphia are a unique decorative window film solution featuring custom printing and UV-resistant inks. This superior product not only adds enhanced aesthetic appeal to your building but also offers functional advantages — protection against damaging UV rays and durable, vibrant colors that will not fade over time.\n\nThese wraps are versatile and can be applied to numerous surfaces including glass, brick, and textured options, making them an ideal solution for both residential and commercial properties. Building wraps are an excellent way to promote upcoming events, improve brand visibility, and enhance your visual marketing collateral.",
            img='/images/2021-08-philadelphia-window-film-exterior-refinishing.jpg',
            img_alt='Exterior building wrap window film Philadelphia',
            flip=True,
        ),
        dict(
            heading='The Benefits of Exterior Building Wraps for Philadelphia Properties',
            body=[
                'Custom HD printing ensures bright, high-quality graphics that command attention',
                'UV-resistant inks keep the design vibrant for long-term campaigns',
                'Can be installed on textured and smooth surfaces including brick',
                'One-way vision provides occupants with clear views while blocking outside visibility',
                'Promotes upcoming events, improves visual branding, and enhances marketing',
                'Cost-effective alternative to permanent facade changes',
            ],
            img='/images/advertising-building-wrap-films-for-Sports-stadiums-in-Philadelphia.png',
            img_alt='Building wrap films for stadiums Philadelphia',
            flip=False,
        ),
        dict(
            heading='Hire the Leading Exterior Building Wrap Contractor in Philadelphia',
            body="Window Film Philadelphia is honored to provide exterior building wraps in Philadelphia for commercial properties. Our team specializes in delivering top-tier solutions that not only enhance the aesthetic appeal of your property but also provide lasting protection. We have helped countless buildings with their decorative projects and would love the opportunity to help transform your property. Contact us anytime for additional details.",
            img='/images/2021-10-3m-building-wrap-philadelphia.jpg',
            img_alt='3M building wrap Philadelphia',
            flip=True,
            cta_label='Get a Free Quote',
            cta_href='/contact/',
        ),
    ]
)

# 9. Decorative & Promotional
PAGES['decorative-promotional'] = page(
    slug='decorative-promotional',
    title='Decorative Window Film in Philadelphia | Get a Free Quote!',
    desc='Window Film Philadelphia provides premium decorative window film in Philadelphia to add privacy, style, and UV protection to your windows. Get a quote now!',
    h1='Decorative Window Film in Philadelphia',
    hero_img='/images/2021-10-decorative-promotional-window-film-philadelphia.jpg',
    hero_alt='Decorative window film Philadelphia',
    hero_lead="Get high-quality decorative window film in Philadelphia! Window Film Philadelphia provides a comprehensive selection of decorative window film solutions for residential and commercial properties.",
    sections=[
        dict(
            heading='Decorative Window Film in Philadelphia',
            body="Get high-quality decorative window film in Philadelphia! In order to create beauty and visual interest in your home or business, selecting decorative solutions can be challenging. When it comes to improving the aesthetics of your residential property or finding an effective marketing and promotional investment for your commercial property, decorative window film is the perfect option. Window Film Philadelphia is proud to provide a comprehensive selection of decorative window film solutions for your Philadelphia property.",
            img='/images/2021-10-decorative-promotional-window-film-philadelphia.jpg',
            img_alt='Decorative promotional window film Philadelphia',
            flip=False,
        ),
        dict(
            heading='About Decorative Window Film',
            body="Decorative window film is a specialty film that can be applied to glass surfaces in order to improve decor, add visual interest, create privacy, provide promotional collateral, and much more. Available in endless designs, colors, and finishes — as well as custom printing options — decorative film provides a versatile way to transform both residential and commercial properties. Perfect for both short-term and long-term projects, this transformative solution can be easily removed and updated for a variety of looks.\n\nBeyond its aesthetic appeal, decorative window film also offers functional benefits like UV protection and energy efficiency — making it a complete solution for any property.",
            img='/images/hdclear-custom-decorative-window-film-philadelphia.jpg',
            img_alt='HDClear custom decorative window film Philadelphia',
            flip=True,
        ),
        dict(
            heading='The Benefits of Decorative Window Film',
            body=[
                'High versatility with endless design and color options',
                'Available in frosted, etched, and opaque style options',
                'An effective privacy solution for all types of spaces',
                'Custom printing and UV-resistant ink choices for durability',
                'Helps improve visual branding and marketing efforts',
                'An affordable alternative to expensive custom glass designs',
            ],
            img='/images/solyx-decorative-window-film-philadelphia.jpg',
            img_alt='Solyx decorative window film Philadelphia',
            flip=False,
        ),
        dict(
            heading="Partner with Philadelphia's Top Decorative Window Film Contractor",
            body="Window Film Philadelphia is honored to provide leading decorative window film services for residential and commercial properties in Philadelphia. We have helped countless buildings improve their aesthetics and would love to help transform your property. Our team offers customized solutions tailored to your specific needs, ensuring you achieve the perfect balance of style and functionality. Contact us today for more information!",
            img='/images/transform-decorative-window-film-philadelphia.png',
            img_alt='Transform decorative window film Philadelphia',
            flip=True,
            cta_label='Get a Free Quote',
            cta_href='/contact/',
        ),
    ]
)

# 10. Ballistic Resistance
PAGES['ballistic-resistance'] = page(
    slug='ballistic-resistance',
    title='Ballistic Window Film in Philadelphia - Get a Quote Now!',
    desc='Window Film Philadelphia delivers top-quality ballistic window film in Philadelphia, providing reliable protection for commercial and residential properties.',
    h1='Ballistic Window Film for Philadelphia Buildings',
    hero_img='/images/ballistic-resistant-window-film-philadelphia.jpg',
    hero_alt='Ballistic window film Philadelphia',
    hero_lead="Enhance safety and security with ballistic window film in Philadelphia — a reliable solution for mitigating risks in high-threat environments and protecting commercial properties.",
    sections=[
        dict(
            heading='Ballistic Window Film for Philadelphia Buildings',
            body="Ballistic resistance is the closest thing available to bulletproof glass on today's market. For schools, government buildings, airports, banks, and other high-security facilities in Philadelphia, ballistic-resistant window film offers a comprehensive solution for protecting glass windows and doors. Window Film Philadelphia is honored to be the trusted ballistic-resistant security film contractor for properties across the Philadelphia metro area.",
            img='/images/ballistic-resistant-window-film-philadelphia.jpg',
            img_alt='Ballistic resistant window film Philadelphia',
            flip=False,
        ),
        dict(
            heading='About Ballistic Window Film',
            body="Ballistic window film in Philadelphia is a specialty security film that provides resistance against high-impact events including gunfire, explosions, natural disasters, and more. This comprehensive security solution is the closest thing available to bulletproof glass and is the cost-effective alternative to ballistic-resistant glass. It provides invisible protection for the lifetime of windows and doors and can be tactically installed for high-security areas.",
            img='/images/ballistic-proof-window-film-philadelphia.jpg',
            img_alt='Ballistic proof window film Philadelphia',
            flip=True,
        ),
        dict(
            heading='Top Benefits of Installing Ballistic Resistant Window Film in Philadelphia',
            body=[
                'Mitigates broken glass hazards by holding shattered glass in place',
                'Provides resistance against gunfire, explosions, natural disasters, and forced entry',
                'Invisible, passive 24/7 protection without altering window appearance',
                'Can be tactically installed to enhance security of vulnerable areas',
                'Lasts the lifetime of your glass with durable, long-term materials',
                'Cost-effective alternative to full ballistic-resistant glass replacement',
            ],
            img='/images/ballistic-resistant-security-film-philadelphia-schools-1.jpg',
            img_alt='Ballistic resistant security film Philadelphia schools',
            flip=False,
        ),
        dict(
            heading="Work with Philadelphia's Leading Ballistic-Resistant Security Film Contractor",
            body="Window Film Philadelphia is honored to provide leading ballistic-resistant security film services for commercial properties. Our ballistic window film in Philadelphia offers an effective solution for safeguarding windows and doors from high-impact threats. Whether you are concerned about vandalism, theft, or more extreme threats, our ballistic window film ensures your property is shielded from harm. Contact us for more information.",
            img='/images/ballistic-resistant-window-film-philadelphia-schools.jpg',
            img_alt='Ballistic resistant window film Philadelphia schools',
            flip=True,
            cta_label='Get a Free Quote',
            cta_href='/contact/',
        ),
    ]
)

# 11. Blast Mitigation
PAGES['blast-mitigation'] = page(
    slug='blast-mitigation',
    title='Blast Mitigation Film Philadelphia - Blast Film',
    desc='Window Film Philadelphia offers blast mitigation film in Philadelphia to protect homes and businesses with advanced window safety. Call now!',
    h1='Enhance Safety with Blast Mitigation Film in Philadelphia',
    hero_img='/images/bomb-blast-protection-window-film-philadelphia.png',
    hero_alt='Blast mitigation film Philadelphia',
    hero_lead="Enhance the security of your property with blast mitigation film in Philadelphia, designed to safeguard against potential threats and natural disasters.",
    sections=[
        dict(
            heading='Enhance Safety with Blast Mitigation Film in Philadelphia',
            body="Public buildings, government buildings, stadiums, and other properties that can house thousands of occupants require a premium security and safety option. When it comes to keeping your commercial property safe from natural disasters and potential threats, one of the biggest areas of concern is the glass windows and doors. Window film can provide a comprehensive solution for keeping your property safe without compromising aesthetics. Window Film Philadelphia proudly offers a large selection of bomb blast window film solutions for Philadelphia properties.",
            img='/images/bomb-blast-protection-window-film-philadelphia.png',
            img_alt='Bomb blast protection window film Philadelphia',
            flip=False,
        ),
        dict(
            heading='About Blast Mitigation Film',
            body="Bomb blast protection window film utilizes numerous layers of security film paired with an attachment system in order to provide high-impact resistance for existing glass windows and doors. This specialty security window film solution defends against explosions, natural disasters, break-ins, burglaries, freak accidents, and other high-impact events — retaining glass fragments to prevent airborne shards.",
            img='/images/bomb-blast-security-window-film-philadelphia.jpg',
            img_alt='Bomb blast security window film Philadelphia',
            flip=True,
        ),
        dict(
            heading='How Blast Mitigation Film Protects Philadelphia Properties',
            body=[
                'High-impact resistance built to withstand significant force',
                'Mitigates broken glass hazards — prevents glass shards from becoming airborne',
                'Defends against natural disasters, explosions, break-ins, and accidents',
                'Long-term performance without requiring frequent replacements',
                'Optically clear and invisible — maintains the aesthetic appeal of your windows',
            ],
            img='/images/bomb-blast-window-film-philadelphia.jpg',
            img_alt='Bomb blast window film Philadelphia',
            flip=False,
        ),
        dict(
            heading='Work with the Leading Provider of Blast Mitigation Film in Philadelphia',
            body="Window Film Philadelphia is honored to provide leading bomb blast protection window film services for commercial properties. As a trusted blast mitigation film expert in Philadelphia, we ensure your property is equipped with the highest level of safety against unforeseen threats. We have helped countless businesses enhance their security and would love the opportunity to help protect your property. Contact us today for more information!",
            img='/images/bomb-blast-security-film-philadelphia.jpg',
            img_alt='Bomb blast security film Philadelphia',
            flip=True,
            cta_label='Get a Free Quote',
            cta_href='/contact/',
        ),
    ]
)

# 12. Exterior Window Film (Exterior Refinishing)
PAGES['exterior-window-film'] = page(
    slug='exterior-window-film',
    title='Exterior Window Film Philadelphia - Window Film Philadelphia',
    desc='Window Film Philadelphia offers premium exterior window film in Philadelphia. Enhance privacy, reduce glare, and protect your property with lasting results.',
    h1='Exterior Window Film in Philadelphia',
    hero_img='/images/exterior-refinishing-window-film-philadelphia.jpg',
    hero_alt='Exterior window film Philadelphia',
    hero_lead="Curb appeal matters for commercial properties. Window Film Philadelphia provides professional exterior window film in Philadelphia for commercial buildings — enhancing aesthetics, privacy, and energy efficiency.",
    sections=[
        dict(
            heading='Exterior Window Film in Philadelphia',
            body="Curb appeal matters for commercial properties. Whether you are attracting new tenants or preparing to sell, updating your building's look is essential. Many improvement solutions require large investments and extended downtime, but exterior window film offers a cost-effective, low-disruption alternative. Window Film Philadelphia proudly provides professional exterior window film in Philadelphia for commercial buildings, enhancing aesthetics, privacy, and energy efficiency while protecting your property.",
            img='/images/exterior-refinishing-window-film-philadelphia.jpg',
            img_alt='Exterior refinishing window film Philadelphia',
            flip=False,
        ),
        dict(
            heading='Understanding Exterior Window Film',
            body="Exterior window film is a specialty service designed to modernize commercial building exteriors. This premium solution conceals outdated or damaged windows, transforming both the appearance and perceived value of your property. Businesses across all industries can take advantage of this cost-effective alternative, which offers faster installation times while providing enhanced privacy, energy efficiency, and UV protection.",
            img='/images/exterior-resurfacing-window-film-philadelphia.jpg',
            img_alt='Exterior resurfacing window film Philadelphia',
            flip=True,
        ),
        dict(
            heading='Why Philadelphia Properties Should Use Exterior Window Film',
            body=[
                'Conceal outdated and damaged windows without costly replacement',
                'Modernize and improve the appearance of your building\'s exterior',
                'Improve the perceived value of your property',
                'Cost-effective with minimal operational downtime',
                'Provides energy savings and UV protection',
            ],
            img='/images/exterior-resurfacing-philadelphia.jpg',
            img_alt='Exterior resurfacing Philadelphia',
            flip=False,
        ),
        dict(
            heading="Partner With Philadelphia's Top Exterior Window Film Contractor",
            body="Window Film Philadelphia is proud to offer expert exterior window film for commercial properties. We have helped countless buildings enhance curb appeal, boost energy efficiency, and modernize their appearance. Let us help transform your property with our professional window film solutions. Contact us today to learn more!",
            img='/images/exterior-refinishing-philadelphia-1.jpg',
            img_alt='Exterior refinishing Philadelphia',
            flip=True,
            cta_label='Get a Free Quote',
            cta_href='/contact/',
        ),
    ]
)

# 13. Mirror Refinishing
PAGES['mirror-refinishing'] = page(
    slug='mirror-refinishing',
    title='Mirror Refinishing Philadelphia - Window Film Philadelphia',
    desc='Window Film Philadelphia specializes in professional mirror refinishing throughout Philadelphia. Give your mirrors a flawless, like-new finish today! Call Now!',
    h1='Expert Mirror Refinishing in Philadelphia',
    hero_img='/images/mirror-refinishing-in-philadelphia.png',
    hero_alt='Mirror refinishing Philadelphia',
    hero_lead="Mirrors serve a crucial role in many commercial properties, but they are costly investments easily damaged by everyday wear and vandalism. Window Film Philadelphia provides professional mirror refinishing throughout Philadelphia.",
    sections=[
        dict(
            heading='Expert Mirror Refinishing in Philadelphia',
            body="Mirrors serve a crucial role in many commercial properties, but they are costly investments that can easily suffer damage from everyday wear, tear, and vandalism. Once a mirror is damaged, permanent repairs are often not possible, making replacement necessary. However, specialty surface films offer an affordable solution for businesses looking to restore mirrors. Window Film Philadelphia is proud to offer professional mirror refinishing throughout Philadelphia.",
            img='/images/mirror-refinishing-in-philadelphia.png',
            img_alt='Mirror refinishing Philadelphia',
            flip=False,
        ),
        dict(
            heading='About Mirror Refinishing',
            body="Mirror refinishing is a specialty service that utilizes premium surface film in order to restore damaged mirrors. This mirrored film product is applied directly to mirrors to conceal existing cosmetic damages while defending against new threats. It can withstand vandalism, graffiti, and even acid etching — helping property owners save on mirror replacement costs. The sacrificial layer can be quickly removed and replaced once damaged.",
            img='/images/graffiti-shield-mirror-film-philadelphia-min.jpg',
            img_alt='Graffiti shield mirror film Philadelphia',
            flip=True,
        ),
        dict(
            heading='The Benefits of Mirror Refinishing for Philadelphia Properties',
            body=[
                'Conceals existing cosmetic and superficial damage to mirror surfaces',
                'Mirrored surface film for seamless, invisible protection',
                'Durable, thick layer for withstanding vandalism, graffiti, and daily wear',
                'Strong enough to protect against acid etching',
                'Sacrificial layer that can be removed and replaced once damaged',
                'Significantly more cost-effective than full mirror replacement',
            ],
            img='/images/2021-10-mirror-refinishing-philadelphia.jpg',
            img_alt='Mirror refinishing Philadelphia',
            flip=False,
        ),
        dict(
            heading='Work with the Top Mirror Refinishing Contractor in Philadelphia',
            body="Window Film Philadelphia is honored to provide leading mirror refinishing window film services for commercial properties. We have helped countless buildings defend their mirrors and would love the opportunity to help protect your property. Contact us today for more information!",
            img='/images/2021-10-mirror-surface-film-philadelphia.jpg',
            img_alt='Mirror surface film Philadelphia',
            flip=True,
            cta_label='Get a Free Quote',
            cta_href='/contact/',
        ),
    ]
)

# 14. Bird Strike Prevention
PAGES['bird-strike-prevention'] = page(
    slug='bird-strike-prevention',
    title='Bird Strike Window Film Philadelphia | Window Film Philadelphia',
    desc='Protect birds with bird strike window film in Philadelphia. Proven 95% reduction in collisions. Expert installation. Call (267) 394-7980.',
    h1='Bird Strike Window Film in Philadelphia',
    hero_img='/images/window-bird-safety-film-Philadelphia.jpg',
    hero_alt='Bird strike window film Philadelphia',
    hero_lead="Professional bird strike window film in Philadelphia protects both migrating and resident birds while preserving the aesthetics of your building.",
    sections=[
        dict(
            heading='Bird Strike Window Film in Philadelphia',
            body="Every year, up to 1 billion birds lose their lives from collisions with glass. Philadelphia — with over 1,000 high-rise buildings and extensive urban greenery — is home to a diverse range of bird species including warblers, sparrows, and thrushes. Our Bird Divert window film offers an extraordinary solution that combines innovation with the responsibility of preserving the natural world. Window Film Philadelphia is proud to offer Bird Divert throughout the Philadelphia area.",
            img='/images/window-bird-safety-film-Philadelphia.jpg',
            img_alt='Bird strike window film Philadelphia',
            flip=False,
        ),
        dict(
            heading='About Bird Divert Film',
            body="Bird Divert, manufactured by National Window Film, is a remarkable optically-clear bird marker that leads the market today. This product comprises a durable UV-absorbing and reflecting dot matrix that appears optically clear to humans but takes on a black or violet appearance for avian eyes — gently redirecting birds away from windows without obstructing views or altering aesthetics.\n\nBird Divert is the only industry-leading application to achieve a threat level of 18, recognized by the American Bird Conservancy, and qualifies commercial buildings for LEED Pilot 55 certification.",
            img='/images/bird-divert-philadelphia-safety-film.png',
            img_alt='Bird Divert safety film Philadelphia',
            flip=True,
        ),
        dict(
            heading='Why Install Bird Divert for Your Property?',
            body=[
                'Reduces bird collisions by up to 95% — invisible to humans, clearly visible to birds',
                'Optically clear 98% VLT — does not block natural light or views',
                '3.2mm PVC acrylic hard coat — durable, robust, and tear-resistant',
                'Exterior application — no interior access required for installation',
                'Qualifies commercial buildings for LEED Pilot 55 certification',
                'Endorsed by the National Audubon Society and American Bird Conservancy',
                'Industry-leading 5-year manufacturer warranty',
            ],
            img='/images/bird-divert-philadelphia.jpg',
            img_alt='Bird Divert Philadelphia',
            flip=False,
        ),
        dict(
            heading='Comply with Local Bird-Friendly Building Regulations',
            body="Across the nation, cities and regions are enacting local laws that require building owners to comply with bird-friendly design requirements. By choosing Bird Divert, you not only protect birds but also meet these important regulations — contributing to a more bird-friendly environment and ensuring harmony between urban architecture and the natural world.",
            img='/images/bird-divert-clear-bird-deterrent-Philadelphia.jpg',
            img_alt='Bird Divert clear bird deterrent Philadelphia',
            flip=True,
        ),
        dict(
            heading='Get a Quote on Bird Strike Window Film in Philadelphia',
            body="We are here to make your property a haven for both humans and birds. Our commitment to reducing bird collisions and preserving bird populations extends throughout Philadelphia and surrounding communities. Every decision you make for your property has an impact on the world around you. Contact us today to install Bird Divert or get an estimate — together, we can make a difference, one window at a time.",
            img='/images/bird-safety-solutions-philadelphia.jpg',
            img_alt='Bird safety solutions Philadelphia',
            flip=False,
            cta_label='Get a Free Quote',
            cta_href='/contact/',
        ),
    ]
)

# 15. School Security Window Film
PAGES['school-security-window-film'] = page(
    slug='school-security-window-film',
    title='School Security Window Film Philadelphia | Window Film Philadelphia',
    desc='Window Film Philadelphia offers expert installation of security window film in Philadelphia schools, enhancing safety, reducing risks, and protecting students and staff.',
    h1='Security Window Film in Philadelphia for Safer Schools',
    hero_img='/images/school-security-window-film-philadelphia-1.jpeg',
    hero_alt='School security window film Philadelphia',
    hero_lead="At Window Film Philadelphia, we understand the paramount importance of protecting students, teachers, and staff from potential threats. Our school security window films are designed to increase response time and delay intruders.",
    sections=[
        dict(
            heading='Security Window Film in Philadelphia for Safer Schools',
            body="As our society faces ongoing security concerns, it is crucial to prioritize the safety of our schools. Window Film Philadelphia offers state-of-the-art school security window film for Philadelphia educational facilities. Our security films are specifically engineered to fortify school windows and withstand significant force — providing valuable additional response time for safe evacuation during a threat.",
            img='/images/school-security-window-film-philadelphia-1.jpeg',
            img_alt='School security window film Philadelphia',
            flip=False,
        ),
        dict(
            heading='Security Challenges for Schools in Philadelphia',
            body="Schools in Philadelphia face significant security challenges, primarily related to gun violence. Some schools have reported high levels of violent incidents, prompting officials to introduce new programs and policies to monitor and prevent threats. To address safety concerns, schools have implemented measures like security cameras, metal detectors, and police officers. Pennsylvania schools must also adhere to strict security protocols including mandated requirements for school safety and active shooter protocols.",
            img='/images/philadelphia-security-system-school-scaled-1.jpg',
            img_alt='Philadelphia school security system',
            flip=True,
        ),
        dict(
            heading='Security Film Options for Schools',
            body="We offer a range of security film options to cater to the unique needs of Philadelphia schools:\n\nBasic Security Film — Economical option to strengthen glass; increases response time by 30 seconds to 1 minute.\n\nPremium Security Film — Advanced carbon fiber, cross-weave technology; increases response time by 30 seconds to 3 minutes.\n\nDual Premium Security Film — Interior and exterior application with anchoring system; recommended for dual-pane glazing; increases response time by 3 minutes or more.\n\nBomb Blast Resistant Film — Offered for single and dual-pane applications; increases flexibility and shatter resistance.\n\nBallistic Resistant Security Film — Three layers of security window film; designed to protect against crimes committed with 9mm handguns or below.",
            img='/images/philadelphia-college-school-security-film-1.jpg',
            img_alt='Philadelphia college school security film',
            flip=False,
        ),
        dict(
            heading='Key Considerations for Schools in Philadelphia',
            body=[
                'Single or double-pane windows — recommend double layer of film for single-pane glass',
                'Side doors and points of entry — extend security to all potential access points',
                'Interior and exterior locking doors — both sets should be coated with security film',
                'Front desk protection — ensure the front desk area is included in your security plan',
            ],
            img='/images/security-film-philadelphia-schools-2.jpg',
            img_alt='Security film Philadelphia schools',
            flip=True,
        ),
        dict(
            heading='Enhance School Safety with Security Window Film in Philadelphia',
            body="Window Film Philadelphia is dedicated to providing top-notch security solutions to safeguard Philadelphia educational institutions. By enhancing response time and fortifying windows, our security film options serve as a vital layer of defense — giving students, teachers, and staff precious moments to evacuate safely. Contact Window Film Philadelphia today to discuss your school security needs and schedule a consultation.",
            img='/images/security-film-schools-philadelphia.jpeg',
            img_alt='Security film schools Philadelphia',
            flip=False,
            cta_label='Schedule a Consultation',
            cta_href='/contact/',
        ),
    ]
)

# ── Write all pages ────────────────────────────────────────────────────────────
written = 0
for slug, content in PAGES.items():
    path = os.path.join(PAGES_DIR, slug + '.astro')
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    written += 1
    print(f"  WROTE {slug}.astro")

print(f"\nDone: {written} pages written.")
