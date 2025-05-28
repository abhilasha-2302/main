import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="py-16 bg-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-normal text-white mb-8">
          Connect with us
        </h2>
        <Link 
          href="https://forms.gle/nxKwiYWCoU3Wasn56" 
          className="inline-block bg-white hover:bg-gray-100 text-green-600 py-3 px-8 rounded-md transition-colors duration-200"
        >
          Contact Sales
        </Link>
      </div>
    </section>
  );
}