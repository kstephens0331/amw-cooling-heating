import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYelp, FaGoogle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo and Veteran Badge */}
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold text-blue-600">AMW Cooling & Heating</div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded shadow-sm">
            Veteran Owned
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-700">
          <Link to="/" className="hover:text-orange-500">Home</Link>
          <Link to="/about" className="hover:text-orange-500">About Us</Link>
          <Link to="/services" className="hover:text-orange-500">Services</Link>
          <Link to="/faqs" className="hover:text-orange-500">FAQs</Link>
          <Link to="/financing" className="hover:text-orange-500">Financing</Link>
          <Link to="/testimonials" className="hover:text-orange-500">Testimonials</Link>
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-3 text-blue-600">
          <a href="#"><FaFacebook size={18} /></a>
          <a href="#"><FaInstagram size={18} /></a>
          <a href="#"><FaGoogle size={18} /></a>
          <a href="#"><FaYelp size={18} /></a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
