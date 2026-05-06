type Props = {
  name: string;
  className?: string;
};

/**
 * Editorial monogram logo. Generates a refined typographic mark
 * from the partner's name — premium feel without third-party assets.
 */
const PartnerLogo = ({ name, className = "" }: Props) => {
  const words = name.replace(/\b(Co|Ltd|Inc|Industrial|Industry|Mechanical|Manufacturing|Pipe|Valve|Water|Gaspack)\b\.?/gi, "").trim().split(/\s+/);
  const initials = (words[0]?.[0] || "") + (words[1]?.[0] || words[0]?.[1] || "");
  const tag = name.split(" ")[0].toUpperCase();

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-12 h-12 shrink-0">
        <div className="absolute inset-0 border border-gold/60" />
        <div className="absolute inset-[3px] bg-brand flex items-center justify-center">
          <span className="font-display-light text-white text-lg tracking-wider">{initials.toUpperCase()}</span>
        </div>
      </div>
      <div className="leading-tight">
        <div className="font-display-light text-base tracking-wide-2 uppercase text-foreground">{tag}</div>
        <div className="text-[9px] tracking-editorial uppercase text-gold">Engineered Partner</div>
      </div>
    </div>
  );
};

export default PartnerLogo;