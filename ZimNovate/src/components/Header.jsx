import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  const serviceLinks = [
    { label: 'Web Development', to: '/services/web-development' },
    { label: 'Mobile Apps', to: '/services/mobile-app-development' },
    { label: 'Branding & Design', to: '/services/branding' },
    { label: 'Digital Strategy', to: '/services/digital-strategy' },
    { label: 'Digital Marketing', to: '/services/digital-marketing' },
    { label: 'AI & Automation', to: '/services/ai-automation' },
    { label: 'E-commerce Solutions', to: '/services/e-commerce' },
  ];

  return (
    <header className="relative bg-white shadow-md dark:bg-gray-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-12 py-4 md:px-16 lg:px-20">
        <h1 className="text-2xl font-bold text-blue-600">Zimnovate</h1>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <NavLink to="/" className={({isActive}) => `text-sm font-semibold hover:text-green-500 ${isActive ? 'text-green-500' : 'text-gray-700'}`}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => `text-sm font-semibold hover:text-green-500 ${isActive ? 'text-green-500' : 'text-gray-700'}`}>About</NavLink>
          <NavLink to="/services" className={({isActive}) => `text-sm font-semibold hover:text-green-500 ${isActive ? 'text-green-500' : 'text-gray-700'}`}>Services</NavLink>
          <NavLink to="/portfolio" className={({isActive}) => `text-sm font-semibold hover:text-green-500 ${isActive ? 'text-green-500' : 'text-gray-700'}`}>Portfolio</NavLink>
          <NavLink to="/blog" className={({isActive}) => `text-sm font-semibold hover:text-green-500 ${isActive ? 'text-green-500' : 'text-gray-700'}`}>Blog</NavLink>
          <NavLink to="/careers" className={({isActive}) => `text-sm font-semibold hover:text-green-500 ${isActive ? 'text-green-500' : 'text-gray-700'}`}>Careers</NavLink>
          <NavLink to="/contact" className={({isActive}) => `text-sm font-semibold hover:text-green-500 ${isActive ? 'text-green-500' : 'text-gray-700'}`}>Contact</NavLink>
        </nav>

        {/* Mobile hamburger button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-gray-100 text-gray-700 transition-all duration-300 hover:bg-gray-200 hover:scale-110 focus:outline-none md:hidden"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          <div className="relative flex h-4 w-5 flex-col items-center justify-center">
            <span
              className={`absolute h-0.5 w-5 transform rounded-full bg-gray-700 transition-all duration-300 ease-out ${
                mobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 transform rounded-full bg-gray-700 transition-all duration-300 ease-out ${
                mobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 transform rounded-full bg-gray-700 transition-all duration-300 ease-out ${
                mobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu drawer with Framer Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%', opacity: 0.8 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0.8 }}
              transition={{
                type: 'spring',
                damping: 25,
                stiffness: 200,
                opacity: { duration: 0.2 }
              }}
              className="fixed right-0 top-0 z-50 h-full w-[280px] max-w-[85vw] bg-white shadow-2xl md:hidden"
            >
              <div className="flex items-center justify-between border-b border-gray-200 p-4">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  className="text-lg font-bold text-gray-900"
                >
                  Menu
                </motion.span>
                <motion.button
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.15, duration: 0.3 }}
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </motion.button>
              </div>
              <nav className="flex flex-col p-4" aria-label="Mobile">
                {[
                  { to: '/', label: 'Home', hasSubmenu: false },
                  { to: '/about', label: 'About', hasSubmenu: false },
                  { to: '/services', label: 'Services', hasSubmenu: true },
                  { to: '/portfolio', label: 'Portfolio', hasSubmenu: false },
                  { to: '/blog', label: 'Blog', hasSubmenu: false },
                  { to: '/careers', label: 'Careers', hasSubmenu: false },
                  { to: '/contact', label: 'Contact', hasSubmenu: false },
                ].map((item, index) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.1 + index * 0.08,
                      type: 'spring',
                      damping: 20,
                      stiffness: 150
                    }}
                  >
                    {item.hasSubmenu ? (
                      <>
                        <button
                          type="button"
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className={`group flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-semibold transition-all duration-300 ${
                            location.pathname.startsWith('/services') ? 'text-green-600 bg-green-50' : 'text-gray-700 hover:text-green-600'
                          }`}
                        >
                          <span className="flex items-center gap-3">
                            <span className={
                              `h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                                location.pathname.startsWith('/services')
                                  ? 'bg-green-500 scale-125'
                                  : 'bg-gray-300 group-hover:bg-green-500'
                              }`
                            } />
                            {item.label}
                          </span>
                          <ChevronDown
                            size={18}
                            className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                          />
                        </button>
                        <AnimatePresence mode="wait">
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0, x: -20 }}
                              animate={{ opacity: 1, height: 'auto', x: 0 }}
                              exit={{ opacity: 0, height: 0, x: -30, scale: 0.95 }}
                              transition={{
                                opacity: { duration: 0.2 },
                                height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                                x: { type: 'spring', damping: 20, stiffness: 100 },
                                scale: { duration: 0.2 }
                              }}
                              className="overflow-hidden"
                            >
                              <div className="ml-4 border-l border-gray-200 pl-4 py-2 space-y-1">
                                {serviceLinks.map((link, idx) => (
                                  <motion.div
                                    key={link.to}
                                    initial={{ opacity: 0, x: -20, scale: 0.9 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    exit={{ opacity: 0, x: -15, scale: 0.9 }}
                                    transition={{
                                      delay: idx * 0.05,
                                      duration: 0.25,
                                      exit: { delay: (serviceLinks.length - idx - 1) * 0.03, duration: 0.15 }
                                    }}
                                  >
                                    <NavLink
                                      to={link.to}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className={({ isActive }) =>
                                        `block rounded-lg px-3 py-2 text-sm transition-all duration-200 ${
                                          isActive ? 'text-green-600 bg-green-50' : 'text-gray-600 hover:text-green-600 hover:bg-gray-50'
                                        }`
                                      }
                                    >
                                      {link.label}
                                    </NavLink>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <NavLink
                        to={item.to}
                        onClick={() => setMobileMenuOpen(false)}
                        className={({ isActive }) =>
                          `group flex rounded-lg px-4 py-3 text-base font-semibold transition-all duration-300 ${
                            isActive ? 'text-green-600 bg-green-50' : 'text-gray-700 hover:text-green-600'
                          }`
                        }
                      >
                        <span className="flex items-center gap-3">
                          <span className={
                            `h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                              location.pathname === item.to
                                ? 'bg-green-500 scale-125'
                                : 'bg-gray-300 group-hover:bg-green-500'
                            }`
                          } />
                          {item.label}
                        </span>
                      </NavLink>
                    )}
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.4, type: 'spring' }}
                  className="mt-6 border-t border-gray-200 pt-6"
                >
                  <Link
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full rounded-full bg-[var(--zim-green)] px-4 py-3 text-center text-sm font-semibold text-[var(--zim-black)] transition-all duration-300 hover:scale-[1.02] hover:brightness-110"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
