import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Loader.css";


function Loader({ finishLoading }) {

  const loaderRef = useRef(null);
  const logoRef = useRef(null);


  useEffect(() => {

    const tl = gsap.timeline();


    tl.fromTo(
      logoRef.current,
      {
        scale:0.5,
        opacity:0,
        rotate:-15,
      },
      {
        scale:1,
        opacity:1,
        rotate:0,
        duration:.6,
        ease:"power3.out",
      }
    )


    .to(
      loaderRef.current,
      {
        opacity:0,
        duration:.5,
        ease:"power2.out",
        delay:.2,
        onComplete:finishLoading,
      }
    );


  },[finishLoading]);



  return (

    <div
      className="loader"
      ref={loaderRef}
    >

      <img
        src="/appebsoft%20icon.png"
        alt="AppebSoft"
        className="loader-icon"
        ref={logoRef}
      />

    </div>

  );

}


export default Loader;