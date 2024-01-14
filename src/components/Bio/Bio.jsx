import Image from "next/image";
import styles from "./bio.module.scss";

export function Bio({ children }) {
  return (
    <section className={styles.bio}>
      <Image
        src="/emanuel-alvarado.jpeg"
        alt="emanuel alvarado"
        placeholder="blur"
        blurDataURL="/emanuel-alvarado.jpeg"
        width={100}
        height={100}
        style={{ borderRadius: "50%" }}
      />
      <div className={styles.bioContent}>
        <div className={styles.bioContentDesc}>
          <h1>Emanuel Alvarado</h1>
          <div className={styles.bioContentDescP}>
            <p>
              Hola, soy Emanuel Alvarado. Un apasionado por la tecnología y por
              cómo podemos convertirnos en nuestra mejor versión para impactar
              en los demás.
            </p>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
