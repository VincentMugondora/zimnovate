import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Handshake, Globe, Building2, GraduationCap, Sparkles, ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'

const Partners = () => {
  const partnershipTypes = [
    {
      icon: Building2,
      title: 'Corporate Partners',
      description: 'Strategic partnerships with established companies looking to enhance their digital presence or offer technology solutions to their clients.',
      benefits: ['White-label solutions', 'Revenue sharing', 'Co-marketing opportunities', 'Technical support']
    },
    {
      icon: GraduationCap,
      title: 'Educational Institutions',
      description: 'Collaborate with universities, colleges, and training centers to provide practical tech education and internship programs.',
      benefits: ['Curriculum development', 'Student internships', 'Guest lectures', 'Research collaboration']
    },
    {
      icon: Globe,
      title: 'Technology Partners',
      description: 'Partner with technology providers, hosting companies, and software vendors to deliver comprehensive solutions.',
      benefits: ['API integrations', 'Joint product development', 'Technical training', 'Certification programs']
    },
    {
      icon: Sparkles,
      title: 'Startup Ecosystem',
      description: 'Support early-stage startups with development resources, mentorship, and technology partnerships.',
      benefits: ['MVP development', 'Technical mentorship', 'Investor connections', 'Startup discounts']
    }
  ]

  const currentPartners = [
    { name: 'Tech Zimbabwe', category: 'Community Partner' },
    { name: 'Startup Harare', category: 'Ecosystem Partner' },
    { name: 'African Digital Alliance', category: 'Network Partner' },
    { name: 'Innovate Zimbabwe', category: 'Incubator Partner' }
  ]

  return (
    <>
      <Helmet>
        <title>Partners – Zimnovate | Strategic Partnerships</title>
        <meta name="description" content="Partner with Zimnovate for digital solutions, technology collaboration, and business growth opportunities across Africa." />
        <meta name="keywords" content="zimnovate partners, technology partnership, business collaboration, digital partnership" />
        <link rel="canonical" href="https://zimnovate.com/partners" />
        <meta property="og:title" content="Partners – Zimnovate | Strategic Partnerships" />
        <meta property="og:description" content="Partner with Zimnovate for digital solutions, technology collaboration, and business growth opportunities." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zimnovate.com/partners" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Partners – Zimnovate | Strategic Partnerships" />
        <meta name="twitter:description" content="Partner with Zimnovate for digital solutions, technology collaboration, and business growth opportunities." />
        <meta name="twitter:image" content="https://zimnovate.com/logo1.png" />
      </Helmet>
    <div>
      <PageHero
        title="Partner With Us"
        subtitle="Join forces with Zimnovate to deliver exceptional digital solutions and grow together."
        height="min-h-[45vh]"
      />

      <section className="mx-auto max-w-7xl px-12 py-16 md:px-16 md:py-20 lg:px-20">
        <div className="grid gap-8 md:grid-cols-2">
          {partnershipTypes.map((type, index) => (
            <div key={index} className="rounded-2xl border border-[var(--zim-border)] bg-[var(--zim-card)] p-8">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--zim-green)]/10">
                <type.icon className="h-6 w-6 text-[var(--zim-green)]" />
              </div>
              <h2 className="mb-4 text-xl font-bold text-[var(--zim-black)]">
                {type.title}
              </h2>
              <p className="mb-6 text-[var(--zim-fg)] text-sm leading-relaxed">
                {type.description}
              </p>
              <ul className="space-y-2">
                {type.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-[var(--zim-fg)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--zim-green)]" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="mb-8 text-2xl font-bold text-[var(--zim-black)] text-center">
            Current Partners
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {currentPartners.map((partner, index) => (
              <div key={index} className="rounded-xl border border-[var(--zim-border)] bg-[var(--zim-card)] p-6 text-center">
                <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--zim-green)]/10">
                  <Handshake className="h-5 w-5 text-[var(--zim-green)]" />
                </div>
                <h3 className="font-semibold text-[var(--zim-black)]">
                  {partner.name}
                </h3>
                <p className="text-xs text-[var(--zim-fg)]">
                  {partner.category}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="mb-4 text-2xl font-bold text-[var(--zim-black)]">
            Ready to partner with us?
          </h2>
          <p className="mb-6 text-[var(--zim-fg)] max-w-2xl mx-auto">
            Let us discuss how we can work together to create amazing digital experiences and grow our businesses.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--zim-green)] px-8 py-3 text-sm font-semibold text-[var(--zim-black)] hover:brightness-110 transition-colors"
          >
            Become a Partner <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
    </>
  )
}

export default Partners
