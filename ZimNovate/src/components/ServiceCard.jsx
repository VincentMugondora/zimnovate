import React from 'react'
import { motion } from 'framer-motion'

const MotionDiv = motion.div

const ServiceCard = ({ service }) => {
  return (
    <MotionDiv
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group rounded-xl border border-[var(--zim-border)] bg-[var(--zim-card)] p-5 shadow-sm"
    >
      <div
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white"
        style={{ background: service.accent }}
        aria-hidden="true"
      >
        Z
      </div>
      <div className="mt-4 text-sm font-semibold text-[var(--zim-fg)]/70">
        {service.category}
      </div>
      <div className="mt-1 text-lg font-bold">{service.title}</div>
      <p className="mt-2 text-sm text-[var(--zim-fg)]/75">
        {service.description}
      </p>
      <ul className="mt-4 grid gap-2 text-sm text-[var(--zim-fg)]/75">
        {service.highlights.map((h) => (
          <li key={h} className="flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: service.accent }}
            />
            <span>{h}</span>
          </li>
        ))}
      </ul>
    </MotionDiv>
  )
}

export default ServiceCard
