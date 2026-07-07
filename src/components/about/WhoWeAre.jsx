import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./WhoWeAre.css";

gsap.registerPlugin(ScrollTrigger);

const lines = [
  "THINK BIG.",
  "BUILD BOLD.",
  "WE DESIGN WITH PURPOSE.",
  "WE ENGINEER FOR SCALE.",
  "WE BUILD THE DIGITAL FUTURE."
];

export default function WhoWeAre() {

    const sectionRef = useRef();

useEffect(() => {

  const ctx = gsap.context(() => {

    const texts = gsap.utils.toArray(".who-line");

    gsap.set(texts, {
      opacity: 0,
      y: 150,
      filter: "blur(8px)"
    });

    gsap.set(texts[0], {
      opacity: 1,
      y: 0,
      filter: "blur(0px)"
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=7000",
        pin: true,
        scrub: 2,
        anticipatePin: 1,
        invalidateOnRefresh: true
      }
    });

    texts.forEach((text, index) => {

      if (index === 0) return;

      tl.to(texts[index - 1], {
        opacity: 0,
        y: -180,
        filter: "blur(12px)",
        duration: 1.4,
        ease: "power3.inOut"
      });

      tl.fromTo(
        text,
        {
          opacity: 0,
          y: 180,
          filter: "blur(12px)"
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.4,
          ease: "power4.out"
        },
        ">"
      );

      // Hold the text on screen
      tl.to({}, { duration: 0.8 });

    });

    // Hide the final text
    tl.to(texts[texts.length - 1], {
      opacity: 0,
      y: -180,
      filter: "blur(12px)",
      duration: 1.2,
      ease: "power3.inOut"
    });

    // Reveal the card
    tl.to(".who-card", {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power4.out"
    });

    gsap.to(".bg-word", {
      x: 200,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

  }, sectionRef);

  return () => ctx.revert();

}, []);

return (

    <section
        className="whoSection"
        ref={sectionRef}
    >

        <div className="bg-word">

            APPEESOFT

        </div>

        {/* <div className="floating react">
React
</div>

<div className="floating next">
Next.js
</div>

<div className="floating node">
Node
</div>

<div className="floating ai">
AI
</div>

<div className="floating cloud">
Cloud
</div>

<div className="floating seo">
SEO
</div> */}

        <div className="content">

            <div className="smallTitle">

                WHO WE ARE

            </div>

            <div className="story">

                {
                    lines.map((line, index) => (

                        <h2
                            className="who-line"
                            key={index}
                        >

                            {line}

                        </h2>

                    ))
                }

            </div>

            <div className="who-card">

                <h3>

                    Building The Digital Future.

                </h3>

                <p>

                    AppeeSoft is a digital transformation company
                    helping startups, brands and enterprises build
                    modern digital experiences through strategy,
                    design, engineering and innovation.

                    We create websites, mobile applications,
                    enterprise software, AI powered solutions,
                    cloud platforms and digital marketing
                    strategies that help businesses grow with
                    confidence.

                </p>

                <div className="divider" />

                <div className="stats">

                    <div>

                        <h4>500+</h4>

                        <span>Projects</span>

                    </div>

                    <div>

                        <h4>150+</h4>

                        <span>Clients</span>

                    </div>

                    <div>

                        <h4>20+</h4>

                        <span>Experts</span>

                    </div>

                    <div>

                        <h4>98%</h4>

                        <span>Satisfaction</span>

                    </div>

                </div>

            </div>

        </div>

    </section>

);

}