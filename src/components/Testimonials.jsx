import React, { useEffect } from 'react';

export default function Testimonials1() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.trustindex.io/loader.js?9c9a1c847f06430b3996053b6b0';
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);

    // Cleanup
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">What Our Customers Are Saying</h2>

        {/* Trustindex Widget Placeholder */}
        <div className="ti-widget"></div>
      </div>
    </section>
  );
}
