import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Industry data configuration
const industryData = {
  'telecommunication': {
    name: 'Telecommunication',
    hero: {
      title: 'AI/ML Solutions for Telecommunication',
      subtitle: 'Transform your telecom infrastructure with intelligent network optimization, predictive maintenance, and enhanced customer experiences.',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // Replace with actual video URL
      features: ['Network Optimization', 'Predictive Maintenance', 'Customer Analytics', 'Fraud Detection']
    },
    solutions: [
      {
        title: 'Network Performance Optimization',
        description: 'AI-powered network monitoring and optimization to ensure peak performance and minimal downtime.',
        benefits: ['Reduced network latency by 40%', 'Improved call quality', 'Automated fault detection']
      },
      {
        title: 'Predictive Equipment Maintenance',
        description: 'Machine learning algorithms predict equipment failures before they occur, reducing downtime.',
        benefits: ['85% reduction in unexpected failures', 'Lower maintenance costs', 'Extended equipment lifespan']
      },
      {
        title: 'Customer Experience Analytics',
        description: 'Analyze customer behavior patterns to improve service quality and reduce churn.',
        benefits: ['30% improvement in customer satisfaction', 'Reduced churn rates', 'Personalized service offerings']
      }
    ],
    caseStudy: {
      title: 'Major Telecom Provider Reduces Network Downtime by 60%',
      description: 'Our AI solution helped a leading telecommunications company implement predictive maintenance across their infrastructure.',
      results: ['60% reduction in network downtime', '$2.5M annual savings', '40% faster issue resolution']
    }
  },
  'agriculture': {
    name: 'Agriculture',
    hero: {
      title: 'AI/ML Solutions for Agriculture',
      subtitle: 'Revolutionize farming with precision agriculture, crop monitoring, and yield optimization powered by artificial intelligence.',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      features: ['Precision Farming', 'Crop Monitoring', 'Yield Prediction', 'Smart Irrigation']
    },
    solutions: [
      {
        title: 'Precision Crop Monitoring',
        description: 'Satellite imagery and IoT sensors combined with AI to monitor crop health in real-time.',
        benefits: ['Early disease detection', 'Optimized resource usage', 'Increased crop yields by 25%']
      },
      {
        title: 'Smart Irrigation Systems',
        description: 'AI-driven irrigation management based on weather patterns, soil moisture, and crop requirements.',
        benefits: ['40% water savings', 'Reduced operational costs', 'Improved crop quality']
      },
      {
        title: 'Yield Prediction Analytics',
        description: 'Machine learning models predict crop yields based on historical data and current conditions.',
        benefits: ['Accurate harvest planning', 'Better market positioning', 'Risk mitigation']
      }
    ],
    caseStudy: {
      title: 'Farm Collective Increases Yield by 30% with AI',
      description: 'A cooperative of 200+ farmers implemented our precision agriculture solution across 10,000 acres.',
      results: ['30% increase in average yield', '25% reduction in water usage', '$500K additional revenue']
    }
  },
  // Add more industries as needed...
};

export default function IndustryPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [industry, setIndustry] = useState(null);

  useEffect(() => {
    if (slug && industryData[slug]) {
      setIndustry(industryData[slug]);
    }
  }, [slug]);

  if (!industry) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Industry Not Found</h1>
          <Link href="/solutions/ai-ml" className="text-green-600 hover:text-green-700">
            Back to AI/ML Solutions
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{industry.name} AI/ML Solutions | Veripoint Technologies</title>
        <meta name="description" content={industry.hero.subtitle} />
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
            <source src={industry.hero.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {industry.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            {industry.hero.subtitle}
          </p>
          
          {/* Feature Tags */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {industry.hero.features.map((feature, index) => (
              <span
                key={index}
                className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium"
              >
                {feature}
              </span>
            ))}
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

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our {industry.name} Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive AI/ML solutions designed specifically for the {industry.name.toLowerCase()} industry.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {industry.solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="p-8">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {solution.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 text-sm">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                          <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="lg:flex">
              <div className="lg:w-1/2 p-8 lg:p-12">
                <div className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-4">
                  Success Story
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {industry.caseStudy.title}
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {industry.caseStudy.description}
                </p>
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Results Achieved:</h3>
                  <ul className="space-y-3">
                    {industry.caseStudy.results.map((result, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <div className="bg-green-100 rounded-full p-1 mr-3">
                          <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="lg:w-1/2 bg-gradient-to-br from-green-500 to-blue-600 p-8 lg:p-12 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl font-bold mb-4">
                    {industry.caseStudy.results[0].match(/\d+/)?.[0] || '95'}%
                  </div>
                  <div className="text-xl font-semibold">
                    Success Rate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your {industry.name} Operations?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let us discuss how our AI/ML solutions can drive innovation and growth in your organization.
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