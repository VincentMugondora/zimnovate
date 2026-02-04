import React from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'

const SwiftPayCaseStudy = () => {
  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title="SwiftPay"
        subtitle="A Fast, Secure Mobile Wallet App for African Markets"
        height="min-h-[50vh]"
      />

      {/* Project Overview */}
      <section className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex rounded-full bg-[#F4D47C]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#0F172A]">
              Mobile Wallet App
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
              Project Overview
            </h2>
            <p className="text-sm leading-relaxed text-[#1A1A1A]/80 md:text-base">
              SwiftPay came to us with a vision to revolutionize digital payments in Zimbabwe. They needed 
              a mobile wallet that was fast, secure, and incredibly easy to use for everyday transactions.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Fintech', 'Mobile App', 'iOS', 'Android', 'Payment'].map((tag) => (
                <span key={tag} className="inline-flex rounded-full bg-[#F4D47C]/10 px-3 py-1 text-xs font-semibold text-[#0F172A]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-[#F4D47C]/20 bg-[#F9F5EF] p-1">
            <div className="relative h-72 overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop&crop=entropy&auto=format"
                alt="SwiftPay Mobile App"
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
              { title: 'Slow Transactions', description: 'Existing payment apps were slow and frustrating for users.' },
              { title: 'Security Concerns', description: 'Users worried about the safety of their money and data.' },
              { title: 'Complex UI', description: 'Apps were cluttered and confusing for everyday users.' },
              { title: 'Limited Access', description: 'Many people lacked access to modern digital payment solutions.' }
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
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop&crop=entropy&auto=format"
                alt="Mobile payment solution"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/30 to-transparent" />
            </div>
          </div>

          <div className="space-y-6 lg:order-1">
            <p className="text-sm leading-relaxed text-[#1A1A1A]/80 md:text-base">
              We built SwiftPay with a focus on speed, security, and simplicity. The app features biometric 
              authentication, QR code payments, instant transfers, and a clean, intuitive interface designed 
              specifically for the African market.
            </p>
            <div className="space-y-3">
              <h4 className="font-bold text-[#0F172A]">Key Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {['React Native', 'Node.js', 'PostgreSQL', 'AWS', 'Biometric API', 'Push Notifications'].map((tech) => (
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
              'Biometric Login',
              'QR Code Payments',
              'Instant Transfers',
              'Balance & Statements',
              'Push Notifications',
              'Multi-Language Support',
              'Airtime & Data Top-up',
              'Bill Payments',
              'Transaction History',
              'Secure Encryption',
              'Offline Mode',
              'Customer Support Chat'
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
            { step: '01', title: 'User Research', description: 'Conducted extensive user interviews to understand payment habits and pain points.' },
            { step: '02', title: 'UX Design', description: 'Created wireframes focused on one-tap payments and minimal friction.' },
            { step: '03', title: 'UI Design', description: 'Designed a clean, modern interface with African-inspired color accents.' },
            { step: '04', title: 'Development', description: 'Built cross-platform app using React Native for iOS and Android.' },
            { step: '05', title: 'Security Audit', description: 'Implemented bank-grade encryption and security protocols.' },
            { step: '06', title: 'Beta Testing', description: 'Launched beta with 500 users to gather feedback and refine UX.' },
            { step: '07', title: 'App Store Launch', description: 'Published to Google Play and App Store with full marketing support.' }
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

      {/* Results */}
      <section className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="text-center space-y-4 mb-12">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">Impact</div>
          <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">Results & Metrics</h3>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            { value: '100K+', label: 'Downloads', description: 'In first 6 months' },
            { value: '3.2s', label: 'Avg Transaction', description: 'Payment completion time' },
            { value: '98%', label: 'Uptime', description: 'Platform reliability' },
            { value: '4.7★', label: 'App Rating', description: 'On both iOS and Android' }
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
              SwiftPay has transformed how our customers pay us. The speed and simplicity are unmatched. 
              Zimnovate truly understood our vision and delivered beyond expectations.
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                alt="Client"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-bold text-[#0F172A]">Kudakwashe Mutasa</div>
                <div className="text-sm text-[#1A1A1A]/60">CEO, SwiftPay</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Links */}
      <section className="mx-auto max-w-7xl px-12 py-10 md:px-16 lg:px-20">
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-[#F4D47C] px-6 py-3 text-sm font-semibold text-[#0F172A] hover:brightness-110 transition-colors"
          >
            Download App →
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

export default SwiftPayCaseStudy
