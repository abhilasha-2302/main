import Head from 'next/head';
import Link from 'next/link';

export default function EducationPage() {
  return (
    <>
      <Head>
        <title>Education & Ed-tech AI/ML Solutions | Veripoint Technologies</title>
        <meta name="description" content="AI-powered education solutions with adaptive learning engines, student risk analytics, smart content services, and remote proctoring for educational institutions." />
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
            <img src="/api/placeholder/1920/1080" alt="Education background" className="w-full h-full object-cover" />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AI-Powered Education Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Transform education with adaptive learning engines, predictive student analytics, 
            smart content services, and AI-powered remote proctoring for enhanced learning outcomes.
          </p>
          
          {/* Industry Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              K-12 Education
            </span>
            <span className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              Higher Education
            </span>
            <span className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              Ed-Tech Platforms
            </span>
            <span className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              Corporate Training
            </span>
            <span className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              Online Learning
            </span>
            <span className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              Skills Development
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
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
              Challenges in Modern Education
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Educational institutions face critical challenges that impact student engagement, learning outcomes, and institutional effectiveness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Lack of Personalized Learning</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Traditional methods fail to deliver customized content, hindering student engagement and progress in learning outcomes.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">High Dropout Rates</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Difficulty in identifying at-risk students early, affecting retention rates and overall learning outcomes across institutions.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Content Scalability Challenges</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Struggles to efficiently create and deliver content in multiple formats (text, audio, video), limiting accessibility and reach.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Online Assessment Integrity</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Difficulty in ensuring fairness and preventing cheating in online assessments, compromising academic integrity and credibility.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Limited Real-Time Insights</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Lack of actionable insights into student performance in real time, making it challenging for educators to intervene and improve outcomes.
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
              AI-Powered Solutions for Education
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive AI/ML solutions that personalize learning, predict student success, automate content creation, and ensure assessment integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="p-8">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Adaptive Learning Engine
                </h3>
                <p className="text-gray-600 mb-6">
                  Delivers customized content tailored to individual student needs, integrated with LMS platforms to enhance engagement and learning outcomes through personalized learning paths.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Key Benefits:</h4>
                  <ul className="space-y-1">
                    <li className="text-sm text-gray-600 flex items-center">
                      <svg className="h-4 w-4 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Personalized content delivery
                    </li>
                    <li className="text-sm text-gray-600 flex items-center">
                      <svg className="h-4 w-4 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      LMS platform integration
                    </li>
                    <li className="text-sm text-gray-600 flex items-center">
                      <svg className="h-4 w-4 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Enhanced student engagement
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="p-8">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Student Risk & Dropout Analytics
                </h3>
                <p className="text-gray-600 mb-6">
                  Predictive models that analyze student behavior and academic performance, enabling early identification of at-risk students and personalized retention strategies.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Key Benefits:</h4>
                  <ul className="space-y-1">
                    <li className="text-sm text-gray-600 flex items-center">
                      <svg className="h-4 w-4 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Early at-risk student identification
                    </li>
                    <li className="text-sm text-gray-600 flex items-center">
                      <svg className="h-4 w-4 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Behavioral pattern analysis
                    </li>
                    <li className="text-sm text-gray-600 flex items-center">
                      <svg className="h-4 w-4 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Personalized retention strategies
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="p-8">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Smart Content Services
                </h3>
                <p className="text-gray-600 mb-6">
                  Automated content summarization, translation, and audio/video conversion to make learning materials accessible at scale, across multiple formats and languages.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Key Benefits:</h4>
                  <ul className="space-y-1">
                    <li className="text-sm text-gray-600 flex items-center">
                      <svg className="h-4 w-4 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Automated content summarization
                    </li>
                    <li className="text-sm text-gray-600 flex items-center">
                      <svg className="h-4 w-4 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Multi-language translation
                    </li>
                    <li className="text-sm text-gray-600 flex items-center">
                      <svg className="h-4 w-4 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Multi-format content conversion
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="p-8">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Remote Proctoring with AI
                </h3>
                <p className="text-gray-600 mb-6">
                  Ensures the integrity of online assessments by using AI-powered face and behavior analysis to detect cheating and maintain academic honesty in remote testing environments.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Key Benefits:</h4>
                  <ul className="space-y-1">
                    <li className="text-sm text-gray-600 flex items-center">
                      <svg className="h-4 w-4 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      AI-powered face recognition
                    </li>
                    <li className="text-sm text-gray-600 flex items-center">
                      <svg className="h-4 w-4 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Behavioral analysis detection
                    </li>
                    <li className="text-sm text-gray-600 flex items-center">
                      <svg className="h-4 w-4 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Academic integrity assurance
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
              Our AI/ML education solutions are designed to serve diverse sectors across the education and training ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { name: 'K-12 Education', icon: '🎓' },
              { name: 'Higher Education', icon: '🏫' },
              { name: 'Online Learning', icon: '💻' },
              { name: 'Ed-Tech Platforms', icon: '📱' },
              { name: 'Corporate Training', icon: '🏢' },
              { name: 'Government Education', icon: '🏛️' },
              { name: 'Learning Management Systems', icon: '📚' },
              { name: 'Skills Development', icon: '🔧' },
              { name: 'Workforce Training', icon: '👨‍💼' },
              { name: 'Assessment Services', icon: '📝' },
              { name: 'Credentialing', icon: '🏆' },
              { name: 'AI Education Solutions', icon: '🤖' }
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
      <section className="py-16 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">85%</div>
              <div className="text-purple-100">Improved Engagement</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">40%</div>
              <div className="text-purple-100">Reduced Dropout Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">90%</div>
              <div className="text-purple-100">Assessment Accuracy</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-purple-100">Languages Supported</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Educational Institution?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI-powered education solutions can personalize learning, 
            improve student outcomes, and enhance the overall educational experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-purple-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Contact Our Experts
            </Link>
            <Link href="/solutions/ai-ml" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Explore Other Industries
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}