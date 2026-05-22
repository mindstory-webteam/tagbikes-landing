"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { WHATSAPP } from "@/lib/data";

export default function About() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-white via-neutral-50 to-white overflow-hidden">

      {/* Subtle background watermark */}
      <div
        className="absolute inset-0 pointer-events-none select-none flex items-center justify-center opacity-[0.03]"
        aria-hidden
      >
        <span className="font-display text-[20vw] font-black tracking-tighter text-neutral-900 whitespace-nowrap">
          TAGS BIKEZ
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* ── LEFT — Text ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-brand-red tracking-[0.3em] text-xs mb-4">WHO WE ARE</p>

          <h2 className="font-display text-4xl sm:text-6xl leading-tight">
            More Than a <br />
            <span className="italic text-neutral-500">Dealership.</span>
          </h2>

          <p className="mt-6 text-neutral-600 text-lg max-w-lg leading-relaxed">
            Tags Bikez is Royal Enfield's trusted dealership in Thrissur, Kerala — a place where passionate riders find their perfect machine. We don't just sell motorcycles; we help you find the one that matches your soul.
          </p>

          <p className="mt-4 text-neutral-500 text-base max-w-lg leading-relaxed">
            From the thundering Bullet to the adventure-ready Himalayan, our showroom houses the complete Royal Enfield lineup. Our team of riders and experts guide every customer through their journey — test rides, financing, accessories, and lifelong service support.
          </p>

          {/* Pillars */}
          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              { icon: "🏍️", label: "Full RE Lineup" },
              { icon: "🔧", label: "Expert Service" },
              { icon: "📍", label: "Thrissur, Kerala" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-start gap-2"
              >
                <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center text-lg">
                  {item.icon}
                </div>
                <span className="text-xs tracking-widest text-neutral-500 font-semibold">
                  {item.label.toUpperCase()}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <div className="mt-10 h-px bg-neutral-200 max-w-md" />

          {/* Quote */}
          <blockquote className="mt-8 pl-4 border-l-2 border-brand-red">
            <p className="text-neutral-700 text-base italic leading-relaxed">
              "Every ride begins with trust — trust in your bike, trust in your dealer, trust in the road ahead."
            </p>
            <footer className="mt-2 text-xs tracking-widest text-neutral-400 font-semibold">
              — TAGS BIKEZ, THRISSUR
            </footer>
          </blockquote>

          {/* CTAs */}
          <div className="mt-10 flex gap-4 flex-wrap">
            
             <a href="#models"
              className="bg-brand-red text-white px-7 py-3 rounded-full text-sm font-semibold tracking-wide hover:bg-red-700 transition-colors"
            >
              EXPLORE MODELS
            </a>
            
             <a href={WHATSAPP}
              className="border border-neutral-300 px-7 py-3 rounded-full text-sm font-semibold tracking-wide hover:border-neutral-900 transition-colors"
            >
              CONTACT US
            </a>
          </div>
        </motion.div>

        {/* ── RIGHT — Image ────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          {/* Decorative frame */}
          <div
            className="absolute -top-4 -right-4 w-full h-full rounded-3xl border border-brand-red/20 pointer-events-none"
            aria-hidden
          />
          <div
            className="absolute -bottom-4 -left-4 w-full h-full rounded-3xl border border-neutral-200 pointer-events-none"
            aria-hidden
          />

          {/* Main image container */}
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-neutral-100">
            <Image
              src="https://tagsbikez.vercel.app/_next/static/media/bulletimg.0is61uxl_20g..png"
              alt="Tags Bikez Showroom — Royal Enfield Thrissur"
              fill
              className="object-cover"
            />

            {/* Bottom badge */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="text-white font-display text-xl font-bold">Tags Bikez</p>
              <p className="text-white/70 text-xs tracking-widest mt-1">
                ROYAL ENFIELD · AUTHORISED DEALER · THRISSUR
              </p>
            </div>

            {/* Est. badge */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-red" />
              <span className="text-[10px] tracking-widest font-bold text-neutral-700">
                EST. THRISSUR
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}