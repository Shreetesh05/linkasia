import { motion } from "framer-motion";
import React from "react";

const packages = [
  {
    title: "Gems of Nepal",
    duration: "5N/6D",
    places: "2N Kathmandu · 2N Pokhara · 1N Kathmandu",
    highlights: [
      "Round Trip Flights",
      "4 Star, 3 Star Hotels",
      "4 Activities",
      "Intercity Car Transfers",
      "Airport Transfers",
      "Selected Meals",
    ],
    visits: [
      "Visit to Bhaktapur, Pashupatinath Temple, Boudhanath Stupa",
      "Visit to Swayambhunath Temple, Phewa Lake, Sarangkot",
      "Visit to Bindhyabasini Temple, Devi's Fall, Visit Gupteshwor Mahadev Cave",
    ],
    price: "Rs 44,264",
    image: "/images/mountains.jpg",
    tag: "Deal of the day",
    gradient: "from-amber-600/10 to-orange-700/10",
  },
  {
    title: "Kathmandu and Pokhara Delight",
    duration: "4N/5D",
    places: "1N Kathmandu · 2N Pokhara · 1N Kathmandu",
    highlights: [
      "Round Trip Flights",
      "3 Star Hotels",
      "4 Activities",
      "Intercity Car Transfers",
      "Airport Transfers",
      "Selected Meals",
    ],
    visits: [
      "Visit to Boudhanath Stupa, Pashupatinath Temple, Phewa Lake",
      "Visit to Bindhyabasini Temple, Devi's Fall, Swayambhunath Temple",
    ],
    price: "Rs 36,719",
    image: "/images/kathmandu.jpg",
    gradient: "from-emerald-600/10 to-teal-700/10",
  },
  {
    title: "Chitwan",
    duration: "4N/5D",
    places: "1N Kathmandu · 2N Pokhara · 1N Kathmandu",
    highlights: [
      "Round Trip Flights",
      "3 Star Hotels",
      "4 Activities",
      "Intercity Car Transfers",
      "Airport Transfers",
      "Selected Meals",
    ],
    visits: [
      "Visit to Boudhanath Stupa, Pashupatinath Temple, Phewa Lake",
      "Visit to Bindhyabasini Temple, Devi's Fall, Swayambhunath Temple",
    ],
    price: "Rs 36,719",
    image: "/images/chitwan.jpg",
    gradient: "from-emerald-600/10 to-teal-700/10",
  },
  {
    title: "Kalinchowk",
    duration: "4N/5D",
    places: "1N Kathmandu · 2N Pokhara · 1N Kathmandu",
    highlights: [
      "Round Trip Flights",
      "3 Star Hotels",
      "4 Activities",
      "Intercity Car Transfers",
      "Airport Transfers",
      "Selected Meals",
    ],
    visits: [
      "Visit to Boudhanath Stupa, Pashupatinath Temple, Phewa Lake",
      "Visit to Bindhyabasini Temple, Devi's Fall, Swayambhunath Temple",
    ],
    price: "Rs 36,719",
    image: "/images/lumbini.jpg",
    gradient: "from-emerald-600/10 to-teal-700/10",
  },
];

const TourPackages: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-800 text-white sm:px-12  overflow-hiddenmax-w-6xl mx-auto px-4 py-12 relative z-10">
      <div className="text-center mb-16">
        <motion.div 
          className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mb-4"
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover Our Best Tour Packages
        </motion.h2>
        <motion.p
          className="text-lg text-white/80 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Curated experiences with premium amenities for the discerning traveler
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {packages.map((pkg, idx) => (
          <motion.div
            key={idx}
            className={`relative rounded-2xl overflow-hidden border border-white/20 backdrop-blur-xl bg-gradient-to-br ${pkg.gradient}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            whileHover={{ y: -10 }}
          >
            {/* Holographic effect */}
            <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
            <div className="absolute top-4 right-4 w-32 h-32 rounded-full bg-cyan-400/10 blur-3xl -z-10" />
            <div className="absolute bottom-4 left-4 w-32 h-32 rounded-full bg-purple-500/10 blur-3xl -z-10" />
            
            <div className="relative">
              <div className="h-60 overflow-hidden relative">
                <motion.img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                
                {pkg.tag && (
                  <motion.span 
                    className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xs font-bold px-3 py-2 rounded-lg shadow-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {pkg.tag}
                  </motion.span>
                )}
                
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">{pkg.title}</h3>
                  <span className="text-sm bg-white/20 backdrop-blur-sm px-2 py-1 rounded text-white">
                    {pkg.duration}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm text-white/90 italic mb-4">{pkg.places}</p>

                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex-1 min-w-[200px]">
                    <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-cyan-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Package Highlights
                    </h4>
                    <ul className="text-sm text-white/80 space-y-1">
                      {pkg.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex-1 min-w-[200px]">
                    <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      Places to Visit
                    </h4>
                    <ul className="text-sm text-emerald-200 space-y-1">
                      {pkg.visits.map((v, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-emerald-400 text-base">✓</span>
                          <span>{v}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-white/10">
                  <div className="text-xl font-bold text-white flex items-end">
                    {pkg.price} <span className="text-sm font-normal text-white/70 ml-1">/Person</span>
                  </div>
                </div>
                
                <motion.button
                  className="mt-6 w-full py-3 font-medium bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg backdrop-blur-sm hover:from-cyan-400 hover:to-blue-500 transition-all flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book Now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TourPackages;
