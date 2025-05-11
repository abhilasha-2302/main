import Link from 'next/link';
import Image from 'next/image';

export default function ServicesList() {
  const services = [
    {
      title: 'UVM-based Testbench Development',
      description: 'Comprehensive testbench solutions using industry-standard Universal Verification Methodology.',
      icon: '/images/icons/uvm.svg',
    },
    {
      title: 'Functional Verification',
      description: 'End-to-end functional verification to ensure design correctness and compliance with specifications.',
      icon: '/images/icons/functional.svg',
    },
    {
      title: 'Assertion-based Verification',
      description: 'Robust verification using assertions to catch design issues early in the development cycle.',
      icon: '/images/icons/assertion.svg',
    },
    {
      title: 'Formal Methods',
      description: 'Mathematical techniques to verify the correctness of hardware designs without test vectors.',
      icon: '/images/icons/formal.svg',
    },
    {
      title: 'Low-power Validation',
      description: 'UPF/CPF-based verification to ensure optimal power performance of your designs.',
      icon: '/images/icons/low-power.svg',
    },
    {
      title: 'Performance Benchmarking',
      description: 'Comprehensive analysis to evaluate and optimize the performance of your designs.',
      icon: '/images/icons/performance.svg',
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Key Services</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of verification services designed to meet the most demanding requirements
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <div className="relative h-8 w-8">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/services/capabilities" 
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-200"
          >
            Explore Our Capabilities
          </Link>
        </div>
      </div>
    </div>
  );
}