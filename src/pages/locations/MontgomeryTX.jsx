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

const MontgomeryTX = () => {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Locations", path: "/" },
          { name: "Montgomery, TX", path: "/locations/montgomery-tx" }
        ]}
      />

      <main className="bg-white text-gray-800 font-sans">
        {/* Patriotic Stripe */}
        <div className="h-1.5 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>

        {/* Hero Section */}
        <section className="relative py-12 md:py-16 overflow-hidden">
          <img
            src="/assets/images/cities/montgomery-tx.webp"
            alt="Historic downtown Montgomery, Texas"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-blue-900/75"></div>
          <div className="relative max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <FaMapMarkerAlt className="text-red-400 w-4 h-4" />
              <span className="text-white text-sm font-medium">Montgomery, Texas</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              HVAC Services in Montgomery, TX
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Trusted HVAC contractor serving Montgomery, Texas, from historic downtown to the Lake Conroe communities.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+19363311339" onClick={() => trackPhoneClick('location_montgomery-tx_page')}
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
              Your Local Montgomery HVAC Contractor
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              AMW Cooling & Heating serves Montgomery, Texas with the same dedication and expertise that has earned us a perfect 5-star Google rating. Montgomery is one of the oldest towns in Texas, blending rich history with modern lakefront living along the shores of Lake Conroe. From the charming historic downtown district to the upscale Walden on Lake Conroe community and the growing neighborhoods along FM 149, our veteran-owned team handles every part of your home comfort system: air conditioning, heating, indoor air quality, thermostats, and more, all from a quick trip west of our Conroe home base.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Montgomery's housing runs the full range, from established places near historic downtown to upscale lakefront and golf-community homes in Walden, Bentwater, and April Sound. That mix means we walk into very different jobs across town: older ductwork and aging equipment near downtown, and humidity-driven comfort issues on properties close to the water. Whatever the job or whichever service you need, our technicians know Montgomery and show up ready for it.
            </p>
          </div>
        </section>

        {/* Common HVAC Problems Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 text-center">
              Common HVAC Problems in Montgomery, TX
            </h3>
            <p className="text-gray-700 mb-8 leading-relaxed text-base md:text-lg text-center max-w-3xl mx-auto">
              Being this close to Lake Conroe changes what tends to break and why. These are the
              issues we see most often on lakefront, golf-community, and historic downtown
              properties around Montgomery.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <h4 className="font-bold text-blue-900 mb-2 text-lg">Undersized or mis-charged systems near the water</h4>
                <p className="text-gray-700 text-base leading-relaxed">
                  A lakefront home carries a heavier moisture load than a house a few miles inland.
                  An AC that is the right tonnage on paper but not charged correctly for that extra
                  humidity will hit the set temperature and still leave rooms feeling clammy. We
                  check refrigerant charge and airflow against the actual moisture load, not just
                  the square footage.
                </p>
              </div>
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <h4 className="font-bold text-blue-900 mb-2 text-lg">Mold and mildew in ductwork and closets</h4>
                <p className="text-gray-700 text-base leading-relaxed">
                  Moisture off the lake works its way into insulation, interior closets, and duct
                  runs long before it shows up as a musty smell. On Walden, Bentwater, and April
                  Sound properties we inspect ductwork and drain lines for standing moisture and
                  recommend dehumidification when the AC alone cannot keep up.
                </p>
              </div>
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <h4 className="font-bold text-blue-900 mb-2 text-lg">Frozen coils and iced-over lines</h4>
                <p className="text-gray-700 text-base leading-relaxed">
                  Higher ambient humidity combined with low refrigerant or restricted airflow is a
                  common recipe for a frozen evaporator coil on lake-area homes, especially on
                  systems that run nonstop trying to fight the moisture. We diagnose the root cause
                  instead of just thawing the line and sending you on your way.
                </p>
              </div>
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <h4 className="font-bold text-blue-900 mb-2 text-lg">Aging ductwork and equipment near downtown</h4>
                <p className="text-gray-700 text-base leading-relaxed">
                  Homes near historic downtown Montgomery often carry older duct systems and
                  equipment that were never built for today's efficiency or dehumidification
                  standards. That shows up as uneven cooling room to room and higher bills than a
                  properly sealed, correctly sized system should run.
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
              HVAC SERVICES IN MONTGOMERY
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
              WHY MONTGOMERY RESIDENTS CHOOSE AMW
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg text-center max-w-3xl mx-auto">
              A system that keeps a Montgomery home comfortable has to solve two problems at once: Texas heat and the extra moisture rolling off Lake Conroe. Get the sizing or the refrigerant charge wrong and you end up with a unit that cools the air but still leaves rooms feeling damp, or one that runs nonstop and never catches up. That is the standard our technicians work to on every call, lakefront or downtown, backed by Texas license TACLB133920E.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 max-w-3xl mx-auto">
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">Who answers your call? A licensed local technician, not a distant hold queue</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">Same-day and after-hours calls covered, 8am to 9pm every day</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">Upfront pricing before we start, with <Link href="/financing" className="text-blue-600 hover:underline">financing</Link> through Synchrony and FTL Finance</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">Equipment sized and charged for Lake Conroe humidity, not just the thermostat</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3 md:col-span-2 md:max-w-xs md:mx-auto">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">5.0-star Google rating from Montgomery County neighbors</span>
              </div>
            </div>
          </div>
        </section>

        {/* Neighborhoods + Local Detail Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-red-500 rounded"></span>
              Serving Montgomery Neighborhoods
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Our Montgomery technicians work the whole map, from the historic town square to the
              gated communities ringing the lake: Historic Downtown Montgomery, Walden on Lake
              Conroe, April Sound, Bentwater, the FM 149 corridor, the La Torretta area, and the
              rest of Montgomery County's west side. If your property sits behind a gate or down
              a private dock road, just mention it when you call so the first trip out is also
              the last one.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded"></span>
              Lake Conroe Humidity and Year-Round Comfort
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Homes near Lake Conroe deal with extra humidity coming off the water, and that moisture
              affects more than just your AC. It can leave rooms feeling clammy, encourage mold and
              mildew, and shorten the life of equipment that isn't sized or maintained correctly. We
              look at the whole system on lakefront and golf-community properties, cooling, heating,
              and indoor air quality alike, so your home stays comfortable and healthy in every
              season, not just cold.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-red-500 rounded"></span>
              Emergency HVAC Service in Montgomery
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Heat and humidity off Lake Conroe do not check the clock before an AC gives out, and
              neither do we. The phones are covered 8am to 9pm every day, with after-hours emergency
              coverage until 9pm, so whether the call comes from a dock house on the water or a
              place near the historic square, we get a technician moving the same day.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded"></span>
              Nearby Areas We Serve
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed text-base md:text-lg">
              AMW Cooling & Heating serves communities across Montgomery County. Explore our HVAC
              service in nearby towns:
            </p>
            <NearbyAreas currentPath="/locations/montgomery-tx" />
          </div>
        </section>


        {/* FAQ Section */}
        <LocationFAQ town={LOCATION_FAQS['montgomery-tx'].town} faqs={LOCATION_FAQS['montgomery-tx'].faqs} />

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
                Stop Lake Conroe Humidity Before It Becomes a Mold Problem
              </h2>
              <p className="text-lg text-blue-200 max-w-xl mx-auto mb-8">
                A musty smell or a room that never quite feels dry usually means moisture is already
                winning. Call AMW and we will check your system's sizing, refrigerant charge, and
                drainage before it turns into a bigger repair, whether you are on the water in
                Walden or a few blocks from the historic square.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+19363311339" onClick={() => trackPhoneClick('location_montgomery-tx_page')}
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

export default MontgomeryTX;
