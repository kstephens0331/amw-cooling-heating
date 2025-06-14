import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYelp } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-10">
  <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

    {/* Column 1: Company Info */}
    <div>
      <h3 className="font-bold text-lg mb-2">AMW Cooling & Heating</h3>
      <p className="text-sm">Conroe, TX</p>
      <p className="text-sm">Phone: (936) 587-7612</p>
      <p className="text-sm">Email: admin@amwairconditioning.com</p>
      <p className="text-sm mt-2">License #: TACLB133920E</p>
    </div>

    {/* Column 2: Navigation */}
    <nav className="flex flex-wrap flex-col md:items-center text-sm space-y-2">
      {[
        ['/', 'Home'],
        ['/about', 'About Us'],
        ['/services', 'Services'],
        ['/faqs', 'FAQs'],
        ['/financing', 'Financing'],
        ['/testimonials', 'Testimonials'],
        ['/contact', 'Contact'],
      ].map(([to, label], idx) => (
        <Link key={idx} to={to} className="hover:text-orange-400 transition">
          {label}
        </Link>
      ))}
    </nav>

    {/* Column 3: Social Icons + Hours */}
    <div className="flex flex-col items-start md:items-end space-y-3">
      <div className="flex gap-4 text-xl">
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
      <div className="text-xs text-white leading-snug">
        <p><strong>Business Hours:</strong> Mon–Fri 8am–5pm</p>
        <p><strong>After Hours:</strong> Mon–Fri 5pm–9pm</p>
        <p><strong>Emergency Services:</strong> Sat–Sun</p>
      </div>
    </div>

  </div>

  {/* Footer Bottom */}
  <div className="mt-8 text-center text-xs px-4">
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
