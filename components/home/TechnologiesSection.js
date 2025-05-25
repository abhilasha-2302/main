export default function TechnologiesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-gray-900 mb-12">
          Technologies & Industry Solutions
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-12 h-12 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2c-1.1 0-2 .9-2 2v1c-1.1 0-2 .9-2 2v1c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2V7c0-1.1-.9-2-2-2V4c0-1.1-.9-2-2-2zm0 2v1h4v1h-4v1h6v8H6v-8h6V7h-4V5h4zm-1 8c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
                <circle cx="12" cy="8" r="1.5"/>
                <path d="M15.5 7.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5.22.5.5.5.5-.22.5-.5zm-7 0c0-.28-.22-.5-.5-.5s-.5.22-.5.5.22.5.5.5.5-.22.5-.5z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                AI
              </h3>
              <p className="text-lg text-gray-600">
                Harnessing AI to drive intelligent solutions for tomorrow's challenges
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-12 h-12 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM8.5 16L12 13.5 15.5 16 12 18.5 8.5 16z"/>
                <rect x="10" y="6" width="4" height="1"/>
                <rect x="10" y="17" width="4" height="1"/>
                <rect x="6" y="10" width="1" height="4"/>
                <rect x="17" y="10" width="1" height="4"/>
                <circle cx="12" cy="12" r="2"/>
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Design Verification
              </h3>
              <p className="text-lg text-gray-600">
                Ensuring design integrity with high-performance verification solutions
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-12 h-12 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v4H6V4zm8 0h4v4h-4V4zM6 10h4v4H6v-4zm8 0h4v4h-4v-4zM6 16h4v4H6v-4zm8 0h4v4h-4v-4z"/>
                <path d="M4 2v2h2V2H4zm0 4v2h2V6H4zm0 4v2h2v-2H4zm0 4v2h2v-2H4zm0 4v2h2v-2H4zm4-16v2h2V2H8zm4 0v2h2V2h-2zm4 0v2h2V2h-2zm4 0v2h2V2h-2zm0 4v2h2V6h-2zm0 4v2h2v-2h-2zm0 4v2h2v-2h-2zm0 4v2h2v-2h-2zm-4 0v2h2v-2h-2zm-4 0v2h2v-2H8zm-4 0v2h2v-2H4z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Blockchain
              </h3>
              <p className="text-lg text-gray-600">
                Empowering trust and decentralization with robust blockchain development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}