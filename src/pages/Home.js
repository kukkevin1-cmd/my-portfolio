import { Link, useNavigate, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectModal from "../components/ProjectModal";

const skills = {
  Languages: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "C", "PHP"],
  "Web & Backend": ["React", "Next.js", "Node.js", "Express", "WebRTC", "Socket.IO", "PostgreSQL"],
  "Testing & Tools": ["pytest", "Mocha", "k6", "Playwright", "GitHub Actions", "Git", "Docker"],
  Cloud: ["AWS Amplify", "S3", "Lambda"],
  AI: ["Claude API (tool use)", "Claude Code"],
};

const RESUME_URL =
  "https://docs.google.com/document/d/1pxeve3czkYwrdacVpOXUw0izdiAA8gMpgOrGvHQk77k/edit?usp=sharing";

function Home() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const openProject = slug ? projects.find((p) => p.slug === slug) : null;

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
        <nav className="hero-actions" aria-label="Profile links">
          <a className="btn btn-primary" href={RESUME_URL} target="_blank" rel="noreferrer">
            Resume
          </a>
          <a
            className="btn"
            href="https://www.linkedin.com/in/kevin-kuk-a7391422a/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a className="btn" href="https://github.com/kukkevin1-cmd" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="hero-email" href="mailto:kukkevin1@gmail.com">
            kukkevin1@gmail.com
          </a>
        </nav>
      </header>

      <section className="section">
        <h2>Projects</h2>
        <ul className="project-list">
          {projects.map((p) => (
            <li key={p.slug} className="project">
              <div className="project-heading">
                <h3>
                  <Link className="project-link" to={`/projects/${p.slug}`}>
                    {p.name}
                  </Link>
                </h3>
                <span className="project-meta">
                  {p.role} · {p.year}
                </span>
              </div>
              <p className="project-description">{p.description}</p>
              <p className="project-tech">{p.tech.join(", ")}</p>
              <span className="project-detail-link" aria-hidden="true">
                View details →
              </span>
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

      {openProject && (
        <ProjectModal project={openProject} onClose={() => navigate("/", { preventScrollReset: true })} />
      )}
      {slug && !openProject && (
        <p className="not-found" role="status">
          That project doesn't exist. <Link to="/">Back to all projects</Link>
        </p>
      )}
    </div>
  );
}

export default Home;
