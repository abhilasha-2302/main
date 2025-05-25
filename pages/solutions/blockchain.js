import CallToAction from '@/components/home/CallToAction';
import Layout from '@/components/layout/Layout';
import Head from 'next/head';
import Link from 'next/link';

export default function BlockchainSolutionsPage() {
  const industries = [
    {
      name: 'Financial Services & Banking',
      slug: 'financial-services-banking',
      description: 'Secure, auditable cross-border payment engine that integrates into core banking. KYC & Risk Compliance Automation with AI/ML-driven document understanding and identity verification. Smart Contract Frameworks for automated loan approvals, settlements, and reporting.',
      icon: '🏦',
      features: [
        'Cross-border payment engine',
        'KYC & Risk Compliance Automation',
        'Smart Contract Frameworks'
      ]
    },
    {
      name: 'Supply Chain & Logistics',
      slug: 'supply-chain-logistics',
      description: 'Transparent tracking of goods from source to destination. Verification of authenticity and product origins. Smart contracts for automating supply chain agreements.',
      icon: '🚛',
      features: [
        'Transparent tracking system',
        'Authenticity verification',
        'Automated supply chain agreements'
      ]
    },
    {
      name: 'Healthcare',
      slug: 'healthcare',
      description: 'Secure storage and sharing of medical records. Ensuring the integrity of pharmaceutical supply chains. Decentralized patient data management and access.',
      icon: '🏥',
      features: [
        'Secure medical records',
        'Pharmaceutical supply chain integrity',
        'Decentralized patient data management'
      ]
    },
    {
      name: 'Insurance',
      slug: 'insurance',
      description: 'Automating claims processing with smart contracts. Secure and transparent customer verification and data management. Reducing fraud and ensuring compliance.',
      icon: '🛡️',
      features: [
        'Automated claims processing',
        'Transparent customer verification',
        'Fraud reduction and compliance'
      ]
    },
    {
      name: 'Government & Public Sector',
      slug: 'government-public-sector',
      description: 'Voter registration and secure digital voting systems. Transparent and immutable public records. Managing government financial transactions with immutable ledgers.',
      icon: '🏛️',
      features: [
        'Secure digital voting systems',
        'Immutable public records',
        'Government financial transaction management'
      ]
    },
    {
      name: 'E-Commerce & Retail',
      slug: 'ecommerce-retail',
      description: 'Secure payments and transactions. Authenticity verification for products. Transparent loyalty programs and customer reward systems.',
      icon: '🛒',
      features: [
        'Secure payment systems',
        'Product authenticity verification',
        'Transparent loyalty programs'
      ]
    },
    {
      name: 'Energy & Utilities',
      slug: 'energy-utilities',
      description: 'Smart grid systems for automated energy distribution. Transparent energy consumption tracking. Peer-to-peer energy trading platforms.',
      icon: '⚡',
      features: [
        'Smart grid automation',
        'Energy consumption tracking',
        'P2P energy trading platforms'
      ]
    },
    {
      name: 'Legal & Contract Management',
      slug: 'legal-contract-management',
      description: 'Smart contracts for automating legal agreements. Secure and transparent contract execution and tracking. Fraud Monitoring Suite with real-time, explainable AI models for anomaly detection.',
      icon: '⚖️',
      features: [
        'Automated legal agreements',
        'Contract execution tracking',
        'Real-time fraud monitoring'
      ]
    },
    {
      name: 'Education',
      slug: 'education',
      description: 'Secure and immutable credential verification for degrees and certifications. Blockchain-based systems for academic records and diplomas. Enhancing transparency in education-related financial transactions.',
      icon: '🎓',
      features: [
        'Credential verification',
        'Academic records management',
        'Transparent financial transactions'
      ]
    },
    {
      name: 'Real Estate',
      slug: 'real-estate',
      description: 'Smart contracts for automating property transactions. Transparent and secure property ownership tracking. Reducing paperwork and human intervention in real estate deals.',
      icon: '🏘️',
      features: [
        'Automated property transactions',
        'Property ownership tracking',
        'Reduced paperwork and automation'
      ]
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Blockchain Solutions | Veripoint Technologies</title>
        <meta name="description" content="Industry-specific blockchain solutions for secure, transparent, and automated business processes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section with Video */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Blockchain Solutions by Industry
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your business with secure, transparent, and decentralized 
                blockchain technology solutions tailored to meet industry-specific 
                challenges and unlock new opportunities for automation and trust.
              </p>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  10 Industry Solutions
                </h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive blockchain solutions across diverse sectors
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <video 
                  className="w-full h-64 object-cover rounded-lg"
                  autoPlay 
                  muted 
                  loop
                  poster="/api/placeholder/600/400"
                >
                  <source src="/videos/blockchain-demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="mt-4 text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">Blockchain in Action</h4>
                  <p className="text-gray-600 text-sm">See how our solutions transform industries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Industry
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select your industry to explore customized blockchain solutions designed 
              to enhance security, transparency, and automation in your business processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Link
                key={index}
                href={`/solutions/blockchain/${industry.slug}`}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">
                      {industry.icon}
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {industry.description}
                  </p>
                  <div className="space-y-2">
                    {industry.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-500">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <div className="flex items-center text-blue-600 text-sm font-medium">
                    <span>Explore Solutions</span>
                    <svg className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Blockchain?
            </h2>
            <p className="text-lg text-gray-600">
              Discover the transformative benefits of blockchain technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-lg p-6 shadow-md">
              <div className="bg-blue-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enhanced Security</h3>
              <p className="text-gray-600">Immutable and cryptographically secured transactions</p>
            </div>
            <div className="text-center bg-white rounded-lg p-6 shadow-md">
              <div className="bg-green-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Full Transparency</h3>
              <p className="text-gray-600">Complete audit trail and transparent operations</p>
            </div>
            <div className="text-center bg-white rounded-lg p-6 shadow-md">
              <div className="bg-purple-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Automation</h3>
              <p className="text-gray-600">Automated processes with smart contract execution</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">10</div>
              <div className="text-gray-600">Industries Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-600">Smart Contracts Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Blockchain Support</div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </Layout>
  );
}