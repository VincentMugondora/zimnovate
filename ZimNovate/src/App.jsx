import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/SiteLayout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import WebDevelopment from './pages/WebDevelopment.jsx'
import MobileAppDevelopment from './pages/MobileAppDevelopment.jsx'
import Branding from './pages/Branding.jsx'
import DigitalStrategy from './pages/DigitalStrategy.jsx'
import DigitalMarketing from './pages/DigitalMarketing.jsx'
import AIAutomation from './pages/AIAutomation.jsx'
import ECommerceSolutions from './pages/ECommerceSolutions.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Contact from './pages/Contact.jsx'
import ZimFreshCaseStudy from './pages/ZimFreshCaseStudy.jsx'
import SwiftPayCaseStudy from './pages/SwiftPayCaseStudy.jsx'
import RoyalHomeCareCaseStudy from './pages/RoyalHomeCareCaseStudy.jsx'
import AfricaRiseCaseStudy from './pages/AfricaRiseCaseStudy.jsx'
import AutoDocsCaseStudy from './pages/AutoDocsCaseStudy.jsx'
import ZimFarmsCaseStudy from './pages/ZimFarmsCaseStudy.jsx'
import NotFound from './pages/NotFound.jsx'
import Careers from './pages/Careers.jsx'
import Blog from './pages/Blog.jsx'
import Testimonials from './pages/Testimonials.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import Terms from './pages/Terms.jsx'
import CookiePolicy from './pages/CookiePolicy.jsx'

const App = () => {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
        <Route path="/services/branding" element={<Branding />} />
        <Route path="/services/digital-strategy" element={<DigitalStrategy />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/ai-automation" element={<AIAutomation />} />
        <Route path="/services/e-commerce" element={<ECommerceSolutions />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio/zimfresh" element={<ZimFreshCaseStudy />} />
        <Route path="/portfolio/swiftpay" element={<SwiftPayCaseStudy />} />
        <Route path="/portfolio/royal-home-care" element={<RoyalHomeCareCaseStudy />} />
        <Route path="/portfolio/africarise" element={<AfricaRiseCaseStudy />} />
        <Route path="/portfolio/autodocs" element={<AutoDocsCaseStudy />} />
        <Route path="/portfolio/zimfarms" element={<ZimFarmsCaseStudy />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookies" element={<CookiePolicy />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App