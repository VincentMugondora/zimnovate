import React from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'

const Portfolio = () => {
  const categories = [
    { name: 'Web Development', to: '/services/web-development' },
    { name: 'Mobile Apps', to: '/services/mobile-app-development' },
    { name: 'Branding & Design', to: '/services/branding' },
    { name: 'Digital Marketing', to: '/services/digital-marketing' },
    { name: 'AI & Automation', to: '/services/ai-automation' },
    { name: 'E-Commerce Solutions', to: '/services/e-commerce' },
  ]

  const projects = [
    {
      title: 'ZimFresh Marketplace',
      subtitle: 'E-Commerce Platform',
      description: 'A modern multi-vendor marketplace allowing small Zimbabwean retailers to sell products online.',
      image: 'https://images.unsplash.com/photo-1522199710521-72d69614c702?w=800&h=600&fit=crop&crop=entropy&auto=format',
      highlights: ['Multi-vendor store', 'Vendor dashboards', 'Mobile-first checkout', 'Real-time inventory'],
      tags: ['E-Commerce', 'Web App'],
      to: '/portfolio/zimfresh',
    },
    {
      title: 'SwiftPay',
      subtitle: 'Mobile Wallet App',
      description: 'A fast, secure mobile payments app built for ease of use and reliability.',
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop&crop=entropy&auto=format',
      highlights: ['Biometric login', 'QR payments', 'Balance & statements', 'Notifications & security'],
      tags: ['Mobile App', 'Fintech'],
      to: '/portfolio/swiftpay',
    },
    {
      title: 'Royal Home Care',
      subtitle: 'Branding & Identity',
      description: 'A fresh, elegant visual identity created for a healthcare provider.',
      image: 'https://images.unsplash.com/photo-1587613991231-7b42a2a1341b?w=800&h=600&fit=crop&crop=entropy&auto=format',
      highlights: ['Logo design', 'Color system', 'Typography', 'Brand guidelines'],
      tags: ['Branding', 'Design'],
      to: '/portfolio/royal-home-care',
    },
    {
      title: 'AfricaRise',
      subtitle: 'Digital Marketing Campaign',
      description: 'A content-driven growth campaign helping a startup grow from 0 to 15,000 monthly users.',
      image: 'https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?w=800&h=600&fit=crop&crop=entropy&auto=format',
      highlights: ['SEO strategy', 'Social media ads', 'Funnel optimization', 'Analytics tracking'],
      tags: ['Digital Marketing'],
      to: '/portfolio/africarise',
    },
    {
      title: 'AutoDocs',
      subtitle: 'AI Document Processing System',
      description: 'An AI automation tool that reads, categorizes, and extracts data from documents.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&crop=entropy&auto=format',
      highlights: ['OCR automation', 'AI classification', 'Smart dashboards', 'API integrations'],
      tags: ['AI & Automation'],
      to: '/portfolio/autodocs',
    },
    {
      title: 'ZimFarms',
      subtitle: 'E-Commerce & Inventory System',
      description: 'A product ordering platform with farm-to-door delivery tracking.',
      image: 'https://images.unsplash.com/photo-1581092334643-8550c1b36f1f?w=800&h=600&fit=crop&crop=entropy&auto=format',
      highlights: ['Custom store', 'Delivery tracking', 'Order management', 'Supplier dashboards'],
      tags: ['E-Commerce'],
      to: '/portfolio/zimfarms',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title="Projects That Show What's Possible With Smart Digital Solutions"
        subtitle="Explore real work delivered for startups, entrepreneurs, and growing brands across Zimbabwe and Africa."
        height="min-h-[50vh]"
      />

      {/* Intro Section */}
      <section className="mx-auto max-w-7xl px-12 py-10 md:px-16 md:py-14 lg:px-20">
        <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div className="space-y-6">
            <div className="inline-flex rounded-full bg-[#F4D47C]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#0F172A]">
              Showcasing Our Best Work
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
              Digital experiences that drive results
            </h2>
            <p className="text-sm leading-relaxed text-[#1A1A1A]/80 md:text-base">
              From e-commerce platforms to AI automation systems, we build solutions that transform businesses and delight users.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-[#F4D47C]/20 bg-[#F9F5EF] p-1">
            <div className="relative h-80 overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1559027615-f6f1b739d33c?w=900&h=700&fit=crop&crop=entropy&auto=format"
                alt="Creative workspace"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Categories */}
      <section className="bg-[#F9F5EF]">
        <div className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
          <div className="text-center space-y-4 mb-12">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">Browse by Category</div>
            <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">Portfolio Categories</h3>
          </div>

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.to}
                className="group relative overflow-hidden rounded-2xl border border-[#F4D47C]/20 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:bg-[#F4D47C]/5"
              >
                <span className="text-sm font-semibold text-[#0F172A] group-hover:text-[#F4D47C] transition-colors">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="text-center space-y-4 mb-12">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">Featured Work</div>
          <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">Featured Projects</h3>
          <p className="text-sm leading-relaxed text-[#1A1A1A]/80 md:text-base max-w-2xl mx-auto">
            Selected case studies showcasing our expertise across industries and technologies.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Link
              key={project.title}
              to={project.to}
              className="group relative overflow-hidden rounded-2xl border border-[#F4D47C]/20 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex rounded-full bg-[#F4D47C] px-2 py-1 text-xs font-semibold text-[#0F172A]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative p-6">
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#F4D47C]">
                  {project.subtitle}
                </div>
                <h4 className="text-xl font-bold text-[#0F172A] mb-2">{project.title}</h4>
                <p className="text-sm text-[#1A1A1A]/70 mb-4">{project.description}</p>
                <div className="space-y-2">
                  {project.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#F4D47C]" />
                      <span className="text-xs text-[#1A1A1A]/60">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="relative overflow-hidden rounded-3xl border border-[#F4D47C]/20 bg-[#F4D47C] p-10 text-[#0F172A] shadow-[0_28px_80px_rgba(0,0,0,0.15)]">
          <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-white/10 blur-3xl" />

          <div className="text-center space-y-6">
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0F172A]/70">Let's Work Together</div>
              <h3 className="text-3xl font-bold leading-tight md:text-4xl">
                Want your project featured here?
              </h3>
              <p className="text-sm text-[#0F172A]/80">
                Let Zimnovate build something exceptional for your brand.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#0F172A] px-6 py-3 text-sm font-semibold text-white hover:brightness-110 transition-colors"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
