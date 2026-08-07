import React from 'react';
import { BreadcrumbSchema, LocalBusinessSchema } from '../../components/StructuredData';
import Link from 'next/link';
import { FaPhone, FaCalendarCheck, FaShieldAlt, FaMapMarkerAlt, FaSnowflake, FaFire, FaWrench, FaTools, FaLeaf, FaThermometerHalf, FaFan } from 'react-icons/fa';
import MapSection from '../../components/MapSectionWrapper';
import ManufacturerCarousel from '../../components/ManufacturerCarousel';
import NearbyAreas from '../../components/NearbyAreas';
import Footer from '../../components/Footer';
import LocationFAQ from '../../components/LocationFAQ';
import { LOCATION_FAQS } from '../../data/locationFaqs';
import { trackPhoneClick } from '../../utils/analytics';

const TomballTX = () => {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Locations", path: "/" },
          { name: "Tomball, TX", path: "/locations/tomball-tx" }
        ]}
      />

      <main className="bg-white text-gray-800 font-sans">
        {/* Patriotic Stripe */}
        <div className="h-1.5 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>

        {/* Hero Section */}
        <section className="relative py-12 md:py-16 overflow-hidden">
          <img
            src="/assets/images/cities/tomball-tx.webp"
            alt="Tomball, Texas"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-blue-900/75"></div>
          <div className="relative max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <FaMapMarkerAlt className="text-red-400 w-4 h-4" />
              <span className="text-white text-sm font-medium">Tomball, Texas</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              HVAC Services in Tomball, TX
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Trusted heating and cooling contractor for Tomball, Texas, from historic downtown to the growing 249 corridor.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+19363311339" onClick={() => trackPhoneClick('location_tomball-tx_page')}
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

        
        {/* Intro Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
              Your Local Tomball HVAC Contractor
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              AMW Cooling & Heating provides professional HVAC services to Tomball, Texas, a charming city that perfectly blends small-town character with modern suburban growth. Tomball's historic downtown, anchored by Main Street and the Tomball Depot, offers a warm community feel, while the booming 249 Tollway corridor continues to attract new families and businesses. From established neighborhoods near Tomball Parkway to newer developments like Rosehill Reserve and Lakewood Grove, our NATE-certified technicians deliver expert heating and cooling solutions for every home.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Tomball sits at the intersection of Harris, Montgomery, and Waller counties, making it a crossroads community that benefits from suburban convenience and open-space living. Whatever you need, from a routine tune-up to a full system replacement, AMW is the local team Tomball residents call for straightforward, dependable HVAC service.
            </p>
          </div>
        </section>

        {/* Common HVAC Problems Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
              Common HVAC Problems in Tomball
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed text-base md:text-lg">
              Main Street's original housing stock and the fast-growing 249 corridor pull our
              service calls in two very different directions, and the list below reflects that
              split. Here is what we run into most, whether the address is a few blocks off
              historic downtown or brand new construction along the tollway.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <FaFire className="text-red-500 w-5 h-5 flex-shrink-0" />
                  <h3 className="font-bold text-blue-900 text-lg">Aging Equipment Near Downtown</h3>
                </div>
                <p className="text-gray-700 text-base">
                  Homes near Main Street and the Tomball Depot are often running cooling and
                  heating equipment that has been in service well over a decade. Worn capacitors
                  and contactors, refrigerant leaks in older line sets, and duct runs in tight,
                  original crawl spaces that were never resealed are all common finds.
                </p>
              </div>
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <FaTools className="text-blue-900 w-5 h-5 flex-shrink-0" />
                  <h3 className="font-bold text-blue-900 text-lg">Builder-Grade Sizing Out on 249</h3>
                </div>
                <p className="text-gray-700 text-base">
                  Newer homes in developments like Rosehill Reserve and Lakewood Grove sometimes
                  come with a system sized to a builder's spec sheet rather than the actual house.
                  That shows up as short cycling, a room that never quite cools, and utility bills
                  that run higher than a new system should.
                </p>
              </div>
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <FaFan className="text-red-500 w-5 h-5 flex-shrink-0" />
                  <h3 className="font-bold text-blue-900 text-lg">Humidity in Older Attics</h3>
                </div>
                <p className="text-gray-700 text-base">
                  Gulf Coast humidity meeting original attic insulation and ductwork in older
                  Tomball homes is a common recipe for condensation at the supply vents, musty
                  smells, and, left alone, mold near the registers.
                </p>
              </div>
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <FaThermometerHalf className="text-blue-900 w-5 h-5 flex-shrink-0" />
                  <h3 className="font-bold text-blue-900 text-lg">Uneven Comfort After Additions</h3>
                </div>
                <p className="text-gray-700 text-base">
                  Historic downtown homes with room additions and larger Hufsmith-area properties
                  with outbuildings often end up with a single system covering more square
                  footage than it was designed for, leaving some rooms too warm and others too cold.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="py-12 bg-blue-900">
          <div className="max-w-5xl mx-auto px-4">
            <p className="text-center text-gray-400 text-sm tracking-widest uppercase mb-2">
              Full-Service HVAC
            </p>
            <h3 className="text-2xl md:text-3xl font-black text-center text-white mb-8 tracking-wide italic">
              HVAC SERVICES IN TOMBALL
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <Link href="/services/ac-repair" className="bg-white rounded-xl p-5 text-center hover:shadow-lg transition-shadow group">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-red-500 transition-colors">
                  <FaSnowflake className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-900 text-sm">AC Repair</span>
              </Link>
              <Link href="/services/ac-installation" className="bg-white rounded-xl p-5 text-center hover:shadow-lg transition-shadow group">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-red-500 transition-colors">
                  <FaTools className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-900 text-sm">AC Installation</span>
              </Link>
              <Link href="/services/heating-repair" className="bg-white rounded-xl p-5 text-center hover:shadow-lg transition-shadow group">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-900 transition-colors">
                  <FaFire className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-900 text-sm">Heating Repair</span>
              </Link>
              <Link href="/services/hvac-maintenance" className="bg-white rounded-xl p-5 text-center hover:shadow-lg transition-shadow group">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-red-500 transition-colors">
                  <FaWrench className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-900 text-sm">Maintenance</span>
              </Link>
              <Link href="/services/indoor-air-quality" className="bg-white rounded-xl p-5 text-center hover:shadow-lg transition-shadow group">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-red-500 transition-colors">
                  <FaLeaf className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-900 text-sm">Air Quality</span>
              </Link>
              <Link href="/services/smart-thermostats" className="bg-white rounded-xl p-5 text-center hover:shadow-lg transition-shadow group">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-900 transition-colors">
                  <FaThermometerHalf className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-900 text-sm">Thermostats</span>
              </Link>
              <Link href="/services/dryer-vent-cleaning" className="bg-white rounded-xl p-5 text-center hover:shadow-lg transition-shadow group">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-red-500 transition-colors">
                  <FaFan className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-900 text-sm">Dryer Vents</span>
              </Link>
              <Link href="/services" className="bg-white rounded-xl p-5 text-center hover:shadow-lg transition-shadow group">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-900 transition-colors">
                  <FaShieldAlt className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-blue-900 text-sm">All Services</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <div className="h-1 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-red-500 py-3 mb-8 -mx-4">
              <p className="text-center text-white text-base font-medium tracking-widest uppercase">
                Fast, Honest, and Reliable
              </p>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-center text-blue-900 mb-8 tracking-wide">
              WHY TOMBALL RESIDENTS CHOOSE AMW
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg text-center max-w-3xl mx-auto">
              Historic Main Street and the 249 corridor sit only a few miles apart, but they call for two different kinds of HVAC know-how. Our technicians spend as much time diagnosing older package units tucked behind homes near the Tomball Depot as they do commissioning new, high-efficiency systems in Rosehill Reserve and Lakewood Grove, and that range is exactly what a mixed old-town, new-growth city like Tomball needs from its HVAC company.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">Techs who work on original downtown construction and brand-new 249 corridor builds alike</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">Veteran-owned, with every technician licensed, insured, and bonded in Texas</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">A price you see before we start, not after</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium"><Link href="/financing" className="text-blue-600 hover:underline">Synchrony and FTL Finance</Link> options when a repair or replacement runs bigger than expected</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">Dial the number and a real Tomball-area technician answers, not a script</span>
              </div>
            </div>
            <p className="text-gray-700 mt-6 leading-relaxed text-base md:text-lg text-center max-w-3xl mx-auto">
              That combination is a big part of why our Google rating in Tomball has held at 5.0 stars.
            </p>
          </div>
        </section>

        {/* Neighborhoods + Local Detail Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-red-500 rounded"></span>
              Serving Tomball Neighborhoods
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              From the century-old storefronts downtown to the newest rooflines going up along 249, AMW technicians are in and out of Tomball homes every week, covering
              Historic Downtown Tomball, Rosehill Reserve, Lakewood Grove, Tomball Parkway area, 249 Tollway corridor, Hufsmith area, and the neighborhoods in between. Every truck carries parts for both sides of town, since a single day's route rarely stays on one side of the Tollway.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded"></span>
              Homes Across Tomball, Old and New
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Tomball's housing stock reflects its growth story. Near the historic downtown and
              along the older streets closer to Main Street, you will find established homes
              running HVAC equipment that has been in service for years. Out toward the 249
              corridor, in newer communities like Rosehill Reserve and Lakewood Grove, homes tend
              to come with modern, high-efficiency systems still under warranty. Whichever end of
              that spectrum your home falls on, our licensed technicians handle the full range of
              services, from AC repair and installation to heating repair, routine maintenance,
              and indoor air quality upgrades.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-red-500 rounded"></span>
              Emergency HVAC Service in Tomball
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Emergency HVAC service in Tomball means reaching both ends of town fast, whether
              that is a downtown home two blocks off Main Street or a new build off the 249
              corridor. We keep the phones open 8am to 9pm, seven days a week, and dispatch
              after-hours emergency calls from 5pm to 9pm for AC and heating breakdowns alike.
              Call (936) 331-1339 and tell us where you are; we will get a technician moving
              right away.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded"></span>
              Nearby Areas We Serve
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed text-base md:text-lg">
              AMW Cooling & Heating serves communities across Montgomery County and the north
              Houston area. Explore our HVAC service in nearby towns:
            </p>
            <NearbyAreas currentPath="/locations/tomball-tx" />
          </div>
        </section>


        {/* FAQ Section */}
        <LocationFAQ town={LOCATION_FAQS['tomball-tx'].town} faqs={LOCATION_FAQS['tomball-tx'].faqs} />

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
                Tomball Runs Two Housing Eras. We Run Both Every Week.
              </h2>
              <p className="text-lg text-blue-200 max-w-xl mx-auto mb-8">
                Ask about a century-old duct system near the Depot or a two-year-old unit out by Rosehill Reserve and you get the same confident answer, because our technicians handle both every week. Dial (936) 331-1339, mention which one is yours, and the right technician gets matched to the job, not whoever is next in line.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+19363311339" onClick={() => trackPhoneClick('location_tomball-tx_page')}
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

export default TomballTX;
