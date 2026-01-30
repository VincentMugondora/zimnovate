import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const MotionDiv = motion.div

const Hero = () => {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.62), rgba(0,0,0,0.62)), url(/hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-20 text-center md:py-28">
        <MotionDiv
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
            WE BUILD AND SCALE
            <br />
            DIGITAL PRODUCTS
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm text-white/75 md:text-base">
            Founding successful companies by combining ideas with business
            expertise, capital and technical execution.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[var(--zim-green)] px-7 py-3 text-sm font-semibold text-[var(--zim-black)] hover:brightness-110"
            >
              Get Started
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-7 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              How it work
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
    </section>
  )
}

export default Hero
