import React from 'react'
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import ContactForm from '../components/ContactForm.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import PageHero from '../components/PageHero.jsx'

const Contact = () => {
  return (
    <div>
      <PageHero 
        title="CONTACT US"
        subtitle="Let's talk about your next project. We'll respond within 24 hours."
        height="min-h-[45vh]"
      />
      <section className="mx-auto max-w-7xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s talk about your next project"
          subtitle="Send a message and we’ll reply with next steps. Your submission will be stored securely (MongoDB) and protected by rate limiting + validation."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-[var(--zim-border)] bg-[var(--zim-card)] p-6 md:p-8">
            <div className="text-sm font-semibold">Contact form</div>
            <div className="mt-4">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-[var(--zim-border)] bg-[var(--zim-card)] p-6 md:p-8">
              <div className="text-sm font-semibold">Direct contact</div>
              <div className="mt-4 grid gap-3 text-sm text-[var(--zim-fg)]/80">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-[var(--zim-blue)]" aria-hidden="true" />
                  <span>hello@zimnovate.co.zw</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-[var(--zim-green)]" aria-hidden="true" />
                  <span>+263 00 000 0000</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-[var(--zim-orange)]" aria-hidden="true" />
                  <span>Harare, Zimbabwe</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--zim-border)] bg-[var(--zim-bg)] p-6 md:p-8">
              <div className="text-sm font-semibold">WhatsApp CTA</div>
              <p className="mt-2 text-sm text-[var(--zim-fg)]/75">
                For quick questions and faster coordination, message us on WhatsApp.
              </p>
              <a
                href="https://wa.me/263000000000"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-md bg-[var(--zim-green)] px-4 py-2 text-sm font-semibold text-[var(--zim-black)] hover:brightness-110"
              >
                WhatsApp <MessageCircle size={18} />
              </a>
            </div>

            <div className="rounded-2xl border border-[var(--zim-border)] bg-[var(--zim-card)] p-6 md:p-8">
              <div className="text-sm font-semibold">Notes</div>
              <ul className="mt-3 grid gap-2 text-sm text-[var(--zim-fg)]/75">
                <li>Response time: within 24 hours (placeholder).</li>
                <li>Project kickoff: after scope confirmation.</li>
                <li>Security: inputs validated + sanitized on backend.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
