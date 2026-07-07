
import Navbar from "../../components/layout/Navbar";
import FinalCTA from "../../components/home/FinalCTA";
import NextChapter from "../../components/home/NextChapter";
import Footer from "../../components/layout/Footer";
import ContactHero from "../../components/contact/ContactHero";
import ContactInfo from "../../components/contact/ContactInfo";
import ContactMapSection from "../../components/contact/ContactMapSection";
import FloatingButtons from "../../components/layout/FloatingButtons";



function Contact() {
    return (
        <>
            <Navbar />

            <ContactHero />

            <ContactInfo />

            <ContactMapSection/>

            <FinalCTA />

            <NextChapter />

            <Footer />

            <FloatingButtons/>
        </>
    );
}

export default Contact;
