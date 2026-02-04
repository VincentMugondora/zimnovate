import React from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'

const Blog = () => {
  const articles = [
    {
      title: 'The Future of E-Commerce in Zimbabwe',
      excerpt: 'How digital payments and mobile commerce are transforming the retail landscape in Zimbabwe.',
      category: 'E-Commerce',
      date: 'Jan 15, 2026',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      readTime: '5 min read',
    },
    {
      title: 'Why Your Business Needs a Mobile App in 2026',
      excerpt: 'The mobile-first reality and why businesses can no longer afford to ignore mobile applications.',
      category: 'Mobile Apps',
      date: 'Jan 10, 2026',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      readTime: '4 min read',
    },
    {
      title: 'AI Automation: Transforming Business Operations',
      excerpt: 'How artificial intelligence is revolutionizing document processing and workflow automation.',
      category: 'AI & Automation',
      date: 'Jan 5, 2026',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
      readTime: '6 min read',
    },
    {
      title: 'Building a Strong Brand Identity',
      excerpt: 'The essential elements of creating a memorable and impactful brand for your business.',
      category: 'Branding',
      date: 'Dec 28, 2025',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop',
      readTime: '5 min read',
    },
    {
      title: 'SEO Strategies for African Markets',
      excerpt: 'Tailored SEO approaches that work specifically for businesses targeting African audiences.',
      category: 'Digital Marketing',
      date: 'Dec 20, 2025',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      readTime: '7 min read',
    },
    {
      title: 'The Importance of UX Design',
      excerpt: 'Why user experience design should be at the center of your digital product strategy.',
      category: 'Design',
      date: 'Dec 15, 2025',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop',
      readTime: '4 min read',
    },
  ]

  const categories = ['All', 'E-Commerce', 'Mobile Apps', 'AI & Automation', 'Branding', 'Digital Marketing', 'Design']

  return (
    <div>
      <PageHero
        title="Insights & Ideas"
        subtitle="Thoughts on design, technology, and building digital products that matter"
        height="min-h-[45vh]"
      />

      {/* Categories */}
      <section className="border-b border-[#F4D47C]/20">
        <div className="mx-auto max-w-7xl px-12 py-6 md:px-16 lg:px-20">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="inline-flex rounded-full border border-[#F4D47C]/20 bg-white px-4 py-2 text-sm font-semibold text-[#0F172A] hover:bg-[#F4D47C]/10 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.title}
              className="group relative overflow-hidden rounded-2xl border border-[#F4D47C]/20 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex rounded-full bg-[#F4D47C] px-3 py-1 text-xs font-semibold text-[#0F172A]">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-[#1A1A1A]/60 mb-3">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2 group-hover:text-[#F4D47C] transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-[#1A1A1A]/70 mb-4">{article.excerpt}</p>
                <span className="inline-flex items-center text-sm font-semibold text-[#F4D47C]">
                  Read More →
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#F9F5EF]">
        <div className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h3 className="text-2xl font-bold text-[#0F172A]">Subscribe to Our Newsletter</h3>
            <p className="text-sm text-[#1A1A1A]/70">
              Get the latest insights on design, technology, and digital transformation delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-[#F4D47C]/20 bg-white px-4 py-3 text-sm text-[#0F172A] placeholder:text-[#1A1A1A]/40 focus:border-[#F4D47C] focus:outline-none transition-colors"
              />
              <button className="inline-flex items-center justify-center rounded-lg bg-[#F4D47C] px-6 py-3 text-sm font-semibold text-[#0F172A] hover:brightness-110 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
