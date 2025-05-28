import Layout from "@/components/layout/Layout";
import Link from 'next/link';
import { MapPin, ExternalLink, Phone, Mail } from "lucide-react";

export default function OfficeLocations() {
  const locations = [
    {
      id: 1,
      name: "Urbtech Trade Center Office",
      address:
        "Unit no. IS-800, Ground Floor, Tower-C, Urbtech Trade Center, Plot No. B-35, Sector-132, Noida 201304, Uttar Pradesh, India",
      mapUrl: "https://g.co/kgs/HWqEdXs",
      type: "Primary Office",
      description:
        "Our main office and operational headquarters providing comprehensive semiconductor solutions.",
    },
    {
      id: 2,
      name: "World Trade Tower Office",
      address:
        "Tower B, Unit 304, M Floor, World Trade Tower, Plot no. C-1, Sector-16, Noida 201301, Uttar Pradesh, India",
      mapUrl: "https://g.co/kgs/Zi7LsxD",
      type: "Secondary Office",
      description:
        "Our secondary facility located in the prestigious World Trade Tower complex.",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Our Office Locations
              </h1>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                Visit us at our state-of-the-art facilities in Noida, where
                innovation meets excellence in semiconductor solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Locations Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-8">
            {locations.map((location) => (
              <div
                key={location.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full mb-2">
                        {location.type}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {location.name}
                      </h3>
                    </div>
                    <MapPin className="text-green-600 flex-shrink-0" size={32} />
                  </div>

                  <p className="text-gray-600 mb-4">{location.description}</p>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin
                        className="text-gray-400 mt-1 flex-shrink-0"
                        size={20}
                      />
                      <p className="text-gray-700 leading-relaxed">
                        {location.address}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <a
                        href={location.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium transition-colors duration-200"
                      >
                        <span>View on Google Maps</span>
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 px-8 py-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Phone size={16} />
                        <span>Contact for directions</span>
                      </div>
                    </div>
                    <button className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 transition-colors duration-200">
                      <Mail size={16} className="mr-2" />
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Need Help Finding Us?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our team is here to help you locate our offices and arrange
                visits. Contact us for detailed directions or to schedule a
                meeting.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Phone className="text-green-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900">Call Us</h3>
                <p className="text-gray-600">
                  Contact our reception for assistance
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Mail className="text-green-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900">Email Us</h3>
                <p className="text-gray-600">Send us your visit requirements</p>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="text-green-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900">Visit Us</h3>
                <p className="text-gray-600">Schedule a tour of our facilities</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors duration-200"
              >
                Contact Us Today
                <ExternalLink size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
