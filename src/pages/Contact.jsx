import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet';
import logo from '../assets/images/FullLogo_Transparent.png';


export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'your_service_id',
      'your_template_id',
      form.current,
      'your_public_key'
    )
    .then(() => {
      alert('Message sent successfully!');
      e.target.reset();
    }, (error) => {
      console.error(error.text);
      alert('There was an error sending your message.');
    });
  };

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
          <form ref={form} onSubmit={sendEmail} className="flex-1 bg-gray-50 p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Full Name</label>
              <input name="user_name" type="text" className="w-full border border-gray-300 rounded px-3 py-2" required />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Email Address</label>
              <input name="user_email" type="email" className="w-full border border-gray-300 rounded px-3 py-2" required />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Phone Number</label>
              <input name="user_phone" type="tel" className="w-full border border-gray-300 rounded px-3 py-2" />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Message</label>
              <textarea name="message" rows="5" className="w-full border border-gray-300 rounded px-3 py-2" required></textarea>
            </div>

            <button type="submit" className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition text-sm">
              Send Message
            </button>
          </form>

          {/* Business Contact Info */}
          <div className="flex-1 text-sm md:text-base bg-white p-6 border border-gray-200 rounded-lg shadow-md">
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
      </section>
    </div>
  );
}
