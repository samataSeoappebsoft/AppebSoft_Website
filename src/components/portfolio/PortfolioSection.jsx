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
  "Corporate",
  "Ecommerce",
  "Healthcare",
  "Industrial",
  "Real Estate",
];

const portfolio = [
  {
    id: 1,
    category: "Industrial",
    title: "Piab",
    image: "/portfolio/piab.png",
    link: "https://www.piab.com/",
    icon: Globe,
    description:
      "Corporate industrial website focused on vacuum automation, gripping and lifting solutions.",
    tech: ["React", "UI/UX", "SEO"],
  },

  {
    id: 2,
    category: "Ecommerce",
    title: "Nasty Gal",
    image: "/portfolio/nasty-gal.jpg",
    link: "https://www.nastygal.com/",
    icon: ShoppingBag,
    description:
      "Global fashion ecommerce platform with modern shopping experience and premium UI.",
    tech: ["Ecommerce", "Responsive", "UX"],
  },

  {
    id: 3,
    category: "Ecommerce",
    title: "Suta",
    image: "/portfolio/suta.jpg",
    link: "https://suta.in/",
    icon: ShoppingBag,
    description:
      "Premium Indian fashion and lifestyle ecommerce platform with beautiful storytelling.",
    tech: ["Shopify", "UI/UX", "SEO"],
  },

  {
    id: 4,
    category: "Corporate",
    title: "Ambey Group",
    image: "/portfolio/ambey-group.jpg",
    link: "https://ambeygroup.net/",
    icon: Globe,
    description:
      "Corporate business website showcasing manufacturing excellence and global presence.",
    tech: ["React", "Corporate", "Responsive"],
  },

  {
    id: 5,
    category: "Ecommerce",
    title: "House of Indya",
    image: "/portfolio/indya.jpg",
    link: "https://www.houseofindya.com/",
    icon: ShoppingBag,
    description:
      "Leading ethnic fashion ecommerce platform with premium shopping experience.",
    tech: ["Ecommerce", "Performance", "SEO"],
  },

  {
    id: 6,
    category: "Real Estate",
    title: "Sobha",
    image: "/portfolio/sobha.jpg",
    link: "https://www.sobha.com/",
    icon: LayoutDashboard,
    description:
      "Luxury real estate website showcasing premium residential and commercial properties.",
    tech: ["Corporate", "CMS", "SEO"],
  },

  {
    id: 7,
    category: "Corporate",
    title: "IDTL",
    image: "/portfolio/IDTL.jpg",
    link: "https://theidtl.com/",
    icon: MonitorCog,
    description:
      "NABL accredited laboratory website providing diagnostic testing and healthcare services.",
    tech: ["React", "Corporate", "Responsive"],
  },

  {
    id: 8,
    category: "Corporate",
    title: "WASH_E LAUNDRY",
    image: "/portfolio/WASH_E.jpg",
    link: "https://www.washelaundry.in/",
    icon: MonitorCog,
    description:
      "Wash-E Laundry takes it off your hands from hotel linen and hostel bedding to corporate uniforms and university wear.",
    tech: ["React", "Corporate", "Responsive"],
  },

  // {
  //   id: 7,
  //   category: "Healthcare",
  //   title: "IDTL",
  //   image: "/portfolio/idtl.webp",
  //   link: "https://theidtl.com/",
  //   icon: MonitorCog,
  //   description:
  //     "NABL accredited laboratory website providing diagnostic testing and healthcare services.",
  //   tech: ["React", "Healthcare", "Responsive"],
  // },
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
              <article
                className="portfolio-card"
                key={project.id}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-image"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                  />

                  <div className="portfolio-overlay">

                    <div className="portfolio-badge">
                      {project.category}
                    </div>

                    <div className="portfolio-arrow">
                      <ArrowUpRight size={24} />
                    </div>

                  </div>
                </a>

                <div className="portfolio-content">

                  <div className="portfolio-header">

                    <div className="portfolio-icon">
                      <Icon size={22} />
                    </div>

                    <div>

                      <h3>{project.title}</h3>

                      <span>
                        {project.category}
                      </span>

                    </div>

                  </div>

                  <p className="portfolio-description">
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

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="visit-btn"

                  >
                    Visit Website

                    <ArrowUpRight size={18} />

                  </a>

                </div>
              </article>
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
            Explore Our Portfolio
          </h3>

          <p>
            Discover our latest projects, innovative solutions,
            and digital experiences crafted for businesses across industries.
          </p>

          <a
            href="https://appebsoft.com/wp-content/uploads/2026/03/Portfolio-of-Appebsoft.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-btn"
            download
          >

            <span>
              Download Portfolio
            </span>

            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>

          </a>

        </div>

      </div>

    </section>

  );

}

export default PortfolioSection;