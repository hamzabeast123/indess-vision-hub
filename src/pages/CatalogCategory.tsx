import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Reveal from "@/components/Reveal";
import imgValves from "@/assets/catalog/valves.jpg";
import imgTransformers from "@/assets/catalog/transformers.jpg";
import imgSwitchgear from "@/assets/catalog/switchgear.jpg";
import imgCables from "@/assets/catalog/cables.jpg";
import imgMotors from "@/assets/catalog/motors.jpg";
import imgLightingUps from "@/assets/catalog/lighting-ups.jpg";
import imgLubricants from "@/assets/catalog/lubricants.jpg";
import imgTreatment from "@/assets/catalog/treatment-chemicals.jpg";
import imgCleaning from "@/assets/catalog/cleaning-chemicals.jpg";
import imgDrilling from "@/assets/catalog/drilling-fluids.jpg";
import imgPipes from "@/assets/catalog/pipes.jpg";
import imgHeatExchangers from "@/assets/catalog/heat-exchangers.jpg";
import imgTransmitters from "@/assets/catalog/transmitters.jpg";
import imgControlSystems from "@/assets/catalog/control-systems.jpg";
import imgControlValves from "@/assets/catalog/control-valves.jpg";
import imgSafetyDetection from "@/assets/catalog/safety-detection.jpg";
import imgPumps from "@/assets/catalog/pumps.jpg";
import imgCompressors from "@/assets/catalog/compressors.jpg";
import imgEngineRoom from "@/assets/catalog/engine-room.jpg";
import vBall from "@/assets/catalog/valves/ball.jpg";
import vCheck from "@/assets/catalog/valves/check.jpg";
import vControl from "@/assets/catalog/valves/control.jpg";
import vGate from "@/assets/catalog/valves/gate.jpg";
import vGlobe from "@/assets/catalog/valves/globe.jpg";
import vButterfly from "@/assets/catalog/valves/butterfly.jpg";
import vSafety from "@/assets/catalog/valves/safety.jpg";
import vNeedle from "@/assets/catalog/valves/needle.jpg";
import vPlug from "@/assets/catalog/valves/plug.jpg";
import vRelief from "@/assets/catalog/valves/pressure-relief.jpg";
import vSolenoid from "@/assets/catalog/valves/solenoid.jpg";
import vSlide from "@/assets/catalog/valves/slide.jpg";
import vBypass from "@/assets/catalog/valves/bypass.jpg";
import vPinch from "@/assets/catalog/valves/pinch.jpg";
import vDiaphragm from "@/assets/catalog/valves/diaphragm.jpg";
import eContactors from "@/assets/catalog/electrical/contactors.jpg";
import eEnclosures from "@/assets/catalog/electrical/enclosures.jpg";
import eBreaker from "@/assets/catalog/electrical/circuit-breaker.jpg";
import eStrapper from "@/assets/catalog/electrical/wire-strapper.jpg";
import eSplicing from "@/assets/catalog/electrical/splicing-connector.jpg";
import eRelay from "@/assets/catalog/electrical/relay.jpg";
import eCableTester from "@/assets/catalog/electrical/cable-tester.jpg";
import eDigitalTape from "@/assets/catalog/electrical/digital-measuring-tape.jpg";
import cMea from "@/assets/catalog/chemicals/mono-ethanol-amine.jpg";
import cNaoh from "@/assets/catalog/chemicals/sodium-hydroxide.jpg";
import cGlyFischer from "@/assets/catalog/chemicals/glycerin-fischer.jpg";
import cGlyClear from "@/assets/catalog/chemicals/glycerin-clear.jpg";
import cAnthracite from "@/assets/catalog/chemicals/anthracite.jpg";
import cSilicaSand from "@/assets/catalog/chemicals/silica-sand.jpg";
import cTeg from "@/assets/catalog/chemicals/teg.jpg";
import cWater from "@/assets/catalog/chemicals/distilled-water.jpg";
import cEdta from "@/assets/catalog/chemicals/edta.jpg";
import cAlSulfate from "@/assets/catalog/chemicals/aluminium-sulfate.jpg";
import cAntifreeze from "@/assets/catalog/chemicals/antifreeze.jpg";
import cChlorine from "@/assets/catalog/chemicals/liquid-chlorine.jpg";
import cXylene from "@/assets/catalog/chemicals/xylene.jpg";
import cSilicaGel from "@/assets/catalog/chemicals/silica-gel.jpg";
import cEngineOil from "@/assets/catalog/chemicals/engine-oil.jpg";
import cGrease from "@/assets/catalog/chemicals/ep-grease.jpg";

type Item = { name: string; description: string; image?: string };
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
      { name: "Ball Valves", image: vBall, description: "A ball valve is a shut-off valve that controls the flow of a liquid or gas by means of a rotary ball having a bore. By rotating the ball a quarter turn (90 degrees) around its axis." },
      { name: "Check Valves", image: vCheck, description: "Check valves have several advantages such as improving safety and easy installation. Check valves provide flow in just one direction. When liquid flows through the flowing direction, check valves open and let it pass." },
      { name: "Control Valves", image: vControl, description: "Control valves are widely used to limit the amount of flow in the hydraulic circuits of various industrial applications. Our offered control valves are equipped with a specially designed screw that exhausts the air." },
      { name: "Gate Valves", image: vGate, description: "Generally, gate valves are used to either allow fluid to flow freely in a conduit or to stop the flow completely." },
      { name: "Globe Valves", image: vGlobe, description: "Globe valves should be orientated so that steam does not lift the valve disc as it cools (creates a negative pressure)." },
      { name: "Butterfly Valves", image: vButterfly, description: "They are composed of a fixed disc on the valve's stem for closing and opening the valve." },
      { name: "Safety Valves", image: vSafety, description: "A safety valve refers to a pressure valve that is designed to protect life, equipment, and processes." },
      { name: "Needle Valves", image: vNeedle, description: "Needle valves are similar to a globe valve in design, with the biggest difference being the sharp needle-like disk." },
      { name: "Plug Valves", image: vPlug, description: "A plug valve is a quarter-turn rotary motion valve that uses a tapered or cylindrical plug to stop or start the flow." },
      { name: "Pressure Relief Valves", image: vRelief, description: "A pressure relief valve or pressure safety valve is used to protect equipment or piping systems during an overpressure event or in the event of a vacuum." },
      { name: "Solenoid Valves", image: vSolenoid, description: "Solenoid valves are more like control units, which use electric energising or de-energising for opening or closing of the valve." },
      { name: "Slide Valves", image: vSlide, description: "It is used for controlling low pressure flow of gases, liquids, suspensions and fluidized solids." },
      { name: "Bypass Valves", image: vBypass, description: "Bypass valves provide an alternate route for fluid within a system by diverting a portion of the flow." },
      { name: "Pinch Valves", image: vPinch, description: "Pinch valve, also called the clamp valve, is another valve for stop/start and throttling." },
      { name: "Diaphragm Valves", image: vDiaphragm, description: "A diaphragm valve is a linear motion type valve that is used to start, regulate or stop fluid flow." },
    ],
  },

  "electrical-equipment": {
    slug: "electrical-equipment",
    parent: "Electrical Systems & Equipment",
    parentN: "03",
    title: "Electrical Equipment",
    intro:
      "We supply advanced electrical systems and components that sustain heavy industrial operations.",
    hero: imgSwitchgear,
    items: [
      { name: "Transformers", image: imgTransformers, description: "The maximum voltage which the primary winding can be subjected to also has a maximum limit. If the applied voltage exceeds the maximum rated value, this causes magnetic saturation of the core, leading to distorted output with higher iron losses." },
      { name: "Cables", image: imgCables, description: "Ship cable, also known as marine cable, offers excellent quality and meets the strictest maritime regulations." },
      { name: "Switch Gear Panels", image: imgSwitchgear, description: "The switch panel is built to withstand harsh marine environments. It is IP65 waterproof, featuring a special rubber steel-cap and anti-seepage rubber ring." },
      { name: "Contactors", image: eContactors, description: "Contactors are commonly used in high-power applications such as large motors, heavy machinery, and HVAC systems. Relays are often employed in control systems, automation, and low-power circuits where isolation between control and load circuits is essential." },
      { name: "Enclosures", image: eEnclosures, description: "Boxes and enclosures are used to mount and encase electrical switch accessories. They provide structural and operational support for electrical wiring." },
      { name: "Circuit Breaker", image: eBreaker, description: "A circuit breaker is an automatically operated electrical switch designed to protect an electrical circuit from damage caused by overload." },
      { name: "Wire Strapper", image: eStrapper, description: "Ideal for copper and aluminium cables from 22–30 AWG. Built-in wire cutter." },
      { name: "Splicing Connector", image: eSplicing, description: "Compact splicing connectors and electrical wire connectors for easy and reliable connection. Lever-actuated connectors suitable for all wires up to 4 mm² — pack of 100." },
      { name: "Advanced Cable Tester", image: eCableTester, description: "Advanced cable tester with PoE multifunction wire tracker and tone probe — toner tool kit with bag for LAN CAT5/CAT6, underground telephone line finder." },
      { name: "Relay", image: eRelay, description: "The DCR100 contains 6 DC relays, each capable of switching up to 10 amps. Connects directly to NMEA 2000® and loads can be switched onboard via dedicated displays or N2KView® software." },
      { name: "Cable Tester", image: eCableTester, description: "Each type of wire and cable is tailored to its required application. A range of testers is available for verifying continuity, faults and configuration." },
      { name: "Fish Tape", image: imgCables, description: "Fish tape is one of the more popular pieces of electrical tooling, used on just about every job site for pulling wire through conduit and walls." },
      { name: "Tester", image: eCableTester, description: "Leakage tester measures leakage across capacitor plates. LCR meter measures the inductance, capacitance and resistance of a component." },
      { name: "Digital Measuring Tape", image: eDigitalTape, description: "Experience precision and convenience with a digital measuring tape — clear digital display, durable build, accurate measurements for field use." },
      { name: "Motors & Drives", image: imgMotors, description: "AC induction motors, servo motors, variable frequency drives and soft starters for industrial drive trains and process control." },
      { name: "Lighting & UPS", image: imgLightingUps, description: "Industrial and hazardous-area lighting, UPS systems and battery banks for continuous operation in critical environments." },
    ],
  },

  "chemicals-lubricants": {
    slug: "chemicals-lubricants",
    parent: "Industrial Chemicals",
    parentN: "04",
    title: "Chemicals & Lubricants",
    intro:
      "A broad portfolio of industrial chemicals, treatment products, lubricants and greases supporting marine, oilfield and process operations.",
    hero: imgLubricants,
    items: [
      { name: "Methanol", image: imgDrilling, description: "Methanol, known for its lower carbon intensity and potential for renewable production, presents a promising pathway to propel the maritime industry towards a more sustainable future." },
      { name: "Mono Ethanol Amine", image: cMea, description: "A premium range of fluorine-based products such as amines and amine derivatives among other major industrial chemicals." },
      { name: "Sodium Hydroxide", image: cNaoh, description: "Living at the fuel–water interface, damaging microbes depend on water for growth and the organic molecules of fuel for nutrition; sodium hydroxide is widely used in treatment to control them." },
      { name: "Sodium Hypochlorite", image: imgTreatment, description: "Industrial-strength sodium hypochlorite is a diverse product. When dissolved in water it is commonly known as bleach or industrial liquid bleach. It is practically and chemically distinct from chlorine." },
      { name: "Glycerin (Fischer)", image: cGlyFischer, description: "Glycerol — also known as glycerin, glycerine, 1,2,3-propanetriol, glyceritol — used across pharmaceutical, cosmetic and industrial formulations." },
      { name: "Glycerin (Glycerol Clear)", image: cGlyClear, description: "Formulated as per industry guidelines using a highly upgraded modern infrastructure facility for consistent purity and quality." },
      { name: "Anthracite", image: cAnthracite, description: "A hard, compact variety of mineral coal which is highly lustrous. It has the highest carbon content, the fewest impurities, and the highest calorific content of all coal types." },
      { name: "Silica Sand", image: cSilicaSand, description: "Top-quality silica sand used extensively in diverse industrial segments including filtration, foundry and glass manufacturing." },
      { name: "TEG (Tri Ethylene Glycol)", image: cTeg, description: "The main uses for triethylene glycol are based on its hygroscopic quality — it absorbs moisture from the air through absorption or adsorption, ideal for gas dehydration." },
      { name: "Pure Distilled Water", image: cWater, description: "High-purity distilled water for laboratory, battery, cooling system and pharmaceutical applications, sourced from trusted vendors with precise composition." },
      { name: "Caustic Flakes", image: imgCleaning, description: "Sodium Hydroxide (NaOH) — white deliquescent solid in beads or pellets. Corrosive to tissue in the presence of moisture; widely used as a detergent and process chemical." },
      { name: "EDTA-4Na (Powder)", image: cEdta, description: "Technical-grade EDTA-4Na (Tetrasodium EDTA) — a high-quality chelating agent meticulously formulated to meet industrial standards with exceptional performance." },
      { name: "Antifoam / Aluminium Sulfate Al₂(SO₄)₃", image: cAlSulfate, description: "Used for purification of drinking water and wastewater treatment as a flocculant and coagulant." },
      { name: "Antifreeze / Engine Coolant", image: cAntifreeze, description: "A liquid substance used in vehicle cooling systems to prevent the engine from freezing in cold temperatures and overheating in hot conditions." },
      { name: "Liquid Chlorine 12% Concentration", image: cChlorine, description: "Leading supplier of liquid chlorine solution at competitive prices and various pack sizes — a strong disinfectant used for sanitisation." },
      { name: "Xylene", image: cXylene, description: "Xylene can be used in place of toluene to thin specified oil-based paint, lacquer, varnish, epoxy, adhesives and synthetic enamels when a slower rate of evaporation is desired." },
      { name: "Silica Gel", image: cSilicaGel, description: "A very porous crystal with many cavities and a large surface area. Capillary effects and adsorption bind water, alcohols and hydrocarbons until saturation." },
      { name: "Hydraulic Oil", image: imgLubricants, description: "Manufactured from high-quality material procured from well-known vendors. Available in standard and custom specifications as per customer requirements." },
      { name: "Engine Oil", image: cEngineOil, description: "Highly effective mid-alkaline mineral motor oil for marine trunk and crosshead, main and auxiliary diesel engines operating on distillate fuel with sulfur content less than 1.5%." },
      { name: "EP1, EP2, EP3 Grease", image: cGrease, description: "Multi-purpose lithium grease suitable for use in high-pressure greasing equipment across automotive, marine and industrial machinery." },
    ],
  },

  "gaskets-sealing": {
    slug: "gaskets-sealing",
    parent: "Mechanical Solutions",
    parentN: "01",
    title: "Gaskets & Sealing",
    intro:
      "Engineered gaskets and sealing solutions for flanges, vessels and high-pressure systems — from soft elastomers to spiral-wound and ring-type joint metallics.",
    hero: imgPipes,
    items: [
      { name: "Envelope Gasket", description: "Also known as a double jacketed gasket — a composite gasket in which PTFE is wrapped around a core insert material, combining the strength of the core with the chemical resistance of PTFE." },
      { name: "Flat Metal Gasket", description: "Can be fabricated to suit any required configuration. Flat metal gaskets offer exceptional mechanical strength, heat conductivity and high-pressure capability." },
      { name: "Ring Type Joint (RTJ) Gasket", description: "A precision-machined metal gasket used in high-pressure flange connections, common in oil & gas wellhead and process piping." },
      { name: "Non-Asbestos Sheet Gasket", description: "Non-asbestos materials are considered the most reliable option for sealing flanges across a wide variety of industrial applications." },
      { name: "Kammprofile Gasket", description: "A gasket with a serrated metal core bonded with a soft filler material on both sides. After installation the soft non-metallic filler enters the serrated grooves to form a tight seal." },
      { name: "Spiral Wound Gasket", description: "Categorised as semi-metallic and most often used in high-pressure applications — provides good recovery tolerance for irregularities in flange-surface finish." },
      { name: "Corrugated Metal Gasket", description: "Reliable and cost-effective gaskets for flanges and heads where bolt loading is adequate. Constant load creates the sealing effect." },
      { name: "Rubber Sheet Material Gasket", description: "Punched or cut to shape from industrially manufactured rubber sheets, suitable for low-pressure water, air and chemical service." },
      { name: "Rubber Gasket", description: "Gaskets made from fluorosilicone are suitable for the same conditions as silicone but offer superior chemical resistance." },
      { name: "Flange Gaskets", description: "Designed to fit between two sections of pipe — variants available for ultra-high vacuum systems and aggressive media." },
      { name: "Ring Joint Gaskets", description: "Designed for use in high-pressure applications and typically used in the oil and gas industry on API 6A flanges." },
      { name: "PTFE Gaskets", description: "PTFE (polytetrafluoroethylene) gaskets, also known as Teflon gaskets, are widely recognised for their excellent chemical resistance across aggressive media." },
      { name: "Nitrile Rubber (NBR)", description: "Also known as Buna-N or acrylonitrile-butadiene rubber — a synthetic rubber with excellent oil and fuel resistance. Trade names include Perbunan, Nipol, Krynac and Europrene." },
      { name: "Cork Gaskets", description: "Made from compressed cork material, known for natural flexibility, resilience and conformability — ideal for low-pressure flange and cover applications." },
    ],
  },

  instrumentation: {
    slug: "instrumentation",
    parent: "Instrumentation",
    parentN: "02",
    title: "Instrumentation",
    intro:
      "Field instruments, transmitters, analysers and precision measurement tools that turn process data into reliable, actionable signals.",
    hero: imgTransmitters,
    items: [
      { name: "Temperature & Pressure Gauges", image: imgTransmitters, description: "A well-known supplier of diaphragm-type pressure gauges to a large client base across process and utility industries." },
      { name: "Pressure & Temperature Flow", description: "Complete sets of onboard calibration and testing equipment combined with services, ensuring your equipment is available and ready when you need it." },
      { name: "Transmitters", description: "FKC high-accuracy differential pressure sensor models accurately measure differential pressure and transmit a proportional 4–20 mA electrical output signal." },
      { name: "Flow Meters", description: "Each flow meter has a screen visualising measurements. Some models also send data via digital interface or pulse output to onboard telematics or recording units." },
      { name: "CO₂ / H₂O Gas Analyzers", description: "The flue gas analyser testo 350 MARITIME measures gaseous exhaust concentrations of NO, NO₂, SO₂, CO, CO₂-(IR), O₂ on marine diesel engines." },
      { name: "Gas Analyzers", image: imgSafetyDetection, description: "Infrared sensing — a flexible measurement technology based on the unique light-absorbing properties of specific gases." },
      { name: "RTD Sensors", description: "Quality is directly linked to safety, operating costs and efficiency. Marine-approved sensors are tested meticulously to provide predictability and security." },
      { name: "Thermocouples", description: "A device for measuring temperature. Two dissimilar metallic wires joined to form a junction; heating or cooling generates a small voltage corresponding to temperature." },
      { name: "Protractor", description: "A basic device used for measuring angles with a least count of 1° or ½°. Bevel protractors are angular measuring instruments used in machining and inspection." },
      { name: "HART Communicator", description: "A secondary master device that enables the technician in the field to monitor process parameter values and configure smart instruments." },
      { name: "Telescopic Gauge", description: "A measuring instrument with a spring-loaded plunger used together with a micrometer to measure bore diameters and inside hole dimensions." },
      { name: "Pressure Sensor", description: "Detects pressure and transforms it into an electric signal whose strength is dependent on the pressure being applied." },
      { name: "Calliper", description: "An instrument used to measure the dimensions of an object or hole — length, width, thickness, diameter or depth." },
      { name: "Micrometer", description: "Also known as outside or external micrometer — used to check the outside diameter of cylindrical components with high precision." },
      { name: "Bubble Inclinometer", description: "An inclinometer simply determines how steep a particular incline is — used in alignment, structural and geotechnical work." },
      { name: "Electrical Measuring Tools", description: "Electronics manufacturing measuring instruments are essential for engineers and technicians to measure, test and troubleshoot circuits and assemblies." },
      { name: "Industrial Temperature Instruments", description: "Designed by experts using premium raw materials — widely used to meet the temperature monitoring demands of varied industries." },
      { name: "Magnetic Flow Meter", image: imgControlSystems, description: "A transducer that measures fluid flow by the voltage induced across the liquid as it flows through a magnetic field — proportional to flow velocity perpendicular to the flux lines." },
      { name: "Position & Displacement Sensors", description: "Position and displacement sensors paired with controllers and valves — typically implemented mechanically or electronically — enable closed-loop process control." },
    ],
  },

  "mechanical-equipment": {
    slug: "mechanical-equipment",
    parent: "Mechanical Solutions",
    parentN: "01",
    title: "Mechanical Equipment",
    intro:
      "Compressors, pumps, boilers, hoses and filtration systems engineered for heavy industrial duty across marine, oilfield and process plants.",
    hero: imgCompressors,
    items: [
      { name: "Air Conditioner Compressor", description: "The most vital component of an air conditioning system — circulates refrigerant to all other parts and compresses it to increase its overall temperature." },
      { name: "Centrifugal Compressors", image: imgCompressors, description: "Rotational compressors that use a fast-spinning disk to propel gas into a cylinder where it is transformed into pressurised energy. A diffuser converts velocity energy into pressurised air." },
      { name: "Rotary Screw Compressors", description: "Also known as rotary air compressors — use two meshing helical rotors to compress air, forcing it through chambers into a smaller space." },
      { name: "Reciprocating Compressors", description: "A piston (reciprocating) displacement compressor — high efficiency at full and partial loads, but noisier and larger than other types." },
      { name: "Double-Acting Compressors", description: "A positive-displacement reciprocating compressor that compresses air on both the up-stroke and down-stroke of the piston — doubling the capacity of a given cylinder size." },
      { name: "Mixed-Flow Compressor", description: "Combines axial and radial flow paths — exit mean radius is greater at the inlet like a centrifugal design, but flow exits axially rather than radially." },
      { name: "Boilers", image: imgEngineRoom, description: "Power boilers are large vessels designed to generate steam or hot water for various industrial processes or heating purposes." },
      { name: "3D Printing Machinery", description: "Additive manufacturing — the construction of a three-dimensional object from a CAD model or digital 3D model, layer by layer." },
      { name: "Automated Machinery", description: "CNC machines, lathes, milling machines, assembly-line machinery and robotics for automotive and general manufacturing." },
      { name: "Filters & Cartridges", description: "A porous device for removing impurities or solid particles from a liquid or gas passed through it — used across industrial and everyday applications." },
      { name: "Filtration System", description: "Water filtration systems remove minute particles from feed water through fine physical barriers and chemical or biological processes." },
      { name: "Compressors", description: "Reliable LT KE units use pressure and temperature gauges (not electronic sensors) for fast, easy read-outs. Can be cooled with both sea water and fresh water for quick installation." },
      { name: "Motors and Pumps", image: imgPumps, description: "Sea water pumps transfer or circulate sea water for various marine applications — ballast transfer, bilge pumping, firefighting and high-pressure deck washing." },
      { name: "Centrifugal Pumps", description: "The most commonly used pump type in the world — robust, efficient and inexpensive to manufacture. Fluid pressure increases from the pump's inlet to its outlet, driving fluid through the system." },
      { name: "Multistage Pumps", description: "These pumps include two or more impellers and are used for high-head pumping services. Each stage acts as a manifold pump, building pressure progressively." },
      { name: "Centrifugal Air Compressors", description: "Produce highly pressurised discharge of air via a rotating impeller that imparts velocity to the air — converted to pressure energy in the diffuser stage (dynamic compression)." },
      { name: "Hydraulic Hoses & Accessories", description: "High-quality stainless steel and aluminium-alloy assemblies for years of trouble-free service. 24-foot quality hydraulic hose lengths available." },
      { name: "Submersible Pumps", description: "Also known as stormwater, sewage and septic pumps — used in building services, domestic, industrial, commercial, rural, municipal and stormwater recycling applications." },
      { name: "Mechanical Filtration", description: "A modern process using media arranged in the filter body to meet industrial filtration requirements — divided into surface filtration and depth filtration." },
      { name: "Centrifugal Filtration", description: "Reliable, durable and efficient filters — commonly used for lube oil filtration in engines and hydraulic systems." },
      { name: "Pressure Filtration", description: "Involves applying pressure to force the liquid or gas through a filter medium — increases throughput and efficiency over gravity filtration." },
      { name: "Self-Cleaning Filter Systems", description: "A wide range of self-cleaning filter systems for liquid filtration across various industries — designed to minimise downtime and maintenance." },
      { name: "Vacuum Filtration", description: "A type of pressure filtration where a vacuum pump is used to create a pressure differential across the filter medium." },
      { name: "Hydraulic Hoses", description: "The veins and arteries of a machine — they transfer the fluid that keeps the machine running across cylinders, motors and valves." },
      { name: "Chemical Hose", description: "Designed to transfer various chemicals, acids and solvents safely between vessels, tankers and process equipment." },
      { name: "Steam Hose", description: "A heavy-duty hose with rubber tube and cover and steel-wire reinforcement. EPDM or butyl rubber is used in the hose tube to withstand high temperatures." },
      { name: "Rubber Hoses", description: "A popular choice for hydraulic systems — flexible, durable and economical for a wide range of pressure applications." },
      { name: "Petroleum Transfer Hose", description: "Used to transfer gasoline, oil, ethanol blends and other petroleum-based products up to 50% aromatic content in tank-truck and in-plant operations." },
      { name: "Silicone Hose", description: "A highly versatile, durable and flexible hose option — silicone retains its shape when exposed to extremely high temperatures." },
      { name: "Suction Hose", description: "A specific type of fire hose used in drafting operations — when a fire engine uses a vacuum to draw water from a portable tank, pool or other static source." },
      { name: "Composite Hoses", description: "Vapour-recovery hoses used in petrol stations and fuel terminals to capture and return fuel vapour emissions safely." },
      { name: "Corrugated Hose", description: "Includes PU duct hose and fully conductive variants — applications span hydraulic, food processing and water supply." },
      { name: "Aerospace Hose", description: "R157 (660 Series) is a heavyweight 3000 psi (207 bar) aerospace hose assembly qualified to AS604 — extruded smoothbore PTFE innercore reinforced with multiple layers of CRES 304 wire braid, −65 °F to +400 °F." },
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
              <Reveal key={item.name} delay={i * 30}>
                <div className="bg-white h-full flex flex-col group hover:bg-brand-soft transition-colors">
                  {item.image && (
                    <div className="aspect-[4/3] overflow-hidden bg-brand-soft">
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        width={768}
                        height={576}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-baseline gap-3 mb-4">
                      <span className="text-[11px] tracking-editorial uppercase text-gold">{String(i + 1).padStart(2, "0")}</span>
                      <h3 className="font-display-light text-xl tracking-tight">{item.name}</h3>
                    </div>
                    <div className="h-px w-10 rule-gold mb-5" />
                    <p className="text-[13px] text-foreground/75 leading-[1.8] font-light">{item.description}</p>
                  </div>
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
