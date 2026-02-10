import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { FileText, AlertCircle, RefreshCw } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import { supabase } from '../lib/supabase.js'

const Blog = () => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'E-Commerce', 'Mobile Apps', 'AI & Automation', 'Branding', 'Digital Marketing', 'Design', 'Technology']

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select(`
          *,
          author:team_members(name)
        `)
        .eq('published', true)
        .order('created_at', { ascending: false })
      
      if (error) throw error
      setArticles(data || [])
    } catch (err) {
      setError(err.message)
      console.error('Blog fetch error:', err)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString) => {
    if (!dateString) return ''
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory)

  return (
    <>
      <Helmet>
        <title>Digital Marketing & Web Design Blog | Expert Insights | Zimnovate Zimbabwe</title>
        <meta name="description" content="Explore expert insights on web development, digital marketing, branding, and technology trends. Get actionable tips to grow your Zimbabwean business online." />
        <link rel="canonical" href="https://zimnovate.co.zw/blog" />
      </Helmet>
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
                onClick={() => setSelectedCategory(category)}
                className={`inline-flex rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  selectedCategory === category
                    ? 'border-[#F4D47C] bg-[#F4D47C] text-[#0F172A]'
                    : 'border-[#F4D47C]/20 bg-white text-[#0F172A] hover:bg-[#F4D47C]/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="flex items-center gap-3 text-[#1A1A1A]/60">
              <RefreshCw className="h-5 w-5 animate-spin" />
              <span>Loading articles...</span>
            </div>
          </div>
        ) : error ? (
          <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-center">
            <AlertCircle className="mx-auto mb-3 h-10 w-10 text-red-500" />
            <p className="text-red-600">Error loading articles: {error}</p>
            <button
              onClick={fetchBlogs}
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#F4D47C] px-4 py-2 text-sm font-semibold text-[#0F172A] hover:brightness-110"
            >
              <RefreshCw className="h-4 w-4" />
              Try Again
            </button>
          </div>
        ) : filteredArticles.length === 0 ? (
          <div className="rounded-lg border border-dashed border-[#F4D47C]/20 p-12 text-center">
            <FileText className="mx-auto mb-4 h-12 w-12 text-[#1A1A1A]/40" />
            <p className="text-lg font-medium text-[#0F172A]">No articles found</p>
            <p className="mt-2 text-sm text-[#1A1A1A]/60">
              {articles.length === 0 
                ? "No blog posts published yet. Check back soon!" 
                : "No articles in this category. Try a different filter."}
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="group relative overflow-hidden rounded-2xl border border-[#F4D47C]/20 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image_url || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop'}
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
                    <span>{formatDate(article.created_at)}</span>
                    <span>•</span>
                    <span>{article.read_time || '5 min read'}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2 group-hover:text-[#F4D47C] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-[#1A1A1A]/70 mb-4 line-clamp-2">
                    {article.excerpt || article.content?.slice(0, 150) + '...'}
                  </p>
                  <Link 
                    to={`/blog/${article.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-[#F4D47C] hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
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
    </>
  )
}

export default Blog
