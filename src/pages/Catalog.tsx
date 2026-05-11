import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Search } from "lucide-react";
import Layout from "@/components/layout/Layout";
import imgPumps from "@/assets/catalog/pumps.jpg";
import imgValves from "@/assets/catalog/valves.jpg";
import imgCompressors from "@/assets/catalog/compressors.jpg";
import imgPipes from "@/assets/catalog/pipes.jpg";
import imgHeatExchangers from "@/assets/catalog/heat-exchangers.jpg";
import imgTransmitters from "@/assets/catalog/transmitters.jpg";
import imgControlSystems from "@/assets/catalog/control-systems.jpg";
import imgControlValves from "@/assets/catalog/control-valves.jpg";
import imgSafetyDetection from "@/assets/catalog/safety-detection.jpg";
import imgSwitchgear from "@/assets/catalog/switchgear.jpg";
import imgTransformers from "@/assets/catalog/transformers.jpg";
import imgMotors from "@/assets/catalog/motors.jpg";
import imgCables from "@/assets/catalog/cables.jpg";
import imgLightingUps from "@/assets/catalog/lighting-ups.jpg";
import imgLubricants from "@/assets/catalog/lubricants.jpg";
import imgTreatment from "@/assets/catalog/treatment-chemicals.jpg";
import imgDrilling from "@/assets/catalog/drilling-fluids.jpg";
import imgCleaning from "@/assets/catalog/cleaning-chemicals.jpg";
import imgVlcc from "@/assets/catalog/vlcc.jpg";
import imgDeck from "@/assets/catalog/deck.jpg";
import imgEngineRoom from "@/assets/catalog/engine-room.jpg";
import imgSafetyNav from "@/assets/catalog/safety-navigation.jpg";

type Product = { name: string; sub: string };
type Category = { n: string; title: string; subs: { name: string; image: string; products: string[] }[] };

const CATEGORIES: Category[] = [
  {
    n: "01",
    title: "Mechanical Solutions",
    subs: [
      { name: "Pumps", image: imgPumps, products: ["Centrifugal Pumps", "Positive Displacement Pumps", "Submersible Pumps", "Diaphragm Pumps", "Gear Pumps"] },
      { name: "Valves", image: imgValves, products: ["Ball Valves", "Gate Valves", "Globe Valves", "Check Valves", "Butterfly Valves", "Needle Valves"] },
      { name: "Compressors", image: imgCompressors, products: ["Reciprocating Compressors", "Screw Compressors", "Centrifugal Compressors"] },
      { name: "Pipes & Fittings", image: imgPipes, products: ["Carbon Steel Pipes", "Stainless Steel Pipes", "Flanges", "Elbows & Tees", "Gaskets"] },
      { name: "Heat Exchangers", image: imgHeatExchangers, products: ["Shell & Tube", "Plate Heat Exchangers", "Air-Cooled"] },
    ],
  },
  {
    n: "02",
    title: "Instrumentation",
    subs: [
      { name: "Transmitters", image: imgTransmitters, products: ["Pressure Transmitters", "Flow Transmitters", "Level Transmitters", "Temperature Transmitters"] },
      { name: "Control Systems", image: imgControlSystems, products: ["PLC Systems", "DCS Systems", "SCADA Systems", "HMI Panels"] },
      { name: "Control Valves", image: imgControlValves, products: ["Pneumatic Control Valves", "Electric Actuated Valves", "Pressure Regulators"] },
      { name: "Safety & Detection", image: imgSafetyDetection, products: ["Fire Detectors", "Gas Detectors", "Flame Detectors", "Emergency Shutdown Systems"] },
    ],
  },
  {
    n: "03",
    title: "Electrical Systems & Equipment",
    subs: [
      { name: "Switchgear", image: imgSwitchgear, products: ["LV Switchgear", "MV Switchgear", "Distribution Panels", "MCC Panels"] },
      { name: "Transformers", image: imgTransformers, products: ["Power Transformers", "Distribution Transformers", "Isolation Transformers"] },
      { name: "Motors & Drives", image: imgMotors, products: ["AC Induction Motors", "Servo Motors", "Variable Frequency Drives", "Soft Starters"] },
      { name: "Cables & Accessories", image: imgCables, products: ["LV Power Cables", "MV Power Cables", "Instrumentation Cables", "Cable Glands & Terminations"] },
      { name: "Lighting & UPS", image: imgLightingUps, products: ["Industrial Lighting", "Hazardous Area Lighting", "UPS Systems", "Battery Banks"] },
    ],
  },
  {
    n: "04",
    title: "Industrial Chemicals",
    subs: [
      { name: "Lubricants", image: imgLubricants, products: ["Industrial Greases", "Hydraulic Oils", "Gear Oils", "Compressor Oils"] },
      { name: "Treatment Chemicals", image: imgTreatment, products: ["Corrosion Inhibitors", "Scale Inhibitors", "Biocides", "Demulsifiers"] },
      { name: "Drilling Fluids", image: imgDrilling, products: ["Water-Based Mud", "Oil-Based Mud", "Completion Fluids"] },
      { name: "Cleaning Chemicals", image: imgCleaning, products: ["Degreasers", "Solvents", "Tank Cleaning Agents"] },
    ],
  },
  {
    n: "05",
    title: "Marine Products",
    subs: [
      { name: "VLCC & VLCs Equipment", image: imgVlcc, products: ["Marine Pumps", "Cargo Handling Systems", "Inert Gas Systems", "Tank Cleaning Systems"] },
      { name: "Deck Equipment", image: imgDeck, products: ["Mooring Winches", "Anchor Windlasses", "Cranes & Davits"] },
      { name: "Engine Room", image: imgEngineRoom, products: ["Marine Generators", "Boilers", "Heat Exchangers", "Separators"] },
      { name: "Safety & Navigation", image: imgSafetyNav, products: ["Life Saving Appliances", "Navigation Lights", "Communication Systems"] },
    ],
  },
];

const Catalog = () => {
  const [q, setQ] = useState("");
  const [active, setActive] = useState<string>("all");

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return CATEGORIES.filter((c) => active === "all" || c.title === active)
      .map((c) => ({
        ...c,
        subs: c.subs
          .map((s) => ({ ...s, products: s.products.filter((p) => !term || p.toLowerCase().includes(term) || s.name.toLowerCase().includes(term)) }))
          .filter((s) => s.products.length > 0),
      }))
      .filter((c) => c.subs.length > 0);
  }, [q, active]);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-brand-soft border-b border-border">
        <div className="container">
          <Link to="/" className="inline-flex items-center gap-2 text-[11px] tracking-editorial uppercase text-muted-foreground hover:text-brand mb-10">
            <ArrowLeft size={14} /> Back to Home
          </Link>
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[11px] tracking-editorial uppercase text-gold font-medium">Catalog</span>
                <span className="h-px w-10 rule-gold" />
                <span className="text-[11px] tracking-editorial uppercase text-foreground/60">Product Reference</span>
              </div>
              <h1 className="font-display-light text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
                Product Catalog
              </h1>
              <p className="mt-6 text-[15px] text-muted-foreground leading-[1.8] font-light max-w-xl">
                Browse our complete range of industrial equipment organized by category and sub-category. For pricing and availability, please contact our sales team.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="relative">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search products..."
                  className="w-full bg-white border border-border pl-11 pr-4 py-4 text-sm font-light focus:outline-none focus:border-brand"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category filter */}
      <section className="sticky top-20 z-30 bg-white border-b border-border">
        <div className="container py-4 flex gap-2 overflow-x-auto">
          {["all", ...CATEGORIES.map((c) => c.title)].map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`shrink-0 px-4 py-2 text-[11px] tracking-editorial uppercase border transition-colors ${
                active === c ? "bg-brand text-white border-brand" : "bg-white text-foreground/70 border-border hover:border-brand hover:text-brand"
              }`}
            >
              {c === "all" ? "All Categories" : c}
            </button>
          ))}
        </div>
      </section>

      {/* Listing */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container space-y-24">
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground font-light py-20">No products match your search.</p>
          )}
          {filtered.map((cat) => {
            const fullRangeSlug: Record<string, string> = {
              "Mechanical Solutions": "mechanical-equipment",
              "Instrumentation": "instrumentation",
              "Electrical Systems & Equipment": "electrical-equipment",
              "Industrial Chemicals": "chemicals-lubricants",
            };
            const slug = fullRangeSlug[cat.title];
            return (
            <div key={cat.title}>
              <div className="flex items-baseline gap-6 mb-12 pb-6 border-b border-border">
                <span className="text-[11px] tracking-editorial uppercase text-gold">{cat.n}</span>
                <h2 className="font-display-light text-4xl md:text-5xl tracking-tight">{cat.title}</h2>
                {slug && (
                  <Link to={`/catalog/${slug}`} className="ml-auto inline-flex items-center gap-2 text-[11px] tracking-editorial uppercase text-brand hover:text-gold transition-colors">
                    View Full Range <ArrowRight size={14} />
                  </Link>
                )}
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
                {cat.subs.map((sub) => (
                  <div key={sub.name} className="bg-white group flex flex-col">
                    <div className="aspect-[5/4] overflow-hidden bg-brand-soft">
                      <img
                        src={sub.image}
                        alt={sub.name}
                        loading="lazy"
                        width={800}
                        height={640}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                      <h3 className="font-display-light text-xl mb-2">{sub.name}</h3>
                      <div className="h-px w-10 rule-gold mb-5" />
                      <ul className="space-y-2.5">
                        {sub.products.map((p) => (
                          <li key={p} className="text-[13px] text-foreground/75 font-light flex items-start gap-3">
                            <span className="mt-2 h-1 w-1 bg-gold shrink-0" />
                            {p}
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={`/catalog/${sub.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}
                        className="mt-6 inline-flex items-center gap-2 text-[11px] tracking-editorial uppercase text-brand hover:text-gold transition-colors self-start group/link"
                      >
                        View All <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[hsl(210_100%_8%)] text-white">
        <div className="container text-center">
          <p className="text-[11px] tracking-editorial uppercase text-gold mb-6">Need Specifications or Pricing?</p>
          <h2 className="font-display-light text-3xl md:text-5xl mb-8">Speak with our technical team.</h2>
          <Link to="/#contact" className="inline-flex items-center gap-3 text-[11px] tracking-editorial uppercase text-foreground bg-gold px-8 py-4 hover:bg-white transition-colors">
            Request a Quote
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Catalog;