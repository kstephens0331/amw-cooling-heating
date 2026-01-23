import React from 'react';
import SEO from '../../components/SEO';
import { ServiceSchema, BreadcrumbSchema } from '../../components/StructuredData';
import { Link } from 'react-router-dom';
import { FaPhone, FaCalendarCheck, FaShieldAlt, FaCheckCircle, FaCog } from 'react-icons/fa';
import ManufacturerCarousel from '../../components/ManufacturerCarousel';
import MapSection from '../../components/MapSection';
import Footer from '../../components/Footer';

const HVACMaintenance = () => {
  return (
    <>
      <SEO
        title="HVAC Maintenance Conroe TX | AC & Heating Tune-Ups | AMW"
        description="Professional HVAC maintenance in Conroe, TX. Seasonal tune-ups for AC and heating systems. Call (936) 331-1339 for preventive maintenance plans."
        canonical="https://amwairconditioning.com/services/hvac-maintenance"
        keywords="HVAC maintenance Conroe, AC tune-up, furnace maintenance, preventive HVAC service Conroe TX"
      />

      <ServiceSchema
        service={{
          name: "HVAC Maintenance",
          description: "Professional HVAC maintenance and tune-up services in Conroe, TX."
        }}
        city="Conroe"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "HVAC Maintenance", path: "/services/hvac-maintenance" }
        ]}
      />

      <main className="bg-white text-gray-800 font-sans">
        {/* Patriotic Stripe */}
        <div className="h-1.5 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>

        {/* Hero Section */}
        <section className="bg-blue-900 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            {/* Service Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <FaCog className="text-blue-300 w-4 h-4" />
              <span className="text-white text-sm font-medium">Preventive Maintenance</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              HVAC Maintenance Services
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Keep your system running efficiently with professional preventive maintenance. Extend equipment life and avoid costly breakdowns.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
                View Maintenance Plans
              </Link>
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
              Professional HVAC Maintenance in Conroe
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              Regular HVAC maintenance is the key to system longevity, energy efficiency, and
              avoiding costly breakdowns. AMW Cooling & Heating provides comprehensive maintenance
              services for both heating and cooling systems throughout Conroe, The Woodlands,
              and Montgomery County.
            </p>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-3">
              Benefits of Regular HVAC Maintenance
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li><strong>Lower energy bills</strong> - Properly maintained systems use 10-20% less energy</li>
              <li><strong>Extended equipment life</strong> - Add years to your HVAC system's lifespan</li>
              <li><strong>Fewer breakdowns</strong> - Catch problems before they become emergencies</li>
              <li><strong>Improved comfort</strong> - Consistent temperatures throughout your home</li>
              <li><strong>Better air quality</strong> - Clean filters and components mean cleaner air</li>
              <li><strong>Warranty protection</strong> - Many warranties require regular maintenance</li>
              <li><strong>Safety assurance</strong> - Prevent carbon monoxide and other hazards</li>
            </ul>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-red-500 pl-3">
              What's Included in Our Maintenance Service
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Cooling System Maintenance:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Clean or replace air filters</li>
                  <li>Clean condenser and evaporator coils</li>
                  <li>Check refrigerant levels</li>
                  <li>Inspect electrical connections</li>
                  <li>Test thermostat calibration</li>
                  <li>Lubricate moving parts</li>
                  <li>Clean condensate drain</li>
                  <li>Measure airflow</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Heating System Maintenance:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Inspect heat exchanger</li>
                  <li>Clean burners and ignition system</li>
                  <li>Check gas pressure and connections</li>
                  <li>Test safety controls</li>
                  <li>Inspect flue and ventilation</li>
                  <li>Clean blower assembly</li>
                  <li>Check belt tension and wear</li>
                  <li>Test carbon monoxide levels</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-3">
              Recommended Maintenance Schedule
            </h3>
            <p className="text-gray-700 mb-4">
              For optimal performance and efficiency, we recommend:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li><strong>Spring:</strong> AC tune-up before summer heat arrives</li>
              <li><strong>Fall:</strong> Heating system tune-up before winter</li>
              <li><strong>Monthly:</strong> Check and replace air filters</li>
              <li><strong>Annually:</strong> Complete system inspection and maintenance</li>
            </ul>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-red-500 pl-3">
              Maintenance Plans Available
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Save money and ensure your system is always ready with our maintenance plans.
              Members receive priority scheduling, discounted repairs, and peace of mind knowing
              their HVAC system is professionally maintained year-round.
            </p>

            <div className="flex flex-wrap items-center gap-4 py-4 border-y border-gray-200 text-sm text-gray-600">
              <span className="flex items-center gap-2"><FaShieldAlt className="text-blue-600 w-4 h-4" /> Veteran-Owned</span>
              <span className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-4 h-4" /> Licensed & Insured</span>
              <span className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-4 h-4" /> Priority Scheduling</span>
              <span className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-4 h-4" /> Financing Available</span>
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
                Schedule Your Maintenance Today
              </h2>
              <p className="text-lg text-blue-200 max-w-xl mx-auto mb-8">
                Don't wait for a breakdown. Protect your investment with professional HVAC maintenance from AMW Cooling & Heating.
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
                  View Plans & Pricing
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

export default HVACMaintenance;
