import { useEffect, useRef } from "react";
import gsap from "gsap";

import "./HeroScene.css";

function HeroScene() {
  const changingWord = useRef(null);

  // useEffect(() => {
  //   const words = [
  //     "DIGITAL PRODUCTS",
  //     "MOBILE APPS",
  //     "AI SOLUTIONS",
  //     "SAAS PLATFORMS",
  //     "ENTERPRISE SOFTWARE",
  //   ];

  //   let index = 0;

  //   const interval = setInterval(() => {
  //     gsap.to(changingWord.current, {
  //       y: -40,
  //       opacity: 0,
  //       duration: 0.4,
  //       onComplete: () => {
  //         index = (index + 1) % words.length;

  //         changingWord.current.innerText =
  //           words[index];

  //         gsap.fromTo(
  //           changingWord.current,
  //           {
  //             y: 40,
  //             opacity: 0,
  //           },
  //           {
  //             y: 0,
  //             opacity: 1,
  //             duration: 0.4,
  //           }
  //         );
  //       },
  //     });
  //   }, 2500);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <section className="hero-scene">

      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>

      <div className="hero-content">

        <span className="hero-tag">
          DIGITAL PRODUCT STUDIO
        </span>

        <h1>
          WE BUILD
        </h1>

        <div
          ref={changingWord}
          className="changing-text"
        >
          DIGITAL PRODUCTS
        </div>

        <p>
          We help startups, enterprises and
          innovative businesses launch world
          class digital products that scale.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn1">
            Start Your Project
          </button>

          <button className="secondary-btn">
            View Work
          </button>

        </div>

        <div className="hero-stats">

          <div>
            <h3>1200+</h3>
            <span>Projects</span>
          </div>

          <div>
            <h3>900+</h3>
            <span>Clients</span>
          </div>

          <div>
            <h3>25+</h3>
            <span>Countries</span>
          </div>

        </div>

      </div>
{/* 
      <div className="floating-card card-1">
        React / Next.js
      </div>

      <div className="floating-card card-2">
        AI Development
      </div>

      <div className="floating-card card-3">
        Cloud Solutions
      </div> */}

      <div className="scroll-indicator">
        SCROLL
      </div>

    </section>
  );
}

export default HeroScene;