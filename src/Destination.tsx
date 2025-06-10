import React from "react";
import { motion } from "framer-motion";

const destinations = [
  {
    id: 1,
    name: "Bali, Indonesia",
    description: "Experience tropical paradise with lush jungles, pristine beaches, and vibrant culture.",
    image: "/images/bali.jpg",
  },
  {
    id: 2,
    name: "Kyoto, Japan",
    description: "Discover ancient temples, stunning gardens, and timeless traditions.",
    image: "/images/japan.jpg",
  },
  {
    id: 3,
    name: "Reykjavik, Iceland",
    description: "Witness the Northern Lights and explore surreal volcanic landscapes.",
    image: "/images/iceland.jpg",
  },
  {
    id: 4,
    name: "Paris, France",
    description: "Enjoy world-class art, architecture, and romantic ambiance.",
    image: "/images/france.jpg",
  },
   {
    id: 1,
    name: "Bali, Indonesia",
    description: "Experience tropical paradise with lush jungles, pristine beaches, and vibrant culture.",
    image: "/images/bali.jpg",
  },
  {
    id: 2,
    name: "Kyoto, Japan",
    description: "Discover ancient temples, stunning gardens, and timeless traditions.",
    image: "/images/japan.jpg",
  },
  {
    id: 3,
    name: "Reykjavik, Iceland",
    description: "Witness the Northern Lights and explore surreal volcanic landscapes.",
    image: "/images/iceland.jpg",
  },
  {
    id: 4,
    name: "Paris, France",
    description: "Enjoy world-class art, architecture, and romantic ambiance.",
    image: "/images/france.jpg",
  },
];

const Destinations: React.FC = () => {
  return (
    <section
      id="destinations"
      className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-800 text-white py-16 px-6 sm:px-12"
    >
      <motion.h2
        className="text-4xl font-extrabold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Explore Our Top Destinations
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {destinations.map(({ id, name, description, image }) => (
          <motion.div
            key={id}
            className="rounded-xl overflow-hidden shadow-lg bg-indigo-900/80 backdrop-blur-md hover:scale-[1.05] transition-transform cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: id * 0.1 }}
          >
            <img
              src={image}
              alt={name}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{name}</h3>
              <p className="text-sm text-white/80">{description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
