import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import hero from "@/assets/cin-hero.jpg";
import imgOilgas from "@/assets/industry-oilgas.jpg";
import imgPower from "@/assets/industry-power.jpg";
import imgShip from "@/assets/industry-shipping.jpg";
import imgPetro from "@/assets/industry-petrochemical.jpg";

type Slide = {
  eyebrow: string;
  volume: string;
  title: React.ReactNode;
  copy: string;
  image: string;
  cta: { label: string; to: string };
};

const SLIDES: Slide[] = [
  {
    eyebrow: "Industrial Energy Supply",
    volume: "Chapter I",
    title: (
      <>
        Engineering<br />the foundations of<br />
        <span className="italic font-light text-gold">industry.</span>
      </>
    ),
    copy: "INDESS is a precision supplier of mission-critical equipment to the oil & gas, petrochemical, power and marine sectors — sourced globally, delivered locally.",
    image: hero,
    cta: { label: "Discover INDESS", to: "/company" },
  },
  {
    eyebrow: "Mission-Critical Sectors",
    volume: "Chapter II",
    title: (
      <>
        Where uptime<br />is not<br />
        <span className="italic font-light text-gold">a feature.</span>
      </>
    ),
    copy: "From upstream rigs to downstream refineries, our equipment keeps the world's most demanding operations running — safely, reliably, continuously.",
    image: imgOilgas,
    cta: { label: "Explore Industries", to: "/#industries" },
  },
  {
    eyebrow: "Engineered Trust",
    volume: "Chapter III",
    title: (
      <>
        Tier-one OEMs.<br />
        <span className="italic font-light text-gold">Zero compromise.</span>
      </>
    ),
    copy: "Direct partnerships with the world's leading manufacturers — Siemens, ABB, Schneider, Honeywell — under transparent terms and engineering-led specification.",
    image: imgPetro,
    cta: { label: "Meet Our Partners", to: "/partners" },
  },
  {
    eyebrow: "Marine & Offshore",
    volume: "Chapter IV",
    title: (
      <>
        Built for<br />the open<br />
        <span className="italic font-light text-gold">ocean.</span>
      </>
    ),
    copy: "Marine-grade systems for shipyards, VLCCs and offshore platforms — supplied with the spares continuity that keeps every vessel mission-ready.",
    image: imgShip,
    cta: { label: "Browse Catalog", to: "/catalog" },
  },
  {
    eyebrow: "Worldwide Presence",
    volume: "Chapter V",
    title: (
      <>
        From the Gulf<br />to every<br />
        <span className="italic font-light text-gold">horizon.</span>
      </>
    ),
    copy: "Headquartered in Abu Dhabi, operating across 11 countries — UAE, KSA, Oman, Qatar, Kuwait, Bahrain, UK, USA, Estonia, South Korea and Japan.",
    image: imgPower,
    cta: { label: "View Clients", to: "/clients" },
  },
];

const AUTO_MS = 6500;

const HeroCarousel = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const startRef = useRef<number>(performance.now());
  const [progress, setProgress] = useState(0);

  // Auto-advance with progress
  useEffect(() => {
    if (paused) return;
    startRef.current = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - startRef.current) / AUTO_MS);
      setProgress(p);
      if (p >= 1) {
        setActive((a) => (a + 1) % SLIDES.length);
      } else {
        raf = requestAnimationFrame(tick);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, paused]);

  const goTo = (i: number) => {
    setActive(((i % SLIDES.length) + SLIDES.length) % SLIDES.length);
    setProgress(0);
  };

  return (
    <section
      className="relative min-h-screen flex items-end overflow-hidden bg-[hsl(210_100%_8%)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      data-anim-skip-children
    >
      {/* Slide layers */}
      {SLIDES.map((s, i) => {
        const isActive = i === active;
        return (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-[1400ms] ease-out"
            style={{ opacity: isActive ? 1 : 0, zIndex: isActive ? 1 : 0 }}
            aria-hidden={!isActive}
          >
            <img
              src={s.image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                transform: isActive ? "scale(1.08) translate3d(0,0,0)" : "scale(1) translate3d(0,0,0)",
                transition: "transform 8000ms linear",
              }}
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210_100%_8%)] via-[hsl(210_100%_8%)]/60 to-[hsl(210_100%_8%)]/25" />
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(207_100%_15%)]/55 to-transparent" />
          </div>
        );
      })}

      {/* Top editorial bar */}
      <div className="absolute top-24 inset-x-0 z-20">
        <div className="container flex items-center justify-between text-white/70 text-[10px] tracking-editorial uppercase">
          <span>Company Profile · MMXXV</span>
          <span className="hidden md:inline">Abu Dhabi · United Arab Emirates</span>
        </div>
      </div>

      {/* Slide content */}
      <div className="container relative z-10 pb-32 md:pb-40">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-9 text-white">
            {SLIDES.map((s, i) => (
              <div
                key={i}
                className="transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  display: i === active ? "block" : "none",
                }}
              >
                <div
                  className="flex items-center gap-4 mb-8 animate-fade-up"
                  style={{ animationDelay: "120ms" }}
                >
                  <span className="text-[11px] tracking-editorial uppercase text-gold">{s.volume}</span>
                  <span className="h-px w-12 rule-gold" />
                  <span className="text-[11px] tracking-editorial uppercase text-white/65">{s.eyebrow}</span>
                </div>
                <h1
                  className="font-display-light text-[clamp(2.5rem,6.6vw,6rem)] leading-[0.96] text-white tracking-tight mb-8 animate-fade-up"
                  style={{ animationDelay: "260ms" }}
                >
                  {s.title}
                </h1>
                <p
                  className="text-base md:text-lg text-white/80 max-w-xl font-light leading-relaxed mb-10 animate-fade-up"
                  style={{ animationDelay: "440ms" }}
                >
                  {s.copy}
                </p>
                <Link
                  to={s.cta.to}
                  className="inline-flex items-center gap-3 text-[11px] tracking-editorial uppercase text-foreground bg-gold px-7 py-4 hover:bg-white transition-colors animate-fade-up"
                  style={{ animationDelay: "600ms" }}
                >
                  {s.cta.label} <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Controls — bottom editorial bar */}
      <div className="absolute bottom-0 inset-x-0 z-20 border-t border-white/15 bg-gradient-to-t from-[hsl(210_100%_6%)]/85 to-transparent">
        <div className="container py-6 flex items-center gap-8">
          <div className="text-[10px] tracking-editorial uppercase text-white/65 tabular-nums">
            <span className="text-white">{String(active + 1).padStart(2, "0")}</span>
            <span className="mx-2 text-white/40">/</span>
            <span>{String(SLIDES.length).padStart(2, "0")}</span>
          </div>

          <div className="flex-1 flex items-center gap-3">
            {SLIDES.map((_, i) => {
              const isActive = i === active;
              return (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className="group flex-1 h-px relative py-3"
                >
                  <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-white/20 group-hover:bg-white/40 transition-colors" />
                  <span
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-gold transition-[width] duration-150 ease-linear"
                    style={{
                      width: isActive ? `${progress * 100}%` : i < active ? "100%" : "0%",
                    }}
                  />
                </button>
              );
            })}
          </div>

          <div className="hidden md:block text-[10px] tracking-editorial uppercase text-white/55 max-w-[200px] truncate">
            Next · {SLIDES[(active + 1) % SLIDES.length].eyebrow}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;