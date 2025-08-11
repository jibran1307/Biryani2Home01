import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export const Section = ({ id, title, subtitle, children, className }: SectionProps) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className || ""}`} aria-labelledby={`${id}-title`}>
      <div className="container mx-auto px-4">
        {title && (
          <header className="mb-12 md:mb-16 text-center">
            <h2 id={`${id}-title`} className="font-display text-4xl md:text-5xl font-bold tracking-tight luxury-text mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-4 text-foreground/70 max-w-3xl mx-auto text-lg leading-relaxed">{subtitle}</p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
};
