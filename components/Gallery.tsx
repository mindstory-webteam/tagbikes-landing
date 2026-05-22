"use client";
import Image from "next/image";
import { galleryImages } from "@/lib/data";

export default function Gallery() {
  const row = [...galleryImages, ...galleryImages];
  return (
    <section id="gallery" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-12">
        <p className="text-brand-red tracking-[0.3em] text-xs mb-3">FOLLOW THE JOURNEY</p>
        <h2 className="font-display text-5xl sm:text-6xl">On the road.</h2>
      </div>

      <div className="relative">
        <div className="flex gap-5 animate-marquee w-max">
          {row.map((src, i) => (
            <div key={i} className="relative w-[320px] h-[220px] sm:w-[420px] sm:h-[280px] flex-shrink-0 overflow-hidden rounded-2xl">
              <Image src={src} alt="ride" fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-5">
        <div className="flex gap-5 animate-marquee-rev w-max">
          {row.map((src, i) => (
            <div key={i} className="relative w-[320px] h-[220px] sm:w-[420px] sm:h-[280px] flex-shrink-0 overflow-hidden rounded-2xl">
              <Image src={row[row.length - 1 - i]} alt="ride" fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
