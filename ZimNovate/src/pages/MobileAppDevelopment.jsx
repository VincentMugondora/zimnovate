import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PageHero from '../components/PageHero.jsx'

const MobileAppDevelopment = () => {
  return (
    <>
      <Helmet>
        <title>Mobile App Development Zimbabwe — iOS & Android App Services | Zimnovate</title>
        <meta name="description" content="Expert mobile app development services in Zimbabwe. Custom iOS and Android app development for businesses in Harare and across Zimbabwe. Build your mobile app today." />
        <meta name="keywords" content="mobile app development Zimbabwe, iOS app development Zimbabwe, Android app development Zimbabwe, app developer Harare, mobile app developer Zimbabwe, custom app development Zimbabwe, app design Zimbabwe" />
        <link rel="canonical" href="https://zimnovate.co.zw/services/mobile-app-development" />
        <meta property="og:title" content="Mobile App Development Zimbabwe — iOS & Android App Services | Zimnovate" />
        <meta property="og:description" content="Expert mobile app development services in Zimbabwe. Custom iOS and Android app development for businesses in Harare and across Zimbabwe." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zimnovate.co.zw/services/mobile-app-development" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mobile App Development Zimbabwe — iOS & Android App Services | Zimnovate" />
        <meta name="twitter:description" content="Expert mobile app development services in Zimbabwe. Custom iOS and Android app development for businesses." />
        <meta name="twitter:image" content="https://zimnovate.co.zw/logo1.png" />
      </Helmet>
    <div>
      {/* Hero Section */}
      <PageHero 
        title="We Craft Mobile Apps That Users Love"
        subtitle="Fast, intuitive, and beautifully designed apps for iOS & Android that deliver exceptional user experiences."
        height="min-h-[50vh]"
      />

      {/* Hero CTA */}
      <section className="mx-auto max-w-7xl px-12 py-8 md:px-16 md:py-12 lg:px-20">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-6">
            <div className="inline-flex rounded-full bg-[#F4D47C]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#0F172A]">
              Mobile App Experts
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
              Your Vision, Our Mobile Expertise
            </h2>
            <p className="text-sm leading-relaxed text-[#1A1A1A]/80 md:text-base">
              From concept to deployment, we create mobile applications that not only look stunning but also perform flawlessly across all devices and platforms.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#F4D47C] px-6 py-3 text-sm font-semibold text-[#0F172A] hover:brightness-110 transition-colors"
              >
                Start Your App Project
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-[#F4D47C]/20 bg-[#F4D47C]/5 px-6 py-3 text-sm font-semibold text-[#0F172A] hover:bg-[#F4D47C]/10 transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-[#F4D47C]/20 bg-[#F9F5EF] p-1">
            <div className="relative h-80 overflow-hidden rounded-3xl">
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&crop=entropy&auto=format" 
                alt="Mobile app development"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="bg-[#F9F5EF]">
        <div className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
          <div className="text-center space-y-4 mb-12">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">Services</div>
            <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
              What We Build
            </h3>
            <p className="text-sm leading-relaxed text-[#1A1A1A]/80 md:text-base max-w-2xl mx-auto">
              Comprehensive mobile app solutions tailored to your unique business needs
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Native App Development',
                description: 'High-performance apps built with Swift for iOS and Kotlin for Android, delivering the best user experience.',
                image: 'https://images.unsplash.com/photo-1512941937667-106a3100badb?w=600&h=400&fit=crop&crop=entropy&auto=format&fm=webp',
                width: 600,
                height: 400,
                features: ['iOS Development', 'Android Development', 'Native Performance', 'Platform Integration']
              },
              {
                title: 'Cross-Platform Apps',
                description: 'One codebase, both platforms. Cost-effective solutions using React Native and Flutter.',
                image: 'https://images.unsplash.com/photo-1559028006-44a35f2a8d03?w=600&h=400&fit=crop&crop=entropy&auto=format&fm=webp',
                width: 600,
                height: 400,
                features: ['React Native', 'Flutter', 'Code Reusability', 'Faster Development']
              },
              {
                title: 'UI/UX App Design',
                description: 'Beautiful, user-centered interfaces that delight users and drive engagement.',
                image: 'https://images.unsplash.com/photo-1559028006-44a35f2a8d03?w=600&h=400&fit=crop&crop=entropy&auto=format&fm=webp',
                width: 600,
                height: 400,
                features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
              },
              {
                title: 'Backend & API Development',
                description: 'Secure, scalable infrastructure that powers your mobile applications.',
                image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&crop=entropy&auto=format&fm=webp',
                width: 600,
                height: 400,
                features: ['REST APIs', 'GraphQL', 'Cloud Integration', 'Database Design']
              },
              {
                title: 'App Maintenance & Updates',
                description: 'Keep your app fast, secure, and up-to-date with our comprehensive maintenance plans.',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=entropy&auto=format&fm=webp',
                width: 600,
                height: 400,
                features: ['Bug Fixes', 'Performance Updates', 'Security Patches', 'Feature Enhancements']
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

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="relative overflow-hidden rounded-3xl border border-[#F4D47C]/20 bg-[#F4D47C] p-10 text-[#0F172A] shadow-[0_28px_80px_rgba(0,0,0,0.15)]">
          <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-white/10 blur-3xl" />
          
          <div className="text-center space-y-6">
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0F172A]/70">Ready to Build</div>
              <h3 className="text-3xl font-bold leading-tight md:text-4xl">
                Let's Build Your App Today
              </h3>
              <p className="text-sm text-[#0F172A]/80">
                Transform your idea into a successful mobile application with our expert team.
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
    </>
  )
}

export default MobileAppDevelopment
