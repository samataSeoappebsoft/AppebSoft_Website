import "./MenuOverlay.css";

function MenuOverlay({ isOpen, setIsOpen }) {
  return (
    <div className={`menu-overlay ${isOpen ? "active" : ""}`}>
      <button
        className="close-btn"
        onClick={() => setIsOpen(false)}
      >
        ×
      </button>

      <nav className="overlay-nav">
        <a href="/">HOME</a>
        <a href="/about">ABOUT</a>
        <a href="/services">SERVICES</a>
        <a href="/portfolio">PORTFOLIO</a>
        {/* <a href="/blog">BLOG</a> */}
        <a href="/contact">CONTACT</a>
      </nav>
    </div>
  );
}

export default MenuOverlay;