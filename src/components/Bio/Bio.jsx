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
          <p>Full-Stack Developer & Product Designer</p>
          <div className={styles.bioContentDescP}>
            <p>
              Hola, soy Emanuel Alvarado. Un apasionado por la tecnología y por
              su poder transformador en nuestras vidas y en el mundo que nos
              rodea.
            </p>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
