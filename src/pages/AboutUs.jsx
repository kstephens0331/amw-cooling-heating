import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaYelp } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import nateLogo from '../assets/images/nate.webp';
import Anjelica from '../assets/images/DSC_2077.webp'
import Josh from '../assets/images/DSC_2157.webp'

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

      {/* Story + Josh */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center pb-12"
      >
        <div className="order-2 lg:order-2 text-sm md:text-base text-gray-700">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">Our Story</h3>
          <p>
            AMW Cooling & Heating LLC was founded with a clear mission: to provide reliable, high-quality HVAC services across Texas, with a strong<br></br> focus on the needs of residential and light commercial customers.
            As a family- and veteran-owned business with over eight years of experience,<br></br> Joshua and Anjelica are dedicated to ensuring that every home and business they serve enjoys year-round comfort and efficiency.
          </p>
        </div>
        <div className="order-1 lg:order-1">
          <div className="w-[260px] h-[260px] transform rotate-45 overflow-hidden rounded-xl shadow-lg border border-gray-200 bg-white mx-auto">
            <img src={Josh} 
            alt="Joshua" 
              width="300"
             height="300"
            className="w-full h-full object-cover -rotate-45 w-[300-px] h-[300px]"  loading="lazy"/>
          </div>
        </div>
      </motion.div>

      {/* Anjelica Bio */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col lg:flex-row-reverse items-center gap-10 pb-12">
                  <div className="w-full lg:w-1/2"><div className='w-[260px] h-[260px] transform rotate-45 overflow-hidden rounded-xl shadow-lg border border-gray-200 bg-white mx-auto'>
          <img src={Anjelica}
          alt="Anjelica - co-owner of AMW Cooling & Heating" 
          width="300"
          height="300"
          className='w-full h-full object-cover -rotate-45 w-[300-px] h-[300-px]' loading="lazy"/>
        </div>
                  </div>
        <div className="order-1 lg:order-2 text-sm md:text-base text-gray-700">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">Meet The Owners</h3>
          <p>
            As veterans, Josh and Anjelica have always lived by a strong sense of service—first to their country,<br></br> and now to their community.
            With more than eight years of HVAC experience, Josh envisioned creating<br></br> a company built on honesty, expertise, and unwavering dedication
            to customer care. Their business is<br></br> founded on the same core values that guided them in the military: integrity, dedication, and a
            commitment<br></br> to delivering the highest quality of service. Beyond their work, Josh enjoys quality time with family and<br></br> exploring the great outdoors.
            Anjelica shares that same passion for family and giving back to the community.
          </p>
        </div>
      </motion.div>

      {/* Credentials */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col lg:flex-row-reverse items-center gap-10 pb-10"
      >
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">Expertise and Credentials</h3>
          <p className="text-gray-700 max-w-xl mx-auto lg:mx-0">
            Our reputation as a trusted HVAC provider is built on a solid foundation of experience, industry certifications, and a relentless commitment to quality.
            When you choose AMW Cooling & Heating LLC, you're choosing a family-owned business dedicated to providing efficient, effective solutions that prioritize your comfort, safety, and satisfaction.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="w-[260px] h-[260px] transform rotate-45 overflow-hidden rounded-xl shadow-lg border border-gray-200 bg-white mx-auto">
            <img src={nateLogo} alt="NATE Certified" className="w-full h-full object-cover -rotate-45" loading="lazy"/>
          </div>
        </div>
      </motion.div>

        {/* CTA */}
<motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center pt-12 pb-24"
      >
        <h3 className="text-xl font-semibold text-blue-900 mb-2">Schedule Your Consultation</h3>
        <p className="text-gray-800 max-w-lg mx-auto mb-4">
          At AMW Cooling & Heating, we specialize in a full range of HVAC solutions. Let Josh and Anjelica guide you through the process and deliver results you can rely on.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition">
          Schedule a Consultation
        </button>
      </motion.div>
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
            <Link to="/about" className="hover:text-orange-400 transition" aria-label="Learn more about AMW Cooling and Heating" >About Us</Link>
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
