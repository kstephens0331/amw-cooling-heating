import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import hero from '../assets/images/DSC_2136-2.webp';

export default function HeroSection() {
  return (
    <section className="relative h-[75vh] w-full overflow-hidden">
      {/* Background Image */}
<img
  src={hero}
  srcSet={`${hero} 640w, ${hero} 1024w, ${hero} 1360w`}
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
  alt="AMW Cooling & Heating truck at sunset with phone number"
  width="1280"
  height="auto"
  className="absolute inset-0 w-full h-full object-cover object-bottom"
  fetchpriority="high"
/>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/5 z-10" />

      {/* CONTENT WRAPPER */}
      <div className="relative z-20 h-full w-full flex flex-col md:flex-row items-start justify-between px-4 sm:px-6 py-6 gap-y-6 md:gap-y-0">
        {/* LEFT CTA */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
           className="self-start text-black text-left max-w-md md:max-w-lg"
        >
            <h1 className="text-lg md:text-4xl font-bold">Your Trusted HVAC Experts in Texas</h1>
            <p className="text-xs md:text-base font-medium mt-2 mb-4">
            Reliable installations, repairs, and maintenance to keep your home comfortable year-round.
          </p>
          <Link
            to="/contact"
            className="inline-block px-3 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition text-xs font-semibold"
          >
            Schedule Your Consultation
          </Link>
        </motion.div>

        {/* RIGHT REVIEW CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="self-start text-black text-left md:text-right max-w-md md:max-w-lg md:ml-8"
        >
          <h2 className="text-base md:text-2xl font-bold mb-1">Enjoyed Our Service?</h2>
          <p className="text-xs md:text-base font-medium mb-3">
            Help other homeowners find us — leave a review on Google!
          </p>
          <a
            href="https://www.google.com/search?sca_esv=3689d8f87b454a04&rlz=1C1UEAD_enUS1100US1100&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-Ew1xWYRh3W0x95s4I1CY56p8ZDCU0RELO-yfbJ2A3BPTIYULwgDJs1JMco_ssAI31rRlsh52piMFkTrezcULB24LRNBJZFtx7Ep6HasQcQHtaXQRUKjSK2LYiEhZ9pKL6HGbGVCbuZrD8W32y3cPnVMTFXcMDE00lIt89eSmCQG6BqJXvg%3D%3D&q=AMW+Cooling+%26+Heating+%7C+HVAC+Repair+Emergency+Service+%7C+AC+Unit+Install+Conroe+Reviews&sa=X&ved=2ahUKEwi3i8Tws-qNAxXpM9AFHd7iD9cQ0bkNegQIKxAD&biw=1920&bih=945&dpr=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition text-sm md:text-base font-bold"
          >
            Leave a Google Review
          </a>
        </motion.div>
      </div>
    </section>
  );
}
