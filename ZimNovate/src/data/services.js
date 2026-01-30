export const services = [
  {
    id: 'branding',
    category: 'Branding & Digital Identity',
    title: 'Brand Identity Systems',
    description:
      'Logos, brand guidelines, and digital kits that feel modern, premium, and Africa-first.',
    highlights: ['Logo design', 'Brand guides', 'Social media kits'],
    icon: 'megaphone',
    accent: 'var(--zim-orange)',
  },
  {
    id: 'websites',
    category: 'Web Development',
    title: 'Business Websites',
    description:
      'Fast, responsive websites built for conversions, SEO, and performance across devices.',
    highlights: ['Landing pages', 'Company websites', 'SEO-ready builds'],
    icon: 'monitor',
    accent: 'var(--zim-blue)',
  },
  {
    id: 'webapps',
    category: 'Full-Stack Solutions',
    title: 'Custom Web Apps',
    description:
      'Secure full-stack systems that automate work, centralize data, and scale with you.',
    highlights: ['Dashboards', 'Portals', 'Integrations'],
    icon: 'layers',
    accent: 'var(--zim-green)',
  },
  {
    id: 'automation',
    category: 'Full-Stack Solutions',
    title: 'Automation & Integrations',
    description:
      'Connect tools, reduce manual work, and create reliable workflows that save time.',
    highlights: ['API integrations', 'Internal tooling', 'Operational workflows'],
    icon: 'workflow',
    accent: 'var(--zim-blue)',
  },
  {
    id: 'mobile',
    category: 'Mobile Development',
    title: 'Cross-Platform Mobile Apps',
    description:
      'Mobile experiences that are clean, fast, and consistent across iOS and Android.',
    highlights: ['MVP apps', 'Internal apps', 'Customer apps'],
    icon: 'smartphone',
    accent: 'var(--zim-green)',
  },
  {
    id: 'consulting',
    category: 'Consulting',
    title: 'Digital Strategy Consulting',
    description:
      'Clarity-first workshops to shape your product, brand, and digital roadmap.',
    highlights: ['Discovery sessions', 'MVP planning', 'Transformation strategy'],
    icon: 'sparkles',
    accent: 'var(--zim-orange)',
  },
]

export const serviceCategories = Array.from(
  new Set(services.map((s) => s.category)),
)
