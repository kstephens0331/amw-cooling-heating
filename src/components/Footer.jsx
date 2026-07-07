import Link from 'next/link';
import { FaFacebook, FaInstagram, FaYelp } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-6 pb-24 md:pb-6">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">

        {/* Column 1: Company Info */}
        <div className="col-span-2 md:col-span-1">
          <h4 className="font-bold text-lg mb-2">AMW Cooling & Heating LLC</h4>
          <p className="text-sm">2346 Strong Horse Dr</p>
          <p className="text-sm">Conroe, TX 77301</p>
          <p className="text-sm whitespace-nowrap">Phone: (936) 331-1339</p>
          <p className="text-xs whitespace-nowrap">admin@amwairconditioning.com</p>
          <p className="text-sm mt-2">License #: TACLB133920E</p>
        </div>

        {/* Column 2: Pages */}
        <div className="text-sm">
          <h4 className="font-bold text-base mb-2">Pages</h4>
          <nav className="flex flex-col space-y-0.5">
            <Link href="/" className="hover:text-orange-400 transition">Home</Link>
            <Link href="/about" className="hover:text-orange-400 transition">About Us</Link>
            <Link href="/faqs" className="hover:text-orange-400 transition">FAQs</Link>
            <Link href="/financing" className="hover:text-orange-400 transition">Financing</Link>
            <Link href="/testimonials" className="hover:text-orange-400 transition">Testimonials</Link>
            <Link href="/contact" className="hover:text-orange-400 transition">Contact</Link>
            <Link href="/local-partners" className="hover:text-orange-400 transition">Partners</Link>
            <Link href="/blog" className="hover:text-orange-400 transition">HVAC Blog</Link>
          </nav>
        </div>

        {/* Column 3: Services */}
        <div className="text-sm">
          <h4 className="font-bold text-base mb-2">Services</h4>
          <nav className="flex flex-col space-y-0.5">
            <Link href="/services" className="hover:text-orange-400 transition">All Services</Link>
            <Link href="/services/ac-repair" className="hover:text-orange-400 transition">AC Repair</Link>
            <Link href="/services/ac-installation" className="hover:text-orange-400 transition">AC Installation</Link>
            <Link href="/services/heating-repair" className="hover:text-orange-400 transition">Heating Repair</Link>
            <Link href="/services/hvac-maintenance" className="hover:text-orange-400 transition">Maintenance</Link>
            <Link href="/services/indoor-air-quality" className="hover:text-orange-400 transition">Air Quality</Link>
            <Link href="/services/smart-thermostats" className="hover:text-orange-400 transition">Thermostats</Link>
            <Link href="/services/dryer-vent-cleaning" className="hover:text-orange-400 transition">Dryer Vents</Link>
          </nav>
        </div>

        {/* Column 4: Locations */}
        <div className="text-sm">
          <h4 className="font-bold text-base mb-2">Locations</h4>
          <nav className="flex flex-col space-y-0.5">
            <Link href="/locations/conroe-tx" className="hover:text-orange-400 transition">Conroe</Link>
            <Link href="/locations/the-woodlands-tx" className="hover:text-orange-400 transition">The Woodlands</Link>
            <Link href="/locations/spring-tx" className="hover:text-orange-400 transition">Spring</Link>
            <Link href="/locations/montgomery-tx" className="hover:text-orange-400 transition">Montgomery</Link>
            <Link href="/locations/willis-tx" className="hover:text-orange-400 transition">Willis</Link>
            <Link href="/locations/magnolia-tx" className="hover:text-orange-400 transition">Magnolia</Link>
            <Link href="/locations/tomball-tx" className="hover:text-orange-400 transition">Tomball</Link>
            <Link href="/locations/new-caney-tx" className="hover:text-orange-400 transition">New Caney</Link>
            <Link href="/locations/splendora-tx" className="hover:text-orange-400 transition">Splendora</Link>
            <Link href="/locations/porter-tx" className="hover:text-orange-400 transition">Porter</Link>
            <Link href="/locations/cut-and-shoot-tx" className="hover:text-orange-400 transition">Cut and Shoot</Link>
            <Link href="/locations/shenandoah-tx" className="hover:text-orange-400 transition">Shenandoah</Link>
            <Link href="/locations/pinehurst-tx" className="hover:text-orange-400 transition">Pinehurst</Link>
          </nav>
        </div>

        {/* Column 5: Social Icons + Hours + BBB */}
        <div className="col-span-2 md:col-span-1 flex flex-col items-start md:items-end space-y-2">
          <div className="flex gap-3 text-lg">
            <a href="https://www.facebook.com/people/AMW-Cooling-Heating-LLC/61569862892114/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/amwairconditioning/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.google.com/search?q=AMW+Cooling+%26+Heating+Reviews" target="_blank" rel="noopener noreferrer" aria-label="Google Reviews">
              <FcGoogle />
            </a>
            <a href="https://www.yelp.com/biz/amw-cooling-and-heating-conroe" target="_blank" rel="noopener noreferrer" aria-label="Yelp">
              <FaYelp />
            </a>
          </div>

          <div className="text-xs text-white leading-snug md:text-right">
            <p><strong>Hours:</strong> 8am–9pm, 7 Days a Week</p>
          </div>

          {/* Certification Badges */}
          <div className="flex items-center gap-2 mt-1">
            {/* NATE Certified */}
            <img
              src="/assets/images/nate.webp"
              alt="NATE Certified HVAC Technicians"
              loading="lazy"
              className="h-14 w-auto"
            />
            {/* BBB Seal */}
            <a
              href="https://www.bbb.org/us/tx/conroe/profile/heating-and-air-conditioning/amw-cooling-heating-llc-0915-90075524/#sealclick"
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label="AMW Cooling & Heating LLC BBB Business Review"
            >
              <img
                src="https://seal-houston.bbb.org/seals/blue-seal-160-90-bbb-90075524.png"
                alt="AMW Cooling & Heating LLC BBB Business Review"
                loading="lazy"
                width={160}
                height={90}
                style={{ border: 0 }}
                className="h-auto w-28"
              />
            </a>
            {/* Veteran Owned Business Badge */}
            <a
              href="https://www.veteranownedbusiness.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Proud Veteran Owned Business Member"
            >
              <img
                src="https://www.veteranownedbusiness.com/images/banner_links/VOB-Banner-Trade-Show-Border.jpg"
                alt="Proud Veteran Owned Business Member!"
                loading="lazy"
                className="h-14 w-auto"
              />
            </a>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm px-4">
        <div className="flex items-center justify-center gap-4 mb-2">
          <Link href="/privacy-policy" className="hover:text-orange-400 transition">Privacy Policy</Link>
          <span>|</span>
          <Link href="/terms-of-service" className="hover:text-orange-400 transition">Terms of Service</Link>
        </div>
        &copy; {new Date().getFullYear()} AMW Cooling & Heating LLC. All Rights Reserved. Built by{' '}
        <a
          href="https://stephenscode.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline text-white hover:underline"
        >
          StephensCode LLC
        </a>.
      </div>
    </footer>
  );
};

export default Footer;
