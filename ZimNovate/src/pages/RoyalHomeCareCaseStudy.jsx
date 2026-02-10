import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PageHero from '../components/PageHero.jsx'

const RoyalHomeCareCaseStudy = () => {
  return (
    <>
      <Helmet>
        <title>Royal Home Care Branding Case Study | Healthcare Brand Identity Zimbabwe | Zimnovate</title>
        <meta name="description" content="Explore how Zimnovate created a fresh, elegant visual identity for Royal Home Care, establishing trust and professionalism in Zimbabwe's healthcare sector." />
        <link rel="canonical" href="https://zimnovate.co.zw/portfolio/royal-home-care" />
      </Helmet>
      <div>
        {/* Hero Section */}
        <PageHero
          title="Royal Home Care Branding Case Study"
          subtitle="A Fresh, Elegant Visual Identity for Healthcare Excellence"
          height="min-h-[50vh]"
        />

      {/* Project Overview */}
      <section className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex rounded-full bg-[#F4D47C]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#0F172A]">
              Branding & Identity
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
              Project Overview
            </h2>
            <p className="text-sm leading-relaxed text-[#1A1A1A]/80 md:text-base">
              Royal Home Care, a premium healthcare provider in Zimbabwe, needed a complete brand identity 
              that conveyed trust, compassion, and professionalism. They wanted to stand out in the healthcare 
              market with a modern yet warm visual identity.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Branding', 'Logo Design', 'Identity', 'Healthcare', 'Zimbabwe'].map((tag) => (
                <span key={tag} className="inline-flex rounded-full bg-[#F4D47C]/10 px-3 py-1 text-xs font-semibold text-[#0F172A]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-[#F4D47C]/20 bg-[#F9F5EF] p-1">
            <div className="relative h-72 overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1587613991231-7b42a2a1341b?w=800&h=600&fit=crop&crop=entropy&auto=format"
                alt="Royal Home Care Branding"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-[#F9F5EF]">
        <div className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
          <div className="text-center space-y-4 mb-12">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">The Challenge</div>
            <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">The Problem</h3>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Outdated Image', description: 'Previous branding felt dated and failed to reflect their premium services.' },
              { title: 'Market Confusion', description: 'Difficult to differentiate from competitors in a crowded healthcare market.' },
              { title: 'Inconsistent Materials', description: 'Marketing materials lacked cohesion and professional polish.' },
              { title: 'Trust Factor', description: 'Needed to convey reliability and compassion to potential clients and families.' }
            ].map((problem) => (
              <div key={problem.title} className="rounded-2xl border border-[#F4D47C]/20 bg-white p-6 shadow-sm">
                <h4 className="text-lg font-bold text-[#0F172A] mb-2">{problem.title}</h4>
                <p className="text-sm text-[#1A1A1A]/70">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="text-center space-y-4 mb-12">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">Our Approach</div>
          <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">The Solution</h3>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative overflow-hidden rounded-2xl border border-[#F4D47C]/20 bg-[#F9F5EF] p-1 lg:order-2">
            <div className="relative h-80 overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop&crop=entropy&auto=format"
                alt="Healthcare branding"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/30 to-transparent" />
            </div>
          </div>

          <div className="space-y-6 lg:order-1">
            <p className="text-sm leading-relaxed text-[#1A1A1A]/80 md:text-base">
              We created a complete brand identity system that combines warmth and professionalism. 
              The new logo features gentle curves suggesting care and compassion, while the color 
              palette uses calming blues and warm golds to convey trust and premium service.
            </p>
            <div className="space-y-3">
              <h4 className="font-bold text-[#0F172A]">Brand Elements:</h4>
              <div className="flex flex-wrap gap-2">
                {['Logo System', 'Color Palette', 'Typography', 'Iconography', 'Photography Style', 'Brand Guidelines'].map((tech) => (
                  <span key={tech} className="inline-flex rounded-full bg-[#F4D47C]/10 px-3 py-1 text-xs font-semibold text-[#0F172A]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Deliverables */}
      <section className="bg-[#F9F5EF]">
        <div className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
          <div className="text-center space-y-4 mb-12">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">What We Delivered</div>
            <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">Brand Deliverables</h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              'Primary Logo Design',
              'Secondary Logo Variations',
              'Color System & Palette',
              'Typography Guidelines',
              'Business Card Design',
              'Letterhead & Stationery',
              'Social Media Templates',
              'Brand Guidelines Book',
              'Signage & Wayfinding',
              'Uniform Design',
              'Marketing Brochures',
              'Website Design System'
            ].map((feature, index) => (
              <div key={feature} className="flex items-center gap-3 rounded-xl border border-[#F4D47C]/20 bg-white p-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F4D47C] text-sm font-bold text-[#0F172A]">
                  {index + 1}
                </span>
                <span className="text-sm font-semibold text-[#0F172A]">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="text-center space-y-4 mb-12">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">How We Did It</div>
          <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">The Process</h3>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#F4D47C]/30 md:left-1/2 md:-ml-0.5" />
          
          {[
            { step: '01', title: 'Discovery Workshop', description: 'Conducted brand strategy sessions to understand their values, audience, and vision.' },
            { step: '02', title: 'Competitive Analysis', description: 'Analyzed healthcare branding trends and competitor positioning in the market.' },
            { step: '03', title: 'Concept Development', description: 'Created 3 distinct brand concepts with different visual directions.' },
            { step: '04', title: 'Logo Design', description: 'Developed the chosen concept into a complete logo system with variations.' },
            { step: '05', title: 'Visual Identity', description: 'Built out the full visual system including colors, typography, and imagery style.' },
            { step: '06', title: 'Collateral Design', description: 'Applied the brand to all touchpoints from business cards to signage.' },
            { step: '07', title: 'Brand Guidelines', description: 'Created comprehensive guidelines for consistent brand application.' }
          ].map((phase, index) => (
            <div key={phase.step} className={`relative mb-8 md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className="md:w-1/2" />
              <div className="absolute left-4 md:left-1/2 md:-ml-3">
                <div className="h-6 w-6 rounded-full bg-[#F4D47C] border-4 border-white shadow-md" />
              </div>
              <div className={`pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="text-2xl font-bold text-[#F4D47C]">{phase.step}</span>
                </div>
                <h4 className="text-lg font-bold text-[#0F172A] mb-1">{phase.title}</h4>
                <p className="text-sm text-[#1A1A1A]/70">{phase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Gallery */}
      <section className="bg-[#F9F5EF]">
        <div className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
          <div className="text-center space-y-4 mb-12">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">Visual Showcase</div>
            <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">Brand Gallery</h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { src: 'https://images.unsplash.com/photo-1587613991231-7b42a2a1341b?w=600&h=400&fit=crop', alt: 'Logo Design' },
              { src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop', alt: 'Business Cards' },
              { src: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop', alt: 'Stationery' },
              { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop', alt: 'Brand Guidelines' },
              { src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop', alt: 'Marketing Materials' },
              { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop', alt: 'Office Signage' }
            ].map((image) => (
              <div key={image.alt} className="group relative overflow-hidden rounded-2xl border border-[#F4D47C]/20 bg-white shadow-sm">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-4">
                  <p className="text-sm font-semibold text-[#0F172A]">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="text-center space-y-4 mb-12">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">Impact</div>
          <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">Results & Recognition</h3>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            { value: '40%', label: 'Brand Recognition', description: 'Increase in brand recall among target audience' },
            { value: '25%', label: 'Client Inquiries', description: 'Growth in new client consultations' },
            { value: '100%', label: 'Consistency', description: 'Brand consistency across all touchpoints' },
            { value: 'Award', label: 'Design Excellence', description: 'Recognized in local design community' }
          ].map((stat) => (
            <div key={stat.label} className="text-center rounded-2xl border border-[#F4D47C]/20 bg-[#F9F5EF] p-6">
              <div className="text-4xl font-bold text-[#F4D47C] mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-[#0F172A] mb-1">{stat.label}</div>
              <p className="text-sm text-[#1A1A1A]/70">{stat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-[#F9F5EF]">
        <div className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6 flex justify-center">
              <span className="text-6xl text-[#F4D47C]">"</span>
            </div>
            <blockquote className="text-xl md:text-2xl font-medium text-[#0F172A] mb-6">
              Zimnovate captured the essence of our brand perfectly. The new identity has helped us 
              position ourselves as the premium healthcare provider we always aimed to be.
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
                alt="Client"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-bold text-[#0F172A]">Dr. Sarah Mupfumira</div>
                <div className="text-sm text-[#1A1A1A]/60">Director, Royal Home Care</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Links */}
      <section className="mx-auto max-w-7xl px-12 py-10 md:px-16 lg:px-20">
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center rounded-full bg-[#F4D47C] px-6 py-3 text-sm font-semibold text-[#0F172A] hover:brightness-110 transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t border-[#F4D47C]/20">
        <div className="mx-auto max-w-7xl px-12 py-8 md:px-16 lg:px-20">
          <div className="flex justify-between items-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F172A] hover:text-[#F4D47C] transition-colors"
            >
              ← Back to Portfolio
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F172A] hover:text-[#F4D47C] transition-colors"
            >
              Next Project →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="relative overflow-hidden rounded-3xl border border-[#F4D47C]/20 bg-[#F4D47C] p-10 text-[#0F172A] shadow-[0_28px_80px_rgba(0,0,0,0.15)]">
          <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-white/10 blur-3xl" />

          <div className="text-center space-y-6">
            <div className="space-y-3">
              <h3 className="text-3xl font-bold leading-tight md:text-4xl">
                Ready to elevate your brand?
              </h3>
              <p className="text-sm text-[#0F172A]/80">
                Let's create a brand identity that truly represents your business.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#0F172A] px-6 py-3 text-sm font-semibold text-white hover:brightness-110 transition-colors"
              >
                Start Your Project →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default RoyalHomeCareCaseStudy
