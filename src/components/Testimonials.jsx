import React from 'react';

export default function Testimonials() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-4">What Our Customers Say</h2>
        <p className="text-sm md:text-base text-gray-700 text-center mb-8">
          Hear from our happy clients who trust AMW Cooling & Heating for their comfort needs.
        </p>
        <div
          className="max-w-3xl mx-auto"
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.trustindex.io/embed/YOUR_WIDGET_CODE" width="100%" height="400" frameborder="0" scrolling="no" allowfullscreen></iframe>`,
          }}
        ></div>
      </div>
    </section>
  );
}