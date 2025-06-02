import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(true); // Changed: Always start with solid background
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRef = useRef(null);

  // Google Form URL for Contact Sales
  const contactFormUrl = 'https://forms.gle/nxKwiYWCoU3Wasn56';

  useEffect(() => {
    const handleScroll = () => {
      // Fixed: Always keep navbar visible with solid background
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        // Changed: Keep solid background even at top for consistent visibility
        setIsScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fixed: Add click outside detection
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Fixed: Close dropdown when clicking on a link
  const handleLinkClick = () => {
    setActiveDropdown(null);
    setIsOpen(false);
  };

  // Handle Contact Sales click
  const handleContactSalesClick = () => {
    window.open(contactFormUrl, '_blank', 'noopener,noreferrer');
    handleLinkClick(); // Close mobile menu if open
  };

  const dropdowns = {
    solutions: {
      technology: [
        { name: 'AI/ML Solutions', href: '/solutions/ai-ml' },
        { name: 'Blockchain', href: '/solutions/blockchain' }
      ]
    },
    products: [
      { name: 'SDCVP-X™', href: '/products/sdcvp-x' }
    ],
    services: [
      { name: 'Design Verification', href: '/services' },
    ],
    company: {
      overview: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' }
      ],
      resources: [
        { name: 'Blogs', href: '/blog' },
        
      ]
    }
  };

  return (
    <nav 
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
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
              <span className="text-2xl font-bold text-green-700 hidden">
                Veripoint
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-8">
              <div className="relative">
                <button 
                  onClick={() => toggleDropdown('solutions')}
                  className={`${
                    activeDropdown === 'solutions' 
                      ? 'text-green-600' 
                      : 'text-gray-700'
                  } hover:text-green-600 hover:underline underline-offset-8 decoration-2 py-2 px-1 transition-colors`}
                >
                  Solutions
                </button>
                {activeDropdown === 'solutions' && (
                  <div className="absolute z-10 -ml-4 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-2 px-3">
                      <div>
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider pb-1 mb-2 border-b border-gray-200">
                          Technology
                        </h3>
                        <ul className="space-y-2">
                          {dropdowns.solutions.technology.map((item, index) => (
                            <li key={index}>
                              <Link 
                                href={item.href}
                                className="block text-sm text-gray-700 hover:text-green-600 px-2 py-1 rounded hover:bg-gray-50"
                                onClick={handleLinkClick}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="relative">
                <button 
                  onClick={() => toggleDropdown('products')}
                  className={`${
                    activeDropdown === 'products' 
                      ? 'text-green-600' 
                      : 'text-gray-700'
                  } hover:text-green-600 hover:underline underline-offset-8 decoration-2 py-2 px-1 transition-colors`}
                >
                  Products
                </button>
                {activeDropdown === 'products' && (
                  <div className="absolute z-10 -ml-4 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu">
                      {dropdowns.products.map((item, index) => (
                        <Link 
                          key={index} 
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-600"
                          onClick={handleLinkClick}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="relative">
                <button 
                  onClick={() => toggleDropdown('services')}
                  className={`${
                    activeDropdown === 'services' 
                      ? 'text-green-600' 
                      : 'text-gray-700'
                  } hover:text-green-600 hover:underline underline-offset-8 decoration-2 py-2 px-1 transition-colors`}
                >
                  Services
                </button>
                {activeDropdown === 'services' && (
                  <div className="absolute z-10 -ml-4 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu">
                      {dropdowns.services.map((item, index) => (
                        <Link 
                          key={index} 
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-600"
                          onClick={handleLinkClick}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="relative">
                <button 
                  onClick={() => toggleDropdown('company')}
                  className={`${
                    activeDropdown === 'company' 
                      ? 'text-green-600' 
                      : 'text-gray-700'
                  } hover:text-green-600 hover:underline underline-offset-8 decoration-2 py-2 px-1 transition-colors`}
                >
                  Company
                </button>
                {activeDropdown === 'company' && (
                  <div className="absolute z-10 -ml-4 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-2 px-3">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider pb-1 mb-2 border-b border-gray-200">
                            Company Overview
                          </h3>
                          <ul className="space-y-2">
                            {dropdowns.company.overview.map((item, index) => (
                              <li key={index}>
                                <Link 
                                  href={item.href}
                                  className="block text-sm text-gray-700 hover:text-green-600"
                                  onClick={handleLinkClick}
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider pb-1 mb-2 border-b border-gray-200">
                            Resources
                          </h3>
                          <ul className="space-y-2">
                            {dropdowns.company.resources.map((item, index) => (
                              <li key={index}>
                                <Link 
                                  href={item.href}
                                  className="block text-sm text-gray-700 hover:text-green-600"
                                  onClick={handleLinkClick}
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <button 
              onClick={handleContactSalesClick}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-150"
            >
              Contact Sales
            </button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 focus:outline-none"
            >
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-md">
          <button
            onClick={() => toggleDropdown('solutions')}
            className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
          >
            Solutions
          </button>
          {activeDropdown === 'solutions' && (
            <div className="pl-4">
              <div className="border-b border-gray-200 pb-2 mb-2">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  Technology
                </div>
                {dropdowns.solutions.technology.map((item, index) => (
                  <Link 
                    key={index} 
                    href={item.href} 
                    className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-sm"
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
          
          <button
            onClick={() => toggleDropdown('products')}
            className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
          >
            Products
          </button>
          {activeDropdown === 'products' && (
            <div className="pl-4">
              {dropdowns.products.map((item, index) => (
                <Link 
                  key={index} 
                  href={item.href} 
                  className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-sm"
                  onClick={handleLinkClick}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
          
          <button
            onClick={() => toggleDropdown('services')}
            className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
          >
            Services
          </button>
          {activeDropdown === 'services' && (
            <div className="pl-4">
              {dropdowns.services.map((item, index) => (
                <Link 
                  key={index} 
                  href={item.href} 
                  className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-sm"
                  onClick={handleLinkClick}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
          
          <button
            onClick={() => toggleDropdown('company')}
            className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
          >
            Company
          </button>
          {activeDropdown === 'company' && (
            <div className="pl-4">
              <div className="border-b border-gray-200 pb-2 mb-2">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  Company Overview
                </div>
                {dropdowns.company.overview.map((item, index) => (
                  <Link 
                    key={index} 
                    href={item.href} 
                    className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-sm"
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  Resources
                </div>
                {dropdowns.company.resources.map((item, index) => (
                  <Link 
                    key={index} 
                    href={item.href} 
                    className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-sm"
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
          
          <div className="pt-4">
            <button 
              onClick={handleContactSalesClick}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium mx-3 block text-center w-[calc(100%-1.5rem)]"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}