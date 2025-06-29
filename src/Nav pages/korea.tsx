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

type CulturePoint = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

type FoodItem = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

type AdventurePlace = {
  id: number;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  imageUrl: string;
};

const App: React.FC = () => {
  const [, setDestinations] = useState<Destination[]>([]);
  const [, setFilteredDestinations] = useState<Destination[]>([]);
  const [] = useState<string>('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const [activeSection, setActiveSection] = useState('culture');
  

  // Cultural points data
  const culturePoints: CulturePoint[] = [
    {
      id: 1,
      title: "Confucian Values and Respect for Elders",
      description: "South Korean society is heavily influenced by Confucianism, which emphasizes respect, loyalty, and hierarchy. Elders are deeply respected—people bow to greet them, use honorific language, and often give up seats for them in public places.",
      icon: "👴"
    },
    {
      id: 2,
      title: "Traditional Clothing – Hanbok",
      description: "The Hanbok is South Korea's national dress, worn on important holidays. Known for its bright colors, flowing lines, and symbolic patterns. Today, modernized hanboks are also worn during weddings and photoshoots.",
      icon: "👘"
    },
    {
      id: 3,
      title: "Festivals and Traditional Celebrations",
      description: "South Korea's major festivals reflect seasonal changes, family bonding, and ancestral rituals. Key festivals include Seollal (Lunar New Year), Chuseok (Harvest Festival), and Buddha's Birthday.",
      icon: "🎎"
    },
    {
      id: 4,
      title: "Religion and Spiritual Practices",
      description: "South Korea has a mix of Buddhism, Christianity, and traditional Shamanism. Buddhist temples are found all over the country and are often visited for meditation, tea ceremonies, or temple stays.",
      icon: "🙏"
    },
    {
      id: 5,
      title: "Traditional Arts and Craftsmanship",
      description: "Korean pottery (celadon), calligraphy, paper art (hanji), and Korean painting (minhwa) are all important traditional crafts. UNESCO has recognized several Korean cultural practices like pansori and kimjang.",
      icon: "🎨"
    },
    {
      id: 6,
      title: "Language and Script – Hangul",
      description: "The Korean language uses the script Hangul, created by King Sejong in the 15th century. Hangul is known for its scientific design and simplicity, making it one of the easiest scripts to learn.",
      icon: "📜"
    },
    {
      id: 7,
      title: "Modern Pop Culture K-pop and K-drama",
      description: "K-pop is a global sensation with bands like BTS and Blackpink. Korean dramas and movies are hugely popular worldwide, showing Korean creativity at its best.",
      icon: "🎤"
    },
    {
      id: 8,
      title: "Dining Culture and Etiquette",
      description: "Meals are social. Koreans sit together, share dishes, and often eat from the same bowls. There's a proper way to eat: elders eat first, and chopsticks and spoons are placed neatly.",
      icon: "🍽️"
    },
    {
      id: 9,
      title: "Hanok – Traditional Houses",
      description: "Hanok are traditional Korean houses made with natural materials like wood, clay, and stone. They are built around courtyards and use a heating system called ondol, where heat travels under the floor.",
      icon: "🏯"
    },
    {
      id: 10,
      title: "Cultural Preservation and Innovation",
      description: "Despite modernization, South Korea works hard to protect its cultural heritage. Schools teach cultural values, and many young Koreans still participate in tea ceremonies, calligraphy, and martial arts like Taekwondo.",
      icon: "🛡️"
    }
  ];

  // Food items data
  const foodItems: FoodItem[] = [
    {
      id: 1,
      title: "Kimchi – The Heart of Every Meal",
      description: "Kimchi is Korea's signature food—spicy, fermented vegetables seasoned with chili, garlic, and fish sauce. It's served at nearly every meal and is so culturally important that its preparation process (Kimjang) is recognized by UNESCO.",
      imageUrl: "https://images.unsplash.com/photo-1620293534390-7c1d9e3f1b9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Korean BBQ (Samgyeopsal)",
      description: "A must-try experience in Korea. Samgyeopsal is grilled pork belly cooked right at your table. Diners wrap pieces in lettuce with garlic, chili paste, and sometimes rice.",
      imageUrl: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Bibimbap – The Balanced Bowl",
      description: "A classic mixed rice dish with vegetables, gochujang (chili paste), egg, and sometimes meat or tofu. It's colorful, healthy, and served in both regular bowls and hot stone bowls.",
      imageUrl: "https://images.unsplash.com/photo-1597047084897-51e81819a499?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Street Food Culture",
      description: "Korea's street food is vibrant and affordable. Favorites include Tteokbokki (chewy rice cakes in spicy sauce), Hotteok (warm, filled pancakes), Odeng (fish cake skewers), and Kimbap (seaweed rice rolls).",
      imageUrl: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Soups and Stews (Guk & Jjigae)",
      description: "Kimchi jjigae (kimchi stew) and doenjang jjigae (soybean paste stew) are everyday favorites. Samgyetang (ginseng chicken soup) is eaten during summer to restore energy.",
      imageUrl: "https://images.unsplash.com/photo-1620293534390-7c1d9e3f1b9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Temple Food – Simple and Spiritual",
      description: "At Buddhist temples, food is vegan and clean, avoiding garlic, onions, and animal products. Ingredients are seasonal and locally sourced, focusing on natural flavor and harmony with nature.",
      imageUrl: "https://images.unsplash.com/photo-1633617477281-c0c65a0d8b96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Adventure places data
  const adventurePlaces: AdventurePlace[] = [
    {
      id: 1,
      title: "Gyeongbokgung Palace",
      tagline: "Step into South Korea's royal past",
      description: "Built in 1395, this palace once served as the heart of the Joseon Dynasty. As you walk through its beautifully preserved courtyards, majestic gates, and wooden halls, you'll feel like you've been transported to another era.",
      highlights: [
        "Built in 1395, it's the most iconic royal palace from the Joseon Dynasty",
        "Features include traditional wooden halls, majestic gates, and quiet courtyards",
        "Don't miss the Royal Guard Changing Ceremony, held multiple times daily",
        "Surrounded by modern Seoul, it reflects Korea's blend of past and present"
      ],
      imageUrl: "https://images.unsplash.com/photo-1560843430-8a4d5c3b9b0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 2,
      title: "Jeju Island",
      tagline: "Nature's Gift",
      description: "Jeju Island is a natural wonder that feels like a world of its own. Known for its peaceful atmosphere, clean air, and beautiful landscapes, it's a favorite escape for nature lovers and peace seekers.",
      highlights: [
        "Known for peaceful nature, volcanic craters, and black-sand beaches",
        "Home to Hallasan Mountain, Korea's tallest peak",
        "Visit Seongsan Ilchulbong (Sunrise Peak) for breathtaking views",
        "Explore lava tubes, waterfalls, and Dolhareubang stone statues"
      ],
      imageUrl: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 3,
      title: "Busan",
      tagline: "Beach and Urban Charm",
      description: "Busan is a vibrant blend of beach life, city energy, and rich culture. With Haeundae Beach's golden sands and summer festivals, Jagalchi Fish Market's fresh catches, and Gamcheon Culture Village's colorful art-covered alleyways.",
      highlights: [
        "South Korea's second-largest city",
        "Highlights include Haeundae Beach, Jagalchi Fish Market, and Gamcheon Culture Village",
        "Visit Haedong Yonggungsa Temple, set on a cliffside by the sea",
        "Experience street food, coastal walks, and local festivals"
      ],
      imageUrl: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 4,
      title: "N Seoul Tower",
      tagline: "Panoramic City Views",
      description: "Rising high above the city on Namsan Mountain, N Seoul Tower offers one of the best panoramic views of Seoul. You can hike or take a scenic cable car ride to the top.",
      highlights: [
        "Located atop Namsan Mountain with views over the entire city",
        "Access via cable car or hiking trails",
        "Known for its love locks, romantic atmosphere, and night views",
        "Ideal for couples, friends, and families wanting a top-down view of Seoul"
      ],
      imageUrl: "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 5,
      title: "Gangwon-do",
      tagline: "Four-Season Adventure",
      description: "Gangwon-do is a year-round adventure destination filled with mountains, beaches, and outdoor fun. In winter, ski or snowboard at top resorts. In warmer seasons, hike through Seoraksan National Park or relax in Sokcho by the sea.",
      highlights: [
        "Offers four-season adventure: skiing in winter, hiking in summer",
        "Top ski resorts: Yongpyong, Alpensia, High1",
        "Nature highlights: Seoraksan National Park, beaches in Sokcho",
        "Known for fall foliage, fresh air, and peaceful getaways"
      ],
      imageUrl: "https://images.unsplash.com/photo-1605283176568-9b41fde3672e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 6,
      title: "Andong",
      tagline: "Cultural Soul of South Korea",
      description: "Andong is known as the cultural soul of South Korea, where tradition and heritage are carefully preserved. The city's most iconic site, Hahoe Folk Village, is a UNESCO World Heritage location.",
      highlights: [
        "Cultural heart of Korea with deep-rooted traditions",
        "Visit Hahoe Folk Village (UNESCO site) and watch mask dance performances",
        "Try local food like jjimdak and traditional soju",
        "Explore Dosan Seowon, a historic Confucian academy"
      ],
      imageUrl: "https://images.unsplash.com/photo-1628588542185-235c0c0f0d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 7,
      title: "Gwangju",
      tagline: "History and Vibrant Arts",
      description: "Gwangju is known for its rich history and strong cultural heritage. The city played a significant role in South Korea's democracy movement, especially during the 1980 Gwangju Uprising.",
      highlights: [
        "Known for the 1980 Democracy Movement and vibrant arts scene",
        "Try local dishes like spicy kimchi and Korean fried chicken",
        "Visit art museums, festivals, and open parks",
        "Hosts the international Gwangju Biennale"
      ],
      imageUrl: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 8,
      title: "DMZ (Demilitarized Zone)",
      tagline: "History and Reflection",
      description: "The DMZ is unlike any other destination—it's a place of tension, reflection, and hope. As the border zone between North and South Korea, it offers a powerful look into the peninsula's complex past and present.",
      highlights: [
        "A border zone between North and South Korea—a place of history and reflection",
        "Visit observation posts, war tunnels, and Panmunjom Truce Village",
        "Learn about Korea's division and ongoing hopes for peace",
        "Guided tours provide deep historical context"
      ],
      imageUrl: "https://images.unsplash.com/photo-1621423055731-8a5d7b9b3b3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 9,
      title: "Nami Island",
      tagline: "Storybook Escape",
      description: "Just a short drive from Seoul, Nami Island is a quiet, storybook-like escape. Known for its beautiful tree-lined paths, the island is especially stunning in spring and autumn.",
      highlights: [
        "Famous for its tree-lined paths, especially beautiful in spring and autumn",
        "Popular for romantic getaways, nature walks, and bike rides",
        "Once a filming site for Korean dramas",
        "Accessible from Seoul via ferry or zipline"
      ],
      imageUrl: "https://images.unsplash.com/photo-1597212619409-6fd9b04d2a6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 10,
      title: "Traditional Spas (Jjimjilbang)",
      tagline: "Korean Bathhouse Culture",
      description: "A visit to South Korea isn't complete without spending time in a Jjimjilbang, the country's unique and beloved bathhouse culture. These traditional spas are open 24/7 and offer much more than hot baths.",
      highlights: [
        "Open 24/7, offering hot baths, dry saunas, steam rooms, and more",
        "Popular spas include Dragon Hill Spa (Seoul) and Spa Land (Busan)",
        "Locals come to relax, nap, and socialize",
        "Includes snack bars, entertainment zones, and health treatments"
      ],
      imageUrl: "https://images.unsplash.com/photo-1608889476518-738c9b1dcb40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 11,
      title: "Bukchon Hanok Village",
      tagline: "Traditional Korean Houses",
      description: "A peaceful pocket of tradition nestled in the center of busy Seoul. Here, you'll walk among hundreds of well-preserved hanok homes with curved rooftops, wooden frames, and stone paths.",
      highlights: [
        "A preserved traditional neighborhood in the heart of Seoul",
        "Features hundreds of hanok (Korean houses) with curved roofs and stone lanes",
        "Home to tea houses, calligraphy workshops, and Hanbok rentals",
        "Still inhabited by real families—living heritage"
      ],
      imageUrl: "https://images.unsplash.com/photo-1628588542180-235c0c0f0d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    }
  ];

  useEffect(() => {
    // Fetch destination data
    const destinationsData: Destination[] = [
      {
        id: 1,
        title: 'Seoul',
        tagline: 'Best for nightlife',
        description: 'Home to half of South Korea\'s population, Seoul is the electric capital where revelers can seek out low-key watering holes, high-end cocktail lounges, and always-fun noraebang (karaoke bars) at any hour.',
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
        description: 'Blessed with a subtropical climate, Jeju-do is Korea\'s most popular vacation destination. Enjoy glittering beaches with white or black sand, crystal clear waters, and dramatic volcanic landscapes.',
        planningTip: 'Adventure tip: Try rafting in a traditional tewoo boat at the Soesokkak Estuary.',
        imageUrl: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        category: 'nature'
      },
      {
        id: 5,
        title: 'Gangwon-do',
        tagline: 'Best for winter sports',
        description: 'Home to South Korea\'s best ski resorts and host of the 2018 Winter Olympics, Gangwon-do is a winter paradise. Ski or snowboard at top-rated resorts like YongPyong or High1.',
        planningTip: 'Festival tip: Visit during the Hwacheon Sancheoneo Ice Festival or Taebaeksan Snow Festival.',
        imageUrl: 'https://images.unsplash.com/photo-1605283176568-9b41fde3672e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        category: 'adventure'
      },
      {
        id: 6,
        title: 'Andong',
        tagline: 'Best for folk traditions',
        description: 'Known as the "Capital of Korean Spirit," Andong is Korea\'s Confucian culture capital. Visit the UNESCO-listed Hahoe Folk Village to experience Joseon-era life.',
        planningTip: 'Cultural tip: Book an overnight stay in a traditional choga guesthouse at Hahoe Village.',
        imageUrl: 'https://images.unsplash.com/photo-1628588542185-235c0c0f0d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        category: 'culture'
      },
      {
        id: 7,
        title: 'Gwangju',
        tagline: 'Best for contemporary history',
        description: 'Regarded as the birthplace of Korean democracy, Gwangju was the site of the pivotal May 18 Democratic Uprising of 1980.',
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

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden relative">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}></div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white/95 backdrop-blur-lg z-50 flex flex-col items-center justify-center">
          <button 
            className="absolute top-6 right-6 text-cyan-600"
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
                className="text-cyan-600 hover:text-cyan-800 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold hover:opacity-90 transition-opacity shadow-lg">
              Book Now
            </button>
          </div>
        </div>
      )}
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center pt-8 md:pt-16">
          <div className="relative inline-block">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 animate-gradient">
              FUTURE KOREA
            </h1>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></div>
          </div>
          
          <p 
            ref={subtitleRef}
            className="mt-6 text-lg md:text-xl text-gray-600 opacity-0 max-w-2xl mx-auto transform translate-y-4 transition-all duration-700"
          >
            Discover the fusion of ancient tradition and cutting-edge innovation across South Korea's most captivating destinations
          </p>
          
          <div className="mt-12 flex justify-center">
            <button className="relative px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-bold text-lg text-white transition-all hover:opacity-90 shadow-lg hover:shadow-xl hover:shadow-cyan-500/30">
              START YOUR JOURNEY
              <span className="absolute inset-0 rounded-lg bg-white opacity-0 hover:opacity-10 transition-opacity"></span>
            </button>
          </div>
        </header>
        
        <main className="mt-16">
          {/* Section Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['culture', 'food', 'nature', 'adventure'].map(section => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 ${
                  activeSection === section
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-md shadow-cyan-500/20'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
          
          {/* Culture Section */}
          {activeSection === 'culture' && (
            <section className="py-12">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">South Korean Culture: A Blend of Tradition and Modernity</h2>
                <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6"></div>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Rooted in thousands of years of history, Korean culture blends deep traditional values with a highly modern lifestyle.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {culturePoints.map((point) => (
                  <div 
                    key={point.id}
                    className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-cyan-300"
                  >
                    <div className="p-6">
                      <div className="text-4xl mb-4 text-cyan-600">{point.icon}</div>
                      <h3 className="text-xl font-bold mb-3 text-gray-800">
                        {point.title}
                      </h3>
                      <p className="text-gray-600">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {/* Food Section */}
          {activeSection === 'food' && (
            <section className="py-12">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">South Korean Food: Flavorful, Communal, and Full of Culture</h2>
                <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6"></div>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Korean food is more than just something to eat—it's a deeply cultural experience.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {foodItems.map((food) => (
                  <div 
                    key={food.id}
                    className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={food.imageUrl} 
                        alt={food.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                        {food.title}
                      </h3>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600">{food.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {/* Nature Section */}
          {activeSection === 'nature' && (
            <section className="py-12">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Nature of South Korea: Mountains, Islands & Harmony with the Earth</h2>
                <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6"></div>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  South Korea may be famous for its cities and culture, but what truly takes your breath away is its diverse and peaceful natural landscapes.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    Mountain Ranges and National Parks
                  </h3>
                  <p className="text-gray-600 mb-4">
                    About 70% of Korea is mountainous, making it a paradise for hikers, nature photographers, and anyone seeking peaceful views.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Seoraksan National Park in Gangwon Province is the most iconic</li>
                    <li>Bukhansan, just outside Seoul, is perfect for day hikes</li>
                    <li>Jirisan, Songnisan, and Hallasan offer unique plants and wildlife</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    Jeju Island – Nature's Gift
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Jeju-do is a volcanic island off the southern coast, known for its lava tubes, waterfalls, beaches, and Mount Hallasan—the tallest mountain in South Korea.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>UNESCO-listed sites like Manjanggul Cave</li>
                    <li>Seongsan Ilchulbong (Sunrise Peak)</li>
                    <li>Gotjawal forests and Olle Trails</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    Beautiful Beaches and Coastal Scenery
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Busan is Korea's beach city, with Haeundae and Gwangalli Beach offering sun, sand, and sea—with the city skyline in view.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Eastern coast has clear blue water and calm beaches</li>
                    <li>Southern coast has quiet bays and seafood villages</li>
                    <li>Perfect for relaxing and trying fresh catch</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    Wildlife and Eco-Parks
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Despite its size, Korea is home to rare species, birds, and plants. The Demilitarized Zone (DMZ) has become a haven for wildlife due to its untouched nature.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Wetlands like Suncheon Bay for birdwatching</li>
                    <li>Upo Wetlands for biking, walking, and photography</li>
                    <li>Forest bathing in Jangtaesan or Bijarim Forest</li>
                  </ul>
                </div>
              </div>
            </section>
          )}
          
          {/* Adventure Places Section */}
          {activeSection === 'adventure' && (
            <section className="py-12">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Adventure Places in South Korea: Thrill, Nature, and Unforgettable Experiences</h2>
                <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6"></div>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  South Korea is full of exciting places for every kind of traveler.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {adventurePlaces.map((place) => (
                  <div 
                    key={place.id}
                    className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                      <div className="absolute top-4 right-4 z-20">
                        <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-full text-xs">
                          {place.tagline}
                        </span>
                      </div>
                      <img 
                        src={place.imageUrl} 
                        alt={place.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-800">
                        {place.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{place.description}</p>
                      
                      <div className="mt-4 p-4 bg-cyan-50 rounded-lg border-l-4 border-cyan-500">
                        <h4 className="text-sm font-bold text-cyan-700 mb-2">KEY HIGHLIGHTS</h4>
                        <ul className="space-y-1">
                          {place.highlights.map((highlight, idx) => (
                            <li key={idx} className="text-sm text-gray-700 flex items-start">
                              <span className="mr-2 text-cyan-500">•</span> {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>
         </div>
      
      {/* Floating particles */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-cyan-500 opacity-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Custom styles */}
      <style >{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.1;
          }
          50% {
            transform: translateY(-15px) translateX(10px) rotate(180deg);
            opacity: 0.2;
          }
          100% {
            transform: translateY(0) translateX(0) rotate(360deg);
            opacity: 0.1;
          }
        }
      `}</style>
    </div>
  );
};

export default App;