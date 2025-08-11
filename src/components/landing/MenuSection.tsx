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
    <Section id="menu" title="Menu" subtitle="Biryani, non-veg curries, and sides—freshly prepared and delivered hot.">
      <div className="grid gap-8">
        {menu.map((category) => (
          <div key={category.title}>
            <h3 className="font-display text-2xl mb-4">{category.title}</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {category.items.map((item) => (
                <Card key={item.name} className="overflow-hidden group">
                  {item.image && (
                    <img src={item.image} alt={`${item.name} dish`} className="h-44 w-full object-cover group-hover:scale-[1.03] transition-transform" loading="lazy" />
                  )}
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      {item.name}
                      {item.signature && (
                        <span className="ml-1 rounded-full bg-accent px-2 py-0.5 text-xs text-accent-foreground">Signature</span>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground min-h-10">
                      {item.description || "Delicious and flavourful."}
                    </p>
                    <div className="mt-4">
                      <a href="#contact"><Button variant="soft" size="sm">Order via WhatsApp</Button></a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <a href="#contact"><Button variant="hero" size="lg">See Full Menu</Button></a>
      </div>
    </Section>
  );
};
