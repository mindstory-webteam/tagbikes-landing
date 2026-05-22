"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { banners, WHATSAPP } from "@/lib/data";

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % banners.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={banners[i]}
            alt="Royal Enfield"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-5 sm:px-8 flex flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-brand-red tracking-[0.3em] text-xs mb-4"
        >
          ROYAL ENFIELD · THRISSUR
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="font-display text-5xl sm:text-7xl md:text-8xl leading-[0.95] max-w-3xl"
        >
          Ride the soul of motorcycling.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.7 }}
          className="mt-6 text-neutral-700 max-w-xl text-base sm:text-lg"
        >
          Discover the complete 2026 Royal Enfield lineup, genuine accessories, expert service and easy EMI — all under one roof.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.7 }}
          className="mt-10 flex gap-4"
        >
          <a href="#models" className="bg-brand-red text-white hover:bg-red-700 px-7 py-3.5 rounded-full font-semibold tracking-wide">
            EXPLORE MODELS
          </a>
          <a href={WHATSAPP} className="border border-neutral-300 hover:border-neutral-900 px-7 py-3.5 rounded-full font-semibold tracking-wide backdrop-blur-sm">
            BOOK A TEST RIDE
          </a>
        </motion.div>
      </div>

      <button onClick={() => setI((p) => (p - 1 + banners.length) % banners.length)} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-neutral-100 hover:bg-neutral-200 backdrop-blur">
        <ChevronLeft />
      </button>
      <button onClick={() => setI((p) => (p + 1) % banners.length)} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-neutral-100 hover:bg-neutral-200 backdrop-blur">
        <ChevronRight />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {banners.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            className={`h-1.5 rounded-full transition-all ${idx === i ? "w-10 bg-brand-red" : "w-4 bg-white/40"}`}
          />
        ))}
      </div>
    </section>
  );
}
