import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Solution from "@/components/Solution";
import Why from "@/components/Why";

export default function Home() {
  return (
    <section className="px-4 md:w-[90vw] overflow-x-hidden mx-auto">
      <Navbar />
      <Hero />
      <Why />
      <Solution />
      <Project />
      <CTA />
    </section>
  );
}
