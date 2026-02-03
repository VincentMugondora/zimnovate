import React from 'react'
import { motion } from 'framer-motion'
import {
  Rocket,
  ShieldCheck,
  Sparkles,
  Globe2,
  Lightbulb,
  Handshake,
  Gem,
  Timer,
  Users,
  Search,
  PenTool,
  Code,
  Rocket as RocketLaunch,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import PageHero from '../components/PageHero.jsx'

const MotionDiv = motion.div

const About = () => {
  const valueIcons = [Lightbulb, ShieldCheck, Gem, Timer, Users]
  const processIcons = [Search, PenTool, Code, RocketLaunch]

  return (
    <div>
      <PageHero
        title="Innovating Digital Growth Across Africa"
        subtitle="Zimnovate is a full-stack digital agency blending strategy, design, and engineering to build fast, reliable products for impact."
        height="min-h-[45vh]"
      />

      {/* Intro CTA */}
      <section className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-4">
            <div className="inline-flex rounded-full bg-[var(--zim-blue)]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--zim-blue)]">
              Who We Are
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[var(--zim-fg)] md:text-4xl">
              Where vision meets smart technology
            </h2>
            <p className="text-sm leading-relaxed text-[var(--zim-fg)]/80 md:text-base">
              We transform ideas into powerful digital experiences. From strategy to launch, our teams deliver web, mobile, and brand systems built for speed, reliability, and measurable growth.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[var(--zim-green)] px-5 py-3 text-sm font-semibold text-[var(--zim-black)] hover:brightness-110"
              >
                Start a Project
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-[var(--zim-border)] bg-[var(--zim-card)] px-5 py-3 text-sm font-semibold text-[var(--zim-fg)] hover:border-[var(--zim-blue)]"
              >
                Book a Call
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-[var(--zim-border)] bg-gradient-to-br from-[#0a1a2f] via-[#11263c] to-[#33e1ff]/40 p-8 text-white shadow-[0_24px_70px_rgba(0,0,0,0.25)]">
            <div className="absolute -right-14 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-[#33e1ff]/20 blur-3xl" />
            <div className="relative space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-white/70">Zimnovate</p>
              <h3 className="text-2xl font-bold leading-tight md:text-3xl">
                Built in Zimbabwe. Designed for the future.
              </h3>
              <p className="text-sm text-white/80">
                African businesses deserve digital solutions that match global standards. We craft products that feel premium, secure, and ready to scale.
              </p>
              <div className="grid gap-2 text-sm text-white/85">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[var(--zim-green)]" /> Innovation that matters
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[var(--zim-green)]" /> Technology that empowers
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[var(--zim-green)]" /> Solutions built for growth
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[var(--zim-green)]" /> Crafted in Zimbabwe, built for the world
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[var(--zim-gray)]/40">
        <div className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
          <div className="grid gap-6 md:grid-cols-2">
            {[{
              title: 'Mission',
              text: 'To help African businesses grow through smart, reliable, and innovative digital solutions.',
              color: 'from-[#33e1ff]/30 to-[#0a1a2f]/60',
            }, {
              title: 'Vision',
              text: 'A continent where every business can compete globally through modern technology.',
              color: 'from-[#9cff5f]/25 to-[#0a1a2f]/60',
            }].map((card) => (
              <div
                key={card.title}
                className={`relative overflow-hidden rounded-2xl border border-[var(--zim-border)] bg-[var(--zim-card)] p-8`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-70`} />
                <div className="relative space-y-3">
                  <div className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                    {card.title}
                  </div>
                  <div className="text-lg font-bold text-white">{card.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-center">
          <div className="space-y-4">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--zim-blue)]">Our Story</div>
            <h3 className="text-3xl font-bold tracking-tight text-[var(--zim-fg)] md:text-4xl">
              Built in Zimbabwe. Designed for the future.
            </h3>
            <p className="text-sm leading-relaxed text-[var(--zim-fg)]/80 md:text-base">
              Zimnovate was founded with a simple belief: African businesses deserve digital solutions that match global standards. What started as a small development studio has grown into a multidisciplinary digital agency serving startups, SMEs, creatives, and corporate teams.
            </p>
            <p className="text-sm leading-relaxed text-[var(--zim-fg)]/80 md:text-base">
              We don’t just build products — we become partners in your growth.
            </p>
            <div className="grid gap-2 text-sm text-[var(--zim-fg)]/80">
              {['We listen.', 'We plan.', 'We create.', 'We innovate.'].map((line) => (
                <div key={line} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[var(--zim-green)]" /> {line}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              { title: 'Smart + Fast Development', desc: 'React, Node, MongoDB — secure, performant, and scalable.' , Icon: Rocket},
              { title: 'Reliable Delivery', desc: 'Clear communication, transparent timelines, predictable outcomes.', Icon: ShieldCheck},
              { title: 'Innovation at Heart', desc: 'We experiment, refine, and push what’s possible.', Icon: Sparkles},
              { title: 'African Context, Global Quality', desc: 'Local insight with world-class standards.', Icon: Globe2},
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-3 rounded-2xl border border-[var(--zim-border)] bg-[var(--zim-card)] p-4"
              >
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--zim-blue)]/10 text-[var(--zim-blue)]">
                  <item.Icon size={18} />
                </div>
                <div className="space-y-1">
                  <div className="text-sm font-semibold text-[var(--zim-fg)]">{item.title}</div>
                  <div className="text-sm text-[var(--zim-fg)]/75">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-[var(--zim-gray)]/40">
        <div className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--zim-blue)]">Founder</div>
              <h3 className="text-3xl font-bold tracking-tight text-[var(--zim-fg)] md:text-4xl">Meet the Founder — Vincent Mugondora</h3>
              <p className="text-sm leading-relaxed text-[var(--zim-fg)]/80 md:text-base">
                Vincent is a passionate software developer and digital innovator based in Zimbabwe. With a strong background in full-stack engineering and a mission to uplift businesses through technology, he leads Zimnovate with curiosity, craftsmanship, and a commitment to building digital experiences that create real impact.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--zim-border)] bg-[var(--zim-bg)] p-6">
              <div className="flex items-start gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-xl bg-[var(--zim-blue)] text-white text-lg font-bold">
                  V
                </div>
                <div>
                  <div className="text-lg font-bold">Vincent Mugondora</div>
                  <div className="text-sm text-[var(--zim-fg)]/70">Founder & Full-Stack Builder</div>
                </div>
              </div>

              <p className="mt-4 text-sm text-[var(--zim-fg)]/80">
                “I started Zimnovate to help African teams ship digital products that feel premium, secure, and modern — without sacrificing speed.”
              </p>

              <div className="mt-5 grid gap-3 text-sm text-[var(--zim-fg)]/80">
                <div className="rounded-xl border border-[var(--zim-border)] bg-[var(--zim-card)] p-4">Strength: clean systems and clear delivery.</div>
                <div className="rounded-xl border border-[var(--zim-border)] bg-[var(--zim-card)] p-4">Focus: performance, accessibility, and scalable architecture.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <SectionHeading
          eyebrow="Values"
          title="Principles that guide every build"
          subtitle="Innovation, trust, quality, efficiency, and partnership."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-5">
          {[
            { t: 'Innovation', d: 'Always exploring, always improving.' },
            { t: 'Trust', d: 'Transparent communication & dependable delivery.' },
            { t: 'Quality', d: 'Pixel-perfect design. Clean, secure code.' },
            { t: 'Efficiency', d: 'Faster, smarter, better workflows.' },
            { t: 'Partnership', d: 'We grow with our clients.' },
          ].map((v, idx) => {
            const Icon = valueIcons[idx]
            return (
              <MotionDiv
                key={v.t}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="rounded-2xl border border-[var(--zim-border)] bg-[var(--zim-card)] p-5"
              >
                <div className="flex items-center gap-2 text-sm font-bold">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--zim-blue)]/10 text-[var(--zim-blue)]">
                    <Icon size={16} />
                  </span>
                  {v.t}
                </div>
                <div className="mt-2 text-sm text-[var(--zim-fg)]/75">{v.d}</div>
              </MotionDiv>
            )
          })}
        </div>
      </section>

      {/* Process */}
      <section className="bg-[var(--zim-gray)]/40">
        <div className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
          <SectionHeading
            eyebrow="Process"
            title="How we work"
            subtitle="Discover → Design → Develop → Launch & Grow"
          />

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              { k: 'Discover', d: 'We understand your goals.', c: 'var(--zim-blue)' },
              { k: 'Design', d: 'UI/UX that converts and inspires.', c: 'var(--zim-orange)' },
              { k: 'Develop', d: 'Scalable, secure engineering.', c: 'var(--zim-green)' },
              { k: 'Launch & Grow', d: 'Support beyond the project.', c: 'var(--zim-blue)' },
            ].map((s, idx) => {
              const Icon = processIcons[idx]
              return (
                <div
                  key={s.k}
                  className="rounded-2xl border border-[var(--zim-border)] bg-[var(--zim-bg)] p-5"
                >
                  <div
                    className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold text-white"
                    style={{ background: s.c }}
                  >
                    <Icon size={16} />
                  </div>
                  <div className="text-sm font-bold">{s.k}</div>
                  <div className="mt-1 text-sm text-[var(--zim-fg)]/75">{s.d}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="rounded-3xl border border-[var(--zim-border)] bg-[var(--zim-card)] p-8 md:p-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--zim-blue)]">Trusted by</div>
              <h3 className="mt-2 text-2xl font-bold text-[var(--zim-fg)] md:text-3xl">
                Entrepreneurs, startups, and businesses across Africa.
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {['/imgs/logo1.svg', '/imgs/logo2.svg', '/imgs/logo3.svg', '/imgs/logo4.svg'].map((src, idx) => (
                <div key={idx} className="flex h-14 items-center justify-center rounded-xl bg-white/40 p-3 text-xs font-semibold text-[var(--zim-fg)]/70">
                  Placeholder
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[var(--zim-gray)]/40">
        <div className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
          <div className="relative overflow-hidden rounded-3xl border border-[var(--zim-border)] bg-gradient-to-br from-[#0a1a2f] via-[#10233a] to-[#33e1ff]/40 p-10 text-white shadow-[0_28px_80px_rgba(0,0,0,0.35)]">
            <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-[#33e1ff]/20 blur-3xl" />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">Let’s build</div>
                <h3 className="text-3xl font-bold leading-tight md:text-4xl">Ready to build something great?</h3>
                <p className="text-sm text-white/80">Start a project with Zimnovate or book a call to plan your next move.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--zim-green)] px-6 py-3 text-sm font-semibold text-[var(--zim-black)] hover:brightness-110"
                >
                  Start a Project
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Book a Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
