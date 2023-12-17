import Link from "next/link";
import styles from "./PostPreview.module.scss";
import moment from "moment";
import Image from "next/image";

export function PostPreview({
  title,
  brief,
  publishedAt,
  heroImage,
  tags,
  url,
}) {
  const date = moment(publishedAt).format("ll");
  return (
    <article className={styles.post}>
      <Link href={url}>
        {!!heroImage && (
          <Image width={100} height={100} src={heroImage} alt={title} />
        )}
        <h2>{title}</h2>
      </Link>
      <div className={styles.postDesc}>
        <p>{brief}</p>
        {/* {!!tags && (
          <ul>
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )} */}
        <span>{date}</span>
      </div>
    </article>
  );
}
