import { Section } from "./Section";

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
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-card p-8 rounded-xl shadow-luxury border border-primary/20 hover:shadow-gold transition-all duration-500 hover:-translate-y-2 group"
          >
            <div className="flex items-center gap-1 mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="text-primary text-xl group-hover:scale-110 transition-transform duration-300" style={{transitionDelay: `${i * 50}ms`}}>⭐</span>
              ))}
            </div>
            <p className="text-foreground/80 italic mb-8 leading-relaxed text-lg font-medium">
              "{testimonial.text}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center shadow-gold">
                <span className="text-primary-foreground font-bold text-lg">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <p className="font-bold text-foreground text-lg">{testimonial.name}</p>
                <p className="text-foreground/60 uppercase tracking-wider text-sm">Verified Customer</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};