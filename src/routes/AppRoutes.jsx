import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Portfolio from "../pages/Portfolio/Portfolio";
// import Technologies from "../pages/Technologies/Technologies";
// import CaseStudies from "../pages/CaseStudies/CaseStudies";
// import Careers from "../pages/Careers/Careers";
// import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      {/* // <Route path="/technologies" element={<Technologies />} />
      // <Route path="/case-studies" element={<CaseStudies />} />
      // <Route path="/careers" element={<Careers />} />
      // <Route path="/blog" element={<Blog />} /> */}

    </Routes>
  );
}

export default AppRoutes;