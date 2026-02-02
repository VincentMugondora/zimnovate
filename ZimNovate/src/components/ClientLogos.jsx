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
        <MotionDiv
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-left"
        >
          <h2 className="text-2xl font-bold tracking-tight text-[var(--zim-black)] md:text-3xl">
            Trusted by leading companies
          </h2>
        </MotionDiv>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {clients.map((client, idx) => (
            <MotionDiv
              key={client.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="grayscale hover:grayscale-0 transition-grayscale duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-8 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 md:h-10"
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
          className="mt-16 text-left"
        >
          <div className="mx-auto max-w-2xl">
            <div className="mb-4 flex justify-start">
              <div className="h-16 w-16 overflow-hidden rounded-full bg-[var(--zim-gray)]">
                <img
                  src="/imgs/testimonial-avatar.jpg"
                  alt="Client testimonial"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <blockquote className="text-lg leading-relaxed text-[var(--zim-fg)]/80 md:text-xl">
              “Zimnovate transformed our digital presence with innovative solutions that
              truly represent our brand. Their expertise and dedication are unmatched.”
            </blockquote>
            <div className="mt-4">
              <div className="font-semibold text-[var(--zim-black)]">Tendai Chikowore</div>
              <div className="text-sm text-[var(--zim-fg)]/60">CEO, TechHub Zimbabwe</div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  )
}

export default ClientLogos
