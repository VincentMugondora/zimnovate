import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PageHero from '../components/PageHero.jsx'

const ZimFarmsCaseStudy = () => {
  return (
    <>
      <Helmet>
        <title>ZimFarms AgriTech Case Study | Farm E-Commerce Platform Zimbabwe | Zimnovate</title>
        <meta name="description" content="Learn how Zimnovate built a direct-to-consumer farm produce e-commerce platform for ZimFarms, connecting local farmers with customers and streamlining fresh food delivery across Zimbabwe." />
        <link rel="canonical" href="https://zimnovate.co.zw/portfolio/zimfarms" />
      </Helmet>
      <div>
        <PageHero title="ZimFarms AgriTech Case Study" subtitle="Direct-to-Consumer Fresh Produce E-Commerce Platform" height="min-h-[50vh]" />
      
      <section className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex rounded-full bg-[#F4D47C]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#0F172A]">E-Commerce Platform</div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">Project Overview</h2>
            <p className="text-sm leading-relaxed text-[#1A1A1A]/80 md:text-base">
              ZimFarms connects local farmers directly with consumers, eliminating middlemen and ensuring fresh produce reaches customers faster. We built a robust e-commerce platform that handles fresh produce ordering, subscription boxes, and farm-to-table delivery logistics.
            </p>
            <div className="flex flex-wrap gap-2">
              {['E-Commerce', 'AgriTech', 'Subscription', 'Logistics', 'Local Food'].map((tag) => (
                <span key={tag} className="inline-flex rounded-full bg-[#F4D47C]/10 px-3 py-1 text-xs font-semibold text-[#0F172A]">{tag}</span>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-[#F4D47C]/20 bg-[#F9F5EF] p-1">
            <div className="relative h-72 overflow-hidden rounded-xl">
              <img src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=600&fit=crop&crop=entropy&auto=format" alt="ZimFarms Platform" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F9F5EF]">
        <div className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
          <div className="text-center space-y-4 mb-12">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">The Challenge</div>
            <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">The Problem</h3>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Farmer Access', description: 'Farmers struggled to reach customers directly and get fair prices.' },
              { title: 'Freshness Issues', description: 'Produce often sat in warehouses losing freshness and value.' },
              { title: 'Inconsistent Supply', description: 'No reliable system to connect seasonal supply with demand.' },
              { title: 'Payment Barriers', description: 'Complex payment and delivery logistics for fresh goods.' }
            ].map((problem) => (
              <div key={problem.title} className="rounded-2xl border border-[#F4D47C]/20 bg-white p-6 shadow-sm">
                <h4 className="text-lg font-bold text-[#0F172A] mb-2">{problem.title}</h4>
                <p className="text-sm text-[#1A1A1A]/70">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="text-center space-y-4 mb-12">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">Impact</div>
          <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">Results</h3>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            { value: '200+', label: 'Partner Farms', description: 'Local farmers on the platform' },
            { value: '5K+', label: 'Active Customers', description: 'Weekly subscribers and buyers' },
            { value: '48hrs', label: 'Farm to Door', description: 'Average delivery time' },
            { value: '30%', label: 'Farmer Income', description: 'Increase in farmer earnings' }
          ].map((stat) => (
            <div key={stat.label} className="text-center rounded-2xl border border-[#F4D47C]/20 bg-[#F9F5EF] p-6">
              <div className="text-4xl font-bold text-[#F4D47C] mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-[#0F172A] mb-1">{stat.label}</div>
              <p className="text-sm text-[#1A1A1A]/70">{stat.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F9F5EF]">
        <div className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6 flex justify-center"><span className="text-6xl text-[#F4D47C]">"</span></div>
            <blockquote className="text-xl md:text-2xl font-medium text-[#0F172A] mb-6">
              ZimFarms has revolutionized how we sell our produce. We're now connected directly to our customers and earning what we deserve.
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100&h=100&fit=crop&crop=face" alt="Client" className="h-12 w-12 rounded-full object-cover" />
              <div className="text-left">
                <div className="font-bold text-[#0F172A]">Maria Sibanda</div>
                <div className="text-sm text-[#1A1A1A]/60">Founder, ZimFarms</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="relative overflow-hidden rounded-3xl border border-[#F4D47C]/20 bg-[#F4D47C] p-10 text-[#0F172A] shadow-[0_28px_80px_rgba(0,0,0,0.15)]">
          <div className="text-center space-y-6">
            <h3 className="text-3xl font-bold leading-tight md:text-4xl">Ready to build your platform?</h3>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-[#0F172A] px-6 py-3 text-sm font-semibold text-white hover:brightness-110 transition-colors">Start Your Project →</Link>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default ZimFarmsCaseStudy
