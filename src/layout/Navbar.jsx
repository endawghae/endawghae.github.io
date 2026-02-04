import { useEffect, useState } from "react";
import { Github, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/endawghae", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/henry-ng-068b12239/", label: "LinkedIn" }
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }  z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          <span>Henry Ng</span>
        </a>
        {/* Social Links */}
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};