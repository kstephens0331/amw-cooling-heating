import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function ManufacturerCarousel() {
  const manufacturers = [
    { name: 'American Standard', src: '/assets/images/american-standard-heating-air-conditioning-seeklogo.webp' },
    { name: 'Bryant', src: '/assets/images/bryant-heating-cooling-systems-logo-png_seeklogo-304441.webp' },
    { name: 'Carrier', src: '/assets/images/CARR_BIG.webp' },
    { name: 'Copeland', src: '/assets/images/copeland-seeklogo.webp' },
    { name: 'Danfoss', src: '/assets/images/danfoss-1-logo-black-and-white.webp' },
    { name: 'Emerson', src: '/assets/images/EMR_BIG.webp' },
    { name: 'Goodman', src: '/assets/images/goodman-ac-logo.webp' },
    { name: 'Honeywell', src: '/assets/images/HON_BIG.webp' },
    { name: 'Johnstone Supply', src: '/assets/images/johnstone-supply-logo.svg' },
    { name: 'Lennox', src: '/assets/images/LII_BIG.webp' },
    { name: 'Rheem', src: '/assets/images/rheem-logo-png_seeklogo-321920.webp' },
    { name: 'Sporlan', src: '/assets/images/sporlan-logo-png-transparent.webp' },
    { name: 'White-Rodgers', src: '/assets/images/wr-logo-png_seeklogo-154035.webp' },
    { name: 'York', src: '/assets/images/york-logo-png_seeklogo-155309.webp' },
    { name: 'Ruud', src: '/assets/images/Ruud.webp' },
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Trusted Partners</h2>
        <p className="text-gray-600 mb-6">
          Proudly working with the top manufacturers and certifications in home and commercial AC, heating, ventilation, and air quality solutions.
        </p>

        <Swiper
          modules={[Autoplay]}
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
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
