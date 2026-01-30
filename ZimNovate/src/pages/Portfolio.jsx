import React from 'react'
import SectionHeading from '../components/SectionHeading.jsx'
import PortfolioGrid from '../components/PortfolioGrid.jsx'
import { portfolioProjects } from '../data/portfolio.js'

const Portfolio = () => {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <SectionHeading
          eyebrow="Portfolio"
          title="Case studies & project highlights"
          subtitle="Filter by tags and click any project to view details in a modal. Replace placeholders with real work as you go."
        />

        <div className="mt-10">
          <PortfolioGrid projects={portfolioProjects} />
        </div>
      </section>
    </div>
  )
}

export default Portfolio
