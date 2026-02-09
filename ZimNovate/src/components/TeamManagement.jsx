import React, { useState, useEffect } from 'react'
import { Plus, Pencil, Trash2, Search, X, Users, Linkedin, Twitter, Globe } from 'lucide-react'
import { supabase } from '../lib/supabase.js'

const TeamManagement = () => {
  const [teamMembers, setTeamMembers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [editingMember, setEditingMember] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    role: '',
    tagline: '',
    bio: '',
    image_url: '',
    linkedin_url: '',
    twitter_url: '',
    portfolio_url: ''
  })

  useEffect(() => {
    fetchTeamMembers()
  }, [])

  const fetchTeamMembers = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('team_members')
        .select('*')
        .order('created_at', { ascending: false })
      if (error) throw error
      setTeamMembers(data || [])
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const generateSlug = (name) => {
    return name.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-').slice(0, 50)
  }

  const handleNameChange = (e) => {
    const name = e.target.value
    setFormData({ ...formData, name, slug: editingMember ? formData.slug : generateSlug(name) })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      if (editingMember) {
        const { error } = await supabase.from('team_members').update(formData).eq('id', editingMember.id)
        if (error) throw error
      } else {
        const { error } = await supabase.from('team_members').insert([formData])
        if (error) throw error
      }
      await fetchTeamMembers()
      closeModal()
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Delete this team member?')) return
    try {
      const { error } = await supabase.from('team_members').delete().eq('id', id)
      if (error) throw error
      await fetchTeamMembers()
    } catch (err) {
      setError(err.message)
    }
  }

  const openCreateModal = () => {
    setEditingMember(null)
    setFormData({ name: '', slug: '', role: '', tagline: '', bio: '', image_url: '', linkedin_url: '', twitter_url: '', portfolio_url: '' })
    setShowModal(true)
  }

  const openEditModal = (member) => {
    setEditingMember(member)
    setFormData({
      name: member.name,
      slug: member.slug,
      role: member.role,
      tagline: member.tagline || '',
      bio: member.bio || '',
      image_url: member.image_url || '',
      linkedin_url: member.linkedin_url || '',
      twitter_url: member.twitter_url || '',
      portfolio_url: member.portfolio_url || ''
    })
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setEditingMember(null)
    setError(null)
  }

  const filteredMembers = teamMembers.filter(m =>
    m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.role.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-[var(--zim-black)]">Team Management</h2>
          <p className="text-sm text-[var(--zim-fg)]">Add and manage team members</p>
        </div>
        <button onClick={openCreateModal} className="flex items-center gap-2 rounded-lg bg-[var(--zim-green)] px-4 py-2 text-sm font-medium text-[var(--zim-black)] hover:brightness-110">
          <Plus className="h-4 w-4" /> Add Member
        </button>
      </div>

      {error && <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600">{error}</div>}

      <div className="mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--zim-fg)]" />
          <input type="text" placeholder="Search team members..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full rounded-lg border border-[var(--zim-border)] bg-white py-2 pl-10 pr-4 text-sm text-[var(--zim-black)] placeholder:text-[var(--zim-fg)]/50 focus:border-[var(--zim-green)] focus:outline-none" />
        </div>
      </div>

      <div className="rounded-xl border border-[var(--zim-border)] bg-white overflow-hidden">
        {filteredMembers.length === 0 ? (
          <div className="p-8 text-center">
            <Users className="mx-auto mb-3 h-10 w-10 text-[var(--zim-fg)]" />
            <p className="text-[var(--zim-fg)]">No team members found.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-[var(--zim-border)] bg-[var(--zim-bg)]">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[var(--zim-fg)]">Member</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[var(--zim-fg)]">Role</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[var(--zim-fg)]">Links</th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-[var(--zim-fg)]">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--zim-border)]">
                {filteredMembers.map((member) => (
                  <tr key={member.id} className="hover:bg-[var(--zim-bg)]">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-[var(--zim-card)] overflow-hidden">
                          {member.image_url ? <img src={member.image_url} alt={member.name} className="h-full w-full object-cover" /> : <div className="flex h-full w-full items-center justify-center bg-[var(--zim-green)]/20"><Users className="h-5 w-5 text-[var(--zim-green)]" /></div>}
                        </div>
                        <div>
                          <p className="font-medium text-[var(--zim-black)]">{member.name}</p>
                          <p className="text-xs text-[var(--zim-fg)]">/{member.slug}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-[var(--zim-fg)]">{member.role}</td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        {member.linkedin_url && <a href={member.linkedin_url} target="_blank" rel="noopener noreferrer" className="text-[var(--zim-fg)] hover:text-[var(--zim-black)]"><Linkedin className="h-4 w-4" /></a>}
                        {member.twitter_url && <a href={member.twitter_url} target="_blank" rel="noopener noreferrer" className="text-[var(--zim-fg)] hover:text-[var(--zim-black)]"><Twitter className="h-4 w-4" /></a>}
                        {member.portfolio_url && <a href={member.portfolio_url} target="_blank" rel="noopener noreferrer" className="text-[var(--zim-fg)] hover:text-[var(--zim-black)]"><Globe className="h-4 w-4" /></a>}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-1">
                        <button onClick={() => openEditModal(member)} className="rounded-lg p-2 text-[var(--zim-fg)] hover:bg-[var(--zim-card)] hover:text-[var(--zim-black)]" title="Edit"><Pencil className="h-4 w-4" /></button>
                        <button onClick={() => handleDelete(member.id)} className="rounded-lg p-2 text-red-600 hover:bg-red-50" title="Delete"><Trash2 className="h-4 w-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-[var(--zim-border)] bg-white">
            <div className="border-b border-[var(--zim-border)] px-6 py-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-[var(--zim-black)]">{editingMember ? 'Edit Team Member' : 'Add Team Member'}</h3>
              <button onClick={closeModal} className="rounded-lg p-2 text-[var(--zim-fg)] hover:bg-[var(--zim-card)]"><X className="h-5 w-5" /></button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[var(--zim-black)]">Name *</label>
                  <input type="text" required value={formData.name} onChange={handleNameChange} className="w-full rounded-lg border border-[var(--zim-border)] bg-white px-4 py-2 text-sm text-[var(--zim-black)] focus:border-[var(--zim-green)] focus:outline-none" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[var(--zim-black)]">Slug *</label>
                  <input type="text" required value={formData.slug} onChange={(e) => setFormData({ ...formData, slug: e.target.value })} className="w-full rounded-lg border border-[var(--zim-border)] bg-white px-4 py-2 text-sm text-[var(--zim-black)] focus:border-[var(--zim-green)] focus:outline-none" />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--zim-black)]">Role *</label>
                <input type="text" required value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} className="w-full rounded-lg border border-[var(--zim-border)] bg-white px-4 py-2 text-sm text-[var(--zim-black)] focus:border-[var(--zim-green)] focus:outline-none" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--zim-black)]">Tagline</label>
                <input type="text" value={formData.tagline} onChange={(e) => setFormData({ ...formData, tagline: e.target.value })} className="w-full rounded-lg border border-[var(--zim-border)] bg-white px-4 py-2 text-sm text-[var(--zim-black)] focus:border-[var(--zim-green)] focus:outline-none" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--zim-black)]">Bio</label>
                <textarea rows={3} value={formData.bio} onChange={(e) => setFormData({ ...formData, bio: e.target.value })} className="w-full rounded-lg border border-[var(--zim-border)] bg-white px-4 py-2 text-sm text-[var(--zim-black)] focus:border-[var(--zim-green)] focus:outline-none resize-none" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--zim-black)]">Image URL</label>
                <input type="url" value={formData.image_url} onChange={(e) => setFormData({ ...formData, image_url: e.target.value })} className="w-full rounded-lg border border-[var(--zim-border)] bg-white px-4 py-2 text-sm text-[var(--zim-black)] focus:border-[var(--zim-green)] focus:outline-none" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[var(--zim-black)]">LinkedIn</label>
                  <input type="url" value={formData.linkedin_url} onChange={(e) => setFormData({ ...formData, linkedin_url: e.target.value })} className="w-full rounded-lg border border-[var(--zim-border)] bg-white px-4 py-2 text-sm text-[var(--zim-black)] focus:border-[var(--zim-green)] focus:outline-none" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[var(--zim-black)]">Twitter</label>
                  <input type="url" value={formData.twitter_url} onChange={(e) => setFormData({ ...formData, twitter_url: e.target.value })} className="w-full rounded-lg border border-[var(--zim-border)] bg-white px-4 py-2 text-sm text-[var(--zim-black)] focus:border-[var(--zim-green)] focus:outline-none" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[var(--zim-black)]">Portfolio</label>
                  <input type="url" value={formData.portfolio_url} onChange={(e) => setFormData({ ...formData, portfolio_url: e.target.value })} className="w-full rounded-lg border border-[var(--zim-border)] bg-white px-4 py-2 text-sm text-[var(--zim-black)] focus:border-[var(--zim-green)] focus:outline-none" />
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-4 border-t border-[var(--zim-border)]">
                <button type="button" onClick={closeModal} className="rounded-lg border border-[var(--zim-border)] bg-white px-4 py-2 text-sm font-medium text-[var(--zim-black)] hover:bg-[var(--zim-card)]">Cancel</button>
                <button type="submit" disabled={loading} className="rounded-lg bg-[var(--zim-green)] px-4 py-2 text-sm font-medium text-[var(--zim-black)] hover:brightness-110 disabled:opacity-50">{loading ? 'Saving...' : editingMember ? 'Update' : 'Create'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default TeamManagement
