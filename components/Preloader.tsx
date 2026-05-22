"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Royal Enfield-style preloader:
 * - Full-screen white stage
 * - Centered wordmark with letter-by-letter fade
 * - Thin progress line that fills 0 → 100%
 * - Curtain slides up to reveal the page
 */
export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const DURATION = 2200; // ms
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / DURATION);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 350);
    };
    raf = requestAnimationFrame(tick);

    // Lock scroll while preloader is visible
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = prev;
    };
  }, []);

  useEffect(() => {
    if (done) document.body.style.overflow = "";
  }, [done]);

  const word = "TAGSBIKEZ";

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Word */}
          <div className="flex items-end gap-1 sm:gap-2">
            {word.split("").map((c, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.5, ease: "easeOut" }}
                className={`font-display text-4xl sm:text-6xl md:text-7xl tracking-[0.08em] ${
                  i < 4 ? "text-brand-red" : "text-neutral-900"
                }`}
              >
                {c}
              </motion.span>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-4 text-[10px] sm:text-xs tracking-[0.4em] text-neutral-500"
          >
            AUTHORISED ROYAL ENFIELD · THRISSUR
          </motion.p>

          {/* Progress line */}
          <div className="mt-12 w-[260px] sm:w-[420px] h-px bg-neutral-200 relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-brand-red"
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear", duration: 0.05 }}
            />
          </div>
          <div className="mt-4 font-mono text-xs tracking-widest text-neutral-500 tabular-nums">
            {String(progress).padStart(3, "0")}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
