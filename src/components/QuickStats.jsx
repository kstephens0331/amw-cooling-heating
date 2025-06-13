// src/components/QuickStats.jsx
import React from 'react';
import { motion } from 'framer-motion';
import WhyChoose from '../assets/images/DSC_1930.jpg';

const stats = [
  { number: '8+', label: 'Years of Experience' },
  { number: '100+', label: 'Happy Customers' },
  { number: '5PM - 9PM', label: 'Emergency Services' },
  { number: '100%', label: 'Customer Satisfaction' },
];

const features = [
  {
    icon: '🔧',
    title: 'Expert Installation Services',
    description: 'Our experienced team ensures seamless HVAC installations tailored to your home\'s unique needs.',
  },
  {
    icon: '🛠️',
    title: 'Reliable Repair Solutions',
    description: 'Fast and efficient repairs to restore your comfort quickly and minimize downtime.',
  },
  {
    icon: '🔄',
    title: 'Comprehensive Maintenance Plans',
    description: 'Keep your system running at peak efficiency and extend its lifespan with our regular maintenance services.',
  },
  {
    icon: '💰',
    title: 'Flexible Financing Options',
    description: 'We offer flexible and affordable payment options to make comfort accessible for every budget.',
  },
];

export default function QuickStats() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold text-center text-blue-900 mb-4"
        >
          Our Impact in Numbers
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-12"
        >
          {stats.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">{item.number}</div>
              <div className="text-sm md:text-base text-gray-700">{item.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Divider / Visual break */}
        <div className="my-12 border-t border-gray-300 w-1/4 mx-auto"></div>

        {/* Intro text */}
        <p className="text-center text-gray-600 mb-8">
          Our dedication to customer comfort extends beyond the numbers.
        </p>

        {/* Why Choose Us */}
        <h2 className="text-2xl md:text-4xl font-semibold text-center text-blue-900 mb-4">
  Why Choose Us
</h2>
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
          {/* Left Side Image */}
          <div className="w-full lg:max-w-md overflow-hidden rounded-3xl shadow-md order-1 bg-white">
            <img
              src={WhyChoose}
              alt="Josh and Angelica"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Right Side Boxes */}
          <div className="lg:w-1/2 w-full min-h-[20rem] grid grid-cols-1 gap-4 order-2">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md p-4 flex items-start space-x-4"
              >
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <h3 className="text-xl md:text-1xl font-semibold text-blue-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-700">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
