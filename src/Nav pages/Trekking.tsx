// src/components/Trekking.tsx
import React, { useState } from 'react';

type Difficulty = 'Easy' | 'Moderate' | 'Challenging' | 'Strenuous';

type ItineraryItem = {
  day: number;
  title: string;
  description: string;
  altitude: string;
  trekkingTime: string;
};

type TrekPackage = {
  id: number;
  name: string;
  duration: string;
  difficulty: Difficulty;
  price: string;
  highlight: string;
  description: string;
  bestSeason: string;
  maxAltitude: string;
  image: string;
  itinerary: ItineraryItem[];
  colorClass: string;
};

const Trekking: React.FC = () => {
  const [activeTrek, setActiveTrek] = useState<number>(1);
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  const trekPackages: TrekPackage[] = [
    {
      id: 1,
      name: "Everest Base Camp Trek",
      duration: "14 Days",
      difficulty: "Challenging",
      price: "$1,499",
      highlight: "Walk in the footsteps of legends",
      description: "Experience the world's most iconic trek through the heart of the Khumbu region, culminating at the base of the world's highest peak.",
      bestSeason: "Mar-May, Sep-Nov",
      maxAltitude: "5,545m (Kala Patthar)",
      image: "everest",
      colorClass: "from-blue-600 to-cyan-500",
      itinerary: [
        { day: 1, title: "Arrival in Kathmandu", description: "Arrival at Tribhuvan International Airport, transfer to hotel, and trek briefing", altitude: "1,400m", trekkingTime: "N/A" },
        { day: 2, title: "Fly to Lukla, trek to Phakding", description: "Scenic mountain flight to Lukla (2,840m), trek to Phakding through Sherpa villages", altitude: "2,652m", trekkingTime: "3-4 hours" },
        { day: 3, title: "Namche Bazaar", description: "Trek to Namche Bazaar, the gateway to Everest, with first views of Everest", altitude: "3,440m", trekkingTime: "5-6 hours" },
        { day: 4, title: "Acclimatization Day", description: "Hike to Everest View Hotel for panoramic views, explore Namche market", altitude: "3,440m", trekkingTime: "3-4 hours" },
        { day: 5, title: "Tengboche Monastery", description: "Trek to Tengboche, visit the famous monastery with views of Ama Dablam", altitude: "3,860m", trekkingTime: "5-6 hours" },
        { day: 6, title: "Dingboche", description: "Continue through rhododendron forests to Dingboche village", altitude: "4,410m", trekkingTime: "5-6 hours" },
        { day: 7, title: "Acclimatization Hike", description: "Hike to Nagarjun Hill for panoramic mountain views", altitude: "5,100m", trekkingTime: "4-5 hours" },
        { day: 8, title: "Lobuche", description: "Trek to Lobuche with views of Khumbu Glacier", altitude: "4,940m", trekkingTime: "5-6 hours" },
        { day: 9, title: "Gorak Shep to Everest Base Camp", description: "Trek to Gorak Shep, then to Everest Base Camp", altitude: "5,364m", trekkingTime: "7-8 hours" },
        { day: 10, title: "Kala Patthar and descent", description: "Sunrise hike to Kala Patthar (5,545m), then descend to Pheriche", altitude: "5,545m", trekkingTime: "7-8 hours" },
      ]
    },
    {
      id: 2,
      name: "Annapurna Base Camp Trek",
      duration: "12 Days",
      difficulty: "Moderate",
      price: "$1,199",
      highlight: "360° mountain sanctuary",
      description: "Journey through diverse landscapes from rice terraces to alpine meadows, culminating in the spectacular Annapurna Sanctuary.",
      bestSeason: "Mar-May, Sep-Nov",
      maxAltitude: "4,130m (ABC)",
      image: "annapurna",
      colorClass: "from-emerald-500 to-teal-600",
      itinerary: [
        { day: 1, title: "Arrival in Kathmandu", description: "Arrival at Tribhuvan International Airport, transfer to hotel, and trek briefing", altitude: "1,400m", trekkingTime: "N/A" },
        { day: 2, title: "Fly to Pokhara", description: "Scenic flight to Pokhara, transfer to hotel with free time to explore lakeside", altitude: "823m", trekkingTime: "N/A" },
        { day: 3, title: "Drive to Nayapul, trek to Tikhedhunga", description: "Drive to Nayapul, trek through villages and rice terraces to Tikhedhunga", altitude: "1,570m", trekkingTime: "4-5 hours" },
        { day: 4, title: "Ghorepani via Ulleri", description: "Steep climb to Ulleri village, continue through rhododendron forests to Ghorepani", altitude: "2,860m", trekkingTime: "6-7 hours" },
        { day: 5, title: "Poon Hill Sunrise, trek to Tadapani", description: "Early hike to Poon Hill (3,210m) for sunrise, then trek to Tadapani", altitude: "2,630m", trekkingTime: "6-7 hours" },
        { day: 6, title: "Chhomrong", description: "Descend through forests, cross river, climb to Chhomrong village", altitude: "2,170m", trekkingTime: "5-6 hours" },
        { day: 7, title: "Bamboo to Dovan", description: "Steep descent to Bamboo, then gradual climb through forests to Dovan", altitude: "2,600m", trekkingTime: "5-6 hours" },
        { day: 8, title: "Machhapuchhre Base Camp", description: "Trek through Himalayan bamboo forest to Machhapuchhre Base Camp", altitude: "3,700m", trekkingTime: "5-6 hours" },
        { day: 9, title: "Annapurna Base Camp", description: "Short trek to Annapurna Base Camp surrounded by towering peaks", altitude: "4,130m", trekkingTime: "2-3 hours" },
        { day: 10, title: "Return to Bamboo", description: "Descend through Modi Khola valley back to Bamboo", altitude: "2,310m", trekkingTime: "6-7 hours" },
      ]
    },
    {
      id: 3,
      name: "Langtang Valley Trek",
      duration: "10 Days",
      difficulty: "Moderate",
      price: "$899",
      highlight: "Himalayan hidden gem",
      description: "Explore the beautiful Langtang valley just north of Kathmandu, known as the 'valley of glaciers' with rich Tamang culture.",
      bestSeason: "Mar-May, Sep-Nov",
      maxAltitude: "5,000m (Tserko Ri)",
      image: "langtang",
      colorClass: "from-amber-500 to-orange-600",
      itinerary: [
        { day: 1, title: "Arrival in Kathmandu", description: "Arrival at Tribhuvan International Airport, transfer to hotel, and trek briefing", altitude: "1,400m", trekkingTime: "N/A" },
        { day: 2, title: "Drive to Syabrubesi", description: "Scenic drive through hills and terraced fields to Syabrubesi", altitude: "1,550m", trekkingTime: "7-8 hours drive" },
        { day: 3, title: "Trek to Lama Hotel", description: "Trek along Langtang Khola through forests to Lama Hotel", altitude: "2,470m", trekkingTime: "5-6 hours" },
        { day: 4, title: "Langtang Village", description: "Continue trek to Langtang village with improving mountain views", altitude: "3,430m", trekkingTime: "5-6 hours" },
        { day: 5, title: "Kyanjin Gompa", description: "Short trek to Kyanjin Gompa with visit to ancient monastery", altitude: "3,870m", trekkingTime: "3-4 hours" },
        { day: 6, title: "Acclimatization Day", description: "Explore the area with optional hikes to Kyanjin Ri or Langshisha Kharka", altitude: "3,870m", trekkingTime: "4-5 hours" },
        { day: 7, title: "Tserko Ri Summit", description: "Early morning hike to Tserko Ri (5,000m) for panoramic mountain views", altitude: "5,000m", trekkingTime: "7-8 hours" },
        { day: 8, title: "Return to Lama Hotel", description: "Descend through rhododendron forests back to Lama Hotel", altitude: "2,470m", trekkingTime: "6-7 hours" },
        { day: 9, title: "Trek to Syabrubesi", description: "Final descent to Syabrubesi along the Langtang River", altitude: "1,550m", trekkingTime: "5-6 hours" },
        { day: 10, title: "Drive to Kathmandu", description: "Scenic drive back to Kathmandu with farewell dinner", altitude: "1,400m", trekkingTime: "7-8 hours drive" },
      ]
    },
    {
      id: 4,
      name: "Manaslu Circuit Trek",
      duration: "16 Days",
      difficulty: "Strenuous",
      price: "$1,799",
      highlight: "Forbidden kingdom adventure",
      description: "Traverse around the world's eighth highest mountain through remote trails, Tibetan-influenced villages, and over the challenging Larkya La pass.",
      bestSeason: "Mar-May, Sep-Nov",
      maxAltitude: "5,106m (Larkya La)",
      image: "manaslu",
      colorClass: "from-violet-600 to-purple-700",
      itinerary: [
        { day: 1, title: "Arrival in Kathmandu", description: "Arrival at Tribhuvan International Airport, transfer to hotel, and trek briefing", altitude: "1,400m", trekkingTime: "N/A" },
        { day: 2, title: "Drive to Soti Khola", description: "Scenic drive through the Nepalese countryside to Soti Khola", altitude: "710m", trekkingTime: "8-9 hours drive" },
        { day: 3, title: "Trek to Machha Khola", description: "Trek along the Budhi Gandaki river through subtropical forests", altitude: "930m", trekkingTime: "6-7 hours" },
        { day: 4, title: "Jagat", description: "Trek through terraced fields and Gurung villages to Jagat", altitude: "1,410m", trekkingTime: "6-7 hours" },
        { day: 5, title: "Deng", description: "Enter the Manaslu Conservation Area, trek to Deng village", altitude: "1,860m", trekkingTime: "6-7 hours" },
        { day: 6, title: "Namrung", description: "Trek through pine forests with improving mountain views to Namrung", altitude: "2,630m", trekkingTime: "6-7 hours" },
        { day: 7, title: "Lho Gaon", description: "Trek to Lho village with spectacular views of Manaslu", altitude: "3,180m", trekkingTime: "4-5 hours" },
        { day: 8, title: "Samagaon", description: "Trek to Samagaon, the main village in the region", altitude: "3,530m", trekkingTime: "3-4 hours" },
        { day: 9, title: "Acclimatization Day", description: "Hike to Manaslu Base Camp or Birendra Tal (glacial lake)", altitude: "4,400m", trekkingTime: "5-6 hours" },
        { day: 10, title: "Samdo", description: "Trek to Tibetan border village of Samdo", altitude: "3,860m", trekkingTime: "4-5 hours" },
        { day: 11, title: "Dharamsala", description: "Trek to Dharamsala, the last stop before Larkya La pass", altitude: "4,460m", trekkingTime: "4-5 hours" },
        { day: 12, title: "Larkya La Pass to Bimthang", description: "Cross Larkya La pass (5,106m), descend to Bimthang", altitude: "5,106m / 3,720m", trekkingTime: "8-9 hours" },
        { day: 13, title: "Trek to Tilije", description: "Descend through rhododendron forests to Tilije village", altitude: "2,300m", trekkingTime: "5-6 hours" },
        { day: 14, title: "Dharapani to Besishahar", description: "Trek to Dharapani, drive to Besishahar", altitude: "760m", trekkingTime: "3-4 hours trek + 3hr drive" },
        { day: 15, title: "Drive to Kathmandu", description: "Scenic drive back to Kathmandu through the Himalayan foothills", altitude: "1,400m", trekkingTime: "6-7 hours drive" },
        { day: 16, title: "Departure", description: "Transfer to airport for departure", altitude: "N/A", trekkingTime: "N/A" },
      ]
    }
  ];

  const toggleDay = (day: number) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  const activePackage = trekPackages.find(trek => trek.id === activeTrek) || trekPackages[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-cyan-500 mb-4">
            Himalayan Trekking Adventures
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Experience the world's most spectacular trails with our expertly crafted trekking packages
          </p>
        </div>

        {/* Trek Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trekPackages.map((trek) => (
            <div 
              key={trek.id}
              onClick={() => setActiveTrek(trek.id)}
              className={`bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:-translate-y-2 border-2 ${
                activeTrek === trek.id 
                  ? `border-${trek.colorClass.split('-')[1]}-500 shadow-xl ring-4 ring-${trek.colorClass.split('-')[1]}-200` 
                  : 'border-gray-100'
              }`}
            >
              <div className={`h-2 ${trek.colorClass.replace('from', 'bg-gradient-to-r from')}`}></div>
              <div className="p-5">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-gray-900">{trek.name}</h3>
                  <span className={`text-lg font-bold ${trek.colorClass.replace('from', 'bg-gradient-to-r from')} bg-clip-text text-transparent`}>
                    {trek.price}
                  </span>
                </div>
                <div className="flex items-center mt-2">
                  <span className="text-sm text-gray-600 mr-3">{trek.duration}</span>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    trek.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                    trek.difficulty === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
                    trek.difficulty === 'Challenging' ? 'bg-orange-100 text-orange-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {trek.difficulty}
                  </span>
                </div>
                <p className="mt-3 text-gray-600 text-sm italic">{trek.highlight}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Trek Display */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16">
          <div className={`h-64 md:h-80 relative ${activePackage.colorClass.replace('from', 'bg-gradient-to-r from')}`}>
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
              <div className="p-6 md:p-8 text-white">
                <h2 className="text-3xl md:text-4xl font-bold">{activePackage.name}</h2>
                <p className="text-xl mt-2 max-w-2xl">{activePackage.highlight}</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Trek Overview</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {activePackage.description}
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-gray-500 text-sm">Duration</div>
                    <div className="font-bold text-lg">{activePackage.duration}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-gray-500 text-sm">Difficulty</div>
                    <div className="font-bold text-lg">{activePackage.difficulty}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-gray-500 text-sm">Max Altitude</div>
                    <div className="font-bold text-lg">{activePackage.maxAltitude}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-gray-500 text-sm">Best Season</div>
                    <div className="font-bold text-lg">{activePackage.bestSeason}</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Detailed Itinerary</h3>
                <div className="space-y-3">
                  {activePackage.itinerary.map((day) => (
                    <div 
                      key={day.day} 
                      className="border border-gray-200 rounded-xl overflow-hidden"
                    >
                      <div 
                        className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer"
                        onClick={() => toggleDay(day.day)}
                      >
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                            <span className="font-bold text-blue-700">D{day.day}</span>
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{day.title}</div>
                            <div className="text-sm text-gray-600">{day.altitude} • {day.trekkingTime}</div>
                          </div>
                        </div>
                        <svg 
                          className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${expandedDay === day.day ? 'rotate-180' : ''}`}
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      
                      {expandedDay === day.day && (
                        <div className="p-4 bg-white animate-fadeIn">
                          <p className="text-gray-700">{day.description}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="sticky top-24">
                  <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Book This Trek</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">Departure Date</label>
                        <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                          <option>September 15, 2025</option>
                          <option>October 5, 2025</option>
                          <option>October 20, 2025</option>
                          <option>November 10, 2025</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">Group Size</label>
                        <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                          <option>1 Person</option>
                          <option>2 People</option>
                          <option>3-5 People</option>
                          <option>6-10 People</option>
                          <option>11+ People</option>
                        </select>
                      </div>
                      
                      <div className="pt-4 border-t border-gray-200">
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600">Trek Price</span>
                          <span className="font-medium">{activePackage.price}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600">Permits & Fees</span>
                          <span className="font-medium">$150</span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600">Equipment Rental</span>
                          <span className="font-medium">$75</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg mt-3 pt-3 border-t border-gray-200">
                          <span>Total</span>
                          <span>$1,724</span>
                        </div>
                      </div>
                      
                      <button className={`w-full py-3 px-4 rounded-xl font-bold text-white shadow-lg transform transition hover:scale-[1.02] mt-6 ${activePackage.colorClass.replace('from', 'bg-gradient-to-r from')}`}>
                        Reserve Your Spot
                      </button>
                      
                      <div className="text-center text-sm text-gray-500 mt-4">
                        <p>Flexible booking • 24/7 support</p>
                        <p>Certified guides • Eco-friendly practices</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">What's Included</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Professional trekking guide</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">All necessary permits</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Teahouse accommodations</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Three meals per day</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">First aid kit and oxygen</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Airport transfers</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 shadow-sm border border-blue-100">
            <div className="text-blue-600 text-3xl mb-3">⛰️</div>
            <h3 className="font-bold text-xl mb-3">Why Trek with Us?</h3>
            <p className="text-gray-700">
              With over 15 years of experience, we provide the safest and most memorable trekking experiences in Nepal. 
              Our guides are certified by the Nepal Mountaineering Association and trained in wilderness first aid.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 shadow-sm border border-green-100">
            <div className="text-green-600 text-3xl mb-3">🌱</div>
            <h3 className="font-bold text-xl mb-3">Sustainable Trekking</h3>
            <p className="text-gray-700">
              We're committed to eco-friendly practices: carrying out all waste, using solar power where possible, 
              and supporting local communities. A portion of every trek fee goes to trail maintenance and local schools.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6 shadow-sm border border-purple-100">
            <div className="text-purple-600 text-3xl mb-3">🛡️</div>
            <h3 className="font-bold text-xl mb-3">Safety First</h3>
            <p className="text-gray-700">
              Your safety is our priority. All treks include comprehensive insurance, satellite communication devices, 
              portable oxygen, and guides trained in altitude sickness recognition and emergency evacuation procedures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trekking;