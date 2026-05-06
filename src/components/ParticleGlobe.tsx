import { useEffect, useRef } from "react";

export type GlobePin = {
  name: string;
  lat: number;
  lon: number;
  flag: string; // emoji
};

type Props = {
  pins: GlobePin[];
  className?: string;
};

/**
 * Creative-coded particle globe.
 * - Sphere of points generated via Fibonacci lattice
 * - Land-mass distribution approximated by a low-res equirectangular mask
 * - Slow auto-rotation, pins rendered with flag emoji + label, depth-sorted
 */

// Compact land mask: 72 cols x 36 rows of 0/1 (1 = land)
// Hand-tuned approximation of continents for visual purposes only.
const LAND_MASK = [
  "000000000000000000000000000000000000000000000000000000000000000000000000",
  "000000000000000000000000000000000000000000000000000000000000000000000000",
  "000000000111111111111111111111111111111111111111111111111111111000000000",
  "000000111111111111111111111111111111111111111111111111111111111100000000",
  "000001111111111111111111111111111111111111111111111111111111111110000000",
  "000011111111111111111111111111111111111111111111111111111111111110000000",
  "000011111111111110000111111111111111111111111111111111111111111100000000",
  "000001111111111000000111111111111111111111111111111111111111110000000000",
  "000000111111100000000011111111111111111111111111111111111110000000000000",
  "000000011111100000000111111111111111111111111111111111111000000000000000",
  "000000001111100000001111111111111111111111111111111111000000000000000000",
  "000000000111100000011111111111111111111111111111111000000000000000000000",
  "000000000011110001111111111111111111111111111111000000000000000000000000",
  "000000001110011111111111111111111111111111111100000000000000000000000000",
  "000000111110011111111111111111111111111111110000000000000000000000000000",
  "000001111110011111111111111111111111111111000000000000000000000000000000",
  "000011111110001111111111111111111111111100000000000000000000000000000000",
  "000011111100000111111111111111111111111000000000000000000000000000000000",
  "000011111100000011111111111111111111100000000000000000000000000000000000",
  "000001111100000001111111111111111111000000000000000000000000000000000000",
  "000000111000000000111111111111111100000000000000000000000000000000000000",
  "000000011000000000011111111111111000000000000000000000000000000000000000",
  "000000001000000000001111111111100000000000000000000000000000000000000000",
  "000000000000000000000111111111000000000000000000000000000000000000000000",
  "000000000000000000000011111110000000000000000000000000000000000000000000",
  "000000000000000000000001111100000000000000000000000000000000000000000000",
  "000000000000000000000000111000000000000000000000000000000000000000000000",
  "000000000000000000000000010000000000000000000000000000000000000000000000",
  "000000000000000000000000000000000000000000000000000000000000000000000000",
  "000000000000000000000000000000000000000000000000000000000000000000000000",
  "000000000000000000000000000000000000000000000000000000000000000000000000",
  "000000000000000000000000000000000000000000000000000000000000000000000000",
  "000000000000000000000000000000000000000000000000000000000000000000000000",
  "000000000000000000000000000000000000000000000000000000000000000000000000",
  "000000000000000000000000000000000000000000000000000000000000000000000000",
  "000000000000000000000000000000000000000000000000000000000000000000000000",
];

const isLand = (lat: number, lon: number) => {
  // lat: -90..90, lon: -180..180
  const cols = 72;
  const rows = LAND_MASK.length;
  const x = Math.floor(((lon + 180) / 360) * cols) % cols;
  const y = Math.floor(((90 - lat) / 180) * rows);
  const row = LAND_MASK[Math.max(0, Math.min(rows - 1, y))];
  return row && row[x] === "1";
};

const latLonToVec = (lat: number, lon: number, r: number) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return {
    x: -r * Math.sin(phi) * Math.cos(theta),
    y: r * Math.cos(phi),
    z: r * Math.sin(phi) * Math.sin(theta),
  };
};

const ParticleGlobe = ({ pins, className = "" }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const rotRef = useRef({ y: 0, x: -0.2, vy: 0.0015, dragging: false, lastX: 0, lastY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0, H = 0, R = 0;
    const points: { lat: number; lon: number; land: boolean }[] = [];

    // Generate point cloud using Fibonacci lattice
    const N = 1800;
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < N; i++) {
      const yy = 1 - (i / (N - 1)) * 2;
      const radius = Math.sqrt(1 - yy * yy);
      const theta = golden * i;
      const xx = Math.cos(theta) * radius;
      const zz = Math.sin(theta) * radius;
      const lat = Math.asin(yy) * (180 / Math.PI);
      const lon = Math.atan2(zz, xx) * (180 / Math.PI);
      points.push({ lat, lon, land: isLand(lat, lon) });
    }

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      R = Math.min(W, H) * 0.42;
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    const rotate = (p: { x: number; y: number; z: number }, ax: number, ay: number) => {
      // Rotate around Y
      const cy = Math.cos(ay), sy = Math.sin(ay);
      let x = p.x * cy + p.z * sy;
      let z = -p.x * sy + p.z * cy;
      let y = p.y;
      // Rotate around X
      const cx = Math.cos(ax), sx = Math.sin(ax);
      const y2 = y * cx - z * sx;
      const z2 = y * sx + z * cx;
      return { x, y: y2, z: z2 };
    };

    const draw = () => {
      const cx = W / 2;
      const cy = H / 2;
      ctx.clearRect(0, 0, W, H);

      // Soft halo
      const halo = ctx.createRadialGradient(cx, cy, R * 0.3, cx, cy, R * 1.6);
      halo.addColorStop(0, "rgba(0, 93, 168, 0.18)");
      halo.addColorStop(0.6, "rgba(0, 93, 168, 0.05)");
      halo.addColorStop(1, "rgba(0, 93, 168, 0)");
      ctx.fillStyle = halo;
      ctx.fillRect(0, 0, W, H);

      // Sphere edge ring
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(209, 184, 122, 0.18)";
      ctx.lineWidth = 1;
      ctx.stroke();

      const ay = rotRef.current.y;
      const ax = rotRef.current.x;

      // Draw particles
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        const v = latLonToVec(p.lat, p.lon, 1);
        const r = rotate(v, ax, ay);
        if (r.z < -0.05) continue; // backface cull (with slight wrap)
        const px = cx + r.x * R;
        const py = cy + r.y * R;
        const depth = (r.z + 1) / 2; // 0..1
        if (p.land) {
          ctx.fillStyle = `rgba(255, 255, 255, ${0.35 + depth * 0.6})`;
          ctx.fillRect(px - 1, py - 1, 1.8, 1.8);
        } else {
          ctx.fillStyle = `rgba(120, 170, 220, ${0.08 + depth * 0.18})`;
          ctx.fillRect(px, py, 1, 1);
        }
      }

      // Pins
      const placed: { px: number; py: number; depth: number; pin: GlobePin }[] = [];
      for (const pin of pins) {
        const v = latLonToVec(pin.lat, pin.lon, 1);
        const r = rotate(v, ax, ay);
        const px = cx + r.x * R;
        const py = cy + r.y * R;
        placed.push({ px, py, depth: r.z, pin });
      }
      placed.sort((a, b) => a.depth - b.depth);
      for (const { px, py, depth, pin } of placed) {
        const front = depth > -0.15;
        const alpha = front ? 1 : 0.18;
        // pin stem
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(px, py - 14);
        ctx.strokeStyle = `rgba(209, 184, 122, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        // dot
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(209, 184, 122, ${alpha})`;
        ctx.fill();
        // flag chip
        ctx.font = "16px 'Apple Color Emoji','Segoe UI Emoji','Noto Color Emoji',sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.globalAlpha = alpha;
        ctx.fillText(pin.flag, px, py - 24);
        // label
        if (front) {
          ctx.font = "500 9px 'Inter',sans-serif";
          ctx.fillStyle = "rgba(255,255,255,0.85)";
          const label = pin.name.toUpperCase();
          const tw = ctx.measureText(label).width;
          ctx.fillStyle = "rgba(0, 16, 40, 0.7)";
          ctx.fillRect(px - tw / 2 - 5, py - 44, tw + 10, 13);
          ctx.fillStyle = "rgba(255,255,255,0.9)";
          ctx.fillText(label, px, py - 37);
        }
        ctx.globalAlpha = 1;
      }

      // Auto-rotate
      if (!rotRef.current.dragging) {
        rotRef.current.y += rotRef.current.vy;
      }
      rafRef.current = requestAnimationFrame(draw);
    };
    rafRef.current = requestAnimationFrame(draw);

    // Drag interaction
    const onDown = (e: PointerEvent) => {
      rotRef.current.dragging = true;
      rotRef.current.lastX = e.clientX;
      rotRef.current.lastY = e.clientY;
      (e.target as Element).setPointerCapture?.(e.pointerId);
    };
    const onMove = (e: PointerEvent) => {
      if (!rotRef.current.dragging) return;
      const dx = e.clientX - rotRef.current.lastX;
      const dy = e.clientY - rotRef.current.lastY;
      rotRef.current.y += dx * 0.005;
      rotRef.current.x = Math.max(-1.2, Math.min(1.2, rotRef.current.x + dy * 0.005));
      rotRef.current.lastX = e.clientX;
      rotRef.current.lastY = e.clientY;
    };
    const onUp = () => { rotRef.current.dragging = false; };
    canvas.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      canvas.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [pins]);

  return (
    <div ref={wrapRef} className={`relative w-full ${className}`}>
      <canvas ref={canvasRef} className="block w-full h-full cursor-grab active:cursor-grabbing" />
    </div>
  );
};

export default ParticleGlobe;