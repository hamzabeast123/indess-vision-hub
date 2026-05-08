import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Auto-applies immersive scroll-reveal animations to common elements
 * across every page, without touching individual components.
 * Also drives a top scroll-progress bar via CSS variable --sp.
 */
const SELECTORS = [
  "section > .container > *",
  "section h1, section h2, section h3",
  "section p",
  "section img",
  "section a.group, section .group",
  "section li",
  "[data-reveal]",
].join(", ");

const variantFor = (el: Element, idx: number): string => {
  if (el.hasAttribute("data-anim")) return el.getAttribute("data-anim") || "up";
  const tag = el.tagName.toLowerCase();
  if (tag === "img") return "image";
  if (tag === "h1") return "reveal";
  if (tag === "h2" || tag === "h3") return "up";
  if (tag === "p") return "up";
  // alternating direction for grid items
  if (el.classList.contains("group") || tag === "li") return idx % 2 === 0 ? "left" : "right";
  return "up";
};

const ScrollAnimator = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Progress bar
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? h.scrollTop / max : 0;
      document.documentElement.style.setProperty("--sp", String(p));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Tag elements & observe
    const root = document.querySelector("main") || document.body;
    const candidates = Array.from(root.querySelectorAll(SELECTORS)) as HTMLElement[];

    // Group by parent for stagger
    const groupCounters = new WeakMap<Element, number>();
    candidates.forEach((el) => {
      if (el.dataset.animApplied === "1") return;
      // skip elements already inside another tagged element (avoid double anim)
      if (el.closest("[data-anim-skip-children]")) return;
      const parent = el.parentElement || root;
      const idx = groupCounters.get(parent) ?? 0;
      groupCounters.set(parent, idx + 1);
      const variant = variantFor(el, idx);
      el.setAttribute("data-anim", variant);
      el.style.transitionDelay = `${Math.min(idx * 70, 420)}ms`;
      el.dataset.animApplied = "1";
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -80px 0px" }
    );
    candidates.forEach((el) => io.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, [pathname]);

  return <div className="scroll-progress" aria-hidden />;
};

export default ScrollAnimator;