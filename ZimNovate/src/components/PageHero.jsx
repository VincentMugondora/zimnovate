import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { X } from 'lucide-react'

const MotionDiv = motion.div

const PageHero = ({ title, subtitle, height = 'min-h-[40vh]' }) => {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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
        className={`relative mx-auto w-full overflow-hidden rounded-[28px] border border-[var(--zim-border)] bg-white shadow-[0_28px_80px_rgba(0,0,0,0.12)] ${height}`}
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

            <nav className="hidden items-center gap-8 text-sm font-semibold text-white/85 md:flex" aria-label="Hero">
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

            {/* Mobile nav */}
            <nav className="flex items-center gap-3 text-sm font-semibold text-white/85 md:hidden" aria-label="Hero mobile">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-white ${isActive ? 'text-white' : 'text-white/80'}`
                }
              >
                Home
              </NavLink>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setServicesOpen((prev) => !prev)}
                  className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white hover:bg-white/10"
                >
                  Services
                  <span className="text-xs">▾</span>
                </button>
                <div
                  className={`absolute left-0 top-full mt-2 min-w-[220px] rounded-xl border border-white/10 bg-[#0b0b0b]/95 p-3 text-sm shadow-2xl backdrop-blur-md transition duration-150 ease-out ${
                    servicesOpen ? 'block' : 'hidden'
                  }`}
                >
                  <div className="grid gap-2">
                    {serviceLinks.map((link) => (
                      <NavLink
                        key={link.to}
                        to={link.to}
                        onClick={() => setServicesOpen(false)}
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

            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[var(--zim-green)] px-5 py-2 text-sm font-semibold text-[var(--zim-black)] hover:brightness-110"
              >
                Start a Project
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
              <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl md:leading-[0.95]">
                {title}
              </h1>

              {subtitle && (
                <p className="mx-auto mt-6 max-w-2xl text-sm text-white/75 md:text-base">
                  {subtitle}
                </p>
              )}
            </MotionDiv>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageHero
