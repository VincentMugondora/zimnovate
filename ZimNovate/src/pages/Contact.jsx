import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const projectTypes = [
    'Web Development',
    'Mobile Apps',
    'Branding & Design',
    'Digital Marketing',
    'AI & Automation',
    'E-Commerce Solutions'
  ]

  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title="Let's Build Something Great Together"
        subtitle="We're here to help you grow with smart, modern digital solutions. Get in touch and we'll get back to you within 24 hours."
        height="min-h-[50vh]"
      />

      {/* Intro Section */}
      <section className="mx-auto max-w-7xl px-12 py-10 md:px-16 md:py-14 lg:px-20">
        <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div className="space-y-6">
            <div className="inline-flex rounded-full bg-[#F4D47C]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#0F172A]">
              Start Your Project
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
              Ready to Transform Your Business?
            </h2>
            <p className="text-sm leading-relaxed text-[#1A1A1A]/80 md:text-base">
              Zimnovate is a full-stack digital agency in Zimbabwe offering web design, app development, branding, digital marketing, and e-commerce solutions for African businesses. Fill out the form and we'll get back to you within 24 hours.
            </p>
            <div className="space-y-2 text-sm text-[#1A1A1A]/80">
              <p><strong>Email:</strong> hello@zimnovate.com</p>
              <p><strong>Phone:</strong> +263 ___</p>
              <p><strong>Location:</strong> Harare, Zimbabwe</p>
              <p><strong>Hours:</strong> Monday–Friday, 8am–5pm</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-[#F4D47C]/20 bg-[#F9F5EF] p-1">
            <div className="relative h-80 overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?w=900&h=700&fit=crop&crop=entropy&auto=format"
                alt="Team collaboration"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-[#F9F5EF]">
        <div className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
          <div className="text-center space-y-4 mb-12">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">Contact Us</div>
            <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">Start Your Project</h3>
            <p className="text-sm text-[#1A1A1A]/70 max-w-lg mx-auto">We'll get back to you within 24 hours to discuss your digital transformation needs.</p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            {/* Form */}
            <div className="rounded-2xl border border-[#F4D47C]/20 bg-white p-6 md:p-8 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className="mb-2 block text-sm font-semibold text-[#0F172A]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-[#F4D47C]/20 bg-white px-4 py-3 text-sm text-[#0F172A] placeholder:text-[#1A1A1A]/40 focus:border-[#F4D47C] focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#0F172A]">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-[#F4D47C]/20 bg-white px-4 py-3 text-sm text-[#0F172A] placeholder:text-[#1A1A1A]/40 focus:border-[#F4D47C] focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-[#0F172A]">
                      Phone <span className="text-[#1A1A1A]/50">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-[#F4D47C]/20 bg-white px-4 py-3 text-sm text-[#0F172A] placeholder:text-[#1A1A1A]/40 focus:border-[#F4D47C] focus:outline-none transition-colors"
                      placeholder="+263 00 000 0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="mb-2 block text-sm font-semibold text-[#0F172A]">
                      Company <span className="text-[#1A1A1A]/50">(optional)</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-[#F4D47C]/20 bg-white px-4 py-3 text-sm text-[#0F172A] placeholder:text-[#1A1A1A]/40 focus:border-[#F4D47C] focus:outline-none transition-colors"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="mb-2 block text-sm font-semibold text-[#0F172A]">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-[#F4D47C]/20 bg-white px-4 py-3 text-sm text-[#0F172A] focus:border-[#F4D47C] focus:outline-none transition-colors"
                  >
                    <option value="">Select a project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-semibold text-[#0F172A]">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full rounded-lg border border-[#F4D47C]/20 bg-white px-4 py-3 text-sm text-[#0F172A] placeholder:text-[#1A1A1A]/40 focus:border-[#F4D47C] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#F4D47C] px-6 py-3 text-sm font-semibold text-[#0F172A] hover:brightness-110 transition-colors md:w-auto"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-2xl border border-[#F4D47C]/20 bg-white p-1">
                <div className="relative h-48 overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=700&h=500&fit=crop&crop=entropy&auto=format"
                    alt="Contact"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-[#F4D47C]/20 bg-white p-6 shadow-sm">
                <h4 className="text-lg font-bold text-[#0F172A] mb-4">Contact Details</h4>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F4D47C] mb-2">Phone</div>
                    <div className="space-y-1 text-sm text-[#1A1A1A]/80">
                      <p>+263 78 000 0000</p>
                      <p>+263 71 000 0000</p>
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F4D47C] mb-2">Email</div>
                    <div className="space-y-1 text-sm">
                      <a href="mailto:hello@zimnovate.com" className="block text-[#0F172A] hover:text-[#F4D47C] transition-colors">
                        hello@zimnovate.com
                      </a>
                      <a href="mailto:support@zimnovate.com" className="block text-[#0F172A] hover:text-[#F4D47C] transition-colors">
                        support@zimnovate.com
                      </a>
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F4D47C] mb-2">Location</div>
                    <p className="text-sm text-[#1A1A1A]/80">
                      Harare, Zimbabwe<br />
                      <span className="text-[#1A1A1A]/60">Available worldwide for remote work</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Socials Section */}
      <section className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Map */}
          <div className="space-y-6">
            <div className="text-center lg:text-left space-y-2">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">Find Us</div>
              <h3 className="text-2xl font-bold text-[#0F172A]">Our Location</h3>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-[#F4D47C]/20 bg-[#F9F5EF]">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1502920873989-acf4ee4b6d9e?w=800&h=500&fit=crop&crop=entropy&auto=format"
                  alt="Map location"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[#0F172A]/10" />
                <div className="absolute bottom-4 left-4 bg-white rounded-lg px-4 py-2 shadow-lg">
                  <p className="text-sm font-semibold text-[#0F172A]">Harare, Zimbabwe</p>
                </div>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="space-y-6">
            <div className="text-center lg:text-left space-y-2">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">Connect</div>
              <h3 className="text-2xl font-bold text-[#0F172A]">Follow Us</h3>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl border border-[#F4D47C]/20 bg-[#F9F5EF] p-1">
              <div className="relative h-48 overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&h=400&fit=crop&crop=entropy&auto=format"
                  alt="Social media"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent" />
              </div>
            </div>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {['Facebook', 'Instagram', 'LinkedIn', 'X (Twitter)'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="inline-flex items-center justify-center rounded-full border border-[#F4D47C]/20 bg-[#F4D47C]/5 px-4 py-2 text-sm font-semibold text-[#0F172A] hover:bg-[#F4D47C]/10 transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="bg-[#F9F5EF]">
        <div className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative overflow-hidden rounded-2xl border border-[#F4D47C]/20 bg-white p-1 lg:order-2">
              <div className="relative h-72 overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop&crop=entropy&auto=format"
                  alt="Team handshake"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/30 to-transparent" />
              </div>
            </div>

            <div className="space-y-6 lg:order-1">
              <div className="inline-flex rounded-full bg-[#F4D47C]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#0F172A]">
                Why Zimnovate
              </div>
              <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
                Why Work With Zimnovate?
              </h3>
              <div className="space-y-4">
                {[
                  { title: 'Fast Communication', description: 'We respond within 24 hours and keep you updated throughout the project.' },
                  { title: 'High-Quality Design & Development', description: 'Pixel-perfect designs and clean, maintainable code.' },
                  { title: 'Strategic, Business-Focused Approach', description: 'We align technology with your business goals for maximum ROI.' },
                  { title: 'Full Digital Solutions Under One Roof', description: 'From branding to AI, we handle everything in-house.' }
                ].map((reason) => (
                  <div key={reason.title} className="flex gap-4">
                    <div className="mt-1 h-2 w-2 rounded-full bg-[#F4D47C] flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-[#0F172A]">{reason.title}</h4>
                      <p className="text-sm text-[#1A1A1A]/70">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
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
              <div className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0F172A]/70">Ready to Start?</div>
              <h3 className="text-3xl font-bold leading-tight md:text-4xl">
                Ready to discuss your project?
              </h3>
              <p className="text-sm text-[#0F172A]/80">
                We're excited to collaborate and bring your vision to life.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="mailto:hello@zimnovate.com"
                className="inline-flex items-center justify-center rounded-full bg-[#0F172A] px-6 py-3 text-sm font-semibold text-white hover:brightness-110 transition-colors"
              >
                Start a Conversation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
