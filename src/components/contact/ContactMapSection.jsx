import "./ContactMapSection.css";

function ContactMapSection() {
  return (
    <section className="contact-map-section">

      <div className="container">

        <div className="map-heading">

          <span>OUR LOCATION</span>

          <h2>
            Visit Our Office
          </h2>

          <p>
            We'd love to meet you. Visit our office or schedule
            a meeting with our team.
          </p>

        </div>

        <div className="map-wrapper">

          <iframe
            title="Appebsoft Location"
            src="https://www.google.com/maps?q=Appebsoft%20Pvt%20Ltd%20Kolkata&output=embed"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        </div>

      </div>

    </section>
  );
}

export default ContactMapSection;