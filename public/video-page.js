import Layout from '@/components/layout/Layout';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function VideoPage() {
  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>Blockchain Solutions Video | Veripoint Technologies</title>
        <meta name="description" content="Watch our comprehensive video on blockchain solutions and their applications across industries" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Full Screen Video Section */}
      <section className="relative min-h-screen bg-black flex items-center justify-center">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="absolute top-6 left-6 z-30 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Video Container */}
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-video">
            <video
              className="w-full h-full object-cover rounded-lg shadow-2xl"
              src="/videos/blockchain.mp4"
              controls
              autoPlay
              preload="metadata"
            />
          </div>
          
          {/* Video Info */}
          <div className="text-center mt-8">
            <h1 className="text-3xl md:text-4xl font-light text-white mb-4">
              Blockchain Solutions Overview
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Discover how blockchain technology can transform your business with enhanced security, 
              transparency, and automation across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Video Controls/Info Section */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="text-white">
              <div className="text-2xl font-bold text-green-400 mb-2">5:30</div>
              <div className="text-gray-300">Duration</div>
            </div>
            <div className="text-white">
              <div className="text-2xl font-bold text-green-400 mb-2">4K</div>
              <div className="text-gray-300">Quality</div>
            </div>
            <div className="text-white">
              <div className="text-2xl font-bold text-green-400 mb-2">10+</div>
              <div className="text-gray-300">Industries Covered</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}