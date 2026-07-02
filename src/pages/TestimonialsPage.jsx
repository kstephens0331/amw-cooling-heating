import React from "react";
import Link from 'next/link';
import { FaStar, FaPhone, FaCalendarCheck, FaShieldAlt, FaComments, FaTag, FaHandshake, FaMapMarkerAlt } from "react-icons/fa";
import GoogleReviews from "../components/GoogleReviews";
import ManufacturerCarousel from "../components/ManufacturerCarousel";
import MapSection from "../components/MapSectionWrapper";
import Footer from "../components/Footer";
import { LocalBusinessSchema } from '../components/StructuredData';
import reviewsData from "../data/googleReviews.json";

export default function TestimonialsPage() {
  const avgRating =
    typeof reviewsData.averageRating === "number"
      ? reviewsData.averageRating.toFixed(1)
      : reviewsData.averageRating;
  const totalReviews = reviewsData.totalReviews;

  return (
    <div className="bg-white text-gray-800 font-sans">
      <LocalBusinessSchema />

      {/* Patriotic Stripe */}
      <div className="h-1.5 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>

      {/* Hero Section */}
      <section className="bg-blue-900 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <div className="flex text-yellow-400">
              <FaStar className="w-4 h-4" />
              <FaStar className="w-4 h-4" />
              <FaStar className="w-4 h-4" />
              <FaStar className="w-4 h-4" />
              <FaStar className="w-4 h-4" />
            </div>
            <span className="text-white text-sm font-medium">{avgRating} rating from {totalReviews} Google reviews</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Customers Are Saying
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
            At AMW Cooling & Heating, we treat every customer like family. We're grateful for your trust and honored to provide service that goes beyond expectations.
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
              href="/contact"
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

      {/* Google Reviews (native, data-driven) */}
      <section className="py-12 bg-gray-50">
        {/* Red Header Bar */}
        <div className="bg-red-500 py-3 mb-10">
          <p className="text-center text-white text-sm font-medium tracking-widest uppercase">
            Trusted by Families Across Montgomery County
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-3 tracking-wide">FEATURED REVIEWS</h2>
            <p className="text-gray-600 text-lg">Real stories from real customers</p>
          </div>

          <GoogleReviews />
        </div>
      </section>

      {/* Why homeowners choose AMW */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-3 tracking-wide">
              WHY HOMEOWNERS CHOOSE AMW
            </h2>
            <p className="text-gray-600 text-lg">
              The same things come up in review after review. Here is what you can count on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 border-t-4 border-blue-600">
              <FaComments className="text-blue-600 w-8 h-8 mb-4" aria-hidden="true" />
              <h3 className="font-bold text-blue-900 text-lg mb-2">Straight answers, no upselling</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We tell you what your system actually needs and what we would do if it were our own home. No scare tactics, no pressure.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border-t-4 border-red-500">
              <FaTag className="text-red-500 w-8 h-8 mb-4" aria-hidden="true" />
              <h3 className="font-bold text-blue-900 text-lg mb-2">Fair, transparent pricing</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Clear quotes up front. You know the cost before we start, with no surprises and no pressure to buy more than you need.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border-t-4 border-blue-600">
              <FaHandshake className="text-blue-600 w-8 h-8 mb-4" aria-hidden="true" />
              <h3 className="font-bold text-blue-900 text-lg mb-2">We stand behind the work</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Josh, the owner, stays involved through the job and follows up afterward to make sure everything runs the way it should.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-700">
            <span className="inline-flex items-center gap-2 font-semibold">
              <FaShieldAlt className="text-blue-900 w-4 h-4" aria-hidden="true" />
              Veteran-Owned and Operated
            </span>
            <span className="inline-flex items-center gap-2 font-semibold">
              <FaStar className="text-yellow-400 w-4 h-4" aria-hidden="true" />
              {avgRating} rating from {totalReviews} Google reviews
            </span>
            <span className="inline-flex items-center gap-2 font-semibold">
              <FaMapMarkerAlt className="text-red-500 w-4 h-4" aria-hidden="true" />
              Serving Conroe and Montgomery County
            </span>
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
              Ready to Experience the AMW Difference?
            </h2>
            <p className="text-lg text-blue-200 max-w-xl mx-auto mb-8">
              Join our growing family of satisfied customers. Contact us today for reliable HVAC service you can trust.
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
                href="/contact"
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
    </div>
  );
}
