import Link from 'next/link';

export default function Careers() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Join Our Team
            </h1>
            <p className="text-lg text-green-100 max-w-2xl mx-auto">
              Be part of Veripoint Technologies' mission to deliver forward-looking semiconductor solutions. 
              We're looking for passionate individuals to help shape the future of technology.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Current Openings Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Current Openings
          </h2>

          {/* AI Engineer Position */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md p-8 mb-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  AI Engineer
                </h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                    On-site
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                    </svg>
                    Full-time
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    2+ years experience required
                  </span>
                </div>
              </div>
              <div className="flex-shrink-0">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  Open Position
                </span>
              </div>
            </div>

            {/* Job Description */}
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">About the Role</h4>
                <p className="text-gray-700 leading-relaxed">
                  We're seeking a talented AI Engineer to join our innovative team at Veripoint Technologies. 
                  You'll be working on cutting-edge AI/ML solutions integrated with our semiconductor technologies, 
                  contributing to the development of next-generation intelligent systems.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Responsibilities</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Design and implement AI/ML algorithms for semiconductor applications</li>
                  <li>Develop and optimize machine learning models for hardware acceleration</li>
                  <li>Collaborate with hardware engineers to integrate AI solutions into chip designs</li>
                  <li>Research and evaluate emerging AI technologies and their potential applications</li>
                  <li>Participate in the full software development lifecycle from concept to deployment</li>
                  <li>Work closely with cross-functional teams to deliver innovative AI-powered products</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Required Qualifications</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Bachelor's or Master's degree in Computer Science, AI/ML, or related field</li>
                  <li>Minimum 2 years of hands-on experience in AI/ML development</li>
                  <li>Strong proficiency in Python, TensorFlow, PyTorch, or similar frameworks</li>
                  <li>Experience with deep learning, neural networks, and model optimization</li>
                  <li>Knowledge of computer vision, NLP, or signal processing</li>
                  <li>Understanding of hardware-software integration principles</li>
                  <li>Strong problem-solving skills and analytical thinking</li>
                  <li>Excellent communication and teamwork abilities</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Preferred Qualifications</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Experience with semiconductor design or embedded systems</li>
                  <li>Knowledge of CUDA, OpenCL, or other parallel computing frameworks</li>
                  <li>Familiarity with edge AI and IoT applications</li>
                  <li>Experience with cloud platforms (AWS, GCP, Azure)</li>
                  <li>Publications or contributions to AI/ML research</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">What We Offer</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Competitive salary and comprehensive benefits package</li>
                  <li>Opportunity to work on cutting-edge semiconductor and AI technologies</li>
                  <li>Professional development and continuous learning opportunities</li>
                  <li>Collaborative and innovative work environment</li>
                  <li>Health insurance, retirement plans, and flexible work arrangements</li>
                  <li>Access to state-of-the-art research facilities and equipment</li>
                </ul>
              </div>
            </div>

            {/* Application Section */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Ready to Apply?</h4>
              <p className="text-gray-700 mb-4">
                If you're passionate about AI and want to be part of the future of semiconductor technology, 
                we'd love to hear from you!
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-2">
                    Send your resume and cover letter to:
                  </p>
                  <a 
                    href="mailto:hr@veripointtech.com?subject=Application for AI Engineer Position"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    hr@veripointtech.com
                  </a>
                </div>
                <div className="text-sm text-gray-500">
                  <p>Please include "AI Engineer Application" in the subject line</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Culture Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why Choose Veripoint Technologies?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation-Driven</h3>
              <p className="text-gray-600">
                Work on breakthrough technologies that shape the future of semiconductors and AI integration.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Growth-Focused</h3>
              <p className="text-gray-600">
                Continuous learning opportunities with mentorship programs and professional development support.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Collaborative</h3>
              <p className="text-gray-600">
                Join a diverse team of experts working together to solve complex technological challenges.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Questions About This Position?
          </h2>
          <p className="text-gray-600 mb-6">
            Our HR team is here to help answer any questions about this role or our company.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="mailto:hr@veripointtech.com"
              className="inline-flex items-center justify-center px-6 py-3 border border-green-600 text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50 transition-colors duration-200"
            >
              Email HR Team
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
}