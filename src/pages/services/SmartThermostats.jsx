import React from 'react';
import SEO from '../../components/SEO';
import { ServiceSchema, BreadcrumbSchema } from '../../components/StructuredData';
import { Link } from 'react-router-dom';
import { FaPhone, FaCalendarCheck, FaShieldAlt, FaCheckCircle, FaMobileAlt } from 'react-icons/fa';
import ManufacturerCarousel from '../../components/ManufacturerCarousel';
import MapSection from '../../components/MapSection';
import Footer from '../../components/Footer';
import thermostatImg from '../../assets/images/thermostat.webp';

const SmartThermostats = () => {
  return (
    <>
      <SEO
        title="Smart Thermostat Installation Conroe TX | Nest, Ecobee, Honeywell | AMW"
        description="Professional smart thermostat installation in Conroe, TX. Save 10-23% on energy costs with Nest, Ecobee, Honeywell. Wi-Fi setup included. Call (936) 331-1339!"
        canonical="https://amwairconditioning.com/services/smart-thermostats"
        keywords="smart thermostat installation Conroe, Nest thermostat Conroe TX, Ecobee installation, Honeywell WiFi thermostat, programmable thermostat Conroe"
      />

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
                    href="tel:+19363311339"
                    className="inline-flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition font-semibold"
                  >
                    <FaPhone className="w-4 h-4" />
                    (936) 331-1339
                  </a>
                  <Link
                    to="/contact"
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

        {/* Main Content */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
          <article className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-600">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 border-l-4 border-red-500 pl-4">
              Professional Smart Thermostat Installation & Setup
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Upgrade to a smart thermostat and take complete control of your Conroe home's comfort and
              energy use. These intelligent devices learn your preferences, optimize efficiency automatically,
              and provide detailed energy reports—all accessible from your smartphone, tablet, or computer.
              For Texas homeowners managing cooling costs during long, hot summers, smart thermostats deliver
              substantial savings and unprecedented convenience.
            </p>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-3">
              Why Upgrade to a Smart Thermostat?
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Traditional thermostats waste energy by maintaining the same temperature whether you're home or
              away. Smart thermostats adapt to your schedule, learning when to cool or heat your home and when
              to conserve energy. Studies show Texas homeowners save an average of 10-23% on heating and cooling
              costs—that's $130-$230 annually for the typical Conroe household.
            </p>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-3">
              Smart Thermostats We Install
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Google Nest Thermostat</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>Auto-Schedule learns your preferences</li>
                  <li>Home/Away Assist adjusts automatically</li>
                  <li>Energy History shows usage patterns</li>
                  <li>Works with Google Assistant & Alexa</li>
                  <li>Sleek, modern design with multiple colors</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Ecobee SmartThermostat</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>Room sensors for multi-zone comfort</li>
                  <li>Built-in Alexa voice control</li>
                  <li>Air quality monitoring</li>
                  <li>Smart Home integration</li>
                  <li>Energy savings reports</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Honeywell Home T9/T10</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>Smart room sensors included</li>
                  <li>Geofencing technology</li>
                  <li>7-day flexible scheduling</li>
                  <li>Works with most HVAC systems</li>
                  <li>Intuitive touchscreen display</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Carrier Cor & Bryant Evolution</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>Optimized for Carrier/Bryant systems</li>
                  <li>Advanced humidity control</li>
                  <li>Weather-based adjustments</li>
                  <li>Full-color touchscreen</li>
                  <li>Ideal Performance settings</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-3">
              Complete Installation Service Included
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li><strong>Compatibility Check</strong> - Verify your HVAC system works with your chosen thermostat</li>
              <li><strong>Wi-Fi Configuration</strong> - Connect thermostat to your home network for remote access</li>
              <li><strong>Schedule Programming</strong> - Input your preferred temperatures and schedule</li>
              <li><strong>Sensor Placement</strong> - Optimal positioning of room sensors (if applicable)</li>
              <li><strong>Tutorial & Training</strong> - Complete walkthrough of all features and functions</li>
              <li><strong>System Testing</strong> - Verify heating, cooling, and fan controls work properly</li>
            </ul>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-3">
              Key Features & Benefits
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li><strong>Remote Control</strong> - Adjust temperature from anywhere using your smartphone</li>
              <li><strong>Learning Capabilities</strong> - Automatically adapts to your routine and preferences</li>
              <li><strong>Weather Integration</strong> - Adjusts based on forecast to optimize efficiency</li>
              <li><strong>Voice Control</strong> - "Alexa, set temperature to 72 degrees"</li>
              <li><strong>Multi-Zone Control</strong> - Different temperatures for different rooms (with compatible systems)</li>
              <li><strong>Vacation Mode</strong> - Energy-saving settings when you're away for extended periods</li>
              <li><strong>Humidity Control</strong> - Critical for Conroe's humid climate</li>
              <li><strong>Maintenance Reminders</strong> - Alerts when it's time to change filters</li>
            </ul>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-3">
              Perfect for Conroe's Climate
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Conroe summers are long and hot, with AC running constantly from May through September. Smart
              thermostats excel in this climate by pre-cooling your home before peak rates, adjusting for
              humidity, and ensuring you never cool an empty house. Many models also integrate with utility
              company demand response programs, earning you credits for reducing usage during peak times.
            </p>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-3">
              Is Your System Compatible?
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Most smart thermostats work with standard HVAC systems including gas furnaces, electric heat,
              central air conditioning, heat pumps, and multi-stage systems. However, some older systems or
              specialized setups may require a C-wire (common wire) installation or power adapter. Our
              technicians assess compatibility during your consultation and handle any necessary wiring
              upgrades.
            </p>

            <div className="flex flex-wrap items-center gap-4 py-4 border-y border-gray-200 text-sm text-gray-600">
              <span className="flex items-center gap-2"><FaShieldAlt className="text-blue-600 w-4 h-4" /> Veteran-Owned</span>
              <span className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-4 h-4" /> Licensed & Insured</span>
              <span className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-4 h-4" /> All Major Brands</span>
              <span className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-4 h-4" /> Complete Setup Included</span>
            </div>

          </article>
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
                  href="tel:+19363311339"
                  className="inline-flex items-center justify-center gap-2 bg-red-500 text-white px-8 py-4 rounded-lg hover:bg-red-600 transition font-bold text-lg"
                >
                  <FaPhone className="w-5 h-5" />
                  (936) 331-1339
                </a>
                <Link
                  to="/contact"
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
