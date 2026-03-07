import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Check, 
  ChevronDown, 
  MessageSquare, 
  Rocket, 
  ShieldCheck, 
  Zap, 
  Globe, 
  Clock, 
  CreditCard, 
  Users, 
  Wrench,
  HelpCircle
} from 'lucide-react'
import PageHero from '../components/PageHero.jsx'

const FeatureIcon = ({ icon: Icon, className = "" }) => (
  <div className={`flex h-6 w-6 items-center justify-center rounded-full bg-[#9cff5f]/10 text-[#9cff5f] ${className}`}>
    <Icon size={14} />
  </div>
)

const PricingCard = ({ 
  title, 
  price, 
  description, 
  features, 
  timeline, 
  ctaText, 
  popular = false,
  delay = 0 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`relative flex flex-col rounded-3xl border p-8 transition-all duration-300 ${
      popular 
        ? 'border-[#9cff5f] bg-white shadow-[0_20px_40px_rgba(156,255,95,0.15)] ring-1 ring-[#9cff5f]/50' 
        : 'border-[var(--zim-border)] bg-white hover:border-[#9cff5f]/30 hover:shadow-xl'
    }`}
  >
    {popular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#9cff5f] px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#0b0b0b]">
        Most Popular
      </div>
    )}
    <div className="mb-6">
      <h3 className="text-xl font-bold text-[#0F172A]">{title}</h3>
      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-4xl font-extrabold tracking-tight text-[#0F172A]">{price}</span>
      </div>
      <p className="mt-3 text-sm text-[#1A1A1A]/70">{description}</p>
    </div>

    <div className="mb-8 flex-1 space-y-4">
      <div className="text-xs font-semibold uppercase tracking-widest text-[#1A1A1A]/40">What's included:</div>
      <ul className="space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-[#1A1A1A]/80">
            <Check size={16} className="mt-0.5 shrink-0 text-[#9cff5f]" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="mb-6 rounded-2xl bg-[#F9F5EF] p-4 text-center">
      <div className="text-xs font-semibold text-[#1A1A1A]/50 uppercase tracking-wider">Delivery Timeline</div>
      <div className="mt-1 text-sm font-bold text-[#0F172A]">{timeline}</div>
    </div>

    <Link
      to="/contact"
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition-all ${
        popular 
          ? 'bg-[#0F172A] text-white hover:brightness-110' 
          : 'bg-[#9cff5f] text-[#0b0b0b] hover:brightness-105'
      }`}
    >
      {ctaText}
    </Link>
  </motion.div>
)

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="border-b border-[var(--zim-border)] last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-6 text-left focus:outline-none"
      >
        <span className="text-base font-bold text-[#0F172A]">{question}</span>
        <ChevronDown 
          size={20} 
          className={`text-[#1A1A1A]/40 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm leading-relaxed text-[#1A1A1A]/70">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const Pricing = () => {
  const packages = [
    {
      title: '🌱 Starter Website',
      price: '$250 – $400',
      description: 'Best for small businesses and startups launching their first website.',
      features: [
        '3–5 pages',
        'Mobile responsive design',
        'Basic SEO setup',
        'Contact form',
        'WhatsApp integration',
        'Fast loading performance'
      ],
      timeline: '2 weeks',
      ctaText: 'Start Your Project'
    },
    {
      title: '🚀 Business Growth Website',
      price: '$500 – $900',
      description: 'Best for SMEs that want a professional online presence.',
      features: [
        '6–10 pages',
        'Custom UI design',
        'Blog or CMS setup',
        'SEO optimization',
        'Google Analytics setup',
        'Contact forms + integrations'
      ],
      timeline: '3–4 weeks',
      ctaText: 'Get a Quote',
      popular: true
    },
    {
      title: '⚡ Startup MVP Build',
      price: '$1,200 – $2,500',
      description: 'For startups building their first product.',
      features: [
        'Landing page',
        'Web application core features',
        'User authentication',
        'Admin dashboard',
        'API integrations',
        'Deployment support'
      ],
      timeline: '4–6 weeks',
      ctaText: 'Discuss Your Idea'
    },
    {
      title: '🧠 Custom Digital Solutions',
      price: 'Custom Pricing',
      description: 'For larger organisations and complex systems.',
      features: [
        'Custom Web apps',
        'Native Mobile apps',
        'Automation systems',
        'Business Dashboards',
        'Third-party integrations',
        'Ongoing maintenance'
      ],
      timeline: 'Varies by scope',
      ctaText: 'Request a Proposal'
    }
  ]

  const comparisonFeatures = [
    { name: 'Number of pages', starter: '3–5', growth: '6–10', mvp: '1–2 (Landing)', custom: 'Unlimited' },
    { name: 'Custom design', starter: 'Templates', growth: 'Custom UI', mvp: 'Custom UI', custom: 'Full Branding' },
    { name: 'SEO setup', starter: '✓ (Basic)', growth: '✓ (Advanced)', mvp: '✓ (Basic)', custom: '✓ (Enterprise)' },
    { name: 'CMS/blog', starter: '—', growth: '✓', mvp: '—', custom: '✓' },
    { name: 'Web application features', starter: '—', growth: '—', mvp: '✓', custom: '✓' },
    { name: 'Integrations', starter: 'WhatsApp', growth: 'Analytics + Forms', mvp: 'Full API Stack', custom: 'Enterprise Systems' },
    { name: 'Delivery timeline', starter: '2 weeks', growth: '3–4 weeks', mvp: '4–6 weeks', custom: 'Project-based' },
    { name: 'Support after launch', starter: '30 days', growth: '60 days', mvp: '90 days', custom: 'Ongoing' }
  ]

  return (
    <>
      <Helmet>
        <title>Pricing — Affordable Web & App Development in Zimbabwe | Zimnovate</title>
        <meta name="description" content="Transparent pricing for websites, apps, and digital solutions designed for Zimbabwean startups, SMEs and NGOs. Professional quality at affordable rates." />
        <link rel="canonical" href="https://zimnovate.co.zw/pricing" />
      </Helmet>

      <div className="bg-white">
        {/* Pricing Hero */}
        <PageHero
          title="Affordable Digital Solutions for African Businesses"
          subtitle="Transparent pricing for websites, apps, and branding. Strategies that work for startups, SMEs and NGOs—starting from $100."
          height="min-h-[50vh]"
        />

        {/* Hero Bottom Quote */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 -mt-10 mb-20 relative z-20">
          <div className="rounded-[32px] bg-[#0F172A] p-8 md:p-12 text-center text-white shadow-2xl">
            <p className="mx-auto max-w-3xl text-base md:text-lg text-white/90 leading-relaxed font-medium">
              We believe great technology should be accessible. Our pricing is designed to help businesses launch, grow and scale without breaking the bank.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#9cff5f] px-8 py-3 text-sm font-bold text-[#0b0b0b] hover:brightness-110 transition-all"
              >
                Start Your Project
              </Link>
              <a
                href="https://wa.me/263777530322"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-all"
              >
                Talk to Us
              </a>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 py-10 md:px-16 md:py-14 lg:px-20">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {packages.map((pkg, i) => (
              <PricingCard key={i} {...pkg} delay={i * 0.1} />
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 py-16 md:px-16 md:py-24 lg:px-20">
          <div className="text-center space-y-4 mb-14">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9cff5f]">Comparison</div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">Plan Comparison</h2>
          </div>

          <div className="overflow-x-auto rounded-[32px] border border-[var(--zim-border)] shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F9F5EF]">
                  <th className="p-6 text-sm font-bold text-[#0F172A]">Features</th>
                  <th className="p-6 text-sm font-bold text-[#0F172A]">Starter</th>
                  <th className="p-6 text-sm font-bold text-[#0F172A]">Business</th>
                  <th className="p-6 text-sm font-bold text-[#0F172A]">MVP</th>
                  <th className="p-6 text-sm font-bold text-[#0F172A]">Custom</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--zim-border)]">
                {comparisonFeatures.map((feature, i) => (
                  <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                    <td className="p-6 text-sm font-semibold text-[#0F172A]">{feature.name}</td>
                    <td className="p-6 text-sm text-[#1A1A1A]/70">{feature.starter}</td>
                    <td className="p-6 text-sm text-[#1A1A1A]/70">{feature.growth}</td>
                    <td className="p-6 text-sm text-[#1A1A1A]/70">{feature.mvp}</td>
                    <td className="p-6 text-sm text-[#1A1A1A]/70">{feature.custom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-[#F9F5EF]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 py-16 md:px-16 md:py-24 lg:px-20">
            <div className="text-center space-y-4 mb-16">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9cff5f]">Process</div>
              <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">How It Works</h2>
              <p className="text-sm text-[#1A1A1A]/70 max-w-lg mx-auto">Get your digital product off the ground with our simple, friendly 3-step process.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 relative">
              {/* Connector lines for desktop */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-[#9cff5f]/30 -z-10" />

              {[
                { step: 1, title: 'Tell us about your project', desc: 'Fill out our contact form or send us a WhatsApp message with your ideas and goals.' },
                { step: 2, title: 'Receive a proposal within 24 hours', desc: 'We\'ll review your requirements and send a clear, transparent quote and timeline.' },
                { step: 3, title: 'Launch your digital product in 2–6 weeks', desc: 'We build, you review, and then we launch! High quality, delivered on time.' }
              ].map((item, i) => (
                <div key={i} className="text-center space-y-4 bg-white p-8 rounded-[32px] shadow-sm border border-[#9cff5f]/10">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#9cff5f] text-2xl font-black text-[#0b0b0b]">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A]">{item.title}</h3>
                  <p className="text-sm text-[#1A1A1A]/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mx-auto max-w-4xl px-4 sm:px-6 md:px-12 py-16 md:px-16 md:py-24">
          <div className="text-center space-y-4 mb-14">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9cff5f]">Support</div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-2">
            {[
              { 
                q: 'How long does it take to build a website?', 
                a: 'For a Starter Website, we typically deliver within 2 weeks. Larger Business Growth sites take 3–4 weeks, and complex Startup MVPs can take 4–6 weeks depending on features.' 
              },
              { 
                q: 'Do you offer payment plans?', 
                a: 'Yes! We typically structured payments as 50% upfront to start the project and 50% upon completion/launch. For larger projects, we can discuss a 3-part Milestone-based payment plan.' 
              },
              { 
                q: 'Can you redesign my existing website?', 
                a: 'Absolutely. We specialize in taking dated or slow websites and transforming them into modern, high-converting platforms with improved UI/UX and performance.' 
              },
              { 
                q: 'Do you work with clients outside Zimbabwe?', 
                a: 'Yes, we provide digital solutions worldwide. While we are based in Harare, our team is equipped to work remotely with clients across Africa, Europe, and North America.' 
              },
              { 
                q: 'Do you provide maintenance after launch?', 
                a: 'Every package includes a post-launch support period (30–90 days). We also offer monthly maintenance subscriptions to keep your site updated, secure, and performing at its best.' 
              },
              { 
                q: 'What do you need to start a project?', 
                a: 'To get started, we need a clear brief of your goals, any branding assets (logo, colors), content (text/images) for your pages, and your domain/hosting details if you already have them. If not, we can help you set those up!' 
              }
            ].map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </section>

        {/* Final CTA Strip */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 py-20 md:px-16 lg:px-20">
          <div className="relative overflow-hidden rounded-[40px] bg-[#9cff5f] p-10 md:p-16 text-[#0b0b0b] text-center shadow-[0_28px_80px_rgba(156,255,95,0.2)]">
            <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
              <h2 className="text-3xl font-black md:text-5xl tracking-tight leading-tight">
                Ready to transform your business without breaking the bank?
              </h2>
              <p className="text-lg font-medium text-[#0b0b0b]/70">
                Join 30+ businesses growing with Zimnovate's smart digital solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Link
                  to="/contact"
                  className="rounded-full bg-[#0F172A] px-10 py-4 text-sm font-bold text-white hover:brightness-110 transition-all shadow-xl"
                >
                  Start Your Project Now
                </Link>
              </div>
            </div>
            
            {/* Decorative background elements */}
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/30 blur-3xl" />
            <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-black/5 blur-3xl" />
          </div>
        </section>
      </div>
    </>
  )
}

export default Pricing
