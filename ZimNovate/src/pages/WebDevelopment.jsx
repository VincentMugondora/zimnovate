import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PageHero from '../components/PageHero.jsx'

const WebDevelopment = () => {
  return (
    <>
      <Helmet>
        <title>Web Development Zimbabwe — Professional Website Design Services | Zimnovate</title>
        <meta name="description" content="Professional web development services in Zimbabwe. Custom website design, e-commerce solutions, and responsive web applications for businesses in Harare and across Zimbabwe." />
        <meta name="keywords" content="web development Zimbabwe, website design Harare, custom website development, e-commerce website Zimbabwe, affordable website design Zimbabwe, responsive web design, web development services Zimbabwe, website developer Harare" />
        <link rel="canonical" href="https://zimnovate.co.zw/services/web-development" />
        <meta property="og:title" content="Web Development Zimbabwe — Professional Website Design Services | Zimnovate" />
        <meta property="og:description" content="Professional web development services in Zimbabwe. Custom website design, e-commerce solutions, and responsive web applications for businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zimnovate.co.zw/services/web-development" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web Development Zimbabwe — Professional Website Design Services | Zimnovate" />
        <meta name="twitter:description" content="Professional web development services in Zimbabwe. Custom website design and e-commerce solutions." />
        <meta name="twitter:image" content="https://zimnovate.co.zw/logo1.png" />
      </Helmet>
    <div>
      {/* Hero Section */}
      <PageHero 
        title="Building Powerful, Responsive Websites That Drive Growth"
        subtitle="At Zimnovate, we create websites that are fast, functional, and designed to impress. From sleek corporate sites to complex web applications, we bring your vision to life."
        height="min-h-[50vh]"
      />

      {/* Hero CTA */}
      <section className="mx-auto max-w-7xl px-12 py-8 md:px-16 md:py-12 lg:px-20">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-6">
            <div className="inline-flex rounded-full bg-[#F4D47C]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#0F172A]">
              Web Development Experts
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
              Your Digital Presence, Perfected
            </h2>
            <p className="text-sm leading-relaxed text-[#1A1A1A]/80 md:text-base">
              We combine cutting-edge technology with stunning design to create websites that not only look amazing but also deliver measurable results for your business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#F4D47C] px-6 py-3 text-sm font-semibold text-[#0F172A] hover:brightness-110 transition-colors"
            >
              Get Your Website Today
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-[#F4D47C]/20 bg-[#F9F5EF] p-1">
            <div className="relative h-80 overflow-hidden rounded-3xl">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop&crop=entropy&auto=format" 
                alt="Web development workspace"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Web Development Services */}
      <section className="bg-[#F9F5EF]">
        <div className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
          <div className="text-center space-y-4 mb-12">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">Services</div>
            <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
              Our Web Development Services
            </h3>
            <p className="text-sm leading-relaxed text-[#1A1A1A]/80 md:text-base max-w-2xl mx-auto">
              Comprehensive web solutions tailored to your unique business needs
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Custom Websites',
                description: 'Tailored websites that reflect your brand and engage your audience with unique design and functionality.',
                image: 'https://images.unsplash.com/photo-1559028006-44a35f2a8d03?w=600&h=400&fit=crop&crop=entropy&auto=format&fm=webp',
                width: 600,
                height: 400,
                features: ['Responsive Design', 'Brand Integration', 'User Experience', 'Performance Optimization']
              },
              {
                title: 'E-Commerce Development',
                description: 'Online stores that convert visitors into customers with seamless shopping experiences.',
                image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=entropy&auto=format&fm=webp',
                width: 600,
                height: 400,
                features: ['Shopping Cart', 'Payment Integration', 'Inventory Management', 'Analytics']
              },
              {
                title: 'Web Applications',
                description: 'Scalable, interactive applications that solve complex business problems and streamline operations.',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=entropy&auto=format&fm=webp',
                width: 600,
                height: 400,
                features: ['Custom Functionality', 'Database Integration', 'API Development', 'Cloud Hosting']
              },
              {
                title: 'CMS Solutions',
                description: 'Easy-to-manage websites using WordPress, Strapi, and other content management systems.',
                image: 'https://images.unsplash.com/photo-1542435503-956c469947f6?w=600&h=400&fit=crop&crop=entropy&auto=format&fm=webp',
                width: 600,
                height: 400,
                features: ['Content Management', 'User Roles', 'Media Library', 'SEO Tools']
              },
              {
                title: 'Website Maintenance & Support',
                description: 'Keep your website secure, updated, and performing at its best with our maintenance plans.',
                image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&crop=entropy&auto=format&fm=webp',
                width: 600,
                height: 400,
                features: ['Security Updates', 'Performance Monitoring', 'Backup Services', 'Technical Support']
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
                    width={service.width}
                    height={service.height}
                    loading="lazy"
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

      {/* Our Process */}
      <section className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="text-center space-y-4 mb-12">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">Process</div>
          <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
            How We Work
          </h3>
          <p className="text-sm leading-relaxed text-[#1A1A1A]/80 md:text-base max-w-2xl mx-auto">
            Our proven process ensures your project is delivered on time and exceeds expectations
          </p>
        </div>

        <div className="space-y-12">
          {[
            {
              step: '01',
              title: 'Discovery & Strategy',
              description: 'We dive deep to understand your business goals, target audience, and technical requirements through collaborative workshops and research.',
              image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=entropy&auto=format&fm=webp',
              width: 600,
              height: 400,
              position: 'left'
            },
            {
              step: '02',
              title: 'Design & Prototyping',
              description: 'Our designers create wireframes and high-fidelity mockups that bring your vision to life before a single line of code is written.',
              image: 'https://images.unsplash.com/photo-1559028006-44a35f2a8d03?w=600&h=400&fit=crop&crop=entropy&auto=format&fm=webp',
              width: 600,
              height: 400,
              position: 'right'
            },
            {
              step: '03',
              title: 'Development & Testing',
              description: 'We build fast, responsive websites using modern frameworks and conduct rigorous testing to ensure flawless performance.',
              image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&crop=entropy&auto=format&fm=webp',
              width: 600,
              height: 400,
              position: 'left'
            },
            {
              step: '04',
              title: 'Launch & Support',
              description: 'We deploy your website with precision and provide ongoing support to ensure continued success and growth.',
              image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=entropy&auto=format&fm=webp',
              width: 600,
              height: 400,
              position: 'right'
            }
          ].map((phase) => (
            <div key={phase.step} className={`grid gap-8 md:grid-cols-2 md:items-center ${phase.position === 'right' ? 'md:grid-cols-[1.1fr_0.9fr]' : 'md:grid-cols-[0.9fr_1.1fr]'}`}>
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

      {/* Why Choose Zimnovate */}
      <section className="bg-[#F9F5EF]">
        <div className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
          <div className="text-center space-y-4 mb-12">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">Why Choose Us</div>
            <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
              Why Choose Zimnovate for Web Development
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Custom Solutions',
                description: 'We tailor every website to your specific needs and business goals.',
                image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=entropy&auto=format&fm=webp',
                width: 400,
                height: 300
              },
              {
                title: 'Responsive & Modern',
                description: 'Works beautifully on any device with cutting-edge design and technology.',
                image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop&crop=entropy&auto=format&fm=webp',
                width: 400,
                height: 300
              },
              {
                title: 'SEO-Friendly',
                description: 'Optimized for search engines and built to rank higher in results.',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=entropy&auto=format&fm=webp',
                width: 400,
                height: 300
              },
              {
                title: 'Ongoing Support',
                description: 'We\'re with you even after launch with maintenance and updates.',
                image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop&crop=entropy&auto=format&fm=webp',
                width: 400,
                height: 300
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

      {/* Portfolio */}
      <section className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="text-center space-y-4 mb-12">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">Portfolio</div>
          <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
            Recent Web Projects
          </h3>
          <p className="text-sm leading-relaxed text-[#1A1A1A]/80 md:text-base max-w-2xl mx-auto">
            Explore our latest web development projects and see how we've helped businesses transform their online presence
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'E-Commerce Platform',
              description: 'Modern online store with advanced filtering and seamless checkout experience.',
              image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=entropy&auto=format&fm=webp',
              width: 600,
              height: 400,
              tags: ['E-Commerce', 'React', 'Node.js']
            },
            {
              title: 'Corporate Website',
              description: 'Professional corporate site with content management and blog functionality.',
              image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&crop=entropy&auto=format&fm=webp',
              width: 600,
              height: 400,
              tags: ['Corporate', 'WordPress', 'SEO']
            },
            {
              title: 'SaaS Dashboard',
              description: 'Interactive dashboard with real-time analytics and user management.',
              image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=entropy&auto=format&fm=webp',
              width: 600,
              height: 400,
              tags: ['SaaS', 'Dashboard', 'Analytics']
            },
            {
              title: 'Restaurant Website',
              description: 'Elegant restaurant site with online reservations and menu management.',
              image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop&crop=entropy&auto=format&fm=webp',
              width: 600,
              height: 400,
              tags: ['Hospitality', 'Booking', 'CMS']
            },
            {
              title: 'Educational Platform',
              description: 'Learning management system with video streaming and progress tracking.',
              image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&crop=entropy&auto=format&fm=webp',
              width: 600,
              height: 400,
              tags: ['Education', 'LMS', 'Video']
            },
            {
              title: 'Real Estate Portal',
              description: 'Property listing platform with advanced search and virtual tours.',
              image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&crop=entropy&auto=format&fm=webp',
              width: 600,
              height: 400,
              tags: ['Real Estate', 'Search', 'Maps']
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

      {/* Final CTA */}
      <section className="bg-[#F9F5EF]">
        <div className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
          <div className="relative overflow-hidden rounded-3xl border border-[#F4D47C]/20 bg-[#F4D47C] p-10 text-[#0F172A] shadow-[0_28px_80px_rgba(0,0,0,0.15)]">
            <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-white/20 blur-3xl" />
            <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-white/10 blur-3xl" />
            
            <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0F172A]/70">Ready to Launch</div>
                  <h3 className="text-3xl font-bold leading-tight md:text-4xl">
                    Ready to launch your website?
                  </h3>
                  <p className="text-sm text-[#0F172A]/80">
                    Let's build something amazing together. Schedule a consultation to discuss your project.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-[#0F172A] px-6 py-3 text-sm font-semibold text-white hover:brightness-110 transition-colors"
                  >
                    Schedule a Consultation
                  </Link>
                </div>
              </div>
              
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&crop=entropy&auto=format&fm=webp" 
                  alt="Website development team"
                  width={600}
                  height={400}
                  loading="lazy"
                  className="h-64 w-full object-cover lg:h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#F4D47C]/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default WebDevelopment
