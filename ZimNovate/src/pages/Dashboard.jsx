import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { 
  LayoutDashboard, 
  Users, 
  MessageSquare, 
  Handshake, 
  TrendingUp, 
  Eye,
  Mail,
  Phone,
  Building2,
  Calendar,
  ExternalLink,
  RefreshCw,
  AlertCircle,
  LogOut
} from 'lucide-react'
import { supabase } from '../lib/supabase.js'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('overview')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [stats, setStats] = useState({
    teamMembers: 0,
    contactSubmissions: 0,
    partnershipRequests: 0,
    totalViews: 0
  })
  const [contactSubmissions, setContactSubmissions] = useState([])
  const [partnershipRequests, setPartnershipRequests] = useState([])
  const [teamMembers, setTeamMembers] = useState([])

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    setLoading(true)
    setError(null)
    
    try {
      // Fetch team members
      const { data: teamData, error: teamError } = await supabase
        .from('team_members')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (teamError) throw teamError
      
      // Fetch contact submissions
      const { data: contactData, error: contactError } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(50)
      
      if (contactError) throw contactError
      
      // Fetch partnership requests
      const { data: partnerData, error: partnerError } = await supabase
        .from('partnership_requests')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(50)
      
      if (partnerError) throw partnerError
      
      setTeamMembers(teamData || [])
      setContactSubmissions(contactData || [])
      setPartnershipRequests(partnerData || [])
      setStats({
        teamMembers: teamData?.length || 0,
        contactSubmissions: contactData?.length || 0,
        partnershipRequests: partnerData?.length || 0,
        totalViews: 1247 // Placeholder - would come from analytics
      })
    } catch (err) {
      setError(err.message)
      console.error('Dashboard fetch error:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/login')
  }

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A'
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const StatCard = ({ icon: Icon, label, value, color }) => (
    <div className="rounded-2xl border border-[var(--zim-border)] bg-white p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-[var(--zim-fg)]">{label}</p>
          <p className="mt-2 text-3xl font-bold text-[var(--zim-black)]">{value}</p>
        </div>
        <div className={`rounded-xl p-3 ${color}`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
    </div>
  )

  const TabButton = ({ id, label, icon: Icon, count }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
        activeTab === id
          ? 'bg-[var(--zim-green)] text-[var(--zim-black)]'
          : 'text-[var(--zim-fg)] hover:bg-[var(--zim-card)]'
      }`}
    >
      <Icon className="h-4 w-4" />
      {label}
      {count > 0 && (
        <span className="ml-1 rounded-full bg-[var(--zim-black)] px-2 py-0.5 text-xs text-white">
          {count}
        </span>
      )}
    </button>
  )

  if (loading) {
    return (
      <>
        <Helmet>
          <title>Dashboard | Zimnovate</title>
        </Helmet>
        <div className="flex min-h-screen items-center justify-center">
          <div className="flex items-center gap-3 text-[var(--zim-fg)]">
            <RefreshCw className="h-5 w-5 animate-spin" />
            <span>Loading dashboard...</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Helmet>
        <title>Dashboard | Zimnovate</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-screen bg-[var(--zim-bg)]">
        {/* Header */}
        <div className="border-b border-[var(--zim-border)] bg-white">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-[var(--zim-green)] p-2">
                  <LayoutDashboard className="h-6 w-6 text-[var(--zim-black)]" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-[var(--zim-black)]">Dashboard</h1>
                  <p className="text-sm text-[var(--zim-fg)]">Manage your Zimnovate data</p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 rounded-lg border border-[var(--zim-border)] bg-white px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {error && (
            <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4">
              <div className="flex items-center gap-2 text-red-600">
                <AlertCircle className="h-5 w-5" />
                <p>Error loading data: {error}</p>
              </div>
            </div>
          )}

          {/* Stats Grid */}
          {activeTab === 'overview' && (
            <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard
                icon={Users}
                label="Team Members"
                value={stats.teamMembers}
                color="bg-blue-500"
              />
              <StatCard
                icon={MessageSquare}
                label="Contact Submissions"
                value={stats.contactSubmissions}
                color="bg-green-500"
              />
              <StatCard
                icon={Handshake}
                label="Partnership Requests"
                value={stats.partnershipRequests}
                color="bg-purple-500"
              />
              <StatCard
                icon={Eye}
                label="Total Views"
                value={stats.totalViews}
                color="bg-orange-500"
              />
            </div>
          )}

          {/* Tabs */}
          <div className="mb-6 flex flex-wrap gap-2">
            <TabButton id="overview" label="Overview" icon={LayoutDashboard} />
            <TabButton id="contacts" label="Contacts" icon={Mail} count={contactSubmissions.length} />
            <TabButton id="partnerships" label="Partnerships" icon={Handshake} count={partnershipRequests.length} />
            <TabButton id="team" label="Team" icon={Users} count={teamMembers.length} />
          </div>

          {/* Content */}
          <div className="rounded-2xl border border-[var(--zim-border)] bg-white">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="p-6">
                <h2 className="mb-4 text-lg font-semibold text-[var(--zim-black)]">Recent Activity</h2>
                
                <div className="space-y-4">
                  {/* Recent Contacts */}
                  <div>
                    <h3 className="mb-3 text-sm font-medium text-[var(--zim-fg)]">Latest Contact Submissions</h3>
                    {contactSubmissions.slice(0, 3).length === 0 ? (
                      <p className="text-sm text-[var(--zim-fg)]">No contact submissions yet.</p>
                    ) : (
                      <div className="space-y-2">
                        {contactSubmissions.slice(0, 3).map((submission) => (
                          <div key={submission.id} className="flex items-center justify-between rounded-lg border border-[var(--zim-border)] p-3">
                            <div className="flex items-center gap-3">
                              <div className="rounded-full bg-green-100 p-2">
                                <Mail className="h-4 w-4 text-green-600" />
                              </div>
                              <div>
                                <p className="font-medium text-[var(--zim-black)]">{submission.name}</p>
                                <p className="text-sm text-[var(--zim-fg)]">{submission.email}</p>
                              </div>
                            </div>
                            <span className="text-xs text-[var(--zim-fg)]">{formatDate(submission.created_at)}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Recent Partnerships */}
                  <div>
                    <h3 className="mb-3 text-sm font-medium text-[var(--zim-fg)]">Latest Partnership Requests</h3>
                    {partnershipRequests.slice(0, 3).length === 0 ? (
                      <p className="text-sm text-[var(--zim-fg)]">No partnership requests yet.</p>
                    ) : (
                      <div className="space-y-2">
                        {partnershipRequests.slice(0, 3).map((request) => (
                          <div key={request.id} className="flex items-center justify-between rounded-lg border border-[var(--zim-border)] p-3">
                            <div className="flex items-center gap-3">
                              <div className="rounded-full bg-purple-100 p-2">
                                <Handshake className="h-4 w-4 text-purple-600" />
                              </div>
                              <div>
                                <p className="font-medium text-[var(--zim-black)]">{request.company_name}</p>
                                <p className="text-sm text-[var(--zim-fg)]">{request.partnership_type}</p>
                              </div>
                            </div>
                            <span className="text-xs text-[var(--zim-fg)]">{formatDate(request.created_at)}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Contacts Tab */}
            {activeTab === 'contacts' && (
              <div className="p-6">
                <h2 className="mb-4 text-lg font-semibold text-[var(--zim-black)]">Contact Submissions</h2>
                
                {contactSubmissions.length === 0 ? (
                  <div className="rounded-lg border border-dashed border-[var(--zim-border)] p-8 text-center">
                    <Mail className="mx-auto mb-3 h-10 w-10 text-[var(--zim-fg)]" />
                    <p className="text-[var(--zim-fg)]">No contact submissions yet.</p>
                    <p className="mt-1 text-sm text-[var(--zim-fg)]">Submissions will appear here when users fill out the contact form.</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="border-b border-[var(--zim-border)]">
                        <tr>
                          <th className="pb-3 text-left text-sm font-medium text-[var(--zim-fg)]">Name</th>
                          <th className="pb-3 text-left text-sm font-medium text-[var(--zim-fg)]">Email</th>
                          <th className="pb-3 text-left text-sm font-medium text-[var(--zim-fg)]">Company</th>
                          <th className="pb-3 text-left text-sm font-medium text-[var(--zim-fg)]">Type</th>
                          <th className="pb-3 text-left text-sm font-medium text-[var(--zim-fg)]">Date</th>
                          <th className="pb-3 text-left text-sm font-medium text-[var(--zim-fg)]">Message</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[var(--zim-border)]">
                        {contactSubmissions.map((submission) => (
                          <tr key={submission.id}>
                            <td className="py-3 text-sm font-medium text-[var(--zim-black)]">{submission.name}</td>
                            <td className="py-3 text-sm text-[var(--zim-fg)]">{submission.email}</td>
                            <td className="py-3 text-sm text-[var(--zim-fg)]">{submission.company || '-'}</td>
                            <td className="py-3 text-sm text-[var(--zim-fg)]">{submission.submission_type}</td>
                            <td className="py-3 text-sm text-[var(--zim-fg)]">{formatDate(submission.created_at)}</td>
                            <td className="py-3 text-sm text-[var(--zim-fg)] max-w-xs truncate">{submission.message}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {/* Partnerships Tab */}
            {activeTab === 'partnerships' && (
              <div className="p-6">
                <h2 className="mb-4 text-lg font-semibold text-[var(--zim-black)]">Partnership Requests</h2>
                
                {partnershipRequests.length === 0 ? (
                  <div className="rounded-lg border border-dashed border-[var(--zim-border)] p-8 text-center">
                    <Handshake className="mx-auto mb-3 h-10 w-10 text-[var(--zim-fg)]" />
                    <p className="text-[var(--zim-fg)]">No partnership requests yet.</p>
                    <p className="mt-1 text-sm text-[var(--zim-fg)]">Requests will appear here when users submit the partnership form.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {partnershipRequests.map((request) => (
                      <div key={request.id} className="rounded-lg border border-[var(--zim-border)] p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="rounded-full bg-purple-100 p-2">
                              <Building2 className="h-5 w-5 text-purple-600" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-[var(--zim-black)]">{request.company_name}</h3>
                              <p className="text-sm text-[var(--zim-fg)]">{request.partnership_type}</p>
                            </div>
                          </div>
                          <span className="text-xs text-[var(--zim-fg)]">{formatDate(request.created_at)}</span>
                        </div>
                        
                        <div className="mt-3 grid gap-2 text-sm">
                          <div className="flex items-center gap-2 text-[var(--zim-fg)]">
                            <Mail className="h-4 w-4" />
                            {request.email}
                          </div>
                          {request.phone && (
                            <div className="flex items-center gap-2 text-[var(--zim-fg)]">
                              <Phone className="h-4 w-4" />
                              {request.phone}
                            </div>
                          )}
                        </div>
                        
                        {request.project_description && (
                          <div className="mt-3 rounded-lg bg-[var(--zim-bg)] p-3">
                            <p className="text-sm text-[var(--zim-fg)]">{request.project_description}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Team Tab */}
            {activeTab === 'team' && (
              <div className="p-6">
                <h2 className="mb-4 text-lg font-semibold text-[var(--zim-black)]">Team Members</h2>
                
                {teamMembers.length === 0 ? (
                  <div className="rounded-lg border border-dashed border-[var(--zim-border)] p-8 text-center">
                    <Users className="mx-auto mb-3 h-10 w-10 text-[var(--zim-fg)]" />
                    <p className="text-[var(--zim-fg)]">No team members found.</p>
                  </div>
                ) : (
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {teamMembers.map((member) => (
                      <div key={member.id} className="rounded-lg border border-[var(--zim-border)] p-4">
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 rounded-full bg-[var(--zim-card)] overflow-hidden">
                            {member.image_url ? (
                              <img 
                                src={member.image_url} 
                                alt={member.name}
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <div className="flex h-full w-full items-center justify-center bg-[var(--zim-green)]/20">
                                <Users className="h-6 w-6 text-[var(--zim-green)]" />
                              </div>
                            )}
                          </div>
                          <div>
                            <h3 className="font-semibold text-[var(--zim-black)]">{member.name}</h3>
                            <p className="text-sm text-[var(--zim-fg)]">{member.role}</p>
                          </div>
                        </div>
                        
                        <div className="mt-3 flex gap-2">
                          {member.linkedin_url && (
                            <a 
                              href={member.linkedin_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rounded-lg bg-[var(--zim-card)] p-2 hover:bg-[var(--zim-green)]/20 transition-colors"
                            >
                              <ExternalLink className="h-4 w-4 text-[var(--zim-fg)]" />
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
