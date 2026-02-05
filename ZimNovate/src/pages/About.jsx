import React from 'react'
import { motion } from 'framer-motion'
import {
  Rocket,
  ShieldCheck,
  Sparkles,
  Globe2,
  Lightbulb,
  Gem,
  Search,
  PenTool,
  Code,
  Rocket as RocketLaunch,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import PageHero from '../components/PageHero.jsx'

const MotionDiv = motion.div

const About = () => {

  return (
    <div>
      <PageHero
        title="Who We Are: A Zimbabwe-Born Digital Agency Shaping the Future of Business"
        subtitle="Zimnovate is committed to helping African businesses grow through innovation, creativity, and powerful technology."
        height="min-h-[45vh]"
      />

      {/* Intro CTA */}
      <section className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-4">
            <div className="inline-flex rounded-full bg-[#F4D47C]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#0F172A]">
              Who We Are
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
              Where vision meets smart technology
            </h2>
            <p className="text-sm leading-relaxed text-[#1A1A1A]/80 md:text-base">
              We transform ideas into powerful digital experiences. From strategy to launch, our teams deliver web, mobile, and brand systems built for speed, reliability, and measurable growth.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#F4D47C] px-5 py-3 text-sm font-semibold text-[#0F172A] hover:brightness-110"
              >
                Work With Us
              </a>
              <a
                href="#our-story"
                className="inline-flex items-center justify-center rounded-full border border-[#F4D47C]/20 bg-[#F4D47C]/5 px-5 py-3 text-sm font-semibold text-[#0F172A] hover:bg-[#F4D47C]/10"
              >
                Our Story
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-[#F4D47C]/20 bg-[#F9F5EF] p-1">
            <div className="relative h-80 overflow-hidden rounded-3xl">
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&crop=entropy&auto=format" 
                alt="Team working in modern office"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-[#F9F5EF]">
        <div className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div className="space-y-4">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">Our Mission</div>
              <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
                Our mission is simple: empower businesses to grow with technology that's built to last.
              </h3>
              <p className="text-sm leading-relaxed text-[#1A1A1A]/80 md:text-base">
                We combine modern engineering, human-centered design, and Africa's spirit of innovation to create digital experiences that truly move people.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-[#F4D47C]/20 bg-[#F4D47C]/5 p-8">
              <div className="absolute inset-0 opacity-10">
                <div className="h-full w-full" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23F4D47C' stroke-width='2'%3E%3Cpath d='M30 5v50M5 30h50M10 10l40 40M10 40l40-40'/%3E%3C/g%3E%3C/svg%3E")`, backgroundRepeat: 'repeat' }} />
              </div>
              <div className="relative flex h-32 items-center justify-center">
                <div className="h-20 w-20 rounded-full border-4 border-[#F4D47C]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section id="our-story" className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="text-center space-y-4 mb-12">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">Our Story</div>
          <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
            Founded in Zimbabwe. Built for the world.
          </h3>
        </div>

        <div className="space-y-12">
          {[
            {
              year: '2020',
              title: 'The Beginning',
              description: 'Started as a one-person vision in Harare, Zimbabwe with a mission to bring world-class digital solutions to African businesses.',
              image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop&crop=entropy&auto=format',
              position: 'left'
            },
            {
              year: '2021',
              title: 'First Major Client',
              description: 'Landed our first enterprise project, proving that African talent can compete on the global stage.',
              image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=entropy&auto=format',
              position: 'right'
            },
            {
              year: '2023',
              title: 'Team Expansion',
              description: 'Grew from a solo founder to a diverse team of developers, designers, and strategists across multiple disciplines.',
              image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop&crop=entropy&auto=format',
              position: 'left'
            },
            {
              year: '2024',
              title: 'Global Impact',
              description: 'Now serving clients across multiple continents while maintaining our African roots and innovative spirit.',
              image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=entropy&auto=format',
              position: 'right'
            }
          ].map((milestone) => (
            <div key={milestone.year} className={`grid gap-8 md:grid-cols-2 md:items-center ${milestone.position === 'right' ? 'md:grid-cols-[1.1fr_0.9fr]' : 'md:grid-cols-[0.9fr_1.1fr]'}`}>
              <div className={`space-y-4 ${milestone.position === 'right' ? 'md:order-1' : ''}`}>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-[#F4D47C]">{milestone.year}</span>
                  <div className="h-px flex-1 bg-[#F4D47C]/20" />
                </div>
                <h4 className="text-2xl font-bold text-[#0F172A]">{milestone.title}</h4>
                <p className="text-sm leading-relaxed text-[#1A1A1A]/80">{milestone.description}</p>
              </div>
              <div className={`relative overflow-hidden rounded-2xl border border-[#F4D47C]/20 ${milestone.position === 'right' ? 'md:order-0' : ''}`}>
                <div className="relative h-64 overflow-hidden rounded-2xl">
                  <img 
                    src={milestone.image} 
                    alt={milestone.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/30 to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Meet the Team */}
      <section className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="text-center space-y-4 mb-12">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">Our Team</div>
          <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
            Meet the people behind the magic
          </h3>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: 'Vincent Mugondora',
              role: 'Founder & Lead Developer',
              image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format',
              bio: 'Full-stack developer with 8+ years building scalable web solutions.'
            },
            {
              name: 'Sarah Chen',
              role: 'UX/UI Designer',
              image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face&auto=format',
              bio: 'Creating intuitive digital experiences that users love.'
            },
            {
              name: 'Michael Johnson',
              role: 'Mobile Developer',
              image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format',
              bio: 'iOS and Android expert with a passion for mobile innovation.'
            },
            {
              name: 'Amina Patel',
              role: 'Digital Strategist',
              image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=400&h=400&fit=crop&crop=face&auto=format',
              bio: 'Data-driven strategies that accelerate business growth.'
            },
            {
              name: 'David Kim',
              role: 'Backend Engineer',
              image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face&auto=format',
              bio: 'Building robust APIs and cloud infrastructure.'
            },
            {
              name: 'Lisa Thompson',
              role: 'Project Manager',
              image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face&auto=format',
              bio: 'Ensuring smooth delivery and exceptional client experiences.'
            }
          ].map((member) => (
            <div
              key={member.name}
              className="group relative overflow-hidden rounded-2xl border border-[#F4D47C]/20 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/20 to-transparent" />
                <div className="absolute inset-0 bg-[#F4D47C]/10 mix-blend-multiply" />
              </div>
              <div className="relative p-6">
                <h4 className="text-lg font-bold text-[#0F172A] mb-1">{member.name}</h4>
                <p className="text-sm font-semibold text-[#F4D47C] mb-2">{member.role}</p>
                <p className="text-sm text-[#1A1A1A]/70">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-[#F9F5EF]">
        <div className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
          <div className="text-center space-y-4">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">Core Values</div>
            <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
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
                  className="relative overflow-hidden rounded-2xl border border-[#F4D47C]/20 bg-white p-6 shadow-sm"
                >
                  <div className="absolute inset-0 opacity-5">
                    <div className="h-full w-full" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23F4D47C' stroke-width='1'%3E%3Cpath d='M15 2v26M2 15h26M6 6l18 18M6 18l18-18'/%3E%3C/g%3E%3C/svg%3E")`, backgroundRepeat: 'repeat' }} />
                  </div>
                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F4D47C]/10 text-[#F4D47C] mb-4">
                      <Icon size={20} />
                    </div>
                    <h4 className="text-lg font-bold text-[#0F172A] mb-2">{value.title}</h4>
                    <p className="text-sm text-[#1A1A1A]/70">{value.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#F9F5EF]">
        <div className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
          <div className="text-center space-y-4 mb-12">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">Our Process</div>
            <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
              How we bring your vision to life
            </h3>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Discovery',
                description: 'We dive deep to understand your goals, users, and challenges through research and collaboration.',
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=entropy&auto=format'
              },
              {
                title: 'Strategy & Design',
                description: 'Creating intuitive interfaces and experiences that delight users and drive business results.',
                image: 'https://images.unsplash.com/photo-1559028006-44a35f2a8d03?w=600&h=400&fit=crop&crop=entropy&auto=format'
              },
              {
                title: 'Development',
                description: 'Building robust, scalable solutions with clean code and modern technologies.',
                image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&crop=entropy&auto=format'
              },
              {
                title: 'Launch & Grow',
                description: 'Deploying your solution and providing ongoing support to ensure continued success.',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=entropy&auto=format'
              }
            ].map((step, index) => (
              <div
                key={step.title}
                className="group relative overflow-hidden rounded-2xl border border-[#F4D47C]/20 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-[#0F172A]/20 to-transparent" />
                  <div className="absolute top-4 left-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#F4D47C] text-[#0F172A] font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <div className="relative p-4">
                  <h4 className="text-lg font-bold text-[#0F172A] mb-2">{step.title}</h4>
                  <p className="text-sm text-[#1A1A1A]/70">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#0F172A] text-white">
        <div className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
          <div className="text-center space-y-4">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">Why Choose Us</div>
            <h3 className="text-3xl font-bold tracking-tight md:text-4xl">
              Numbers that speak for themselves
            </h3>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-4">
            {[
              { number: '30+', label: 'Projects delivered' },
              { number: '15+', label: 'Industries served' },
              { number: '95%', label: 'Satisfaction rate' },
              { number: '100%', label: 'Transparency' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-[#F4D47C] md:text-5xl">{stat.number}</div>
                <div className="mt-2 text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
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
                  <div className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0F172A]/70">Let's build</div>
                  <h3 className="text-3xl font-bold leading-tight md:text-4xl">
                    Let's build something extraordinary, together.
                  </h3>
                  <p className="text-sm text-[#0F172A]/80">
                    Start a project with Zimnovate or book a call to plan your next move.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-[#0F172A] px-6 py-3 text-sm font-semibold text-white hover:brightness-110"
                  >
                    Start Your Project
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-[#0F172A]/20 bg-white/10 px-6 py-3 text-sm font-semibold text-[#0F172A] hover:bg-white/20"
                  >
                    Book a Call
                  </a>
                </div>
              </div>
              
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop&crop=entropy&auto=format" 
                  alt="Zimnovate team collaborating"
                  className="h-64 w-full object-cover lg:h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#F4D47C]/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
