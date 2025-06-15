import React, { useState, useEffect } from "react";
import { motion, type MotionProps } from "framer-motion";
import { ArrowRight, Globe, Sparkles, MapPin, Star } from "lucide-react";

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
      default: "bg-yellow-400 text-black hover:bg-yellow-300 shadow-lg",
      outline:
        "border-2 border-white/30 text-white bg-black/20 hover:bg-white/10 backdrop-blur-sm",
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
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-purple-800/70 to-pink-700/60" />
        </div>

        {/* Foreground content */}
        <motion.div
          className="z-10 text-center px-4 sm:px-8 max-w-4xl relative"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.div
            className="relative bg-black/20 backdrop-blur-xl rounded-3xl border border-white/20 p-8 sm:p-12 shadow-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
              <span className="block">Discover the World</span>
              <span className="text-yellow-400 bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                Beyond Boundaries
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
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
                { icon: <Globe size={24} />, text: "100+ Destinations" },
                { icon: <Sparkles size={24} />, text: "Premium Experiences" },
                { icon: <MapPin size={24} />, text: "Local Experts" },
                { icon: <Star size={24} />, text: "5-Star Reviews" },
              ].map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20 flex flex-col items-center">
                  {feature.icon}
                  <span className="text-sm mt-2">{feature.text}</span>
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
                  index === currentBgIndex ? "bg-yellow-400 w-8" : "bg-white/30"
                }`}
                aria-label={`Show background ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* === DESTINATIONS SECTION === */}
      <div className="py-20 px-6 bg-gradient-to-br from-cyan-900 to-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
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
                className="group relative bg-white/5 border border-cyan-700 rounded-2xl overflow-hidden shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 backdrop-blur"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-52 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-cyan-100">{card.description}</p>
                  <button className="mt-4 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg shadow-lg transition">
                    Discover More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* === ADDITIONAL CONTENT SECTION === */}
      <div className="bg-gray-900 py-20 px-6 text-center text-white">
        <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Traveler Stories
            </motion.h2>
            <motion.p 
              className="mt-4 text-xl text-cyan-100 max-w-3xl mx-auto"
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
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-white/10 relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-cyan-500 rounded-full opacity-10 blur-3xl"></div>
                <div className="absolute -left-6 -bottom-6 w-32 h-32 bg-pink-500 rounded-full opacity-10 blur-3xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-400">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-white font-semibold">{testimonial.author}</h4>
                      <p className="text-cyan-300 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <p className="text-cyan-100 italic">"{testimonial.quote}"</p>
                  
                  <div className="flex mt-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
<section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Limited Time Offers
            </motion.h2>
            <motion.p 
              className="mt-4 text-xl text-cyan-100 max-w-3xl mx-auto"
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
              className="relative rounded-3xl overflow-hidden border-2 border-cyan-500/30"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1569949380643-6e746ecaa3bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Japan Special"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <div className="bg-cyan-500 text-black font-bold px-4 py-1 rounded-full inline-block mb-4">
                  Save 25%
                </div>
                <h3 className="text-3xl font-bold text-white">Cultural Japan Experience</h3>
                <p className="text-cyan-100 mt-2">Spring 2024 - Cherry Blossom Season</p>
                <Button className="mt-6" variant="glow" size="lg">
                  Book Now <ArrowRight className="ml-2" size={20} />
                </Button>
              </div>
            </motion.div>

            <motion.div 
              className="relative rounded-3xl overflow-hidden border-2 border-pink-500/30"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1590523278191-995cbcda646b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80" 
                alt="Bali Special"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <div className="bg-pink-500 text-black font-bold px-4 py-1 rounded-full inline-block mb-4">
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
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-block bg-gradient-to-r from-cyan-600 to-blue-500 text-white px-6 py-2 rounded-full mb-4"
            >
              Unique Experiences
            </motion.div>
            <motion.h2 
              className="text-4xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Unforgettable Journeys
            </motion.h2>
            <motion.p 
              className="mt-4 text-xl text-cyan-100 max-w-3xl mx-auto"
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
                  icon: <Globe className="text-yellow-400" size={24} />
                },
                {
                  title: "Adventure Expeditions",
                  description: "From mountain treks to deep sea diving - push your boundaries",
                  icon: <MapPin className="text-green-400" size={24} />
                },
                {
                  title: "Culinary Journeys",
                  description: "Taste your way through Asia with master chefs and market tours",
                  icon: <Sparkles className="text-pink-400" size={24} />
                },
                {
                  title: "Wellness Retreats",
                  description: "Rejuvenate with yoga, meditation and traditional healing",
                  icon: <Star className="text-purple-400" size={24} />
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-white/5 backdrop-blur rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex gap-4">
                    <div className="p-3 bg-black/30 rounded-xl">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 text-cyan-100">{item.description}</p>
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
              <div className="relative rounded-3xl overflow-hidden aspect-video">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
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
      <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Expert Travel Guides
            </motion.h2>
            <motion.p 
              className="mt-4 text-xl text-cyan-100 max-w-3xl mx-auto"
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
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-white/10 relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-cyan-500/30 mb-6">
                    <img 
                      src={guide.image} 
                      alt={guide.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{guide.name}</h3>
                  <div className="mt-2 px-4 py-1 bg-cyan-900/50 text-cyan-300 rounded-full text-sm">
                    {guide.expertise}
                  </div>
                  <p className="mt-4 text-cyan-100">{guide.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
<section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Moments of Wonder
            </motion.h2>
            <motion.p 
              className="mt-4 text-xl text-cyan-100 max-w-3xl mx-auto"
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
                className="aspect-square overflow-hidden rounded-xl"
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
      <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Traveler Questions
            </motion.h2>
            <motion.p 
              className="mt-4 text-xl text-cyan-100 max-w-3xl mx-auto"
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
                className="bg-gray-800/50 backdrop-blur rounded-xl border border-white/10 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <details className="group">
                  <summary className="list-none p-6 cursor-pointer flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                    <div className="w-6 h-6 flex items-center justify-center text-cyan-500 group-open:rotate-180 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </summary>
                  <div className="px-6 pb-6 pt-2 text-cyan-100">
                    {faq.answer}
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
<section className="py-20 bg-gradient-to-r from-cyan-900 to-blue-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div 
            className="rounded-3xl p-12 relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-700/20 to-blue-600/20 backdrop-blur-sm z-0"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-white mb-6">Ready for Your Next Adventure?</h2>
              <p className="text-xl text-cyan-100 max-w-2xl mx-auto mb-10">
                Let our experts craft your perfect journey. Limited spots available for 2024!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 h-12 px-8 text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Consultation <ArrowRight className="ml-2" size={20} />
                </motion.button>
                
                <motion.button
                  className="inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none border-2 border-white/30 text-white bg-black/20 hover:bg-white/10 backdrop-blur-sm h-12 px-8 text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View All Tours
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      </div>
    </>
  );
};

export default Home;
