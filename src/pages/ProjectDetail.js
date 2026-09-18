import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project || !project.detail) {
    return (
      <div className="page">
        <Link className="back-link" to="/">
          Back to home
        </Link>
        <p>That project doesn't have a case study yet.</p>
      </div>
    );
  }

  return (
    <div className="page">
      <Link className="back-link" to="/">
        Back to home
      </Link>

      <header className="detail-hero">
        <h1>{project.name}</h1>
        <p className="hero-summary">{project.detail.intro}</p>
        <p className="project-tech">{project.tech.join(", ")}</p>
        <div className="hero-links">
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer">
              {project.linkLabel || project.link}
            </a>
          )}
          {project.repoNote && <span className="repo-note">{project.repoNote}</span>}
        </div>
      </header>

      <section className="section">
        <h2>What I worked on</h2>
        <div className="story-list">
          {project.detail.stories.map((s) => (
            <article className="story" key={s.title}>
              <h3>{s.title}</h3>
              <p>
                <strong>Problem: </strong>
                {s.problem}
              </p>
              <p>
                <strong>What I did: </strong>
                {s.work}
              </p>
              <p>
                <strong>What I found: </strong>
                {s.finding}
              </p>
              <p>
                <strong>Result: </strong>
                {s.result}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProjectDetail;
