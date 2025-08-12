import { Section } from "./Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { MenuDialog } from "./MenuDialog";
import muttonBiryani from "@/assets/biryani/mutton-biryani.jpg";
import chickenBiryani from "@/assets/biryani/chicken-biryani.jpg";
import prawnBiryani from "@/assets/biryani/prawn-biryani.jpg";
import chicken65 from "@/assets/biryani/chicken-65.jpg";
import butterChicken from "@/assets/biryani/butter-chicken.jpg";
import fishFry from "@/assets/biryani/fish-fry.jpg";

interface MenuItem { name: string; description?: string; image?: string; signature?: boolean; }
interface MenuCategory { title: string; items: MenuItem[] }

const featuredItems: MenuItem[] = [
  { name: "Mutton Biryani", description: "Our signature dish with tender mutton and aromatic basmati rice.", image: muttonBiryani, signature: true },
  { name: "Chicken Biryani", description: "Classic chicken biryani with authentic flavors.", image: chickenBiryani },
  { name: "Prawn Biryani", description: "Fresh prawns cooked with fragrant rice and coastal spices.", image: prawnBiryani },
  { name: "Chicken 65", description: "Spicy and crispy chicken pieces, a South Indian favorite.", image: chicken65 },
  { name: "Butter Chicken", description: "Creamy tomato-based chicken curry.", image: butterChicken },
  { name: "Fish Fry", description: "Crispy fried fish marinated in coastal spices.", image: fishFry },
];

export const MenuSection = () => {
  return (
    <Section id="menu" title="Our Signature Menu" subtitle="Authentic flavors crafted with premium ingredients and traditional techniques">
      <div className="relative">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {featuredItems.map((item) => (
              <CarouselItem key={item.name} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="bg-card rounded-xl shadow-luxury border border-primary/10 overflow-hidden group hover:shadow-orange transition-all duration-500 hover:-translate-y-2">
                  {item.image && (
                    <div className="aspect-video overflow-hidden relative">
                      <img
                        src={item.image}
                        alt={`${item.name} dish`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  )}
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 font-display">
                      <span className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                        {item.name}
                      </span>
                      {item.signature && (
                        <span className="ml-1 rounded-full bg-gradient-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-orange">Signature</span>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground min-h-12 leading-relaxed mb-6">
                      {item.description || "Delicious and flavourful."}
                    </p>
                    <div className="mt-4">
                      <a href="#contact"><Button variant="default" size="sm" className="w-full hover-glow font-semibold uppercase tracking-wider">Order Now</Button></a>
                    </div>
                  </CardContent>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2" />
        </Carousel>
      </div>
      <div className="mt-16 text-center">
        <MenuDialog />
      </div>
    </Section>
  );
};
