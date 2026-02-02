import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, MessageCircle } from 'lucide-react'
import Hero from '../components/Hero.jsx'
import ClientLogos from '../components/ClientLogos.jsx'
import { services } from '../data/services.js'
import { portfolioProjects } from '../data/portfolio.js'

const MotionDiv = motion.div

const Home = () => {
  const bestProjects = portfolioProjects.slice(0, 3)
  const serviceList = services.slice(0, 4)
  const bestLocations = [
    'Jakarta, Indonesia',
    'Kuala Lumpur, Malaysia',
    'Sydney, Australia',
  ]

  const designers = [
    { id: 'a', name: 'James Ahar', role: 'UI Designer' },
    { id: 'b', name: 'Frazal Harben', role: 'Brand Designer' },
    { id: 'c', name: 'Afroed Jack', role: 'UX Research' },
    { id: 'd', name: 'Jarre Van', role: 'Graphic Designer' },
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
    <div className="bg-[var(--zim-bg)]">
      <Hero />
      <ClientLogos />

      <section>
        <div className="mx-auto max-w-7xl px-12 py-16 md:px-16 md:py-20 lg:px-20">
          <div className="grid items-center gap-3 md:grid-cols-[auto_1fr_auto]">
            <div className="text-3xl font-extrabold tracking-tight text-[var(--zim-black)] md:text-4xl">
              BEST PROJECT
            </div>
            <div className="hidden text-center text-sm text-[var(--zim-fg)]/70 md:block">
              Explore more of our best projects.
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center rounded-full bg-[var(--zim-green)] px-6 py-2 text-xs font-semibold text-[var(--zim-black)] hover:brightness-110"
            >
              View more
            </Link>
          </div>

          <div className="mt-6 border-t border-[var(--zim-border)]" />

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
                <div className="relative rounded-[32px] bg-neutral-100 p-5 shadow-[0_30px_60px_rgba(0,0,0,0.10)] ring-1 ring-black/5">
                  <div className="aspect-[10/9] overflow-hidden rounded-[24px] bg-white ring-1 ring-black/5">
                    <img
                      src={(Array.isArray(p.images) && p.images.length ? p.images[0] : '/imgs/agency.jpg')}
                      alt={p.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                <Link
                  to="/portfolio"
                  className="absolute -right-4 -bottom-4 grid h-12 w-12 place-items-center rounded-full bg-[var(--zim-green)] text-[var(--zim-black)] shadow-lg transition-transform duration-200 hover:brightness-110 group-hover:-translate-y-0.5"
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
            <div className="relative isolate min-h-[360px] md:min-h-[460px]">
              <div className="absolute -left-10 top-3 hidden h-[220px] w-[160px] -rotate-6 overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-black/5 md:block">
                <img src="/imgs/agency.jpg" alt="collage-1" className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="absolute -left-4 bottom-4 hidden h-[180px] w-[140px] rotate-6 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-black/5 md:block">
                <img src="/imgs/agency.jpg" alt="collage-2" className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="relative overflow-visible">
                <div className="overflow-hidden rounded-[32px] bg-white shadow-[0_30px_60px_rgba(0,0,0,0.10)] ring-1 ring-black/5">
                  <img src="/imgs/agency.jpg" alt="Service highlight" className="h-full w-full object-cover" loading="lazy" />
                </div>
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
          <div className="flex items-center justify-between gap-4">
            <div className="text-sm font-extrabold tracking-wide text-[var(--zim-black)]">
              LATEST INSIGHT
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--zim-green)] px-4 py-2 text-xs font-semibold text-[var(--zim-black)] hover:brightness-110"
            >
              View all <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {insights.map((i, idx) => (
              <MotionDiv
                key={i.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: idx * 0.04 }}
                className="overflow-hidden rounded-2xl border border-[var(--zim-border)] bg-[var(--zim-card)]"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/imgs/agency.jpg"
                    alt={i.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <div className="text-sm font-bold text-[var(--zim-black)]">
                    {i.title}
                  </div>
                  <div className="mt-1 text-xs text-[var(--zim-fg)]/70">
                    {i.excerpt}
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--zim-gray)]/40">
        <div className="mx-auto max-w-7xl px-12 py-16 md:px-16 md:py-20 lg:px-20">
          <div className="flex items-center justify-between gap-4">
            <div className="text-sm font-extrabold tracking-wide text-[var(--zim-black)]">
              OUR BEST DESIGNERS
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--zim-green)] px-4 py-2 text-xs font-semibold text-[var(--zim-black)] hover:brightness-110"
            >
              View all <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {designers.map((d) => (
              <div
                key={d.id}
                className="rounded-2xl border border-[var(--zim-border)] bg-[var(--zim-bg)] p-4"
              >
                <div className="grid place-items-center">
                  <div className="grid h-20 w-20 place-items-center rounded-full bg-[linear-gradient(135deg,rgba(30,144,255,0.22),rgba(50,205,50,0.18))] text-xl font-extrabold text-[var(--zim-black)]">
                    {d.name
                      .split(' ')
                      .slice(0, 2)
                      .map((w) => w[0])
                      .join('')}
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <div className="text-sm font-bold text-[var(--zim-black)]">
                    {d.name}
                  </div>
                  <div className="mt-1 text-xs text-[var(--zim-fg)]/70">
                    {d.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b1220] px-12 py-16 md:px-16 md:py-20 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl bg-[#0f172a] p-6 text-white shadow-[0_28px_80px_rgba(0,0,0,0.45)] md:p-10">
            <div className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full bg-[var(--zim-green)] text-[var(--zim-black)]">
              <MessageCircle size={20} />
            </div>

            <div className="max-w-2xl">
              <div className="text-2xl font-extrabold md:text-3xl">
                READY TO WORK WITH US?
              </div>
              <div className="mt-2 text-sm text-white/75 md:text-base">
                Let’s talk about your idea and turn it into a real product.
              </div>
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-3">
              <div className="space-y-2 text-sm text-white/80">
                <div className="text-xs font-semibold tracking-[0.25em] text-white/60">
                  CONTACT
                </div>
                <div>hello@zimnovate.co.zw</div>
                <div>+263 00 000 0000</div>
                <div>Harare, Zimbabwe</div>
              </div>

              <div className="space-y-2 text-sm text-white/80">
                <div className="text-xs font-semibold tracking-[0.25em] text-white/60">
                  NAVIGATE
                </div>
                <Link className="block hover:text-white" to="/about">
                  About
                </Link>
                <Link className="block hover:text-white" to="/services">
                  Services
                </Link>
                <Link className="block hover:text-white" to="/portfolio">
                  Portfolio
                </Link>
              </div>

              <div className="space-y-3">
                <div className="text-xs font-semibold tracking-[0.25em] text-white/60">
                  START A PROJECT
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--zim-green)] px-6 py-3 text-sm font-semibold text-[var(--zim-black)] hover:brightness-110"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
