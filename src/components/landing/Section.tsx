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
          <header className="mb-8 md:mb-12 text-center">
            <h2 id={`${id}-title`} className="font-display text-3xl md:text-4xl font-bold tracking-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
};
