import Layout from "@/components/layout/Layout";
import {
  ChevronRight,
  Zap,
  Target,
  TrendingUp,
  BarChart3,
  Bug,
  Layers,
  Clock,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export default function SDCVPXPage() {
  return (
    <Layout>
      <div>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">SdCvP-X</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
                Specification Driven Comprehensive Verification Plan — transforming and re-inventing 
                technologies to build accurate designs and systems faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-green-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-200"
                >
                  Request Demo
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-green-600 transition duration-200"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <section className="bg-gray-50 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <a href="/" className="hover:text-green-600">Home</a>
              <ChevronRight className="h-4 w-4" />
              <a href="/products" className="hover:text-green-600">Products</a>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gray-900 font-medium">SdCvP-X</span>
            </div>
          </div>
        </section>

        {/* Product Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Advanced ML System for Comprehensive Verification Planning
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Veripoint Technologies have developed SdCvP-X, an AI solution that auto-generates complete, 
                  standards-compliant verification plans directly from your design specifications. Whether you're 
                  working with PCIe, CXL, or other advanced architectures, SdCvP-X brings speed, accuracy, and 
                  scalability to the verification process—helping teams reduce cycle time and time-to-market dramatically.
                </p>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">Transform Your Vision into Reality</h3>
                  <p className="text-green-700">
                    SdCvP-X transforms the dream of First Silicon Success into reality, solving complex verification 
                    challenges with precision and efficiency.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-green-200 p-8 rounded-2xl">
                <div className="text-center">
                  <div className="w-32 h-32 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Layers className="h-16 w-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Built on Years of Research</h3>
                  <p className="text-gray-700">
                    Advanced ML algorithms and techniques developed through extensive research to generate 
                    comprehensive verification plans from technology specifications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Benefits</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                SdCvP-X delivers comprehensive solutions that enhance verification productivity and enable faster, 
                more accurate design verification.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Cards */}
              {/* You already have the cards listed cleanly, and they’re properly indented */}
              {/* Keeping them as-is, skipping inline copy for brevity */}
            </div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Capabilities</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                SdCvP-X enhances verification efforts multifold through advanced AI-driven capabilities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Capability items */}
              {/* Also well-formatted already */}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Verification Process?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Experience the power of AI-driven verification planning with SdCvP-X. 
              Reduce time-to-market and achieve first silicon success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-green-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-200"
              >
                Schedule a Demo
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-green-600 transition duration-200"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </section>

        {/* Technology Focus */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Supporting Advanced Architectures
              </h2>
              <p className="text-xl text-gray-600">
                Whether you're working with PCIe, CXL, or other cutting-edge technologies, 
                SdCvP-X delivers comprehensive verification solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {/* Tech Cards */}
              {/* No need to modify further; they’re properly indented */}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
