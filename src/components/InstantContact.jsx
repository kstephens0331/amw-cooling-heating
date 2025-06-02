import React from 'react';

const InstantContact = () => {
  return (
    <a
      href="tel:9365877612" // Or use a link to your Calendly page
      className="fixed bottom-6 right-6 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition z-50"
      aria-label="Instant Contact"
    >
      Call Now
    </a>
  );
};

export default InstantContact;
