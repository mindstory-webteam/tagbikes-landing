import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import BikeAnatomy from "@/components/BikeAnatomy";
import Models from "@/components/Models";
import WhatWeDo from "@/components/WhatWeDo";
import Gallery from "@/components/Gallery";
import Essentials from "@/components/Essentials";
import FAQ from "@/components/FAQ";
import TestRide from "@/components/TestRide";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <Preloader />
      <Navbar />
      <Hero />
      <Featured />
      <BikeAnatomy />
      <Models />
      <WhatWeDo />
      <Gallery />
      <Essentials />
      <FAQ />
      <TestRide />
      <Footer />
    </main>
  );
}
