import React, { useState, useEffect } from "react";
import { motion, type MotionProps } from "framer-motion";
import { ArrowRight, Globe, Sparkles, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";
import ContactPage from "./Contact";

// === Local utility ===
const cn = (...classes: (string | false | undefined | null)[]) =>
  classes.filter(Boolean).join(" ");

// === Button component ===
interface ButtonProps extends MotionProps {
  variant?: "default" | "outline" | "glow";
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      className,
      variant = "default",
      size = "md",
      children,
      ...rest
    } = props;

    const base =
      "inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none";

    const variantClasses = {
      default: "bg-blue-600 text-white hover:bg-blue-500 shadow-lg",
      outline:
        "border-2 border-blue-500 text-blue-600 bg-white hover:bg-blue-50",
      glow: "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50",
    };

    const sizeClasses = {
      sm: "h-8 px-4 text-sm",
      md: "h-10 px-6 text-base",
      lg: "h-12 px-8 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        className={cn(base, variantClasses[variant], sizeClasses[size], className)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...rest}
      >
        {children}
      </motion.button>
    );
  }
);
Button.displayName = "Button";

// === Main Home Component ===
const Home: React.FC = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const backgroundImages = [
    "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1968&q=80",
    "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=2071&q=80",
    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2021&q=80",
  ];

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);


  return (
    <>
      {/* === HERO SECTION === */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background slider */}
       <div className="absolute inset-0 z-0">
  {backgroundImages.map((img, index) => (
    <motion.div
      key={index}
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${img})` }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: index === currentBgIndex ? 1 : 0,
        scale: index === currentBgIndex ? 1 : 1.05,
      }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
  ))}
  {/* Reduced opacity of white overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/50 to-white/30" />
</div>
        {/* Foreground content */}
        <motion.div
          className="z-10 text-center px-4 sm:px-8 max-w-4xl relative"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.div
            className="relative bg-white/90 backdrop-blur-xl rounded-3xl border border-gray-200 p-8 sm:p-12 shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight text-gray-900">
              <span className="block">Discover the World</span>
              <span className="text-blue-600 bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
                Beyond Boundaries
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
              Link Asia Tours offers unforgettable travel experiences tailored to your dreams. Let's explore new horizons together.
            </p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <Button size="lg" variant="glow" className="flex items-center gap-2">
                Get Started <ArrowRight className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline">Learn More</Button>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { icon: <Globe size={24} className="text-blue-600" />, text: "100+ Destinations" },
                { icon: <Sparkles size={24} className="text-blue-600" />, text: "Premium Experiences" },
                { icon: <MapPin size={24} className="text-blue-600" />, text: "Local Experts" },
                { icon: <Star size={24} className="text-blue-600" />, text: "5-Star Reviews" },
              ].map((feature, index) => (
                <div key={index} className="bg-blue-50 p-3 rounded-xl border border-blue-100 flex flex-col items-center">
                  {feature.icon}
                  <span className="text-sm mt-2 text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Slider control */}
          <div className="flex justify-center mt-8 space-x-2">
            {backgroundImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBgIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentBgIndex ? "bg-blue-600 w-8" : "bg-gray-300"
                }`}
                aria-label={`Show background ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* === DESTINATIONS SECTION === */}
      <div className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            🌍 Explore Our Top Destinations
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Mystic Mountains",
                image: "/images/mountains.jpg",
                description: "Adventure into snow-capped beauty and local culture.",
              },
              {
                title: "Island Escape",
                image: "/images/island.jpg",
                description: "Relax under palm trees with turquoise water views.",
              },
              {
                title: "Cultural Odyssey",
                image: "/images/culture.jpg",
                description: "Dive deep into heritage, rituals, and flavors.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-52 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600">{card.description}</p>
                  <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-md transition">
                    Discover More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* === ADDITIONAL CONTENT SECTION === */}
      <div className="bg-white py-20 px-6 text-center">
        <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Traveler Stories
            </motion.h2>
            <motion.p 
              className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Hear from adventurers who've explored with us
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The cultural immersion tour completely changed my perspective. Our guide introduced us to communities in ways I never thought possible.",
                author: "Sarah Johnson",
                role: "Cultural Explorer",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
              },
              {
                quote: "From the Himalayas to the beaches of Thailand, every detail was perfectly arranged. The adventure exceeded all expectations!",
                author: "Michael Chen",
                role: "Adventure Seeker",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
              },
              {
                quote: "Our family trip was seamless from start to finish. The kids still talk about the cooking class in Vietnam!",
                author: "The Rodriguez Family",
                role: "Family Travelers",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 border border-gray-200 relative overflow-hidden shadow-md"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-300">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-gray-900 font-semibold">{testimonial.author}</h4>
                      <p className="text-blue-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                  
                  <div className="flex mt-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Nepal Tourism Board Section */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full mb-4"
      >
        Official Partner
      </motion.div>
      <motion.h2 
        className="text-4xl font-bold text-gray-900"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Nepal Tourism Board
      </motion.h2>
      <motion.p 
        className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Discover the Land of Himalayas and Ancient Cultures
      </motion.p>
    </div>

    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Nepal Information */}
      <motion.div
        className="bg-blue-50 rounded-3xl border border-blue-200 p-8"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center mb-6">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-14 h-14 rounded-lg flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-blue-700 ml-4">Nepal Tourism Board</h3>
        </div>
        
        <p className="text-gray-700 mb-6">
          Nepal Tourism Board (NTB) is the national tourism organization of Nepal established to promote and develop tourism in Nepal. 
          NTB provides authentic information about Nepal's diverse attractions, cultural heritage, adventure opportunities, and travel services.
        </p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          {[
            { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>, 
              text: "Official Website", 
              link: "https://www.welcomenepal.com" },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>, 
              text: "Bhimsen Tower, Kathmandu", 
              link: "https://goo.gl/maps/example" },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>, 
              text: "info@ntb.org.np", 
              link: "mailto:info@ntb.org.np" },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>, 
              text: "+977 1-4256909", 
              link: "tel:+97714256909" },
          ].map((contact, index) => (
            <a 
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-700 hover:text-blue-500 transition-colors"
            >
              <span className="mr-3 text-blue-500">{contact.icon}</span>
              <span>{contact.text}</span>
            </a>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-3 mt-4">
          {[
            "#VisitNepal2025", 
            "NepalNow", 
            "MountEverest", 
            "AnnapurnaCircuit",
            "Pashupatinath",
            "Lumbini"
          ].map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
      
      {/* Nepal Highlights */}
      <motion.div
        className="space-y-8"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="relative rounded-3xl overflow-hidden shadow-md">
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
          <img 
            src="/images/mountains.jpg" 
            alt="Nepal Himalayas"
            className="w-full h-64 object-cover"
          />
          <div className="absolute bottom-6 left-6 z-20">
            <h3 className="text-2xl font-bold text-white">Himalayan Wonderland</h3>
            <p className="text-blue-100">Home to 8 of the world's 10 highest peaks</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          {[
            { 
              title: "Cultural Heritage", 
              description: "7 UNESCO World Heritage Sites", 
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><circle cx="12" cy="12" r="4"></circle></svg>
            },
            { 
              title: "Adventure Capital", 
              description: "Trekking, rafting & mountaineering", 
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/><circle cx="12" cy="10" r="3"/><path d="M12 10V1"/><path d="m17 11-3.2 3.2"/><path d="M7 11l3.2 3.2"/></svg>
            },
            { 
              title: "Wildlife", 
              description: "12 National Parks & reserves", 
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
            },
            { 
              title: "Spiritual Home", 
              description: "Birthplace of Lord Buddha", 
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
            },
          ].map((highlight, index) => (
            <div 
              key={index} 
              className="bg-blue-50 rounded-xl border border-blue-200 p-5"
            >
              <div className="flex items-center mb-3">
                <span className="text-blue-500 mr-3">{highlight.icon}</span>
                <h4 className="font-semibold text-blue-700">{highlight.title}</h4>
              </div>
              <p className="text-gray-700 text-sm">{highlight.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/explorenepal">
          <motion.button
            className="inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 h-12 px-8 text-lg mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Nepal Packages <ArrowRight className="ml-2" size={20} />
          </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  </div>
</section>
{/* Visit Nepal Section */}
<section className="py-20 bg-blue-50 relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <motion.h2 
        className="text-4xl md:text-5xl font-bold text-gray-900"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
          Visit Nepal
        </span> 
        <span className="block mt-2 text-gray-700">Where Adventures Touch the Sky</span>
      </motion.h2>
      <motion.p 
        className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Discover a land of majestic peaks, ancient temples, vibrant cultures, and warm hospitality
      </motion.p>
    </div>

    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Nepal Experience Highlights */}
      <motion.div
        className="space-y-8"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {[
          {
            title: "Himalayan Adventures",
            description: "Trek to Everest Base Camp, Annapurna Circuit, or explore the remote Mustang region. Experience world-class mountaineering, paragliding, and white-water rafting.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>,
            color: "from-blue-100 to-cyan-100",
            image: "https://images.unsplash.com/photo-1611599537845-1c7a0091a6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
          },
          {
            title: "Cultural Treasures",
            description: "Explore UNESCO World Heritage Sites in Kathmandu Valley, visit Lumbini - birthplace of Buddha, and experience colorful festivals like Dashain and Tihar.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><circle cx="12" cy="12" r="4"></circle></svg>,
            color: "from-cyan-100 to-blue-100",
            image: "https://images.unsplash.com/photo-1620633431311-0b0a9f0e0e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
          },
          {
            title: "Wildlife & Nature",
            description: "Spot Bengal tigers and one-horned rhinos in Chitwan National Park, birdwatch in Koshi Tappu, and experience pristine Himalayan landscapes.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>,
            color: "from-green-100 to-emerald-100",
            image: "https://images.unsplash.com/photo-1582034986517-30d3844de583?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
          },
          {
            title: "Spiritual Journeys",
            description: "Meditate in Buddhist monasteries, practice yoga with Himalayan views, and experience ancient Hindu rituals along sacred rivers.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>,
            color: "from-purple-100 to-indigo-100",
            image: "https://images.unsplash.com/photo-1601612242868-4c2f5c86a0c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
          }
        ].map((experience, index) => (
          <motion.div 
            key={index}
            className="relative group overflow-hidden rounded-2xl shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 z-0 opacity-80 group-hover:opacity-90 transition-opacity duration-500">
              <img 
                src={experience.image} 
                alt={experience.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className={`absolute inset-0 bg-gradient-to-br ${experience.color} z-1`}></div>
            <div className="relative z-10 p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/80 backdrop-blur rounded-lg mt-1">
                  <span className="text-blue-600">{experience.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{experience.title}</h3>
                  <p className="mt-2 text-gray-700">{experience.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Nepal Feature Highlight */}
      <motion.div
        className="sticky top-24"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="relative rounded-3xl overflow-hidden border-2 border-blue-300 shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
          <img 
            src="/images/mountains.jpg" 
            alt="Mount Everest"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold px-4 py-1 rounded-full inline-block mb-4">
              Featured Destination
            </div>
            <h3 className="text-3xl font-bold text-white">Mount Everest Region</h3>
            <p className="text-blue-100 mt-2">Journey to the top of the world</p>
            
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-white/20 backdrop-blur p-4 rounded-xl border border-white/30">
                <div className="text-white text-lg font-bold">8,848m</div>
                <div className="text-blue-100 text-sm">Highest peak on Earth</div>
              </div>
              <div className="bg-white/20 backdrop-blur p-4 rounded-xl border border-white/30">
                <div className="text-white text-lg font-bold">Sagarmatha</div>
                <div className="text-blue-100 text-sm">Nepali name for Everest</div>
              </div>
              <div className="bg-white/20 backdrop-blur p-4 rounded-xl border border-white/30">
                <div className="text-white text-lg font-bold">Sherpa Culture</div>
                <div className="text-blue-100 text-sm">Mountain experts & guides</div>
              </div>
              <div className="bg-white/20 backdrop-blur p-4 rounded-xl border border-white/30">
                <div className="text-white text-lg font-bold">UNESCO Site</div>
                <div className="text-blue-100 text-sm">Sagarmatha National Park</div>
              </div>
            </div>
            
            <div className="mt-8">
              <motion.button
                className="inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 h-12 px-8 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Everest Treks <ArrowRight className="ml-2" size={20} />
              </motion.button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 bg-blue-100 rounded-2xl border border-blue-200 p-6">
          <h4 className="font-bold text-blue-700 text-lg mb-4">Best Time to Visit</h4>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-blue-600 font-bold">Autumn</div>
              <div className="text-gray-700">Sept-Nov</div>
              <div className="text-xs text-blue-500 mt-1">Clear skies</div>
            </div>
            <div className="text-center">
              <div className="text-blue-600 font-bold">Spring</div>
              <div className="text-gray-700">Mar-May</div>
              <div className="text-xs text-blue-500 mt-1">Blooming rhododendrons</div>
            </div>
            <div className="text-center">
              <div className="text-blue-600 font-bold">Winter</div>
              <div className="text-gray-700">Dec-Feb</div>
              <div className="text-xs text-blue-500 mt-1">Fewer crowds</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
    
    {/* Nepal Experiences Grid */}
    <motion.div 
      className="mt-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-bold text-center text-gray-900 mb-10">Unforgettable Nepal Experiences</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          {
            title: "Mountain Flight",
            description: "See Everest up close",
            icon: "✈️"
          },
          {
            title: "Rafting Adventure",
            description: "Thrilling white water",
            icon: "🚣"
          },
          {
            title: "Yoga Retreat",
            description: "Himalayan serenity",
            icon: "🧘"
          },
          {
            title: "Jungle Safari",
            description: "Wildlife encounters",
            icon: "🐘"
          },
          {
            title: "Cultural Homestay",
            description: "Local hospitality",
            icon: "🏡"
          },
          {
            title: "Festival Participation",
            description: "Vibrant celebrations",
            icon: "🎉"
          },
          {
            title: "Mountain Biking",
            description: "Scenic trails",
            icon: "🚵"
          },
          {
            title: "Spiritual Pilgrimage",
            description: "Sacred sites",
            icon: "🕉️"
          }
        ].map((experience, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl border border-gray-200 p-5 text-center hover:border-blue-300 transition-all shadow-sm hover:shadow-md"
          >
            <div className="text-4xl mb-3">{experience.icon}</div>
            <h4 className="font-semibold text-gray-900">{experience.title}</h4>
            <p className="text-gray-600 text-sm mt-2">{experience.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  </div>
</section>
<section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Limited Time Offers
            </motion.h2>
            <motion.p 
              className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Exclusive deals for your next adventure
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div 
              className="relative rounded-3xl overflow-hidden border-2 border-blue-300"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1569949380643-6e746ecaa3bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Japan Special"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <div className="bg-blue-600 text-white font-bold px-4 py-1 rounded-full inline-block mb-4">
                  Save 25%
                </div>
                <h3 className="text-3xl font-bold text-white">Cultural Japan Experience</h3>
                <p className="text-blue-100 mt-2">Spring 2024 - Cherry Blossom Season</p>
                <Button className="mt-6" variant="glow" size="lg">
                  Book Now <ArrowRight className="ml-2" size={20} />
                </Button>
              </div>
            </motion.div>

            <motion.div 
              className="relative rounded-3xl overflow-hidden border-2 border-cyan-300"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1590523278191-995cbcda646b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80" 
                alt="Bali Special"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <div className="bg-cyan-500 text-white font-bold px-4 py-1 rounded-full inline-block mb-4">
                  Save 30%
                </div>
                <h3 className="text-3xl font-bold text-white">Bali Wellness Retreat</h3>
                <p className="text-cyan-100 mt-2">Summer 2024 - Limited Spaces</p>
                <Button className="mt-6" variant="glow" size="lg">
                  Book Now <ArrowRight className="ml-2" size={20} />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full mb-4"
            >
              Unique Experiences
            </motion.div>
            <motion.h2 
              className="text-4xl font-bold text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Unforgettable Journeys
            </motion.h2>
            <motion.p 
              className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Discover experiences crafted to create lifelong memories
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                {
                  title: "Cultural Immersion",
                  description: "Live like a local with authentic homestays and traditional ceremonies",
                  icon: <Globe className="text-blue-600" size={24} />
                },
                {
                  title: "Adventure Expeditions",
                  description: "From mountain treks to deep sea diving - push your boundaries",
                  icon: <MapPin className="text-green-600" size={24} />
                },
                {
                  title: "Culinary Journeys",
                  description: "Taste your way through Asia with master chefs and market tours",
                  icon: <Sparkles className="text-pink-500" size={24} />
                },
                {
                  title: "Wellness Retreats",
                  description: "Rejuvenate with yoga, meditation and traditional healing",
                  icon: <Star className="text-purple-600" size={24} />
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-white border border-gray-200 rounded-2xl hover:border-blue-300 transition-all shadow-sm hover:shadow-md"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex gap-4">
                    <div className="p-3 bg-blue-50 rounded-xl">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                      <p className="mt-2 text-gray-700">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl overflow-hidden aspect-video shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1528123778681-01e39b5f65a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                  alt="Travel experience"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-8 left-8 z-20">
                <h3 className="text-2xl font-bold text-white">Bali Spiritual Retreat</h3>
                <div className="flex items-center mt-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <span className="ml-2 text-white">4.9 (128 reviews)</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Expert Travel Guides
            </motion.h2>
            <motion.p 
              className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Meet our passionate team of travel experts
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Aisha Tanaka",
                expertise: "Cultural Specialist",
                bio: "Born in Kyoto, fluent in 4 languages with 15 years of guiding experience",
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1588&q=80"
              },
              {
                name: "Rahul Patel",
                expertise: "Adventure Guide",
                bio: "Summited Everest 3 times, certified scuba instructor and paragliding expert",
                image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              },
              {
                name: "Maya Chen",
                expertise: "Culinary Expert",
                bio: "Former Michelin-star chef who knows every street food stall in Southeast Asia",
                image: "https://images.unsplash.com/photo-1545912452-8aea7e25a3d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
              }
            ].map((guide, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 border border-gray-200 relative overflow-hidden shadow-md"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-200 mb-6">
                    <img 
                      src={guide.image} 
                      alt={guide.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{guide.name}</h3>
                  <div className="mt-2 px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    {guide.expertise}
                  </div>
                  <p className="mt-4 text-gray-700">{guide.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
<section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Moments of Wonder
            </motion.h2>
            <motion.p 
              className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Capturing the magic of our travelers' journeys
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
              "https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
              "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
              "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
              "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
              "https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
              "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
              "https://images.unsplash.com/photo-1500534623283-312aade485b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
            ].map((img, index) => (
              <motion.div
                key={index}
                className="aspect-square overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img 
                  src={img} 
                  alt={`Travel moment ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Traveler Questions
            </motion.h2>
            <motion.p 
              className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Everything you need to know before your journey
            </motion.p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What's included in the tour packages?",
                answer: "Our packages include accommodation, transportation, guided tours, and most meals. Flights and personal expenses are additional."
              },
              {
                question: "How far in advance should I book?",
                answer: "We recommend booking at least 3-6 months in advance for best availability, especially during peak seasons."
              },
              {
                question: "What safety measures do you have in place?",
                answer: "All our tours follow strict safety protocols with certified guides, insured activities, and 24/7 support."
              },
              {
                question: "Can I customize my itinerary?",
                answer: "Absolutely! We specialize in creating personalized itineraries tailored to your interests and preferences."
              },
              {
                question: "What is your cancellation policy?",
                answer: "We offer flexible cancellation with full refunds up to 60 days before departure. See our policy page for details."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <details className="group">
                  <summary className="list-none p-6 cursor-pointer flex justify-between items-center bg-white hover:bg-gray-50">
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                    <div className="w-6 h-6 flex items-center justify-center text-blue-600 group-open:rotate-180 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </summary>
                  <div className="px-6 pb-6 pt-2 text-gray-700 bg-gray-50">
                    {faq.answer}
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
<ContactPage/>
      </div>
    </>
  );
};

export default Home;