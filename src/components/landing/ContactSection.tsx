import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Mail, Phone, MessageSquare } from "lucide-react";

export const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New inquiry from ${name || "Customer"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`);
    window.location.href = `mailto:biryani2h@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <Section id="contact" title="Contact Us" subtitle="Have a question or want to place an order? Send us a message.">
      <div className="grid md:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div>
            <h3 className="font-display text-3xl font-bold mb-6 luxury-text">Get in Touch</h3>
            <p className="text-foreground/80 leading-relaxed text-lg">
              Ready to experience authentic biryani? We'd love to hear from you. 
              Send us a message and we'll get back to you as soon as possible.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center shadow-gold">
                <Phone className="text-primary-foreground h-6 w-6" />
              </div>
              <div>
                <p className="font-bold text-foreground text-lg">Call Us</p>
                <a href="tel:+919677629622" className="text-primary hover:text-primary/80 transition-colors text-lg font-medium">+91 9677629622</a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center shadow-gold">
                <Mail className="text-primary-foreground h-6 w-6" />
              </div>
              <div>
                <p className="font-bold text-foreground text-lg">Email Us</p>
                <a href="mailto:biryani2h@gmail.com" className="text-primary hover:text-primary/80 transition-colors text-lg font-medium">biryani2h@gmail.com</a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center shadow-gold">
                <MessageSquare className="text-primary-foreground h-6 w-6" />
              </div>
              <div>
                <p className="font-bold text-foreground text-lg">WhatsApp</p>
                <a href="https://wa.me/919677629622" className="text-primary hover:text-primary/80 transition-colors text-lg font-medium">Chat with us</a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card p-8 rounded-xl shadow-luxury border border-primary/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-foreground font-semibold mb-2">Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} required placeholder="Your name" className="w-full rounded-md border border-primary/20 bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors" />
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-foreground font-semibold mb-2">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="you@example.com" className="w-full rounded-md border border-primary/20 bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="block text-foreground font-semibold mb-2">Phone</label>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 12345 67890" className="w-full rounded-md border border-primary/20 bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors" />
              </div>
            </div>
            <div>
              <label className="block text-foreground font-semibold mb-2">Message</label>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} required rows={5} placeholder="Tell us what you'd like to order or ask..." className="w-full rounded-md border border-primary/20 bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none" />
            </div>
            <Button type="submit" variant="luxury" size="lg" className="w-full hover-glow font-semibold uppercase tracking-wider">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
};
