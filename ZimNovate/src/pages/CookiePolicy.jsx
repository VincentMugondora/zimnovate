import React from 'react'
import PageHero from '../components/PageHero.jsx'

const CookiePolicy = () => {
  return (
    <div>
      <PageHero
        title="Cookie Policy"
        subtitle="How we use cookies and similar technologies"
        height="min-h-[40vh]"
      />

      <section className="mx-auto max-w-4xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="prose prose-sm max-w-none">
          <p className="text-sm text-[#1A1A1A]/70 mb-8">
            Last updated: January 1, 2026
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">1. What Are Cookies</h2>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
                Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">2. How We Use Cookies</h2>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed mb-3">
                Zimnovate uses cookies for the following purposes:
              </p>
              <ul className="list-disc list-inside text-sm text-[#1A1A1A]/80 space-y-2 ml-4">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly.</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website.</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences.</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">3. Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Session Cookies</h3>
                  <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
                    These are temporary cookies that expire when you close your browser. They help our website remember your actions during a browsing session.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Persistent Cookies</h3>
                  <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
                    These cookies remain on your device for a set period or until you manually delete them. They help us remember your preferences for future visits.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Third-Party Cookies</h3>
                  <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
                    We may use third-party services (such as Google Analytics) that set their own cookies to provide their services.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">4. Managing Cookies</h2>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
                Most web browsers allow you to control cookies through their settings. You can usually find these settings in the "Options" or "Preferences" menu of your browser. Please note that disabling cookies may affect the functionality of our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">5. Changes to This Policy</h2>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
                We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">6. Contact Us</h2>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
                If you have questions about our Cookie Policy, please contact us at:
              </p>
              <p className="text-sm text-[#1A1A1A]/80 mt-3">
                <strong>Email:</strong> privacy@zimnovate.com<br />
                <strong>Address:</strong> Harare, Zimbabwe
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CookiePolicy
