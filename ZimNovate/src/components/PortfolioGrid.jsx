import React, { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'

const MotionButton = motion.button

const getTags = (projects) => {
  const set = new Set(['All'])
  projects.forEach((p) => p.tags.forEach((t) => set.add(t)))
  return Array.from(set)
}

const PortfolioGrid = ({ projects }) => {
  const tags = useMemo(() => getTags(projects), [projects])
  const [activeTag, setActiveTag] = useState('All')
  const [activeProject, setActiveProject] = useState(null)

  const filtered = useMemo(() => {
    if (activeTag === 'All') return projects
    return projects.filter((p) => p.tags.includes(activeTag))
  }, [activeTag, projects])

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setActiveProject(null)
    }

    if (activeProject) {
      document.addEventListener('keydown', onKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [activeProject])

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setActiveTag(t)}
            className={`rounded-full border px-3 py-1 text-xs font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--zim-blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--zim-bg)] ${
              activeTag === t
                ? 'border-[var(--zim-blue)] bg-[var(--zim-blue)] text-white'
                : 'border-[var(--zim-border)] bg-[var(--zim-card)] text-[var(--zim-fg)]/80 hover:border-[var(--zim-blue)]'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <MotionButton
            key={p.id}
            type="button"
            onClick={() => setActiveProject(p)}
            className="group flex cursor-pointer flex-col overflow-hidden rounded-xl border border-[var(--zim-border)] bg-[var(--zim-card)] text-left shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--zim-blue)]"
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          >
            <div className="relative aspect-[16/10] w-full bg-[var(--zim-bg)]">
              <img
                src={p.images?.[0]}
                alt=""
                className="h-full w-full object-contain p-8 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/0 opacity-0 transition group-hover:opacity-100" />
            </div>
            <div className="flex flex-1 flex-col gap-2 p-4">
              <div className="text-xs font-semibold tracking-wide text-[var(--zim-blue)]">
                {p.category}
              </div>
              <div className="text-base font-bold">{p.title}</div>
              <div className="text-sm text-[var(--zim-fg)]/75">
                {p.description}
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {p.tags.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[var(--zim-border)] bg-[var(--zim-bg)]/60 px-2 py-0.5 text-xs font-semibold text-[var(--zim-fg)]/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </MotionButton>
        ))}
      </div>

      {activeProject ? (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Project details"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setActiveProject(null)
          }}
        >
          <div className="w-full max-w-3xl overflow-hidden rounded-2xl border border-[var(--zim-border)] bg-[var(--zim-bg)] shadow-xl">
            <div className="flex items-start justify-between gap-4 border-b border-[var(--zim-border)] p-4">
              <div>
                <div className="text-xs font-semibold tracking-wide text-[var(--zim-blue)]">
                  {activeProject.category}
                </div>
                <div className="mt-1 text-xl font-bold">{activeProject.title}</div>
              </div>
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--zim-border)] bg-[var(--zim-card)]"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            <div className="grid gap-6 p-6 md:grid-cols-2">
              <div className="rounded-xl border border-[var(--zim-border)] bg-[var(--zim-card)] p-4">
                <img
                  src={activeProject.images?.[0]}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="space-y-4">
                <p className="text-sm text-[var(--zim-fg)]/75">
                  {activeProject.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {activeProject.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[var(--zim-border)] bg-[var(--zim-card)] px-2 py-1 text-xs font-semibold text-[var(--zim-fg)]/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="rounded-xl border border-[var(--zim-border)] bg-[var(--zim-card)] p-4">
                  <div className="text-sm font-semibold">What we delivered</div>
                  <ul className="mt-2 grid gap-2 text-sm text-[var(--zim-fg)]/75">
                    <li>Clear scope & milestones</li>
                    <li>Modern UI with accessible components</li>
                    <li>Performance-focused implementation patterns</li>
                    <li>Secure data handling approach</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default PortfolioGrid
