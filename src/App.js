import "./App.css";

const projects = [
  {
    name: "RentTape",
    year: "2026",
    role: "Contributor",
    description:
      "A rental price-tracking platform for the King County area. Scrapes daily listings across nine rental-management platforms and surfaces price and availability history over time.",
    tech: ["Python", "Playwright", "Next.js", "TypeScript", "PostgreSQL", "GitHub Actions"],
    link: "https://renttape.com",
    linkLabel: "renttape.com",
  },
  {
    name: "Zoom Clone",
    year: "2023",
    role: "Team project",
    description:
      "A real-time video communication UI built to understand WebRTC and low-latency data transmission. Load-tested with LoadRunner at 300+ concurrent users.",
    tech: ["JavaScript", "WebRTC", "LoadRunner"],
  },
  {
    name: "Full-Stack Software Design",
    year: "2023",
    role: "Coursework",
    description:
      "A chatbot and a polls app built to practice functional programming and immutable state. Covered with unit tests in Mocha for reliable, bug-free state transitions.",
    tech: ["React", "Node.js", "TypeScript", "Mocha"],
  },
];

const skills = {
  Languages: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "C", "PHP"],
  "Cloud & Tools": ["AWS Amplify", "S3", "Lambda", "Git", "Docker", "React", "Node.js"],
  "AI Tools": ["Claude Code"],
};

function App() {
  return (
    <div className="page">
      <header className="hero">
        <h1>Kevin Kuk</h1>
        <p className="hero-role">Computer Science student at the University of Washington</p>
        <p className="hero-summary">
          I build full-stack web tools, from scraping pipelines to the interfaces on top of them.
          Currently contributing to RentTape, a rental price-tracking platform, and studying
          Computer Science with a minor in Mathematics.
        </p>
        <div className="hero-links">
          <a href="mailto:kukkevin1@gmail.com">kukkevin1@gmail.com</a>
          <a href="https://github.com/kukkevin1-cmd" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kevin-kuk-a7391422a/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </header>

      <section className="section">
        <h2>Projects</h2>
        <ul className="project-list">
          {projects.map((p) => (
            <li key={p.name} className="project">
              <div className="project-heading">
                <h3>
                  {p.link ? (
                    <a href={p.link} target="_blank" rel="noreferrer">
                      {p.name}
                    </a>
                  ) : (
                    p.name
                  )}
                </h3>
                <span className="project-meta">
                  {p.role} · {p.year}
                </span>
              </div>
              <p className="project-description">{p.description}</p>
              <p className="project-tech">{p.tech.join(", ")}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <dl className="skills-list">
          {Object.entries(skills).map(([label, items]) => (
            <div className="skills-row" key={label}>
              <dt>{label}</dt>
              <dd>{items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </section>

      <footer className="footer">
        <p>Built with React, hosted on AWS Amplify.</p>
      </footer>
    </div>
  );
}

export default App;
