import styles from "@/styles/home.module.scss";
import { Bio, LastPost, SocialMedia } from "@/components";

export default function Home() {
  return (
    <section className={styles.main}>
      <div className={styles.mainContent}>
        <Bio>
          <p>
            Vivo mis días buscando crear memorias nuevas y estoy diseñando una
            vida que me ayude a lograr mi misión: impactar la vida de millones
            de personas a través de la tecnología.
          </p>
        </Bio>
        <LastPost />
        <SocialMedia />
      </div>
    </section>
  );
}
