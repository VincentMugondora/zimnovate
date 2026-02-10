import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  ShoppingCart, 
  Palette, 
  Smartphone, 
  TrendingUp,
  Clock,
  Users,
  DollarSign,
  Target,
  ChevronDown,
  ChevronUp,
  Send,
  Calendar,
  Zap,
  MessageCircle
} from 'lucide-react';
import { supabase } from '../lib/supabase.js';

const GetStarted = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const services = [
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Custom, responsive websites built for performance and user experience.',
      link: '/services/web-development'
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      description: 'Full-featured online stores with secure payment processing.',
      link: '/services/ecommerce'
    },
    {
      icon: Palette,
      title: 'Branding & UI/UX',
      description: 'Strategic brand identity and intuitive interface design.',
      link: '/services/branding'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform apps for iOS and Android.',
      link: '/services/mobile-apps'
    },
    {
      icon: TrendingUp,
      title: 'SEO & Digital Marketing',
      description: 'Data-driven strategies to grow your online presence.',
      link: '/services/digital-marketing'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Tell Us What You Need',
      description: 'Fill out our simple project form with your goals, challenges, and the type of solution you\'re looking for.'
    },
    {
      number: '02',
      title: 'We Review & Respond',
      description: 'Our team analyzes your request and gets back to you with recommendations, pricing, and next steps—usually within 24 hours.'
    },
    {
      number: '03',
      title: 'Start Your Project',
      description: 'Once you\'re ready, we\'ll begin turning your ideas into real digital products that deliver results.'
    }
  ];

  const whyChooseUs = [
    {
      icon: Zap,
      title: 'Fast, Modern Solutions',
      description: 'Scalable digital products built with cutting-edge technology.'
    },
    {
      icon: Users,
      title: 'Local Expertise',
      description: 'Built by a passionate Zimbabwean developer and dedicated team.'
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'Clear communication and honest pricing with no hidden fees.'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Focused on outcomes that grow your business—not just deliverables.'
    }
  ];

  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity. A simple website typically takes 2-4 weeks, while complex applications may take 2-3 months. We\'ll provide a detailed timeline during our initial consultation.'
    },
    {
      question: 'How much does a website cost?',
      answer: 'Pricing depends on your specific requirements. Basic websites start from $500, while custom solutions range from $2,000-$10,000+. We provide detailed quotes after understanding your needs.'
    },
    {
      question: 'Do you work with startups and small businesses?',
      answer: 'Absolutely! We love working with businesses of all sizes. We offer flexible packages and scalable solutions that grow with your business.'
    },
    {
      question: 'Can I request ongoing support?',
      answer: 'Yes! We offer maintenance packages including updates, security monitoring, content updates, and technical support. We\'re here for the long haul.'
    },
    {
      question: 'What technologies do you use?',
      answer: 'We use modern, proven technologies including React, Next.js, Node.js, Supabase, and various e-commerce platforms. We choose the best tools for your specific project needs.'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([{
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service_type: formData.service,
          budget: formData.budget,
          message: formData.message,
          source: 'get-started-page'
        }]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Get Started | ZimNovate</title>
        <link rel="canonical" href="https://zimnovate.co.zw/get-started" />
        <meta name="description" content="Start your project with ZimNovate. Tell us what you need and we'll help you take the next step with smart, efficient digital solutions." />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#0F172A] via-[#1e293b] to-[#0F172A] text-white py-20 md:py-28 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F4D47C]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#32cd32]/10 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Zap className="h-4 w-4 text-[#F4D47C]" />
              <span className="text-sm font-medium">Let's Build Something Great</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Get Started With <span className="text-[#F4D47C]">ZimNovate</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Smart, efficient digital solutions to help your business grow. Tell us what you need, and we'll help you take the next step.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact-form" 
                className="inline-flex items-center justify-center gap-2 bg-[#F4D47C] text-[#0F172A] px-8 py-4 rounded-full font-semibold hover:bg-[#f0c85c] transition-all transform hover:scale-105"
              >
                Start a Project
                <ArrowRight className="h-5 w-5" />
              </a>
              <a 
                href="https://calendly.com/zimnovate/30min" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all"
              >
                <Calendar className="h-5 w-5" />
                Book a Call
              </a>
            </div>
          </div>
        </section>

        {/* Step-by-Step Process */}
        <section className="py-20 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">How It Works</h2>
              <p className="text-lg text-[#1A1A1A]/70 max-w-2xl mx-auto">
                Three simple steps to bring your digital vision to life
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full">
                    <div className="text-5xl font-bold text-[#F4D47C]/20 mb-4">{step.number}</div>
                    <h3 className="text-xl font-bold text-[#0F172A] mb-3">{step.title}</h3>
                    <p className="text-[#1A1A1A]/70 leading-relaxed">{step.description}</p>
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="h-8 w-8 text-[#F4D47C]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Quick-Select */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">Our Services</h2>
              <p className="text-lg text-[#1A1A1A]/70 max-w-2xl mx-auto">
                Choose the service that fits your needs
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#F4D47C] hover:shadow-lg transition-all cursor-pointer"
                  onClick={() => {
                    setFormData(prev => ({ ...prev, service: service.title }));
                    document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <div className="w-14 h-14 bg-[#F4D47C]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#F4D47C]/20 transition-colors">
                    <service.icon className="h-7 w-7 text-[#F4D47C]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2">{service.title}</h3>
                  <p className="text-sm text-[#1A1A1A]/70 mb-4">{service.description}</p>
                  <div className="flex items-center gap-2 text-[#F4D47C] font-medium text-sm">
                    Get Started
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact-form" className="py-20 bg-[#f8fafc]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-[#0F172A] to-[#1e293b] p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Start Your Project</h2>
                <p className="text-white/80">Tell us about your project and we'll get back to you within 24 hours.</p>
              </div>

              <div className="p-8 md:p-12">
                {submitStatus === 'success' ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0F172A] mb-2">Thank You!</h3>
                    <p className="text-[#1A1A1A]/70">We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#0F172A] mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F4D47C] focus:ring-2 focus:ring-[#F4D47C]/20 outline-none transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#0F172A] mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F4D47C] focus:ring-2 focus:ring-[#F4D47C]/20 outline-none transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#0F172A] mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F4D47C] focus:ring-2 focus:ring-[#F4D47C]/20 outline-none transition-all"
                          placeholder="+263 77 123 4567"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#0F172A] mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F4D47C] focus:ring-2 focus:ring-[#F4D47C]/20 outline-none transition-all"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#0F172A] mb-2">
                          What service do you need? *
                        </label>
                        <select
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F4D47C] focus:ring-2 focus:ring-[#F4D47C]/20 outline-none transition-all bg-white"
                        >
                          <option value="">Select a service</option>
                          {services.map((service, index) => (
                            <option key={index} value={service.title}>{service.title}</option>
                          ))}
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#0F172A] mb-2">
                          Project Budget
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F4D47C] focus:ring-2 focus:ring-[#F4D47C]/20 outline-none transition-all bg-white"
                        >
                          <option value="">Select budget range</option>
                          <option value="Under $1,000">Under $1,000</option>
                          <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                          <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                          <option value="$10,000+">$10,000+</option>
                          <option value="Not sure yet">Not sure yet</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#0F172A] mb-2">
                        Tell us about your project *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F4D47C] focus:ring-2 focus:ring-[#F4D47C]/20 outline-none transition-all resize-none"
                        placeholder="Describe your project, goals, and any specific requirements..."
                      />
                    </div>

                    {submitStatus === 'error' && (
                      <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-600">
                        Something went wrong. Please try again or contact us directly.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#F4D47C] text-[#0F172A] py-4 rounded-xl font-semibold hover:bg-[#f0c85c] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-5 w-5 border-2 border-[#0F172A]/30 border-t-[#0F172A] rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Submit & Get Started
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">Why Choose ZimNovate?</h2>
              <p className="text-lg text-[#1A1A1A]/70 max-w-2xl mx-auto">
                We're more than just a development agency—we're your digital growth partner
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#F4D47C]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-[#F4D47C]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#1A1A1A]/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-[#f8fafc]">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-[#1A1A1A]/70">
                Got questions? We've got answers.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl border border-gray-100 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-[#0F172A] pr-4">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-[#F4D47C] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-[#1A1A1A]/40 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-[#1A1A1A]/70 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-[#0F172A] to-[#1e293b] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Let's turn your idea into something powerful. Get in touch today and take the first step towards digital success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact-form" 
                className="inline-flex items-center justify-center gap-2 bg-[#F4D47C] text-[#0F172A] px-8 py-4 rounded-full font-semibold hover:bg-[#f0c85c] transition-all"
              >
                Start a Project
                <ArrowRight className="h-5 w-5" />
              </a>
              <a 
                href="https://calendly.com/zimnovate/30min" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all"
              >
                <Calendar className="h-5 w-5" />
                Book a Call
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GetStarted;
