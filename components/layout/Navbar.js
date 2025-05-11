import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [solutionsDropdown, setSolutionsDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setSolutionsDropdown(false);
    setServicesDropdown(false);
  };

  const toggleSolutionsDropdown = () => {
    setSolutionsDropdown(!solutionsDropdown);
    setServicesDropdown(false);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdown(!servicesDropdown);
    setSolutionsDropdown(false);
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-green-600 font-bold text-xl">VERIPOINT</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="ml-10 flex items-baseline space-x-8">
              <div className="relative">
                <button
                  onClick={toggleSolutionsDropdown}
                  className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Solutions
                </button>
                {solutionsDropdown && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <Link href="/solutions/ai-ml" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        AI-ML Solutions
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="relative">
                <button
                  onClick={toggleServicesDropdown}
                  className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Verification Services
                </button>
                {servicesDropdown && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <Link href="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Overview
                      </Link>
                      <Link href="/services/capabilities" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Capabilities
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center">
            <button className="ml-4 p-2">
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
            <Link href="/contact" className="ml-6 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              Contact Sales
            </Link>
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
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
          <button
            onClick={toggleSolutionsDropdown}
            className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
          >
            Solutions
          </button>
          {solutionsDropdown && (
            <div className="pl-4">
              <Link 
                href="/solutions/ai-ml" 
                className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-sm"
                onClick={toggleMenu}
              >
                AI-ML Solutions
              </Link>
            </div>
          )}
          
          <button
            onClick={toggleServicesDropdown}
            className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
          >
            Verification Services
          </button>
          {servicesDropdown && (
            <div className="pl-4">
              <Link 
                href="/services" 
                className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-sm"
                onClick={toggleMenu}
              >
                Overview
              </Link>
              <Link 
                href="/services/capabilities" 
                className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-sm"
                onClick={toggleMenu}
              >
                Capabilities
              </Link>
            </div>
          )}
          
          <div className="pt-4 flex flex-col space-y-4">
            <div className="flex items-center px-3">
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <span className="ml-2 text-gray-700">Search</span>
            </div>
            <Link 
              href="/contact" 
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium mx-3"
              onClick={toggleMenu}
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}