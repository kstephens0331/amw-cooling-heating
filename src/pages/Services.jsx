// src/pages/Services.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import ManufacturerCarousel from '../components/ManufacturerCarousel';
import Footer from '../components/Footer';

export default function Services() {
  return (
    <main className="bg-gray-50 text-gray-800 font-sans">
      <Helmet>
        <title>Our Services | AMW Cooling & Heating LLC</title>
        <meta name="description" content="Explore our comprehensive HVAC services: heating, cooling, ventilation, new installations, maintenance, and more." />
      </Helmet>

      {/* Title Section with CTA */}
      <section className="text-center bg-gradient-to-br from-blue-50 to-white py-10 md:py-12 mb-8 rounded shadow">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">Our Services</h1>
        <p className="text-sm md:text-base text-gray-700 max-w-2xl mx-auto mb-4">
          From heating to cooling and everything in between, we provide comprehensive solutions to keep you comfortable year-round.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
          <a
            href="tel:555-555-5555"
            className="inline-block px-4 py-2 bg-orange-500 text-white rounded shadow hover:bg-orange-600 transition text-xs md:text-sm"
          >
            📞 Call Now
          </a>
          <a
            href="/contact"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition text-xs md:text-sm"
          >
            📧 Contact Us
          </a>
        </div>
      </section>

      <section className="container mx-auto px-4">
        {/* 1️⃣ Heating Services */}
        <div className="bg-white rounded shadow p-4 flex flex-col-reverse lg:flex-row items-center gap-6 my-8">
          <div className="w-full lg:w-1/2 text-sm md:text-base text-gray-700">
            <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-2">🔥 Heating Services</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>🛠️ <strong>New Heater Installations</strong> – Efficient furnaces, heat pumps, and hybrid systems.</li>
              <li>🔧 <strong>Heater Repairs</strong> – Quick, reliable fixes for all heating units.</li>
              <li>🪛 <strong>Seasonal Maintenance</strong> – Keep your system running at peak efficiency.</li>
              <li>⚙️ <strong>System Upgrades</strong> – Modern performance and energy savings.</li>
              <li>🎛️ <strong>Thermostat Services</strong> – Precision controls for comfort and economy.</li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 h-64 rounded overflow-hidden shadow">
            <img src="/placeholders/heating-placeholder.jpg" alt="Heating services" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* 2️⃣ Air Conditioning Services */}
        <div className="bg-white rounded shadow p-4 flex flex-col lg:flex-row items-center gap-6 my-8">
          <div className="w-full lg:w-1/2 h-64 rounded overflow-hidden shadow">
            <img src="/placeholders/cooling-placeholder.jpg" alt="Cooling services" className="w-full h-full object-cover" />
          </div>
          <div className="w-full lg:w-1/2 text-sm md:text-base text-gray-700">
            <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-2">❄️ Air Conditioning Services</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>🛠️ <strong>AC Installations</strong> – Energy-efficient air conditioning systems.</li>
              <li>🔧 <strong>AC Repairs</strong> – Fast service to restore cool air quickly.</li>
              <li>🪛 <strong>Seasonal Tune-Ups</strong> – Prevent breakdowns and maintain performance.</li>
              <li>⚙️ <strong>Humidity Management</strong> – Keep your indoor air comfortable.</li>
              <li>🎛️ <strong>Smart Thermostats</strong> – Control cooling from anywhere.</li>
            </ul>
          </div>
        </div>

        {/* 3️⃣ Ventilation Services */}
        <div className="bg-white rounded shadow p-4 flex flex-col-reverse lg:flex-row items-center gap-6 my-8">
          <div className="w-full lg:w-1/2 text-sm md:text-base text-gray-700">
            <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-2">🌬️ Ventilation Services</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>🌪️ <strong>Ductwork Installation</strong> – Balanced airflow in every room.</li>
              <li>🧰 <strong>Ventilation Repairs</strong> – Remove blockages and fix leaks.</li>
              <li>🔄 <strong>Airflow Balancing</strong> – Even temperatures throughout your space.</li>
              <li>💨 <strong>Whole-House Ventilation</strong> – Remove stale air, bring in fresh air.</li>
              <li>⚙️ <strong>Exhaust Systems</strong> – Proper moisture control and ventilation.</li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 h-64 rounded overflow-hidden shadow">
            <img src="/placeholders/ventilation-placeholder.jpg" alt="Ventilation services" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* 4️⃣ New Installations */}
        <div className="bg-white rounded shadow p-4 flex flex-col lg:flex-row items-center gap-6 my-8">
          <div className="w-full lg:w-1/2 h-64 rounded overflow-hidden shadow">
            <img src="/placeholders/new-install-placeholder.jpg" alt="New system installations" className="w-full h-full object-cover" />
          </div>
          <div className="w-full lg:w-1/2 text-sm md:text-base text-gray-700">
            <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-2">🆕 New Installations</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>🏠 <strong>New Construction HVAC</strong> – Tailored systems for your building.</li>
              <li>🔧 <strong>System Replacements</strong> – Upgrade outdated equipment.</li>
              <li>⚙️ <strong>Load Calculations</strong> – Optimal sizing for peak efficiency.</li>
              <li>🎛️ <strong>Smart Integration</strong> – Modern, connected controls.</li>
              <li>📝 <strong>Post-Install Testing</strong> – Ensure perfect operation.</li>
            </ul>
          </div>
        </div>

        {/* 5️⃣ Repairs and Maintenance */}
        <div className="bg-white rounded shadow p-4 flex flex-col-reverse lg:flex-row items-center gap-6 my-8">
          <div className="w-full lg:w-1/2 text-sm md:text-base text-gray-700">
            <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-2">🛠️ Repairs & Maintenance</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>🔧 <strong>Emergency Repairs</strong> – Quick fixes for urgent issues.</li>
              <li>🪛 <strong>Preventative Maintenance</strong> – Keep your system running smoothly.</li>
              <li>📝 <strong>Seasonal Tune-Ups</strong> – Maximize lifespan and performance.</li>
              <li>🔍 <strong>Inspections & Diagnostics</strong> – Identify and fix issues early.</li>
              <li>⚙️ <strong>Efficiency Optimization</strong> – Save on energy bills year-round.</li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 h-64 rounded overflow-hidden shadow">
            <img src="/placeholders/maintenance-placeholder.jpg" alt="Repairs and maintenance" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* 6️⃣ Air Quality Solutions */}
        <div className="bg-white rounded shadow p-4 flex flex-col lg:flex-row items-center gap-6 my-8">
          <div className="w-full lg:w-1/2 h-64 rounded overflow-hidden shadow">
            <img src="/placeholders/air-quality-placeholder.jpg" alt="Air quality solutions" className="w-full h-full object-cover" />
          </div>
          <div className="w-full lg:w-1/2 text-sm md:text-base text-gray-700">
            <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-2">🌿 Air Quality Solutions</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>🌬️ <strong>Air Filtration</strong> – Cleaner, healthier air.</li>
              <li>💧 <strong>Humidity Control</strong> – Comfort in every season.</li>
              <li>🌟 <strong>Air Purification</strong> – Eliminate allergens and pollutants.</li>
              <li>🌀 <strong>Duct Cleaning</strong> – Improve airflow and cleanliness.</li>
              <li>🔬 <strong>IAQ Testing</strong> – Comprehensive indoor air analysis.</li>
            </ul>
          </div>
        </div>

        {/* 7️⃣ Emergency Services */}
        <div className="bg-white rounded shadow p-4 flex flex-col-reverse lg:flex-row items-center gap-6 my-8">
          <div className="w-full lg:w-1/2 text-sm md:text-base text-gray-700">
            <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-2">🚨 Emergency Services</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>⏰ <strong>24/7 Service</strong> – Always on call for your emergencies.</li>
              <li>⚡ <strong>Immediate Response</strong> – Fast action to restore comfort.</li>
              <li>🔧 <strong>Emergency Repairs</strong> – Rapid, effective fixes when it matters.</li>
              <li>📞 <strong>Direct Support</strong> – Call us anytime for urgent needs.</li>
              <li>💪 <strong>Peace of Mind</strong> – Your comfort and safety are our top priorities.</li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 h-64 rounded overflow-hidden shadow">
            <img src="/placeholders/emergency-placeholder.jpg" alt="Emergency services" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-blue-900 mb-4">Our Trusted Manufacturers</h2>
          <p className="text-sm md:text-base text-center text-gray-700 mb-6 max-w-2xl mx-auto">
            We partner with industry-leading manufacturers to bring you the best in HVAC technology and reliability.
          </p>
          <ManufacturerCarousel />
        </div>
      </section>
      <Footer />
    </main>
  );
}