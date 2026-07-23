"use client";

import Navbar from "./Navbar";
import Hero from "./Hero";
import ServicesScene from "./sections/ServicesScene";
import ExperienceGlance from "./sections/ExperienceGlance";
import IPSSection from "./sections/IPSSection";
import TrustedBy from "./sections/TrustedBy";
import ConnectPanels from "./sections/ConnectPanels";
import SeeMyWork from "./sections/SeeMyWork";
import Testimonials from "./sections/Testimonials";
import Blog from "./sections/Blog";
import Footer from "./sections/Footer";

/**
 * Plain, static layout — no GSAP, no pinning, no scroll/load animations.
 * Every section is in normal document flow and fully visible on load.
 */
export default function Experience() {
  return (
    <div className="relative w-full">
      <Navbar />

      {/* Hero as a normal full-viewport section */}
      <section className="relative h-screen w-full overflow-hidden">
        <Hero />
      </section>

      <ServicesScene />
      <ExperienceGlance />
      <IPSSection />
      <TrustedBy />
      <ConnectPanels />
      <SeeMyWork />
      <Testimonials />
      <Blog />
      <Footer />
    </div>
  );
}
