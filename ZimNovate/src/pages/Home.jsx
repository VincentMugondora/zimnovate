import React, { Suspense, lazy } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import SEOHead from '../components/SEOHead.jsx'
import Hero from '../components/Hero.jsx'
import ClientLogos from '../components/ClientLogos.jsx'
import { services } from '../data/services.js'
import { portfolioProjects } from '../data/portfolio.js'

// Lazy load framer-motion for below-fold animations
const MotionDiv = lazy(() => import('../components/LazyMotion.jsx').then(m => ({ default: m.ScrollTriggeredMotion })))

const Home = () => {
  const bestProjects = portfolioProjects.slice(0, 3)
  const serviceList = services
  const bestProjectImages = [
    '/projects/Screenshot%202026-03-06%20112925.png',
    '/projects/Screenshot%202026-03-06%20113059.png',
    '/projects/Screenshot%202026-03-07%20140515.png',
  ]
  const bestProjectLinks = [
    'https://hustlr.chat',
    'https://mugoplumbingsolutions.co.zw',
    'https://www.greaterheightsacademy.co.zw',
  ]
  const serviceLinks = {
    branding: '/services/branding',
    websites: '/services/web-development',
    webapps: '/services/web-development',
    automation: '/services/ai-automation',
    mobile: '/services/mobile-app-development',
    consulting: '/services/digital-strategy',
  }
  const bestLocations = [
    'Harare, Zimbabwe',
    'Harare, Zimbabwe',
    'Harare, Zimbabwe',
  ]

  const designers = [
    {
      id: 'd1',
      name: 'Vincent Mugondora',
      role: 'Founder & Software Engineer',
      photo: '/team/vincent-mugondora.png',
    },
    {
      id: 'd2',
      name: 'Kayden Mamu',
      role: 'Senior Product Designer',
      photo: '/team/kayden-mamu.png',
    },
    {
      id: 'd3',
      name: 'Roy Makanjira',
      role: 'Digital Marketer and Graphic Designer',
      photo: '/team/Roy-makanjira.jpeg',
    },
    {
      id: 'd4',
      name: 'Tawanda Muchenu',
      role: 'Data Analyst',
      photo: '/team/tawanda-muchenu.png',
    },
  ]

  const insights = [
    {
      id: 'i1',
      title: 'Why a website matters',
      excerpt: 'A quick guide to credibility, trust, and conversions for modern brands.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=75&fm=webp',
    },
    {
      id: 'i2',
      title: 'UI/UX that converts',
      excerpt: 'Simple design choices that improve clarity and user confidence.',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=800&q=75&fm=webp',
    },
    {
      id: 'i3',
      title: 'Speed wins',
      excerpt: 'Performance-first UI that feels premium on every device.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=75&fm=webp',
    },
  ]

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Zimnovate — Web Development & Digital Solutions in Zimbabwe",
    "description": "Zimnovate is a Zimbabwean digital agency specializing in website development, e-commerce, mobile apps, branding, and custom software solutions that help businesses grow in Harare and across Zimbabwe.",
    "url": "https://zimnovate.co.zw/",
    "inLanguage": "en-ZW",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Zimnovate",
      "url": "https://zimnovate.co.zw"
    },
    "about": {
      "@type": "Organization",
      "name": "Zimnovate",
      "description": "Digital agency in Zimbabwe offering web development, mobile apps, branding, and digital marketing services."
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://zimnovate.co.zw/"
      }]
    }
  }

  return (
    <>
      <SEOHead
        title="Zimnovate — Web Development & Digital Solutions in Zimbabwe"
        description="Zimnovate is a Zimbabwean digital agency specializing in website development, e-commerce, mobile apps, branding, and custom software solutions that help businesses grow in Harare and across Zimbabwe."
        keywords="web development Zimbabwe, digital agency Zimbabwe, website design Harare, e-commerce website Zimbabwe, custom software development Zimbabwe, affordable website design Zimbabwe, mobile app development Zimbabwe, branding agency Zimbabwe, SEO Zimbabwe, digital marketing Zimbabwe"
        canonical="https://zimnovate.co.zw/"
        ogType="website"
        schema={homeSchema}
      />
      <div className="bg-[var(--zim-bg)] overflow-x-hidden">
      <Hero />
      <ClientLogos />

      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 py-10 sm:py-16 md:px-16 md:py-20 lg:px-20 overflow-x-hidden">
          <div className="grid items-center gap-3 md:grid-cols-[auto_1fr_auto]">
            <h2 className="text-3xl font-extrabold tracking-tight text-[var(--zim-black)] md:text-4xl">
              LATEST PROJECTS
            </h2>
            <div className="text-center text-sm text-[var(--zim-fg)] md:block">
              Explore more of our latest projects.
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center rounded-full bg-[var(--zim-green)] px-6 py-2 text-xs font-semibold text-[var(--zim-black)] hover:brightness-110"
              aria-label="View more projects in portfolio"
            >
              View more
            </Link>
          </div>

          <div className="mt-5 border-t border-[var(--zim-border)]" />

          <div className="mt-8 grid gap-12 md:grid-cols-3">
            <Suspense fallback={<div className="grid gap-12 md:grid-cols-3">{bestProjects.map((p) => <div key={p.id} className="h-64 bg-gray-200 rounded-xl" />)}</div>}>
            {bestProjects.map((p, idx) => (
              <MotionDiv
                key={p.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="group relative"
              >
                <div className="relative rounded-[34px] bg-gradient-to-b from-[#f5f5f5] to-[#fafafa] p-5 shadow-[0_26px_60px_rgba(0,0,0,0.10)] ring-1 ring-black/5">
                  <div className="aspect-[10/9] overflow-hidden rounded-[26px] bg-white ring-1 ring-black/5 shadow-[0_10px_24px_rgba(0,0,0,0.06)]">
                    <img
                      src={bestProjectImages[idx] || (Array.isArray(p.images) && p.images.length ? p.images[0] : '/imgs/agency.jpg')}
                      alt={p.title}
                      title={`${p.title} - Zimnovate Portfolio Project`}
                      height="540"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                <a
                  href={bestProjectLinks[idx] || '/portfolio'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute right-4 bottom-4 grid h-12 w-12 place-items-center rounded-full bg-[var(--zim-green)] text-[var(--zim-black)] shadow-[0_14px_30px_rgba(124,255,95,0.35)] transition-transform duration-200 hover:brightness-110 group-hover:-translate-y-0.5 md:right-5 md:bottom-5"
                  aria-label={`Open ${p.title}`}
                >
                  <ArrowUpRight size={18} />
                </a>

                <div className="mt-4">
                  <div className="text-xl font-semibold text-[var(--zim-black)] md:text-2xl">
                    {p.title}
                  </div>
                  <div className="mt-1 text-sm text-[var(--zim-fg)]/60">
                    {p.location || bestLocations[idx] || ''}
                  </div>
                </div>
              </MotionDiv>
            ))}
            </Suspense>
          </div>
        </div>
      </section>

      <section className="bg-[var(--zim-gray)]/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 py-10 sm:py-16 md:px-16 md:py-20 lg:px-20">
          <div className="grid items-center gap-3 md:grid-cols-[auto_1fr_auto]">
            <h2 className="text-3xl font-extrabold tracking-tight text-[var(--zim-black)] md:text-4xl">
              OUR SERVICES
            </h2>
            <div className="hidden text-center text-sm text-[var(--zim-fg)] md:block">
              This is part of our service that can give you satisfaction.
            </div>
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-full bg-[var(--zim-green)] px-6 py-2 text-xs font-semibold text-[var(--zim-black)] hover:brightness-110"
              aria-label="View all our services"
            >
              View more
            </Link>
          </div>

          <div className="mt-6 border-t border-[var(--zim-border)]" />

          <div className="mt-8 grid gap-10 md:grid-cols-2 md:items-start">
            {/* Left Side - Horizontal Scroll Images */}
            <div className="relative">
              <Suspense fallback={<div className="flex gap-4 overflow-x-auto pb-4 pt-2"><div className="h-[280px] w-[200px] bg-gray-200 rounded-[20px]" /><div className="h-[280px] w-[200px] bg-gray-200 rounded-[20px]" /></div>}>
              <MotionDiv
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex gap-4 overflow-x-auto pb-4 pt-2 scrollbar-hide snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {/* Card 1 */}
                <div className="relative shrink-0 snap-center">
                  <div className="h-[280px] w-[200px] overflow-hidden rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.15)] ring-1 ring-black/5 transition-transform duration-300 hover:scale-105">
                    <img
                      src="https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=400&q=70&fm=webp"
                      alt="Brand identity design illustration"
                      title="Brand Identity"
                      width="200"
                      height="280"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
                    Branding
                  </div>
                </div>

                {/* Card 2 */}
                <div className="relative shrink-0 snap-center">
                  <div className="h-[280px] w-[200px] overflow-hidden rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.15)] ring-1 ring-black/5 transition-transform duration-300 hover:scale-105">
                    <img
                      src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=400&q=70&fm=webp"
                      alt="Web development coding interface"
                      title="Web Development Services"
                      width="200"
                      height="280"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
                    Web Dev
                  </div>
                </div>

                {/* Card 3 */}
                <div className="relative shrink-0 snap-center">
                  <div className="h-[280px] w-[200px] overflow-hidden rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.15)] ring-1 ring-black/5 transition-transform duration-300 hover:scale-105">
                    <img
                      src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=400&q=70&fm=webp"
                      alt="UI and UX design wireframes"
                      title="UI/UX Design"
                      width="200"
                      height="280"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
                    UI/UX
                  </div>
                </div>

                {/* Card 4 */}
                <div className="relative shrink-0 snap-center">
                  <div className="h-[280px] w-[200px] overflow-hidden rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.15)] ring-1 ring-black/5 transition-transform duration-300 hover:scale-105">
                    <img
                      src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400&q=70&fm=webp"
                      alt="Business automation tools and workflow"
                      title="Automation Services"
                      width="200"
                      height="280"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
                    Automation
                  </div>
                </div>

                {/* Card 5 */}
                <div className="relative shrink-0 snap-center">
                  <div className="h-[280px] w-[200px] overflow-hidden rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.15)] ring-1 ring-black/5 transition-transform duration-300 hover:scale-105">
                    <img
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=70&fm=webp"
                      alt="Digital strategy planning board"
                      title="Digital Strategy"
                      width="200"
                      height="280"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
                    Strategy
                  </div>
                </div>

                {/* Card 6 */}
                <div className="relative shrink-0 snap-center">
                  <div className="h-[280px] w-[200px] overflow-hidden rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.15)] ring-1 ring-black/5 transition-transform duration-300 hover:scale-105">
                    <img
                      src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&q=70&fm=webp"
                      alt="E-commerce website design layout"
                      title="E-Commerce Solutions"
                      width="200"
                      height="280"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
                    E-Commerce
                  </div>
                </div>
              </MotionDiv>
              </Suspense>

              {/* Scroll indicator */}
              <div className="mt-2 flex items-center justify-center gap-1">
                <div className="h-1 w-8 rounded-full bg-[var(--zim-green)]" />
                <div className="h-1 w-1.5 rounded-full bg-[var(--zim-fg)]/20" />
                <div className="h-1 w-1.5 rounded-full bg-[var(--zim-fg)]/20" />
                <span className="ml-2 text-[10px] text-[var(--zim-fg)]/40">Scroll</span>
              </div>
            </div>

            <div className="rounded-2xl bg-[var(--zim-bg)]">
              <div className="divide-y divide-[var(--zim-border)]">
                {serviceList.map((s, idx) => (
                  <div key={s.id} className="grid grid-cols-[auto_1fr_auto] items-start gap-3 py-4">
                    <div className="text-[10px] font-semibold text-[var(--zim-fg)]/50">
                      {(idx + 1).toString().padStart(2, '0')}
                    </div>
                    <div>
                      <div className={idx === 1 ? 'text-base font-extrabold text-[var(--zim-black)] md:text-lg' : 'text-base font-semibold text-[var(--zim-fg)]/80 md:text-lg'}>
                        {s.title}
                      </div>
                      <div className="mt-0.5 text-xs text-[var(--zim-fg)]/70">
                        {s.description}
                      </div>
                    </div>
                    <div>
                      <Link to={serviceLinks[s.id] || '/services'} aria-label={`Open ${s.title}`} className={idx === 1 ? 'grid h-7 w-7 place-items-center rounded-full bg-[var(--zim-green)] text-[var(--zim-black)]' : 'grid h-7 w-7 place-items-center rounded-full hover:bg-white/10'}>
                        <ArrowUpRight size={14} className={idx === 1 ? '' : 'text-[var(--zim-fg)]/60'} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Strip */}
      <section className="bg-white border-y border-[#F4D47C]/10">
        <div className="mx-auto max-w-7xl px-12 py-10 md:px-16 md:py-12 lg:px-20">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1A1A1A]/40">Trusted by</span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {[
              { name: 'Hustlr', service: 'Branding + Website' },
              { name: 'Mugo Plumbing', service: 'Custom Website' },
              { name: 'uncommon.org', service: 'Web App' },
              { name: 'Econet', service: 'Digital Strategy' },
              { name: 'NetOne', service: 'Web Development' },
              { name: 'TelOne', service: 'UI/UX Design' }
            ].map((client) => (
              <div key={client.name} className="flex flex-col items-center gap-1">
                <div className="h-8 flex items-center justify-center">
                  <span className="text-lg font-bold text-[#1A1A1A]/80 tracking-tight">{client.name}</span>
                </div>
                <span className="text-[10px] text-[#1A1A1A]/50 uppercase tracking-wider">{client.service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Strip */}
      <section className="bg-[#F9F5EF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 py-14 md:px-16 md:py-16 lg:px-20">
          <div className="text-center space-y-4 mb-10">
            <div className="inline-block rounded-full border border-[var(--zim-border)] bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#9cff5f] shadow-sm">Testimonials</div>
            <h2 className="text-2xl font-bold tracking-tight text-[#0F172A] md:text-3xl">
              What clients say
            </h2>
          </div>

          <div className="w-full">
            <div className="elfsight-app-dfa78d1e-4f6b-4f6f-9549-af95cfd406f6" data-elfsight-app-lazy></div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
          <div className="text-center space-y-4 mb-12">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">Pricing</div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
              Get Started
            </h2>
            <p className="text-sm text-[#1A1A1A]/70 max-w-lg mx-auto">
              Choose a package that fits your needs. All include delivery timelines and clear deliverables.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Starter Website',
                features: ['3–6 pages', 'Mobile-first', 'Delivered in 2–4 weeks'],
                price: 500,
                link: '/packages'
              },
              {
                title: 'Startup MVP',
                features: ['Web app + landing page', '3–6 weeks delivery', 'Scalable foundation'],
                price: 1500,
                link: '/startup-mvp'
              },
              {
                title: 'NGO Website',
                features: ['Project pages + reports', 'Storytelling-focused', 'Donation integration'],
                price: 600,
                link: '/ngo-websites'
              },
              {
                title: 'Automation Pack',
                features: ['Forms + email + dashboards', 'Saves 10+ hours/week', 'Ongoing support'],
                price: 800,
                link: '/packages'
              }
            ].map((pkg) => (
              <div 
                key={pkg.title}
                className="rounded-2xl border border-[#F4D47C]/20 bg-[#F9F5EF] p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-bold text-[#0F172A] mb-4">{pkg.title}</h3>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-[#1A1A1A]/80">
                      <span className="text-[#F4D47C] mt-0.5">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#F4D47C]/10">
                  <span className="text-sm font-semibold text-[#0F172A]">From ${pkg.price}</span>
                  <Link 
                    to={pkg.link}
                    className="inline-flex items-center text-xs font-semibold text-[#F4D47C] hover:text-[#F4D47C]/80 transition-colors"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/packages"
              className="inline-flex items-center justify-center rounded-full bg-[#0F172A] px-6 py-3 text-sm font-semibold text-white hover:brightness-110"
            >
              View All Packages
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 py-10 sm:py-16 md:px-16 md:py-20 lg:px-20">
          <div className="grid items-center gap-3 md:grid-cols-[auto_1fr_auto]">
            <h2 className="text-3xl font-extrabold tracking-tight text-[var(--zim-black)] md:text-4xl">
              LATEST INSIGHT
            </h2>
            <div className="hidden text-center text-sm text-[var(--zim-fg)] md:block">
              Update the latest news from day to day.
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center justify-center rounded-full bg-[var(--zim-green)] px-6 py-2 text-xs font-semibold text-[var(--zim-black)] hover:brightness-110"
              aria-label="View more blog articles"
            >
              View more
            </Link>
          </div>

          <div className="mt-6 border-t border-[var(--zim-border)]" />

          <div className="mt-8 grid gap-10 md:grid-cols-3">
            <Suspense fallback={<div className="grid gap-10 md:grid-cols-3">{insights.map((i) => <div key={i.id} className="h-48 bg-gray-200 rounded-xl" />)}</div>}>
            {insights.map((i, idx) => (
              <MotionDiv
                key={i.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: idx * 0.04 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-[22px] ring-1 ring-black/5 shadow-[0_22px_40px_rgba(0,0,0,0.10)]">
                  <div className="aspect-[10/9] overflow-hidden">
                    <img
                      src={i.image}
                      alt={i.title}
                      title={`${i.title} - Zimnovate Blog`}
                      height="540"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {idx === 0 && (
                  <Link
                    to="/blog"
                    aria-label={`Open ${i.title}`}
                    className="absolute right-3 bottom-3 md:-right-4 md:-bottom-4 grid h-10 w-10 place-items-center rounded-full bg-[var(--zim-green)] text-[var(--zim-black)] shadow-lg hover:brightness-110"
                  >
                    <ArrowUpRight size={16} />
                  </Link>
                )}

                <div className="mt-3">
                  <div className="text-base font-semibold text-[var(--zim-black)] md:text-lg">
                    {i.title}
                  </div>
                  <div className="mt-1 text-xs text-[var(--zim-fg)]/50">
                    {i.date}
                  </div>
                  <div className="mt-2 text-sm text-[var(--zim-fg)]/70 line-clamp-2">
                    {i.excerpt}
                  </div>
                </div>
              </MotionDiv>
            ))}
            </Suspense>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 py-10 sm:py-16 md:px-16 md:py-20 lg:px-20">
          <div className="grid items-center gap-3 md:grid-cols-[auto_1fr_auto]">
            <h2 className="text-3xl font-extrabold tracking-tight text-[var(--zim-black)] md:text-4xl">
              MEET THE TEAM
            </h2>
            <div className="hidden md:block" />
            <Link
              to="/team"
              className="inline-flex items-center justify-center rounded-full bg-[var(--zim-green)] px-6 py-2 text-xs font-semibold text-[var(--zim-black)] hover:brightness-110"
              aria-label="View all team members"
            >
              View all
            </Link>
          </div>

          <div className="mt-6 border-t border-[var(--zim-border)]" />

          <div className="mt-10 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
            {designers.map((d) => (
              <Link key={d.id} to={`/team/${d.id}`} className="group block">
                <div className="overflow-hidden rounded-[20px] sm:rounded-[32px] bg-[#f3f3f3] shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
                  <div className="aspect-[4/5] w-full">
                    <img
                      src={d.photo || '/imgs/agency.jpg'}
                      alt={`${d.name}, ${d.role} at Zimnovate`}
                      title={`${d.name} - Zimnovate Team`}
                      height="500"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <div className="text-xl font-bold text-[var(--zim-black)] lowercase">
                    {d.name.toLowerCase()}
                  </div>
                  <div className="mt-1 text-base text-[var(--zim-fg)]/60">
                    {d.role}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
    </>
  )
}

export default Home
