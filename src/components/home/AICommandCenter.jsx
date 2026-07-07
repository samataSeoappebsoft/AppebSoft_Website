import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import "./AICommandCenter.css";

gsap.registerPlugin(ScrollTrigger);

function AICommandCenter() {
  const sectionRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".node-1", {
        x: -300,
        y: -200,
        opacity: 0,
      });

      gsap.set(".node-2", {
        x: 300,
        y: -200,
        opacity: 0,
      });

      gsap.set(".node-3", {
        x: -300,
        y: 200,
        opacity: 0,
      });

      gsap.set(".node-4", {
        x: 300,
        y: 200,
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".ai-network",
          start: "top 70%",
        },
      });

      tl.from(".ai-core", {
        scale: 0,
        opacity: 0,
        duration: 1.2,
        ease: "back.out(2)",
      })
        .to(
          ".node-1",
          {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.4"
        )
        .to(
          ".node-2",
          {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.7"
        )
        .to(
          ".node-3",
          {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.7"
        )
        .to(
          ".node-4",
          {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.7"
        );

      gsap.to(".core-ring", {
        scale: 1.2,
        opacity: 0,
        duration: 3,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".ring-2", {
        scale: 1.4,
        opacity: 0,
        duration: 3,
        delay: 1,
        repeat: -1,
        ease: "none",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="ai-command"
      ref={sectionRef}
    >
      <div className="ai-bg-text">
        INTELLIGENCE
      </div>

      <div className="ai-header">
        <span>AI ENABLEMENT</span>

        <h2>
          Empowering Businesses
          With Enterprise Grade AI
        </h2>

        <p>
          AppebSoft bridges the gap between
          complex technology and measurable
          business growth through intelligent
          AI solutions and automation.
        </p>
      </div>

      <div className="ai-network">
        <div className="node node-1">
          <h3>AI Chatbots</h3>

          <p>
            Human like assistants providing
            24/7 customer engagement.
          </p>
        </div>

        <div className="node node-2">
          <h3>Smart Analytics</h3>

          <p>
            Transform raw business data
            into predictive insights.
          </p>
        </div>

        <div className="ai-core">
          <div className="core-ring"></div>

          <div className="core-ring ring-2"></div>

          <div className="core-center">
            AI
          </div>
        </div>

        <div className="node node-3">
          <h3>Process Automation</h3>

          <p>
            Eliminate repetitive workflows
            and improve efficiency.
          </p>
        </div>

        <div className="node node-4">
          <h3>AI Integration</h3>

          <p>
            Deploy AI directly into your
            existing ecosystem.
          </p>
        </div>
      </div>

      <div className="ai-bottom">
        <h3>
          Your Business Is
          AI Enabled
        </h3>

        <button>
          START YOUR AI JOURNEY →
        </button>
      </div>
    </section>
  );
}

export default AICommandCenter;