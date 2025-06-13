
import { Link } from 'react-router-dom';
import aboutus from '../assets/images/DSC_1887.webp';

export default function AboutUsPreview() {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-6">
        {/* Left Side Text */}
        <div className="md:w-1/2 w-full text-gray-800">
          <h1 className="text-3xl md:text-3xl font-bold text-blue-900 mb-2">About Us</h1>
          <p className="text-sm md:text-base text-gray-800 mb-2">
            At AMW Cooling & Heating, we take pride in providing top-quality HVAC services to our community.
            With years of experience and a commitment to excellence, Josh and Angelica lead a team that delivers
            exceptional comfort solutions for your home or business.
          </p>
          <p className="text-sm md:text-base text-gray-800 mb-2">
            We believe in honest communication, transparent pricing, and treating every customer like family.
            Whether you need repairs, maintenance, or a brand-new installation, we’re here to help.
          </p>
          <Link
            to="/about"
            className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition text-xs md:text-sm" aria-label="Learn more about AMW Cooling & Heating's team and mission"
          >
            Learn More
          </Link>
        </div>

        {/* Right Side Image */}
        <div className="w-full max-w-sm aspect-[2/3] overflow-hidden rounded-lg shadow-md">
  <img
    src={aboutus}
    alt="Josh and Anjelica - Owners"
    className="w-full h-full object-cover"
    loading="lazy"
  />
</div>
      </div>
    </section>
  );
}
