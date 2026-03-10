import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PageHero from '../components/PageHero.jsx'

const Testimonials = () => {
  const stats = [
    { value: '50+', label: 'Happy Clients' },
    { value: '100+', label: 'Projects Delivered' },
    { value: '4.9/5', label: 'Average Rating' },
    { value: '95%', label: 'Client Retention' }
  ]

  return (
    <>
      <Helmet>
        <title>Client Success Stories & Testimonials | Zimbabwe Digital Agency | Zimnovate</title>
        <meta name="description" content="Read success stories from Zimbabwean businesses we've helped grow. Discover how our web development, branding, and digital marketing services deliver real results." />
        <link rel="canonical" href="https://zimnovate.co.zw/testimonials" />
        <script src="https://elfsightcdn.com/platform.js" async></script>
      </Helmet>
      <div>
        <PageHero
          title="Client Testimonials"
          subtitle="Don't just take our word for it - hear from the businesses we've helped grow"
          height="min-h-[45vh]"
        />

        {/* Stats */}
        <section className="bg-[#F9F5EF]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 py-10 md:px-16 lg:px-20">
            <div className="grid gap-8 md:grid-cols-4 text-center">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-[#F4D47C] mb-1">{stat.value}</div>
                  <div className="text-sm text-[#1A1A1A]/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* Testimonials Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-block rounded-full border border-[var(--zim-border)] bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#9cff5f] shadow-sm">What Our Clients Say</div>
          <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">Success Stories</h3>
        </div>

        <div className="w-full">
          <div className="elfsight-app-dfa78d1e-4f6b-4f6f-9549-af95cfd406f6" data-elfsight-app-lazy></div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="relative overflow-hidden rounded-3xl border border-[#F4D47C]/20 bg-[#F4D47C] p-10 text-[#0F172A] shadow-[0_28px_80px_rgba(0,0,0,0.15)]">
          <div className="text-center space-y-6">
            <h3 className="text-3xl font-bold leading-tight md:text-4xl">
              Ready to be our next success story?
            </h3>
            <p className="text-sm text-[#0F172A]/80">
              Let's discuss how we can help transform your business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#0F172A] px-6 py-3 text-sm font-semibold text-white hover:brightness-110 transition-colors"
            >
              Start Your Project →
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default Testimonials
