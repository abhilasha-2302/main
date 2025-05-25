import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function EnergyUtilitiesPage() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    // Simulate video loading
    const timer = setTimeout(() => setIsVideoLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const industries = [
    'Energy & Utilities',
    'Power Grids & Smart Grid Solutions',
    'Oil & Gas',
    'Renewable Energy (Solar, Wind, Hydro)',
    'Infrastructure & Asset Management',
    'Telecommunications & IoT',
    'Smart Metering & Billing',
    'Government & Public Sector (Energy Policy & Regulation)',
    'Regulatory Compliance'
  ];

  const keyOfferings = [
    {
      title: 'Smart Grid Optimization Suite',
      description: 'Harnessing AI and real-time data, our solution integrates seamlessly with SCADA/EMS systems to forecast demand-supply fluctuations and enable instant load balancing—enhancing grid reliability and operational responsiveness.',
      icon: '⚡'
    },
    {
      title: 'Predictive Maintenance for Critical Assets',
      description: 'Our IoT-powered monitoring tools analyze performance data to anticipate equipment failures before they occur. This ensures timely maintenance, minimizes costly downtime, and extends the life of valuable infrastructure.',
      icon: '🔧'
    },
    {
      title: 'Smart Meter Data Analytics',
      description: 'Leveraging advanced analytics, our platform detects abnormal energy usage, identifies potential theft, and ensures billing accuracy—helping utilities increase revenue protection and operational efficiency.',
      icon: '📊'
    },
    {
      title: 'Dynamic Tariff Management Engine',
      description: 'Utilizing real-time consumption patterns, market dynamics, and regulatory inputs, our engine enables utilities to offer flexible, consumption-based pricing models—promoting fairness, transparency, and smarter energy use.',
      icon: '💰'
    }
  ];

  const technologies = [
    {
      name: 'Artificial Intelligence & Machine Learning',
      description: 'for forecasting, anomaly detection, and optimization of grid operations.'
    },
    {
      name: 'Internet of Things (IoT) & Edge Devices',
      description: 'to monitor infrastructure in real time and enable responsive grid control.'
    },
    {
      name: 'SCADA & EMS Integration',
      description: 'for seamless communication between digital intelligence layers and operational systems.'
    },
    {
      name: 'Big Data Analytics',
      description: 'for advanced meter data management, asset health analysis, and strategic decision-making.'
    },
    {
      name: 'Cloud-Based Platforms',
      description: 'for scalable, centralized control, and cross-system visibility.'
    },
    {
      name: 'Cybersecurity & Compliance Modules',
      description: 'to protect energy data and ensure adherence to evolving regulations.'
    }
  ];

  return (
    <>
      <Head>
        <title>Energy, Utilities & Power Grids - Veripoint Technologies</title>
        <meta name="description" content="Empowering the Energy Sector with Intelligent Grid Technologies" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50">
        {/* Hero Video Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-gradient-to-r from-blue-900/90 via-green-800/80 to-teal-900/90 relative">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
                  {Array.from({ length: 48 }).map((_, i) => (
                    <div
                      key={i}
                      className="border border-white/10 relative overflow-hidden"
                      style={{
                        animation: `pulse ${2 + (i % 3)}s ease-in-out infinite ${i * 0.1}s`
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-green-400/20 transform rotate-45 scale-110"></div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Floating Energy Icons */}
              <div className="absolute inset-0">
                {['⚡', '🔋', '☀️', '💨', '🔌', '⚙️'].map((icon, index) => (
                  <div
                    key={index}
                    className="absolute text-white/30 text-4xl animate-bounce"
                    style={{
                      left: `${20 + index * 15}%`,
                      top: `${20 + (index % 3) * 20}%`,
                      animationDelay: `${index * 0.5}s`,
                      animationDuration: `${3 + index}s`
                    }}
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-green-600/20 backdrop-blur-sm border border-green-400/30 rounded-full text-green-200 text-sm font-medium mb-6">
                Energy, Utilities & Power Grids
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-green-200 bg-clip-text text-transparent leading-tight">
              Empowering the Energy Sector
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-light mb-8 text-blue-100">
              with Intelligent Grid Technologies
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              The energy landscape is evolving rapidly, driven by the need for sustainability, efficiency, and resilience. 
              We provide advanced solutions that help modernize power infrastructure, streamline operations, and ensure 
              smarter energy management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Explore Solutions
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full relative">
              <div className="w-1 h-3 bg-white/70 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="group p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-green-600 to-blue-600 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-800 font-medium group-hover:text-green-700 transition-colors duration-300">
                      {industry}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Intelligent Energy Solutions for a Resilient, Data-Driven Future
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Modern energy systems face increasing pressure to deliver reliable service, reduce losses, and integrate 
                clean energy sources. Our suite of AI- and IoT-driven technologies enables dynamic grid management, 
                asset intelligence, and transparent energy usage across the entire energy value chain.
              </p>
            </div>
          </div>
        </section>

        {/* Key Offerings */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Offerings</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {keyOfferings.map((offering, index) => (
                <div
                  key={index}
                  className="group p-8 bg-gradient-to-br from-blue-50 via-white to-green-50 rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {offering.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors duration-300">
                        {offering.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {offering.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-green-900 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-6 grid-rows-4 h-full w-full">
              {Array.from({ length: 24 }).map((_, i) => (
                <div
                  key={i}
                  className="border border-white/20 relative"
                  style={{
                    animation: `pulse ${3 + (i % 4)}s ease-in-out infinite ${i * 0.2}s`
                  }}
                ></div>
              ))}
            </div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Technologies We Use</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                To deliver cutting-edge energy solutions, we integrate a powerful mix of technologies across 
                digital, operational, and environmental layers
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 hover:border-green-400/50 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="w-6 h-6 bg-white rounded opacity-80"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-green-300 transition-colors duration-300">
                    {tech.name}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 via-blue-600 to-teal-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Energy Infrastructure?
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Discover how our intelligent solutions can optimize your grid operations, 
              reduce costs, and enhance sustainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }
      `}</style>
    </>
  );
}

// import { useState, useEffect } from 'react';
// import Head from 'next/head';

// export default function EnergyUtilitiesPage() {
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const industries = [
//     'Energy & Utilities',
//     'Power Grids & Smart Grid Solutions',
//     'Oil & Gas',
//     'Renewable Energy (Solar, Wind, Hydro)',
//     'Infrastructure & Asset Management',
//     'Telecommunications & IoT',
//     'Smart Metering & Billing',
//     'Government & Public Sector (Energy Policy & Regulation)',
//     'Regulatory Compliance'
//   ];

//   const keyOfferings = [
//     {
//       title: 'Smart Grid Optimization Suite',
//       description: 'Harnessing AI and real-time data, our solution integrates seamlessly with SCADA/EMS systems to forecast demand-supply fluctuations and enable instant load balancing—enhancing grid reliability and operational responsiveness.'
//     },
//     {
//       title: 'Predictive Maintenance for Critical Assets',
//       description: 'Our IoT-powered monitoring tools analyze performance data to anticipate equipment failures before they occur. This ensures timely maintenance, minimizes costly downtime, and extends the life of valuable infrastructure.'
//     },
//     {
//       title: 'Smart Meter Data Analytics',
//       description: 'Leveraging advanced analytics, our platform detects abnormal energy usage, identifies potential theft, and ensures billing accuracy—helping utilities increase revenue protection and operational efficiency.'
//     },
//     {
//       title: 'Dynamic Tariff Management Engine',
//       description: 'Utilizing real-time consumption patterns, market dynamics, and regulatory inputs, our engine enables utilities to offer flexible, consumption-based pricing models—promoting fairness, transparency, and smarter energy use.'
//     }
//   ];

//   const technologies = [
//     {
//       name: 'Artificial Intelligence & Machine Learning',
//       description: 'for forecasting, anomaly detection, and optimization of grid operations.'
//     },
//     {
//       name: 'Internet of Things (IoT) & Edge Devices',
//       description: 'to monitor infrastructure in real time and enable responsive grid control.'
//     },
//     {
//       name: 'SCADA & EMS Integration',
//       description: 'for seamless communication between digital intelligence layers and operational systems.'
//     },
//     {
//       name: 'Big Data Analytics',
//       description: 'for advanced meter data management, asset health analysis, and strategic decision-making.'
//     },
//     {
//       name: 'Cloud-Based Platforms',
//       description: 'for scalable, centralized control, and cross-system visibility.'
//     },
//     {
//       name: 'Cybersecurity & Compliance Modules',
//       description: 'to protect energy data and ensure adherence to evolving regulations.'
//     }
//   ];

//   return (
//     <>
//       <Head>
//         <title>Energy, Utilities & Power Grids - Veripoint Technologies</title>
//         <meta name="description" content="Empowering the Energy Sector with Intelligent Grid Technologies" />
//       </Head>

//       {/* Hero Video Section */}
//       <section className="relative h-screen bg-gray-900 flex items-center">
//         {/* Simple video placeholder with subtle overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-800/60">
//           <div className="w-full h-full bg-gray-800 opacity-40"></div>
//         </div>
        
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="max-w-4xl">
//             <p className="text-green-400 text-sm font-medium tracking-wide uppercase mb-4">
//               Energy, Utilities & Power Grids
//             </p>
//             <h1 className="text-5xl md:text-6xl font-light text-white mb-6 leading-tight">
//               Empowering the Energy Sector with{' '}
//               <span className="font-normal text-green-400">Intelligent Grid Technologies</span>
//             </h1>
//             <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl">
//               The energy landscape is evolving rapidly, driven by the need for sustainability, efficiency, and resilience. 
//               We provide advanced solutions that help modernize power infrastructure, streamline operations, and ensure 
//               smarter energy management.
//             </p>
//             <div className="flex space-x-4">
//               <button className="px-8 py-3 bg-green-600 text-white font-medium rounded hover:bg-green-700 transition-colors duration-200">
//                 Learn More
//               </button>
//               <button className="px-8 py-3 border border-gray-400 text-gray-300 font-medium rounded hover:border-green-400 hover:text-green-400 transition-colors duration-200">
//                 Contact Us
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Industries Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="mb-16">
//             <h2 className="text-3xl font-light text-gray-900 mb-4">Industries We Serve</h2>
//             <div className="w-16 h-px bg-green-600 mb-8"></div>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {industries.map((industry, index) => (
//               <div
//                 key={index}
//                 className="p-6 border border-gray-200 hover:border-green-300 transition-colors duration-200"
//               >
//                 <span className="text-gray-800 font-medium">{industry}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Overview Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="max-w-4xl">
//             <h2 className="text-3xl font-light text-gray-900 mb-6">
//               Intelligent Energy Solutions for a Resilient, Data-Driven Future
//             </h2>
//             <p className="text-lg text-gray-600 leading-relaxed">
//               Modern energy systems face increasing pressure to deliver reliable service, reduce losses, and integrate 
//               clean energy sources. Our suite of AI- and IoT-driven technologies enables dynamic grid management, 
//               asset intelligence, and transparent energy usage across the entire energy value chain.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Key Offerings */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="mb-16">
//             <h2 className="text-3xl font-light text-gray-900 mb-4">Key Offerings</h2>
//             <div className="w-16 h-px bg-green-600"></div>
//           </div>
          
//           <div className="space-y-16">
//             {keyOfferings.map((offering, index) => (
//               <div key={index} className="max-w-4xl">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-4">
//                   {offering.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed text-lg">
//                   {offering.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Technologies */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="mb-16">
//             <h2 className="text-3xl font-light text-gray-900 mb-4">Technologies We Use</h2>
//             <div className="w-16 h-px bg-green-600 mb-8"></div>
//             <p className="text-lg text-gray-600 max-w-4xl">
//               To deliver cutting-edge energy solutions, we integrate a powerful mix of technologies across 
//               digital, operational, and environmental layers:
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {technologies.map((tech, index) => (
//               <div key={index} className="flex space-x-4">
//                 <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
//                 <div>
//                   <h3 className="font-semibold text-gray-900 mb-2">
//                     {tech.name}
//                   </h3>
//                   <p className="text-gray-600">
//                     {tech.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gray-900">
//         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-light text-white mb-6">
//             Ready to Transform Your Energy Infrastructure?
//           </h2>
//           <p className="text-lg text-gray-300 mb-8">
//             Discover how our intelligent solutions can optimize your grid operations, 
//             reduce costs, and enhance sustainability.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="px-8 py-3 bg-green-600 text-white font-medium rounded hover:bg-green-700 transition-colors duration-200">
//               Schedule Consultation
//             </button>
//             <button className="px-8 py-3 border border-gray-400 text-gray-300 font-medium rounded hover:border-green-400 hover:text-green-400 transition-colors duration-200">
//               Download Brochure
//             </button>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }