import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function ManufacturerCarousel() {
  const manufacturers = [
    { name: 'Trane', src: '/images/trane-logo.png' },
    { name: 'Carrier', src: '/images/carrier-logo.png' },
    { name: 'American Standard', src: '/images/american-standard-logo.png' },
    { name: 'Daikin', src: '/images/daikin-logo.png' },
    { name: 'NATE Certified', src: '/images/nate-logo.png' },
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Trusted HVAC Partners</h2>
        <p className="text-gray-600 mb-6">Proudly working with the top manufacturers and certifications in home and commercial AC, heating, ventilation, and air quality solutions.</p>

        <Swiper
          modules={[Autoplay]} // Added
          spaceBetween={30}
          slidesPerView={3}
          loop
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {manufacturers.map((item, idx) => (
            <SwiperSlide key={idx} className="flex justify-center">
              <img
                src={item.src}
                alt={`${item.name} logo`}
                className="h-24 object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
