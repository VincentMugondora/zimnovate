import React from 'react'
import { Helmet } from 'react-helmet-async'
import PageHero from '../components/PageHero.jsx'

const FAQ = () => {
  const faqs = [
    {
      question: 'What services does Zimnovate offer?',
      answer: 'We offer full-stack digital services including web development, mobile app development, branding and design, digital marketing, SEO, AI & automation solutions, and e-commerce development.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on scope and complexity. A simple website typically takes 2-4 weeks, while complex web applications or mobile apps can take 2-6 months. We provide detailed timelines during our discovery phase.'
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Yes! While we are based in Zimbabwe, we work with clients across Africa and internationally. Our team is experienced in remote collaboration and can accommodate different time zones.'
    },
    {
      question: 'What is your pricing structure?',
      answer: 'We offer flexible pricing based on project requirements. We provide detailed quotes after understanding your needs during our initial consultation. We accept payments via Ecocash, bank transfer, and international payment methods.'
    },
    {
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes, we offer maintenance and support packages for all our projects. This includes bug fixes, security updates, content updates, and technical support to ensure your digital presence remains optimal.'
    },
    {
      question: 'Can you help with digital marketing and SEO?',
      answer: 'Absolutely! Our digital marketing team specializes in SEO, social media marketing, content strategy, and paid advertising campaigns tailored for the African market and beyond.'
    },
    {
      question: 'What technologies do you use?',
      answer: 'We use modern, scalable technologies including React, Next.js, Node.js, Python, Flutter, and various cloud platforms. We choose the best tech stack based on your specific project requirements.'
    },
    {
      question: 'How do I start a project with Zimnovate?',
      answer: 'Simply reach out through our contact form or email us at hello@zimnovate.co.zw. We will schedule a free consultation to discuss your project needs, timeline, and budget.'
    }
  ]

  return (
    <>
      <Helmet>
        <title>FAQ – Zimnovate | Frequently Asked Questions</title>
        <meta name="description" content="Find answers to common questions about Zimnovate's web development, app development, branding, and digital marketing services." />
        <meta name="keywords" content="zimnovate faq, web development questions, digital agency zimbabwe, app development faq" />
        <link rel="canonical" href="https://zimnovate.co.zw/faq" />
        <meta property="og:title" content="FAQ – Zimnovate | Frequently Asked Questions" />
        <meta property="og:description" content="Find answers to common questions about Zimnovate's digital services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zimnovate.co.zw/faq" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FAQ – Zimnovate | Frequently Asked Questions" />
        <meta name="twitter:description" content="Find answers to common questions about Zimnovate's digital services." />
        <meta name="twitter:image" content="https://zimnovate.co.zw/logo1.png" />
      </Helmet>
    <div>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services, process, and how we can help your business grow."
        height="min-h-[40vh]"
      />

      <section className="mx-auto max-w-4xl px-12 py-16 md:px-16 md:py-20 lg:px-20">
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-[var(--zim-border)] pb-8">
              <h2 className="text-xl font-bold text-[var(--zim-black)] mb-4">
                {faq.question}
              </h2>
              <p className="text-[var(--zim-fg)] leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-[var(--zim-fg)] mb-4">
            Still have questions? We are here to help.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[var(--zim-green)] px-8 py-3 text-sm font-semibold text-[var(--zim-black)] hover:brightness-110 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
    </>
  )
}

export default FAQ
