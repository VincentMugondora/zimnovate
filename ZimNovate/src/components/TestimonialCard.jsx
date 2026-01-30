import React from 'react'

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="rounded-xl border border-[var(--zim-border)] bg-[var(--zim-bg)] p-5 shadow-sm dark:bg-[var(--zim-card)]">
      <div className="text-sm text-[var(--zim-fg)]/75">“{testimonial.quote}”</div>
      <div className="mt-4 flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-[var(--zim-blue)] text-sm font-bold text-white">
          {testimonial.name
            .split(' ')
            .map((p) => p[0])
            .slice(0, 2)
            .join('')}
        </div>
        <div>
          <div className="text-sm font-semibold">{testimonial.name}</div>
          <div className="text-xs text-[var(--zim-fg)]/65">{testimonial.role}</div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
