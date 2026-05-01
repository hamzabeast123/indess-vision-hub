import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/indess-logo.png";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Company" },
  { to: "/brands", label: "Brands" },
  { to: "/products", label: "Products" },
  { to: "/partners", label: "Partners" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-card-soft"
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="INDESS — Industrial Energy Supply Solutions"
            className="h-9 w-auto"
            width={180}
            height={40}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-colors relative",
                  isActive
                    ? "text-brand"
                    : scrolled
                    ? "text-foreground/75 hover:text-brand"
                    : "text-white/85 hover:text-white"
                )
              }
            >
              {item.label.toUpperCase()}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-md gradient-brand text-white shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5"
        >
          Get a Quote
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "lg:hidden p-2 rounded-md",
            scrolled ? "text-foreground" : "text-white"
          )}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <nav className="container py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-3 text-sm font-medium rounded-md",
                    isActive
                      ? "bg-accent text-brand"
                      : "text-foreground/80 hover:bg-muted"
                  )
                }
              >
                {item.label.toUpperCase()}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;