import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowDown, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-white text-white">
      <div className="w-full p-5">
        <div className="rounded-[32px] bg-[#0b0b0b] px-6 py-10 shadow-[0_30px_80px_rgba(0,0,0,0.45)] ring-1 ring-white/5 md:px-10 md:py-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <h2 className="text-3xl font-extrabold uppercase leading-tight text-transparent bg-gradient-to-b from-[#dcdcdc] via-white to-[#c0c0c0] bg-clip-text md:text-4xl">
                Ready to work with us?
              </h2>
              <p className="text-sm tracking-wide text-white/70 md:text-base">
                PARTNER WITH OUR DESIGN AGENCY FOR YOUR BUSINESS WITH AMAZING RESULTS.
              </p>
            </div>
            <div className="grid place-items-center">
              <svg
                viewBox="0 0 120 120"
                className="h-24 w-24 drop-shadow-[0_12px_30px_rgba(156,255,95,0.35)]"
                aria-label="Get Started"
              >
                <defs>
                  <path id="circleText" d="M60,14a46,46 0 1,1 0,92a46,46 0 1,1 0,-92" />
                </defs>
                <circle cx="60" cy="60" r="54" fill="#9cff5f" stroke="#9cff5f" strokeWidth="2" />
                <text
                  fill="#0b0b0b"
                  fontSize="8.5"
                  fontWeight="700"
                  letterSpacing="2.5"
                  textAnchor="middle"
                  className="uppercase"
                >
                  <textPath href="#circleText" startOffset="50%">
                    GET STARTED • GET STARTED • GET STARTED •
                  </textPath>
                </text>
                <g fill="none" stroke="#0b0b0b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="60" y1="42" x2="60" y2="70" />
                  <polyline points="52,62 60,72 68,62" />
                </g>
              </svg>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10" />

          <div className="mt-10 space-y-10">
            {/* First main div - Brand + All Links combined */}
            <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
              <div className="space-y-4">
                <div className="text-sm font-semibold uppercase tracking-wide">DIGIMON</div>
                <p className="text-sm text-white/70 leading-relaxed max-w-xs">
                  We know how important customer experience is for a business and therefore, we strive
                </p>
                <div className="flex items-center gap-3 text-white/80">
                  {[Instagram, Facebook, Twitter, Linkedin, Youtube].map((Icon, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="grid h-9 w-9 place-items-center rounded-full bg-white/5 hover:bg-white/10 transition"
                      aria-label="Social link"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
                <div className="text-xs text-white/60">DIGIMON, Inc.</div>
              </div>

              <div className="space-y-3">
                <div className="text-sm font-semibold text-white">Data Science</div>
                <nav className="grid gap-2 text-sm text-white/70" aria-label="Data Science">
                  <Link to="#" className="hover:text-white">Business Use-Case</Link>
                  <Link to="#" className="hover:text-white">Data Roles</Link>
                  <Link to="#" className="hover:text-white">Blog</Link>
                  <Link to="#" className="hover:text-white">Management</Link>
                  <Link to="#" className="hover:text-white">Privacy Policy</Link>
                </nav>
              </div>

              <div className="space-y-3">
                <div className="text-sm font-semibold text-white">About</div>
                <nav className="grid gap-2 text-sm text-white/70" aria-label="About">
                  <Link to="/contact" className="hover:text-white">Contact Us</Link>
                  <Link to="/services" className="hover:text-white">Support Us</Link>
                  <Link to="/about" className="hover:text-white">Community</Link>
                  <Link to="/about" className="hover:text-white">FAQ</Link>
                </nav>
              </div>

              <div className="space-y-3">
                <div className="text-sm font-semibold text-white">Programs</div>
                <nav className="grid gap-2 text-sm text-white/70" aria-label="Programs">
                  <Link to="#" className="hover:text-white">Learning Modules</Link>
                  <Link to="#" className="hover:text-white">Partnership</Link>
                  <Link to="#" className="hover:text-white">Events</Link>
                  <Link to="#" className="hover:text-white">Data Analyst</Link>
                </nav>
              </div>
            </div>

            {/* Space between */}
            <div className="border-t border-white/10" />

            {/* Second div - Just the links */}
            <div className="grid gap-10 md:grid-cols-3">
              <div className="space-y-3">
                <div className="text-sm font-semibold text-white">Data Science</div>
                <nav className="grid gap-2 text-sm text-white/70" aria-label="Data Science">
                  <Link to="#" className="hover:text-white">Business Use-Case</Link>
                  <Link to="#" className="hover:text-white">Data Roles</Link>
                  <Link to="#" className="hover:text-white">Blog</Link>
                  <Link to="#" className="hover:text-white">Management</Link>
                  <Link to="#" className="hover:text-white">Privacy Policy</Link>
                </nav>
              </div>

              <div className="space-y-3">
                <div className="text-sm font-semibold text-white">About</div>
                <nav className="grid gap-2 text-sm text-white/70" aria-label="About">
                  <Link to="/contact" className="hover:text-white">Contact Us</Link>
                  <Link to="/services" className="hover:text-white">Support Us</Link>
                  <Link to="/about" className="hover:text-white">Community</Link>
                  <Link to="/about" className="hover:text-white">FAQ</Link>
                </nav>
              </div>

              <div className="space-y-3">
                <div className="text-sm font-semibold text-white">Programs</div>
                <nav className="grid gap-2 text-sm text-white/70" aria-label="Programs">
                  <Link to="#" className="hover:text-white">Learning Modules</Link>
                  <Link to="#" className="hover:text-white">Partnership</Link>
                  <Link to="#" className="hover:text-white">Events</Link>
                  <Link to="#" className="hover:text-white">Data Analyst</Link>
                </nav>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-2 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
            <div>Copyright © {new Date().getFullYear()} DIGIMON</div>
            <div className="text-white/50">All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
