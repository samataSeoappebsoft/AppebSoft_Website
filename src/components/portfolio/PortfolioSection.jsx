// src/components/portfolio/PortfolioSection.jsx

import { useState } from "react";

import {
  ArrowUpRight,
  Globe,
  Smartphone,
  ShoppingBag,
  LayoutDashboard,
  MonitorCog,
} from "lucide-react";

import "./PortfolioSection.css";

const filters = [
  "All",
  "Web",
  "Mobile",
  "Software",
  "Ecommerce",
  "UI UX",
];

const portfolio = [
  {
    id: 1,
    category: "Web",
    title: "Classified Buy & Sell Marketplace",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    icon: Globe,
    description:
      "Complete classified marketplace platform with Flutter mobile applications and Laravel admin panel.",
    tech: ["Flutter", "Laravel", "MySQL", "REST API"],
  },

  {
    id: 2,
    category: "Web",
    title: "Course Selling Website",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
    icon: Globe,
    description:
      "Online learning platform with secure payment integration and student management.",
    tech: ["React", "Laravel", "Stripe", "MySQL"],
  },

  {
    id: 3,
    category: "Mobile",
    title: "E Commerce App & Website",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
    icon: ShoppingBag,
    description:
      "Complete ecommerce ecosystem including customer app and admin dashboard.",
    tech: ["Flutter", "Laravel", "Firebase"],
  },

  {
    id: 4,
    category: "Mobile",
    title: "Handy Services App",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200&q=80",
    icon: Smartphone,
    description:
      "Home service booking application connecting customers with professionals.",
    tech: ["Flutter", "Laravel", "Firebase"],
  },

  {
    id: 5,
    category: "Mobile",
    title: "All In One Delivery App",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200&q=80",
    icon: Smartphone,
    description:
      "Multi purpose delivery application for grocery, medicine and food.",
    tech: ["Flutter", "Laravel", "Google Maps"],
  },

  {
    id: 6,
    category: "Mobile",
    title: "Food Delivery App",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80",
    icon: Smartphone,
    description:
      "Restaurant ordering platform with live delivery tracking.",
    tech: ["Flutter", "Laravel", "Firebase"],
  },

  {
    id: 7,
    category: "Web",
    title: "Business Website Development",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
    icon: Globe,
    description:
      "Professional responsive business website with SEO optimization.",
    tech: ["React", "Node.js", "MongoDB"],
  },

  {
    id: 8,
    category: "Software",
    title: "Business Management Software",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    icon: MonitorCog,
    description:
      "Enterprise software for business automation and productivity.",
    tech: ["React", "Laravel", "MySQL"],
  },

  {
    id: 9,
    category: "UI UX",
    title: "Mobile App UI UX",
    image:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=1200&q=80",
    icon: LayoutDashboard,
    description:
      "Beautiful mobile application interface design.",
    tech: ["Figma", "Adobe XD"],
  },

  {
    id: 10,
    category: "UI UX",
    title: "Dashboard Design",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&q=80",
    icon: LayoutDashboard,
    description:
      "Modern analytics dashboard and CRM interface.",
    tech: ["Figma", "Illustrator"],
  },

  {
    id: 11,
    category: "Ecommerce",
    title: "Online Marketplace",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
    icon: ShoppingBag,
    description:
      "Scalable marketplace with secure checkout and vendor management.",
    tech: ["React", "Laravel", "Stripe"],
  },

  {
    id: 12,
    category: "Software",
    title: "Custom Enterprise Solution",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
    icon: MonitorCog,
    description:
      "Enterprise grade software tailored for business workflow automation.",
    tech: ["React", "Spring Boot", "PostgreSQL"],
  },
];

function PortfolioSection() {

  const [active, setActive] = useState("All");

  const projects =
    active === "All"
      ? portfolio
      : portfolio.filter(
          (item) => item.category === active
        );

  return (

    <section className="portfolio-section">

      <div className="portfolio-bg"></div>

      <div className="container">

        <div className="portfolio-heading">

          <span>OUR PORTFOLIO</span>

          <h2>
            We Build Digital
            <br />
            Products That Drive Growth
          </h2>

          <p>
            Explore our latest work across web
            development, mobile applications,
            software solutions, ecommerce platforms
            and digital transformation.
          </p>

        </div>

        <div className="portfolio-filter">

          {filters.map((item) => (

            <button
              key={item}
              className={
                active === item
                  ? "active"
                  : ""
              }
              onClick={() => setActive(item)}
            >
              {item}
            </button>

          ))}

        </div>

        <div className="portfolio-grid">
                      {projects.map((project) => {

            const Icon = project.icon;

            return (

              <div
                className="portfolio-card"
                key={project.id}
              >

                <div className="portfolio-image">

                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                  />

                  <div className="portfolio-overlay">

                    <button className="view-btn">

                      <ArrowUpRight size={22} />

                    </button>

                  </div>

                </div>

                <div className="portfolio-content">

                  <div className="portfolio-top">

                    <div className="portfolio-icon">

                      <Icon size={22} />

                    </div>

                    <span className="portfolio-category">

                      {project.category}

                    </span>

                  </div>

                  <h3>

                    {project.title}

                  </h3>

                  <p>

                    {project.description}

                  </p>

                  <div className="portfolio-tech">

                    {project.tech.map((tech) => (

                      <span
                        key={tech}
                        className="tech-tag"
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                </div>

              </div>

            );

          })}

          {projects.length === 0 && (

            <div className="portfolio-empty">

              <h3>No Projects Found</h3>

              <p>
                Please choose another category.
              </p>

            </div>

          )}

        </div>

        <div className="portfolio-bottom">

          <h3>
            Have a Project in Mind?
          </h3>

          <p>
            Whether you need a website, mobile
            application, ecommerce platform or
            enterprise software, our team is ready
            to bring your vision to life.
          </p>

          <button className="portfolio-btn">

            Start Your Project

          </button>

        </div>

      </div>

    </section>

  );

}

export default PortfolioSection;