import React from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const cn = (...classes: (string | undefined | false | null)[]) =>
  classes.filter(Boolean).join(" ");

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

const navItems = [
  { label: "Home", path: "/" },

  { label: "Destinations", path: "/destinations" },
  { label: "Tours", path: "/tours" },
  { label: "Blog", path: "/blog" },
    { label: "About us", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const tourDropdownItems = [
  { label: "Adventure Tours", path: "/tours#adventure" },
  { label: "Korea Tours", path: "/korea#tour" },
  { label: "Domestic Tours", path: "/domestic#tours" },
  { label: "International", path: "/international#tour" },
  { label: "Trekking", path:"/trekking#tour"}
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [showDropdown, setShowDropdown] = React.useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = React.useState(false);

  const renderNavItems = (isMobile = false) => (
    <>
      {navItems.map((item) =>
        item.label === "Tours" ? (
  <div
    key={item.label}
    className={cn("relative", isMobile ? "block" : "group")}
    onMouseEnter={() => !isMobile && setShowDropdown(true)}
    onMouseLeave={() => !isMobile && setShowDropdown(false)}
  >
    <button
      onClick={() => {
        if (isMobile) setMobileDropdownOpen(!mobileDropdownOpen);
      }}
      className="flex items-center space-x-1 hover:text-yellow-300 transition w-full"
    >
      <span>{item.label}</span>
      <ChevronDown size={16} />
    </button>

    <AnimatePresence>
      {(isMobile ? mobileDropdownOpen : showDropdown) && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={cn(
            "mt-2 rounded-xl bg-white text-gray-800 shadow-lg z-50",
            isMobile ? "pl-4 pt-2" : "absolute top-full left-0 w-48"
          )}
        >
          {tourDropdownItems.map((tour) => (
            <Link
              key={tour.label}
              to={tour.path}
              className="block px-4 py-3 hover:bg-yellow-100 transition"
              onClick={() => {
                if (isMobile) {
                  setIsOpen(false);
                  setMobileDropdownOpen(false);
                }
              }}
            >
              {tour.label}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
) : (
  <Link
    key={item.label}
    to={item.path}
    className={cn(
      "hover:text-yellow-300 transition",
      isMobile ? "text-white py-2" : ""
    )}
    onClick={() => isMobile && setIsOpen(false)}
  >
    {item.label}
  </Link>
)

      )}
    </>
  );

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-white text-black shadow-2xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src="logo.png" alt="Link Asia Tours" className="h-12 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center relative">
          {renderNavItems(false)}
          <Link to="/form">
            <Button className="bg-yellow-400 text-black hover:bg-yellow-300 transition">
              Book Now
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-indigo-950 px-6 pb-4 overflow-hidden"
          >
            <div className="flex flex-col space-y-2 mt-4 text-white">
              {renderNavItems(true)}
              <Link to="/form">
                <Button className="mt-4 bg-yellow-400 text-black hover:bg-yellow-300 transition w-full">
                  Book Now
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
