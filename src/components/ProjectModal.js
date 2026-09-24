import { useEffect, useRef } from "react";

function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null);
  const { detail } = project;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
    document.title = `${project.name} · Kevin Kuk`;
    return () => {
      document.title = "Kevin Kuk";
    };
  }, [project]);

  // Clicking the dimmed backdrop (the dialog element itself, outside the panel) closes it.
  const handleClick = (e) => {
    if (e.target === dialogRef.current) onClose();
  };

  // Esc fires "cancel"; let React Router own the close so the URL stays in sync.
  const handleCancel = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      className="modal"
      aria-labelledby="modal-title"
      onClick={handleClick}
      onCancel={handleCancel}
    >
      <div className="modal-panel">
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>

        <header className="modal-header">
          <p className="project-meta">
            {project.role} · {project.year}
          </p>
          <h2 id="modal-title">{project.name}</h2>
          <p className="modal-intro">{detail?.intro || project.description}</p>
          <p className="project-tech">{project.tech.join(", ")}</p>
          {(project.links?.length > 0 || project.repoNote) && (
            <div className="modal-links">
              {project.links?.map((l) => (
                <a key={l.url} className="btn" href={l.url} target="_blank" rel="noreferrer">
                  {l.label} ↗
                </a>
              ))}
              {project.repoNote && <span className="repo-note">{project.repoNote}</span>}
            </div>
          )}
        </header>

        {detail?.stats && (
          <dl className="stats">
            {detail.stats.map((s) => (
              <div className="stat" key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        )}

        {project.images?.length > 0 && (
          <div className={`modal-images count-${project.images.length}`}>
            {project.images.map((img) => (
              <img key={img.src} src={img.src} alt={img.alt} loading="lazy" />
            ))}
          </div>
        )}

        {detail?.highlights && (
          <section className="modal-section">
            <h3 className="modal-section-title">Highlights</h3>
            <div className="story-list">
              {detail.highlights.map((h) => (
                <article className="story" key={h.title}>
                  <h4>{h.title}</h4>
                  <p>{h.body}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {detail?.stories && (
          <section className="modal-section">
            <h3 className="modal-section-title">What I worked on</h3>
            <div className="story-list">
              {detail.stories.map((s) => (
                <article className="story" key={s.title}>
                  <h4>{s.title}</h4>
                  <p>
                    <strong>Problem</strong>
                    {s.problem}
                  </p>
                  <p>
                    <strong>What I did</strong>
                    {s.work}
                  </p>
                  <p>
                    <strong>What I found</strong>
                    {s.finding}
                  </p>
                  <p>
                    <strong>Result</strong>
                    {s.result}
                  </p>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </dialog>
  );
}

export default ProjectModal;
