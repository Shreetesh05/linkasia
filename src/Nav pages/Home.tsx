import React, { useState, useEffect } from "react";
import { motion, type MotionProps } from "framer-motion";
import { ArrowRight, Sparkles, MapPin, Star } from "lucide-react";

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
      glow: "bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50",
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

// === Destination Carousel Component ===
type Direction = 'left' | 'right' | null;

const DestinationCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<Direction>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const destinations = [
    {
      title: "Mystic Mountains",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Adventure into snow-capped beauty and local culture.",
    },
    {
      title: "Island Escape",
      image: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1633&q=80",
      description: "Relax under palm trees with turquoise water views.",
    },
    {
      title: "Cultural Odyssey",
      image: "/images/pashupati.jpeg",
      description: "Dive deep into heritage, rituals, and flavors.",
    },
    {
      title: "Desert Adventure",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Explore vast dunes and ancient desert civilizations.",
    },
    {
      title: "Urban Exploration",
      image: "https://images.unsplash.com/photo-1485872299829-c673f5194813?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1458&q=80",
      description: "Discover vibrant city life and modern architecture.",
    }
  ];

  // Auto-advance the carousel
  useEffect(() => {
  let interval: number; // Changed from NodeJS.Timeout
  if (isAutoPlaying) {
    interval = window.setInterval(() => { // Added window. prefix
      nextSlide();
    }, 5000);
  }
  return () => clearInterval(interval);
}, [isAutoPlaying, activeIndex]);
  const nextSlide = () => {
    setDirection('right');
    setActiveIndex((prev) => (prev + 1) % destinations.length);
  };

  const prevSlide = () => {
    setDirection('left');
    setActiveIndex((prev) => (prev - 1 + destinations.length) % destinations.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > activeIndex ? 'right' : 'left');
    setActiveIndex(index);
  };

  const variants = {
    enter: (direction: Direction) => ({
      x: direction === 'right' ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: Direction) => ({
      x: direction === 'right' ? -1000 : 1000,
      opacity: 0
    })
  };

  return (
    <div className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          🌍 Explore Our Top Destinations
        </motion.h2>

        {/* Carousel Container */}
        <div className="relative overflow-hidden w-full max-w-6xl mx-auto h-[480px] rounded-2xl">
          {/* Navigation Buttons */}
          <button 
            className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300"
            onClick={prevSlide}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300"
            onClick={nextSlide}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Auto-play toggle */}
          <button 
            className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300"
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          >
            {isAutoPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            )}
          </button>
          
          {/* Slides */}
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div className="relative h-full w-full">
              <img
                src={destinations[activeIndex].image}
                alt={destinations[activeIndex].title}
                className="w-full h-full object-cover brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                <motion.h3 
                  className="text-2xl sm:text-3xl font-bold mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {destinations[activeIndex].title}
                </motion.h3>
                <motion.p 
                  className="text-lg sm:text-xl max-w-md"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {destinations[activeIndex].description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Thumbnails */}
        <div className="flex justify-center mt-6 space-x-3">
          {destinations.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-sky-600 w-8' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Destination Cards */}
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          {destinations.slice(0, 3).map((card, i) => (
            <motion.div
              key={i}
              className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={card.image}
                alt={card.title}
                className="h-48 sm:h-52 w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-8 sm:mt-10">
          <Button 
            variant="glow" 
            className="mx-auto text-sm sm:text-base"
          >
            Discover More Destinations
          </Button>
        </div>
      </div>
    </div>
  );
};

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
          {/* Light white overlay for clean look */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/40 to-white/20" />
        </div>
        
        {/* Foreground content */}
        <motion.div
          className="z-10 text-center px-4 sm:px-8 max-w-4xl w-full relative"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.div
            className="relative bg-white/90 backdrop-blur-xl rounded-3xl border border-gray-200 p-6 sm:p-8 md:p-12 shadow-lg mx-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-gray-900">
              <span className="block">Discover the World</span>
              <span className="text-blue-600 bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                Beyond Boundaries
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              Unforgettable travel experiences tailored to your dreams. Let's explore new horizons together.
            </p>
           <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
  {/* <Button
    size="lg"
    variant="glow"
    className="flex items-center justify-center gap-2 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
  >
    Get Started <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
  </Button> */}
  
 <a href="https://dev.mazzakotrip.com/" target="_blank" rel="noopener noreferrer">
  <Button
    size="lg"
    variant="outline"
    className="text-sm  sm:text-base px-5 sm:px-7 py-2.5 sm:py-3 border-blue-500 text-black hover:bg-blue-500 hover:text-white transition-colors duration-200"
  >
    ✈️ Book Your International Flights
  </Button>
</a>
</div>


            <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto">
              {[
                // { icon: <Globe size={20} className="sm:w-6 sm:h-6 text-blue-600" />, text: "100+ Destinations" },
                { icon: <Sparkles size={20} className="sm:w-6 sm:h-6 text-blue-600" />, text: "Premium Experiences" },
                { icon: <MapPin size={20} className="sm:w-6 sm:h-6 text-blue-600" />, text: "Local Experts" },
                { icon: <Star size={20} className="sm:w-6 sm:h-6 text-blue-600" />, text: "5-Star Reviews" },
              ].map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="bg-blue-50 p-2 sm:p-3 rounded-xl border border-blue-100 flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + (index * 0.1) }}
                >
                  {feature.icon}
                  <span className="text-xs sm:text-sm mt-1 sm:mt-2 text-gray-700 text-center">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          {/* Slider control */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {backgroundImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBgIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                  index === currentBgIndex ? "bg-blue-600 w-6 sm:w-8" : "bg-gray-300"
                }`}
                aria-label={`Show background ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* === DESTINATIONS SECTION === */}
      <DestinationCarousel />

      {/* === FEATURES SECTION === */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Premium Travel Experiences
            </motion.h2>
            <motion.p 
              className="mt-3 sm:mt-4 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              We craft journeys that create lifelong memories
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                title: "Personalized Itineraries",
                description: "Tailored experiences designed just for you",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><circle cx="12" cy="12" r="4"></circle></svg>,
                color: "bg-blue-100"
              },
              { 
                title: "Local Experts", 
                description: "Insider knowledge from passionate guides", 
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
                color: "bg-blue-100"
              },
              { 
                title: "Premium Comfort", 
                description: "Handpicked accommodations for your comfort", 
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>,
                color: "bg-blue-100"
              },
              { 
                title: "24/7 Support", 
                description: "Assistance whenever you need it", 
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>,
                color: "bg-blue-100"
              },
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 text-center shadow-sm hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full ${feature.color} flex items-center justify-center mx-auto mb-4 sm:mb-5`}>
                  <span className="text-blue-600">{feature.icon}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === OFFERS SECTION === */}
      <section className="py-16 sm:py-20 bg-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Limited Time Offers
            </motion.h2>
            <motion.p 
              className="mt-3 sm:mt-4 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Exclusive deals for your next adventure
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <motion.div 
              className="relative rounded-3xl overflow-hidden border-2 border-blue-300 aspect-video"
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
              <div className="absolute bottom-0 left-0 p-5 sm:p-6 md:p-8 z-20">
                <div className="bg-blue-600 text-white font-bold px-3 py-1 rounded-full inline-block mb-2 sm:mb-3 text-xs sm:text-sm">
                  Save 25%
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Cultural Japan Experience</h3>
                <p className="text-blue-100 mt-1 sm:mt-2 text-sm sm:text-base">Spring 2024 - Cherry Blossom Season</p>
                <Button
  variant="glow"
  size="lg"
  className="mt-4 sm:mt-6 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
>
  Book Now
  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
</Button>

              </div>
            </motion.div>

            <motion.div 
              className="relative rounded-3xl overflow-hidden border-2 border-blue-300 aspect-video"
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
              <div className="absolute bottom-0 left-0 p-5 sm:p-6 md:p-8 z-20">
                <div className="bg-blue-600 text-white font-bold px-3 py-1 rounded-full inline-block mb-2 sm:mb-3 text-xs sm:text-sm">
                  Save 30%
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Bali Wellness Retreat</h3>
                <p className="text-blue-100 mt-1 sm:mt-2 text-sm sm:text-base">Summer 2024 - Limited Spaces</p>
                <Button
  variant="glow"
  size="lg"
  className="mt-4 sm:mt-6 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
>
  Book Now
  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
</Button>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === TESTIMONIALS SECTION === */}
      <section className="py-16 sm:py-20 bg-gray-50 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Traveler Stories
            </motion.h2>
            <motion.p 
              className="mt-3 sm:mt-4 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Hear from our satisfied travelers
            </motion.p>
          </motion.div>

          <div className="space-y-6 sm:space-y-8">
            {[
              {
                name: "Alex Johnson",
                location: "Bali Adventure",
                text: "The attention to detail was incredible. Every aspect of our trip was perfectly planned, allowing us to truly relax and enjoy the experience.",
                rating: 5
              },
              {
                name: "Sarah Williams",
                location: "Japan Cultural Tour",
                text: "Our guide was exceptional - knowledgeable, friendly, and always going the extra mile to make our trip memorable. We'll definitely be back!",
                rating: 5
              },
              {
                name: "Michael Chen",
                location: "Mountain Expedition",
                text: "The seamless experience from booking to the actual trip was impressive. Everything exceeded our expectations - a truly unforgettable journey.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 md:p-8 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-3 sm:mb-4">
                 <div className="flex text-yellow-400">
  {[...Array(testimonial.rating)].map((_, i) => (
    <Star
      key={i}
      className="w-4 h-4 sm:w-5 sm:h-5"
      fill="currentColor"
    />
  ))}
</div>

                  <div className="ml-3">
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base">{testimonial.name}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic text-sm sm:text-base">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;