import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi2";

import "./FloatingButtons.css";

function FloatingButtons() {

  const [showTop, setShowTop] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setShowTop(window.scrollY > 350);

    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  const scrollTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };

  return (

    <>

      <a
        href="https://wa.me/91 9836717849 "
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >

        <FaWhatsapp />

      </a>

      <button
        className={`top-btn ${showTop ? "show" : ""}`}
        onClick={scrollTop}
      >

        <HiArrowUp />

      </button>

    </>

  );

}

export default FloatingButtons;