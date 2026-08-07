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

const WillisTX = () => {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Locations", path: "/" },
          { name: "Willis, TX", path: "/locations/willis-tx" }
        ]}
      />

      <main className="bg-white text-gray-800 font-sans">
        {/* Patriotic Stripe */}
        <div className="h-1.5 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>

        {/* Hero Section */}
        <section className="relative py-12 md:py-16 overflow-hidden">
          <img
            src="/assets/images/cities/willis-tx.webp"
            alt="City of Willis, Texas"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-blue-900/75"></div>
          <div className="relative max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <FaMapMarkerAlt className="text-red-400 w-4 h-4" />
              <span className="text-white text-sm font-medium">Willis, Texas</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              HVAC Services in Willis, TX
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Reliable heating and cooling services for Willis, Texas, serving the Lake Conroe and I-45 corridor communities.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+19363311339" onClick={() => trackPhoneClick('location_willis-tx_page')}
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
              Your Local Willis HVAC Contractor
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              AMW Cooling & Heating brings professional HVAC services to Willis, Texas, a growing Montgomery County community nestled between Conroe and Huntsville along the I-45 corridor. Willis offers a welcoming small-town atmosphere with convenient access to Lake Conroe recreation. Whether you live near downtown Willis, along FM 830, in the Seven Coves or Point Aquarius lake communities, in Panorama Village, or out on rural acreage, our veteran-owned team provides the full range of heating and cooling service your home or business needs, from repair and installation to maintenance, air quality, and thermostat upgrades.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Willis sits at the northern edge of the greater Houston metro area, where summer temperatures routinely climb above 95°F and humidity levels stay high, and winter cold fronts still test your heating system when they roll through. Homes in the Willis area, especially those near Lake Conroe, face additional moisture challenges that can strain cooling equipment and promote mold growth if it is not managed well. The local housing mix runs from lakefront homes to rural acreage properties, and our technicians are experienced with the full range of HVAC needs those different homes bring, from humidity and drainage near the water to longer duct runs on bigger rural lots.
            </p>
          </div>
        </section>

        {/* Common HVAC Problems Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
              Common HVAC Problems in Willis, TX
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Willis calls split pretty cleanly along the water line: lakefront lots around Seven Coves and Point Aquarius bring one set of problems, and wide-open acreage off FM 830 brings another. Here is the handful of issues that account for most of what our trucks handle out here:
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <h4 className="font-bold text-blue-900 mb-2">Clogged drain lines and musty air near the water</h4>
                <p className="text-gray-700 text-base leading-relaxed">
                  Homes around Seven Coves and Point Aquarius pull in more moisture off the lake than homes farther inland. That extra humidity backs up condensate drain lines faster and leaves closets and back bedrooms smelling musty if the system is not cycling the air properly.
                </p>
              </div>
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <h4 className="font-bold text-blue-900 mb-2">Weak airflow at the far end of rural duct runs</h4>
                <p className="text-gray-700 text-base leading-relaxed">
                  Acreage properties off FM 830 often have ductwork stretched well beyond what a standard subdivision layout needs. The rooms farthest from the unit end up under-cooled in August and under-heated in January because the duct run and the equipment were never matched to the distance.
                </p>
              </div>
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <h4 className="font-bold text-blue-900 mb-2">Outdoor units fouled by lakeside growth</h4>
                <p className="text-gray-700 text-base leading-relaxed">
                  Wooded lots near the water grow leaves, pollen, and grass clippings that pack into a condenser coil quickly. A unit that looks fine from a distance can be running at a fraction of its rated efficiency once the coil is caked over.
                </p>
              </div>
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <h4 className="font-bold text-blue-900 mb-2">Downtime that businesses along the corridor cannot absorb</h4>
                <p className="text-gray-700 text-base leading-relaxed">
                  Willis has a growing strip of shops and offices along the I-45 corridor, and a down system during business hours costs more than the repair itself. We prioritize light commercial calls so a storefront is not sitting without air conditioning through a full workday.
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
              HVAC SERVICES IN WILLIS
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
              WHY WILLIS RESIDENTS CHOOSE AMW
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg text-center max-w-3xl mx-auto">
              Willis sits close enough to our Conroe shop that a technician can be on FM 830 or at Seven Coves within a few minutes, not a few hours, and that response time is what most Willis customers notice first. Our crews already know the difference between a lakefront condenser fighting moisture off Lake Conroe and a unit at the end of a long acreage driveway, because we run both kinds of calls here every week. We carry Texas license TACLB133920E, and unlike the national chains that rarely bother staffing a market this size, it is our own technicians who show up.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">Techs who already know Seven Coves, Point Aquarius, and Panorama Village</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">A short trip up I-45 from our Conroe shop, not a dispatcher out of state</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">Written pricing before we touch your system, lakefront or rural</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">Licensed under TACLB133920E, insured, and bonded</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium"><Link href="/financing" className="text-blue-600 hover:underline">Financing</Link> through Synchrony and FTL for bigger jobs</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">Veteran-owned, with a 5.0-star Google rating from neighbors up and down I-45</span>
              </div>
            </div>
          </div>
        </section>

        {/* Neighborhoods Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-red-500 rounded"></span>
              Serving Willis Neighborhoods
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Every week our trucks handle two very different kinds of Willis calls: tight lake lots around Seven Coves and Point Aquarius where the condenser sits ten feet from the water, and wide-open acreage off FM 830 where the nearest neighbor is a quarter mile away. Add in Downtown Willis and Panorama Village and you have the full territory our trucks cover.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Most Willis calls get a same-day answer, and plenty get a technician scheduled before you've even hung up the phone.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded"></span>
              Emergency HVAC Service in Willis
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Lake air holds more moisture than the rest of Montgomery County, and that extra load is usually what pushes an already-weak system over the edge, often on the worst afternoon possible. Our regular hours are 8am to 9pm daily, and we keep taking emergency calls until 9pm on top of that. Reach us at (936) 331-1339 and we will get someone routed out to you, whether that is a dock-side condenser in Point Aquarius or a unit at the end of a long driveway on FM 830.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-red-500 rounded"></span>
              Nearby Areas We Serve
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed text-base md:text-lg">
              AMW Cooling & Heating serves communities across Montgomery County and the north Houston area. Explore our HVAC service in nearby towns:
            </p>
            <NearbyAreas currentPath="/locations/willis-tx" />
          </div>
        </section>


        {/* FAQ Section */}
        <LocationFAQ town={LOCATION_FAQS['willis-tx'].town} faqs={LOCATION_FAQS['willis-tx'].faqs} />

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
                Whether You Are on the Lake or Down a Back Road, We Cover Willis
              </h2>
              <p className="text-lg text-blue-200 max-w-xl mx-auto mb-8">
                A condenser ten feet from Lake Conroe fights different battles than one at the end of a quarter-mile driveway off FM 830, and our crew treats neither as the unusual case. Call (936) 331-1339 and describe which kind of Willis property you have; we already know the difference.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+19363311339" onClick={() => trackPhoneClick('location_willis-tx_page')}
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
