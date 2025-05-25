import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../../components/layout/Layout';
import CallToAction from '../../../components/home/CallToAction';
export default function AiMlSolutionsPage() {
  const industries = [
    {
      name: 'Telecommunication',
      slug: 'telecommunication',
      description: 'Advanced AI solutions for network optimization, predictive maintenance, and customer experience enhancement.',
      icon: '📡'
    },
    {
      name: 'Agriculture',
      slug: 'agriculture',
      description: 'Smart farming solutions with precision agriculture, crop monitoring, and yield optimization.',
      icon: '🌾'
    },
    {
      name: 'Insurance',
      slug: 'insurance',
      description: 'Risk assessment, fraud detection, and automated claims processing with AI-powered analytics.',
      icon: '🛡️'
    },
    {
      name: 'Education & Ed-tech',
      slug: 'education-edtech',
      description: 'Personalized learning experiences, automated grading, and intelligent tutoring systems.',
      icon: '🎓'
    },
    {
      name: 'Security & Smart-City Infrastructure',
      slug: 'security-smart-city',
      description: 'Intelligent surveillance, traffic management, and urban planning with AI-driven insights.',
      icon: '🏙️'
    },
    {
      name: 'Energy, Utilities & Power Grids',
      slug: 'energy-utilities',
      description: 'Smart grid optimization, renewable energy management, and predictive maintenance.',
      icon: '⚡'
    },
    {
      name: 'Logistics & Supply Chain',
      slug: 'logistics-supply-chain',
      description: 'Route optimization, demand forecasting, and inventory management solutions.',
      icon: '🚚'
    },
    {
      name: 'Retail & E-Commerce',
      slug: 'retail-ecommerce',
      description: 'Personalized shopping experiences, inventory optimization, and customer behavior analytics.',
      icon: '🛒'
    },
    {
      name: 'Healthcare',
      slug: 'healthcare',
      description: 'Medical imaging analysis, drug discovery, and personalized treatment recommendations.',
      icon: '🏥'
    },
    {
      name: 'Manufacturing',
      slug: 'manufacturing',
      description: 'Quality control automation, production optimization, and predictive maintenance.',
      icon: '🏭'
    },
    {
      name: 'Legal Tech',
      slug: 'legal-tech',
      description: 'Document analysis, contract review, and legal research automation.',
      icon: '⚖️'
    },
    {
      name: 'Smart Manufacturing & Predictive Maintenance',
      slug: 'smart-manufacturing',
      description: 'IoT-enabled manufacturing with real-time monitoring and predictive analytics.',
      icon: '🔧'
    },
    {
      name: 'Customer Support & AI Chatbots',
      slug: 'customer-support',
      description: 'Intelligent customer service automation and natural language processing.',
      icon: '💬'
    },
    {
      name: 'Supply Chain & Logistics Optimization',
      slug: 'supply-chain-optimization',
      description: 'End-to-end supply chain visibility and optimization algorithms.',
      icon: '📊'
    },
    {
      name: 'Energy Efficiency & Smart Grid Support',
      slug: 'energy-efficiency',
      description: 'Energy consumption optimization and smart grid management systems.',
      icon: '🌱'
    },
    {
      name: 'Market & Demand Forecasting',
      slug: 'market-forecasting',
      description: 'Advanced analytics for market trends and demand prediction.',
      icon: '📈'
    },
    {
      name: 'Voice of Customer (VoC) Analytics',
      slug: 'voc-analytics',
      description: 'Customer sentiment analysis and feedback processing with NLP.',
      icon: '🗣️'
    },
    {
      name: 'Sustainability & Carbon Footprint Analytics',
      slug: 'sustainability-analytics',
      description: 'Environmental impact assessment and carbon footprint optimization.',
      icon: '🌍'
    },
    {
      name: 'Product Development Acceleration with Digital Twins',
      slug: 'digital-twins',
      description: 'Virtual product modeling and simulation for accelerated development cycles.',
      icon: '🔬'
    }
  ];

  return (
    <Layout>
      <Head>
        <title>AI/ML Solutions | Veripoint Technologies</title>
        <meta name="description" content="Industry-specific AI and ML solutions for various sectors" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI/ML Solutions by Industry
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover how artificial intelligence and machine learning can transform 
              your industry with our specialized solutions tailored to meet unique 
              sector challenges and opportunities.
            </p>
            <div className="flex justify-center">
              <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-green-100 rounded-full p-3">
                    <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  19 Industry Solutions
                </h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive AI/ML solutions across diverse sectors
                </p>
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
              Select your industry to explore enterprise AI solutions tailored to industry needs—customizable, scalable, and designed to accelerate your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Link
                key={index}
                href={`/solutions/industries/${industry.slug}`}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-green-200"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">
                      {industry.icon}
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </div>
                <div className="px-6 pb-6">
                  <div className="flex items-center text-green-600 text-sm font-medium">
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

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">19</div>
              <div className="text-gray-600">Industries Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">AI Models Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </Layout>
  );
}