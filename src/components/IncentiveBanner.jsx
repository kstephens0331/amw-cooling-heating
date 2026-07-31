import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { IoClose } from 'react-icons/io5';
import { FaPhone, FaCalendarCheck } from 'react-icons/fa';

const STORAGE_KEY = 'amw_promo_dismissed';

const isActivePromoWindow = (now = new Date()) => {
  const start = new Date(2026, 3, 1, 0, 0, 0);   // Apr 1, 2026
  const end   = new Date(2026, 5, 1, 0, 0, 0);   // Jun 1, 2026 (exclusive)
  return now >= start && now < end;
};

const IncentiveBanner = () => {
  const [dismissed, setDismissed] = useState(true); // start hidden to avoid flash
  const active = useMemo(() => isActivePromoWindow(), []);

  useEffect(() => {
    const flag = window.localStorage.getItem(STORAGE_KEY);
    if (flag !== '1') setDismissed(false);
  }, []);

  const handleClose = () => {
    setDismissed(true);
    window.localStorage.setItem(STORAGE_KEY, '1');
  };

  if (!active || dismissed) return null;

  return (
    <div className="relative w-full bg-red-500 text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 pr-10 flex flex-col md:flex-row items-center gap-3 md:gap-4">
        <div className="flex-1 text-center md:text-left">
          <p className="text-base md:text-lg font-bold tracking-wide">
            April &amp; May Special: 10% OFF HVAC Repairs
          </p>
          <p className="text-xs md:text-sm text-white/90">
            Excludes replacements and service calls. Veteran-owned, licensed, and insured.
          </p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <a
            href="tel:+19363311339"
            className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-bold text-sm px-4 py-2 rounded-lg transition"
          >
            <FaPhone className="w-4 h-4" />
            (936) 331-1339
          </a>
          <Link
            href="/contact#book-a-service"
            className="inline-flex items-center gap-2 bg-white hover:bg-blue-50 text-blue-900 font-bold text-sm px-4 py-2 rounded-lg transition"
          >
            <FaCalendarCheck className="w-4 h-4" />
            Schedule
          </Link>
        </div>
      </div>
      <button
        aria-label="Dismiss promotion"
        onClick={handleClose}
        className="absolute top-2 right-2 p-1 rounded-full hover:bg-white/10 transition"
      >
        <IoClose size={20} />
      </button>
    </div>
  );
};

export default IncentiveBanner;
