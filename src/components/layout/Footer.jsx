import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <span className="footer-tag">
          FINAL CHAPTER
        </span>

        <h2>APPEBSOFT</h2>

      </div>

      <div className="footer-middle">



        <p>
          Building digital products,
          intelligent experiences and
          scalable solutions for the future.
        </p>

        <div className="footer-links">

          <a href="/">
            Facebook
          </a>

          <a href="/">          
            LinkedIn
          </a>

          <a href="/potyfolio">
            Portfolio
          </a>

          <a href="/contact">
            Contact
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        <span>
          © 2026 AppebSoft
        </span>

        <span>
          Made In India · Built Worldwide
        </span>

      </div>

    </footer>
  );
}

export default Footer;