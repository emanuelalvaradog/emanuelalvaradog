"use client";

import { Navbar, ProjectCard, SocialMedia } from "@/components";
import styles from "@/styles/projects.module.scss";

const sampleProject = {
  title: "Naptic",
  description:
    "Naptic es una plataforma que permite a los usuarios crear y compartir sus propios cursos de manera gratuita.",
  technologies: ["NextJS", "Firebase", "TailwindCSS", "Stripe", "FastAPI"],
  links: [
    { name: "Github", path: "https://github.com/emanuelalvaradog" },
    { name: "Demo", path: "https://naptic.vercel.app" },
  ],
};

export default function page() {
  return (
    <section className={styles.main}>
      <Navbar />
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
        <ProjectCard {...sampleProject} />
        <ProjectCard {...sampleProject} />
        <ProjectCard {...sampleProject} />
        <ProjectCard {...sampleProject} />
      </section>
      <SocialMedia />
    </section>
  );
}
