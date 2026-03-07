export const services = [
  {
    id: 'branding',
    category: 'Branding & Digital Identity',
    title: 'Brand Identity Systems',
    description:
      'Logos, brand guidelines, and digital kits that feel modern, premium, and Africa-first.',
    highlights: ['Logo design', 'Brand guides', 'Social media kits'],
    icon: '🎨',
    accent: 'var(--zim-orange)',
    route: '/services/branding',
  },
  {
    id: 'websites',
    category: 'Web Development',
    title: 'Business Websites',
    description:
      'Fast, responsive websites built for conversions, SEO, and performance across devices.',
    highlights: ['Landing pages', 'Company websites', 'SEO-ready builds'],
    icon: '🌐',
    accent: 'var(--zim-blue)',
    route: '/services/web-development',
  },
  {
    id: 'webapps',
    category: 'Full-Stack Solutions',
    title: 'Custom Web Apps',
    description:
      'Secure full-stack systems that automate work, centralize data, and scale with you.',
    highlights: ['Dashboards', 'Portals', 'Integrations'],
    icon: '⚙️',
    accent: 'var(--zim-green)',
    route: '/services/web-development',
  },
  {
    id: 'automation',
    category: 'AI & Automation',
    title: 'Automation & Integrations',
    description:
      'Connect tools, reduce manual work, and create reliable workflows that save time.',
    highlights: ['API integrations', 'Internal tooling', 'Operational workflows'],
    icon: '🤖',
    accent: 'var(--zim-blue)',
    route: '/services/ai-automation',
  },
  {
    id: 'mobile',
    category: 'Mobile Development',
    title: 'Cross-Platform Mobile Apps',
    description:
      'Mobile experiences that are clean, fast, and consistent across iOS and Android.',
    highlights: ['MVP apps', 'Internal apps', 'Customer apps'],
    icon: '📱',
    accent: 'var(--zim-green)',
    route: '/services/mobile-app-development',
  },
  {
    id: 'consulting',
    category: 'Digital Strategy',
    title: 'Digital Strategy Consulting',
    description:
      'Clarity-first workshops to shape your product, brand, and digital roadmap.',
    highlights: ['Discovery sessions', 'MVP planning', 'Transformation strategy'],
    icon: '🧭',
    accent: 'var(--zim-orange)',
    route: '/services/digital-strategy',
  },
  {
    id: 'ecommerce',
    category: 'E-Commerce',
    title: 'E-Commerce Solutions',
    description:
      'End-to-end online stores with payments, inventory, and marketing built in.',
    highlights: ['Custom stores', 'Payment integration', 'E-Commerce SEO'],
    icon: '🛒',
    accent: 'var(--zim-blue)',
    route: '/services/e-commerce',
  },
  {
    id: 'marketing',
    category: 'Digital Marketing',
    title: 'Digital Marketing',
    description:
      'Data-driven campaigns across social, search, and email that grow your audience.',
    highlights: ['Social media', 'SEO & content', 'Paid advertising'],
    icon: '📣',
    accent: 'var(--zim-orange)',
    route: '/services/digital-marketing',
  },
]


export const serviceCategories = Array.from(
  new Set(services.map((s) => s.category)),
)
