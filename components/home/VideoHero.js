import Link from 'next/link';

export default function VideoHero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Introducing SDCVP-X
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              AI-based verification
            </p>
            <Link 
              href="/products/sdcvp-x" 
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded transition-colors duration-200"
            >
              Discover Advanced Verification
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}