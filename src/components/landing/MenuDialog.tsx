import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import muttonBiryani from "@/assets/biryani/mutton-biryani.jpg";
import chickenBiryani from "@/assets/biryani/chicken-biryani.jpg";
import prawnBiryani from "@/assets/biryani/prawn-biryani.jpg";
import chicken65 from "@/assets/biryani/chicken-65.jpg";
import butterChicken from "@/assets/biryani/butter-chicken.jpg";
import fishFry from "@/assets/biryani/fish-fry.jpg";

interface MenuItem { name: string; description?: string; image?: string; signature?: boolean; price?: string; }
interface MenuCategory { title: string; items: MenuItem[] }

const fullMenu: MenuCategory[] = [
  {
    title: "Biryani Specialties",
    items: [
      { name: "Mutton Biryani", description: "Tender mutton pieces cooked with aromatic basmati rice and traditional spices.", image: muttonBiryani, signature: true },
      { name: "Chicken Biryani", description: "Succulent chicken with fragrant rice, slow-cooked to perfection.", image: chickenBiryani },
      { name: "Prawn Biryani", description: "Fresh prawns marinated in spices with aromatic basmati rice.", image: prawnBiryani },
      { name: "Kheema Biryani", description: "Minced mutton cooked with basmati rice and exotic spices.", image: muttonBiryani },
      { name: "Fish Biryani", description: "Fresh fish fillets with fragrant rice and coastal spices.", image: fishFry },
      { name: "Egg Biryani", description: "Boiled eggs with aromatic rice and traditional biryani spices.", image: chickenBiryani },
    ],
  },
  {
    title: "Non-Veg Curries",
    items: [
      { name: "Bismal Curry", description: "Rich and flavorful traditional curry with tender meat pieces.", image: butterChicken},
      { name: "Mutton Kurma", description: "Creamy coconut-based curry with tender mutton pieces.", image: butterChicken},
      { name: "Chicken Kurma", description: "Mild and aromatic chicken curry with coconut milk.", image: butterChicken },
      { name: "Fish Curry", description: "Coastal style fish curry with coconut and curry leaves.", image: fishFry },
      { name: "Attukaal Paaya", description: "Traditional goat trotters curry, slow-cooked for hours.", image: butterChicken },
    ],
  },
  {
    title: "Starters & Sides",
    items: [
      { name: "Chicken 65", description: "Spicy and crispy chicken pieces, a South Indian favorite.", image: chicken65 },
      { name: "Pepper Chicken", description: "Juicy chicken pieces tossed in black pepper and spices.", image: chicken65 },
      { name: "Chicken Gravy", description: "Rich and spicy chicken curry perfect with rice or bread.", image: butterChicken},
      { name: "Butter Chicken", description: "Creamy tomato-based chicken curry with butter and cream.", image: butterChicken },
      { name: "Chicken Lollipop", description: "Drumstick chicken wings marinated and fried to perfection.", image: chicken65},
      { name: "Mutton Pepper Gravy", description: "Spicy mutton curry with freshly ground black pepper.", image: butterChicken},
      { name: "Mutton Sukka", description: "Dry mutton preparation with coconut and spices.", image: muttonBiryani },
      { name: "Mutton Meat Balls", description: "Tender mutton balls in rich gravy.", image: muttonBiryani},
      { name: "Mutton Brain Fry", description: "Delicately spiced and fried mutton brain.", image: muttonBiryani },
      { name: "Mutton Pepper Liver Fry", description: "Spicy liver fry with onions and pepper.", image: muttonBiryani },
      { name: "Prawn Masala", description: "Juicy prawns cooked in spicy masala gravy.", image: prawnBiryani},
      { name: "Fish Fry", description: "Crispy fried fish marinated in coastal spices.", image: fishFry},
      { name: "Crab Gravy", description: "Fresh crab cooked in rich coconut curry.", image: fishFry},
      { name: "Masala Egg Fry", description: "Boiled eggs in spicy masala gravy.", image: chicken65 },
    ],
  },
];

export const MenuDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="lg" className="hover-glow uppercase tracking-wider font-semibold px-8 py-4">
          View Full Menu
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="font-display text-3xl font-bold luxury-text">
            Complete Menu
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] px-6 pb-6">
          <div className="space-y-8">
            {fullMenu.map((category) => (
              <div key={category.title}>
                <h3 className="font-display text-2xl font-bold luxury-text mb-6">{category.title}</h3>
                <div className="grid gap-4">
                  {category.items.map((item) => (
                    <Card key={item.name} className="overflow-hidden hover:shadow-orange transition-all duration-300">
                      <div className="flex">
                        {item.image && (
                          <div className="w-24 h-24 flex-shrink-0">
                            <img
                              src={item.image}
                              alt={`${item.name} dish`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        )}
                        <div className="flex-1 p-4">
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center gap-2">
                              <h4 className="font-semibold text-lg text-foreground">{item.name}</h4>
                              {item.signature && (
                                <span className="bg-gradient-primary text-primary-foreground px-2 py-1 text-xs font-semibold rounded-full">
                                  Signature
                                </span>
                              )}
                            </div>
                            {item.price && (
                              <span className="font-bold text-primary text-lg">{item.price}</span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {item.description || "Delicious and flavourful."}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};