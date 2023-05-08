import styles from "./ProjectCard.module.scss";

export function ProjectCard({ title, description, technologies, links }) {
  return (
    <article className={styles.project}>
      <h2>{title}</h2>
      <div className={styles.projectDesc}>
        <div className={styles.projectDescTech}>
          <p>{description}</p>
          <span>{technologies.join(", ")}</span>
        </div>
        <div className={styles.projectDescLinks}>
          {links.map((link) => (
            <a href={link.path} key={link.name}>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
