import aboutImg from "@/assets/biryani/about-chef.jpg";
import { Section } from "./Section";

export const About = () => {
  return (
    <Section id="about" title="Our Story" subtitle="Crafted with love, delivered with care" className="bg-card">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <p className="text-foreground/80 leading-relaxed text-lg">
              At Biryani 2 Home, we bring the authentic taste of traditional biryani straight to your doorstep. 
              Our journey began with a simple belief - <span className="text-primary font-semibold">great food should be accessible to everyone, anywhere.</span>
            </p>
            <p className="text-foreground/80 leading-relaxed text-lg">
              Each grain of rice is carefully selected, every spice meticulously measured, and every dish 
              prepared with the same love and attention our grandmothers put into their cooking.
            </p>
            <p className="text-foreground/80 leading-relaxed text-lg">
              From our kitchen to your home, we ensure that every meal tells a story of tradition, 
              quality, and the <span className="luxury-text font-semibold">timeless art of biryani making.</span>
            </p>
          </div>
          <div className="flex items-center gap-6 pt-6">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-gold">
              <span className="text-primary-foreground font-bold text-xl">5⭐</span>
            </div>
            <div>
              <p className="font-bold text-foreground text-xl">Luxury Experience</p>
              <p className="text-foreground/60 tracking-wide">Rated by 250+ satisfied customers</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src={aboutImg}
            alt="Chef preparing traditional biryani with authentic spices and techniques"
            className="rounded-xl shadow-luxury w-full h-[500px] object-cover border border-primary/20"
          />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center shadow-gold border-4 border-background">
            <div className="text-center">
              <span className="text-primary-foreground font-bold text-2xl block">5+</span>
              <span className="text-primary-foreground text-xs font-medium uppercase tracking-wider">Years</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
