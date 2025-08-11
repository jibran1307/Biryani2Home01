import { Button } from "@/components/ui/button";
import { BrandLogo } from "./BrandLogo";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#menu", label: "Menu" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 glass">
      <nav className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#home" aria-label="Biryani 2 Home">
          <BrandLogo />
        </a>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-foreground/70 hover:text-primary transition-all duration-300 story-link uppercase tracking-wider">
              {item.label}
            </a>
          ))}
        </div>
        <div className="hidden md:block">
          <a href="#contact">
            <Button variant="outline" size="lg" className="hover-glow uppercase tracking-wider font-semibold" aria-label="Order Now">Order Now</Button>
          </a>
        </div>
        <div className="md:hidden">
          <a href="#contact">
            <Button variant="outline" size="sm" className="hover-glow">Order</Button>
          </a>
        </div>
      </nav>
    </header>
  );
};
