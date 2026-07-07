import "./MissionVision.css";

export default function MissionVision() {
  return (
    <section className="pmv">

      <div className="pmv-header">
        <h2>We Build Digital Products That Matter</h2>
        <p>
          A product focused engineering studio creating scalable apps, platforms,
          and digital experiences for modern businesses.
        </p>
      </div>

      <div className="pmv-grid">

        <div className="pmv-card">
          <span>01</span>
          <h3>Mission</h3>
          <p>
            To design and develop high performance digital solutions that help
            businesses grow faster with technology.
          </p>
        </div>

        <div className="pmv-card highlight">
          <span>02</span>
          <h3>Vision</h3>
          <p>
            To become a globally recognized technology partner delivering
            world class digital experiences.
          </p>
        </div>

        <div className="pmv-card">
          <span>03</span>
          <h3>Approach</h3>
          <p>
            Strategy driven design, scalable architecture, and clean engineering
            for long term success.
          </p>
        </div>

      </div>

    </section>
  );
}