import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaPhone, FaCalendarCheck, FaChevronDown, FaChevronRight, FaQuestionCircle, FaTools, FaWrench, FaCog, FaCreditCard } from 'react-icons/fa';
import FinancingCTA from '../components/FinancingCTA';
import ManufacturerCarousel from '../components/ManufacturerCarousel';
import MapSection from '../components/MapSection';
import Footer from '../components/Footer';

const categoryIcons = {
  'General HVAC': FaQuestionCircle,
  'Installations': FaTools,
  'Repairs': FaWrench,
  'Maintenance': FaCog,
  'Financing': FaCreditCard,
};

const faqs = [
  {
    category: 'General HVAC',
    questions: [
      {
        question: 'What areas do you serve?',
        answer: (
          <span>
            We proudly serve Conroe, Montgomery County, The Woodlands, Spring, Willis, and surrounding areas. Our licensed team ensures top-notch service whether it’s an installation, repair, or maintenance call. If you're outside our standard service area,{' '}
            <a href="/contact" className="text-blue-600 underline hover:text-orange-500">contact us</a> and we'll do our best to assist.
          </span>
        ),
      },
      {
        question: 'Are you licensed and insured?',
        answer: (
          <span>
            Yes! AMW Cooling & Heating LLC is fully licensed (TACLB133920E) and insured for your safety and peace of mind. This means we meet the highest standards of professionalism and service. You can trust us to handle your HVAC needs with confidence.
          </span>
        ),
      },
      {
        question: 'Do you offer emergency services?',
        answer: (
          <span>
            Absolutely! We offer after hours emergency HVAC services between the hours of 5pm-9pm because we know comfort can’t wait.{' '}
            <a href="tel:+19363311339" className="text-blue-600 underline hover:text-orange-500">Call us anytime at (936) 331-1339</a> for quick and reliable help. *Additional charges may apply*
          </span>
        ),
      },
      {
        question: 'What brands do you work with?',
        answer: (
          <span>
            We work with trusted HVAC brands like Carrier, Lennox, Trane, Goodman, and many more. Our team is trained to service and install a wide variety of systems. Whatever brand you have or choose, we’ve got you covered.
          </span>
        ),
      },
      {
        question: 'Can you help me choose the right system?',
        answer: (
          <span>
            Yes! We’ll help you select the best system for your home or business based on your needs and budget.{' '}
            <a href="/contact" className="text-blue-600 underline hover:text-orange-500">Schedule a consultation</a> with us to get started.
          </span>
        ),
      },
      {
        question: 'Do you offer indoor air quality solutions?',
        answer: (
          <span>
            Yes, we offer solutions like air purifiers, humidifiers, and ventilation systems to improve indoor air quality. We believe clean air is crucial for your comfort and health.{' '}
            <a href="/contact" className="text-blue-600 underline hover:text-orange-500">Contact us</a> to discuss your options.
          </span>
        ),
      },
      {
        question: 'How long does a typical service call take?',
        answer: (
          <span>
            Most standard HVAC service calls are completed within 1–2 hours. Our goal is to identify the issue and restore comfort as quickly and efficiently as possible. For larger repairs, we’ll explain the timeline upfront.
          </span>
        ),
      },
      {
        question: 'What is your service area radius?',
        answer: (
          <span>
            We typically serve a 30-mile radius around Conroe, TX. If you’re outside this range,{' '}
            <a href="/contact" className="text-blue-600 underline hover:text-orange-500">contact us</a> to see if we can accommodate your needs.
          </span>
        ),
      },
      {
        question: 'How can I schedule a service?',
        answer: (
          <span>
            It’s easy!{' '}
            <a href="/contact" className="text-blue-600 underline hover:text-orange-500">Contact us</a> through our website or call{' '}
            <a href="tel:9363311339" className="text-blue-600 underline hover:text-orange-500">(936) 331-1339</a> to speak with our team. We’ll find a time that works best for you.
          </span>
        ),
      },
      {
        question: 'Do you provide written estimates?',
        answer: (
          <span>
            Yes! We provide clear, written estimates for every job so you’ll always know what to expect. We’re committed to transparency and honesty from the start.
          </span>
        ),
      },
    ],
  },
  {
    category: 'Installations',
    questions: [
      {
        question: 'What types of HVAC systems do you install?',
        answer: (
          <span>
            We install central air conditioning systems, heat pumps, ductless mini-splits, and more. Our experienced team will work with you to determine the best system for your needs and budget.{' '}
            <a href="/contact" className="text-blue-600 underline hover:text-orange-500">Contact us</a> today to start your project.
          </span>
        ),
      },
      {
        question: 'Do you offer financing for installations?',
        answer: (
          <span>
            Yes! We partner with{' '}
            <a href="https://www.mysynchrony.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-orange-500">Synchrony</a> and{' '}
            <a href="https://www.ftlfinance.com/" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline hover:text-orange-500">FTL (Second Chance)</a> to provide flexible financing options.{' '}
            <a href="/contact" className="text-blue-600 underline hover:text-orange-500">Reach out</a> and let us help you apply!
          </span>
        ),
      },
      {
        question: 'How long does an installation take?',
        answer: (
          <span>
            Most installations take 1–2 days, depending on the size and type of system. We always aim to minimize disruption to your home or business and keep you updated throughout the process.
          </span>
        ),
      },
      {
        question: 'Do you remove old systems?',
        answer: (
          <span>
            Yes, we safely remove and dispose of your old HVAC system as part of the installation process. Our goal is to make your upgrade as smooth and hassle-free as possible.
          </span>
        ),
      },
      {
        question: 'Can I get an energy-efficient system?',
        answer: (
          <span>
            Absolutely! We specialize in installing high-efficiency HVAC systems that lower energy bills and reduce your carbon footprint.{' '}
            <a href="/contact" className="text-blue-600 underline hover:text-orange-500">Contact us</a> for an energy evaluation today.
          </span>
        ),
      },
      {
        question: 'Do you offer system sizing consultations?',
        answer: (
          <span>
            Yes! Proper system sizing ensures your comfort and energy savings. We’ll calculate the best system size based on your home or business’s unique needs.
          </span>
        ),
      },
      {
        question: 'Are there warranties with new installations?',
        answer: (
          <span>
            Yes, we stand by our work with manufacturer warranties on new systems and our own labor warranty. You can feel confident your investment is protected.
          </span>
        ),
      },
      {
        question: 'What preparations should I make before installation?',
        answer: (
          <span>
            Before we arrive, clear any clutter around the system and let us know of any special concerns. We’ll take care of everything else to ensure a clean, efficient job.
          </span>
        ),
      },
      {
        question: 'Do you install smart thermostats?',
        answer: (
          <span>
            Yes! Smart thermostats improve comfort and efficiency by learning your preferences.{' '}
            <a href="/contact" className="text-blue-600 underline hover:text-orange-500">Contact us</a> for details on integrating one into your new system.
          </span>
        ),
      },
      {
        question: 'How do I know if it’s time for a new system?',
        answer: (
          <span>
            Signs you may need a new system include frequent breakdowns, rising energy bills, or systems over 10–15 years old.{' '}
            <a href="/contact" className="text-blue-600 underline hover:text-orange-500">Ask for a consultation</a> and we’ll help you decide if it’s time.
          </span>
        ),
      },
    ],
  },
  {
    category: 'Repairs',
    questions: [
      {
        question: 'What are common HVAC repair issues?',
        answer: (
          <span>
            Common HVAC problems include refrigerant leaks, clogged filters, electrical issues, and thermostat malfunctions. Our skilled team can quickly diagnose and fix these to restore your comfort.{' '}
            <a href="/contact" className="text-blue-600 underline hover:text-orange-500">Contact us</a> if you’re noticing problems!
          </span>
        ),
      },
      {
        question: 'How quickly can you respond to repair calls?',
        answer: (
          <span>
            We pride ourselves on fast response times, including same-day and emergency services.{' '}
            <a href="tel:9363311339" className="text-blue-600 underline hover:text-orange-500">Call us now at (936) 331-1339</a> for immediate help.
          </span>
        ),
      },
      {
        question: 'Do you carry parts on your trucks?',
        answer: (
          <span>
            Yes! Our trucks are stocked with common HVAC parts to handle most repairs on the spot. This saves you time and gets your system back to normal faster.
          </span>
        ),
      },
      {
        question: 'Can you repair all HVAC brands?',
        answer: (
          <span>
            Yes, our team is trained to repair all major HVAC brands and models. No matter what you have, we have the experience and parts to get it running again.
          </span>
        ),
      },
      {
        question: 'How do I know if I need a repair?',
        answer: (
          <span>
            If your system isn’t heating or cooling like it used to, making strange noises, or causing high energy bills, it’s time for a repair.{' '}
            <a href="/contact" className="text-blue-600 underline hover:text-orange-500">Schedule a diagnostic visit</a> to keep your system running smoothly.
          </span>
        ),
      },
      {
        question: 'Do you provide repair estimates?',
        answer: (
          <span>
            Yes! We provide clear, upfront estimates before any repair work begins. You’ll always know what to expect.
          </span>
        ),
      },
      {
        question: 'Is there a warranty on repairs?',
        answer: (
          <span>
            Yes, we stand behind our repairs with a satisfaction guarantee. Our work is done right the first time, and we’re always here if you have questions.
          </span>
        ),
      },
      {
        question: 'Do you offer maintenance after repairs?',
        answer: (
          <span>
            Yes, we recommend regular maintenance after repairs to prevent future issues.{' '}
            <a href="/contact" className="text-blue-600 underline hover:text-orange-500">Contact us</a> to learn more about our maintenance plans.
          </span>
        ),
      },
      {
        question: 'Are your repair technicians certified?',
        answer: (
          <span>
            Yes, all of our technicians are highly trained and certified. We’re dedicated to providing professional, reliable HVAC repairs every time.
          </span>
        ),
      },
      {
        question: 'What payment methods do you accept?',
        answer: (
          <span>
            For your convenience, we accept cash, check, and all major credit cards. We also offer financing for larger repairs—just ask us about your options!
          </span>
        ),
      },
    ],
  },
  {
    category: 'Maintenance',
    questions: [
      {
        question: 'Why is regular maintenance important?',
        answer: (
          <span>
            Regular maintenance helps keep your HVAC system running efficiently, extends its lifespan, and reduces the risk of costly breakdowns. It ensures you’re comfortable year-round and saves you money in the long run.{' '}
            <a href="/contact" className="text-blue-600 underline hover:text-orange-500">Ask us about our maintenance plans</a>.
          </span>
        ),
      },
      {
        question: 'What’s included in a maintenance visit?',
        answer: (
          <span>
            Our maintenance visits include a full system inspection, cleaning, and adjustments. We’ll check for potential problems and make sure everything’s operating at peak efficiency.{' '}
            <a href="/contact" className="text-blue-600 underline hover:text-orange-500">Schedule your maintenance today</a>!
          </span>
        ),
      },
      {
        question: 'Do you offer annual maintenance plans?',
        answer: (
          <span>
            Yes! We offer affordable, customizable maintenance plans to fit your needs. These plans keep your system in top condition and help prevent future issues.
          </span>
        ),
      },
      {
        question: 'How often should I schedule maintenance?',
        answer: (
          <span>
            We recommend having your HVAC system serviced at least once a year. For year-round comfort, consider scheduling tune-ups in spring for cooling and fall for heating.
          </span>
        ),
      },
      {
        question: 'Do you provide maintenance reminders?',
        answer: (
          <span>
            Yes! We’ll send you friendly reminders when it’s time for your next maintenance visit. That way, you never have to worry about missing a tune-up.
          </span>
        ),
      },
      {
        question: 'Can maintenance reduce my energy bills?',
        answer: (
          <span>
            Absolutely! Regular maintenance keeps your system running efficiently, which can lower your monthly energy bills. It’s an investment that pays for itself over time.
          </span>
        ),
      },
      {
        question: 'What if I notice an issue during maintenance?',
        answer: (
          <span>
            If we notice a potential problem during maintenance, we’ll discuss it with you right away.{' '}
            <a href="/contact" className="text-blue-600 underline hover:text-orange-500">Contact us</a> if you have concerns or questions—we’re here to help.
          </span>
        ),
      },
      {
        question: 'Is maintenance covered by warranty?',
        answer: (
          <span>
            In many cases, manufacturer warranties require regular maintenance. Our team can help you stay compliant and protect your warranty coverage.
          </span>
        ),
      },
      {
        question: 'How long does maintenance take?',
        answer: (
          <span>
            Maintenance usually takes about 1–2 hours, depending on your system. We’ll work efficiently and leave your system in great shape!
          </span>
        ),
      },
      {
        question: 'Can I do maintenance myself?',
        answer: (
          <span>
            While there are some things you can do—like changing air filters—professional maintenance ensures a thorough job. Our technicians have the experience and tools to keep your system performing at its best.
          </span>
        ),
      },
    ],
  },
  {
    category: 'Financing',
    questions: [
      {
        question: 'Do you offer financing?',
        answer: (
          <span>
            Yes! We partner with{' '}
            <a href="https://www.mysynchrony.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-orange-500">Synchrony</a> for competitive financing terms and{' '}
            <a href="https://www.ftlfinance.com/" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline hover:text-orange-500">FTL</a> for second-chance financing options. We want to make comfort affordable for every budget!
          </span>
        ),
      },
      {
        question: 'Who are your financing partners?',
        answer: (
          <span>
            We work with Synchrony for flexible terms and FTL for second-chance options if your credit needs a boost.{' '}
            <a href="/contact" className="text-blue-600 underline hover:text-orange-500">Contact us</a> to learn more about what works best for you!
          </span>
        ),
      },
      {
        question: 'How do I apply for financing?',
        answer: (
          <span>
            Applying is easy—just{' '}
            <a href="/contact" className="text-blue-600 underline hover:text-orange-500">contact us</a> or call{' '}
            <a href="tel:9363311339" className="text-blue-600 underline hover:text-orange-500">(936) 331-1339</a>. We’ll walk you through the process and help you find the best option.
          </span>
        ),
      },
      {
        question: 'Is there a credit check for financing?',
        answer: (
          <span>
            Yes, financing applications typically involve a credit check. Synchrony and FTL both offer quick approvals so you can get started right away.
          </span>
        ),
      },
      {
        question: 'Can I finance major repairs?',
        answer: (
          <span>
            Yes! Major repairs and new installations can be financed through Synchrony or FTL.{' '}
            <a href="/contact" className="text-blue-600 underline hover:text-orange-500">Ask us for details</a> and get your project moving today.
          </span>
        ),
      },
    ],
  },
];
export default function FAQs() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (questionIdx) => {
    setActiveQuestion(activeQuestion === questionIdx ? null : questionIdx);
  };

  return (
    <main className="bg-white text-gray-800">
      <Helmet>
        <title>FAQs | AMW Cooling & Heating LLC</title>
        <meta name="description" content="Find detailed answers to common HVAC questions to prepare for a productive service call with AMW Cooling & Heating LLC. Serving Conroe, TX and surrounding areas!" />
      </Helmet>

      {/* Patriotic Stripe */}
      <div className="h-1.5 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>

      {/* Hero Section */}
      <section className="bg-blue-900 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
            Find answers to common questions about our HVAC services, maintenance plans, and financing options.
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

      {/* FAQ Content */}
      <section className="py-12 bg-blue-900">
        {/* Red Header Bar */}
        <div className="bg-red-500 py-3 mb-10">
          <p className="text-center text-white text-sm font-medium tracking-widest uppercase">
            Find Answers to Common Questions
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-wide">BROWSE BY CATEGORY</h2>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {faqs.map((category, idx) => {
              const Icon = categoryIcons[category.category] || FaQuestionCircle;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveCategory(idx);
                    setActiveQuestion(null);
                  }}
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-bold transition shadow-lg ${
                    activeCategory === idx
                      ? 'bg-red-500 text-white'
                      : 'bg-white text-blue-900 hover:bg-blue-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.category}
                </button>
              );
            })}
          </div>

          {/* Questions List */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-blue-600">
            <div className="divide-y divide-gray-100">
              {faqs[activeCategory]?.questions.map((q, questionIdx) => {
                const isActive = activeQuestion === questionIdx;
                return (
                  <div key={questionIdx}>
                    <button
                      onClick={() => toggleQuestion(questionIdx)}
                      className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition"
                    >
                      <span className="font-medium text-blue-900 pr-4">{q.question}</span>
                      <FaChevronDown
                        className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform ${
                          isActive ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isActive && (
                      <div className="px-6 pb-5 text-gray-600 leading-relaxed border-l-2 border-blue-500 ml-6 mr-6 mb-4">
                        {q.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Question Count */}
          <p className="text-center text-sm text-blue-200 mt-6">
            Showing {faqs[activeCategory]?.questions.length} questions in {faqs[activeCategory]?.category}
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        <div className="h-1.5 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>
        <div className="bg-blue-900 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-wide">STILL HAVE QUESTIONS?</h2>
            <p className="text-lg text-blue-200 max-w-xl mx-auto mb-8">
              Our team is ready to help. Contact us for personalized answers to your HVAC questions.
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
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FinancingCTA />
      <MapSection />
      <ManufacturerCarousel />
      <Footer />
    </main>
  );
}
