// src/components/InternationalToursLight.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';

const InternationalToursLight = () => {
  const [selectedDestination, setSelectedDestination] = useState('all');
  const [activePackage, setActivePackage] = useState<number | null>(null);
  
  const destinations = [
    { id: 'cambodia', name: 'Cambodia', icon: '🇰🇭' },
    { id: 'india', name: 'India', icon: '🇮🇳' },
    { id: 'vietnam', name: 'Vietnam', icon: '🇻🇳' },
    { id: 'thailand', name: 'Thailand', icon: '🇹🇭' },
    { id: 'malaysia', name: 'Malaysia', icon: '🇲🇾' },
    { id: 'singapore', name: 'Singapore', icon: '🇸🇬' },
    { id: 'egypt', name: 'Egypt', icon: '🇪🇬' },
  ];

  const tourPackages = [
    {
      id: 1,
      name: "Angkor Wat Discovery",
      country: "cambodia",
      price: 1499,
      duration: "7 days",
      description: "Explore the ancient temples of Angkor Wat, including Ta Prohm and Bayon Temple.",
      highlights: ["Sunrise at Angkor Wat", "Boat tour on Tonlé Sap", "Phnom Penh city tour"],
      image: "/images/cambodia.jpg",
    },
    {
      id: 2,
      name: "Golden Triangle Experience",
      country: "india",
      price: 1899,
      duration: "10 days",
      description: "Journey through Delhi, Agra, and Jaipur to experience India's rich history.",
      highlights: ["Taj Mahal at sunrise", "Amber Fort elephant ride", "Delhi street food tour"],
      image: "/images/india.jpg",
    },
    {
      id: 3,
      name: "Halong Bay Cruise",
      country: "vietnam",
      price: 1299,
      duration: "5 days",
      description: "Luxury cruise through Vietnam's breathtaking Halong Bay with cave explorations.",
      highlights: ["Overnight junk boat", "Kayaking in hidden lagoons", "Cooking class with locals"],
      image: "/images/vietnam.jpg",
    },
    {
      id: 4,
      name: "Thai Island Hopper",
      country: "thailand",
      price: 1599,
      duration: "8 days",
      description: "White sand beaches and crystal waters of Phuket, Phi Phi, and Krabi.",
      highlights: ["James Bond Island tour", "Scuba diving in Similan", "Full moon party experience"],
      image: "/images/thailand.jpg",
    },
    {
      id: 5,
      name: "Malaysian Adventure",
      country: "malaysia",
      price: 1699,
      duration: "9 days",
      description: "From Kuala Lumpur's skyline to Borneo's rainforests and Langkawi's beaches.",
      highlights: ["Petronas Towers visit", "Orangutan sanctuary", "Langkawi cable car"],
      image: "/images/malaysia.jpg",
    },
    {
      id: 6,
      name: "Singapore City Explorer",
      country: "singapore",
      price: 1399,
      duration: "4 days",
      description: "Ultimate city experience with Gardens by the Bay, Sentosa, and culinary delights.",
      highlights: ["Marina Bay Sands SkyPark", "Universal Studios", "Night safari adventure"],
      image: "/images/singapore.jpg",
    },
    {
      id: 7,
      name: "Nile River Expedition",
      country: "egypt",
      price: 1999,
      duration: "12 days",
      description: "From the pyramids of Giza to Luxor's temples with a Nile cruise.",
      highlights: ["Great Sphinx private tour", "Hot air balloon over Valley of Kings", "Red Sea snorkeling"],
      image: "/images/egypt.jpg",
    },
    {
      id: 8,
      name: "Southeast Asia Grand Tour",
      country: "all",
      price: 3499,
      duration: "21 days",
      description: "Comprehensive journey through Thailand, Cambodia, Vietnam, and Singapore.",
      highlights: ["Angkor Wat sunrise", "Halong Bay cruise", "Mekong Delta exploration"],
      image: "/images/asia-grand.jpg",
    },
  ];

  const filteredPackages = selectedDestination === 'all' 
    ? tourPackages 
    : tourPackages.filter(pkg => pkg.country === selectedDestination);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50 text-gray-900 py-16 px-4 sm:px-8">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-100"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4">
            <motion.div 
              className="h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </div>
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-700">
              Global Explorer
            </span> Tours
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover ancient wonders, vibrant cultures, and breathtaking landscapes with our premium international tour packages
          </motion.p>
        </motion.div>

        {/* Destination Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-full font-medium transition-all ${
              selectedDestination === 'all'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-400/30'
                : 'bg-white hover:bg-gray-100 text-gray-700 shadow-md'
            }`}
            onClick={() => setSelectedDestination('all')}
          >
            All Destinations
          </motion.button>
          
          {destinations.map((dest) => (
            <motion.button
              key={dest.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full flex items-center gap-2 transition-all ${
                selectedDestination === dest.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-400/30'
                  : 'bg-white hover:bg-gray-100 text-gray-700 shadow-md'
              }`}
              onClick={() => setSelectedDestination(dest.id)}
            >
              <span className="text-xl">{dest.icon}</span>
              {dest.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Tour Packages */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {filteredPackages.map((pkg) => (
            <motion.div
              key={pkg.id}
              className={`rounded-2xl overflow-hidden border border-gray-200 bg-white/80 backdrop-blur-sm shadow-lg ${
                activePackage === pkg.id ? 'ring-2 ring-cyan-500 scale-[1.02]' : ''
              } transition-all duration-300`}
              whileHover={{ y: -10 }}
              layout
            >
              <div className="relative h-60 overflow-hidden">
                {/* Placeholder for image */}
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent z-10" />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full font-bold text-sm z-20">
                  ${pkg.price}
                </div>
                <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="text-2xl font-bold text-gray-900">{pkg.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-blue-700 font-medium">
                      {destinations.find(d => d.id === pkg.country)?.icon} 
                      {destinations.find(d => d.id === pkg.country)?.name}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className="text-cyan-600 font-medium">{pkg.duration}</span>
                  </div>
                </div>
                <div className="w-full h-full bg-gradient-to-br from-blue-200/30 to-cyan-200/30" />
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-cyan-600 mb-2 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Package Highlights
                  </h4>
                  <ul className="space-y-2">
                    {pkg.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-cyan-500 mr-2">•</span>
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-between items-center">
                  <motion.button
                    className="px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-lg font-medium text-white hover:from-cyan-500 hover:to-blue-600 transition-all shadow-md"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book Now
                  </motion.button>
                  
                  <button 
                    className="text-cyan-600 hover:text-cyan-700 flex items-center gap-1 font-medium"
                    onClick={() => setActivePackage(activePackage === pkg.id ? null : pkg.id)}
                  >
                    {activePackage === pkg.id ? 'Show Less' : 'Learn More'}
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform ${activePackage === pkg.id ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                
                {activePackage === pkg.id && (
                  <motion.div 
                    className="mt-6 pt-6 border-t border-gray-200"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className="font-bold text-cyan-600 mb-3">What's Included</h4>
                    <ul className="grid grid-cols-2 gap-3 text-sm">
                      <li className="flex items-center gap-2 text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        4-5 Star Accommodation
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        All Transportation
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Daily Breakfast
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Guided Tours
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        24/7 Support
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Entry Fees Included
                      </li>
                    </ul>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Cultural Experience</span>
                      <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm">Local Cuisine</span>
                      <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">Adventure</span>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Testimonials */}
        <motion.div 
          className="mt-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-700">
              Traveler Experiences
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                tour: "Angkor Wat Discovery",
                comment: "The sunrise at Angkor Wat was absolutely magical. Our guide was incredibly knowledgeable about the history. Would do it again in a heartbeat!",
                rating: 5
              },
              {
                name: "Michael Chen",
                tour: "Nile River Expedition",
                comment: "Hot air ballooning over the Valley of the Kings was a once-in-a-lifetime experience. The whole trip was perfectly organized.",
                rating: 5
              },
              {
                name: "Priya Sharma",
                tour: "Golden Triangle Experience",
                comment: "Seeing the Taj Mahal at sunrise brought tears to my eyes. The food experiences throughout the tour were exceptional.",
                rating: 4
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 shadow-md"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i}
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-amber-400' : 'text-gray-300'}`} 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-cyan-600 text-sm">{testimonial.tour}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* CTA */}
        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Ready for Your Next Adventure?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Join thousands of travelers who've experienced unforgettable journeys with Global Explorer Tours
          </p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-xl font-bold text-lg text-white shadow-lg shadow-cyan-500/30 hover:from-cyan-500 hover:to-blue-600 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Your Dream Vacation Now
          </motion.button>
          <p className="mt-4 text-gray-500">Flexible booking options • 24/7 customer support</p>
        </motion.div>
      </div>
      
      {/* Floating Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-200/50"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
            }}
            animate={{
              y: [0, Math.random() * 20 - 10],
              x: [0, Math.random() * 20 - 10],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default InternationalToursLight;