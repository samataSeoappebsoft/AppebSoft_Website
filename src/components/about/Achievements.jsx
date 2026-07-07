import "./Achievements.css";

const stats = [
  { number: "120+", label: "Products Delivered" },
  { number: "80+", label: "Global Clients" },
  { number: "10+", label: "Industries Served" },
  { number: "5★", label: "Client Rating" },
];

export default function Achievements() {
  return (
    <section className="pac">

      <div className="pac-header">
        <h2>Recognitions & Results</h2>
        <p>Numbers that define our excellence</p>
      </div>

      <div className="pac-grid">

        {stats.map((s, i) => (
          <div className="pac-card" key={i}>
            <h3>{s.number}</h3>
            <p>{s.label}</p>
          </div>
        ))}

      </div>

    </section>
  );
}