import React from 'react'
import { Helmet } from 'react-helmet-async'
import PageHero from '../components/PageHero.jsx'

const CookiePolicy = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy – Zimnovate | Cookies & Tracking</title>
        <meta name="description" content="Learn how Zimnovate uses cookies and tracking technologies to improve your browsing experience and deliver relevant content." />
        <meta name="keywords" content="cookie policy, cookies, tracking, privacy, zimnovate cookies" />
        <link rel="canonical" href="https://zimnovate.com/cookies" />
        <meta property="og:title" content="Cookie Policy – Zimnovate | Cookies & Tracking" />
        <meta property="og:description" content="Learn how Zimnovate uses cookies and tracking technologies to improve your browsing experience." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zimnovate.com/cookies" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cookie Policy – Zimnovate | Cookies & Tracking" />
        <meta name="twitter:description" content="Learn how Zimnovate uses cookies and tracking technologies to improve your browsing experience." />
        <meta name="twitter:image" content="https://zimnovate.com/logo1.png" />
      </Helmet>
    <div>
      <PageHero
        title="Cookie Policy"
        subtitle="How we use cookies and similar technologies"
        height="min-h-[40vh]"
      />

      <section className="mx-auto max-w-4xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="prose prose-sm max-w-none">
          <p className="text-sm text-[#1A1A1A]/70 mb-8">
            Last updated: February 6, 2025
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">1. Introduction</h2>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
                This Cookie Policy explains how Zimnovate ("we", "our", "us") uses cookies and similar tracking technologies on our website. By using our website, you agree that we may store and access cookies on your device in accordance with this policy — unless you disable them in your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">2. What Are Cookies?</h2>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
                Cookies are small text files stored on your computer or mobile device when you visit a website. They help websites function properly, remember your preferences, and improve your browsing experience. Cookies do not give us access to your device, files, or personal information unless you choose to share it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">3. How We Use Cookies</h2>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed mb-3">
                Zimnovate uses cookies to:
              </p>
              <ul className="list-disc list-inside text-sm text-[#1A1A1A]/80 space-y-2 ml-4">
                <li>Enable essential website functionality</li>
                <li>Understand how visitors use our website</li>
                <li>Improve performance and content</li>
                <li>Deliver relevant advertising</li>
                <li>Save your preferences (e.g., theme, language)</li>
                <li>Secure our site and protect user accounts</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">4. Types of Cookies We Use</h2>
              
              <h3 className="text-lg font-semibold text-[#0F172A] mb-2">4.1 Essential / Strictly Necessary Cookies</h3>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed mb-3">
                These cookies are required for the website to work properly. They include:
              </p>
              <ul className="list-disc list-inside text-sm text-[#1A1A1A]/80 space-y-1 ml-4 mb-4">
                <li>Login/authentication cookies</li>
                <li>Security and session cookies</li>
                <li>Load balancing and performance cookies</li>
                <li>Cookie consent preferences</li>
              </ul>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed mb-4">
                You cannot disable these cookies.
              </p>

              <h3 className="text-lg font-semibold text-[#0F172A] mb-2">4.2 Analytics / Performance Cookies</h3>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed mb-3">
                Used to understand how visitors use the site and improve our services. We may use:
              </p>
              <ul className="list-disc list-inside text-sm text-[#1A1A1A]/80 space-y-1 ml-4 mb-4">
                <li>Google Analytics</li>
                <li>Google Tag Manager</li>
                <li>Hotjar (if implemented later)</li>
              </ul>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed mb-4">
                These cookies help us see which pages people visit, how long they stay, device/browser types, and user flow. All analytics are anonymous unless you voluntarily submit information.
              </p>

              <h3 className="text-lg font-semibold text-[#0F172A] mb-2">4.3 Functional Cookies</h3>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed mb-3">
                These cookies remember your preferences:
              </p>
              <ul className="list-disc list-inside text-sm text-[#1A1A1A]/80 space-y-1 ml-4 mb-4">
                <li>Language settings</li>
                <li>Region or currency</li>
                <li>Light/dark mode</li>
                <li>Saved form information</li>
              </ul>

              <h3 className="text-lg font-semibold text-[#0F172A] mb-2">4.4 Marketing / Advertising Cookies</h3>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed mb-3">
                Used to deliver personalized ads and measure their effectiveness. These may include:
              </p>
              <ul className="list-disc list-inside text-sm text-[#1A1A1A]/80 space-y-1 ml-4 mb-4">
                <li>Meta Pixel (Facebook/Instagram ads)</li>
                <li>Google Ads conversion tags</li>
                <li>LinkedIn Insight Tag</li>
              </ul>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed mb-4">
                They allow us to show ads relevant to users' interests, measure campaign performance, and build audiences for remarketing. You can choose to disable these cookies.
              </p>

              <h3 className="text-lg font-semibold text-[#0F172A] mb-2">4.5 Third-Party Cookies</h3>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed mb-3">
                Placed by trusted third-party tools such as:
              </p>
              <ul className="list-disc list-inside text-sm text-[#1A1A1A]/80 space-y-1 ml-4 mb-4">
                <li>Embedded videos (YouTube, Vimeo)</li>
                <li>Social media sharing widgets</li>
                <li>Chat/support widgets</li>
                <li>Analytics or advertising providers</li>
              </ul>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
                Each third party has its own privacy policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">5. Managing and Disabling Cookies</h2>
              
              <h3 className="text-lg font-semibold text-[#0F172A] mb-2">5.1 Cookie Banner</h3>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed mb-4">
                You can manage cookie preferences anytime using our website's cookie banner.
              </p>

              <h3 className="text-lg font-semibold text-[#0F172A] mb-2">5.2 Browser Controls</h3>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed mb-3">
                You can disable cookies through your browser settings:
              </p>
              <ul className="list-disc list-inside text-sm text-[#1A1A1A]/80 space-y-1 ml-4 mb-4">
                <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Block Cookies</li>
                <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Edge:</strong> Settings → Cookies and site permissions</li>
              </ul>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
                Disabling essential cookies may affect website functionality.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">6. How Long Cookies Are Stored</h2>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed mb-3">
                Cookies may be stored:
              </p>
              <ul className="list-disc list-inside text-sm text-[#1A1A1A]/80 space-y-2 ml-4">
                <li><strong>Session cookies</strong> — deleted when you close your browser</li>
                <li><strong>Persistent cookies</strong> — stored until they expire or you delete them</li>
              </ul>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed mt-3">
                We do not keep cookies longer than necessary.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">7. Updates to This Cookie Policy</h2>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
                We may update this Cookie Policy from time to time. Changes will be posted with a new "Last updated" date at the top of this page.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">8. Contact Us</h2>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
                For questions about this Cookie Policy or your data:
              </p>
              <p className="text-sm text-[#1A1A1A]/80 mt-3">
                <strong>Email:</strong> privacy@zimnovate.com<br />
                <strong>Website:</strong> https://zimnovate.com<br />
                <strong>Address:</strong> Harare, Zimbabwe
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default CookiePolicy
