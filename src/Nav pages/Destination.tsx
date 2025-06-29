import React, { useState } from "react";
import { motion } from "framer-motion";

// DESTINATIONS
const destinations = [
  {
    id: 1,
    name: "Bali, Indonesia",
    description: "Experience tropical paradise with lush jungles, pristine beaches, and vibrant culture.",
    longDescription: "Bali offers a perfect blend of spiritual retreats, volcanic landscapes, and world-class surfing. Visit ancient temples like Uluwatu, enjoy vibrant nightlife in Seminyak, and rejuvenate with traditional Balinese spa treatments.",
    image: "/images/bali.jpg",
    color: "from-amber-500/20 to-orange-600/20"
  },
  {
    id: 2,
    name: "Kyoto, Japan",
    description: "Discover ancient temples, stunning gardens, and timeless traditions.",
    longDescription: "As Japan's cultural heart, Kyoto boasts 17 UNESCO World Heritage sites. Walk through the iconic Fushimi Inari Shrine gates, experience tea ceremonies, and witness the beauty of cherry blossoms in spring or vibrant foliage in autumn.",
    image: "/images/japan.jpg",
    color: "from-rose-500/20 to-purple-600/20"
  },
  {
    id: 3,
    name: "Reykjavik, Iceland",
    description: "Witness the Northern Lights and explore surreal volcanic landscapes.",
    longDescription: "Iceland's capital serves as a gateway to geological wonders. Soak in the Blue Lagoon's geothermal waters, tour the Golden Circle's geysers and waterfalls, and chase the mesmerizing Aurora Borealis during winter months.",
    image: "/images/iceland.jpg",
    color: "from-sky-500/20 to-blue-600/20"
  },
  {
    id: 4,
    name: "Paris, France",
    description: "Enjoy world-class art, architecture, and romantic ambiance.",
    longDescription: "The City of Light offers iconic landmarks like the Eiffel Tower and Louvre Museum. Stroll along the Seine, explore charming Montmartre, and indulge in exquisite French cuisine at local bistros and patisseries.",
    image: "/images/france.jpg",
    color: "from-emerald-500/20 to-teal-600/20"
  },
  {
    id: 5,
    name: "Santorini, Greece",
    description: "Iconic white-washed buildings and stunning sunsets over the Aegean Sea.",
    longDescription: "This volcanic island is famous for its dramatic caldera views. Explore Oia's blue-domed churches, taste Assyrtiko wines from local vineyards, and relax on unique black and red sand beaches formed by volcanic activity.",
    image: "/images/greece.jpg",
    color: "from-blue-500/20 to-indigo-600/20"
  },
  {
    id: 6,
    name: "Machu Picchu, Peru",
    description: "Ancient Incan city nestled high in the Andes Mountains.",
    longDescription: "This 15th-century citadel sits at 7,970 ft elevation. Hike the Inca Trail through cloud forests, witness the precision of ancient stonework, and experience the spiritual energy of this UNESCO World Heritage site.",
    image: "/images/peru.jpg",
    color: "from-green-500/20 to-emerald-600/20"
  },
  {
    id: 7,
    name: "Safari, Serengeti",
    description: "Witness the great migration and see the big five in their natural habitat.",
    longDescription: "Experience the world's largest mammal migration across Tanzania's plains. Stay in luxury tented camps, track lions and elephants on game drives, and visit Maasai villages to learn about indigenous cultures.",
    image: "/images/serengeti.jpg",
    color: "from-yellow-500/20 to-amber-600/20"
  },
  {
    id: 8,
    name: "New York, USA",
    description: "The city that never sleeps, with iconic landmarks and diverse culture.",
    longDescription: "From Broadway shows to Central Park, NYC offers endless experiences. Visit the Statue of Liberty, explore diverse neighborhoods from Chinatown to Harlem, and enjoy world-class dining and shopping in Manhattan.",
    image: "/images/nyc.jpg",
    color: "from-gray-500/20 to-slate-600/20"
  }
];

// COMPONENT
const Destinations: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section
      id="destinations"
      className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-800 text-white py-16 px-6 sm:px-12 relative overflow-hidden"
    >
      {/* ... (background elements remain unchanged) ... */}

      {/* Heading (unchanged) */}

      {/* DESTINATION CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16 relative z-10">
        {destinations.map(({ id, name, description, image, color, longDescription }) => (
          <motion.div
            key={id}
            className="group relative rounded-2xl overflow-hidden border border-white/20 backdrop-blur-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: id * 0.1 }}
            whileHover={{ y: expandedId === id ? 0 : -10 }}
            layout
          >
            <div className={`absolute inset-0 bg-gradient-to-b ${color} z-10`} />
            <div className={`absolute inset-0 transition-all duration-500 ${
              expandedId === id ? "bg-black/10" : "bg-black/40 group-hover:bg-black/20"
            } z-20`} />
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
              
              <motion.div layout>
                {expandedId === id ? (
                  <motion.p
                    className="text-sm text-white/80 mb-4"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {longDescription}
                  </motion.p>
                ) : (
                  <motion.p
                    className="text-sm text-white/80 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {description}
                  </motion.p>
                )}
              </motion.div>
              
              <motion.div 
                className="flex gap-2 flex-wrap mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                layout
              >
                <span className="text-xs px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full">Culture</span>
                <span className="text-xs px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full">Nature</span>
                <span className="text-xs px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full">Adventure</span>
              </motion.div>
              
              <motion.button
                className="w-full py-2 text-sm font-medium bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg backdrop-blur-sm hover:from-cyan-400 hover:to-blue-500 transition-all"
                whileHover={{ scale: expandedId === id ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setExpandedId(expandedId === id ? null : id)}
                layout
              >
                {expandedId === id ? "Show Less" : "Explore More"}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;