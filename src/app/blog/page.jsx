"use client";

import { Navbar, PostPreview, SocialMedia } from "@/components";
import styles from "@/styles/blog.module.scss";

const samplePost = {
  title: "La carrera",
  preview:
    "En ocasiones he pensado que cualquier carrera o competencia se trata de ganarle a alguien más, pero vaya que estaba equivocado.",
  date: "May 6 2023",
};

export default function page() {
  return (
    <section className={styles.main}>
      <div className={styles.mainContent}>
        <div className={styles.header}>
          <h1>Blog</h1>
          <div className={styles.headerDesc}>
            <p>
              Mi camino hacia una vida de impacto: pensamientos y aprendizajes
            </p>
            <p>
              Escribo para compartir mis aprendizajes y pensamientos en mi
              camino a diseñar una vida que me ayude a impactar a millones de
              personas a través de la tecnología.
            </p>
          </div>
        </div>
        <hr />
        <section className={styles.posts}>
          <PostPreview {...samplePost} />
          <PostPreview {...samplePost} />
          <PostPreview {...samplePost} />
          <PostPreview {...samplePost} />
          <PostPreview {...samplePost} />
          <PostPreview {...samplePost} />
          <PostPreview {...samplePost} />
          <PostPreview {...samplePost} />
          <PostPreview {...samplePost} />
          <PostPreview {...samplePost} />
        </section>
        <SocialMedia />
      </div>
    </section>
  );
}
