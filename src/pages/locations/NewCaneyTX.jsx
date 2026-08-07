import React from 'react';
import { BreadcrumbSchema , LocalBusinessSchema} from '../../components/StructuredData';
import Link from 'next/link';
import { FaPhone, FaCalendarCheck, FaShieldAlt, FaMapMarkerAlt, FaSnowflake, FaFire, FaWrench, FaTools, FaLeaf, FaThermometerHalf, FaFan } from 'react-icons/fa';
import MapSection from '../../components/MapSectionWrapper';
import ManufacturerCarousel from '../../components/ManufacturerCarousel';
import NearbyAreas from '../../components/NearbyAreas';
import Footer from '../../components/Footer';
import LocationFAQ from '../../components/LocationFAQ';
import { LOCATION_FAQS } from '../../data/locationFaqs';
import { trackPhoneClick } from '../../utils/analytics';

const NewCaneyTX = () => {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Locations", path: "/" },
          { name: "New Caney, TX", path: "/locations/new-caney-tx" }
        ]}
      />

      <main className="bg-white text-gray-800 font-sans">
        {/* Patriotic Stripe */}
        <div className="h-1.5 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>

        {/* Hero Section */}
        <section className="relative py-12 md:py-16 overflow-hidden">
          <img
            src="/assets/images/cities/new-caney-tx.webp"
            alt="New Caney, Texas"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-blue-900/75"></div>
          <div className="relative max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <FaMapMarkerAlt className="text-red-400 w-4 h-4" />
              <span className="text-white text-sm font-medium">New Caney, Texas</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              HVAC Services in New Caney, TX
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Reliable heating and cooling for East Montgomery County, from the master-planned
              communities off the Grand Parkway to the established homes near the old town center.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+19363311339" onClick={() => trackPhoneClick('location_new-caney-tx_page')}
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

        <div className="h-1 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>

        {/* Intro Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
              Your Local New Caney HVAC Contractor
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              AMW Cooling & Heating serves New Caney, one of the fastest-growing communities in
              East Montgomery County. As a veteran-owned HVAC company based just up US-59 in
              Conroe, we keep New Caney homes and businesses comfortable through the long, humid
              Southeast Texas cooling season and the cold snaps that still roll through each winter.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              New Caney has grown quickly along the I-69 / US-59 corridor and the newer Grand
              Parkway (State Highway 99), whose eastern segments opened in 2022. That growth
              means a real mix of HVAC needs. Newer master-planned neighborhoods like Tavola and
              Valley Ranch are full of recent builds that need proper maintenance to protect their
              warranties, while homes near the original town center and along Caney Creek often run
              older systems that need repair or full replacement. We take care of both.
            </p>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="py-12 bg-blue-900">
          <div className="max-w-5xl mx-auto px-4">
            <p className="text-center text-gray-400 text-sm tracking-widest uppercase mb-2">
              Full-Service HVAC
            </p>
            <h3 className="text-2xl md:text-3xl font-black text-center text-white mb-8 tracking-wide italic">
              HVAC SERVICES IN NEW CANEY
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
              WHY NEW CANEY CHOOSES AMW
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg text-center max-w-3xl mx-auto">
              New Caney's newest streets went up fast, and a lot of the systems behind those front
              doors are still on their first or second summer of manufacturer warranty. AMW crews
              are in Tavola and Valley Ranch often enough to know which builders' HVAC packages
              need extra attention early on, and exactly what documentation your warranty paperwork
              requires so a covered repair does not get denied on a technicality. We dispatch out
              of our own Conroe shop just up US-59, carry Texas license TACLB133920E, and staff
              every call ourselves instead of routing it through a call center in another state.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">Maintenance visits documented to satisfy your manufacturer's warranty file</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">Regular hands-on work in Tavola and Valley Ranch, not a first-time guess</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">Same-day scheduling with no dispatch center between you and a technician</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">A written, upfront price before any tool touches your system</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium"><Link href="/financing" className="text-blue-600 hover:underline">Financing</Link> through Synchrony and FTL Finance for new installs</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">A 5.0-star Google rating built by East Montgomery County neighbors</span>
              </div>
            </div>
          </div>
        </section>

        {/* Common HVAC Problems Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-black text-center text-blue-900 mb-8 tracking-wide">
              COMMON HVAC PROBLEMS IN NEW CANEY
            </h3>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <h4 className="font-bold text-blue-900 mb-2">Airflow That Was Never Balanced After Move-In</h4>
                <p className="text-gray-700 text-base leading-relaxed">
                  Builders install the same equipment package across an entire Tavola or Valley
                  Ranch phase, regardless of which lot gets more afternoon sun or how far the
                  ductwork has to stretch to a back bedroom. The usual result is one room that
                  never quite cools while the rest of the house is fine.
                </p>
              </div>
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <h4 className="font-bold text-blue-900 mb-2">Warranty-Voiding Maintenance Gaps</h4>
                <p className="text-gray-700 text-base leading-relaxed">
                  Manufacturer coverage on a lot of these newer systems requires a documented
                  service visit every year, and that fine print is easy for a first-time
                  homeowner to miss. Skip the paperwork and a covered compressor failure can
                  turn into an out-of-pocket repair.
                </p>
              </div>
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <h4 className="font-bold text-blue-900 mb-2">Factory Thermostat Settings Nobody Reset</h4>
                <p className="text-gray-700 text-base leading-relaxed">
                  Move-in day usually leaves the thermostat on whatever schedule the builder
                  programmed for final inspection, not how your household actually uses the
                  house. Left alone, it drives up summer bills and can short-cycle the system.
                </p>
              </div>
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <h4 className="font-bold text-blue-900 mb-2">Aging Equipment Near the Old Town Center</h4>
                <p className="text-gray-700 text-base leading-relaxed">
                  Not everything in New Caney is new construction. Homes near Caney Creek and the
                  original town center often run systems installed well before the recent growth,
                  and units in the 12 to 15 year range start needing more frequent repairs as
                  parts wear out.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Neighborhoods + Local Detail Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-red-500 rounded"></span>
              Serving New Caney Neighborhoods
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              New Caney has grown fast enough that our route list keeps expanding with it. Tavola,
              Valley Ranch, New Caney Heights, and Caney Creek Estates are where our trucks stay
              busiest, along with the newer developments filling in near Valley Ranch Town Center
              and the Grand Parkway. From a first-year system still covered by its builder warranty
              to a decades-old unit off FM 1485, our service trucks run that whole stretch daily.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded"></span>
              Keeping a Tavola or Valley Ranch Warranty Valid
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              With so many new homes going up across New Caney, a lot of systems are still under
              manufacturer warranty. Most of those warranties require documented annual maintenance,
              and skipping it can void your coverage. Our maintenance visits keep your equipment
              running efficiently through the Texas heat and keep that warranty intact, so a future
              repair does not come out of your pocket.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-red-500 rounded"></span>
              Emergency HVAC Service in New Caney
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Texas heat does not check the clock before it takes down a compressor, and neither
              do we wait for one. Whether your AC quits on a July afternoon or your furnace will
              not fire on a January cold snap, call (936) 331-1339 and we will dispatch a
              technician the same day, covering New Caney along with nearby Porter, Splendora,
              Kingwood, and the rest of East Montgomery County.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded"></span>
              Nearby Areas We Serve
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed text-base md:text-lg">
              AMW Cooling & Heating serves communities across East Montgomery County and the
              north Houston area. Explore our HVAC service in nearby towns:
            </p>
            <NearbyAreas currentPath="/locations/new-caney-tx" />
          </div>
        </section>

        {/* FAQ Section */}
        <LocationFAQ town={LOCATION_FAQS['new-caney-tx'].town} faqs={LOCATION_FAQS['new-caney-tx'].faqs} />

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
                Our Regular Route Already Covers Tavola and Valley Ranch
              </h2>
              <p className="text-lg text-blue-200 max-w-xl mx-auto mb-8">
                New Caney adds streets faster than most Montgomery County towns, and our
                Conroe-based crew has kept pace with every phase of it. If your system is
                still under a builder's warranty, mention it when you call (936) 331-1339,
                and we will handle the documentation along with the repair.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+19363311339" onClick={() => trackPhoneClick('location_new-caney-tx_page')}
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

export default NewCaneyTX;
