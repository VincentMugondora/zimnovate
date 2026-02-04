import React from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'

const AutoDocsCaseStudy = () => {
  return (
    <div>
      <PageHero title="AutoDocs" subtitle="AI-Powered Document Processing & Automation System" height="min-h-[50vh]" />
      
      <section className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex rounded-full bg-[#F4D47C]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#0F172A]">AI & Automation</div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">Project Overview</h2>
            <p className="text-sm leading-relaxed text-[#1A1A1A]/80 md:text-base">
              AutoDocs approached us to build an intelligent document processing system that uses AI to read, categorize, and extract data from documents automatically. The solution eliminates manual data entry and streamlines document workflows.
            </p>
            <div className="flex flex-wrap gap-2">
              {['AI', 'OCR', 'Automation', 'Machine Learning', 'Document Processing'].map((tag) => (
                <span key={tag} className="inline-flex rounded-full bg-[#F4D47C]/10 px-3 py-1 text-xs font-semibold text-[#0F172A]">{tag}</span>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-[#F4D47C]/20 bg-[#F9F5EF] p-1">
            <div className="relative h-72 overflow-hidden rounded-xl">
              <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&crop=entropy&auto=format" alt="AutoDocs AI" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F9F5EF]">
        <div className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
          <div className="text-center space-y-4 mb-12">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">The Challenge</div>
            <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">The Problem</h3>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Manual Processing', description: 'Hours spent manually entering data from documents.' },
              { title: 'Human Errors', description: 'Mistakes in data entry causing business issues.' },
              { title: 'Slow Workflows', description: 'Document processing bottlenecks slowing operations.' },
              { title: 'No Searchability', description: 'Unable to quickly find information in documents.' }
            ].map((problem) => (
              <div key={problem.title} className="rounded-2xl border border-[#F4D47C]/20 bg-white p-6 shadow-sm">
                <h4 className="text-lg font-bold text-[#0F172A] mb-2">{problem.title}</h4>
                <p className="text-sm text-[#1A1A1A]/70">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="text-center space-y-4 mb-12">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D47C]">Impact</div>
          <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">Results</h3>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            { value: '85%', label: 'Time Saved', description: 'Reduction in document processing time' },
            { value: '99%', label: 'Accuracy', description: 'Data extraction accuracy rate' },
            { value: '10K+', label: 'Docs/Day', description: 'Documents processed daily' },
            { value: '60%', label: 'Cost Cut', description: 'Reduction in operational costs' }
          ].map((stat) => (
            <div key={stat.label} className="text-center rounded-2xl border border-[#F4D47C]/20 bg-[#F9F5EF] p-6">
              <div className="text-4xl font-bold text-[#F4D47C] mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-[#0F172A] mb-1">{stat.label}</div>
              <p className="text-sm text-[#1A1A1A]/70">{stat.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F9F5EF]">
        <div className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6 flex justify-center"><span className="text-6xl text-[#F4D47C]">"</span></div>
            <blockquote className="text-xl md:text-2xl font-medium text-[#0F172A] mb-6">
              AutoDocs has transformed our document management. What used to take days now takes minutes. The AI accuracy is remarkable.
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face" alt="Client" className="h-12 w-12 rounded-full object-cover" />
              <div className="text-left">
                <div className="font-bold text-[#0F172A]">Peter Nkomo</div>
                <div className="text-sm text-[#1A1A1A]/60">Operations Director, AutoDocs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="relative overflow-hidden rounded-3xl border border-[#F4D47C]/20 bg-[#F4D47C] p-10 text-[#0F172A] shadow-[0_28px_80px_rgba(0,0,0,0.15)]">
          <div className="text-center space-y-6">
            <h3 className="text-3xl font-bold leading-tight md:text-4xl">Ready to automate your workflows?</h3>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-[#0F172A] px-6 py-3 text-sm font-semibold text-white hover:brightness-110 transition-colors">Start Your Project →</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AutoDocsCaseStudy
