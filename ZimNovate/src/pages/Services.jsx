import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import { services } from '../data/services.js'

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Digital Services Zimbabwe — Web Development, Apps, Branding & Marketing</title>
        <meta name="description" content="Explore Zimnovate's professional digital services: website development, mobile app development, branding, SEO, digital marketing, and e-commerce solutions for Zimbabwean businesses in Harare and beyond." />
        <meta name="keywords" content="digital services Zimbabwe, web development Zimbabwe, mobile app development Zimbabwe, branding agency Zimbabwe, SEO Zimbabwe, digital marketing Zimbabwe, e-commerce Zimbabwe, website design Harare" />
        <link rel="canonical" href="https://zimnovate.co.zw/services" />
        <meta property="og:title" content="Digital Services Zimbabwe — Web Development, Apps, Branding & Marketing" />
        <meta property="og:description" content="Explore Zimnovate's professional digital services for Zimbabwean businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zimnovate.co.zw/services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Services Zimbabwe — Web Development, Apps, Branding & Marketing" />
        <meta name="twitter:description" content="Explore Zimnovate's professional digital services for Zimbabwean businesses." />
        <meta name="twitter:image" content="https://zimnovate.co.zw/logo1.png" />
      </Helmet>

      <div className="bg-[var(--zim-bg)]">
        <PageHero
          title="Digital Services Built to Grow Your Business"
          subtitle="From websites and mobile apps to branding, automation, and marketing — we deliver modern solutions for Zimbabwean businesses."
          height="min-h-[42vh]"
        />

        {/* Services Grid */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 py-16 md:px-16 md:py-24 lg:px-20">

          {/* Header */}
          <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--zim-green)]">What we offer</p>
              <h2 className="text-3xl font-extrabold tracking-tight text-[var(--zim-black)] md:text-4xl">
                Our Services
              </h2>
              <p className="mt-2 max-w-xl text-sm text-[var(--zim-fg)]/70">
                Every service is built with performance, clarity, and African markets in mind.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--zim-green)] px-6 py-2.5 text-sm font-semibold text-[var(--zim-black)] hover:brightness-110 transition-all"
            >
              Get a Free Quote <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((s, idx) => (
              <Link
                key={s.id}
                to={s.route}
                className="group relative flex flex-col rounded-[28px] bg-[var(--zim-card,#fff)] p-6 ring-1 ring-black/[0.07] shadow-[0_8px_32px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(0,0,0,0.12)] hover:ring-[var(--zim-green)]/40"
              >
                {/* Icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl text-2xl"
                  style={{ background: `color-mix(in srgb, ${s.accent} 15%, transparent)` }}>
                  {s.icon}
                </div>

                {/* Category badge */}
                <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-[var(--zim-fg)]/50">
                  {s.category}
                </p>

                {/* Title */}
                <h3 className="mb-2 text-base font-bold text-[var(--zim-black)] leading-snug group-hover:text-[var(--zim-black)]">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="mb-5 flex-1 text-sm leading-relaxed text-[var(--zim-fg)]/65">
                  {s.description}
                </p>

                {/* Highlights */}
                <ul className="mb-6 space-y-1.5">
                  {s.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-xs text-[var(--zim-fg)]/70">
                      <span className="h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ background: s.accent }} />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center justify-between border-t border-[var(--zim-border)] pt-4">
                  <span className="text-xs font-semibold text-[var(--zim-fg)]/60 group-hover:text-[var(--zim-black)] transition-colors">
                    Learn more
                  </span>
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--zim-gray,#f4f4f4)] text-[var(--zim-black)] transition-all group-hover:bg-[var(--zim-green)] group-hover:shadow-[0_4px_16px_rgba(124,255,95,0.4)]">
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 pb-20 md:px-16 lg:px-20">
          <div className="relative overflow-hidden rounded-[32px] bg-[var(--zim-black)] px-8 py-14 text-center md:py-20">
            {/* subtle green glow */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="h-64 w-64 rounded-full bg-[var(--zim-green)]/20 blur-[80px]" />
            </div>
            <p className="relative mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--zim-green)]">Ready to start?</p>
            <h2 className="relative mb-4 text-3xl font-extrabold text-white md:text-4xl">
              Let's build something great together.
            </h2>
            <p className="relative mb-8 mx-auto max-w-lg text-sm text-white/60">
              Tell us about your project and we'll help you choose the right services to hit your goals.
            </p>
            <div className="relative flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--zim-green)] px-8 py-3 text-sm font-bold text-[var(--zim-black)] hover:brightness-110 transition-all"
              >
                Start a Project <ArrowUpRight size={15} />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white/80 hover:border-white/40 hover:text-white transition-all"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Services
