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
    <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#home" aria-label="Biryani 2 Home">
          <BrandLogo />
        </a>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-foreground/80 hover:text-foreground transition-colors story-link">
              {item.label}
            </a>
          ))}
        </div>
        <div className="hidden md:block">
          <a href="#contact">
            <Button variant="hero" size="lg" aria-label="Order Now">Order Now</Button>
          </a>
        </div>
        <div className="md:hidden">
          <a href="#contact">
            <Button variant="hero" size="sm">Order</Button>
          </a>
        </div>
      </nav>
    </header>
  );
};
