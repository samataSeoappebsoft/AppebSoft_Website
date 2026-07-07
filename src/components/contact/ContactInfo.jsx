// src/components/contact/ContactInfo.jsx

import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

import "./ContactInfo.css";

const contactData = [
  {
    id: 1,
    icon: PhoneCall,
    title: "Call Us",
    value: "+91 98367 17849",
    text: "Speak directly with our experts.",
  },
  {
    id: 2,
    icon: Mail,
    title: "Email Us",
    value: "info@appebsoft.com",
    text: "We usually reply within 24 hours.",
  },
  {
    id: 3,
    icon: MapPin,
    title: "Office Address",
    value: "57, Dr Saroj Nath Mukherjee St, Kotrung, Uttarpara, West Bengal 712258",
    text: "Visit our office for a meeting.",
  },
  {
    id: 4,
    icon: Clock,
    title: "Working Hours",
    value: "Mon to Sat",
    text: "09:30 AM to 07:00 PM",
  },
];

function ContactInfo() {
  return (
    <section className="contact-info">

      <div className="container">

        <div className="section-heading">

          <span>
            CONTACT INFORMATION
          </span>

          <h2>
            We Are Always Here
            <br />
            To Help You
          </h2>

          <p>
            Connect with our experienced team through
            phone, email or visit our office. We are
            always ready to discuss your project and
            provide the best digital solutions.
          </p>

        </div>

        <div className="info-grid">

          {contactData.map((item) => {

            const Icon = item.icon;

            return (

              <div
                className="info-card"
                key={item.id}
              >

                <div className="info-icon">

                  <Icon size={34} />

                </div>

                <h3>
                  {item.title}
                </h3>

                <h4>
                  {item.value}
                </h4>

                <p>
                  {item.text}
                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}

export default ContactInfo;