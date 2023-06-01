"use client";

import { PostPreview, SocialMedia } from "@/components";
import styles from "@/styles/blog.module.scss";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

export const generateMetadata = ({ params }) => {
  return {
    title: "Blog de Emanuel Alvarado",
    description:
      "Mi camino hacia una vida de impacto: pensamientos y aprendizajes",
    openGraph: {
      title: "Blog de Emanuel Alvarado",
      description:
        "Mi camino hacia una vida de impacto: pensamientos y aprendizajes",
      type: "website",
      url: `https://emanuelalvarado.com/blog`,
      images: [
        {
          url: "https://emanuelalvarado.com/emanuelalvarado.jpeg",
          width: 1920,
          height: 1080,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Blog de Emanuel Alvarado | @emanuelalvaradog",
      description:
        "Mi camino hacia una vida de impacto: pensamientos y aprendizajes",
      images: [
        {
          url: "https://emanuelalvarado.com/emanuelalvarado.jpeg",
          width: 1920,
          height: 1080,
        },
      ],
    },
  };
};

export default function page() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(parseISO(a.date), parseISO(b.date))
  );

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
          {posts.map((post) => {
            console.log({ post });
            return <PostPreview key={post.title} {...post} />;
          })}
        </section>
        <SocialMedia />
      </div>
    </section>
  );
}
