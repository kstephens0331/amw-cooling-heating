import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import AmericanStandard from '../assets/images/american-standard-heating-air-conditioning-seeklogo.webp';
import Bryant from '../assets/images/bryant-heating-cooling-systems-logo-png_seeklogo-304441.webp';
import Carrier from '../assets/images/CARR_BIG.webp';
import Copeland from '../assets/images/copeland-seeklogo.webp';
import Danfoss from '../assets/images/danfoss-1-logo-black-and-white.webp';
import EMR from '../assets/images/EMR_BIG.webp';
import Goodman from '../assets/images/goodman-ac-logo.webp';
import Honeywell from '../assets/images/HON_BIG.webp';
import Johnstone from '../assets/images/johnstone-supply-logo.svg';
import LII from '../assets/images/LII_BIG.webp';
import Rheem from '../assets/images/rheem-logo-png_seeklogo-321920.webp';
import Sporlan from '../assets/images/sporlan-logo-png-transparent.webp';
import WR from '../assets/images/wr-logo-png_seeklogo-154035.webp';
import York from '../assets/images/york-logo-png_seeklogo-155309.webp';
import Ruud from '../assets/images/Ruud.webp';


export default function ManufacturerCarousel() {
  const manufacturers = [
{ name: 'American Standard', src: AmericanStandard },
    { name: 'Bryant', src: Bryant },
    { name: 'Carrier', src: Carrier },
    { name: 'Copeland', src: Copeland },
    { name: 'Danfoss', src: Danfoss },
    { name: 'EMR', src: EMR },
    { name: 'Goodman', src: Goodman },
    { name: 'Honeywell', src: Honeywell },
    { name: 'Johnstone Supply', src: Johnstone },
    { name: 'LII', src: LII },
    { name: 'Rheem', src: Rheem },
    { name: 'Sporlan', src: Sporlan },
    { name: 'WR', src: WR },
    { name: 'York', src: York },
    { name: 'Ruud', src: Ruud },
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Trusted HVAC Partners</h2>
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
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
