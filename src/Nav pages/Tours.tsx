// src/components/NepalAdventures.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NepalAdventures: React.FC = () => {
  const [activeTour, setActiveTour] = useState<number | null>(null);
  const [, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate featured tour every 5 seconds
    const interval = setInterval(() => {
      setActiveTour(prev => prev === null || prev === tours.length - 1 ? 0 : prev + 1);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const tours = [
    {
      id: 1,
      title: "Everest Base Camp Trek",
      description: "Conquer the world's highest mountain trails with sherpa guides through the legendary Khumbu Valley.",
      highlights: ["Kala Patthar viewpoint", "Tengboche Monastery", "Namche Bazaar"],
      image: "/images/everest.jpeg",
      difficulty: "Challenging",
      elevation: "5,364m"
    },
    {
      id: 2,
      title: "Annapurna Circuit",
      description: "Journey through diverse landscapes from lush rice terraces to the majestic Thorong La pass.",
      highlights: ["Poon Hill sunrise", "Muktinath Temple", "Marpha village"],
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      difficulty: "Moderate to Challenging",
      elevation: "5,416m"
    },
    {
      id: 3,
      title: "Skydiving over Himalayas",
      description: "Experience the ultimate adrenaline rush with a tandem skydive above the world's highest peaks.",
      highlights: ["15,000ft freefall", "Panoramic mountain views", "Professional instructors"],
      image: "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      difficulty: "Extreme",
      elevation: "15,000ft"
    },
    {
      id: 4,
      title: "Chitwan Jungle Safari",
      description: "Spot rhinos, tigers and crocodiles in Nepal's first national park on thrilling jungle excursions.",
      highlights: ["Elephant safari", "Tharu cultural show", "Bird watching"],
      image: "https://images.unsplash.com/photo-1598890777037-a5d24d1bbf1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      difficulty: "Easy",
      elevation: "415m"
    },
    {
      id: 5,
      title: "Pokhara Paragliding",
      description: "Soar above Phewa Lake with panoramic Himalayan views on a tandem paragliding adventure.",
      highlights: ["30min flight", "Professional pilots", "GoPro footage included"],
      image: "https://images.unsplash.com/photo-1630431346178-9d5d3b5d1b3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      difficulty: "Moderate",
      elevation: "1,600m"
    },
    {
      id: 6,
      title: "Bhote Koshi Bungee",
      description: "Plunge 160m into the Bhote Koshi gorge on one of the world's highest bungee jumps.",
      highlights: ["160m freefall", "Spectacular gorge views", "Professional safety"],
      image: "https://images.unsplash.com/photo-1605548230624-8d2e0412b98b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      difficulty: "Extreme",
      elevation: "1,600m"
    },
    {
      id: 7,
      title: "Upper Mustang Trek",
      description: "Explore the forbidden kingdom with its unique Tibetan culture and lunar landscapes.",
      highlights: ["Lo Manthang", "Ancient monasteries", "Cave dwellings"],
      image: "https://images.unsplash.com/photo-1612296272124-8a1e5c1b12b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      difficulty: "Moderate",
      elevation: "3,840m"
    },
    {
      id: 8,
      title: "Trishuli River Rafting",
      description: "Navigate thrilling rapids through scenic gorges on Nepal's most popular rafting river.",
      highlights: ["Class III-IV rapids", "Riverside camping", "Jungle scenery"],
      image: "https://images.unsplash.com/photo-1602001219425-587e3d5a5e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      difficulty: "Moderate",
      elevation: "415m"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 text-gray-900 overflow-hidden">
      {/* Main content container */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Hero header */}
        <motion.div 
          className="text-center mb-16 mt-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
              NEPAL ADVENTURES
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Experience the Himalayas like never before with our expertly crafted expeditions
          </motion.p>
          
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Link to="/customizetours">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full font-bold text-lg text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105">
                Explore Adventures
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-blue-600 rounded-full font-bold text-lg text-blue-600 hover:bg-blue-50 transition-all duration-300">
                Customize Tour
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Featured tour */}
        <motion.div 
          className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200 mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 relative">
              <img 
                src="https://images.unsplash.com/photo-1621786033085-5b5c7c07d3b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
                alt="Everest Base Camp Trek" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-orange-500 text-xs font-bold px-3 py-1 rounded-full text-white">
                MOST POPULAR
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/80 to-transparent p-6">
                <div className="flex justify-between items-center">
                  <span className="text-blue-100 font-semibold">14 DAYS</span>
                  <span className="text-2xl font-bold text-amber-300">$1,499</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 p-8">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Everest Base Camp Trek</h2>
              <p className="text-gray-600 mb-6">
                The ultimate Himalayan adventure! Trek to the base of the world's highest mountain through Sherpa villages, 
                ancient monasteries, and breathtaking landscapes. Experience the legendary Khumbu region with expert local guides.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <div className="mr-3 text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">MAX ELEVATION</div>
                    <div className="font-bold text-gray-800">5,364m</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">DURATION</div>
                    <div className="font-bold text-gray-800">14 Days</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">DIFFICULTY</div>
                    <div className="font-bold text-gray-800">Challenging</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">REGION</div>
                    <div className="font-bold text-gray-800">Khumbu</div>
                  </div>
                </div>
              </div>
              <button className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl font-bold text-lg text-white shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/50 transition-all duration-300">
                BOOK THIS ADVENTURE
              </button>
            </div>
          </div>
        </motion.div>

        {/* All adventures grid */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            <span className="border-b-4 border-blue-600 pb-2">HIMALAYAN ADVENTURES</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {tours.map((tour, index) => (
              <motion.div
                key={tour.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:border-blue-400 transition-all duration-300 relative group"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.title} 
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-900/60"></div>
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-xs font-bold px-3 py-1 rounded-full text-white">
                    {tour.difficulty}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">{tour.title}</h3>
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-gray-600 mb-4">{tour.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <button 
                      className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition"
                      onClick={() => setActiveTour(activeTour === index ? null : index)}
                    >
                      {activeTour === index ? "Show Less" : "Details"}
                    </button>
                  </div>
                  
                  {activeTour === index && (
                    <motion.div 
                      className="mt-4 p-4 bg-blue-50 rounded-lg"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <h4 className="font-bold mb-2 text-blue-700">HIGHLIGHTS:</h4>
                      <ul className="list-disc pl-5 text-sm text-gray-700">
                        {tour.highlights.map((hl, i) => (
                          <li key={i} className="mb-1">{hl}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div 
          className="text-center py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Ready for Your Himalayan Adventure?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Join thousands of adventurers who've experienced the magic of Nepal with our expert guides and sustainable tourism practices.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full font-bold text-lg text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105">
              Book Your Expedition
            </button>
            <button className="px-10 py-4 bg-transparent border-2 border-blue-600 rounded-full font-bold text-lg text-blue-600 hover:bg-blue-50 transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NepalAdventures;