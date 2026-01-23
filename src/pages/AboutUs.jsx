import { Link } from 'react-router-dom';
import { FaShieldAlt, FaPhone, FaCalendarCheck } from 'react-icons/fa';
import SEO from '../components/SEO';
import nateLogo from '../assets/images/nate.webp';
import Anjelica from '../assets/images/DSC_2077.webp'
import Josh from '../assets/images/DSC_2157.webp'
import aboutHero from '../assets/images/DSC_1887.webp';
import ManufacturerCarousel from '../components/ManufacturerCarousel';
import MapSection from '../components/MapSection';
import Footer from '../components/Footer';

export default function AboutUs() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <SEO
        title="About AMW Cooling & Heating | Veteran-Owned HVAC Conroe TX"
        description="Learn about AMW Cooling & Heating, a veteran-owned HVAC company serving Conroe, TX. Meet our team and discover our commitment to quality service."
        canonical="https://amwairconditioning.com/about"
        keywords="about AMW, veteran owned HVAC Conroe, HVAC company Conroe, AMW team"
      />

      {/* Page Content */}
      <main>
        {/* Patriotic Stripe */}
        <div className="h-1.5 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>

        {/* Split Hero Section */}
        <section className="relative bg-blue-900 overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 min-h-[400px] lg:min-h-[500px]">
              {/* Left - Content */}
              <div className="flex flex-col justify-center px-6 lg:px-12 py-12 lg:py-16 order-2 lg:order-1">
                {/* Veteran Badge */}
                <div className="inline-flex items-center gap-2 bg-red-500 rounded-full px-4 py-2 mb-6 w-fit">
                  <FaShieldAlt className="text-white w-4 h-4" />
                  <span className="text-white text-sm font-semibold">Veteran-Owned & Operated</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                  Meet the Family Behind
                  <span className="block text-blue-300">AMW Cooling & Heating</span>
                </h1>

                <p className="text-lg text-blue-100 mb-8 max-w-lg">
                  Discover the dedicated team and the unwavering mission behind AMW Cooling & Heating LLC — proudly serving Texas families.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+19363311339"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition font-bold"
                  >
                    <FaPhone className="w-4 h-4" />
                    (936) 331-1339
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-900 rounded-lg hover:bg-blue-50 transition font-bold"
                  >
                    <FaCalendarCheck className="w-4 h-4" />
                    Schedule Service
                  </Link>
                </div>
              </div>

              {/* Right - Image */}
              <div className="relative order-1 lg:order-2 h-64 lg:h-auto">
                <img
                  src={aboutHero}
                  alt="Josh and Anjelica - Owners of AMW Cooling & Heating"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  loading="eager"
                />
                {/* Gradient overlay for mobile text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent lg:bg-gradient-to-r lg:from-blue-900/30 lg:to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Bottom Stripe */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>
        </section>

      {/* Main Content - With subtle background */}
      <section className="relative py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-20 left-0 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl -translate-x-1/2"></div>
        <div className="absolute bottom-20 right-0 w-64 h-64 bg-red-100 rounded-full opacity-30 blur-3xl translate-x-1/2"></div>

        <div className="relative max-w-4xl mx-auto px-4">
          {/* Story + Josh */}
          <div className="flex flex-col lg:flex-row items-center gap-10 pb-16">
            <div className="lg:w-2/5 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-white to-red-500 rounded-xl opacity-75 blur"></div>
                <div className="relative w-[180px] h-[180px] transform rotate-45 overflow-hidden rounded-xl shadow-lg border-2 border-white bg-white flex items-center justify-center">
                  <img src={Josh}
                    alt="Joshua"
                    width="300"
                    height="300"
                    className="w-[260px] h-[260px] object-cover object-top -rotate-45 scale-100"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-3/5">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-red-500 rounded"></span>
                Our Story
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                AMW Cooling & Heating LLC was founded with a clear mission: to provide reliable, high-quality HVAC services across Texas, with a strong focus on the needs of residential and light commercial customers. As a family- and veteran-owned business with over eight years of experience, Joshua and Anjelica are dedicated to ensuring that every home and business they serve enjoys year-round comfort and efficiency.
              </p>
            </div>
          </div>

          {/* Anjelica Bio */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-10 pb-16">
            <div className="lg:w-2/5 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-red-500 via-white to-blue-600 rounded-xl opacity-75 blur"></div>
                <div className="relative w-[180px] h-[180px] transform rotate-45 overflow-hidden rounded-xl shadow-lg border-2 border-white bg-white flex items-center justify-center">
                  <img src={Anjelica}
                    alt="Anjelica - co-owner of AMW Cooling & Heating"
                    width="300"
                    height="300"
                    className="w-[260px] h-[260px] object-cover object-top -rotate-45 scale-100"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-3/5">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-red-500 rounded"></span>
                Meet The Owners
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                As veterans, Josh and Anjelica have always lived by a strong sense of service—first to their country, and now to their community. With more than eight years of HVAC experience, Josh envisioned creating a company built on honesty, expertise, and unwavering dedication to customer care. Their business is founded on the same core values that guided them in the military: integrity, dedication, and a commitment to delivering the highest quality of service. Beyond their work, Josh enjoys quality time with family and exploring the great outdoors. Anjelica shares that same passion for family and giving back to the community.
              </p>
            </div>
          </div>

          {/* Credentials */}
          <div className="flex flex-col lg:flex-row items-center gap-10 pb-16">
            <div className="lg:w-2/5 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-white to-red-500 rounded-xl opacity-75 blur"></div>
                <div className="relative w-[180px] h-[180px] transform rotate-45 overflow-hidden rounded-xl shadow-lg border-2 border-white bg-white flex items-center justify-center">
                  <img src={nateLogo} alt="NATE Certified" className="w-[260px] h-[260px] object-contain -rotate-45 scale-100" loading="lazy"/>
                </div>
              </div>
            </div>
            <div className="lg:w-3/5">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-red-500 rounded"></span>
                Expertise and Credentials
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Our reputation as a trusted HVAC provider is built on a solid foundation of experience, industry certifications, and a relentless commitment to quality.
                When you choose AMW Cooling & Heating LLC, you're choosing a family-owned business dedicated to providing efficient, effective solutions that prioritize your comfort, safety, and satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        <div className="h-1.5 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>
        <div className="bg-blue-900 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Schedule Your Consultation</h3>
            <p className="text-lg text-blue-200 max-w-xl mx-auto mb-8">
              At AMW Cooling & Heating, we specialize in a full range of HVAC solutions. Let Josh and Anjelica guide you through the process and deliver results you can rely on.
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
      </main>

      <MapSection />
      <ManufacturerCarousel />
      <Footer />
    </div>
  );
}
