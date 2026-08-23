import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/ivy/SmoothScroll";
import { CustomCursor } from "@/components/ivy/CustomCursor";
import { Loader } from "@/components/ivy/Loader";
import { Navbar } from "@/components/ivy/Navbar";
import { Hero } from "@/components/ivy/Hero";
import { Marquee } from "@/components/ivy/Marquee";
import { About } from "@/components/ivy/About";
import { Founder } from "@/components/ivy/Founder";
import { Programs } from "@/components/ivy/Programs";
import { Services } from "@/components/ivy/Services";
import { WhyChoose } from "@/components/ivy/WhyChoose";
import { Results } from "@/components/ivy/Results";
import { Journey } from "@/components/ivy/Journey";
import { Testimonials } from "@/components/ivy/Testimonials";
import { Gallery } from "@/components/ivy/Gallery";
import { FAQ } from "@/components/ivy/FAQ";
import { Contact } from "@/components/ivy/Contact";
import { Footer } from "@/components/ivy/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background">
      <Loader />
      <SmoothScroll />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Founder />
        <Programs />
        <Services />
        <WhyChoose />
        <Results />
        <Journey />
        <Testimonials />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
