import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  Brush,
  Code2,
  LayoutGrid,
  MessageCircle,
  Megaphone,
  Smartphone,
} from 'lucide-react'
import Hero from '../components/Hero.jsx'
import { services } from '../data/services.js'
import { portfolioProjects } from '../data/portfolio.js'

const MotionDiv = motion.div

const Home = () => {
  const bestProjects = portfolioProjects.slice(0, 3)
  const serviceList = services.slice(0, 4)

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

      <section className="bg-[var(--zim-gray)]/40">
        <div className="mx-auto w-full px-3 py-8 md:px-4 md:py-10 lg:px-4">
          <div className="grid grid-cols-2 gap-4 text-[var(--zim-fg)]/80 sm:grid-cols-3 md:grid-cols-6">
            {[
              { Icon: LayoutGrid, label: 'UI/UX' },
              { Icon: Brush, label: 'Design' },
              { Icon: Code2, label: 'Dev' },
              { Icon: Smartphone, label: 'Mobile' },
              { Icon: Megaphone, label: 'Brand' },
              { Icon: LayoutGrid, label: 'Strategy' },
            ].map((item) => {
              const IconComponent = item.Icon
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-2 rounded-xl bg-[var(--zim-bg)] px-3 py-3"
                >
                  <div className="grid h-9 w-9 place-items-center rounded-lg bg-[var(--zim-card)]">
                    <IconComponent size={18} />
                  </div>
                  <div className="text-sm font-semibold">{item.label}</div>
                </div>
              )
            })}
          </div>

          <div className="mt-8 rounded-2xl bg-[var(--zim-bg)] p-6 md:p-8">
            <p className="text-sm leading-relaxed text-[var(--zim-fg)]/75 md:text-base">
              “People build websites, develop brands and build a strong
              <span className="font-semibold text-[var(--zim-fg)]"> social </span>
              presence. But to progress, one needs a team that can work based on
              a real client’s view then others.”
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full px-3 py-10 md:px-4 md:py-14 lg:px-4">
          <div className="flex items-center justify-between gap-4">
            <div className="text-sm font-extrabold tracking-wide text-[var(--zim-black)]">
              BEST PROJECT
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--zim-green)] px-4 py-2 text-xs font-semibold text-[var(--zim-black)] hover:brightness-110"
            >
              View all <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {bestProjects.map((p, idx) => (
              <MotionDiv
                key={p.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="overflow-hidden rounded-2xl border border-[var(--zim-border)] bg-[var(--zim-card)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src="/imgs/agency.jpg"
                    alt={p.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/15" />
                </div>
                <div className="p-4">
                  <div className="text-sm font-bold">{p.title}</div>
                  <div className="mt-1 text-xs text-[var(--zim-fg)]/65">
                    {p.category}
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--zim-gray)]/40">
        <div className="mx-auto w-full px-3 py-10 md:px-4 md:py-14 lg:px-4">
          <div className="flex items-center justify-between gap-4">
            <div className="text-sm font-extrabold tracking-wide text-[var(--zim-black)]">
              OUR SERVICES
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--zim-green)] px-4 py-2 text-xs font-semibold text-[var(--zim-black)] hover:brightness-110"
            >
              View all <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2 md:items-start">
            <div className="relative overflow-hidden rounded-2xl border border-[var(--zim-border)] bg-[var(--zim-card)]">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/imgs/agency.jpg"
                  alt="Service highlight"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute bottom-4 left-4 rounded-xl bg-white/80 px-4 py-3 text-xs font-semibold text-[var(--zim-black)]">
                Find Your Place
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--zim-border)] bg-[var(--zim-bg)] p-4">
              <div className="grid divide-y divide-[var(--zim-border)]">
                {serviceList.map((s) => (
                  <div key={s.id} className="flex items-center gap-4 py-4">
                    <div className="min-w-0">
                      <div className="text-sm font-bold text-[var(--zim-black)]">
                        {s.title}
                      </div>
                      <div className="mt-1 text-xs text-[var(--zim-fg)]/70">
                        {s.description}
                      </div>
                    </div>
                    <div className="ml-auto">
                      <div className="grid h-9 w-9 place-items-center rounded-full bg-[var(--zim-green)] text-[var(--zim-black)]">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full px-3 py-10 md:px-4 md:py-14 lg:px-4">
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
        <div className="mx-auto w-full px-3 py-10 md:px-4 md:py-14 lg:px-4">
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

      <section className="bg-[#0b1220] px-3 py-12 md:px-4 md:py-16 lg:px-4">
        <div className="mx-auto w-full">
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
