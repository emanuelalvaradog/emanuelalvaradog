"use client";

import { Navbar, ProjectCard, SocialMedia } from "@/components";
import styles from "@/styles/projects.module.scss";
import projects from "/projects.json";

export default function page() {
  return (
    <section className={styles.main}>
      <div className={styles.header}>
        <h1>Proyectos</h1>
        <div className={styles.headerDesc}>
          <p>
            Como desarrollador y diseñador de productos, me encanta crear y
            diseñar productos que la gente ame.
          </p>
          <p>
            Más proyectos en mi{" "}
            <a href="https://github.com/emanuelalvaradog"> cuenta de github</a>
          </p>
        </div>
      </div>
      <hr />
      <section className={styles.projects}>
        {projects.map((project) => (
          <ProjectCard {...project} key={project.title} />
        ))}
      </section>
      <SocialMedia />
    </section>
  );
}
