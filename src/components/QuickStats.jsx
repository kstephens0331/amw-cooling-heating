import WhyChoose from '../assets/images/DSC_1887.webp';

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
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-blue-900 mb-6">
          Why Choose Us
        </h2>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-12 min-h-[650px]">
          {/* Left Side Image */}
          <div className="w-full max-w-sm aspect-[7/8] overflow-hidden rounded-3xl shadow-md self-start">
            <img
              src={WhyChoose}
              alt="Josh meeting customer with tools in hand"
              width="420"
              height="480"
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>

  {/* Right Side Features */}
  <div className="lg:w-1/2 w-full min-h-[20rem] grid grid-cols-1 gap-6 order-2">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md p-4 flex items-start space-x-4"
              >
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-blue-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 leading-snug">
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