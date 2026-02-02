import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import { serviceCategories, services } from '../data/services.js'

const Services = () => {
  const grouped = useMemo(() => {
    return serviceCategories.map((cat) => ({
      category: cat,
      items: services.filter((s) => s.category === cat),
    }))
  }, [])

  return (
    <div>
      <section className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Services"
            title="Branding, websites, and full-stack systems"
            subtitle="Each service is designed to help you ship faster, look more credible, and scale operations."
          />
          <Link
            to="/contact"
            className="inline-flex w-fit rounded-md bg-[var(--zim-blue)] px-4 py-2 text-sm font-semibold text-white hover:brightness-110"
          >
            Request a Quote
          </Link>
        </div>

        <div className="mt-10 space-y-12">
          {grouped.map((g) => (
            <div key={g.category} className="space-y-6">
              <div className="text-sm font-semibold text-[var(--zim-fg)]/80">
                {g.category}
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {g.items.map((s) => (
                  <ServiceCard key={s.id} service={s} />
                ))}
              </div>
              <div className="flex">
                <Link
                  to="/contact"
                  className="inline-flex rounded-md border border-[var(--zim-border)] bg-[var(--zim-card)] px-4 py-2 text-sm font-semibold text-[var(--zim-fg)] hover:border-[var(--zim-blue)]"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Services
