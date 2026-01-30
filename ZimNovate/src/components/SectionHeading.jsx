import React from 'react'

const SectionHeading = ({ eyebrow, title, subtitle, align = 'left' }) => {
  const alignClass =
    align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col gap-2 ${alignClass}`}>
      {eyebrow ? (
        <div className="text-xs font-semibold tracking-[0.25em] text-[var(--zim-blue)]">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
      {subtitle ? (
        <p className="max-w-2xl text-sm text-[var(--zim-fg)]/70 md:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeading
