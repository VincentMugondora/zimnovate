import React from 'react'
import PageHero from '../components/PageHero.jsx'

const PrivacyPolicy = () => {
  return (
    <div>
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information"
        height="min-h-[40vh]"
      />

      <section className="mx-auto max-w-4xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="prose prose-sm max-w-none">
          <p className="text-sm text-[#1A1A1A]/70 mb-8">
            Last updated: January 1, 2026
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">1. Introduction</h2>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
                Zimnovate ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">2. Information We Collect</h2>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed mb-3">
                We may collect information about you in a variety of ways. The information we may collect includes:
              </p>
              <ul className="list-disc list-inside text-sm text-[#1A1A1A]/80 space-y-2 ml-4">
                <li><strong>Personal Data:</strong> Name, email address, phone number, and company information you voluntarily provide.</li>
                <li><strong>Usage Data:</strong> Information about how you use our website and services.</li>
                <li><strong>Cookies:</strong> We use cookies to enhance your experience on our website.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">3. How We Use Your Information</h2>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed mb-3">
                We may use the information we collect for various purposes, including to:
              </p>
              <ul className="list-disc list-inside text-sm text-[#1A1A1A]/80 space-y-2 ml-4">
                <li>Provide, operate, and maintain our services</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you marketing and promotional communications</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">4. Disclosure of Your Information</h2>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
                We may share information we have collected about you in certain situations. Your information may be disclosed to:
              </p>
              <ul className="list-disc list-inside text-sm text-[#1A1A1A]/80 space-y-2 ml-4 mt-3">
                <li>Service providers who perform services on our behalf</li>
                <li>Business partners with your consent</li>
                <li>Law enforcement or government agencies when required by law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">5. Security of Your Information</h2>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">6. Contact Us</h2>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
                If you have questions or concerns about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy
