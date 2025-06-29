import { motion } from "framer-motion";
import { MapPin, Hotel, Utensils, Car, Star, Calendar, Plane } from "lucide-react";
import { Link } from "react-router-dom";

// Define the type
type Tour = {
  id: string;
  title: string;
  country: string;
  location: string;
  duration: string;
  statusTags: string[];
  description: string;
  image: string;
  price?: string;
  rating?: number;
  expired?: boolean;
  gradient?: string;
};

// Tours data
const tours: Tour[] = [
  {
    id: "explorektm",
    title: "Bhaktapur - Kathmandu – Lalitpur Heritage Journey",
    country: "Nepal",
    location: "Kathmandu Valley",
    duration: "4 Days",
    statusTags: ["Heritage", "Cultural"],
    description:
      "UNESCO World Heritage sites, sacred temples, medieval courtyards and breathtaking hilltop views",
    image: "/images/kathmandu.jpg",
    price: "Rs 28,500",
    rating: 4.8,
    gradient: "from-amber-50 to-orange-50",
  },
  {
    id: "cultural",
    title: "Cultural Circuit: Kathmandu - Chitwan - Lumbini - Pokhara",
    country: "Nepal",
    location: "Multiple Cities",
    duration: "6 Days",
    statusTags: ["Popular", "All-in-One"],
    description:
      "From bustling capital to wildlife jungles, spiritual sites, and scenic lake towns",
    image: "/images/chitwan.jpg",
    price: "Rs 42,800",
    rating: 4.9,
    gradient: "from-emerald-50 to-teal-50",
  },
  {
    id: "mardi",
    title: "Mardi Himal Trekking Adventure",
    country: "Nepal",
    location: "Annapurna Region",
    duration: "6 Days",
    statusTags: ["Trekking", "Adventure"],
    description:
      "Stunning Himalayan trek through rhododendron forests with panoramic mountain views",
    image: "/images/mountains.jpg",
    price: "Rs 36,900",
    rating: 4.7,
    gradient: "from-cyan-50 to-blue-50",
  },
  {
    id: "garjeeling and sikkim",
    title: "Himalayan Borders: Darjeeling & Sikkim Discovery",
    country: "Nepal & India",
    location: "Cross-Border",
    duration: "6 Days",
    statusTags: ["International", "Cultural"],
    description:
      "Tea gardens, colonial railways, Buddhist monasteries and Himalayan views",
    image: "/images/darjeeling.jpg",
    price: "Rs 38,750",
    rating: 4.6,
    gradient: "from-purple-50 to-indigo-50",
  },
  {
    id: "easternnepal",
    title: "Eastern Escape: Ilam - Taplejung - Pathivara",
    country: "Nepal",
    location: "Eastern Hills",
    duration: "6 Days",
    statusTags: ["Spiritual", "Scenic"],
    description:
      "Misty tea gardens meet spiritual peaks in Nepal's eastern hills",
    image: "/images/tea-garden.jpg",
    price: "Rs 32,400",
    rating: 4.5,
    gradient: "from-rose-50 to-pink-50",
  },
  {
    id: "kalinchowk",
    title: "Kalinchowk Snow & Spiritual Getaway",
    country: "Nepal",
    location: "Kalinchowk",
    duration: "4 Days",
    statusTags: ["Family", "Snow"],
    description:
      "Snow adventures and peaceful temple visits in the Himalayan foothills",
    image: "/images/snow.jpg",
    price: "Rs 24,900",
    rating: 4.4,
    gradient: "from-sky-50 to-cyan-50",
  },
];

// Component
const TourPackages: React.FC = () => {
  return (
    <div className="min-h-screen bg-white p-6 py-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
            Nepal's Premium Tour Experiences
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Curated cultural, adventure and spiritual journeys with authentic Nepalese hospitality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <motion.div
              key={tour.id}
              className={`rounded-2xl overflow-hidden border border-gray-200 bg-gradient-to-br ${tour.gradient} shadow-lg hover:shadow-xl transition-shadow`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2">
                  {tour.statusTags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-white/90 text-gray-800 text-xs font-medium px-3 py-1 rounded-full shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {tour.price && (
                  <div className="absolute bottom-4 right-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-4 py-2 rounded-lg shadow-md">
                    {tour.price}
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{tour.title}</h3>
                    <div className="flex items-center text-cyan-600 text-sm mt-1">
                      <MapPin size={14} className="mr-1" />
                      {tour.location}, {tour.country}
                    </div>
                  </div>
                  {tour.rating && (
                    <div className="flex items-center bg-white border border-gray-200 px-2 py-1 rounded-full shadow-sm">
                      <Star size={14} className="text-yellow-400 fill-yellow-400 mr-1" />
                      <span className="text-gray-800 text-sm">{tour.rating}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Calendar size={14} className="mr-1" />
                  <span>{tour.duration}</span>
                </div>

                <p className="text-gray-600 mb-6">{tour.description}</p>

                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div className="flex gap-3">
                    <div className="bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
                      <Hotel size={18} className="text-cyan-500" />
                    </div>
                    <div className="bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
                      <Utensils size={18} className="text-emerald-500" />
                    </div>
                    <div className="bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
                      <Car size={18} className="text-amber-500" />
                    </div>
                  </div>
                  <Link to={`${tour.id}`}>
                    <motion.button
                      className="px-5 py-2.5 font-medium bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all flex items-center gap-2 shadow-md hover:shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Explore
                      <Plane size={16} className="rotate-45" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourPackages;
