#!/usr/bin/env python3
"""Generate all 13 /products/ sub-pages from XML content."""
import os

DIR = "/home/zvivas/wfp-site/src/pages/products"

def esc(s):
    return s.replace("\\", "\\\\").replace("'", "\\'")

def baf(heading, body, img, alt, flip, alt_bg, cta_label=None, cta_href=None):
    flip_s = "true" if flip else "false"
    alt_s  = "true" if alt_bg else "false"
    lines = [
        "  <BackAndForthSection",
        f"    heading={{'{esc(heading)}'}}",
        f"    body={{'{esc(body)}'}}",
        f"    imageSrc={{'{img}'}}",
        f"    imageAlt={{'{esc(alt)}'}}",
        f"    flip={{{flip_s}}}",
        f"    altBg={{{alt_s}}}",
    ]
    if cta_label:
        lines.append(f"    ctaLabel={{'{esc(cta_label)}'}}")
        lines.append(f"    ctaHref={{'{cta_href}'}}")
    lines.append("  />")
    return "\n".join(lines)

def page(slug, title, desc, h1, hero_img, sections):
    canonical = f"https://www.windowfilmphiladelphia.net/products/{slug}/"
    parts = [f"""---
import BaseLayout from '../../layouts/BaseLayout.astro';
import BackAndForthSection from '../../components/BackAndForthSection.astro';
import BrandLogos from '../../components/BrandLogos.astro';
import CTAStrip from '../../components/CTAStrip.astro';

const title = '{esc(title)}';
const description = '{esc(desc)}';
---

<BaseLayout title={{title}} description={{description}} canonical='{canonical}'>

  <section class="page-hero" style="background-image: linear-gradient(rgba(40,40,40,0.62), rgba(40,40,40,0.80)), url('{hero_img}'); background-size: cover; background-position: center;">
    <div class="container">
      <h1>{h1}</h1>
    </div>
  </section>
"""]
    for i, sec in enumerate(sections):
        flip   = sec.get("flip",   i % 2 == 1)
        alt_bg = sec.get("alt_bg", flip)
        parts.append(baf(
            sec["heading"], sec["body"],
            sec["img"], sec.get("alt", ""),
            flip, alt_bg,
            sec.get("cta_label"), sec.get("cta_href"),
        ))
        parts.append("")
    parts.append("  <BrandLogos />\n  <CTAStrip />\n\n</BaseLayout>\n")
    return "\n".join(parts)

# ── common reusable bodies ──────────────────────────────────────────────────
GENERIC_CONTACT = "Contact us today for a free consultation and to learn how our expert team can help you achieve your project goals with the ideal window film solution for your property."

# ── Page definitions ────────────────────────────────────────────────────────

PAGES = {}

# 1. 3M
PAGES["3m-window-film"] = page(
    slug="3m-window-film",
    title="3M Window Film Philadelphia | Window Film Philadelphia",
    desc="Upgrade your home or business with 3M window film in Philadelphia. Improve energy efficiency, privacy, aesthetics, and security with expert installation.",
    h1="3M Window Film in Philadelphia for Homes & Businesses",
    hero_img="/images/3m-window-film-philadelphia-1.png",
    sections=[
        dict(heading="3M Window Film in Philadelphia for Homes & Businesses",
             body="3M window film in Philadelphia provides advanced solutions for residential and commercial properties. From energy savings to decorative enhancements and security improvements, 3M films offer reliable performance and excellent ROI. Whether you are looking to redirect daylight in your office, improve energy efficiency in your home, or add privacy to your conference room, 3M window films deliver long-term value and functionality.",
             img="/images/3m-window-film-philadelphia-1.png", alt="3M window film Philadelphia"),
        dict(heading="3M Daylight Redirecting Window Film",
             body="3M daylight redirecting window film channels natural sunlight deep into your property to reduce lighting costs, improve productivity, and enhance comfort. Ideal for classrooms, offices, and healthcare facilities. Benefits include reduced artificial lighting costs, improved indoor comfort and productivity, and lower energy consumption year-round.",
             img="/images/building-code-safety-glass-window-film-philadelphia-scaled-1.jpeg", alt="3M daylight redirecting window film Philadelphia"),
        dict(heading="3M Sun Control Window Film",
             body="3M Sun Control Window Film provides residential and commercial properties with an effective energy-saving solution for minimizing heat gain, UV radiation, and glare. Achieve a full ROI in three years or less, reduce solar heat buildup by up to 79%, and keep cooling and heating costs down year-round.",
             img="/images/3m-commercial-glare-energy-savings-dallas-scaled-1.jpeg", alt="3M sun control window film Philadelphia"),
        dict(heading="3M Thinsulate Climate Control Window Film",
             body="Designed to improve energy conservation for colder climates, 3M Thinsulate Climate Control Window Film keeps heat inside your property year-round. It reduces HVAC consumption, keeps your property warm in winter and cool in summer, and blocks 99% of UV radiation — all without altering the appearance of your windows.",
             img="/images/Insulatiing-window-film-for-winter-scaled-1.jpeg", alt="3M Thinsulate window film Philadelphia"),
        dict(heading="3M Scotchshield Safety and Security Window Film",
             body="This premium polyester security film guards against natural disasters, severe weather, burglaries, and freak accidents. The tear-resistant film prevents smash-and-grabs, provides invisible 24/7 break-in protection, and mitigates broken glass hazards to keep building occupants safe.",
             img="/images/safety-window-film-philadelphia-1.jpg", alt="3M Scotchshield safety security window film Philadelphia"),
        dict(heading="3M Fasara Decorative Window Film",
             body="3M Fasara Decorative Window Film improves visual interest, privacy, and interior decor. It delivers frosted, etched, and custom glass aesthetics, customizable privacy solutions for conference rooms and common areas, and endless design options including custom printing.",
             img="/images/custom-decorative-window-film-philadelphia-scaled-2.jpg", alt="3M Fasara decorative window film Philadelphia"),
        dict(heading="Philadelphia's Trusted 3M Window Film Installers",
             body="Enhance safety, comfort, and aesthetics with 3M window film in Philadelphia. Our expert team provides guidance on protective, decorative, and energy-efficient films tailored to your property's specific needs. Contact us today to schedule a free onsite consultation or receive an estimate.",
             img="/images/2021-09-3m-window-film-philadelphia.jpg", alt="3M window film installer Philadelphia",
             cta_label="Get a Free Quote", cta_href="/contact/"),
    ]
)

# 2. Bird Divert (already rich — keep structure, update titles/meta)
PAGES["bird-divert"] = page(
    slug="bird-divert",
    title="Bird Divert Philadelphia | Window Film Philadelphia",
    desc="Discover Bird Divert in Philadelphia - an innovative bird safety window film to protect birds and your property. Get a quote now!",
    h1="Bird Divert for Philadelphia Properties",
    hero_img="/images/bird-safety-solutions-philadelphia.jpg",
    sections=[
        dict(heading="Bird Divert for Philadelphia Properties",
             body="Welcome to Window Film Philadelphia, where innovation meets nature's beauty! We are thrilled to introduce Bird Divert, the revolutionary bird safety window film. We are proud to offer this remarkable solution to property owners throughout Philadelphia, including Chestnut Hill, Fairmount-Spring Garden, Roxborough, East Falls, and Manayunk.",
             img="/images/bird-safety-solutions-philadelphia.jpg", alt="Bird Divert Philadelphia"),
        dict(heading="Statistics Surrounding Bird Glass Collisions",
             body="Every year, up to 1 billion birds lose their lives due to collisions with glass. In North America, houses and cottages are responsible for an estimated 25.9% of fatalities, low to mid-rise buildings contribute 63.9%, and high-rise buildings account for 10.2% of bird fatalities. These figures underscore the urgency of finding a solution to prevent these tragic events.",
             img="/images/bird-divert-philadelphia-2.jpg", alt="Bird glass collision statistics"),
        dict(heading="Help Save Birds in Philadelphia",
             body="Philadelphia is an urban oasis intertwined with lush greenery, parks, and natural habitats home to warblers, sparrows, and thrushes. Bird Divert, manufactured by National Window Film, is a remarkable optically-clear bird marker that leads the market today. What sets it apart is its unique ability to be seen only by birds, falling within their visible spectrum, while remaining invisible to the human eye.",
             img="/images/bird-divert-film-philadelphia.jpg", alt="Bird Divert save birds Philadelphia"),
        dict(heading="Bird Divert Helps Birds Navigate the Sky Safely",
             body="Bird Divert comprises a durable UV-absorbing and reflecting dot matrix that appears optically clear to humans but takes on a black or violet appearance for avian eyes. This unique technology acts as a guiding beacon, gently redirecting birds away from windows — a silent protector of the skies, reducing collisions and saving countless lives.",
             img="/images/bird-divert-philadelphia-safety-film.png", alt="Bird Divert dot matrix pattern"),
        dict(heading="Why Install Bird Divert for Your Property?",
             body="Bird Divert achieves an industry-leading threat level of 18 — the only product of its kind to do so. It qualifies commercial buildings for LEED Pilot 55 certification and comes with an industry-leading 5-year manufacturer warranty. It is endorsed by the National Audubon Society and recognized by the American Bird Conservancy. With 98% visible light transmission, it does not obstruct natural light or views.",
             img="/images/bird-divert-philadelphia.jpg", alt="Why install Bird Divert Philadelphia"),
        dict(heading="Bird Divert Technical Facts",
             body="Bird Divert features 98% Visible Light Transmission (VLT) to preserve your property's natural ambiance. With a thickness of 3.2mm, the PVC acrylic hard coat material is robust and tear-resistant. Exterior application means installation does not require access to your building's interior — no extensive renovations needed.",
             img="/images/bird-safety-window-film-philadelphia.jpg", alt="Bird Divert technical specifications"),
        dict(heading="Adhere to Local Regulations & Building Codes",
             body="Across the nation, cities and regions are enacting local laws requiring building owners to comply with bird-friendly design requirements. By choosing Bird Divert, you not only protect birds but also meet these important regulations — contributing to a more bird-friendly environment and ensuring harmony between urban architecture and the natural world.",
             img="/images/bird-strike-prevention-film-bird-divert-philadelphia.jpg", alt="Bird friendly building regulations Philadelphia"),
        dict(heading="Get a Quote on Bird Divert in Philadelphia",
             body="We are here to make your property a haven for both humans and birds. Our commitment to reducing bird collisions and preserving bird populations extends throughout Philadelphia and surrounding communities. Contact us today to install Bird Divert or get an estimate — together we can make a difference, one window at a time.",
             img="/images/philadelphia-window-film-bird-divert.jpg", alt="Bird Divert quote Philadelphia",
             cta_label="Get a Free Quote", cta_href="/contact/"),
    ]
)

# 3. C-Bond
PAGES["c-bond-window-film"] = page(
    slug="c-bond-window-film",
    title="C-Bond Philadelphia | Ballistic Window Film Philadelphia",
    desc="Protect and enhance glass with C-Bond in Philadelphia, boosting durability, shatter resistance, and long-term safety for homes and businesses.",
    h1="C-Bond in Philadelphia for Enhanced Glass Protection",
    hero_img="/images/c-bond-window-film-philadelphia-2.png",
    sections=[
        dict(heading="C-Bond in Philadelphia for Enhanced Glass Protection",
             body="C-Bond provides cutting-edge glass strengthening for residential and commercial properties throughout Philadelphia. It improves durability, flexibility, and ballistic resistance — making it the perfect addition for schools, offices, and secured properties that require a higher level of glass protection.",
             img="/images/c-bond-window-film-philadelphia-2.png", alt="C-Bond window film Philadelphia"),
        dict(heading="About C-Bond Systems",
             body="C-Bond utilizes proprietary nanotechnology primer agents to strengthen existing glass at the molecular level. This innovative system eliminates microscopic imperfections in the glass, improves shatter resistance, and dramatically enhances the adhesion and performance of any window film installed over it.",
             img="/images/c-bond-systems-philadelphia.jpg", alt="C-Bond systems Philadelphia"),
        dict(heading="Benefits of C-Bond Window Film in Philadelphia",
             body="C-Bond offers exclusive benefits for Philadelphia properties including: optimizing the effectiveness of all window film installations, accelerating cure times and enhancing film adhesion, providing superior protection against natural disasters and severe weather, upgrading glass to shatter-resistant quality, and delivering durable nanotechnology for a long-term investment.",
             img="/images/c-bond-primer-window-film-philadelphia.jpg", alt="C-Bond primer window film Philadelphia"),
        dict(heading="Partner With Philadelphia's C-Bond Window Film Experts",
             body="Window Film Philadelphia is proud to be an expert specialist in C-Bond systems for Philadelphia properties. Our team provides professional guidance on selecting and installing the ideal C-Bond window film solution for your specific needs. Contact us today for more information!",
             img="/images/2021-09-cbond-window-film-philadelphia.jpg", alt="C-Bond window film contractor Philadelphia",
             cta_label="Get a Free Quote", cta_href="/contact/"),
    ]
)

# 4. Casper Cloaking
PAGES["casper-cloaking-film"] = page(
    slug="casper-cloaking-film",
    title="Casper Cloaking Film Philadelphia | Window Film Philadelphia",
    desc="Protect LED screens and maintain privacy with casper cloaking film in Philadelphia, enhancing commercial aesthetics and security with advanced technology.",
    h1="Casper Cloaking Film in Philadelphia for Properties",
    hero_img="/images/casper-cloaking-window-film-for-Philadelphia.jpg",
    sections=[
        dict(heading="Casper Cloaking Film in Philadelphia for Properties",
             body="Casper Cloaking Film is designed specifically for commercial properties. It blackouts LED and LCD screens from external view while maintaining an open, professional atmosphere — ideal for conference rooms, client-facing areas, and office partitions. Easy to install and compatible with a variety of glass surfaces.",
             img="/images/casper-cloaking-window-film-for-Philadelphia.jpg", alt="Casper cloaking film Philadelphia"),
        dict(heading="About Casper Cloaking Window Film",
             body="Casper Cloaking Film makes all screens appear completely black from outside the glass while maintaining clear, unobstructed views everywhere else. It combines technological privacy with elegant decor — giving your office the open, collaborative feel of a glass-walled space without compromising sensitive screen content.",
             img="/images/Casper-cloaking-technology-office.jpg", alt="Casper cloaking technology office"),
        dict(heading="The Benefits of Casper Cloaking Film for Your Philadelphia Property",
             body="Casper Cloaking Film provides exclusive benefits including: available in modern designs with custom printing options, available in an optically clear option, achieves complete technological privacy for screen-based content, blacks out any LED or LCD screen behind the film, and creates an open and welcoming space without sacrificing privacy.",
             img="/images/Bright-office-interior.jpg", alt="Casper cloaking film benefits Philadelphia"),
        dict(heading="Trusted Casper Cloaking Film Experts Serving Philadelphia",
             body="Window Film Philadelphia is proud to provide professional Casper Cloaking Film installation with expert guidance for commercial properties throughout Philadelphia. Our team helps you select the right solution to achieve technological privacy while maintaining the aesthetic of your space. Contact us today for a free consultation.",
             img="/images/2021-09-casper-window-film-philadelphia.jpg", alt="Casper cloaking film contractor Philadelphia",
             cta_label="Get a Free Quote", cta_href="/contact/"),
    ]
)

# 5. Hanita Coatings
PAGES["hanita-coatings-window-film"] = page(
    slug="hanita-coatings-window-film",
    title="Hanita Coatings Philadelphia | Hanita Coatings Window Film",
    desc="Upgrade your space with Hanita Coatings in Philadelphia, offering energy-efficient, decorative, and security window films that enhance comfort and protection.",
    h1="Hanita Coatings in Philadelphia for Modern Properties",
    hero_img="/images/2021-09-hanita-coatings-window-film-philadelphia.jpg",
    sections=[
        dict(heading="Hanita Coatings in Philadelphia for Modern Properties",
             body="Window Film Philadelphia is the leading source for Hanita Coatings window film for Philadelphia residential and commercial properties. Hanita Coatings offers highly effective solutions for energy efficiency, security, and more — helping property owners across Philadelphia improve comfort, reduce costs, and enhance the performance of their existing glass.",
             img="/images/2021-09-hanita-coatings-window-film-philadelphia.jpg", alt="Hanita Coatings window film Philadelphia"),
        dict(heading="Hanita SolarZone Window Film",
             body="Hanita SolarZone delivers superior UV protection and solar heat rejection for Philadelphia properties. Benefits include reducing AC costs by up to 20%, minimizing cooling times by up to 34%, blocking UV rays, reducing glare, and rejecting solar heat — all while maintaining natural light and clear views.",
             img="/images/energy-saving-window-film-philadelphia.png", alt="Hanita SolarZone window film Philadelphia"),
        dict(heading="Hanita SafetyZone Window Film",
             body="Hanita SafetyZone is a thick protective film made from premium polyester and adhesives. It provides passive invisible protection, mitigates broken glass hazards, and defends against high-impact occurrences including natural disasters, break-ins, and severe weather events.",
             img="/images/safety-and-security-window-film-philadelphia.png", alt="Hanita SafetyZone window film Philadelphia"),
        dict(heading="Hanita Decorative Window Film",
             body="Hanita Decorative Window Film delivers HD, life-like graphics via a proprietary printing process. It is perfect for long-term branding campaigns, provides custom solutions for privacy and light transmission, and allows you to transform glass surfaces into eye-catching design elements for your property.",
             img="/images/hdclear-custom-decorative-window-film-philadelphia.jpg", alt="Hanita decorative window film Philadelphia"),
        dict(heading="Philadelphia's Leading Hanita Coatings Specialists",
             body="Window Film Philadelphia is the trusted provider of Hanita Coatings window film for residential and commercial properties throughout Philadelphia. Our team provides expert guidance on the right product for your project goals. Contact us today for a free consultation.",
             img="/images/2021-10-window-film-brands-philadelphia.jpg", alt="Hanita Coatings window film contractor Philadelphia",
             cta_label="Get a Free Quote", cta_href="/contact/"),
    ]
)

# 6. HDClear
PAGES["hdclear-window-film"] = page(
    slug="hdclear-window-film",
    title="HDClear Window Film Philadelphia | Window Film Philadelphia",
    desc="Elevate interiors with HDClear Window Film in Philadelphia, featuring custom designs, added privacy, and improved aesthetics for any space.",
    h1="HDClear Window Film in Philadelphia for Stunning Decorative Design",
    hero_img="/images/hdclear-window-film-philadelphia-1.png",
    sections=[
        dict(heading="HDClear Window Film in Philadelphia for Stunning Decorative Design",
             body="HDClear window film delivers vibrant, life-like designs with one-way graphics and custom printing options. Enhance your branding, marketing, and interior aesthetics while also enjoying energy savings, privacy, and UV protection. HDClear is the ultimate solution for Philadelphia properties looking to make a visual impact.",
             img="/images/hdclear-window-film-philadelphia-1.png", alt="HDClear window film Philadelphia"),
        dict(heading="Custom HDClear Decorative Window Film",
             body="HDClear Decorative Window Film uses optically clear polyester films with multiple HD graphics layers and UV-resistant inks. Options include double-sided, translucent, and transparent configurations. Perfect for custom storefront displays, marketing graphics, and branded interior privacy solutions.",
             img="/images/frosted-privacy-window-film-scaled-5.jpeg", alt="Custom HDClear decorative window film Philadelphia"),
        dict(heading="HDSolar Energy Reduction Window Film",
             body="HDSolar is an optically clear solar heat solution that delivers energy savings without impacting your building's aesthetics. It provides a full payback in 2 to 5 years, blocks 97% of infrared heat, and blocks 99.9% of UV radiation while minimizing glare.",
             img="/images/hdclear-custom-decorative-window-film-philadelphia.jpg", alt="HDSolar energy reduction window film Philadelphia"),
        dict(heading="HDSafety Security Window Film",
             body="HDSafety Security Window Film is thick, durable, and provides high-impact resistance. It helps prevent break-ins by providing additional response time, mitigates broken glass hazards, and minimizes property damage from severe weather, explosions, and forced entry attempts.",
             img="/images/safety-and-security-window-film-philadelphia.png", alt="HDSafety security window film Philadelphia"),
        dict(heading="Partner With Philadelphia's HDClear Window Film Specialists",
             body="Window Film Philadelphia provides expert HDClear window film installation for both residential and commercial properties. Our team is ready to help you select the right decorative, energy-saving, or security film for your specific goals. Contact us today for more information.",
             img="/images/2021-09-hdclear-window-film-philadelphia.jpg", alt="HDClear window film contractor Philadelphia",
             cta_label="Get a Free Quote", cta_href="/contact/"),
    ]
)

# 7. Huper Optik — XML has 7 product series
PAGES["huper-optik"] = page(
    slug="huper-optik",
    title="Huper Optik Window Film Philadelphia | Huper Optik Philadelphia",
    desc="Enhance comfort and privacy in your home or office with premium Huper Optik in Philadelphia, using advanced window films that reduce glare and block UV rays.",
    h1="Huper Optik in Philadelphia for Modern Property Upgrades",
    hero_img="/images/2021-09-huper-optik-window-film-philadelphia.jpg",
    sections=[
        dict(heading="Huper Optik in Philadelphia for Modern Property Upgrades",
             body="Huper Optik utilizes advanced nanoceramic window film technology to reduce heat, control glare, and improve comfort for residential and commercial buildings throughout Philadelphia. Reliable, stylish, and built for lasting performance, Huper Optik is the premium choice for property owners who demand the best.",
             img="/images/2021-09-huper-optik-window-film-philadelphia.jpg", alt="Huper Optik window film Philadelphia"),
        dict(heading="Huper Optik Select Series",
             body="The Select Series delivers powerful solar performance with a clean, natural appearance. It blocks 99% of UV radiation, rejects up to 70% of solar heat, and is fade-resistant for lasting clarity — making it an excellent all-around choice for both residential and commercial applications.",
             img="/images/House-with-mountain-view.jpg", alt="Huper Optik Select Series"),
        dict(heading="Huper Optik Ceramic Series",
             body="The Ceramic Series leverages nano-ceramic technology for best-in-class durability and performance in temperature extremes and high-impact events. It rejects 70% of solar heat, blocks 99% of UV radiation, and maintains a low-reflectivity appearance that blends with any building facade.",
             img="/images/Modern-glass-building-entrance.jpg", alt="Huper Optik Ceramic Series"),
        dict(heading="Huper Optik Therm-X Series",
             body="The Therm-X Series provides a thick thermal barrier with multiple finishes to choose from. It delivers great ROI with quick payback, is available in numerous finishes and hues, and offers a significant privacy solution while maintaining substantial visible light transmission.",
             img="/images/Looking-up-at-skyscrapers.jpg", alt="Huper Optik Therm-X Series"),
        dict(heading="Huper Optik Fusion Series",
             body="The Fusion Series uses proprietary green technology with low reflective properties. It features neutral tones with low reflectivity, rejects 77% of solar heat gain, and effectively eliminates hot and cold spots throughout your property for a consistently comfortable environment.",
             img="/images/energy-saving-window-film-philadelphia.png", alt="Huper Optik Fusion Series"),
        dict(heading="Huper Optik Shield Series",
             body="The Shield Series combines energy savings with security in one film. It provides moderate solar heat rejection and UV protection, defends against threats ranging from natural disasters to burglaries, and mitigates broken glass hazards — a complete solution for properties requiring both comfort and protection.",
             img="/images/safety-and-security-window-film-philadelphia.png", alt="Huper Optik Shield Series"),
        dict(heading="Trusted Huper Optik Installation Experts in Philadelphia",
             body="Window Film Philadelphia is the trusted provider of Huper Optik window film for residential and commercial properties throughout the Philadelphia area. Our team provides expert guidance on selecting the right Huper Optik series for your project. Contact us today for more information.",
             img="/images/2021-10-llumar-window-film-contractor-philadelphia.jpg", alt="Huper Optik installation experts Philadelphia",
             cta_label="Get a Free Quote", cta_href="/contact/"),
    ]
)

# 8. LLumar
PAGES["llumar"] = page(
    slug="llumar",
    title="LLumar Window Film Philadelphia | LLumar Philadelphia",
    desc="Transform residential and commercial spaces using LLumar in Philadelphia delivering improved privacy, UV protection, energy savings, and stylish glass upgrades.",
    h1="LLumar Window Film in Philadelphia for Homes & Businesses",
    hero_img="/images/2021-09-llumar-window-film-philadelphia.jpg",
    sections=[
        dict(heading="LLumar Window Film in Philadelphia for Homes & Businesses",
             body="LLumar provides high-quality window film for comfort, privacy, security, and energy performance for homes and commercial buildings throughout Philadelphia. With a comprehensive range of products covering energy savings, safety, and decorative solutions, LLumar is one of the most trusted brands in the window film industry.",
             img="/images/2021-09-llumar-window-film-philadelphia.jpg", alt="LLumar window film Philadelphia"),
        dict(heading="LLumar Architectural Energy Saving Window Film",
             body="Reduce glare, block 99% of UV rays, and save on energy bills with LLumar Architectural Window Film. Save up to 40% on energy costs for residential properties, and up to 15% for commercial buildings — while maintaining natural light and clear views throughout your property.",
             img="/images/Businesswoman-using-smartphone.jpg", alt="LLumar energy saving window film Philadelphia"),
        dict(heading="LLumar Safety and Security Window Film",
             body="LLumar Safety and Security Window Film provides high-impact resistance against natural disasters and break-ins. Available in both optically clear and privacy-tinted options, it deters burglaries and smash-and-grabs while reducing the risk of injury or death from broken glass.",
             img="/images/Safty-Window-Film-1.jpg", alt="LLumar safety security window film Philadelphia"),
        dict(heading="LLumar iLLusions Decorative Window Film",
             body="LLumar iLLusions Decorative Window Film transforms glass into art, marketing collateral, brand interest, and privacy solutions. Available in frosted, etched, and textured options with endless patterns, colors, and designs. Supports both custom cutting and printing for short-term and long-term projects.",
             img="/images/Frosted-office-glass-film.jpg", alt="LLumar iLLusions decorative window film Philadelphia"),
        dict(heading="Work With Philadelphia's Trusted LLumar Expert",
             body="Window Film Philadelphia provides customized LLumar guidance for homes and businesses throughout Philadelphia and Pennsylvania. Our team delivers expert-level installation services and helps you find the right LLumar product for your goals. Contact us today for a free consultation.",
             img="/images/2021-10-llumar-window-film-contractor-philadelphia.jpg", alt="LLumar window film contractor Philadelphia",
             cta_label="Get a Free Quote", cta_href="/contact/"),
    ]
)

# 9. Madico
PAGES["madico-window-film"] = page(
    slug="madico-window-film",
    title="Madico Window Film Philadelphia | Window Film Philadelphia",
    desc="Transform your property with Madico window film in Philadelphia, ensuring protection, privacy, stylish aesthetics, and long-lasting energy efficiency.",
    h1="Madico Window Film in Philadelphia for All Property Types",
    hero_img="/images/madico-window-film-contractor-philadelphia.png",
    sections=[
        dict(heading="Madico Window Film in Philadelphia for All Property Types",
             body="Madico window film provides effective solutions for protecting interiors, enhancing privacy, and improving energy efficiency for Philadelphia properties. With UV and glare reduction, decorative options, and security upgrades, Madico delivers comprehensive performance across residential and commercial applications.",
             img="/images/madico-window-film-contractor-philadelphia.png", alt="Madico window film Philadelphia"),
        dict(heading="Madico Solar & Energy-Saving Window Film",
             body="Madico Solar Window Film provides advanced heat rejection, glare reduction, and UV protection. It rejects up to 86% of solar heat gain, blocks 99% of harmful UV rays, and prevents fading while reducing glare — delivering measurable energy savings and improved comfort year-round.",
             img="/images/madico-window-film-contractor-philadelphia-2.jpg", alt="Madico solar energy saving window film Philadelphia"),
        dict(heading="Madico Security & Safety Window Film in Philadelphia",
             body="Madico Security and Safety Window Film defends against natural disasters and break-ins. It mitigates broken glass hazards and provides additional response time during high-impact events. Benefits include minimizing risk of damage and injury, deterring intruders, guarding against severe weather, and increasing the durability and shatter resistance of your glass.",
             img="/images/madico-window-film-contractor-philadelphia-1.jpg", alt="Madico security safety window film Philadelphia"),
        dict(heading="Madico Decorative Window Film",
             body="Madico Decorative Window Film improves elegance, privacy, and decor by diffusing light and providing custom printing options. It offers better privacy without blocking lighting, is easy to install for both short-term and long-term projects, and is a cost-effective alternative to frosted or etched glass.",
             img="/images/hdclear-custom-decorative-window-film-philadelphia.jpg", alt="Madico decorative window film Philadelphia"),
        dict(heading="Work With Philadelphia's Trusted Madico Expert",
             body="Window Film Philadelphia is the reliable provider of Madico window film for homes and commercial properties throughout Philadelphia. Our team provides expert installation and guidance to help you find the right Madico solution for your property. Contact us today.",
             img="/images/2021-09-madico-window-film-philadelphia.jpg", alt="Madico window film contractor Philadelphia",
             cta_label="Get a Free Quote", cta_href="/contact/"),
    ]
)

# 10. NanoTint
PAGES["nanotint-window-film"] = page(
    slug="nanotint-window-film",
    title="Nanotint Window Film Philadelphia | Window Film Philadelphia",
    desc="Experience superior comfort with Nanotint in Philadelphia, a clear coating that improves insulation, blocks UV rays, and fits curved glass.",
    h1="Nanotint Window Film in Philadelphia",
    hero_img="/images/drywired-liquid-nanotint-window-film-philadelphia.png",
    sections=[
        dict(heading="Nanotint Window Film in Philadelphia",
             body="Drywired Liquid NanoTint is a transparent, energy-efficient coating for windows that cannot accommodate traditional film. It maintains full optical clarity while improving thermal insulation — ideal for skylights, curved glass, hard-to-reach areas, and any property requiring a non-RF-blocking formula.",
             img="/images/drywired-liquid-nanotint-window-film-philadelphia.png", alt="Nanotint window film Philadelphia"),
        dict(heading="About Drywired Liquid NanoTint",
             body="Drywired Liquid NanoTint provides effective thermal insulation for glass features along with UV protection. It is ideal for abnormal-shaped windows and skylights, and is optically clear without impacting radio transmission frequencies — making it the perfect solution for commercial properties requiring full radio signaling.",
             img="/images/liquid-nanotint-philadelphia-1.jpg", alt="Drywired liquid NanoTint Philadelphia"),
        dict(heading="The Benefits of Drywired Liquid NanoTint for Philadelphia Properties",
             body="Drywired Liquid NanoTint provides outstanding benefits including: blocking up to 95% of infrared heat while allowing 90% visible light transmission, rejecting up to 99.9% of UVA and UVB radiation, not cracking, peeling, or fading for up to a decade, not impacting radio transmission frequencies, and providing year-round climate control and energy efficiency.",
             img="/images/drywired-liquid-nanotint-philadelphia-1.jpg", alt="NanoTint benefits Philadelphia"),
        dict(heading="Partner With Philadelphia's Trusted Liquid NanoTint Specialists",
             body="Window Film Philadelphia provides professional Drywired Liquid NanoTint installation for Philadelphia properties with unusual window designs, skylights, or curved glass. Our team delivers UV protection, greater comfort, and energy savings to even the most challenging installations. Contact us today.",
             img="/images/2021-10-window-film-installation-philadelphia.jpg", alt="NanoTint specialist Philadelphia",
             cta_label="Get a Free Quote", cta_href="/contact/"),
    ]
)

# 11. Solar Gard — XML has 4 sections
PAGES["solar-gard-window-film"] = page(
    slug="solar-gard-window-film",
    title="Solar Gard Window Film Philadelphia | Solar Gard Philadelphia",
    desc="Enhance energy efficiency, UV protection, and security with Solar Gard window film in Philadelphia. Schedule your free consultation with our experts today.",
    h1="Solar Gard Window Film in Philadelphia",
    hero_img="/images/2021-09-solar-gard-window-film-philadelphia.jpg",
    sections=[
        dict(heading="Solar Gard Window Film in Philadelphia",
             body="Solar Gard window film provides comfort and protection through energy savings, improved privacy, and long-lasting performance. Perfect for homes, offices, and commercial spaces throughout Philadelphia, Solar Gard delivers measurable results across a full range of applications.",
             img="/images/2021-09-solar-gard-window-film-philadelphia.jpg", alt="Solar Gard window film Philadelphia"),
        dict(heading="Solar Gard Energy Efficiency Window Film",
             body="Reduce solar heat gain, block UV rays, minimize glare, and maintain privacy with Solar Gard Energy Efficiency Window Film. Reduce heating and cooling costs by up to 30%, block 99% of UV rays (equivalent to SPF 285), and achieve a 67% average fade reduction — protecting interiors and reducing energy bills year-round.",
             img="/images/Window-film-Philadelphia-office-1.jpg", alt="Solar Gard energy efficiency window film Philadelphia"),
        dict(heading="Solar Gard Safety and Security Window Film",
             body="Solar Gard Safety and Security Window Film prevents glass breakage and defends building occupants from high-impact events. It delays intrusion and deters intruders, helps prevent injury from human impact, and mitigates broken glass hazards — providing passive 24/7 protection for your property.",
             img="/images/Airplane-over-skyscrapers.jpg", alt="Solar Gard safety security window film Philadelphia"),
        dict(heading="Solar Gard Anti-Graffiti Window Film",
             body="Solar Gard Anti-Graffiti Window Film is a premium surface film for glass providing thick, durable defense against vandalism and daily wear. It protects surfaces from vandalism, keeps surfaces in great condition from everyday use, and saves money on costly repair and glass replacement.",
             img="/images/anti-graffiti-surface-film-philadelphia.jpg", alt="Solar Gard anti-graffiti window film Philadelphia"),
        dict(heading="Work With Philadelphia's Trusted Solar Gard Experts",
             body="Window Film Philadelphia helps you find the right Solar Gard film for energy efficiency, safety, or privacy goals. Our team provides expert guidance and professional installation for residential and commercial properties throughout Philadelphia. Contact us today for more information.",
             img="/images/Cozy-living-room-interior-1.jpg", alt="Solar Gard window film contractor Philadelphia",
             cta_label="Get a Free Quote", cta_href="/contact/"),
    ]
)

# 12. Solyx
PAGES["solyx-window-film"] = page(
    slug="solyx-window-film",
    title="Solyx Window Film Philadelphia | Window Film Philadelphia",
    desc="Enhance privacy and style with Solyx window film in Philadelphia. Get decorative window film installed by experts and enjoy a free consultation.",
    h1="Solyx Window Film in Philadelphia for Stylish Interior Upgrades",
    hero_img="/images/solyx-decorative-window-film-philadelphia.jpg",
    sections=[
        dict(heading="Solyx Window Film in Philadelphia for Stylish Interior Upgrades",
             body="Solyx decorative films provide elegant privacy solutions for residential and commercial properties. They diffuse natural light, add striking visual appeal, and are ideal for offices, conference rooms, bathrooms, and shared areas. Solyx is a cost-effective upgrade for any glass surface throughout Philadelphia.",
             img="/images/solyx-decorative-window-film-philadelphia.jpg", alt="Solyx window film Philadelphia"),
        dict(heading="The Benefits of Solyx Decorative Window Film for Philadelphia Properties",
             body="From stained glass mimics to frosted glass alternatives, Solyx offers endless colors, finishes, designs, opaques, and patterns. Benefits include adding beauty, color, and visual interest to your space, providing privacy for conference rooms, locker rooms, and other areas, diffusing and softening light, and delivering versatility across endless design styles.",
             img="/images/Colorful-window-film-installation-1.jpg", alt="Solyx decorative window film benefits Philadelphia"),
        dict(heading="Solyx Decorative Film Styles Available",
             body="Solyx offers an extensive range of decorative film styles to suit any property design. Available styles include colored, textured, frosted, etched, glass-like distortion, gradient, and patterned options — giving you complete control over the look and feel of your glass surfaces.",
             img="/images/Frosted-office-glass-film.jpg", alt="Solyx decorative film styles Philadelphia"),
        dict(heading="Work With Philadelphia's Trusted Solyx Window Film Expert",
             body="Window Film Philadelphia provides expert guidance for both residential and commercial Solyx projects. Our team helps you select the ideal decorative film for privacy, style, and light control. Contact us today for more information about Solyx window film in Philadelphia.",
             img="/images/Man-installing-window-film.jpeg", alt="Solyx window film expert Philadelphia",
             cta_label="Get a Free Quote", cta_href="/contact/"),
    ]
)

# 13. Vista — XML has 6 product series
PAGES["vista-window-film"] = page(
    slug="vista-window-film",
    title="Vista Window Film Philadelphia | Window Film Philadelphia",
    desc="Boost comfort, privacy, and safety with Vista window film in Philadelphia, providing energy-efficient, stylish, and durable solutions for homes and businesses.",
    h1="Vista Window Film for Philadelphia Properties",
    hero_img="/images/vista-UV-window-film-for-energy-savings-Philadelphia-1.jpg",
    sections=[
        dict(heading="Vista Window Film for Philadelphia Properties",
             body="Window Film Philadelphia is the trusted source for Vista window film for Philadelphia properties. Produced by LLumar, Vista incorporates technological advancements with a focus on residential design. From security to energy conservation, Vista offers a comprehensive range of solutions for every property type.",
             img="/images/vista-UV-window-film-for-energy-savings-Philadelphia-1.jpg", alt="Vista window film Philadelphia"),
        dict(heading="Vista Low-E Window Film",
             body="Vista Low-E Window Film delivers optimal energy efficiency for homes and businesses. Designed to keep comfortable temperatures year-round, it reduces heat loss in winter and heat gain in summer — providing energy savings in every season without compromising natural light or views.",
             img="/images/vista-window-tinting-philadelphia-1.jpg", alt="Vista Low-E window film Philadelphia"),
        dict(heading="Vista Dual Reflective Window Film",
             body="Vista Dual Reflective Window Film provides superior privacy and modern aesthetics while maintaining clear outdoor views. Highly reflective with a sleek, professional look, it is ideal for offices and commercial properties seeking both performance and style.",
             img="/images/vista-window-film-contractor-philadelphia-1.jpg", alt="Vista Dual Reflective window film Philadelphia"),
        dict(heading="Vista Neutral Window Film",
             body="Vista Neutral Window Film offers a lower-reflective look with better energy conservation. It addresses UV and glare reduction without the mirror-like appearance of more reflective films — blending seamlessly with the existing aesthetic of your property.",
             img="/images/energy-saving-window-film-philadelphia.png", alt="Vista Neutral window film Philadelphia"),
        dict(heading="Vista Spectrally Selective Window Film",
             body="Vista Spectrally Selective Window Film achieves high light transmission while reducing solar heat gain and UV rays. By separating the electromagnetic spectrum, it controls which frequencies pass through glass — allowing natural light in while blocking the heat and UV that cause discomfort and fading.",
             img="/images/window-film-philadelphia-uv-blocking-solar-shield-1.jpg", alt="Vista Spectrally Selective window film Philadelphia"),
        dict(heading="Vista Safety and Security Window Film",
             body="Vista Safety and Security Window Film defends your property against high-impact events. It keeps intruders out, prevents damage from numerous threats, and mitigates broken glass hazards — providing invisible, passive protection for the lifetime of your windows.",
             img="/images/safety-and-security-window-film-philadelphia.png", alt="Vista safety security window film Philadelphia"),
        dict(heading="Work With Philadelphia's Trusted Vista Window Film Expert",
             body="Window Film Philadelphia is the trusted provider of Vista window film for residential and commercial spaces throughout Philadelphia. Our team provides expert guidance on energy-saving, decorative, and protective Vista films tailored to your property's needs. Contact us today.",
             img="/images/2021-09-vista-window-film-philadelphia.jpg", alt="Vista window film contractor Philadelphia",
             cta_label="Get a Free Quote", cta_href="/contact/"),
    ]
)

# ── Write all pages ──────────────────────────────────────────────────────────
written = 0
for slug, content in PAGES.items():
    path = os.path.join(DIR, slug + ".astro")
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    written += 1
    print(f"  WROTE {slug}.astro  ({len(content)} bytes)")

print(f"\nDone: {written} pages written.")
