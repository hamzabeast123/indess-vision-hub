import { Link } from "react-router-dom";
import { ArrowRight, Shield, Award, Globe, Zap, Wrench, Factory, Ship, Plane, Fuel } from "lucide-react";
import Layout from "@/components/layout/Layout";
import hero from "@/assets/hero-platform.jpg";
import oilgas from "@/assets/industry-oilgas.jpg";
import petro from "@/assets/industry-petrochemical.jpg";
import power from "@/assets/industry-power.jpg";
import ship from "@/assets/industry-shipping.jpg";
import aviation from "@/assets/industry-aviation.jpg";

const industries = [
  { icon: Fuel, title: "Oil & Gas", img: oilgas, desc: "Drilling, production & exploration equipment." },
  { icon: Factory, title: "Petrochemical", img: petro, desc: "Refining, processing & chemical handling." },
  { icon: Zap, title: "Power Generation", img: power, desc: "Turbines, distribution & control systems." },
  { icon: Ship, title: "Ship Building", img: ship, desc: "Marine-grade components & systems." },
  { icon: Plane, title: "Aviation", img: aviation, desc: "Engine, avionics & ground support." },
];

const clients = [
  "Al Hayyat", "NMDC", "Micoda", "G42", "NPCC", "DEWA", "Borouge",
  "Abu Dhabi Ports", "EWEC", "GMS", "Oman Drydock", "DP World", "Fertiglobe",
];

const Index = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden">
        <img
          src={hero}
          alt="Offshore oil and gas platform at golden hour"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-deep/95 via-brand-deep/80 to-brand-deep/40" />
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="container relative z-10 pt-24">
          <div className="max-w-3xl text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-glow mb-6 animate-fade-up">
              Industrial Energy Supply Solutions
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6 text-balance animate-fade-up" style={{ animationDelay: "0.05s" }}>
              Powering industry with <span className="bg-gradient-to-r from-brand-glow to-white bg-clip-text text-transparent">precision-engineered</span> solutions.
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Welcome to INDESS — your gateway to top-quality oil &amp; gas supply equipment.
              We deliver unparalleled solutions to meet every operational need.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.15s" }}>
              <Link to="/products" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md gradient-brand text-white font-semibold shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5">
                Explore Products <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md border border-white/30 backdrop-blur-md bg-white/5 text-white font-semibold hover:bg-white/10 transition-all">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>

        {/* Stat strip */}
        <div className="absolute bottom-0 inset-x-0 z-10 border-t border-white/10 bg-black/30 backdrop-blur-md">
          <div className="container grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              ["20+", "Industry Years"],
              ["500+", "Products Supplied"],
              ["50+", "Trusted Brands"],
              ["13+", "Marquee Clients"],
            ].map(([n, l]) => (
              <div key={l} className="py-6 px-4 text-center">
                <div className="text-3xl md:text-4xl font-bold font-display text-white">{n}</div>
                <div className="text-xs uppercase tracking-wider text-white/60 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WELCOME / ABOUT */}
      <section className="py-24 bg-background">
        <div className="container grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand mb-4">Welcome to INDESS</p>
            <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight">
              A trusted partner in the <span className="text-brand">oil &amp; gas</span> industry.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-muted-foreground leading-relaxed text-[15px]">
            <p>
              We are delighted to have you visit INDESS — your gateway to a world of top-quality
              oil and gas supply equipment. As an established company in the industry, we strive
              to provide unparalleled solutions to meet your every need.
            </p>
            <p>
              At INDESS, we understand the critical role reliable equipment plays in the oil and
              gas sector. We dedicate ourselves to sourcing only the finest products — meticulously
              chosen for exceptional performance, durability, and efficiency.
            </p>
            <Link to="/brands" className="inline-flex items-center gap-2 text-brand font-semibold hover:gap-3 transition-all">
              Discover our brand portfolio <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="py-20 gradient-subtle border-y border-border">
        <div className="container grid md:grid-cols-3 gap-6">
          {[
            { icon: Shield, title: "Quality Assured", text: "Every product hand-picked from world-renowned manufacturers and certified suppliers." },
            { icon: Award, title: "Industry Expertise", text: "Two decades of experience supporting upstream, midstream and downstream operations." },
            { icon: Globe, title: "Global Sourcing", text: "Worldwide network ensuring competitive pricing and rapid lead times across the GCC." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-card rounded-xl p-8 shadow-card-soft border border-border hover:shadow-elegant hover:-translate-y-1 transition-all duration-500">
              <div className="w-12 h-12 rounded-lg gradient-brand flex items-center justify-center text-white mb-5">
                <Icon size={22} />
              </div>
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand mb-3">Industries we serve</p>
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Engineered for mission-critical sectors.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map(({ icon: Icon, title, img, desc }) => (
              <div key={title} className="group relative overflow-hidden rounded-xl aspect-[4/5] shadow-card-soft">
                <img src={img} alt={title} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" width={1280} height={800} />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/40 to-transparent" />
                <div className="absolute inset-0 p-7 flex flex-col justify-end text-white">
                  <div className="w-11 h-11 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{title}</h3>
                  <p className="text-sm text-white/75">{desc}</p>
                </div>
              </div>
            ))}
            <Link to="/products" className="group relative overflow-hidden rounded-xl aspect-[4/5] gradient-brand shadow-elegant flex items-center justify-center p-8 text-white">
              <div className="text-center">
                <Wrench size={32} className="mx-auto mb-4 opacity-90" />
                <h3 className="text-2xl font-bold mb-3">Explore the full catalog</h3>
                <p className="text-sm text-white/80 mb-5">Mechanical, electrical, valves, instrumentation &amp; more.</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold border-b border-white/40 pb-0.5 group-hover:gap-3 transition-all">
                  View Products <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CLIENTS MARQUEE */}
      <section className="py-16 gradient-deep text-white overflow-hidden">
        <div className="container mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-glow mb-3">Trusted by</p>
          <h2 className="text-3xl md:text-4xl font-bold">Leading enterprises across the region.</h2>
        </div>
        <div className="relative">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[...clients, ...clients].map((c, i) => (
              <div key={i} className="text-2xl md:text-3xl font-display font-semibold text-white/40 hover:text-white transition-colors">
                {c}
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[hsl(215_75%_8%)] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[hsl(215_75%_8%)] to-transparent" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="relative overflow-hidden rounded-2xl gradient-hero p-12 md:p-16 text-white shadow-elegant">
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-brand-glow/30 blur-3xl" />
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-5 text-balance">Ready to power your next project?</h2>
              <p className="text-white/80 text-lg mb-8">Get in touch with our specialists for a tailored quotation.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-white text-brand-deep font-semibold hover:shadow-glow transition-all hover:-translate-y-0.5">
                Talk to Sales <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;