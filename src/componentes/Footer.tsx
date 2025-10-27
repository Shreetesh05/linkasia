// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">About Us</h3>
            <p className="text-gray-600">
              MazzakoTrip provides exceptional travel experiences with a focus on sustainability and authentic cultural immersion.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Affiliates</h3>
            <ul className="space-y-2">
              {['Nepal Tourism Board', 'Trekking Agencies Association', 'Sustainable Travel International', 'Adventure Travel Trade Association'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-cyan-500 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((platform) => (
                <a 
                  key={platform}
                  href="#" 
                  className="bg-white p-2 rounded-full shadow-sm text-gray-600 hover:text-cyan-500 hover:shadow-md transition-all duration-300"
                >
                  <span className="sr-only">{platform}</span>
                  <div className="w-6 h-6 bg-gray-300 rounded-full" />
                </a>
              ))}
            </div>
            <div className="mt-4">
              <p className="text-gray-600">Subscribe to our newsletter</p>
              <div className="mt-2 flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-grow px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <button className="bg-cyan-500 text-white px-4 py-2 rounded-r-lg hover:bg-cyan-600 transition-colors duration-300">
                  Join
                </button>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
            <address className="not-italic text-gray-600">
              <p className="mb-1">123 Travel Street, Kathmandu</p>
              <p className="mb-1">Nepal</p>
              <p className="mb-1">Phone: +977 1 1234567</p>
              <p className="mb-1">Email: info@mazzakotrip.com</p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} MazzakoTrip. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;