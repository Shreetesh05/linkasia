import React from "react";
import { motion } from "framer-motion";

const tours = [
  {
    id: 1,
    title: "Himalayan Adventure",
    duration: "10 Days",
    price: "$1,499",
    description:
      "Explore the majestic Himalayas with expert guides, trekking scenic routes and visiting local villages.",
    image: "/images/tours/himalayan.jpg",
  },
  {
    id: 2,
    title: "European Highlights",
    duration: "14 Days",
    price: "$2,799",
    description:
      "Discover the best of Europe’s iconic cities, culture, and cuisine, from Paris to Rome and beyond.",
    image: "/images/tours/europe.jpg",
  },
  {
    id: 3,
    title: "Safari Expedition",
    duration: "7 Days",
    price: "$2,199",
    description:
      "Experience thrilling wildlife safaris in Africa, spotting the Big Five and staying in luxury lodges.",
    image: "/images/tours/safari.jpg",
  },
  {
    id: 4,
    title: "Tropical Island Escape",
    duration: "5 Days",
    price: "$1,299",
    description:
      "Relax on white sandy beaches, snorkel crystal-clear waters, and enjoy exotic island life.",
    image: "/images/tours/island.jpg",
  },
];

const Tours: React.FC = () => {
  return (
    <section
      id="tours"
      className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-700 text-white py-16 px-6 sm:px-12"
    >
      <motion.h2
        className="text-4xl font-extrabold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Explore Our Exclusive Tours
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {tours.map(({ id, title, duration, price, description, image }) => (
          <motion.div
            key={id}
            className="rounded-xl overflow-hidden shadow-lg bg-indigo-900/80 backdrop-blur-md hover:scale-[1.05] transition-transform cursor-pointer flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: id * 0.1 }}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-1">{title}</h3>
              <p className="text-sm text-white/80 mb-3">{description}</p>
              <div className="mt-auto flex justify-between items-center text-yellow-400 font-semibold">
                <span>{duration}</span>
                <span>{price}</span>
              </div>
              <button
                className="mt-4 bg-yellow-400 text-black rounded-full py-2 px-4 font-semibold hover:bg-yellow-300 transition"
                onClick={() => alert(`Booking tour: ${title}`)}
              >
                Book Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Tours;
