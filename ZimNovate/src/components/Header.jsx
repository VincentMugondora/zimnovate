import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-blue-600">Zimnovate</h1>
        <nav className="space-x-6">
          <Link to="/" className="hover:text-green-500">Home</Link>
          <Link to="/about" className="hover:text-green-500">About</Link>
          <Link to="/services" className="hover:text-green-500">Services</Link>
          <Link to="/portfolio" className="hover:text-green-500">Portfolio</Link>
          <Link to="/contact" className="hover:text-green-500">Contact</Link>
          <button 
            onClick={toggleTheme} 
            className="ml-4 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
