import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Youtube, Twitter } from "lucide-react";
import logo from "@/assets/indess-logo.png";

const Footer = () => {
  return (
    <footer className="gradient-deep text-white/85 mt-24">
      <div className="container py-16 grid lg:grid-cols-4 gap-10">
        <div className="lg:col-span-2 space-y-5">
          <div className="bg-white inline-flex p-2 rounded">
            <img src={logo} alt="INDESS" className="h-8 w-auto" width={160} height={32} />
          </div>
          <p className="text-sm leading-relaxed text-white/70 max-w-md">
            Industrial Energy Supply Solutions — your trusted partner for
            top-quality oil &amp; gas supply equipment across the UAE and beyond.
          </p>
          <div className="flex gap-3 pt-2">
            {[Linkedin, Youtube, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-md border border-white/15 flex items-center justify-center hover:bg-brand hover:border-brand transition-all"
                aria-label="Social link"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigate</h4>
          <ul className="space-y-2.5 text-sm">
            {[
              ["Company", "/"],
              ["Brands", "/brands"],
              ["Products", "/products"],
              ["Partners", "/partners"],
              ["Contact", "/contact"],
            ].map(([l, h]) => (
              <li key={h}>
                <Link to={h} className="text-white/65 hover:text-white transition-colors">{l}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">UAE Office</h4>
          <ul className="space-y-3 text-sm text-white/65">
            <li className="flex gap-3"><MapPin size={16} className="mt-0.5 text-brand-glow shrink-0" />Ahmed Sultan Yousuf Building, Sector M-09, Mussafah Industrial Area, P.O. Box 9101, Abu Dhabi, UAE</li>
            <li className="flex gap-3"><Mail size={16} className="text-brand-glow shrink-0" /><a href="mailto:sales@indessuae.com" className="hover:text-white">sales@indessuae.com</a></li>
            <li className="flex gap-3"><Phone size={16} className="text-brand-glow shrink-0" />+971-2-6711 663</li>
            <li className="flex gap-3"><Phone size={16} className="text-brand-glow shrink-0" />+971-58-5454-064</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container py-5 text-xs text-white/50 flex flex-col md:flex-row justify-between gap-2">
          <p>© 2025 Industrial Energy Supply Solutions. All Rights Reserved.</p>
          <p>indessuae.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;