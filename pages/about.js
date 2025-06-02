import Layout from '../components/layout/Layout';
import Link from 'next/link';

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Veripoint Technologies
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Your trusted partner for advanced AI solutions, semiconductor verification, and engineering services - 
              delivering scalable, future-ready technologies from silicon to complex systems across diverse industries.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Beyond Traditional Silicon Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-6">
           Veripoint Technologies is a leading provider of Semiconductor Products, AI Solutions, and Engineering Services, with deep expertise in silicon design verification and validation. Our advanced proprietary AI solutions accelerate semiconductor development and support innovation and transformation across industries such as telecom, automotive, healthcare, and agriculture.

              </p>
              <p className="text-lg text-gray-600">
                We help our partner and clients deliver robust, production-ready designs within tight timelines, while also applying our AI and data analytics expertise to solve real-world challenges and enhance operational efficiency.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">3+</div>
                  <div className="text-sm text-gray-600">Years of Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">20+</div>
                  <div className="text-sm text-gray-600">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
                  <div className="text-sm text-gray-600">Global Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
              </div>
            </div>
          </div>

          {/* Global Team Section
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Global Expertise, Tailored Solutions
            </h2>
            <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-8">
              Our global team brings deep experience in building tailored AI solutions and verifying complex 
              semiconductor systems that power diverse applications across technology infrastructure and 
              real-world industry implementations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Centers & AI</h3>
                <p className="text-gray-600 text-sm">High-performance computing and AI infrastructure solutions</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Consumer Electronics</h3>
                <p className="text-gray-600 text-sm">IoT and smart device semiconductor solutions</p>
              </div>
               */}
              {/* <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Telecommunications</h3>
                <p className="text-gray-600 text-sm">Advanced communication infrastructure systems</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Agriculture</h3>
                <p className="text-gray-600 text-sm">Smart farming and precision agriculture technology</p>
              </div>
            </div>
          </div> */}

          {/* Core Expertise Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Silicon Design Verification & Validation Excellence
            </h2>
            <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12">
              Expert silicon design verification and validation solutions with deep expertise in 
              cutting-edge technologies and advanced memory architectures in semiconductor solutions.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { name: 'PCIe', desc: 'Peripheral Component Interconnect Express' },
                { name: 'CXL', desc: 'Compute Express Link' },
                { name: 'UCIe', desc: 'Universal Chiplet Interconnect Express' },
                { name: 'NVMe', desc: 'Non-Volatile Memory Express' },
                { name: 'Ethernet', desc: 'Network Communication' },
                { name: 'Memory', desc: 'Advanced Memory Architectures' }
              ].map((tech, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-green-50 transition-colors group">
                  <div className="font-semibold text-gray-900 mb-1">{tech.name}</div>
                  <div className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    {tech.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Flagship Product Section */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 mb-16">
            <div className="text-center">
              <Link href="/products/sdcvp-x" className="inline-block">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-green-600 transition-colors cursor-pointer">
                  Introducing SDCVP-X™
                </h2>
              </Link>
              <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
                Our flagship Verification Acceleration AI Tool that revolutionizes semiconductor design 
                verification through advanced artificial intelligence and machine learning methodologies.
              </p>
              <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-md">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                <span className="font-semibold text-gray-900">Verification Acceleration AI Tool</span>
              </div>
            </div>
          </div>

          {/* Capabilities Overview */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Core Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link href="/solutions/ai-ml" className="text-center group">
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">AI & Machine Learning</h3>
                <p className="text-gray-600">Advanced AI solutions including predictive maintenance, demand forecasting, intelligent automation, and AI-powered verification methodologies</p>
              </Link>
              
              <Link href="/solutions/blockchain" className="text-center group">
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">Blockchain Integration</h3>
                <p className="text-gray-600">Secure, transparent blockchain solutions for finance, supply chain, healthcare, and government applications with seamless technology integration</p>
              </Link>
              
              <Link href="/services" className="text-center group">
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">Advanced Verification</h3>
                <p className="text-gray-600">Expert silicon design verification and validation with cutting-edge technologies like PCIe, CXL, UCIe and advanced memory architectures</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Transform Your Vision Into Reality
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Partner with Veripoint Technologies to leverage cutting-edge AI solutions, blockchain integration, 
            and semiconductor expertise for your next innovation.
          </p>
          <a
            href="https://forms.gle/nA8YkAY7RoeEHZnB7" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-8 py-3 rounded-md font-medium hover:bg-green-700 transition-colors inline-flex items-center justify-center"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            Contact Sales
          </a>
        </div>
      </section>
    </Layout>
  );
}