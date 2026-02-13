import React from 'react';
import SEO from '../../components/SEO';
import { BreadcrumbSchema, LocalBusinessSchema } from '../../components/StructuredData';
import Link from 'next/link';
import { FaPhone, FaCalendarCheck, FaShieldAlt, FaMapMarkerAlt } from 'react-icons/fa';
import MapSection from '../../components/MapSectionWrapper';
import ManufacturerCarousel from '../../components/ManufacturerCarousel';
import Footer from '../../components/Footer';

const MagnoliaTX = () => {
  return (
    <>
      <SEO
        title="HVAC Services Magnolia TX | AC Repair & Heating | AMW Cooling & Heating"
        description="Professional HVAC services in Magnolia, TX. AC repair, heating, maintenance for rural & suburban properties. Veteran-owned. Call (936) 331-1339."
        canonical="https://amwairconditioning.com/locations/magnolia-tx"
        keywords="HVAC Magnolia TX, AC repair Magnolia, heating Magnolia TX, air conditioning Magnolia Texas"
      />

      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Locations", path: "/" },
          { name: "Magnolia, TX", path: "/locations/magnolia-tx" }
        ]}
      />

      <main className="bg-gray-50 text-gray-800 font-sans">
        {/* Patriotic Stripe */}
        <div className="h-1.5 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>

        {/* Hero Section */}
        <section className="bg-blue-900 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <FaMapMarkerAlt className="text-red-400 w-4 h-4" />
              <span className="text-white text-sm font-medium">Magnolia, Texas</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              HVAC Services in Magnolia, TX
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Expert heating and cooling services for Magnolia, Texas—from FM 1488 corridor homes to rural properties.
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
                href="/contact"
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
              Your Local Magnolia HVAC Contractor
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              AMW Cooling & Heating extends our trusted HVAC services to Magnolia, Texas—a rapidly growing community along the FM 1488 corridor in western Montgomery County. Magnolia has evolved from a quiet rural town into a thriving suburban community, with master-planned neighborhoods like Woodforest, Mostyn Manor, and the Reserve at Grogan's Mill joining the area's established ranch properties and acreage homes. Our veteran-owned team understands the diverse HVAC needs that come with Magnolia's mix of property types.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Magnolia's location at the intersection of FM 1488 and FM 1774 puts it within easy reach of our Conroe headquarters. Many Magnolia homes sit on larger lots or acreage, which can mean longer ductwork runs, larger cooling loads, and unique installation challenges compared to subdivision homes. Our technicians are experienced with both traditional subdivision HVAC systems and the larger, more complex setups found on rural Magnolia properties.
            </p>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-3">
              HVAC Services We Provide in Magnolia
            </h3>
            <ul className="space-y-2 mb-6 text-gray-700 text-base md:text-lg">
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><Link href="/services/ac-repair" className="text-blue-600 hover:underline font-semibold">Air Conditioning Repair</Link> – Fast diagnosis and repair of all AC issues</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><Link href="/services/ac-installation" className="text-blue-600 hover:underline font-semibold">AC Installation</Link> – Professional installation of new AC systems</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><Link href="/services/heating-repair" className="text-blue-600 hover:underline font-semibold">Heating Repair</Link> – Expert furnace and heat pump repairs</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><Link href="/services/hvac-maintenance" className="text-blue-600 hover:underline font-semibold">HVAC Maintenance</Link> – Preventive maintenance to keep systems efficient</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><Link href="/services/indoor-air-quality" className="text-blue-600 hover:underline font-semibold">Indoor Air Quality</Link> – Air purification and filtration solutions</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><Link href="/services/smart-thermostats" className="text-blue-600 hover:underline font-semibold">Smart Thermostats</Link> – Wi-Fi thermostat installation and setup</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><Link href="/services/dryer-vent-cleaning" className="text-blue-600 hover:underline font-semibold">Dryer Vent Cleaning</Link> – Fire prevention and efficiency</span></li>
            </ul>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-red-500 pl-3">
              Why Magnolia Residents Choose AMW
            </h3>
            <p className="text-gray-700 mb-4 text-base md:text-lg">
              Magnolia residents value hard work, honesty, and community—values that mirror our own military-instilled principles. We provide straightforward assessments, fair pricing, and reliable service that Magnolia families can count on season after season.
            </p>

            <ul className="space-y-2 mb-6 text-gray-700 text-base md:text-lg">
              <li className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span><span>Veteran-owned and operated</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span><span>Licensed (TACLB133920E), insured, and bonded</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span><span>Same-day and emergency service available</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span><span>Upfront, transparent pricing—no hidden fees</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span><span><Link href="/financing" className="text-blue-600 hover:underline">Financing options</Link> available</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span><span>5.0-star Google rating with 54 reviews</span></li>
            </ul>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-3">
              Serving Magnolia Neighborhoods
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              We provide HVAC services throughout Magnolia and surrounding areas including
              Woodforest, Mostyn Manor, FM 1488 corridor, FM 1774 corridor, Decker Prairie area, Dobbin area, and all Magnolia-area communities. No matter where you are in the Magnolia area, AMW
              Cooling & Heating is ready to help.
            </p>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-red-500 pl-3">
              Nearby Areas We Serve
            </h3>
            <div className="flex flex-wrap gap-3 mb-6">
              <Link href="/locations/the-woodlands-tx" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition">The Woodlands, TX</Link>
              <Link href="/locations/tomball-tx" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition">Tomball, TX</Link>
              <Link href="/locations/conroe-tx" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition">Conroe, TX</Link>
            </div>

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
                Contact AMW for HVAC Service in Magnolia
              </h2>
              <p className="text-lg text-blue-200 max-w-xl mx-auto mb-8">
                Ready to schedule service? Call us today or fill out our contact form. We're standing by to help with all your heating and cooling needs in Magnolia, Texas.
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
                  href="/contact"
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

export default MagnoliaTX;
