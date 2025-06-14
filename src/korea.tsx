// App.tsx
import React, { useState, useEffect, useRef } from 'react';

type Destination = {
  id: number;
  title: string;
  tagline: string;
  description: string;
  planningTip: string;
  imageUrl: string;
  category: string;
};

const App: React.FC = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [filteredDestinations, setFilteredDestinations] = useState<Destination[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  
  const categories = ['all', 'urban', 'history', 'nature', 'culture', 'adventure'];

  useEffect(() => {
    // Fetch destination data
    const destinationsData: Destination[] = [
      {
        id: 1,
        title: 'Seoul',
        tagline: 'Best for nightlife',
        description: 'Home to half of South Korea\'s population, Seoul is the electric capital where revelers can seek out low-key watering holes, high-end cocktail lounges, and always-fun noraebang (karaoke bars) at any hour. Discover trendsetting bars in Euljiro or explore the nightlife neighborhoods of Gangnam, Hongdae, and Itaewon.',
        planningTip: 'Planning tip: Gangnam has the most expensive clubs, Hongdae is budget-friendly, and Itaewon draws an international crowd.',
        imageUrl: 'https://images.unsplash.com/photo-1560843430-8a4d5c3b9b0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        category: 'urban'
      },
      {
        id: 2,
        title: 'Gyeongju',
        tagline: 'Best for ancient treasures',
        description: 'Once the capital of the Silla kingdom, Gyeongju is a treasure trove of ancient relics. Known as Korea\'s "Museum Without Walls," explore royal tombs at Tumuli-gongwon, the ancient Cheomseongdae observatory, the Buddhist grotto of Seokguram, and the stunning covered bridge of Woljeonggyo.',
        planningTip: 'Don\'t miss: Visit the Gyeongju National Museum to see ornate jewelry, earthenware, and Buddha statues.',
        imageUrl: 'https://images.unsplash.com/photo-1628588542179-4f4d3d3b1b1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        category: 'history'
      },
      {
        id: 3,
        title: 'Busan',
        tagline: 'Best for maritime culture',
        description: 'South Korea\'s vibrant port city overflows with maritime culture. Visit the bustling Port of Busan, explore beautiful beaches, parks, and the oceanside Haedong Yonggungsa temple. Experience Jagalchi, Korea\'s largest fish market, where you can select fresh seafood and have it prepared on the spot.',
        planningTip: 'Food tip: Try jogae gui (grilled shellfish) with various dipping sauces at beachside restaurants.',
        imageUrl: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        category: 'culture'
      },
      {
        id: 4,
        title: 'Jeju-do',
        tagline: 'Best for beaches & waterfalls',
        description: 'Blessed with a subtropical climate, Jeju-do is Korea\'s most popular vacation destination. Enjoy glittering beaches with white or black sand, crystal clear waters, and dramatic volcanic landscapes. Beyond relaxation, adventure seekers can climb Mount Hallasan, surf, snorkel, explore lava tubes, or chase waterfalls.',
        planningTip: 'Adventure tip: Try rafting in a traditional tewoo boat at the Soesokkak Estuary.',
        imageUrl: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        category: 'nature'
      },
      {
        id: 5,
        title: 'Gangwon-do',
        tagline: 'Best for winter sports',
        description: 'Home to South Korea\'s best ski resorts and host of the 2018 Winter Olympics, Gangwon-do is a winter paradise. Ski or snowboard at top-rated resorts like YongPyong or High1. Beyond the slopes, experience winter festivals featuring ice fishing, curling, sledding, and spectacular ice sculptures.',
        planningTip: 'Festival tip: Visit during the Hwacheon Sancheoneo Ice Festival or Taebaeksan Snow Festival.',
        imageUrl: 'https://images.unsplash.com/photo-1605283176568-9b41fde3672e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        category: 'adventure'
      },
      {
        id: 6,
        title: 'Andong',
        tagline: 'Best for folk traditions',
        description: 'Known as the "Capital of Korean Spirit," Andong is Korea\'s Confucian culture capital. Visit the UNESCO-listed Hahoe Folk Village to experience Joseon-era life. Explore the Hahoe Mask Museum, witness traditional mask dance performances, and sample local specialties like Andong soju and jjimdak (soy-braised chicken).',
        planningTip: 'Cultural tip: Book an overnight stay in a traditional choga guesthouse at Hahoe Village.',
        imageUrl: 'https://images.unsplash.com/photo-1628588542185-235c0c0f0d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        category: 'culture'
      },
      {
        id: 7,
        title: 'Gwangju',
        tagline: 'Best for contemporary history',
        description: 'Regarded as the birthplace of Korean democracy, Gwangju was the site of the pivotal May 18 Democratic Uprising of 1980. Visit the May 18th Memorial Park and National Cemetery to understand this crucial event in Korea\'s modern history. Walk down Chungjang-ro, now a shopping street that was once the uprising\'s epicenter.',
        planningTip: 'Historical insight: The uprising marked a turning point in South Korea\'s struggle for democracy.',
        imageUrl: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        category: 'history'
      }
    ];
    
    setDestinations(destinationsData);
    setFilteredDestinations(destinationsData);
    
    // Animate subtitle after a delay
    const timer = setTimeout(() => {
      if (subtitleRef.current) {
        subtitleRef.current.classList.add('opacity-100', 'translate-y-0');
      }
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const handleFilter = (category: string) => {
    setActiveFilter(category);
    if (category === 'all') {
      setFilteredDestinations(destinations);
    } else {
      const filtered = destinations.filter(dest => dest.category === category);
      setFilteredDestinations(filtered);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-black text-white overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CiAgPGxpbmUgeDE9IjAiIHkxPSIwIiB4Mj0iNDAiIHkyPSI0MCIgc3Ryb2tlPSJyZ2JhKDU2LCAxODksIDI0OCwgMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPgogIDxsaW5lIHgxPSI0MCIgeTE9IjAiIHgyPSIwIiB5Mj0iNDAiIHN0cm9rZT0icmdiYSg1NiwgMTg5LCAyNDgsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] opacity-10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
      
      {/* Navigation */}
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-900/95 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
          <button 
            className="absolute top-6 right-6 text-cyan-200"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          
          <div className="flex flex-col items-center space-y-8 text-xl">
            {['Destinations', 'Experiences', 'Itineraries', 'About', 'Contact'].map((item) => (
              <a 
                key={item}
                href="#" 
                className="text-cyan-200 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-gray-900 font-bold hover:opacity-90 transition-opacity">
              Book Now
            </button>
          </div>
        </div>
      )}
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center pt-8 md:pt-16">
          <div className="relative inline-block">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 animate-gradient">
              FUTURE KOREA
            </h1>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full"></div>
          </div>
          
          <p 
            ref={subtitleRef}
            className="mt-6 text-lg md:text-xl text-cyan-100 opacity-0 max-w-2xl mx-auto transform translate-y-4 transition-all duration-700"
          >
            Discover the fusion of ancient tradition and cutting-edge innovation across South Korea's most captivating destinations
          </p>
          
          <div className="mt-12 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg blur opacity-75 animate-pulse"></div>
              <button className="relative px-8 py-3 bg-gray-900 rounded-lg font-bold text-lg transition-all hover:bg-gray-800 hover:scale-105">
                START YOUR JOURNEY
              </button>
            </div>
          </div>
        </header>
        
        <main className="mt-16">
          {/* Filter bar */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => handleFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-gray-900 shadow-lg shadow-cyan-500/30'
                    : 'bg-gray-800 text-cyan-100 hover:bg-gray-700'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          
          {/* Destinations grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {filteredDestinations.map((destination, index) => (
              <div 
                key={destination.id}
                className="bg-gray-800/50 backdrop-blur-lg rounded-xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 opacity-0 animate-fade-in-up shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-gray-900 font-bold rounded-full text-sm">
                      {destination.tagline}
                    </span>
                  </div>
                  <img 
                    src={destination.imageUrl} 
                    alt={destination.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent">
                    {destination.title}
                  </h3>
                  <p className="text-cyan-100 mb-4">{destination.description}</p>
                  <div className="mt-4 p-4 bg-gray-900/50 rounded-lg border-l-4 border-cyan-500">
                    <p className="text-sm text-cyan-300">{destination.planningTip}</p>
                  </div>
                  
                  <div className="mt-6 flex justify-end">
                    <button className="px-4 py-2 bg-gray-900 rounded-lg font-medium flex items-center group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-purple-500 group-hover:text-gray-900 transition-all">
                      Explore More
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
        
        {/* Footer */}
        <footer className="mt-24 pt-8 pb-12 border-t border-gray-800">
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              {['Privacy Policy', 'Terms of Service', 'Contact', 'FAQ'].map(item => (
                <a 
                  key={item}
                  href="#" 
                  className="text-cyan-300 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
            
            <div className="flex justify-center space-x-6 mb-6">
              {[0, 1, 2, 3].map(i => (
                <a 
                  key={i}
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-cyan-500 transition-colors"
                >
                  <div className="w-4 h-4 rounded-full bg-cyan-300"></div>
                </a>
              ))}
            </div>
            
            <p className="text-gray-500 text-sm">
              © {currentYear} Future Korea Travel. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
      
      {/* Floating action button */}
      <div className="fixed bottom-6 right-6 z-20">
        <button className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
          <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
          </svg>
        </button>
      </div>
      
      {/* Particles animation */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-cyan-500 opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Custom styles */}
      <style>{`
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradient-shift 8s ease infinite;
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-20px) translateX(10px) rotate(180deg);
            opacity: 0.3;
          }
          100% {
            transform: translateY(0) translateX(0) rotate(360deg);
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
};

export default App;