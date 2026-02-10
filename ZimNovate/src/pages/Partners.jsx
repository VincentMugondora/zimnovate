import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Rocket, Shield, Palette, Handshake, Zap, Search, Code2, TrendingUp, Users, CheckCircle, Clock, ChevronDown, ArrowRight, Building2, Briefcase, Sparkles, Globe, Award } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import { submitPartnershipRequest } from '../services/database.js'

const Partners = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    partnershipType: '',
    message: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    
    try {
      const result = await submitPartnershipRequest({
        contactName: formData.name,
        companyName: formData.businessName,
        email: formData.email,
        phone: formData.phone || null,
        partnershipType: formData.partnershipType,
        projectDescription: formData.message
      })
      
      if (result.success) {
        setSubmitted(true)
        setFormData({
          name: '',
          businessName: '',
          email: '',
          phone: '',
          partnershipType: '',
          message: ''
        })
      } else {
        setError(result.error || 'Failed to submit request. Please try again.')
      }
    } catch (err) {
      setError('Something went wrong. Please try again later.')
      console.error(err)
    } finally {
      setSubmitting(false)
    }
  }

  const valueCards = [
    {
      icon: Rocket,
      title: 'Faster Delivery',
      description: 'We use modern, scalable stacks that reduce development time and eliminate technical bottlenecks.'
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Reliability',
      description: 'Your systems are secure, stable and built to handle real traffic — no shortcuts.'
    },
    {
      icon: Palette,
      title: 'Full-Stack Digital Solutions',
      description: 'From websites to mobile apps, branding, AI automations and strategy — everything under one roof.'
    },
    {
      icon: Handshake,
      title: 'A Partnership, Not a Vendor',
      description: 'We work directly with your team to support long-term growth.'
    }
  ]

  const partnershipTypes = [
    {
      icon: Sparkles,
      title: 'Startup Partnership',
      description: 'Perfect for new businesses that need fast, affordable digital presence.',
      includes: ['Branding', 'Website', 'Mobile App', 'Strategy', 'Automation']
    },
    {
      icon: Building2,
      title: 'SME & Corporate Partnership',
      description: 'Ongoing support, monthly retainers, digital transformation and scalable systems.',
      includes: ['Monthly retainers', 'Digital transformation', 'Scalable systems', 'Priority support']
    },
    {
      icon: Briefcase,
      title: 'White-Label Partnership',
      description: 'Agencies outsource dev/design to Zimnovate while maintaining their brand.',
      includes: ['White-label delivery', 'NDA protection', 'Fast turnaround', 'Quality assurance']
    },
    {
      icon: Globe,
      title: 'Tech Collaboration',
      description: 'We work with marketing firms, designers, and consulting companies to deliver technical execution.',
      includes: ['Technical execution', 'Design collaboration', 'Marketing integration', 'Joint ventures']
    }
  ]

  const processSteps = [
    {
      step: '1',
      icon: Search,
      title: 'Discovery & Alignment',
      description: 'We understand your goals, gaps and opportunities through a strategic consultation.'
    },
    {
      step: '2',
      icon: Code2,
      title: 'Build & Execute',
      description: 'We design and develop high-impact digital solutions tailored to your needs.'
    },
    {
      step: '3',
      icon: TrendingUp,
      title: 'Scale & Support',
      description: 'We provide continuous improvements and long-term support to help you grow.'
    }
  ]

  const benefits = [
    { icon: Users, text: 'Dedicated tech team' },
    { icon: Zap, text: 'Priority delivery' },
    { icon: Clock, text: 'Custom monthly support' },
    { icon: Award, text: 'Discounted rates for long-term partners' },
    { icon: Shield, text: 'Secure and optimized infrastructure' },
    { icon: TrendingUp, text: 'SEO and performance improvements' },
    { icon: CheckCircle, text: 'Transparent communication' },
    { icon: Globe, text: 'Detailed reporting & analytics' }
  ]

  const trustedLogos = [
    'Tech Zimbabwe', 'Startup Harare', 'African Digital Alliance', 'Innovate Zimbabwe'
  ]

  return (
    <>
      <Helmet>
        <title>Get Partnered – Zimnovate | Strategic Partnerships</title>
        <meta name="description" content="Partner with Zimnovate to accelerate growth through innovation. We collaborate with startups, SMEs, and corporates to build world-class digital solutions." />
        <meta name="keywords" content="zimnovate partnership, business partnership, startup partnership, tech collaboration, white-label partnership" />
        <link rel="canonical" href="https://zimnovate.co.zw/partners" />
        <meta property="og:title" content="Get Partnered – Zimnovate | Strategic Partnerships" />
        <meta property="og:description" content="Partner with Zimnovate to accelerate growth through innovation. We collaborate with startups, SMEs, and corporates to build world-class digital solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zimnovate.co.zw/partners" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Get Partnered – Zimnovate | Strategic Partnerships" />
        <meta name="twitter:description" content="Partner with Zimnovate to accelerate growth through innovation. We collaborate with startups, SMEs, and corporates to build world-class digital solutions." />
        <meta name="twitter:image" content="https://zimnovate.co.zw/logo1.png" />
      </Helmet>
    <div>
      {/* Hero Section */}
      <PageHero
        title="Partner With Zimnovate"
        subtitle="Accelerate Growth Through Innovation"
        height="min-h-[60vh]"
      />
      
      <section className="mx-auto max-w-7xl px-12 pb-8 md:px-16 md:pb-12 lg:px-20">
        <div className="text-center max-w-3xl mx-auto -mt-8">
          <p className="text-lg text-[var(--zim-fg)] mb-8">
            We collaborate with startups, SMEs, agencies and corporate teams to build world-class digital solutions that are fast, reliable and built for scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#partnership-form"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--zim-green)] px-8 py-4 text-sm font-semibold text-[var(--zim-black)] hover:brightness-110 transition-colors"
            >
              Start Partnership <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[var(--zim-black)] px-8 py-4 text-sm font-semibold text-[var(--zim-black)] hover:bg-[var(--zim-black)] hover:text-white transition-colors"
            >
              Book a Discovery Call
            </a>
          </div>
        </div>
      </section>

      {/* Why Partner With Zimnovate */}
      <section className="bg-[#F9F5EF]">
        <div className="mx-auto max-w-7xl px-12 py-16 md:px-16 md:py-20 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--zim-black)] mb-4">
              Better Technology. Faster Execution. Real Results.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {valueCards.map((card, index) => (
              <div key={index} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--zim-green)]/10">
                  <card.icon className="h-6 w-6 text-[var(--zim-green)]" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-[var(--zim-black)]">
                  {card.title}
                </h3>
                <p className="text-sm text-[var(--zim-fg)] leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Partnerships */}
      <section className="mx-auto max-w-7xl px-12 py-16 md:px-16 md:py-20 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--zim-black)] mb-4">
            Partnership Models That Fit Your Business
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {partnershipTypes.map((type, index) => (
            <div key={index} className="rounded-2xl border border-[var(--zim-border)] bg-[var(--zim-card)] p-8">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--zim-green)]/10">
                <type.icon className="h-6 w-6 text-[var(--zim-green)]" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-[var(--zim-black)]">
                {type.title}
              </h3>
              <p className="mb-4 text-[var(--zim-fg)] text-sm leading-relaxed">
                {type.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {type.includes.map((item, idx) => (
                  <span key={idx} className="inline-flex items-center rounded-full bg-[var(--zim-green)]/10 px-3 py-1 text-xs font-medium text-[var(--zim-green)]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How Our Process Works */}
      <section className="bg-[#F9F5EF]">
        <div className="mx-auto max-w-7xl px-12 py-16 md:px-16 md:py-20 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--zim-black)] mb-4">
              How Our Partnership Process Works
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="mb-6 mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-[var(--zim-green)] text-[var(--zim-black)] text-xl font-bold">
                  {step.step}
                </div>
                <div className="mb-4 mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--zim-green)]/10">
                  <step.icon className="h-6 w-6 text-[var(--zim-green)]" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-[var(--zim-black)]">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--zim-fg)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="mx-auto max-w-7xl px-12 py-16 md:px-16 md:py-20 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--zim-black)] mb-4">
            What You Get as a Zimnovate Partner
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3 rounded-xl bg-[var(--zim-card)] p-4">
              <benefit.icon className="h-5 w-5 flex-shrink-0 text-[var(--zim-green)]" />
              <span className="text-sm font-medium text-[var(--zim-black)]">
                {benefit.text}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-[#F9F5EF]">
        <div className="mx-auto max-w-7xl px-12 py-12 md:px-16 md:py-16 lg:px-20">
          <p className="text-center text-sm text-[var(--zim-fg)] mb-6">
            Trusted by growth-focused startups and businesses across Zimbabwe & Africa
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {trustedLogos.map((logo, index) => (
              <div key={index} className="text-sm font-semibold text-[var(--zim-fg)]/60">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section id="partnership-form" className="mx-auto max-w-7xl px-12 py-16 md:px-16 md:py-20 lg:px-20">
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--zim-black)] mb-4">
              Let&apos;s Partner Up
            </h2>
            <p className="text-[var(--zim-fg)]">
              Fill out the form below and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
          
          {submitted ? (
            <div className="rounded-3xl border border-green-200 bg-green-50 p-8 text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-[var(--zim-black)] mb-2">Request Submitted!</h3>
              <p className="text-[var(--zim-fg)] mb-4">Thank you for your partnership request. We'll get back to you within 24 hours.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="inline-flex items-center justify-center rounded-full bg-[var(--zim-green)] px-6 py-2 text-sm font-semibold text-[var(--zim-black)] hover:brightness-110 transition-colors"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
          <form onSubmit={handleSubmit} className="rounded-3xl border border-[var(--zim-border)] bg-[var(--zim-card)] p-8">
            {error && (
              <div className="mb-6 rounded-lg bg-red-50 border border-red-200 p-4">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-[var(--zim-black)]">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border border-[var(--zim-border)] bg-white px-4 py-3 text-sm text-[var(--zim-black)] placeholder:text-[var(--zim-fg)]/50 focus:border-[var(--zim-green)] focus:outline-none"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="businessName" className="mb-2 block text-sm font-medium text-[var(--zim-black)]">
                  Business Name *
                </label>
                <input
                  type="text"
                  id="businessName"
                  required
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full rounded-xl border border-[var(--zim-border)] bg-white px-4 py-3 text-sm text-[var(--zim-black)] placeholder:text-[var(--zim-fg)]/50 focus:border-[var(--zim-green)] focus:outline-none"
                  placeholder="Your company name"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-[var(--zim-black)]">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-[var(--zim-border)] bg-white px-4 py-3 text-sm text-[var(--zim-black)] placeholder:text-[var(--zim-fg)]/50 focus:border-[var(--zim-green)] focus:outline-none"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-[var(--zim-black)]">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-xl border border-[var(--zim-border)] bg-white px-4 py-3 text-sm text-[var(--zim-black)] placeholder:text-[var(--zim-fg)]/50 focus:border-[var(--zim-green)] focus:outline-none"
                    placeholder="+263 XXX XXX XXX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="partnershipType" className="mb-2 block text-sm font-medium text-[var(--zim-black)]">
                  What type of partnership? *
                </label>
                <div className="relative">
                  <select
                    id="partnershipType"
                    required
                    value={formData.partnershipType}
                    onChange={(e) => setFormData({ ...formData, partnershipType: e.target.value })}
                    className="w-full appearance-none rounded-xl border border-[var(--zim-border)] bg-white px-4 py-3 text-sm text-[var(--zim-black)] focus:border-[var(--zim-green)] focus:outline-none"
                  >
                    <option value="">Select partnership type</option>
                    <option value="startup">Startup Partnership</option>
                    <option value="sme">SME & Corporate Partnership</option>
                    <option value="white-label">White-Label Partnership</option>
                    <option value="tech-collab">Tech Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--zim-fg)] pointer-events-none" />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-[var(--zim-black)]">
                  What do you need help with? *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-xl border border-[var(--zim-border)] bg-white px-4 py-3 text-sm text-[var(--zim-black)] placeholder:text-[var(--zim-fg)]/50 focus:border-[var(--zim-green)] focus:outline-none resize-none"
                  placeholder="Tell us about your project, goals, and what you're looking for in a partnership..."
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[var(--zim-green)] px-8 py-4 text-sm font-semibold text-[var(--zim-black)] hover:brightness-110 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-[var(--zim-black)] border-t-transparent" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Partnership Request <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </form>
          )}
        </div>
      </section>
    </div>
    </>
  )
}

export default Partners
