// components/Navbar.tsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: 'Flight Booking', path: 'https://mazzakotrip.com/', external: true },
    { name: 'Visit Nepal', path: '/visit-nepal' },
    { name: 'Go Overseas', path: '/go-overseas' },
    { name: 'Special Packages', path: '/special-packages' },
    { name: 'News/Events/Blogs', path: '/news-events' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-400 w-10 h-10 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="ml-3 text-xl font-bold text-gray-800">Link Asia TOurs</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.external ? (
                <a 
                  key={item.name}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:text-cyan-500 hover:scale-105 ${
                    isActive(item.path) ? 'text-cyan-500 font-bold' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:text-cyan-500 hover:scale-105 ${
                    isActive(item.path) ? 'text-cyan-500 font-bold' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
            <div className="flex space-x-4">
              <button className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105">
                Log In
              </button>
              <button className="px-4 py-2 rounded-full border border-cyan-500 text-cyan-500 font-medium hover:bg-cyan-50 transition-all duration-300">
                Customer Service
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-cyan-500 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              item.external ? (
                <a
                  key={item.name}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.path) ? 'bg-cyan-50 text-cyan-500' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.path) ? 'bg-cyan-50 text-cyan-500' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
            <div className="pt-4 pb-2 border-t border-gray-200">
              <button className="w-full mb-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium">
                Log In
              </button>
              <button className="w-full px-4 py-2 rounded-full border border-cyan-500 text-cyan-500 font-medium">
                Customer Service
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;