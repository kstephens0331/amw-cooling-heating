import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import logo from '../assets/images/FullLogo_Transparent.png';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYelp } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

<Helmet>
  <title>Contact Us | AMW Cooling & Heating LLC</title>
  <meta
    name="description"
    content="Get in touch with AMW Cooling & Heating for expert HVAC service. Call, email, or use our contact form to schedule an appointment today."
  />
  <meta
    name="keywords"
    content="contact AMW Cooling, HVAC phone number, HVAC appointment Conroe, heating cooling service request"
  />
</Helmet>

export default function Contact() {


  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="bg-white text-gray-800 font-sans min-h-screen">
      <Helmet>
        <title>Contact Us | AMW Cooling & Heating LLC</title>
        <meta name="description" content="Get in touch with AMW Cooling & Heating for HVAC services in Conroe, TX." />
        <meta name="keywords" content="HVAC contact, AMW Cooling & Heating, contact AMW" />
      </Helmet>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">Contact Us</h1>
        <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
          Need to schedule a repair, installation, or consultation? We’re here to help.
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Form */}
          <form
  action="https://formspree.io/f/mqabprnq"
  method="POST"
  className="flex-1 bg-gray-50 p-6 rounded-lg shadow-md"
>
  <div className="mb-4">
    <label className="block text-sm font-semibold mb-1">Full Name</label>
    <input name="name" type="text" className="w-full border border-gray-300 rounded px-3 py-2" required />
  </div>

  <div className="mb-4">
    <label className="block text-sm font-semibold mb-1">Email Address</label>
    <input name="email" type="email" className="w-full border border-gray-300 rounded px-3 py-2" required />
  </div>

  <div className="mb-4">
    <label className="block text-sm font-semibold mb-1">Phone Number</label>
    <input name="phone" type="tel" className="w-full border border-gray-300 rounded px-3 py-2" />
  </div>

  <div className="mb-4">
    <label className="block text-sm font-semibold mb-1">Message</label>
    <textarea name="message" rows="5" className="w-full border border-gray-300 rounded px-3 py-2" required></textarea>
  </div>

  <button
    type="submit"
    className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition text-sm"
  >
    Send Message
  </button>
</form>

          {/* Business Contact Info */}
          <div className="flex-1 text-sm md:text-base bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-blue-900">Reach Us Directly</h2>
            <p className="mb-2"><strong>Phone:</strong> <a href="tel:9365877612">(936) 587-7612</a></p>
            <p className="mb-2"><strong>Email:</strong> <a href="mailto:admin@amwairconditioning.com">admin@amwairconditioning.com</a></p>
            <p className="mb-2"><strong>Location:</strong> Conroe, TX</p>
            <p className="mt-4 text-s text-gray-500">Veteran-owned and proud to serve Conroe, The Woodlands, Spring, Willis, and surrounding areas.</p>
            <div className="mt-6">
              <img
                src={logo}
                alt="AMW Cooling & Heating Logo"
                className="w-full max-w-[450px] mx-auto"
              />
            </div>
          </div>
        </div>

        {/* Calendly Embed */}
        <section className="mt-16 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl p-8">
  <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">Book a Service with Josh & Anjelica</h2>
  <p className="text-center text-gray-700 mb-6 max-w-2xl mx-auto">
    Whether you're looking for a second opinion, urgent HVAC help, or a seasonal check-up, our booking calendar makes it simple.
    Choose your preferred time below and we’ll take care of the rest.
  </p>
  <div
    className="calendly-inline-widget rounded-xl overflow-hidden"
    data-url="https://calendly.com/admin-amwairconditioning"
    style={{ minWidth: '320px', height: '740px' }}
  ></div>
</section>
      </section>
{/* Footer placed inside <main> */}
        <footer className="bg-blue-600 text-white py-8 mt-12">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 px-4">
            {/* Contact info */}
            <div className="flex-1">
              <h3 className="font-bold text-lg">AMW Cooling & Heating</h3>
              <p className="text-sm">Conroe, TX</p>
              <p className="text-sm">Phone: (936) 587-7612</p>
              <p className="text-sm">Email: admin@amwairconditioning.com</p>
              <p className="text-sm mt-2">License #: TACLB133920E</p>
            </div>

            {/* Navigation links */}
            <nav className="flex-1 flex flex-wrap gap-4 justify-center md:justify-start text-sm mt-4 md:mt-0">
              <Link to="/" className="hover:text-orange-400 transition">Home</Link>
              <Link to="/about" className="hover:text-orange-400 transition">About Us</Link>
              <Link to="/services" className="hover:text-orange-400 transition">Services</Link>
              <Link to="/faqs" className="hover:text-orange-400 transition">FAQs</Link>
              <Link to="/financing" className="hover:text-orange-400 transition">Financing</Link>
              <Link to="/testimonials" className="hover:text-orange-400 transition">Testimonials</Link>
              <Link to="/contact" className="hover:text-orange-400 transition">Contact</Link>
            </nav>

            <div className="flex-1 flex flex-col items-center md:items-end text-white">
  <div className="flex justify-center md:justify-end gap-4 text-xl mb-2">
    <a
      href="https://www.facebook.com/people/AMW-Cooling-Heating-LLC/61569862892114/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-300 transition"
    >
      <FaFacebook />
    </a>
    <a
      href="https://www.instagram.com/p/DKNmevRyLli/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-pink-400 transition"
    >
      <FaInstagram />
    </a>
    <a
      href="https://www.google.com/search?sca_esv=f6bc877b3d7fa12d&..."
      target="_blank"
      rel="noopener noreferrer"
    >
      <FcGoogle />
    </a>
    <a
      href="https://www.yelp.com/biz/amw-cooling-and-heating-conroe"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-red-400 transition"
    >
      <FaYelp />
    </a>
  </div>

  <div className="text-xs text-white text-center md:text-right">
    <p>Hours: Mon – Sat, 8:00 AM – 9:00 PM</p>
    <p>Emergency Service Available from 5:00 PM – 9:00 PM</p>
  </div>
</div>
          </div>

          <div className="mt-4 text-center text-xs">
            &copy; {new Date().getFullYear()} AMW Cooling & Heating LLC. All Rights Reserved. Built by{' '}
            <a
              href="https://stephenscode.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-white"
              style={{ textDecoration: 'none' }}
            >
              StephensCode LLC
            </a>.
          </div>
        </footer>
    </div>
  );
}
