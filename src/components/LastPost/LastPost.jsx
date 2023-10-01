import { PostPreview } from "..";
import styles from "./LastPost.module.scss";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

export function LastPost() {
  const post = allPosts.sort((a, b) =>
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
  )[0];

  return (
    <article className={styles.post}>
      <h1>Ultimo post</h1>
      <PostPreview {...post} />
    </article>
  );
}
