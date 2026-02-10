import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PageHero from '../components/PageHero.jsx'

const AIAutomation = () => {
  return (
    <>
      <Helmet>
        <title>AI & Automation Zimbabwe — Business Automation & AI Solutions | Zimnovate</title>
        <meta name="description" content="AI and automation solutions for Zimbabwean businesses. Chatbots, process automation, predictive analytics, and custom AI solutions to increase efficiency and reduce costs in Harare and across Zimbabwe." />
        <meta name="keywords" content="AI Zimbabwe, automation Zimbabwe, chatbot Zimbabwe, business process automation Zimbabwe, AI solutions Zimbabwe, machine learning Zimbabwe, predictive analytics Zimbabwe, AI consulting Zimbabwe, automation services Zimbabwe" />
        <link rel="canonical" href="https://zimnovate.co.zw/services/ai-automation" />
        <meta property="og:title" content="AI & Automation Zimbabwe — Business Automation & AI Solutions | Zimnovate" />
        <meta property="og:description" content="AI and automation solutions for Zimbabwean businesses. Chatbots, process automation, predictive analytics, and custom AI solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zimnovate.co.zw/services/ai-automation" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI & Automation Zimbabwe — Business Automation & AI Solutions | Zimnovate" />
        <meta name="twitter:description" content="AI and automation solutions for Zimbabwean businesses. Chatbots, process automation, predictive analytics, and custom AI solutions." />
        <meta name="twitter:image" content="https://zimnovate.co.zw/logo1.png" />
      </Helmet>
    <div>
      {/* Hero Section */}
      <PageHero
        title="Transform Your Business With AI-Powered Automation"
        subtitle="We build intelligent systems that save time, reduce costs, and scale your business effortlessly."
        height="min-h-[50vh]"
      />

      {/* Intro CTA */}
      <section className="mx-auto max-w-7xl px-12 py-10 md:px-16 md:py-14 lg:px-20">
        <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div className="space-y-6">
            <div className="inline-flex rounded-full bg-[#F4D47C]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#0F172A]">
              AI & Automation
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
              Smart systems. Real results.
            </h2>
            <p className="text-sm leading-relaxed text-[#1A1A1A]/80 md:text-base">
              From AI chatbots to predictive analytics, we deliver automation solutions that transform how you operate, compete, and grow.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#F4D47C] px-6 py-3 text-sm font-semibold text-[#0F172A] hover:brightness-110 transition-colors"
              >
                Automate My Business
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-[#F4D47C]/20 bg-[#F4D47C]/5 px-6 py-3 text-sm font-semibold text-[#0F172A] hover:bg-[#F4D47C]/10 transition-colors"
              >
                Book a Free AI Consultation
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-[#F4D47C]/20 bg-[#F9F5EF] p-1">
            <div className="relative h-80 overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&h=700&fit=crop&crop=entropy&auto=format"
                alt="AI neural network visualization"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-[#F9F5EF]">
        <div className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
          <div className="text-center space-y-4 mb-12">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">Services</div>
            <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">What We Offer</h3>
            <p className="text-sm leading-relaxed text-[#1A1A1A]/80 md:text-base max-w-2xl mx-auto">
              AI-powered solutions that automate, optimize, and transform your business operations.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'AI Chatbots & Virtual Assistants',
                description: 'Automate customer support, bookings, and sales with smart AI agents that work 24/7.',
                image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=700&h=500&fit=crop&crop=entropy&auto=format&fm=webp',
                width: 700,
                height: 500,
              },
              {
                title: 'Business Process Automation',
                description: 'Streamline repetitive tasks and optimize operations with intelligent workflows.',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=500&fit=crop&crop=entropy&auto=format&fm=webp',
                width: 700,
                height: 500,
              },
              {
                title: 'Predictive Analytics & Insights',
                description: 'Leverage AI to forecast trends, predict outcomes, and make data-driven decisions.',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=500&fit=crop&crop=entropy&auto=format&fm=webp',
                width: 700,
                height: 500,
              },
              {
                title: 'Computer Vision Solutions',
                description: 'AI-powered visual recognition for security, retail, quality control, and manufacturing.',
                image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=700&h=500&fit=crop&crop=entropy&auto=format&fm=webp',
                width: 700,
                height: 500,
              },
              {
                title: 'Document & Data Automation',
                description: 'Automatically extract, organize, and process data from documents using OCR and NLP.',
                image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&h=500&fit=crop&crop=entropy&auto=format&fm=webp',
                width: 700,
                height: 500,
              },
              {
                title: 'AI Consulting & Custom Solutions',
                description: 'We design AI strategies tailored to your business goals and industry requirements.',
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&h=500&fit=crop&crop=entropy&auto=format&fm=webp',
                width: 700,
                height: 500,
              },
            ].map((service) => (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-2xl border border-[#F4D47C]/20 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    width={service.width}
                    height={service.height}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-[#0F172A]/20 to-transparent" />
                </div>
                <div className="relative p-6">
                  <h4 className="text-lg font-bold text-[#0F172A] mb-2">{service.title}</h4>
                  <p className="text-sm text-[#1A1A1A]/70">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="text-center space-y-4 mb-12">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">Process</div>
          <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">Our AI Development Process</h3>
          <p className="text-sm leading-relaxed text-[#1A1A1A]/80 md:text-base max-w-2xl mx-auto">
            A systematic approach to building AI solutions that deliver measurable impact.
          </p>
        </div>

        <div className="space-y-12">
          {[
            {
              step: '01',
              title: 'Discovery & Analysis',
              description: 'We identify automation opportunities, analyze your data, and define AI use cases for maximum ROI.',
              image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=600&fit=crop&crop=entropy&auto=format&fm=webp',
              width: 900,
              height: 600,
              position: 'left'
            },
            {
              step: '02',
              title: 'Data Collection & Training',
              description: 'We gather, clean, and prepare high-quality datasets to train accurate AI models.',
              image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=600&fit=crop&crop=entropy&auto=format&fm=webp',
              width: 900,
              height: 600,
              position: 'right'
            },
            {
              step: '03',
              title: 'AI Development',
              description: 'We build and train intelligent models using cutting-edge machine learning techniques.',
              image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=900&h=600&fit=crop&crop=entropy&auto=format&fm=webp',
              width: 900,
              height: 600,
              position: 'left'
            },
            {
              step: '04',
              title: 'Integration & Automation',
              description: 'Seamless integration with your existing software, tools, and workflows.',
              image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&h=600&fit=crop&crop=entropy&auto=format&fm=webp',
              width: 900,
              height: 600,
              position: 'right'
            },
            {
              step: '05',
              title: 'Monitoring & Improvement',
              description: 'Continuous monitoring, retraining, and optimization to improve accuracy and performance.',
              image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=600&fit=crop&crop=entropy&auto=format&fm=webp',
              width: 900,
              height: 600,
              position: 'left'
            }
          ].map((phase) => (
            <div
              key={phase.step}
              className={`grid gap-8 md:grid-cols-2 md:items-center ${phase.position === 'right' ? 'md:grid-cols-[1.1fr_0.9fr]' : 'md:grid-cols-[0.9fr_1.1fr]'}`}
            >
              <div className={`space-y-4 ${phase.position === 'right' ? 'md:order-1' : ''}`}>
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-[#F4D47C]">{phase.step}</span>
                  <div className="h-px flex-1 bg-[#F4D47C]/20" />
                </div>
                <h4 className="text-2xl font-bold text-[#0F172A]">{phase.title}</h4>
                <p className="text-sm leading-relaxed text-[#1A1A1A]/80">{phase.description}</p>
              </div>
              <div className={`relative overflow-hidden rounded-2xl border border-[#F4D47C]/20 ${phase.position === 'right' ? 'md:order-0' : ''}`}>
                <div className="relative h-64 overflow-hidden rounded-2xl">
                  <img
                    src={phase.image}
                    alt={phase.title}
                    width={phase.width}
                    height={phase.height}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/30 to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#F9F5EF]">
        <div className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
          <div className="text-center space-y-4 mb-12">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">Why Choose Us</div>
            <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">Why Zimnovate for AI</h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Modern AI Solutions',
                description: 'We use the latest AI/ML frameworks and technologies for cutting-edge results.',
                image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=350&fit=crop&crop=entropy&auto=format&fm=webp',
                width: 500,
                height: 350
              },
              {
                title: 'Fast & Scalable Automation',
                description: 'Solutions that grow with your business and handle increasing workloads.',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=350&fit=crop&crop=entropy&auto=format&fm=webp',
                width: 500,
                height: 350
              },
              {
                title: 'Secure Architecture',
                description: 'Enterprise-grade security and compliance built into every AI solution.',
                image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&h=350&fit=crop&crop=entropy&auto=format&fm=webp',
                width: 500,
                height: 350
              },
              {
                title: 'Collaborative & Transparent',
                description: 'We work closely with your team and provide clear documentation and support.',
                image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&h=350&fit=crop&crop=entropy&auto=format&fm=webp',
                width: 500,
                height: 350
              }
            ].map((reason) => (
              <div
                key={reason.title}
                className="group relative overflow-hidden rounded-2xl border border-[#F4D47C]/20 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={reason.image}
                    alt={reason.title}
                    width={reason.width}
                    height={reason.height}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 to-transparent" />
                </div>
                <div className="relative p-4">
                  <h4 className="text-lg font-bold text-[#0F172A] mb-2">{reason.title}</h4>
                  <p className="text-sm text-[#1A1A1A]/70">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="text-center space-y-4 mb-12">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">Case Studies</div>
          <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">AI Projects & Results</h3>
          <p className="text-sm leading-relaxed text-[#1A1A1A]/80 md:text-base max-w-2xl mx-auto">
            Real AI implementations that delivered measurable business impact.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Customer Support AI Chatbot',
              description: 'Automated 70% of customer inquiries, saving 40 hours/week of support time.',
              image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=700&h=500&fit=crop&crop=entropy&auto=format&fm=webp',
              width: 700,
              height: 500,
              tags: ['NLP', 'Chatbot', 'Support']
            },
            {
              title: 'Document Processing Automation',
              description: 'OCR and NLP solution that reduced document processing time by 85%.',
              image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&h=500&fit=crop&crop=entropy&auto=format&fm=webp',
              width: 700,
              height: 500,
              tags: ['OCR', 'NLP', 'Automation']
            },
            {
              title: 'Sales Forecasting System',
              description: 'Predictive analytics that improved forecast accuracy by 45%.',
              image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=500&fit=crop&crop=entropy&auto=format&fm=webp',
              width: 700,
              height: 500,
              tags: ['ML', 'Analytics', 'Sales']
            }
          ].map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-[#F4D47C]/20 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  width={project.width}
                  height={project.height}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/20 to-transparent" />
              </div>
              <div className="relative p-6">
                <h4 className="text-lg font-bold text-[#0F172A] mb-2">{project.title}</h4>
                <p className="text-sm text-[#1A1A1A]/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="inline-flex rounded-full bg-[#F4D47C]/10 px-2 py-1 text-xs font-semibold text-[#0F172A]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center rounded-full border border-[#F4D47C]/20 bg-[#F4D47C]/5 px-6 py-3 text-sm font-semibold text-[#0F172A] hover:bg-[#F4D47C]/10 transition-colors"
          >
            View More Projects
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#F9F5EF]">
        <div className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
          <div className="text-center space-y-4 mb-12">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">Testimonials</div>
            <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">What Clients Say</h3>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'David Chen',
                role: 'Operations Manager, Logistics Co.',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format',
                testimonial: 'Zimnovate automated 60% of our repetitive tasks — allowing us to focus on growth. Incredible AI team!'
              },
              {
                name: 'Sarah Kim',
                role: 'CTO, FinTech Startup',
                image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face&auto=format',
                testimonial: 'Their AI chatbot reduced our support tickets by 70% while improving customer satisfaction scores.'
              },
              {
                name: 'Michael Torres',
                role: 'Director, Healthcare Group',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&auto=format',
                testimonial: 'The document automation solution saved us thousands of hours. ROI was visible within the first month.'
              }
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="relative overflow-hidden rounded-2xl border border-[#F4D47C]/20 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-[#0F172A]">{testimonial.name}</h4>
                    <p className="text-sm text-[#1A1A1A]/60">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#F4D47C]">⭐</span>
                  ))}
                </div>
                <p className="text-sm text-[#1A1A1A]/80 italic">"{testimonial.testimonial}"</p>
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

          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0F172A]/70">Ready to Transform</div>
                <h3 className="text-3xl font-bold leading-tight md:text-4xl">
                  Ready to Transform Your Business With AI?
                </h3>
                <p className="text-sm text-[#0F172A]/80">
                  Let's build automation that works for you 24/7.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#0F172A] px-6 py-3 text-sm font-semibold text-white hover:brightness-110 transition-colors"
                >
                  Start Your AI Project
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=entropy&auto=format&fm=webp"
                alt="AI future interface"
                width={800}
                height={600}
                loading="lazy"
                className="h-64 w-full object-cover lg:h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F4D47C]/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default AIAutomation
