import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function Support() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Support Center
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Get comprehensive support for our AI-driven verification, AI/ML solutions, and blockchain technologies with expert assistance and resources
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Options */}
        <div className="grid md:grid-cols-1 gap-8 mb-16 max-w-2xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Support</h3>
            <p className="text-gray-600 mb-4">Get detailed technical assistance and expert guidance for all our solutions</p>
            <a href="mailto:support@veripointtech.com" className="text-green-600 hover:text-green-700 font-medium text-lg">
              support@veripointtech.com
            </a>
            <p className="text-sm text-gray-500 mt-3">
              We typically respond within 24 hours during business days
            </p>
          </div>
        </div>

        {/* Support Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How can we help you?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Link href="/products/sdcvp-x" className="border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">SDCVP-X™</h3>
              <p className="text-gray-600 text-sm">Comprehensive support for our AI-driven verification acceleration platform</p>
            </Link>

            <Link href="solutions/ai-ml" className="border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">AI/ML Solutions</h3>
              <p className="text-gray-600 text-sm">Support for our artificial intelligence and machine learning implementations</p>
            </Link>

            <Link href="/solutions/blockchain" className="border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Blockchain Solutions</h3>
              <p className="text-gray-600 text-sm">Technical assistance for blockchain technology implementations and integration</p>
            </Link>
          </div>
        </div>



        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="border border-gray-200 rounded-lg">
              <div className="px-6 py-4">
                <h3 className="font-medium text-gray-900 mb-3">How do I get started with SDCVP-X™?</h3>
                <p className="text-gray-600 text-sm">
                  Start with a demo to identify designs and see the impact. SDCVP-X™ offers seamless integration into your existing verification workflow and can scale across IPs, ASICs, SoCs, and Custom Interfaces. Contact us to request a personalized demonstration.
                </p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg">
              <div className="px-6 py-4">
                <h3 className="font-medium text-gray-900 mb-3">What verification challenges does SDCVP-X™ solve?</h3>
                <p className="text-gray-600 text-sm">
                  SDCVP-X™ addresses key verification challenges including: manual verification planning inefficiencies, unstructured debug & root cause analysis delays, lack of traceability to specifications, inconsistent verification reuse, and configuration explosion management. Our tool provides auto-generated, spec-aligned comprehensive verification plans.
                </p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg">
              <div className="px-6 py-4">
                <h3 className="font-medium text-gray-900 mb-3">What results can I expect from SDCVP-X™?</h3>
                <p className="text-gray-600 text-sm">
                  Based on our statistics, you can expect: 40% reduction in verification effort, 50% reduction in debug cycle time (from 4-6 weeks to significantly less), on-time or early time to first silicon, and near-zero manual planning effort with automation. These improvements lead to higher first silicon success rates.
                </p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg">
              <div className="px-6 py-4">
                <h3 className="font-medium text-gray-900 mb-3">Who benefits from SDCVP-X™ across the project hierarchy?</h3>
                <p className="text-gray-600 text-sm">
                  Design Verification Engineers get faster test planning and structured debug to boost productivity. Architects gain full traceability from spec to test for better validation. Program/Project Managers receive actionable insights and milestone-based views. Business Leaders achieve higher first silicon success and faster time-to-market.
                </p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg">
              <div className="px-6 py-4">
                <h3 className="font-medium text-gray-900 mb-3">What are the key features of SDCVP-X™?</h3>
                <p className="text-gray-600 text-sm">
                  Key features include: Auto Verification Plan Generator (features, test points, scenarios by config), Auto Constraints Coverage and Assertion planning, Debug Assist Engine with traceability matrix and root-cause accelerators, Specification Evolver that adapts plans as specs update, and Smart Manual Plan Alignment to eliminate gaps and ensure consistency.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 rounded-lg p-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Get In Touch</h2>
            <p className="text-gray-600 text-center mb-8">
              Have a specific question about our solutions? Fill out our contact form and our experts will get back to you.
            </p>
            <div className="text-center">
              <a 
                href="https://forms.gle/nA8YkAY7RoeEHZnB7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                Fill Contact Form
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}