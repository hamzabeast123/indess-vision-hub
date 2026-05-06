import { ArrowUpRight, MapPin, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Reveal from "@/components/Reveal";
import PartnerLogo from "@/components/PartnerLogo";
import imgMechanical from "@/assets/cin-mechanical.jpg";
import imgProcess from "@/assets/cin-process.jpg";
import imgManufacturing from "@/assets/cin-manufacturing.jpg";
import imgInstrumentation from "@/assets/cin-instrumentation.jpg";
import imgChemicals from "@/assets/cin-chemicals.jpg";
import imgLogistics from "@/assets/cin-logistics.jpg";

const partners = [
  {
    n: "PT/01",
    name: "Dongeun Valve Co., Ltd.",
    country: "South Korea",
    img: imgMechanical,
    summary:
      "A leading Korean manufacturer of high-performance industrial valves engineered for severe service across oil & gas, petrochemical and power generation.",
    highlights: [
      "Forged steel & cast steel valves",
      "API 6D / API 600 certified",
      "Cryogenic & high-pressure service",
      "Custom-engineered solutions",
    ],
  },
  {
    n: "PT/02",
    name: "Himile Mechanical Manufacturing (Shandong) Co., Ltd.",
    country: "China",
    img: imgManufacturing,
    summary:
      "Globally recognised precision-engineering group delivering large-scale mechanical components, moulds and integrated industrial manufacturing solutions.",
    highlights: [
      "Precision mechanical components",
      "Industrial moulds & tooling",
      "Heavy machinery sub-assemblies",
      "ISO-certified manufacturing",
    ],
  },
  {
    n: "PT/03",
    name: "Wooju Gaspack Industrial Co., Ltd.",
    country: "South Korea",
    img: imgProcess,
    summary:
      "Specialist supplier of gas-handling and packaging systems for industrial gases, chemicals and petrochemical applications.",
    highlights: [
      "Gas packaging & containment",
      "High-pressure cylinder systems",
      "Industrial gas equipment",
      "Safety-critical assemblies",
    ],
  },
  {
    n: "PT/04",
    name: "HS Valve Co., Ltd.",
    country: "South Korea",
    img: imgInstrumentation,
    summary:
      "Korean valve manufacturer producing premium ball, gate, globe and check valves for refineries, pipelines and power plants worldwide.",
    highlights: [
      "Ball, gate, globe & check valves",
      "API 6D / 6A certified",
      "Pipeline & refinery service",
      "Carbon, stainless & alloy steel",
    ],
  },
  {
    n: "PT/05",
    name: "Horizon Water Co., Ltd.",
    country: "China",
    img: imgChemicals,
    summary:
      "Trusted producer of water treatment systems, filtration packages and process chemicals for industrial and municipal applications.",
    highlights: [
      "Water treatment systems",
      "Filtration & purification skids",
      "Process & treatment chemicals",
      "Industrial & municipal projects",
    ],
  },
  {
    n: "PT/06",
    name: "Cangzhou Hongding Pipe Industry Co., Ltd.",
    country: "China",
    img: imgLogistics,
    summary:
      "Established manufacturer of seamless and welded steel pipes, fittings and flanges serving oil & gas pipelines and structural applications globally.",
    highlights: [
      "Seamless & welded steel pipes",
      "Pipe fittings & flanges",
      "API 5L / ASTM standards",
      "Pipeline & structural use",
    ],
  },
];

const Partners = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-[hsl(210_100%_10%)] text-white">
        <div className="container">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[11px] tracking-editorial uppercase text-gold">Partners</span>
            <span className="h-px w-12 rule-gold" />
            <span className="text-[11px] tracking-editorial uppercase text-white/60">Volume I · MMXXV</span>
          </div>
          <h1 className="font-display-light text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight max-w-4xl">
            Engineered alliances with global specialists.
          </h1>
          <p className="mt-8 max-w-2xl text-[15px] text-white/70 leading-[1.8] font-light">
            INDESS partners with a curated network of manufacturers across Asia and Europe — each chosen for engineering excellence, certification rigour and proven field reliability.
          </p>
        </div>
      </section>

      {/* Partner spreads */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="space-y-28 lg:space-y-36">
          {partners.map((p, i) => {
            const reverse = i % 2 === 1;
            return (
              <Reveal key={p.n} className="container block" y={48}>
                <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className="lg:col-span-7">
                    <div className="relative aspect-[4/3] overflow-hidden bg-foreground/5">
                      <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-brand/5 mix-blend-multiply" />
                      <div className="absolute top-6 left-6 bg-white px-4 py-2">
                        <span className="text-[10px] tracking-editorial uppercase text-gold">{p.n}</span>
                      </div>
                      <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur px-5 py-3">
                        <PartnerLogo name={p.name} />
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-3 mb-5 text-[11px] tracking-editorial uppercase text-gold">
                      <MapPin size={13} /> {p.country}
                    </div>
                    <h2 className="font-display-light text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight mb-6">
                      {p.name}
                    </h2>
                    <div className="h-px w-12 rule-gold mb-6" />
                    <p className="text-[15px] text-muted-foreground leading-[1.8] font-light mb-8">{p.summary}</p>
                    <ul className="space-y-3">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-3 text-[14px] text-foreground/80 font-light">
                          <CheckCircle2 size={16} className="text-brand mt-1 shrink-0" />
                          <span>{h}</span>
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

      {/* CTA */}
      <section className="py-24 bg-brand-soft">
        <div className="container text-center">
          <p className="text-[11px] tracking-editorial uppercase text-gold mb-6">Become a Partner</p>
          <h3 className="font-display-light text-4xl md:text-5xl mb-8 max-w-3xl mx-auto">Building the next chapter of industrial supply — together.</h3>
          <Link to="/#contact" className="inline-flex items-center gap-3 text-[11px] tracking-editorial uppercase font-medium text-white bg-brand px-8 py-4 hover:bg-brand-deep transition-colors">
            Contact Our Team <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;