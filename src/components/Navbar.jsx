import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYelp, FaBars, FaTimes } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import logo from '../assets/images/amwlogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <img
            src={logo}
            alt="AMW Cooling & Heating - veteran-owned HVAC company in Conroe TX"
            className="h-14 md:h-16 w-auto object-contain"
          />
          <span className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold whitespace-nowrap">
            <span className="text-blue-600">AMW Cooling & </span><span className="text-red-500">Heating</span><span className="text-blue-600 hidden sm:inline"> LLC</span>
          </span>
        </Link>

        {/* Hamburger Menu Icon */}
        <button
          onClick={toggleMenu}
          className="text-gray-700 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
          aria-label="Menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Compact Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 top-full w-full md:w-auto md:right-4 bg-white shadow-lg border border-gray-200 rounded-b-lg md:rounded-lg z-50">
          <div className="p-4 grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-1 text-sm">
            {/* Column 1: Main Pages */}
            <div>
              <div className="font-semibold text-gray-500 text-xs uppercase mb-1">Pages</div>
              <Link to="/" className="block py-1 hover:text-orange-600" onClick={closeMenu}>Home</Link>
              <Link to="/about" className="block py-1 hover:text-orange-600" onClick={closeMenu}>About Us</Link>
              <Link to="/faqs" className="block py-1 hover:text-orange-600" onClick={closeMenu}>FAQs</Link>
              <Link to="/financing" className="block py-1 hover:text-orange-600" onClick={closeMenu}>Financing</Link>
              <Link to="/testimonials" className="block py-1 hover:text-orange-600" onClick={closeMenu}>Testimonials</Link>
              <Link to="/contact" className="block py-1 hover:text-orange-600" onClick={closeMenu}>Contact</Link>
              <Link to="/blog" className="block py-1 hover:text-orange-600" onClick={closeMenu}>Blog</Link>
            </div>

            {/* Column 2: Services */}
            <div>
              <div className="font-semibold text-gray-500 text-xs uppercase mb-1">Services</div>
              <Link to="/services" className="block py-1 hover:text-orange-600" onClick={closeMenu}>All Services</Link>
              <Link to="/services/ac-repair" className="block py-1 hover:text-orange-600" onClick={closeMenu}>AC Repair</Link>
              <Link to="/services/heating-repair" className="block py-1 hover:text-orange-600" onClick={closeMenu}>Heating Repair</Link>
              <Link to="/services/hvac-maintenance" className="block py-1 hover:text-orange-600" onClick={closeMenu}>Maintenance</Link>
              <Link to="/services/indoor-air-quality" className="block py-1 hover:text-orange-600" onClick={closeMenu}>Air Quality</Link>
              <Link to="/services/smart-thermostats" className="block py-1 hover:text-orange-600" onClick={closeMenu}>Thermostats</Link>
              <Link to="/services/dryer-vent-cleaning" className="block py-1 hover:text-orange-600" onClick={closeMenu}>Dryer Vents</Link>
            </div>

            {/* Column 3: Contact & Social (visible on md+) */}
            <div className="col-span-2 md:col-span-1 mt-3 md:mt-0 pt-3 md:pt-0 border-t md:border-t-0 border-gray-100">
              <div className="font-semibold text-gray-500 text-xs uppercase mb-1">Connect</div>
              <a href="tel:+19363311339" className="block py-1 text-blue-600 font-medium">(936) 331-1339</a>
              <div className="flex gap-3 mt-2">
                <a href="https://www.facebook.com/people/AMW-Cooling-Heating-LLC/61569862892114/" target="_blank" rel="noopener noreferrer" className="text-blue-600" aria-label="Facebook">
                  <FaFacebook size={18} />
                </a>
                <a href="https://www.instagram.com/amwairconditioning/" target="_blank" rel="noopener noreferrer" className="text-pink-600" aria-label="Instagram">
                  <FaInstagram size={18} />
                </a>
                <a href="https://www.google.com/search?q=AMW+Cooling+%26+Heating+Reviews" target="_blank" rel="noopener noreferrer" aria-label="Google">
                  <FcGoogle size={18} />
                </a>
                <a href="https://www.yelp.com/biz/amw-cooling-and-heating-conroe" target="_blank" rel="noopener noreferrer" className="text-red-600" aria-label="Yelp">
                  <FaYelp size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
