import { useEffect } from "react";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HelpSection from "@/components/HelpSection";
import Hero from "@/components/Hero";
import MediaSection from "@/components/MediaSection";
import Navbar from "@/components/Navbar";
import ProcessSection from "@/components/ProcessSection";
import ResultsSection from "@/components/ResultsSection";
import ServiceSection from "@/components/ServiceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  useEffect(() => {
    document.title = "SÓ Multas | Defesa de trânsito";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <div className="bg-hero-gradient pb-6">
          <Hero />
          <HelpSection />
        </div>
        <ServiceSection />
        <ProcessSection />
        <ResultsSection />
        <TestimonialsSection />
        <MediaSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
