import React, { useMemo, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useTheme } from '../context/theme'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact' },
]

const Header = () => {
  const navigate = useNavigate()
  const { theme, toggleTheme } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)

  const linkBase =
    'text-sm font-semibold tracking-wide text-[var(--zim-fg)]/90 hover:text-[var(--zim-blue)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--zim-blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--zim-bg)]'

  const activeClass = useMemo(
    () =>
      ({ isActive }) =>
        `${linkBase} ${
          isActive
            ? 'text-[var(--zim-blue)]'
            : 'text-[var(--zim-fg)]/80'
        }`,
    [linkBase],
  )

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--zim-border)] bg-[var(--zim-bg)]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="flex items-center gap-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--zim-blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--zim-bg)]"
          aria-label="Go to homepage"
        >
          <img
            src="/logo.png"
            alt="Zimnovate"
            className="h-9 w-auto max-w-[180px] object-contain"
            loading="eager"
          />
        </button>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={activeClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--zim-border)] bg-[var(--zim-card)] text-[var(--zim-fg)] transition hover:border-[var(--zim-blue)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--zim-blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--zim-bg)]"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <NavLink
            to="/contact"
            className="hidden rounded-md bg-[var(--zim-blue)] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--zim-blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--zim-bg)] md:inline-flex"
          >
            Get a Consultation
          </NavLink>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--zim-border)] bg-[var(--zim-card)] text-[var(--zim-fg)] md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-[var(--zim-border)] bg-[var(--zim-bg)] md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4" aria-label="Mobile">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm font-semibold ${
                    isActive
                      ? 'bg-[var(--zim-card)] text-[var(--zim-blue)]'
                      : 'text-[var(--zim-fg)]/85 hover:bg-[var(--zim-card)]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex justify-center rounded-md bg-[var(--zim-blue)] px-4 py-2 text-sm font-semibold text-white"
            >
              Get a Consultation
            </NavLink>
          </div>
        </div>
      ) : null}
    </header>
  )
}

export default Header
