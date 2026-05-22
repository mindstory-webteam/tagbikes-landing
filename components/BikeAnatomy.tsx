"use client";
import {
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";

import { FRAME_URLS_PUBLIC, FRAME_COUNT } from "./Bikeframes";
const FRAME_URLS = FRAME_URLS_PUBLIC;

// ---------------------------------------------------------------------------
// PARTS
// ---------------------------------------------------------------------------
const PARTS = [
  {
    id: "silhouette",
    label: "Classic Meteor Silhouette",
    at: 0.10,
    description:
      "The Meteor 350 revives Royal Enfield's legendary cruiser DNA with a teardrop tank, low-slung stance, and swooping tail — a timeless profile that commands every road it graces.",
    spec: "Cruiser · Low-Slung · Heritage Design",
  },
  {
    id: "engine",
    label: "349cc J-Series Engine",
    at: 0.25,
    description:
      "A single-cylinder 349cc SOHC long-stroke engine produces 20.2 PS and 27 Nm of torque, tuned for effortless mid-range pull and a deep, satisfying exhaust note.",
    spec: "349cc · 20.2 PS · 27 Nm Torque",
  },
  {
    id: "chassis",
    label: "Dual-Downtube Frame",
    at: 0.40,
    description:
      "A purpose-built dual-downtube spine frame sits low for relaxed ergonomics and delivers precise handling. Geometry tuned for long-distance comfort and confident cornering.",
    spec: "Steel Frame · 170mm Ground Clearance",
  },
  {
    id: "tripper",
    label: "Tripper Navigation Pod",
    at: 0.56,
    description:
      "Royal Enfield's Tripper navigation pod sits on the handlebar, offering turn-by-turn directions via Google Maps — the first on any RE motorcycle. Minimalist, rider-focused design.",
    spec: "Tripper Pod · Google Maps · BT 5.0",
  },
  {
    id: "suspension",
    label: "Twin Rear Suspension",
    at: 0.73,
    description:
      "Dual coil-over shock absorbers with 6-step preload adjustment soak up broken tarmac effortlessly. Front telescopic forks provide 130mm travel for confident highway cruising.",
    spec: "Twin Shocks · 6-Step · 130mm Fork",
  },
  {
    id: "brakes",
    label: "Dual-Channel ABS",
    at: 0.88,
    description:
      "300mm front and 270mm rear disc brakes with dual-channel ABS deliver confident, fade-free stopping power in all conditions — safety engineered for every kind of rider.",
    spec: "300mm Disc · Dual ABS · All-Terrain",
  },
];

// ---------------------------------------------------------------------------
// CANVAS FRAME RENDERER HOOK
// ---------------------------------------------------------------------------
function useCanvasFrames(
  canvasRef: React.RefObject<HTMLCanvasElement>,
  urls: string[]
) {
  const framesRef = useRef<(ImageBitmap | null)[]>([]);
  const [loaded, setLoaded] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (urls.length === 0) return;
    const bitmaps: (ImageBitmap | null)[] = new Array(urls.length).fill(null);
    let done = 0;

    const finish = (i: number, bmp: ImageBitmap | null) => {
      bitmaps[i] = bmp;
      done++;
      setLoaded(done);
      if (done === urls.length) {
        framesRef.current = bitmaps;
        setReady(true);
      }
    };

    urls.forEach((src, i) => {
      fetch(src)
        .then((r) => r.blob())
        .then((blob) => createImageBitmap(blob))
        .then((bmp) => finish(i, bmp))
        .catch(() => finish(i, null));
    });
  }, [urls]);

  const drawFrame = useCallback(
    (progress: number) => {
      const canvas = canvasRef.current;
      const frames = framesRef.current;
      if (!canvas || frames.length === 0) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const idx = Math.min(
        Math.floor(progress * frames.length),
        frames.length - 1
      );
      const bmp = frames[idx];
      if (!bmp) return;

      const cw = canvas.width;
      const ch = canvas.height;
      const scale = Math.max(cw / bmp.width, ch / bmp.height);
      const dw = bmp.width * scale;
      const dh = bmp.height * scale;
      const dx = (cw - dw) / 2;
      const dy = (ch - dh) / 2;

      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(bmp, dx, dy, dw, dh);
    },
    [canvasRef]
  );

  return { ready, loaded, total: urls.length, drawFrame };
}

// ---------------------------------------------------------------------------
// SIDE PANEL — full-height overlay with text directly on it (no white card)
// ---------------------------------------------------------------------------
function SidePanel({
  part,
  index,
  progress,
}: {
  part: (typeof PARTS)[number];
  index: number;
  progress: number;
}) {
  const win = 0.10;
  const dist = Math.abs(progress - part.at);
  const visible = dist < win;
  const strength = visible ? Math.pow(1 - dist / win, 1.2) : 0;

  const isLeft = index % 2 === 0;
  const translateX = visible ? 0 : (isLeft ? -40 : 40);

  return (
    <>
      {/* Gradient overlay panel — full height, half width */}
      <div
        className="absolute top-0 h-full pointer-events-none"
        style={{
          [isLeft ? "left" : "right"]: 0,
          width: "44%",
          zIndex: 8,
          opacity: strength,
          transition: "opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
          background: isLeft
            ? "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.60) 60%, transparent 100%)"
            : "linear-gradient(to left,  rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.60) 60%, transparent 100%)",
        }}
      />

      {/* Text content — sits on top of the gradient */}
      <div
        className="absolute top-0 h-full pointer-events-none flex flex-col justify-center"
        style={{
          [isLeft ? "left" : "right"]: 0,
          width: "44%",
          zIndex: 9,
          opacity: strength,
          transform: `translateX(${translateX}px)`,
          transition:
            "opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1), transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
          willChange: "opacity, transform",
          padding: isLeft ? "0 10% 0 7%" : "0 7% 0 10%",
        }}
      >
        {/* Index label */}
        <p
          style={{
            margin: "0 0 14px",
            fontFamily: "monospace",
            fontSize: 11,
            letterSpacing: "0.30em",
            color: "#dc2626",
            fontWeight: 600,
          }}
        >
          {String(index + 1).padStart(2, "0")} · FEATURE
        </p>

        {/* Red accent line */}
        <div
          style={{
            width: 40,
            height: 3,
            background: "#dc2626",
            marginBottom: 18,
            borderRadius: 2,
          }}
        />

        {/* Title */}
        <h3
          style={{
            margin: "0 0 16px",
            fontSize: "clamp(20px, 2.4vw, 32px)",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          {part.label}
        </h3>

        {/* Description */}
        <p
          style={{
            margin: "0 0 24px",
            fontSize: "clamp(12px, 1.1vw, 15px)",
            lineHeight: 1.70,
            color: "rgba(255,255,255,0.72)",
            fontWeight: 400,
          }}
        >
          {part.description}
        </p>

        {/* Spec pill */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(220,38,38,0.18)",
            border: "1px solid rgba(220,38,38,0.45)",
            borderRadius: 999,
            padding: "6px 14px",
            alignSelf: "flex-start",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#dc2626",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: "monospace",
              fontSize: 10,
              letterSpacing: "0.20em",
              color: "#fca5a5",
              fontWeight: 600,
            }}
          >
            {part.spec}
          </span>
        </div>
      </div>
    </>
  );
}

// ---------------------------------------------------------------------------
// MAIN COMPONENT
// ---------------------------------------------------------------------------
export default function BikeAnatomy() {
  const ref = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const rawProgressRef = useRef(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    rawProgressRef.current = v;
  });

  const [cardProgress, setCardProgress] = useState(0);

  const { ready, loaded, total, drawFrame } = useCanvasFrames(canvasRef, FRAME_URLS);

  const smoothRef = useRef(0);
  const rafRef = useRef<number>(0);
  const readyRef = useRef(false);

  useEffect(() => {
    readyRef.current = ready;
  }, [ready]);

  useEffect(() => {
    const loop = () => {
      rafRef.current = requestAnimationFrame(loop);
      if (!readyRef.current) return;

      const target = rawProgressRef.current;
      smoothRef.current += (target - smoothRef.current) * 0.12;

      const clamped = Math.max(0, Math.min(1, smoothRef.current));
      drawFrame(clamped);

      setCardProgress((prev) =>
        Math.abs(prev - clamped) > 0.001 ? clamped : prev
      );
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [drawFrame]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ro = new ResizeObserver(() => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      drawFrame(smoothRef.current);
    });
    ro.observe(canvas);
    return () => ro.disconnect();
  }, [drawFrame]);

  const loadPct = Math.round((loaded / total) * 100);

  return (
    <section
      ref={ref}
      id="bike-anatomy"
      className="relative bg-black"
      style={{ height: "600vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">

        {/* CANVAS — GPU composited */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ zIndex: 1, willChange: "contents" }}
        />

        {/* LOADING OVERLAY */}
        {!ready && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black gap-5">
            <div
              className="rounded-full border-2 animate-spin"
              style={{
                width: 40,
                height: 40,
                borderColor: "#1a1a1a",
                borderTopColor: "#dc2626",
              }}
            />
            <div
              className="rounded-full overflow-hidden"
              style={{ width: 180, height: 2, background: "#111" }}
            >
              <div
                className="h-full rounded-full transition-all duration-300"
                style={{ width: `${loadPct}%`, background: "#dc2626" }}
              />
            </div>
            <span className="font-mono text-[10px] tracking-widest text-white/25">
              {loaded} / {total} FRAMES
            </span>
          </div>
        )}

        {/* VIGNETTE */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 2,
            background:
              "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.6) 100%)",
          }}
        />

        {/* SIDE PANELS — each handles its own gradient + text */}
        {PARTS.map((part, i) => (
          <SidePanel
            key={part.id}
            part={part}
            index={i}
            progress={cardProgress}
          />
        ))}
      </div>
    </section>
  );
}