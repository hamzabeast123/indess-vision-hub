import Layout from "@/components/layout/Layout";
import PageHero from "@/components/PageHero";

const brands = [
  { name: "General Electric", tag: "Energy · Healthcare · Aviation", desc: "Iconic global conglomerate with a century-long legacy across energy, healthcare, transportation and digital transformation. From aircraft engines to power generation and oil & gas production equipment." },
  { name: "Mitsubishi", tag: "Heavy Industry · Electronics", desc: "Japanese powerhouse renowned for innovation, quality and versatility — spanning automotive, electronics, heavy industry and finance." },
  { name: "Omron", tag: "Automation · Healthcare", desc: "Trailblazer in automation and healthcare solutions. Cutting-edge technologies in manufacturing automation, robotics and medical devices." },
  { name: "Schneider Electric", tag: "Energy Management · Automation", desc: "Global leader in energy management and automation solutions, helping businesses optimize energy usage and operational efficiency." },
  { name: "Lenze", tag: "Drive · Motion Control", desc: "German specialist in drive systems, motion control and automation that optimize processes and increase productivity." },
  { name: "Honeywell", tag: "Aerospace · Safety · Buildings", desc: "Globally recognized leader in technology and innovation — aircraft engines, avionics, automation systems and industrial safety." },
  { name: "Fanuc", tag: "Robotics · Factory Automation", desc: "Renowned manufacturer of industrial robots and factory automation solutions — collaborative, articulated and specialized robotic systems." },
  { name: "Eaton", tag: "Power Management", desc: "Energy-efficient solutions across electrical, aerospace, hydraulics and vehicle industries with a century of expertise." },
  { name: "Bosch", tag: "Engineering · Technology", desc: "Multinational engineering and technology leader delivering innovative solutions across automotive, industrial and consumer goods." },
  { name: "Banner Engineering", tag: "Sensors · Machine Vision", desc: "US leader in industrial automation and sensing — sensors, machine vision systems and industrial lighting." },
  { name: "ABB", tag: "Robotics · Electrical · Automation", desc: "Multinational corporation in robotics, electrical equipment and automation — comprehensive solutions for utilities, manufacturing and infrastructure." },
];

const Brands = () => {
  return (
    <Layout>
      <PageHero
        eyebrow="Brand Portfolio"
        title="World-class brands, curated for industry."
        subtitle="In the ever-evolving world of oil and gas, we partner with exceptional brands that cater to the diverse needs of this dynamic sector."
      />

      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            {brands.map((b, i) => (
              <article
                key={b.name}
                className="group bg-card rounded-xl p-8 border border-border shadow-card-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-500 animate-fade-up"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="flex items-start justify-between mb-4 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold font-display">{b.name}</h3>
                    <p className="text-xs uppercase tracking-wider text-brand mt-1 font-semibold">{b.tag}</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg gradient-brand text-white flex items-center justify-center font-bold text-sm shrink-0">
                    {b.name.split(" ").map(w => w[0]).slice(0, 2).join("")}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Brands;