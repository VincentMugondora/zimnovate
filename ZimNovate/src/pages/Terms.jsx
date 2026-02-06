import React from 'react'
import PageHero from '../components/PageHero.jsx'

const Terms = () => {
  return (
    <div>
      <PageHero
        title="Terms & Conditions"
        subtitle="The rules and regulations for using our services"
        height="min-h-[40vh]"
      />

      <section className="mx-auto max-w-4xl px-12 py-14 md:px-16 md:py-20 lg:px-20">
        <div className="prose prose-sm max-w-none">
          <p className="text-sm text-[#1A1A1A]/70 mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">1. Agreement to Terms</h2>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
                By accessing or using the services provided by Zimnovate, you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, you may not access our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">2. Services</h2>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
                Zimnovate provides digital services including web development, mobile app development, branding, digital marketing, AI automation, and e-commerce solutions. All services are subject to these terms unless otherwise agreed in writing.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">3. Payment Terms</h2>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed mb-3">
                Payment for services is governed by the following terms:
              </p>
              <ul className="list-disc list-inside text-sm text-[#1A1A1A]/80 space-y-2 ml-4">
                <li>A deposit of 50% is required before work begins on any project.</li>
                <li>Final payment is due upon project completion and before final deliverables are released.</li>
                <li>Monthly retainer fees are due at the beginning of each month.</li>
                <li>Late payments may incur a 5% monthly service charge.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">4. Intellectual Property</h2>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
                Upon full payment, ownership of the final deliverables transfers to the client. Zimnovate retains the right to use completed work for portfolio and promotional purposes unless otherwise agreed in writing. Source files and working materials remain the property of Zimnovate unless explicitly included in the project scope.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">5. Project Timeline</h2>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
                Project timelines are estimates based on the agreed scope. Delays caused by client feedback, content delays, or scope changes may extend the timeline. Zimnovate is not liable for delays caused by third-party services or circumstances beyond our control.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">6. Limitation of Liability</h2>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
                Zimnovate shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amount paid for the specific service giving rise to the liability.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">7. Termination</h2>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
                Either party may terminate the agreement with 30 days written notice. Upon termination, the client is responsible for payment of all work completed up to the termination date. No refunds will be provided for deposits or payments already made.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">8. Governing Law</h2>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of Zimbabwe. Any disputes shall be subject to the exclusive jurisdiction of the courts of Zimbabwe.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">9. Contact Information</h2>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
                If you have any questions about these Terms, please contact us:
              </p>
              <p className="text-sm text-[#1A1A1A]/80 mt-3">
                <strong>Email:</strong> legal@zimnovate.com<br />
                <strong>Address:</strong> Harare, Zimbabwe
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Terms
