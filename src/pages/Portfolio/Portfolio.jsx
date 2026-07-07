
import Navbar from "../../components/layout/Navbar";
import FinalCTA from "../../components/home/FinalCTA";
import Footer from "../../components/layout/Footer";
import PortfolioSection from "../../components/portfolio/PortfolioSection";
import FloatingButtons from "../../components/layout/FloatingButtons";
;



function Portfolio() {
    return (
        <>
            <Navbar />
            <PortfolioSection />
            <FinalCTA />
            <Footer />
            <FloatingButtons/>
        </>
    );
}

export default Portfolio;
