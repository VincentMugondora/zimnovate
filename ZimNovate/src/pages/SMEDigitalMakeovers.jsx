import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'

const SMEDigitalMakeovers = () => {
  return (
    <>
      <Helmet>
        <title>Digital Makeovers for SMEs in Harare | Web Design & Branding | Zimnovate</title>
        <meta name="description" content="Modern websites, clean branding, and automations designed for local businesses in Harare. Business website upgrades, branding refresh, and basic automations packages." />
        <meta name="keywords" content="sme digital makeover harare, small business website upgrade zimbabwe, business branding refresh harare, sme automation zimbabwe, local business web design" />
        <link rel="canonical" href="https://zimnovate.co.zw/sme-digital-makeovers" />
        <meta property="og:title" content="Digital Makeovers for SMEs in Harare | Web Design & Branding" />
        <meta property="og:description" content="Modern websites, clean branding, and automations designed for local businesses in Harare." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zimnovate.co.zw/sme-digital-makeovers" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Makeovers for SMEs in Harare" />
        <meta name="twitter:description" content="Modern websites, clean branding, and automations for local businesses." />
        <meta name="twitter:image" content="https://zimnovate.co.zw/logo1.png" />
      </Helmet>
      <div>
        <PageHero
          title="Digital makeovers for SMEs in Harare"
          subtitle="Modern websites, clean branding, and automations designed for local businesses."
          height="min-h-[55vh]"
        />

        {/* 3 Services Section */}
        <section className="bg-[#F9F5EF]">
          <div className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
            <div className="text-center space-y-4 mb-12">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">Our Services</div>
              <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
                Three ways we transform your business
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: 'Business Website Upgrade',
                  description: 'Transform your outdated website into a modern, mobile-friendly platform that attracts customers and drives sales. Fast loading, SEO-ready, and designed to convert visitors into clients.',
                  features: ['Mobile-first design', 'SEO optimization', 'Fast loading speeds', 'Contact forms & lead capture'],
                  icon: '🌐',
                  price: 'From $XXX'
                },
                {
                  title: 'Branding Refresh',
                  description: 'Give your business a professional, cohesive look with updated logos, color schemes, and brand guidelines. Stand out from competitors and build trust with your customers.',
                  features: ['Logo redesign', 'Color palette & fonts', 'Business cards & stationery', 'Social media kit'],
                  icon: '🎨',
                  price: 'From $XXX'
                },
                {
                  title: 'Basic Automations Package',
                  description: 'Save hours every week by automating repetitive tasks. From automated emails to streamlined workflows, we help your business run smoother with less manual work.',
                  features: ['Email automation', 'Appointment scheduling', 'Invoice reminders', 'Simple CRM setup'],
                  icon: '⚙️',
                  price: 'From $XXX'
                }
              ].map((service) => (
                <div key={service.title} className="rounded-2xl border border-[#F4D47C]/20 bg-white p-6 shadow-sm flex flex-col">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2">{service.title}</h3>
                  <p className="text-sm text-[#1A1A1A]/70 mb-4 flex-grow">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs text-[#1A1A1A]/70">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#F4D47C]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="inline-flex items-center rounded-full bg-[#F9F5EF] px-3 py-1.5 text-xs font-semibold text-[#0F172A]/80 ring-1 ring-[#F4D47C]/20">
                    {service.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
          <div className="text-center space-y-4 mb-12">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">Why Local Businesses Choose Us</div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
              Built for Harare businesses
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Local expertise',
                description: 'We understand the Harare market and what local customers expect from businesses online.'
              },
              {
                title: 'Fast turnaround',
                description: 'Most projects completed in 2–4 weeks so you can start seeing results quickly.'
              },
              {
                title: 'SME-friendly pricing',
                description: 'Transparent, affordable packages designed specifically for small and medium business budgets.'
              },
              {
                title: 'Ongoing support',
                description: 'Training and support included so your team can manage updates confidently.'
              }
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-[#F4D47C]/20 bg-white p-5">
                <h3 className="text-base font-bold text-[#0F172A] mb-2">{item.title}</h3>
                <p className="text-sm text-[#1A1A1A]/70">{item.description}</p>
              </div>
            ))}
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
                  <div className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0F172A]/70">Ready to Transform Your Business?</div>
                  <h3 className="text-3xl font-bold leading-tight md:text-4xl">
                    Request a quick quote
                  </h3>
                  <p className="text-sm text-[#0F172A]/80 max-w-lg mx-auto">
                    Get a clear, no-obligation quote for your digital makeover. We'll respond within 24 hours with a customized plan for your business.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 justify-center">
                  <a
                    href="https://wa.me/263777530322?text=Hi%20Zimnovate!%20I'm%20interested%20in%20a%20digital%20makeover%20for%20my%20business."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-[#0F172A] px-6 py-3 text-sm font-semibold text-white hover:brightness-110 transition-colors"
                  >
                    Request a quick quote
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-[#0F172A]/30 bg-white/10 px-6 py-3 text-sm font-semibold text-[#0F172A] hover:bg-white/20 transition-colors"
                  >
                    Learn More
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
              <div className="text-2xl font-bold text-[#F4D47C] mb-1">2–4 Weeks</div>
              <p className="text-xs text-[#1A1A1A]/70">Typical project delivery</p>
            </div>
            <div className="rounded-xl border border-[#F4D47C]/20 bg-white p-5">
              <div className="text-2xl font-bold text-[#F4D47C] mb-1">SME Pricing</div>
              <p className="text-xs text-[#1A1A1A]/70">Affordable for local businesses</p>
            </div>
            <div className="rounded-xl border border-[#F4D47C]/20 bg-white p-5">
              <div className="text-2xl font-bold text-[#F4D47C] mb-1">24h Response</div>
              <p className="text-xs text-[#1A1A1A]/70">Quick quote turnaround</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default SMEDigitalMakeovers
