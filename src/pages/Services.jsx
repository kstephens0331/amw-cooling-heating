import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaPhone, FaCalendarCheck, FaShieldAlt } from 'react-icons/fa';
import ManufacturerCarousel from '../components/ManufacturerCarousel';
import MapSection from '../components/MapSection';
import Footer from '../components/Footer';
import heating from '../assets/images/IMG_1163.webp';
import cooling from '../assets/images/DSC_2035.webp';
import ventilation from '../assets/images/IMG_6338.webp';
import repairs_maintenance from '../assets/images/DSC_2058.webp';
import air from '../assets/images/air-quality.webp';
import dryerVent from '../assets/images/duct_cleaning.webp';
import emergency from '../assets/images/emergency.webp'
import thermostatImg from '../assets/images/thermostat.webp'
import ReactCompareImage from 'react-compare-image';
import newInstallBefore from '../assets/images/6392-old_unit.webp';
import newInstallAfter from '../assets/images/6387-new_install.webp';

export default function Services() {
  return (
    <main className="bg-gray-50 text-gray-800 font-sans">
      <Helmet>
        <title>HVAC Services | AMW Cooling & Heating LLC</title>
        <meta
          name="description"
          content="Explore our expert HVAC services, including installation, repair, and maintenance for residential and commercial clients across Conroe, The Woodlands, and beyond."
        />
        <meta
          name="keywords"
          content="HVAC services, AC installation, heater repair, air conditioning Conroe TX, The Woodlands HVAC, AMW Cooling"
        />
      </Helmet>

      {/* Patriotic Stripe */}
      <div className="h-1.5 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>

      {/* Hero Section */}
      <section className="bg-blue-900 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
            From heating to cooling and everything in between, we provide comprehensive solutions to keep you comfortable year-round.
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

      {/* Services List */}
      <section className="container mx-auto px-4 space-y-16 py-12">
        {/* 1 Heating Services */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2">
            <div className='w-[260px] h-[260px] transform rotate-45 overflow-hidden rounded-xl shadow-lg border-4 border-red-500 bg-white mx-auto'>
              <img src={heating} alt="Heating services" className='w-full h-full object-cover -rotate-45' loading="lazy"/>
            </div>
          </div>
          <div className="w-full lg:w-1/2 text-base md:text-lg text-gray-700">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3 border-l-4 border-red-500 pl-4">Heating Services</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><strong className="text-blue-900">New Heater Installations</strong> – Efficient furnaces, heat pumps, and hybrid systems.</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><strong className="text-blue-900">Heater Repairs</strong> – Quick, reliable fixes for all heating units.</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><strong className="text-blue-900">Seasonal Maintenance</strong> – Keep your system running at peak efficiency.</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><strong className="text-blue-900">System Upgrades</strong> – Modern performance and energy savings.</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><strong className="text-blue-900">Thermostat Services</strong> – Precision controls for comfort and economy.</span></li>
            </ul>
          </div>
        </div>

        {/* 2 Cooling Services */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
          <div className="w-full lg:w-1/2">
            <div className='w-[260px] h-[260px] transform rotate-45 overflow-hidden rounded-xl shadow-lg border-4 border-blue-900 bg-white mx-auto'>
              <img src={cooling} alt="Cooling services" className='w-full h-full object-cover -rotate-45' loading="lazy"/>
            </div>
          </div>
          <div className="w-full lg:w-1/2 text-base md:text-lg text-gray-700">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-4">Air Conditioning Services</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">—</span><span><strong className="text-blue-900">AC Installations</strong> – Energy-efficient air conditioning systems.</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">—</span><span><strong className="text-blue-900">AC Repairs</strong> – Fast service to restore cool air quickly.</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">—</span><span><strong className="text-blue-900">Seasonal Tune-Ups</strong> – Prevent breakdowns and maintain performance.</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">—</span><span><strong className="text-blue-900">Humidity Management</strong> – Keep your indoor air comfortable.</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">—</span><span><strong className="text-blue-900">Smart Thermostats</strong> – Control cooling from anywhere.</span></li>
            </ul>
          </div>
        </div>

        {/* 3 Ventilation Services */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2">
            <div className='w-[260px] h-[260px] transform rotate-45 overflow-hidden rounded-xl shadow-lg border-4 border-red-500 bg-white mx-auto'>
              <img src={ventilation} alt="Ventilation services" className='w-full h-full object-cover -rotate-45' loading="lazy"/>
            </div>
          </div>
          <div className="w-full lg:w-1/2 text-base md:text-lg text-gray-700">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3 border-l-4 border-red-500 pl-4">Ventilation Services</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><strong className="text-blue-900">Ductwork Installation</strong> – Balanced airflow in every room.</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><strong className="text-blue-900">Ventilation Repairs</strong> – Remove blockages and fix leaks.</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><strong className="text-blue-900">Airflow Balancing</strong> – Even temperatures throughout your space.</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><strong className="text-blue-900">Whole-House Ventilation</strong> – Remove stale air, bring in fresh air.</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><strong className="text-blue-900">Exhaust Systems</strong> – Proper moisture control and ventilation.</span></li>
            </ul>
          </div>
        </div>

        {/* 4 New Installations */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
          <div className="w-full lg:w-1/2">
            <div className='w-[260px] h-[260px] transform rotate-45 overflow-hidden rounded-xl shadow-lg border-4 border-blue-900 bg-white mx-auto'>
              <div className="w-full h-full -rotate-45 scale-[0.85]">
                <ReactCompareImage
                  leftImage={newInstallBefore}
                  rightImage={newInstallAfter}
                  sliderLineColor="black"
                  sliderPositionPercentage={0.5}
                  aspectRatio="1"
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 text-base md:text-lg text-gray-700">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-4">New Installations</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">—</span><span><strong className="text-blue-900">New Construction HVAC</strong> – Tailored systems for your building.</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">—</span><span><strong className="text-blue-900">System Replacements</strong> – Upgrade outdated equipment.</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">—</span><span><strong className="text-blue-900">Load Calculations</strong> – Optimal sizing for peak efficiency.</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">—</span><span><strong className="text-blue-900">Smart Integration</strong> – Modern, connected controls.</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">—</span><span><strong className="text-blue-900">Post-Install Testing</strong> – Ensure perfect operation.</span></li>
            </ul>
          </div>
        </div>

        {/* 5 Repairs and Maintenance */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2">
            <div className='w-[260px] h-[260px] transform rotate-45 overflow-hidden rounded-xl shadow-lg border-4 border-red-500 bg-white mx-auto'>
              <img src={repairs_maintenance} alt="Maintenance services" className='w-full h-full object-cover -rotate-45' loading="lazy"/>
            </div>
          </div>
          <div className="w-full lg:w-1/2 text-base md:text-lg text-gray-700">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3 border-l-4 border-red-500 pl-4">Repairs & Maintenance</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><strong className="text-blue-900">Emergency Repairs</strong> – Quick fixes for urgent issues.</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><strong className="text-blue-900">Preventative Maintenance</strong> – Keep your system running smoothly.</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><strong className="text-blue-900">Seasonal Tune-Ups</strong> – Maximize lifespan and performance.</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><strong className="text-blue-900">Inspections & Diagnostics</strong> – Identify and fix issues early.</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><strong className="text-blue-900">Efficiency Optimization</strong> – Save on energy bills year-round.</span></li>
            </ul>
          </div>
        </div>

        {/* 6 Indoor Air Quality */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
          <Link to="/services/indoor-air-quality" className="w-full lg:w-1/2 hover:opacity-80 transition">
            <div className='w-[260px] h-[260px] transform rotate-45 overflow-hidden rounded-xl shadow-lg border-4 border-blue-900 mx-auto cursor-pointer'>
              <img src={air} alt="Indoor air quality services" className='w-full h-full object-cover -rotate-45' loading="lazy"/>
            </div>
          </Link>
          <div className="w-full lg:w-1/2 text-base md:text-lg text-gray-700">
            <Link to="/services/indoor-air-quality" className="hover:text-blue-700 transition">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-4 cursor-pointer">Indoor Air Quality Solutions</h2>
            </Link>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">—</span><span><strong className="text-blue-900">Advanced Air Filtration</strong> – HEPA filters capture 99.97% of particles.</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">—</span><span><strong className="text-blue-900">Whole-Home Dehumidifiers</strong> – Control humidity in Conroe's climate.</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">—</span><span><strong className="text-blue-900">UV Air Purification</strong> – Eliminate bacteria, viruses, and mold.</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">—</span><span><strong className="text-blue-900">Ventilation Systems</strong> – Fresh air exchange with energy recovery.</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">—</span><span><strong className="text-blue-900">Allergen Reduction</strong> – Solutions for pollen, dust, and pet dander.</span></li>
            </ul>
            <Link to="/services/indoor-air-quality" className="inline-block mt-3 text-red-500 hover:text-red-600 font-semibold">
              Learn More →
            </Link>
          </div>
        </div>

        {/* 7 Smart Thermostats */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <Link to="/services/smart-thermostats" className="w-full lg:w-1/2 hover:opacity-80 transition">
            <div className='w-[260px] h-[260px] transform rotate-45 overflow-hidden rounded-xl shadow-lg border-4 border-red-500 mx-auto cursor-pointer'>
              <img src={thermostatImg} alt="Smart thermostat installation" className='w-full h-full object-cover -rotate-45' loading="lazy"/>
            </div>
          </Link>
          <div className="w-full lg:w-1/2 text-base md:text-lg text-gray-700">
            <Link to="/services/smart-thermostats" className="hover:text-blue-700 transition">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3 border-l-4 border-red-500 pl-4 cursor-pointer">Smart Thermostat Installation</h2>
            </Link>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><strong className="text-blue-900">Expert Installation</strong> – Nest, Ecobee, Honeywell, and more.</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><strong className="text-blue-900">Complete Setup</strong> – Wi-Fi configuration and app account creation.</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><strong className="text-blue-900">Energy Savings</strong> – Save 10-23% on heating and cooling costs.</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><strong className="text-blue-900">Remote Control</strong> – Adjust temperature from anywhere.</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><strong className="text-blue-900">Voice Integration</strong> – Works with Alexa, Google, and Siri.</span></li>
            </ul>
            <Link to="/services/smart-thermostats" className="inline-block mt-3 text-red-500 hover:text-red-600 font-semibold">
              Learn More →
            </Link>
          </div>
        </div>

        {/* 8 Dryer Vent Cleaning */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
          <Link to="/services/dryer-vent-cleaning" className="w-full lg:w-1/2 hover:opacity-80 transition">
            <div className='w-[260px] h-[260px] transform rotate-45 overflow-hidden rounded-xl shadow-lg border-4 border-blue-900 mx-auto cursor-pointer'>
              <img src={dryerVent} alt="Dryer vent cleaning services" className='w-full h-full object-cover -rotate-45' loading="lazy"/>
            </div>
          </Link>
          <div className="w-full lg:w-1/2 text-base md:text-lg text-gray-700">
            <Link to="/services/dryer-vent-cleaning" className="hover:text-blue-700 transition">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-4 cursor-pointer">Professional Dryer Vent Cleaning</h2>
            </Link>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">—</span><span><strong className="text-blue-900">Fire Prevention</strong> – Prevent 15,000+ annual dryer fires.</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">—</span><span><strong className="text-blue-900">Energy Savings</strong> – Reduce runtime by 30-50%.</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">—</span><span><strong className="text-blue-900">Improved Efficiency</strong> – Faster drying, lower utility bills.</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">—</span><span><strong className="text-blue-900">Complete Cleaning</strong> – Full vent system, not just lint trap.</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">—</span><span><strong className="text-blue-900">Safety Inspection</strong> – Check for damage and proper installation.</span></li>
            </ul>
            <Link to="/services/dryer-vent-cleaning" className="inline-block mt-3 text-red-500 hover:text-red-600 font-semibold">
              Learn More →
            </Link>
          </div>
        </div>

        {/* 9 Emergency Services */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2">
            <div className='w-[260px] h-[260px] transform rotate-45 overflow-hidden rounded-xl shadow-lg border-4 border-red-500 mx-auto'>
              <img src={emergency} alt="Emergency services" className='w-full h-full object-cover -rotate-45' loading="lazy"/>
            </div>
          </div>
          <div className="w-full lg:w-1/2 text-base md:text-lg text-gray-700">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3 border-l-4 border-red-500 pl-4">Emergency Services</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><strong className="text-blue-900">After Hours Service</strong> – Emergency services provided between 5pm–9pm and weekends.*</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><strong className="text-blue-900">Immediate Response</strong> – Fast action to restore comfort.</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><strong className="text-blue-900">Emergency Repairs</strong> – Rapid, effective fixes when it matters.</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><strong className="text-blue-900">Direct Support</strong> – Call us anytime for urgent needs.</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">—</span><span><strong className="text-blue-900">Peace of Mind</strong> – Your comfort and safety are our top priorities.</span></li>
            </ul>
            <p className="text-xs text-gray-500 mt-2 italic">*Additional charges may apply for after hours services.</p>
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
              Ready to Get Started?
            </h2>
            <p className="text-lg text-blue-200 max-w-xl mx-auto mb-8">
              Contact AMW Cooling & Heating today for expert HVAC services in Conroe, TX and surrounding areas.
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
