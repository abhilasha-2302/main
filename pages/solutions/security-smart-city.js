import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function SmartCitySecurityPage() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('surveillance');

  useEffect(() => {
    // Simulate video loading
    const timer = setTimeout(() => setIsVideoLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const industries = [
    'Smart Cities & Urban Development',
    'Public Safety & Law Enforcement',
    'Transport & Traffic Management',
    'Government & Urban Planning',
    'Surveillance & Security',
    'AI & Machine Learning',
    'Automated Access Control',
    'Telecommunications & IoT',
    'Automotive & Smart Parking Solutions'
  ];

  const keyOfferings = [
    {
      id: 'surveillance',
      title: 'Intelligent Surveillance Integration',
      description: 'Seamlessly enhances existing CCTV infrastructure with AI-powered anomaly detection and weapon recognition—enabling real-time threat identification and a proactive approach to urban safety.',
      icon: '🎯'
    },
    {
      id: 'crowd',
      title: 'Crowd Behavior Analysis',
      description: 'Leverages advanced machine learning to detect abnormal behaviors and crowd movement patterns—ensuring safety and control during public events, emergencies, and high-density gatherings.',
      icon: '👥'
    },
    {
      id: 'traffic',
      title: 'AI-Driven Traffic & Access Monitoring',
      description: 'Empowers smart mobility with License Plate Recognition (LPR) for secure access control, traffic flow analysis, and efficient smart parking—ensuring smooth, secure, and responsive urban transit systems.',
      icon: '🚗'
    },
    {
      id: 'ecosystem',
      title: 'Unified Infrastructure Ecosystem',
      description: 'Breaks down operational silos through seamless integration of security systems such as surveillance, access control, and parking—fostering centralized monitoring and enhanced data sharing across departments.',
      icon: '🔗'
    }
  ];

  const technologies = [
    {
      title: 'Artificial Intelligence & Deep Learning',
      description: 'for real-time video analytics, behavior recognition, and threat detection.',
      gradient: 'from-green-500 to-green-600'
    },
    {
      title: 'Computer Vision',
      description: 'for weapon detection, facial recognition, and license plate recognition (LPR).',
      gradient: 'from-green-600 to-green-700'
    },
    {
      title: 'Edge AI Processing',
      description: 'for faster decision-making and low-latency responses at the point of data capture.',
      gradient: 'from-green-400 to-green-500'
    },
    {
      title: 'Internet of Things (IoT)',
      description: 'to create interconnected surveillance, traffic, and access control systems.',
      gradient: 'from-green-700 to-green-800'
    },
    {
      title: 'Big Data & Cloud Infrastructure',
      description: 'for centralized data storage, advanced analytics, and seamless system scalability.',
      gradient: 'from-green-300 to-green-400'
    },
    {
      title: 'Machine Learning Algorithms',
      description: 'for predictive modeling, crowd pattern analysis, and system optimization.',
      gradient: 'from-green-800 to-green-900'
    }
  ];

  return (
    <>
      <Head>
        <title>Smart City Security & Infrastructure | Veripoint</title>
        <meta name="description" content="Transform urban intelligence with advanced surveillance & AI solutions for smart cities, public safety, and traffic management." />
      </Head>

      {/* Hero Video Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-10"></div>
        
        {/* Video Background */}
        <div className="absolute inset-0">
          {!isVideoLoaded ? (
            <div className="w-full h-full bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 animate-pulse flex items-center justify-center">
              <div className="text-white text-xl">Loading...</div>
            </div>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-900 via-green-900 to-gray-800 relative overflow-hidden">
              {/* Animated tech elements */}
              <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-green-300 rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-green-500 rounded-full animate-bounce"></div>
                <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-green-400 rounded-full animate-ping"></div>
              </div>
              
              {/* Grid overlay */}
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full" style={{
                  backgroundImage: `
                    linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: '50px 50px'
                }}></div>
              </div>
            </div>
          )}
        </div>

        {/* Hero Content */}
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="mb-6 animate-fade-in-up">
                <span className="inline-block px-4 py-2 bg-green-600/20 text-green-400 rounded-full text-sm font-medium backdrop-blur-sm border border-green-500/30">
                  Smart City Solutions
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up animation-delay-200">
                Transforming
                <span className="block bg-gradient-to-r from-green-400 to-green-200 bg-clip-text text-transparent">
                  Urban Intelligence
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl animate-fade-in-up animation-delay-400">
                with Advanced Surveillance & AI
              </p>
              
              <p className="text-lg text-gray-400 mb-10 max-w-3xl leading-relaxed animate-fade-in-up animation-delay-600">
                Modern urban environments demand agile, intelligent, and integrated security solutions. At the intersection of AI, IoT, and real-time analytics, we deliver comprehensive solutions designed to elevate public safety and optimize traffic management.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-800">
                <button className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  Explore Solutions
                </button>
                <button className="px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Industries We Serve
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-600 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                    {industry}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Offerings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Key Offerings
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive solutions designed to elevate public safety, optimize traffic management, and support smart urban development.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12 border-b border-gray-200">
            {keyOfferings.map((offering) => (
              <button
                key={offering.id}
                onClick={() => setActiveTab(offering.id)}
                className={`px-6 py-3 mx-2 mb-4 font-semibold transition-all duration-300 border-b-2 ${
                  activeTab === offering.id
                    ? 'text-green-600 border-green-600'
                    : 'text-gray-600 border-transparent hover:text-green-600'
                }`}
              >
                <span className="mr-2">{offering.icon}</span>
                {offering.title}
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <div className="max-w-4xl mx-auto">
            {keyOfferings.map((offering) => (
              <div
                key={offering.id}
                className={`transition-all duration-500 ${
                  activeTab === offering.id ? 'opacity-100' : 'opacity-0 hidden'
                }`}
              >
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8">
                  <div className="flex items-start space-x-6">
                    <div className="text-6xl">{offering.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {offering.title}
                      </h3>
                      <p className="text-lg leading-relaxed text-gray-700">
                        {offering.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technologies We Use
            </h2>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              To deliver intelligent, scalable, and future-ready solutions, we leverage cutting-edge technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="group relative bg-gray-800 p-8 rounded-2xl hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-green-500/50"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${tech.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 bg-gradient-to-r ${tech.gradient} rounded-lg mb-6 flex items-center justify-center`}>
                    <div className="w-6 h-6 bg-white rounded-sm"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                    {tech.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your City?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Discover how our intelligent surveillance and AI solutions can enhance public safety and optimize urban infrastructure management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-green-600 hover:bg-gray-100 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Schedule Consultation
            </button>
            <button className="px-8 py-4 border-2 border-white text-white hover:bg-white/10 rounded-lg font-semibold transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
      `}</style>
    </>
  );
}