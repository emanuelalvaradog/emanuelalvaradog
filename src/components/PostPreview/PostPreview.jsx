import styles from "./PostPreview.module.scss";

export function PostPreview({ title, preview, date }) {
  return (
    <article className={styles.post}>
      <h2>{title}</h2>
      <div className={styles.postDesc}>
        <p>{preview}</p>
        <span>{date}</span>
      </div>
    </article>
  );
}
