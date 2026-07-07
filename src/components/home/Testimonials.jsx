import { useState, useEffect } from "react";
import gsap from "gsap";

import "./Testimonials.css";

const testimonials = [
  {
    name: "John Smith",
    company: "TechCorp",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "AppeeSoft completely transformed our digital presence and increased our conversions significantly."
  },
  {
    name: "Sarah Wilson",
    company: "Finova",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Their design and development team delivered beyond expectations."
  },
  {
    name: "Michael Brown",
    company: "HealthSync",
    image:
      "https://randomuser.me/api/portraits/men/67.jpg",
    review:
      "Professional, innovative and highly reliable. A true technology partner."
  }
];

function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev =>
        prev === testimonials.length - 1
          ? 0
          : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".testimonial-active",
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1
      }
    );
  }, [active]);

  return (
    <section className="testimonials">

      <div className="container">

        <span className="section-tag">
          Testimonials
        </span>

        <h2>
          Trusted By Fast Growing
          Companies Worldwide
        </h2>

        <div className="testimonial-wrapper">

          <div className="testimonial-active">

            <img
              src={testimonials[active].image}
              alt=""
            />

            <p>
              "{testimonials[active].review}"
            </p>

            <h3>
              {testimonials[active].name}
            </h3>

            <span>
              {testimonials[active].company}
            </span>

          </div>

        </div>

        <div className="testimonial-nav">

          {testimonials.map((_, index) => (
            <button
              key={index}
              className={
                active === index
                  ? "active-dot"
                  : ""
              }
              onClick={() =>
                setActive(index)
              }
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;