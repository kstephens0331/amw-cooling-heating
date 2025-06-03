import React from 'react';
import { Helmet } from 'react-helmet';
import { FaCheckCircle, FaDollarSign, FaHandshake } from 'react-icons/fa';
import Footer from '../components/Footer';

export default function Financing() {
  return (
    <main className="bg-white text-gray-800">
      <Helmet>
        <title>Financing Options | AMW Cooling & Heating LLC</title>
        <meta name="description" content="Explore HVAC financing options with Synchrony and FTL. Learn about benefits, the process, and how easy it is to get started with AMW Cooling & Heating." />
      </Helmet>

      {/* Hero */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Flexible HVAC Financing Options</h1>
          <p className="max-w-xl mx-auto text-gray-700">
            Comfort for your home shouldn’t wait. Our financing solutions make it easier than ever to get the HVAC system you need—affordably.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-blue-900 mb-6 text-center">Why Choose Financing?</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4 border border-gray-200 rounded shadow-sm">
              <FaDollarSign className="mx-auto text-blue-600 text-3xl mb-2" />
              <h3 className="font-semibold mb-2">Affordable Payments</h3>
              <p className="text-gray-700">Spread out the cost of your HVAC upgrade with convenient monthly payments that fit your budget.</p>
            </div>
            <div className="p-4 border border-gray-200 rounded shadow-sm">
              <FaHandshake className="mx-auto text-blue-600 text-3xl mb-2" />
              <h3 className="font-semibold mb-2">Trusted Partners</h3>
              <p className="text-gray-700">We work with Synchrony and FTL—reputable lenders who specialize in home improvement financing.</p>
            </div>
            <div className="p-4 border border-gray-200 rounded shadow-sm">
              <FaCheckCircle className="mx-auto text-blue-600 text-3xl mb-2" />
              <h3 className="font-semibold mb-2">Fast, Simple Process</h3>
              <p className="text-gray-700">Applications are quick, approvals are fast, and our team is here to guide you every step of the way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Options */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-start">
          <div className="p-6 rounded shadow bg-white border border-gray-200">
            <h2 className="text-2xl font-semibold text-blue-900 mb-2">Synchrony Financing</h2>
            <p className="mb-4 text-gray-700">
              Synchrony offers competitive rates and flexible terms for HVAC installations and major repairs. Enjoy low monthly payments, online account management, and peace of mind.
            </p>
            <a
              href="https://www.mysynchrony.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
            >
              Apply with Synchrony
            </a>
          </div>

          <div className="p-6 rounded shadow bg-white border border-gray-200">
            <h2 className="text-2xl font-semibold text-blue-900 mb-2">FTL (Second Chance) Financing</h2>
            <p className="mb-4 text-gray-700">
              If your credit isn’t perfect, FTL offers second-chance financing designed to help everyone access the comfort they deserve. Flexible terms, easy approvals, and simple online payments make it easy!
            </p>
            <a
              href="https://www.ftlfinance.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-2 bg-orange-500 text-white rounded shadow hover:bg-orange-600 transition"
            >
              Apply with FTL
            </a>
          </div>
        </div>
      </section>

      {/* What to Expect as CTA */}
<section className="py-12 text-center">
  <div className="max-w-2xl mx-auto px-4">
    <h2 className="text-2xl font-semibold text-blue-900 mb-2">What to Expect</h2>
    <p className="mb-4 text-gray-700">
      Our team will guide you through the simple financing application process, answer any questions you have, and help you find the perfect plan for your needs.
    </p>
    <a
      href="/contact"
      className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
    >
      Contact Us Today
    </a>
  </div>
</section>

      {/* FAQs about Financing */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4 text-center">Financing FAQs</h2>
          <ul className="space-y-4 text-gray-700">
            <li><strong>Q:</strong> Can I finance both installations and repairs?<br /><strong>A:</strong> Yes, both new installations and major repairs can be financed with Synchrony or FTL.</li>
            <li><strong>Q:</strong> Is the application process secure?<br /><strong>A:</strong> Absolutely! Both Synchrony and FTL use secure online applications to protect your information.</li>
            <li><strong>Q:</strong> Will I know my payment amount before signing?<br /><strong>A:</strong> Yes, you’ll see all terms and payment details clearly before agreeing to any financing plan.</li>
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 text-center">
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
        >
          Let’s Get Started
        </a>
      </section>
      <Footer />
    </main>
  );
}
