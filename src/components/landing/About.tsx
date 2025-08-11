import aboutImg from "@/assets/biryani/about-chef.jpg";
import { Section } from "./Section";

export const About = () => {
  return (
    <Section id="about" title="Our Story" subtitle="Crafted with love, delivered with care.">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="overflow-hidden rounded-lg shadow-md">
          <img src={aboutImg} alt="Chef serving biryani from a traditional handi" className="w-full h-full object-cover hover-scale" loading="lazy" />
        </div>
        <div className="space-y-4">
          <p className="text-lg leading-relaxed">
            At Biryani 2 Home, every order is a promise of warmth and authenticity. We bring
            the timeless flavours of home-style cooking to your table, using fresh ingredients
            and traditional techniques.
          </p>
          <p className="text-muted-foreground">
            From our kitchen to your doorstep, we ensure every handi of biryani reaches you hot,
            aromatic, and irresistibly delicious.
          </p>
        </div>
      </div>
    </Section>
  );
};
