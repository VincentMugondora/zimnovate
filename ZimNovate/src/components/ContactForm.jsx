import React, { useMemo, useState } from 'react'
import axios from 'axios'

const initial = {
  name: '',
  business: '',
  email: '',
  phone: '',
  projectType: 'Web Development',
  budgetRange: 'Not sure',
  message: '',
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const ContactForm = () => {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const projectTypes = useMemo(
    () => [
      'Branding & Digital Identity',
      'Web Development',
      'Full-Stack Solution',
      'Mobile Development',
      'Consulting',
      'Other',
    ],
    [],
  )

  const budgetRanges = useMemo(
    () => ['Not sure', 'Under $500', '$500–$1,500', '$1,500–$5,000', '$5,000+'],
    [],
  )

  const validate = (v) => {
    const next = {}
    if (!v.name.trim()) next.name = 'Full name is required.'
    if (!v.email.trim()) next.email = 'Email is required.'
    else if (!emailRegex.test(v.email)) next.email = 'Enter a valid email address.'
    if (!v.phone.trim()) next.phone = 'Phone is required.'
    if (!v.message.trim()) next.message = 'Tell us about your project.'
    return next
  }

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return

    try {
      setStatus({ state: 'submitting', message: '' })
      await axios.post('/api/contact', values)
      setStatus({ state: 'success', message: 'Message sent! We will reply shortly.' })
      setValues(initial)
    } catch (err) {
      const msg =
        err?.response?.data?.message ||
        'Something went wrong sending your message. Please try again.'
      setStatus({ state: 'error', message: msg })
    }
  }

  const inputBase =
    'w-full rounded-md border border-[var(--zim-border)] bg-[var(--zim-bg)] px-3 py-2 text-sm text-[var(--zim-fg)] placeholder:text-[var(--zim-fg)]/40 focus:outline-none focus:ring-2 focus:ring-[var(--zim-blue)]'

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <label className="text-sm font-semibold" htmlFor="name">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            value={values.name}
            onChange={onChange}
            className={inputBase}
            autoComplete="name"
            required
          />
          {errors.name ? (
            <div className="text-xs font-semibold text-red-500">{errors.name}</div>
          ) : null}
        </div>

        <div className="space-y-1">
          <label className="text-sm font-semibold" htmlFor="business">
            Business (optional)
          </label>
          <input
            id="business"
            name="business"
            value={values.business}
            onChange={onChange}
            className={inputBase}
            autoComplete="organization"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <label className="text-sm font-semibold" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            value={values.email}
            onChange={onChange}
            className={inputBase}
            autoComplete="email"
            inputMode="email"
            required
          />
          {errors.email ? (
            <div className="text-xs font-semibold text-red-500">{errors.email}</div>
          ) : null}
        </div>

        <div className="space-y-1">
          <label className="text-sm font-semibold" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            value={values.phone}
            onChange={onChange}
            className={inputBase}
            autoComplete="tel"
            inputMode="tel"
            required
          />
          {errors.phone ? (
            <div className="text-xs font-semibold text-red-500">{errors.phone}</div>
          ) : null}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <label className="text-sm font-semibold" htmlFor="projectType">
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            value={values.projectType}
            onChange={onChange}
            className={inputBase}
          >
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-semibold" htmlFor="budgetRange">
            Budget Range
          </label>
          <select
            id="budgetRange"
            name="budgetRange"
            value={values.budgetRange}
            onChange={onChange}
            className={inputBase}
          >
            {budgetRanges.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-sm font-semibold" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={onChange}
          rows={5}
          className={inputBase}
          required
        />
        {errors.message ? (
          <div className="text-xs font-semibold text-red-500">{errors.message}</div>
        ) : null}
      </div>

      {status.state !== 'idle' && status.message ? (
        <div
          role="status"
          className={`rounded-md border px-4 py-3 text-sm ${
            status.state === 'success'
              ? 'border-[var(--zim-green)] bg-[var(--zim-green)]/10 text-[var(--zim-fg)]'
              : status.state === 'error'
                ? 'border-red-500 bg-red-500/10 text-[var(--zim-fg)]'
                : 'border-[var(--zim-border)] bg-[var(--zim-card)]'
          }`}
        >
          {status.message}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status.state === 'submitting'}
        className="inline-flex w-full items-center justify-center rounded-md bg-[var(--zim-blue)] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status.state === 'submitting' ? 'Sending…' : 'Submit'}
      </button>
    </form>
  )
}

export default ContactForm
