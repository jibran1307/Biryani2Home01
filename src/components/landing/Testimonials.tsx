import { Section } from "./Section";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ayesha",
    text: "The mutton biryani is a showstopper! Rich aroma and tender meat—arrived piping hot.",
    rating: 5,
  },
  {
    name: "Rahul",
    text: "Feels like home-cooked biryani. Portions are generous and flavours are spot on.",
    rating: 5,
  },
  {
    name: "Priya",
    text: "Chicken 65 was perfectly crispy and the prawn biryani was heavenly!",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <Section id="testimonials" title="Customer Love" subtitle="Rated 4.9/5 by our happy customers">
      <div className="relative">
        <Carousel className="w-full" >
          <CarouselContent>
            {testimonials.map((t) => (
              <CarouselItem key={t.name} className="md:basis-1/2 lg:basis-1/3">
                <div className="h-full rounded-lg border bg-card p-6 shadow-sm">
                  <div className="flex items-center gap-2 text-primary">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary" />
                    ))}
                  </div>
                  <p className="mt-3 text-foreground">“{t.text}”</p>
                  <div className="mt-4 text-sm text-muted-foreground">— {t.name}</div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </Section>
  );
};
