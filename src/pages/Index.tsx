import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HelpSection from "@/components/HelpSection";
import ServiceSection from "@/components/ServiceSection";
import ProcessSection from "@/components/ProcessSection";
import ResultsSection from "@/components/ResultsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MediaSection from "@/components/MediaSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <HelpSection />
      <ServiceSection />
      <ProcessSection />
      <ResultsSection />
      <TestimonialsSection />
      <MediaSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
