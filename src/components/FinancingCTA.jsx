import React from 'react';

const FinancingCTA = () => {
  return (
    <section className="py-8 bg-blue-50 text-center">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-blue-900 mb-2">
          Flexible Financing Options for Your Comfort
        </h2>
        <p className="text-gray-700 mb-4">
          We partner with Synchrony and FTL to bring you financing solutions that fit your needs and budget.
          Synchrony offers competitive terms, while FTL provides second-chance financing to ensure everyone has access to reliable HVAC solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.mysynchrony.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
          >
            Apply with Synchrony
          </a>
          <a
            href="https://www.ftlfinance.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-orange-500 text-white rounded shadow hover:bg-orange-600 transition"
          >
            Apply with FTL (Second Chance)
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinancingCTA;