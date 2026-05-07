import { useEffect, useRef } from "react";

export type MapPin = {
  name: string;
  lat: number;
  lon: number;
  flag: string;
};

type Props = {
  pins: MapPin[];
  className?: string;
};

// Same low-res landmass mask as the globe (72 cols x 36 rows). 1 = land.
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

const COLS = 72;
const ROWS = LAND_MASK.length;

const isLand = (col: number, row: number) => {
  if (row < 0 || row >= ROWS) return false;
  const c = ((col % COLS) + COLS) % COLS;
  return LAND_MASK[row][c] === "1";
};

/**
 * Wide equirectangular world map rendered as a grid of small square particles.
 * Pins drop in with a flag chip and label; subtle animated shimmer.
 */
const ParticleWorldMap = ({ pins, className = "" }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const tRef = useRef(0);
  const startRef = useRef<number>(performance.now());

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0, H = 0;
    let cellW = 0, cellH = 0, dotSize = 0;
    // Upscale the visual grid for higher density than the source mask.
    const SCALE = 2;
    const gridCols = COLS * SCALE;
    const gridRows = ROWS * SCALE;

    const sampleLand = (gx: number, gy: number) => {
      // Sample neighborhood for soft coastline
      const sx = gx / SCALE;
      const sy = gy / SCALE;
      const c = Math.floor(sx);
      const r = Math.floor(sy);
      let hits = 0;
      let total = 0;
      for (let dx = 0; dx <= 1; dx++) {
        for (let dy = 0; dy <= 1; dy++) {
          if (isLand(c + dx, r + dy)) hits++;
          total++;
        }
      }
      return hits / total;
    };

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
      cellW = W / gridCols;
      cellH = H / gridRows;
      dotSize = Math.max(1, Math.min(cellW, cellH) * 0.62);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    const lonLatToXY = (lat: number, lon: number) => {
      const x = ((lon + 180) / 360) * W;
      const y = ((90 - lat) / 180) * H;
      return { x, y };
    };

    const draw = () => {
      const now = performance.now();
      const elapsed = (now - startRef.current) / 1000;
      tRef.current = elapsed;
      ctx.clearRect(0, 0, W, H);

      // Draw land particles
      for (let gy = 0; gy < gridRows; gy++) {
        for (let gx = 0; gx < gridCols; gx++) {
          const land = sampleLand(gx, gy);
          if (land < 0.25) continue;
          const px = gx * cellW + (cellW - dotSize) / 2;
          const py = gy * cellH + (cellH - dotSize) / 2;
          // shimmer wave
          const wave = 0.5 + 0.5 * Math.sin(elapsed * 1.2 + gx * 0.18 + gy * 0.22);
          const baseAlpha = 0.35 + land * 0.5;
          const alpha = Math.min(0.95, baseAlpha + wave * 0.18);
          ctx.fillStyle = `hsla(207, 90%, ${42 + wave * 12}%, ${alpha})`;
          ctx.fillRect(px, py, dotSize, dotSize);
        }
      }

      // Pins
      for (let i = 0; i < pins.length; i++) {
        const pin = pins[i];
        const { x, y } = lonLatToXY(pin.lat, pin.lon);
        const appear = Math.min(1, Math.max(0, elapsed - 0.4 - i * 0.08));
        const ease = 1 - Math.pow(1 - appear, 3);
        if (ease <= 0) continue;
        const lift = (1 - ease) * 14;

        // ping ring
        const pulse = (elapsed * 0.9 + i * 0.3) % 2;
        if (pulse < 1.4) {
          const pr = pulse * 18;
          ctx.beginPath();
          ctx.arc(x, y, pr, 0, Math.PI * 2);
          ctx.strokeStyle = `hsla(38, 60%, 65%, ${(1 - pulse / 1.4) * 0.6})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // stem
        ctx.globalAlpha = ease;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y - 18 - lift);
        ctx.strokeStyle = "hsla(38, 60%, 65%, 0.9)";
        ctx.lineWidth = 1;
        ctx.stroke();

        // dot
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "hsl(38, 60%, 65%)";
        ctx.fill();

        // flag
        ctx.font = "16px 'Apple Color Emoji','Segoe UI Emoji','Noto Color Emoji',sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(pin.flag, x, y - 28 - lift);

        // label chip
        ctx.font = "500 9px 'Inter',sans-serif";
        const label = pin.name.toUpperCase();
        const tw = ctx.measureText(label).width;
        ctx.fillStyle = "rgba(0, 16, 40, 0.85)";
        ctx.fillRect(x - tw / 2 - 6, y - 50 - lift, tw + 12, 14);
        ctx.fillStyle = "rgba(255,255,255,0.95)";
        ctx.fillText(label, x, y - 43 - lift);
        ctx.globalAlpha = 1;
      }

      rafRef.current = requestAnimationFrame(draw);
    };
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, [pins]);

  return (
    <div ref={wrapRef} className={`relative w-full ${className}`}>
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};

export default ParticleWorldMap;