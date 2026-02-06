import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Rocket, Users, Shield, ArrowUpRight } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import { teamMembers } from '../data/teamData.js'

const TeamCard = ({ member }) => {
  return (
    <Link
      to={`/team/${member.id}`}
      className="group block"
    >
      <div className="overflow-hidden rounded-[32px] bg-[#f3f3f3] shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
        <div className="aspect-[4/5] w-full">
          <img
            src={member.image || member.photo}
            alt={member.name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
      <div className="mt-5">
        <div className="text-xl font-bold text-[#1A1A1A] lowercase">
          {member.name.toLowerCase()}
        </div>
        <div className="mt-1 text-base text-[#1A1A1A]/60">
          {member.role}
        </div>
      </div>
    </Link>
  )
}

const Team = () => {
  const cultureValues = [
    {
      icon: Rocket,
      title: 'Innovation First',
      description: 'We test, learn, and improve constantly. Every challenge is an opportunity to innovate.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work as one team with clients & partners. Success is shared success.'
    },
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'We communicate clearly and honestly. Trust is the foundation of every relationship.'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Meet the Team – Zimnovate | Our People</title>
        <meta name="description" content="Meet the passionate team behind Zimnovate. Our creators, developers, strategists and innovators build world-class digital experiences for Africa and beyond." />
        <meta name="keywords" content="zimnovate team, digital team zimbabwe, tech team africa, developers harare" />
        <link rel="canonical" href="https://zimnovate.com/team" />
        <meta property="og:title" content="Meet the Team – Zimnovate | Our People" />
        <meta property="og:description" content="Meet the passionate team behind Zimnovate. Our creators, developers, strategists and innovators build world-class digital experiences for Africa and beyond." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zimnovate.com/team" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Meet the Team – Zimnovate | Our People" />
        <meta name="twitter:description" content="Meet the passionate team behind Zimnovate. Our creators, developers, strategists and innovators build world-class digital experiences." />
        <meta name="twitter:image" content="https://zimnovate.com/logo1.png" />
      </Helmet>

      <div>
        {/* Hero Section */}
        <PageHero
          title="Meet the Team Behind Zimnovate"
          subtitle="Our People"
          height="min-h-[50vh]"
        />

        <section className="mx-auto max-w-7xl px-12 pb-8 md:px-16 md:pb-12 lg:px-20">
          <div className="text-center max-w-3xl mx-auto -mt-8">
            <p className="text-lg text-[#1A1A1A]/70 mb-8">
              A passionate group of creators, developers, strategists and innovators building world-class digital experiences for Africa and beyond.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="mx-auto max-w-7xl px-12 py-16 md:px-16 md:py-20 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4">
              The People Building Tomorrow
            </h2>
            <p className="text-[#1A1A1A]/70 max-w-2xl mx-auto">
              Click on any team member to learn more about their expertise and the projects they&apos;ve contributed to.
            </p>
          </div>
          <div className="mt-10 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
            {teamMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </section>

        {/* Company Culture */}
        <section className="bg-[#F9F5EF]">
          <div className="mx-auto max-w-7xl px-12 py-16 md:px-16 md:py-20 lg:px-20">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4">
                We&apos;re Passionate About Innovation, Collaboration and Impact
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {cultureValues.map((value, index) => (
                <div key={index} className="rounded-2xl bg-white p-8 text-center">
                  <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#0EAFFF]/10 to-[#E50695]/10">
                    <value.icon className="h-7 w-7 text-[#0EAFFF]" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-[#1A1A1A]">
                    {value.title}
                  </h3>
                  <p className="text-sm text-[#1A1A1A]/70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mx-auto max-w-7xl px-12 py-16 md:px-16 md:py-20 lg:px-20">
          <div className="rounded-3xl bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] px-8 py-16 text-center md:px-16 md:py-20">
            <h2 className="mb-4 text-2xl md:text-3xl font-bold text-white">
              Want to Work With the Team Behind Zimnovate?
            </h2>
            <p className="mb-8 text-white/70 max-w-xl mx-auto">
              Let&apos;s collaborate on your next digital project and bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C8FA50] px-8 py-4 text-sm font-semibold text-[#1A1A1A] hover:brightness-110 transition-colors"
              >
                Start Your Project <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/careers"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-8 py-4 text-sm font-semibold text-white hover:bg-white hover:text-[#1A1A1A] transition-colors"
              >
                Join Our Team
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Team
