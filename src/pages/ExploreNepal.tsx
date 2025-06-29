// explorenepal.tsx
import  { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ExploreNepal = () => {
  const [activeTab, setActiveTab] = useState('culture');
  const [heroImageIndex, setHeroImageIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const heroImages = [
    'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1580502304784-8985b7eb7260?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1601430854328-26d0d524344a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80'
  ];

  // Rotate hero images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (section: string) => {
    setActiveTab(section);
    if (scrollRef.current) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white font-sans overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out">
          {heroImages.map((img, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === heroImageIndex ? 'opacity-100' : 'opacity-0'}`}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(0.7)'
              }}
            ></div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900 z-10"></div>
        </div>
        
        <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
          <div className="bg-black bg-opacity-50 backdrop-blur-sm p-8 rounded-3xl max-w-4xl border border-white/20 shadow-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 animate-pulse">
              EXPLORE NEPAL
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-yellow-100 drop-shadow-lg">
              Where ancient traditions meet breathtaking landscapes in the heart of the Himalayas
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => scrollToSection('ntb')}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-full hover:scale-105 transition-transform duration-300 font-medium text-lg shadow-lg shadow-orange-500/30 animate-bounce"
              >
                Discover Nepal Tourism
              </button>
              <button 
                onClick={() => scrollToSection('adventure')}
                className="px-8 py-4 border-2 border-white rounded-full hover:bg-white hover:text-black transition-colors duration-300 font-medium text-lg shadow-lg shadow-white/20"
              >
                Adventure Awaits
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20">
          <div className="animate-bounce">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-50 bg-gray-800 bg-opacity-90 backdrop-blur-sm shadow-xl">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-1 md:gap-4 py-4">
            {['ntb', 'culture', 'nature', 'food', 'adventure'].map((tab) => (
              <button
                key={tab}
                onClick={() => scrollToSection(tab)}
                className={`px-6 py-3 rounded-full text-sm md:text-base transition-all duration-300 flex items-center ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30'
                    : 'hover:bg-gray-700'
                }`}
              >
                {tab === 'ntb' && '🏛️ '}
                {tab === 'culture' && '🎭 '}
                {tab === 'nature' && '🏔️ '}
                {tab === 'food' && '🍛 '}
                {tab === 'adventure' && '🧗 '}
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div ref={scrollRef} className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Nepal Tourism Board */}
        <section id="ntb" className="py-16">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-2/5">
              <div className="bg-gray-800 rounded-3xl p-8 border border-gray-700 shadow-2xl relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-r from-orange-500 to-red-600 rounded-full opacity-20 blur-3xl"></div>
                <div className="relative z-10">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-24 h-1 mb-6 rounded-full"></div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Nepal Tourism Board (NTB)
                  </h2>
                  <p className="mb-4 text-gray-300">
                    Formed in 1998, NTB is a joint effort between the government and private travel companies. Its mission is to make Nepal a top travel destination by supporting safe, sustainable, and meaningful travel experiences.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-700 p-4 rounded-xl backdrop-blur-sm border border-gray-600">
                      <div className="text-cyan-400 text-2xl mb-2">🌐</div>
                      <h3 className="font-semibold">Global Promotion</h3>
                    </div>
                    <div className="bg-gray-700 p-4 rounded-xl backdrop-blur-sm border border-gray-600">
                      <div className="text-cyan-400 text-2xl mb-2">🎪</div>
                      <h3 className="font-semibold">Travel Fairs</h3>
                    </div>
                    <div className="bg-gray-700 p-4 rounded-xl backdrop-blur-sm border border-gray-600">
                      <div className="text-cyan-400 text-2xl mb-2">📝</div>
                      <h3 className="font-semibold">Permit Support</h3>
                    </div>
                    <div className="bg-gray-700 p-4 rounded-xl backdrop-blur-sm border border-gray-600">
                      <div className="text-cyan-400 text-2xl mb-2">🤝</div>
                      <h3 className="font-semibold">Local Partnerships</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-3/5">
              <div className="bg-gradient-to-br from-cyan-900 to-blue-900 rounded-3xl p-8 border border-cyan-500/30 shadow-2xl">
                <h3 className="text-2xl font-bold mb-4 text-cyan-300">NTB's Key Roles</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-cyan-500 rounded-full p-2 mr-4 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p>Promoting Nepal's rich culture, nature, food and adventure activities globally</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-cyan-500 rounded-full p-2 mr-4 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p>Organizing travel fairs, events, and campaigns like "Visit Nepal Year"</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-cyan-500 rounded-full p-2 mr-4 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p>Supporting trekking permits (like the TIMS card) and tourist information services</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-cyan-500 rounded-full p-2 mr-4 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p>Partnering with local agencies to make tourism better for everyone</p>
                  </li>
                </ul>
                <div className="mt-8 p-4 bg-black bg-opacity-30 rounded-xl border border-cyan-500/20 backdrop-blur-sm">
                  <p className="text-cyan-200 italic">
                    "Thanks to NTB, Nepal continues to shine on the global tourism map. We're proud to support their vision by offering personalized trips that reflect the beauty and spirit of Nepal."
                  </p>
                </div>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div 
                  className="h-48 rounded-2xl overflow-hidden relative"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1630409345782-793e6dbe4e22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                    <span className="text-white font-medium">NTB Promotion Event</span>
                  </div>
                </div>
                <div 
                  className="h-48 rounded-2xl overflow-hidden relative"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                    <span className="text-white font-medium">Trekking Permits</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section id="culture" className="py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nepal's Rich Cultural Tapestry</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto rounded-full"></div>
            <p className="mt-6 max-w-3xl mx-auto text-gray-300">
              Nepal is a country where culture is not just a part of life—it is life. The traditions, rituals, languages, festivals, and social practices are deeply embedded in everyday living.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Religion */}
            <div className="bg-gray-800 rounded-3xl p-8 border border-yellow-500/20 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-r from-yellow-500 to-red-600 rounded-full opacity-20 blur-3xl"></div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-400 relative z-10">Religion & Spirituality</h3>
              <ul className="space-y-4 relative z-10">
                <li className="flex items-start">
                  <div className="bg-yellow-500 rounded-full p-2 mr-4 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p>Hinduism is the dominant religion, with Buddhism widely followed in Himalayan regions</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-yellow-500 rounded-full p-2 mr-4 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p>Lumbini, birthplace of Lord Buddha, is a UNESCO World Heritage Site</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-yellow-500 rounded-full p-2 mr-4 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p>Sacred architecture includes Pashupatinath, Swayambhunath, and Boudhanath</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-yellow-500 rounded-full p-2 mr-4 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p>Peaceful coexistence between Hinduism and Buddhism reflects spiritual unity</p>
                </li>
              </ul>
            </div>
            
            {/* Festivals */}
            <div className="bg-gray-800 rounded-3xl p-8 border border-red-500/20 relative overflow-hidden">
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-r from-red-500 to-pink-600 rounded-full opacity-20 blur-3xl"></div>
              <h3 className="text-2xl font-bold mb-4 text-red-400 relative z-10">Festivals & Celebrations</h3>
              <ul className="space-y-4 relative z-10">
                <li className="flex items-start">
                  <div className="bg-red-500 rounded-full p-2 mr-4 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p><span className="font-semibold">Dashain:</span> 15-day festival honoring goddess Durga</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-500 rounded-full p-2 mr-4 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p><span className="font-semibold">Tihar:</span> Festival of lights honoring animals</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-500 rounded-full p-2 mr-4 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p><span className="font-semibold">Buddha Jayanti:</span> Celebrates Buddha's birth, enlightenment, and death</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-500 rounded-full p-2 mr-4 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p><span className="font-semibold">Ethnic Festivals:</span> Losar (Tibetan New Year), Maghe Sankranti, and more</p>
                </li>
              </ul>
            </div>
            
            {/* Language */}
            <div className="bg-gray-800 rounded-3xl p-8 border border-green-500/20 relative overflow-hidden">
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full opacity-20 blur-3xl"></div>
              <h3 className="text-2xl font-bold mb-4 text-green-400 relative z-10">Language & Ethnicity</h3>
              <ul className="space-y-4 relative z-10">
                <li className="flex items-start">
                  <div className="bg-green-500 rounded-full p-2 mr-4 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p>Over 120 recognized languages with Nepali as the official language</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-500 rounded-full p-2 mr-4 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p>More than 125 ethnic groups including Brahmin, Chhetri, Newar, Gurung, Magar, Sherpa, Rai, and Tharu</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-500 rounded-full p-2 mr-4 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p>Each group has unique dance forms, music, food, dress, and rituals</p>
                </li>
              </ul>
            </div>
            
            {/* Arts */}
            <div className="bg-gray-800 rounded-3xl p-8 border border-purple-500/20 relative overflow-hidden">
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-r from-purple-500 to-fuchsia-600 rounded-full opacity-20 blur-3xl"></div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400 relative z-10">Traditional Arts & Crafts</h3>
              <ul className="space-y-4 relative z-10">
                <li className="flex items-start">
                  <div className="bg-purple-500 rounded-full p-2 mr-4 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p>Intricate wood carving and architecture in Kathmandu, Bhaktapur, and Patan</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-500 rounded-full p-2 mr-4 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p>Metalwork, pottery, and Thangka paintings</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-500 rounded-full p-2 mr-4 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p>Traditional instruments like madal, sarangi, and bansuri</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-500 rounded-full p-2 mr-4 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p>Cultural dances like Lakhe, Maruni, and Dhime</p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {title: "Traditional Dance", img: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"},
              {title: "Pashupatinath Temple", img: "https://images.unsplash.com/photo-1604382354936-9c362f8c4c71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"},
              {title: "Festival Celebration", img: "https://images.unsplash.com/photo-1622968449617-4d5b3d9e8c0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"}
            ].map((item, index) => (
              <div 
                key={index}
                className="h-64 rounded-3xl overflow-hidden relative group"
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/40 flex items-end p-6 transition-all duration-500 group-hover:opacity-0">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full font-medium">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Nature Section */}
        <section id="nature" className="py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nepal's Breathtaking Nature</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-cyan-500 mx-auto rounded-full"></div>
            <p className="mt-6 max-w-3xl mx-auto text-gray-300">
              Nepal is blessed with some of the most spectacular natural landscapes in the world. From towering snow-capped peaks to lush green valleys and subtropical plains.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Mountains */}
            <div className="lg:col-span-2 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-cyan-500/30 relative overflow-hidden">
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full opacity-20 blur-3xl"></div>
              <h3 className="text-2xl font-bold mb-6 text-cyan-300 relative z-10">The Himalayan Mountains</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                {[
                  {name: "Mount Everest", height: "8,848.86m", fact: "World's highest peak"},
                  {name: "Kanchenjunga", height: "8,586m", fact: "Third highest peak"},
                  {name: "Lhotse", height: "8,516m", fact: "Fourth highest peak"},
                  {name: "Makalu", height: "8,485m", fact: "Pyramid-shaped mountain"},
                  {name: "Cho Oyu", height: "8,188m", fact: "Easier 8,000er to climb"},
                  {name: "Dhaulagiri I", height: "8,167m", fact: "Technically difficult"},
                  {name: "Manaslu", height: "8,163m", fact: "Popular circuit trekking"},
                  {name: "Annapurna I", height: "8,091m", fact: "High fatality rate"}
                ].map((mountain, index) => (
                  <div key={index} className="bg-gray-700 bg-opacity-50 p-4 rounded-xl backdrop-blur-sm border border-gray-600">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-lg">{mountain.name}</h4>
                      <span className="bg-cyan-600 text-xs px-2 py-1 rounded-full">{mountain.height}</span>
                    </div>
                    <p className="text-sm mt-2 text-gray-300">{mountain.fact}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Valleys */}
            <div className="bg-gradient-to-br from-emerald-900 to-green-900 rounded-3xl p-8 border border-emerald-500/30 relative overflow-hidden">
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full opacity-20 blur-3xl"></div>
              <h3 className="text-2xl font-bold mb-6 text-emerald-300 relative z-10">Valleys & Hills</h3>
              <div className="space-y-6 relative z-10">
                {[
                  {name: "Kathmandu Valley", desc: "Cultural hub with temples and palaces"},
                  {name: "Pokhara Valley", desc: "Famous for lakes and Annapurna views"},
                  {name: "Dang Valley", desc: "Agricultural heartland of Tharu community"},
                  {name: "Manang & Mustang", desc: "High-altitude Tibetan-influenced culture"},
                  {name: "Bandipur Hill Station", desc: "Preserved Newari town with views"}
                ].map((valley, index) => (
                  <div key={index} className="bg-black bg-opacity-30 p-4 rounded-xl backdrop-blur-sm border border-emerald-500/20">
                    <h4 className="font-bold text-emerald-300">{valley.name}</h4>
                    <p className="text-sm mt-2">{valley.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Terai and Wildlife */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-yellow-900 to-amber-900 rounded-3xl p-8 border border-yellow-500/30 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full opacity-20 blur-3xl"></div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-300 relative z-10">Terai Plains & Subtropical Forests</h3>
              <p className="mb-6 relative z-10">Fertile plains supporting agriculture and diverse wildlife in national parks:</p>
              
              <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="bg-black bg-opacity-30 p-4 rounded-xl backdrop-blur-sm border border-yellow-500/20">
                  <h4 className="font-bold text-yellow-300 mb-2">Chitwan National Park</h4>
                  <p className="text-sm">UNESCO site with rhinos, tigers, and elephants</p>
                </div>
                <div className="bg-black bg-opacity-30 p-4 rounded-xl backdrop-blur-sm border border-yellow-500/20">
                  <h4 className="font-bold text-yellow-300 mb-2">Bardia National Park</h4>
                  <p className="text-sm">Prime destination for spotting wild tigers</p>
                </div>
                <div className="bg-black bg-opacity-30 p-4 rounded-xl backdrop-blur-sm border border-yellow-500/20">
                  <h4 className="font-bold text-yellow-300 mb-2">Shuklaphanta</h4>
                  <p className="text-sm">Known for bird migrations and swamp deer</p>
                </div>
                <div className="bg-black bg-opacity-30 p-4 rounded-xl backdrop-blur-sm border border-yellow-500/20">
                  <h4 className="font-bold text-yellow-300 mb-2">Koshi Tappu</h4>
                  <p className="text-sm">Ramsar Wetland Site important for conservation</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-3xl p-8 border border-blue-500/30 relative overflow-hidden">
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full opacity-20 blur-3xl"></div>
              <h3 className="text-2xl font-bold mb-4 text-blue-300 relative z-10">Rivers & Lakes</h3>
              <p className="mb-6 relative z-10">Nepal's landscape is shaped by rivers flowing from the Himalayas:</p>
              
              <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="bg-black bg-opacity-30 p-4 rounded-xl backdrop-blur-sm border border-blue-500/20">
                  <h4 className="font-bold text-blue-300 mb-2">Koshi River</h4>
                  <p className="text-sm">Largest river system in Nepal</p>
                </div>
                <div className="bg-black bg-opacity-30 p-4 rounded-xl backdrop-blur-sm border border-blue-500/20">
                  <h4 className="font-bold text-blue-300 mb-2">Gandaki River</h4>
                  <p className="text-sm">Carves world's deepest gorge</p>
                </div>
                <div className="bg-black bg-opacity-30 p-4 rounded-xl backdrop-blur-sm border border-blue-500/20">
                  <h4 className="font-bold text-blue-300 mb-2">Phewa Lake</h4>
                  <p className="text-sm">Pokhara's famous lake with mountain reflections</p>
                </div>
                <div className="bg-black bg-opacity-30 p-4 rounded-xl backdrop-blur-sm border border-blue-500/20">
                  <h4 className="font-bold text-blue-300 mb-2">Rara Lake</h4>
                  <p className="text-sm">Largest lake with pristine beauty</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 rounded-3xl overflow-hidden relative h-96"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1532664189809-02133fee698d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/30 flex flex-col items-center justify-center p-8 text-center">
              <h3 className="text-3xl font-bold mb-4">Wildlife Sanctuary</h3>
              <p className="text-xl max-w-2xl mb-8">Home to Bengal tigers, one-horned rhinos, and over 900 species of birds</p>
              <Link to="/nationalparks">
              <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full font-medium text-lg">
                Explore National Parks
              </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Food Section */}
        <section id="food" className="py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nepali Culinary Delights</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
            <p className="mt-6 max-w-3xl mx-auto text-gray-300">
              Food in Nepal is a delicious mix of flavors and cultures—from traditional dal bhat to spicy pickles and freshly steamed momos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-amber-900 to-orange-900 rounded-3xl p-8 border border-amber-500/30 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full opacity-20 blur-3xl"></div>
              <h3 className="text-2xl font-bold mb-6 text-amber-300 relative z-10">Staple Foods & Regional Variations</h3>
              
              <div className="mb-6 relative z-10">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-3 text-amber-200">Dal Bhat (Lentils and Rice)</h4>
                    <p className="mb-4">The foundation of the Nepali diet, eaten daily by all communities.</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="bg-amber-800 px-3 py-1 rounded-full text-sm">Lentil soup</span>
                      <span className="bg-amber-800 px-3 py-1 rounded-full text-sm">Steamed rice</span>
                      <span className="bg-amber-800 px-3 py-1 rounded-full text-sm">Vegetable curry</span>
                      <span className="bg-amber-800 px-3 py-1 rounded-full text-sm">Pickles</span>
                    </div>
                  </div>
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-amber-500">
                    <div 
                      className="w-full h-full bg-cover bg-center"
                      style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80')"
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                <div className="bg-black bg-opacity-30 p-4 rounded-xl backdrop-blur-sm border border-amber-500/20">
                  <h4 className="font-bold text-amber-200 mb-2">Newari Cuisine</h4>
                  <ul className="text-sm space-y-1">
                    <li>Yomari: Sweet dumplings</li>
                    <li>Chatamari: Rice flour crepe</li>
                    <li>Samay Baji: Ceremonial platter</li>
                  </ul>
                </div>
                <div className="bg-black bg-opacity-30 p-4 rounded-xl backdrop-blur-sm border border-amber-500/20">
                  <h4 className="font-bold text-amber-200 mb-2">Himalayan Cuisine</h4>
                  <ul className="text-sm space-y-1">
                    <li>Thukpa: Noodle soup</li>
                    <li>Momos: Dumplings</li>
                    <li>Gundruk: Fermented greens</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-rose-900 to-pink-900 rounded-3xl p-8 border border-rose-500/30 relative overflow-hidden">
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full opacity-20 blur-3xl"></div>
              <h3 className="text-2xl font-bold mb-6 text-rose-300 relative z-10">Street Food & Beverages</h3>
              
              <div className="mb-6 relative z-10">
                <h4 className="font-bold text-lg mb-3 text-rose-200">Popular Street Snacks</h4>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-black bg-opacity-30 p-4 rounded-xl backdrop-blur-sm border border-rose-500/20">
                    <div className="text-rose-300 text-xl mb-2">🥟</div>
                    <h5 className="font-semibold">Momo</h5>
                    <p className="text-xs">Steamed or fried dumplings</p>
                    <div className="mt-2 w-full h-24 rounded-lg overflow-hidden"
                      style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1626082927389-6cd097cee6a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    ></div>
                  </div>
                  <div className="bg-black bg-opacity-30 p-4 rounded-xl backdrop-blur-sm border border-rose-500/20">
                    <div className="text-rose-300 text-xl mb-2">🍘</div>
                    <h5 className="font-semibold">Pani Puri</h5>
                    <p className="text-xs">Crispy hollow balls</p>
                    <div className="mt-2 w-full h-24 rounded-lg overflow-hidden"
                      style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div className="relative z-10">
                <h4 className="font-bold text-lg mb-3 text-rose-200">Traditional Beverages</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black bg-opacity-30 p-4 rounded-xl backdrop-blur-sm border border-rose-500/20">
                    <div className="text-rose-300 text-xl mb-2">☕</div>
                    <h5 className="font-semibold">Masala Chiya</h5>
                    <p className="text-xs">Spiced tea</p>
                  </div>
                  <div className="bg-black bg-opacity-30 p-4 rounded-xl backdrop-blur-sm border border-rose-500/20">
                    <div className="text-rose-300 text-xl mb-2">🥛</div>
                    <h5 className="font-semibold">Lassi</h5>
                    <p className="text-xs">Yogurt drink</p>
                  </div>
                  <div className="bg-black bg-opacity-30 p-4 rounded-xl backdrop-blur-sm border border-rose-500/20">
                    <div className="text-rose-300 text-xl mb-2">🍶</div>
                    <h5 className="font-semibold">Raksi</h5>
                    <p className="text-xs">Distilled liquor</p>
                  </div>
                  <div className="bg-black bg-opacity-30 p-4 rounded-xl backdrop-blur-sm border border-rose-500/20">
                    <div className="text-rose-300 text-xl mb-2">🍺</div>
                    <h5 className="font-semibold">Tongba</h5>
                    <p className="text-xs">Fermented millet beer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Adventure Section */}
        <section id="adventure" className="py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Adventure Activities</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"></div>
            <p className="mt-6 max-w-3xl mx-auto text-gray-300">
              Nepal is often called the adventure capital of the world, offering a vast playground for thrill-seekers and nature lovers alike.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {icon: "🥾", title: "Trekking & Mountaineering", desc: "Everest Base Camp, Annapurna Circuit, and world-class peaks", img: "/images/trekking.jpg"},
              {icon: "🚣", title: "White-Water Rafting", desc: "Trishuli, Bhote Koshi, Karnali rivers with rapids up to Grade V", img: "/images/rafting.jpg"},
              {icon: "🪂", title: "Paragliding", desc: "Fly over Pokhara with Annapurna views", img: "/images/paragliding.jpg"},
              {icon: "🐘", title: "Jungle Safaris", desc: "Chitwan and Bardia National Parks for wildlife spotting", img: "/images/jungle.jpg"},
              {icon: "🧗", title: "Bungee Jumping", desc: "Bhote Koshi Gorge - one of the highest in the world", img: "/images/bunji.jpg"},
              {icon: "🚵", title: "Mountain Biking", desc: "Scenic routes through Kathmandu Valley and Mustang", img: "/images/biking.jpg"}
            ].map((activity, index) => (
              <div key={index} className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-6 border border-red-500/30 hover:border-red-500/70 transition-all duration-300 group overflow-hidden">
                <div 
                  className="h-48 rounded-2xl mb-4 overflow-hidden relative"
                  style={{
                    backgroundImage: `url(${activity.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <div className="text-4xl">{activity.icon}</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-red-400 group-hover:text-red-300 transition-colors">{activity.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{activity.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="px-10 py-5 bg-gradient-to-r from-red-600 to-orange-500 rounded-full text-xl font-bold hover:scale-105 transition-transform duration-300 shadow-lg shadow-red-500/30 animate-pulse">
              Plan Your Adventure Today
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ExploreNepal;