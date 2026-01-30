import React from 'react'
import { motion } from 'framer-motion'
import {
  Layers,
  Megaphone,
  Monitor,
  Sparkles,
  Smartphone,
  Workflow,
} from 'lucide-react'

const MotionDiv = motion.div

const iconMap = {
  megaphone: Megaphone,
  monitor: Monitor,
  smartphone: Smartphone,
  layers: Layers,
  workflow: Workflow,
  sparkles: Sparkles,
}

const ServiceCard = ({ service, variant = 'full' }) => {
  const Icon = iconMap[service.icon] || Monitor

  if (variant === 'compact') {
    return (
      <MotionDiv
        whileHover={{ y: -4 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="rounded-xl border border-[var(--zim-border)] bg-[var(--zim-bg)] p-5 text-left shadow-sm"
      >
        <div className="flex items-start gap-3">
          <div
            className="grid h-11 w-11 place-items-center rounded-full bg-[var(--zim-bg)] shadow-sm"
            style={{ border: `2px solid ${service.accent}` }}
            aria-hidden="true"
          >
            <Icon size={18} style={{ color: service.accent }} />
          </div>
          <div className="min-w-0">
            <div className="text-sm font-bold leading-snug">{service.title}</div>
            <div className="mt-1 text-sm text-[var(--zim-fg)]/70">
              {service.description}
            </div>
          </div>
        </div>
      </MotionDiv>
    )
  }

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
        <Icon size={18} />
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
