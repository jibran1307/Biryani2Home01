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
      <div className="absolute inset-0 bg-gradient-hero" aria-hidden />
      <div className="relative container mx-auto px-6 py-32 md:py-48">
        <div className="max-w-4xl text-center mx-auto animate-enter">
          <div className="mb-6">
            <span className="text-primary font-semibold tracking-widest uppercase text-sm">Ghost Kitchen</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="luxury-text">Flavours That Travel</span><br/>
            <span className="text-foreground">to Your Home</span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Authentic biryani & non-veg delicacies crafted with passion, delivered with precision.
          </p>
          <div className="mt-12 flex flex-wrap gap-6 justify-center">
            <a href="#menu"><Button variant="luxury" size="lg" className="hover-scale uppercase tracking-wider font-semibold px-8 py-4">View Menu</Button></a>
            <a href="#contact"><Button variant="outline" size="lg" className="hover-glow uppercase tracking-wider font-semibold px-8 py-4">Order Now</Button></a>
          </div>
        </div>
      </div>
    </section>
  );
};
