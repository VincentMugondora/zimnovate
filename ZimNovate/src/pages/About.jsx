import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading.jsx'

const MotionDiv = motion.div

const About = () => {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <SectionHeading
          eyebrow="About"
          title="We build digital products with speed and intent"
          subtitle="Zimnovate is a digital agency focused on clean design, reliable engineering, and Africa-first storytelling."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Mission',
              text: 'Help Zimbabwean businesses grow through smart, secure, and modern digital solutions.',
              accent: 'var(--zim-blue)',
            },
            {
              title: 'Vision',
              text: 'Innovate Zimbabwe’s digital future with products that feel world-class and locally grounded.',
              accent: 'var(--zim-green)',
            },
            {
              title: 'Promise',
              text: 'Clarity in planning, excellence in execution, and support beyond launch.',
              accent: 'var(--zim-orange)',
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-[var(--zim-border)] bg-[var(--zim-card)] p-6"
            >
              <div className="text-xs font-semibold tracking-[0.25em]" style={{ color: c.accent }}>
                {c.title.toUpperCase()}
              </div>
              <div className="mt-3 text-sm text-[var(--zim-fg)]/75">{c.text}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--zim-gray)]/40">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <SectionHeading
              eyebrow="Founder"
              title="Founder spotlight"
              subtitle="A placeholder spotlight section you can tailor with your real bio, photo, and story."
            />

            <div className="rounded-2xl border border-[var(--zim-border)] bg-[var(--zim-bg)] p-6">
              <div className="flex items-start gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-xl bg-[var(--zim-blue)] text-white">
                  V
                </div>
                <div>
                  <div className="text-lg font-bold">Vincent</div>
                  <div className="text-sm text-[var(--zim-fg)]/70">
                    Founder & Full-Stack Builder
                  </div>
                </div>
              </div>

              <p className="mt-4 text-sm text-[var(--zim-fg)]/75">
                “I started Zimnovate to help Zimbabwean teams ship digital products
                faster — with design and engineering that feel premium, secure, and
                modern.”
              </p>

              <div className="mt-5 grid gap-3 text-sm text-[var(--zim-fg)]/75">
                <div className="rounded-xl border border-[var(--zim-border)] bg-[var(--zim-card)] p-4">
                  Strength: clean systems and clear delivery.
                </div>
                <div className="rounded-xl border border-[var(--zim-border)] bg-[var(--zim-card)] p-4">
                  Focus: performance, accessibility, and scalable architecture.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <SectionHeading
          eyebrow="Values"
          title="How we work"
          subtitle="The principles behind every Zimnovate project."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {[
            {
              t: 'Clarity',
              d: 'Clear scope, simple communication, and transparent timelines.',
            },
            {
              t: 'Craft',
              d: 'Minimal design, strong typography, and consistent details.',
            },
            {
              t: 'Security',
              d: 'Secure by default: validation, sanitization, and safe configs.',
            },
            {
              t: 'Velocity',
              d: 'Ship fast, iterate smart, and focus on business impact.',
            },
          ].map((v, idx) => (
            <MotionDiv
              key={v.t}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-2xl border border-[var(--zim-border)] bg-[var(--zim-card)] p-5"
            >
              <div className="text-sm font-bold">{v.t}</div>
              <div className="mt-2 text-sm text-[var(--zim-fg)]/75">{v.d}</div>
            </MotionDiv>
          ))}
        </div>
      </section>

      <section className="bg-[var(--zim-gray)]/40">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <SectionHeading
            eyebrow="Process"
            title="A simple timeline that keeps delivery predictable"
            subtitle="Discover → Design → Build → Launch → Support"
          />

          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {[
              {
                k: 'Discover',
                d: 'Requirements, goals, success metrics.',
                c: 'var(--zim-blue)',
              },
              {
                k: 'Design',
                d: 'Wireframes, UI kit, interaction patterns.',
                c: 'var(--zim-orange)',
              },
              {
                k: 'Build',
                d: 'Implementation, testing, performance tuning.',
                c: 'var(--zim-green)',
              },
              {
                k: 'Launch',
                d: 'Deploy, monitor, and refine.',
                c: 'var(--zim-blue)',
              },
              {
                k: 'Support',
                d: 'Maintenance, updates, and growth.',
                c: 'var(--zim-orange)',
              },
            ].map((s) => (
              <div
                key={s.k}
                className="rounded-2xl border border-[var(--zim-border)] bg-[var(--zim-bg)] p-5"
              >
                <div
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-white"
                  style={{ background: s.c }}
                >
                  {s.k[0]}
                </div>
                <div className="mt-3 text-sm font-bold">{s.k}</div>
                <div className="mt-1 text-sm text-[var(--zim-fg)]/75">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
