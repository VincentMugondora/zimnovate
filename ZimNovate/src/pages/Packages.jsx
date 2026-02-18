import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'

const Packages = () => {
  return (
    <>
      <Helmet>
        <title>Zimnovate Packages | Website & MVP Pricing | Zimbabwe</title>
        <meta name="description" content="Clear, affordable pricing for website packages, MVP builds, NGO sites, and automation packs. 2–6 week delivery. Get started today." />
        <meta name="keywords" content="website package zimbabwe, mvp build zimbabwe, ngo website package, automation package, web design pricing harare, affordable website zimbabwe" />
        <link rel="canonical" href="https://zimnovate.co.zw/packages" />
        <meta property="og:title" content="Zimnovate Packages | Website & MVP Pricing" />
        <meta property="og:description" content="Clear, affordable pricing for website packages, MVP builds, NGO sites, and automation packs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zimnovate.co.zw/packages" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zimnovate Packages | Website & MVP Pricing" />
        <meta name="twitter:description" content="Clear, affordable pricing for websites, MVPs, NGO sites, and automations." />
        <meta name="twitter:image" content="https://zimnovate.co.zw/logo1.png" />
      </Helmet>
      <div>
        <PageHero
          title="Clear packages, fast delivery"
          subtitle="Choose a package that fits your needs—or request a custom quote."
          height="min-h-[50vh]"
        />

        {/* Packages Grid */}
        <section className="bg-[#F9F5EF]">
          <div className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: 'Launch Website Starter',
                  description: 'Perfect for small businesses and professionals getting started online.',
                  features: [
                    '1–3 custom pages',
                    'Basic brand kit (logo, colors, fonts)',
                    'Mobile-friendly design',
                    'Contact form + Google Maps',
                    'Social media links'
                  ],
                  delivery: '2 weeks',
                  price: 'From $X',
                  cta: 'Get Started',
                  popular: false
                },
                {
                  title: 'MVP Build',
                  description: 'For startups ready to test their idea with real users.',
                  features: [
                    'Simple web application',
                    'High-converting landing page',
                    'User authentication',
                    'Core feature development',
                    'Analytics setup'
                  ],
                  delivery: '3–6 weeks',
                  price: 'From $X',
                  cta: 'Build Your MVP',
                  popular: true
                },
                {
                  title: 'NGO Donor-Ready Site',
                  description: 'Built specifically for nonprofits to attract donors and grants.',
                  features: [
                    'Project showcase pages',
                    'Impact reports & storytelling',
                    'Donation integration',
                    'Team & volunteer pages',
                    'Grant application section'
                  ],
                  delivery: '3–4 weeks',
                  price: 'From $X',
                  cta: 'Start Your Site',
                  popular: false
                },
                {
                  title: 'Automation Pack',
                  description: 'Streamline your business operations with smart automations.',
                  features: [
                    'Custom form integrations',
                    'Email automation setup',
                    'Simple dashboard/CRM',
                    'Payment tracking',
                    'Notification systems'
                  ],
                  delivery: '1–2 weeks',
                  price: 'From $X',
                  cta: 'Automate Now',
                  popular: false
                }
              ].map((pkg) => (
                <div 
                  key={pkg.title} 
                  className={`relative rounded-2xl border bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] flex flex-col ${
                    pkg.popular ? 'border-[#F4D47C] ring-2 ring-[#F4D47C]/20' : 'border-[#F4D47C]/20'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#F4D47C] px-3 py-1 text-xs font-semibold text-[#0F172A]">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-[#0F172A]">{pkg.title}</h3>
                    <p className="mt-1 text-sm text-[#1A1A1A]/70">{pkg.description}</p>
                  </div>

                  <div className="mb-4">
                    <div className="text-3xl font-bold text-[#F4D47C]">{pkg.price}</div>
                    <div className="text-xs text-[#1A1A1A]/60">Delivery: {pkg.delivery}</div>
                  </div>

                  <ul className="mb-6 space-y-2 flex-grow">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-[#1A1A1A]/80">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F4D47C]" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/263777530322?text=Hi%20Zimnovate!%20I'm%20interested%20in%20the%20${encodeURIComponent(pkg.title)}%20package.`}
                    target="_blank"
                    rel="noreferrer"
                    className={`block w-full rounded-full py-3 text-center text-sm font-semibold transition-colors ${
                      pkg.popular 
                        ? 'bg-[#F4D47C] text-[#0F172A] hover:brightness-110' 
                        : 'bg-[#0F172A] text-white hover:bg-[#0F172A]/90'
                    }`}
                  >
                    {pkg.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Projects */}
        <section className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
          <div className="rounded-2xl border border-[#F4D47C]/20 bg-white p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-2">Need something custom?</h2>
                <p className="text-sm text-[#1A1A1A]/70 max-w-lg">
                  Every business is different. Tell us about your project and we'll create a tailored package that fits your specific needs and budget.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/263777530322?text=Hi%20Zimnovate!%20I%20need%20a%20custom%20package%20quote."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#F4D47C] px-6 py-3 text-sm font-semibold text-[#0F172A] hover:brightness-110 transition-colors"
                >
                  Request Custom Quote
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-[#0F172A]/20 px-6 py-3 text-sm font-semibold text-[#0F172A] hover:bg-[#0F172A]/5 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ / Trust Section */}
        <section className="bg-[#F9F5EF]">
          <div className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-2xl font-bold text-[#0F172A]">What's included in every package</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 text-center">
              {[
                { title: 'Mobile Responsive', desc: 'Works perfectly on all devices' },
                { title: 'SEO Foundation', desc: 'Search engine optimized setup' },
                { title: 'Fast Loading', desc: 'Optimized for speed & performance' },
                { title: 'Support', desc: '30 days post-launch support' }
              ].map((item) => (
                <div key={item.title} className="rounded-xl bg-white p-5 shadow-sm">
                  <h3 className="text-sm font-bold text-[#0F172A] mb-1">{item.title}</h3>
                  <p className="text-xs text-[#1A1A1A]/70">{item.desc}</p>
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

            <div className="text-center space-y-6 relative z-10">
              <div className="space-y-3">
                <h3 className="text-3xl font-bold leading-tight md:text-4xl">
                  Ready to get started?
                </h3>
                <p className="text-sm text-[#0F172A]/80 max-w-lg mx-auto">
                  Choose a package above or contact us for a custom solution tailored to your business.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href="https://wa.me/263777530322?text=Hi%20Zimnovate!%20I'm%20interested%20in%20one%20of%20your%20packages."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#0F172A] px-6 py-3 text-sm font-semibold text-white hover:brightness-110 transition-colors"
                >
                  Get a Quote in 24 Hours
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Packages
