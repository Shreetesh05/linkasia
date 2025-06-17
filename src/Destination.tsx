import React from "react";
import { motion } from "framer-motion";

// DESTINATIONS
const destinations = [
  {
    id: 1,
    name: "Bali, Indonesia",
    description: "Experience tropical paradise with lush jungles, pristine beaches, and vibrant culture.",
    image: "/images/bali.jpg",
    color: "from-amber-500/20 to-orange-600/20"
  },
  {
    id: 2,
    name: "Kyoto, Japan",
    description: "Discover ancient temples, stunning gardens, and timeless traditions.",
    image: "/images/japan.jpg",
    color: "from-rose-500/20 to-purple-600/20"
  },
  {
    id: 3,
    name: "Reykjavik, Iceland",
    description: "Witness the Northern Lights and explore surreal volcanic landscapes.",
    image: "/images/iceland.jpg",
    color: "from-sky-500/20 to-blue-600/20"
  },
  {
    id: 4,
    name: "Paris, France",
    description: "Enjoy world-class art, architecture, and romantic ambiance.",
    image: "/images/france.jpg",
    color: "from-emerald-500/20 to-teal-600/20"
  },
   {
    id: 1,
    name: "Bali, Indonesia",
    description: "Experience tropical paradise with lush jungles, pristine beaches, and vibrant culture.",
    image: "/images/bali.jpg",
    color: "from-amber-500/20 to-orange-600/20"
  },
  {
    id: 2,
    name: "Kyoto, Japan",
    description: "Discover ancient temples, stunning gardens, and timeless traditions.",
    image: "/images/japan.jpg",
    color: "from-rose-500/20 to-purple-600/20"
  },
  {
    id: 3,
    name: "Reykjavik, Iceland",
    description: "Witness the Northern Lights and explore surreal volcanic landscapes.",
    image: "/images/iceland.jpg",
    color: "from-sky-500/20 to-blue-600/20"
  },
  {
    id: 4,
    name: "Paris, France",
    description: "Enjoy world-class art, architecture, and romantic ambiance.",
    image: "/images/france.jpg",
    color: "from-emerald-500/20 to-teal-600/20"
  },
   {
    id: 1,
    name: "Bali, Indonesia",
    description: "Experience tropical paradise with lush jungles, pristine beaches, and vibrant culture.",
    image: "/images/bali.jpg",
    color: "from-amber-500/20 to-orange-600/20"
  },
  {
    id: 2,
    name: "Kyoto, Japan",
    description: "Discover ancient temples, stunning gardens, and timeless traditions.",
    image: "/images/japan.jpg",
    color: "from-rose-500/20 to-purple-600/20"
  },
  {
    id: 3,
    name: "Reykjavik, Iceland",
    description: "Witness the Northern Lights and explore surreal volcanic landscapes.",
    image: "/images/iceland.jpg",
    color: "from-sky-500/20 to-blue-600/20"
  },
  {
    id: 4,
    name: "Paris, France",
    description: "Enjoy world-class art, architecture, and romantic ambiance.",
    image: "/images/france.jpg",
    color: "from-emerald-500/20 to-teal-600/20"
  },
];

// COMPONENT
const Destinations: React.FC = () => {
  return (
    <section
      id="destinations"
      className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-800 text-white py-16 px-6 sm:px-12 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 20}px`,
              height: `${Math.random() * 100 + 20}px`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* Floating grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 gap-4 h-full">
          {[...Array(144)].map((_, i) => (
            <div key={i} className="border border-white/10 rounded-sm" />
          ))}
        </div>
      </div>
      
      {/* Heading */}
      <motion.div 
        className="text-center max-w-4xl mx-auto relative z-10 mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-block mb-4">
          <motion.div 
            className="h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </div>
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Explore Our Top Destinations
        </motion.h2>
        <motion.p
          className="text-lg text-white/80 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Journey through breathtaking landscapes and vibrant cultures with our curated travel experiences
        </motion.p>
      </motion.div>

      {/* DESTINATION CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16 relative z-10">
        {destinations.map(({ id, name, description, image, color }) => (
          <motion.div
            key={id}
            className="group relative rounded-2xl overflow-hidden border border-white/20 backdrop-blur-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: id * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className={`absolute inset-0 bg-gradient-to-b ${color} z-10`} />
            <div className="absolute inset-0 bg-black/40 z-20 group-hover:bg-black/20 transition-all duration-500" />
            <div className="absolute inset-0 border border-white/10 rounded-2xl z-30 pointer-events-none" />
            
            <div className="relative z-40 h-64 overflow-hidden">
              <motion.img
                src={image}
                alt={name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700"
                loading="lazy"
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1, delay: id * 0.1 }}
              />
            </div>
            
            <div className="p-5 relative z-50">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">{name}</h3>
                <motion.div 
                  className="w-3 h-3 rounded-full bg-cyan-400"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </div>
              <p className="text-sm text-white/80 mb-4">{description}</p>
              
              <motion.div 
                className="flex gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span className="text-xs px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full">Culture</span>
                <span className="text-xs px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full">Nature</span>
                <span className="text-xs px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full">Adventure</span>
              </motion.div>
              
              <motion.button
                className="mt-4 w-full py-2 text-sm font-medium bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg backdrop-blur-sm hover:from-cyan-400 hover:to-blue-500 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Destination
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Floating CTA */}
      <motion.div 
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        {/* <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full shadow-xl flex items-center gap-2 hover:from-cyan-400 hover:to-blue-500 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" />
          </svg>
          Customize Your Trip
        </button> */}
      </motion.div>
    </section>
  );
};

export default Destinations;