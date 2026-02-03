import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const MotionDiv = motion.div

const Hero = () => {
  return (
    <section className="bg-white p-[10px]">
      <div
        className="relative mx-auto w-full overflow-hidden rounded-[28px] border border-[var(--zim-border)] bg-white shadow-[0_28px_80px_rgba(0,0,0,0.12)]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(17,24,39,0.85), rgba(17,17,17,0.85)), url(/imgs/agency.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(17,17,17,0.12)_1px,transparent_1px)] [background-size:22px_22px]" />


        <div className="px-6 py-16 text-center text-white md:px-10 md:py-20">
          <MotionDiv
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl"
          >
            <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl md:leading-[0.95]">
              INNOVATE AND GROW
              <br />
              WITH ZIMNOVATE
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm text-white/75 md:text-base">
              Building Zimbabwe's future by combining bold ideas, local expertise,
              and world-class digital execution.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[var(--zim-green)] px-8 py-3 text-sm font-semibold text-[var(--zim-black)] hover:brightness-110"
              >
                Start Your Project
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/5 px-8 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Learn More
              </Link>
            </div>

            <div className="mt-10 flex justify-center">
              <a
                href="https://wa.me/263000000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white/80 hover:text-white"
              >
                WhatsApp <MessageCircle size={18} />
              </a>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}

export default Hero
