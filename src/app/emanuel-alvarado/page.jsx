"use client";

import { Bio, SocialMedia } from "@/components";
import styles from "@/styles/about.module.scss";
import Link from "next/link";

export default function About() {
  return (
    <section className={styles.main}>
      <div className={styles.mainContent}>
        <Bio>
          <p>
            Soy co-fundador y líder de{" "}
            <Link href="https://hiteamgenesis.com">Génesis</Link>, un equipo de
            robótica construyendo un rover conformado por estudiantes
            universitarios con la misión de inspirar a jóvenes a construir cosas
            que jamás creyeron posibles.
          </p>
          <hr />
          <p>
            Fuera de la tecnología me gusta la fotografía, tocar el piano, el
            karting, la música electrónica y conocer personas.
          </p>
          <p>
            Me encanta leer y escuchar podcasts. Creo que es una gran forma de
            aprender de los demás y de tener una perspectiva más amplia de
            cualquier tema.
          </p>
          <p>
            Estoy seguro de que podemos tener una conversación increíble
            ¡Conectemos!
          </p>
        </Bio>
        <SocialMedia />
      </div>
    </section>
  );
}
