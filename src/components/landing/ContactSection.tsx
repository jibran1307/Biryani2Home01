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
      <div className="grid md:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} required placeholder="Your name" className="w-full rounded-md border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="you@example.com" className="w-full rounded-md border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="block text-sm mb-1">Phone</label>
              <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Your phone" className="w-full rounded-md border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-ring" />
            </div>
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} required rows={5} placeholder="Tell us what you'd like to order or ask..." className="w-full rounded-md border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <div className="flex gap-3">
            <Button type="submit" variant="hero">Send Message</Button>
            <a href="mailto:biryani2h@gmail.com" aria-label="Email us"><Button variant="outline"><Mail className="mr-2" /> Email</Button></a>
          </div>
        </form>
        <aside className="space-y-4">
          <div className="rounded-lg border p-6 bg-accent">
            <h4 className="font-display text-xl">Get in touch</h4>
            <p className="mt-2 text-muted-foreground">We typically respond within minutes during working hours.</p>
            <div className="mt-4 space-y-2">
              <a href="mailto:biryani2h@gmail.com" className="flex items-center gap-2 story-link"><Mail /> biryani2h@gmail.com</a>
              <div className="flex items-center gap-2 text-muted-foreground"><Phone /> Phone: —</div>
              <a href="#" className="flex items-center gap-2 story-link"><MessageSquare /> WhatsApp: —</a>
            </div>
          </div>
        </aside>
      </div>
    </Section>
  );
};
