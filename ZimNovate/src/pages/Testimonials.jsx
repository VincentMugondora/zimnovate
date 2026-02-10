import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PageHero from '../components/PageHero.jsx'

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Zimnovate transformed our business completely. The e-commerce platform they built increased our sales by 200% in just three months.",
      author: "Tendai Moyo",
      role: "Founder, ZimFresh Marketplace",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      project: "E-Commerce Platform"
    },
    {
      quote: "The team's attention to detail and commitment to quality is unmatched. They delivered our mobile app on time and exceeded all expectations.",
      author: "Kudakwashe Mutasa",
      role: "CEO, SwiftPay",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      project: "Mobile Wallet App"
    },
    {
      quote: "Working with Zimnovate was a game-changer for our brand. They understood our vision and created an identity that truly represents who we are.",
      author: "Dr. Sarah Mupfumira",
      role: "Director, Royal Home Care",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
      project: "Brand Identity"
    },
    {
      quote: "Their digital marketing expertise helped us grow from zero to 15,000 monthly users. The ROI has been incredible.",
      author: "James Ndlovu",
      role: "CEO, AfricaRise",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      project: "Digital Marketing Campaign"
    },
    {
      quote: "The AI automation system Zimnovate built saves us 20 hours every week. It's been a massive boost to our productivity.",
      author: "Peter Nkomo",
      role: "Operations Director, AutoDocs",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      project: "AI Document Processing"
    },
    {
      quote: "Finally, a tech partner that understands the unique needs of Zimbabwean businesses. Zimnovate delivered beyond our expectations.",
      author: "Maria Sibanda",
      role: "Founder, ZimFarms",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100&h=100&fit=crop&crop=face",
      project: "AgriTech Platform"
    }
  ]

  const stats = [
    { value: '50+', label: 'Happy Clients' },
    { value: '100+', label: 'Projects Delivered' },
    { value: '4.9/5', label: 'Average Rating' },
    { value: '95%', label: 'Client Retention' }
  ]

  return (
    <>
      <Helmet>
        <title>Client Testimonials | ZimNovate</title>
        <link rel="canonical" href="https://zimnovate.co.zw/testimonials" />
      </Helmet>
      <div>
        <PageHero
          title="Client Testimonials"
          subtitle="Don't just take our word for it - hear from the businesses we've helped grow"
          height="min-h-[45vh]"
        />

        {/* Stats */}
        <section className="bg-[#F9F5EF]">
          <div className="mx-auto max-w-7xl px-12 py-10 md:px-16 lg:px-20">
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
      <section className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="text-center space-y-4 mb-12">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">What Our Clients Say</div>
          <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">Success Stories</h3>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="rounded-2xl border border-[#F4D47C]/20 bg-white p-6 shadow-sm">
              <div className="mb-6">
                <span className="text-4xl text-[#F4D47C]">"</span>
              </div>
              <p className="text-sm text-[#1A1A1A]/80 mb-6 leading-relaxed">{testimonial.quote}</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-[#0F172A]">{testimonial.author}</div>
                  <div className="text-xs text-[#1A1A1A]/60">{testimonial.role}</div>
                  <div className="text-xs text-[#F4D47C] font-semibold mt-1">{testimonial.project}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Testimonials Placeholder */}
      <section className="bg-[#F9F5EF]">
        <div className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
          <div className="text-center space-y-4 mb-12">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">Video Stories</div>
            <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">Client Video Testimonials</h3>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[1, 2].map((video) => (
              <div key={video} className="relative overflow-hidden rounded-2xl border border-[#F4D47C]/20 bg-white shadow-sm">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-${video === 1 ? '1557804506-669a67965ba0' : '1542744173-8e7e53415bb0'}?w=800&h=500&fit=crop`}
                    alt="Video thumbnail"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#0F172A]/40 flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-[#F4D47C] flex items-center justify-center">
                      <svg className="h-6 w-6 text-[#0F172A] ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-[#0F172A]">{video === 1 ? 'How ZimFresh Scaled with Technology' : 'Royal Home Care Brand Transformation'}</h4>
                  <p className="text-sm text-[#1A1A1A]/60 mt-1">Client Interview • 3 min</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
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
