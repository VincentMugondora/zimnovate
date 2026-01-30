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

      <section className="relative">
        <div className="absolute inset-0 -z-10 opacity-50 [background-image:radial-gradient(rgba(17,17,17,0.06)_1px,transparent_1px)] [background-size:18px_18px]" />
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:items-center md:py-20">
          <div className="space-y-4">
            <div className="text-xl font-bold">About Zimnovate</div>
            <p className="text-sm text-[var(--zim-fg)]/75 md:text-base">
              Zimnovate is a forward-thinking digital agency based in Zimbabwe,
              dedicated to helping businesses grow and thrive in the digital age
              through innovative tech solutions.
            </p>
            <Link
              to="/about"
              className="inline-flex w-fit items-center justify-center rounded-md bg-[var(--zim-green)] px-5 py-2.5 text-sm font-semibold text-[var(--zim-black)] hover:brightness-110"
            >
              Learn More
            </Link>
          </div>

          <div className="rounded-2xl border border-[var(--zim-border)] bg-[var(--zim-card)] p-3 shadow-sm">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[linear-gradient(135deg,rgba(30,144,255,0.25),rgba(50,205,50,0.18))]">
              <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:28px_28px]" />
              <div className="absolute bottom-4 left-4 rounded-lg bg-white/80 px-3 py-2 text-xs font-semibold text-[var(--zim-black)]">
                Image placeholder
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--zim-gray)]/40">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="text-xl font-bold">Our Services</div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {topServices.map((s) => (
              <ServiceCard key={s.id} service={s} variant="compact" />
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-md border border-[var(--zim-border)] bg-[var(--zim-bg)] px-5 py-2.5 text-sm font-semibold text-[var(--zim-blue)] hover:border-[var(--zim-blue)]"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="text-center">
          <div className="text-2xl font-bold md:text-3xl">Why Choose Zimnovate?</div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {topProjects.map((p, idx) => (
            <MotionDiv
              key={p.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="overflow-hidden rounded-2xl border border-[var(--zim-border)] bg-[var(--zim-bg)] shadow-sm"
            >
              <div className="aspect-[16/9] bg-[linear-gradient(135deg,rgba(30,144,255,0.25),rgba(255,165,0,0.2))]" />
              <div className="p-5">
                <div className="text-sm font-bold">{p.title}</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.tags.slice(0, 2).map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-[var(--zim-gray)] px-2 py-1 text-xs font-semibold text-[var(--zim-black)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-1 text-xs text-[var(--zim-orange)]">
                  <span>★★★★★</span>
                  <span className="ml-auto text-[var(--zim-fg)]/60">5.0</span>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center rounded-md bg-[var(--zim-blue)] px-5 py-2.5 text-sm font-semibold text-white hover:brightness-110"
          >
            View Full Portfolio
          </Link>
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

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#111827_0%,#0b1220_45%,#111111_100%)]">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="text-center text-white">
            <div className="text-2xl font-bold md:text-3xl">
              Let’s Build Something Great Together.
            </div>
            <div className="mt-3 text-sm text-white/80 md:text-base">
              Ready to elevate your business with innovative digital solutions?
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md bg-[var(--zim-blue)] px-6 py-3 text-sm font-semibold text-white hover:brightness-110"
              >
                Get a Free Consultation
              </Link>
              <a
                href="https://wa.me/263000000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15"
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
