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
      name: "Netra Poudel",
      position: "Managing Director",
      bio: "Digital transformation specialist",
      expertise: ["VR Experiences", "Travel Tech"]
    },
    {
      id: 3,
      name: "Sangita poudel Devkota",
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
    <div className="bg-gradient-to-br from-slate-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501555088652-021faa106b9b')] bg-cover bg-center transform scale-125"
          style={{ filter: 'blur(2px)' }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-20 py-24">
          <div className="max-w-3xl backdrop-blur-sm bg-black/30 p-8 rounded-2xl border border-indigo-500/30">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400">
              Redefining Asian Travel
            </h1>
            <p className="text-xl text-cyan-100 mb-8">
              Where cutting-edge technology meets authentic cultural experiences
            </p>
            <Link to="/explore">
      <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-bold hover:scale-105 transition-transform duration-300">
        Explore Our Journeys
      </button>
    </Link>
          </div>
        </div>
      </section>

      {/* Mission/Vision Tabs */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Vision for Tomorrow's Travel</h2>
          <div className="h-1 w-32 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-lg text-cyan-100">
            Pioneering sustainable, tech-enhanced travel experiences across Asia
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="flex border-b border-indigo-500 mb-8">
            <button 
              className={`py-4 px-6 font-medium text-lg ${activeTab === 'mission' ? 'border-b-2 border-cyan-500 text-cyan-400' : 'text-indigo-200'}`}
              onClick={() => setActiveTab('mission')}
            >
              Our Mission
            </button>
            <button 
              className={`py-4 px-6 font-medium text-lg ${activeTab === 'vision' ? 'border-b-2 border-cyan-500 text-cyan-400' : 'text-indigo-200'}`}
              onClick={() => setActiveTab('vision')}
            >
              Our Vision
            </button>
          </div>
          
          <div className="relative overflow-hidden bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-indigo-500/30">
      {activeTab === 'mission' ? (
        <div className="animate-slideUpSlow">
          <h3 className="text-2xl font-bold mb-4 text-cyan-300">Transformative Journeys</h3>
          <p className="mb-4">
            To leverage technology that deepens cultural understanding while preserving heritage and ecosystems across Asia.
          </p>
          <p>
            We create immersive experiences using AR, VR, and AI that connect travelers with local communities in meaningful ways.
          </p>
        </div>
      ) : (
        <div className="animate-slideUpSlow">
          <h3 className="text-2xl font-bold mb-4 text-cyan-300">The Future of Exploration</h3>
          <p className="mb-4">
            To become Asia's premier tech-enabled sustainable tour operator by 2030.
          </p>
          <p>
            We envision travel where every journey contributes to conservation efforts and cultural preservation through blockchain-verified impact tracking.
          </p>
        </div>
      )}

      {/* Tabs or triggers to change activeTab here */}
    </div>
        </div>
      </section>

      {/* Tech Features */}
      <section className="py-20 bg-gradient-to-r from-indigo-900/50 to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Digital Innovation</h2>
            <div className="h-1 w-32 bg-emerald-500 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-cyan-100">
              Integrating tomorrow's technology into today's adventures
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "User-Friendly Website", 
                desc: "Book trips, hotels, and tickets with just a few click anytime, anywhere.",
                icon: "🔍"
              },
              { 
                title: "Smart Travel Planning", 
                desc: "Get personalized suggestions based on your preferences and travel history.",
                icon: "🌱"
              },
              { 
                title: "Real-Time Ticketing Systems", 
                desc: "Integrated with leading GDS platforms like  and Sabre for accurate pricing and availability.",
                icon: "🤖"
              },
              { 
                title: "Online Payments", 
                desc: "Secure, flexible payment options with instant confirmations.",
                icon: "👓"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-indigo-500/30 hover:border-cyan-500/50 transition-all duration-300 hover:scale-[1.03]"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-cyan-300">{feature.title}</h3>
                <p className="text-cyan-100">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Visionary Team</h2>
          <div className="h-1 w-32 bg-cyan-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-cyan-100">
            Experts blending tech innovation with deep regional knowledge
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="bg-gradient-to-br from-slate-800 to-indigo-900/50 rounded-2xl overflow-hidden border border-indigo-500/30 hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="p-6">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-4" />
                <h3 className="text-xl font-bold group-hover:text-cyan-300 transition-colors">{member.name}</h3>
                <p className="text-cyan-400 mb-3">{member.position}</p>
                <p className="mb-4 text-sm">{member.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((exp, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs bg-cyan-900/50 text-cyan-300 px-2 py-1 rounded-full"
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
      <section className="py-20 bg-gradient-to-l from-indigo-900/50 to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <div className="h-1 w-32 bg-emerald-500 mx-auto mb-6"></div>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500 to-indigo-500"></div>
            
            {/* Milestone items */}
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`mb-12 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-indigo-500/30">
                    <div className="text-cyan-300 font-bold text-lg">{milestone.year}</div>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p>{milestone.description}</p>
                  </div>
                </div>
                <div className="w-1/2 flex justify-center relative">
                  <div className="w-6 h-6 rounded-full bg-cyan-500 z-10"></div>
                  {index === milestones.length - 1 && (
                    <div className="absolute w-4 h-4 rounded-full bg-cyan-500 animate-ping"></div>
                  )}
                </div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-cyan-900/50 to-indigo-900/50 backdrop-blur-sm p-12 rounded-3xl border border-cyan-500/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready for a <span className="text-cyan-400">Next-Gen</span> Journey?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Experience Asia like never before with our tech-enhanced sustainable tours
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-bold hover:scale-105 transition-transform">
                Design Your Journey
              </button>
              <button className="px-8 py-4 bg-transparent border border-cyan-500 text-cyan-400 rounded-full font-bold hover:bg-cyan-500/10 transition-colors">
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