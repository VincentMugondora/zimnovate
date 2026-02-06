import { supabase } from '../lib/supabase'

// Team Members
export async function getTeamMembers() {
  try {
    const { data, error } = await supabase
      .from('team_members')
      .select(`
        *,
        team_member_skills (
          skills (*)
        ),
        team_member_projects (
          projects (*),
          role,
          contribution_description
        )
      `)
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  } catch (error) {
    console.error('Error fetching team members:', error)
    return []
  }
}

export async function getTeamMemberBySlug(slug) {
  try {
    const { data, error } = await supabase
      .from('team_members')
      .select(`
        *,
        team_member_skills (
          skills (*)
        ),
        team_member_projects (
          projects (*),
          role,
          contribution_description
        )
      `)
      .eq('slug', slug)
      .single()
    
    if (error) throw error
    return data
  } catch (error) {
    console.error('Error fetching team member:', error)
    return null
  }
}

// Projects
export async function getProjects() {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
}

export async function getProjectBySlug(slug) {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('slug', slug)
      .single()
    
    if (error) throw error
    return data
  } catch (error) {
    console.error('Error fetching project:', error)
    return null
  }
}

// Contact Form
export async function submitContactForm(formData) {
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([{
        name: formData.name,
        email: formData.email,
        company: formData.company || null,
        message: formData.message,
        submission_type: formData.submission_type || 'general'
      }])
      .select()
    
    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return { success: false, error: error.message }
  }
}

// Partnership Requests
export async function submitPartnershipRequest(formData) {
  try {
    const { data, error } = await supabase
      .from('partnership_requests')
      .insert([{
        company_name: formData.companyName,
        contact_name: formData.contactName,
        email: formData.email,
        phone: formData.phone || null,
        partnership_type: formData.partnershipType,
        project_description: formData.projectDescription,
        budget_range: formData.budgetRange,
        timeline: formData.timeline
      }])
      .select()
    
    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error submitting partnership request:', error)
    return { success: false, error: error.message }
  }
}

// Skills
export async function getSkills() {
  try {
    const { data, error } = await supabase
      .from('skills')
      .select('*')
      .order('name', { ascending: true })
    
    if (error) throw error
    return data
  } catch (error) {
    console.error('Error fetching skills:', error)
    return []
  }
}
