import React from 'react';
import { Link } from 'react-router-dom';
import { FaSnowflake, FaFire, FaWind } from 'react-icons/fa';

const services = [
  {
    icon: FaSnowflake,
    title: 'AC Services',
    items: [
      'AC Repair & Diagnostics',
      'AC Installation',
      'Preventative Maintenance',
      'Emergency Cooling',
    ],
    link: '/services/ac-repair',
    iconBg: 'bg-blue-900',
  },
  {
    icon: FaFire,
    title: 'Heating Services',
    items: [
      'Furnace Repair & Installation',
      'Heat Pump Services',
      'Heating Tune-Ups',
      'Emergency Heating',
    ],
    link: '/services/heating-repair',
    iconBg: 'bg-red-500',
  },
  {
    icon: FaWind,
    title: 'Indoor Air Quality',
    items: [
      'Air Purifiers',
      'Dehumidifiers & Humidifiers',
      'Dryer Vent Cleaning',
    ],
    link: '/services/indoor-air-quality',
    iconBg: 'bg-blue-900',
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-blue-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-center text-white mb-12 tracking-wide italic">
          HEATING + COOLING SOLUTIONS
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-full ${service.iconBg} flex items-center justify-center`}>
                  <service.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-blue-900">{service.title}</h3>
              </div>

              <ul className="space-y-2 mb-4">
                {service.items.map((item) => (
                  <li key={item} className="text-gray-600 text-sm flex items-start gap-2">
                    <span className="text-gray-400">—</span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                to={service.link}
                className="text-blue-900 text-sm font-semibold hover:text-red-500 transition"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/services"
            className="inline-block bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
