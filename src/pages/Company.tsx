import { ArrowUpRight, Compass, Target, Gem, Rocket, Cog, Zap, Activity, FlaskConical, Anchor, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Reveal from "@/components/Reveal";
import ParticleWorldMap, { MapPin } from "@/components/ParticleWorldMap";
import hero from "@/assets/cin-hero.jpg";
import imgCEO from "@/assets/cin-ceo.jpg";
import imgManufacturing from "@/assets/cin-manufacturing.jpg";
import imgProcess from "@/assets/cin-process.jpg";

const SectionLabel = ({ n, label }: { n: string; label: string }) => (
  <div className="flex items-center gap-4 mb-8">
    <span className="text-[11px] tracking-editorial uppercase text-gold font-medium">{n}</span>
    <span className="h-px w-10 rule-gold" />
    <span className="text-[11px] tracking-editorial uppercase text-foreground/60">{label}</span>
  </div>
);

const values = [
  { icon: Gem, t: "Quality First", c: "Every shipment meets the highest engineering and safety standards — without compromise." },
  { icon: Target, t: "Precision", c: "Engineered specifications, accurate sourcing, and on-time delivery for every order." },
  { icon: Compass, t: "Integrity", c: "Transparent partnerships built on trust, accountability and long-term commitment." },
  { icon: Rocket, t: "Innovation", c: "Continuous adoption of advanced equipment and smarter sourcing pathways." },
];

const expertise = [
  { icon: Cog, t: "Mechanical Solutions", c: "Pumps, valves, compressors, fittings and precision-engineered piping systems." },
  { icon: Activity, t: "Instrumentation", c: "Field instruments, transmitters and control systems for plant-wide visibility." },
  { icon: Zap, t: "Electrical Systems", c: "LV/MV switchgear, transformers, motors and complete distribution infrastructure." },
  { icon: FlaskConical, t: "Industrial Chemicals", c: "Lubricants, treatment chemicals and specialty fluids for refineries and pipelines." },
  { icon: Anchor, t: "Marine Products", c: "High-quality VLC and VLCC equipment for marine and offshore operations." },
];

const testimonials = [
  { quote: "INDESS has been an exceptional supply partner — their engineering depth and delivery discipline are second to none in the region.", author: "Project Director", company: "National Energy Operator, UAE" },
  { quote: "Their ability to source authentic OEM equipment under tight schedules has been critical to keeping our operations online.", author: "Procurement Lead", company: "Petrochemical Major" },
  { quote: "A precise, professional and quietly confident partner. We trust INDESS with our most critical equipment programs.", author: "Operations Manager", company: "Marine Services Group" },
];

const goals = [
  { n: "G/01", t: "Regional Leadership", c: "Become the most trusted industrial equipment partner across the GCC by 2030." },
  { n: "G/02", t: "Global Network", c: "Expand our manufacturer alliances across Europe, Asia Pacific and the Americas." },
  { n: "G/03", t: "Operational Excellence", c: "Set the regional benchmark for sourcing accuracy, lead-time and after-sales response." },
  { n: "G/04", t: "Sustainable Supply", c: "Champion energy-efficient equipment and responsible logistics across our portfolio." },
];

const mapPins: MapPin[] = [
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

const Company = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        <img src={hero} alt="Industrial operations" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210_100%_8%)] via-[hsl(210_100%_8%)]/60 to-[hsl(210_100%_8%)]/30" />
        <div className="container relative z-10 pb-24 md:pb-32 text-white">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[11px] tracking-editorial uppercase text-gold">About</span>
            <span className="h-px w-12 rule-gold" />
            <span className="text-[11px] tracking-editorial uppercase text-white/60">The Company</span>
          </div>
          <h1 className="font-display-light text-[clamp(2.5rem,6.5vw,6rem)] leading-[0.98] tracking-tight max-w-5xl">
            Engineering trust for the industries<br />that power the world.
          </h1>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-white/75 font-light leading-relaxed">
            INDESS Solutions Trading is a precision supplier of mission-critical equipment to the oil &amp; gas, petrochemical, power and marine sectors — sourced globally, delivered locally.
          </p>
        </div>
      </section>

      {/* INTRO / ABOUT */}
      <section className="py-32 lg:py-40 bg-white">
        <div className="container">
          <Reveal>
            <SectionLabel n="01" label="About INDESS" />
          </Reveal>
          <div className="grid lg:grid-cols-12 gap-12">
            <Reveal className="lg:col-span-7">
              <h2 className="font-display-light text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
                A trusted partner for the world&rsquo;s most demanding industries.
              </h2>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-5 lg:pt-6 space-y-6 text-[15px] text-muted-foreground leading-[1.8] font-light">
              <p>
                As an established supplier in the energy sector, INDESS delivers top-quality equipment sourced from globally renowned manufacturers — meticulously selected for performance, durability and efficiency.
              </p>
              <p>
                Our team of experienced engineers and supply professionals understands the critical role reliable equipment plays in upstream, midstream and downstream operations.
              </p>
              <p>
                From a single specialised valve to fully integrated process packages, every engagement is engineered around precision, accountability and long-term partnership.
              </p>
            </Reveal>
          </div>

          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 border-t border-border">
            {[
              ["20+", "Years experience"],
              ["500+", "Products supplied"],
              ["50+", "Trusted brands"],
              ["11", "Countries served"],
            ].map(([n, l], i) => (
              <Reveal key={i} delay={i * 100} className={`py-10 ${i > 0 ? "md:border-l" : ""} ${i % 2 === 1 ? "border-l md:border-l" : ""} border-border`}>
                <div className="font-display-light text-5xl md:text-6xl text-brand mb-2">{n}</div>
                <div className="text-[10px] tracking-editorial uppercase text-muted-foreground">{l}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CEO MESSAGE */}
      <section className="bg-brand-soft">
        <div className="container py-32 lg:py-40">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <Reveal className="lg:col-span-5">
              <div className="aspect-[4/5] overflow-hidden bg-foreground/5">
                <img src={imgCEO} alt="CEO portrait" loading="lazy" className="w-full h-full object-cover grayscale" />
              </div>
              <div className="mt-6">
                <p className="text-[10px] tracking-editorial uppercase text-gold">The Chief Executive</p>
                <p className="font-display-light text-2xl mt-2">A message from the CEO</p>
              </div>
            </Reveal>
            <Reveal delay={140} className="lg:col-span-7 lg:pl-12">
              <SectionLabel n="02" label="CEO Message" />
              <Quote className="text-gold mb-6" size={28} />
              <p className="font-display-light text-3xl md:text-4xl leading-[1.25] mb-8">
                &ldquo;At INDESS we believe quality is not a feature — it is the foundation upon which every reliable operation is built.&rdquo;
              </p>
              <div className="space-y-5 text-[15px] text-muted-foreground leading-[1.8] font-light">
                <p>
                  We are delighted to welcome you to INDESS — your gateway to top-quality industrial supply equipment. Our commitment is simple: source globally, engineer trust locally and stand behind every shipment we deliver.
                </p>
                <p>
                  With a network of trusted manufacturers and a deeply experienced technical team, we propel our clients&rsquo; operations to new heights with cutting-edge equipment and unrivalled expertise.
                </p>
                <p>
                  Thank you for choosing INDESS as your trusted partner — together let&rsquo;s embark on a successful journey.
                </p>
              </div>
              <div className="mt-10 pt-6 border-t border-border">
                <p className="font-display-light text-xl">CEO, INDESS</p>
                <p className="text-[11px] tracking-editorial uppercase text-muted-foreground mt-1">Industrial Energy Supply Solutions</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-32 lg:py-40 bg-white">
        <div className="container">
          <Reveal>
            <SectionLabel n="03" label="Vision & Mission" />
          </Reveal>
          <div className="grid lg:grid-cols-2 gap-px bg-border">
            <Reveal className="bg-white p-12 lg:p-16">
              <div className="flex items-center gap-3 mb-6">
                <Compass className="text-brand" size={22} />
                <span className="text-[10px] tracking-editorial uppercase text-gold">Our Vision</span>
              </div>
              <h3 className="font-display-light text-4xl md:text-5xl mb-6 leading-[1.1]">
                To be the most trusted industrial supply partner across the energy sector.
              </h3>
              <p className="text-[15px] text-muted-foreground leading-[1.8] font-light">
                A globally connected, regionally rooted partner — recognised for engineering integrity, precision sourcing and uncompromising quality standards.
              </p>
            </Reveal>
            <Reveal delay={120} className="bg-white p-12 lg:p-16">
              <div className="flex items-center gap-3 mb-6">
                <Target className="text-brand" size={22} />
                <span className="text-[10px] tracking-editorial uppercase text-gold">Our Mission</span>
              </div>
              <h3 className="font-display-light text-4xl md:text-5xl mb-6 leading-[1.1]">
                Deliver mission-critical equipment with precision, accountability and care.
              </h3>
              <p className="text-[15px] text-muted-foreground leading-[1.8] font-light">
                We connect our clients with world-class manufacturers, optimise specifications and ensure on-time, on-spec delivery — supported by lifecycle service and technical guidance.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-32 lg:py-40 bg-brand-soft">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            <Reveal className="lg:col-span-6">
              <SectionLabel n="04" label="Core Values" />
              <h2 className="font-display-light text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
                The principles that guide our work.
              </h2>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-5 lg:col-start-8 lg:pt-8">
              <p className="text-[15px] text-muted-foreground leading-[1.8] font-light">
                Every decision at INDESS is anchored in four enduring values that define how we engage with clients, partners and the industries we serve.
              </p>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 80} className="bg-white p-10">
                <v.icon className="text-brand mb-8" size={28} strokeWidth={1.2} />
                <div className="h-px w-10 rule-gold mb-6" />
                <h3 className="font-display-light text-2xl mb-3">{v.t}</h3>
                <p className="text-sm text-muted-foreground font-light leading-[1.7]">{v.c}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GOALS */}
      <section className="py-32 lg:py-40 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12 items-end mb-20">
            <Reveal className="lg:col-span-6">
              <SectionLabel n="05" label="Strategic Goals" />
              <h2 className="font-display-light text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
                Where we are heading.
              </h2>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-5 lg:col-start-8">
              <p className="text-[15px] text-muted-foreground leading-[1.8] font-light">
                Our roadmap is shaped around regional leadership, global expansion and operational excellence — built to scale with the industries we serve.
              </p>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {goals.map((g, i) => (
              <Reveal key={g.n} delay={i * 80} className="bg-white p-12 group">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] tracking-editorial uppercase text-gold">{g.n}</span>
                  <ArrowUpRight size={16} className="text-foreground/30 group-hover:text-brand transition-colors" />
                </div>
                <h3 className="font-display-light text-3xl md:text-4xl mb-4">{g.t}</h3>
                <p className="text-[15px] text-muted-foreground leading-[1.8] font-light">{g.c}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="py-32 lg:py-40 bg-[hsl(210_100%_10%)] text-white relative overflow-hidden">
        <img src={imgManufacturing} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(210_100%_10%)] via-[hsl(210_100%_10%)]/90 to-[hsl(210_100%_10%)]" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            <Reveal className="lg:col-span-6">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[11px] tracking-editorial uppercase text-gold">06</span>
                <span className="h-px w-10 rule-gold" />
                <span className="text-[11px] tracking-editorial uppercase text-white/60">Our Expertise</span>
              </div>
              <h2 className="font-display-light text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
                Specialised across five core domains.
              </h2>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-5 lg:col-start-8 lg:pt-8">
              <p className="text-[15px] text-white/70 leading-[1.8] font-light">
                INDESS provides a comprehensive range of products tailored to the unique needs of our clients — engineered for performance, reliability and the highest standards of safety.
              </p>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {expertise.map((e, i) => (
              <Reveal key={e.t} delay={i * 70} className="bg-[hsl(210_100%_10%)] p-10">
                <e.icon className="text-gold mb-8" size={28} strokeWidth={1.2} />
                <div className="h-px w-10 rule-gold mb-6" />
                <h3 className="font-display-light text-2xl mb-3 text-white">{e.t}</h3>
                <p className="text-sm text-white/70 font-light leading-[1.7]">{e.c}</p>
              </Reveal>
            ))}
            <Reveal delay={expertise.length * 70} className="bg-[hsl(207_100%_25%)] p-10 flex flex-col justify-between">
              <div>
                <span className="text-[10px] tracking-editorial uppercase text-gold">E/06</span>
                <h3 className="font-display-light text-3xl mt-6 mb-3 text-white">Browse the Catalog</h3>
                <p className="text-sm text-white/75 font-light leading-[1.7]">Explore our complete product reference — categories, sub-categories and specifications.</p>
              </div>
              <Link to="/catalog" className="inline-flex items-center gap-2 mt-8 text-[11px] tracking-editorial uppercase text-white border-b border-gold pb-2 w-fit">
                Open Catalog <ArrowUpRight size={14} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 lg:py-40 bg-white">
        <div className="container">
          <Reveal>
            <SectionLabel n="07" label="Client Voices" />
            <h2 className="font-display-light text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight max-w-4xl mb-20">
              What our clients say about working with INDESS.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 100} className="bg-white p-12">
                <Quote className="text-gold mb-8" size={24} />
                <p className="font-display-light text-xl md:text-2xl leading-[1.4] mb-8 text-foreground/90">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="h-px w-10 rule-gold mb-4" />
                <p className="text-[13px] font-medium text-foreground">{t.author}</p>
                <p className="text-[11px] tracking-wide-2 uppercase text-muted-foreground mt-1">{t.company}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link to="/clients" className="inline-flex items-center gap-2 text-[11px] tracking-editorial uppercase text-brand border-b border-gold pb-2">
              View All Clients <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* WORLDWIDE PRESENCE — particle world map */}
      <section className="py-32 lg:py-40 bg-[hsl(210_100%_8%)] text-white overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <Reveal className="lg:col-span-6">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[11px] tracking-editorial uppercase text-gold">08</span>
                <span className="h-px w-10 rule-gold" />
                <span className="text-[11px] tracking-editorial uppercase text-white/60">Worldwide Presence</span>
              </div>
              <h2 className="font-display-light text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
                A network spanning eleven countries.
              </h2>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-5 lg:col-start-8 lg:pt-8">
              <p className="text-[15px] text-white/70 leading-[1.8] font-light">
                From the GCC across to Europe, the Americas and the Asia Pacific — INDESS partners with manufacturers and operators around the globe.
              </p>
            </Reveal>
          </div>
        </div>
        <Reveal>
          <div className="w-full h-[420px] md:h-[540px] lg:h-[620px]">
            <ParticleWorldMap pins={mapPins} className="w-full h-full" />
          </div>
        </Reveal>
        <div className="container mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
            {[
              { r: "Middle East", c: "UAE · Oman · Qatar · Kuwait · Bahrain · KSA" },
              { r: "Europe", c: "United Kingdom · Estonia" },
              { r: "Americas", c: "United States" },
              { r: "Asia Pacific", c: "South Korea · Japan" },
            ].map((g, i) => (
              <Reveal key={i} delay={i * 80} className="bg-[hsl(210_100%_8%)] p-8">
                <p className="text-[10px] tracking-editorial uppercase text-gold mb-4">{g.r}</p>
                <p className="text-[13px] text-white/80 font-light leading-[1.7]">{g.c}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-soft">
        <div className="container text-center">
          <p className="text-[11px] tracking-editorial uppercase text-gold mb-6">Get in touch</p>
          <h3 className="font-display-light text-4xl md:text-5xl mb-8 max-w-3xl mx-auto">Bring INDESS into your next industrial project.</h3>
          <Link to="/#contact" className="inline-flex items-center gap-3 text-[11px] tracking-editorial uppercase font-medium text-white bg-brand px-8 py-4 hover:bg-brand-deep transition-colors">
            Request Consultation <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Company;