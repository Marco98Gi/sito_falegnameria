import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import HeroSection from "@/components/HeroSection";
import ChiSiamoSection from "@/components/ChiSiamoSection";
import ValoriSection from "@/components/ValoriSection";
import GalleriaSection from "@/components/GalleriaSection";
import ServiziSection from "@/components/ServiziSection";
import ContattiSection from "@/components/ContattiSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -20; // Small offset from top
      const yPosition =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: yPosition,
        behavior: "smooth",
      });
    }
  };

  // Add padding to main content based on screen size
  useEffect(() => {
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      // Su desktop: padding-left per la sidebar
      // Su mobile: padding-top per la top bar
      const updatePadding = () => {
        if (window.innerWidth >= 768) {
          // md breakpoint
          mainContent.style.paddingLeft = "64px"; // sidebar width quando chiusa
          mainContent.style.paddingTop = "0px";
        } else {
          mainContent.style.paddingLeft = "0px";
          mainContent.style.paddingTop = "64px"; // top bar height
        }
      };

      updatePadding();
      window.addEventListener("resize", updatePadding);

      return () => window.removeEventListener("resize", updatePadding);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar onNavigate={handleNavigate} />

      {/* Main Content */}
      <main
        id="main-content"
        className="transition-all duration-300 pt-16 md:pt-0 md:pl-16"
      >
        <HeroSection />
        <ChiSiamoSection />
        <ValoriSection />
        <GalleriaSection />
        <ServiziSection />
        <ContattiSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
