// ═══════════════════════════════════════════════════════════════
//  Blog Category Definitions
//  Benefits = every item from the Benefits nav menu
//  Cities   = every city on the /cities/ page
// ═══════════════════════════════════════════════════════════════

export interface Category {
  slug: string;
  label: string;
  description: string;
  href: string; // links to the related service/city page
  group: 'benefit' | 'city';
}

export const benefitCategories: Category[] = [
  {
    slug: 'energy-savings',
    label: 'Energy Savings',
    description: 'Window film that reduces heat gain and cooling costs for Philadelphia homes and businesses.',
    href: '/benefits/energy-savings/',
    group: 'benefit',
  },
  {
    slug: 'uv-protection',
    label: 'UV Protection',
    description: 'Block up to 99% of UV rays to protect furniture, flooring, and skin.',
    href: '/services/uv-protection-film/',
    group: 'benefit',
  },
  {
    slug: 'privacy-film',
    label: 'Privacy Film',
    description: 'One-way mirror, frosted, and decorative films for residential and commercial privacy.',
    href: '/benefits/privacy-window-film-philadelphia/',
    group: 'benefit',
  },
  {
    slug: 'glare-reduction',
    label: 'Glare Reduction',
    description: 'Reduce eye strain and screen glare without sacrificing natural light.',
    href: '/benefits/glare-reduction/',
    group: 'benefit',
  },
  {
    slug: 'anti-graffiti',
    label: 'Anti-Graffiti',
    description: 'Sacrificial films that protect glass surfaces from vandalism and graffiti damage.',
    href: '/benefits/anti-graffiti/',
    group: 'benefit',
  },
  {
    slug: 'safety-security',
    label: 'Safety & Security',
    description: 'Safety and security window films that hold shattered glass together on impact.',
    href: '/benefits/safety-and-security/',
    group: 'benefit',
  },
  {
    slug: 'solar-control',
    label: 'Solar Control',
    description: 'Advanced solar control films that block heat and glare while preserving views.',
    href: '/services/solar/',
    group: 'benefit',
  },
  {
    slug: 'decorative-promotional',
    label: 'Decorative & Promotional',
    description: 'Custom graphics, frosted patterns, and branded films for any glass surface.',
    href: '/benefits/decorative-promotional/',
    group: 'benefit',
  },
  {
    slug: 'exterior-refinishing',
    label: 'Exterior Refinishing',
    description: 'Surface update films and wraps that transform building exteriors without replacement.',
    href: '/benefits/exterior-building-wraps/',
    group: 'benefit',
  },
  {
    slug: 'mirror-refinishing',
    label: 'Mirror Refinishing',
    description: 'Cost-effective mirror and surface refinishing films for elevators and interiors.',
    href: '/benefits/mirror-refinishing/',
    group: 'benefit',
  },
  {
    slug: 'bird-strike',
    label: 'Bird Strike Prevention',
    description: 'Patterned films visible to birds that prevent fatal collisions with glass.',
    href: '/benefits/bird-strike-prevention/',
    group: 'benefit',
  },
  {
    slug: 'school-security',
    label: 'School Security',
    description: 'Security window film for schools and universities that delays forced entry.',
    href: '/benefits/school-security-window-film/',
    group: 'benefit',
  },
  {
    slug: 'bomb-blast',
    label: 'Bomb Blast Protection',
    description: 'Blast mitigation window film that contains glass fragments during an explosion.',
    href: '/benefits/blast-mitigation/',
    group: 'benefit',
  },
  {
    slug: 'ballistic-resistant',
    label: 'Ballistic Resistant Film',
    description: 'High-performance security glazing systems engineered to resist ballistic threats.',
    href: '/benefits/ballistic-resistance/',
    group: 'benefit',
  },
];

export const cityCategories: Category[] = [
  {
    slug: 'philadelphia',
    label: 'Philadelphia',
    description: 'Window film tips, guides, and local insights for Philadelphia homeowners and businesses.',
    href: '/cities/philadelphia/',
    group: 'city',
  },
  {
    slug: 'camden',
    label: 'Camden',
    description: 'Window film resources for Camden County and South Jersey communities.',
    href: '/cities/camden/',
    group: 'city',
  },
  {
    slug: 'reading',
    label: 'Reading',
    description: 'Window film guides for Berks County homes and commercial properties in Reading, PA.',
    href: '/cities/reading/',
    group: 'city',
  },
  {
    slug: 'upper-darby-township',
    label: 'Upper Darby Township',
    description: 'Window film resources for Delaware County residents in Upper Darby and surrounding communities.',
    href: '/cities/upper-darby-township/',
    group: 'city',
  },
];

export const allCategories: Category[] = [...benefitCategories, ...cityCategories];

export function getCategoryBySlug(slug: string): Category | undefined {
  return allCategories.find((c) => c.slug === slug);
}

export function getCategoryLabel(slug: string): string {
  return getCategoryBySlug(slug)?.label ?? slug;
}
