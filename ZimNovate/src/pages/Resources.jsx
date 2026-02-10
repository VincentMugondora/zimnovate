import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BookOpen, Video, FileText, Download, ExternalLink, ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'

const Resources = () => {
  const resources = [
    {
      icon: BookOpen,
      title: 'Learning Modules',
      description: 'Self-paced courses on web development, digital marketing, and design fundamentals.',
      items: [
        { name: 'Web Development Fundamentals', type: 'Course', link: '#' },
        { name: 'UI/UX Design Principles', type: 'Course', link: '#' },
        { name: 'Digital Marketing 101', type: 'Course', link: '#' },
        { name: 'Mobile App Development', type: 'Course', link: '#' }
      ]
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for building modern web applications and digital products.',
      items: [
        { name: 'Getting Started with React', type: 'Video', link: '#' },
        { name: 'Building Responsive Layouts', type: 'Video', link: '#' },
        { name: 'SEO Best Practices', type: 'Video', link: '#' },
        { name: 'App Deployment Guide', type: 'Video', link: '#' }
      ]
    },
    {
      icon: FileText,
      title: 'Guides & Ebooks',
      description: 'Comprehensive guides and ebooks to help you master digital skills.',
      items: [
        { name: 'Complete Web Development Guide', type: 'Ebook', link: '#' },
        { name: 'Digital Strategy Playbook', type: 'Guide', link: '#' },
        { name: 'Branding for Startups', type: 'Guide', link: '#' },
        { name: 'E-commerce Success Guide', type: 'Ebook', link: '#' }
      ]
    },
    {
      icon: Download,
      title: 'Free Tools & Templates',
      description: 'Downloadable resources to accelerate your projects and workflows.',
      items: [
        { name: 'Website Planning Template', type: 'Template', link: '#' },
        { name: 'Social Media Calendar', type: 'Tool', link: '#' },
        { name: 'Brand Identity Checklist', type: 'Checklist', link: '#' },
        { name: 'Project Brief Template', type: 'Template', link: '#' }
      ]
    }
  ]

  const blogPosts = [
    {
      title: 'The Future of Web Development in Africa',
      excerpt: 'Exploring emerging technologies and opportunities for African developers.',
      date: 'Jan 15, 2025',
      category: 'Technology'
    },
    {
      title: 'Building Accessible Digital Products',
      excerpt: 'Best practices for creating inclusive web and mobile experiences.',
      date: 'Jan 10, 2025',
      category: 'Design'
    },
    {
      title: 'SEO Strategies for Zimbabwean Businesses',
      excerpt: 'How to rank higher on Google and reach more local customers.',
      date: 'Jan 5, 2025',
      category: 'Marketing'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Resources – Zimnovate | Learning & Tools</title>
        <meta name="description" content="Access free learning modules, video tutorials, guides, and tools to help you master web development, design, and digital marketing." />
        <meta name="keywords" content="zimnovate resources, learning modules, web development tutorials, digital marketing guides" />
        <link rel="canonical" href="https://zimnovate.co.zw/resources" />
        <meta property="og:title" content="Resources – Zimnovate | Learning & Tools" />
        <meta property="og:description" content="Access free learning modules, video tutorials, guides, and tools for digital skills." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zimnovate.co.zw/resources" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Resources – Zimnovate | Learning & Tools" />
        <meta name="twitter:description" content="Access free learning modules, video tutorials, guides, and tools for digital skills." />
        <meta name="twitter:image" content="https://zimnovate.co.zw/logo1.png" />
      </Helmet>
    <div>
      <PageHero
        title="Learning Resources"
        subtitle="Free courses, tutorials, guides, and tools to help you build your digital skills."
        height="min-h-[45vh]"
      />

      <section className="mx-auto max-w-7xl px-12 py-16 md:px-16 md:py-20 lg:px-20">
        <div className="grid gap-8 md:grid-cols-2">
          {resources.map((section, index) => (
            <div key={index} className="rounded-2xl border border-[var(--zim-border)] bg-[var(--zim-card)] p-8">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--zim-green)]/10">
                <section.icon className="h-6 w-6 text-[var(--zim-green)]" />
              </div>
              <h2 className="mb-2 text-xl font-bold text-[var(--zim-black)]">
                {section.title}
              </h2>
              <p className="mb-6 text-sm text-[var(--zim-fg)]">
                {section.description}
              </p>
              <ul className="space-y-3">
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.link}
                      className="group flex items-center justify-between rounded-lg border border-[var(--zim-border)] bg-white p-3 hover:border-[var(--zim-green)] transition-colors"
                    >
                      <div>
                        <div className="text-xs text-[var(--zim-fg)] mb-1">{item.type}</div>
                        <div className="text-sm font-medium text-[var(--zim-black)]">{item.name}</div>
                      </div>
                      <ExternalLink className="h-4 w-4 text-[var(--zim-fg)] group-hover:text-[var(--zim-green)]" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[var(--zim-black)]">
              Latest from Our Blog
            </h2>
            <a href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--zim-green)] hover:underline">
              View All <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {blogPosts.map((post, index) => (
              <article key={index} className="rounded-xl border border-[var(--zim-border)] bg-[var(--zim-card)] p-6">
                <div className="mb-3 text-xs font-semibold text-[var(--zim-green)]">
                  {post.category}
                </div>
                <h3 className="mb-2 text-base font-bold text-[var(--zim-black)]">
                  {post.title}
                </h3>
                <p className="mb-4 text-sm text-[var(--zim-fg)]">
                  {post.excerpt}
                </p>
                <div className="text-xs text-[var(--zim-fg)]">
                  {post.date}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-2xl bg-[var(--zim-green)]/5 p-8 text-center">
          <h2 className="mb-4 text-xl font-bold text-[var(--zim-black)]">
            Want personalized training?
          </h2>
          <p className="mb-6 text-[var(--zim-fg)] max-w-xl mx-auto">
            We offer customized workshops and training programs for teams and organizations.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[var(--zim-green)] px-8 py-3 text-sm font-semibold text-[var(--zim-black)] hover:brightness-110 transition-colors"
          >
            Request Training
          </a>
        </div>
      </section>
    </div>
    </>
  )
}

export default Resources
