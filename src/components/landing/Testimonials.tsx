import { Section } from "./Section";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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
      <div className="relative max-w-4xl mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2">
                <div className="bg-card p-8 rounded-xl shadow-luxury border border-primary/10 hover:shadow-orange transition-all duration-500 group min-h-[280px] flex flex-col">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-primary text-xl group-hover:scale-110 transition-transform duration-300" style={{transitionDelay: `${i * 50}ms`}}>⭐</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-8 leading-relaxed text-lg font-medium flex-grow">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-orange">
                      <span className="text-primary-foreground font-bold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-foreground">{testimonial.name}</p>
                      <p className="text-muted-foreground text-sm">Verified Customer</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2" />
        </Carousel>
      </div>
    </Section>
  );
};