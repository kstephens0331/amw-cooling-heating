import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaYelp } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

export default function AboutUs() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Helmet>
        <title>About Us | AMW Cooling & Heating LLC</title>
        <meta name="description" content="Learn about the AMW Cooling & Heating team and their commitment to reliable HVAC solutions in Texas." />
        <meta name="keywords" content="AMW Cooling & Heating, HVAC services, About Us, Conroe TX, The Woodlands" />
      </Helmet>

      {/* Page Content */}
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-8">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">About Us</h1>
            <p className="text-sm md:text-base text-gray-700 max-w-xl mx-auto">
              Discover the dedicated team and the unwavering mission behind AMW Cooling & Heating LLC.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-8">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-6">
            {/* Left: Photo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:w-1/2 w-full h-72 rounded-3xl overflow-hidden shadow-md"
            >
              <img
                src="/placeholders/aboutus-placeholder.jpg"
                alt="Josh and Anjelica, AMW Cooling & Heating team"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Right: Text */}
            <div className="md:w-1/2 w-full">
              <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-blue-900">Our Story</h2>
              <p className="text-sm md:text-base text-gray-700 mb-2">
                AMW Cooling & Heating LLC was founded with a clear mission: to provide reliable, high-quality HVAC services across Texas, with a strong focus on the needs of residential and light commercial customers.
              </p>
              <p className="text-sm md:text-base text-gray-700 mb-2">
                As a family- and veteran-owned business with over eight years of experience, Joshua and Anjelica are dedicated to ensuring that every home and business they serve enjoys year-round comfort and efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Meet the Owners */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4 flex flex-col md:flex-row-reverse items-center gap-6">
            {/* Right: Photo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:w-1/2 w-full h-72 rounded-3xl overflow-hidden shadow-md"
            >
              <img
                src="/placeholders/owners-placeholder.jpg"
                alt="Josh and Anjelica, AMW Cooling & Heating owners"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Left: Text */}
            <div className="md:w-1/2 w-full">
              <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-blue-900">Meet The Owners</h2>
              <p className="text-sm md:text-base text-gray-700 mb-2">
                As veterans, Josh and Anjelica have always lived by a strong sense of service—first to their country, and now to their community. With more than eight years of HVAC experience, Josh envisioned creating a company built on honesty, expertise, and unwavering dedication to customer care.
              </p>
              <p className="text-sm md:text-base text-gray-700 mb-2">
                Their business is founded on the same core values that guided them in the military: integrity, dedication, and a commitment to delivering the highest quality of service.
              </p>
              <p className="text-sm md:text-base text-gray-700 mb-2">
                Beyond their work, Josh enjoys quality time with family and exploring the great outdoors. Anjelica shares that same passion for family and giving back to the community.
              </p>
            </div>
          </div>
        </section>

        {/* Expertise and Credentials */}
        <section className="py-8">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-blue-900">Expertise and Credentials</h2>
            <p className="text-sm md:text-base text-gray-700 mb-2">
              Our reputation as a trusted HVAC provider is built on a solid foundation of experience, industry certifications, and a relentless commitment to quality.
            </p>
            <p className="text-sm md:text-base text-gray-700 mb-2">
              When you choose AMW Cooling & Heating LLC, you’re choosing a family-owned business dedicated to providing efficient, effective solutions that prioritize your comfort, safety, and satisfaction.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-8 bg-blue-50 text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-2">Schedule Your Consultation</h2>
            <p className="text-sm md:text-base text-gray-700 mb-4">
              At AMW Cooling & Heating, we specialize in a full range of HVAC solutions. Let Josh and Anjelica guide you through the process and deliver results you can rely on.
            </p>
            <a
              href="/contact"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition text-xs md:text-sm"
            >
              Schedule a Consultation
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 px-4">
          <div className="flex-1">
            <h3 className="font-bold text-lg">AMW Cooling & Heating</h3>
            <p className="text-sm">Conroe, TX</p>
            <p className="text-sm">Phone: (936) 587-7612</p>
            <p className="text-sm">Email: admin@amwairconditioning.com</p>
            <p className="text-sm mt-2">License #: TACLB133920E</p>
          </div>

          <nav className="flex-1 flex flex-wrap gap-4 justify-center md:justify-start text-sm mt-4 md:mt-0">
            <Link to="/" className="hover:text-orange-400 transition">Home</Link>
            <Link to="/about" className="hover:text-orange-400 transition">About Us</Link>
            <Link to="/services" className="hover:text-orange-400 transition">Services</Link>
            <Link to="/faqs" className="hover:text-orange-400 transition">FAQs</Link>
            <Link to="/financing" className="hover:text-orange-400 transition">Financing</Link>
            <Link to="/testimonials" className="hover:text-orange-400 transition">Testimonials</Link>
            <Link to="/contact" className="hover:text-orange-400 transition">Contact</Link>
          </nav>

          <div className="flex-1 flex justify-center md:justify-end gap-4 text-xl">
            <a href="https://www.facebook.com/people/AMW-Cooling-Heating-LLC/61569862892114/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://www.instagram.com/p/DKNmevRyLli/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.google.com/search?sca_esv=f6bc877b3d7fa12d&..." target="_blank" rel="noopener noreferrer"><FcGoogle /></a>
            <a href="https://www.yelp.com/biz/amw-cooling-and-heating-conroe" target="_blank" rel="noopener noreferrer"><FaYelp /></a>
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
    </div>
  );
}
