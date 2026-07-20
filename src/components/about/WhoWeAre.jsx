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

  const texts = gsap.utils.toArray(".who-line");

  gsap.set(texts, {
    opacity: 0,
    y: 120,
    filter: "blur(8px)"
  });

  gsap.set(texts[0], {
    opacity: 1,
    y: 0,
    filter: "blur(0px)"
  });

  gsap.set(".who-card", {
    opacity: 0,
    y: 120
  });

  let current = 0;
  let locked = false;

  ScrollTrigger.create({
    trigger: sectionRef.current,
    start: "top top",
    end: "+=4000",
    pin: true
  });

  const wheelHandler = (e) => {

    if (locked) return;

    const rect = sectionRef.current.getBoundingClientRect();

    if (rect.top > 5 || rect.bottom < window.innerHeight - 5) return;

    if (e.deltaY > 0) {

      if (current < texts.length - 1) {

        locked = true;

        gsap.to(texts[current], {
          opacity: 0,
          y: -120,
          filter: "blur(8px)",
          duration: 0.5
        });

        current++;

        gsap.fromTo(
          texts[current],
          {
            opacity: 0,
            y: 120,
            filter: "blur(8px)"
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.5
          }
        );

        setTimeout(() => {
          locked = false;
        }, 600);

      } else {

        locked = true;

        gsap.to(texts[current], {
          opacity: 0,
          y: -120,
          duration: 0.5
        });

        gsap.to(".who-card", {
          opacity: 1,
          y: 0,
          duration: 0.8
        });

        setTimeout(() => {
          locked = false;
        }, 800);

      }

    }

    if (e.deltaY < 0) {

      if (gsap.getProperty(".who-card", "opacity") > 0.5) {

        locked = true;

        gsap.to(".who-card", {
          opacity: 0,
          y: 120,
          duration: 0.5
        });

        gsap.to(texts[current], {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.5
        });

        setTimeout(() => {
          locked = false;
        }, 600);

        return;

      }

      if (current > 0) {

        locked = true;

        gsap.to(texts[current], {
          opacity: 0,
          y: 120,
          filter: "blur(8px)",
          duration: 0.5
        });

        current--;

        gsap.to(texts[current], {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.5
        });

        setTimeout(() => {
          locked = false;
        }, 600);

      }

    }

  };

  window.addEventListener("wheel", wheelHandler, {
    passive: true
  });

  return () => {

    window.removeEventListener("wheel", wheelHandler);

    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

  };

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