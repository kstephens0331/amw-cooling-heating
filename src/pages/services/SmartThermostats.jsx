import React from 'react';
import { ServiceSchema, BreadcrumbSchema, LocalBusinessSchema, FAQSchema } from '../../components/StructuredData';
import Link from 'next/link';
import { FaPhone, FaCalendarCheck, FaShieldAlt, FaCheckCircle, FaMobileAlt, FaWifi, FaThermometerHalf } from 'react-icons/fa';
import ManufacturerCarousel from '../../components/ManufacturerCarousel';
import MapSection from '../../components/MapSectionWrapper';
import Footer from '../../components/Footer';
import FaqAccordion from '../../components/FaqAccordion';
import { trackPhoneClick } from '../../utils/analytics';
const thermostatImg = '/assets/images/thermostat.webp';

const serviceFaqs = [
  { question: "What smart thermostat brands do you install?", answer: "We install all major smart thermostat brands including Nest, Ecobee, Honeywell Home, Emerson Sensi, and more. Each brand offers unique features, and we'll help you choose the best one based on your HVAC system, lifestyle, and budget." },
  { question: "Will a smart thermostat work with my current HVAC system?", answer: "Most smart thermostats are compatible with standard HVAC systems, including central AC, furnaces, heat pumps, and some multi-stage systems. However, compatibility depends on your wiring and system type. We'll verify compatibility during a free consultation before installation." },
  { question: "How much does smart thermostat installation cost in Conroe?", answer: "Professional smart thermostat installation in Conroe typically costs $150 to $350 including the thermostat and labor. While some homeowners attempt DIY installation, professional installation ensures proper wiring, calibration, and integration with your HVAC system." },
  { question: "How much can I save with a smart thermostat?", answer: "Most homeowners save 10-23% on heating and cooling bills after installing a smart thermostat. In Texas, where AC can account for 50%+ of energy costs during summer, that translates to $100-$300+ in annual savings. The thermostat typically pays for itself within the first year." },
  { question: "Should I install a smart thermostat myself or hire a professional?", answer: "While some smart thermostats advertise DIY installation, we recommend professional installation. Incorrect wiring can damage your thermostat or HVAC system, void warranties, or even create fire hazards. Our technicians ensure proper installation, wiring, Wi-Fi setup, and system calibration—giving you peace of mind." }
];

const SmartThermostats = () => {
  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema faqs={serviceFaqs} />
      <ServiceSchema
        service={{
          name: "Smart Thermostat Installation",
          description: "Expert smart thermostat installation and setup services in Conroe, TX for all major brands."
        }}
        city="Conroe"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Smart Thermostats", path: "/services/smart-thermostats" }
        ]}
      />

      <main className="bg-white text-gray-800 font-sans">
        {/* Patriotic Stripe */}
        <div className="h-1.5 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>

        {/* Hero Section */}
        <section className="bg-blue-900 py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 text-center md:text-left">
                {/* Service Badge */}
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                  <FaMobileAlt className="text-blue-300 w-4 h-4" />
                  <span className="text-white text-sm font-medium">Smart Home Experts</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Smart Thermostat Installation
                </h1>
                <p className="text-lg text-blue-100 mb-8">
                  Control your comfort from anywhere and save up to 23% on energy costs with professional smart thermostat installation.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                  <a
                    href="tel:+19363311339" onClick={() => trackPhoneClick('service_smart-thermostats_page')}
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
                    Get a Quote
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <img
                  src={thermostatImg}
                  alt="Smart thermostat installation by AMW Cooling & Heating"
                  className="rounded-xl shadow-lg w-full max-w-md mx-auto border-4 border-white/20"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Stripe */}
        <div className="h-1 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>

        {/* Intro Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
              Professional Smart Thermostat Installation & Setup
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Upgrade to a smart thermostat and take complete control of your Conroe home's comfort and
              energy use. These intelligent devices learn your preferences, optimize efficiency automatically,
              and provide detailed energy reports—all accessible from your smartphone, tablet, or computer.
              For Texas homeowners managing cooling costs during long, hot summers, smart thermostats deliver
              substantial savings and unprecedented convenience.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Traditional thermostats waste energy by maintaining the same temperature whether you're home or
              away. Smart thermostats adapt to your schedule, saving Texas homeowners 10-23% on heating and cooling
              costs—$130-$230 annually for the typical Conroe household. Pair with <Link href="/services/hvac-maintenance" className="text-blue-600 hover:underline">regular HVAC maintenance</Link> for maximum savings.
            </p>
          </div>
        </section>

        {/* Brands We Install Section */}
        <section className="py-12 bg-blue-900">
          <div className="max-w-5xl mx-auto px-4">
            <p className="text-center text-gray-400 text-sm tracking-widest uppercase mb-2">
              Top Brands
            </p>
            <h3 className="text-2xl md:text-3xl font-black text-center text-white mb-8 tracking-wide italic">
              SMART THERMOSTATS WE INSTALL
            </h3>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-bold text-blue-900 text-lg mb-3">Google Nest Thermostat</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-3 h-3 flex-shrink-0" /> Auto-Schedule learns your preferences</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-3 h-3 flex-shrink-0" /> Home/Away Assist adjusts automatically</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-3 h-3 flex-shrink-0" /> Works with Google Assistant & Alexa</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-3 h-3 flex-shrink-0" /> Sleek, modern design</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-bold text-blue-900 text-lg mb-3">Ecobee SmartThermostat</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-3 h-3 flex-shrink-0" /> Room sensors for multi-zone comfort</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-3 h-3 flex-shrink-0" /> Built-in Alexa voice control</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-3 h-3 flex-shrink-0" /> Air quality monitoring</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-3 h-3 flex-shrink-0" /> Energy savings reports</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-bold text-blue-900 text-lg mb-3">Honeywell Home T9/T10</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-3 h-3 flex-shrink-0" /> Smart room sensors included</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-3 h-3 flex-shrink-0" /> Geofencing technology</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-3 h-3 flex-shrink-0" /> 7-day flexible scheduling</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-3 h-3 flex-shrink-0" /> Intuitive touchscreen</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-bold text-blue-900 text-lg mb-3">Carrier Cor & Bryant Evolution</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-3 h-3 flex-shrink-0" /> Optimized for Carrier/Bryant systems</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-3 h-3 flex-shrink-0" /> Advanced humidity control</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-3 h-3 flex-shrink-0" /> Weather-based adjustments</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-3 h-3 flex-shrink-0" /> Ideal Performance settings</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Service Section */}
        <div className="h-1 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-red-500 rounded"></span>
              Complete Installation Service Included
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-3">
                <FaCheckCircle className="text-green-500 w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold text-blue-900 text-sm">Compatibility Check</span>
                  <p className="text-gray-600 text-xs mt-1">Verify system works with your thermostat</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-3">
                <FaWifi className="text-blue-600 w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold text-blue-900 text-sm">Wi-Fi Configuration</span>
                  <p className="text-gray-600 text-xs mt-1">Connect to your home network</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-3">
                <FaThermometerHalf className="text-red-500 w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold text-blue-900 text-sm">Schedule Programming</span>
                  <p className="text-gray-600 text-xs mt-1">Set your preferred temperatures</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-3">
                <FaMobileAlt className="text-blue-600 w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold text-blue-900 text-sm">Sensor Placement</span>
                  <p className="text-gray-600 text-xs mt-1">Optimal positioning for room sensors</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-3">
                <FaCheckCircle className="text-green-500 w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold text-blue-900 text-sm">Tutorial & Training</span>
                  <p className="text-gray-600 text-xs mt-1">Full walkthrough of all features</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-3">
                <FaShieldAlt className="text-blue-600 w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold text-blue-900 text-sm">System Testing</span>
                  <p className="text-gray-600 text-xs mt-1">Verify all controls work properly</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features + Climate Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded"></span>
              Key Features & Benefits
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                <span className="font-bold text-blue-900 text-sm">Remote Control</span>
                <p className="text-gray-600 text-xs mt-1">Adjust from anywhere via smartphone</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                <span className="font-bold text-blue-900 text-sm">Learning AI</span>
                <p className="text-gray-600 text-xs mt-1">Adapts to your routine automatically</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                <span className="font-bold text-blue-900 text-sm">Voice Control</span>
                <p className="text-gray-600 text-xs mt-1">Works with Alexa & Google</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                <span className="font-bold text-blue-900 text-sm">Multi-Zone</span>
                <p className="text-gray-600 text-xs mt-1">Different temps per room</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                <span className="font-bold text-blue-900 text-sm">Weather Integration</span>
                <p className="text-gray-600 text-xs mt-1">Adjusts based on forecast</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                <span className="font-bold text-blue-900 text-sm">Vacation Mode</span>
                <p className="text-gray-600 text-xs mt-1">Energy-saving while away</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                <span className="font-bold text-blue-900 text-sm">Humidity Control</span>
                <p className="text-gray-600 text-xs mt-1">Critical for Conroe's climate</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                <span className="font-bold text-blue-900 text-sm">Filter Reminders</span>
                <p className="text-gray-600 text-xs mt-1">Alerts when it's time to change</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-red-500 rounded"></span>
              Perfect for Conroe's Climate
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Conroe summers are long and hot, with AC running constantly from May through September. Smart
              thermostats excel in this climate by pre-cooling your home before peak rates, adjusting for
              humidity, and ensuring you never cool an empty house. Many models also integrate with utility
              company demand response programs, earning you credits for reducing usage during peak times.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded"></span>
              Is Your System Compatible?
            </h3>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              Most smart thermostats work with standard HVAC systems including gas furnaces, electric heat,
              central air conditioning, heat pumps, and multi-stage systems. Some older systems may require a C-wire
              installation or power adapter. Our technicians assess compatibility during your consultation and handle
              any necessary wiring upgrades.
            </p>
          </div>
        </section>

        {/* Why Choose Section */}
        <div className="h-1 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-red-500 py-3 mb-8 -mx-4">
              <p className="text-center text-white text-base font-medium tracking-widest uppercase">
                Fast, Honest, and Reliable
              </p>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-center text-blue-900 mb-8 tracking-wide">
              WHY CHOOSE AMW FOR SMART THERMOSTATS
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-gray-50 rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">Veteran-owned and operated</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">Licensed, insured & bonded</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">All major brands installed</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">Complete setup included</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium"><Link href="/financing" className="text-blue-600 hover:underline">Financing options</Link> available</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 shadow-sm flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700 text-base font-medium">5.0-star Google rating</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FaqAccordion heading="Frequently Asked Questions" faqs={serviceFaqs} />

        {/* Related Services */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded"></span>
              Related Services
            </h3>
            <div className="flex flex-wrap gap-3 mb-6">
              <Link href="/services/ac-repair" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition">AC Repair</Link>
              <Link href="/services/heating-repair" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition">Heating Repair</Link>
              <Link href="/services/hvac-maintenance" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition">HVAC Maintenance</Link>
              <Link href="/services/indoor-air-quality" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition">Indoor Air Quality</Link>
              <Link href="/services/dryer-vent-cleaning" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition">Dryer Vent Cleaning</Link>
            </div>
          </div>
        </section>

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
                Ready to Upgrade to Smart Control?
              </h2>
              <p className="text-lg text-blue-200 max-w-xl mx-auto mb-8">
                Start saving energy and enjoying unprecedented comfort control. Contact AMW Cooling & Heating for professional smart thermostat installation in Conroe, TX.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+19363311339" onClick={() => trackPhoneClick('service_smart-thermostats_page')}
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
                  Schedule Installation
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

export default SmartThermostats;
