import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { Menu, X } from "lucide-react";

const Header = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const [open, setOpen] = useState(false);

  return (
    <header className="relative bg-white shadow-md dark:bg-gray-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-12 py-4 md:px-16 lg:px-20">
        <h1 className="text-2xl font-bold text-blue-600">Zimnovate</h1>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link to="/" className="hover:text-green-500">Home</Link>
          <Link to="/about" className="hover:text-green-500">About</Link>
          <Link to="/services" className="hover:text-green-500">Services</Link>
          <Link to="/portfolio" className="hover:text-green-500">Portfolio</Link>
          <Link to="/blog" className="hover:text-green-500">Blog</Link>
          <Link to="/careers" className="hover:text-green-500">Careers</Link>
          <Link to="/contact" className="hover:text-green-500">Contact</Link>
          <button
            onClick={toggleTheme}
            className="ml-2 rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden dark:text-gray-200 dark:hover:bg-gray-800"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="absolute left-0 right-0 top-full border-t border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900 md:hidden">
          <div className="mx-auto max-w-7xl px-6 py-4">
            <div className="grid gap-3">
              <Link onClick={() => setOpen(false)} to="/" className="py-1 hover:text-green-500">Home</Link>
              <Link onClick={() => setOpen(false)} to="/about" className="py-1 hover:text-green-500">About</Link>
              <Link onClick={() => setOpen(false)} to="/services" className="py-1 hover:text-green-500">Services</Link>
              <Link onClick={() => setOpen(false)} to="/portfolio" className="py-1 hover:text-green-500">Portfolio</Link>
              <Link onClick={() => setOpen(false)} to="/blog" className="py-1 hover:text-green-500">Blog</Link>
              <Link onClick={() => setOpen(false)} to="/careers" className="py-1 hover:text-green-500">Careers</Link>
              <Link onClick={() => setOpen(false)} to="/contact" className="py-1 hover:text-green-500">Contact</Link>
              <button
                onClick={() => { toggleTheme(); setOpen(false); }}
                className="mt-2 w-full rounded bg-blue-500 px-3 py-2 text-white hover:bg-blue-600"
              >
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
