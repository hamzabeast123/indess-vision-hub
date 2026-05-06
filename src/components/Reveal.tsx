import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
  y?: number;
};

const Reveal = ({ children, className = "", delay = 0, as = "div", y = 32 }: Props) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const Tag = as as any;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as any}
      style={{
        transitionDelay: `${delay}ms`,
        transform: visible ? "translateY(0) translateZ(0)" : `translateY(${y}px)`,
        opacity: visible ? 1 : 0,
      }}
      className={cn(
        "transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Reveal;