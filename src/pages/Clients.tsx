import { ArrowUpRight, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const clients = [
  { name: "ADNOC", sector: "Oil & Gas", project: "Supply of valves, flanges and instrumentation packages for upstream operations." },
  { name: "NMDC", sector: "Marine & Dredging", project: "Mechanical and electrical equipment for offshore marine construction projects." },
  { name: "Borouge", sector: "Petrochemical", project: "Process equipment and treatment chemicals for polyolefin manufacturing facilities." },
  { name: "NPCC", sector: "EPC / Offshore", project: "Pipes, fittings and structural steel for offshore platform fabrication." },
  { name: "DEWA", sector: "Power & Water", project: "Switchgear, transformers and control systems for utility infrastructure." },
  { name: "EWEC", sector: "Power Generation", project: "Electrical and instrumentation supply for power and water generation assets." },
  { name: "G42", sector: "Technology & AI", project: "Specialised industrial equipment for data-centre and infrastructure projects." },
  { name: "DP World", sector: "Ports & Logistics", project: "Marine-grade hardware, lubricants and spares for port operations." },
  { name: "Fertiglobe", sector: "Fertilizers", project: "Process valves, pumps and chemicals for ammonia and urea production." },
  { name: "Abu Dhabi Ports", sector: "Maritime", project: "Mechanical and safety equipment for port infrastructure expansion." },
  { name: "Oman Drydock", sector: "Ship Repair", project: "Marine spares, valves and treatment chemicals for VLCC servicing." },
  { name: "GMS", sector: "Offshore Services", project: "Specialty pumps, switchgear and lifting equipment for self-elevating vessels." },
];

const Clients = () => {
  return (
    <Layout>
      <section className="pt-40 pb-20 bg-[hsl(210_100%_10%)] text-white">
        <div className="container">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[11px] tracking-editorial uppercase text-gold">Clients</span>
            <span className="h-px w-12 rule-gold" />
            <span className="text-[11px] tracking-editorial uppercase text-white/60">Selected References</span>
          </div>
          <h1 className="font-display-light text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight max-w-4xl">
            Trusted by the operators that power the region.
          </h1>
          <p className="mt-8 max-w-2xl text-[15px] text-white/70 leading-[1.8] font-light">
            INDESS supports a portfolio of national energy operators, EPC contractors and industrial leaders across the GCC and beyond — delivering equipment continuity for mission-critical assets.
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {clients.map((c, i) => (
              <div key={c.name} className="bg-white p-10 group hover:bg-brand-soft transition-colors">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] tracking-editorial uppercase text-gold">CL/{String(i + 1).padStart(2, "0")}</span>
                  <Building2 size={16} className="text-foreground/30 group-hover:text-brand transition-colors" />
                </div>
                <div className="h-20 flex items-center mb-6">
                  <div className="font-display-light text-4xl md:text-5xl text-foreground/85 group-hover:text-brand transition-colors">{c.name}</div>
                </div>
                <div className="h-px w-10 rule-gold mb-4" />
                <p className="text-[10px] tracking-editorial uppercase text-muted-foreground mb-3">{c.sector}</p>
                <p className="text-[14px] text-muted-foreground leading-[1.7] font-light">{c.project}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-soft">
        <div className="container text-center">
          <p className="text-[11px] tracking-editorial uppercase text-gold mb-6">Work With Us</p>
          <h3 className="font-display-light text-4xl md:text-5xl mb-8 max-w-3xl mx-auto">Bring INDESS into your next industrial project.</h3>
          <Link to="/#contact" className="inline-flex items-center gap-3 text-[11px] tracking-editorial uppercase font-medium text-white bg-brand px-8 py-4 hover:bg-brand-deep transition-colors">
            Request Consultation <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Clients;