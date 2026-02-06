import React from 'react'
import { Helmet } from 'react-helmet-async'
import PageHero from '../components/PageHero.jsx'

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy – Zimnovate | Data Protection</title>
        <meta name="description" content="Learn how Zimnovate collects, uses, and protects your personal information. Our privacy policy ensures your data is safe and secure." />
        <meta name="keywords" content="privacy policy, data protection, zimnovate privacy, personal data security" />
        <link rel="canonical" href="https://zimnovate.com/privacy" />
        <meta property="og:title" content="Privacy Policy – Zimnovate | Data Protection" />
        <meta property="og:description" content="Learn how Zimnovate collects, uses, and protects your personal information." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zimnovate.com/privacy" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy – Zimnovate | Data Protection" />
        <meta name="twitter:description" content="Learn how Zimnovate collects, uses, and protects your personal information." />
        <meta name="twitter:image" content="https://zimnovate.com/logo1.png" />
      </Helmet>
    <div>
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information"
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
                Welcome to Zimnovate. We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains what information we collect, how we use it, how we protect it, and your rights regarding your personal data. By using our website, services, or contacting us, you agree to this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">2. Information We Collect</h2>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed mb-3">
                We collect information in the following ways:
              </p>
              <h3 className="text-base font-semibold text-[#0F172A] mb-2">2.1 Information You Provide to Us</h3>
              <ul className="list-disc list-inside text-sm text-[#1A1A1A]/80 space-y-1 ml-4 mb-4">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name</li>
                <li>Project details or messages submitted via forms</li>
                <li>Any information you voluntarily provide during communication</li>
              </ul>
              <h3 className="text-base font-semibold text-[#0F172A] mb-2">2.2 Automatically Collected Information</h3>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed mb-2">
                When you visit our website, we may automatically collect:
              </p>
              <ul className="list-disc list-inside text-sm text-[#1A1A1A]/80 space-y-1 ml-4 mb-4">
                <li>IP address</li>
                <li>Device type</li>
                <li>Browser type</li>
                <li>Pages viewed</li>
                <li>Time spent on site</li>
                <li>Cookies</li>
                <li>Referring/exit pages</li>
              </ul>
              <h3 className="text-base font-semibold text-[#0F172A] mb-2">2.3 Cookies & Tracking Technologies</h3>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
                We may use cookies and similar technologies for: Analytics, Improving user experience, Saving preferences, Security, and Marketing (e.g., Google Analytics, Meta Pixel). You can disable cookies in your browser settings at any time.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">3. How We Use Your Information</h2>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed mb-3">
                Zimnovate uses collected data for:
              </p>
              <ul className="list-disc list-inside text-sm text-[#1A1A1A]/80 space-y-2 ml-4">
                <li>Providing digital services (web development, branding, marketing, etc.)</li>
                <li>Sending proposals, quotations, or responding to inquiries</li>
                <li>Improving our website and user experience</li>
                <li>Marketing, advertising, and retargeting</li>
                <li>Analytics and performance monitoring</li>
                <li>Legal compliance and fraud prevention</li>
              </ul>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed mt-3">
                We <strong>do not sell</strong> your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">4. Sharing Your Information</h2>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed mb-3">
                We may share your information with:
              </p>
              <ul className="list-disc list-inside text-sm text-[#1A1A1A]/80 space-y-2 ml-4">
                <li>Trusted service providers (hosting, analytics, payment processors, etc.)</li>
                <li>Legal authorities if required by law</li>
                <li>Contractors and team members working on your project (under confidentiality agreements)</li>
              </ul>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed mt-3">
                We <strong>never sell or rent</strong> your data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">5. Data Security</h2>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed mb-3">
                We implement industry-standard security measures to protect your personal information:
              </p>
              <ul className="list-disc list-inside text-sm text-[#1A1A1A]/80 space-y-2 ml-4">
                <li>HTTPS encryption</li>
                <li>Firewalls</li>
                <li>Authentication and access control</li>
                <li>Secure storage of collected information</li>
                <li>Regular security reviews</li>
              </ul>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed mt-3">
                However, no online transmission is 100% secure. You use the site at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">6. Your Rights</h2>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed mb-3">
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-disc list-inside text-sm text-[#1A1A1A]/80 space-y-2 ml-4">
                <li>Access the data we store about you</li>
                <li>Request correction of your information</li>
                <li>Request deletion of your data</li>
                <li>Object to marketing</li>
                <li>Withdraw consent</li>
              </ul>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed mt-3">
                To exercise your rights, contact: <strong>privacy@zimnovate.com</strong>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">7. Data Retention</h2>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
                We retain your data only as long as necessary for: Providing services, Legal compliance, Business purposes, and Analytics and historical reference. Once no longer needed, data will be securely deleted.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">8. Third-Party Services</h2>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed mb-3">
                Zimnovate may use third-party tools, such as:
              </p>
              <ul className="list-disc list-inside text-sm text-[#1A1A1A]/80 space-y-2 ml-4">
                <li>Google Analytics</li>
                <li>Google Tag Manager</li>
                <li>Meta Pixel</li>
                <li>Email marketing software</li>
                <li>Cloud hosting providers</li>
                <li>Payment processors</li>
              </ul>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed mt-3">
                These third parties have their own privacy policies and may collect data independently.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">9. Links to Other Websites</h2>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
                Our website may contain links to external websites. Zimnovate is not responsible for the privacy practices of those sites.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">10. Children's Privacy</h2>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
                Our services are not intended for individuals under 13. We do not knowingly collect information from children.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">12. Contact Us</h2>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
                If you have questions, concerns, or requests regarding this Privacy Policy, contact us:
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

export default PrivacyPolicy
