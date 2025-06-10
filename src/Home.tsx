import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// === Local utility ===
const cn = (...classes: (string | false | undefined | null)[]) =>
  classes.filter(Boolean).join(" ");

// === Local Button component ===
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variantClasses = {
      default: "bg-yellow-400 text-black hover:bg-yellow-300",
      outline: "border border-white text-white hover:bg-white/10",
    };

    const sizeClasses = {
      sm: "h-8 px-4 text-sm",
      md: "h-10 px-6 text-base",
      lg: "h-12 px-8 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variantClasses[variant], sizeClasses[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// === Main Home Component ===
const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 text-white overflow-hidden"
    >
      {/* Background circles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-pink-500 opacity-30 rounded-full top-1/4 left-1/4 blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-indigo-500 opacity-30 rounded-full bottom-1/4 right-1/4 blur-3xl animate-pulse delay-200"></div>
      </div>

      {/* Foreground content */}
      <motion.div
        className="z-10 text-center px-4 sm:px-8 max-w-3xl"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          Discover the World <br />
          <span className="text-yellow-400">Beyond Boundaries</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-white/80">
         Link Asia Tours offers unforgettable travel experiences tailored to your dreams. Let's explore new horizons together.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" variant="default" className="flex items-center gap-2">
            Get Started <ArrowRight className="w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
