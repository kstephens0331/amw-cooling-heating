import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { FAQSchema } from './StructuredData';

// Shared FAQ accordion for location pages. Takes a town name and an array of
// { question, answer } objects, renders the same collapsible layout the service
// pages use, and emits matching FAQPage JSON-LD so the answers are eligible for
// rich results. Answers are plain strings so the schema text and the on-page
// text stay identical.
export default function LocationFAQ({ town, faqs }) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <FAQSchema faqs={faqs} />
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-8">
            {town} HVAC Questions, Answered
          </h3>
          <div className="space-y-2">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left px-4 py-3 flex justify-between items-center hover:bg-gray-50 transition"
                >
                  <span className="font-medium text-blue-900 pr-4">{faq.question}</span>
                  <FaChevronDown className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-4 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
