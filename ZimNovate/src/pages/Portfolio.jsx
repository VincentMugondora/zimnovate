import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead.jsx'
import PageHero from '../components/PageHero.jsx'
import { portfolioProjects } from '../data/portfolio.js'

const Portfolio = () => {
  const categories = [
    { name: 'Web Development', to: '/services/web-development' },
    { name: 'Mobile Apps', to: '/services/mobile-app-development' },
    { name: 'Branding & Design', to: '/services/branding' },
    { name: 'Digital Marketing', to: '/services/digital-marketing' },
    { name: 'AI & Automation', to: '/services/ai-automation' },
    { name: 'E-Commerce Solutions', to: '/services/e-commerce' },
  ]

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Zimnovate Portfolio",
    "description": "See real web development projects, branding work, and app solutions we've built for Zimbabwean businesses.",
    "url": "https://zimnovate.co.zw/portfolio",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://zimnovate.co.zw/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Portfolio",
          "item": "https://zimnovate.co.zw/portfolio"
        }
      ]
    }
  }

  return (
    <>
      <SEOHead
        title="Zimnovate Portfolio — Web Development, Branding & App Projects in Zimbabwe"
        description="See real web development projects, branding work, and app solutions we've built for Zimbabwean businesses. View our portfolio of e-commerce, mobile apps, and digital marketing case studies."
        keywords="zimnovate portfolio, web development projects Zimbabwe, app development portfolio Zimbabwe, branding projects Zimbabwe, website design portfolio Harare, e-commerce website Zimbabwe, custom software projects Zimbabwe"
        canonical="https://zimnovate.co.zw/portfolio"
        schema={portfolioSchema}
      />
      <div>
        {/* Hero Section */}
        <PageHero
          title="Projects That Show What's Possible With Smart Digital Solutions"
          subtitle="Explore real work delivered for startups, entrepreneurs, and growing brands across Zimbabwe and Africa."
          height="min-h-[50vh]"
        />

        {/* Intro Section */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 py-10 md:px-16 md:py-14 lg:px-20">
          <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
            <div className="space-y-6">
              <div className="inline-flex rounded-full bg-[#f4d47c]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--zim-black)]">
                Showcasing Our Best Work
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-[var(--zim-black)] md:text-4xl">
                Digital experiences that drive results
              </h2>
              <p className="text-sm leading-relaxed text-[var(--zim-fg)]/80 md:text-base">
                From e-commerce platforms to AI automation systems, we build solutions that transform businesses and delight users.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-[#f4d47c]/20 bg-[var(--zim-gray)]/30 p-1">
              <div className="relative h-80 overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&h=700&fit=crop&auto=format"
                  alt="Creative workspace"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--zim-black)]/20 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Categories */}
        <section className="bg-[var(--zim-gray)]/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 py-14 md:px-16 md:py-20 lg:px-20">
            <div className="text-center space-y-4 mb-12">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f4d47c]">Browse by Category</div>
              <h3 className="text-3xl font-bold tracking-tight text-[var(--zim-black)] md:text-4xl">Portfolio Categories</h3>
            </div>

            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to={category.to}
                  className="group relative overflow-hidden rounded-2xl border border-[#f4d47c]/20 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:bg-[#f4d47c]/5"
                >
                  <span className="text-sm font-semibold text-[var(--zim-black)] group-hover:text-[#f4d47c] transition-colors">
                    {category.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 py-14 md:px-16 md:py-20 lg:px-20">
          <div className="text-center space-y-4 mb-12">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f4d47c]">Featured Work</div>
            <h3 className="text-3xl font-bold tracking-tight text-[var(--zim-black)] md:text-4xl">Featured Projects</h3>
            <p className="text-sm leading-relaxed text-[var(--zim-fg)]/80 md:text-base max-w-2xl mx-auto">
              Selected case studies showcasing our expertise across industries and technologies.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {portfolioProjects.map((project, index) => {
              const isExternal = project.url?.startsWith('http')
              const Component = isExternal ? 'a' : Link
              const linkProps = isExternal 
                ? { href: project.url, target: '_blank', rel: 'noopener noreferrer' }
                : { to: project.url || `/portfolio/${project.id}` }

              return (
                <Component
                  key={project.id}
                  {...linkProps}
                  className="group relative overflow-hidden rounded-2xl border border-[#f4d47c]/20 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.images?.[0] || '/imgs/agency.jpg'}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--zim-black)]/80 via-[var(--zim-black)]/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex rounded-full bg-[#f4d47c] px-2 py-1 text-xs font-semibold text-[var(--zim-black)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="relative p-6">
                    <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#f4d47c]">
                      {project.category}
                    </div>
                    <h4 className="text-xl font-bold text-[var(--zim-black)] mb-2">{project.title}</h4>
                    <p className="text-sm text-[var(--zim-fg)]/70 mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex items-center gap-2 text-xs font-semibold text-[var(--zim-black)]/60">
                      <span>{project.location || 'Harare, Zimbabwe'}</span>
                      <span className="h-1 w-1 rounded-full bg-[var(--zim-fg)]/30" />
                      <span>{project.date ? new Date(project.date).getFullYear() : '2026'}</span>
                    </div>
                  </div>
                </Component>
              )
            })}
          </div>
        </section>

        {/* Call To Action */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 py-14 md:px-16 md:py-20 lg:px-20">
          <div className="relative overflow-hidden rounded-3xl border border-[#f4d47c]/20 bg-[#f4d47c] p-10 text-[var(--zim-black)] shadow-[0_28px_80px_rgba(0,0,0,0.15)]">
            <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-white/20 blur-3xl" />
            <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-white/10 blur-3xl" />

            <div className="text-center space-y-6">
              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--zim-black)]/70">Let's Work Together</div>
                <h3 className="text-3xl font-bold leading-tight md:text-4xl">
                  Want your project featured here?
                </h3>
                <p className="text-sm text-[var(--zim-black)]/80">
                  Let Zimnovate build something exceptional for your brand.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--zim-black)] px-6 py-3 text-sm font-semibold text-white hover:brightness-110 transition-colors"
                >
                  Start Your Project
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Portfolio
