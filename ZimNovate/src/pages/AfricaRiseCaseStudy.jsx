import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PageHero from '../components/PageHero.jsx'

const AfricaRiseCaseStudy = () => {
  return (
    <>
      <Helmet>
        <title>AfricaRise Digital Marketing Case Study | Growth Campaign Zimbabwe | Zimnovate</title>
        <meta name="description" content="See how Zimnovate helped AfricaRise grow from 0 to 15,000 monthly users through strategic digital marketing, SEO, content creation, and targeted social media campaigns." />
        <link rel="canonical" href="https://zimnovate.co.zw/portfolio/africarise" />
      </Helmet>
      <div>
        {/* Hero Section */}
        <PageHero
          title="AfricaRise Digital Marketing Case Study"
          subtitle="A Content-Driven Growth Campaign from 0 to 15,000 Monthly Users"
          height="min-h-[50vh]"
        />

      {/* Project Overview */}
      <section className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex rounded-full bg-[#F4D47C]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#0F172A]">
              Digital Marketing Campaign
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
              Project Overview
            </h2>
            <p className="text-sm leading-relaxed text-[#1A1A1A]/80 md:text-base">
              AfricaRise, a promising African tech startup, needed to build brand awareness and acquire users 
              for their new platform. Starting from zero, we designed and executed a comprehensive digital 
              marketing strategy that delivered remarkable growth in just 6 months.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Digital Marketing', 'SEO', 'Social Media', 'Growth', 'Content Strategy'].map((tag) => (
                <span key={tag} className="inline-flex rounded-full bg-[#F4D47C]/10 px-3 py-1 text-xs font-semibold text-[#0F172A]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-[#F4D47C]/20 bg-[#F9F5EF] p-1">
            <div className="relative h-72 overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?w=800&h=600&fit=crop&crop=entropy&auto=format"
                alt="AfricaRise Campaign"
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
              { title: 'Zero Brand Awareness', description: 'New startup with no existing audience or market presence.' },
              { title: 'Limited Budget', description: 'Needed to achieve maximum impact with constrained marketing spend.' },
              { title: 'Competitive Market', description: 'Entering a crowded space with established competitors.' },
              { title: 'User Acquisition', description: 'Needed to attract and convert quality users at scale.' }
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
                src="https://images.unsplash.com/photo-1533750516457-a7f9920fec12?w=800&h=600&fit=crop&crop=entropy&auto=format"
                alt="Marketing strategy"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/30 to-transparent" />
            </div>
          </div>

          <div className="space-y-6 lg:order-1">
            <p className="text-sm leading-relaxed text-[#1A1A1A]/80 md:text-base">
              We developed an integrated digital marketing strategy combining SEO, content marketing, 
              social media advertising, and conversion optimization. Our approach focused on creating 
              valuable content that resonated with the target audience while optimizing every touchpoint 
              for maximum conversion.
            </p>
            <div className="space-y-3">
              <h4 className="font-bold text-[#0F172A]">Key Strategies:</h4>
              <div className="flex flex-wrap gap-2">
                {['SEO Optimization', 'Content Marketing', 'Social Media Ads', 'Email Campaigns', 'Influencer Partnerships', 'Analytics'].map((tech) => (
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
            <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">Campaign Components</h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              'SEO Strategy & Implementation',
              'Content Calendar & Blog Posts',
              'Social Media Management',
              'Facebook & Instagram Ads',
              'Google Ads Campaign',
              'Email Marketing Automation',
              'Landing Page Optimization',
              'Influencer Outreach',
              'PR & Media Relations',
              'Analytics Dashboard',
              'A/B Testing Program',
              'Monthly Reporting'
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
            { step: '01', title: 'Audience Research', description: 'Deep dive into target demographics, behaviors, and pain points.' },
            { step: '02', title: 'Competitor Analysis', description: 'Analyzed competitor strategies to identify gaps and opportunities.' },
            { step: '03', title: 'Strategy Development', description: 'Created integrated marketing plan with clear KPIs and timelines.' },
            { step: '04', title: 'Content Creation', description: 'Produced high-quality blog posts, videos, and social content.' },
            { step: '05', title: 'Campaign Launch', description: 'Executed coordinated launch across all channels.' },
            { step: '06', title: 'Optimization', description: 'Continuously refined based on performance data and feedback.' },
            { step: '07', title: 'Scale & Grow', description: 'Expanded successful campaigns and explored new channels.' }
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
            { value: '15K+', label: 'Monthly Users', description: 'Active users within 6 months' },
            { value: '320%', label: 'Traffic Growth', description: 'Organic traffic increase' },
            { value: '12%', label: 'Conversion Rate', description: 'Visitor to sign-up rate' },
            { value: '45%', label: 'Cost Reduction', description: 'Lower CPA than industry average' }
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
              Zimnovate's marketing expertise transformed our startup. They didn't just bring traffic— 
              they brought the right users who genuinely engaged with our platform.
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
                alt="Client"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-bold text-[#0F172A]">James Ndlovu</div>
                <div className="text-sm text-[#1A1A1A]/60">CEO, AfricaRise</div>
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
                Ready to grow your audience?
              </h3>
              <p className="text-sm text-[#0F172A]/80">
                Let's create a marketing strategy that drives real results.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#0F172A] px-6 py-3 text-sm font-semibold text-white hover:brightness-110 transition-colors"
              >
                Start Your Campaign →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default AfricaRiseCaseStudy
