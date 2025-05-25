import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ServicesSection() {
  const [hoverStates, setHoverStates] = useState({
    silicon: false,
    aiml: false,
    verification: false
  });
  
  const services = [
    {
      id: 'silicon',
      title: 'Silicon Design Verification Solution',
      image: '/images/sisdcvp.svg',
      link: '/services',
    },
    {
      id: 'aiml',
      title: 'AI Enterprise Solutions',
      image: '/images/ai.svg',
      link: '/solutions/ai-ml',
    },
    {
      id: 'verification',
      title: ' Silicon Design Verification Services',
      image: '/images/verification.svg',
      link: '/services',
    },
  ];

  const handleMouseEnter = (id) => {
    setHoverStates(prev => ({ ...prev, [id]: true }));
  };

  const handleMouseLeave = (id) => {
    setHoverStates(prev => ({ ...prev, [id]: false }));
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-6">
          Solutions and Services for Semiconductor and Beyond
        </h2>
        <p className="text-lg text-black mb-12 leading-relaxed">
          Veripoint is a valued partner for global silicon to systems design across a wide range of vertical markets, empowering technology innovators everywhere with the industry's most comprehensive and trusted solutions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300"
              onMouseEnter={() => handleMouseEnter(service.id)}
              onMouseLeave={() => handleMouseLeave(service.id)}
            >
              <div className="h-64 relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 
                  className={`text-xl font-semibold mb-2 transition-transform duration-300 ${
                    hoverStates[service.id] ? 'transform -translate-y-2' : ''
                  }`}
                >
                  {service.title}
                </h3>
                
                <div 
                  className={`transition-opacity duration-300 ${
                    hoverStates[service.id] ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Link 
                    href={service.link} 
                    className="text-sm text-white hover:underline"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}