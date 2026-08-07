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

const ShenandoahTX = () => {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Locations", path: "/" },
          { name: "Shenandoah, TX", path: "/locations/shenandoah-tx" }
        ]}
      />

      <main className="bg-white text-gray-800 font-sans">
        {/* Patriotic Stripe */}
        <div className="h-1.5 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>

        {/* Hero Section */}
        <section className="relative py-12 md:py-16 overflow-hidden">
          <img
            src="/assets/images/cities/shenandoah-tx.webp"
            alt="City of Shenandoah, Texas"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-blue-900/75"></div>
          <div className="relative max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <FaMapMarkerAlt className="text-red-400 w-4 h-4" />
              <span className="text-white text-sm font-medium">Shenandoah, Texas</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              HVAC Services in Shenandoah, TX
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Dependable heating and cooling for the city that straddles I-45 in southern
              Montgomery County, from the mature homes of Shenandoah Valley to the busy
              retail and medical corridor around Metropark Square.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+19363311339" onClick={() => trackPhoneClick('location_shenandoah-tx_page')}
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
              Your Local Shenandoah HVAC Contractor
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              AMW Cooling & Heating serves Shenandoah, the compact city of about two square miles
              that sits right on top of I-45 roughly nine miles south of our Conroe home base. As a
              veteran-owned HVAC company, we keep Shenandoah homes and businesses comfortable through
              the humid Gulf-coast summers that push air conditioners hard nearly year-round, and
              through the winter cold fronts that still test your heat.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Shenandoah is an established city, not raw new construction. It grew out of a late-1960s
              bedroom community originally platted as Shenandoah Valley and incorporated in 1974, and
              a lot of that original housing stock is now mature enough that the systems inside are
              aging out. Layered over those older single-family homes is a modern commercial and
              medical base built along I-45, which means we handle two very different jobs here: full
              system replacements on older houses and light-commercial and rooftop-unit work for the
              shops, hotels, and clinics that line the freeway. We cover both across ZIP codes 77381,
              77384, and 77385.
            </p>
          </div>
        </section>

        {/* Common HVAC Problems Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
              Common HVAC Problems in Shenandoah
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Because Shenandoah runs on a mix of established homes and heavy commercial traffic
              along I-45, the calls we get here break down differently than in a purely residential
              town. These are the four issues we see most:
            </p>
            <div className="space-y-5">
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <h3 className="font-bold text-blue-900 text-base md:text-lg mb-2">Rooftop units giving out during business hours</h3>
                <p className="text-gray-700 leading-relaxed">
                  The package units on top of the retail and restaurant buildings around Metropark
                  Square and Portofino Shopping Center run nearly nonstop through the day, with
                  doors opening and closing constantly and dining rooms full of body heat and
                  kitchen exhaust. That duty cycle wears out contactors, capacitors, and compressors
                  faster than a typical home system, and a failure at 1pm on a Saturday is a
                  different emergency than one at midnight.
                </p>
              </div>
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <h3 className="font-bold text-blue-900 text-base md:text-lg mb-2">Kitchen exhaust pulling more air than it replaces</h3>
                <p className="text-gray-700 leading-relaxed">
                  Restaurants along the corridor run grease-hood exhaust fans that can pull more
                  air out of the building than the makeup-air system replaces, which drops the space
                  into negative pressure. The HVAC system ends up fighting that imbalance, running
                  longer to hold temperature and pulling humid outside air in around doors and vents.
                  We check the balance, not just the thermostat, when a commercial customer's
                  dining room will not cool down.
                </p>
              </div>
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <h3 className="font-bold text-blue-900 text-base md:text-lg mb-2">Original equipment aging out in Shenandoah Valley homes</h3>
                <p className="text-gray-700 leading-relaxed">
                  Many houses in the Shenandoah Valley subdivision still have equipment dating back
                  to the 1970s and 1980s, some of it original to the home. That means old refrigerant
                  types, corroded coils, and ductwork sized for a smaller electrical load than
                  today's homes carry. We see more compressor failures and refrigerant leaks on this
                  side of town than anywhere else we serve.
                </p>
              </div>
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <h3 className="font-bold text-blue-900 text-base md:text-lg mb-2">Isolated comfort complaints in multi-zone hospitality buildings</h3>
                <p className="text-gray-700 leading-relaxed">
                  A hotel like the Hyatt House runs dozens of individual room units off one property,
                  so a single guest room running hot rarely means the whole building has a problem.
                  It usually means one zone or one packaged terminal unit needs attention. We
                  diagnose and fix the specific unit instead of treating it as a building-wide
                  system failure, which keeps the rest of the property running while we work.
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
              HVAC SERVICES IN SHENANDOAH
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
              WHY SHENANDOAH CHOOSES AMW
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg text-center max-w-3xl mx-auto">
              Roughly seventy percent of Shenandoah's sales-tax revenue comes from the shops,
              restaurants, and hotels along I-45, which means a rooftop unit going out at Metropark
              Square or Portofino is a business problem, not just a comfort problem, and we treat it
              that way. We are veteran-owned, based just up the road in Conroe, and every technician
              on our crew has worked both settings long enough to know the difference between a
              1970s split system in a Shenandoah Valley house and a package unit over a restaurant
              kitchen on the corridor, no relay through an out-of-state center required. We carry
              Texas license TACLB133920E and back every job, home or storefront, with the same
              upfront pricing.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">Veteran-owned techs who work this stretch of I-45 every week</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">Rooftop and light-commercial units serviced alongside home systems</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">Same-day calls, because a closed dining room or hotel floor costs you money</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">Texas license TACLB133920E, insured and bonded</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">Upfront pricing quoted before any work begins</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">Google reviews averaging a full 5.0 stars</span>
              </div>
            </div>
          </div>
        </section>

        {/* Neighborhoods + Local Detail Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-red-500 rounded"></span>
              Serving Shenandoah Neighborhoods
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Shenandoah runs as two distinct service areas for us, divided by the interstate
              that cuts through town. West of I-45 is the Shenandoah Valley
              subdivision, the city's original late-1960s development laid out on the east bank of
              Panther Creek, where large, mature homes make up most of our residential calls. East of
              the freeway is the commercial side: the businesses along David Memorial Drive, past
              Woodforest Bank Stadium, and out Tamina Road. From a compressor tucked behind a
              Shenandoah Valley ranch house to a rooftop unit above a storefront near the Research
              Forest interchange, our trucks cover both without a special trip.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded"></span>
              An Established City With Aging Systems
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              A lot of Shenandoah Valley's single-family homes date to the 1970s and 1980s, so the
              cooling and heating equipment inside many of them is well into its service life. That
              shows up across everything we do here, from AC repair and full system installation to
              heating service, maintenance, and indoor air quality. Whatever the job, we bring the
              same veteran-owned, licensed and insured team and the same upfront pricing to your
              Shenandoah address. Visit our <Link href="/services/ac-repair" className="text-blue-600 hover:underline">AC repair</Link>,{' '}
              <Link href="/services/ac-installation" className="text-blue-600 hover:underline">AC installation</Link>, and{' '}
              <Link href="/services/heating-repair" className="text-blue-600 hover:underline">heating repair</Link> pages for a
              closer look at how we handle each one in Shenandoah.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-red-500 rounded"></span>
              Light-Commercial HVAC Along I-45
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Shenandoah earns roughly seventy percent of its revenue from sales tax, and that busy
              retail base shows in the buildings we service. From Metropark Square with its AMC
              theater, Dave & Buster's, and Hyatt House hotel, to the Venetian-style Portofino
              Shopping Center, to the Research Forest Plaza shops and the new medical offices going in
              on Tamina Road, this corridor runs on rooftop units and light-commercial systems that
              cannot afford downtime. We keep them serviced, repaired, and replaced so your doors stay
              open and your customers stay cool.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded"></span>
              Emergency HVAC Service in Shenandoah
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              In Shenandoah a system failure rarely picks a convenient moment. It is a compressor
              going out in a Shenandoah Valley house on a Saturday afternoon, or a rooftop unit
              dropping out over a packed dining room at Metropark Square on a Friday night. We keep
              the schedule open for both: 8am to 9pm, seven days a week, with after-hours emergency
              dispatch from 5pm to 9pm, and a technician sent down I-45 the same day whenever we can
              manage it.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-red-500 rounded"></span>
              Nearby Areas We Serve
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed text-base md:text-lg">
              AMW Cooling & Heating serves communities across Montgomery County and the north
              Houston area. Explore our HVAC service in nearby towns:
            </p>
            <NearbyAreas currentPath="/locations/shenandoah-tx" />
          </div>
        </section>

        {/* FAQ Section */}
        <LocationFAQ town={LOCATION_FAQS['shenandoah-tx'].town} faqs={LOCATION_FAQS['shenandoah-tx'].faqs} />

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
                A Closed Dining Room Costs Metropark Square More Than a Repair Bill
              </h2>
              <p className="text-lg text-blue-200 max-w-xl mx-auto mb-8">
                Restaurant kitchens along the I-45 corridor run their rooftop units nearly
                nonstop through the lunch rush, which wears out a compressor faster than a
                typical home system ever would. Say what kind of building you are calling
                about when you dial (936) 331-1339, and the crew that shows up brings the
                right parts for it, not a guess.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+19363311339" onClick={() => trackPhoneClick('location_shenandoah-tx_page')}
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

export default ShenandoahTX;