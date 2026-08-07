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

const SpringTX = () => {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Locations", path: "/" },
          { name: "Spring, TX", path: "/locations/spring-tx" }
        ]}
      />

      <main className="bg-white text-gray-800 font-sans">
        {/* Patriotic Stripe */}
        <div className="h-1.5 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>

        {/* Hero Section */}
        <section className="relative py-12 md:py-16 overflow-hidden">
          <img
            src="/assets/images/cities/spring-tx.webp"
            alt="Old Town Spring, Texas"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-blue-900/75"></div>
          <div className="relative max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <FaMapMarkerAlt className="text-red-400 w-4 h-4" />
              <span className="text-white text-sm font-medium">Spring, Texas</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              HVAC Services in Spring, TX
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Veteran-owned heating and cooling services for Spring, Texas homeowners, from Old Town Spring to the Champions area.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+19363311339" onClick={() => trackPhoneClick('location_spring-tx_page')}
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
              Your Local Spring HVAC Contractor
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              AMW Cooling & Heating is a veteran-owned, licensed and insured HVAC contractor providing complete heating and cooling services throughout Spring, Texas, a fast-growing community in northern Harris County that runs from historic Old Town Spring to the Champions area. We are a short drive south of our Conroe shop, and we know this stretch of Harris County well: classic ranch-style homes along Cypresswood Drive, established neighborhoods in Champions Forest and Klein, and newer construction near the Grand Parkway in Gleannloch Farms and Spring Stuebner. Wherever your home falls on that spectrum, our technicians have the experience to keep every part of your HVAC system, cooling, heating, air quality and controls, running at peak performance.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Spring's proximity to Houston means it gets the same intense heat and humidity that define Southeast Texas summers, with temperatures regularly topping 95°F from June through September. A reliable AC system here is not a luxury, it is a necessity, and a working furnace or heat pump still matters on the occasional hard freeze. That is why we offer same-day service and after-hours emergency repairs across every service we provide, always with upfront pricing before any work begins, so Spring homeowners are never stuck waiting on an uncomfortable house.
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
              HVAC SERVICES IN SPRING
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
              WHY SPRING RESIDENTS CHOOSE AMW
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg text-center max-w-3xl mx-auto">
              Spring's homes span five decades within a few miles of each other, from original 1970s and 80s construction in Champions Forest to brand-new builds going up near the Grand Parkway in Gleannloch Farms. A technician who is quick with a smart thermostat in one of those new builds still needs to know their way around an original furnace a few streets over, and every AMW technician works both kinds of calls in the same week. We hold Texas license TACLB133920E, and because dispatch runs out of our own Conroe shop rather than a national call center, the technician who answers your call is usually the one who ends up at your door.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">Experienced with original 1970s-80s equipment, not just new installs</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">Texas licensed, insured, and bonded under TACLB133920E</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">Being veteran-owned and Conroe-based keeps every call local</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">Written, upfront pricing before we start any repair</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium"><Link href="/financing" className="text-blue-600 hover:underline">Financing</Link> for repairs or a full replacement</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">Rated 5.0 stars by Spring-area neighbors on Google</span>
              </div>
            </div>
          </div>
        </section>

        {/* Neighborhoods Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-red-500 rounded"></span>
              Serving Spring Neighborhoods
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Our trucks run this stretch of Harris County daily, from the shaded streets of Old Town Spring out to Champions Forest, Klein, Gleannloch Farms, Spring Stuebner, Cypresswood, and Louetta. Whether your unit is older than the subdivision around it or fresh out of the box, the same crew handles both without needing a second visit to figure out which one it is.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded"></span>
              Common HVAC Problems in Spring
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed text-base md:text-lg">
              Spring's mix of decades-old neighborhoods and newer construction produces a specific set of recurring issues, and knowing which one you are dealing with is half the repair:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 leading-relaxed text-base md:text-lg space-y-2">
              <li>
                <span className="font-semibold text-blue-900">Original equipment finally wearing out.</span> A lot of Champions Forest and Klein homes are still running their second or even original system from decades back. Weak airflow, a compressor that short-cycles, or a unit that runs nonstop without reaching the set temperature are all signs a system is nearing the end of its life rather than needing a simple part.
              </li>
              <li>
                <span className="font-semibold text-blue-900">Sagging or disconnected attic ductwork.</span> Older homes in this area have been through decades of attic heat cycling, and flex duct that has slipped off a boot or sagged between joists shows up as one room that never quite cools down while the rest of the house is fine.
              </li>
              <li>
                <span className="font-semibold text-blue-900">Clogged condensate drains under mature tree cover.</span> Old Town Spring's oak canopy is part of its charm, but the pollen and debris it sheds clogs condensate lines faster than in newer, less shaded subdivisions. A clogged line trips the safety switch and shuts the whole system down.
              </li>
              <li>
                <span className="font-semibold text-blue-900">Builder-grade systems outgrown by finished space.</span> In newer sections near Gleannloch Farms and Spring Stuebner, we often find a single-zone system that was sized correctly for the original floor plan but now has to cover a finished bonus room or converted garage, leaving that space noticeably warmer than the rest of the house.
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded"></span>
              Emergency HVAC Service in Spring
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Old equipment tends to pick the worst possible moment to quit, usually the hottest afternoon of the week, and we plan our schedule around that reality. We are open 8am to 9pm, seven days a week, with after-hours emergency coverage until 9pm, so if a Spring system goes down, get in touch and we will route a technician to you as quickly as the day allows.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-red-500 rounded"></span>
              Nearby Areas We Serve
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed text-base md:text-lg">
              AMW Cooling & Heating serves communities across Harris and Montgomery counties. Explore our HVAC service in nearby towns:
            </p>
            <NearbyAreas currentPath="/locations/spring-tx" />
          </div>
        </section>


        {/* FAQ Section */}
        <LocationFAQ town={LOCATION_FAQS['spring-tx'].town} faqs={LOCATION_FAQS['spring-tx'].faqs} />

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
                From Champions Forest's Original Systems to Gleannloch Farms' Newest
              </h2>
              <p className="text-lg text-blue-200 max-w-xl mx-auto mb-8">
                Champions Forest has more 1980s compressors still limping along than almost anywhere else we service, and knowing when a repair stops making financial sense is half the job. (936) 331-1339 is a direct line to Conroe, no menu to punch through and no call center to explain your neighborhood to.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+19363311339" onClick={() => trackPhoneClick('location_spring-tx_page')}
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

export default SpringTX;
