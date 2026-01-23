import React from 'react';
import SEO from '../components/SEO';
import { BreadcrumbSchema } from '../components/StructuredData';
import { Link } from 'react-router-dom';
import { FaPhone, FaCalendarCheck, FaShieldAlt } from 'react-icons/fa';
import MapSection from '../components/MapSection';
import ManufacturerCarousel from '../components/ManufacturerCarousel';
import Footer from '../components/Footer';
import airQuality from '../assets/images/air-quality.webp';
import ventilation from '../assets/images/IMG_6338.webp';
import maintenance from '../assets/images/DSC_2058.webp';
import hvacSystem from '../assets/images/DSC_2035.webp';

export default function AdditionalServices() {
  return (
    <main className="bg-gray-50 text-gray-800 font-sans">
      <SEO
        title="Additional HVAC Services Conroe TX | Duct Cleaning, Thermostats & More | AMW"
        description="Complete HVAC solutions in Conroe, TX: duct cleaning & sealing, smart thermostat installation, indoor air quality, insulation, dryer vent cleaning. Call (936) 331-1339 today!"
        canonical="https://amwairconditioning.com/additional-services"
        keywords="duct cleaning Conroe, smart thermostat installation, indoor air quality Conroe TX, dryer vent cleaning, HVAC insulation, air purification Conroe, ductwork sealing"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Additional Services", path: "/additional-services" }
        ]}
      />

      {/* Patriotic Stripe */}
      <div className="h-1.5 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>

      {/* Hero Section */}
      <section className="bg-blue-900 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Additional HVAC Services
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
            Beyond heating and cooling, AMW Cooling & Heating offers comprehensive solutions to enhance comfort,
            improve air quality, and maximize energy efficiency throughout your Conroe-area home or business.
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
              Schedule Service
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom Stripe */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>

      <section className="container mx-auto px-4 space-y-16 py-12">
        {/* 1 Duct Cleaning & Sealing - IMAGE RIGHT */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2">
            <div className='w-[260px] h-[260px] transform rotate-45 overflow-hidden rounded-xl shadow-lg border-4 border-red-500 bg-white mx-auto'>
              <img src={ventilation} alt="Professional duct cleaning and sealing services in Conroe TX" className='w-full h-full object-cover -rotate-45' loading="lazy"/>
            </div>
          </div>
          <div className="w-full lg:w-1/2 text-base md:text-lg text-gray-700">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3 border-l-4 border-red-500 pl-4">
              Professional Duct Cleaning & Sealing
            </h2>
            <p className="mb-4 leading-relaxed">
              Your ductwork is the circulatory system of your HVAC, distributing conditioned air throughout your home.
              Over time, dust, allergens, pet dander, and debris accumulate in your ducts, reducing air quality and
              system efficiency. In Conroe's humid climate, dirty ducts can also harbor mold and mildew.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><strong className="text-blue-900">Complete Duct Cleaning</strong> – Remove years of dust, allergens, and contaminants</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><strong className="text-blue-900">Professional Duct Sealing</strong> – Stop air leaks that waste up to 30% energy</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><strong className="text-blue-900">Airflow Optimization</strong> – Improve system performance and even temperatures</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><strong className="text-blue-900">Mold Prevention</strong> – Essential in Conroe's humid climate</span></li>
            </ul>
          </div>
        </div>

        {/* 2 Smart Thermostat Installation - IMAGE LEFT */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
          <div className="w-full lg:w-1/2">
            <div className='w-[260px] h-[260px] transform rotate-45 overflow-hidden rounded-xl shadow-lg border-4 border-blue-900 bg-white mx-auto'>
              <img src={hvacSystem} alt="Smart thermostat installation and upgrades in Conroe Texas" className='w-full h-full object-cover -rotate-45' loading="lazy"/>
            </div>
          </div>
          <div className="w-full lg:w-1/2 text-base md:text-lg text-gray-700">
            <Link to="/services/smart-thermostats" className="hover:text-blue-700 transition">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-4 cursor-pointer">
                Smart Thermostat Installation
              </h2>
            </Link>
            <p className="mb-4 leading-relaxed">
              Upgrade to a smart thermostat and take control of your home's comfort and energy use from anywhere.
              These intelligent devices learn your preferences, optimize efficiency, and provide detailed energy
              reports—perfect for managing cooling costs during Conroe's hot summers.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">—</span><span><strong className="text-blue-900">Expert Installation</strong> – Nest, Ecobee, Honeywell, and more</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">—</span><span><strong className="text-blue-900">Wi-Fi Configuration</strong> – Full setup for remote access</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">—</span><span><strong className="text-blue-900">Learning Algorithms</strong> – Auto-adapts to your schedule</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">—</span><span><strong className="text-blue-900">Voice Control</strong> – Works with Alexa, Google, Siri</span></li>
            </ul>
            <Link to="/services/smart-thermostats" className="inline-block mt-3 text-red-500 hover:text-red-600 font-semibold">
              Learn More →
            </Link>
          </div>
        </div>

        {/* 3 Indoor Air Quality Solutions - IMAGE RIGHT */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2">
            <div className='w-[260px] h-[260px] transform rotate-45 overflow-hidden rounded-xl shadow-lg border-4 border-red-500 bg-white mx-auto'>
              <img src={airQuality} alt="Indoor air quality solutions and air purification in Conroe" className='w-full h-full object-cover -rotate-45' loading="lazy"/>
            </div>
          </div>
          <div className="w-full lg:w-1/2 text-base md:text-lg text-gray-700">
            <Link to="/services/indoor-air-quality" className="hover:text-blue-700 transition">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3 border-l-4 border-red-500 pl-4 cursor-pointer">
                Indoor Air Quality Solutions
              </h2>
            </Link>
            <p className="mb-4 leading-relaxed">
              Conroe's high humidity and seasonal allergens make indoor air quality a critical concern for families.
              The EPA states that indoor air can be 2-5 times more polluted than outdoor air. AMW offers comprehensive
              solutions to ensure your family breathes clean, healthy air year-round.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><strong className="text-blue-900">Whole-Home Dehumidifiers</strong> – Control excess moisture</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><strong className="text-blue-900">HEPA Filtration</strong> – Captures 99.97% of particles</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><strong className="text-blue-900">UV Air Purification</strong> – Eliminates bacteria and viruses</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><strong className="text-blue-900">Allergen Reduction</strong> – Solutions for pollen and dust</span></li>
            </ul>
            <Link to="/services/indoor-air-quality" className="inline-block mt-3 text-red-500 hover:text-red-600 font-semibold">
              Learn More →
            </Link>
          </div>
        </div>

        {/* 4 Insulation Improvements - IMAGE LEFT */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
          <div className="w-full lg:w-1/2">
            <div className='w-[260px] h-[260px] transform rotate-45 overflow-hidden rounded-xl shadow-lg border-4 border-blue-900 bg-white mx-auto'>
              <img src={maintenance} alt="HVAC insulation services and attic insulation in Conroe TX" className='w-full h-full object-cover -rotate-45' loading="lazy"/>
            </div>
          </div>
          <div className="w-full lg:w-1/2 text-base md:text-lg text-gray-700">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-4">
              Attic & HVAC Insulation
            </h2>
            <p className="mb-4 leading-relaxed">
              In Texas heat, proper insulation is your first line of defense against skyrocketing cooling costs.
              Poor insulation allows conditioned air to escape and hot attic air to infiltrate your living spaces,
              forcing your AC to work overtime.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">—</span><span><strong className="text-blue-900">Attic Insulation Upgrades</strong> – R-30 to R-60 for max efficiency</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">—</span><span><strong className="text-blue-900">Ductwork Insulation</strong> – Prevent energy loss in unconditioned spaces</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">—</span><span><strong className="text-blue-900">Air Sealing</strong> – Close gaps and cracks</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">—</span><span><strong className="text-blue-900">Radiant Barriers</strong> – Reduce attic temps by up to 30°F</span></li>
            </ul>
          </div>
        </div>

        {/* 5 Dryer Vent Cleaning - IMAGE RIGHT */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2">
            <div className='w-[260px] h-[260px] transform rotate-45 overflow-hidden rounded-xl shadow-lg border-4 border-red-500 bg-white mx-auto'>
              <img src={ventilation} alt="Professional dryer vent cleaning services in Conroe Texas" className='w-full h-full object-cover -rotate-45' loading="lazy"/>
            </div>
          </div>
          <div className="w-full lg:w-1/2 text-base md:text-lg text-gray-700">
            <Link to="/services/dryer-vent-cleaning" className="hover:text-blue-700 transition">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3 border-l-4 border-red-500 pl-4 cursor-pointer">
                Professional Dryer Vent Cleaning
              </h2>
            </Link>
            <p className="mb-4 leading-relaxed">
              Clogged dryer vents are a leading cause of house fires in the United States, causing over 15,000 fires
              annually. Beyond safety, restricted airflow forces your dryer to work harder, increasing energy costs.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><strong className="text-blue-900">Fire Hazard Prevention</strong> – Prevent 15,000+ annual dryer fires</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><strong className="text-blue-900">Energy Savings</strong> – Reduce dryer runtime by 30-50%</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><strong className="text-blue-900">Faster Drying</strong> – Clothes dry in one normal cycle</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><strong className="text-blue-900">Extended Appliance Life</strong> – Prevent overheating damage</span></li>
            </ul>
            <Link to="/services/dryer-vent-cleaning" className="inline-block mt-3 text-red-500 hover:text-red-600 font-semibold">
              Learn More →
            </Link>
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
              Ready to Enhance Your Home's Comfort?
            </h2>
            <p className="text-lg text-blue-200 max-w-xl mx-auto mb-8">
              Contact AMW Cooling & Heating today for comprehensive HVAC solutions in Conroe, TX and surrounding areas.
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
                Schedule Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      <MapSection />
      <ManufacturerCarousel />
      <Footer />
    </main>
  );
}
