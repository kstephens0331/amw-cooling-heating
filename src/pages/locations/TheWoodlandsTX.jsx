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

const TheWoodlandsTX = () => {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Locations", path: "/" },
          { name: "The Woodlands, TX", path: "/locations/the-woodlands-tx" }
        ]}
      />

      <main className="bg-white text-gray-800 font-sans">
        {/* Patriotic Stripe */}
        <div className="h-1.5 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>

        {/* Hero Section */}
        <section className="relative py-12 md:py-16 overflow-hidden">
          <img
            src="/assets/images/cities/the-woodlands-tx.webp"
            alt="The Woodlands Waterway, Texas"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-blue-900/75"></div>
          <div className="relative max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <FaMapMarkerAlt className="text-red-400 w-4 h-4" />
              <span className="text-white text-sm font-medium">The Woodlands, Texas</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              HVAC Services in The Woodlands, TX
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Your trusted HVAC contractor serving The Woodlands master-planned communities with expert heating and cooling solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+19363311339" onClick={() => trackPhoneClick('location_the-woodlands-tx_page')}
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
              Your Local The Woodlands HVAC Contractor
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              AMW Cooling & Heating proudly serves The Woodlands, Texas, one of the premier master-planned communities in the Houston metropolitan area. With over 100,000 residents across eight distinct villages, The Woodlands demands HVAC contractors who understand the unique needs of its well-appointed homes. From the established neighborhoods of Panther Creek and Indian Springs to the newer communities of Creekside Park and Sterling Ridge, our NATE-certified technicians deliver reliable, professional HVAC services tailored to each home.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              The Woodlands sits just 20 minutes south of our Conroe headquarters, making it one of our primary service areas. The community's tree-lined streets and wooded lots create beautiful living spaces, but they also mean increased pollen, humidity challenges, and seasonal debris that can affect HVAC system performance. We understand these local factors and provide solutions that keep Woodlands homes comfortable and efficient year-round.
            </p>
          </div>
        </section>

        {/* Common Problems Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded"></span>
              Common HVAC Problems in The Woodlands
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              The homes we service here run bigger and newer than in most towns nearby, and that
              brings a different set of problems than a single-stage window unit ever would.
            </p>
            <ul className="space-y-4">
              <li className="bg-white rounded-lg p-4 shadow-sm">
                <span className="block text-blue-900 font-bold mb-1">Zone-to-zone temperature swings</span>
                <span className="text-gray-700 leading-relaxed">One bedroom running warm while the rest of the house is comfortable usually points to a failed zone damper or a control board that has lost communication with a thermostat, not a refrigerant problem, and it needs a technician who can actually trace the zoning wiring.</span>
              </li>
              <li className="bg-white rounded-lg p-4 shadow-sm">
                <span className="block text-blue-900 font-bold mb-1">Variable-speed compressor and blower faults</span>
                <span className="text-gray-700 leading-relaxed">Variable-speed compressors and ECM blower motors run quieter and cheaper than older single-stage equipment, but they fail differently too, and diagnosing them means reading the actual fault codes instead of guessing at a capacitor.</span>
              </li>
              <li className="bg-white rounded-lg p-4 shadow-sm">
                <span className="block text-blue-900 font-bold mb-1">Undersized equipment in newer construction</span>
                <span className="text-gray-700 leading-relaxed">A builder-grade system sized to a spec sheet instead of the actual house is a common cause of a hot upstairs in two-story Creekside Park and Sterling Ridge homes, especially with vaulted ceilings or a lot of west-facing glass.</span>
              </li>
              <li className="bg-white rounded-lg p-4 shadow-sm">
                <span className="block text-blue-900 font-bold mb-1">Condenser airflow choked by HOA screening</span>
                <span className="text-gray-700 leading-relaxed">Fencing or landscaping used to hide a condenser from the street is standard practice here, but too little clearance traps heat around the unit and shortens compressor life, and pollen and tree debris off wooded lots clog the coil faster than in a more open neighborhood.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="py-12 bg-blue-900">
          <div className="max-w-5xl mx-auto px-4">
            <p className="text-center text-gray-400 text-sm tracking-widest uppercase mb-2">
              Full-Service HVAC
            </p>
            <h3 className="text-2xl md:text-3xl font-black text-center text-white mb-8 tracking-wide italic">
              HVAC SERVICES IN THE WOODLANDS
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
              WHY THE WOODLANDS RESIDENTS CHOOSE AMW
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg text-center max-w-3xl mx-auto">
              A multi-zone system in a 4,000-square-foot Creekside Park home is a different job than a single-stage unit in an original Panther Creek house, and Woodlands homeowners want a technician who has actually worked on both before anyone touches a system that size. Our crew holds Texas HVAC license TACLB133920E, carries full insurance, and starts every visit with a real inspection and a written number, not a guess. We also keep condenser placement and any exterior work inside HOA guidelines, because that matters here as much as the repair itself.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">Trained on multi-zone & variable-speed systems</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">TACLB133920E licensed & fully insured</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">Exterior work kept within HOA guidelines</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">Written pricing before any work begins</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium"><Link href="/financing" className="text-blue-600 hover:underline">Financing</Link> for larger installs</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">Veteran-owned, 5.0 stars on Google</span>
              </div>
            </div>
          </div>
        </section>

        {/* Neighborhoods Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-red-500 rounded"></span>
              Serving The Woodlands Neighborhoods
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Every village in The Woodlands has its own character, but the same AMW crew covers
              all of them: Alden Bridge, Cochran's Crossing, College Park, Creekside Park,
              Grogan's Mill, Indian Springs, Panther Creek, Sterling Ridge, Town Center, and the
              rest of the community. Wherever your village sits, we already know the local HOA
              rules on equipment placement and screening before we ever pull into your driveway,
              so there are no surprises for you or your neighbors.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-red-500 rounded"></span>
              Built for The Woodlands' Villages
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              With more than 100,000 residents spread across eight villages, The Woodlands has grown
              into one of Montgomery County's largest communities, and its homes reflect that scale.
              We work on everything from the original 1970s and 1980s houses in Grogan's Mill and
              Panther Creek to the newer, larger builds going up in Creekside Park and Sterling Ridge,
              which means covering older single-stage equipment on one call and multi-zone,
              variable-speed systems tied into smart thermostats on the next. Whatever your village and
              whatever your setup, our technicians carry the training and the parts to handle it, on
              your AC, your heat, or both.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded"></span>
              Emergency HVAC Service in The Woodlands
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              In a home this size, when one zone fails the rest of the system usually is not far
              behind, so we do not make Woodlands residents wait on a callback. We run 8am to 9pm
              every day of the week, with after-hours emergency coverage on top of that, and since
              our Conroe shop sits about 20 minutes north, a technician can typically reach Town
              Center, Alden Bridge, or any other village the same day.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-red-500 rounded"></span>
              Nearby Areas We Serve
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed text-base md:text-lg">
              AMW Cooling & Heating serves communities across Montgomery County and the north
              Houston area. Explore our HVAC service in nearby towns:
            </p>
            <NearbyAreas currentPath="/locations/the-woodlands-tx" />
          </div>
        </section>


        {/* FAQ Section */}
        <LocationFAQ town={LOCATION_FAQS['the-woodlands-tx'].town} faqs={LOCATION_FAQS['the-woodlands-tx'].faqs} />

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
                Do Not Let a Small Woodlands Problem Become a Full Replacement
              </h2>
              <p className="text-lg text-blue-200 max-w-xl mx-auto mb-8">
                Multi-zone equipment in a Creekside Park or Sterling Ridge home is built to last for years, but only if a warning sign gets addressed instead of ignored. Reach the form below or call (936) 331-1339; our estimate already accounts for what your HOA will and will not allow on equipment placement.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+19363311339" onClick={() => trackPhoneClick('location_the-woodlands-tx_page')}
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

export default TheWoodlandsTX;
