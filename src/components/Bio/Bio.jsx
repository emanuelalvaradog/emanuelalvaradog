import Image from "next/image";
import styles from "./bio.module.scss";

export function Bio({ children }) {
  return (
    <section className={styles.bio}>
      <Image
        src="/emanuelalvarado.jpeg"
        alt="emanuel alvarado"
        placeholder="blur"
        blurDataURL="/emanuelalvarado.jpeg"
        width={100}
        height={100}
        style={{ borderRadius: "50%" }}
      />
      <div className={styles.bioContent}>
        <div className={styles.bioContentDesc}>
          <h1>Emanuel Alvarado</h1>
          <div className={styles.bioContentDescP}>
            <p>
              Hola, soy Emanuel Alvarado. Un generalista apasionado por la
              tecnología, el aprendizaje y la creación.
            </p>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
