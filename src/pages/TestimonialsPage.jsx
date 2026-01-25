import React from "react";
import { Link } from "react-router-dom";
import { FaQuoteLeft, FaStar, FaPhone, FaCalendarCheck, FaShieldAlt } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import TrustIndexWidget from "../components/TrustIndexWidget";
import ManufacturerCarousel from "../components/ManufacturerCarousel";
import MapSection from "../components/MapSection";
import Footer from "../components/Footer";

export default function TestimonialsPage() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Helmet>
        <title>Customer Testimonials | AMW Cooling & Heating LLC</title>
        <meta
          name="description"
          content="Read what our customers have to say about AMW Cooling & Heating. See real reviews from homeowners and businesses in Conroe, The Woodlands, and surrounding areas."
        />
        <meta
          name="keywords"
          content="HVAC reviews, customer testimonials, AMW Cooling feedback, Conroe HVAC trusted, The Woodlands heating and cooling"
        />
      </Helmet>

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
            <span className="text-white text-sm font-medium">5.0 Rating - 54 Google Reviews</span>
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

      {/* Featured Testimonials */}
      <section className="py-12 bg-blue-900">
        {/* Red Header Bar */}
        <div className="bg-red-500 py-3 mb-10">
          <p className="text-center text-white text-sm font-medium tracking-widest uppercase">
            Trusted by Families Across Montgomery County
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-wide">FEATURED REVIEWS</h2>
            <p className="text-blue-200 text-lg">Real stories from real customers</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Becca S. */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col border-l-4 border-blue-600">
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-yellow-400">
                    <FaStar className="w-4 h-4" />
                    <FaStar className="w-4 h-4" />
                    <FaStar className="w-4 h-4" />
                    <FaStar className="w-4 h-4" />
                    <FaStar className="w-4 h-4" />
                  </div>
                  <FaQuoteLeft className="text-blue-600 text-2xl" />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed flex-1">
                  "If you need an air conditioning and heating expert you can rely on, I highly recommend Josh at AMW Cooling & Heating. Josh is a U.S. Army veteran who brings the same pride, discipline, and attention to detail from his service into his work. When I needed someone to review the HVAC installation in my newly built home, Josh exceeded my expectations. He sat down with us, explained every aspect of our system, conducted a thorough inspection, and shared practical options—always emphasizing what he would do if it were his own house. What sets Josh apart is his integrity. He doesn't use scare tactics or pressure you into following his recommendations. As a retired Marine, I never thought I'd be recommending an Army guy—but Josh is the real deal. <strong className="text-blue-900">Semper Fi.</strong>"
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="font-bold text-blue-900 text-base">Becca S.</p>
                  <p className="text-xs text-red-500 font-medium">Google Review</p>
                </div>
              </div>
            </div>

            {/* Luis C. */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col border-l-4 border-red-500">
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-yellow-400">
                    <FaStar className="w-4 h-4" />
                    <FaStar className="w-4 h-4" />
                    <FaStar className="w-4 h-4" />
                    <FaStar className="w-4 h-4" />
                    <FaStar className="w-4 h-4" />
                  </div>
                  <FaQuoteLeft className="text-red-500 text-2xl" />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed flex-1">
                  "Josh (owner of AMW) is, without a doubt, <strong className="text-blue-900">the best A/C technician in Texas.</strong> I reached out to five different companies, all of which tried to overcharge me. When I found Josh, I expected the same, but his pricing was significantly lower than the competition. He went above and beyond. The unit he installed is not only better than my last one, but the installation itself was done with precision and care. He even followed up to make sure everything was running perfectly. The level of service and dedication he provided far exceeded what I paid for. He genuinely cares about his customers and stands by his work long after the installation is complete."
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="font-bold text-blue-900 text-base">Luis C.</p>
                  <p className="text-xs text-red-500 font-medium">Google Review</p>
                </div>
              </div>
            </div>

            {/* Brandy G. */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col border-l-4 border-blue-600">
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-yellow-400">
                    <FaStar className="w-4 h-4" />
                    <FaStar className="w-4 h-4" />
                    <FaStar className="w-4 h-4" />
                    <FaStar className="w-4 h-4" />
                    <FaStar className="w-4 h-4" />
                  </div>
                  <FaQuoteLeft className="text-blue-600 text-2xl" />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed flex-1">
                  "From the moment I met Josh and his wife, they were professional and explained what they could do for my A/C and heating system. They emailed me a quote for a yearly maintenance plan, and as soon as I was ready, I got on the schedule. Josh arrived on time and ready to get to work. He explained what he was going to do and everything he was going to check. After he checked everything and maintained my units, Josh explained thoroughly all the ins and outs of my system and showed me pictures every step along the way. I highly recommend using AMW — not only are they a great small business with excellent customer service, but also <strong className="text-blue-900">Veteran Owned.</strong>"
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="font-bold text-blue-900 text-base">Brandy G.</p>
                  <p className="text-xs text-red-500 font-medium">Google Review</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trustindex Widget Section */}
      <section className="py-12 bg-gray-50">
        <div className="h-1 bg-gradient-to-r from-blue-600 via-white to-red-500 mb-10"></div>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-3 tracking-wide">MORE REVIEWS</h2>
            <p className="text-gray-600 text-lg">See what others are saying about AMW Cooling & Heating</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-red-500">
            <TrustIndexWidget />
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
    </div>
  );
}
