import React from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'

const DigitalMarketing = () => {
  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title="Grow Your Brand With Smart, Data-Driven Digital Marketing"
        subtitle="We help you attract the right audience, boost conversions, and scale your digital presence."
        height="min-h-[50vh]"
      />

      {/* Intro CTA */}
      <section className="mx-auto max-w-7xl px-12 py-10 md:px-16 md:py-14 lg:px-20">
        <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div className="space-y-6">
            <div className="inline-flex rounded-full bg-[#F4D47C]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#0F172A]">
              Digital Marketing
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
              Bold, creative, and performance-obsessed
            </h2>
            <p className="text-sm leading-relaxed text-[#1A1A1A]/80 md:text-base">
              Campaigns crafted with strategy, creativity, and relentless optimization to deliver measurable growth across every channel.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#F4D47C] px-6 py-3 text-sm font-semibold text-[#0F172A] hover:brightness-110 transition-colors"
              >
                Start Marketing With Us
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-[#F4D47C]/20 bg-[#F4D47C]/5 px-6 py-3 text-sm font-semibold text-[#0F172A] hover:bg-[#F4D47C]/10 transition-colors"
              >
                Free Strategy Call
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-[#F4D47C]/20 bg-[#F9F5EF] p-1">
            <div className="relative h-80 overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=700&fit=crop&crop=entropy&auto=format"
                alt="Marketing analytics dashboard"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-[#F9F5EF]">
        <div className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
          <div className="text-center space-y-4 mb-12">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">Services</div>
            <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">What We Offer</h3>
            <p className="text-sm leading-relaxed text-[#1A1A1A]/80 md:text-base max-w-2xl mx-auto">
              Real, image-driven service cards covering every pillar of digital marketing.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Social Media Marketing',
                description: 'Grow your audience with creative content, strategy, and targeted campaigns.',
                image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=700&h=500&fit=crop&crop=entropy&auto=format',
              },
              {
                title: 'Search Engine Optimization (SEO)',
                description: 'Rank higher and gain sustainable organic traffic with research-led SEO.',
                image: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=700&h=500&fit=crop&crop=entropy&auto=format',
              },
              {
                title: 'Paid Advertising (Google & Meta Ads)',
                description: 'ROI-focused campaigns built to generate leads and sales.',
                image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=700&h=500&fit=crop&crop=entropy&auto=format',
              },
              {
                title: 'Content Marketing',
                description: 'High-quality articles, visuals, and campaigns that build authority.',
                image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=700&h=500&fit=crop&crop=entropy&auto=format',
              },
              {
                title: 'Email Marketing & Automation',
                description: 'Automate engagement with targeted journeys and segmentation.',
                image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=700&h=500&fit=crop&crop=entropy&auto=format',
              },
              {
                title: 'Web & Landing Page Optimization',
                description: 'Improve conversions with UX-focused landing page design and testing.',
                image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&h=500&fit=crop&crop=entropy&auto=format',
              },
            ].map((service) => (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-2xl border border-[#F4D47C]/20 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-[#0F172A]/20 to-transparent" />
                </div>
                <div className="relative p-6">
                  <h4 className="text-lg font-bold text-[#0F172A] mb-2">{service.title}</h4>
                  <p className="text-sm text-[#1A1A1A]/70">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="text-center space-y-4 mb-12">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">Process</div>
          <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">Our Digital Marketing Process</h3>
          <p className="text-sm leading-relaxed text-[#1A1A1A]/80 md:text-base max-w-2xl mx-auto">
            A clear, visual journey from audit to scaling, backed by data and creative execution.
          </p>
        </div>

        <div className="space-y-12">
          {[
            {
              step: '01',
              title: 'Audit & Research',
              description: 'Analyze your brand, market, competitors, and customers to find high-impact opportunities.',
              image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&h=600&fit=crop&crop=entropy&auto=format',
              position: 'left'
            },
            {
              step: '02',
              title: 'Strategy Development',
              description: 'Create a tailored digital marketing roadmap aligned to your goals and budget.',
              image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&h=600&fit=crop&crop=entropy&auto=format',
              position: 'right'
            },
            {
              step: '03',
              title: 'Campaign Execution',
              description: 'Launch creative content, targeted ads, and engagement programs across channels.',
              image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&h=600&fit=crop&crop=entropy&auto=format',
              position: 'left'
            },
            {
              step: '04',
              title: 'Monitoring & Optimization',
              description: 'Track KPIs, run experiments, and optimize for CTR, conversions, and ROAS.',
              image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=600&fit=crop&crop=entropy&auto=format',
              position: 'right'
            },
            {
              step: '05',
              title: 'Reporting & Scaling',
              description: 'Transparent reporting, learnings, and scaling the winners for growth.',
              image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=900&h=600&fit=crop&crop=entropy&auto=format',
              position: 'left'
            }
          ].map((phase) => (
            <div
              key={phase.step}
              className={`grid gap-8 md:grid-cols-2 md:items-center ${phase.position === 'right' ? 'md:grid-cols-[1.1fr_0.9fr]' : 'md:grid-cols-[0.9fr_1.1fr]'}`}
            >
              <div className={`space-y-4 ${phase.position === 'right' ? 'md:order-1' : ''}`}>
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-[#F4D47C]">{phase.step}</span>
                  <div className="h-px flex-1 bg-[#F4D47C]/20" />
                </div>
                <h4 className="text-2xl font-bold text-[#0F172A]">{phase.title}</h4>
                <p className="text-sm leading-relaxed text-[#1A1A1A]/80">{phase.description}</p>
              </div>
              <div className={`relative overflow-hidden rounded-2xl border border-[#F4D47C]/20 ${phase.position === 'right' ? 'md:order-0' : ''}`}>
                <div className="relative h-64 overflow-hidden rounded-2xl">
                  <img
                    src={phase.image}
                    alt={phase.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/30 to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#F9F5EF]">
        <div className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
          <div className="text-center space-y-4 mb-12">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">Why Choose Us</div>
            <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">Why Zimnovate for Marketing</h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Results-Focused',
                description: 'We prioritize outcomes and ROI, not vanity metrics.',
                image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=500&h=350&fit=crop&crop=entropy&auto=format'
              },
              {
                title: 'Creative Content Production',
                description: 'Original creatives that capture attention and convert.',
                image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=350&fit=crop&crop=entropy&auto=format'
              },
              {
                title: 'Transparent Reporting',
                description: 'Clear dashboards and honest insights every sprint.',
                image: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=500&h=350&fit=crop&crop=entropy&auto=format'
              },
              {
                title: 'Partner, Not a Vendor',
                description: 'Collaborative, responsive, and invested in your success.',
                image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&h=350&fit=crop&crop=entropy&auto=format'
              }
            ].map((reason) => (
              <div
                key={reason.title}
                className="group relative overflow-hidden rounded-2xl border border-[#F4D47C]/20 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={reason.image}
                    alt={reason.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 to-transparent" />
                </div>
                <div className="relative p-4">
                  <h4 className="text-lg font-bold text-[#0F172A] mb-2">{reason.title}</h4>
                  <p className="text-sm text-[#1A1A1A]/70">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="text-center space-y-4 mb-12">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">Portfolio</div>
          <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">Marketing Wins</h3>
          <p className="text-sm leading-relaxed text-[#1A1A1A]/80 md:text-base max-w-2xl mx-auto">
            Image-heavy campaign examples with clear outcomes.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Social Growth Sprint',
              description: 'Campaign type: Social Strategy — +400% reach, +70% engagement.',
              image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=700&h=500&fit=crop&crop=entropy&auto=format',
              tags: ['Social', 'Content', 'Paid Boost']
            },
            {
              title: 'Paid Ads ROAS Lift',
              description: 'Campaign type: Paid Ads — +3.8x ROAS, scaled budget 2.5x.',
              image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=700&h=500&fit=crop&crop=entropy&auto=format',
              tags: ['Google Ads', 'Meta Ads', 'CRO']
            },
            {
              title: 'SEO Content Engine',
              description: 'Campaign type: SEO/Content — +180% organic traffic, +120% leads.',
              image: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=700&h=500&fit=crop&crop=entropy&auto=format',
              tags: ['SEO', 'Content', 'Analytics']
            }
          ].map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-[#F4D47C]/20 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/20 to-transparent" />
              </div>
              <div className="relative p-6">
                <h4 className="text-lg font-bold text-[#0F172A] mb-2">{project.title}</h4>
                <p className="text-sm text-[#1A1A1A]/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="inline-flex rounded-full bg-[#F4D47C]/10 px-2 py-1 text-xs font-semibold text-[#0F172A]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center rounded-full border border-[#F4D47C]/20 bg-[#F4D47C]/5 px-6 py-3 text-sm font-semibold text-[#0F172A] hover:bg-[#F4D47C]/10 transition-colors"
          >
            View More Projects
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#F9F5EF]">
        <div className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
          <div className="text-center space-y-4 mb-12">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">Testimonials</div>
            <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">What Clients Say</h3>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Lena Brooks',
                role: 'Owner, Fashion D2C',
                image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face&auto=format',
                testimonial: 'Zimnovate boosted our social engagement by 300% in 2 months. Incredible team and clear reporting.'
              },
              {
                name: 'Eric Zhao',
                role: 'Founder, SaaS Startup',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format',
                testimonial: 'Their paid ads and landing page optimization delivered profitable growth faster than expected.'
              },
              {
                name: 'Maria Silva',
                role: 'Marketing Director, Hospitality Group',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&auto=format',
                testimonial: 'Transparent, strategic, and responsive. The dashboards made it easy for our leadership to see impact.'
              }
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="relative overflow-hidden rounded-2xl border border-[#F4D47C]/20 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-[#0F172A]">{testimonial.name}</h4>
                    <p className="text-sm text-[#1A1A1A]/60">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#F4D47C]">⭐</span>
                  ))}
                </div>
                <p className="text-sm text-[#1A1A1A]/80 italic">"{testimonial.testimonial}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="relative overflow-hidden rounded-3xl border border-[#F4D47C]/20 bg-[#F4D47C] p-10 text-[#0F172A] shadow-[0_28px_80px_rgba(0,0,0,0.15)]">
          <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-white/10 blur-3xl" />

          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0F172A]/70">Ready to Grow</div>
                <h3 className="text-3xl font-bold leading-tight md:text-4xl">
                  Let’s Grow Your Business With Digital Marketing That Works
                </h3>
                <p className="text-sm text-[#0F172A]/80">
                  Start today with a clear, data-driven marketing plan.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#0F172A] px-6 py-3 text-sm font-semibold text-white hover:brightness-110 transition-colors"
                >
                  Start Today
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&crop=entropy&auto=format"
                alt="Marketing team collaboration"
                className="h-64 w-full object-cover lg:h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F4D47C]/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DigitalMarketing
