import React, { useState } from "react";
import { FaMapMarkerAlt, FaClock, FaMoneyBillWave, FaSmile, FaUsers, FaMonument, FaUtensils, FaCamera, FaChevronDown, FaChevronUp, FaStar } from "react-icons/fa";

const HeritageTourCard: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="max-w-4xl w-full rounded-2xl overflow-hidden">
        <div className="relative bg-white rounded-2xl shadow-xl">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-100 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-100 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2"></div>
          
          {/* Header with Gradient Border */}
          <div className="p-8 border-b border-gray-100 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-amber-400"></div>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    POPULAR
                  </div>
                  <div className="flex items-center gap-1 text-amber-400">
                    <FaStar size={14} />
                    <FaStar size={14} />
                    <FaStar size={14} />
                    <FaStar size={14} />
                    <FaStar size={14} />
                    <span className="text-gray-500 text-sm ml-1">(52)</span>
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  Cultural Circuit: Kathmandu - Chitwan - Lumbini - Pokhara
                </h1>
                <div className="flex items-center space-x-2 text-blue-500">
                  <FaMapMarkerAlt className="text-blue-400" />
                  <span className="text-sm font-medium">Nepal's Cultural Heartland</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 rounded-full">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-xs text-white font-medium">Seats Available</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-8">
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-blue-200 transition-all">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-cyan-100 to-cyan-50 p-3 rounded-lg">
                  <FaClock className="text-cyan-500 text-xl" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Duration</div>
                  <div className="text-lg font-semibold text-gray-800">7 Days 6 Nights</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-blue-200 transition-all">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-3 rounded-lg">
                  <FaMoneyBillWave className="text-blue-500 text-xl" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Price From</div>
                  <div className="text-lg font-semibold text-gray-800">$1,650.00</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-blue-200 transition-all">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-3 rounded-lg">
                  <FaMapMarkerAlt className="text-purple-500 text-xl" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Start Location</div>
                  <div className="text-lg font-semibold text-gray-800">Kathmandu Airport</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-blue-200 transition-all">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-amber-100 to-amber-50 p-3 rounded-lg">
                  <FaSmile className="text-amber-500 text-xl" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Age Range</div>
                  <div className="text-lg font-semibold text-gray-800">8+</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-blue-200 transition-all">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 p-3 rounded-lg">
                  <FaUsers className="text-emerald-500 text-xl" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Total Seats</div>
                  <div className="text-lg font-semibold text-gray-800">28/30</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-blue-200 transition-all">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-cyan-100 to-blue-100 p-3 rounded-lg">
                  <div className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">A↔Z</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Language</div>
                  <div className="text-lg font-semibold text-gray-800">English, Nepali</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Overview Section */}
          <div className="px-8 pb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Overview
              </h2>
              <button 
                onClick={() => setExpanded(!expanded)}
                className="flex items-center space-x-2 text-blue-500 hover:text-blue-600 transition-colors"
              >
                <span className="text-sm font-medium">{expanded ? "Show Less" : "Show More"}</span>
                {expanded ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Journey Through Nepal's Diverse Cultural Landscapes
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-200 transition-all">
                  <div className="bg-cyan-100 p-3 rounded-lg flex-shrink-0">
                    <FaMonument className="text-cyan-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-600 mb-1">Sacred Sites & Wildlife</h4>
                    <p className="text-gray-600 text-sm">
                      Explore Kathmandu's UNESCO heritage, Chitwan's jungle safari, 
                      Buddha's birthplace in Lumbini, and Pokhara's Himalayan vistas.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-200 transition-all">
                  <div className="bg-amber-100 p-3 rounded-lg flex-shrink-0">
                    <FaUtensils className="text-amber-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-600 mb-1">Cultural Diversity</h4>
                    <p className="text-gray-600 text-sm">
                      Experience Tharu tribal culture in Chitwan, Newari traditions in Kathmandu, 
                      Buddhist spirituality in Lumbini, and lakeside life in Pokhara.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-200 transition-all">
                  <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0">
                    <FaCamera className="text-purple-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600 mb-1">Adventure & Serenity</h4>
                    <p className="text-gray-600 text-sm">
                      Safari adventures in Chitwan, meditation in Lumbini's gardens, 
                      and sunrise views of Annapurna from Pokhara.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                  <h4 className="font-semibold text-blue-600 mb-3">Accommodation & Transport</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Stay in heritage palaces, jungle lodges, and lakeside resorts. 
                    Travel comfortably by private vehicle and domestic flights with 
                    experienced local drivers.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full font-medium">Jungle Safari</span>
                    <span className="px-3 py-1 bg-amber-100 text-amber-600 text-xs rounded-full font-medium">Buddhist Pilgrimage</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-600 text-xs rounded-full font-medium">Mountain Views</span>
                  </div>
                </div>
                
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
                  <h4 className="font-semibold text-emerald-600 mb-3">Expert Guidance</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Led by certified naturalists in Chitwan, Buddhist scholars in Lumbini, 
                    and mountain experts in Pokhara. Supports community-based tourism initiatives.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-600 text-xs rounded-full font-medium">Wildlife Experts</span>
                    <span className="px-3 py-1 bg-green-100 text-green-600 text-xs rounded-full font-medium">Spiritual Guides</span>
                    <span className="px-3 py-1 bg-cyan-100 text-cyan-600 text-xs rounded-full font-medium">Community Tourism</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Expanded Content */}
            {expanded && (
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-100">
                  <h4 className="font-semibold text-amber-600 mb-3">Unique Experiences</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Canoe ride in Chitwan, candle lighting at Maya Devi Temple, 
                    sunrise at Sarangkot, and traditional Tharu dance performances.
                  </p>
                </div>
                
                <div className="p-4 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-100">
                  <h4 className="font-semibold text-purple-600 mb-3">Photography Highlights</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Capture rhinos in wild, monastic life in Lumbini, 
                    prayer flags at Peace Pagoda, and Annapurna reflections 
                    on Phewa Lake.
                  </p>
                </div>
              </div>
            )}
            
            {/* Tour Essentials */}
            <div className="mt-8 p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Tour Essentials</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-cyan-100 p-2 rounded mt-1">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-600">Neutral-colored clothing for jungle safari</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-cyan-100 p-2 rounded mt-1">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-600">Comfortable walking shoes for temple visits</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-cyan-100 p-2 rounded mt-1">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-600">Binoculars for wildlife spotting</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-cyan-100 p-2 rounded mt-1">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-600">Light jacket for cool mountain evenings</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="p-8 bg-gradient-to-r from-blue-50 to-cyan-50 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold text-gray-800">Ready for an Unforgettable Journey?</h3>
                <p className="text-gray-600 mt-1">Limited seats available - book now to secure your spot</p>
                
                <div className="mt-4 flex flex-col sm:flex-row gap-3">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <div className="text-sm text-gray-600">Special Offer</div>
                    <div className="font-bold text-green-600">Save 15% when booking 60+ days in advance</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 w-full sm:w-auto">
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium rounded-lg transition-all shadow hover:shadow-lg">
                  Book Now
                </button>
                <button className="px-6 py-3 bg-white border border-blue-300 text-blue-500 hover:bg-blue-50 font-medium rounded-lg transition-all">
                  View Detailed Itinerary
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeritageTourCard;