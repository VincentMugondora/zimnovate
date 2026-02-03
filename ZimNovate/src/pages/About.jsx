import React from 'react'
import { motion } from 'framer-motion'
import {
  Rocket,
  ShieldCheck,
  Sparkles,
  Globe2,
  Lightbulb,
  Gem,
  Search,
  PenTool,
  Code,
  Rocket as RocketLaunch,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import PageHero from '../components/PageHero.jsx'

const MotionDiv = motion.div

const About = () => {
  const processIcons = [Search, PenTool, Code, RocketLaunch]

  return (
    <div>
      <PageHero
        title="Built in Africa. Designed for the world."
        subtitle="We are a Zimbabwe-born digital agency shaping the future of business through technology, creativity, and strategic thinking."
        height="min-h-[45vh]"
      />

      {/* Intro CTA */}
      <section className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-4">
            <div className="inline-flex rounded-full bg-[#F4D47C]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#0F172A]">
              Who We Are
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
              Where vision meets smart technology
            </h2>
            <p className="text-sm leading-relaxed text-[#1A1A1A]/80 md:text-base">
              We transform ideas into powerful digital experiences. From strategy to launch, our teams deliver web, mobile, and brand systems built for speed, reliability, and measurable growth.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#F4D47C] px-5 py-3 text-sm font-semibold text-[#0F172A] hover:brightness-110"
              >
                Work With Us
              </a>
              <a
                href="#our-story"
                className="inline-flex items-center justify-center rounded-full border border-[#F4D47C]/20 bg-[#F4D47C]/5 px-5 py-3 text-sm font-semibold text-[#0F172A] hover:bg-[#F4D47C]/10"
              >
                Our Story
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-[#F4D47C]/20 bg-[#F9F5EF] p-1">
            <div className="relative h-80 overflow-hidden rounded-3xl">
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&crop=entropy&auto=format" 
                alt="Team working in modern office"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-[#F9F5EF]">
        <div className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div className="space-y-4">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">Our Mission</div>
              <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
                Our mission is simple: empower businesses to grow with technology that's built to last.
              </h3>
              <p className="text-sm leading-relaxed text-[#1A1A1A]/80 md:text-base">
                We combine modern engineering, human-centered design, and Africa's spirit of innovation to create digital experiences that truly move people.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-[#F4D47C]/20 bg-[#F4D47C]/5 p-8">
              <div className="absolute inset-0 opacity-10">
                <div className="h-full w-full" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23F4D47C' stroke-width='2'%3E%3Cpath d='M30 5v50M5 30h50M10 10l40 40M10 40l40-40'/%3E%3C/g%3E%3C/svg%3E")`, backgroundRepeat: 'repeat' }} />
              </div>
              <div className="relative flex h-32 items-center justify-center">
                <div className="h-20 w-20 rounded-full border-4 border-[#F4D47C]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section id="our-story" className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-center">
          <div className="space-y-4">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">Our Story</div>
            <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
              Founded in Zimbabwe. Built for the world.
            </h3>
            <p className="text-sm leading-relaxed text-[#1A1A1A]/80 md:text-base">
              Founded in Zimbabwe, Zimnovate was built from the belief that African talent can build world-class digital solutions. What started as a one-person vision is now a growing team of developers, designers, and strategists creating meaningful digital experiences.
            </p>
            <div className="grid gap-2 text-sm text-[#1A1A1A]/80">
              {['We listen.', 'We plan.', 'We create.', 'We innovate.'].map((line) => (
                <div key={line} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#F4D47C]" /> {line}
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-[#F4D47C]/20 bg-[#F9F5EF] p-8">
            <div className="absolute inset-0 opacity-5">
              <div className="h-full w-full" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23F4D47C' stroke-width='1'%3E%3Cpath d='M20 2v36M2 20h36M6 6l28 28M6 28l28-28'/%3E%3C/g%3E%3C/svg%3E")`, backgroundRepeat: 'repeat' }} />
            </div>
            <div className="relative h-48 rounded-2xl bg-gradient-to-br from-[#F4D47C]/20 to-[#F4D47C]/5 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#0F172A]">Z</div>
                <div className="text-sm text-[#1A1A1A]/60">Zimnovate</div>
              </div>
            </div>
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

      {/* Core Values */}
      <section className="bg-[#F9F5EF]">
        <div className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
          <div className="text-center space-y-4">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">Core Values</div>
            <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
              What guides everything we do
            </h3>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Innovation with Purpose',
                desc: 'We design with meaning, not just aesthetics.',
                icon: Lightbulb,
              },
              {
                title: 'Transparency & Trust',
                desc: 'Everything we do is honest, clear, and collaborative.',
                icon: ShieldCheck,
              },
              {
                title: 'Excellence in Execution',
                desc: 'Quality is not an act — it\'s our culture.',
                icon: Gem,
              },
            ].map((value) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="relative overflow-hidden rounded-2xl border border-[#F4D47C]/20 bg-white p-6 shadow-sm"
                >
                  <div className="absolute inset-0 opacity-5">
                    <div className="h-full w-full" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23F4D47C' stroke-width='1'%3E%3Cpath d='M15 2v26M2 15h26M6 6l18 18M6 18l18-18'/%3E%3C/g%3E%3C/svg%3E")`, backgroundRepeat: 'repeat' }} />
                  </div>
                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F4D47C]/10 text-[#F4D47C] mb-4">
                      <Icon size={20} />
                    </div>
                    <h4 className="text-lg font-bold text-[#0F172A] mb-2">{value.title}</h4>
                    <p className="text-sm text-[#1A1A1A]/70">{value.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
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

      {/* Why Choose Us */}
      <section className="bg-[#0F172A] text-white">
        <div className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
          <div className="text-center space-y-4">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">Why Choose Us</div>
            <h3 className="text-3xl font-bold tracking-tight md:text-4xl">
              Numbers that speak for themselves
            </h3>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-4">
            {[
              { number: '30+', label: 'Projects delivered' },
              { number: '15+', label: 'Industries served' },
              { number: '95%', label: 'Satisfaction rate' },
              { number: '100%', label: 'Transparency' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-[#F4D47C] md:text-5xl">{stat.number}</div>
                <div className="mt-2 text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#F9F5EF]">
        <div className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
          <div className="relative overflow-hidden rounded-3xl border border-[#F4D47C]/20 bg-[#F4D47C] p-10 text-[#0F172A] shadow-[0_28px_80px_rgba(0,0,0,0.15)]">
            <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-white/20 blur-3xl" />
            <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-white/10 blur-3xl" />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0F172A]/70">Let's build</div>
                <h3 className="text-3xl font-bold leading-tight md:text-4xl">
                  Let's build something extraordinary, together.
                </h3>
                <p className="text-sm text-[#0F172A]/80">
                  Start a project with Zimnovate or book a call to plan your next move.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#0F172A] px-6 py-3 text-sm font-semibold text-white hover:brightness-110"
                >
                  Start Your Project
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-[#0F172A]/20 bg-white/10 px-6 py-3 text-sm font-semibold text-[#0F172A] hover:bg-white/20"
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
