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

const MagnoliaTX = () => {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Locations", path: "/" },
          { name: "Magnolia, TX", path: "/locations/magnolia-tx" }
        ]}
      />

      <main className="bg-white text-gray-800 font-sans">
        {/* Patriotic Stripe */}
        <div className="h-1.5 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>

        {/* Hero Section */}
        <section className="relative py-12 md:py-16 overflow-hidden">
          <img
            src="/assets/images/cities/magnolia-tx.webp"
            alt="Historic depot in Magnolia, Texas"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-blue-900/75"></div>
          <div className="relative max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <FaMapMarkerAlt className="text-red-400 w-4 h-4" />
              <span className="text-white text-sm font-medium">Magnolia, Texas</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              HVAC Services in Magnolia, TX
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Complete heating and cooling service for Magnolia, Texas, from the FM 1488 corridor's newer neighborhoods to the ranch and acreage properties on the edge of town.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+19363311339" onClick={() => trackPhoneClick('location_magnolia-tx_page')}
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
              Your Local Magnolia HVAC Contractor
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              AMW Cooling & Heating brings our veteran-owned HVAC service to Magnolia, a growing community on the west side of Montgomery County along the FM 1488 and FM 1774 corridors. Magnolia is a real mix of master-planned neighborhoods like Woodforest and Mostyn Manor alongside established ranch and acreage homes on larger lots, and our team is just as comfortable in one setting as the other. We reach Magnolia with a straight run out FM 1488 from our Conroe shop, so we can get to homes and businesses across the area quickly.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              From AC repair and installation to heating service, maintenance, indoor air quality, smart thermostats, and dryer vent cleaning, we handle every part of your home's comfort system, not just one piece of it. Magnolia gets the same hot, humid Southeast Texas summers as the rest of the region, which pushes cooling systems hard from spring through fall, and the area's larger lots often mean bigger equipment and more ductwork to keep comfortable. As a licensed, insured, and veteran-owned company, we bring the same straightforward assessments and upfront pricing to every Magnolia visit.
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
              HVAC SERVICES IN MAGNOLIA
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
              WHY MAGNOLIA RESIDENTS CHOOSE AMW
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg text-center max-w-3xl mx-auto">
              Magnolia is growing fast enough that we can be diagnosing a two-year-old system in Woodforest one morning and working on equipment that predates the widening of FM 1488 the same afternoon, out past Decker Prairie or Dobbin. We built our team around that range: a licensed, insured, and bonded Texas contractor comfortable with builder-grade systems in a new subdivision and with the older, bigger equipment common on acreage properties, without treating either one as an afterthought.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg text-center max-w-3xl mx-auto">
              That range comes from technicians who run the entire Magnolia map every week, not a rotating crew still learning the area, and from being veteran-owned and dispatched out of our own Conroe shop rather than a call center somewhere else. Every Magnolia customer gets the same written, upfront pricing before work starts, <Link href="/financing" className="text-blue-600 hover:underline">financing through Synchrony and FTL Finance</Link> when a repair or replacement runs bigger than expected, and same-day scheduling with after-hours emergency calls available when a system quits without warning.
            </p>
          </div>
        </section>

        {/* Common HVAC Problems Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
              Common HVAC Problems in Magnolia
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Magnolia's split personality, part fast-growing subdivision and part longtime rural community, shows up in the repair calls we run here. These are the issues we see most often:
            </p>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <h4 className="font-bold text-blue-900 mb-1">Well water scaling condensate lines and drain pans</h4>
                <p className="text-gray-700">
                  A lot of the acreage properties along FM 1488, FM 1774, Decker Prairie, and Dobbin run on private wells, and the iron and mineral content in that water builds up in condensate lines and drain pans faster than city water does in the newer subdivisions. Once that buildup clogs the line, the safety float switch shuts the whole system down.
                </p>
              </div>
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <h4 className="font-bold text-blue-900 mb-1">Propane furnaces that will not light on the first cold snap</h4>
                <p className="text-gray-700">
                  Properties out past the edge of town often run on propane rather than natural gas, and after sitting idle all summer, a stuck igniter or a regulator that needs adjusting is the most common reason a furnace fails to fire the first time the temperature actually drops.
                </p>
              </div>
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <h4 className="font-bold text-blue-900 mb-1">West-facing rooms in newer subdivisions that never quite cool off</h4>
                <p className="text-gray-700">
                  Homes in Woodforest and Mostyn Manor are built to a standard load calculation that does not account for a room catching full afternoon sun. A single-zone system sized correctly for the house on paper can still leave that one west-facing bedroom several degrees warmer than the thermostat reading all summer long.
                </p>
              </div>
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <h4 className="font-bold text-blue-900 mb-1">Electrical panels never sized for a modern central system</h4>
                <p className="text-gray-700">
                  Older ranch homes that started out with window or wall units sometimes have an electrical panel that was never built to carry a full central AC load. When we quote a system upgrade on one of these properties, we check the panel first so an electrical fix does not turn into a surprise partway through the installation.
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
              Serving Magnolia Neighborhoods
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Magnolia keeps growing in two directions at once: new rooftops going up along FM 1488 and FM 1774, and long-established acreage properties that have looked much the same for years. We cover
              Woodforest, Mostyn Manor, the FM 1488 corridor, the FM 1774 corridor, Decker Prairie, Dobbin, and everywhere in between. Newer rooftop or long-established acreage, the crew that shows up and the price you're quoted stay exactly the same.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded"></span>
              Every Type of Magnolia Home
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Magnolia's mix of housing stock means we see a wide range of systems on any given day, from standard setups in newer subdivisions to the larger equipment often found on bigger rural lots. Whatever type of home or property you have, our veteran-owned team brings the same honest assessment and upfront pricing to every job, on every service we offer.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-red-500 rounded"></span>
              Emergency HVAC Service in Magnolia
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              A breakdown does not check whether you are five minutes from Magnolia's town center or a long gravel drive off FM 1774. We keep the schedule open from 8am to 9pm every day and staff dedicated after-hours coverage from 5pm to 9pm, so a Saturday night failure does not have to sit until Monday morning. Call (936) 331-1339 and we will start routing a technician your way.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded"></span>
              Nearby Areas We Serve
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed text-base md:text-lg">
              AMW Cooling & Heating serves communities across Montgomery County and the surrounding area. Explore our HVAC service in nearby towns:
            </p>
            <NearbyAreas currentPath="/locations/magnolia-tx" />
          </div>
        </section>


        {/* FAQ Section */}
        <LocationFAQ town={LOCATION_FAQS['magnolia-tx'].town} faqs={LOCATION_FAQS['magnolia-tx'].faqs} />

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
                Magnolia Homes Come in Two Very Different Shapes
              </h2>
              <p className="text-lg text-blue-200 max-w-xl mx-auto mb-8">
                Well water leaves scale in a condensate line that city water never would, and that is the kind of detail our technicians already check on calls out past Decker Prairie. Call (936) 331-1339, or use the form below if typing works better for you right now.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+19363311339" onClick={() => trackPhoneClick('location_magnolia-tx_page')}
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
