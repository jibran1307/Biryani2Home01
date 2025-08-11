export const Footer = () => {
  return (
    <footer className="border-t border-primary/20 mt-20 bg-card">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-foreground/60 font-medium">© {new Date().getFullYear()} Biryani 2 Home. All rights reserved.</p>
        <nav className="flex items-center gap-8">
          <a href="#about" className="text-foreground/70 hover:text-primary transition-colors font-medium uppercase tracking-wider text-sm">About</a>
          <a href="#menu" className="text-foreground/70 hover:text-primary transition-colors font-medium uppercase tracking-wider text-sm">Menu</a>
          <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors font-medium uppercase tracking-wider text-sm">Contact</a>
        </nav>
      </div>
    </footer>
  );
};
