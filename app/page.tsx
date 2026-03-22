import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSolutionSplit from "@/components/ProblemSolutionSplit";
import AudienceFit from "@/components/AudienceFit";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Contact from "@/components/Contact";
import TeamShowcase from "@/components/TeamShowcase";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30 selection:text-foreground">
      {/* Scroll Fade Overlay */}
      <div className="fixed top-0 inset-x-0 h-32 bg-gradient-to-b from-background to-transparent z-40 pointer-events-none" />
      <Navbar />
      <HeroSection />
      <ProblemSolutionSplit />
      <AudienceFit />
      <Benefits />
      <Pricing />
      <Faq />
      <FinalCta />
      <Contact />
      <TeamShowcase />
      <Footer />
    </main>
  );
}
