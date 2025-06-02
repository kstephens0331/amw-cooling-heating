import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaGoogle, FaYelp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 px-4">
        {/* Contact info */}
        <div className="flex-1">
          <h3 className="font-bold text-lg">AMW Cooling & Heating</h3>
          <p className="text-sm">Conroe, TX</p>
          <p className="text-sm">Phone: (936) 587-7612</p>
          <p className="text-sm">Email: admin@amwairconditioning.com</p>
          <p className="text-sm mt-2">License #: TACLB133920E</p>
        </div>

        {/* Navigation links (horizontal on md+) */}
        <nav className="flex-1 flex flex-wrap gap-4 justify-center md:justify-start text-sm mt-4 md:mt-0">
          <Link to="/" className="hover:text-orange-400 transition">Home</Link>
          <Link to="/about" className="hover:text-orange-400 transition">About Us</Link>
          <Link to="/services" className="hover:text-orange-400 transition">Services</Link>
          <Link to="/faqs" className="hover:text-orange-400 transition">FAQs</Link>
          <Link to="/financing" className="hover:text-orange-400 transition">Financing</Link>
          <Link to="/testimonials" className="hover:text-orange-400 transition">Testimonials</Link>
          <Link to="/contact" className="hover:text-orange-400 transition">Contact</Link>
        </nav>

        {/* Social media links */}
        <div className="flex-1 flex justify-center md:justify-end gap-4 text-xl">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaGoogle /></a>
          <a href="#"><FaYelp /></a>
        </div>
      </div>

      <div className="mt-4 text-center text-xs">
        &copy; {new Date().getFullYear()} AMW Cooling & Heating LLC. All Rights Reserved.  Built by StephensCode LLC.
      </div>
    </footer>
  );
};

export default Footer;
