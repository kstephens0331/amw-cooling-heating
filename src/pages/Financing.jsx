import { Helmet } from 'react-helmet';
import { FaCheckCircle, FaDollarSign, FaHandshake } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYelp } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

<Helmet>
  <title>Financing Options | AMW Cooling & Heating LLC</title>
  <meta
    name="description"
    content="Learn about flexible HVAC financing options from AMW Cooling & Heating LLC. We make comfort affordable with convenient payment plans."
  />
  <meta
    name="keywords"
    content="HVAC financing, payment plans, AC loan, Conroe HVAC financing, flexible HVAC payments"
  />
</Helmet>


export default function Financing() {
  return (
    <main className="bg-white text-gray-800">
      <Helmet>
        <title>Financing Options | AMW Cooling & Heating LLC</title>
        <meta name="description" content="Explore HVAC financing options with Synchrony and FTL. Learn about benefits, the process, and how easy it is to get started with AMW Cooling & Heating." />
      </Helmet>

      {/* Hero */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Flexible HVAC Financing Options</h1>
          <p className="max-w-xl mx-auto text-gray-700">
            Comfort for your home shouldn’t wait. Our financing solutions make it easier than ever to get the HVAC system you need—affordably.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-blue-900 mb-6 text-center">Why Choose Financing?</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4 border border-gray-200 rounded shadow-sm">
              <FaDollarSign className="mx-auto text-blue-600 text-3xl mb-2" />
              <h3 className="font-semibold mb-2">Affordable Payments</h3>
              <p className="text-gray-700">Spread out the cost of your HVAC upgrade with convenient monthly payments that fit your budget.</p>
            </div>
            <div className="p-4 border border-gray-200 rounded shadow-sm">
              <FaHandshake className="mx-auto text-blue-600 text-3xl mb-2" />
              <h3 className="font-semibold mb-2">Trusted Partners</h3>
              <p className="text-gray-700">We work with Synchrony and FTL—reputable lenders who specialize in home improvement financing.</p>
            </div>
            <div className="p-4 border border-gray-200 rounded shadow-sm">
              <FaCheckCircle className="mx-auto text-blue-600 text-3xl mb-2" />
              <h3 className="font-semibold mb-2">Fast, Simple Process</h3>
              <p className="text-gray-700">Applications are quick, approvals are fast, and our team is here to guide you every step of the way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Options */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-start">
          <div className="p-6 rounded shadow bg-white border border-gray-200">
            <h2 className="text-2xl font-semibold text-blue-900 mb-2">Synchrony Financing</h2>
            <p className="mb-4 text-gray-700">
              Synchrony offers competitive rates and flexible terms for HVAC installations and major repairs. Enjoy low monthly payments, online account management, and peace of mind.
            </p>
            <a
              href="https://www.mysynchrony.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
            >
              Apply with Synchrony
            </a>
          </div>

          <div className="p-6 rounded shadow bg-white border border-gray-200">
            <h2 className="text-2xl font-semibold text-blue-900 mb-2">FTL (Second Chance) Financing</h2>
            <p className="mb-4 text-gray-700">
              If your credit isn’t perfect, FTL offers second-chance financing designed to help everyone access the comfort they deserve. Flexible terms, easy approvals, and simple online payments make it easy!
            </p>
            <a
              href="https://www.ftlfinance.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-2 bg-orange-500 text-white rounded shadow hover:bg-orange-600 transition"
            >
              Apply with FTL
            </a>
          </div>
        </div>
      </section>

      {/* What to Expect as CTA */}
<section className="py-12 text-center">
  <div className="max-w-2xl mx-auto px-4">
    <h2 className="text-2xl font-semibold text-blue-900 mb-2">What to Expect</h2>
    <p className="mb-4 text-gray-700">
      Our team will guide you through the simple financing application process, answer any questions you have, and help you find the perfect plan for your needs.
    </p>
    <a
      href="/contact"
      className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
    >
      Contact Us Today
    </a>
  </div>
</section>

      {/* FAQs about Financing */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4 text-center">Financing FAQs</h2>
          <ul className="space-y-4 text-gray-700">
            <li><strong>Q:</strong> Can I finance both installations and repairs?<br /><strong>A:</strong> Yes, both new installations and major repairs can be financed with Synchrony or FTL.</li>
            <li><strong>Q:</strong> Is the application process secure?<br /><strong>A:</strong> Absolutely! Both Synchrony and FTL use secure online applications to protect your information.</li>
            <li><strong>Q:</strong> Will I know my payment amount before signing?<br /><strong>A:</strong> Yes, you’ll see all terms and payment details clearly before agreeing to any financing plan.</li>
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 text-center">
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
        >
          Let’s Get Started
        </a>
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
