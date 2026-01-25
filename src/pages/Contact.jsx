import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaPhone, FaCalendarCheck, FaEnvelope, FaMapMarkerAlt, FaShieldAlt } from 'react-icons/fa';
import logo from '../assets/images/amwlogo.png';
import ManufacturerCarousel from '../components/ManufacturerCarousel';
import MapSection from '../components/MapSection';
import Footer from '../components/Footer';

export default function Contact() {
  useEffect(() => {
    // Load Calendly CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Load Calendly JS
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-white text-gray-800 font-sans min-h-screen">
      <Helmet>
        <title>Contact Us | AMW Cooling & Heating LLC</title>
        <meta
          name="description"
          content="Get in touch with AMW Cooling & Heating for expert HVAC service in Conroe, TX. Call (936) 331-1339, email, or schedule online today."
        />
        <meta
          name="keywords"
          content="contact AMW Cooling, HVAC phone number, HVAC appointment Conroe, heating cooling service request, schedule HVAC service"
        />
      </Helmet>

      {/* Patriotic Stripe */}
      <div className="h-1.5 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>

      {/* Hero Section */}
      <section className="bg-blue-900 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* Contact Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <FaEnvelope className="text-blue-300 w-4 h-4" />
            <span className="text-white text-sm font-medium">Get In Touch</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
            Need to schedule a repair, installation, or consultation? We're here to help you stay comfortable year-round.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+19363311339"
              className="inline-flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition font-semibold"
            >
              <FaPhone className="w-4 h-4" />
              (936) 331-1339
            </a>
            <a
              href="mailto:admin@amwairconditioning.com"
              className="inline-flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-lg hover:bg-blue-50 transition font-semibold"
            >
              <FaEnvelope className="w-4 h-4" />
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Bottom Stripe */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>

      {/* Contact Info Cards */}
      <section className="py-12 bg-blue-900">
        <div className="bg-red-500 py-3 mb-10">
          <p className="text-center text-white text-sm font-medium tracking-widest uppercase">
            Multiple Ways to Reach Us
          </p>
        </div>
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Phone Card */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-600">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center flex-shrink-0">
                  <FaPhone className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-blue-900">Call Us</h3>
              </div>
              <p className="text-gray-600 mb-3">Speak directly with our team for immediate assistance.</p>
              <a href="tel:+19363311339" className="text-red-500 font-bold text-lg hover:text-red-600">(936) 331-1339</a>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-red-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-blue-900">Email Us</h3>
              </div>
              <p className="text-gray-600 mb-3">Send us a message and we'll respond promptly.</p>
              <a href="mailto:admin@amwairconditioning.com" className="text-blue-600 font-semibold hover:text-blue-700 text-sm whitespace-nowrap">admin@amwairconditioning.com</a>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-600">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-blue-900">Service Area</h3>
              </div>
              <p className="text-gray-600 mb-3">Serving Conroe, The Woodlands, Spring, Willis, and surrounding areas.</p>
              <span className="text-blue-900 font-semibold">Montgomery County, TX</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-12 bg-gray-50">
        <div className="h-1 bg-gradient-to-r from-blue-600 via-white to-red-500 mb-10"></div>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-3 tracking-wide">SEND US A MESSAGE</h2>
            <p className="text-gray-600 text-lg">Fill out the form below and we'll get back to you as soon as possible.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Contact Form */}
            <form
              action="https://formspree.io/f/mqabprnq"
              method="POST"
              className="flex-1 bg-white p-8 rounded-xl shadow-lg border-t-4 border-red-500"
            >
              <div className="mb-5">
                <label className="block text-base font-bold text-blue-900 mb-2">Full Name</label>
                <input name="name" type="text" className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-base focus:border-blue-500 focus:outline-none transition" required />
              </div>

              <div className="mb-5">
                <label className="block text-base font-bold text-blue-900 mb-2">Email Address</label>
                <input name="email" type="email" className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-base focus:border-blue-500 focus:outline-none transition" required />
              </div>

              <div className="mb-5">
                <label className="block text-base font-bold text-blue-900 mb-2">Phone Number</label>
                <input name="phone" type="tel" className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-base focus:border-blue-500 focus:outline-none transition" />
              </div>

              <div className="mb-5">
                <label className="block text-base font-bold text-blue-900 mb-2">Message</label>
                <textarea name="message" rows="5" className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-base focus:border-blue-500 focus:outline-none transition" required></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-500 text-white px-6 py-4 rounded-lg hover:bg-red-600 transition text-lg font-bold"
              >
                Send Message
              </button>
            </form>

            {/* Business Contact Info */}
            <div className="flex-1 bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-600">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 border-l-4 border-red-500 pl-4">Why Contact AMW?</h2>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold mt-1">✓</span>
                  <span className="text-gray-700"><strong className="text-blue-900">Fast Response</strong> – We prioritize your comfort and respond quickly</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold mt-1">✓</span>
                  <span className="text-gray-700"><strong className="text-blue-900">Honest Pricing</strong> – No hidden fees, transparent estimates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold mt-1">✓</span>
                  <span className="text-gray-700"><strong className="text-blue-900">Veteran-Owned</strong> – Integrity and discipline in every job</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold mt-1">✓</span>
                  <span className="text-gray-700"><strong className="text-blue-900">Licensed & Insured</strong> – TACLB133920E for your peace of mind</span>
                </li>
              </ul>

              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600 italic">"We treat every customer like family. Your comfort is our mission."</p>
                <p className="text-sm font-bold text-blue-900 mt-2">– Josh & Anjelica, Owners</p>
              </div>

              <div className="flex justify-center">
                <img
                  src={logo}
                  alt="AMW Cooling & Heating Logo"
                  className="w-full max-w-[280px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Embed - Book a Service */}
      <section className="py-12 bg-white">
        <div className="h-1 bg-gradient-to-r from-blue-600 via-white to-red-500 mb-10"></div>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-3 tracking-wide">BOOK A SERVICE</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Whether you're looking for a second opinion, urgent HVAC help, or a seasonal check-up, our booking calendar makes it simple.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg border-t-4 border-red-500 overflow-hidden">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/admin-amwairconditioning?hide_event_type_details=1&hide_gdpr_banner=1"
              style={{ minWidth: '320px', height: '740px' }}
            ></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        <div className="h-1.5 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>
        <div className="bg-blue-900 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-red-500 rounded-full px-4 py-2 mb-6">
              <FaShieldAlt className="text-white w-4 h-4" />
              <span className="text-white text-sm font-semibold">Veteran-Owned & Operated</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-blue-200 max-w-xl mx-auto mb-8">
              Contact AMW Cooling & Heating today for expert HVAC services in Conroe, TX and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+19363311339"
                className="inline-flex items-center justify-center gap-2 bg-red-500 text-white px-8 py-4 rounded-lg hover:bg-red-600 transition font-bold text-lg"
              >
                <FaPhone className="w-5 h-5" />
                (936) 331-1339
              </a>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg hover:bg-blue-50 transition font-bold text-lg"
              >
                <FaCalendarCheck className="w-5 h-5" />
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <MapSection />
      <ManufacturerCarousel />
      <Footer />
    </div>
  );
}
