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
    className={`relative flex flex-col rounded-[24px] border border-white/10 p-8 transition-all duration-300 bg-[#111822] hover:border-[#9cff5f]/30 hover:shadow-2xl`}
  >
    <div className="mb-6">
      <div className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/80 mb-6 tracking-wide">
        {title}
      </div>
      <div className="mt-2 flex items-baseline gap-1">
        <span className="text-4xl font-extrabold tracking-tight text-white">{price}</span>
        {period && <span className="text-sm font-medium text-white/50">{period}</span>}
      </div>
      <p className="mt-4 text-[13px] leading-relaxed text-white/50">{description}</p>
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
      className="inline-flex w-max items-center gap-2 rounded-full bg-[#9cff5f] px-5 py-2.5 text-xs font-bold text-[#0F172A] transition-all hover:brightness-110 mt-auto"
    >
      {ctaText} 
      <div className="flex h-4 w-4 items-center justify-center rounded-full bg-white text-[#0F172A] text-xs font-black leading-none">+</div>
    </Link>
  </motion.div>
)

const TestimonialCard = ({ name, role, image, text }) => (
  <div className="flex flex-col rounded-[24px] border border-white/10 bg-[#111822] p-6 text-left">
    <div className="flex items-center gap-4 mb-4">
      <div className="h-10 w-10 overflow-hidden rounded-full bg-[#9cff5f]/20">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>
      <div>
        <h4 className="text-sm font-bold text-white">{name}</h4>
        <p className="text-xs text-white/50">{role}</p>
      </div>
    </div>
    <p className="text-[13px] leading-relaxed text-white/70 italic">"{text}"</p>
  </div>
)

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="border border-white/10 bg-[#111822] rounded-[16px] mb-3 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-5 text-left focus:outline-none"
      >
        <span className="text-[15px] font-semibold text-white">{question}</span>
        <ChevronDown 
          size={18} 
          className={`text-white/40 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-[#111822]"
          >
            <div className="px-5 pb-5 pt-0">
              <div className="h-px w-full bg-white/5 mb-4" />
              <p className="text-[14px] leading-relaxed text-white/60">{answer}</p>
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
      title: 'Basic Package',
      price: '$80',
      period: '/ Month',
      description: 'Consectetur dignissim a finibus potenti egestas odio; diam enim.',
      features: [
        'Basic SEO Optimization',
        '1-2 Social Media Platforms',
        'Monthly Analytics Reports',
        'Email Support'
      ],
      ctaText: 'Select Plan'
    },
    {
      title: 'Standard Package',
      price: '$200',
      period: '/ Month',
      description: 'Consectetur dignissim a finibus potenti egestas odio; diam enim.',
      features: [
        'Comprehensive SEO Strategy',
        '3-4 Social Media Platforms',
        '5-8 Blog Posts or Content Pieces per Month',
        'Monthly Strategy Calls and Reporting',
        'Priority Email and Phone Support'
      ],
      ctaText: 'Select Plan'
    },
    {
      title: 'Premium Package',
      price: '$400',
      period: '/ Month',
      description: 'Consectetur dignissim a finibus potenti egestas odio; diam enim.',
      features: [
        'Advanced SEO Optimization and Strategy',
        '5-6 Social Media Platforms',
        'Custom Content Strategy (10+ blog posts, videos, graphics)',
        'Customized Marketing Campaigns',
        'Dedicated Account Manager',
        'Detailed Weekly & Monthly Reporting',
        '24/7 Priority Support'
      ],
      ctaText: 'Select Plan'
    }
  ]

  const testimonials = [
    {
      name: 'Dale Mendoza',
      role: 'Marketing Manager',
      text: 'I can\'t speak highly enough of Zynex Marketing. Their strategic approach to SEO and digital marketing has been instrumental in our company\'s success...',
      image: 'https://i.pravatar.cc/150?u=1'
    },
    {
      name: 'Alice Maxwell',
      role: 'Brand Manager',
      text: 'Working with Zynex Marketing has been a revelation for our company. Their dedication to understanding our industry and target audience has led to remarkable growth...',
      image: 'https://i.pravatar.cc/150?u=2'
    },
    {
      name: 'Archer Corbyn',
      role: 'Marketing Director',
      text: 'Zynex Marketing has been a game-changer for our business. Their expertise in SEO and digital marketing has helped us attract new clients and grow our business...',
      image: 'https://i.pravatar.cc/150?u=3'
    },
    {
      name: 'Chelsea West',
      role: 'Marketing Coordinator',
      text: 'Choosing Zynex was one of the best decisions we made for our company. Their innovative approach and dedication to understanding our unique needs resulted in a tailored marketing strategy.',
      image: 'https://i.pravatar.cc/150?u=4'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Pricing — Digital Marketing Plans | Zimnovate</title>
        <meta name="description" content="Transparent pricing for digital marketing services." />
      </Helmet>

      <div className="bg-[#0b0b0b]">
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

        {/* Dark Pricing Section */}
        <section className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20">
          <div className="text-center space-y-4 mb-16 px-4">
            <div className="inline-block rounded-full border border-white/10 bg-white/5 px-6 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/80">Pricing</div>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">Profitable Pricing Plans</h2>
            <p className="text-white/50 max-w-2xl mx-auto text-sm">
              Below is an overview of our general pricing packages for our digital marketing agency. Costs vary depending on factors such as the services we offer.
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
              <div className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-[#9cff5f]">Testimonials</div>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">What Clients Say About Us</h2>
              <p className="text-white/50 text-sm">
                Read some reviews and success stories from our loyal customers who achieved their goals with our Projects and services.
              </p>
            </div>
            <Link to="/contact" className="mt-6 md:mt-0 inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-xs font-bold text-white hover:bg-white/20 transition-all">
              All Reviews <div className="flex h-4 w-4 items-center justify-center rounded-full bg-white text-[#0b0b0b] text-[10px] font-black leading-none">+</div>
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-10">
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#9cff5f] text-[#0F172A] hover:brightness-110">
              <ChevronLeft size={18} />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#9cff5f] text-[#0F172A] hover:brightness-110">
              <ChevronRight size={18} />
            </button>
          </div>
        </section>

        {/* Dark FAQ Section */}
        <section className="relative mx-auto max-w-3xl px-4 sm:px-6 py-20 mb-20">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-[#9cff5f]">FAQ</div>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Got Questions? We've Got Answers!</h2>
            <p className="text-white/50 text-sm">
              Providing important details and answers to frequently asked questions, ensuring you have all the crucial information needed to make the right decision.
            </p>
          </div>

          <div className="space-y-1">
            {[
              { 
                q: 'What Services Do You Offer?', 
                a: 'Vel metus scelerisque ullamcorper sollicitudin auctor placerat maximus nec. Curabitur ligula metus varius velit tellus vulputate enim in tempor. Praesent sollicitudin ac efficitur primis urna.' 
              },
              { q: 'How Do You Determine The Right Strategy For My Business?', a: 'Every business is unique. We conduct a thorough analysis of your market, competitors, and current digital footprint.' },
              { q: 'What Makes Your Agency Different From Others?', a: 'We focus on data-driven results and transparent reporting. Our team is dedicated to providing tailored solutions.' },
              { q: 'How Long Will It Take To See Results?', a: 'Results often vary depending on the strategy, but you can typically expect to see initial improvements within 3-6 months.' },
              { q: 'Do You Have Experience In My Industry?', a: 'We have worked across a wide range of industries including ecommerce, health, education, and professional services.' }
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
