import "./ServicesSection.css";
import {
  Globe,
  Smartphone,
  Palette,
  MonitorCog,
  ShoppingCart,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern responsive websites and enterprise web applications built for speed, security and scalability.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Android and iOS applications that deliver seamless user experiences across every device.",
  },
  {
    icon: Palette,
    title: "UI UX Design",
    description:
      "Creative interfaces and intuitive user experiences that increase engagement and conversions.",
  },
  {
    icon: MonitorCog,
    title: "Software Development",
    description:
      "Powerful custom software solutions tailored to automate and streamline your business.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Development",
    description:
      "High performance ecommerce platforms designed to maximize online sales and customer satisfaction.",
  },
  {
    icon: Sparkles,
    title: "Digital Transformation",
    description:
      "Helping businesses adopt cloud, automation and AI to stay competitive in the digital era.",
  },
];

function ServicesSection() {
  return (
    <section className="services-section">

      <div className="services-bg"></div>

      <div className="container">

        <div className="section-heading">

          <span>OUR EXPERTISE</span>

          <h2>
            Digital Solutions Built
            <br />
            For Modern Businesses
          </h2>

          <p>
            We combine strategy, creativity and technology to deliver
            digital products that accelerate growth and help businesses
            stay ahead in today's competitive market.
          </p>

        </div>

<div className="services-grid">

  {services.map((service, index) => {

    const Icon = service.icon;

    return (

      <div
        className="service-card"
        key={index}
      >

        <div className="shine"></div>

        <div className="service-icon">

          <Icon size={42} strokeWidth={1.8} />

        </div>

        <h3>{service.title}</h3>

        <p>{service.description}</p>

      </div>

    );

  })}

</div>

      </div>

    </section>
  );
}

export default ServicesSection;