import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import Layout from "@/components/layout/Layout";
import Reveal from "@/components/Reveal";
import ParticleGlobe, { GlobePin } from "@/components/ParticleGlobe";
import PartnerLogo from "@/components/PartnerLogo";
import HeroCarousel from "@/components/HeroCarousel";
import imgMechanical from "@/assets/cin-mechanical.jpg";
import imgElectrical from "@/assets/cin-electrical.jpg";
import imgInstrumentation from "@/assets/cin-instrumentation.jpg";
import imgLogistics from "@/assets/cin-logistics.jpg";
import imgChemicals from "@/assets/cin-chemicals.jpg";
import imgProcess from "@/assets/cin-process.jpg";
import imgManufacturing from "@/assets/cin-manufacturing.jpg";
import imgCEO from "@/assets/cin-ceo.jpg";
import imgMarine from "@/assets/cin-marine.jpg";
import imgOilgas from "@/assets/industry-oilgas.jpg";
import imgPetro from "@/assets/industry-petrochemical.jpg";
import imgPower from "@/assets/industry-power.jpg";
import imgShip from "@/assets/industry-shipping.jpg";
import imgAviation from "@/assets/industry-aviation.jpg";
import oasisLogo from "@/assets/oasis-logo.png";

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
];

const services = [
  { n: "S/01", title: "Strategic Sourcing", copy: "Direct partnerships with tier-one OEMs deliver authentic equipment under transparent commercial terms." },
  { n: "S/02", title: "Technical Advisory", copy: "Engineering-led specification, BOM optimization and lifecycle planning for mission-critical systems." },
  { n: "S/03", title: "Logistics & Delivery", copy: "End-to-end freight, customs and on-site delivery across the GCC, MENA and beyond." },
  { n: "S/04", title: "After-Sales Support", copy: "Spares continuity, warranty handling and field-service coordination over the asset lifecycle." },
];

const expertise = [
  { n: "E/01", title: "Mechanical", copy: "Pumps, valves, compressors, heat exchangers and rotating equipment engineered for high-pressure service." },
  { n: "E/02", title: "Instrumentation", copy: "Field instruments, control systems and safety detection that deliver plant-wide visibility." },
  { n: "E/03", title: "Electrical", copy: "LV/MV switchgear, transformers, motors and drives — designed for continuous industrial duty." },
  { n: "E/04", title: "Industrial Chemicals", copy: "Lubricants, drilling fluids and treatment chemicals supporting refineries and offshore operations." },
  { n: "E/05", title: "Marine", copy: "Specialised supply for VLCs and VLCCs — pumps, valves and onboard systems for the harshest environments." },
];

const products = [
  { n: "P/01", title: "Mechanical Solutions", img: imgMechanical, copy: "A wide array of mechanical components and systems designed to ensure optimal performance and reliability across high-pressure service environments.", items: ["Centrifugal & Positive Displacement Pumps", "Ball, Gate, Globe & Check Valves", "Compressors & Heat Exchangers", "Flanges, Fittings & Gaskets"] },
  { n: "P/02", title: "Instrumentation", img: imgInstrumentation, copy: "Precision instruments that provide accurate measurements and control for critical processes — engineered for plant-wide visibility and safety.", items: ["Pressure, Flow & Level Transmitters", "PLC, DCS & SCADA Systems", "Control Valves & Actuators", "Safety & Fire-Gas Detection"] },
  { n: "P/03", title: "Electrical Systems & Equipment", img: imgElectrical, copy: "Advanced electrical systems and components that power and sustain operations across industries — from LV switchgear to MV distribution.", items: ["LV/MV Switchgear & Panels", "Transformers & Reactors", "Motors, Drives & Soft Starters", "Cables, Terminations & Accessories"] },
  { n: "P/04", title: "Industrial Chemicals", img: imgChemicals, copy: "Industrial-grade chemicals that meet the highest standards of safety and efficiency, supporting refineries, pipelines and offshore operations.", items: ["Industrial Lubricants & Greases", "Drilling & Completion Fluids", "Corrosion & Scale Inhibitors", "Cleaning & Treatment Chemicals"] },
  { n: "P/05", title: "Marine Products", img: imgMarine, copy: "Trusted supplier of high-quality products for VLCs (Very Large Carriers) and VLCCs (Very Large Crude Carriers) — engineered for the harshest marine environments.", items: ["Marine-Grade Pumps & Valves", "Deck & Engine Room Equipment", "Onboard Safety & Fire Systems", "Spares for VLCs & VLCCs"] },
];

const brands = ["GE", "Mitsubishi", "Schneider", "Honeywell", "Omron", "ABB", "Fanuc", "Eaton", "Bosch", "Lenze", "Banner", "Siemens"];
const partners: { name: string; role: string; logo?: string }[] = [
  { name: "Dongeun Valve", role: "Industrial Valves — South Korea" },
  { name: "Himile Mechanical", role: "Precision Engineering — China" },
  { name: "Wooju Gaspack", role: "Gas Handling Systems — South Korea" },
  { name: "HS Valve", role: "Valves & Pipeline — South Korea" },
  { name: "Horizon Water", role: "Water Treatment — China" },
  { name: "Cangzhou Hongding", role: "Pipes & Fittings — China" },
  { name: "OASIS", role: "HSE Services & Trainings — Pakistan", logo: oasisLogo },
];
const clients = ["NMDC", "ADNOC", "Borouge", "NPCC", "DEWA", "EWEC", "G42", "DP World", "Fertiglobe", "Abu Dhabi Ports", "Oman Drydock", "GMS"];

const regions = [
  { region: "Middle East", countries: ["United Arab Emirates", "Oman", "Qatar", "Kuwait", "Bahrain", "Saudi Arabia"] },
  { region: "Europe", countries: ["United Kingdom", "Estonia"] },
  { region: "Americas", countries: ["United States"] },
  { region: "Asia Pacific", countries: ["South Korea", "Japan"] },
];

const globePins: GlobePin[] = [
  { name: "UAE", lat: 24.4539, lon: 54.3773, flag: "🇦🇪" },
  { name: "Oman", lat: 23.5859, lon: 58.4059, flag: "🇴🇲" },
  { name: "Qatar", lat: 25.2854, lon: 51.5310, flag: "🇶🇦" },
  { name: "Kuwait", lat: 29.3759, lon: 47.9774, flag: "🇰🇼" },
  { name: "Bahrain", lat: 26.0667, lon: 50.5577, flag: "🇧🇭" },
  { name: "KSA", lat: 24.7136, lon: 46.6753, flag: "🇸🇦" },
  { name: "UK", lat: 51.5074, lon: -0.1278, flag: "🇬🇧" },
  { name: "USA", lat: 38.9072, lon: -77.0369, flag: "🇺🇸" },
  { name: "Estonia", lat: 59.4370, lon: 24.7536, flag: "🇪🇪" },
  { name: "S. Korea", lat: 37.5665, lon: 126.9780, flag: "🇰🇷" },
  { name: "Japan", lat: 35.6762, lon: 139.6503, flag: "🇯🇵" },
];

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
      <HeroCarousel />

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
                <img src={imgCEO} alt="CEO portrait" loading="lazy" className="w-full h-full object-cover" width={1080} height={1350} />
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

      {/* Services section hidden per request */}

      {/* ═══════════ 04 · OUR EXPERTISE (5 core domains) ═══════════ */}
      <section id="expertise" className="py-32 lg:py-40 bg-brand-soft">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-6">
              <SectionLabel n="04" label="Our Expertise" />
              <DisplayH>Five core domains. One trusted partner.</DisplayH>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 lg:pt-8">
              <p className="text-[15px] text-muted-foreground leading-[1.8] font-light">
                INDESS specialises across five interconnected disciplines — each backed by deep technical knowledge, certified suppliers and a single point of accountability.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-border border border-border">
            {expertise.map((e) => (
              <Reveal key={e.n} className="bg-white p-8 lg:p-10 h-full block">
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-[11px] tracking-editorial uppercase text-gold">{e.n}</span>
                  <span className="h-px flex-1 bg-border" />
                </div>
                <h3 className="font-display-light text-2xl md:text-[1.65rem] mb-4 leading-tight">{e.title}</h3>
                <p className="text-[13px] text-muted-foreground leading-[1.8] font-light">{e.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 05 · PRODUCTS (one editorial spread per product) ═══════════ */}
      <section id="products" className="py-32 lg:py-40 bg-white">
        <div className="container mb-24">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6">
              <SectionLabel n="05" label="Products" />
              <DisplayH>A complete portfolio for industrial operations.</DisplayH>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 lg:pt-8">
              <p className="text-[15px] text-muted-foreground leading-[1.8] font-light">
                At INDESS Solutions Trading, we provide a comprehensive range of products tailored to the unique needs of our clients — engineered for performance, reliability and the highest standards of safety across five specialised domains.
              </p>
              <Link to="/catalog" className="inline-flex items-center gap-3 mt-8 text-[11px] tracking-editorial uppercase font-medium text-white bg-brand px-6 py-3 hover:bg-brand-deep transition-colors">
                View Product Catalog <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        <div className="space-y-32 lg:space-y-40">
          {products.map((p, i) => {
            const reverse = i % 2 === 1;
            return (
              <Reveal key={p.n} className="container block" y={48}>
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
                      <span className="text-[11px] tracking-editorial uppercase text-gold">Domain</span>
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
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ═══════════ 06 · OASIS HSE PARTNERSHIP ═══════════ */}
      <section id="oasis" className="py-32 lg:py-40 bg-brand-soft">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="bg-white border border-border p-12 lg:p-16 flex items-center justify-center aspect-[4/3]">
                <img src={oasisLogo} alt="OASIS — Occupational Health and Safety Integrated Services" className="max-h-40 w-auto object-contain" />
              </div>
              <div className="mt-6 flex items-center gap-3">
                <span className="h-px w-8 rule-gold" />
                <span className="text-[10px] tracking-editorial uppercase text-gold">Strategic HSE Alliance</span>
              </div>
            </div>
            <div className="lg:col-span-7">
              <SectionLabel n="06" label="HSE Services & Trainings" />
              <DisplayH className="!text-4xl md:!text-5xl lg:!text-6xl">
                INDESS joins hands with <span className="italic font-light text-brand">Oasis</span> to deliver world-class HSE services & trainings.
              </DisplayH>
              <p className="mt-8 text-[15px] text-muted-foreground leading-[1.8] font-light max-w-2xl">
                M/s OASIS — Occupational Health and Safety Integrated Services — is a reputable, multi-disciplinary company specialising in HSE Trainings, Human Resource solutions, Consultancy and Trading services for national and international clients across diverse industries.
              </p>
              <div className="mt-10 grid sm:grid-cols-2 gap-px bg-border border border-border">
                {[
                  { n: "O/01", t: "Human Resources" },
                  { n: "O/02", t: "HSE Trainings" },
                  { n: "O/03", t: "HSE Consultancy" },
                  { n: "O/04", t: "Trading Services" },
                ].map((s) => (
                  <div key={s.n} className="bg-white p-6">
                    <div className="flex items-baseline gap-3 mb-3">
                      <span className="text-[10px] tracking-editorial uppercase text-gold">{s.n}</span>
                      <span className="h-px flex-1 bg-border" />
                    </div>
                    <p className="font-display-light text-xl">{s.t}</p>
                  </div>
                ))}
              </div>
              <a href="https://oasispak.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 mt-10 text-[11px] tracking-editorial uppercase font-medium text-white bg-brand px-6 py-3 hover:bg-brand-deep transition-colors">
                Visit oasispak.com <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ INDUSTRIES (moved below products) ═══════════ */}
      <section id="industries" className="py-32 lg:py-40 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-5">
              <SectionLabel n="06" label="Industries" />
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
              <Reveal key={i.title} delay={Number(i.n) * 60} className="bg-white group block">
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 07 · BRANDS ═══════════ */}
      <section id="brands" className="py-32 lg:py-40 bg-brand-soft">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-6">
              <SectionLabel n="07" label="Brands" />
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
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-6">
              <SectionLabel n="08" label="Partners" />
              <DisplayH>Engineered alliances with global specialists.</DisplayH>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 lg:pt-8">
              <p className="text-[15px] text-muted-foreground leading-[1.8] font-light">
                A curated network of manufacturers across Asia and Europe — each chosen for engineering excellence, certification rigour and proven field reliability.
              </p>
              <Link to="/partners" className="inline-flex items-center gap-3 mt-8 text-[11px] tracking-editorial uppercase font-medium text-white bg-brand px-6 py-3 hover:bg-brand-deep transition-colors">
                View All Partners <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {partners.map((p, i) => (
              <Reveal key={p.name} delay={i * 80}>
                <Link
                  to="/partners"
                  className="bg-white p-10 lg:p-12 group hover:bg-brand-soft transition-colors block h-full"
                >
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[11px] tracking-editorial uppercase text-gold">PT/{String(i + 1).padStart(2, "0")}</span>
                    <ArrowUpRight size={16} className="text-foreground/30 group-hover:text-brand transition-colors" />
                  </div>
                  {p.logo ? (
                    <div className="mb-6 h-14 flex items-center">
                      <img src={p.logo} alt={p.name} className="max-h-14 w-auto object-contain" />
                    </div>
                  ) : (
                    <PartnerLogo name={p.name} className="mb-6" />
                  )}
                  <h3 className="font-display-light text-2xl md:text-[1.65rem] mb-4 leading-tight group-hover:text-brand transition-colors">{p.name}</h3>
                  <div className="h-px w-12 rule-gold mb-4" />
                  <p className="text-sm text-muted-foreground font-light">{p.role}</p>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Clients sub-section */}
          <div className="mt-24 pt-16 border-t border-border">
            <div className="flex flex-wrap items-end justify-between gap-6 mb-8">
              <p className="text-[10px] tracking-editorial uppercase text-gold">Selected Clients</p>
              <Link to="/clients" className="inline-flex items-center gap-2 text-[11px] tracking-editorial uppercase text-foreground/70 hover:text-brand transition-colors">
                View All Clients <ArrowUpRight size={13} />
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-10 gap-y-5">
              {clients.map((c) => (
                <span key={c} className="font-display-light text-2xl md:text-3xl text-foreground/55 hover:text-brand transition-colors">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ 08b · WORLDWIDE PRESENCE ═══════════ */}
      <section id="presence" className="relative py-32 lg:py-40 bg-[hsl(210_100%_8%)] text-white overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(210_100%_6%)] via-transparent to-[hsl(210_100%_6%)]" />
        <div className="container relative z-10">
          <Reveal>
            <div className="grid lg:grid-cols-12 gap-12 mb-16">
              <div className="lg:col-span-6">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-[11px] tracking-editorial uppercase text-gold">09</span>
                  <span className="h-px w-10 rule-gold" />
                  <span className="text-[11px] tracking-editorial uppercase text-white/60">Worldwide Presence</span>
                </div>
                <h2 className="font-display-light text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
                  A global footprint,<br />locally delivered.
                </h2>
              </div>
              <div className="lg:col-span-5 lg:col-start-8 lg:pt-8">
                <p className="text-[15px] text-white/65 leading-[1.8] font-light">
                  From the GCC to Europe, the Americas and Asia Pacific — INDESS operates across eleven countries, supporting clients with sourcing, logistics and after-sales presence wherever their projects demand.
                </p>
                <div className="mt-10 grid grid-cols-3 gap-6">
                  {[["11", "Countries"], ["4", "Regions"], ["24/7", "Support"]].map(([n, l]) => (
                    <div key={l}>
                      <div className="font-display-light text-4xl text-gold">{n}</div>
                      <div className="text-[10px] tracking-editorial uppercase text-white/50 mt-1">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Particle globe */}
          <Reveal delay={120}>
            <div className="relative my-12 lg:my-16 border border-white/10 bg-[hsl(210_100%_5%)]/60">
              <div className="absolute top-5 left-5 z-10 flex items-center gap-3 text-[10px] tracking-editorial uppercase text-gold">
                <span className="h-px w-6 bg-gold" /> Live Atlas · INDESS Network
              </div>
              <div className="absolute top-5 right-5 z-10 text-[10px] tracking-editorial uppercase text-white/40">
                Drag to rotate
              </div>
              <ParticleGlobe pins={globePins} className="h-[440px] md:h-[560px] lg:h-[640px]" />
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {regions.map((r, i) => (
              <Reveal key={r.region} delay={i * 90}>
                <div className="bg-[hsl(210_100%_8%)] p-10 h-full">
                  <div className="flex items-baseline gap-3 mb-6">
                    <span className="text-[11px] tracking-editorial uppercase text-gold">R/{String(i + 1).padStart(2, "0")}</span>
                    <span className="h-px flex-1 bg-white/15" />
                  </div>
                  <h3 className="font-display-light text-3xl mb-6 text-white">{r.region}</h3>
                  <ul className="space-y-3">
                    {r.countries.map((c) => (
                      <li key={c} className="flex items-center gap-3 text-[13px] text-white/75 font-light">
                        <MapPin size={13} className="text-gold shrink-0" /> {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 10 · REQUEST A QUOTE (CTA) ═══════════ */}
      <section id="contact" className="relative py-32 lg:py-40 bg-[hsl(210_100%_8%)] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
          <img src={imgLogistics} alt="" className="w-full h-full object-cover" width={1600} height={1200} loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(210_100%_8%)] via-[hsl(210_100%_8%)]/70 to-transparent" />
        </div>
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[11px] tracking-editorial uppercase text-gold">10</span>
                <span className="h-px w-10 rule-gold" />
                <span className="text-[11px] tracking-editorial uppercase text-white/60">Request a Quote</span>
              </div>
              <h2 className="font-display-light text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight mb-10">
                Ready to source<br />with confidence?
              </h2>
              <p className="text-[15px] text-white/65 leading-[1.8] font-light max-w-xl mb-12">
                Share your specifications and our engineering team will respond within one business day with a tailored quotation, technical consultation or our complete product catalog.
              </p>
              <div className="flex flex-wrap gap-4 mb-16">
                <a href="mailto:sales@indessuae.com?subject=Request%20a%20Quote" className="group inline-flex items-center gap-3 text-[11px] tracking-editorial uppercase font-medium text-foreground bg-gold px-8 py-4 hover:bg-white transition-colors">
                  Request a Quote
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a href="tel:+97126711663" className="inline-flex items-center gap-3 text-[11px] tracking-editorial uppercase font-medium text-white border border-white/30 px-8 py-4 hover:bg-white/10 transition-colors">
                  Call Our Team
                </a>
              </div>

              <div className="grid sm:grid-cols-3 gap-8 text-sm pt-10 border-t border-white/10">
                <div className="flex gap-5 items-start">
                  <MapPin size={18} className="text-gold mt-1 shrink-0" />
                  <div>
                    <p className="text-[10px] tracking-editorial uppercase text-white/50 mb-1">Office</p>
                    <p className="text-white/85 font-light leading-relaxed text-[13px]">Mussafah Industrial Area<br />Abu Dhabi, UAE</p>
                  </div>
                </div>
                <div className="flex gap-5 items-start">
                  <Mail size={18} className="text-gold mt-1 shrink-0" />
                  <div>
                    <p className="text-[10px] tracking-editorial uppercase text-white/50 mb-1">Email</p>
                    <a href="mailto:sales@indessuae.com" className="text-white/85 hover:text-gold font-light">sales@indessuae.com</a>
                  </div>
                </div>
                <div className="flex gap-5 items-start">
                  <Phone size={18} className="text-gold mt-1 shrink-0" />
                  <div>
                    <p className="text-[10px] tracking-editorial uppercase text-white/50 mb-1">Telephone</p>
                    <p className="text-white/85 font-light text-[13px]">+971 2 671 1663</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 lg:pl-8">
              <div className="border border-white/15 bg-white/[0.03] p-8 lg:p-10">
                <p className="text-[10px] tracking-editorial uppercase text-gold mb-4">Quick Inquiry</p>
                <h3 className="font-display-light text-3xl mb-8 leading-tight">Tell us what you need.</h3>
                <form onSubmit={submit} className="space-y-7">
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
                  <label className="block text-[10px] tracking-editorial uppercase text-white/50 mb-3">Requirements</label>
                  <textarea
                    required
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-transparent border-b border-white/25 py-3 text-white font-light focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="group inline-flex items-center gap-3 text-[11px] tracking-editorial uppercase font-medium text-foreground bg-gold px-8 py-4 hover:bg-white transition-colors">
                  Request a Quote
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
