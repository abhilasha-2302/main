import Head from 'next/head';
import Link from 'next/link';

export default function AgriculturePage() {
  return (
    <>
      <Head>
        <title>Agriculture AI/ML Solutions | Veripoint Technologies</title>
        <meta name="description" content="Smart Farming Intelligence Platform with IoT sensors, yield forecasting APIs, and climate risk monitoring for agriculture and agribusiness." />
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
            <img src="/api/placeholder/1920/1080" alt="Agriculture background" className="w-full h-full object-cover" />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Smart Farming Intelligence Platform
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Transform agriculture with IoT-powered real-time insights, predictive yield forecasting, 
            and comprehensive climate risk monitoring for sustainable farming.
          </p>
          
          {/* Industry Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              Agriculture & Agribusiness
            </span>
            <span className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              Food & Beverage
            </span>
            <span className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              Agricultural Insurance
            </span>
            <span className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              Environmental & Sustainability
            </span>
            <span className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              Supply Chain & Logistics
            </span>
            <span className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              Technology & IoT Solutions
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
              Challenges in Modern Agriculture
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Today's farmers and agribusinesses face critical challenges that impact productivity, sustainability, and profitability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Crop Yield Optimization</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Challenges in efficiently maximizing crop yield due to limited access to real-time data and insights.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Climate Risk Management</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Difficulty in assessing and adapting to climate change effects on crop outcomes, leading to unpredictable farming conditions.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Data Integration Issues</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Lack of integration between actionable data and existing farm management systems, hindering informed decision-making.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Limited Real-Time Insights</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Farmers lack real-time insights into soil conditions, weather patterns, and future yields, affecting timely decision-making.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Supply Chain Inefficiencies</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Agricultural supply chain suffers from absence of predictive tools for accurate yield forecasting, leading to trading inefficiencies.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Risk Assessment Challenges</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Insurers and agribusinesses face challenges in assessing financial impact of environmental factors, impacting risk management.
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
              AI-Powered Solutions for Agriculture
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive IoT and AI-powered solutions that transform traditional farming into smart, data-driven agriculture.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center flex-shrink-0">
                    <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Smart Farming Intelligence Platform
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg">
                      An IoT and AI-based system that provides real-time, actionable data by feeding critical insights into existing farm management systems. This enables farmers to make data-driven decisions on irrigation, soil health, and crop management, ultimately optimizing farm productivity.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 text-sm mb-2">Real-Time Monitoring</h4>
                        <p className="text-xs text-gray-600">IoT sensors for soil, weather, and crop conditions</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 text-sm mb-2">System Integration</h4>
                        <p className="text-xs text-gray-600">Seamless integration with existing farm management systems</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 text-sm mb-2">Data-Driven Decisions</h4>
                        <p className="text-xs text-gray-600">Actionable insights for irrigation and crop management</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center flex-shrink-0">
                    <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Yield Forecast APIs
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg">
                      Predictive services that integrate with agricultural supply chain and trading platforms to forecast crop yields accurately. By leveraging data analytics, this solution helps farmers, traders, and stakeholders make better-informed decisions, improving supply chain efficiency and reducing waste.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 text-sm mb-2">Predictive Analytics</h4>
                        <p className="text-xs text-gray-600">Advanced algorithms for accurate yield forecasting</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 text-sm mb-2">API Integration</h4>
                        <p className="text-xs text-gray-600">Seamless integration with supply chain platforms</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 text-sm mb-2">Supply Chain Efficiency</h4>
                        <p className="text-xs text-gray-600">Improved trading decisions and waste reduction</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center flex-shrink-0">
                    <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Climate Risk Monitoring Dashboard
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg">
                      A comprehensive platform for agribusinesses and insurers to assess environmental risks such as droughts, floods, and temperature fluctuations. This helps in evaluating the impact of climate change on crop outcomes, offering a clearer understanding of risk and enabling proactive management of environmental challenges.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 text-sm mb-2">Environmental Monitoring</h4>
                        <p className="text-xs text-gray-600">Track droughts, floods, and temperature changes</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 text-sm mb-2">Risk Assessment</h4>
                        <p className="text-xs text-gray-600">Comprehensive climate impact evaluation</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 text-sm mb-2">Proactive Management</h4>
                        <p className="text-xs text-gray-600">Early warning systems for environmental challenges</p>
                      </div>
                    </div>
                  </div>
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
              Our agricultural AI/ML solutions are designed to serve diverse sectors across the agriculture ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { name: 'Agriculture & Agribusiness', icon: '🌾' },
              { name: 'Food & Beverage', icon: '🍎' },
              { name: 'Agricultural Insurance', icon: '🛡️' },
              { name: 'Environmental & Sustainability', icon: '🌱' },
              { name: 'Supply Chain & Logistics', icon: '🚚' },
              { name: 'Government & Public Sector', icon: '🏛️' },
              { name: 'Technology & IoT Solutions', icon: '📡' }
            ].map((industry, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-3">{industry.icon}</div>
                <h3 className="text-sm font-medium text-gray-900">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">30%</div>
              <div className="text-green-100">Yield Increase</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">40%</div>
              <div className="text-green-100">Water Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-green-100">Forecast Accuracy</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-green-100">Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Agricultural Operations?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our Smart Farming Intelligence Platform can optimize your crop yields, 
            reduce risks, and improve sustainability across your agricultural operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Contact Our Experts
            </Link>
            <Link href="/solutions/ai-ml" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Explore Other Industries
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}