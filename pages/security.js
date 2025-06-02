import Layout from "@/components/layout/Layout";
import Link from 'next/link';
import {
  Shield,
  Mail,
  AlertTriangle,
  CheckCircle,
  Clock,
  Users,
} from "lucide-react";

export default function SecurityPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <Shield className="h-16 w-16 mx-auto mb-6 text-green-200" />
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Veripoint Technologies PSIRT & Vulnerability Disclosure
              </h2>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                Our Product Security Incident Response Team is committed to
                maintaining the highest standards of security across all
                Veripoint semiconductor solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-2">
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Commitment to Security
                </h2>
                <div className="prose prose-lg text-gray-700 leading-relaxed">
                  <p className="mb-6">
                    Veripoint Technologies is continuously improving processes and activities
                    for developing and implementing secure software and
                    hardware. The Veripoint Product Security Incident Response
                    Team (PSIRT) is focused on handling security incidents for
                    Veripoint Technologies products.
                  </p>
                  <p className="mb-6">
                    Veripoint Technologies PSIRTs primary objective is to minimize the
                    risks associated with security incidents in a timely,
                    secure, and responsible way. Veripoint PSIRT coordinates
                    the response and disclosure of security issues related to
                    Veripoint Technologies products.
                  </p>
                  <p className="mb-6">
                    Veripoint Technologies regularly shares product updates with its
                    customers through our secure customer portal. In the event
                    of any confirmed security issues, these are disclosed to
                    affected customers using the same platform.
                  </p>
                </div>
              </div>

              {/* Industry Standards */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Industry Best Practices
                </h2>
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Veripoint Technologies is committed to collaborating with external
                    parties in the event of security incidents and following
                    industry best practices in handling security incidents. The
                    Veripoint Technologies process to handle security incidents is based on
                    well-known industry standards, including:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <div className="font-semibold text-green-600 mb-2">
                        NIST-SP-800-61
                      </div>
                      <div className="text-sm text-gray-600">
                        Computer Security Incident Handling Guide
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <div className="font-semibold text-green-600 mb-2">
                        ISO 29147
                      </div>
                      <div className="text-sm text-gray-600">
                        Vulnerability Disclosure
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <div className="font-semibold text-green-600 mb-2">
                        ISO 30111
                      </div>
                      <div className="text-sm text-gray-600">
                        Vulnerability Handling Processes
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Process Overview */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Response Process
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Veripoint Technologies PSIRT coordinates with the necessary internal teams
                  to investigate the reports, verify the findings and devise
                  possible mitigation or remediation strategies. Throughout the
                  life cycle of a security incident, the PSIRT keeps close
                  contact with the internal and external stakeholders as
                  required, informing of significant updates as appropriate.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <div className="flex items-center mb-4">
                      <AlertTriangle className="h-6 w-6 text-orange-500 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">
                        Report Reception
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Initial assessment and acknowledgment of security reports
                      within 24 hours.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <div className="flex items-center mb-4">
                      <Users className="h-6 w-6 text-blue-500 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">
                        Team Coordination
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Cross-functional team assembly for thorough investigation
                      and analysis.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <div className="flex items-center mb-4">
                      <Clock className="h-6 w-6 text-purple-500 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">
                        Timely Response
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Regular updates and transparent communication throughout
                      the process.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <div className="flex items-center mb-4">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">
                        Resolution
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Implementation of fixes and coordinated disclosure to
                      stakeholders.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Report Security Issue Card */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8 sticky top-8">
                <div className="text-center">
                  <Mail className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Report a Security Issue
                  </h3>
                  <p className="text-gray-700 mb-6 text-sm">
                    To report security incidents or potential vulnerabilities in
                    Veripoint Technologies products, please contact our PSIRT team.
                  </p>
                  <div className="bg-white rounded-lg p-4 mb-6 border border-green-200">
                    <div className="font-semibold text-gray-900 mb-2">
                      Email Address:
                    </div>
                    <a
                      href="mailto:security@veripointtech.com"
                      className="text-green-600 hover:text-green-700 font-mono text-sm break-all"
                    >
                      security@veripointtech.com
                    </a>
                  </div>
                  <div className="text-xs text-gray-600 text-left bg-gray-50 rounded-lg p-3">
                    <strong>Please include:</strong>
                    <ul className="mt-2 space-y-1 list-disc list-inside">
                      <li>Product name and version</li>
                      <li>Detailed description of the issue</li>
                      <li>Steps to reproduce (if applicable)</li>
                      <li>Potential impact assessment</li>
                      <li>Your contact information</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Additional Resources */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Additional Resources
                </h3>
                <div className="space-y-3">
                  <Link
                    href="/security"
                    className="block text-green-600 hover:text-green-700 text-sm font-medium"
                  >
                    Security Overview
                  </Link>
            
                  <Link
                    href="/contact"
                    className="block text-green-600 hover:text-green-700 text-sm font-medium"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/privacy"
                    className="block text-green-600 hover:text-green-700 text-sm font-medium"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Protecting Our Customers Through Collaboration
              </h2>
              <p className="text-gray-700 max-w-2xl mx-auto mb-8">
                Our security is strengthened by the vigilance of our community.
                We appreciate responsible disclosure and work closely with
                security researchers to ensure the continued safety of our
                semiconductor solutions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <Link
                  href="mailto:security@security.in"
                  className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition duration-150 font-medium"
                >
                  Report Security Issue
                </Link>
                <Link
                  href="/https://forms.gle/nA8YkAY7RoeEHZnB7"
                  className="bg-white text-green-600 border border-green-600 px-6 py-3 rounded-md hover:bg-green-50 transition duration-150 font-medium"
                >
                  General Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
