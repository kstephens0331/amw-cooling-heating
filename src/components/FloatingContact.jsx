import React from 'react';

const FloatingContact = () => {
  return (
    <a
      href="/contact"
      className="fixed bottom-20 right-6 bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-blue-700 transition z-50 text-sm font-semibold"
    >
      Contact Us
    </a>
  );
};

export default FloatingContact;