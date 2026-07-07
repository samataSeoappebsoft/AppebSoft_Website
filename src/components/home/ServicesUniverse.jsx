import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./ServicesUniverse.css";

const services = [
  "Web Development",
  "Mobile Apps",
  "UI UX Design",
  "Digital Marketing",
  "SEO Optimization",
  "Brand Identity",
  "AI Solutions",
  "Cloud Services",
  "Ecommerce",
  "CRM Systems",
  "ERP Solutions",
  "Maintenance",
];

function ServicesUniverse() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.from(".service-card", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.06,
      ease: "power3.out",
    });

    const cards = document.querySelectorAll(".service-card");

    const handleMove = (e) => {
      const x = (window.innerWidth / 2 - e.clientX) / 25;
      const y = (window.innerHeight / 2 - e.clientY) / 25;

      cards.forEach((card) => {
        gsap.to(card, {
          rotateY: x,
          rotateX: y,
          transformPerspective: 1000,
          transformOrigin: "center",
          duration: 0.5,
        });
      });
    };

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section className="services-3d" ref={sectionRef}>
      <div className="services-head">
        <span>OUR SERVICES</span>
        <h2>Interactive Digital Capabilities</h2>
      </div>

      <div className="services-grid">
        {services.map((service, i) => (
          <div className="service-card" key={i}>
            {service}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesUniverse;