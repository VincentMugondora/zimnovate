import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useParams, Navigate } from 'react-router-dom'
import { Linkedin, Twitter, Globe, ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'
import { getTeamMemberBySlug, teamMembers } from '../data/teamData.js'

const TeamProfile = () => {
  const { slug } = useParams()
  const member = getTeamMemberBySlug(slug)

  if (!member) {
    return <Navigate to="/team" replace />
  }

  const otherMembers = teamMembers.filter(m => m.id !== member.id).slice(0, 2)

  return (
    <>
      <Helmet>
        <title>{member.name} – {member.role} | Zimnovate Team</title>
        <meta name="description" content={`${member.tagline} ${member.name} is ${member.role} at Zimnovate. ${member.bio.substring(0, 150)}...`} />
        <meta name="keywords" content={`${member.name.toLowerCase()}, zimnovate team, ${member.role.toLowerCase()}, zimbabwe tech`} />
        <link rel="canonical" href={`https://zimnovate.com/team/${member.id}`} />
        <meta property="og:title" content={`${member.name} – ${member.role} | Zimnovate Team`} />
        <meta property="og:description" content={member.tagline} />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content={`https://zimnovate.com/team/${member.id}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${member.name} – ${member.role} | Zimnovate Team`} />
        <meta name="twitter:description" content={member.tagline} />
        <meta name="twitter:image" content={`https://zimnovate.com${member.image}`} />
      </Helmet>

      <div className="min-h-screen bg-[#F9F5EF]">
        {/* Back Navigation */}
        <div className="mx-auto max-w-7xl px-12 pt-8 md:px-16 lg:px-20">
          <Link
            to="/team"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#1A1A1A]/70 hover:text-[#0EAFFF] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Team
          </Link>
        </div>

        {/* Profile Hero */}
        <section className="mx-auto max-w-7xl px-12 py-12 md:px-16 md:py-16 lg:px-20">
          <div className="rounded-3xl bg-white p-8 md:p-12 shadow-sm">
            <div className="grid gap-8 md:grid-cols-[280px_1fr] items-start">
              {/* Profile Image */}
              <div className="mx-auto md:mx-0">
                <div className="h-64 w-64 overflow-hidden rounded-2xl bg-gradient-to-br from-[#0EAFFF] to-[#E50695]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.classList.add('flex', 'items-center', 'justify-center')
                      e.target.parentElement.innerHTML = '<span class="text-white font-bold text-6xl">' + member.name.charAt(0) + '</span>'
                    }}
                  />
                </div>
              </div>

              {/* Profile Info */}
              <div>
                <h1 className="mb-2 text-3xl md:text-4xl font-bold text-[#1A1A1A]">
                  {member.name}
                </h1>
                <p className="mb-4 text-lg text-[#0EAFFF] font-medium">
                  {member.role}
                </p>
                <p className="mb-6 text-[#1A1A1A]/70 text-lg">
                  {member.tagline}
                </p>

                {/* Social Links */}
                <div className="flex gap-4">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#0EAFFF]/10 px-4 py-2 text-sm font-medium text-[#0EAFFF] hover:bg-[#0EAFFF]/20 transition-colors"
                    >
                      <Linkedin className="h-4 w-4" /> LinkedIn
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#0EAFFF]/10 px-4 py-2 text-sm font-medium text-[#0EAFFF] hover:bg-[#0EAFFF]/20 transition-colors"
                    >
                      <Twitter className="h-4 w-4" /> Twitter
                    </a>
                  )}
                  {member.social.portfolio && (
                    <a
                      href={member.social.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#0EAFFF]/10 px-4 py-2 text-sm font-medium text-[#0EAFFF] hover:bg-[#0EAFFF]/20 transition-colors"
                    >
                      <Globe className="h-4 w-4" /> Portfolio
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Biography Section */}
        <section className="mx-auto max-w-7xl px-12 pb-16 md:px-16 md:pb-20 lg:px-20">
          <div className="rounded-3xl bg-white p-8 md:p-12 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold text-[#1A1A1A]">
              About {member.name.split(' ')[0]}
            </h2>
            <div className="prose prose-lg max-w-none text-[#1A1A1A]/70 leading-relaxed whitespace-pre-line">
              {member.bio}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mx-auto max-w-7xl px-12 pb-16 md:px-16 md:pb-20 lg:px-20">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Technical Skills */}
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-xl font-bold text-[#1A1A1A]">
                Technical Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {member.skills.technical.map((skill, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-gradient-to-r from-[#0EAFFF]/10 to-[#E50695]/10 px-4 py-2 text-sm font-medium text-[#1A1A1A]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-xl font-bold text-[#1A1A1A]">
                Soft Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {member.skills.soft.map((skill, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-[#C8FA50]/20 px-4 py-2 text-sm font-medium text-[#1A1A1A]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mx-auto max-w-7xl px-12 pb-16 md:px-16 md:pb-20 lg:px-20">
          <div className="rounded-3xl bg-white p-8 md:p-12 shadow-sm">
            <h2 className="mb-8 text-2xl font-bold text-[#1A1A1A]">
              Projects {member.name.split(' ')[0]} Has Contributed To
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {member.projects.map((project, index) => (
                <Link
                  key={index}
                  to={project.link}
                  className="group rounded-2xl border border-[#E5E5E5] p-6 hover:border-[#0EAFFF] hover:shadow-md transition-all"
                >
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#C8FA50]"></span>
                    <h3 className="font-bold text-[#1A1A1A] group-hover:text-[#0EAFFF] transition-colors">
                      {project.name}
                    </h3>
                  </div>
                  <p className="mb-2 text-sm font-medium text-[#0EAFFF]">
                    Role: {project.role}
                  </p>
                  <p className="mb-4 text-sm text-[#1A1A1A]/70">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-1 text-sm font-medium text-[#0EAFFF]">
                    View Case Study <ExternalLink className="h-3 w-3" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Other Team Members */}
        {otherMembers.length > 0 && (
          <section className="mx-auto max-w-7xl px-12 pb-16 md:px-16 md:pb-20 lg:px-20">
            <div className="rounded-3xl bg-white p-8 md:p-12 shadow-sm">
              <h2 className="mb-8 text-2xl font-bold text-[#1A1A1A]">
                More Team Members
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {otherMembers.map((otherMember) => (
                  <Link
                    key={otherMember.id}
                    to={`/team/${otherMember.id}`}
                    className="group flex items-center gap-4 rounded-2xl border border-[#E5E5E5] p-4 hover:border-[#0EAFFF] hover:shadow-md transition-all"
                  >
                    <div className="h-16 w-16 overflow-hidden rounded-xl bg-gradient-to-br from-[#0EAFFF] to-[#E50695] flex-shrink-0">
                      <img
                        src={otherMember.image}
                        alt={otherMember.name}
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none'
                          e.target.parentElement.classList.add('flex', 'items-center', 'justify-center')
                          e.target.parentElement.innerHTML = '<span class="text-white font-bold text-lg">' + otherMember.name.charAt(0) + '</span>'
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#1A1A1A] group-hover:text-[#0EAFFF] transition-colors">
                        {otherMember.name}
                      </h3>
                      <p className="text-sm text-[#1A1A1A]/70">{otherMember.role}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-[#0EAFFF]" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="mx-auto max-w-7xl px-12 pb-16 md:px-16 md:pb-20 lg:px-20">
          <div className="rounded-3xl bg-gradient-to-br from-[#0EAFFF] to-[#E50695] px-8 py-12 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white">
              Want to Work With {member.name.split(' ')[0]} and the Zimnovate Team?
            </h2>
            <p className="mb-8 text-white/90 max-w-xl mx-auto">
              Let&apos;s bring your vision to life with our expertise and dedication.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#1A1A1A] hover:bg-white/90 transition-colors"
            >
              Start Your Project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}

export default TeamProfile
