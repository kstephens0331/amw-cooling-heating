import React from 'react';
import SEO from '../../components/SEO';
import { BreadcrumbSchema, LocalBusinessSchema } from '../../components/StructuredData';
import Link from 'next/link';
import { FaPhone, FaCalendarCheck, FaShieldAlt, FaMapMarkerAlt } from 'react-icons/fa';
import MapSection from '../../components/MapSectionWrapper';
import ManufacturerCarousel from '../../components/ManufacturerCarousel';
import Footer from '../../components/Footer';

const WillisTX = () => {
  return (
    <>
      <SEO
        title="HVAC Services Willis TX | AC Repair & Heating | AMW Cooling & Heating"
        description="Professional HVAC services in Willis, TX. AC repair, heating installation, maintenance near Lake Conroe. Veteran-owned. Call (936) 331-1339."
        canonical="https://amwairconditioning.com/locations/willis-tx"
        keywords="HVAC Willis TX, AC repair Willis, heating Willis TX, air conditioning Willis Texas"
      />

      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Locations", path: "/" },
          { name: "Willis, TX", path: "/locations/willis-tx" }
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
              <span className="text-white text-sm font-medium">Willis, Texas</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              HVAC Services in Willis, TX
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Reliable heating and cooling services for Willis, Texas—serving the Lake Conroe and I-45 corridor communities.
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
              Your Local Willis HVAC Contractor
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              AMW Cooling & Heating brings professional HVAC services to Willis, Texas—a growing community nestled between Conroe and Huntsville along the I-45 corridor. Willis offers a welcoming small-town atmosphere with convenient access to Lake Conroe recreation and Montgomery County amenities. Whether you live near downtown Willis, along FM 830, or in one of the lakeside communities, our veteran-owned team provides the reliable HVAC service your family deserves.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Willis sits at the northern edge of the greater Houston metro area, where summer temperatures routinely climb above 95°F and humidity levels stay high. Homes in the Willis area—especially those near Lake Conroe—face additional moisture challenges that can strain AC systems and promote mold growth. Our technicians are experienced with the specific HVAC needs of Willis properties, from lakefront homes to rural acreage.
            </p>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-3">
              HVAC Services We Provide in Willis
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
              Why Willis Residents Choose AMW
            </h3>
            <p className="text-gray-700 mb-4 text-base md:text-lg">
              As a small, veteran-owned company based just minutes from Willis in Conroe, we treat every customer like family. You won't get automated phone trees or distant dispatchers—when you call AMW, you get real people who care about your comfort and will be at your door quickly.
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
              Serving Willis Neighborhoods
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              We provide HVAC services throughout Willis and surrounding areas including
              Downtown Willis, FM 830 corridor, Lake Conroe area, Seven Coves, Point Aquarius, Panorama Village, and all Willis-area communities. No matter where you are in the Willis area, AMW
              Cooling & Heating is ready to help.
            </p>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-red-500 pl-3">
              Nearby Areas We Serve
            </h3>
            <div className="flex flex-wrap gap-3 mb-6">
              <Link href="/locations/conroe-tx" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition">Conroe, TX</Link>
              <Link href="/locations/montgomery-tx" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition">Montgomery, TX</Link>
              <Link href="/locations/the-woodlands-tx" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition">The Woodlands, TX</Link>
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
                Contact AMW for HVAC Service in Willis
              </h2>
              <p className="text-lg text-blue-200 max-w-xl mx-auto mb-8">
                Ready to schedule service? Call us today or fill out our contact form. We're standing by to help with all your heating and cooling needs in Willis, Texas.
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

export default WillisTX;
