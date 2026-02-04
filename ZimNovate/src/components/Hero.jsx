import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, ChevronDown } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const MotionDiv = motion.div

const Hero = () => {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const closeTimer = useRef(null)
  const location = useLocation()

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setServicesOpen(true)
  }

  const closeServicesDelayed = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setServicesOpen(false), 220)
  }

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current)
    }
  }, [])
  const serviceLinks = [
    { label: 'Web Development', to: '/services/web-development' },
    { label: 'Mobile Apps', to: '/services/mobile-app-development' },
    { label: 'Branding & Design', to: '/services/branding' },
    { label: 'Digital Strategy', to: '/services/digital-strategy' },
    { label: 'Digital Marketing', to: '/services/digital-marketing' },
    { label: 'AI & Automation', to: '/services/ai-automation' },
    { label: 'E-commerce Solutions', to: '/services/e-commerce' },
  ]

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
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(17,17,17,0.12)_1px,transparent_1px)] [background-size:22px_22px]" />

        <div className="relative z-10 w-full p-[10px]">
          <div className="flex items-center justify-between gap-4 px-6 py-4 text-white md:px-10">
            <Link to="/" className="flex items-center gap-2" aria-label="Go to homepage">
              <img
                src="/logo.png"
                alt="Zimnovate"
                className="h-20 w-auto max-w-[180px] object-contain"
                loading="eager"
              />
            </Link>

            {/* Mobile hamburger button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-300 hover:bg-white/20 hover:scale-110 focus:outline-none md:hidden"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              <div className="relative flex h-4 w-5 flex-col items-center justify-center">
                <span
                  className={`absolute h-0.5 w-5 transform rounded-full bg-white transition-all duration-300 ease-out ${
                    mobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-5 transform rounded-full bg-white transition-all duration-300 ease-out ${
                    mobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-5 transform rounded-full bg-white transition-all duration-300 ease-out ${
                    mobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'
                  }`}
                />
              </div>
            </button>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-6 text-sm font-semibold text-white/85 lg:flex" aria-label="Hero">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-white ${isActive ? 'text-white' : 'text-white/80'}`
                }
              >
                Home
              </NavLink>

              <div
                className="relative"
                onMouseEnter={openServices}
                onMouseLeave={closeServicesDelayed}
              >
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `flex items-center gap-1 hover:text-white ${
                      isActive ? 'text-white' : 'text-white/80'
                    }`
                  }
                >
                  Services
                </NavLink>
                <div
                  className={`absolute left-0 top-full mt-2 min-w-[220px] rounded-xl border border-white/10 bg-[#0b0b0b]/90 p-3 text-sm shadow-2xl backdrop-blur-md transition duration-150 ease-out ${
                    servicesOpen ? 'block' : 'hidden'
                  }`}
                  onMouseEnter={openServices}
                  onMouseLeave={closeServicesDelayed}
                >
                  <div className="grid gap-2">
                    {serviceLinks.map((link) => (
                      <NavLink
                        key={link.to}
                        to={link.to}
                        className={({ isActive }) =>
                          `rounded-lg px-3 py-2 transition hover:bg-white/10 ${
                            isActive ? 'text-white' : 'text-white/80'
                          }`
                        }
                      >
                        {link.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>

              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  `hover:text-white ${isActive ? 'text-white' : 'text-white/80'}`
                }
              >
                Portfolio
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `hover:text-white ${isActive ? 'text-white' : 'text-white/80'}`
                }
              >
                Blog
              </NavLink>
              <NavLink
                to="/careers"
                className={({ isActive }) =>
                  `hover:text-white ${isActive ? 'text-white' : 'text-white/80'}`
                }
              >
                Careers
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `hover:text-white ${isActive ? 'text-white' : 'text-white/80'}`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `hover:text-white ${isActive ? 'text-white' : 'text-white/80'}`
                }
              >
                Contact
              </NavLink>
            </nav>

            {/* Desktop CTA buttons */}
            <div className="hidden items-center gap-3 md:flex">
              <Link to="/contact" className="hidden text-sm font-semibold text-white/80 hover:text-white lg:inline-flex">
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

          {/* Mobile menu drawer with Framer Motion */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
                  onClick={() => setMobileMenuOpen(false)}
                />
                {/* Drawer */}
                <motion.div
                  initial={{ x: '100%', opacity: 0.8 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: '100%', opacity: 0.8 }}
                  transition={{ 
                    type: 'spring', 
                    damping: 25, 
                    stiffness: 200,
                    opacity: { duration: 0.2 }
                  }}
                  className="fixed right-0 top-0 z-50 h-full w-[280px] max-w-[85vw] bg-gradient-to-b from-[#0b0b0b] to-[#1a1a1a] shadow-2xl md:hidden"
                >
                  <div className="flex items-center justify-between border-b border-white/10 p-4">
                    <motion.span 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                      className="text-lg font-bold text-white"
                    >
                      Menu
                    </motion.span>
                    <motion.button
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      transition={{ delay: 0.15, duration: 0.3 }}
                      type="button"
                      onClick={() => setMobileMenuOpen(false)}
                      className="inline-flex items-center justify-center rounded-full p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
                      aria-label="Close menu"
                    >
                      <X size={20} />
                    </motion.button>
                  </div>
                  <nav className="flex flex-col p-4" aria-label="Mobile">
                    {[
                      { to: '/', label: 'Home', hasSubmenu: false },
                      { to: '/services', label: 'Services', hasSubmenu: true },
                      { to: '/portfolio', label: 'Portfolio', hasSubmenu: false },
                      { to: '/blog', label: 'Blog', hasSubmenu: false },
                      { to: '/careers', label: 'Careers', hasSubmenu: false },
                      { to: '/about', label: 'About', hasSubmenu: false },
                      { to: '/contact', label: 'Contact', hasSubmenu: false },
                    ].map((item, index) => (
                      <motion.div
                        key={item.to}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          delay: 0.1 + index * 0.08,
                          type: 'spring',
                          damping: 20,
                          stiffness: 150
                        }}
                      >
                        {item.hasSubmenu ? (
                          <>
                            <button
                              type="button"
                              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                              className={`group relative flex w-full items-center justify-between overflow-hidden rounded-lg px-4 py-3 text-base font-semibold transition-all duration-300 ${
                                location.pathname.startsWith('/services') ? 'text-white' : 'text-white/80 hover:text-white'
                              }`}
                            >
                              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[var(--zim-green)]/20 to-transparent transition-transform duration-300 group-hover:translate-x-0" />
                              <span className="relative flex items-center gap-3">
                                <span className={
                                  `h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                                    location.pathname.startsWith('/services')
                                      ? 'bg-[var(--zim-green)] scale-125'
                                      : 'bg-white/40 group-hover:bg-[var(--zim-green)]'
                                  }`
                                } />
                                {item.label}
                              </span>
                              <ChevronDown
                                size={18}
                                className={`relative transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                              />
                            </button>
                            <AnimatePresence mode="wait">
                              {mobileServicesOpen && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0, x: -20 }}
                                  animate={{ opacity: 1, height: 'auto', x: 0 }}
                                  exit={{ opacity: 0, height: 0, x: -30, scale: 0.95 }}
                                  transition={{
                                    opacity: { duration: 0.2 },
                                    height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                                    x: { type: 'spring', damping: 20, stiffness: 100 },
                                    scale: { duration: 0.2 }
                                  }}
                                  className="overflow-hidden"
                                >
                                  <div className="ml-4 border-l border-white/20 pl-4 py-2 space-y-1">
                                    {serviceLinks.map((link, idx) => (
                                      <motion.div
                                        key={link.to}
                                        initial={{ opacity: 0, x: -20, scale: 0.9 }}
                                        animate={{ opacity: 1, x: 0, scale: 1 }}
                                        exit={{ opacity: 0, x: -15, scale: 0.9 }}
                                        transition={{
                                          delay: idx * 0.05,
                                          duration: 0.25,
                                          exit: { delay: (serviceLinks.length - idx - 1) * 0.03, duration: 0.15 }
                                        }}
                                      >
                                        <NavLink
                                          to={link.to}
                                          onClick={() => setMobileMenuOpen(false)}
                                          className={({ isActive }) =>
                                            `block rounded-lg px-3 py-2 text-sm transition-all duration-200 ${
                                              isActive ? 'text-white bg-white/10' : 'text-white/70 hover:text-white hover:bg-white/5'
                                            }`
                                          }
                                        >
                                          {link.label}
                                        </NavLink>
                                      </motion.div>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <NavLink
                            to={item.to}
                            onClick={() => setMobileMenuOpen(false)}
                            className={({ isActive }) =>
                              `group relative block overflow-hidden rounded-lg px-4 py-3 text-base font-semibold transition-all duration-300 ${
                                isActive ? 'text-white' : 'text-white/80 hover:text-white'
                              }`
                            }
                          >
                            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[var(--zim-green)]/20 to-transparent transition-transform duration-300 group-hover:translate-x-0" />
                            <span className="relative flex items-center gap-3">
                              <span className={
                                `h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                                  location.pathname === item.to
                                    ? 'bg-[var(--zim-green)] scale-125'
                                    : 'bg-white/40 group-hover:bg-[var(--zim-green)]'
                                }`
                              } />
                              {item.label}
                            </span>
                          </NavLink>
                        )}
                      </motion.div>
                    ))}
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.4, type: 'spring' }}
                      className="mt-6 border-t border-white/10 pt-6"
                    >
                      <Link
                        to="/contact"
                        onClick={() => setMobileMenuOpen(false)}
                        className="mb-3 block w-full rounded-full bg-[var(--zim-green)] px-4 py-3 text-center text-sm font-semibold text-[var(--zim-black)] transition-all duration-300 hover:scale-[1.02] hover:brightness-110"
                      >
                        Sign Up
                      </Link>
                      <Link
                        to="/contact"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block w-full rounded-full border border-white/30 px-4 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-white/10"
                      >
                        Sign In
                      </Link>
                    </motion.div>
                  </nav>
                </motion.div>
              </>
            )}
          </AnimatePresence>

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
