import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const destinations = [
  {
    title: "Seoul",
    subtitle: "Best for nightlife",
    description:
      "Home to half of South Korea's population, Seoul is the epicenter of nightlife, from high-end lounges to quirky karaoke bars. Check out trendy Euljiro or classic hotspots in Gangnam, Hongdae, and Itaewon.",
    tip:
      "Planning tip: Gangnam is luxe and pricey. Hongdae is budget-friendly. Itaewon is international.",
    image: "/images/seoul.jpg",
  },
  {
    title: "Gyeongju",
    subtitle: "Best for ancient treasures",
    description:
      "Once the capital of the Silla Kingdom, Gyeongju is brimming with relics. Explore Cheomseongdae, Seokguram Grotto, Bulguk-sa, and the majestic Woljeonggyo bridge.",
    tip: "Planning tip: Don’t miss Tumuli Park’s royal tombs and the Gyeongju National Museum.",
    image: "/images/gyeongju.jpg",
  },
  {
    title: "Busan",
    subtitle: "Best for maritime culture",
    description:
      "A dynamic coastal city with scenic beaches, Korea’s largest fish market, and the serene Haedong Yonggungsa temple.",
    tip: "Planning tip: Visit Jagalchi Market to hand-pick seafood and have it freshly prepared upstairs!",
    image: "/images/busan.jpg",
  },
  {
    title: "Jeju-do",
    subtitle: "Best for beaches and waterfalls",
    description:
      "An island paradise known for volcanic landscapes, waterfalls, lava tubes, and Hallasan – Korea’s tallest mountain.",
    tip: "Planning tip: For adventure, try surfing, scuba diving, or rafting at Soesokkak Estuary.",
    image: "/images/jeju.jpg",
  },
  {
    title: "Gangwon-do",
    subtitle: "Best for winter sports",
    description:
      "Host of the 2018 Winter Olympics, Gangwon-do is a haven for skiing, snowboarding, and winter festivals like Hwacheon Ice Festival.",
    tip: "Planning tip: YongPyong and High1 offer top-tier slopes and even a revolving restaurant!",
    image: "/images/gangwon.jpg",
  },
  {
    title: "Andong",
    subtitle: "Best for folk traditions",
    description:
      "Home to the UNESCO-listed Hahoe Folk Village, Andong offers a look into Joseon-era culture, mask dances, and Confucian heritage.",
    tip: "Planning tip: Try jjimdak and taste traditional soju while exploring historic academies.",
    image: "/images/andong.jpg",
  },
  {
    title: "Gwangju",
    subtitle: "Best for contemporary history",
    description:
      "Known for its pivotal role in Korea’s democracy, Gwangju features poignant memorials and modern-day culture.",
    tip: "Planning tip: Walk through May 18 Memorial Park and explore Chungjang-ro for context and shopping.",
    image: "/images/gwangju.jpg",
  },
];

const KoreaTourPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-900 via-indigo-800 to-purple-900 text-white px-6 py-12">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Explore the Wonders of Korea 🇰🇷
      </motion.h1>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {destinations.map((place, index) => (
          <motion.div
            key={place.title}
            className="rounded-3xl overflow-hidden shadow-xl bg-white text-gray-900 hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <img
              src={place.image}
              alt={place.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-indigo-800 mb-1">
                {place.title}
              </h2>
              <h3 className="text-lg font-medium text-purple-700 mb-3">
                {place.subtitle}
              </h3>
              <p className="mb-4 text-sm leading-relaxed">{place.description}</p>
              <p className="text-xs text-gray-700 italic">{place.tip}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <button className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-2xl text-lg font-semibold shadow-xl transition">
          Book Your Korea Tour <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default KoreaTourPage;
