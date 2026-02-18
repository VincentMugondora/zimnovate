import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'

const StartupMVP = () => {
  return (
    <>
      <Helmet>
        <title>MVP Development for African Startups | Fast Prototyping | Zimnovate</title>
        <meta name="description" content="Simple, fast, affordable MVP development for African startups. Landing pages + core features delivered in 3–6 weeks. Turn your idea into reality." />
        <meta name="keywords" content="mvp development zimbabwe, startup prototyping africa, mvp developer harare, startup web app zimbabwe, minimum viable product africa, fast prototyping startup" />
        <link rel="canonical" href="https://zimnovate.co.zw/startup-mvp" />
        <meta property="og:title" content="MVP Development for African Startups | Fast Prototyping" />
        <meta property="og:description" content="Simple, fast, affordable MVP development for African startups. Landing pages + core features delivered in 3–6 weeks." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zimnovate.co.zw/startup-mvp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MVP Development for African Startups" />
        <meta name="twitter:description" content="Simple, fast, affordable MVP development. 3–6 week delivery." />
        <meta name="twitter:image" content="https://zimnovate.co.zw/logo1.png" />
      </Helmet>
      <div>
        <PageHero
          title="MVP development for African startups"
          subtitle="Turn your idea into a working product—fast, affordable, and ready to test."
          height="min-h-[55vh]"
        />

        {/* Key Points */}
        <section className="bg-[#F9F5EF]">
          <div className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
            <div className="text-center space-y-4 mb-12">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">Why Startups Choose Us</div>
              <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
                Build fast, learn faster
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: 'Simple, fast, affordable prototyping',
                  description: 'We strip away unnecessary complexity and focus on what matters—building a lean prototype you can test with real users without breaking the bank.',
                  icon: '🚀'
                },
                {
                  title: 'Landing page + core features',
                  description: 'Every MVP includes a high-converting landing page to capture interest, plus the essential features that prove your concept works.',
                  icon: '🎯'
                },
                {
                  title: 'Delivery in 3–6 weeks',
                  description: 'Speed matters for startups. We move fast without sacrificing quality, so you can launch, gather feedback, and iterate quickly.',
                  icon: '⚡'
                }
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-[#F4D47C]/20 bg-white p-6 shadow-sm">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#1A1A1A]/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
          <div className="text-center space-y-4 mb-12">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">What You Get</div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
              Everything you need to launch
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div className="space-y-6">
              {[
                {
                  title: 'High-converting landing page',
                  description: 'A beautiful, mobile-first landing page that explains your value proposition and captures early signups or leads.'
                },
                {
                  title: 'Core functionality built',
                  description: 'The 1–3 key features that make your product work—user accounts, dashboards, payments, or whatever your MVP needs.'
                },
                {
                  title: 'Analytics & tracking setup',
                  description: 'Google Analytics, user behavior tracking, and conversion funnels so you can measure what matters from day one.'
                },
                {
                  title: 'Deployment & hosting',
                  description: 'Your MVP live on a fast, secure server with SSL, backups, and monitoring included.'
                }
              ].map((item, index) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F4D47C] text-[#0F172A] font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0F172A] mb-1">{item.title}</h3>
                    <p className="text-sm text-[#1A1A1A]/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-[#F4D47C]/20 bg-[#F9F5EF] p-1">
              <div className="relative h-80 overflow-hidden rounded-3xl">
                <img 
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop&crop=entropy&auto=format" 
                  alt="Startup team working on product development"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/20 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#F9F5EF]">
          <div className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
            <div className="relative overflow-hidden rounded-3xl border border-[#F4D47C]/20 bg-[#F4D47C] p-10 text-[#0F172A] shadow-[0_28px_80px_rgba(0,0,0,0.15)]">
              <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-white/20 blur-3xl" />
              <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-white/10 blur-3xl" />

              <div className="text-center space-y-6 relative z-10">
                <div className="space-y-3">
                  <div className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0F172A]/70">Ready to Build?</div>
                  <h3 className="text-3xl font-bold leading-tight md:text-4xl">
                    Let's turn your idea into reality
                  </h3>
                  <p className="text-sm text-[#0F172A]/80 max-w-lg mx-auto">
                    Tell us about your startup idea and we'll help you build an MVP that gets you to market fast.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 justify-center">
                  <a
                    href="https://wa.me/263777530322?text=Hi%20Zimnovate!%20I%20have%20a%20startup%20idea%20and%20want%20to%20build%20an%20MVP."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-[#0F172A] px-6 py-3 text-sm font-semibold text-white hover:brightness-110 transition-colors"
                  >
                    Share your idea
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-[#0F172A]/30 bg-white/10 px-6 py-3 text-sm font-semibold text-[#0F172A] hover:bg-white/20 transition-colors"
                  >
                    Schedule a Call
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="mx-auto max-w-7xl px-12 py-12 md:px-16 md:py-16 lg:px-20">
          <div className="grid gap-6 md:grid-cols-3 text-center">
            <div className="rounded-xl border border-[#F4D47C]/20 bg-white p-5">
              <div className="text-2xl font-bold text-[#F4D47C] mb-1">3–6 Weeks</div>
              <p className="text-xs text-[#1A1A1A]/70">From idea to live MVP</p>
            </div>
            <div className="rounded-xl border border-[#F4D47C]/20 bg-white p-5">
              <div className="text-2xl font-bold text-[#F4D47C] mb-1">Startup Pricing</div>
              <p className="text-xs text-[#1A1A1A]/70">Budget-friendly for early-stage founders</p>
            </div>
            <div className="rounded-xl border border-[#F4D47C]/20 bg-white p-5">
              <div className="text-2xl font-bold text-[#F4D47C] mb-1">Tech Stack</div>
              <p className="text-xs text-[#1A1A1A]/70">Modern, scalable technologies</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default StartupMVP
