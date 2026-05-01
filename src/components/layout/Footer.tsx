import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import logo from "@/assets/indess-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[hsl(210_100%_8%)] text-white/70">
      <div className="container py-20 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white inline-flex p-2.5">
            <img src={logo} alt="INDESS" className="h-8 w-auto" width={160} height={32} />
          </div>
          <p className="text-sm leading-relaxed text-white/55 max-w-md font-light">
            Industrial Energy Supply Solutions — engineering trust through precision-sourced equipment for the world&rsquo;s most demanding industries.
          </p>
          <div className="h-px w-16 rule-gold" />
          <p className="text-[10px] tracking-editorial uppercase text-gold">Engineered Confidence</p>
        </div>

        <div className="lg:col-span-4 space-y-4">
          <p className="text-[10px] tracking-editorial uppercase text-white/40">Headquarters</p>
          <ul className="space-y-3 text-sm text-white/65 font-light">
            <li className="flex gap-3"><MapPin size={15} className="mt-0.5 text-gold shrink-0" />Ahmed Sultan Yousuf Building, Sector M-09, Mussafah Industrial Area, P.O. Box 9101, Abu Dhabi, UAE</li>
            <li className="flex gap-3"><Mail size={15} className="text-gold shrink-0" /><a href="mailto:sales@indessuae.com" className="hover:text-white">sales@indessuae.com</a></li>
            <li className="flex gap-3"><Phone size={15} className="text-gold shrink-0" />+971 2 671 1663</li>
          </ul>
        </div>

        <div className="lg:col-span-3 space-y-4">
          <p className="text-[10px] tracking-editorial uppercase text-white/40">Follow</p>
          <a href="#" className="inline-flex items-center gap-2 text-sm text-white/65 hover:text-white">
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container py-5 text-[11px] text-white/35 flex flex-col md:flex-row justify-between gap-2 font-light tracking-wider">
          <p>© 2025 INDESS · Industrial Energy Supply Solutions</p>
          <p>indessuae.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
