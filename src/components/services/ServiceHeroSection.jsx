// src/components/services/ServiceHero.jsx

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./ServiceHeroSection.css";

gsap.registerPlugin(ScrollTrigger);

const words = [
  "WEB DEVELOPMENT",
  "MOBILE APPS",
  "SOFTWARE SOLUTIONS",
  "UI UX DESIGN",
  "ECOMMERCE PLATFORMS",
  "DIGITAL TRANSFORMATION",
];

const serviceCards = [
  {
    title: "Web Development",
    icon: "🌐",
    description: "Modern responsive websites",
  },
  {
    title: "Mobile Apps",
    icon: "📱",
    description: "Android and iOS applications",
  },
  {
    title: "UI UX Design",
    icon: "🎨",
    description: "Beautiful user experiences",
  },
  {
    title: "Software",
    icon: "⚙️",
    description: "Custom enterprise software",
  },
  {
    title: "Ecommerce",
    icon: "🛒",
    description: "Scalable online stores",
  },
  {
    title: "Cloud",
    icon: "☁️",
    description: "Cloud infrastructure solutions",
  },
];

function ServiceHero() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const changingWord = useRef(null);

  useEffect(() => {
    let currentIndex = 0;

    // =========================
    // Changing Heading
    // =========================

    const interval = setInterval(() => {
      gsap.to(changingWord.current, {
        y: -60,
        opacity: 0,
        duration: 0.45,
        ease: "power3.inOut",
        onComplete: () => {
          currentIndex = (currentIndex + 1) % words.length;

          if (!changingWord.current) return;

          changingWord.current.textContent =
            words[currentIndex];

          gsap.fromTo(
            changingWord.current,
            {
              y: 60,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.45,
              ease: "power3.out",
            }
          );
        },
      });
    }, 2500);

    const ctx = gsap.context(() => {

      // =========================
      // Entry Animation
      // =========================

      const tl = gsap.timeline();

      tl.from(".service-tag", {
        y: 30,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          ".service-line-1",
          {
            y: 120,
            opacity: 0,
            duration: 0.9,
          },
          "-=0.3"
        )
        .from(
          ".service-line-2",
          {
            y: 120,
            opacity: 0,
            duration: 0.9,
          },
          "-=0.6"
        )
        .from(
          ".service-description",
          {
            y: 40,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.5"
        )
        .from(
          ".service-actions",
          {
            y: 40,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.4"
        )
        .from(
          ".stat",
          {
            y: 40,
            opacity: 0,
            stagger: 0.12,
            duration: 0.6,
          },
          "-=0.4"
        );

      // =========================
      // Floating Blobs
      // =========================

      gsap.to(".blob-a", {
        x: 40,
        y: -50,
        repeat: -1,
        yoyo: true,
        duration: 8,
        ease: "sine.inOut",
      });

      gsap.to(".blob-b", {
        x: -50,
        y: 70,
        repeat: -1,
        yoyo: true,
        duration: 10,
        ease: "sine.inOut",
      });

      gsap.to(".blob-c", {
        y: -60,
        repeat: -1,
        yoyo: true,
        duration: 12,
        ease: "sine.inOut",
      });

      // =========================
      // Floating Cards
      // =========================

      gsap.utils.toArray(".floating-card").forEach((card, i) => {
        gsap.to(card, {
          y: i % 2 === 0 ? -15 : 15,
          duration: 2.5 + i * 0.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // =========================
      // Scroll Animation
      // =========================

      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1000",
          scrub: 1.2,
        },
      });

      heroTl.to(
        contentRef.current,
        {
          y: -150,
          scale: 0.92,
          opacity: 0.4,
        },
        0
      );

      heroTl.to(
        ".floating-services",
        {
          y: -80,
          scale: 0.95,
          opacity: 0,
        },
        0
      );

      heroTl.to(
        ".hero-circle",
        {
          scale: 1.2,
          opacity: 0.15,
        },
        0
      );

      heroTl.to(
        ".scroll-indicator",
        {
          opacity: 0,
        },
        0
      );

    }, sectionRef);

    // =========================
    // Mouse Parallax
    // =========================

    const handleMouseMove = (e) => {

      const x = (e.clientX / window.innerWidth - 0.5) * 100;
      const y = (e.clientY / window.innerHeight - 0.5) * 100;

      gsap.to(".blob-a", {
        x: x * 0.35,
        y: y * 0.35,
        duration: 1.8,
        overwrite: "auto",
      });

      gsap.to(".blob-b", {
        x: -x * 0.25,
        y: -y * 0.25,
        duration: 1.8,
        overwrite: "auto",
      });

      gsap.to(".blob-c", {
        x: x * 0.15,
        y: y * 0.15,
        duration: 1.8,
        overwrite: "auto",
      });

      gsap.to(".hero-circle", {
        y: -15,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-circle", {
        x: x * 0.05,
        y: y * 0.05,
        duration: 2,
        overwrite: "auto",
      });

      gsap.to(".floating-services", {
        x: x * 0.03,
        y: y * 0.03,
        duration: 2,
        overwrite: "auto",
      });

    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {

      clearInterval(interval);

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      ctx.revert();

    };

  }, []);

  return (
    <section
      className="service-hero"
      ref={sectionRef}
    >
      <div className="blob blob-a"></div>
      <div className="blob blob-b"></div>
      <div className="blob blob-c"></div>

      <div className="noise-layer"></div>

      <div className="hero-grid"></div>

      <div className="hero-gradient"></div>

      <div
        className="service-content"
        ref={contentRef}
      >
        <span className="service-tag">
          OUR SERVICES
        </span>

        <div className="headline-group">

          <h1 className="service-line-1">
            WE CREATE
          </h1>

          <h1
            className="service-line-2 changing-word"
            ref={changingWord}
          >
            WEB DEVELOPMENT
          </h1>

        </div>

        <p className="service-description">
          AppeeSoft delivers modern digital solutions
          that help startups, SMEs and enterprises
          accelerate growth. From websites and mobile
          applications to enterprise software,
          ecommerce platforms and AI powered systems,
          our team transforms ambitious ideas into
          scalable digital products.
        </p>

        <div className="service-actions">
          <button className="primary-btn1">
            <span>Explore Services</span>
          </button>

          <button className="secondary-btn">
            <span>Get Free Consultation</span>
          </button>

        </div>

        <div className="service-stats">

          <div className="stat">
            <h3>1200+</h3>
            <span>Projects Delivered</span>
          </div>

          <div className="stat">
            <h3>900+</h3>
            <span>Happy Clients</span>
          </div>

          <div className="stat">
            <h3>25+</h3>
            <span>Countries Served</span>
          </div>

        </div>

      </div>

      <div className="floating-services">
{/* 
        <div className="hero-circle">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80"
            alt="AppebSoft Team"
            loading="eager"
            draggable="false"
          />
        </div> */}

        {serviceCards.map((service, index) => (

          <div
            className={`floating-card card-${index + 1}`}
            key={index}
          >

            {/* <div className="service-icon">
              {service.icon}
            </div> */}

            <h4>{service.title}</h4>

            {/* <p>{service.description}</p> */}

          </div>

        ))}

      </div>
      <div className="scroll-indicator">

        <span className="scroll-line"></span>

        <p>DISCOVER OUR SERVICES</p>

      </div>
    </section>
  );
}

export default ServiceHero;