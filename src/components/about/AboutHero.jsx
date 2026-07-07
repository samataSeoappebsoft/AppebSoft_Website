import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import "./AboutHero.css";

function AboutHero() {
  const changingWord = useRef(null);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const words = [
      "GLOBAL BRANDS",
      "MARKET LEADERS",
      "AI COMPANIES",
      "DIGITAL ECOSYSTEMS",
      "FUTURE READY BUSINESSES",
    ];

    let index = 0;

    const interval = setInterval(() => {
      gsap.to(changingWord.current, {
        y: -80,
        opacity: 0,
        duration: 0.5,
        ease: "power3.inOut",
        onComplete: () => {
          index = (index + 1) % words.length;

          changingWord.current.innerText =
            words[index];

          gsap.fromTo(
            changingWord.current,
            {
              y: 80,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              ease: "power3.out",
            }
          );
        },
      });
    }, 2800);

    const ctx = gsap.context(() => {

      /* ENTRY ANIMATION */

      const tl = gsap.timeline();

      tl.from(".about-tag", {
        y: 30,
        opacity: 0,
        duration: 0.8,
      })
        .from(
          ".line-1",
          {
            y: 120,
            opacity: 0,
            duration: 1,
          },
          "-=0.4"
        )
        .from(
          ".line-2",
          {
            y: 120,
            opacity: 0,
            duration: 1,
          },
          "-=0.7"
        )
        .from(
          ".line-3",
          {
            y: 120,
            opacity: 0,
            duration: 1,
          },
          "-=0.7"
        )
        .from(
          ".about-description",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(
          ".hero-actions",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(
          ".about-stats > div",
          {
            y: 40,
            opacity: 0,
            stagger: 0.15,
            duration: 0.8,
          },
          "-=0.4"
        );

      /* FLOATING BLOBS */

      gsap.to(".blob-a", {
        y: -50,
        x: 40,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".blob-b", {
        y: 80,
        x: -50,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".blob-c", {
        y: -60,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* FLOATING TECH TAGS */

      gsap.to(".tech-pill", {
        yPercent: -20,
        duration: 2,
        stagger: 0.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* SCROLL ANIMATION */

      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1000",
          scrub: 1.5,
        },
      });

      heroTl.to(
        contentRef.current,
        {
          y: -180,
          scale: 0.9,
          opacity: 0.4,
          ease: "none",
        },
        0
      );

      heroTl.to(
        ".blob-a",
        {
          scale: 1.5,
          opacity: 0.4,
          ease: "none",
        },
        0
      );

      heroTl.to(
        ".blob-b",
        {
          scale: 1.4,
          opacity: 0.25,
          ease: "none",
        },
        0
      );

      heroTl.to(
        ".blob-c",
        {
          scale: 2,
          opacity: 0.15,
          ease: "none",
        },
        0
      );

      heroTl.to(
        ".tech-pill",
        {
          y: -120,
          opacity: 0,
          stagger: 0.05,
          ease: "none",
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

    /* MOUSE PARALLAX */

    const handleMouseMove = (e) => {
      const x =
        (e.clientX / window.innerWidth - 0.5) * 100;

      const y =
        (e.clientY / window.innerHeight - 0.5) * 100;

      gsap.to(".blob-a", {
        x: x * 0.4,
        y: y * 0.4,
        duration: 2,
        overwrite: true,
      });

      gsap.to(".blob-b", {
        x: x * -0.3,
        y: y * -0.3,
        duration: 2,
        overwrite: true,
      });

      gsap.to(".blob-c", {
        x: x * 0.2,
        y: y * 0.2,
        duration: 2,
        overwrite: true,
      });
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () => {
      clearInterval(interval);

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      ctx.revert();

      ScrollTrigger.getAll().forEach((trigger) =>
        trigger.kill()
      );
    };

  }, []);

  return (
    <section
      className="about-hero"
      ref={sectionRef}
    >
      <div className="blob blob-a"></div>
      <div className="blob blob-b"></div>
      <div className="blob blob-c"></div>

      <div className="noise-layer"></div>

      <div
        className="about-content"
        ref={contentRef}
      >

        <span className="about-tag">
          ABOUT APPEESOFT
        </span>

        <div className="headline-group">

          <h1 className="line-1">
            WE BUILD
          </h1>

          <div
            ref={changingWord}
            className="changing-word"
          >
            GLOBAL BRANDS
          </div>

        </div>

        <p className="about-description">
          AppeeSoft partners with startups,
          enterprises and ambitious businesses
          to create software, websites,
          ecommerce platforms, AI solutions
          and digital ecosystems that drive
          measurable growth across global markets.
        </p>

        <div className="hero-actions">

          <button className="primary-btn1">
            Start Your Project
          </button>

          <button className="secondary-btn">
            Explore Our Work
          </button>

        </div>

        <div className="about-stats">

          <div>
            <h3>900+</h3>
            <span>Businesses Served</span>
          </div>

          <div>
            <h3>1200+</h3>
            <span>Projects Delivered</span>
          </div>

          <div>
            <h3>25+</h3>
            <span>Countries Reached</span>
          </div>

        </div>

      </div>

      <div className="floating-tech">

        <div className="tech-pill pill-1">
          Software Development
        </div>

        <div className="tech-pill pill-2">
          Mobile Apps
        </div>

        <div className="tech-pill pill-3">
          Ecommerce
        </div>

        <div className="tech-pill pill-4">
          Artificial Intelligence
        </div>

        <div className="tech-pill pill-5">
          Cloud Solutions
        </div>

        <div className="tech-pill pill-6">
          UI / UX Design
        </div>

      </div>

      <div className="scroll-indicator">
        DISCOVER OUR STORY
      </div>

    </section>
  );
}

export default AboutHero;