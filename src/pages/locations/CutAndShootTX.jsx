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

const CutAndShootTX = () => {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Locations", path: "/" },
          { name: "Cut and Shoot, TX", path: "/locations/cut-and-shoot-tx" }
        ]}
      />

      <main className="bg-white text-gray-800 font-sans">
        {/* Patriotic Stripe */}
        <div className="h-1.5 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>

        {/* Hero Section */}
        <section className="relative py-12 md:py-16 overflow-hidden">
          <img
            src="/assets/images/cities/cut-and-shoot-tx.webp"
            alt="Cut and Shoot, Texas City Hall"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-blue-900/75"></div>
          <div className="relative max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <FaMapMarkerAlt className="text-red-400 w-4 h-4" />
              <span className="text-white text-sm font-medium">Cut and Shoot, Texas</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              HVAC Services in Cut and Shoot, TX
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Dependable heating and cooling for the wooded acreage community just east of Conroe
              along State Highway 105, from homes near the SH 105 post office to properties out
              toward Groceville and FM 1485.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+19363311339" onClick={() => trackPhoneClick('location_cut-and-shoot-tx_page')}
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
              Your Local Cut and Shoot HVAC Contractor
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              AMW Cooling & Heating serves Cut and Shoot, the small rural city in eastern
              Montgomery County that sits about 6 miles east of Conroe along State Highway 105.
              We are a veteran-owned HVAC company based just up the road in Conroe at 2346 Strong
              Horse Dr, so a service call out to Cut and Shoot is a short run east on SH 105 rather
              than a trip across the metro. That keeps our response times quick through the long,
              humid Southeast Texas cooling season and the cold snaps that still push through each
              winter.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Cut and Shoot has a country-acreage character that shapes the HVAC work we do here.
              Housing runs from single-family homes to mobile and manufactured homes set on lots that
              range from a quarter acre to well over a hundred, spread through the ZIP 77306 and 77303
              areas east of Conroe. Older established systems on these rural properties often need
              honest repair or full replacement, while newer builds on the acreage need proper
              maintenance and correct sizing for the heat. We handle both, and we know the difference
              between genuine Cut and Shoot out along SH 105 and the Conroe-side addresses that simply
              share the 77306 ZIP.
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
              HVAC SERVICES IN CUT AND SHOOT
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
              WHY CUT AND SHOOT CHOOSES AMW
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg text-center max-w-3xl mx-auto">
              Ask a Cut and Shoot homeowner what they actually need from an HVAC company and the
              answer rarely starts with a logo. It starts with someone who will drive the extra
              gravel road, who knows the difference between a torn belly duct on a manufactured
              home and a standard supply-line leak, and who does not treat a property tucked back
              off FM 1485 as too far out of the way. That is the job here. Our shop sits six miles
              west on SH 105 in Conroe, veteran-owned since we opened, Texas license TACLB133920E
              in hand, and every technician we send has already worked acreage properties like
              yours.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">&#10003;</span>
                <span className="text-gray-700 text-base font-medium">Comfortable on mobile, manufactured & site-built homes</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">&#10003;</span>
                <span className="text-gray-700 text-base font-medium">Straight repair-vs-replace calls on older rural systems</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">&#10003;</span>
                <span className="text-gray-700 text-base font-medium">TACLB133920E licensed, insured & bonded</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">&#10003;</span>
                <span className="text-gray-700 text-base font-medium">Same-day runs out SH 105 and FM 1485</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">&#10003;</span>
                <span className="text-gray-700 text-base font-medium"><Link href="/financing" className="text-blue-600 hover:underline">Financing</Link> through Synchrony & FTL Finance</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">&#10003;</span>
                <span className="text-gray-700 text-base font-medium">5.0-star Google rating</span>
              </div>
            </div>
          </div>
        </section>

        {/* Common HVAC Problems Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
              Common HVAC Problems in Cut and Shoot
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Country properties break down in different ways than a house on a tight subdivision
              lot. These are the calls we run most often out on the Cut and Shoot acreage:
            </p>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <h4 className="font-bold text-blue-900 mb-1">Sagging or torn belly ducts on manufactured homes</h4>
                <p className="text-gray-700">
                  The underbelly ductwork on older mobile and manufactured homes stretches, tears,
                  or gets chewed through by animals over the years. The result is weak airflow at
                  the register, a system that runs long, and a power bill that climbs even though
                  the thermostat has not moved.
                </p>
              </div>
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <h4 className="font-bold text-blue-900 mb-1">Weak airflow to rooms far from the air handler</h4>
                <p className="text-gray-700">
                  Bigger lots mean bigger houses, additions, converted porches, and detached
                  shops, and the duct run built for the original floor plan often was not sized
                  for the extra distance. The back bedroom or the addition off the kitchen never
                  quite matches the rest of the house.
                </p>
              </div>
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <h4 className="font-bold text-blue-900 mb-1">Outdoor units clogged by pasture and tree debris</h4>
                <p className="text-gray-700">
                  Without a subdivision landscaping crew keeping grass and leaf litter off the
                  condenser, coils out on acreage properties collect pasture grass clippings, oak
                  leaves, and dust a lot faster than a mowed suburban yard, which drives up
                  compressor strain and cuts efficiency.
                </p>
              </div>
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <h4 className="font-bold text-blue-900 mb-1">Aging systems past their honest service life</h4>
                <p className="text-gray-700">
                  A lot of Cut and Shoot properties have been in the same family for years, and so
                  has the HVAC system. When an older unit starts needing repeat repairs, we give
                  you a straight comparison of what another patch job costs against a replacement
                  built for how the property is actually used today.
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
              Serving Cut and Shoot and Groceville
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Getting around Cut and Shoot means running the county roads themselves, since
              properties here sit scattered across acreage rather than packed onto city blocks:
              the homes near the city offices and post office on SH 105 East, the
              Groceville community folded inside Cut and Shoot's boundaries, and the acreage
              tracts running down FM 1485 toward New Caney. Whether your ZIP reads 77306 or
              77303, the work gets the same careful attention; the only real variable is how
              long the driveway is before we reach your front door.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded"></span>
              Built for Rural Acreage HVAC
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Cooling a home on a wooded country lot is a different job than servicing a tract house
              in a dense subdivision. Longer duct runs, detached shops, older manufactured homes, and
              equipment that sits out in the East Montgomery County humidity all put real strain on a
              system. We handle every part of that, from{' '}
              <Link href="/services/ac-repair" className="text-blue-600 hover:underline">AC repair</Link> and{' '}
              <Link href="/services/ac-installation" className="text-blue-600 hover:underline">new system installation</Link> to{' '}
              <Link href="/services/heating-repair" className="text-blue-600 hover:underline">heating repair</Link> and{' '}
              <Link href="/services/hvac-maintenance" className="text-blue-600 hover:underline">routine maintenance</Link>, and
              for the older systems common on established Cut and Shoot properties we give you a
              straight answer on whether a repair makes sense or a replacement will save you money
              over the long Texas summer.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-red-500 rounded"></span>
              Emergency HVAC Service in Cut and Shoot
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Out on acreage, a dead AC in August is not something you can count on a neighbor to
              notice, since the nearest one might be a quarter mile down the road. When your system
              quits, call (936) 331-1339 and we will send a technician east on SH 105 from our
              Conroe shop, same day whenever we can manage it, doors open 8am to 9pm every day of
              the week. We also run calls to nearby Conroe, Cleveland out toward US 59, and the rest
              of eastern Montgomery County.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded"></span>
              Nearby Areas We Serve
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed text-base md:text-lg">
              AMW Cooling & Heating serves communities across Montgomery County and the north
              Houston area. Explore our HVAC service in nearby towns:
            </p>
            <NearbyAreas currentPath="/locations/cut-and-shoot-tx" />
          </div>
        </section>

        {/* FAQ Section */}
        <LocationFAQ town={LOCATION_FAQS['cut-and-shoot-tx'].town} faqs={LOCATION_FAQS['cut-and-shoot-tx'].faqs} />

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
                Gravel Driveway? That Is a Tuesday for Us.
              </h2>
              <p className="text-lg text-blue-200 max-w-xl mx-auto mb-8">
                A quarter-mile drive back off FM 1485 or a manufactured home tucked behind
                the tree line does not slow our crew down, since acreage calls like that
                fill half our week already. Ring (936) 331-1339, give us a landmark if the
                address is tricky to find, and finding you becomes our problem, not yours.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+19363311339" onClick={() => trackPhoneClick('location_cut-and-shoot-tx_page')}
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

export default CutAndShootTX;