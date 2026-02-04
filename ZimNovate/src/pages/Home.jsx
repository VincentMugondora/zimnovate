import React from 'react'
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
  const serviceList = services.slice(0, 4)
  const bestProjectImages = [
    'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
  ]
  const bestLocations = [
    'Jakarta, Indonesia',
    'Kuala Lumpur, Malaysia',
    'Sydney, Australia',
  ]

  const designers = [
    {
      id: 'd1',
      name: 'Jordan Abigail',
      role: 'Senior UI/UX Designer',
      photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=640&q=80',
    },
    {
      id: 'd2',
      name: 'Marcus Horizon',
      role: 'Senior UI/UX Designer',
      photo: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=640&q=80',
    },
    {
      id: 'd3',
      name: 'Ahmad Jalaludin',
      role: 'Illustration Designer',
      photo: 'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?auto=format&fit=crop&w=640&q=80',
    },
    {
      id: 'd4',
      name: 'Jimmy Sullivan',
      role: 'Animation Designer',
      photo: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=640&q=80',
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
                  to="/portfolio"
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
            <div className="relative isolate min-h-[360px] md:min-h-[460px] grid place-items-center">
              {/* subtle stacked hint behind */}
              <div className="absolute -left-6 -top-8 z-0 hidden h-[440px] w-[300px] -rotate-[8deg] rounded-[32px] bg-white shadow-[0_24px_60px_rgba(0,0,0,0.12)] ring-1 ring-black/5 md:block" aria-hidden="true" />
              <div className="absolute left-0 top-4 z-0 hidden h-[420px] w-[280px] rotate-[6deg] rounded-[32px] bg-white shadow-[0_24px_60px_rgba(0,0,0,0.10)] ring-1 ring-black/5 md:block" aria-hidden="true" />

              {/* main clipped card */}
              <div className="relative z-10 h-[420px] w-[260px] rotate-[-6deg] overflow-hidden shadow-[0_28px_70px_rgba(0,0,0,0.16)] ring-1 ring-black/5 sm:h-[500px] sm:w-[320px] md:h-[540px] md:w-[360px]">
                <div
                  className="absolute inset-0 bg-white"
                  style={{ clipPath: 'path("M32 60C48 12 92 0 150 0h180c50 0 86 26 86 74v98c0 26 12 42 32 48-18 6-32 22-32 48v96c0 56-44 96-102 96H132c-62 0-108-32-108-90v-70c0-24-14-38-32-44 18-6 32-20 32-44Z")', WebkitClipPath: 'path("M32 60C48 12 92 0 150 0h180c50 0 86 26 86 74v98c0 26 12 42 32 48-18 6-32 22-32 48v96c0 56-44 96-102 96H132c-62 0-108-32-108-90v-70c0-24-14-38-32-44 18-6 32-20 32-44Z")' }}
                />
                <img
                  src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80"
                  alt="Find your place"
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ clipPath: 'path("M32 60C48 12 92 0 150 0h180c50 0 86 26 86 74v98c0 26 12 42 32 48-18 6-32 22-32 48v96c0 56-44 96-102 96H132c-62 0-108-32-108-90v-70c0-24-14-38-32-44 18-6 32-20 32-44Z")', WebkitClipPath: 'path("M32 60C48 12 92 0 150 0h180c50 0 86 26 86 74v98c0 26 12 42 32 48-18 6-32 22-32 48v96c0 56-44 96-102 96H132c-62 0-108-32-108-90v-70c0-24-14-38-32-44 18-6 32-20 32-44Z")' }}
                  loading="lazy"
                />
              </div>
            </div>

            <div className="rounded-2xl bg-[var(--zim-bg)]">
              <div className="divide-y divide-[var(--zim-border)]">
                {serviceList.map((s, idx) => (
                  <div key={s.id} className="grid grid-cols-[auto_1fr_auto] items-start gap-4 py-5">
                    <div className="text-xs font-semibold text-[var(--zim-fg)]/50">
                      {(idx + 1).toString().padStart(2, '0')}
                    </div>
                    <div>
                      <div className={idx === 1 ? 'text-2xl font-extrabold text-[var(--zim-black)] md:text-3xl' : 'text-2xl font-semibold text-[var(--zim-fg)]/80 md:text-3xl'}>
                        {s.title}
                      </div>
                      <div className="mt-1 text-sm text-[var(--zim-fg)]/70">
                        {s.description}
                      </div>
                    </div>
                    <div>
                      <Link to="/services" aria-label={`Open ${s.title}`} className={idx === 1 ? 'grid h-9 w-9 place-items-center rounded-full bg-[var(--zim-green)] text-[var(--zim-black)]' : ''}>
                        <ArrowUpRight size={18} className={idx === 1 ? '' : 'text-[var(--zim-fg)]/60'} />
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
              OUR BEST DESIGNERS
            </div>
            <div className="hidden md:block" />
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-full bg-[var(--zim-green)] px-6 py-2 text-xs font-semibold text-[var(--zim-black)] hover:brightness-110"
            >
              View more
            </Link>
          </div>

          <div className="mt-6 border-t border-[var(--zim-border)]" />

          <div className="mt-10 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
            {designers.map((d) => (
              <div key={d.id} className="group">
                <div className="overflow-hidden rounded-[28px] bg-neutral-100 ring-1 ring-black/5 shadow-[0_20px_40px_rgba(0,0,0,0.06)]">
                  <div className="aspect-[4/5] w-full">
                    <img
                      src={d.photo || '/imgs/agency.jpg'}
                      alt={d.name}
                      className="h-full w-full object-contain p-6"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <div className="text-lg font-semibold text-[var(--zim-black)]">
                    {d.name}
                  </div>
                  <div className="mt-1 text-sm text-[var(--zim-fg)]/70">
                    {d.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home
