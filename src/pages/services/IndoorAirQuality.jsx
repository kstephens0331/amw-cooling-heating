import React from 'react';
import SEO from '../../components/SEO';
import { ServiceSchema, BreadcrumbSchema } from '../../components/StructuredData';
import { Link } from 'react-router-dom';
import { FaPhone, FaCalendarCheck, FaShieldAlt, FaCheckCircle, FaWind } from 'react-icons/fa';
import ManufacturerCarousel from '../../components/ManufacturerCarousel';
import MapSection from '../../components/MapSection';
import Footer from '../../components/Footer';

const IndoorAirQuality = () => {
  return (
    <>
      <SEO
        title="Indoor Air Quality Conroe TX | Air Purification & Filtration | AMW"
        description="Improve indoor air quality in Conroe, TX with HEPA filtration, UV purification, dehumidifiers. Remove allergens, mold, bacteria. Call (936) 331-1339!"
        canonical="https://amwairconditioning.com/services/indoor-air-quality"
        keywords="indoor air quality Conroe, air purification Conroe TX, HEPA filter installation, UV air purifier, whole home dehumidifier, air quality testing Conroe"
      />

      <ServiceSchema
        service={{
          name: "Indoor Air Quality Solutions",
          description: "Comprehensive indoor air quality solutions including filtration, purification, and humidity control in Conroe, TX."
        }}
        city="Conroe"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Indoor Air Quality", path: "/services/indoor-air-quality" }
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
              <FaWind className="text-blue-300 w-4 h-4" />
              <span className="text-white text-sm font-medium">Air Quality Experts</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Indoor Air Quality Solutions
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Breathe cleaner, healthier air with professional air quality solutions. HEPA filtration, UV purification, and humidity control.
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
                Get a Quote
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
              Professional Indoor Air Quality Solutions
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The EPA states that indoor air can be 2-5 times more polluted than outdoor air. In Conroe's humid
              climate with high pollen counts, seasonal allergens, and occasional air quality issues from nearby
              Houston, maintaining healthy indoor air is critical for your family's wellbeing. AMW Cooling & Heating
              provides comprehensive solutions to ensure you breathe clean, comfortable air year-round.
            </p>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-3">
              Why Indoor Air Quality Matters in Conroe
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Montgomery County faces unique air quality challenges: oak pollen in spring, ragweed in fall,
              high humidity that promotes mold growth, and proximity to Houston's urban air quality issues.
              Poor indoor air quality can trigger allergies, worsen asthma, cause respiratory irritation,
              and lead to fatigue and headaches. Children, elderly family members, and those with existing
              respiratory conditions are especially vulnerable.
            </p>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-3">
              Signs You Need Indoor Air Quality Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li>Family members experiencing increased allergy or asthma symptoms</li>
              <li>Frequent respiratory infections, colds, or sinus problems</li>
              <li>Musty or stale odors in your home</li>
              <li>Excessive dust accumulation shortly after cleaning</li>
              <li>Condensation on windows or visible mold growth</li>
              <li>Home feels humid or stuffy despite running AC</li>
              <li>Pet dander affecting family members</li>
              <li>New construction or recent renovation</li>
            </ul>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-3">
              Our Indoor Air Quality Solutions
            </h3>

            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-blue-800 mb-2">Advanced Air Filtration Systems</h4>
              <p className="text-gray-700 mb-3">
                Standard HVAC filters only capture large particles. Our advanced filtration systems remove microscopic
                contaminants for dramatically cleaner air:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>HEPA Filtration</strong> - Captures 99.97% of particles as small as 0.3 microns including pollen, dust mites, pet dander, and mold spores</li>
                <li><strong>High-MERV Filters</strong> - MERV 11-16 rated filters for superior particle capture without restricting airflow</li>
                <li><strong>Media Air Cleaners</strong> - Whole-home filtration with large surface area for maximum efficiency</li>
                <li><strong>Electronic Air Cleaners</strong> - Use electrical charge to capture particles too small for standard filters</li>
                <li><strong>Carbon Filters</strong> - Remove odors, VOCs (volatile organic compounds), and chemical fumes</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-blue-800 mb-2">UV Air Purification Systems</h4>
              <p className="text-gray-700 mb-3">
                Germicidal UV lights installed in your HVAC system destroy biological contaminants at the DNA level:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Bacteria & Virus Elimination</strong> - UV-C light neutralizes airborne pathogens before they circulate</li>
                <li><strong>Mold Prevention</strong> - Prevents mold growth on evaporator coils in Conroe's humid climate</li>
                <li><strong>Continuous Protection</strong> - Purification whenever your HVAC system operates</li>
                <li><strong>Chemical-Free</strong> - No ozone or chemical byproducts, safe for all family members</li>
                <li><strong>Reduced Maintenance</strong> - Keeps coils cleaner, improving system efficiency</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-blue-800 mb-2">Whole-Home Dehumidification</h4>
              <p className="text-gray-700 mb-3">
                Conroe's humidity often exceeds comfortable levels even with AC running. Excess moisture promotes
                mold growth, dust mites, and discomfort:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Precise Humidity Control</strong> - Maintain ideal 30-50% humidity levels automatically</li>
                <li><strong>Mold & Mildew Prevention</strong> - Eliminate conditions that allow biological growth</li>
                <li><strong>Improved Comfort</strong> - Lower humidity makes your home feel cooler at higher temperatures</li>
                <li><strong>Energy Savings</strong> - More comfortable at 76 degrees F with low humidity vs. 72 degrees F with high humidity</li>
                <li><strong>Protects Your Home</strong> - Prevents wood damage, paint peeling, and musty odors</li>
                <li><strong>Allergen Reduction</strong> - Dust mites can't survive in properly controlled humidity</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h4 className="font-semibold text-blue-800 mb-2">Ventilation & Fresh Air Systems</h4>
              <p className="text-gray-700 mb-3">
                Modern homes are sealed tight for energy efficiency, but this traps contaminants inside. Fresh air
                ventilation solves this problem:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Energy Recovery Ventilators (ERV)</strong> - Bring in fresh outdoor air while recovering heating/cooling energy</li>
                <li><strong>Heat Recovery Ventilators (HRV)</strong> - Exchange stale indoor air for fresh outdoor air efficiently</li>
                <li><strong>Balanced Ventilation</strong> - Controlled air exchange prevents negative pressure issues</li>
                <li><strong>VOC Removal</strong> - Eliminate off-gassing from furniture, carpets, and building materials</li>
                <li><strong>Continuous Fresh Air</strong> - Maintain healthy air quality without wasting energy</li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-3">
              Benefits of Improved Indoor Air Quality
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li><strong>Healthier Family</strong> - Reduce allergy and asthma symptoms, fewer respiratory infections</li>
              <li><strong>Better Sleep</strong> - Cleaner air and proper humidity improve sleep quality</li>
              <li><strong>Odor Elimination</strong> - Remove pet, cooking, and musty odors</li>
              <li><strong>Mold Prevention</strong> - Critical in Conroe's humid climate</li>
              <li><strong>Cleaner Home</strong> - Less dust means less cleaning</li>
              <li><strong>Protected HVAC System</strong> - Cleaner air means less strain on equipment</li>
              <li><strong>Improved Comfort</strong> - Humidity control makes your home feel more comfortable</li>
              <li><strong>Higher Home Value</strong> - Air quality systems are attractive to buyers</li>
            </ul>

            <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-3">
              Custom Solutions for Your Home
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Every home has unique air quality needs. During your consultation, our technicians assess your
              specific concerns—whether it's allergies, humidity, odors, or general air quality—and recommend
              the most effective combination of solutions. We work with all major HVAC systems and can retrofit
              air quality equipment into existing setups or integrate it into new installations.
            </p>

            <div className="flex flex-wrap items-center gap-4 py-4 border-y border-gray-200 text-sm text-gray-600">
              <span className="flex items-center gap-2"><FaShieldAlt className="text-blue-600 w-4 h-4" /> Veteran-Owned</span>
              <span className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-4 h-4" /> Licensed & Insured</span>
              <span className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-4 h-4" /> Free Estimates</span>
              <span className="flex items-center gap-2"><FaCheckCircle className="text-green-500 w-4 h-4" /> Custom Solutions</span>
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
                Ready to Breathe Cleaner Air?
              </h2>
              <p className="text-lg text-blue-200 max-w-xl mx-auto mb-8">
                Don't let poor air quality affect your family's health and comfort. Contact AMW Cooling & Heating for professional indoor air quality solutions in Conroe, TX.
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
                  Schedule Consultation
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

export default IndoorAirQuality;
