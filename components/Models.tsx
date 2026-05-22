"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { models, categories, WHATSAPP } from "@/lib/data";

export default function Models() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const filtered = useMemo(
    () => (cat === "All" ? models : models.filter((m) => m.category === cat)),
    [cat]
  );

  return (
    <section id="models" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
        >
          <div>
            <p className="text-brand-red tracking-[0.3em] text-xs mb-3">2026 LINEUP</p>
            <h2 className="font-display text-5xl sm:text-6xl">Our Models</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-4 py-2 rounded-full text-xs tracking-widest transition ${
                  cat === c ? "bg-brand-red text-white" : "border border-neutral-300 text-neutral-600 hover:border-neutral-900"
                }`}
              >
                {c.toUpperCase()}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((m, i) => (
              <motion.a
                key={m.name}
                href={WHATSAPP}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ y: -6 }}
                className="group relative bg-neutral-50 rounded-2xl overflow-hidden border border-neutral-200 hover:border-brand-red/60 transition"
              >
                <div className="relative aspect-[4/3] bg-gradient-to-br from-neutral-100 to-transparent">
                  <Image src={m.img} alt={m.name} fill className="object-contain p-6 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="text-xs tracking-widest text-brand-red">{m.category.toUpperCase()}</div>
                  <div className="font-display text-2xl mt-1">{m.name}</div>
                  <div className="mt-3 text-xs text-neutral-500">Starting from</div>
                  <div className="text-lg font-semibold">{m.price}</div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
