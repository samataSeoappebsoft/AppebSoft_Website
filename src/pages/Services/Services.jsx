
import Navbar from "../../components/layout/Navbar";
import FinalCTA from "../../components/home/FinalCTA";
import NextChapter from "../../components/home/NextChapter";
import Footer from "../../components/layout/Footer";
import ServiceHeroSection from "../../components/services/ServiceHeroSection";
import ServicesSection from "../../components/services/ServicesSection";
import FloatingButtons from "../../components/layout/FloatingButtons";



function Services() {
    return (
        <>
            <Navbar />

            <ServiceHeroSection />

            <ServicesSection />

            <FinalCTA />

            <NextChapter />

            <Footer />

            <FloatingButtons/>
        </>
    );
}

export default Services;
