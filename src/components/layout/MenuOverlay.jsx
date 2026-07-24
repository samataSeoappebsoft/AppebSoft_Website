import { NavLink } from "react-router-dom";
import "./MenuOverlay.css";

function MenuOverlay({ isOpen, setIsOpen }) {

  const closeMenu = () => setIsOpen(false);


  return (
    <div className={`menu-overlay ${isOpen ? "active" : ""}`}>

      <button
        className="close-btn"
        onClick={closeMenu}
        aria-label="Close menu"
      >
        ×
      </button>


      <nav className="overlay-nav">

        <NavLink
          to="/"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          HOME
        </NavLink>


        <NavLink
          to="/about"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          ABOUT
        </NavLink>


        <NavLink
          to="/services"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          SERVICES
        </NavLink>


        <NavLink
          to="/portfolio"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          PORTFOLIO
        </NavLink>


        <NavLink
          to="/contact"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          CONTACT
        </NavLink>


      </nav>

    </div>
  );
}

export default MenuOverlay;