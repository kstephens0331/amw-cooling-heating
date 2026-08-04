import { trackPhoneClick } from '../utils/analytics';

const InstantContact = () => {
  return (
    <a
      href="tel:+19363311339" onClick={() => trackPhoneClick('floating_button')}
      className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition z-50"
      aria-label="Call AMW Cooling and Heating"
    >
      Call Now
    </a>
  );
};

export default InstantContact;
