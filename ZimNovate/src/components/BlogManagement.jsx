import React, { useState, useEffect } from 'react'
import { 
  Plus, 
  Pencil, 
  Trash2, 
  Eye, 
  EyeOff, 
  Search,
  X,
  Check,
  FileText,
  Calendar,
  User,
  Tag
} from 'lucide-react'
import { supabase } from '../lib/supabase.js'

const BlogManagement = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [editingBlog, setEditingBlog] = useState(null)
  const [teamMembers, setTeamMembers] = useState([])
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: 'E-Commerce',
    image_url: '',
    read_time: '5 min read',
    published: false,
    author_id: ''
  })

  const categories = ['E-Commerce', 'Mobile Apps', 'AI & Automation', 'Branding', 'Digital Marketing', 'Design', 'Technology']

  useEffect(() => {
    fetchBlogs()
    fetchTeamMembers()
  }, [])

  const fetchTeamMembers = async () => {
    try {
      const { data, error } = await supabase
        .from('team_members')
        .select('id, name, role')
        .order('name', { ascending: true })
      
      if (error) throw error
      console.log('Fetched team members:', data)
      setTeamMembers(data || [])
    } catch (err) {
      console.error('Error fetching team members:', err)
    }
  }

  const fetchBlogs = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select(`
          *,
          author:team_members(name)
        `)
        .order('created_at', { ascending: false })

      if (error) throw error
      setBlogs(data || [])
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-')
      .slice(0, 50)
  }

  const handleTitleChange = (e) => {
    const title = e.target.value
    setFormData({
      ...formData,
      title,
      slug: editingBlog ? formData.slug : generateSlug(title)
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      // Explicitly construct payload with selected author_id
      const blogPayload = {
        title: formData.title,
        slug: formData.slug,
        excerpt: formData.excerpt,
        content: formData.content,
        category: formData.category,
        image_url: formData.image_url,
        read_time: formData.read_time,
        published: formData.published,
        author_id: formData.author_id || null
      }
      
      console.log('Sending blog payload:', blogPayload)

      if (editingBlog) {
        const { error } = await supabase
          .from('blogs')
          .update(blogPayload)
          .eq('id', editingBlog.id)
        
        if (error) {
          console.error('Update error:', error)
          throw error
        }
      } else {
        const { error } = await supabase
          .from('blogs')
          .insert([blogPayload])
        
        if (error) {
          console.error('Insert error:', error)
          throw error
        }
      }

      await fetchBlogs()
      closeModal()
    } catch (err) {
      console.error('Submit error:', err)
      if (err.code === '23505' || err.message?.includes('duplicate') || err.message?.includes('conflict')) {
        setError('A blog post with this slug already exists. Please use a unique slug.')
      } else {
        setError(err.message || 'Failed to save blog post')
      }
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return

    try {
      const { error } = await supabase
        .from('blogs')
        .delete()
        .eq('id', id)
      
      if (error) throw error
      await fetchBlogs()
    } catch (err) {
      setError(err.message)
    }
  }

  const handleTogglePublish = async (blog) => {
    try {
      const { error } = await supabase
        .from('blogs')
        .update({ published: !blog.published })
        .eq('id', blog.id)
      
      if (error) throw error
      await fetchBlogs()
    } catch (err) {
      setError(err.message)
    }
  }

  const openCreateModal = () => {
    setEditingBlog(null)
    setFormData({
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      category: 'E-Commerce',
      image_url: '',
      read_time: '5 min read',
      published: false,
      author_id: ''
    })
    setShowModal(true)
  }

  const openEditModal = (blog) => {
    setEditingBlog(blog)
    setFormData({
      title: blog.title,
      slug: blog.slug,
      excerpt: blog.excerpt || '',
      content: blog.content,
      category: blog.category,
      image_url: blog.image_url || '',
      read_time: blog.read_time || '5 min read',
      published: blog.published,
      author_id: blog.author_id || ''
    })
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setEditingBlog(null)
    setError(null)
  }

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A'
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (loading && blogs.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="flex items-center gap-3 text-[var(--zim-fg)]">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-[var(--zim-black)] border-t-transparent" />
          <span>Loading blogs...</span>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-[var(--zim-black)]">Blog Management</h2>
          <p className="text-sm text-[var(--zim-fg)]">Create, edit, and manage blog posts</p>
        </div>
        <button
          onClick={openCreateModal}
          className="flex items-center gap-2 rounded-lg bg-[var(--zim-green)] px-4 py-2 text-sm font-medium text-[var(--zim-black)] hover:brightness-110 transition-colors"
        >
          <Plus className="h-4 w-4" />
          New Blog Post
        </button>
      </div>

      {error && (
        <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600">
          {error}
        </div>
      )}

      {/* Search */}
      <div className="mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--zim-fg)]" />
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg border border-[var(--zim-border)] bg-white py-2 pl-10 pr-4 text-sm text-[var(--zim-black)] placeholder:text-[var(--zim-fg)]/50 focus:border-[var(--zim-green)] focus:outline-none"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="mb-6 grid grid-cols-3 gap-4">
        <div className="rounded-lg border border-[var(--zim-border)] bg-white p-4">
          <p className="text-2xl font-bold text-[var(--zim-black)]">{blogs.length}</p>
          <p className="text-xs text-[var(--zim-fg)]">Total Posts</p>
        </div>
        <div className="rounded-lg border border-[var(--zim-border)] bg-white p-4">
          <p className="text-2xl font-bold text-[var(--zim-black)]">{blogs.filter(b => b.published).length}</p>
          <p className="text-xs text-[var(--zim-fg)]">Published</p>
        </div>
        <div className="rounded-lg border border-[var(--zim-border)] bg-white p-4">
          <p className="text-2xl font-bold text-[var(--zim-black)]">{blogs.filter(b => !b.published).length}</p>
          <p className="text-xs text-[var(--zim-fg)]">Drafts</p>
        </div>
      </div>

      {/* Blogs Table */}
      <div className="rounded-xl border border-[var(--zim-border)] bg-white overflow-hidden">
        {filteredBlogs.length === 0 ? (
          <div className="p-8 text-center">
            <FileText className="mx-auto mb-3 h-10 w-10 text-[var(--zim-fg)]" />
            <p className="text-[var(--zim-fg)]">No blog posts found.</p>
            <p className="mt-1 text-sm text-[var(--zim-fg)]">Create your first blog post to get started.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-[var(--zim-border)] bg-[var(--zim-bg)]">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[var(--zim-fg)]">Post</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[var(--zim-fg)]">Category</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[var(--zim-fg)]">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[var(--zim-fg)]">Date</th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-[var(--zim-fg)]">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--zim-border)]">
                {filteredBlogs.map((blog) => (
                  <tr key={blog.id} className="hover:bg-[var(--zim-bg)]">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-[var(--zim-card)] overflow-hidden flex-shrink-0">
                          {blog.image_url ? (
                            <img src={blog.image_url} alt={blog.title} className="h-full w-full object-cover" />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center">
                              <FileText className="h-5 w-5 text-[var(--zim-fg)]" />
                            </div>
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="font-medium text-[var(--zim-black)] truncate">{blog.title}</p>
                          <p className="text-xs text-[var(--zim-fg)]">/{blog.slug}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className="inline-flex rounded-full bg-[var(--zim-green)]/10 px-2 py-1 text-xs font-medium text-[var(--zim-green)]">
                        {blog.category}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => handleTogglePublish(blog)}
                        className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium transition-colors ${
                          blog.published
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {blog.published ? (
                          <><Eye className="h-3 w-3" /> Published</>
                        ) : (
                          <><EyeOff className="h-3 w-3" /> Draft</>
                        )}
                      </button>
                    </td>
                    <td className="px-4 py-3 text-sm text-[var(--zim-fg)]">
                      {formatDate(blog.created_at)}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => openEditModal(blog)}
                          className="rounded-lg p-2 text-[var(--zim-fg)] hover:bg-[var(--zim-card)] hover:text-[var(--zim-black)]"
                          title="Edit"
                        >
                          <Pencil className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(blog.id)}
                          className="rounded-lg p-2 text-red-600 hover:bg-red-50"
                          title="Delete"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-[var(--zim-border)] bg-white">
            <div className="border-b border-[var(--zim-border)] px-6 py-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-[var(--zim-black)]">
                {editingBlog ? 'Edit Blog Post' : 'Create New Blog Post'}
              </h3>
              <button
                onClick={closeModal}
                className="rounded-lg p-2 text-[var(--zim-fg)] hover:bg-[var(--zim-card)]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--zim-black)]">Title *</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={handleTitleChange}
                  className="w-full rounded-lg border border-[var(--zim-border)] bg-white px-4 py-2 text-sm text-[var(--zim-black)] focus:border-[var(--zim-green)] focus:outline-none"
                  placeholder="Enter blog title"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--zim-black)]">Slug *</label>
                <input
                  type="text"
                  required
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  className="w-full rounded-lg border border-[var(--zim-border)] bg-white px-4 py-2 text-sm text-[var(--zim-black)] focus:border-[var(--zim-green)] focus:outline-none"
                  placeholder="url-friendly-slug"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[var(--zim-black)]">Category *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full rounded-lg border border-[var(--zim-border)] bg-white px-4 py-2 text-sm text-[var(--zim-black)] focus:border-[var(--zim-green)] focus:outline-none"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[var(--zim-black)]">Read Time</label>
                  <input
                    type="text"
                    value={formData.read_time}
                    onChange={(e) => setFormData({ ...formData, read_time: e.target.value })}
                    className="w-full rounded-lg border border-[var(--zim-border)] bg-white px-4 py-2 text-sm text-[var(--zim-black)] focus:border-[var(--zim-green)] focus:outline-none"
                    placeholder="5 min read"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--zim-black)]">Author</label>
                <select
                  value={formData.author_id}
                  onChange={(e) => setFormData({ ...formData, author_id: e.target.value })}
                  className="w-full rounded-lg border border-[var(--zim-border)] bg-white px-4 py-2 text-sm text-[var(--zim-black)] focus:border-[var(--zim-green)] focus:outline-none"
                >
                  <option value="">Select an author (optional)</option>
                  {teamMembers.map(member => (
                    <option key={member.id} value={member.id}>
                      {member.name} - {member.role}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--zim-black)]">Image URL</label>
                <input
                  type="url"
                  value={formData.image_url}
                  onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                  className="w-full rounded-lg border border-[var(--zim-border)] bg-white px-4 py-2 text-sm text-[var(--zim-black)] focus:border-[var(--zim-green)] focus:outline-none"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--zim-black)]">Excerpt</label>
                <textarea
                  rows={2}
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  className="w-full rounded-lg border border-[var(--zim-border)] bg-white px-4 py-2 text-sm text-[var(--zim-black)] focus:border-[var(--zim-green)] focus:outline-none resize-none"
                  placeholder="Brief summary of the blog post"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--zim-black)]">
                  Content *
                  <span className="text-xs font-normal text-[var(--zim-fg)] ml-2">(Markdown supported)</span>
                </label>
                <textarea
                  rows={12}
                  required
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="w-full rounded-lg border border-[var(--zim-border)] bg-white px-4 py-2 text-sm text-[var(--zim-black)] focus:border-[var(--zim-green)] focus:outline-none resize-none font-mono"
                  placeholder="# Heading\n\nWrite your blog content here...\n\n## Formatting Tips:\n- **bold** for emphasis\n- *italic* for style\n- [links](url)\n- Lists with - or 1.\n\nUse # for headings, ** for bold, etc."
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="published"
                  checked={formData.published}
                  onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                  className="h-4 w-4 rounded border-[var(--zim-border)] text-[var(--zim-green)] focus:ring-[var(--zim-green)]"
                />
                <label htmlFor="published" className="text-sm font-medium text-[var(--zim-black)]">
                  Publish immediately
                </label>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-[var(--zim-border)]">
                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded-lg border border-[var(--zim-border)] bg-white px-4 py-2 text-sm font-medium text-[var(--zim-black)] hover:bg-[var(--zim-card)]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-lg bg-[var(--zim-green)] px-4 py-2 text-sm font-medium text-[var(--zim-black)] hover:brightness-110 disabled:opacity-50"
                >
                  {loading ? 'Saving...' : editingBlog ? 'Update Post' : 'Create Post'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default BlogManagement
