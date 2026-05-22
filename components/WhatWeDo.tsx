"use client";
import { motion } from "framer-motion";
import { services } from "@/lib/data";

export default function WhatWeDo() {
  return (
    <section id="about" className="py-28 bg-neutral-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-brand-red tracking-[0.3em] text-xs mb-3">WHAT WE DO</p>
          <h2 className="font-display text-5xl sm:text-6xl max-w-2xl">Built around the rider.</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-white border border-neutral-200 hover:border-brand-red/60 transition relative overflow-hidden"
            >
              <div className="absolute top-6 right-6 font-display text-6xl text-neutral-200 group-hover:text-brand-red/30 transition">
                {s.n}
              </div>
              <h3 className="font-display text-2xl tracking-wide">{s.title}</h3>
              <p className="mt-4 text-neutral-600 leading-relaxed">{s.body}</p>
              <button className="mt-6 text-xs tracking-widest text-brand-red flex items-center gap-2">
                READ MORE <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
