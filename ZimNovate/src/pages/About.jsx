import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ShieldCheck,
  Lightbulb,
  Gem,
  ArrowRight
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import PageHero from '../components/PageHero.jsx'
import { getTeamMembers } from '../services/database.js'

const MotionDiv = motion.div

const About = () => {
  const [members, setMembers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        setLoading(true)
        const data = await getTeamMembers()
        setMembers(data)
      } catch (err) {
        console.error('Failed to load team members:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchMembers()
  }, [])

  return (
    <>
      <Helmet>
        <title>About Zimnovate — Zimbabwe's Leading Digital Agency & Web Development Team</title>
        <meta name="description" content="Learn about Zimnovate, Zimbabwe's premier digital agency specializing in web development, mobile apps, branding, and custom software solutions for businesses in Harare and across Zimbabwe." />
        <meta name="keywords" content="about zimnovate, digital agency Zimbabwe, web development team Zimbabwe, software company Harare, custom software development Zimbabwe, web design company Zimbabwe, app development team Zimbabwe" />
        <link rel="canonical" href="https://zimnovate.co.zw/about" />
        <meta property="og:title" content="About Zimnovate — Zimbabwe's Leading Digital Agency & Web Development Team" />
        <meta property="og:description" content="Learn about Zimnovate, Zimbabwe's premier digital agency specializing in web development, mobile apps, branding, and custom software solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zimnovate.co.zw/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Zimnovate — Zimbabwe's Leading Digital Agency & Web Development Team" />
        <meta name="twitter:description" content="Learn about Zimnovate, Zimbabwe's premier digital agency specializing in web development, mobile apps, branding, and custom software solutions." />
        <meta name="twitter:image" content="https://zimnovate.co.zw/logo1.png" />
      </Helmet>
    <div className="bg-[var(--zim-bg)]">
      <PageHero
        title="A Zimbabwe-Born Agency Shaping the Future of Business"
        subtitle="Innovation, creativity, and powerful technology for African businesses."
        height="min-h-[45vh]"
      />

      {/* Who We Are */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-4">
            <div className="inline-flex rounded-full bg-[#f4d47c]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--zim-black)]">
              Who We Are
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[var(--zim-black)] md:text-4xl">
              Where vision meets smart technology
            </h2>
            <p className="text-sm leading-relaxed text-[var(--zim-fg)]/80 md:text-base">
              We started this year with a clear goal: to transform ideas into powerful digital experiences. At Zimnovate, we deliver web, mobile, and brand systems built for speed, reliability, and measurable growth.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#f4d47c] px-6 py-3 text-sm font-semibold text-[var(--zim-black)] hover:brightness-110 transition-all shadow-md"
              >
                Work With Us
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-[#f4d47c]/20 bg-[var(--zim-gray)]/30 p-1">
            <div className="relative h-80 overflow-hidden rounded-3xl">
              <img 
                src="/hero.png" 
                alt="Zimnovate team collaboration"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--zim-black)]/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-[var(--zim-gray)]/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 py-14 md:px-16 md:py-20 lg:px-20">
          <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-center">
            <div className="space-y-4">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f4d47c]">Our Mission</div>
              <h3 className="text-3xl font-bold tracking-tight text-[var(--zim-black)] md:text-4xl">
                Empower businesses to grow with technology that's built to last.
              </h3>
              <p className="text-sm leading-relaxed text-[var(--zim-fg)]/80 md:text-base">
                We combine modern engineering, human-centered design, and Africa's spirit of innovation to create digital experiences that truly move people.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-[#f4d47c]/20">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop&auto=format" 
                alt="Our mission in action"
                className="h-80 w-full object-cover"
              />
              <div className="absolute inset-0 bg-[var(--zim-black)]/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="text-center space-y-4 mb-12">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f4d47c]">Our Team</div>
          <h3 className="text-3xl font-bold tracking-tight text-[var(--zim-black)] md:text-4xl">
            Meet the people behind the magic
          </h3>
          <p className="text-sm leading-relaxed text-[var(--zim-fg)]/70 max-w-2xl mx-auto">
            A passionate group of creators, developers, and strategists building world-class digital experiences.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#f4d47c] border-t-transparent" />
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {members.slice(0, 4).map((member) => (
              <Link
                key={member.id}
                to={`/team/${member.slug}`}
                className="group block"
              >
                <div className="overflow-hidden rounded-[32px] bg-[var(--zim-gray)]/30 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="aspect-[4/5] w-full">
                    <img
                      src={member.image_url || '/imgs/agency.jpg'}
                      alt={member.name}
                      className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="mt-5 px-1 text-center">
                  <div className="text-xl font-bold text-[var(--zim-black)] lowercase">
                    {member.name.toLowerCase()}
                  </div>
                  <div className="mt-1 text-base text-[var(--zim-fg)]/60">
                    {member.role}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            to="/team"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--zim-black)]/10 bg-white px-8 py-3 text-sm font-semibold text-[var(--zim-black)] hover:bg-[var(--zim-black)] hover:text-white transition-all shadow-sm"
          >
            View All Team Members <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-[var(--zim-gray)]/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 py-14 md:px-16 md:py-20 lg:px-20">
          <div className="text-center space-y-4">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f4d47c]">Core Values</div>
            <h3 className="text-3xl font-bold tracking-tight text-[var(--zim-black)] md:text-4xl">
              What guides everything we do
            </h3>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Innovation with Purpose',
                desc: 'We design with meaning, not just aesthetics.',
                icon: Lightbulb,
              },
              {
                title: 'Transparency & Trust',
                desc: 'Everything we do is honest, clear, and collaborative.',
                icon: ShieldCheck,
              },
              {
                title: 'Excellence in Execution',
                desc: 'Quality is not an act — it\'s our culture.',
                icon: Gem,
              },
            ].map((value) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="relative overflow-hidden rounded-2xl border border-[#f4d47c]/20 bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f4d47c]/10 text-[#f4d47c] mb-5">
                      <Icon size={24} />
                    </div>
                    <h4 className="text-lg font-bold text-[var(--zim-black)] mb-2">{value.title}</h4>
                    <p className="text-sm text-[var(--zim-fg)]/70 leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 py-20 md:px-16 lg:px-20">
        <div className="relative overflow-hidden rounded-[32px] bg-[var(--zim-black)] p-10 text-white shadow-xl text-center md:py-20">
          <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-[#f4d47c]/10 blur-[100px]" />
          <div className="absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-[#f4d47c]/10 blur-[100px]" />
          
          <div className="relative space-y-6 max-w-3xl mx-auto">
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f4d47c]">Let's build together</div>
              <h3 className="text-3xl font-bold leading-tight md:text-5xl">
                Extraordinary digital results await.
              </h3>
              <p className="text-lg text-white/70">
                Start a project with Zimnovate or book a call to plan your next brand evolution.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#f4d47c] px-8 py-4 text-sm font-bold text-[var(--zim-black)] hover:brightness-110 shadow-lg shadow-[#f4d47c]/20"
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

export default About
