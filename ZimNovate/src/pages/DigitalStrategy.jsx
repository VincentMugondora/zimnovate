import React from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'

const DigitalStrategy = () => {
  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title="Smart Digital Strategies That Drive Real Growth"
        subtitle="We help businesses make data-backed decisions, optimize performance, and build long-term digital success."
        height="min-h-[50vh]"
      />

      {/* Intro CTA */}
      <section className="mx-auto max-w-7xl px-12 py-10 md:px-16 md:py-14 lg:px-20">
        <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div className="space-y-6">
            <div className="inline-flex rounded-full bg-[#F4D47C]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#0F172A]">
              Digital Strategy
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
              Clarity, direction, and measurable growth
            </h2>
            <p className="text-sm leading-relaxed text-[#1A1A1A]/80 md:text-base">
              We translate your goals into clear roadmaps, data-driven decisions, and repeatable playbooks that compound over time.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#F4D47C] px-6 py-3 text-sm font-semibold text-[#0F172A] hover:brightness-110 transition-colors"
              >
                Book a Strategy Session
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center rounded-full border border-[#F4D47C]/20 bg-[#F4D47C]/5 px-6 py-3 text-sm font-semibold text-[#0F172A] hover:bg-[#F4D47C]/10 transition-colors"
              >
                See Case Studies
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-[#F4D47C]/20 bg-[#F9F5EF] p-1">
            <div className="relative h-80 overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=700&fit=crop&crop=entropy&auto=format"
                alt="Analytics dashboard for digital strategy"
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
              Data-driven strategy services backed by clear plans, dashboards, and measurable outcomes.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Digital Growth Strategy',
                description: 'Tailored plans to drive traffic, conversions, and engagement across channels.',
                image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=700&h=500&fit=crop&crop=entropy&auto=format',
                features: ['Acquisition Funnels', 'Conversion Optimization', 'Channel Mix']
              },
              {
                title: 'SEO & Content Strategy',
                description: 'Research-led content and search visibility to grow organically and sustainably.',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&h=500&fit=crop&crop=entropy&auto=format',
                features: ['Keyword Research', 'Content Playbooks', 'On-Page & Tech SEO']
              },
              {
                title: 'Social Media Strategy',
                description: 'Platform-specific growth plans with content calendars and engagement tactics.',
                image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=700&h=500&fit=crop&crop=entropy&auto=format',
                features: ['Channel Playbooks', 'Content Calendars', 'Engagement Tactics']
              },
              {
                title: 'Brand Positioning',
                description: 'Define your unique market position, messaging, and differentiation.',
                image: 'https://images.unsplash.com/photo-1522199710521-72d69614c702?w=700&h=500&fit=crop&crop=entropy&auto=format',
                features: ['Audience Insights', 'Messaging Frameworks', 'Value Proposition']
              },
              {
                title: 'Data & Analytics',
                description: 'Dashboards and reporting that reveal what works and what to improve.',
                image: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=700&h=500&fit=crop&crop=entropy&auto=format',
                features: ['KPI Definition', 'Dashboard Setup', 'Performance Reviews']
              },
              {
                title: 'Consulting & Advisory',
                description: 'Ongoing expert guidance to keep your digital programs on track.',
                image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700&h=500&fit=crop&crop=entropy&auto=format',
                features: ['Quarterly Reviews', 'Workshops', 'Executive Advisory']
              }
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
                  <p className="text-sm text-[#1A1A1A]/70 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#F4D47C]" />
                        <span className="text-xs text-[#1A1A1A]/60">{feature}</span>
                      </div>
                    ))}
                  </div>
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
          <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">Our Strategic Process</h3>
          <p className="text-sm leading-relaxed text-[#1A1A1A]/80 md:text-base max-w-2xl mx-auto">
            A clear, collaborative journey from discovery to optimization with visible results at every step.
          </p>
        </div>

        <div className="space-y-12">
          {[
            {
              step: '01',
              title: 'Discovery & Audit',
              description: 'Understand goals, audit your digital footprint, and find quick wins.',
              image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&h=600&fit=crop&crop=entropy&auto=format',
              position: 'left'
            },
            {
              step: '02',
              title: 'Research',
              description: 'Market, audience, and competitor insights to anchor the strategy.',
              image: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=900&h=600&fit=crop&crop=entropy&auto=format',
              position: 'right'
            },
            {
              step: '03',
              title: 'Strategic Planning',
              description: 'Roadmaps, messaging, and channel plans prioritized for impact.',
              image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&h=600&fit=crop&crop=entropy&auto=format',
              position: 'left'
            },
            {
              step: '04',
              title: 'Implementation Guidance',
              description: 'Support during rollout to ensure smooth execution and alignment.',
              image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&h=600&fit=crop&crop=entropy&auto=format',
              position: 'right'
            },
            {
              step: '05',
              title: 'Optimization & Reporting',
              description: 'Continuous improvement driven by performance data and clear reporting.',
              image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=600&fit=crop&crop=entropy&auto=format',
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
            <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">Why Zimnovate for Strategy</h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Data-Driven Decisions',
                description: 'Strategies anchored in data, not guesswork.',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=350&fit=crop&crop=entropy&auto=format'
              },
              {
                title: 'Clear & Actionable Plans',
                description: 'Roadmaps you can execute with confidence.',
                image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=350&fit=crop&crop=entropy&auto=format'
              },
              {
                title: 'Collaborative Approach',
                description: 'We work closely with your team to align and deliver.',
                image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&h=350&fit=crop&crop=entropy&auto=format'
              },
              {
                title: 'Experienced Insight',
                description: 'Seasoned strategists guiding every step.',
                image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=350&fit=crop&crop=entropy&auto=format'
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

      {/* Case Studies */}
      <section className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="text-center space-y-4 mb-12">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">Case Studies</div>
          <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">Results That Speak</h3>
          <p className="text-sm leading-relaxed text-[#1A1A1A]/80 md:text-base max-w-2xl mx-auto">
            Data-backed wins across growth, SEO, and conversion optimization.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'SaaS Growth Uplift',
              description: 'Rebuilt acquisition funnels and content engine, resulting in +220% organic traffic and +40% signups.',
              image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&h=500&fit=crop&crop=entropy&auto=format',
              tags: ['Organic Growth', 'Content', 'Funnels']
            },
            {
              title: 'E-commerce Conversion Lift',
              description: 'CRO sprints and email strategy delivered +35% conversion rate and +18% AOV.',
              image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=700&h=500&fit=crop&crop=entropy&auto=format',
              tags: ['CRO', 'Email', 'Analytics']
            },
            {
              title: 'B2B Demand Gen',
              description: 'Account-based playbooks and landing page revamps drove +120% qualified leads.',
              image: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=700&h=500&fit=crop&crop=entropy&auto=format',
              tags: ['ABM', 'Landing Pages', 'Lead Gen']
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
            View More Case Studies
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
                name: 'Elena Martins',
                role: 'Marketing Director, SaaS Co.',
                image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face&auto=format',
                testimonial: 'Zimnovate gave us a clear digital roadmap. We saw growth within the first month and clarity across the board.'
              },
              {
                name: 'James Carter',
                role: 'Founder, D2C Brand',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format',
                testimonial: 'Their CRO and email strategy lifted our revenue immediately. The dashboards keep us focused on what matters.'
              },
              {
                name: 'Priya Singh',
                role: 'COO, B2B Services',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&auto=format',
                testimonial: 'The strategy sessions were insightful and actionable. We finally have a plan we can execute confidently.'
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
                <div className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0F172A]/70">Ready to Plan</div>
                <h3 className="text-3xl font-bold leading-tight md:text-4xl">
                  Let’s Build Your Digital Success Story
                </h3>
                <p className="text-sm text-[#0F172A]/80">
                  Start with a strategy session that moves your business forward.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#0F172A] px-6 py-3 text-sm font-semibold text-white hover:brightness-110 transition-colors"
                >
                  Book Your Strategy Session
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop&crop=entropy&auto=format"
                alt="Team planning digital strategy"
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

export default DigitalStrategy
