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

    const canvas = canvasRef.current;

    if (!canvas) return;


    const ctx = canvas.getContext("2d");


    const resize = () => {

      canvas.width = window.innerWidth;

      canvas.height = window.innerHeight;

    };


    resize();


    window.addEventListener(
      "resize",
      resize
    );


    let last = null;


    const drawLine = (
      x1,
      y1,
      x2,
      y2
    ) => {


      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );


      ctx.strokeStyle = "#7128ef";

      ctx.lineWidth = 2;

      ctx.lineCap = "round";


      ctx.shadowBlur = 15;

      ctx.shadowColor = "#7128ef";


      ctx.beginPath();


      ctx.moveTo(
        x1,
        y1
      );


      ctx.lineTo(
        x2,
        y2
      );


      ctx.stroke();


      ctx.shadowBlur = 0;


    };



    const onMove = (e) => {


      const x = e.clientX;

      const y = e.clientY;



      if(last){

        drawLine(
          last.x,
          last.y,
          x,
          y
        );

      }


      last = {
        x,
        y
      };


    };



    const onLeave = () => {


      last = null;


      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );


    };



    window.addEventListener(
      "mousemove",
      onMove
    );


    window.addEventListener(
      "mouseleave",
      onLeave
    );



    return () => {


      window.removeEventListener(
        "mousemove",
        onMove
      );


      window.removeEventListener(
        "mouseleave",
        onLeave
      );


      window.removeEventListener(
        "resize",
        resize
      );


    };


  }, []);



  return (

    <section className="tech-section">


      <div className="tech-header">

        <span>
          TECH STACK
        </span>


        <h2>
          Technology Ecosystem
        </h2>


        <p>
          Move cursor to create antenna connection
        </p>


      </div>



      <canvas
        ref={canvasRef}
        className="tech-canvas"
      />



      <div className="tech-nodes">

        {techs.map((tech, index) => (

          <div
            key={tech}
            className={`tech-node node-${index}`}
          >

            {tech}

          </div>

        ))}


      </div>



    </section>

  );

}


export default TechnologyEcosystem;