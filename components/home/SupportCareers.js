import Link from 'next/link';

export default function SupportCareers() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:border-r border-gray-300 pr-8">
            <h2 className="text-2xl font-normal text-gray-900 mb-4">
              Support & Services
            </h2>
            <p className="text-gray-600 mb-6">
              Explore the Veripoint Technologies Support Community! 
              View our service offerings as well.
            </p>
            <Link 
              href="/support" 
              className="text-green-600 hover:text-green-700 hover:underline text-sm font-medium"
            >
              View Support Services
            </Link>
          </div>
          
          <div className="md:pl-8">
            <h2 className="text-2xl font-normal text-gray-900 mb-4">
              Careers
            </h2>
            <p className="text-gray-600 mb-6">
              Work at Veripoint Technologies and join a first-in-class team of technology 
              professionals. Apply for a position today.
            </p>
            <Link 
              href="/careers" 
              className="text-green-600 hover:text-green-700 hover:underline text-sm font-medium"
            >
              View Careers
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}