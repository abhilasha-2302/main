import Layout from '@/components/layout/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function AiChipDevelopmentVideoPage() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <Layout>
      <Head>
        <title>AI Chip Verification - SdCvP-X™ | Veripoint Technologies</title>
        <meta name="description" content="Watch how SdCvP-X™ revolutionizes AI chip verification with advanced verification acceleration tools for first-time silicon success." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Breadcrumb Navigation */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <svg 
                  className="flex-shrink-0 h-4 w-4 text-gray-400 mx-2" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link 
                  href="/products/sdcvp-x" 
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  SdCvP-X™
                </Link>
              </li>
              <li className="flex items-center">
                <svg 
                  className="flex-shrink-0 h-4 w-4 text-gray-400 mx-2" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-gray-700 font-medium">AI Chip Development Video</span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Video Hero Section */}
      <section className="relative bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="aspect-video w-full bg-gray-900 rounded-lg overflow-hidden relative">
            {!isVideoLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                  <p className="text-white">Loading video...</p>
                </div>
              </div>
            )}
            <video
              className="w-full h-full object-cover"
              src="/videos/sdcvp.webm"
              controls
              preload="metadata"
              onLoadedData={() => setIsVideoLoaded(true)}
              poster="/images/ai-chip-poster.jpg" // Add a poster image if you have one
            >
              <source src="/videos/sdcvp.webm" type="video/webm" />
            
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Video Information */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  SdCvP-X™ - AI Chip Verification Revolution
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Discover how SdCvP-X™ transforms AI chip verification with cutting-edge verification acceleration tools. 
                  Experience first-time silicon success through intelligent automation and advanced verification methodologies.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    AI Verification
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    Silicon Success
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                    Productivity Boost
                  </span>
                </div>
              </div>

              {/* Key Features */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h3 className="font-medium text-gray-900">Advanced AI Algorithms</h3>
                      <p className="text-sm text-gray-600">Intelligent verification acceleration</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h3 className="font-medium text-gray-900">First-Time Silicon Success</h3>
                      <p className="text-sm text-gray-600">Reduce development cycles</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h3 className="font-medium text-gray-900">Productivity Enhancement</h3>
                      <p className="text-sm text-gray-600">Streamlined verification workflows</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h3 className="font-medium text-gray-900">Automated Testing</h3>
                      <p className="text-sm text-gray-600">Comprehensive test coverage</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Technical Specifications</h2>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">Verification Coverage</span>
                      <span className="text-gray-600">99.9%</span>
                    </div>
                  </div>
                  <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">Performance Improvement</span>
                      <span className="text-gray-600">10x Faster</span>
                    </div>
                  </div>
                  <div className="px-6 py-4 border-b border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">Platform Support</span>
                      <span className="text-gray-600">Multi-Platform</span>
                    </div>
                  </div>
                  <div className="px-6 py-4 bg-gray-50">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">Integration</span>
                      <span className="text-gray-600">Seamless EDA Tools</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Call to Action */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 mb-8 border border-blue-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Ready to Get Started?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Transform your chip verification process with SdCvP-X™ and achieve first-time silicon success.
                </p>
                <div className="space-y-3">
                  <Link
                    href="/products/sdcvp-x"
                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center font-medium py-2 px-4 rounded transition-colors duration-200"
                  >
                    Learn More About SdCvP-X™
                  </Link>
                  <a
                    href="https://forms.gle/kRqgCBJqn98PieQc6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gray-900 hover:bg-gray-800 text-white text-center font-medium py-2 px-4 rounded transition-colors duration-200"
                  >
                    Request Demo
                  </a>
                </div>
              </div>

              {/* Related Videos */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Videos</h3>
                <div className="space-y-4">
                  <Link href="/videos/ai-engineering" className="block group">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-20 h-12 bg-gray-200 rounded overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                          AI Smart Solutions
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">Intelligent Transformation</p>
                      </div>
                    </div>
                  </Link>
                  
                  <Link href="/videos/blockchain" className="block group">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-20 h-12 bg-gray-200 rounded overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                          Blockchain Solutions
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">Scalable Innovation</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Video Stats */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Video Information</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration</span>
                    <span className="text-gray-900">5:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category</span>
                    <span className="text-gray-900">AI Verification</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Published</span>
                    <span className="text-gray-900">2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Quality</span>
                    <span className="text-gray-900">HD 1080p</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Chip Verification Process?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join industry leaders who trust SdCvP-X™ for their AI chip verification needs. 
              Experience the power of intelligent verification acceleration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products/sdcvp-x"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded transition-colors duration-200"
              >
                Explore SdCvP-X™
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <a
                href="https://forms.gle/kRqgCBJqn98PieQc6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-transparent hover:bg-white/10 text-white border border-white font-medium py-3 px-6 rounded transition-colors duration-200"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}