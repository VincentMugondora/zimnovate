import React from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'

const ECommerceSolutions = () => {
  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title="Build High-Performance Online Stores That Convert"
        subtitle="From custom online shops to full-scale e-commerce ecosystems, we help your business sell smarter, faster, and globally."
        height="min-h-[50vh]"
      />

      {/* Intro CTA */}
      <section className="mx-auto max-w-7xl px-12 py-10 md:px-16 md:py-14 lg:px-20">
        <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div className="space-y-6">
            <div className="inline-flex rounded-full bg-[#F4D47C]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#0F172A]">
              E-Commerce Solutions
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
              Digital stores built to sell, scale & succeed
            </h2>
            <p className="text-sm leading-relaxed text-[#1A1A1A]/80 md:text-base">
              We build e-commerce platforms that are fast, scalable, secure, and built for conversion — from the first click to checkout.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#F4D47C] px-6 py-3 text-sm font-semibold text-[#0F172A] hover:brightness-110 transition-colors"
              >
                Start Your Project
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-[#F4D47C]/20 bg-[#F9F5EF] p-1">
            <div className="relative h-80 overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&h=700&fit=crop&crop=entropy&auto=format"
                alt="E-commerce team working"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* E-Commerce Services */}
      <section className="bg-[#F9F5EF]">
        <div className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
          <div className="text-center space-y-4 mb-12">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">Services</div>
            <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">Our E-Commerce Services</h3>
            <p className="text-sm leading-relaxed text-[#1A1A1A]/80 md:text-base max-w-2xl mx-auto">
              End-to-end e-commerce solutions designed to drive sales and scale your business.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Custom E-Commerce Development',
                description: 'Create online stores tailored to your business goals and aligned with global UX best practices.',
                image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=700&h=500&fit=crop&crop=entropy&auto=format',
                features: ['Custom UI/UX Design', 'Product Catalog Setup', 'Shopping Cart & Checkout', 'Wishlist & Reviews', 'Secure Payments']
              },
              {
                title: 'Payment Gateways & POS Integration',
                description: 'Let customers pay their way with seamless, secure payment options.',
                image: 'https://images.unsplash.com/photo-1581091215367-59ab6c3a1d2a?w=700&h=500&fit=crop&crop=entropy&auto=format',
                features: ['PayPal & Stripe', 'Visa/Mastercard', 'POS Syncing', 'Recurring Subscriptions', 'Multi-Currency']
              },
              {
                title: 'E-Commerce Automation',
                description: 'Automate the work you should not do manually.',
                image: 'https://images.unsplash.com/photo-1580894908361-967195033d61?w=700&h=500&fit=crop&crop=entropy&auto=format',
                features: ['Order Notifications', 'Inventory Updates', 'Abandoned Cart Emails', 'Sales Analytics', 'Customer Tracking']
              },
              {
                title: 'Marketplace & Multi-Vendor Stores',
                description: 'Scale your business by allowing multiple vendors to sell on one platform.',
                image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700&h=500&fit=crop&crop=entropy&auto=format',
                features: ['Vendor Dashboards', 'Commission Management', 'Product Control', 'Vendor Payouts', 'Rating System']
              },
              {
                title: 'Mobile Commerce (M-Commerce)',
                description: 'Turn your store into a mobile-first experience.',
                image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=700&h=500&fit=crop&crop=entropy&auto=format',
                features: ['Mobile-First Design', 'Mobile Checkout', 'Push Notifications', 'Apple/Google Pay', 'App Integration']
              },
              {
                title: 'E-Commerce SEO & Marketing Setup',
                description: 'Optimize your store to get traffic and convert visitors into buyers.',
                image: 'https://images.unsplash.com/photo-1508830524289-0adcbe822b40?w=700&h=500&fit=crop&crop=entropy&auto=format',
                features: ['Product SEO', 'Google Shopping', 'Social Shop Integration', 'Tracking Pixels', 'Analytics Setup']
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

      {/* Why Zimnovate */}
      <section className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div className="relative overflow-hidden rounded-3xl border border-[#F4D47C]/20 bg-[#F9F5EF] p-1 md:order-2">
            <div className="relative h-80 overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&h=700&fit=crop&crop=entropy&auto=format"
                alt="Developer working on e-commerce"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/20 to-transparent" />
            </div>
          </div>

          <div className="space-y-6 md:order-1">
            <div className="inline-flex rounded-full bg-[#F4D47C]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#0F172A]">
              Why Zimnovate
            </div>
            <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
              Why Choose Zimnovate for E-Commerce?
            </h3>
            <div className="space-y-4">
              {[
                {
                  title: 'Conversion-Focused Design',
                  description: 'Every element is optimized to turn visitors into customers.'
                },
                {
                  title: 'Scalable Architecture',
                  description: 'Built to handle growth from startup to enterprise level.'
                },
                {
                  title: 'Secure & Compliant',
                  description: 'PCI-DSS compliance and enterprise-grade security built-in.'
                },
                {
                  title: 'Global Reach',
                  description: 'Multi-currency, multi-language, and international shipping ready.'
                }
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="mt-1 h-2 w-2 rounded-full bg-[#F4D47C]" />
                  <div>
                    <h4 className="font-bold text-[#0F172A]">{item.title}</h4>
                    <p className="text-sm text-[#1A1A1A]/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
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
              <div className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0F172A]/70">Ready to Launch</div>
              <h3 className="text-3xl font-bold leading-tight md:text-4xl">
                Ready to Launch or Upgrade Your Online Store?
              </h3>
              <p className="text-sm text-[#0F172A]/80">
                Let Zimnovate build an e-commerce experience that sells.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#0F172A] px-6 py-3 text-sm font-semibold text-white hover:brightness-110 transition-colors"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ECommerceSolutions
