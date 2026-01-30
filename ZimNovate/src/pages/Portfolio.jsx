import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SectionHeading from '../components/SectionHeading.jsx'
import PortfolioGrid from '../components/PortfolioGrid.jsx'
import { portfolioProjects } from '../data/portfolio.js'

const Portfolio = () => {
  const [projects, setProjects] = useState(portfolioProjects)

  useEffect(() => {
    let mounted = true

    const load = async () => {
      try {
        const res = await axios.get('/api/portfolio')
        const items = res?.data?.items

        if (mounted && Array.isArray(items) && items.length) {
          setProjects(
            items.map((p) => ({
              id: p._id || p.id,
              title: p.title,
              category: p.category || 'Project',
              description: p.description,
              tags: Array.isArray(p.tags) ? p.tags : [],
              date: p.date,
              images: Array.isArray(p.images) && p.images.length ? p.images : ['/vite.svg'],
            })),
          )
        }
      } catch {
      }
    }

    load()

    return () => {
      mounted = false
    }
  }, [])

  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <SectionHeading
          eyebrow="Portfolio"
          title="Case studies & project highlights"
          subtitle="Filter by tags and click any project to view details in a modal. Replace placeholders with real work as you go."
        />

        <div className="mt-10">
          <PortfolioGrid projects={projects} />
        </div>
      </section>
    </div>
  )
}

export default Portfolio
