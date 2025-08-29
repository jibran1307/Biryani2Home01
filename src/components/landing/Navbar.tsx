import { Button } from "@/components/ui/button";
import { BrandLogo } from "./BrandLogo";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#menu", label: "Menu" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 glass">
      <nav className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#home" aria-label="Biryani 2 Home">
          <BrandLogo />
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden min-[725px]:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-foreground/70 hover:text-primary transition-all duration-300 story-link uppercase tracking-wider">
              {item.label}
            </a>
          ))}
        </div>
        
        <div className="hidden min-[725px]:block">
          <a href="#contact">
            <Button variant="outline" size="lg" className="hover-glow uppercase tracking-wider font-semibold" aria-label="Order Now">Order Now</Button>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="max-[724px]:block hidden p-2 rounded-md hover:bg-accent transition-colors"
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <Menu 
              className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
              }`} 
            />
            <X 
              className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
              }`} 
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`max-[724px]:block hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="glass border-t border-border/50">
          <div className="container mx-auto px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                onClick={toggleMenu}
                className="block text-sm font-medium text-foreground/70 hover:text-primary transition-all duration-300 story-link uppercase tracking-wider py-2"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <a href="#contact" onClick={toggleMenu}>
                <Button variant="outline" size="sm" className="hover-glow w-full">Order Now</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
