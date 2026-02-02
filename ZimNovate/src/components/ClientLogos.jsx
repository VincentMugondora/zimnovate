import React from 'react'
import { motion } from 'framer-motion'

const MotionDiv = motion.div

const ClientLogos = () => {
  const clients = [
    { id: 'hustlr', name: 'Hustlr', url: 'https://hustlr.chat', logo: null },
    { id: 'mps', name: 'MugoPlumbingSolutions', url: 'https://mugoplumbingsolutions.co.zw', logo: null },
    { id: 'uncommon', name: 'uncommon', url: 'https://uncommon.org', logo: null },
    { id: 'econet', name: 'econet', url: 'https://www.econet.co.zw', logo: null },
    { id: 'netone', name: 'netone', url: 'https://www.netone.co.zw', logo: null },
    { id: 'telone', name: 'TelOne', url: 'https://www.telone.co.zw', logo: null },
  ]

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-12 py-16 md:px-16 md:py-20 lg:px-20">
        <div className="mt-6 flex w-full flex-nowrap items-center justify-center gap-16 overflow-x-auto whitespace-nowrap">
          {clients.map((client, idx) => (
            <MotionDiv
              key={client.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="shrink-0 grayscale contrast-75"
            >
              <a
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={client.name}
                className="flex items-center gap-2 opacity-70 transition-opacity hover:opacity-100"
              >
                {client.logo && (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-6 w-auto align-middle object-contain md:h-8"
                    loading="lazy"
                  />
                )}
                <span className="inline-block align-middle text-base font-semibold tracking-wide text-[var(--zim-fg)]/60 leading-none md:text-lg">
                  {client.name}
                </span>
              </a>
            </MotionDiv>
          ))}
        </div>

        <MotionDiv
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 md:mt-24 text-left"
        >
          <blockquote className="max-w-5xl text-2xl font-normal leading-snug text-[var(--zim-black)] md:text-4xl">
            “People build websites, develop brands, and build shops selling stuff. a better
            internet, for people, one site at a time. we work better and more efficiently than
            others.”
          </blockquote>
        </MotionDiv>
      </div>
    </section>
  )
}

export default ClientLogos
