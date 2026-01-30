import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const MotionDiv = motion.div

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0b3a7a_0%,#0e6bd8_45%,#1e90ff_70%,#32cd32_140%)] text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.35),transparent_55%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.22),transparent_55%)]" />
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(to_right,rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-24 pt-16 md:grid-cols-2 md:pb-32 md:pt-20">
        <MotionDiv
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">
            Tech professional. African modern. Minimal.
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Innovating Zimbabwe’s Digital Future
          </h1>
          <p className="max-w-xl text-base text-white/80 md:text-lg">
            Smart, quick, and reliable full-stack digital solutions — built for
            speed, security, and modern design.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--zim-green)] px-5 py-3 text-sm font-semibold text-[var(--zim-black)] shadow-sm hover:brightness-110"
            >
              Get a Free Consultation <ArrowRight size={18} />
            </Link>
            <a
              href="https://wa.me/263000000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15"
            >
              WhatsApp <MessageCircle size={18} />
            </a>
          </div>

          <div className="flex flex-wrap gap-3 text-xs text-white/80">
            <div className="rounded-full border border-white/20 bg-white/10 px-3 py-1">
              Performance-first
            </div>
            <div className="rounded-full border border-white/20 bg-white/10 px-3 py-1">
              Secure by design
            </div>
            <div className="rounded-full border border-white/20 bg-white/10 px-3 py-1">
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
          <div className="aspect-[4/3] w-full rounded-3xl border border-white/20 bg-white/10 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.25)] backdrop-blur">
            <div className="relative h-full overflow-hidden rounded-2xl bg-white/10">
              <div className="absolute inset-0 opacity-90">
                <div className="absolute -right-10 top-6 h-52 w-72 rotate-6 rounded-2xl bg-white/95 shadow-lg" />
                <div className="absolute -right-2 top-14 h-52 w-72 rotate-2 rounded-2xl bg-white/90 shadow-lg" />
                <div className="absolute right-8 top-24 h-52 w-72 -rotate-3 rounded-2xl bg-white shadow-lg" />
              </div>

              <div className="relative grid h-full place-items-center p-8">
                <div className="w-full max-w-sm rounded-2xl bg-[linear-gradient(135deg,rgba(30,144,255,0.18),rgba(50,205,50,0.12))] p-6 text-white">
                  <div className="text-xs font-semibold tracking-[0.25em] text-white/80">
                    DASHBOARD PREVIEW
                  </div>
                  <div className="mt-2 text-xl font-bold">Metrics, brand, growth</div>
                  <div className="mt-2 text-sm text-white/80">
                    Modern UI patterns and scalable components for real products.
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-2">
                    <div className="rounded-lg bg-white/10 p-3">
                      <div className="text-xs font-semibold">UX</div>
                      <div className="mt-1 h-2 rounded bg-white/30" />
                    </div>
                    <div className="rounded-lg bg-white/10 p-3">
                      <div className="text-xs font-semibold">SEO</div>
                      <div className="mt-1 h-2 rounded bg-white/30" />
                    </div>
                    <div className="rounded-lg bg-white/10 p-3">
                      <div className="text-xs font-semibold">Speed</div>
                      <div className="mt-1 h-2 rounded bg-white/30" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>

      <svg
        className="absolute bottom-0 left-0 right-0"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="var(--zim-bg)"
          d="M0,64L48,69.3C96,75,192,85,288,96C384,107,480,117,576,112C672,107,768,85,864,74.7C960,64,1056,64,1152,69.3C1248,75,1344,85,1392,90.7L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
        />
      </svg>
    </section>
  )
}

export default Hero
