import { FaPhone, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function MobileCTABar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      {/* Gradient shadow above the bar */}
      <div className="h-4 bg-gradient-to-t from-white to-transparent"></div>

      {/* CTA Bar */}
      <div className="bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <div className="flex">
          {/* Call Button */}
          <a
            href="tel:+19363311339"
            className="flex-1 flex items-center justify-center gap-2 py-4 bg-blue-600 text-white font-bold text-base active:bg-blue-700 transition"
          >
            <FaPhone className="w-5 h-5" />
            Call Now
          </a>

          {/* Schedule Button */}
          <Link
            to="/contact"
            className="flex-1 flex items-center justify-center gap-2 py-4 bg-orange-500 text-white font-bold text-base active:bg-orange-600 transition"
          >
            <FaCalendarAlt className="w-5 h-5" />
            Schedule
          </Link>
        </div>
      </div>
    </div>
  );
}
