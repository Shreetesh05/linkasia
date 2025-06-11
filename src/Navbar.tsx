import React from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Local utility to join classes
const cn = (...classes: (string | undefined | false | null)[]) =>
  classes.filter(Boolean).join(" ");

// ✅ Local Button component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "destructive";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-2xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
    const variantStyles = {
      default: "bg-black text-white hover:bg-zinc-800",
      outline: "border border-zinc-300 hover:bg-zinc-100",
      ghost: "hover:bg-zinc-100",
      link: "underline-offset-4 hover:underline text-primary",
      destructive: "bg-red-600 text-white hover:bg-red-700",
    };
    const sizeStyles = {
      sm: "h-8 px-3 text-sm",
      md: "h-10 px-4 text-base",
      lg: "h-12 px-6 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// ✅ Navbar Component
const navItems = ["Home", "About us" ,"Destinations", "Tours", "Blog", "Contact"];

const tourDropdownItems = [
  { label: "Adventure Tours", href: "#adventure" },
  { label: "Cultural Tours", href: "#cultural" },
  { label: "Luxury Tours", href: "#luxury" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [showDropdown, setShowDropdown] = React.useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 text-white shadow-2xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-2">
          <img src="logo.png" alt="Link Asia Tours" className="h-12 w-auto" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center relative">
          {navItems.map((item) =>
            item === "Tours" ? (
              <div
                key={item}
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
                className="relative"
              >
                <button className="flex items-center space-x-1 hover:text-yellow-300 transition">
                  <span>{item}</span>
                  <ChevronDown size={16} />
                </button>

                <AnimatePresence>
                  {showDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 mt-2 w-48 rounded-xl bg-white text-gray-800 shadow-lg z-50"
                    >
                      {tourDropdownItems.map((tour) => (
                        <a
                          key={tour.label}
                          href={tour.href}
                          className="block px-4 py-3 hover:bg-yellow-100 transition"
                        >
                          {tour.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-yellow-300 transition"
              >
                {item}
              </a>
            )
          )}
          <Button className="bg-yellow-400 text-black hover:bg-yellow-300 transition">
            Book Now
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.4 }}
          className="md:hidden bg-indigo-950 px-6 pb-4"
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-yellow-300 transition"
              >
                {item}
              </a>
            ))}
            {/* <Button className="mt-4 bg-yellow-400 text-black hover:bg-yellow-300 transition">
              Book Now
            </Button> */}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
