"use client";
import { motion } from "framer-motion";
import { WHATSAPP } from "@/lib/data";

export default function TestRide() {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* ── VIDEO BACKGROUND ────────────────────────────────────────── */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/video/video-1.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* ── DARK OVERLAY ────────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/35" />

      {/* ── CONTENT ─────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center"
      >
        <p className="text-brand-red tracking-[0.3em] text-xs mb-4">FREE TEST RIDE</p>
        <h2 className="font-display text-4xl sm:text-6xl leading-tight text-white">
          Feel the thrill first.
        </h2>
        <p className="mt-5 text-white/75 max-w-xl mx-auto">
          Book a free test ride today and experience the power, comfort and style before you commit. No pressure — just pure ride.
        </p>
        
        <a  href={WHATSAPP}
          className="inline-block mt-9 bg-brand-red text-white hover:bg-red-700 px-8 py-4 rounded-full font-semibold tracking-wide transition-colors"
        >
          BOOK A RIDE
        </a>
      </motion.div>

    </section>
  );
}