import { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

const PageHero = ({ eyebrow, title, subtitle, children }: Props) => {
  return (
    <section className="relative gradient-hero text-white pt-40 pb-24 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-brand-glow/30 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-brand/30 blur-3xl" />
      <div className="container relative z-10 max-w-4xl">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-glow mb-4 animate-fade-up">
            {eyebrow}
          </p>
        )}
        <h1 className="text-5xl md:text-6xl font-bold text-balance mb-6 animate-fade-up" style={{ animationDelay: "0.05s" }}>
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/75 leading-relaxed max-w-3xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};

export default PageHero;