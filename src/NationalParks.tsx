// src/components/NationalParksPage.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

type Park = {
  id: number;
  name: string;
  established: number;
  area: string;
  elevation: string;
  highlights: string[];
  description: string;
  image: string;
  wildlife: string[];
  activities: string[];
};

const NationalParksPage: React.FC = () => {
  const [activePark, setActivePark] = useState<number>(1);
  
  const parks: Park[] = [
    {
      id: 1,
      name: "Sagarmatha National Park",
      established: 1976,
      area: "1,148 km²",
      elevation: "2,845m - 8,848m",
      highlights: ["Mount Everest", "Sherpa culture", "Ancient monasteries"],
      description: "Home to the world's highest peak, Mount Everest, this UNESCO World Heritage site offers breathtaking landscapes, unique Sherpa culture, and diverse wildlife. The park encompasses the upper catchments of the Dudh Koshi river system.",
      image: "mount-everest",
      wildlife: ["Snow leopard", "Red panda", "Himalayan tahr", "Himalayan monal"],
      activities: ["Trekking", "Mountain climbing", "Cultural tours", "Wildlife viewing"]
    },
    {
      id: 2,
      name: "Chitwan National Park",
      established: 1973,
      area: "952.63 km²",
      elevation: "150m - 815m",
      highlights: ["One-horned rhinoceros", "Bengal tigers", "Tharu culture"],
      description: "Nepal's first national park and a UNESCO World Heritage site, Chitwan is famous for its population of one-horned rhinoceros and Bengal tigers. The park features diverse ecosystems including sal forests, grasslands, and riverine forests.",
      image: "chitwan-rhino",
      wildlife: ["Bengal tiger", "One-horned rhinoceros", "Gharial crocodile", "Sloth bear"],
      activities: ["Jungle safari", "Elephant ride", "Canoeing", "Bird watching"]
    },
    {
      id: 3,
      name: "Bardia National Park",
      established: 1988,
      area: "968 km²",
      elevation: "152m - 1,440m",
      highlights: ["Tiger conservation area", "Wild elephants", "Karnali River"],
      description: "The largest and most undisturbed national park in Nepal's Terai region, Bardia provides a pristine wilderness experience. It's known for its successful tiger conservation efforts and populations of wild elephants.",
      image: "bardia-tiger",
      wildlife: ["Royal Bengal tiger", "Asian elephant", "Gangetic dolphin", "Swamp deer"],
      activities: ["Jungle walks", "Tharu cultural experience", "River rafting", "Fishing"]
    },
    {
      id: 4,
      name: "Langtang National Park",
      established: 1976,
      area: "1,710 km²",
      elevation: "792m - 7,245m",
      highlights: ["Langtang Valley", "Gosainkunda Lake", "Tamang heritage"],
      description: "Closest national park to Kathmandu, Langtang features a spectacular combination of natural and cultural attractions. The park ranges from subtropical forests to alpine meadows and snow-capped peaks.",
      image: "langtang-valley",
      wildlife: ["Red panda", "Himalayan black bear", "Ghoral", "Rhesus monkey"],
      activities: ["Trekking", "Mountain biking", "Pilgrimage tours", "Wildflower viewing"]
    },
    {
      id: 5,
      name: "Rara National Park",
      established: 1976,
      area: "106 km²",
      elevation: "2,800m - 4,039m",
      highlights: ["Rara Lake", "Remote wilderness", "Pristine forests"],
      description: "Centered around Nepal's largest lake, Rara National Park is one of the most remote protected areas. The park offers stunning mountain scenery reflected in the crystal-clear waters of Rara Lake.",
      image: "rara-lake",
      wildlife: ["Red panda", "Himalayan black bear", "Musk deer", "Snow trout"],
      activities: ["Trekking", "Boating", "Bird watching", "Photography"]
    },
    {
      id: 6,
      name: "Shey Phoksundo National Park",
      established: 1984,
      area: "3,555 km²",
      elevation: "2,130m - 6,883m",
      highlights: ["Phoksundo Lake", "Ancient monasteries", "Snow leopards"],
      description: "Nepal's largest national park protects the trans-Himalayan ecosystem. The park features the stunning Shey Phoksundo Lake, one of Nepal's deepest and most beautiful alpine lakes.",
      image: "phoksundo-lake",
      wildlife: ["Snow leopard", "Blue sheep", "Himalayan tahr", "Tibetan wolf"],
      activities: ["Wildlife viewing", "Trekking", "Cultural tours", "Photography"]
    },
    {
      id: 7,
      name: "Khaptad National Park",
      established: 1984,
      area: "225 km²",
      elevation: "1,400m - 3,300m",
      highlights: ["Khaptad Daha", "Ashram of Khaptad Baba", "Diverse meadows"],
      description: "A mid-mountain park in the Far-Western region, Khaptad features a rolling plateau with grasslands, forests, and ponds. The park is known for its religious significance and floral diversity.",
      image: "khaptad-meadow",
      wildlife: ["Leopard", "Himalayan black bear", "Goral", "Rhesus macaque"],
      activities: ["Trekking", "Meditation", "Bird watching", "Wildflower viewing"]
    }
  ];

  const currentPark = parks.find(park => park.id === activePark) || parks[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-indigo-900 to-emerald-900 text-white overflow-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')] bg-cover opacity-20"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-emerald-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
      
      {/* Header */}
      <header className="relative z-10 container mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full mr-3"></div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">HIMALAYAN TREKS</h1>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-16">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-green-300 bg-clip-text text-transparent">
              NEPAL'S NATIONAL PARKS
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-cyan-100 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Discover the breathtaking biodiversity and majestic landscapes of Nepal's protected wilderness areas
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-gray-900 font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
              EXPLORE THE WILDERNESS
            </button>
          </motion.div>
        </section>
        
        {/* Parks Navigation */}
        <section className="py-8 mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {parks.map(park => (
              <button
                key={park.id}
                onClick={() => setActivePark(park.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105 ${
                  activePark === park.id
                    ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-gray-900 shadow-lg shadow-cyan-500/30'
                    : 'bg-gray-800/50 text-cyan-100 hover:bg-gray-700/50'
                }`}
              >
                {park.name}
              </button>
            ))}
          </div>
        </section>
        
        {/* Park Detail Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div 
            className="bg-gray-800/30 backdrop-blur-lg rounded-3xl p-8 border border-cyan-500/20 shadow-xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              {currentPark.name}
            </h2>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-900/50 p-4 rounded-xl">
                <h3 className="text-sm text-cyan-300 mb-1">ESTABLISHED</h3>
                <p className="text-xl font-bold">{currentPark.established}</p>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-xl">
                <h3 className="text-sm text-cyan-300 mb-1">AREA</h3>
                <p className="text-xl font-bold">{currentPark.area}</p>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-xl">
                <h3 className="text-sm text-cyan-300 mb-1">ELEVATION</h3>
                <p className="text-xl font-bold">{currentPark.elevation}</p>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-xl">
                <h3 className="text-sm text-cyan-300 mb-1">UNESCO SITE</h3>
                <p className="text-xl font-bold">{currentPark.id === 1 || currentPark.id === 2 ? "Yes" : "No"}</p>
              </div>
            </div>
            
            <p className="text-cyan-100 mb-6 text-lg">{currentPark.description}</p>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3 text-cyan-300">Key Highlights</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentPark.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-emerald-400 mr-2">✓</span>
                    <span className="text-cyan-100">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-cyan-300">Wildlife</h3>
                <div className="flex flex-wrap gap-2">
                  {currentPark.wildlife.map((animal, index) => (
                    <span key={index} className="px-3 py-1 bg-emerald-900/50 text-emerald-200 rounded-full text-sm">
                      {animal}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3 text-cyan-300">Activities</h3>
                <div className="flex flex-wrap gap-2">
                  {currentPark.activities.map((activity, index) => (
                    <span key={index} className="px-3 py-1 bg-cyan-900/50 text-cyan-200 rounded-full text-sm">
                      {activity}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative rounded-3xl overflow-hidden h-[500px] border border-cyan-500/30 shadow-2xl"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <h3 className="text-2xl font-bold text-white">{currentPark.name}</h3>
              <p className="text-cyan-200">{currentPark.elevation}</p>
            </div>
            <div className="w-full h-full bg-gray-200 animate-pulse"></div>
          </motion.div>
        </section>
        
        {/* Conservation Section */}
        <section className="py-12 mb-20">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Conservation Efforts</h2>
            <div className="h-1 w-32 bg-cyan-500 mx-auto mb-6"></div>
            <p className="text-lg text-cyan-100">
              Nepal is a global leader in conservation, with successful programs protecting endangered species and their habitats
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Tiger Conservation",
                stat: "126% Increase",
                description: "Nepal is on track to become the first country to double its wild tiger population",
                icon: "🐅"
              },
              {
                title: "Rhino Protection",
                stat: "90% Survival Rate",
                description: "Strict anti-poaching measures have dramatically increased rhino populations",
                icon: "🦏"
              },
              {
                title: "Community Involvement",
                stat: "100+ Buffer Zones",
                description: "Local communities actively participate in conservation through buffer zone programs",
                icon: "👥"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/20 hover:border-emerald-500/50 transition-all"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-cyan-300">{item.title}</h3>
                <div className="text-3xl font-bold mb-2 text-emerald-400">{item.stat}</div>
                <p className="text-cyan-100">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 mb-12 text-center bg-gradient-to-r from-cyan-900/40 to-emerald-900/40 rounded-3xl border border-cyan-500/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for an Adventure?</h2>
          <p className="text-xl text-cyan-100 max-w-2xl mx-auto mb-10">
            Experience the majestic beauty of Nepal's national parks with our expert guides
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-gray-900 font-bold rounded-full hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
              Book Your Trek
            </button>
            <button className="px-8 py-4 bg-transparent border border-cyan-500 text-cyan-400 font-bold rounded-full hover:bg-cyan-500/10 transition-colors">
              Request Itinerary
            </button>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      
    </div>
  );
};

export default NationalParksPage;