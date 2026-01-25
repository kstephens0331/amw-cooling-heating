import React from 'react';
import { FaShieldAlt, FaAward, FaCheckCircle, FaThumbsUp } from 'react-icons/fa';

const features = [
  {
    icon: FaShieldAlt,
    title: 'Veteran-Owned',
    description: 'Proudly serving our community with military discipline and values.',
    color: 'bg-blue-900',
  },
  {
    icon: FaAward,
    title: 'Licensed & Insured',
    description: 'Fully certified for your peace of mind.',
    color: 'bg-red-500',
  },
  {
    icon: FaCheckCircle,
    title: '100% Satisfaction',
    description: 'Your comfort is our top priority.',
    color: 'bg-blue-900',
  },
  {
    icon: FaThumbsUp,
    title: 'Quality Service',
    description: "We're not happy until you're comfortable.",
    color: 'bg-red-500',
  },
];

export default function WhyChooseAMW() {
  return (
    <section className="py-12 bg-gray-100">
      {/* Red Header Bar */}
      <div className="bg-red-500 py-3 mb-8">
        <p className="text-center text-white text-sm font-medium tracking-widest uppercase">
          Fast, Honest, and Reliable
        </p>
      </div>

      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-center text-blue-900 mb-10 tracking-wide">
          WHY CHOOSE AMW?
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className={`w-14 h-14 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-blue-900 text-sm mb-1">{feature.title}</h3>
              <p className="text-gray-600 text-xs leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
