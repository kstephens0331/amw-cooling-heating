import { Helmet } from 'react-helmet';
import ManufacturerCarousel from '../components/ManufacturerCarousel';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYelp } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import heating from '../assets/images/IMG_1163.webp';
import cooling from '../assets/images/DSC_2035.webp';
import ventilation from '../assets/images/DSC_1976.webp';
import new_install from '../assets/images/DSC_1997.webp';
import repairs_maintenance from '../assets/images/DSC_2058.webp';
import air from '../assets/images/air-quality.webp'
import emergency from '../assets/images/emergency.webp'

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

export default function Services() {
  return (
    <main className="bg-gray-50 text-gray-800 font-sans">
      <Helmet>
        <title>Our Services | AMW Cooling & Heating LLC</title>
        <meta name="description" content="Explore our comprehensive HVAC services: heating, cooling, ventilation, new installations, maintenance, and more." />
      </Helmet>

      {/* Title Section with CTA */}
      <section className="text-center bg-gradient-to-br from-blue-50 to-white py-10 md:py-12 mb-8 rounded shadow">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">Our Services</h1>
        <p className="text-sm md:text-base text-gray-700 max-w-2xl mx-auto mb-4">
          From heating to cooling and everything in between, we provide comprehensive solutions to keep you comfortable year-round.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
          <a
            href="tel:555-555-5555"
            className="inline-block px-4 py-2 bg-orange-500 text-white rounded shadow hover:bg-orange-600 transition text-xs md:text-sm"
          >
            📞 Call Now
          </a>
          <a
            href="/contact"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition text-xs md:text-sm"
          >
            📧 Contact Us
          </a>
        </div>
      </section>

            <section className="container mx-auto px-4 space-y-16 py-12">
        {/* 1️⃣ Heating Services - IMAGE RIGHT */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2"><div className='w-[260px] h-[260px] transform rotate-45 overflow-hidden rounded-xl shadow-lg border border-gray-200 bg-white mx-auto'><img src={heating} alt="Heating services" className='w-full h-full object-cover -rotate-45' loading="lazy"/></div>
          </div>
          <div className="w-full lg:w-1/2 text-sm md:text-base text-gray-700">
            <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-2">🔥 Heating Services</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>New Heater Installations</strong> – Efficient furnaces, heat pumps, and hybrid systems.</li>
              <li><strong>Heater Repairs</strong> – Quick, reliable fixes for all heating units.</li>
              <li><strong>Seasonal Maintenance</strong> – Keep your system running at peak efficiency.</li>
              <li><strong>System Upgrades</strong> – Modern performance and energy savings.</li>
              <li><strong>Thermostat Services</strong> – Precision controls for comfort and economy.</li>
            </ul>
          </div>
        </div>

        {/* 2️⃣ Cooling Services - IMAGE LEFT */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
          <div className="w-full lg:w-1/2"><div className='w-[260px] h-[260px] transform rotate-45 overflow-hidden rounded-xl shadow-lg border border-gray-200 bg-white mx-auto'>
  <img src={cooling} alt="Cooling services" className='w-full h-full object-cover -rotate-45' loading="lazy"/>
</div>
          </div>
          <div className="w-full lg:w-1/2 text-sm md:text-base text-gray-700">
            <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-2">❄️ Air Conditioning Services</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>AC Installations</strong> – Energy-efficient air conditioning systems.</li>
              <li><strong>AC Repairs</strong> – Fast service to restore cool air quickly.</li>
              <li><strong>Seasonal Tune-Ups</strong> – Prevent breakdowns and maintain performance.</li>
              <li><strong>Humidity Management</strong> – Keep your indoor air comfortable.</li>
              <li><strong>Smart Thermostats</strong> – Control cooling from anywhere.</li>
            </ul>
          </div>
        </div>

        {/* 3️⃣ Ventilation Services - IMAGE RIGHT */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2"><div className='w-[260px] h-[260px] transform rotate-45 overflow-hidden rounded-xl shadow-lg border border-gray-200 bg-white mx-auto'><img src={ventilation} alt="Ventilation services" className='w-full h-full object-cover -rotate-45' loading="lazy"/></div>
          </div>
          <div className="w-full lg:w-1/2 text-sm md:text-base text-gray-700">
            <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-2">🌬️ Ventilation Services</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Ductwork Installation</strong> – Balanced airflow in every room.</li>
              <li><strong>Ventilation Repairs</strong> – Remove blockages and fix leaks.</li>
              <li><strong>Airflow Balancing</strong> – Even temperatures throughout your space.</li>
              <li><strong>Whole-House Ventilation</strong> – Remove stale air, bring in fresh air.</li>
              <li><strong>Exhaust Systems</strong> – Proper moisture control and ventilation.</li>
            </ul>
          </div>
        </div>

        {/* 4️⃣ New Installations - IMAGE LEFT */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
          <div className="w-full lg:w-1/2"><div className='w-[260px] h-[260px] transform rotate-45 overflow-hidden rounded-xl shadow-md mx-auto'><img src={new_install} alt="New Install services" className='w-full h-full object-cover -rotate-45' loading="lazy"/></div>
          </div>
          <div className="w-full lg:w-1/2 text-sm md:text-base text-gray-700">
            <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-2">🆕 New Installations</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>New Construction HVAC</strong> – Tailored systems for your building.</li>
              <li><strong>System Replacements</strong> – Upgrade outdated equipment.</li>
              <li><strong>Load Calculations</strong> – Optimal sizing for peak efficiency.</li>
              <li><strong>Smart Integration</strong> – Modern, connected controls.</li>
              <li><strong>Post-Install Testing</strong> – Ensure perfect operation.</li>
            </ul>
          </div>
        </div>

        {/* 5️⃣ Repairs and Maintenance - IMAGE RIGHT */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2"><div className='w-[260px] h-[260px] transform rotate-45 overflow-hidden rounded-xl shadow-md mx-auto'><img src={repairs_maintenance} alt="Maintenance services" className='w-full h-full object-cover -rotate-45' loading="lazy"/></div>
          </div>
          <div className="w-full lg:w-1/2 text-sm md:text-base text-gray-700">
            <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-2">🛠️ Repairs & Maintenance</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Emergency Repairs</strong> – Quick fixes for urgent issues.</li>
              <li><strong>Preventative Maintenance</strong> – Keep your system running smoothly.</li>
              <li><strong>Seasonal Tune-Ups</strong> – Maximize lifespan and performance.</li>
              <li><strong>Inspections & Diagnostics</strong> – Identify and fix issues early.</li>
              <li><strong>Efficiency Optimization</strong> – Save on energy bills year-round.</li>
            </ul>
          </div>
        </div>

        {/* 6️⃣ Air Quality Solutions - IMAGE LEFT */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
          <div className="w-full lg:w-1/2"><div className='w-[260px] h-[260px] transform rotate-45 overflow-hidden rounded-xl shadow-md mx-auto'><img src={air} alt="Air quality services" className='w-full h-full object-cover -rotate-45' loading="lazy"/></div>
          </div>
          <div className="w-full lg:w-1/2 text-sm md:text-base text-gray-700">
            <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-2">🌿 Air Quality Solutions</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Air Filtration</strong> – Cleaner, healthier air.</li>
              <li><strong>Humidity Control</strong> – Comfort in every season.</li>
              <li><strong>Air Purification</strong> – Eliminate allergens and pollutants.</li>
              <li><strong>IAQ Testing</strong> – Comprehensive indoor air analysis.</li>
            </ul>
          </div>
        </div>

        {/* 7️⃣ Emergency Services - IMAGE RIGHT */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2"><div className='w-[260px] h-[260px] transform rotate-45 overflow-hidden rounded-xl shadow-md mx-auto'><img src={emergency} alt="Emergency services" className='w-full h-full object-cover -rotate-45' loading="lazy"/></div>
          </div>
          <div className="w-full lg:w-1/2 text-sm md:text-base text-gray-700">
            <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-2">🚨 Emergency Services</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>After Hours Service</strong> – Emergency services provided between 5pm–9pm and weekends.*</li>
              <li><strong>Immediate Response</strong> – Fast action to restore comfort.</li>
              <li><strong>Emergency Repairs</strong> – Rapid, effective fixes when it matters.</li>
              <li><strong>Direct Support</strong> – Call us anytime for urgent needs.</li>
              <li><strong>Peace of Mind</strong> – Your comfort and safety are our top priorities.</li>
              <li className="italic text-xs">*Additional charges may apply for after hours services.</li>
            </ul>
          </div>
        </div>

      </section>

      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <ManufacturerCarousel />
        </div>
      </section>
      {/* Footer placed inside <main> */}
              <footer className="bg-blue-600 text-white py-8 mt-12">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 px-4">
                  {/* Contact info */}
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">AMW Cooling & Heating</h3>
                    <p className="text-sm">Conroe, TX</p>
                    <p className="text-sm">Phone: (936) 587-7612</p>
                    <p className="text-sm">Email: admin@amwairconditioning.com</p>
                    <p className="text-sm mt-2">License #: TACLB133920E</p>
                  </div>
      
                  {/* Navigation links */}
                  <nav className="flex-1 flex flex-wrap gap-4 justify-center md:justify-start text-sm mt-4 md:mt-0">
                    <Link to="/" className="hover:text-orange-400 transition">Home</Link>
                    <Link to="/about" className="hover:text-orange-400 transition">About Us</Link>
                    <Link to="/services" className="hover:text-orange-400 transition">Services</Link>
                    <Link to="/faqs" className="hover:text-orange-400 transition">FAQs</Link>
                    <Link to="/financing" className="hover:text-orange-400 transition">Financing</Link>
                    <Link to="/testimonials" className="hover:text-orange-400 transition">Testimonials</Link>
                    <Link to="/contact" className="hover:text-orange-400 transition">Contact</Link>
                  </nav>
      
                  <div className="flex-1 flex flex-col items-center md:items-end text-white">
        <div className="flex justify-center md:justify-end gap-4 text-xl mb-2">
          <a
            href="https://www.facebook.com/people/AMW-Cooling-Heating-LLC/61569862892114/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/p/DKNmevRyLli/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.google.com/search?sca_esv=f6bc877b3d7fa12d&..."
            target="_blank"
            rel="noopener noreferrer"
          >
            <FcGoogle />
          </a>
          <a
            href="https://www.yelp.com/biz/amw-cooling-and-heating-conroe"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400 transition"
          >
            <FaYelp />
          </a>
        </div>
      
        <div className="text-xs text-white text-center md:text-right">
          <p>Hours: Mon – Sat, 8:00 AM – 9:00 PM</p>
          <p>Emergency Service Available from 5:00 PM – 9:00 PM</p>
        </div>
      </div>
                </div>
      
                <div className="mt-4 text-center text-xs">
                  &copy; {new Date().getFullYear()} AMW Cooling & Heating LLC. All Rights Reserved. Built by{' '}
                  <a
                    href="https://stephenscode.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline text-white"
                    style={{ textDecoration: 'none' }}
                  >
                    StephensCode LLC
                  </a>.
                </div>
              </footer>
    </main>
  );
}