import { useEffect } from 'react'
import { supabase } from '../lib/supabase.js'

/**
 * Hook to track page views
 * Records each page view to the page_views table in Supabase
 */
export const usePageViews = () => {
  useEffect(() => {
    const trackView = async () => {
      try {
        // Get current page path
        const path = window.location.pathname
        
        // Get session to check if user is authenticated (don't track dashboard views)
        const { data: { session } } = await supabase.auth.getSession()
        
        // Don't track views for dashboard/admin pages
        if (path.startsWith('/dashboard') || path.startsWith('/login')) {
          return
        }
        
        // Insert view record
        await supabase.from('page_views').insert({
          page_path: path,
          user_agent: navigator.userAgent,
          referrer: document.referrer || null,
          is_authenticated: !!session
        })
      } catch (error) {
        // Silently fail - don't break the app if tracking fails
        console.error('Page view tracking error:', error)
      }
    }

    // Track view on mount
    trackView()
  }, []) // Empty dependency array - track once per page load
}

/**
 * Fetch total page views count from Supabase
 * @returns {Promise<number>} Total view count
 */
export const fetchTotalViews = async () => {
  try {
    // Get count of all page views
    const { count, error } = await supabase
      .from('page_views')
      .select('*', { count: 'exact', head: true })
    
    if (error) throw error
    
    return count || 0
  } catch (error) {
    console.error('Error fetching total views:', error)
    return 0
  }
}

/**
 * Fetch views for a specific page
 * @param {string} path - Page path
 * @returns {Promise<number>} View count for the page
 */
export const fetchPageViews = async (path) => {
  try {
    const { count, error } = await supabase
      .from('page_views')
      .select('*', { count: 'exact', head: true })
      .eq('page_path', path)
    
    if (error) throw error
    
    return count || 0
  } catch (error) {
    console.error('Error fetching page views:', error)
    return 0
  }
}

/**
 * Get views statistics (total, unique pages, today, this week)
 * @returns {Promise<Object>} View statistics
 */
export const fetchViewStats = async () => {
  try {
    // Get total views
    const { count: totalViews } = await supabase
      .from('page_views')
      .select('*', { count: 'exact', head: true })

    // Get today's views
    const today = new Date().toISOString().split('T')[0]
    const { count: todayViews } = await supabase
      .from('page_views')
      .select('*', { count: 'exact', head: true })
      .gte('created_at', today)

    // Get unique pages count
    const { data: uniquePages } = await supabase
      .from('page_views')
      .select('page_path')

    const uniquePageCount = uniquePages 
      ? new Set(uniquePages.map(v => v.page_path)).size 
      : 0

    return {
      totalViews: totalViews || 0,
      todayViews: todayViews || 0,
      uniquePages: uniquePageCount
    }
  } catch (error) {
    console.error('Error fetching view stats:', error)
    return {
      totalViews: 0,
      todayViews: 0,
      uniquePages: 0
    }
  }
}
