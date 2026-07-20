import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import "./ServicesPreview.css";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "High performance websites built for speed, conversions and scalability.",
  },
  {
    number: "02",
    title: "Mobile Applications",
    description:
      "Native and cross platform apps delivering exceptional user experiences.",
  },
  {
    number: "03",
    title: "UI/UX Design",
    description:
      "Beautiful interfaces designed to engage and convert users.",
  },
  {
    number: "04",
    title: "Custom Software",
    description:
      "Enterprise solutions tailored for business growth and automation.",
  },
];

function ServicesPreview() {
  useEffect(() => {
    gsap.from(".service-preview-card", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".services-preview",
        start: "top 70%",
      },
    });
  }, []);

  return (
    <section className="services-preview">

      <div className="container">

        <span className="section-tag">
          Services
        </span>

        <h2 className="services-title">
          Transforming Ideas Into
          Digital Excellence
        </h2>

        <div className="services-grid">

          {services.map((service) => (
            <div
              key={service.number}
              className="service-preview-card"
            >
              <span className="service-number">
                {service.number}
              </span>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default ServicesPreview;