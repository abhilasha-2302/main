import Head from 'next/head';
import Link from 'next/link';

export default function InsurancePage() {
  return (
    <>
      <Head>
        <title>Insurance AI/ML Solutions | Veripoint Technologies</title>
        <meta name="description" content="AI-powered insurance solutions with automated underwriting, claims intelligence, virtual assistants, and cloud-native data infrastructure for insurance companies." />
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
            <img src="/api/placeholder/1920/1080" alt="Insurance background" className="w-full h-full object-cover" />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AI-Powered Insurance Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Transform your insurance operations with automated underwriting, intelligent claims processing, 
            24/7 virtual assistants, and secure cloud-native data infrastructure.
          </p>
          
          {/* Industry Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              Life & Health Insurance
            </span>
            <span className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              Auto & Property Insurance
            </span>
            <span className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              Financial Services
            </span>
            <span className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              Risk Management
            </span>
            <span className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              Fraud Prevention
            </span>
            <span className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              Regulatory Compliance
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
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
              Challenges in Modern Insurance
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Insurance companies face critical operational challenges that impact efficiency, customer satisfaction, and profitability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Manual Underwriting</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Traditional underwriting methods are time-consuming, error-prone, and slow, leading to delays in policy issuance and customer dissatisfaction.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Fraudulent Claims</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Insurance companies struggle to detect fraudulent or high-risk claims, resulting in increased costs and significant financial losses.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h2m2-4h4a2 2 0 012 2v6a2 2 0 01-2 2h-4m-5-4h4a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6a2 2 0 012-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Customer Support Scalability</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Traditional customer service models cannot scale effectively to handle increasing queries, resulting in slow response times and inefficiencies.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Data Integration Issues</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Insurers face difficulties in securely managing and integrating vast amounts of data, affecting decision-making and regulatory compliance.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Security & Disaster Recovery</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Lack of robust, cloud-native infrastructure hinders insurers' ability to secure data, manage disaster recovery, and ensure business continuity.
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
              AI-Powered Solutions for Insurance
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive AI/ML solutions that automate processes, enhance security, and improve customer experience across all insurance operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="p-8">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  AI-Underwriting Engine
                </h3>
                <p className="text-gray-600 mb-6">
                  Automates risk scoring and policy issuance, seamlessly integrating with core policy administration systems to reduce manual effort, improve accuracy, and speed up the underwriting process.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Key Benefits:</h4>
                  <ul className="space-y-1">
                    <li className="text-sm text-gray-600 flex items-center">
                      <svg className="h-4 w-4 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Automated risk scoring algorithms
                    </li>
                    <li className="text-sm text-gray-600 flex items-center">
                      <svg className="h-4 w-4 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Seamless system integration
                    </li>
                    <li className="text-sm text-gray-600 flex items-center">
                      <svg className="h-4 w-4 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Faster policy issuance
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="p-8">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Claims Intelligence Layer
                </h3>
                <p className="text-gray-600 mb-6">
                  Utilizes predictive analytics to flag high-risk and potentially fraudulent claims, reducing the risk of financial loss and enhancing the claims management process.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Key Benefits:</h4>
                  <ul className="space-y-1">
                    <li className="text-sm text-gray-600 flex items-center">
                      <svg className="h-4 w-4 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Predictive fraud detection
                    </li>
                    <li className="text-sm text-gray-600 flex items-center">
                      <svg className="h-4 w-4 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      High-risk claim identification
                    </li>
                    <li className="text-sm text-gray-600 flex items-center">
                      <svg className="h-4 w-4 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Reduced financial losses
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="p-8">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h2m2-4h4a2 2 0 012 2v6a2 2 0 01-2 2h-4m-5-4h4a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6a2 2 0 012-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  24/7 Virtual Assistants
                </h3>
                <p className="text-gray-600 mb-6">
                  Deploys scalable AI bots for policyholders, integrated into web/mobile portals or call centers, offering immediate, round-the-clock support for inquiries, claims, and policy management.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Key Benefits:</h4>
                  <ul className="space-y-1">
                    <li className="text-sm text-gray-600 flex items-center">
                      <svg className="h-4 w-4 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      24/7 customer support availability
                    </li>
                    <li className="text-sm text-gray-600 flex items-center">
                      <svg className="h-4 w-4 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Scalable AI bot deployment
                    </li>
                    <li className="text-sm text-gray-600 flex items-center">
                      <svg className="h-4 w-4 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Multi-channel integration
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="p-8">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Cloud-Native Data Infrastructure
                </h3>
                <p className="text-gray-600 mb-6">
                  Provides secure, scalable storage and disaster recovery solutions, enabling seamless integration with enterprise data lakes and ensuring data integrity, accessibility, and compliance.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Key Benefits:</h4>
                  <ul className="space-y-1">
                    <li className="text-sm text-gray-600 flex items-center">
                      <svg className="h-4 w-4 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Secure, scalable cloud storage
                    </li>
                    <li className="text-sm text-gray-600 flex items-center">
                      <svg className="h-4 w-4 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Disaster recovery capabilities
                    </li>
                    <li className="text-sm text-gray-600 flex items-center">
                      <svg className="h-4 w-4 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Regulatory compliance assurance
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
              Our AI/ML insurance solutions are designed to serve diverse sectors across the insurance and financial services ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { name: 'Life Insurance', icon: '👨‍👩‍👧‍👦' },
              { name: 'Health Insurance', icon: '🏥' },
              { name: 'Auto Insurance', icon: '🚗' },
              { name: 'Property & Casualty', icon: '🏠' },
              { name: 'Financial Services', icon: '🏦' },
              { name: 'Risk Management', icon: '🛡️' },
              { name: 'Fraud Prevention', icon: '🔒' },
              { name: 'Regulatory Compliance', icon: '📋' },
              { name: 'Customer Service', icon: '💬' },
              { name: 'Data Analytics', icon: '📊' },
              { name: 'Technology Solutions', icon: '💻' },
              { name: 'Cloud Services', icon: '☁️' }
            ].map((industry, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl mb-3">{industry.icon}</div>
                <h3 className="text-sm font-medium text-gray-900">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">80%</div>
              <div className="text-blue-100">Faster Underwriting</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-blue-100">Fraud Detection Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-100">Customer Support</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-blue-100">System Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Insurance Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI-powered insurance solutions can automate your processes, 
            reduce fraud, enhance customer experience, and ensure regulatory compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Contact Our Experts
            </Link>
            <Link href="/solutions/ai-ml" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Explore Other Industries
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}