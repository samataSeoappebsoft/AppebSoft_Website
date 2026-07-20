import { useEffect, useRef } from "react";
import "./TechnologyEcosystem.css";

const techs = [
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Kubernetes",
  "OpenAI",
  "Flutter",
  "React Native",
  "WordPress",
];

function TechnologyEcosystem() {
  const canvasRef = useRef(null);

useEffect(() => {
  const isTouchDevice =
    window.matchMedia("(pointer: coarse)").matches ||
    "ontouchstart" in window;

  // Disable canvas animation on mobile and tablets
  if (isTouchDevice) {
    return;
  }

  const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  resize();
  window.addEventListener("resize", resize);

  let last = null;

  const drawLine = (x1, y1, x2, y2) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "#62bdec";
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  };

  const onMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;

    if (last) {
      drawLine(last.x, last.y, x, y);
    }

    last = { x, y };
  };

  const onLeave = () => {
    last = null;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  window.addEventListener("mousemove", onMove);
  window.addEventListener("mouseleave", onLeave);

  return () => {
    window.removeEventListener("mousemove", onMove);
    window.removeEventListener("mouseleave", onLeave);
    window.removeEventListener("resize", resize);
  };
}, []);

  return (
    <section className="tech-section">

      {/* HEADER */}
      <div className="tech-header">
        <span>TECH STACK</span>
        <h2>Technology Ecosystem</h2>
        <p>Move cursor to create antenna connection</p>
      </div>

      {/* CANVAS */}
      <canvas ref={canvasRef} className="tech-canvas" />

      {/* MENU STARTS BELOW HEADER */}
      <div className="tech-nodes">
        {techs.map((t, i) => (
          <div key={i} className={`tech-node node-${i}`}>
            {t}
          </div>
        ))}
      </div>

    </section>
  );
}

export default TechnologyEcosystem;