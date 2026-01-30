import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="border-t border-[var(--zim-border)] bg-[var(--zim-bg)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-[var(--zim-blue)] text-white">
              Z
            </span>
            <span className="text-lg font-bold">Zimnovate</span>
          </div>
          <p className="text-sm text-[var(--zim-fg)]/70">
            Smart, quick, and reliable full-stack digital solutions with a modern
            African-tech edge.
          </p>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-semibold">Navigate</div>
          <nav className="grid gap-2 text-sm" aria-label="Footer">
            <Link className="text-[var(--zim-fg)]/75 hover:text-[var(--zim-blue)]" to="/about">
              About
            </Link>
            <Link className="text-[var(--zim-fg)]/75 hover:text-[var(--zim-blue)]" to="/services">
              Services
            </Link>
            <Link className="text-[var(--zim-fg)]/75 hover:text-[var(--zim-blue)]" to="/portfolio">
              Portfolio
            </Link>
            <Link className="text-[var(--zim-fg)]/75 hover:text-[var(--zim-blue)]" to="/contact">
              Contact
            </Link>
          </nav>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-semibold">Contact</div>
          <div className="text-sm text-[var(--zim-fg)]/75">
            <div>Email: hello@zimnovate.co.zw</div>
            <div className="mt-1">WhatsApp: +263 00 000 0000</div>
            <div className="mt-1">Harare, Zimbabwe</div>
          </div>
          <a
            className="inline-flex w-fit rounded-md bg-[var(--zim-green)] px-4 py-2 text-sm font-semibold text-[var(--zim-black)] hover:brightness-110"
            href="https://wa.me/263000000000"
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-[var(--zim-border)]">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-4 py-6 text-sm text-[var(--zim-fg)]/60 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Zimnovate. All rights reserved.</div>
          <div>Built for performance, accessibility, and modern web standards.</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
