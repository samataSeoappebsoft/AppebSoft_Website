import "./Timeline.css";

const items = [
  {
    title: "Product Strategy",
    desc: "We define clear product roadmaps and business aligned digital strategies.",
  },
  {
    title: "UI/UX Design",
    desc: "Award focused design systems with clean and modern interfaces.",
  },
  {
    title: "Engineering",
    desc: "Scalable frontend and backend systems built with modern tech stacks.",
  },
  {
    title: "Deployment",
    desc: "Reliable cloud deployment, optimization, and long term support.",
  },
];

export default function Timeline() {
  return (
    <section className="ptl">

      <div className="ptl-header">
        <h2>Our Process</h2>
        <p>How we deliver award quality digital products</p>
      </div>

      <div className="ptl-line"></div>

      <div className="ptl-list">

        {items.map((item, i) => (
          <div className="ptl-item" key={i}>

            <div className="ptl-dot"></div>

            <div className="ptl-box">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}