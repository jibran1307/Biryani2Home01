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

const biryaniItems: MenuItem[] = [
  { name: "Mutton Biryani", description: "Our signature dish with tender mutton and aromatic basmati rice.", image: muttonBiryani, signature: true },
  { name: "Chicken Biryani", description: "Classic chicken biryani with authentic flavors.", image: chickenBiryani },
  { name: "Prawn Biryani", description: "Fresh prawns cooked with fragrant rice and coastal spices.", image: prawnBiryani },
  { name: "Kheema Biryani", description: "Minced mutton cooked with basmati rice and exotic spices.", image: muttonBiryani },
  { name: "Fish Biryani", description: "Fresh fish fillets with fragrant rice and coastal spices.", image: prawnBiryani },
];

export const MenuSection = () => {
  return (
    <Section id="menu" title="Our Signature Biryani" subtitle="Premium biryani varieties crafted with authentic spices and techniques">
      <div className="relative">
        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-1 md:-ml-2">
              {biryaniItems.map((item) => (
                <CarouselItem key={item.name} className="pl-1 md:pl-2 basis-1/2">
                  <div className="bg-card rounded-md shadow-luxury border border-primary/10 overflow-hidden group hover:shadow-orange transition-all duration-500 hover:-translate-y-1 max-w-xs mx-auto">
                    {item.image && (
                      <div className="aspect-[5/4] overflow-hidden relative">
                        <img
                          src={item.image}
                          alt={`${item.name} dish`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    )}
                    <CardHeader className="pb-1 px-2 pt-2">
                      <CardTitle className="flex items-center gap-1 font-display">
                        <span className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">
                          {item.name}
                        </span>
                        {item.signature && (
                          <span className="ml-1 rounded-full bg-gradient-primary px-1.5 py-0.5 text-xs font-semibold text-primary-foreground shadow-orange">★</span>
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0 px-2 pb-2">
                      <p className="text-xs text-muted-foreground min-h-6 leading-tight mb-2">
                        {item.description || "Delicious and flavourful."}
                      </p>
                      <div className="mt-1">
                        <a href="#contact"><Button variant="default" size="sm" className="w-full hover-glow font-medium text-xs uppercase tracking-wide h-7">Order</Button></a>
                      </div>
                    </CardContent>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-8 top-1/2 -translate-y-1/2 w-8 h-8" />
            <CarouselNext className="absolute -right-8 top-1/2 -translate-y-1/2 w-8 h-8" />
          </Carousel>
        </div>
      </div>
      <div className="mt-16 text-center">
        <MenuDialog />
      </div>
    </Section>
  );
};
