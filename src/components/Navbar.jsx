import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYelp } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc'; // Google colorful icon

const Navbar = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">AMW Cooling & Heating</div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-700">
          <Link to="/" className="hover:text-orange-500">Home</Link>
          <Link to="/about" className="hover:text-orange-500">About Us</Link>
          <Link to="/services" className="hover:text-orange-500">Services</Link>
          <Link to="/faqs" className="hover:text-orange-500">FAQs</Link>
          <Link to="/financing" className="hover:text-orange-500">Financing</Link>
          <Link to="/testimonials" className="hover:text-orange-500">Testimonials</Link>
          <Link to="/contact" className="hover:text-orange-500">Contact</Link>
        </nav>

        {/* Social Icons with Updated Links and Brand Colors */}
        <div className="flex space-x-3 items-center">
          <a
            href="https://www.facebook.com/people/AMW-Cooling-Heating-LLC/61569862892114/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition"
          >
            <FaFacebook size={18} />
          </a>
          <a
            href="https://www.instagram.com/amwairconditioning/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-700 transition"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href="https://www.google.com/search?sca_esv=f6bc877b3d7fa12d&rlz=1C1UEAD_enUS1100US1100&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-Ew1xWYRh3W0x95s4I1CY56p8ZDCU0RELO-yfbJ2A3BPTIYULwgDJs1JMco_ssAI31rRlsh52piMFkTrezcULB24LRNBJZFtx7Ep6HasQcQHtaXQRUKjSK2LYiEhZ9pKL6HGbGVCbuZrD8W32y3cPnVMTFXcMDE00lIt89eSmCQG6BqJXvg%3D%3D&q=AMW+Cooling+%26+Heating+%7C+HVAC+Repair+Emergency+Service+%7C+AC+Unit+Install+Conroe+Reviews&sa=X&ved=2ahUKEwii5f-o59KNAxV4KEQIHYxDEtcQ0bkNegQIPBAD&biw=1817&bih=944&dpr=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FcGoogle size={18} /> {/* Colorful Google icon */}
          </a>
          <a
            href="https://www.yelp.com/biz/amw-cooling-and-heating-conroe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-700 transition"
          >
            <FaYelp size={18} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
