#!/usr/bin/env python3
"""Generate all 10 /applications/ sub-pages from XML content."""
import os

DIR = "/home/zvivas/wfp-site/src/pages/applications"

def esc(s):
    return s.replace("'", "\\'")

def make_page(slug, title, desc, h1, hero_img, hero_alt, intro_body,
              benefits_heading, b1_h, b1_body, b1_href,
              b2_h, b2_body, b2_href,
              b3_h, b3_body, b3_href,
              closing_h, closing_body,
              img1, img2, img3, img4, img5,
              alt1='', alt2='', alt3='', alt4='', alt5=''):
    canonical = f"https://www.windowfilmphiladelphia.net/applications/{slug}/"
    return f"""---
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

  <BackAndForthSection
    heading="{esc(h1)}"
    body="{esc(intro_body)}"
    imageSrc='{img1}'
    imageAlt='{esc(alt1)}'
    flip={{false}}
    altBg={{false}}
  />

  <section class="section-pad" style="background:var(--color-bg-section)">
    <div class="container" style="max-width:860px">
      <h2>{benefits_heading}</h2>
    </div>
  </section>

  <BackAndForthSection
    heading="{esc(b1_h)}"
    body="{esc(b1_body)}"
    imageSrc='{img2}'
    imageAlt='{esc(alt2)}'
    flip={{true}}
    altBg={{true}}
    ctaLabel='Learn More'
    ctaHref='{b1_href}'
  />

  <BackAndForthSection
    heading="{esc(b2_h)}"
    body="{esc(b2_body)}"
    imageSrc='{img3}'
    imageAlt='{esc(alt3)}'
    flip={{false}}
    altBg={{false}}
    ctaLabel='Learn More'
    ctaHref='{b2_href}'
  />

  <BackAndForthSection
    heading="{esc(b3_h)}"
    body="{esc(b3_body)}"
    imageSrc='{img4}'
    imageAlt='{esc(alt4)}'
    flip={{true}}
    altBg={{true}}
    ctaLabel='Learn More'
    ctaHref='{b3_href}'
  />

  <BackAndForthSection
    heading="{esc(closing_h)}"
    body="{esc(closing_body)}"
    imageSrc='{img5}'
    imageAlt='{esc(alt5)}'
    flip={{false}}
    altBg={{false}}
    ctaLabel='Get a Free Quote'
    ctaHref='/contact/'
  />

  <BrandLogos />
  <CTAStrip />

</BaseLayout>
"""

pages = {

"arenas-stadiums": make_page(
    slug="arenas-stadiums",
    title="Arenas & Stadiums | Window Film Philadelphia",
    desc="Enhance safety, energy efficiency, and comfort in arenas with professional arena window film in Philadelphia for stadiums and large event venues.",
    h1="Stadium, Venue & Arena Window Film in Philadelphia",
    hero_img="/images/stadium-window-film-philadelphia-1.webp",
    hero_alt="Stadium venue arena window film Philadelphia",
    intro_body="Large venues benefit from arena window film in Philadelphia because it enhances safety, improves energy efficiency, and boosts visitor comfort. Our team provides tailored solutions for stadiums, sports complexes, and other event centers handling thousands of attendees. From energy-saving films for your Kensington stadium to protective and decorative wraps for your Fishtown facility, these solutions help manage glare, improve interior performance, and maintain a professional appearance without compromising aesthetics.",
    benefits_heading="Benefits of Window Film for Arenas in Philadelphia",
    b1_h="Bomb Blast Protection",
    b1_body="Defend against high-impact events including natural disasters, explosions, and other threats with this comprehensive safety and security solution. Mitigate broken glass hazards, keeping building occupants safe from potential injury and death.",
    b1_href="/benefits/blast-mitigation/",
    b2_h="Elevator Refinishing",
    b2_body="Elevators in high foot traffic areas like event centers can become susceptible to daily wear and tear, vandalism, graffiti, and more. Keep your expensive metal surfaces safe with surface film while concealing any existing damage. This innovative service can help you save thousands in repairs.",
    b2_href="/benefits/elevator-refinishing/",
    b3_h="Exterior Building Wraps",
    b3_body="A great way to promote upcoming events and improve brand visibility is with exterior building wraps. These custom decorative films can be applied on a variety of surfaces including brick and textured exteriors. Attract more customers, create special event promotions, and much more.",
    b3_href="/benefits/exterior-building-wraps/",
    closing_h="Work With Philadelphia's Trusted Arena Window Film Contractor",
    closing_body="Window Film Philadelphia is honored to be the trusted window film contractor serving arenas, stadiums, venues, and other event centers. Our team is well experienced with working on large-scale projects of this size and would love the opportunity to help you transform your space and achieve your property goals. Contact us for more information regarding our window film solutions!",
    img1="/images/stadium-window-film-philadelphia-1.webp",
    img2="/images/window-film-philadelphia-arena.jpg",
    img3="/images/2021-08-philadelphia-window-film-elavator-surface-refinishing.jpg",
    img4="/images/advertising-building-wrap-films-for-Sports-stadiums-in-Philadelphia.png",
    img5="/images/Etihad-Stadium-ticket-sales.jpeg",
    alt1="Stadium window film Philadelphia",
    alt2="Arena window film Philadelphia",
    alt3="Elevator refinishing window film arena Philadelphia",
    alt4="Building wrap film stadiums Philadelphia",
    alt5="Arena venue window film Philadelphia",
),

"churches": make_page(
    slug="churches",
    title="Church Window Film in Philadelphia | Window Film Philadelphia",
    desc="Ensure safety, reduce energy costs, and enhance aesthetics with church window film in Philadelphia. Perfect for churches, synagogues, and religious spaces.",
    h1="Church Window Film in Philadelphia",
    hero_img="/images/church-window-film-philadelphia_11zon.jpg",
    hero_alt="Church window film Philadelphia",
    intro_body="Religious properties can benefit from advanced protective and decorative window films that enhance safety, improve energy efficiency, and elevate aesthetics. Church window film in Philadelphia helps create comfortable, secure, and welcoming environments for congregations. Whether your North Philadelphia chapel needs security film or a Fishtown synagogue seeks better energy savings, these solutions deliver long-term value and peace of mind.",
    benefits_heading="The Benefits of Window Film for Philadelphia Churches",
    b1_h="Safety and Security",
    b1_body="Protective window film for churches mitigates broken glass hazards in the event of natural disasters, break-ins, or vandalism. It ensures the safety of congregations while maintaining the aesthetic of your sacred space.",
    b1_href="/benefits/safety-and-security/",
    b2_h="Decorative and Promotional",
    b2_body="Enhance visual appeal and promote events with decorative church window film. Custom printing and faux stained glass options allow religious properties to create inviting, artistic, and thematic windows.",
    b2_href="/benefits/decorative-promotional/",
    b3_h="Anti-Graffiti and Surface Protection",
    b3_body="Anti-graffiti window film for houses of worship protects surfaces prone to daily wear, vandalism, and graffiti. This sacrificial film keeps glass safe while concealing existing damage, preserving the beauty of your property.",
    b3_href="/benefits/anti-graffiti/",
    closing_h="Partner With Philadelphia's Church Window Film Professionals",
    closing_body="Enhance the safety, comfort, and aesthetics of your house of worship with church window film in Philadelphia. Our team provides expert guidance on protective, decorative, and energy-efficient window films tailored to your property's needs. Ensure your congregation enjoys a secure and welcoming environment while preserving valuable interiors. Contact us today to get started.",
    img1="/images/church-window-film-philadelphia_11zon.jpg",
    img2="/images/window-film-church-philadelphia_11zon.jpg",
    img3="/images/window-film-philadelphia-church_11zon.jpg",
    img4="/images/2021-08-philadelphia-window-film-anti-graffiti-window-film-scratches-film.jpg",
    img5="/images/2021-09-church-window-film-philadelphia.jpg",
    alt1="Church window film Philadelphia",
    alt2="Safety security window film church Philadelphia",
    alt3="Decorative window film church Philadelphia",
    alt4="Anti-graffiti window film church Philadelphia",
    alt5="Church window film contractor Philadelphia",
),

"hotel-window-film": make_page(
    slug="hotel-window-film",
    title="Hotels | Window Film Philadelphia | Leading Window Film Solutions",
    desc="Window Film Philadelphia provides top-tier hotel window film in Philadelphia for improved insulation, UV protection, and sleek aesthetics. Call Now!",
    h1="Leading Hotel Window Film Experts in Philadelphia",
    hero_img="/images/hotel-window-film-philadelphia.jpg",
    hero_alt="Hotel window film Philadelphia",
    intro_body="Window Film Philadelphia is honored to provide window film solutions for hotels and hospitality properties throughout the Philadelphia metro area. Our team is well-experienced in working with hotel properties, ensuring minimized operational downtime as well as quick, effective installations. Hotel window film for Philadelphia offers numerous benefits that any hospitality business can take advantage of, including decorative enhancements, safety features, energy savings, and more. Whether you are looking for surface film to protect your Roxborough hotel elevators or want better energy efficiency for your event center, we have got you covered.",
    benefits_heading="Key Benefits of Window Film for Philadelphia Hotels",
    b1_h="Privacy",
    b1_body="Keep guests comfortable with our leading privacy window tinting solutions. Privacy window film obstructs unwanted views into your property while maintaining optically clear views out. Maintain guest privacy while modernizing the exterior of your building.",
    b1_href="/benefits/privacy-window-film-philadelphia/",
    b2_h="Updating Surfaces",
    b2_body="A great way to transform your interior and update your decor is with premium decorative surface films. These provide an affordable solution that does not require major renovations, helping minimize your operational downtime while achieving the same project success.",
    b2_href="/benefits/updating-surfaces/",
    b3_h="Anti-Graffiti",
    b3_body="For surfaces prone to daily wear and tear, vandalism, and graffiti, anti-graffiti surface film can be utilized to keep surfaces safe and free of damage. Utilize this sacrificial film for invisible protection while concealing existing damage.",
    b3_href="/benefits/anti-graffiti/",
    closing_h="Work With Philadelphia's Leading Hotel Window Film Contractor",
    closing_body="Hotel window film for Philadelphia properties offers a wide range of benefits that any hospitality business can take advantage of — from decorative and safety enhancements to energy savings and more. Whether you are looking to protect your hotel's elevators with surface film or improve energy efficiency in your event center, we have the perfect solution for your needs. Contact us today!",
    img1="/images/hotel-window-film-philadelphia.jpg",
    img2="/images/window-film-hotel-philadelphia.jpg",
    img3="/images/window-film-philadelphia-hotel.jpg",
    img4="/images/anti-graffiti-surface-film-philadelphia.jpg",
    img5="/images/2021-09-hotel-window-film-philadelphia.jpg",
    alt1="Hotel window film Philadelphia",
    alt2="Privacy window film hotel Philadelphia",
    alt3="Updating surfaces hotel window film Philadelphia",
    alt4="Anti-graffiti hotel window film Philadelphia",
    alt5="Hotel window film contractor Philadelphia",
),

"mass-transit": make_page(
    slug="mass-transit",
    title="Airport Window Film in Philadelphia | Window Film Philadelphia",
    desc="Enhance safety, energy efficiency, and comfort with mass transit and airport window film in Philadelphia. Call today for a quote!",
    h1="Airport Window Film in Philadelphia for Safer Terminals",
    hero_img="/images/mass-transit-window-film-philadelphia.webp",
    hero_alt="Airport window film Philadelphia",
    intro_body="Airports in Philadelphia face unique challenges such as high foot traffic, glare, energy efficiency, and safety needs. Mass transit and airport window film in Philadelphia provides a reliable solution, improving security, controlling glare, reducing energy costs, and protecting interior surfaces. From busy terminals to control rooms and lounges, these films deliver lasting performance while enhancing passenger comfort and operational efficiency.",
    benefits_heading="Benefits of Window Film for Philadelphia Transit Facilities",
    b1_h="Energy Savings",
    b1_body="In order to keep everyone comfortable and productive without spending a fortune on energy costs, an effective energy solution is required. Energy-saving window film provides a great ROI while eliminating hot and cold spots and helping reduce costs all year round.",
    b1_href="/benefits/energy-saving-window-film-philadephia/",
    b2_h="Anti-Graffiti",
    b2_body="For surfaces prone to daily wear and tear, vandalism, and graffiti, anti-graffiti surface film can be utilized to keep surfaces safe and free of damage. Utilize this sacrificial film for invisible protection while concealing existing damage.",
    b2_href="/benefits/anti-graffiti/",
    b3_h="Decorative and Promotional",
    b3_body="Decorative film can provide a lucrative advertising partnership opportunity. Create ad space for potential partnerships, promote special events, and much more. Decorative window film is highly customizable and can be applied to a variety of surfaces.",
    b3_href="/benefits/decorative-promotional/",
    closing_h="Philadelphia Airport Window Film Specialists You Can Trust",
    closing_body="Our team provides expert solutions for airports across Philadelphia, helping enhance safety, energy efficiency, and passenger experience. Whether it is security upgrades, glare control, or decorative enhancements, we deliver tailored solutions that meet the unique operational needs of aviation facilities. Window Film Philadelphia proudly supports airport projects with high-quality films and expert installation services. Contact us today to discuss the ideal window film for your airport.",
    img1="/images/mass-transit-window-film-philadelphia.webp",
    img2="/images/window-film-mass-transit-philadelphia.webp",
    img3="/images/window-film-philadelphia-mass-transit.webp",
    img4="/images/2021-10-decorative-promotional-window-film-philadelphia.jpg",
    img5="/images/2021-09-mass-transit-window-film-philadelphia.jpg",
    alt1="Airport mass transit window film Philadelphia",
    alt2="Energy saving window film airport Philadelphia",
    alt3="Anti-graffiti window film mass transit Philadelphia",
    alt4="Decorative window film airport Philadelphia",
    alt5="Airport window film contractor Philadelphia",
),

"museums-libraries": make_page(
    slug="museums-libraries",
    title="Museums & Libraries Window Film Philadelphia | Window Film Philadelphia",
    desc="Protect valuables and enhance visitor experiences with library and museum window film in Philadelphia. Professional installation available. Call today!",
    h1="Library & Museum Window Film in Philadelphia",
    hero_img="/images/museum-window-film-philadelphia_11zon.jpg",
    hero_alt="Museum window film Philadelphia",
    intro_body="Window Film Philadelphia provides expert installation for library and museum window film in Philadelphia. Window film offers advanced protective and decorative solutions for museums, libraries, and art galleries. Designed to safeguard valuable artifacts while enhancing visitor experience, these films provide UV protection, glare reduction, and customizable decorative options. Whether you need UV-blocking window film for a Chestnut Hill art gallery or custom decorative film for a Port Richmond library, these solutions combine safety, aesthetics, and functionality seamlessly.",
    benefits_heading="Benefits of Library & Museum Window Film in Philadelphia",
    b1_h="UV Protection",
    b1_body="Keep your one-of-a-kind treasures and artifacts safe with UV-blocking window film. Perfect for maintaining an optically clear glass display while ensuring everything inside stays safe from harmful damage.",
    b1_href="/benefits/uv-blocking-window-film-philadelphia/",
    b2_h="Decorative Window Film",
    b2_body="Create custom curation, enhance your guest experience, and more with decorative window film. Custom HD printing is available, helping you achieve both short-term and long-term campaigns with this creative solution.",
    b2_href="/benefits/decorative-promotional/",
    b3_h="Safety and Security",
    b3_body="Deter intruders and guard against smash-and-grabs with safety and security window film. This innovative, durable film works by adding a thick layer of protection to your glass windows and doors. Mitigate glass hazards with this 24/7 passive security system.",
    b3_href="/benefits/safety-and-security/",
    closing_h="Leading Window Film Experts for Museums & Libraries in Philadelphia",
    closing_body="Window Film Philadelphia is proud to be the trusted provider of art gallery, library, and museum window film in Philadelphia. Our team delivers both protective and decorative solutions to safeguard valuable collections while enhancing the visitor experience. Contact us today to explore the best options for your property.",
    img1="/images/museum-window-film-philadelphia_11zon.jpg",
    img2="/images/library-window-film-philadelphia_11zon.jpg",
    img3="/images/art-gallery-window-film-philadelphia_11zon.jpg",
    img4="/images/safety-and-security-window-film-philadelphia.png",
    img5="/images/2021-09-museum-window-film-philadelphia.jpg",
    alt1="Museum window film Philadelphia",
    alt2="UV protection window film museum Philadelphia",
    alt3="Decorative window film museum Philadelphia",
    alt4="Safety security window film museum Philadelphia",
    alt5="Museum library window film contractor Philadelphia",
),

"office": make_page(
    slug="office",
    title="Office Window Film in Philadelphia | Window Film Philadelphia",
    desc="Window Film Philadelphia provides top-quality office window film solutions in Philadelphia to boost workplace comfort and energy savings. Get a free quote!",
    h1="Office Window Film in Philadelphia",
    hero_img="/images/office-window-film-philadelphia.jpg",
    hero_alt="Office window film Philadelphia",
    intro_body="Window Film Philadelphia is honored to serve offices and co-working spaces throughout the Philadelphia metro area. As office window film experts in Philadelphia we offer the most comprehensive selection of window film solutions to help office spaces improve productivity, save money, and more. With energy-saving, safety and security, daylight redirecting, and whiteboard film options, offices and workspaces can fully benefit from our expertise. From frosted privacy decorative film for your Fairmount conference room to energy-efficient solutions for your workspace, we have got you covered.",
    benefits_heading="The Benefits of Window Film for Your Philadelphia Office or Co-Working Space",
    b1_h="Glare Reduction",
    b1_body="For properties lacking foliage, glare can be a common concern throughout certain times of the day. Do not let glare impact productivity by increasing headaches, eye fatigue, and more. Glare reduction film effectively reduces glare to create a more comfortable screen-viewing environment.",
    b1_href="/benefits/glare-reduction/",
    b2_h="Privacy",
    b2_body="Decorative privacy films can provide custom interior privacy solutions among conference rooms, customer lobbies, and more. Privacy window film obstructs unwanted views into certain areas while providing beautiful decor that can be customized for branding and marketing purposes.",
    b2_href="/benefits/privacy-window-film-philadelphia/",
    b3_h="Energy Savings",
    b3_body="In order to keep everyone comfortable and productive without spending a fortune on energy costs, an effective energy solution is required. Energy-saving window film provides a great ROI while eliminating hot and cold spots and helping reduce costs all year round.",
    b3_href="/benefits/energy-saving-window-film-philadephia/",
    closing_h="Work With Philadelphia's Leading Office Window Film Contractor",
    closing_body="Window Film Philadelphia is honored to provide leading window film solutions for offices and co-working spaces in Philadelphia. Our team has improved productivity and functionality for countless office buildings and would love the opportunity to help you transform your space. Contact us today for more information!",
    img1="/images/office-window-film-philadelphia.jpg",
    img2="/images/window-film-office-philadelphia.jpg",
    img3="/images/window-film-philadelphia-office.jpg",
    img4="/images/energy-saving-window-film-philadelphia.png",
    img5="/images/2021-09-office-window-film-philadelphia.jpg",
    alt1="Office window film Philadelphia",
    alt2="Glare reduction office window film Philadelphia",
    alt3="Privacy window film office Philadelphia",
    alt4="Energy saving office window film Philadelphia",
    alt5="Office window film contractor Philadelphia",
),

"restaurants-window-film-philadelphia": make_page(
    slug="restaurants-window-film-philadelphia",
    title="Restaurant Window Film in Philadelphia | Window Film Philadelphia",
    desc="Window Film Philadelphia specializes in restaurant window film in Philadelphia to improve comfort, reduce glare, and boost energy efficiency. Contact now!",
    h1="Restaurant Window Film in Philadelphia",
    hero_img="/images/restaurant-window-film-philadelphia-2.jpg",
    hero_alt="Restaurant window film Philadelphia",
    intro_body="Window Film Philadelphia proudly serves restaurants across the city with expert solutions designed to enhance comfort and functionality. Our services for restaurant window film in Philadelphia help reduce glare and heat, improve energy efficiency, and increase privacy without sacrificing natural light. Whether you need UV protection for your dining area, custom decorative film to boost your restaurant's branding, or added security film for your windows, we provide tailored options to meet your unique needs. Trust Window Film Philadelphia to deliver high-quality, professional installation that transforms your restaurant environment and elevates the guest experience.",
    benefits_heading="Top Advantages of Window Film for Restaurants in Philadelphia",
    b1_h="Mirror Refinishing",
    b1_body="Mirrors are significant financial investments that cannot be easily repaired. In order to keep your mirrored surfaces safe, surface film can be utilized to conceal existing damage while protecting against daily wear and tear as well as vandalism efforts.",
    b1_href="/benefits/mirror-refinishing/",
    b2_h="Exterior Building Wraps",
    b2_body="A great way to promote upcoming events and improve brand visibility is with exterior building wraps. These custom decorative films can be applied on a variety of surfaces including brick and textured exteriors. Attract more customers, create special event promotions, and much more.",
    b2_href="/benefits/exterior-building-wraps/",
    b3_h="Updating Surfaces",
    b3_body="A great way to transform your interior and update your decor is with premium decorative surface films. These provide an affordable solution that does not require major renovations, helping minimize your operational downtime while achieving the same project success.",
    b3_href="/benefits/updating-surfaces/",
    closing_h="Work With Philadelphia's Leading Restaurant Window Film Contractor",
    closing_body="Window Film Philadelphia is honored to provide leading window film services for restaurants, bars, cafes, and clubs in Philadelphia. We have helped numerous businesses in these industries create the best dining and guest experience possible and would love the opportunity to help you transform your space. Contact us for more information!",
    img1="/images/restaurant-window-film-philadelphia-2.jpg",
    img2="/images/bar-window-film-philadelphia-1.jpg",
    img3="/images/cafe-window-film-philadelphia.jpg",
    img4="/images/3m-dinoc-surface-film-philadelphia.jpg",
    img5="/images/2021-09-restaurant-window-film-philadelphia.jpg",
    alt1="Restaurant window film Philadelphia",
    alt2="Mirror refinishing restaurant Philadelphia",
    alt3="Exterior building wrap restaurant Philadelphia",
    alt4="Updating surfaces restaurant Philadelphia",
    alt5="Restaurant window film contractor Philadelphia",
),

"retail": make_page(
    slug="retail",
    title="Retail Window Film in Philadelphia | Window Film Philadelphia",
    desc="Enhance privacy and reduce glare with custom retail window film in Philadelphia. Contact Window Film Philadelphia for a free consultation!",
    h1="Retail Window Film in Philadelphia",
    hero_img="/images/2021-09-retail-window-film-philadelphia.png",
    hero_alt="Retail window film Philadelphia",
    intro_body="Window Film Philadelphia is honored to serve retail shops, storefronts, and malls throughout the Philadelphia metro area. As experts in retail window film in Philadelphia, we have helped numerous brick-and-mortar businesses in the retail industry create incredible shopping experiences for their customers with our unique solutions. Window film has so many various benefits to offer including safety and security, UV protection, energy efficiency, and more. Whether you are looking for loss prevention security film for your East Falls boutique or would like custom decorative branding for your Northern Liberties storefront, we have got you covered.",
    benefits_heading="The Benefits of Window Film for Your Philadelphia Retail Shop, Storefront, or Mall",
    b1_h="UV Protection",
    b1_body="Keep your investments and storefront displays safe with UV-blocking window film. Perfect for maintaining an optically clear glass display while ensuring everything inside stays safe from harmful UV damage.",
    b1_href="/benefits/uv-blocking-window-film-philadelphia/",
    b2_h="Safety and Security",
    b2_body="Deter intruders and guard against smash-and-grabs with safety and security window film. This innovative, durable film works by adding a thick layer of protection to your glass windows and doors. Mitigate glass hazards with this 24/7 passive security system.",
    b2_href="/benefits/safety-and-security/",
    b3_h="Bird Strike Prevention",
    b3_body="For properties prone to bird collisions, these events can be disruptive and troublesome for building occupants. Bird strike prevention window film helps alert birds of the location of your glass windows and doors to help promote bird conservation and minimize maintenance needs.",
    b3_href="/benefits/bird-strike-prevention/",
    closing_h="Work With Philadelphia's Leading Retail Window Film Contractor",
    closing_body="Window Film Philadelphia proudly offers premium retail window film in Philadelphia for shops, storefronts, and malls. Our specialized solutions are designed to enhance the customer experience and support your business goals. Contact us today to get started on your project!",
    img1="/images/2021-09-retail-window-film-philadelphia.png",
    img2="/images/mall-window-film-philadelphia.jpg",
    img3="/images/security-window-film-philadelphia.jpg",
    img4="/images/bird-divert-film-philadelphia.jpg",
    img5="/images/2021-09-storefront-window-film-philadelphia.jpg",
    alt1="Retail window film Philadelphia",
    alt2="UV protection retail window film Philadelphia",
    alt3="Safety security retail window film Philadelphia",
    alt4="Bird strike prevention retail Philadelphia",
    alt5="Retail storefront window film contractor Philadelphia",
),

"schools-universities": make_page(
    slug="schools-universities",
    title="School Window Film in Philadelphia | Window Film Philadelphia",
    desc="Enhance comfort, safety, and interior performance for campuses with school window film in Philadelphia, creating brighter, more efficient learning spaces.",
    h1="School Window Film in Philadelphia",
    hero_img="/images/school-window-film-philadelphia.webp",
    hero_alt="School window film Philadelphia",
    intro_body="Educational institutions benefit greatly from school window film in Philadelphia because it naturally helps create safer, brighter, and more comfortable learning environments without disrupting daily routines. These films control heat, reduce glare, and maintain a balanced atmosphere in classrooms, allowing students to stay focused and productive. At the same time, the added privacy and security features give campuses the extra protection they need in today's educational settings.",
    benefits_heading="The Benefits of Window Film for Your Philadelphia School",
    b1_h="Privacy",
    b1_body="Privacy window tinting is an important feature as it ultimately improves the safety and security of your campus. Block unwanted views in while maintaining clear views from the inside out. Privacy tinting can also provide other upgrades for your school.",
    b1_href="/benefits/privacy-window-film-philadelphia/",
    b2_h="Safety and Security",
    b2_body="Keep your students and teachers safe with this cost-effective security solution. Prevent broken glass hazards from impacting building occupant safety during natural disasters, break-ins, and other high-impact events.",
    b2_href="/benefits/safety-and-security/",
    b3_h="Glare Reduction",
    b3_body="For properties lacking foliage, glare can be a common concern throughout certain times of the day. Do not let glare impact productivity by increasing headaches, eye fatigue, and more. Glare reduction film effectively reduces glare to create a more comfortable screen-viewing environment.",
    b3_href="/benefits/glare-reduction/",
    closing_h="Work With Philadelphia's Leading School Window Film Contractor",
    closing_body="Window Film Philadelphia is honored to provide leading window film solutions for schools in Philadelphia. Our team has worked with numerous campuses in order to create a better, safer learning environment and would love the opportunity to help you improve your space. Contact us for more information!",
    img1="/images/school-window-film-philadelphia.webp",
    img2="/images/window-film-philadelphia-school.jpg",
    img3="/images/security-film-philadelphia-schools-2.jpg",
    img4="/images/glare-reduction-window-film-philadelphia.jpg",
    img5="/images/university-window-film-philadelphia.webp",
    alt1="School window film Philadelphia",
    alt2="Privacy window film school Philadelphia",
    alt3="Safety security window film school Philadelphia",
    alt4="Glare reduction window film school Philadelphia",
    alt5="University window film Philadelphia",
),

"secured-buildings": make_page(
    slug="secured-buildings",
    title="High Security Window Film in Philadelphia | Window Film Philadelphia",
    desc="Protect your buildings with high security window film in Philadelphia. Perfect for banks, data centers, military bases, and police stations. Contact now!",
    h1="High Security Window Film in Philadelphia",
    hero_img="/images/secured-building-window-film-philadelphia_11zon.jpg",
    hero_alt="Secured building window film Philadelphia",
    intro_body="High security window film in Philadelphia provides top-level protection for secured buildings such as banks, police stations, data centers, and military bases. Our expert team handles large-scale projects requiring advanced security solutions. The film also reduces glare, improves energy efficiency, and enhances privacy. Whether you need bomb blast protection for a Bustleton data center or security film for a Nicetown-Tioga bank, this solution ensures your building remains safe and secure.",
    benefits_heading="Advantages of Premium Security Window Film in Philadelphia",
    b1_h="Bomb Blast Protection",
    b1_body="Defend against high-impact events including natural disasters, explosions, and other threats with this comprehensive safety and security solution. Mitigate broken glass hazards, keeping building occupants safe from potential injury and death.",
    b1_href="/benefits/blast-mitigation/",
    b2_h="Ballistic Resistance",
    b2_body="For premium security needs, ballistic resistance security film provides high-impact resistance against gunfire, explosions, natural disasters, and much more. This window film solution is the best alternative to ballistic-resistant glass, providing a more affordable option.",
    b2_href="/benefits/ballistic-resistance/",
    b3_h="Safety and Security",
    b3_body="Deter intruders and guard against smash-and-grabs with safety and security window film. This innovative, durable film works by adding a thick layer of protection to your glass windows and doors. Mitigate glass hazards with this 24/7 passive security system.",
    b3_href="/benefits/safety-and-security/",
    closing_h="Partner with Philadelphia's Top Security Window Film Experts",
    closing_body="Window Film Philadelphia is honored to provide leading security window film solutions in Philadelphia for secured buildings. We have helped countless secured properties including banks, data centers, military bases, police stations, and more achieve premium safety and security and would love the opportunity to help you achieve your project goals. Contact us for more information!",
    img1="/images/secured-building-window-film-philadelphia_11zon.jpg",
    img2="/images/bank-window-film-philadelphia_11zon.jpg",
    img3="/images/ballistic-resistant-window-film-philadelphia.jpg",
    img4="/images/police-station-window-film-philadelphia_11zon.jpg",
    img5="/images/2021-09-secured-building-window-film-philadelphia.jpg",
    alt1="Secured building window film Philadelphia",
    alt2="Bomb blast protection secured building Philadelphia",
    alt3="Ballistic resistance window film Philadelphia",
    alt4="Safety security window film secured building Philadelphia",
    alt5="High security window film contractor Philadelphia",
),

}

written = 0
for slug, content in pages.items():
    path = os.path.join(DIR, slug + ".astro")
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    written += 1
    print(f"  WROTE {slug}.astro")

print(f"\nDone: {written} pages written.")
