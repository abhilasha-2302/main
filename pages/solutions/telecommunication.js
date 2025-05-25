import CallToAction from '@/components/home/CallToAction';
import Layout from '@/components/layout/Layout';
import Head from 'next/head';
import Link from 'next/link';

export default function TelecommunicationsSolutionsPage() {
  const industries = [
    {
      name: 'Mobile Network Operators',
      slug: 'mobile-network-operators',
      description: 'Self-healing network infrastructure with AI-driven fault detection. Intelligent traffic optimization for peak load management. Advanced customer analytics for personalized service delivery.',
      icon: '📱',
      features: [
        'Autonomous fault detection',
        'Dynamic traffic optimization',
        'Personalized customer analytics'
      ]
    },
    {
      name: 'Internet Service Providers',
      slug: 'internet-service-providers',
      description: 'AI-powered bandwidth allocation and network optimization. Predictive maintenance for infrastructure reliability. Automated customer onboarding and support systems.',
      icon: '🌐',
      features: [
        'Intelligent bandwidth allocation',
        'Predictive infrastructure maintenance',
        'Automated customer management'
      ]
    },
    {
      name: 'Cable & Satellite TV',
      slug: 'cable-satellite-tv',
      description: 'Content delivery optimization with AI traffic engineering. Smart SLA management and performance monitoring. Automated billing and subscription management systems.',
      icon: '📺',
      features: [
        'Content delivery optimization',
        'Real-time SLA monitoring',
        'Automated subscription management'
      ]
    },
    {
      name: 'Enterprise Communications',
      slug: 'enterprise-communications',
      description: 'AI-driven unified communications platforms. Intelligent call routing and quality optimization. Advanced security and compliance monitoring for business communications.',
      icon: '🏢',
      features: [
        'Unified communications platforms',
        'Intelligent call routing',
        'Security and compliance monitoring'
      ]
    },
    {
      name: 'Cloud & Data Centers',
      slug: 'cloud-data-centers',
      description: 'Edge AI deployment for distributed infrastructure monitoring. Predictive cooling and power management systems. Automated resource allocation and scaling.',
      icon: '☁️',
      features: [
        'Edge AI infrastructure monitoring',
        'Predictive resource management',
        'Automated scaling solutions'
      ]
    },
    {
      name: '5G & Next-Gen Networks',
      slug: '5g-next-gen-networks',
      description: 'AI-powered network slicing and resource allocation. Real-time latency optimization for critical applications. Intelligent edge computing deployment and management.',
      icon: '🚀',
      features: [
        'AI-powered network slicing',
        'Real-time latency optimization',
        'Edge computing management'
      ]
    },
    {
      name: 'Telecom Equipment Vendors',
      slug: 'telecom-equipment-vendors',
      description: 'Predictive maintenance for network equipment. AI-enhanced quality assurance and testing. Supply chain optimization and inventory management.',
      icon: '🔧',
      features: [
        'Predictive equipment maintenance',
        'AI-enhanced quality assurance',
        'Supply chain optimization'
      ]
    },
    {
      name: 'Customer Service & CRM',
      slug: 'customer-service-crm',
      description: 'AI-powered chatbots and virtual agents for tier-1 support. Intelligent ticket routing and escalation. Customer sentiment analysis and retention prediction.',
      icon: '🎧',
      features: [
        'AI-powered customer support',
        'Intelligent ticket management',
        'Customer sentiment analysis'
      ]
    },
    {
      name: 'Network Security',
      slug: 'network-security',
      description: 'AI-driven threat detection and response systems. Real-time anomaly detection for network traffic. Automated security incident management and compliance reporting.',
      icon: '🛡️',
      features: [
        'AI-driven threat detection',
        'Real-time anomaly detection',
        'Automated incident management'
      ]
    },
    {
      name: 'Billing & Revenue Management',
      slug: 'billing-revenue-management',
      description: 'RPA-enhanced automated billing systems. AI-powered fraud detection and prevention. Revenue optimization through intelligent pricing strategies.',
      icon: '💰',
      features: [
        'Automated billing systems',
        'AI-powered fraud detection',
        'Intelligent pricing optimization'
      ]
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Telecommunications Solutions | Veripoint Technologies</title>
        <meta name="description" content="AI-powered telecommunications solutions for network optimization, customer service, and operational excellence" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Video Hero Section - Adjusted Height */}
      <section className="relative h-[calc(100vh-120px)] w-full overflow-hidden bg-black">
        <video
          className="h-full w-full object-cover"
          src="/videos/telecommunications.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Content overlay - centered */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8">
              Telecommunications Solutions
            </h1>
            <Link href="/video-page">
              <button className="inline-flex items-center bg-white hover:bg-gray-100 text-gray-900 font-medium py-3 px-6 rounded transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Watch
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation Section - Only Key Benefits and Industries */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex space-x-8">
              <a href="#industries" className="text-gray-700 hover:text-gray-900 font-medium">Industries</a>
              <a href="#benefits" className="text-gray-700 hover:text-gray-900 font-medium">Key Benefits</a>
            </div>
            <button className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-2 px-4 rounded transition-colors duration-200">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section id="industries" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16">
            <h2 className="text-3xl text-black mb-4">
              Choose Your Services
            </h2>
            <p className="text-lg text-black leading-relaxed">
              Select your telecommunications sector to explore AI-powered services designed to enhance network reliability, optimize operations, and elevate customer service experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-green-200"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">
                      {industry.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {industry.description}
                  </p>
                  <div className="space-y-2">
                    {industry.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-500">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section id="benefits" className="py-16 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-normal text-white mb-4">
              Why Choose AI-Powered Telecommunications?
            </h2>
            <p className="text-lg text-white">
              Discover how AI transforms telecommunications operations and customer experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-lg p-6 shadow-md">
              <div className="bg-green-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-normal text-gray-900 mb-2">Network Reliability</h3>
              <p className="text-gray-600">Self-healing networks with predictive maintenance and autonomous fault resolution</p>
            </div>
            <div className="text-center bg-white rounded-lg p-6 shadow-md">
              <div className="bg-green-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-normal text-gray-900 mb-2">Intelligent Automation</h3>
              <p className="text-gray-600">AI-driven traffic optimization and automated operations for peak performance</p>
            </div>
            <div className="text-center bg-white rounded-lg p-6 shadow-md">
              <div className="bg-green-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-normal text-gray-900 mb-2">Enhanced Customer Experience</h3>
              <p className="text-gray-600">AI-powered support systems and personalized service delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="contact">
        <CallToAction />
      </section>
    </Layout>
  );
}