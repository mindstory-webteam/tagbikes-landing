# TagsBikez — White Theme Edition

Next.js 14 / React 18 / Tailwind / Framer Motion.

## What's new in this build
- **White theme** — light surfaces with red brand accents (Royal Enfield style).
- **Preloader** (`components/Preloader.tsx`) — Royal Enfield-style full-screen
  intro with letter-by-letter wordmark, percent counter, progress line, and a
  curtain-up reveal.
- **BikeAnatomy** (`components/BikeAnatomy.tsx`) — sticky scroll-driven section
  that advances frame-by-frame with the scroll wheel. Six part hotspots
  (Headlamp → Wheel) fade in/out as you scroll, with a rotating bike "camera
  move". To plug in a real frame sequence, replace the single `<Image>` inside
  the sticky stage with a `<canvas>` driven by `scrollYProgress`.

## Run
```bash
npm install
npm run dev
```
