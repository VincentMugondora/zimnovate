import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const MotionDiv = motion.div

const Hero = () => {
  return (
    <section className="bg-white p-5">
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

        <div className="relative">
          <div className="flex items-center justify-between gap-4 px-6 py-4 text-white md:px-10">
            <Link to="/" className="flex items-center gap-2" aria-label="Go to homepage">
              <img
                src="/logo.png"
                alt="Zimnovate"
                className="h-20 w-auto max-w-[180px] object-contain"
                loading="eager"
              />
            </Link>

            <nav className="hidden items-center gap-8 text-sm font-semibold text-white/85 md:flex" aria-label="Hero">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About' },
                { to: '/services', label: 'Services' },
                { to: '/portfolio', label: 'Advisor' },
              ].map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `hover:text-white ${
                      isActive ? 'text-white' : 'text-white/80'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Link to="/contact" className="hidden text-sm font-semibold text-white/80 hover:text-white md:inline-flex">
                Sign In
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[var(--zim-green)] px-5 py-2 text-sm font-semibold text-[var(--zim-black)] hover:brightness-110"
              >
                Sign Up
              </Link>
            </div>
          </div>

          <div className="px-6 py-16 text-center text-white md:px-10 md:py-20">
            <MotionDiv
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-4xl"
            >
              <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl md:leading-[0.95]">
                INNOVATE AND GROW
                <br />
                WITH ZIMNOVATE
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-sm text-white/75 md:text-base">
                Building Zimbabwe’s future by combining bold ideas, local expertise,
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
      </div>
    </section>
  )
}

export default Hero
