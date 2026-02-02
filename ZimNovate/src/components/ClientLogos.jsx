import React from 'react'
import { motion } from 'framer-motion'

const MotionDiv = motion.div

const ClientLogos = () => {
  const clients = [
    { id: 'hustlr', name: 'Hustlr', logo: null },
    { id: 'mps', name: 'MugoPlumbingSolutions', logo: null },
    { id: 'uncommon', name: 'uncommon', logo: null },
    { id: 'econet', name: 'econet', logo: null },
    { id: 'netone', name: 'netone', logo: null },
  ]

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-12 py-16 md:px-16 md:py-20 lg:px-20">
        <div className="mt-6 grid grid-cols-2 place-items-start gap-x-10 gap-y-8 sm:grid-cols-3 md:grid-cols-5 md:gap-x-14 md:gap-y-10">
          {clients.map((client, idx) => (
            <MotionDiv
              key={client.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="flex items-center gap-2 grayscale opacity-70 contrast-75"
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
