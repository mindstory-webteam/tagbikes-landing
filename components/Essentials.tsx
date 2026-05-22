"use client";
import { motion } from "framer-motion";
import { WHATSAPP } from "@/lib/data";

const items = [
  { title: "Motorcycle Accessories", body: "Enhance your ride with precision-engineered genuine accessories built for performance and style.", img: "https://tagsbikez.vercel.app/_next/static/media/parts.12x7t.ijv3usn.png" },
  { title: "Lifestyle Apparels", body: "Keep your machine running like new with authentic spare parts designed specifically for your motorcycle.", img: "https://tagsbikez.vercel.app/_next/static/media/accessories.08.fhap2yrlfu.png" },
  { title: "Riding Gear", body: "Stay safe and look sharp with our collection of premium riding jackets, helmets and protective equipment.", img: "https://tagsbikez.vercel.app/_next/static/media/gear.0d~h8bj6j5-np.png" },
];

export default function Essentials() {
  return (
    <section className="py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <h2 className="font-display text-5xl sm:text-6xl mb-14">Essentials & Gear</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="group rounded-2xl bg-white border border-neutral-200 overflow-hidden hover:border-brand-red/60 transition"
            >
              <div
                className="aspect-video bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url(${it.img})` }}
              />
              <div className="p-7">
                <h3 className="font-display text-2xl">{it.title}</h3>
                <p className="mt-3 text-neutral-600">{it.body}</p>
                <a
                  href={WHATSAPP}
                  className="mt-6 inline-block text-xs tracking-widest text-brand-red"
                >
                  ENQUIRE VIA WHATSAPP →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
