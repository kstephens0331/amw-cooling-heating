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

const ConroeTX = () => {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Locations", path: "/" },
          { name: "Conroe, TX", path: "/locations/conroe-tx" }
        ]}
      />

      <main className="bg-white text-gray-800 font-sans">
        {/* Patriotic Stripe */}
        <div className="h-1.5 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>

        {/* Hero Section */}
        <section className="relative py-12 md:py-16 overflow-hidden">
          <img
            src="/assets/images/cities/conroe-tx.webp"
            alt="Historic downtown Conroe, Texas"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-blue-900/75"></div>
          <div className="relative max-w-4xl mx-auto px-4 text-center">
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
                href="tel:+19363311339" onClick={() => trackPhoneClick('location_conroe-tx_page')}
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
              Your Local Conroe HVAC Contractor
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              AMW Cooling & Heating is proud to call Conroe home. As the Montgomery County
              seat on the shores of Lake Conroe, just off Interstate 45 north of Houston,
              Conroe is where our shop is based, so it is usually one of the fastest
              responses we offer anywhere in our service area. We are a veteran-owned HVAC
              company providing complete heating, cooling, indoor air quality, and
              maintenance services for homeowners across the city.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Conroe summers are long, hot, and humid, and being this close to Lake Conroe
              means extra moisture in the air that any cooling system has to work to pull
              out, while the cold fronts that push through in winter still call for heating
              you can count on. The city's housing stock is a wide mix, from older homes in
              established neighborhoods like River Plantation and April Sound to the newer
              high-efficiency builds going up around the edges of town near Crighton Ridge,
              and we have built our team to handle both the repair and replacement work that
              comes with it.
            </p>
          </div>
        </section>

        {/* Common Problems Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
              Common HVAC Problems in Conroe
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Being on the water and sitting on a mix of decades-old and brand-new
              construction gives Conroe its own particular set of HVAC headaches. Here is
              what we get called out for most:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <FaThermometerHalf className="text-blue-900 w-5 h-5 flex-shrink-0" />
                  <span className="font-bold text-blue-900">Humidity from Lake Conroe</span>
                </div>
                <p className="text-gray-700 text-base">
                  Homes near the water fight extra moisture in the air almost year-round.
                  We see it as evaporator coils icing over, systems that run constantly but
                  never quite feel like they are keeping up, and musty smells that point to
                  a dehumidification problem rather than a dirty filter.
                </p>
              </div>
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <FaWrench className="text-blue-900 w-5 h-5 flex-shrink-0" />
                  <span className="font-bold text-blue-900">Aging equipment in established neighborhoods</span>
                </div>
                <p className="text-gray-700 text-base">
                  In River Plantation, April Sound, and other older Conroe neighborhoods,
                  we regularly find original equipment on its second or third capacitor,
                  older refrigerant lines starting to leak, and thermostats that have never
                  been swapped out for anything smarter.
                </p>
              </div>
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <FaTools className="text-blue-900 w-5 h-5 flex-shrink-0" />
                  <span className="font-bold text-blue-900">Builder-grade sizing in new construction</span>
                </div>
                <p className="text-gray-700 text-base">
                  Around Crighton Ridge and other newer sections of town, the equipment
                  installed during construction is often sized to code minimums rather than
                  for how the home is actually used, which shows up as one room that never
                  cools down or a system that short-cycles on the hottest afternoons.
                </p>
              </div>
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <FaFan className="text-blue-900 w-5 h-5 flex-shrink-0" />
                  <span className="font-bold text-blue-900">Breakers tripping on peak summer days</span>
                </div>
                <p className="text-gray-700 text-base">
                  When the outside unit has to work hardest, on the hottest stretch of
                  August, we get calls about breakers tripping as the compressor kicks on.
                  It is sometimes the panel, sometimes the condenser drawing more current
                  than it should, and worth having checked before it happens twice in one
                  week.
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
              HVAC SERVICES IN CONROE
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
              WHY CONROE RESIDENTS CHOOSE AMW
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg text-center max-w-3xl mx-auto">
              Our shop sits at 2346 Strong Horse Dr, right here in Conroe, which makes this
              city different from every other town on our map: it is not just a place we
              cover, it is the place we work out of. That means the technician headed to
              your address already knows the shortcut to River Plantation, already knows the
              wiring quirks common to the older homes downtown, and is not driving in from
              across the county to get to you.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">Shortest drive time of anywhere we serve</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">Veteran-owned, dispatched from right here in Conroe</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">Licensed under TACLB133920E, insured, and bonded</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">Price quoted before any tool comes off the truck</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium"><Link href="/financing" className="text-blue-600 hover:underline">Payment plans</Link> through Synchrony and FTL Finance</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">5.0 stars on Google, earned one Montgomery County home at a time</span>
              </div>
            </div>
          </div>
        </section>

        {/* Neighborhoods Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-red-500 rounded"></span>
              Serving Conroe Neighborhoods
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Conroe is home base for us, so these are the streets our trucks know best:
              Downtown Conroe's historic core, the established neighborhoods of River
              Plantation and April Sound, the newer builds going up around Crighton Ridge,
              and every other block inside the city limits. Because we start each run from
              our own shop instead of a dispatch center in another county, a Conroe address
              is usually the shortest drive on our whole schedule.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded"></span>
              Old Homes and New Builds, One Team
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Conroe's housing stock runs the full range, from older homes in established
              neighborhoods like River Plantation and April Sound to the newer
              high-efficiency construction going up around the edges of town. That mix
              means we see everything from aging equipment that has earned an honest
              repair-or-replace conversation to newer systems that just need routine
              maintenance to stay under warranty. Whatever stage your system is in, we give
              you a straight answer instead of a sales pitch.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-red-500 rounded"></span>
              Emergency HVAC Service in Conroe
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Because our shop is minutes from most of Conroe, an emergency call here
              typically gets answered faster than anywhere else on our route. If the AC
              quits on a July afternoon or the heat fails during a rare hard freeze, do not
              try to wait it out. Call and we will have a technician moving toward you right
              away, day or night within our service hours.
            </p>


            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded"></span>
              Nearby Areas We Serve
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed text-base md:text-lg">
              AMW Cooling & Heating serves communities throughout Montgomery County and the
              north Houston area. Explore our HVAC service in nearby towns:
            </p>
            <NearbyAreas currentPath="/locations/conroe-tx" />
          </div>
        </section>


        {/* FAQ Section */}
        <LocationFAQ town={LOCATION_FAQS['conroe-tx'].town} faqs={LOCATION_FAQS['conroe-tx'].faqs} />

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
                Your Neighbors Down the Street, Not Across the County
              </h2>
              <p className="text-lg text-blue-200 max-w-xl mx-auto mb-8">
                Our shop sits right on Strong Horse Dr, so a call from a Conroe address
                rarely means a long wait behind other jobs. Dial (936) 331-1339 and there
                is a good chance you will be talking to the same technician who ends up in
                your driveway, not a scheduler working three towns away.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+19363311339" onClick={() => trackPhoneClick('location_conroe-tx_page')}
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

export default ConroeTX;
