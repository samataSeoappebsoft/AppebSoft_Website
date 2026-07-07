import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import "./ServiceCube.css";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Custom Software",
    description:
      "Enterprise grade software solutions engineered to automate workflows, optimize operations and accelerate business growth.",
    features: [
      "CRM Systems",
      "ERP Platforms",
      "SaaS Products",
      "Business Automation",
    ],
  },

  {
    number: "02",
    title: "Ecommerce",
    description:
      "High converting ecommerce ecosystems built for performance, scalability and revenue generation.",
    features: [
      "Shopify",
      "WooCommerce",
      "Headless Commerce",
      "Marketplace Solutions",
    ],
  },

  {
    number: "03",
    title: "Website Development",
    description:
      "Modern websites and web applications designed for speed, engagement and digital excellence.",
    features: [
      "Corporate Websites",
      "Landing Pages",
      "Web Applications",
      "Portfolio Platforms",
    ],
  },

  {
    number: "04",
    title: "Digital Marketing",
    description:
      "Performance marketing strategies focused on visibility, lead generation and sustainable growth.",
    features: [
      "SEO",
      "Google Ads",
      "Social Media",
      "Content Marketing",
    ],
  },
];

function ServiceCube() {
  const sectionRef = useRef(null);
  const cubeRef = useRef(null);

  const [activeFace, setActiveFace] = useState(0);

  const faceRotations = [
    0,
    -90,
    -180,
    -270,
  ];

  const rotateCube = (index) => {
    gsap.to(cubeRef.current, {
      rotateY: faceRotations[index],
      duration: 1.2,
      ease: "power4.inOut",
    });

    gsap.fromTo(
      ".content-inner",
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
      }
    );

    setActiveFace(index);
  };

  useEffect(() => {
    const cube = cubeRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
    });

    tl.from(".cube-wrapper", {
      y: 200,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
    });

    tl.from(
      ".content-panel",
      {
        x: 100,
        opacity: 0,
        duration: 1,
      },
      "-=0.8"
    );

    let isDragging = false;
    let startX = 0;
    let currentRotation = 0;

    const onMouseDown = (e) => {
      isDragging = true;
      startX = e.clientX;
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;

      const delta = e.clientX - startX;

      currentRotation += delta * 0.5;

      gsap.set(cube, {
        rotateY: currentRotation,
      });

      startX = e.clientX;
    };

    const onMouseUp = () => {
      if (!isDragging) return;

      isDragging = false;

      const snapPoints = [
        0,
        -90,
        -180,
        -270,
      ];

      let closest = 0;
      let smallest = Infinity;

      snapPoints.forEach(
        (angle, index) => {
          const distance = Math.abs(
            currentRotation - angle
          );

          if (distance < smallest) {
            smallest = distance;
            closest = index;
          }
        }
      );

      gsap.to(cube, {
        rotateY: snapPoints[closest],
        duration: 0.8,
        ease: "power3.out",
      });

      currentRotation =
        snapPoints[closest];

      setActiveFace(closest);
    };

    cube.addEventListener(
      "mousedown",
      onMouseDown
    );

    window.addEventListener(
      "mousemove",
      onMouseMove
    );

    window.addEventListener(
      "mouseup",
      onMouseUp
    );

    return () => {
      cube.removeEventListener(
        "mousedown",
        onMouseDown
      );

      window.removeEventListener(
        "mousemove",
        onMouseMove
      );

      window.removeEventListener(
        "mouseup",
        onMouseUp
      );
    };
  }, []);

  return (
    <section
      className="service-cube-section"
      ref={sectionRef}
    >
      <div className="background-word">
        SERVICES
      </div>

      <div className="service-header">
        <span>
          WHAT WE DO BEST
        </span>

        <h2>
          Expertise That
          <br />
          Drives Growth
        </h2>
      </div>

      <div className="service-layout">

        {/* LEFT SIDE */}

        <div className="cube-area">

          <div className="cube-wrapper">

            <div
              className="cube"
              ref={cubeRef}
            >
              <div className="face front">
                <span>01</span>
              </div>

              <div className="face right">
                <span>02</span>
              </div>

              <div className="face back">
                <span>03</span>
              </div>

              <div className="face left">
                <span>04</span>
              </div>
            </div>

          </div>

          <div className="cube-navigation">

            {services.map(
              (service, index) => (
                <button
                  key={index}
                  onClick={() =>
                    rotateCube(index)
                  }
                  className={
                    activeFace === index
                      ? "nav-number active"
                      : "nav-number"
                  }
                >
                  {service.number}
                </button>
              )
            )}

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="content-panel">

          <div
            key={activeFace}
            className="content-inner"
          >
            <div className="content-tag">
              {services[activeFace].number}
            </div>

           <h3 className="service-title">
  {services[activeFace].title}
</h3>

            <p>
              {
                services[
                  activeFace
                ].description
              }
            </p>

            <div className="features-grid">

              {services[
                activeFace
              ].features.map(
                (
                  feature,
                  index
                ) => (
                  <div
                    className="feature-card"
                    key={index}
                  >
                    {feature}
                  </div>
                )
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ServiceCube;