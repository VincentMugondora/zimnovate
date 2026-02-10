import React, { Suspense, lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import SiteLayout from './components/SiteLayout.jsx'
import { usePageViews } from './hooks/usePageViews.js'

// Page View Tracker Component - tracks views on route change
const PageViewTracker = () => {
  usePageViews()
  return null
}

// Eager load critical pages (Home and common pages)
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Contact from './pages/Contact.jsx'

// Lazy load all other pages to reduce initial bundle
const WebDevelopment = lazy(() => import('./pages/WebDevelopment.jsx'))
const MobileAppDevelopment = lazy(() => import('./pages/MobileAppDevelopment.jsx'))
const Branding = lazy(() => import('./pages/Branding.jsx'))
const DigitalStrategy = lazy(() => import('./pages/DigitalStrategy.jsx'))
const DigitalMarketing = lazy(() => import('./pages/DigitalMarketing.jsx'))
const AIAutomation = lazy(() => import('./pages/AIAutomation.jsx'))
const ECommerceSolutions = lazy(() => import('./pages/ECommerceSolutions.jsx'))
const ZimFreshCaseStudy = lazy(() => import('./pages/ZimFreshCaseStudy.jsx'))
const SwiftPayCaseStudy = lazy(() => import('./pages/SwiftPayCaseStudy.jsx'))
const RoyalHomeCareCaseStudy = lazy(() => import('./pages/RoyalHomeCareCaseStudy.jsx'))
const AfricaRiseCaseStudy = lazy(() => import('./pages/AfricaRiseCaseStudy.jsx'))
const AutoDocsCaseStudy = lazy(() => import('./pages/AutoDocsCaseStudy.jsx'))
const ZimFarmsCaseStudy = lazy(() => import('./pages/ZimFarmsCaseStudy.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))
const Careers = lazy(() => import('./pages/Careers.jsx'))
const Blog = lazy(() => import('./pages/Blog.jsx'))
const BlogDetail = lazy(() => import('./pages/BlogDetail.jsx'))
const Testimonials = lazy(() => import('./pages/Testimonials.jsx'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy.jsx'))
const Terms = lazy(() => import('./pages/Terms.jsx'))
const CookiePolicy = lazy(() => import('./pages/CookiePolicy.jsx'))
const FAQ = lazy(() => import('./pages/FAQ.jsx'))
const UseCases = lazy(() => import('./pages/UseCases.jsx'))
const Events = lazy(() => import('./pages/Events.jsx'))
const Partners = lazy(() => import('./pages/Partners.jsx'))
const Resources = lazy(() => import('./pages/Resources.jsx'))
const Team = lazy(() => import('./pages/Team.jsx'))
const TeamProfile = lazy(() => import('./pages/TeamProfile.jsx'))
const GetStarted = lazy(() => import('./pages/GetStarted.jsx'))
const Dashboard = lazy(() => import('./pages/Dashboard.jsx'))
const Login = lazy(() => import('./pages/Login.jsx'))
const ProtectedRoute = lazy(() => import('./components/ProtectedRoute.jsx'))

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--zim-green)]"></div>
  </div>
)

const App = () => {
  return (
    <HelmetProvider>
      <PageViewTracker />
      <Routes>
        {/* Public routes with SiteLayout */}
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Lazy loaded routes */}
          <Route path="/services/web-development" element={<Suspense fallback={<PageLoader />}><WebDevelopment /></Suspense>} />
          <Route path="/services/mobile-app-development" element={<Suspense fallback={<PageLoader />}><MobileAppDevelopment /></Suspense>} />
          <Route path="/services/branding" element={<Suspense fallback={<PageLoader />}><Branding /></Suspense>} />
          <Route path="/services/digital-strategy" element={<Suspense fallback={<PageLoader />}><DigitalStrategy /></Suspense>} />
          <Route path="/services/digital-marketing" element={<Suspense fallback={<PageLoader />}><DigitalMarketing /></Suspense>} />
          <Route path="/services/ai-automation" element={<Suspense fallback={<PageLoader />}><AIAutomation /></Suspense>} />
          <Route path="/services/e-commerce" element={<Suspense fallback={<PageLoader />}><ECommerceSolutions /></Suspense>} />
          <Route path="/get-started" element={<Suspense fallback={<PageLoader />}><GetStarted /></Suspense>} />
          <Route path="/portfolio/zimfresh" element={<Suspense fallback={<PageLoader />}><ZimFreshCaseStudy /></Suspense>} />
          <Route path="/portfolio/swiftpay" element={<Suspense fallback={<PageLoader />}><SwiftPayCaseStudy /></Suspense>} />
          <Route path="/portfolio/royal-home-care" element={<Suspense fallback={<PageLoader />}><RoyalHomeCareCaseStudy /></Suspense>} />
          <Route path="/portfolio/africarise" element={<Suspense fallback={<PageLoader />}><AfricaRiseCaseStudy /></Suspense>} />
          <Route path="/portfolio/autodocs" element={<Suspense fallback={<PageLoader />}><AutoDocsCaseStudy /></Suspense>} />
          <Route path="/portfolio/zimfarms" element={<Suspense fallback={<PageLoader />}><ZimFarmsCaseStudy /></Suspense>} />
          <Route path="/careers" element={<Suspense fallback={<PageLoader />}><Careers /></Suspense>} />
          <Route path="/blog" element={<Suspense fallback={<PageLoader />}><Blog /></Suspense>} />
          <Route path="/blog/:slug" element={<Suspense fallback={<PageLoader />}><BlogDetail /></Suspense>} />
          <Route path="/testimonials" element={<Suspense fallback={<PageLoader />}><Testimonials /></Suspense>} />
          <Route path="/privacy" element={<Suspense fallback={<PageLoader />}><PrivacyPolicy /></Suspense>} />
          <Route path="/terms" element={<Suspense fallback={<PageLoader />}><Terms /></Suspense>} />
          <Route path="/cookies" element={<Suspense fallback={<PageLoader />}><CookiePolicy /></Suspense>} />
          <Route path="/faq" element={<Suspense fallback={<PageLoader />}><FAQ /></Suspense>} />
          <Route path="/use-cases" element={<Suspense fallback={<PageLoader />}><UseCases /></Suspense>} />
          <Route path="/events" element={<Suspense fallback={<PageLoader />}><Events /></Suspense>} />
          <Route path="/partners" element={<Suspense fallback={<PageLoader />}><Partners /></Suspense>} />
          <Route path="/resources" element={<Suspense fallback={<PageLoader />}><Resources /></Suspense>} />
          <Route path="/team" element={<Suspense fallback={<PageLoader />}><Team /></Suspense>} />
          <Route path="/team/:slug" element={<Suspense fallback={<PageLoader />}><TeamProfile /></Suspense>} />
          <Route path="*" element={<Suspense fallback={<PageLoader />}><NotFound /></Suspense>} />
        </Route>

        {/* Protected Dashboard - no SiteLayout */}
        <Route path="/dashboard" element={
          <Suspense fallback={<PageLoader />}>
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          </Suspense>
        } />

        {/* Login - no SiteLayout */}
        <Route path="/login" element={<Suspense fallback={<PageLoader />}><Login /></Suspense>} />
      </Routes>
    </HelmetProvider>
  )
}

export default App