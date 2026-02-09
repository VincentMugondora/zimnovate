import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { supabase } from '../lib/supabase.js'
import { ArrowLeft, Calendar, Clock, User, Facebook, Twitter, Linkedin } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const BlogDetail = () => {
  const { slug } = useParams()
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true)
      setError(null)
      try {
        const { data, error } = await supabase
          .from('blogs')
          .select(`
            *,
            author:team_members(name, role, image_url, slug)
          `)
          .eq('slug', slug)
          .eq('published', true)
          .single()

        if (error) throw error
        if (!data) {
          setError('Blog post not found')
          return
        }
        setBlog(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    
    fetchBlog()
  }, [slug])

  const formatDate = (dateString) => {
    if (!dateString) return ''
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex items-center gap-3 text-[#1A1A1A]/60">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-[#F4D47C] border-t-transparent" />
          <span>Loading article...</span>
        </div>
      </div>
    )
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold text-[#0F172A] mb-4">Article Not Found</h1>
        <p className="text-[#1A1A1A]/70 mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 rounded-lg bg-[#F4D47C] px-6 py-3 text-sm font-semibold text-[#0F172A] hover:brightness-110"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>{blog.title} | ZimNovate Blog</title>
        <meta name="description" content={blog.excerpt || blog.content?.slice(0, 160)} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.excerpt || blog.content?.slice(0, 160)} />
        <meta property="og:image" content={blog.image_url} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.excerpt || blog.content?.slice(0, 160)} />
        <meta name="twitter:image" content={blog.image_url} />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <div className="border-b border-[#F4D47C]/20">
          <div className="mx-auto max-w-4xl px-6 py-4">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-sm text-[#1A1A1A]/70 hover:text-[#F4D47C] transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </div>
        </div>

        {/* Article Header */}
        <article className="mx-auto max-w-4xl px-6 py-12">
          {/* Category & Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="inline-flex rounded-full bg-[#F4D47C] px-3 py-1 text-xs font-semibold text-[#0F172A]">
              {blog.category}
            </span>
            <div className="flex items-center gap-2 text-sm text-[#1A1A1A]/60">
              <Calendar className="h-4 w-4" />
              {formatDate(blog.created_at)}
            </div>
            <div className="flex items-center gap-2 text-sm text-[#1A1A1A]/60">
              <Clock className="h-4 w-4" />
              {blog.read_time || '5 min read'}
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6 leading-tight">
            {blog.title}
          </h1>

          {/* Author */}
          {blog.author && (
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-[#F4D47C]/20">
              <div className="h-12 w-12 rounded-full bg-[#F4D47C]/20 overflow-hidden">
                {blog.author.image_url ? (
                  <img 
                    src={blog.author.image_url} 
                    alt={blog.author.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <User className="h-6 w-6 text-[#F4D47C]" />
                  </div>
                )}
              </div>
              <div>
                <Link 
                  to={`/team/${blog.author.slug}`}
                  className="font-semibold text-[#0F172A] hover:text-[#F4D47C] transition-colors"
                >
                  {blog.author.name}
                </Link>
                <p className="text-sm text-[#1A1A1A]/60">{blog.author.role}</p>
              </div>
            </div>
          )}

          {/* Featured Image */}
          {blog.image_url && (
            <div className="mb-8 rounded-2xl overflow-hidden">
              <img 
                src={blog.image_url} 
                alt={blog.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-zinc prose-lg lg:prose-xl max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {blog.content}
            </ReactMarkdown>
          </div>

          {/* Share */}
          <div className="mt-12 pt-8 border-t border-[#F4D47C]/20">
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-[#0F172A]">Share this article:</span>
              <div className="flex gap-2">
                <button 
                  onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(blog.title)}`, '_blank')}
                  className="p-2 rounded-lg bg-[#F9F5EF] text-[#1A1A1A]/60 hover:bg-[#F4D47C] hover:text-[#0F172A] transition-colors"
                >
                  <Twitter className="h-4 w-4" />
                </button>
                <button 
                  onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                  className="p-2 rounded-lg bg-[#F9F5EF] text-[#1A1A1A]/60 hover:bg-[#F4D47C] hover:text-[#0F172A] transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                </button>
                <button 
                  onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                  className="p-2 rounded-lg bg-[#F9F5EF] text-[#1A1A1A]/60 hover:bg-[#F4D47C] hover:text-[#0F172A] transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  )
}

export default BlogDetail
