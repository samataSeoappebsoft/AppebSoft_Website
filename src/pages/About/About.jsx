/* eslint-disable no-undef */
import Navbar from "../../components/layout/Navbar";
import AboutHero from "../../components/about/AboutHero";
import FinalCTA from "../../components/home/FinalCTA";
import NextChapter from "../../components/home/NextChapter";
import Footer from "../../components/layout/Footer";
import WhoWeAre from "../../components/about/WhoWeAre";
import OurStory from "../../components/about/OurStory";
import MissionVision from "../../components/about/MissionVision";
import Timeline from "../../components/about/Timeline";
import Leadership from "../../components/about/Leadership";
import Achievements from "../../components/about/Achievements";
import FloatingButtons from "../../components/layout/FloatingButtons";

function About() {
  return (
    <>
      <Navbar />

      <AboutHero />

      <WhoWeAre/>

      <OurStory/>

      <MissionVision/>

      <Timeline/>

      <Leadership/>

      <Achievements/>

      <FinalCTA />

      <NextChapter />

      <Footer />

    
    <FloatingButtons/>
    </>
  );
}

export default About;
