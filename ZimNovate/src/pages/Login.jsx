import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import { Lock, Mail, Eye, EyeOff, AlertCircle } from 'lucide-react'
import { supabase } from '../lib/supabase.js'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    // Check if already logged in
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (session) {
        navigate('/dashboard')
      }
    }
    checkSession()
  }, [navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (error) throw error

      if (data.session) {
        navigate('/dashboard')
      }
    } catch (err) {
      setError(err.message || 'Invalid login credentials')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Helmet>
        <title>Admin Dashboard Login | Secure Access | Zimnovate Zimbabwe</title>
        <meta name="description" content="Secure login portal for Zimnovate administrators. Access the dashboard to manage website content, blog posts, team members, and view analytics." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="flex min-h-screen items-center justify-center bg-[var(--zim-bg)] px-4">
        <div className="w-full max-w-md">
          <div className="rounded-3xl border border-[var(--zim-border)] bg-white p-8 shadow-sm">
            <div className="mb-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--zim-green)]">
                <Lock className="h-8 w-8 text-[var(--zim-black)]" />
              </div>
              <h1 className="text-2xl font-bold text-[var(--zim-black)]">Admin Login</h1>
              <p className="mt-2 text-sm text-[var(--zim-fg)]">
                Sign in to access the dashboard
              </p>
            </div>

            {error && (
              <div className="mb-6 flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-[var(--zim-black)]">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--zim-fg)]" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full rounded-xl border border-[var(--zim-border)] bg-white py-3 pl-12 pr-4 text-sm text-[var(--zim-black)] placeholder:text-[var(--zim-fg)]/50 focus:border-[var(--zim-green)] focus:outline-none"
                    placeholder="admin@zimnovate.co.zw"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="mb-2 block text-sm font-medium text-[var(--zim-black)]">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--zim-fg)]" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full rounded-xl border border-[var(--zim-border)] bg-white py-3 pl-12 pr-12 text-sm text-[var(--zim-black)] placeholder:text-[var(--zim-fg)]/50 focus:border-[var(--zim-green)] focus:outline-none"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--zim-fg)] hover:text-[var(--zim-black)]"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-[var(--zim-black)] py-3 text-sm font-semibold text-white hover:bg-[var(--zim-black)]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-[var(--zim-fg)]">
              <p>Need access? Contact your administrator.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
