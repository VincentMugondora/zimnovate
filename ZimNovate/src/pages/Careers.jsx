import React from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'

const Careers = () => {
  const benefits = [
    { title: 'Competitive Salary', description: 'Above-market compensation packages' },
    { title: 'Remote Work', description: 'Work from anywhere in Zimbabwe' },
    { title: 'Health Insurance', description: 'Comprehensive medical coverage' },
    { title: 'Learning Budget', description: 'Annual budget for courses and conferences' },
    { title: 'Flexible Hours', description: "Work when you're most productive" },
    { title: 'Team Retreats', description: 'Quarterly team building events' },
  ]

  const jobs = [
    {
      title: 'Senior React Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build cutting-edge web applications for clients across Africa.',
    },
    {
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Harare / Remote',
      type: 'Full-time',
      description: 'Create beautiful, intuitive interfaces for web and mobile apps.',
    },
    {
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
      description: 'Drive growth for our clients through strategic campaigns.',
    },
    {
      title: 'Project Manager',
      department: 'Operations',
      location: 'Harare',
      type: 'Full-time',
      description: 'Lead cross-functional teams to deliver exceptional projects.',
    },
  ]

  return (
    <div>
      <PageHero
        title="Join Zimnovate"
        subtitle="Build your career while building the future of African tech"
        height="min-h-[50vh]"
      />

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex rounded-full bg-[#F4D47C]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#0F172A]">
            Why Work With Us
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
            We're building something special
          </h2>
          <p className="text-sm leading-relaxed text-[#1A1A1A]/80 md:text-base">
            At Zimnovate, we're passionate about using technology to solve real problems. 
            Join a team of talented individuals who are shaping the future of digital in Zimbabwe and beyond.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#F9F5EF]">
        <div className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
          <div className="text-center space-y-4 mb-12">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">Perks & Benefits</div>
            <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">Why You'll Love Working Here</h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-2xl border border-[#F4D47C]/20 bg-white p-6 shadow-sm">
                <h4 className="text-lg font-bold text-[#0F172A] mb-2">{benefit.title}</h4>
                <p className="text-sm text-[#1A1A1A]/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-2xl border border-[#F4D47C]/20 bg-[#F9F5EF] p-1">
            <div className="relative h-72 overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&crop=entropy&auto=format"
                alt="Team culture"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-flex rounded-full bg-[#F4D47C]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#0F172A]">
              Our Culture
            </div>
            <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
              Collaborative, Creative, Impactful
            </h3>
            <div className="space-y-4">
              {[
                { title: 'Innovation First', description: 'We encourage experimentation and creative problem-solving.' },
                { title: 'Growth Mindset', description: 'Continuous learning is at the core of everything we do.' },
                { title: 'Work-Life Balance', description: 'We believe rested teams build better products.' },
                { title: 'Diversity & Inclusion', description: 'Different perspectives make us stronger.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="mt-1 h-2 w-2 rounded-full bg-[#F4D47C] flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-[#0F172A]">{item.title}</h4>
                    <p className="text-sm text-[#1A1A1A]/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="bg-[#F9F5EF]">
        <div className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
          <div className="text-center space-y-4 mb-12">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">Open Positions</div>
            <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">Join Our Team</h3>
          </div>

          <div className="space-y-4">
            {jobs.map((job) => (
              <div key={job.title} className="rounded-2xl border border-[#F4D47C]/20 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-bold text-[#0F172A]">{job.title}</h4>
                    <p className="text-sm text-[#1A1A1A]/70 mt-1">{job.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="inline-flex rounded-full bg-[#F4D47C]/10 px-3 py-1 text-xs font-semibold text-[#0F172A]">
                        {job.department}
                      </span>
                      <span className="inline-flex rounded-full bg-[#F4D47C]/10 px-3 py-1 text-xs font-semibold text-[#0F172A]">
                        {job.location}
                      </span>
                      <span className="inline-flex rounded-full bg-[#F4D47C]/10 px-3 py-1 text-xs font-semibold text-[#0F172A]">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-[#F4D47C] px-6 py-3 text-sm font-semibold text-[#0F172A] hover:brightness-110 transition-colors whitespace-nowrap"
                  >
                    Apply Now
                  </Link>
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
              Don't see the right role?
            </h3>
            <p className="text-sm text-[#0F172A]/80">
              We're always looking for talented people. Send us your resume and let's talk.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#0F172A] px-6 py-3 text-sm font-semibold text-white hover:brightness-110 transition-colors"
            >
              Get In Touch →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Careers
