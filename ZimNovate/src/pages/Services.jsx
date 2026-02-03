import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import PageHero from '../components/PageHero.jsx'
import { serviceCategories, services } from '../data/services.js'

const Services = () => {
  const grouped = useMemo(() => {
    return serviceCategories.map((cat) => ({
      category: cat,
      items: services.filter((s) => s.category === cat),
    }))
  }, [])

  const getServiceLink = (serviceTitle) => {
    const serviceLinks = {
      'Web Development': '/services/web-development',
      'Custom Websites': '/services/web-development',
      'E-Commerce Development': '/services/web-development',
      'Web Applications': '/services/web-development',
      'CMS Solutions': '/services/web-development',
      'Website Maintenance': '/services/web-development',
      'Mobile Apps': '/services/mobile-app-development',
      'Native App Development': '/services/mobile-app-development',
      'Cross-Platform Apps': '/services/mobile-app-development',
      'UI/UX App Design': '/services/mobile-app-development',
      'Backend & API Development': '/services/mobile-app-development',
      'App Maintenance & Updates': '/services/mobile-app-development',
      'Digital Strategy': '/services/digital-strategy',
      'Digital Growth Strategy': '/services/digital-strategy',
      'SEO & Content Strategy': '/services/digital-strategy',
      'Social Media Strategy': '/services/digital-strategy',
      'Brand Positioning': '/services/digital-strategy',
      'Data & Analytics': '/services/digital-strategy',
      'Consulting & Advisory': '/services/digital-strategy',
      'AI & Automation': '/services/ai-automation',
      'AI Chatbots': '/services/ai-automation',
      'Business Process Automation': '/services/ai-automation',
      'Predictive Analytics': '/services/ai-automation',
      'Computer Vision': '/services/ai-automation',
      'Document Automation': '/services/ai-automation',
      'AI Consulting': '/services/ai-automation',
      'E-commerce Solutions': '/services/e-commerce',
      'Custom E-Commerce': '/services/e-commerce',
      'Payment Integration': '/services/e-commerce',
      'E-Commerce Automation': '/services/e-commerce',
      'Marketplace Setup': '/services/e-commerce',
      'Mobile Commerce': '/services/e-commerce',
      'E-Commerce SEO': '/services/e-commerce',
    }
    return serviceLinks[serviceTitle] || '/contact'
  }

  return (
    <div>
      <PageHero 
        title="OUR SERVICES"
        subtitle="Branding, websites, and full-stack systems designed to help you ship faster and scale."
        height="min-h-[45vh]"
      />
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
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-[var(--zim-fg)]/80">
                  {g.category}
                </div>
                {(g.category === 'Web Development' || g.category === 'Mobile Apps' || g.category === 'Digital Strategy' || g.category === 'AI & Automation' || g.category === 'E-commerce Solutions') && (
                  <Link
                    to={
                      g.category === 'Web Development'
                        ? '/services/web-development'
                        : g.category === 'Mobile Apps'
                        ? '/services/mobile-app-development'
                        : g.category === 'Digital Strategy'
                        ? '/services/digital-strategy'
                        : g.category === 'AI & Automation'
                        ? '/services/ai-automation'
                        : '/services/e-commerce'
                    }
                    className="text-sm font-semibold text-[#F4D47C] hover:text-[#F4D47C]/80 transition-colors"
                  >
                    View Details →
                  </Link>
                )}
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {g.items.map((s) => (
                  <div key={s.id}>
                    <ServiceCard service={s} />
                    <div className="mt-3">
                      <Link
                        to={getServiceLink(s.title)}
                        className="inline-flex rounded-md border border-[var(--zim-border)] bg-[var(--zim-card)] px-4 py-2 text-sm font-semibold text-[var(--zim-fg)] hover:border-[#F4D47C] hover:bg-[#F4D47C]/5 transition-colors"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                {g.category === 'Web Development' ? (
                  <>
                    <Link
                      to="/services/web-development"
                      className="inline-flex rounded-md bg-[#F4D47C] px-4 py-2 text-sm font-semibold text-[#0F172A] hover:brightness-110 transition-colors"
                    >
                      Explore Web Development
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex rounded-md border border-[var(--zim-border)] bg-[var(--zim-card)] px-4 py-2 text-sm font-semibold text-[var(--zim-fg)] hover:border-[var(--zim-blue)] transition-colors"
                    >
                      Request a Quote
                    </Link>
                  </>
                ) : g.category === 'Mobile Apps' ? (
                  <>
                    <Link
                      to="/services/mobile-app-development"
                      className="inline-flex rounded-md bg-[#F4D47C] px-4 py-2 text-sm font-semibold text-[#0F172A] hover:brightness-110 transition-colors"
                    >
                      Explore Mobile Apps
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex rounded-md border border-[var(--zim-border)] bg-[var(--zim-card)] px-4 py-2 text-sm font-semibold text-[var(--zim-fg)] hover:border-[var(--zim-blue)] transition-colors"
                    >
                      Request a Quote
                    </Link>
                  </>
                ) : g.category === 'Digital Strategy' ? (
                  <>
                    <Link
                      to="/services/digital-strategy"
                      className="inline-flex rounded-md bg-[#F4D47C] px-4 py-2 text-sm font-semibold text-[#0F172A] hover:brightness-110 transition-colors"
                    >
                      Explore Digital Strategy
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex rounded-md border border-[var(--zim-border)] bg-[var(--zim-card)] px-4 py-2 text-sm font-semibold text-[var(--zim-fg)] hover:border-[var(--zim-blue)] transition-colors"
                    >
                      Request a Quote
                    </Link>
                  </>
                ) : g.category === 'AI & Automation' ? (
                  <>
                    <Link
                      to="/services/ai-automation"
                      className="inline-flex rounded-md bg-[#F4D47C] px-4 py-2 text-sm font-semibold text-[#0F172A] hover:brightness-110 transition-colors"
                    >
                      Explore AI & Automation
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex rounded-md border border-[var(--zim-border)] bg-[var(--zim-card)] px-4 py-2 text-sm font-semibold text-[var(--zim-fg)] hover:border-[var(--zim-blue)] transition-colors"
                    >
                      Request a Quote
                    </Link>
                  </>
                ) : g.category === 'E-commerce Solutions' ? (
                  <>
                    <Link
                      to="/services/e-commerce"
                      className="inline-flex rounded-md bg-[#F4D47C] px-4 py-2 text-sm font-semibold text-[#0F172A] hover:brightness-110 transition-colors"
                    >
                      Explore E-Commerce
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex rounded-md border border-[var(--zim-border)] bg-[var(--zim-card)] px-4 py-2 text-sm font-semibold text-[var(--zim-fg)] hover:border-[var(--zim-blue)] transition-colors"
                    >
                      Request a Quote
                    </Link>
                  </>
                ) : (
                  <Link
                    to="/contact"
                    className="inline-flex rounded-md border border-[var(--zim-border)] bg-[var(--zim-card)] px-4 py-2 text-sm font-semibold text-[var(--zim-fg)] hover:border-[var(--zim-blue)] transition-colors"
                  >
                    Request a Quote
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Services
