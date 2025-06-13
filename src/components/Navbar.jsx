import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYelp, FaBars, FaTimes } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import logo from '../assets/images/FullLogo_Transparent.webp'
import VoiceSearch from "./VoiceSearch";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navigate = useNavigate();

const speak = (text) => {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  window.speechSynthesis.speak(utterance);
};

const handleVoiceResult = (query) => {
  console.log("Voice search for:", query);

  if (query.includes("about")) {
    speak("Taking you to our About Us page.");
    navigate("/about");
  } else if (query.includes("contact") || query.includes("phone")) {
    speak("Opening the contact page.");
    navigate("/contact");
  } else if (query.includes("services") || query.includes("repair")) {
    speak("Showing our services.");
    navigate("/services");
  } else if (query.includes("quote") || query.includes("estimate")) {
    speak("Let's get you a quote.");
    navigate("/contact");
  } else if (query.includes("home") || query.includes("main")) {
    speak("Going back to the homepage.");
    navigate("/");
  } else if (query.includes("finance") || query.includes("payment")) {
    speak("Here are your financing options.");
    navigate("/financing");
  } else {
    speak("Sorry, I didn't catch that.");
    alert(`No match for "${query}"`);
  }
};

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
<Link to="/" className="flex items-center space-x-2">
  <img
    src={logo}
    alt="AMW Logo"
    className="h-14 w-auto object-contain"
  />
  <span className="text-lg md:text-2xl font-bold text-blue-600 whitespace-nowrap">
    AMW Cooling & Heating LLC
  </span>
</Link>


        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-gray-700">
          <Link to="/" className="hover:text-orange-700">Home</Link>
          <Link to="/about" className="hover:text-orange-700">About Us</Link>
          <Link to="/services" className="hover:text-orange-700">Services</Link>
          <Link to="/faqs" className="hover:text-orange-700">FAQs</Link>
          <Link to="/financing" className="hover:text-orange-700">Financing</Link>
          <Link to="/testimonials" className="hover:text-orange-700">Testimonials</Link>
          <Link to="/contact" className="hover:text-orange-700">Contact</Link>
        </nav>
        <VoiceSearch onResult={handleVoiceResult} />

        {/* Mobile Icon */}
        <button
  onClick={toggleMenu}
  className="md:hidden text-gray-700 z-50 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
  aria-label="Menu"
>
  {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
</button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200 px-4 py-4 space-y-3 text-gray-700">
          <Link to="/" className="block" onClick={closeMenu}>Home</Link>
          <Link to="/about" className="block" onClick={closeMenu}>About Us</Link>
          <Link to="/services" className="block" onClick={closeMenu}>Services</Link>
          <Link to="/faqs" className="block" onClick={closeMenu}>FAQs</Link>
          <Link to="/financing" className="block" onClick={closeMenu}>Financing</Link>
          <Link to="/testimonials" className="block" onClick={closeMenu}>Testimonials</Link>
          <Link to="/contact" className="block" onClick={closeMenu}>Contact</Link>
          <VoiceSearch onResult={handleVoiceResult} />

          {/* Social Icons */}
          <div className="flex justify-start space-x-4 pt-3">
            <a href="https://www.facebook.com/people/AMW-Cooling-Heating-LLC/61569862892114/" target="_blank" rel="noopener noreferrer" className="text-blue-600" aria-label="AMW Facebook page">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/amwairconditioning/" target="_blank" rel="noopener noreferrer" className="text-pink-700" aria-label="AMW Instagram profile">
              <FaInstagram />
            </a>
            <a href="https://www.google.com/search?q=AMW+Cooling+%26+Heating+Reviews" target="_blank" rel="noopener noreferrer" aria-label="AMW Google reviews">
              <FcGoogle />
            </a>
            <a href="https://www.yelp.com/biz/amw-cooling-and-heating-conroe" target="_blank" rel="noopener noreferrer" className="text-red-700" aria-label="AMW Yelp listing">
              <FaYelp />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
