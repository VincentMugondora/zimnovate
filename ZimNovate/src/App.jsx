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
import Portfolio from './pages/Portfolio.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

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
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App