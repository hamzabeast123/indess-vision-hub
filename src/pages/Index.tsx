import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import Layout from "@/components/layout/Layout";
import hero from "@/assets/cin-hero.jpg";
import imgMechanical from "@/assets/cin-mechanical.jpg";
import imgElectrical from "@/assets/cin-electrical.jpg";
import imgInstrumentation from "@/assets/cin-instrumentation.jpg";
import imgLogistics from "@/assets/cin-logistics.jpg";
import imgChemicals from "@/assets/cin-chemicals.jpg";
import imgProcess from "@/assets/cin-process.jpg";
import imgManufacturing from "@/assets/cin-manufacturing.jpg";
import imgCEO from "@/assets/cin-ceo.jpg";
import imgOilgas from "@/assets/industry-oilgas.jpg";
import imgPetro from "@/assets/industry-petrochemical.jpg";
import imgPower from "@/assets/industry-power.jpg";
import imgShip from "@/assets/industry-shipping.jpg";
import imgAviation from "@/assets/industry-aviation.jpg";

// ───────────────────────── Reusable editorial atoms ─────────────────────────
const SectionLabel = ({ n, label }: { n: string; label: string }) => (
  <div className="flex items-center gap-4 mb-8">
    <span className="text-[11px] tracking-editorial uppercase text-gold font-medium">{n}</span>
    <span className="h-px w-10 rule-gold" />
    <span className="text-[11px] tracking-editorial uppercase text-foreground/60">{label}</span>
  </div>
);

const DisplayH = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <h2 className={`font-display-light text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-foreground tracking-tight ${className}`}>
    {children}
  </h2>
);

// ───────────────────────── Data ─────────────────────────
const industries = [
  { n: "01", title: "Oil & Gas", img: imgOilgas, copy: "Upstream, midstream and downstream operations across the GCC." },
  { n: "02", title: "Petrochemical", img: imgPetro, copy: "Refining, processing and chemical handling infrastructure." },
  { n: "03", title: "Power Generation", img: imgPower, copy: "Generation, transmission and distribution networks." },
  { n: "04", title: "Ship Building", img: imgShip, copy: "Marine-grade systems for shipyards and offshore vessels." },
  { n: "05", title: "Aviation", img: imgAviation, copy: "Engine, avionics and ground support equipment." },
  { n: "06", title: "Manufacturing", img: imgManufacturing, copy: "Heavy industrial assembly and process automation." },
];

const services = [
  { n: "S/01", title: "Strategic Sourcing", copy: "Direct partnerships with tier-one OEMs deliver authentic equipment under transparent commercial terms." },
  { n: "S/02", title: "Technical Advisory", copy: "Engineering-led specification, BOM optimization and lifecycle planning for mission-critical systems." },
  { n: "S/03", title: "Logistics & Delivery", copy: "End-to-end freight, customs and on-site delivery across the GCC, MENA and beyond." },
  { n: "S/04", title: "After-Sales Support", copy: "Spares continuity, warranty handling and field-service coordination over the asset lifecycle." },
];

const products = [
  { n: "P/01", title: "Mechanical Equipment", img: imgMechanical, copy: "Pumps, valves, compressors, flanges, fittings and precision-engineered piping systems for high-pressure service.", items: ["Centrifugal & Positive Displacement Pumps", "Ball, Gate, Globe & Check Valves", "Compressors & Heat Exchangers", "Flanges, Fittings & Gaskets"] },
  { n: "P/02", title: "Electrical Systems", img: imgElectrical, copy: "Switchgear, transformers, motors, drives and complete LV/MV electrical distribution infrastructure.", items: ["LV/MV Switchgear & Panels", "Transformers & Reactors", "Motors, Drives & Soft Starters", "Cables, Terminations & Accessories"] },
  { n: "P/03", title: "Instrumentation & Control", img: imgInstrumentation, copy: "Field instruments, control systems and process automation for plant-wide visibility and safety.", items: ["Pressure, Flow & Level Transmitters", "PLC, DCS & SCADA Systems", "Control Valves & Actuators", "Safety & Fire-Gas Detection"] },
  { n: "P/04", title: "Process Equipment", img: imgProcess, copy: "Heat exchangers, separators, vessels and skid-mounted process packages built to specification.", items: ["Pressure Vessels & Separators", "Heat Exchangers & Coolers", "Filtration & Treatment Skids", "Custom-Engineered Packages"] },
  { n: "P/05", title: "Industrial Chemicals", img: imgChemicals, copy: "Lubricants, treatment chemicals and specialty fluids supporting refineries, pipelines and offshore operations.", items: ["Industrial Lubricants & Greases", "Drilling & Completion Fluids", "Corrosion & Scale Inhibitors", "Cleaning & Treatment Chemicals"] },
  { n: "P/06", title: "Logistics & Spares", img: imgLogistics, copy: "Inventory programs, expedited spares and integrated freight to keep operations continuously online.", items: ["OEM Genuine Spare Parts", "Vendor-Managed Inventory", "Expedited Air & Sea Freight", "Project Cargo Coordination"] },
];

const brands = ["GE", "Mitsubishi", "Schneider", "Honeywell", "Omron", "ABB", "Fanuc", "Eaton", "Bosch", "Lenze", "Banner", "Siemens"];
const partners = [
  { name: "TriOS", role: "Water & Process Sensing — Germany" },
  { name: "Hanyoung", role: "Industrial Valves — South Korea" },
  { name: "Himile", role: "Engineering Solutions — China" },
];
const clients = ["NMDC", "ADNOC", "Borouge", "NPCC", "DEWA", "EWEC", "G42", "DP World", "Fertiglobe", "Abu Dhabi Ports", "Oman Drydock", "GMS"];

// ───────────────────────── Page ─────────────────────────
const Index = () => {
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Inquiry received. Our team will respond within one business day.");
    setForm({ name: "", company: "", email: "", message: "" });
  };

  return (
    <Layout>
      <div id="top" />

      {/* ═══════════ 01 · COVER ═══════════ */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <img src={hero} alt="Offshore platform at blue hour" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210_100%_8%)] via-[hsl(210_100%_8%)]/55 to-[hsl(210_100%_8%)]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(207_100%_20%)]/40 to-transparent" />

        {/* top editorial bar */}
        <div className="absolute top-24 inset-x-0 z-10">
          <div className="container flex items-center justify-between text-white/70 text-[10px] tracking-editorial uppercase">
            <span>Company Profile · MMXXV</span>
            <span className="hidden md:inline">Abu Dhabi · United Arab Emirates</span>
          </div>
        </div>

        <div className="container relative z-10 pb-24 md:pb-32">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 text-white">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[11px] tracking-editorial uppercase text-gold">Volume I</span>
                <span className="h-px w-12 rule-gold" />
                <span className="text-[11px] tracking-editorial uppercase text-white/60">Industrial Energy Supply</span>
              </div>
              <h1 className="font-display-light text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.95] text-white tracking-tight mb-8">
                Engineering<br />
                the foundations of<br />
                <span className="italic font-light text-gold">industry.</span>
              </h1>
              <p className="text-base md:text-lg text-white/75 max-w-xl font-light leading-relaxed">
                INDESS is a precision supplier of mission-critical equipment to the oil &amp; gas, petrochemical, power and marine sectors — sourced globally, delivered locally.
              </p>
            </div>
            <div className="lg:col-span-4 lg:pl-12 lg:border-l lg:border-white/15 text-white/80 text-[12px] leading-relaxed font-light tracking-wide">
              <p className="text-[10px] tracking-editorial uppercase text-gold mb-3">A Note</p>
              <p>This document presents an overview of INDESS — our industries, services, product portfolio and the partners with whom we engineer trust.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ 02 · COMPANY ═══════════ */}
      <section id="company" className="py-32 lg:py-40 bg-white">
        <div className="container">
          <SectionLabel n="01" label="The Company" />
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <DisplayH>
                A trusted partner for the world&rsquo;s most demanding industries.
              </DisplayH>
            </div>
            <div className="lg:col-span-5 lg:pt-6 space-y-6 text-[15px] text-muted-foreground leading-[1.8] font-light">
              <p>
                As an established supplier in the energy sector, INDESS delivers top-quality equipment sourced from globally renowned manufacturers — meticulously chosen for performance, durability and efficiency.
              </p>
              <p>
                Our team of experienced engineers and supply professionals understands the critical role reliable equipment plays in upstream, midstream and downstream operations.
              </p>
            </div>
          </div>

          {/* Stat strip */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 border-t border-border">
            {[
              ["20+", "Years in industry"],
              ["500+", "Products supplied"],
              ["50+", "Trusted brands"],
              ["13+", "Marquee clients"],
            ].map(([n, l], i) => (
              <div key={i} className={`py-10 ${i > 0 ? "md:border-l" : ""} ${i % 2 === 1 ? "border-l md:border-l" : ""} border-border`}>
                <div className="font-display-light text-5xl md:text-6xl text-brand mb-2">{n}</div>
                <div className="text-[10px] tracking-editorial uppercase text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 03 · CEO LETTER (editorial spread) ═══════════ */}
      <section className="bg-brand-soft">
        <div className="container py-32 lg:py-40">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="aspect-[4/5] overflow-hidden bg-foreground/5">
                <img src={imgCEO} alt="CEO portrait" loading="lazy" className="w-full h-full object-cover grayscale" width={1080} height={1350} />
              </div>
              <div className="mt-6">
                <p className="text-[10px] tracking-editorial uppercase text-gold">The Chief Executive</p>
                <p className="font-display-light text-2xl mt-2">A message from the CEO</p>
              </div>
            </div>
            <div className="lg:col-span-7 lg:pl-12">
              <SectionLabel n="02" label="Foreword" />
              <p className="font-display-light text-3xl md:text-4xl leading-[1.25] text-foreground mb-8">
                &ldquo;At INDESS we believe quality is not a feature — it is the foundation upon which every reliable operation is built.&rdquo;
              </p>
              <div className="space-y-5 text-[15px] text-muted-foreground leading-[1.8] font-light">
                <p>
                  We are delighted to welcome you to INDESS — your gateway to top-quality oil &amp; gas supply equipment. Our commitment is simple: source globally, engineer trust locally, and stand behind every shipment we deliver.
                </p>
                <p>
                  With a network of trusted manufacturers and a deeply experienced technical team, we propel our clients&rsquo; operations to new heights with cutting-edge equipment and unrivalled expertise.
                </p>
              </div>
              <div className="mt-10 pt-6 border-t border-border">
                <p className="font-display-light text-xl">CEO, INDESS</p>
                <p className="text-[11px] tracking-editorial uppercase text-muted-foreground mt-1">Industrial Energy Supply Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ 04 · INDUSTRIES ═══════════ */}
      <section id="industries" className="py-32 lg:py-40 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-5">
              <SectionLabel n="03" label="Industries" />
              <DisplayH>Built for mission-critical sectors.</DisplayH>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:pt-8">
              <p className="text-[15px] text-muted-foreground leading-[1.8] font-light">
                Our portfolio supports six core industries where reliability, safety and uptime are non-negotiable. Each engagement is engineered to the standards of the sector it serves.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {industries.map((i) => (
              <div key={i.title} className="bg-white group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={i.img} alt={i.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" width={1280} height={960} />
                </div>
                <div className="p-8">
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="text-[11px] tracking-editorial uppercase text-gold">{i.n}</span>
                    <span className="h-px flex-1 mx-4 bg-border" />
                    <ArrowUpRight size={16} className="text-foreground/30 group-hover:text-brand transition-colors" />
                  </div>
                  <h3 className="font-display-light text-3xl mb-3">{i.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">{i.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 05 · SERVICES (cinematic split) ═══════════ */}
      <section id="services" className="relative py-32 lg:py-40 bg-[hsl(210_100%_10%)] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img src={imgProcess} alt="" className="w-full h-full object-cover" width={1920} height={1080} loading="lazy" />
        </div>
        <div className="absolute inset-0 bg-[hsl(210_100%_10%)]/80" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[11px] tracking-editorial uppercase text-gold">04</span>
                <span className="h-px w-10 rule-gold" />
                <span className="text-[11px] tracking-editorial uppercase text-white/60">Our Services</span>
              </div>
              <h2 className="font-display-light text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
                A complete supply chain — engineered end to end.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 lg:pt-6">
              <p className="text-[15px] text-white/65 leading-[1.8] font-light">
                From initial specification to after-sales continuity, we operate as a single point of accountability for our clients&rsquo; equipment supply needs.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-white/10">
            {services.map((s) => (
              <div key={s.n} className="bg-[hsl(210_100%_10%)] p-10 lg:p-14">
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="text-[11px] tracking-editorial uppercase text-gold">{s.n}</span>
                  <span className="h-px w-8 rule-gold" />
                </div>
                <h3 className="font-display-light text-3xl md:text-4xl mb-4">{s.title}</h3>
                <p className="text-[14px] text-white/65 leading-[1.8] font-light max-w-md">{s.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 06 · PRODUCTS (one editorial spread per product) ═══════════ */}
      <section id="products" className="py-32 lg:py-40 bg-white">
        <div className="container mb-24">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6">
              <SectionLabel n="05" label="Products" />
              <DisplayH>An engineered catalog, sourced with discipline.</DisplayH>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 lg:pt-8">
              <p className="text-[15px] text-muted-foreground leading-[1.8] font-light">
                Six product domains, hundreds of specifications, one standard of quality. Each category is supported by tier-one OEMs and certified to international codes.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-32 lg:space-y-40">
          {products.map((p, i) => {
            const reverse = i % 2 === 1;
            return (
              <div key={p.n} className="container">
                <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className="lg:col-span-7">
                    <div className="relative aspect-[4/3] overflow-hidden bg-foreground/5">
                      <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover" width={1600} height={1200} />
                      <div className="absolute inset-0 bg-brand/5 mix-blend-multiply" />
                      <div className="absolute top-6 left-6 bg-white px-4 py-2">
                        <span className="text-[10px] tracking-editorial uppercase text-gold">{p.n}</span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-[11px] tracking-editorial uppercase text-gold">Product</span>
                      <span className="h-px w-10 rule-gold" />
                    </div>
                    <h3 className="font-display-light text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-6">{p.title}</h3>
                    <p className="text-[15px] text-muted-foreground leading-[1.8] font-light mb-8">{p.copy}</p>
                    <ul className="border-t border-border">
                      {p.items.map((it) => (
                        <li key={it} className="flex items-center justify-between py-4 border-b border-border text-[13px] text-foreground/80 font-light">
                          <span>{it}</span>
                          <span className="h-px w-8 bg-gold" />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══════════ 07 · BRANDS ═══════════ */}
      <section id="brands" className="py-32 lg:py-40 bg-brand-soft">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-6">
              <SectionLabel n="06" label="Brands" />
              <DisplayH>The world&rsquo;s most trusted manufacturers — under one roof.</DisplayH>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 lg:pt-8">
              <p className="text-[15px] text-muted-foreground leading-[1.8] font-light">
                We represent and supply equipment from a curated portfolio of global OEMs, selected for engineering excellence and proven field reliability.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-t border-l border-border bg-white">
            {brands.map((b, i) => (
              <div key={b} className="border-r border-b border-border aspect-[3/2] flex items-center justify-center group hover:bg-brand-soft transition-colors">
                <div className="text-center">
                  <div className="font-display-light text-2xl md:text-3xl text-foreground/85 group-hover:text-brand transition-colors">{b}</div>
                  <div className="text-[10px] tracking-editorial uppercase text-muted-foreground mt-2">B/{String(i + 1).padStart(2, "0")}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 08 · PARTNERS ═══════════ */}
      <section id="partners" className="py-32 lg:py-40 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-6">
              <SectionLabel n="07" label="Partners" />
              <DisplayH>Engineered alliances with global specialists.</DisplayH>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {partners.map((p, i) => (
              <div key={p.name} className="bg-white p-10 lg:p-14">
                <span className="text-[11px] tracking-editorial uppercase text-gold">PT/{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display-light text-4xl md:text-5xl mt-6 mb-4">{p.name}</h3>
                <div className="h-px w-12 rule-gold mb-4" />
                <p className="text-sm text-muted-foreground font-light">{p.role}</p>
              </div>
            ))}
          </div>

          {/* Clients sub-section */}
          <div className="mt-24 pt-16 border-t border-border">
            <p className="text-[10px] tracking-editorial uppercase text-gold mb-8">Selected Clients</p>
            <div className="flex flex-wrap gap-x-10 gap-y-5">
              {clients.map((c) => (
                <span key={c} className="font-display-light text-2xl md:text-3xl text-foreground/55 hover:text-brand transition-colors">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ 09 · CONTACT ═══════════ */}
      <section id="contact" className="relative py-32 lg:py-40 bg-[hsl(210_100%_8%)] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
          <img src={imgLogistics} alt="" className="w-full h-full object-cover" width={1600} height={1200} loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(210_100%_8%)] via-[hsl(210_100%_8%)]/70 to-transparent" />
        </div>
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[11px] tracking-editorial uppercase text-gold">08</span>
                <span className="h-px w-10 rule-gold" />
                <span className="text-[11px] tracking-editorial uppercase text-white/60">Contact</span>
              </div>
              <h2 className="font-display-light text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight mb-10">
                Begin a<br />conversation.
              </h2>
              <p className="text-[15px] text-white/65 leading-[1.8] font-light max-w-lg mb-12">
                Reach our team for a tailored quotation, technical consultation or to request our complete product catalog.
              </p>

              <div className="space-y-6 text-sm">
                <div className="flex gap-5 items-start">
                  <MapPin size={18} className="text-gold mt-1" />
                  <div>
                    <p className="text-[10px] tracking-editorial uppercase text-white/50 mb-1">Office</p>
                    <p className="text-white/85 font-light leading-relaxed">Ahmed Sultan Yousuf Building, Sector M-09<br />Mussafah Industrial Area, P.O. Box 9101<br />Abu Dhabi, United Arab Emirates</p>
                  </div>
                </div>
                <div className="flex gap-5 items-start">
                  <Mail size={18} className="text-gold mt-1" />
                  <div>
                    <p className="text-[10px] tracking-editorial uppercase text-white/50 mb-1">Email</p>
                    <a href="mailto:sales@indessuae.com" className="text-white/85 hover:text-gold font-light">sales@indessuae.com</a>
                  </div>
                </div>
                <div className="flex gap-5 items-start">
                  <Phone size={18} className="text-gold mt-1" />
                  <div>
                    <p className="text-[10px] tracking-editorial uppercase text-white/50 mb-1">Telephone</p>
                    <p className="text-white/85 font-light">+971 2 671 1663 · +971 58 5454 064</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 lg:pl-12">
              <form onSubmit={submit} className="space-y-8">
                {[
                  { k: "name", label: "Full Name", type: "text" },
                  { k: "company", label: "Company", type: "text" },
                  { k: "email", label: "Email Address", type: "email" },
                ].map((f) => (
                  <div key={f.k}>
                    <label className="block text-[10px] tracking-editorial uppercase text-white/50 mb-3">{f.label}</label>
                    <input
                      required
                      type={f.type}
                      value={(form as any)[f.k]}
                      onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
                      className="w-full bg-transparent border-b border-white/25 py-3 text-white font-light focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-[10px] tracking-editorial uppercase text-white/50 mb-3">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-transparent border-b border-white/25 py-3 text-white font-light focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="group inline-flex items-center gap-3 text-[11px] tracking-editorial uppercase font-medium text-foreground bg-gold px-8 py-4 hover:bg-white transition-colors">
                  Submit Inquiry
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
