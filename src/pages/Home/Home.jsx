import Navbar from "../../components/layout/Navbar";

import HeroScene from "../../components/home/HeroScene";
import ManifestoScene from "../../components/home/ManifestoScene";
// import CapabilitiesScene from "../../components/home/CapabilitiesScene";
import ServicesUniverse from "../../components/home/ServicesUniverse";
import TechnologyEcosystem from "../../components/home/TechnologyEcosystem";
import FinalCTA from "../../components/home/FinalCTA";
import NextChapter from "../../components/home/NextChapter";
import Footer from "../../components/layout/Footer";
import AICommandCenter from "../../components/home/AICommandCenter";
import ServiceCube from "../../components/home/ServiceCube";
import PortfolioSection from "../../components/portfolio/PortfolioSection";
import FloatingButtons from "../../components/layout/FloatingButtons";



function Home() {
  return (
    <>
      <Navbar />

      <HeroScene />

      <ManifestoScene />

      <AICommandCenter />

      <PortfolioSection />

      <ServiceCube />

      {/* <CapabilitiesScene /> */}

      <ServicesUniverse />

      <TechnologyEcosystem />

      <FinalCTA />

      <NextChapter />

      <Footer />

      <FloatingButtons/>
    </>
  );
}

export default Home;
