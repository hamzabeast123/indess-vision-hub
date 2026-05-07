import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Reveal from "@/components/Reveal";
import imgValves from "@/assets/catalog/valves.jpg";
import imgControlValves from "@/assets/catalog/control-valves.jpg";

type Item = { name: string; description: string };
type CategoryPage = {
  slug: string;
  parent: string;
  parentN: string;
  title: string;
  intro: string;
  hero: string;
  items: Item[];
};

const PAGES: Record<string, CategoryPage> = {
  valves: {
    slug: "valves",
    parent: "Mechanical Solutions",
    parentN: "01",
    title: "Valves",
    intro:
      "A complete range of industrial valves engineered for flow control, isolation, and safety across oil & gas, petrochemical, marine, and utility applications.",
    hero: imgValves,
    items: [
      { name: "Ball Valves", description: "A ball valve is a shut-off valve that controls the flow of a liquid or gas by means of a rotary ball having a bore. By rotating the ball a quarter turn (90 degrees) around its axis." },
      { name: "Check Valves", description: "Check valves have several advantages such as improving safety and easy installation. Check valves provide flow in just one direction. When liquid flows through the flowing direction, check valves open and let it pass." },
      { name: "Control Valves", description: "Control valves are widely used to limit the amount of flow in the hydraulic circuits of various industrial applications. Our offered control valves are equipped with a specially designed screw that exhausts the air." },
      { name: "Gate Valves", description: "Generally, gate valves are used to either allow fluid to flow freely in a conduit or to stop the flow completely." },
      { name: "Globe Valves", description: "Globe valves should be orientated so that steam does not lift the valve disc as it cools (creates a negative pressure)." },
      { name: "Butterfly Valves", description: "They are composed of a fixed disc on the valve's stem for closing and opening the valve." },
      { name: "Safety Valves", description: "A safety valve refers to a pressure valve that is designed to protect life, equipment, and processes." },
      { name: "Needle Valves", description: "Needle valves are similar to a globe valve in design, with the biggest difference being the sharp needle-like disk." },
      { name: "Plug Valves", description: "A plug valve is a quarter-turn rotary motion valve that uses a tapered or cylindrical plug to stop or start the flow." },
      { name: "Pressure Relief Valves", description: "A pressure relief valve or pressure safety valve is used to protect equipment or piping systems during an overpressure event or in the event of a vacuum." },
      { name: "Solenoid Valves", description: "Solenoid valves are more like control units, which use electric energising or de-energising for opening or closing of the valve." },
      { name: "Slide Valves", description: "It is used for controlling low pressure flow of gases, liquids, suspensions and fluidized solids." },
      { name: "Bypass Valves", description: "Bypass valves provide an alternate route for fluid within a system by diverting a portion of the flow." },
      { name: "Pinch Valves", description: "Pinch valve, also called the clamp valve, is another valve for stop/start and throttling." },
      { name: "Diaphragm Valves", description: "A diaphragm valve is a linear motion type valve that is used to start, regulate or stop fluid flow." },
    ],
  },
};

const CatalogCategory = () => {
  const { slug = "" } = useParams();
  const data = PAGES[slug];

  if (!data) {
    return (
      <Layout>
        <section className="pt-40 pb-32 bg-white">
          <div className="container text-center">
            <p className="text-[11px] tracking-editorial uppercase text-gold mb-4">Coming Soon</p>
            <h1 className="font-display-light text-4xl md:text-5xl mb-8">This sub-catalog is being prepared.</h1>
            <Link to="/catalog" className="inline-flex items-center gap-2 text-[11px] tracking-editorial uppercase text-brand hover:text-gold">
              <ArrowLeft size={14} /> Back to Catalog
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-brand-soft border-b border-border">
        <div className="container">
          <Link to="/catalog" className="inline-flex items-center gap-2 text-[11px] tracking-editorial uppercase text-muted-foreground hover:text-brand mb-10">
            <ArrowLeft size={14} /> Back to Catalog
          </Link>
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[11px] tracking-editorial uppercase text-gold font-medium">{data.parentN} · {data.parent}</span>
                <span className="h-px w-10 rule-gold" />
                <span className="text-[11px] tracking-editorial uppercase text-foreground/60">Sub-Category</span>
              </div>
              <h1 className="font-display-light text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
                {data.title}
              </h1>
              <p className="mt-6 text-[15px] text-muted-foreground leading-[1.8] font-light max-w-xl">
                {data.intro}
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={data.hero} alt={data.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Items */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container">
          <div className="flex items-baseline gap-6 mb-12 pb-6 border-b border-border">
            <span className="text-[11px] tracking-editorial uppercase text-gold">Range</span>
            <h2 className="font-display-light text-3xl md:text-4xl tracking-tight">All {data.title}</h2>
            <span className="ml-auto text-[11px] tracking-editorial uppercase text-foreground/60">{data.items.length} Types</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {data.items.map((item, i) => (
              <Reveal key={item.name} delay={i * 40}>
                <div className="bg-white p-8 h-full flex flex-col group hover:bg-brand-soft transition-colors">
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-[11px] tracking-editorial uppercase text-gold">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="font-display-light text-xl tracking-tight">{item.name}</h3>
                  </div>
                  <div className="h-px w-10 rule-gold mb-5" />
                  <p className="text-[13px] text-foreground/75 leading-[1.8] font-light">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
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

export default CatalogCategory;