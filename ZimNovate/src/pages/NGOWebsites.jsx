import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'

const NGOWebsites = () => {
  return (
    <>
      <Helmet>
        <title>NGO Websites Zimbabwe | Donor-Ready Web Design for Nonprofits | Zimnovate</title>
        <meta name="description" content="Professional, affordable websites for Zimbabwean NGOs. Tell your story, showcase impact, and simplify grant applications with donor-ready web design." />
        <meta name="keywords" content="ngo website design zimbabwe, nonprofit website zimbabwe, charity website harare, donor ready website, ngo web design, nonprofit digital solutions zimbabwe" />
        <link rel="canonical" href="https://zimnovate.co.zw/ngo-websites" />
        <meta property="og:title" content="NGO Websites Zimbabwe | Donor-Ready Web Design for Nonprofits" />
        <meta property="og:description" content="Professional, affordable websites for Zimbabwean NGOs. Tell your story, showcase impact, and simplify grant applications." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zimnovate.co.zw/ngo-websites" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NGO Websites Zimbabwe | Donor-Ready Web Design" />
        <meta name="twitter:description" content="Professional, affordable websites for Zimbabwean NGOs. Tell your story, showcase impact." />
        <meta name="twitter:image" content="https://zimnovate.co.zw/logo1.png" />
      </Helmet>
      <div>
        <PageHero
          title="Donor-ready websites for Zimbabwean NGOs"
          subtitle="Tell your story, showcase impact, and simplify grant applications with a professional website."
          height="min-h-[55vh]"
        />

        {/* What NGOs Struggle With */}
        <section className="bg-[#F9F5EF]">
          <div className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
            <div className="text-center space-y-4 mb-12">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">Common Challenges</div>
              <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
                What NGOs struggle with online
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: 'Slow, outdated websites',
                  description: 'Many NGO sites take too long to load and look dated, causing donors to leave before reading about your mission.',
                  icon: '🐌'
                },
                {
                  title: 'Unclear project pages',
                  description: 'Donors and grant makers cannot easily find information about your projects, impact, or how to support your work.',
                  icon: '📄'
                },
                {
                  title: 'Missing impact storytelling',
                  description: 'Without clear case studies and success stories, potential supporters cannot see the real difference you make.',
                  icon: '📊'
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

        {/* What We Offer */}
        <section className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
          <div className="text-center space-y-4 mb-12">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">Our Solution</div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
              What Zimnovate delivers
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div className="space-y-6">
              {[
                {
                  title: 'Story-driven design',
                  description: 'We craft layouts that put your mission first—highlighting beneficiaries, volunteers, and community impact in a way that resonates with donors.'
                },
                {
                  title: 'Fast loading, mobile-first',
                  description: 'Your site loads quickly on any connection, from urban Harare to rural Zimbabwe. Mobile-friendly so donors can browse anywhere.'
                },
                {
                  title: 'Project & reports pages',
                  description: 'Clear sections for current initiatives, past achievements, annual reports, and financial transparency—making grant applications easier.'
                },
                {
                  title: 'Donation & contact integration',
                  description: 'Simple donation buttons, contact forms, and newsletter signup to convert visitors into supporters.'
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
                  src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=800&h=600&fit=crop&crop=entropy&auto=format" 
                  alt="NGO team collaborating on community project"
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
                  <div className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0F172A]/70">Ready to Grow Your Impact?</div>
                  <h3 className="text-3xl font-bold leading-tight md:text-4xl">
                    Request a budget-friendly NGO website quote
                  </h3>
                  <p className="text-sm text-[#0F172A]/80 max-w-lg mx-auto">
                    Special NGO rates available. We understand nonprofit budgets and deliver professional results without breaking the bank.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-[#0F172A] px-6 py-3 text-sm font-semibold text-white hover:brightness-110 transition-colors"
                  >
                    Get Your NGO Website Quote
                  </Link>
                  <a
                    href="https://wa.me/263777530322?text=Hi%20Zimnovate!%20I'm%20interested%20in%20an%20NGO%20website%20quote."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-[#0F172A]/30 bg-white/10 px-6 py-3 text-sm font-semibold text-[#0F172A] hover:bg-white/20 transition-colors"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="mx-auto max-w-7xl px-12 py-12 md:px-16 md:py-16 lg:px-20">
          <div className="grid gap-6 md:grid-cols-3 text-center">
            <div className="rounded-xl border border-[#F4D47C]/20 bg-white p-5">
              <div className="text-2xl font-bold text-[#F4D47C] mb-1">Budget-Friendly</div>
              <p className="text-xs text-[#1A1A1A]/70">Special NGO rates to maximize your impact</p>
            </div>
            <div className="rounded-xl border border-[#F4D47C]/20 bg-white p-5">
              <div className="text-2xl font-bold text-[#F4D47C] mb-1">2–3 Week Delivery</div>
              <p className="text-xs text-[#1A1A1A]/70">Fast turnaround so you can start fundraising sooner</p>
            </div>
            <div className="rounded-xl border border-[#F4D47C]/20 bg-white p-5">
              <div className="text-2xl font-bold text-[#F4D47C] mb-1">Ongoing Support</div>
              <p className="text-xs text-[#1A1A1A]/70">Training and updates included for your team</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default NGOWebsites
