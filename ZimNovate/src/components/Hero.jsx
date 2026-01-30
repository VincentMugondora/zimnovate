import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const MotionDiv = motion.div

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(30,144,255,0.25),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(50,205,50,0.18),transparent_55%)]" />
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(17,17,17,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,17,17,0.06)_1px,transparent_1px)] [background-size:28px_28px] dark:opacity-20" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-20">
        <MotionDiv
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--zim-border)] bg-[var(--zim-card)] px-3 py-1 text-xs font-semibold text-[var(--zim-fg)]/80">
            Tech professional. African modern. Minimal.
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Innovating Zimbabwe’s <span className="text-[var(--zim-blue)]">Digital</span>{' '}
            Future
          </h1>
          <p className="max-w-xl text-base text-[var(--zim-fg)]/75 md:text-lg">
            Smart, quick, and reliable full-stack digital solutions — built for
            speed, security, and modern design.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--zim-blue)] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:brightness-110"
            >
              Get a Free Consultation <ArrowRight size={18} />
            </Link>
            <a
              href="https://wa.me/263000000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-[var(--zim-border)] bg-[var(--zim-card)] px-5 py-3 text-sm font-semibold text-[var(--zim-fg)] hover:border-[var(--zim-green)]"
            >
              WhatsApp <MessageCircle size={18} />
            </a>
          </div>

          <div className="flex flex-wrap gap-3 text-xs text-[var(--zim-fg)]/70">
            <div className="rounded-full border border-[var(--zim-border)] bg-[var(--zim-bg)]/60 px-3 py-1">
              Performance-first
            </div>
            <div className="rounded-full border border-[var(--zim-border)] bg-[var(--zim-bg)]/60 px-3 py-1">
              Secure by design
            </div>
            <div className="rounded-full border border-[var(--zim-border)] bg-[var(--zim-bg)]/60 px-3 py-1">
              Mobile & responsive
            </div>
          </div>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="aspect-[4/3] w-full rounded-2xl border border-[var(--zim-border)] bg-[var(--zim-card)] p-5 shadow-sm">
            <div className="flex h-full flex-col justify-between rounded-xl bg-[var(--zim-bg)] p-5">
              <div>
                <div className="text-sm font-semibold text-[var(--zim-fg)]/80">
                  Delivery Framework
                </div>
                <div className="mt-1 text-2xl font-bold tracking-tight">
                  Discover → Design → Build
                </div>
                <div className="mt-3 text-sm text-[var(--zim-fg)]/70">
                  A clear process that keeps projects moving and stakeholders aligned.
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-lg border border-[var(--zim-border)] bg-[var(--zim-card)] p-3">
                  <div className="text-xs font-semibold text-[var(--zim-blue)]">
                    1
                  </div>
                  <div className="mt-1 text-sm font-semibold">Strategy</div>
                  <div className="mt-1 text-xs text-[var(--zim-fg)]/70">
                    Goals & scope
                  </div>
                </div>
                <div className="rounded-lg border border-[var(--zim-border)] bg-[var(--zim-card)] p-3">
                  <div className="text-xs font-semibold text-[var(--zim-green)]">
                    2
                  </div>
                  <div className="mt-1 text-sm font-semibold">Design</div>
                  <div className="mt-1 text-xs text-[var(--zim-fg)]/70">
                    UX & UI
                  </div>
                </div>
                <div className="rounded-lg border border-[var(--zim-border)] bg-[var(--zim-card)] p-3">
                  <div className="text-xs font-semibold text-[var(--zim-orange)]">
                    3
                  </div>
                  <div className="mt-1 text-sm font-semibold">Build</div>
                  <div className="mt-1 text-xs text-[var(--zim-fg)]/70">
                    Ship & iterate
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 -z-10 h-24 w-24 rounded-2xl bg-[var(--zim-blue)]/20 blur-xl" />
          <div className="absolute -top-6 -right-6 -z-10 h-24 w-24 rounded-2xl bg-[var(--zim-green)]/20 blur-xl" />
        </MotionDiv>
      </div>
    </section>
  )
}

export default Hero
