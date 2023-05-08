import Image from "next/image";
import styles from "./bio.module.scss";

const desc = [
  "Vivo mis días buscando crear memorias nuevas y estoy diseñando una vida que me ayude a lograr mi misión: impactar la vida de millones a través de la tecnología",
];

export function Bio({ description = desc, content = [] }) {
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
              Hola, soy Emanuel. Un generalista apasionado por la tecnología, el
              aprendizaje y las startups.
            </p>
            {description.map((content, index) => (
              <p key={index}>{content}</p>
            ))}
            {content.length > 0 && (
              <>
                <hr />
                {content.map((content, index) => (
                  <p key={index}>{content}</p>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
