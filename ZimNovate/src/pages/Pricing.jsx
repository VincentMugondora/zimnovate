import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Check, 
  ChevronDown, 
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import PageHero from '../components/PageHero.jsx'

const PricingCard = ({ 
  title, 
  price, 
  period,
  description, 
  features, 
  ctaText, 
  popular = false,
  delay = 0 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`relative flex flex-col rounded-[24px] border border-[var(--zim-border)] p-8 transition-all duration-300 bg-[#0F172A] hover:border-[#9cff5f]/50 hover:shadow-2xl shadow-sm`}
  >
    <div className="mb-6">
      <div className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-bold text-white mb-6 tracking-wide shadow-sm">
        {title}
      </div>
      <div className="mt-2 flex items-baseline gap-1">
        <span className="text-4xl font-extrabold tracking-tight text-white">{price}</span>
        {period && <span className="text-sm font-medium text-white/50">{period}</span>}
      </div>
      <p className="mt-4 text-[13px] leading-relaxed text-white/60">{description}</p>
    </div>

    <div className="mb-8 flex-1 space-y-4">
      <ul className="space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-[13px] text-white/80 leading-relaxed">
            <Check size={16} className="mt-0.5 shrink-0 text-[#9cff5f]" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>

    <Link
      to="/contact"
      className="inline-flex w-max items-center gap-2 rounded-full bg-[#9cff5f] px-5 py-2.5 text-xs font-bold text-[#0F172A] transition-all hover:brightness-105 mt-auto"
    >
      {ctaText} 
      <div className="flex h-4 w-4 items-center justify-center rounded-full bg-white text-[#0F172A] text-xs font-black leading-none">+</div>
    </Link>
  </motion.div>
)

const TestimonialCard = ({ name, role, image, text }) => (
  <div className="flex flex-col rounded-[24px] border border-[var(--zim-border)] bg-white p-6 text-left shadow-sm">
    <div className="flex items-center gap-4 mb-4">
      <div className="h-10 w-10 overflow-hidden rounded-full bg-[#9cff5f]/20">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>
      <div>
        <h4 className="text-sm font-bold text-[#0F172A]">{name}</h4>
        <p className="text-xs text-[#1A1A1A]/50">{role}</p>
      </div>
    </div>
    <p className="text-[13px] leading-relaxed text-[#1A1A1A]/70 italic">"{text}"</p>
  </div>
)

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="border border-[var(--zim-border)] bg-white rounded-[16px] mb-3 overflow-hidden shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-5 text-left focus:outline-none hover:bg-[#F9F5EF]/50 transition-colors"
      >
        <span className="text-[15px] font-semibold text-[#0F172A]">{question}</span>
        <ChevronDown 
          size={18} 
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
            className="overflow-hidden bg-white"
          >
            <div className="px-5 pb-5 pt-0">
              <div className="h-px w-full bg-[var(--zim-border)] mb-4" />
              <p className="text-[14px] leading-relaxed text-[#1A1A1A]/60">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const Pricing = () => {
  const packages = [
    {
      title: 'Starter Website',
      price: '$250',
      period: '– $400',
      description: 'Best for small businesses and startups launching their first website.',
      features: [
        '3–5 pages fully responsive design',
        'Basic SEO setup',
        'Contact form & WhatsApp integration',
        'Fast loading performance'
      ],
      ctaText: 'Start Project',
      popular: false
    },
    {
      title: 'Business Growth',
      price: '$500',
      period: '– $900',
      description: 'Best for SMEs that want a professional online presence with a CMS.',
      features: [
        '6–10 pages custom UI design',
        'Blog or CMS setup',
        'Advanced SEO optimization',
        'Google Analytics setup',
        'Contact forms + integrations'
      ],
      ctaText: 'Get a Quote',
      popular: true
    },
    {
      title: 'Startup MVP',
      price: '$1,200',
      period: '– $2,500',
      description: 'For startups building their first core web application or product.',
      features: [
        'Landing page & Core app features',
        'User authentication',
        'Admin dashboard',
        'API integrations',
        'Deployment support'
      ],
      ctaText: 'Discuss Idea',
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Dale Mendoza',
      role: 'Startup Founder',
      text: 'I can\'t speak highly enough of Zimnovate. Their strategic approach to our MVP build and web presence has been instrumental in our early success...',
      image: 'https://i.pravatar.cc/150?u=1'
    },
    {
      name: 'Alice Maxwell',
      role: 'Marketing Manager',
      text: 'Working with Zimnovate has been a revelation for our company. Their dedication to understanding our brand and delivering a fast website has led to remarkable growth...',
      image: 'https://i.pravatar.cc/150?u=2'
    },
    {
      name: 'Archer Corbyn',
      role: 'Director',
      text: 'Zimnovate has been a game-changer for our business. Their expertise in custom web applications has helped us automate processes and scale effectively...',
      image: 'https://i.pravatar.cc/150?u=3'
    },
    {
      name: 'Chelsea West',
      role: 'Operations Coordinator',
      text: 'Choosing Zimnovate was one of the best decisions we made. Their innovative approach and dedication to our unique needs resulted in a tailored platform that exceeded expectations.',
      image: 'https://i.pravatar.cc/150?u=4'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Pricing — Web & App Development Plans | Zimnovate</title>
        <meta name="description" content="Transparent pricing for web development, app development, and design services." />
      </Helmet>

      <div className="bg-[#fafafa]">
        {/* Preserve the Hero exactly as requested */}
        <div className="bg-white pb-10">
          <PageHero
            title="Affordable Digital Solutions for African Businesses"
            subtitle="Transparent pricing for websites, apps, and branding. Strategies that work for startups, SMEs and NGOs—starting from $100."
            height="min-h-[50vh]"
          />

          <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 -mt-10 relative z-20">
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
        </div>

        {/* Pricing Section */}
        <section className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20">
          <div className="text-center space-y-4 mb-16 px-4">
            <div className="inline-block rounded-full border border-[var(--zim-border)] bg-white px-6 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#0F172A] shadow-sm">Pricing</div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-5xl">Flexible Solutions for Every Stage</h2>
            <p className="text-[#1A1A1A]/60 max-w-2xl mx-auto text-sm">
              Whether you're just starting out or scaling up, we have a package to fit your needs. Get professional quality without the agency price tag.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {packages.map((pkg, i) => (
              <PricingCard key={i} {...pkg} delay={i * 0.1} />
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="space-y-4 max-w-lg">
              <div className="inline-block rounded-full border border-[var(--zim-border)] bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#9cff5f] shadow-sm">Testimonials</div>
              <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">What Clients Say About Us</h2>
              <p className="text-[#1A1A1A]/60 text-sm">
                Read some reviews and success stories from our loyal customers who achieved their goals with our digital solutions.
              </p>
            </div>
            <Link to="/contact" className="mt-6 md:mt-0 inline-flex items-center gap-2 rounded-full border border-[var(--zim-border)] bg-white px-6 py-3 text-xs font-bold text-[#0F172A] hover:bg-gray-50 transition-all shadow-sm">
              All Reviews <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#9cff5f] text-[#0b0b0b] text-[10px] font-black leading-none">+</div>
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-10">
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#9cff5f] text-[#0F172A] hover:brightness-105 shadow-sm">
              <ChevronLeft size={18} />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#9cff5f] text-[#0F172A] hover:brightness-105 shadow-sm">
              <ChevronRight size={18} />
            </button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative mx-auto max-w-3xl px-4 sm:px-6 py-20 mb-20">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-block rounded-full border border-[var(--zim-border)] bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#9cff5f] shadow-sm">FAQ</div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">Got Questions? We've Got Answers!</h2>
            <p className="text-[#1A1A1A]/60 text-sm">
              Providing important details and answers to frequently asked questions, ensuring you have all the crucial information needed to make the right decision.
            </p>
          </div>

          <div className="space-y-1">
            {[
              { 
                q: 'How long does it take to build a website?', 
                a: 'For a Starter Website, we typically deliver within 2 weeks. Larger Business Growth sites take 3–4 weeks, and complex Startup MVPs can take 4–6 weeks depending on features.' 
              },
              { q: 'Do you offer payment plans?', a: 'Yes! We typically structure payments as 50% upfront to start the project and 50% upon completion/launch. For larger projects, we can discuss a 3-part Milestone-based payment plan.' },
              { q: 'Can you redesign my existing website?', a: 'Absolutely. We specialize in taking dated or slow websites and transforming them into modern, high-converting platforms with improved UI/UX and performance.' },
              { q: 'Do you work with clients outside Zimbabwe?', a: 'Yes, we provide digital solutions worldwide. While we are based in Harare, our team is equipped to work remotely with clients across Africa, Europe, and North America.' },
              { q: 'Do you provide maintenance after launch?', a: 'Every package includes a post-launch support period (30–90 days). We also offer monthly maintenance subscriptions to keep your site updated, secure, and performing at its best.' }
            ].map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

export default Pricing
