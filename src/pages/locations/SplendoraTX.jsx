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

const SplendoraTX = () => {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Locations", path: "/" },
          { name: "Splendora, TX", path: "/locations/splendora-tx" }
        ]}
      />

      <main className="bg-white text-gray-800 font-sans">
        {/* Patriotic Stripe */}
        <div className="h-1.5 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>

        {/* Hero Section */}
        <section className="relative py-12 md:py-16 overflow-hidden">
          <img
            src="/assets/images/cities/splendora-tx.webp"
            alt="City of Splendora, Texas welcome sign"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-blue-900/75"></div>
          <div className="relative max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <FaMapMarkerAlt className="text-red-400 w-4 h-4" />
              <span className="text-white text-sm font-medium">Splendora, Texas</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              HVAC Services in Splendora, TX
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Dependable heating and cooling for East Montgomery County along the US-59 / I-69
              corridor, from new-construction communities like The Canopies to the acreage homes
              out on Northcrest Ranch.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+19363311339" onClick={() => trackPhoneClick('location_splendora-tx_page')}
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
              Your Local Splendora HVAC Contractor
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              AMW Cooling &amp; Heating serves Splendora, a small East Montgomery County town about
              35 miles north of Houston along US Highway 59 / Interstate 69. As a veteran-owned HVAC company based in Conroe, we keep Splendora homes and businesses in
              the 77372 ZIP code comfortable through the long, humid Southeast Texas cooling season
              and the cold fronts that still push down through the piney woods each winter.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Splendora grew up around the railroad and the sawmills, starting out in the 1880s as
              Cox's Switch before it was renamed in 1896 for the splendor of its floral surroundings.
              That timber-town past still shows in the housing, and it means a real mix of HVAC
              needs. You will find older ranch-style houses on half-acre-plus lots and modest 1980s
              single-family homes from when the area was still rural, sitting right alongside a wave
              of newer master-planned builds climbing up the US-59 / I-69 corridor. AMW takes care
              of every one of them, whether the system is decades old or fresh out of the box.
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
              HVAC SERVICES IN SPLENDORA
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
              WHY SPLENDORA CHOOSES AMW
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg text-center max-w-3xl mx-auto">
              Splendora has held onto its small-town, piney-woods character even as the growth
              from New Caney and Porter creeps closer every year, and that is the kind of town our
              technicians actually understand. Ask a crew from a national chain to find a house off
              Old Highway 59 or explain what pine sap does to a condenser coil, and you will get a
              shrug. Ask us, and we already know the answer, because Conroe is fifteen minutes away
              and this is the area we grew up working in.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">&#10003;</span>
                <span className="text-gray-700 text-base font-medium">Comfortable on piney-woods acreage, not just subdivisions</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">&#10003;</span>
                <span className="text-gray-700 text-base font-medium">Local techs, local dispatch, no call center in the loop</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">&#10003;</span>
                <span className="text-gray-700 text-base font-medium">Licensed under TACLB133920E, insured, and bonded</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">&#10003;</span>
                <span className="text-gray-700 text-base font-medium">Same-day and after-hours calls, 8am to 9pm daily</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">&#10003;</span>
                <span className="text-gray-700 text-base font-medium">Upfront pricing with <Link href="/financing" className="text-blue-600 hover:underline">Synchrony and FTL financing</Link></span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">&#10003;</span>
                <span className="text-gray-700 text-base font-medium">5.0-star Google rating from East Montgomery County neighbors</span>
              </div>
            </div>
          </div>
        </section>

        {/* Common HVAC Problems Section */}
        <div className="h-1 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-black text-center text-blue-900 mb-3 tracking-wide">
              COMMON HVAC PROBLEMS WE FIX IN SPLENDORA
            </h3>
            <p className="text-gray-700 mb-8 leading-relaxed text-base md:text-lg text-center max-w-3xl mx-auto">
              Splendora&apos;s piney-woods setting and its mix of decades-old ranch homes and brand-new
              construction create a specific set of headaches. Here is what our technicians run into
              most often around town.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-5 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaLeaf className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-bold text-blue-900 mb-1">Pine Straw and Pollen-Clogged Condensers</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    The tree canopy that gives Splendora its shade also drops pine straw, needles, and
                    heavy spring pollen onto outdoor condenser coils. A clogged coil forces the
                    compressor to work harder and can drive your electric bill up long before the unit
                    actually fails.
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-5 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaThermometerHalf className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-bold text-blue-900 mb-1">Undersized Systems in Older Ranch Homes</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    A lot of Splendora&apos;s half-acre-plus lots carry original or close-to-original
                    1980s equipment. Single-stage units that were adequate 30 years ago often cannot
                    keep up with today&apos;s humidity load, especially in additions or converted rooms
                    that were never on the original duct plan.
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-5 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaFan className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-bold text-blue-900 mb-1">Weak Airflow on Larger Acreage Lots</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Out toward Northcrest Ranch, the bigger the property, the longer the duct runs and
                    refrigerant lines between the condenser and the house. That distance often shows up
                    as weak airflow in the rooms farthest from the unit or a system that short-cycles
                    trying to compensate.
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-5 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaTools className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-bold text-blue-900 mb-1">Builder-Grade Systems Sized for the Spec Sheet, Not the House</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    New homes going up in The Canopies and Townsend Reserve often ship with equipment
                    sized to a standard spec, not the actual floor plan. Open-concept layouts and
                    vaulted ceilings can leave one part of the house noticeably warmer than the rest,
                    even on a system that is only a year or two old.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Neighborhoods + Local Detail Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-red-500 rounded"></span>
              Serving Splendora Neighborhoods
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Splendora doesn't cluster into a tidy grid, so our coverage stretches wherever the
              town does. That reaches the newer streets of The Canopies and the growth
              filling in at Townsend Reserve, the bigger lots of Rio Vista, and the acreage and
              ranch-style properties out on Northcrest Ranch. Near the Splendora ISD campuses off
              FM 2090 or tucked back on a wooded lot closer to Old Highway 59, call the number
              above and we will find you.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded"></span>
              The Fine Print on a Brand-New Splendora System
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              The Canopies and the other new subdivisions climbing the US-59 / I-69 corridor mean a
              growing share of Splendora's HVAC equipment is barely out of the box and still carries
              its manufacturer warranty. That coverage is not automatic: most manufacturers only
              honor it if you can produce a dated, professional maintenance record for every year
              the system has been in service, and a missed visit is grounds for a denied claim. We
              build that paperwork trail into every tune-up we run in The Canopies, so if a
              compressor or coil ever fails under warranty, the claim goes through instead of
              landing back on your own bill.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-red-500 rounded"></span>
              Emergency HVAC Service in Splendora
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Regular business hours run 8am to 9pm, seven days a week, and after-hours emergency
              coverage picks up from 5pm to 9pm on top of that, because a furnace that quits on a
              cold December morning does not check the clock first, and neither does a compressor
              that gives out in August. Dial (936) 331-1339 and we will get someone routed to you,
              whether that is near City Hall and City Park on FM 2090 East or out toward the Grand
              Parkway (SH 99). New Caney, Porter, and Cleveland fall inside our coverage area too.
              Note that after-hours calls carry an additional charge.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded"></span>
              Nearby Areas We Serve
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed text-base md:text-lg">
              AMW Cooling &amp; Heating serves communities across East Montgomery County and the
              north Houston area. Explore our HVAC service in nearby towns:
            </p>
            <NearbyAreas currentPath="/locations/splendora-tx" />
          </div>
        </section>

        {/* FAQ Section */}
        <LocationFAQ town={LOCATION_FAQS['splendora-tx'].town} faqs={LOCATION_FAQS['splendora-tx'].faqs} />

        {/* CTA Section */}
        <section className="relative overflow-hidden">
          <div className="h-1.5 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>
          <div className="bg-blue-900 py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <div className="inline-flex items-center gap-2 bg-red-500 rounded-full px-4 py-2 mb-6">
                <FaShieldAlt className="text-white w-4 h-4" />
                <span className="text-white text-sm font-semibold">Veteran-Owned &amp; Operated</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Pine Sap and Back Roads Do Not Slow This Crew Down
              </h2>
              <p className="text-lg text-blue-200 max-w-xl mx-auto mb-8">
                A clogged coil from pine straw or a house that takes an extra ten minutes to
                find off Old Highway 59 barely registers as unusual to a crew that grew up
                working this part of East Montgomery County. Ring (936) 331-1339 and expect
                a callback from an actual technician, never a call-center script.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+19363311339" onClick={() => trackPhoneClick('location_splendora-tx_page')}
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

export default SplendoraTX;