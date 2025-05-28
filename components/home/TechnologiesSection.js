import React from 'react';

export default function TechnologiesSection() {
  const handleNavigation = (section) => {
    const routes = {
      'ai': '/solutions/ai-ml',
      'verification': '/services', 
      'blockchain': '/solutions/blockchain'
    };
    
    console.log(`Navigating to: ${routes[section]}`);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl font-light text-black mb-4 tracking-wide">
            Technologies & Industry Solutions
          </h2>
          <p className="text-black text-lg leading-relaxed">
            We deliver enterprise-grade technology solutions across artificial intelligence, verification services, and blockchain development to drive business transformation.
          </p>
        </div>
        
        <div className="space-y-1">
          {/* AI/ML Solutions */}
          <div 
            onClick={() => handleNavigation('ai')}
            className="group cursor-pointer border-l-4 border-transparent hover:border-green-600 transition-all duration-300"
          >
            <div className="bg-white hover:bg-gray-50 p-8 flex items-center justify-between transition-colors duration-300">
              <div className="flex items-center space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gray-100 flex items-center justify-center group-hover:bg-green-50 transition-colors duration-300">
                    <svg className="w-6 h-6 text-gray-600 group-hover:text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-black group-hover:text-green-700 transition-colors duration-300 mb-3">
                    AI & Machine Learning Solutions
                  </h3>
                  <p className="text-black text-base leading-relaxed max-w-4xl">
                    Advanced artificial intelligence and machine learning solutions for process automation, predictive analytics, and intelligent decision-making systems. Our enterprise-grade implementations help organizations optimize operations and unlock data-driven insights.
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 ml-8">
                <svg className="w-6 h-6 text-gray-400 group-hover:text-green-600 transform group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Verification Services */}
          <div 
            onClick={() => handleNavigation('verification')}
            className="group cursor-pointer border-l-4 border-transparent hover:border-green-600 transition-all duration-300"
          >
            <div className="bg-white hover:bg-gray-50 p-8 flex items-center justify-between transition-colors duration-300">
              <div className="flex items-center space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gray-100 flex items-center justify-center group-hover:bg-green-50 transition-colors duration-300">
                    <svg className="w-6 h-6 text-gray-600 group-hover:text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-black group-hover:text-green-700 transition-colors duration-300 mb-3">
                    Design Verification Services
                  </h3>
                  <p className="text-black text-base leading-relaxed max-w-4xl">
                    Comprehensive verification and validation services ensuring system reliability, compliance, and performance optimization. We provide rigorous testing methodologies and quality assurance for mission-critical applications across industries.
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 ml-8">
                <svg className="w-6 h-6 text-gray-400 group-hover:text-green-600 transform group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Blockchain Solutions */}
          <div 
            onClick={() => handleNavigation('blockchain')}
            className="group cursor-pointer border-l-4 border-transparent hover:border-green-600 transition-all duration-300"
          >
            <div className="bg-white hover:bg-gray-50 p-8 flex items-center justify-between transition-colors duration-300">
              <div className="flex items-center space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gray-100 flex items-center justify-center group-hover:bg-green-50 transition-colors duration-300">
                    <svg className="w-6 h-6 text-gray-600 group-hover:text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-black group-hover:text-green-700 transition-colors duration-300 mb-3">
                    Blockchain Development Solutions
                  </h3>
                  <p className="text-black text-base leading-relaxed max-w-4xl">
                    Secure blockchain solutions and decentralized applications built for transparency, immutability, and trust. Our development expertise spans smart contracts, DeFi protocols, and enterprise blockchain implementations for various industries.
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 ml-8">
                <svg className="w-6 h-6 text-gray-400 group-hover:text-green-600 transform group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}