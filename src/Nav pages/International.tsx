// src/components/InternationalToursLight.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';

const InternationalToursLight = () => {
  const [selectedDestination, setSelectedDestination] = useState('all');
  const [activePackage, setActivePackage] = useState<number | null>(null);
  
  const destinations = [
   
    { id: 'india', name: 'India' },
    { id: 'vietnam', name: 'Vietnam' },
    { id: 'thailand', name: 'Thailand' },
    { id: 'malaysia', name: 'Malaysia' },
    { id: 'singapore', name: 'Singapore' },
     { id: 'cambodia', name: 'Cambodia' },
  ];

  const tourPackages = [
    {
      id: 1,
      name: "Angkor Wat Discovery",
      country: "cambodia",
      duration: "7 days",
      description: "Explore the ancient temples of Angkor Wat, including Ta Prohm and Bayon Temple.",
      highlights: ["Sunrise at Angkor Wat", "Boat tour on Tonlé Sap", "Phnom Penh city tour"],
      image: "/images/cambodia.jpg",
    },
    {
      id: 2,
      name: "Kedarnath Pilgrimage",
      country: "india",
      duration: "5 days",
      description: "Sacred journey to Kedarnath temple dedicated to Lord Shiva in the Himalayas.",
      highlights: ["16 km trek from Gaurikund", "One of the 12 Jyotirlingas", "Helicopter darshan options", "Breathtaking Himalayan scenery"],
      image: "/images/Kedarnath.jpg",
    },
    {
      id: 3,
      name: "Varanasi Spiritual Experience",
      country: "india",
      duration: "4 days",
      description: "Immerse in spirituality at one of the oldest living cities on Earth.",
      highlights: ["Evening Ganga Aarti", "Sunrise boat rides on Ganges", "Ancient alleyways exploration", "Temples and rituals"],
      image: "/images/india/varanasi.jpg",
    },
    {
      id: 4,
      name: "Rishikesh & Haridwar Yoga Retreat",
      country: "india",
      duration: "6 days",
      description: "Blend of yoga, devotion and adventure on the banks of the Ganges.",
      highlights: ["Yoga retreats & teacher training", "River rafting on Ganges", "Ganga Aarti at Har Ki Pauri", "Spiritual ashram visits"],
      image: "/images/india/Rishikesh.jpg",
    },
    {
      id: 5,
      name: "Vrindavan Sacred Journey",
      country: "india",
      duration: "5 days",
      description: "Experience the divine love of Radha and Krishna in this holy town.",
      highlights: ["Banke Bihari Temple darshan", "Prem Mandir light show", "ISKCON Temple kirtans", "Radha Raman Temple visit"],
      image: "/images/india/vrindawan.jpg",
    },
    {
      id: 6,
      name: "Shirdi Sai Baba Pilgrimage",
      country: "india",
      duration: "4 days",
      description: "Visit the home of Sai Baba, respected by people of all faiths.",
      highlights: ["Samadhi Mandir darshan", "Dwarkamai visit", "Devotional songs and prayers", "Chavadi procession"],
      image: "/images/india/Shirdi .jpg",
    },
    {
      id: 7,
      name: "Vaishno Devi Yatra",
      country: "india",
      duration: "5 days",
      description: "Trek to the sacred shrine of Goddess Vaishno Devi in the Trikuta Mountains.",
      highlights: ["13 km trek or helicopter service", "Darshan inside natural cave", "Bhairon Temple visit", "Scenic mountain views"],
      image: "/images/india/Vaishnodevi.jpg",
    },
    {
      id: 8,
      name: "Tirupati Balaji Darshan",
      country: "india",
      duration: "5 days",
      description: "Visit one of the richest and most visited temples in the world.",
      highlights: ["Darshan of Lord Venkateswara", "Pilgrimage up Tirumala Hills", "Free meals (annadanam)", "Tonsuring ritual experience"],
      image: "/images/india/Tirupatibalaji .jpg",
    },
    {
      id: 9,
      name: "Golden Temple Pilgrimage",
      country: "india",
      duration: "4 days",
      description: "Experience the spiritual heart of Sikhism at the holiest Gurudwara.",
      highlights: ["Golden Dome & Sarovar", "Community meals (Langar)", "Non-stop prayers & hymns", "Akal Takht visit"],
      image: "/images/india/Goldentemple.jpg",
    },
    {
      id: 10,
      name: "Somnath Jyotirlinga Darshan",
      country: "india",
      
      duration: "4 days",
      description: "Visit the first of the 12 Jyotirlingas, standing proudly near the Arabian Sea.",
      highlights: ["Temple by the sea", "Jyotirlinga darshan", "Light and sound show", "Prabhas Patan Museum"],
      image: "/images/india/Somnat.jpg",
    },
    // Vetnam
    {
      id: 11,
      name: "Ha Long Bay Cruise",
      country: "vietnam",

      duration: "3 days",
      description: "Luxury cruise through Vietnam's breathtaking Halong Bay with cave explorations.",
      highlights: ["Overnight cruise", "Limestone karst landscapes", "Kayaking in lagoons", "Sunset photography"],
      image: "/images/vetnam/halong.jpg",
    },
    {
      id: 12,
      name: "Hanoi Cultural Immersion",
      country: "vietnam",
      duration: "4 days",
      description: "Explore Vietnam's capital blending old-world charm with vibrant street life.",
      highlights: ["Hoan Kiem Lake", "Old Quarter street food", "Ho Chi Minh Mausoleum", "Water puppet shows"],
      image: "/images/vetnam/Hanoi .jpg",
    },
    {
      id: 13,
      name: "Da Nang Coastal Escape",
      country: "vietnam",
      duration: "4 days",
      description: "Experience clean beaches, modern cityscapes, and mountain temples.",
      highlights: ["Golden Bridge", "My Khe Beach relaxation", "Marble Mountains", "Han River nightlife"],
      image: "/images/vetnam/danang.jpg",
    },
    {
      id: 14,
      name: "Hoi An Ancient Town",
      country: "vietnam",
      duration: "4 days",
      description: "Discover this beautiful UNESCO town full of lanterns and history.",
      highlights: ["Ancient streets exploration", "Lantern Festival", "Custom tailoring", "Thu Bon River boat ride"],
      image: "/images/vetnam/hoian.jpg",
    },
    {
      id: 15,
      name: "Nha Trang Beach Paradise",
      country: "vietnam",
      duration: "5 days",
      description: "Lively beach city known for water sports and island hopping.",
      highlights: ["Hon Mun Island snorkeling", "Po Nagar Cham Towers", "Mud baths experience", "Long Beach relaxation"],
      image: "/images/vetnam/nhatrang.jpg",
    },
    {
      id: 16,
      name: "Sapa Mountain Trekking",
      country: "vietnam",
      duration: "5 days",
      description: "Explore terraced rice fields and ethnic villages in northern Vietnam.",
      highlights: ["Terraced rice fields", "Mount Fansipan trek", "Hmong village visit", "Love Waterfall"],
      image: "/images/vetnam/Sapa.jpg",
    },
    {
      id: 17,
      name: "Hue Imperial City",
      country: "vietnam",
      duration: "3 days",
      description: "Discover Vietnam's former imperial capital full of royal architecture.",
      highlights: ["Imperial Citadel", "Royal tombs exploration", "Perfume River cruise", "Thien Mu Pagoda"],
      image: "/images/vetnam/Hue .jpg",
    },
    {
      id: 18,
      name: "Ho Chi Minh City Adventure",
      country: "vietnam",
      duration: "4 days",
      description: "Experience Vietnam's biggest city full of energy and contrast.",
      highlights: ["Bitexco Tower skyline", "Ben Thanh Market", "War Remnants Museum", "Notre-Dame Cathedral"],
      image: "/images/vetnam/hochimin.jpg",
    },
    {
      id: 19,
      name: "Cu Chi Tunnels Experience",
      country: "vietnam",
      duration: "1 day",
      description: "Explore the vast underground tunnel system used during the Vietnam War.",
      highlights: ["Crawl through war tunnels", "War traps demonstration", "Shooting range", "Guided historical tour"],
      image: "/images/cuchi.jpg",
    },
    {
      id: 20,
      name: "Mekong Delta Exploration",
      country: "vietnam",
      duration: "3 days",
      description: "Discover Vietnam's lush river region with floating markets and canals.",
      highlights: ["Boat tours through canals", "Floating markets visit", "Coconut candy making", "River village homestay"],
      image: "/images/vetnam/mekong.jpg",
    },
    // Thailand
    {
      id: 21,
      name: "Bangkok Adventure",
      country: "thailand",
      duration: "5 days",
      description: "Experience Thailand's vibrant capital with golden temples and bustling markets.",
      highlights: ["Grand Palace & Wat Phra Kaew", "Chatuchak Weekend Market", "Khao San Road street food", "Chao Phraya river cruise"],
      image: "/images/thailand/Bangkok.jpg",
    },
    {
      id: 22,
      name: "Phuket Island Paradise",
      country: "thailand",
      duration: "6 days",
      description: "Thailand's largest island with stunning beaches and vibrant nightlife.",
      highlights: ["Patong, Kata & Karon beaches", "Phi Phi Island tour", "Big Buddha viewpoint", "Beach clubs and nightlife"],
      image: "/images/thailand/phuket.jpg",
    },
    {
      id: 23,
      name: "Krabi Nature Escape",
      country: "thailand",
      duration: "5 days",
      description: "Dramatic limestone cliffs and crystal-clear waters in southern Thailand.",
      highlights: ["Railay Beach & Phra Nang Cave", "4 Island Tour", "Emerald Pool & Hot Springs", "Rock climbing adventures"],
      image: "/images/thailand/krabi.jpg",
    },
    {
      id: 24,
      name: "Chiang Mai Cultural Journey",
      country: "thailand",
      
      duration: "5 days",
      description: "Northern Thailand's cultural capital surrounded by mountains and temples.",
      highlights: ["Doi Suthep Temple", "Ethical elephant sanctuaries", "Night Bazaar shopping", "Yi Peng Lantern Festival (Nov)"],
      image: "/images/thailand/ChiangMai.jpg",
    },
    {
      id: 25,
      name: "Chiang Rai Temple Tour",
      country: "thailand",
      duration: "4 days",
      description: "Discover unique modern temples in Thailand's mystical northern region.",
      highlights: ["Wat Rong Khun (White Temple)", "Black House Museum", "Golden Triangle viewpoint", "Tea plantation visits"],
      image: "/images/thailand/ChiangRai.jpg",
    },
    {
      id: 26,
      name: "Ayutthaya Historical Exploration",
      country: "thailand",
      duration: "3 days",
      description: "UNESCO World Heritage Site with ancient temple ruins near Bangkok.",
      highlights: ["Wat Mahathat (Buddha head in tree)", "Bicycle tour of ruins", "Historical river cruise", "Photo opportunities at sunset"],
      image: "/images/thailand/Ayutthaya.jpg",
    },
    {
      id: 27,
      name: "Pattaya Beach Getaway",
      country: "thailand",
      duration: "4 days",
      description: "Beach destination with family fun and vibrant nightlife near Bangkok.",
      highlights: ["Jomtien Beach & Coral Island", "Walking Street nightlife", "Nong Nooch Tropical Garden", "Tiffany Cabaret Show"],
      image: "/images/thailand/Pattaya.jpg",
    },
    {
      id: 28,
      name: "Pai Mountain Retreat",
      country: "thailand",
      duration: "4 days",
      description: "Peaceful mountain town in Northern Thailand loved by backpackers.",
      highlights: ["Pai Canyon exploration", "Bamboo Bridge walk", "Hot springs relaxation", "Scooter tours to viewpoints"],
      image: "/images/pai.jpg",
    },
    {
      id: 29,
      name: "Sukhothai Historical Park",
      country: "thailand",
      
      duration: "4 days",
      description: "Explore the ruins of Thailand's first capital at this UNESCO site.",
      highlights: ["Sukhothai Historical Park temples", "Bike through ancient city", "Light and Sound show", "Golden hour photography"],
      image: "/images/thailand/Sukhothai.jpg",
    },
    {
      id: 30,
      name: "Koh Samui Luxury Escape",
      country: "thailand",
      
      duration: "6 days",
      description: "Stylish island known for luxury resorts and wellness retreats.",
      highlights: ["Spa & wellness experiences", "Chaweng & Lamai beaches", "Big Buddha Temple", "Ang Thong Marine Park tour"],
      image: "/images/thailand/Kohsamui.jpg",
    },
    // singapore
    {
      id: 31,
      name: "Gardens by the Bay Experience",
      country: "singapore",
      
      duration: "3 days",
      description: "Iconic nature park with futuristic Supertrees and stunning domes.",
      highlights: ["Supertree Grove light show", "Flower Dome greenhouse", "Cloud Forest indoor waterfall", "Spectra night show"],
      image: "/images/singapore/Gardensbythebay.jpg",
    },
    {
      id: 32,
      name: "Marina Bay Sands Luxury",
      country: "singapore",
  
      duration: "4 days",
      description: "World-famous hotel and lifestyle destination with spectacular views.",
      highlights: ["SkyPark Observation Deck", "Infinity pool (hotel guests)", "The Shoppes at Marina Bay", "Evening light show"],
      image: "/images/singapore/Marinabaysands.jpg",
    },
    {
      id: 33,
      name: "Chinatown Cultural Tour",
      country: "singapore",
      duration: "3 days",
      description: "Colorful district packed with culture, temples, and amazing food.",
      highlights: ["Sri Mariamman Temple", "Buddha Tooth Relic Temple", "Maxwell Food Centre chicken rice", "Chinese New Year lanterns"],
      image: "/images/singapore/Chinatown.jpg",
    },
    {
      id: 34,
      name: "Little India Exploration",
      country: "singapore",
      duration: "3 days",
      description: "Vibrant neighborhood filled with Indian culture, temples, and markets.",
      highlights: ["Sri Veeramakaliamman Temple", "Tekka Centre shopping", "Spice and garland markets", "Colorful street art"],
      image: "/images/singapore/littleindia.jpg",
    },
    {
      id: 35,
      name: "Singapore Zoo Adventure",
      country: "singapore",
      duration: "3 days",
      description: "World-class zoo with natural enclosures and immersive experiences.",
      highlights: ["Breakfast with Orangutans", "Rainforest KidzWorld", "Tram rides through zones", "Animal shows and encounters"],
      image: "/images/singapore/Singaporezoo.jpg",
    },
    {
      id: 36,
      name: "Sentosa Island Fun",
      country: "singapore",
      duration: "4 days",
      description: "Entertainment island with beaches, theme parks, and attractions.",
      highlights: ["Universal Studios Singapore", "Siloso & Palawan beaches", "SkyHelix panoramic ride", "Cable car from Mount Faber"],
      image: "/images/singapore/Sentosaisland.jpg",
    },
    {
      id: 37,
      name: "S.E.A. Aquarium Discovery",
      country: "singapore",
      duration: "2 days",
      description: "One of the world's largest aquariums with incredible marine life.",
      highlights: ["Open Ocean Tank with sharks", "Underwater tunnel walks", "Touch pools for kids", "Rare marine species displays"],
      image: "/images/singapore/seaquarium.jpg",
    },
    {
      id: 38,
      name: "Clarke Quay Nightlife",
      country: "singapore",
      duration: "3 days",
      description: "Buzzing riverside area with restaurants, bars, and nightlife.",
      highlights: ["Singapore River cruise", "Rooftop bars with live music", "International dining options", "Nightclubs and parties"],
      image: "/images/singapore/Clarkequay.jpg",
    },
    {
      id: 39,
      name: "Bird Paradise Adventure",
      country: "singapore",
      duration: "2 days",
      description: "Singapore's newest bird park with immersive aviaries and exhibits.",
      highlights: ["Walk-through global bird zones", "Penguin Cove experience", "Bird feeding sessions", "Educational tropical exhibits"],
      image: "/images/singapore/birdparadise.jpg",
    },
    {
      id: 40,
      name: "National Museum Journey",
      country: "singapore",
      duration: "2 days",
      description: "Singapore's oldest museum showcasing the nation's history and culture.",
      highlights: ["Gallery of Singapore's independence", "Light and sound installations", "Immersive historical exhibits", "Stunning architectural photo spots"],
      image: "/images/singapore/Nationalmuseum.jpg",
    },
    {
      id: 41,
      name: "Malaysian Adventure",
      country: "malaysia",
      duration: "9 days",
      description: "From Kuala Lumpur's skyline to Borneo's rainforests and Langkawi's beaches.",
      highlights: ["Petronas Towers visit", "Orangutan sanctuary", "Langkawi cable car"],
      image: "/images/malaysia.jpg",
    },
    {
      id: 43,
      name: "Southeast Asia Grand Tour",
      country: "all",
      duration: "21 days",
      description: "Comprehensive journey through Thailand, Cambodia, Vietnam, and Singapore.",
      highlights: ["Angkor Wat sunrise", "Halong Bay cruise", "Mekong Delta exploration"],
      image: "/images/asia-grand.jpg",
    },
  ];

  const filteredPackages = selectedDestination === 'all' 
    ? tourPackages 
    : tourPackages.filter(pkg => pkg.country === selectedDestination);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50 text-gray-900 py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4">
            <motion.div 
              className="h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </div>
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-700">
              Global Explorer
            </span> Tours
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover ancient wonders, vibrant cultures, and breathtaking landscapes with our premium international tour packages
          </motion.p>
        </motion.div>

        {/* Destination Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-full font-medium transition-all ${
              selectedDestination === 'all'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-400/30'
                : 'bg-white hover:bg-gray-100 text-gray-700 shadow-md'
            }`}
            onClick={() => setSelectedDestination('all')}
          >
            All Destinations
          </motion.button>
          
          {destinations.map((dest) => (
            <motion.button
              key={dest.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full flex items-center gap-2 transition-all ${
                selectedDestination === dest.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-400/30'
                  : 'bg-white hover:bg-gray-100 text-gray-700 shadow-md'
              }`}
              onClick={() => setSelectedDestination(dest.id)}
            >
              <span className="text-xl"></span>
              {dest.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Tour Packages */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {filteredPackages.map((pkg) => (
            <motion.div
              key={pkg.id}
              className={`rounded-2xl overflow-hidden border border-gray-200 bg-white/80 backdrop-blur-sm shadow-lg ${
                activePackage === pkg.id ? 'ring-2 ring-cyan-500 scale-[1.02]' : ''
              } transition-all duration-300`}
              whileHover={{ y: -10 }}
              layout
            >
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent z-10" />
                
                <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="text-2xl font-bold text-gray-900">{pkg.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-blue-700 font-medium">
                      {destinations.find(d => d.id === pkg.country)?.name}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className="text-cyan-600 font-medium">{pkg.duration}</span>
                  </div>
                </div>
                {/* Fixed image rendering */}
                <img 
                  src={pkg.image} 
                  alt={pkg.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-cyan-600 mb-2 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Package Highlights
                  </h4>
                  <ul className="space-y-2">
                    {pkg.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-cyan-500 mr-2">•</span>
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-between items-center">
                  <motion.button
                    className="px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-lg font-medium text-white hover:from-cyan-500 hover:to-blue-600 transition-all shadow-md"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book Now
                  </motion.button>
                  
                  <button 
                    className="text-cyan-600 hover:text-cyan-700 flex items-center gap-1 font-medium"
                    onClick={() => setActivePackage(activePackage === pkg.id ? null : pkg.id)}
                  >
                    {activePackage === pkg.id ? 'Show Less' : 'Learn More'}
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform ${activePackage === pkg.id ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                
                {activePackage === pkg.id && (
                  <motion.div 
                    className="mt-6 pt-6 border-t border-gray-200"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className="font-bold text-cyan-600 mb-3">What's Included</h4>
                    <ul className="grid grid-cols-2 gap-3 text-sm">
                      <li className="flex items-center gap-2 text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        4-5 Star Accommodation
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        All Transportation
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Daily Breakfast
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Guided Tours
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        24/7 Support
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Entry Fees Included
                      </li>
                    </ul>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      {pkg.country === 'india' ? (
                        <>
                          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Spiritual Journey</span>
                          <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Pilgrimage</span>
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Cultural Experience</span>
                        </>
                      ) : pkg.country === 'vietnam' ? (
                        <>
                          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Nature</span>
                          <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Adventure</span>
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Cultural</span>
                        </>
                      ) : pkg.country === 'thailand' ? (
                        <>
                          <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Beaches</span>
                          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Culture</span>
                          <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">Adventure</span>
                        </>
                      ) : pkg.country === 'singapore' ? (
                        <>
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Urban</span>
                          <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm">Family</span>
                          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Modern</span>
                        </>
                      ) : (
                        <>
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Cultural Experience</span>
                          <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm">Local Cuisine</span>
                          <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">Adventure</span>
                        </>
                      )}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Testimonials */}
        <motion.div 
          className="mt-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-700">
              Traveler Experiences
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                tour: "Kedarnath Pilgrimage",
                comment: "The trek to Kedarnath was challenging but spiritually rewarding. The helicopter option made it accessible for my elderly parents.",
                rating: 5
              },
              {
                name: "Priya Sharma",
                tour: "Varanasi Spiritual Experience",
                comment: "The Ganga Aarti at Dashashwamedh Ghat was a transcendental experience. Our guide helped us understand the deep spiritual significance.",
                rating: 5
              },
              {
                name: "Michael Chen",
                tour: "Halong Bay Cruise",
                comment: "The limestone karsts at sunset were breathtaking. Kayaking through hidden lagoons was the highlight of our Vietnam trip!",
                rating: 5
              },
              {
                name: "Thomas Müller",
                tour: "Bangkok Adventure",
                comment: "The blend of temples, markets, and street food made Bangkok unforgettable. The Grand Palace was truly magnificent!",
                rating: 5
              },
              {
                name: "Emma Wilson",
                tour: "Gardens by the Bay Experience",
                comment: "The Supertree Grove light show was magical. The Cloud Forest dome felt like stepping into another world - absolutely stunning!",
                rating: 5
              },
              {
                name: "David Kim",
                tour: "Chiang Mai Cultural Journey",
                comment: "The ethical elephant sanctuary experience touched my heart. Doi Suthep temple at sunset was the perfect ending to each day.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 shadow-md"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i}
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-amber-400' : 'text-gray-300'}`} 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-cyan-600 text-sm">{testimonial.tour}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* CTA */}
        <motion.div 
  className="mt-24 text-center"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
    Ready for Your Next Adventure?
  </h2>
  <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
    Join thousands of travelers who've experienced unforgettable journeys with Global Explorer Tours
  </p>

  {/* Download Link Styled as a Button */}
  <motion.a
    href="/images/brochure.pdf" // Make sure brochure.pdf is inside your `public` folder
    download="Brochure.pdf"
    className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-xl font-bold text-lg text-white shadow-lg shadow-cyan-500/30 hover:from-cyan-500 hover:to-blue-600 transition-all"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Download Brochures
  </motion.a>

  <p className="mt-4 text-gray-500">
    Flexible booking options • 24/7 customer support
  </p>
</motion.div>

      </div>
    </div>
  );
};

export default InternationalToursLight;