"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-28 bg-white">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <p className="text-brand-red tracking-[0.3em] text-xs mb-3">FREQUENTLY ASKED</p>
        <h2 className="font-display text-4xl sm:text-5xl mb-12">Everything you need to know before you ride.</h2>

        <div className="divide-y divide-neutral-200 border-y border-neutral-200">
          {faqs.map((f, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left"
              >
                <span className="font-display text-lg sm:text-xl">{f.q}</span>
                <motion.span animate={{ rotate: open === i ? 45 : 0 }}>
                  <Plus className="text-brand-red" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-neutral-900/65 max-w-3xl leading-relaxed">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
