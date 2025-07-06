import { MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-950 to-black border-t border-white/10 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          {/* Logo & About */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img src="/logo.png" alt="logo" className="w-12" />
              <span className="ml-2 text-xl font-bold text-white">
                Link<span className="text-yellow-400">Asia</span>
              </span>
            </div>
            <p className="max-w-xs">
              Crafting unforgettable journeys across Asia since 2010.
            </p>
            <div className="flex space-x-4">
              {["facebook", "instagram", "twitter", "linkedin"].map((platform, i) => (
                <a
                  key={i}
                  href="#"
                  className="hover:text-cyan-400"
                  aria-label={platform}
                >
                  <i className={`fab fa-${platform}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Explore</h4>
            <ul className="space-y-2">
              {[
                { label: "Destinations", href: "/destinations" },
                { label: "Tour Packages", href: "/tours" },
                { label: "Adventure Tours", href: "/adventure" },
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="hover:text-cyan-400">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Associations */}
          <div>
            <h4 className="text-white font-semibold mb-3">Partners</h4>
            <ul className="space-y-2">
              {[
                { label: "Nepal Tourism Board", href: "https://ntb.gov.np/" },
                { label: "Visit Nepal", href: "https://visitsnepal.com/" },
                { label: "Ministry of Culture, Tourism and Civil Aviation", href: "https://www.tourism.gov.np/" },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin size={16} className="text-cyan-400 mr-2 mt-1" />
                <span>Kathmandu, Nepal</span>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="text-cyan-400 mr-2 mt-1" />
                <span>Suwon Station Gate-10, South Korea</span>
              </li>
              <li>
                <a href="tel:+9779856082660" className="hover:text-cyan-400">
                  +977-9856082660
                </a>
              </li>
              <li>
                <a
                  href="mailto:infolinkasiatours@gmail.com"
                  className="hover:text-cyan-400"
                >
                  infolinkasiatours@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-4 text-center text-xs">
          <p>
            © {new Date().getFullYear()} Link Asia Tours. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center space-x-4">
            {["Privacy Policy", "Terms", "Cookies"].map((text, i) => (
              <a key={i} href="#" className="hover:text-cyan-400">
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
