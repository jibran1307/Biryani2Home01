import { Section } from "./Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import muttonBiryani from "@/assets/biryani/mutton-biryani.jpg";
import chickenBiryani from "@/assets/biryani/chicken-biryani.jpg";
import prawnBiryani from "@/assets/biryani/prawn-biryani.jpg";
import chicken65 from "@/assets/biryani/chicken-65.jpg";
import butterChicken from "@/assets/biryani/butter-chicken.jpg";
import fishFry from "@/assets/biryani/fish-fry.jpg";

interface MenuItem { name: string; description?: string; image?: string; signature?: boolean; }
interface MenuCategory { title: string; items: MenuItem[] }

const menu: MenuCategory[] = [
  {
    title: "Biryani",
    items: [
      { name: "Mutton Biryani", description: "Signature dish.", image: muttonBiryani, signature: true },
      { name: "Chicken Biryani", image: chickenBiryani },
      { name: "Prawn Biryani", image: prawnBiryani },
      { name: "Kheema Biryani", image: muttonBiryani },
    ],
  },
  {
    title: "Non-Veg Cuisines",
    items: [
      { name: "Bismal Curry", image: butterChicken },
      { name: "Mutton Kurma", image: butterChicken },
      { name: "Chicken Kurma", image: butterChicken },
      { name: "Fish Curry", image: fishFry },
      { name: "Attukaal Paaya", image: butterChicken },
    ],
  },
  {
    title: "Side Dishes",
    items: [
      { name: "Chicken 65", image: chicken65 },
      { name: "Pepper Chicken", image: chicken65 },
      { name: "Chicken Gravy", image: butterChicken },
      { name: "Butter Chicken", image: butterChicken },
      { name: "Chicken Lollipop", image: chicken65 },
      { name: "Mutton Pepper Gravy", image: butterChicken },
      { name: "Mutton Sukka", image: muttonBiryani },
      { name: "Mutton Meat Balls", image: muttonBiryani },
      { name: "Mutton Brain Fry", image: muttonBiryani },
      { name: "Mutton Pepper Liver Fry", image: muttonBiryani },
      { name: "Prawn Masala", image: prawnBiryani },
      { name: "Fish Fry", image: fishFry },
      { name: "Crab Gravy", image: fishFry },
      { name: "Masala Egg Fry", image: chicken65 },
    ],
  },
];

export const MenuSection = () => {
  return (
    <Section id="menu" title="Our Signature Menu" subtitle="Authentic flavors crafted with premium ingredients and traditional techniques">
      <div className="grid gap-12">
        {menu.map((category) => (
          <div key={category.title}>
            <h3 className="font-display text-3xl font-bold luxury-text mb-8 text-center">{category.title}</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className="bg-card rounded-xl shadow-luxury border border-primary/10 overflow-hidden group hover:shadow-gold transition-all duration-500 hover:-translate-y-2"
                >
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
                        <span className="ml-1 rounded-full bg-gradient-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-gold">Signature</span>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-foreground/70 min-h-10 leading-relaxed mb-6">
                      {item.description || "Delicious and flavourful."}
                    </p>
                    <div className="mt-4">
                      <a href="#contact"><Button variant="luxury" size="sm" className="w-full hover-glow font-semibold uppercase tracking-wider">Order Now</Button></a>
                    </div>
                  </CardContent>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-16 text-center">
        <a href="#contact"><Button variant="outline" size="lg" className="hover-glow uppercase tracking-wider font-semibold px-8 py-4">View Full Menu</Button></a>
      </div>
    </Section>
  );
};
