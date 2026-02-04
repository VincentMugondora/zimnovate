import React from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'

const ZimFreshCaseStudy = () => {
  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title="ZimFresh Marketplace"
        subtitle="A Scalable E-Commerce Platform for Local Retailers"
        height="min-h-[50vh]"
      />

      {/* Project Overview */}
      <section className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex rounded-full bg-[#F4D47C]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#0F172A]">
              E-Commerce Platform
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
              Project Overview
            </h2>
            <p className="text-sm leading-relaxed text-[#1A1A1A]/80 md:text-base">
              ZimFresh approached us to develop an end-to-end e-commerce platform that would help small business owners 
              sell their products online with ease. They needed a modern, mobile-friendly solution with secure payments 
              and automated order management.
            </p>
            <div className="flex flex-wrap gap-2">
              {['E-Commerce', 'Web App', 'Multi-Vendor', 'Payment Integration'].map((tag) => (
                <span key={tag} className="inline-flex rounded-full bg-[#F4D47C]/10 px-3 py-1 text-xs font-semibold text-[#0F172A]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-[#F4D47C]/20 bg-[#F9F5EF] p-1">
            <div className="relative h-72 overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1522199710521-72d69614c702?w=800&h=600&fit=crop&crop=entropy&auto=format"
                alt="ZimFresh Marketplace"
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
              { title: 'Limited Online Presence', description: 'Small retailers had no way to reach customers beyond their physical locations.' },
              { title: 'Manual Order Processing', description: 'Orders were taken via phone/WhatsApp, leading to errors and delays.' },
              { title: 'No Real-Time Inventory', description: 'Stock levels were tracked manually, causing overselling issues.' },
              { title: 'Payment Barriers', description: 'Difficulty accepting digital payments from customers across Zimbabwe.' }
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
                src="https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop&crop=entropy&auto=format"
                alt="E-commerce solution"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/30 to-transparent" />
            </div>
          </div>

          <div className="space-y-6 lg:order-1">
            <p className="text-sm leading-relaxed text-[#1A1A1A]/80 md:text-base">
              We designed and built a multi-vendor marketplace with automated inventory, integrated Paynow & Stripe 
              payments, vendor dashboards, and mobile-first UI/UX tailored for African consumers.
            </p>
            <div className="space-y-3">
              <h4 className="font-bold text-[#0F172A]">Key Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'MongoDB', 'Stripe API', 'Paynow', 'AWS'].map((tech) => (
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
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">What We Built</div>
            <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">Features & Deliverables</h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              'Custom UI/UX Design',
              'Multi-Vendor Support',
              'Secure Payment Integration',
              'Product Catalog System',
              'Vendor Onboarding Portal',
              'Mobile-First Checkout',
              'Real-Time Inventory',
              'Admin Dashboard',
              'Order Management System',
              'Customer Reviews',
              'Analytics & Reporting',
              'SEO Optimization'
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
            { step: '01', title: 'Research & Discovery', description: 'Conducted market research and competitor analysis to understand local e-commerce needs.' },
            { step: '02', title: 'Wireframes & Prototypes', description: 'Created low-fidelity wireframes and interactive prototypes for user testing.' },
            { step: '03', title: 'UI/UX Design', description: 'Designed a modern, mobile-first interface with African consumer preferences in mind.' },
            { step: '04', title: 'Development', description: 'Built the platform using React frontend and Node.js backend with MongoDB database.' },
            { step: '05', title: 'Testing', description: 'Conducted rigorous testing including payment flow verification and load testing.' },
            { step: '06', title: 'Launch', description: 'Soft launch with select vendors, followed by full public release.' },
            { step: '07', title: 'Ongoing Support', description: 'Provided training, documentation, and continuous platform improvements.' }
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
            <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">Project Gallery</h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop', alt: 'Homepage Design' },
              { src: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&h=400&fit=crop', alt: 'Product Page' },
              { src: 'https://images.unsplash.com/photo-1556742044-3c52d6e3c22a?w=600&h=400&fit=crop', alt: 'Checkout Flow' },
              { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop', alt: 'Vendor Dashboard' },
              { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop', alt: 'Mobile View' },
              { src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop', alt: 'Admin Panel' }
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
          <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">Results & Metrics</h3>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            { value: '150+', label: 'Active Vendors', description: 'Small businesses now selling online' },
            { value: '50K+', label: 'Monthly Orders', description: 'Average order volume per month' },
            { value: '85%', label: 'Mobile Traffic', description: 'Users accessing via mobile devices' },
            { value: '4.8/5', label: 'User Rating', description: 'Average customer satisfaction score' }
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
              Zimnovate delivered beyond expectations. Our sales doubled within the first three months, 
              and the platform is incredibly easy to use for both vendors and customers.
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                alt="Client"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-bold text-[#0F172A]">Tendai Moyo</div>
                <div className="text-sm text-[#1A1A1A]/60">Founder, ZimFresh Marketplace</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Links */}
      <section className="mx-auto max-w-7xl px-12 py-10 md:px-16 lg:px-20">
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://zimfresh.co.zw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#F4D47C] px-6 py-3 text-sm font-semibold text-[#0F172A] hover:brightness-110 transition-colors"
          >
            Visit Live Website →
          </a>
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center rounded-full border border-[#F4D47C]/20 bg-[#F4D47C]/5 px-6 py-3 text-sm font-semibold text-[#0F172A] hover:bg-[#F4D47C]/10 transition-colors"
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
                Have a project idea?
              </h3>
              <p className="text-sm text-[#0F172A]/80">
                Let's bring it to life.
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
  )
}

export default ZimFreshCaseStudy
