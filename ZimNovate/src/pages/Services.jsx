import React, { useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
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
      'Digital Marketing': '/services/digital-marketing',
      'Social Media Marketing': '/services/digital-marketing',
      'SEO & Content Marketing': '/services/digital-marketing',
      'Paid Advertising': '/services/digital-marketing',
      'Content Marketing': '/services/digital-marketing',
      'Email Marketing': '/services/digital-marketing',
      'Branding': '/services/branding',
      'Logo Design': '/services/branding',
      'Brand Identity': '/services/branding',
      'Graphic Design': '/services/branding',
      'UI/UX Design': '/services/branding',
      'Packaging Design': '/services/branding',
      'Social Media Branding': '/services/branding',
    }
    return serviceLinks[serviceTitle] || '/contact'
  }

  return (
    <>
      <Helmet>
        <title>Digital Services Zimbabwe – Web, Apps, Branding & Marketing</title>
        <meta name="description" content="Explore Zimnovate's full-stack digital services: web design, app development, branding, SEO, digital marketing, e-commerce, and automation solutions." />
        <meta name="keywords" content="digital services zimbabwe, web design harare, app development, branding agency, SEO services, digital marketing" />
        <link rel="canonical" href="https://zimnovate.com/services" />
        <meta property="og:title" content="Digital Services Zimbabwe – Web, Apps, Branding & Marketing" />
        <meta property="og:description" content="Explore Zimnovate's full-stack digital services for African businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zimnovate.com/services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Services Zimbabwe – Web, Apps, Branding & Marketing" />
        <meta name="twitter:description" content="Explore Zimnovate's full-stack digital services for African businesses." />
        <meta name="twitter:image" content="https://zimnovate.com/logo1.png" />
      </Helmet>
    <div>
      <PageHero 
        title="Full-Stack Digital Services Designed to Help African Businesses Grow"
        subtitle="Professional web design, mobile apps, branding, digital marketing, and e-commerce solutions tailored for Zimbabwean businesses."
        height="min-h-[45vh]"
      />
      <section className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Services"
            title="Digital Solutions Built for African Markets"
            subtitle="From web design and mobile apps to branding and digital marketing — we deliver modern, scalable solutions that drive growth."
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
                {(g.category === 'Web Development' || g.category === 'Mobile Apps' || g.category === 'Digital Strategy' || g.category === 'AI & Automation' || g.category === 'E-commerce Solutions' || g.category === 'Digital Marketing' || g.category === 'Branding') && (
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
                        : g.category === 'E-commerce Solutions'
                        ? '/services/e-commerce'
                        : g.category === 'Digital Marketing'
                        ? '/services/digital-marketing'
                        : '/services/branding'
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
                ) : g.category === 'Digital Marketing' ? (
                  <>
                    <Link
                      to="/services/digital-marketing"
                      className="inline-flex rounded-md bg-[#F4D47C] px-4 py-2 text-sm font-semibold text-[#0F172A] hover:brightness-110 transition-colors"
                    >
                      Explore Digital Marketing
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex rounded-md border border-[var(--zim-border)] bg-[var(--zim-card)] px-4 py-2 text-sm font-semibold text-[var(--zim-fg)] hover:border-[var(--zim-blue)] transition-colors"
                    >
                      Request a Quote
                    </Link>
                  </>
                ) : g.category === 'Branding' ? (
                  <>
                    <Link
                      to="/services/branding"
                      className="inline-flex rounded-md bg-[#F4D47C] px-4 py-2 text-sm font-semibold text-[#0F172A] hover:brightness-110 transition-colors"
                    >
                      Explore Branding
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
    </>
  )
}

export default Services
