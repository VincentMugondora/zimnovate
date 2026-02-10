import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Hero from '../components/Hero.jsx'
import ClientLogos from '../components/ClientLogos.jsx'
import { services } from '../data/services.js'
import { portfolioProjects } from '../data/portfolio.js'

const MotionDiv = motion.div

const Home = () => {
  const bestProjects = portfolioProjects.slice(0, 3)
  const serviceList = services
  const bestProjectImages = [
    'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
  ]
  const bestProjectLinks = [
    '/portfolio/zimfresh',
    '/portfolio/swiftpay',
    '/portfolio/royal-home-care',
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
    'Jakarta, Indonesia',
    'Kuala Lumpur, Malaysia',
    'Sydney, Australia',
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
    },
    {
      id: 'i2',
      title: 'UI/UX that converts',
      excerpt: 'Simple design choices that improve clarity and user confidence.',
    },
    {
      id: 'i3',
      title: 'Speed wins',
      excerpt: 'Performance-first UI that feels premium on every device.',
    },
  ]

  return (
    <>
      <Helmet>
        <title>Zimnovate – Digital Agency in Zimbabwe | Web, Apps & Branding</title>
        <meta name="description" content="Zimnovate helps Zimbabwean businesses grow with modern web design, app development, branding, SEO, and digital strategy. Smart tech for African businesses." />
        <meta name="keywords" content="digital agency zimbabwe, web design harare, app development zimbabwe, branding agency, SEO zimbabwe" />
        <link rel="canonical" href="https://zimnovate.co.zw/" />
        <meta property="og:title" content="Zimnovate – Digital Agency in Zimbabwe | Web, Apps & Branding" />
        <meta property="og:description" content="Zimnovate helps Zimbabwean businesses grow with modern web design, app development, branding, SEO, and digital strategy." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zimnovate.co.zw/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zimnovate – Digital Agency in Zimbabwe | Web, Apps & Branding" />
        <meta name="twitter:description" content="Zimnovate helps Zimbabwean businesses grow with modern web design, app development, branding, SEO, and digital strategy." />
        <meta name="twitter:image" content="https://zimnovate.co.zw/logo1.png" />
      </Helmet>
      <div className="bg-[var(--zim-bg)] overflow-x-hidden">
      <Hero />
      <ClientLogos />

      <section>
        <div className="mx-auto max-w-7xl px-12 py-16 md:px-16 md:py-20 lg:px-20 overflow-x-hidden">
          <div className="grid items-center gap-3 md:grid-cols-[auto_1fr_auto]">
            <div className="text-3xl font-extrabold tracking-tight text-[var(--zim-black)] md:text-4xl">
              BEST PROJECT
            </div>
            <div className="text-center text-sm text-[var(--zim-fg)]/70 md:block">
              Explore more of our best projects.
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center rounded-full bg-[var(--zim-green)] px-6 py-2 text-xs font-semibold text-[var(--zim-black)] hover:brightness-110"
            >
              View more
            </Link>
          </div>

          <div className="mt-5 border-t border-[var(--zim-border)]" />

          <div className="mt-8 grid gap-12 md:grid-cols-3">
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
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                <Link
                  to={bestProjectLinks[idx] || '/portfolio'}
                  className="absolute right-4 bottom-4 grid h-12 w-12 place-items-center rounded-full bg-[var(--zim-green)] text-[var(--zim-black)] shadow-[0_14px_30px_rgba(124,255,95,0.35)] transition-transform duration-200 hover:brightness-110 group-hover:-translate-y-0.5 md:right-5 md:bottom-5"
                  aria-label={`Open ${p.title}`}
                >
                  <ArrowUpRight size={18} />
                </Link>

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
          </div>
        </div>
      </section>

      <section className="bg-[var(--zim-gray)]/40">
        <div className="mx-auto max-w-7xl px-12 py-16 md:px-16 md:py-20 lg:px-20">
          <div className="grid items-center gap-3 md:grid-cols-[auto_1fr_auto]">
            <div className="text-3xl font-extrabold tracking-tight text-[var(--zim-black)] md:text-4xl">
              OUR SERVICES
            </div>
            <div className="hidden text-center text-sm text-[var(--zim-fg)]/70 md:block">
              This is part of our service that can give you satisfaction.
            </div>
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-full bg-[var(--zim-green)] px-6 py-2 text-xs font-semibold text-[var(--zim-black)] hover:brightness-110"
            >
              View more
            </Link>
          </div>

          <div className="mt-6 border-t border-[var(--zim-border)]" />

          <div className="mt-8 grid gap-10 md:grid-cols-2 md:items-start">
            {/* Left Side - Horizontal Scroll Images */}
            <div className="relative">
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
                      src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=400&q=80"
                      alt="Brand Identity"
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
                      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80"
                      alt="Web Development"
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
                      src="https://images.unsplash.com/photo-1507099985932-87a4520ed1d3?auto=format&fit=crop&w=400&q=80"
                      alt="UI/UX Design"
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
                      src="https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?auto=format&fit=crop&w=400&q=80"
                      alt="Automation"
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
                      src="https://images.unsplash.com/photo-1508830524289-0adcbe822b40?auto=format&fit=crop&w=400&q=80"
                      alt="Strategy"
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
                      src="https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=400&q=80"
                      alt="E-Commerce"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
                    E-Commerce
                  </div>
                </div>
              </MotionDiv>

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

      <section>
        <div className="mx-auto max-w-7xl px-12 py-16 md:px-16 md:py-20 lg:px-20">
          <div className="grid items-center gap-3 md:grid-cols-[auto_1fr_auto]">
            <div className="text-3xl font-extrabold tracking-tight text-[var(--zim-black)] md:text-4xl">
              LATEST INSIGHT
            </div>
            <div className="hidden text-center text-sm text-[var(--zim-fg)]/70 md:block">
              Update the latest news from day to day.
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center justify-center rounded-full bg-[var(--zim-green)] px-6 py-2 text-xs font-semibold text-[var(--zim-black)] hover:brightness-110"
            >
              View more
            </Link>
          </div>

          <div className="mt-6 border-t border-[var(--zim-border)]" />

          <div className="mt-8 grid gap-10 md:grid-cols-3">
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
                      src="/imgs/agency.jpg"
                      alt={i.title}
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
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-12 py-16 md:px-16 md:py-20 lg:px-20">
          <div className="grid items-center gap-3 md:grid-cols-[auto_1fr_auto]">
            <div className="text-3xl font-extrabold tracking-tight text-[var(--zim-black)] md:text-4xl">
              MEET THE TEAM
            </div>
            <div className="hidden md:block" />
            <Link
              to="/team"
              className="inline-flex items-center justify-center rounded-full bg-[var(--zim-green)] px-6 py-2 text-xs font-semibold text-[var(--zim-black)] hover:brightness-110"
            >
              View all
            </Link>
          </div>

          <div className="mt-6 border-t border-[var(--zim-border)]" />

          <div className="mt-10 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
            {designers.map((d) => (
              <Link key={d.id} to={`/team/${d.id}`} className="group block">
                <div className="overflow-hidden rounded-[32px] bg-[#f3f3f3] shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
                  <div className="aspect-[4/5] w-full">
                    <img
                      src={d.photo || '/imgs/agency.jpg'}
                      alt={d.name}
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

      {/* Quick Links Section for Internal Linking */}
      <section className="bg-[var(--zim-gray)]/30">
        <div className="mx-auto max-w-7xl px-12 py-12 md:px-16 md:py-16 lg:px-20">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--zim-fg)]/60">Services</h3>
              <div className="space-y-2">
                <Link to="/services/web-development" className="block text-sm text-[var(--zim-fg)]/80 hover:text-[var(--zim-black)]">Web Development</Link>
                <Link to="/services/mobile-app-development" className="block text-sm text-[var(--zim-fg)]/80 hover:text-[var(--zim-black)]">Mobile Apps</Link>
                <Link to="/services/branding" className="block text-sm text-[var(--zim-fg)]/80 hover:text-[var(--zim-black)]">Branding</Link>
                <Link to="/services/digital-marketing" className="block text-sm text-[var(--zim-fg)]/80 hover:text-[var(--zim-black)]">Digital Marketing</Link>
                <Link to="/services" className="block text-sm text-[#F4D47C] hover:text-[#F4D47C]/80">View All Services →</Link>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--zim-fg)]/60">Company</h3>
              <div className="space-y-2">
                <Link to="/about" className="block text-sm text-[var(--zim-fg)]/80 hover:text-[var(--zim-black)]">About Us</Link>
                <Link to="/team" className="block text-sm text-[var(--zim-fg)]/80 hover:text-[var(--zim-black)]">Our Team</Link>
                <Link to="/careers" className="block text-sm text-[var(--zim-fg)]/80 hover:text-[var(--zim-black)]">Careers</Link>
                <Link to="/blog" className="block text-sm text-[var(--zim-fg)]/80 hover:text-[var(--zim-black)]">Blog</Link>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--zim-fg)]/60">Resources</h3>
              <div className="space-y-2">
                <Link to="/portfolio" className="block text-sm text-[var(--zim-fg)]/80 hover:text-[var(--zim-black)]">Portfolio</Link>
                <Link to="/testimonials" className="block text-sm text-[var(--zim-fg)]/80 hover:text-[var(--zim-black)]">Testimonials</Link>
                <Link to="/get-started" className="block text-sm text-[var(--zim-fg)]/80 hover:text-[var(--zim-black)]">Get Started</Link>
                <Link to="/contact" className="block text-sm text-[var(--zim-fg)]/80 hover:text-[var(--zim-black)]">Contact Us</Link>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--zim-fg)]/60">Legal</h3>
              <div className="space-y-2">
                <Link to="/terms" className="block text-sm text-[var(--zim-fg)]/80 hover:text-[var(--zim-black)]">Terms of Service</Link>
                <Link to="/privacy" className="block text-sm text-[var(--zim-fg)]/80 hover:text-[var(--zim-black)]">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
    </>
  )
}

export default Home
