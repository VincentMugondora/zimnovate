import React from 'react'
import { motion } from 'framer-motion'

const MotionDiv = motion.div

const ClientLogos = () => {
  const clients = [
    { id: 'c1', name: 'Client A', logo: '/imgs/client-a.png' },
    { id: 'c2', name: 'Client B', logo: '/imgs/client-b.png' },
    { id: 'c3', name: 'Client C', logo: '/imgs/client-c.png' },
    { id: 'c4', name: 'Client D', logo: '/imgs/client-d.png' },
    { id: 'c5', name: 'Client E', logo: '/imgs/client-e.png' },
    { id: 'c6', name: 'Client F', logo: '/imgs/client-f.png' },
  ]

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-3 py-16 md:px-4 md:py-20 lg:px-4">
        <div className="mt-6 grid grid-cols-2 place-items-center gap-x-10 gap-y-8 sm:grid-cols-3 md:grid-cols-5 md:gap-x-14 md:gap-y-10">
          {clients.map((client, idx) => (
            <MotionDiv
              key={client.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="grayscale opacity-70 contrast-75"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-6 w-auto object-contain md:h-8"
                loading="lazy"
              />
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
