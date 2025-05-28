import Link from 'next/link';

export default function TechnologiesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-normal text-gray-900 mb-12">
          Technologies & Industry Solutions
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/solutions/ai-ml" className="group p-6 border border-gray-200 rounded-lg hover:border-green-600 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 bg-green-600 rounded"></div>
              </div>
              <div>
                <h3 className="text-xl font-normal text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-200">
                  AI
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Harnessing AI to drive intelligent solutions for tomorrow challenges
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/products/sdcvp-x" className="group p-6 border border-gray-200 rounded-lg hover:border-green-600 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
              </div>
              <div>
                <h3 className="text-xl font-normal text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-200">
                  Design Verification
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Ensuring design integrity with high-performance verification solutions
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/solutions/blockchain" className="group p-6 border border-gray-200 rounded-lg hover:border-green-600 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 bg-purple-600 rounded"></div>
              </div>
              <div>
                <h3 className="text-xl font-normal text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-200">
                  Blockchain
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Empowering trust and decentralization with robust blockchain development
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}