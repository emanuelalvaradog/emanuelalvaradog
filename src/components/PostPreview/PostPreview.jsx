import Link from "next/link";
import styles from "./PostPreview.module.scss";
import moment from "moment";

export function PostPreview({ title, summary, publishedAt, url }) {
  const date = moment(publishedAt).format("ll");
  return (
    <article className={styles.post}>
      <Link href={url}>
        <h2>{title}</h2>
      </Link>
      <div className={styles.postDesc}>
        <p>{summary}</p>
        <span>{date}</span>
      </div>
    </article>
  );
}
