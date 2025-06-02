import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/5 mb-8 md:mb-0">
            <Link href="/" className="flex items-center mb-2">
              {/* Replace with your actual logo */}
              <img 
                src="/logo_foot.png" 
                alt="Veripoint Technologies" 
                className="h-8 w-auto"
                onError={(e) => {
                  // Fallback to text if logo fails to load
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="text-green-600 font-bold text-xl hidden">
                VERIPOINT
              </span>
            </Link>
            <p className="mt-2 text-sm text-gray-600">
              Smart Engineering and Silicon Solutions
            </p>
          </div>

          <div className="w-full md:w-4/5 grid grid-cols-2 md:grid-cols-5 gap-8">
            <div>
              <h3 className="text-gray-900 font-semibold mb-4">Corporate</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-green-600 text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-600 hover:text-green-600 text-sm">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/locations" className="text-gray-600 hover:text-green-600 text-sm">
                    View Office Locations
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-green-600 text-sm">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-900 font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/products/sdcvp-x" className="text-gray-600 hover:text-green-600 text-sm">
                    SDCVP-X™
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-900 font-semibold mb-4">Learn</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="text-gray-600 hover:text-green-600 text-sm">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link href="/articles" className="text-gray-600 hover:text-green-600 text-sm">
                    Technical Articles
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-900 font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/solutions/ai-ml" className="text-gray-600 hover:text-green-600 text-sm">
                    AI/ML Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/blockchain" className="text-gray-600 hover:text-green-600 text-sm">
                    Blockchain
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-600 hover:text-green-600 text-sm">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-gray-600 hover:text-green-600 text-sm">
                    Support
                  </Link>
                </li>
                
              </ul>
            </div>

            <div>
              <h3 className="text-gray-900 font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-gray-600 hover:text-green-600 text-sm">
                    Privacy
                  </Link>
                </li>
                
                <li>
                  <Link href="/security" className="text-gray-600 hover:text-green-600 text-sm">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="/copyright" className="text-gray-600 hover:text-green-600 text-sm">
                    Copyright
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-600">
                © {new Date().getFullYear()} Veripoint Technologies. All rights reserved.
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-900 font-semibold mb-2">Follow us</p>
              <div className="flex space-x-4">
                <a href="https://instagram.com/veripoint.technologies" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/veripoint-technologies/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}