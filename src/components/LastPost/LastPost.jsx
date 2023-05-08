import { PostPreview } from "..";
import styles from "./LastPost.module.scss";

const samplePost = {
  title: "La carrera",
  preview:
    "En ocasiones he pensado que cualquier carrera o competencia se trata de ganarle a alguien más, pero vaya que estaba equivocado.",
  date: "May 6 2023",
};

export function LastPost() {
  return (
    <article className={styles.post}>
      <h1>Ultimo post</h1>
      <PostPreview {...samplePost} />
    </article>
  );
}
