import heroImage from "@/assets/biryani/hero-biryani.jpg";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center overflow-hidden">
      <img
        src={heroImage}
        alt="Steaming Hyderabadi biryani in a traditional handi"
        className="absolute inset-0 h-full w-full object-cover scale-105 animate-[fade-in_0.8s_ease-out]"
        loading="eager"
      />
      <div className="absolute inset-0 bg-[hsl(var(--overlay)/0.5)]" aria-hidden />
      <div className="relative container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-2xl text-primary-foreground animate-enter">
          <h1 className="font-display text-4xl md:text-6xl font-extrabold leading-tight">
            Flavours That Travel to Your Home
          </h1>
          <p className="mt-4 text-lg md:text-xl text-primary-foreground/90">
            Authentic biryani & non-veg delicacies delivered hot and fresh.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#menu"><Button variant="hero" size="lg" className="hover-scale">View Menu</Button></a>
            <a href="#contact"><Button variant="inverted" size="lg" className="hover-scale">Order Now</Button></a>
          </div>
        </div>
      </div>
    </section>
  );
};
