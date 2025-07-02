import { useState } from 'react';
import { Link } from 'react-router-dom';

// Team member interface
interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  expertise: string[];
}

// Milestone interface
interface Milestone {
  year: string;
  title: string;
  description: string;
}

const AboutUsPage = () => {
  const [activeTab, setActiveTab] = useState('mission');

  // Team data
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Mr. RP Devkota",
      position: "Chairman & Founder",
      bio: "Travel industry veteran with 15+ years of experience",
      expertise: ["Cultural Tourism", "Sustainable Travel"]
    },
    {
      id: 2,
      name: "Mr.Netra Poudel",
      position: "Managing Director",
      bio: "Digital transformation specialist",
      expertise: ["VR Experiences", "Travel Tech"]
    },
    {
      id: 3,
      name: "Ms.Sangita poudel Devkota",
      position: "Executive Director",
      bio: "Crafting immersive journeys since 2015",
      expertise: ["Augmented Reality", "Cultural Immersion"]
    },
  ];

  // Milestones data
  const milestones: Milestone[] = [
    {
      year: "2015",
      title: "Founded in Singapore",
      description: "Started with bespoke tours to Japan and Thailand"
    },
    {
      year: "2018",
      title: "Digital Transformation",
      description: "Launched AR-enhanced tour experiences"
    },
    {
      year: "2021",
      title: "Sustainability Pledge",
      description: "Achieved carbon-neutral operations"
    },
    {
      year: "2023",
      title: "Regional Expansion",
      description: "Covered 15+ destinations across Asia"
    }
  ];


  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[80vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501555088652-021faa106b9b')] bg-cover bg-center"
          style={{ filter: 'blur(2px)' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/80 to-white/70"></div>
        
        <div className="container mx-auto px-4 relative z-20 py-16 md:py-24">
          <div className="max-w-3xl bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-blue-200 shadow-xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              Redefining Asian Travel
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
              Where cutting-edge technology meets authentic cultural experiences
            </p>
            <Link to="/explore">
              <button className="px-6 py-3 md:px-8 md:py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-lg text-sm md:text-base">
                Explore Our Journeys
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission/Vision Tabs */}
      <section className="py-16 md:py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Vision for Tomorrow's Travel</h2>
          <div className="h-1 w-24 md:w-32 bg-cyan-500 mx-auto mb-4 md:mb-6"></div>
          <p className="text-base md:text-lg text-gray-600">
            Pioneering sustainable, tech-enhanced travel experiences across Asia
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="flex border-b border-gray-300 mb-6 md:mb-8">
            <button 
              className={`flex-1 py-3 md:py-4 px-2 sm:px-4 md:px-6 font-medium text-base md:text-lg ${activeTab === 'mission' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('mission')}
            >
              Our Mission
            </button>
            <button 
              className={`flex-1 py-3 md:py-4 px-2 sm:px-4 md:px-6 font-medium text-base md:text-lg ${activeTab === 'vision' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('vision')}
            >
              Our Vision
            </button>
          </div>
          
          <div className="relative overflow-hidden bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-md">
            {activeTab === 'mission' ? (
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-blue-600">Transformative Journeys</h3>
                <p className="mb-3 md:mb-4 text-gray-700">
                  At Link Asia Tours, we make travel easy, personal, and memorable. Whether it's a short trip or a big adventure, we're here to plan it with care, honesty, and heart.
                </p>
              </div>
            ) : (
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-blue-600">The Future of Exploration</h3>
                <p className="mb-3 md:mb-4 text-gray-700">
                  To become Asia's premier tech-enabled sustainable tour operator by 2030.
                </p>
                <p className="text-gray-700">
                  We envision travel where every journey contributes to conservation efforts and cultural preservation through blockchain-verified impact tracking.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Tech Features */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">Digital Innovation</h2>
            <div className="h-1 w-24 md:w-32 bg-cyan-500 mx-auto mb-4 md:mb-6"></div>
            <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-600">
              Integrating tomorrow's technology into today's adventures
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { 
                title: "User-Friendly Website", 
                desc: "Book trips, hotels, and tickets with just a few click anytime, anywhere.",
                icon: "🔍",
                color: "text-blue-500"
              },
              { 
                title: "Smart Travel Planning", 
                desc: "Get personalized suggestions based on your preferences and travel history.",
                icon: "🌱",
                color: "text-green-500"
              },
              { 
                title: "Real-Time Ticketing Systems", 
                desc: "Integrated with leading GDS platforms for accurate pricing and availability.",
                icon: "🤖",
                color: "text-purple-500"
              },
              { 
                title: "Online Payments", 
                desc: "Secure, flexible payment options with instant confirmations.",
                icon: "👓",
                color: "text-amber-500"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-5 md:p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg"
              >
                <div className={`text-3xl md:text-4xl mb-3 md:mb-4 ${feature.color}`}>{feature.icon}</div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-700 text-sm md:text-base">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-20 container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">Visionary Team</h2>
          <div className="h-1 w-24 md:w-32 bg-cyan-500 mx-auto mb-4 md:mb-6"></div>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-600">
            Experts blending tech innovation with deep regional knowledge
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <div className="p-5 md:p-6">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-4" />
                <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{member.name}</h3>
                <p className="text-blue-500 mb-2 md:mb-3 text-sm md:text-base">{member.position}</p>
                <p className="mb-3 md:mb-4 text-gray-700 text-sm md:text-base">{member.bio}</p>
                <div className="flex flex-wrap gap-1 md:gap-2">
                  {member.expertise.map((exp, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Journey</h2>
            <div className="h-1 w-24 md:w-32 bg-cyan-500 mx-auto mb-4 md:mb-6"></div>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line - hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-300 to-cyan-300"></div>
            
            {/* Milestone items */}
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`mb-10 md:mb-12 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} mb-4 md:mb-0`}>
                  <div className="bg-white p-5 md:p-6 rounded-xl border border-gray-200 shadow-sm">
                    <div className="text-blue-600 font-bold text-base md:text-lg">{milestone.year}</div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900">{milestone.title}</h3>
                    <p className="text-gray-700 text-sm md:text-base">{milestone.description}</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center relative">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-blue-600 z-10"></div>
                  {index === milestones.length - 1 && (
                    <div className="absolute w-3 h-3 md:w-4 md:h-4 rounded-full bg-blue-600 animate-ping"></div>
                  )}
                </div>
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-50 to-cyan-50 p-6 md:p-8 lg:p-12 rounded-3xl border border-blue-200 shadow-lg">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-gray-900">
              Ready for a <span className="text-blue-600">Next-Gen</span> Journey?
            </h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto text-gray-600">
              Experience Asia like never before with our tech-enhanced sustainable tours
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
              <button className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-bold hover:scale-105 transition-transform shadow-md text-sm md:text-base">
                Design Your Journey
              </button>
              <button className="px-6 py-3 md:px-8 md:py-4 bg-white border border-blue-500 text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-colors text-sm md:text-base">
                Contact Our Experts
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;