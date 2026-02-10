import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Building2, ShoppingCart, Stethoscope, GraduationCap, Landmark, Truck } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'

const UseCases = () => {
  const useCases = [
    {
      icon: Building2,
      title: 'Startups & SMEs',
      description: 'Launch your business with professional websites, mobile apps, and branding that make you stand out in the competitive African market.',
      features: ['MVPs & Prototypes', 'Brand Identity', 'Digital Marketing', 'E-commerce Solutions']
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce & Retail',
      description: 'Build powerful online stores integrated with local payment gateways like Ecocash, PayNow, and international options.',
      features: ['Online Store Development', 'Payment Integration', 'Inventory Management', 'Customer Analytics']
    },
    {
      icon: Stethoscope,
      title: 'Healthcare & Wellness',
      description: 'Digital solutions for clinics, hospitals, and wellness brands including appointment systems and patient portals.',
      features: ['Booking Systems', 'Patient Portals', 'Telemedicine', 'Health Apps']
    },
    {
      icon: GraduationCap,
      title: 'Education & E-Learning',
      description: 'Learning management systems, educational apps, and digital platforms for schools, universities, and training centers.',
      features: ['LMS Development', 'E-Learning Apps', 'Student Portals', 'Online Assessment']
    },
    {
      icon: Landmark,
      title: 'Finance & Fintech',
      description: 'Secure web and mobile applications for banking, insurance, and financial services with compliance standards.',
      features: ['Fintech Apps', 'Payment Solutions', 'Security Compliance', 'Data Analytics']
    },
    {
      icon: Truck,
      title: 'Logistics & Transport',
      description: 'Fleet management systems, delivery tracking apps, and supply chain solutions for transportation businesses.',
      features: ['Fleet Management', 'Delivery Tracking', 'Route Optimization', 'Supply Chain Apps']
    }
  ]

  return (
    <>
      <Helmet>
        <title>Business Use Cases – Zimnovate Digital Solutions</title>
        <meta name="description" content="See how Zimnovate helps businesses across industries with custom web development, apps, and digital solutions tailored for African markets." />
        <meta name="keywords" content="business use cases, digital solutions zimbabwe, industry solutions, web development use cases" />
        <link rel="canonical" href="https://zimnovate.co.zw/use-cases" />
        <meta property="og:title" content="Business Use Cases – Zimnovate Digital Solutions" />
        <meta property="og:description" content="See how Zimnovate helps businesses across industries with custom digital solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zimnovate.co.zw/use-cases" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Business Use Cases – Zimnovate Digital Solutions" />
        <meta name="twitter:description" content="See how Zimnovate helps businesses across industries with custom digital solutions." />
        <meta name="twitter:image" content="https://zimnovate.co.zw/logo1.png" />
      </Helmet>
    <div>
      <PageHero
        title="Digital Solutions for Every Industry"
        subtitle="Discover how we help businesses across sectors transform their operations with modern technology."
        height="min-h-[45vh]"
      />

      <section className="mx-auto max-w-7xl px-12 py-16 md:px-16 md:py-20 lg:px-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <div key={index} className="rounded-2xl border border-[var(--zim-border)] bg-[var(--zim-card)] p-8">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--zim-green)]/10">
                <useCase.icon className="h-6 w-6 text-[var(--zim-green)]" />
              </div>
              <h2 className="mb-4 text-xl font-bold text-[var(--zim-black)]">
                {useCase.title}
              </h2>
              <p className="mb-6 text-[var(--zim-fg)] text-sm leading-relaxed">
                {useCase.description}
              </p>
              <ul className="space-y-2">
                {useCase.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-[var(--zim-fg)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--zim-green)]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="mb-4 text-2xl font-bold text-[var(--zim-black)]">
            Have a unique project?
          </h2>
          <p className="mb-6 text-[var(--zim-fg)] max-w-2xl mx-auto">
            We tailor our solutions to meet your specific business needs. Let us discuss how we can help you achieve your goals.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[var(--zim-green)] px-8 py-3 text-sm font-semibold text-[var(--zim-black)] hover:brightness-110 transition-colors"
          >
            Discuss Your Project
          </a>
        </div>
      </section>
    </div>
    </>
  )
}

export default UseCases
