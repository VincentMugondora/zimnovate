import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import TestimonialCard from '../components/TestimonialCard.jsx'
import { services } from '../data/services.js'
import { portfolioProjects } from '../data/portfolio.js'
import { testimonials } from '../data/testimonials.js'

const MotionDiv = motion.div

const Home = () => {
  const topServices = services.slice(0, 3)
  const topProjects = portfolioProjects.slice(0, 3)

  return (
    <div>
      <Hero />

      <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <SectionHeading
            eyebrow="About"
            title="A modern digital partner for Zimbabwean teams"
            subtitle="We build fast, secure, and conversion-focused web experiences — with a clean African-tech aesthetic and a process that keeps delivery predictable."
          />

          <div className="rounded-2xl border border-[var(--zim-border)] bg-[var(--zim-card)] p-6">
            <div className="text-sm font-semibold text-[var(--zim-fg)]/80">
              What you get
            </div>
            <div className="mt-4 grid gap-3">
              {[
                {
                  k: 'Speed',
                  v: 'Rapid delivery with clear milestones and constant feedback.',
                },
                {
                  k: 'Reliability',
                  v: 'Secure, maintainable code with strong defaults.',
                },
                {
                  k: 'Africa-first design',
                  v: 'Minimal, modern, and culturally grounded visual direction.',
                },
              ].map((i) => (
                <div
                  key={i.k}
                  className="rounded-xl border border-[var(--zim-border)] bg-[var(--zim-bg)] p-4"
                >
                  <div className="text-sm font-bold">{i.k}</div>
                  <div className="mt-1 text-sm text-[var(--zim-fg)]/70">
                    {i.v}
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="mt-5 inline-flex rounded-md border border-[var(--zim-border)] bg-[var(--zim-bg)] px-4 py-2 text-sm font-semibold text-[var(--zim-fg)] hover:border-[var(--zim-blue)]"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[var(--zim-gray)]/40">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Services"
              title="Solutions that move your business forward"
              subtitle="From branding and websites to secure full-stack products, we ship clean experiences that feel premium and perform." 
            />
            <Link
              to="/services"
              className="inline-flex w-fit rounded-md bg-[var(--zim-blue)] px-4 py-2 text-sm font-semibold text-white hover:brightness-110"
            >
              View all services
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {topServices.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Portfolio"
            title="Work that blends clarity, speed, and craft"
            subtitle="A small preview of the kinds of products, brands, and systems we build."
          />
          <Link
            to="/portfolio"
            className="inline-flex w-fit rounded-md border border-[var(--zim-border)] bg-[var(--zim-card)] px-4 py-2 text-sm font-semibold text-[var(--zim-fg)] hover:border-[var(--zim-blue)]"
          >
            View portfolio
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {topProjects.map((p, idx) => (
            <MotionDiv
              key={p.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-xl border border-[var(--zim-border)] bg-[var(--zim-card)] p-5"
            >
              <div className="text-xs font-semibold tracking-wide text-[var(--zim-blue)]">
                {p.category}
              </div>
              <div className="mt-1 text-lg font-bold">{p.title}</div>
              <div className="mt-2 text-sm text-[var(--zim-fg)]/75">
                {p.description}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[var(--zim-border)] bg-[var(--zim-bg)]/60 px-2 py-0.5 text-xs font-semibold text-[var(--zim-fg)]/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </MotionDiv>
          ))}
        </div>
      </section>

      <section className="bg-[var(--zim-gray)]/40">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <SectionHeading
            eyebrow="Testimonials"
            title="Trusted by teams who value quality"
            subtitle="Client feedback and placeholder quotes until you add real testimonials."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="rounded-2xl border border-[var(--zim-border)] bg-[var(--zim-card)] p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <div className="text-xs font-semibold tracking-[0.25em] text-[var(--zim-orange)]">
                READY TO BUILD
              </div>
              <div className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
                Let’s build something great together.
              </div>
              <p className="mt-3 text-sm text-[var(--zim-fg)]/75 md:text-base">
                Tell us what you’re working on — we’ll respond with clear next steps
                and a timeline.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md bg-[var(--zim-blue)] px-5 py-3 text-sm font-semibold text-white hover:brightness-110"
              >
                Contact us
              </Link>
              <a
                href="https://wa.me/263000000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-[var(--zim-border)] bg-[var(--zim-bg)] px-5 py-3 text-sm font-semibold text-[var(--zim-fg)] hover:border-[var(--zim-green)]"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
