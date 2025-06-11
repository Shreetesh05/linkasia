// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// // === Local utility ===
// const cn = (...classes: (string | false | undefined | null)[]) =>
//   classes.filter(Boolean).join(" ");

// // === Local Button component ===
// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?: "default" | "outline";
//   size?: "sm" | "md" | "lg";
// }

// const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
//   ({ className, variant = "default", size = "md", ...props }, ref) => {
//     const base =
//       "inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

//     const variantClasses = {
//       default: "bg-yellow-400 text-black hover:bg-yellow-300",
//       outline: "border border-white text-white hover:bg-white/10",
//     };

//     const sizeClasses = {
//       sm: "h-8 px-4 text-sm",
//       md: "h-10 px-6 text-base",
//       lg: "h-12 px-8 text-lg",
//     };

//     return (
//       <button
//         ref={ref}
//         className={cn(base, variantClasses[variant], sizeClasses[size], className)}
//         {...props}
//       />
//     );
//   }
// );
// Button.displayName = "Button";

// // === Main Home Component ===
// const Home: React.FC = () => {
//   return (
//     <section
//       id="home"
//       className="relative h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 text-white overflow-hidden"
//     >
//       {/* Background circles */}
//       <div className="absolute inset-0 z-0 overflow-hidden">
//         <div className="absolute w-96 h-96 bg-pink-500 opacity-30 rounded-full top-1/4 left-1/4 blur-3xl animate-pulse"></div>
//         <div className="absolute w-96 h-96 bg-indigo-500 opacity-30 rounded-full bottom-1/4 right-1/4 blur-3xl animate-pulse delay-200"></div>
//       </div>

//       {/* Foreground content */}
//       <motion.div
//         className="z-10 text-center px-4 sm:px-8 max-w-3xl"
//         initial={{ opacity: 0, y: 60 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.2, ease: "easeOut" }}
//       >
//         <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
//           Discover the World <br />
//           <span className="text-yellow-400">Beyond Boundaries</span>
//         </h1>
//         <p className="mt-6 text-lg sm:text-xl text-white/80">
//          Link Asia Tours offers unforgettable travel experiences tailored to your dreams. Let's explore new horizons together.
//         </p>
//         <div className="mt-8 flex justify-center gap-4">
//           <Button size="lg" variant="default" className="flex items-center gap-2">
//             Get Started <ArrowRight className="w-5 h-5" />
//           </Button>
//           <Button size="lg" variant="outline">
//             Learn More
//           </Button>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Home;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Sparkles, MapPin, Star } from "lucide-react";

// === Local utility ===
const cn = (...classes: (string | false | undefined | null)[]) =>
  classes.filter(Boolean).join(" ");

// === Local Button component ===
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "glow";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", children, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none";

    const variantClasses = {
      default: "bg-yellow-400 text-black hover:bg-yellow-300 shadow-lg",
      outline: "border-2 border-white/30 text-white bg-black/20 hover:bg-white/10 backdrop-blur-sm",
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
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);
Button.displayName = "Button";

// Background images for slider
const backgroundImages = [
  "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1968&q=80",
  "https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80",
];

// === Main Home Component ===
const Home: React.FC = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 5 + 1,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 10,
  }));

  return (
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

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-purple-800/70 to-pink-700/60" />
      </div>

      {/* Floating grid */}
      <div className="absolute inset-0 z-1 opacity-20">
        <div className="grid grid-cols-12 gap-4 h-full">
          {[...Array(144)].map((_, i) => (
            <div key={i} className="border border-white/10 rounded-sm" />
          ))}
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-2">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white/20"
            style={{
              top: `${particle.y}%`,
              left: `${particle.x}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Holographic circles */}
      <div className="absolute inset-0 z-3 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-pink-500 opacity-30 rounded-full top-1/4 left-1/4 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-indigo-500 opacity-30 rounded-full bottom-1/4 right-1/4 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            delay: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Foreground content */}
      <motion.div
        className="z-10 text-center px-4 sm:px-8 max-w-4xl relative"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Decorative elements */}
        <motion.div
          className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-md border border-white/10"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-600/20 backdrop-blur-md border border-white/10"
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />

        {/* Main card */}
        <motion.div
          className="relative bg-black/20 backdrop-blur-xl rounded-3xl border border-white/20 p-8 sm:p-12 shadow-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="absolute top-4 right-4 w-3 h-3 rounded-full bg-cyan-400"
            animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.div
            className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-yellow-400"
            animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          />

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
              <span className="block">Discover the World</span>
              <span className="text-yellow-400 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500">
                Beyond Boundaries
              </span>
            </h1>
            <motion.p
              className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Link Asia Tours offers unforgettable travel experiences tailored to your dreams. Let's explore new horizons together.
            </motion.p>
          </motion.div>

          <motion.div className="mt-8 flex justify-center gap-4 flex-wrap" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}>
            <Button size="lg" variant="glow" className="flex items-center gap-2">
              Get Started <ArrowRight className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline">Learn More</Button>
          </motion.div>

          <motion.div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }}>
            {[
              { icon: <Globe size={24} />, text: "100+ Destinations" },
              { icon: <Sparkles size={24} />, text: "Premium Experiences" },
              { icon: <MapPin size={24} />, text: "Local Experts" },
              { icon: <Star size={24} />, text: "5-Star Reviews" },
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20 flex flex-col items-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                  transition={{ duration: 2, delay: index * 0.3, repeat: Infinity, repeatType: "reverse" }}
                >
                  {feature.icon}
                </motion.div>
                <span className="text-sm mt-2">{feature.text}</span>
              </div>
            ))}
          </motion.div>
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
  );
};

export default Home;
