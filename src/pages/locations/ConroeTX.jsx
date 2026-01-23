import React from 'react';
import SEO from '../../components/SEO';
import { BreadcrumbSchema } from '../../components/StructuredData';
import { Link } from 'react-router-dom';
import { FaPhone, FaCalendarCheck, FaShieldAlt, FaMapMarkerAlt } from 'react-icons/fa';
import MapSection from '../../components/MapSection';
import ManufacturerCarousel from '../../components/ManufacturerCarousel';
import Footer from '../../components/Footer';

const ConroeTX = () => {
  return (
    <>
      <SEO
        title="HVAC Services Conroe TX | AC Repair & Heating | AMW Cooling"
        description="Professional HVAC services in Conroe, TX. AC repair, heating installation, maintenance. Veteran-owned. Call (936) 331-1339 for same-day service."
        canonical="https://amwairconditioning.com/locations/conroe-tx"
        keywords="HVAC Conroe TX, AC repair Conroe, heating Conroe, air conditioning Conroe Texas"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Locations", path: "/" },
          { name: "Conroe, TX", path: "/locations/conroe-tx" }
        ]}
      />

      <main className="bg-gray-50 text-gray-800 font-sans">
        {/* Patriotic Stripe */}
        <div className="h-1.5 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>

        {/* Hero Section */}
        <section className="bg-blue-900 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <FaMapMarkerAlt className="text-red-400 w-4 h-4" />
              <span className="text-white text-sm font-medium">Conroe, Texas</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              HVAC Services in Conroe, TX
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Your trusted local HVAC contractor serving Conroe and Montgomery County with expert heating and cooling solutions.
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

        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <article className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-600">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 border-l-4 border-red-500 pl-4">
              Your Local Conroe HVAC Contractor
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              AMW Cooling & Heating proudly serves Conroe, Texas with comprehensive heating,
              ventilation, and air conditioning services. As a veteran-owned HVAC company
              based in Conroe, we understand the unique climate challenges of Montgomery
              County and provide reliable, professional HVAC solutions for local homeowners
              and businesses.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Located in the heart of Montgomery County, Conroe experiences hot, humid
              summers that demand reliable air conditioning and mild winters that still
              require dependable heating systems. Our team knows what it takes to keep
              Conroe homes and businesses comfortable year-round.
            </p>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-3">
              HVAC Services We Provide in Conroe
            </h3>
            <ul className="space-y-2 mb-6 text-gray-700 text-base md:text-lg">
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><strong className="text-blue-900">Air Conditioning Repair</strong> – Fast diagnosis and repair of all AC issues</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><strong className="text-blue-900">AC Installation</strong> – Professional installation of new AC systems</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><strong className="text-blue-900">Heating Repair</strong> – Expert furnace and heat pump repairs</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><strong className="text-blue-900">Heating Installation</strong> – New heating system installation and replacement</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><strong className="text-blue-900">HVAC Maintenance</strong> – Preventive maintenance to keep systems efficient</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><strong className="text-blue-900">Indoor Air Quality</strong> – Air purification and filtration solutions</span></li>
            </ul>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-red-500 pl-3">
              Why Conroe Residents Choose AMW
            </h3>
            <p className="text-gray-700 mb-4 text-base md:text-lg">
              As a local, veteran-owned HVAC company, we're invested in the Conroe community.
              We're not a franchise or national chain - we're your neighbors. When you call AMW,
              you get personalized service from technicians who understand Conroe's climate and
              care about your comfort.
            </p>

            <ul className="space-y-2 mb-6 text-gray-700 text-base md:text-lg">
              <li className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span><span>Veteran-owned and operated</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span><span>Licensed, insured, and bonded</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span><span>Same-day service available in Conroe</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span><span>Upfront, transparent pricing</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span><span>Financing options available</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span><span>100% satisfaction guaranteed</span></li>
            </ul>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-3">
              Serving Conroe Neighborhoods
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              We provide HVAC services throughout Conroe and surrounding areas including
              Downtown Conroe, Crighton Ridge, River Plantation, April Sound, and all
              Conroe neighborhoods. No matter where you are in the Conroe area, AMW
              Cooling & Heating is ready to help.
            </p>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-red-500 pl-3">
              Emergency HVAC Service in Conroe
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              AC emergencies don't wait for business hours, and neither do we. When your
              air conditioning fails on a 95-degree day or your heating goes out on a cold
              night, call AMW for emergency HVAC service in Conroe, TX. We'll get a
              technician to your location fast.
            </p>

          </article>
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
                Contact AMW for HVAC Service in Conroe
              </h2>
              <p className="text-lg text-blue-200 max-w-xl mx-auto mb-8">
                Ready to schedule service? Call us today or fill out our contact form. We're standing by to help with all your heating and cooling needs in Conroe, Texas.
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
                  Contact Us Online
                </Link>
              </div>
            </div>
          </div>
        </section>

        <MapSection />
        <ManufacturerCarousel />
        <Footer />
      </main>
    </>
  );
};

export default ConroeTX;
