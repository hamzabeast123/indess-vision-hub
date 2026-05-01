import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/indess-logo.png";
import { cn } from "@/lib/utils";

const SECTIONS = [
  { id: "company", label: "Company" },
  { id: "industries", label: "Industries" },
  { id: "services", label: "Services" },
  { id: "products", label: "Products" },
  { id: "brands", label: "Brands" },
  { id: "partners", label: "Partners" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "bg-white/95 backdrop-blur-xl border-b border-border" : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between h-20">
        <button onClick={() => go("top")} className={cn("flex items-center gap-3", scrolled ? "" : "bg-white/95 px-3 py-1.5 rounded")}>
          <img src={logo} alt="INDESS" className="h-8 w-auto" width={160} height={32} />
        </button>

        <nav className="hidden lg:flex items-center gap-8">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => go(s.id)}
              className={cn(
                "text-[11px] font-medium tracking-wide-2 uppercase transition-colors",
                scrolled ? "text-foreground/70 hover:text-brand" : "text-white/85 hover:text-white"
              )}
            >
              {s.label}
            </button>
          ))}
        </nav>

        <button onClick={() => go("contact")} className="hidden lg:inline-flex items-center text-[11px] font-semibold tracking-wide-2 uppercase text-white bg-brand px-5 py-3 hover:bg-brand-deep transition-colors">
          Get in Touch
        </button>

        <button onClick={() => setOpen((v) => !v)} className={cn("lg:hidden p-2", scrolled ? "text-foreground" : "text-white")} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-border">
          <nav className="container py-4 flex flex-col">
            {SECTIONS.map((s) => (
              <button key={s.id} onClick={() => go(s.id)} className="px-2 py-3 text-left text-sm font-medium tracking-wide-2 uppercase text-foreground/80 hover:text-brand border-b border-border">
                {s.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
