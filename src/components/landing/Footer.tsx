export const Footer = () => {
  return (
    <footer className="border-t mt-16">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Biryani 2 Home. All rights reserved.</p>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#about" className="hover:underline">About</a>
          <a href="#menu" className="hover:underline">Menu</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </footer>
  );
};
