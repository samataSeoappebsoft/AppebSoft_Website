import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import "./NextChapter.css";

gsap.registerPlugin(ScrollTrigger);

function NextChapter() {
  const sectionRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".chapter-label", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".chapter-title span", {
        y: 150,
        opacity: 0,
        stagger: 0.12,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.from(".chapter-line", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.from(".conversation-left > *", {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".chapter-conversation",
          start: "top 75%",
        },
      });

      gsap.from(".premium-form", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".premium-form",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="next-chapter"
      ref={sectionRef}
    >
      <div className="chapter-bg-text">
        CHAPTER 02
      </div>

      <div className="chapter-content">

        <span className="chapter-label">
          THE JOURNEY CONTINUES
        </span>

        <h2 className="chapter-title">
          <span>YOUR</span>
          <span>IDEA</span>
          <span>BECOMES</span>
          <span>REALITY.</span>
        </h2>

        <div className="chapter-line" />

        <div className="chapter-conversation">

          <div className="conversation-left">

            <span>LET'S TALK</span>

            <h3>
              Tell Us What
              You're Building.
            </h3>

            <p>
              Whether you're launching a startup,
              scaling an existing business,
              building an AI platform or creating
              the next big thing, we're ready
              to help bring it to life.
            </p>

          </div>

          <div className="conversation-right">

            <div className="form-bg">
              CREATE
            </div>

            <form className="premium-form">

              <div className="input-group">
                <input
                  type="text"
                  placeholder="Your Name"
                />
              </div>

              <div className="input-group">
                <input
                  type="email"
                  placeholder="Email Address"
                />
              </div>

              <div className="input-group">
                <input
                  type="text"
                  placeholder="Company Name"
                />
              </div>

              <div className="project-types">

                <button
                  type="button"
                  className="type-pill"
                >
                  Web Platform
                </button>

                <button
                  type="button"
                  className="type-pill"
                >
                  Mobile App
                </button>

                <button
                  type="button"
                  className="type-pill"
                >
                  AI Solution
                </button>

                <button
                  type="button"
                  className="type-pill"
                >
                  Digital Marketing
                </button>

                <button
                  type="button"
                  className="type-pill"
                >
                  Custom Software
                </button>

              </div>

              <div className="input-group">
                <textarea
                  rows="5"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                className="submit-btn1"
                type="submit"
              >
                START PROJECT →
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default NextChapter;