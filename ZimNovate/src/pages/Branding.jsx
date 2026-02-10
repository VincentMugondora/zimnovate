import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PageHero from '../components/PageHero.jsx'

const Branding = () => {
  return (
    <>
      <Helmet>
        <title>Branding & Design Services Zimbabwe — Logo & Identity Design | Zimnovate</title>
        <meta name="description" content="Professional branding and design services in Zimbabwe. Logo design, brand identity, visual design, and brand strategy for businesses in Harare and across Zimbabwe." />
        <meta name="keywords" content="branding agency Zimbabwe, logo design Zimbabwe, brand identity Zimbabwe, graphic design Zimbabwe, visual design Harare, brand strategy Zimbabwe, corporate branding Zimbabwe, business logo design Zimbabwe" />
        <link rel="canonical" href="https://zimnovate.co.zw/services/branding" />
        <meta property="og:title" content="Branding & Design Services Zimbabwe — Logo & Identity Design | Zimnovate" />
        <meta property="og:description" content="Professional branding and design services in Zimbabwe. Logo design, brand identity, visual design, and brand strategy for businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zimnovate.co.zw/services/branding" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Branding & Design Services Zimbabwe — Logo & Identity Design | Zimnovate" />
        <meta name="twitter:description" content="Professional branding and design services in Zimbabwe. Logo design, brand identity, visual design, and brand strategy." />
        <meta name="twitter:image" content="https://zimnovate.co.zw/logo1.png" />
      </Helmet>
    <div>
      {/* Hero Section */}
      <PageHero
        title="We Create Brands That Stand Out"
        subtitle="From logos to full visual identities, we craft brands that leave a lasting impression."
        height="min-h-[50vh]"
      />

      {/* Hero CTA */}
      <section className="mx-auto max-w-7xl px-12 py-10 md:px-16 md:py-14 lg:px-20">
        <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div className="space-y-6">
            <div className="inline-flex rounded-full bg-[#F4D47C]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#0F172A]">
              Branding & Design
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
              Build a brand you’re proud of
            </h2>
            <p className="text-sm leading-relaxed text-[#1A1A1A]/80 md:text-base">
              We design visual identities that feel authentic, memorable, and ready to scale across every touchpoint — digital and physical.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#F4D47C] px-6 py-3 text-sm font-semibold text-[#0F172A] hover:brightness-110 transition-colors"
              >
                Start Your Brand Journey
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center rounded-full border border-[#F4D47C]/20 bg-[#F4D47C]/5 px-6 py-3 text-sm font-semibold text-[#0F172A] hover:bg-[#F4D47C]/10 transition-colors"
              >
                See Our Work
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-[#F4D47C]/20 bg-[#F9F5EF] p-1">
            <div className="relative h-80 overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1522199710521-72d69614c702?w=900&h=700&fit=crop&crop=entropy&auto=format"
                alt="Branding moodboard and logo sketches"
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
              Image-driven branding services that translate your story into a cohesive visual language.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Logo Design',
                description: 'Unique, memorable, and scalable logos crafted for every medium.',
                image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=700&h=500&fit=crop&crop=entropy&auto=format&fm=webp',
                width: 700,
                height: 500,
                features: ['Concepts & Refinement', 'Scalable Formats', 'Brand Marks']
              },
              {
                title: 'Brand Identity',
                description: 'Complete visual systems — colors, typography, tone, and usage rules.',
                image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700&h=500&fit=crop&crop=entropy&auto=format&fm=webp',
                width: 700,
                height: 500,
                features: ['Color & Type', 'Voice & Tone', 'Usage Guidelines']
              },
              {
                title: 'Graphic Design',
                description: 'Marketing assets that tell your story across print and digital.',
                image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=700&h=500&fit=crop&crop=entropy&auto=format&fm=webp',
                width: 700,
                height: 500,
                features: ['Posters & Flyers', 'Pitch Decks', 'Social Creatives']
              },
              {
                title: 'UI/UX Design',
                description: 'Modern interfaces that feel intuitive on web and mobile.',
                image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&h=500&fit=crop&crop=entropy&auto=format&fm=webp',
                width: 700,
                height: 500,
                features: ['Wireframes', 'High-Fidelity UI', 'Design Systems']
              },
              {
                title: 'Packaging Design',
                description: 'Shelf-ready packaging that grabs attention and communicates value.',
                image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700&h=500&fit=crop&crop=entropy&auto=format&fm=webp',
                width: 700,
                height: 500,
                features: ['3D Mockups', 'Print-Ready Files', 'Material Guidance']
              },
              {
                title: 'Social Media Branding',
                description: 'Consistent visuals and templates that keep your feeds on-brand.',
                image: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=700&h=500&fit=crop&crop=entropy&auto=format&fm=webp',
                width: 700,
                height: 500,
                features: ['Template Kits', 'Profile & Cover Art', 'Content Guidelines']
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
                    width={service.width}
                    height={service.height}
                    loading="lazy"
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
          <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">Our Creative Process</h3>
          <p className="text-sm leading-relaxed text-[#1A1A1A]/80 md:text-base max-w-2xl mx-auto">
            A collaborative, image-driven process that turns ideas into cohesive brands.
          </p>
        </div>

        <div className="space-y-12">
          {[
            {
              step: '01',
              title: 'Discover',
              description: 'We learn your story, audience, and goals through workshops and research.',
              image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&h=600&fit=crop&crop=entropy&auto=format',
              position: 'left'
            },
            {
              step: '02',
              title: 'Conceptualize',
              description: 'Moodboards, palettes, and typography explorations aligned to your strategy.',
              image: 'https://images.unsplash.com/photo-1522199710521-72d69614c702?w=900&h=600&fit=crop&crop=entropy&auto=format',
              position: 'right'
            },
            {
              step: '03',
              title: 'Design',
              description: 'We craft logos, visuals, and interfaces that embody your brand essence.',
              image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&h=600&fit=crop&crop=entropy&auto=format',
              position: 'left'
            },
            {
              step: '04',
              title: 'Refine',
              description: 'Feedback cycles to polish every detail until it feels perfect.',
              image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&h=600&fit=crop&crop=entropy&auto=format',
              position: 'right'
            },
            {
              step: '05',
              title: 'Deliver',
              description: 'Brand kits, logo files, and launch assets ready for every channel.',
              image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&h=600&fit=crop&crop=entropy&auto=format',
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
            <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
              Why Partner with Zimnovate
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Creative Excellence',
                description: 'Artistic craft backed by design rigor and research.',
                image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=350&fit=crop&crop=entropy&auto=format'
              },
              {
                title: 'Strategy-Driven',
                description: 'Every visual choice ties back to your brand goals.',
                image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&h=350&fit=crop&crop=entropy&auto=format'
              },
              {
                title: 'Complete Brand Kits',
                description: 'Guidelines, assets, and templates for consistent execution.',
                image: 'https://images.unsplash.com/photo-1522199992905-29661a13ed08?w=500&h=350&fit=crop&crop=entropy&auto=format'
              },
              {
                title: 'Collaborative Process',
                description: 'We iterate with you to get every detail right.',
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
          <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">Branding Highlights</h3>
          <p className="text-sm leading-relaxed text-[#1A1A1A]/80 md:text-base max-w-2xl mx-auto">
            Logo systems, guideline kits, packaging, and social visuals — crafted for lasting impact.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Aurora Labs',
              description: 'Logo + full brand kit + social templates.',
              image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700&h=500&fit=crop&crop=entropy&auto=format',
              tags: ['Logo', 'Guidelines', 'Social Kit']
            },
            {
              title: 'Northwood Estates',
              description: 'Premium property brand with signage and print.',
              image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=700&h=500&fit=crop&crop=entropy&auto=format',
              tags: ['Identity', 'Print', 'Signage']
            },
            {
              title: 'Pulse Fit',
              description: 'Energetic fitness brand with app UI previews.',
              image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700&h=500&fit=crop&crop=entropy&auto=format',
              tags: ['Logo', 'UI', 'Social']
            },
            {
              title: 'Monarch Coffee',
              description: 'Packaging-forward brand with café collateral.',
              image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=700&h=500&fit=crop&crop=entropy&auto=format',
              tags: ['Packaging', 'Print', 'Menu']
            },
            {
              title: 'Vista Travel',
              description: 'Travel brand with web UI and social suite.',
              image: 'https://images.unsplash.com/photo-1433838552652-f9a46b332c40?w=700&h=500&fit=crop&crop=entropy&auto=format',
              tags: ['Identity', 'UI', 'Social']
            },
            {
              title: 'Bloom Wellness',
              description: 'Calm, premium wellness identity with guidelines.',
              image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=700&h=500&fit=crop&crop=entropy&auto=format',
              tags: ['Logo', 'Guidelines', 'Packaging']
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
                name: 'Amelia Wright',
                role: 'Founder, Aurora Labs',
                image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face&auto=format',
                testimonial: 'Zimnovate transformed our brand into something truly professional. Every deliverable felt premium and thought through.'
              },
              {
                name: 'Daniel Kim',
                role: 'CMO, Vista Travel',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format',
                testimonial: 'The brand guidelines and social templates were on point. Our team shipped campaigns faster and on-brand.'
              },
              {
                name: 'Sophia Martinez',
                role: 'CEO, Bloom Wellness',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&auto=format',
                testimonial: 'They nailed the visual direction and packaging. We launched with confidence and great feedback from customers.'
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
                <div className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0F172A]/70">Ready to Build</div>
                <h3 className="text-3xl font-bold leading-tight md:text-4xl">
                  Let’s Build a Brand You’ll Be Proud Of
                </h3>
                <p className="text-sm text-[#0F172A]/80">
                  Start your branding project with Zimnovate and launch with confidence.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#0F172A] px-6 py-3 text-sm font-semibold text-white hover:brightness-110 transition-colors"
                >
                  Start Your Branding Project
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1522199710521-72d69614c702?w=800&h=600&fit=crop&crop=entropy&auto=format&fm=webp"
                alt="Branding workspace"
                width={800}
                height={600}
                loading="lazy"
                className="h-64 w-full object-cover lg:h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F4D47C]/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default Branding
