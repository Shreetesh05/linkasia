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
    color: "from-amber-100 to-orange-100"
  },
  {
    id: 2,
    name: "Kyoto, Japan",
    description: "Discover ancient temples, stunning gardens, and timeless traditions.",
    longDescription: "As Japan's cultural heart, Kyoto boasts 17 UNESCO World Heritage sites. Walk through the iconic Fushimi Inari Shrine gates, experience tea ceremonies, and witness the beauty of cherry blossoms in spring or vibrant foliage in autumn.",
    image: "/images/japan.jpg",
    color: "from-rose-100 to-purple-100"
  },
  {
    id: 3,
    name: "Reykjavik, Iceland",
    description: "Witness the Northern Lights and explore surreal volcanic landscapes.",
    longDescription: "Iceland's capital serves as a gateway to geological wonders. Soak in the Blue Lagoon's geothermal waters, tour the Golden Circle's geysers and waterfalls, and chase the mesmerizing Aurora Borealis during winter months.",
    image: "/images/iceland.jpg",
    color: "from-sky-100 to-blue-100"
  },
  {
    id: 4,
    name: "Paris, Singapoor",
    description: "Enjoy world-class art, architecture, and romantic ambiance.",
    longDescription: "The City of Light offers iconic landmarks like the Eiffel Tower and Louvre Museum. Stroll along the Seine, explore charming Montmartre, and indulge in exquisite French cuisine at local bistros and patisseries.",
    image: "/images/france.jpg",
    color: "from-emerald-100 to-teal-100"
  },
  {
    id: 5,
    name: "Santorini, India",
    description: "Iconic white-washed buildings and stunning sunsets over the Aegean Sea.",
    longDescription: "This volcanic island is famous for its dramatic caldera views. Explore Oia's blue-domed churches, taste Assyrtiko wines from local vineyards, and relax on unique black and red sand beaches formed by volcanic activity.",
    image: "/images/greece.jpg",
    color: "from-blue-100 to-indigo-100"
  },
  {
    id: 6,
    name: "Machu Picchu, Pokhara",
    description: "Ancient Incan city nestled high in the Andes Mountains.",
    longDescription: "This 15th-century citadel sits at 7,970 ft elevation. Hike the Inca Trail through cloud forests, witness the precision of ancient stonework, and experience the spiritual energy of this UNESCO World Heritage site.",
    image: "/images/peru.jpg",
    color: "from-green-100 to-emerald-100"
  },
  {
    id: 7,
    name: "Safari, Lumbini",
    description: "Witness the great migration and see the big five in their natural habitat.",
    longDescription: "Experience the world's largest mammal migration across Tanzania's plains. Stay in luxury tented camps, track lions and elephants on game drives, and visit Maasai villages to learn about indigenous cultures.",
    image: "/images/serengeti.jpg",
    color: "from-yellow-100 to-amber-100"
  },
  {
    id: 8,
    name: "New York,Chitwan",
    description: "The city that never sleeps, with iconic landmarks and diverse culture.",
    longDescription: "From Broadway shows to Central Park, NYC offers endless experiences. Visit the Statue of Liberty, explore diverse neighborhoods from Chinatown to Harlem, and enjoy world-class dining and shopping in Manhattan.",
    image: "/images/nyc.jpg",
    color: "from-gray-100 to-slate-100"
  },
  {
    id: 9,
    name: "New York Pashupatinath",
    description: "The city that never sleeps, with iconic landmarks and diverse culture.",
    longDescription: "From Broadway shows to Central Park, NYC offers endless experiences. Visit the Statue of Liberty, explore diverse neighborhoods from Chinatown to Harlem, and enjoy world-class dining and shopping in Manhattan.",
    image: "/images/nyc.jpg",
    color: "from-gray-100 to-slate-100"
  },
  {
    id: 10,
    name: "New York,Muktinath",
    description: "The city that never sleeps, with iconic landmarks and diverse culture.",
    longDescription: "From Broadway shows to Central Park, NYC offers endless experiences. Visit the Statue of Liberty, explore diverse neighborhoods from Chinatown to Harlem, and enjoy world-class dining and shopping in Manhattan.",
    image: "/images/nyc.jpg",
    color: "from-gray-100 to-slate-100"
  },
  {
    id: 11,
    name: "New York,Chitwan",
    description: "The city that never sleeps, with iconic landmarks and diverse culture.",
    longDescription: "From Broadway shows to Central Park, NYC offers endless experiences. Visit the Statue of Liberty, explore diverse neighborhoods from Chinatown to Harlem, and enjoy world-class dining and shopping in Manhattan.",
    image: "/images/nyc.jpg",
    color: "from-gray-100 to-slate-100"
  },
  {
    id: 12,
    name: "New York,Kathmandu",
    description: "The city that never sleeps, with iconic landmarks and diverse culture.",
    longDescription: "From Broadway shows to Central Park, NYC offers endless experiences. Visit the Statue of Liberty, explore diverse neighborhoods from Chinatown to Harlem, and enjoy world-class dining and shopping in Manhattan.",
    image: "/images/nyc.jpg",
    color: "from-gray-100 to-slate-100"
  },
  {
    id: 13,
    name: "New York,Bhaktapur",
    description: "The city that never sleeps, with iconic landmarks and diverse culture.",
    longDescription: "From Broadway shows to Central Park, NYC offers endless experiences. Visit the Statue of Liberty, explore diverse neighborhoods from Chinatown to Harlem, and enjoy world-class dining and shopping in Manhattan.",
    image: "/images/nyc.jpg",
    color: "from-gray-100 to-slate-100"
  },
  {
    id: 14,
    name: "New York,Patan",
    description: "The city that never sleeps, with iconic landmarks and diverse culture.",
    longDescription: "From Broadway shows to Central Park, NYC offers endless experiences. Visit the Statue of Liberty, explore diverse neighborhoods from Chinatown to Harlem, and enjoy world-class dining and shopping in Manhattan.",
    image: "/images/nyc.jpg",
    color: "from-gray-100 to-slate-100"
  }
];

// COMPONENT
const Destinations: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section
      id="destinations"
      className="min-h-screen bg-white text-gray-800 py-16 px-6 sm:px-12 relative overflow-hidden"
    >
      {/* Background elements - adjusted for light theme */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-blue-100/30 rounded-full filter blur-3xl" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-100/30 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-amber-100/30 rounded-full filter blur-3xl" />

      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Discover Your Dream Destinations</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore handpicked locations around the globe with unique experiences and breathtaking landscapes.
        </p>
      </div>

      {/* DESTINATION CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16 relative z-10">
        {destinations.map(({ id, name, description, image, color, longDescription }) => (
          <motion.div
            key={id}
            className="group relative rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: id * 0.1 }}
            whileHover={{ y: expandedId === id ? 0 : -10 }}
            layout
          >
            <div className={`absolute inset-0 bg-gradient-to-b ${color} z-10`} />
            <div className={`absolute inset-0 transition-all duration-500 ${
              expandedId === id ? "bg-gray-100/30" : "bg-white/0 group-hover:bg-gray-50/30"
            } z-20`} />
            <div className="absolute inset-0 border border-gray-100 rounded-2xl z-30 pointer-events-none" />
            
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
                <h3 className="text-xl font-bold text-gray-900">{name}</h3>
                <motion.div 
                  className="w-3 h-3 rounded-full bg-cyan-500"
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
                    className="text-sm text-gray-600 mb-4"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {longDescription}
                  </motion.p>
                ) : (
                  <motion.p
                    className="text-sm text-gray-600 mb-4"
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
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">Culture</span>
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">Nature</span>
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">Adventure</span>
              </motion.div>
              
              <motion.button
                className="w-full py-2 text-sm font-medium bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all"
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