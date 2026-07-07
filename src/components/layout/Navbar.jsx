import { useEffect, useState } from "react";
import "./Navbar.css";

import MenuOverlay from "./MenuOverlay";

import WhiteLogo from "../../assets/logo-white.png";
import ColorLogo from "../../assets/logo-color.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <>
      <header
        className={`navbar ${scrolled ? "scrolled" : ""}`}
      >
        <div className="navbar-inner">

          <img
            src={scrolled ? ColorLogo : WhiteLogo}
            alt="AppeeSoft Logo"
            className="logo"
          />

          <button
            className="menu-button"
            onClick={() => setIsOpen(true)}
          >
            MENU
          </button>

        </div>
      </header>

      <MenuOverlay
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
}

export default Navbar;