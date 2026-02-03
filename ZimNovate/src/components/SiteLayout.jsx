import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

const SiteLayout = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-[var(--zim-bg)] text-[var(--zim-fg)] overflow-x-hidden">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 rounded-md bg-[var(--zim-blue)] px-3 py-2 text-sm font-semibold text-white"
      >
        Skip to content
      </a>
      <main id="main" className="min-h-[70vh]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default SiteLayout
