import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import "./ManifestoScene.css";

gsap.registerPlugin(ScrollTrigger);

function ManifestoScene() {
  const sectionRef = useRef();

  useEffect(() => {
    const phrases = gsap.utils.toArray(".phrase");

    gsap.set(phrases, {
      opacity: 0,
      y: 100,
      scale: 0.9,
    });

    gsap.set(phrases[0], {
      opacity: 1,
      y: 0,
      scale: 1,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=7000",
        pin: true,
        scrub: 2,
        anticipatePin: 1,
      },
    });

    phrases.forEach((phrase, index) => {
      if (index === 0) return;

      tl.to(phrases[index - 1], {
        opacity: 0,
        y: -120,
        scale: 1.15,
        duration: 2,
        ease: "power3.inOut",
      });

      tl.fromTo(
        phrase,
        {
          opacity: 0,
          y: 120,
          scale: 0.85,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 2,
          ease: "power3.inOut",
        },
        "<",
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section className="manifesto-section" ref={sectionRef}>
      <div className="bg-word">FUTURE</div>

      <div className="phrase-container">
        <div className="phrase">WE DON'T BUILD WEBSITES</div>

        <div className="phrase">WE CRAFT PRODUCTS</div>

        <div className="phrase">WE SCALE COMPANIES</div>

        <div className="phrase">WE BUILD THE FUTURE</div>
      </div>
    </section>
  );
}

export default ManifestoScene;
