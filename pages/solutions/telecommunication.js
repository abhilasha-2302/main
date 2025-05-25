import Head from 'next/head';
import Link from 'next/link';

export default function TelecommunicationPage() {
  return (
    <>
      <Head>
        <title>Telecommunication AI/ML Solutions | Veripoint Technologies</title>
        <meta name="description" content="AI-Powered Telecom Enterprise Solutions with self-healing networks, traffic optimization, and automated customer support for telecommunications and ISPs." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section with Video */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/api/placeholder/1920/1080" type="video/mp4" />
            {/* Fallback placeholder */}
            <img src="/api/placeholder/1920/1080" alt="Telecommunication background" className="w-full h-full object-cover" />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AI-Powered Telecom Enterprise Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Transform your telecommunications infrastructure with intelligent self-healing networks, 
            dynamic traffic optimization, and automated customer support systems.
          </p>
          
          {/* Industry Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              Telecommunications & ISPs
            </span>
            <span className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              Banking & BFSI
            </span>
            <span className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              Healthcare
            </span>
            <span className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              Smart Cities
            </span>
            <span className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              Manufacturing
            </span>
            <span className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              Education & EdTech
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Get Started
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Challenges in Telecommunications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Modern telecom companies face critical challenges that impact service quality, operational efficiency, and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Network Downtime</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Frequent downtimes with limited predictive maintenance capabilities affecting service reliability.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Load Management</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Struggling with managing dynamic traffic loads in real-time during peak usage periods.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Support Inefficiencies</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Inconsistent, resource-intensive customer support leading to delays and errors.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Manual Processes</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Legacy systems causing manual billing, support processes, and operational inefficiencies.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Scalability Issues</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Legacy infrastructure that lacks scalability and automation capabilities.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Poor Fault Response</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Inadequate fault response impacting service continuity and diminishing customer experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              AI-Powered Solutions for Telecommunications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive AI/ML solutions that provide robust, scalable, and intelligent framework for modern telecom needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="p-8">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Self-Healing Network Engine
                </h3>
                <p className="text-gray-600 mb-6">
                  Utilizes machine learning to predict outages and autonomously respond to faults, ensuring higher uptime and reduced manual intervention.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Key Benefits:</h4>
                  <ul className="space-y-1">
                    <li className="text-sm text-gray-600 flex items-center">
                      <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Predictive fault detection
                    </li>
                    <li className="text-sm text-gray-600 flex items-center">
                      <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Autonomous fault response
                    </li>
                    <li className="text-sm text-gray-600 flex items-center">
                      <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Reduced manual intervention
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="p-8">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  AI-Based Traffic Optimization
                </h3>
                <p className="text-gray-600 mb-6">
                  Dynamically allocates bandwidth and reroutes network traffic in real-time to maintain optimal service levels during high demand or outages.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Key Benefits:</h4>
                  <ul className="space-y-1">
                    <li className="text-sm text-gray-600 flex items-center">
                      <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Dynamic bandwidth allocation
                    </li>
                    <li className="text-sm text-gray-600 flex items-center">
                      <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Real-time traffic rerouting
                    </li>
                    <li className="text-sm text-gray-600 flex items-center">
                      <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Optimal service level maintenance
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="p-8">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h2m2-4h4a2 2 0 012 2v6a2 2 0 01-2 2h-4m-5-4h4a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6a2 2 0 012-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Customer Support Automation
                </h3>
                <p className="text-gray-600 mb-6">
                  Deploys AI chatbots integrated with CRM systems to handle tier-1 customer queries, reducing wait times and freeing human agents for complex cases.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Key Benefits:</h4>
                  <ul className="space-y-1">
                    <li className="text-sm text-gray-600 flex items-center">
                      <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      AI-powered chatbot integration
                    </li>
                    <li className="text-sm text-gray-600 flex items-center">
                      <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Reduced customer wait times
                    </li>
                    <li className="text-sm text-gray-600 flex items-center">
                      <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Optimized agent resource allocation
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="p-8">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  RPA-Driven Billing Systems
                </h3>
                <p className="text-gray-600 mb-6">
                  Automates billing and invoicing processes, reducing human errors and accelerating revenue cycles—even within aging legacy systems.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Key Benefits:</h4>
                  <ul className="space-y-1">
                    <li className="text-sm text-gray-600 flex items-center">
                      <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Automated billing processes
                    </li>
                    <li className="text-sm text-gray-600 flex items-center">
                      <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Reduced human errors
                    </li>
                    <li className="text-sm text-gray-600 flex items-center">
                      <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Accelerated revenue cycles
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI/ML solutions are designed to serve diverse industries with specialized requirements.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'Telecommunications & ISPs', icon: '📡' },
              { name: 'Banking & BFSI', icon: '🏦' },
              { name: 'Healthcare', icon: '🏥' },
              { name: 'Retail & ECommerce', icon: '🛒' },
              { name: 'Smart Cities & Government', icon: '🏙️' },
              { name: 'Utilities', icon: '⚡' },
              { name: 'Transportation & Logistics', icon: '🚚' },
              { name: 'Manufacturing & Industry 4.0', icon: '🏭' },
              { name: 'Hospitality & Travel', icon: '✈️' },
              { name: 'Education & EdTech', icon: '🎓' },
              { name: 'Media & Entertainment', icon: '🎬' }
            ].map((industry, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl mb-2">{industry.icon}</div>
                <h3 className="text-sm font-medium text-gray-900">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Telecommunications Infrastructure?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI-powered solutions can enhance your network performance, 
            reduce operational costs, and improve customer satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Contact Our Experts
            </Link>
            <Link href="/solutions/ai-ml" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Explore Other Industries
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}