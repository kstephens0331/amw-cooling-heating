import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaDollarSign, FaHandshake, FaPhone, FaCalendarCheck } from 'react-icons/fa';
import ManufacturerCarousel from '../components/ManufacturerCarousel';
import MapSection from '../components/MapSection';
import Footer from '../components/Footer';

export default function Financing() {
  return (
    <main className="bg-white text-gray-800">
      <Helmet>
        <title>Financing Options | AMW Cooling & Heating LLC</title>
        <meta name="description" content="Explore HVAC financing options with Synchrony and FTL. Learn about benefits, the process, and how easy it is to get started with AMW Cooling & Heating." />
      </Helmet>

      {/* Patriotic Stripe */}
      <div className="h-1.5 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>

      {/* Hero */}
      <section className="bg-blue-900 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Flexible HVAC Financing Options</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
            Comfort for your home shouldn't wait. Our financing solutions make it easier than ever to get the HVAC system you need—affordably.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+19363311339"
              className="inline-flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition font-semibold"
            >
              <FaPhone className="w-4 h-4" />
              (936) 331-1339
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-lg hover:bg-blue-50 transition font-semibold"
            >
              <FaCalendarCheck className="w-4 h-4" />
              Schedule Service
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom Stripe */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>

      {/* Benefits Section - Blue Background with White Cards */}
      <section className="bg-blue-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center text-white mb-4 tracking-wide italic">
            WHY CHOOSE FINANCING?
          </h2>
          <p className="text-center text-blue-200 mb-12 max-w-2xl mx-auto">
            Make comfort affordable with flexible payment options tailored to your budget.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center flex-shrink-0">
                  <FaDollarSign className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-blue-900">Affordable Payments</h3>
              </div>
              <p className="text-gray-600 text-sm">Spread out the cost of your HVAC upgrade with convenient monthly payments that fit your budget.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                  <FaHandshake className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-blue-900">Trusted Partners</h3>
              </div>
              <p className="text-gray-600 text-sm">We work with Synchrony and FTL—reputable lenders who specialize in home improvement financing.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center flex-shrink-0">
                  <FaCheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-blue-900">Fast & Simple</h3>
              </div>
              <p className="text-gray-600 text-sm">Applications are quick, approvals are fast, and our team is here to guide you every step of the way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Options */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-start">
          <div className="p-6 rounded shadow bg-white border border-gray-200">
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-3">Synchrony Financing</h2>
            <p className="mb-4 text-base text-gray-700">
              Synchrony offers competitive rates and flexible terms for HVAC installations and major repairs. Enjoy low monthly payments, online account management, and peace of mind.
            </p>
            <a
              href="https://www.mysynchrony.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-5 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition text-base font-semibold"
            >
              Apply with Synchrony
            </a>
          </div>

          <div className="p-6 rounded shadow bg-white border border-gray-200">
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-3">FTL (Second Chance) Financing</h2>
            <p className="mb-4 text-base text-gray-700">
              If your credit isn't perfect, FTL offers second-chance financing designed to help everyone access the comfort they deserve. Flexible terms, easy approvals, and simple online payments make it easy!
            </p>
            <a
              href="https://www.ftlfinance.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-5 py-3 bg-orange-500 text-white rounded shadow hover:bg-orange-600 transition text-base font-semibold"
            >
              Apply with FTL
            </a>
          </div>
        </div>
      </section>

      {/* What to Expect as CTA */}
<section className="py-12 text-center">
  <div className="max-w-2xl mx-auto px-4">
    <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-3">What to Expect</h2>
    <p className="mb-4 text-base md:text-lg text-gray-700">
      Our team will guide you through the simple financing application process, answer any questions you have, and help you find the perfect plan for your needs.
    </p>
    <a
      href="/contact"
      className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition text-base font-semibold"
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
      <section className="relative overflow-hidden">
        <div className="h-1.5 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>
        <div className="bg-blue-900 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Ready to Get Started?</h2>
            <p className="text-lg text-blue-200 max-w-xl mx-auto mb-8">
              Let us help you find the perfect financing plan for your HVAC needs.
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
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg hover:bg-blue-50 transition font-bold text-lg"
              >
                <FaCalendarCheck className="w-5 h-5" />
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      <MapSection />
      <ManufacturerCarousel />
      <Footer />
    </main>
  );
}
