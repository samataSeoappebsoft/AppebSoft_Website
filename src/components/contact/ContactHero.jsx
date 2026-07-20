// src/components/contact/ContactHero.jsx

import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";

import "./ContactHero.css";

function ContactHero() {
  return (
    <section className="contact-hero">

      <div className="contact-bg"></div>
      <div className="contact-grid"></div>

      <div className="container">

        <div className="contact-left">

          <span className="hero-tag">
            CONTACT APPEBSOFT
          </span>

          <h1>
            Let's Build
            <br />
            Something Amazing
            <span> Together.</span>
          </h1>

          <p>
            Whether you need a website, mobile
            application, enterprise software,
            ecommerce platform or digital
            transformation solution, our experts
            are ready to help turn your ideas into
            reality.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn1">
              Get Free Consultation
              <ArrowRight size={18} />
            </button>

            <button className="secondary-btn">
              View Portfolio
            </button>

          </div>

          <div className="hero-highlights">

            <div className="highlight">

              <Phone size={22} />

              <div>

                <h4>Call Us</h4>

                <span>
                   98367 17849
                </span>

              </div>

            </div>

            <div className="highlight">

              <Mail size={22} />

              <div>

                <h4>Email</h4>

                <span>
                  info@appebsoft.com
                </span>

              </div>

            </div>

            <div className="highlight">

              <MapPin size={22} />

              <div>

                <h4>Office</h4>

                <span>
                 57, Dr Saroj Nath Mukherjee St, Kotrung, Uttarpara, West Bengal 712258
                </span>

              </div>

            </div>

          </div>

        </div>

        <div className="contact-right">

          <div className="hero-card">

            <span className="card-badge">
              Quick Response
            </span>

            <h2>
              Send Us A Message
            </h2>

            <p>
              Fill out the form and our team will
              get back to you within 24 hours.
            </p>

            <form>

              <div className="input-row">

                <input
                  type="text"
                  placeholder="Full Name"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                />

              </div>

              <div className="input-row">

                <input
                  type="tel"
                  placeholder="Phone Number"
                />

                <input
                  type="text"
                  placeholder="Company Name"
                />

              </div>

              <select>

                <option>
                  Select Service
                </option>

                <option>
                  Web Development
                </option>

                <option>
                  Mobile App Development
                </option>

                <option>
                  Software Development
                </option>

                <option>
                  Ecommerce Development
                </option>

                <option>
                  UI/UX Design
                </option>

              </select>

              <textarea
                rows="6"
                placeholder="Tell us about your project..."
              ></textarea>

              <button
                type="submit"
                className="submit-btn"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ContactHero;