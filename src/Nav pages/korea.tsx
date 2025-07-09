// src/components/korea/KoreaItinerary.tsx
import  { useState } from 'react';
import { motion } from 'framer-motion';

const KoreaItinerary = () => {
  const [activeDay, setActiveDay] = useState(1);
  
  const itinerary = [
    {
      day: 1,
      title: "Arrival in Seoul & Modern Exploration",
      description: "Begin your Korean adventure in the vibrant capital city of Seoul",
      activities: [
        "Arrive at Incheon International Airport",
        "Transfer to your luxury hotel in Gangnam",
        "Explore Starfield COEX Mall - Asia's largest underground mall",
        "Visit Bongeunsa Temple amidst skyscrapers",
        "Evening at Seoul Sky Observatory (Lotte World Tower)"
      ],
      food: [
        "Welcome dinner: Korean BBQ at upscale restaurant",
        "Street food tasting at Banpo Bridge Rainbow Fountain"
      ],
      image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      day: 2,
      title: "Historical Seoul & Cultural Immersion",
      description: "Experience the perfect blend of ancient traditions and modern innovation",
      activities: [
        "Gyeongbokgung Palace - Royal Guard Changing Ceremony",
        "Bukchon Hanok Village - traditional Korean houses",
        "Insadong cultural street - art galleries and teahouses",
        "National Museum of Korea",
        "Namsan Seoul Tower with love locks"
      ],
      food: [
        "Traditional royal cuisine lunch",
        "Korean cooking class with bibimbap making",
        "Noryangjin Fish Market dinner experience"
      ],
      image: "https://images.unsplash.com/photo-1560843430-8a4d5c3b9b0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      day: 3,
      title: "DMZ Tour & Hongdae Culture",
      description: "Witness the unique geopolitical situation and vibrant youth culture",
      activities: [
        "DMZ Tour - Third Tunnel of Aggression",
        "Dora Observatory overlooking North Korea",
        "Dorasan Station - symbol of hope for reunification",
        "Hongdae Free Market and street performances",
        "Virtual reality experience at Samsung D'light"
      ],
      food: [
        "Army base stew (Budae Jjigae) for lunch",
        "Hongdae street food tour: hotteok, tteokbokki",
        "Craft cocktail experience at speakeasy bar"
      ],
      image: "https://images.unsplash.com/photo-1621423055731-8a5d7b9b3b3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      day: 4,
      title: "Busan Coastal Adventure",
      description: "Discover Korea's stunning southern coastal city",
      activities: [
        "KTX high-speed train to Busan (2.5 hours)",
        "Gamcheon Culture Village - colorful hillside houses",
        "Jagalchi Fish Market - Korea's largest seafood market",
        "Haeundae Beach relaxation",
        "Haedong Yonggungsa Temple - seaside sanctuary"
      ],
      food: [
        "Fresh seafood lunch at Jagalchi Market",
        "Busan-style milmyeon (cold wheat noodles)",
        "Gwangalli Beach dinner with bridge light show"
      ],
      image: "https://images.unsplash.com/photo-1597212619409-6fd9b04d2a6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      day: 5,
      title: "Gyeongju Cultural Exploration",
      description: "Step back in time to ancient Silla Kingdom",
      activities: [
        "Bulguksa Temple - UNESCO World Heritage site",
        "Seokguram Grotto - ancient stone Buddha",
        "Daereungwon Tomb Complex - Cheonmachong Tomb",
        "Anapji Pond - royal palace gardens",
        "Gyeongju National Museum"
      ],
      food: [
        "Traditional Silla Kingdom royal lunch",
        "Gyeongju bread (Hwangnam-ppang) tasting",
        "Bulgogi dinner with local makgeolli rice wine"
      ],
      image: "https://images.unsplash.com/photo-1628588542185-235c0c0f0d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      day: 6,
      title: "Jeonju Hanok Village & Food Journey",
      description: "Experience traditional Korea and culinary delights",
      activities: [
        "Jeonju Hanok Village - over 800 traditional houses",
        "Hanbok wearing experience and photoshoot",
        "Traditional paper (hanji) making workshop",
        "Jeondong Catholic Church - historical site",
        "Omokdae Pavilion panoramic view"
      ],
      food: [
        "Bibimbap lunch at famous Gogung restaurant",
        "Street food tour: choco pies, kongnamul gukbap",
        "Makgeolli tasting at traditional brewery"
      ],
      image: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      day: 7,
      title: "Seoul Finale & Departure",
      description: "Last day of shopping and cultural experiences",
      activities: [
        "Myeongdong shopping district",
        "Namdaemun Market for souvenirs",
        "Korean beauty experience and facial treatment",
        "Traditional tea ceremony in Insadong",
        "Transfer to Incheon Airport"
      ],
      food: [
        "Samgyetang (ginseng chicken soup) lunch",
        "Farewell dinner: fine dining Korean fusion"
      ],
      image: "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    }
  ];

  const currentDay = itinerary.find(day => day.day === activeDay);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-12 px-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
            FUTURISTIC KOREA
          </span> TOUR
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-700 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          6 Nights / 7 Days Journey Through Tradition & Innovation
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Day Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Tour Itinerary</h2>
            
            <div className="space-y-3">
              {itinerary.map((day) => (
                <motion.div
                  key={day.day}
                  whileHover={{ scale: 1.02 }}
                  className={`p-4 rounded-xl cursor-pointer transition-all ${
                    activeDay === day.day
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg'
                      : 'bg-blue-50 hover:bg-blue-100'
                  }`}
                  onClick={() => setActiveDay(day.day)}
                >
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                      activeDay === day.day ? 'bg-white text-blue-600' : 'bg-blue-500 text-white'
                    }`}>
                      <span className="font-bold">{day.day}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Day {day.day}</h3>
                      <p className={`text-sm ${activeDay === day.day ? 'text-blue-100' : 'text-gray-600'}`}>
                        {day.title}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 bg-blue-50 rounded-xl p-5 border border-blue-200">
              <h3 className="font-bold text-gray-800 mb-3">Tour Highlights</h3>
              <ul className="space-y-2">
                {[
                  "Luxury accommodation in 5-star hotels",
                  "All transfers in premium vehicles",
                  "Daily breakfast & 5 gourmet dinners",
                  "Expert local guides",
                  "KTX bullet train experience",
                  "Hanbok wearing & cultural activities",
                  "24/7 dedicated support"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mr-2 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Day Details */}
        <div className="lg:col-span-2">
          <motion.div 
            key={activeDay}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            {/* Image Header */}
            <div className="h-64 md:h-80 relative">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${currentDay?.image})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Day {currentDay?.day}: {currentDay?.title}
                </h2>
                <p className="text-blue-200 mt-2">{currentDay?.description}</p>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Activities */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Activities</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {currentDay?.activities.map((activity, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start"
                      >
                        <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        </div>
                        <span className="text-gray-700">{activity}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                {/* Food Experiences */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Culinary Experiences</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {currentDay?.food.map((food, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start"
                      >
                        <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        </div>
                        <span className="text-gray-700">{food}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Additional Info */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Travel Essentials</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <div className="text-blue-600 font-bold mb-2">Accommodation</div>
                    <div className="text-sm">
                      {activeDay === 4 ? "Busan - Paradise Hotel" : 
                       activeDay === 5 ? "Gyeongju - Hilton Hotel" : 
                       "Seoul - Signiel Seoul"}
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <div className="text-blue-600 font-bold mb-2">Transport</div>
                    <div className="text-sm">
                      {activeDay === 4 ? "KTX Bullet Train (Seoul to Busan)" : 
                       "Premium Private Vehicle"}
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <div className="text-blue-600 font-bold mb-2">Travel Time</div>
                    <div className="text-sm">
                      {activeDay === 4 ? "2.5 hours" : 
                       activeDay === 5 ? "1 hour" : 
                       "Minimal travel within city"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Highlights Carousel */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "K-Pop Experience", icon: "🎤" },
              { title: "Hanbok Photoshoot", icon: "👘" },
              { title: "Tech Showcase", icon: "📱" },
              { title: "Temple Stay", icon: "🛕" }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-4 rounded-xl shadow-md text-center"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="font-medium text-gray-800">{item.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Booking CTA */}
      <div className="max-w-7xl mx-auto mt-16 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full opacity-20 transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500 rounded-full opacity-20 transform -translate-x-24 translate-y-24"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready for Your Korean Adventure?</h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8">
              Book our premium 6N/7D Korea Tour Package and experience the perfect blend of tradition and innovation
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full shadow-lg"
            >
              Customize Your Tour 
            </motion.button>
            
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              {[" Luxury Accommodation", " All Transfers", " Expert Guides", " Unique Experiences"].map((item, index) => (
                <div key={index} className="text-blue-100 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KoreaItinerary;