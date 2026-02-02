import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className="mx-auto max-w-7xl px-12 py-16 md:px-16 md:py-24 lg:px-20">
      <div className="rounded-2xl border border-[var(--zim-border)] bg-[var(--zim-card)] p-10">
        <div className="text-xs font-semibold tracking-[0.25em] text-[var(--zim-orange)]">
          404
        </div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
          Page not found
        </h1>
        <p className="mt-3 text-sm text-[var(--zim-fg)]/75 md:text-base">
          The page you’re looking for doesn’t exist or may have moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-md bg-[var(--zim-blue)] px-4 py-2 text-sm font-semibold text-white hover:brightness-110"
        >
          Back to Home
        </Link>
      </div>
    </section>
  )
}

export default NotFound
