"use client";

import { Bio, SocialMedia } from "@/components";
import styles from "@/styles/about.module.scss";
import Link from "next/link";

const description = [
  "Soy fundador y líder de un equipo de robótica llamado Genesis conformado por más de 30 estudiantes.",
  "Actualmente estoy fundando una startup llamada Naptic que ayuda a equipos de trabajo a ser más eficientes con ayuda de IA",
];

const content = [
  "Fuera de la tecnología me gusta la fotografía, tocar el piano, el karting, la música electrónica y conocer personas.",
  "Me encanta leer y escuchar podcasts. Creo que es una gran forma de aprender de los demás y tener una perspectiva más amplia de cualquier tema.",
  "Siempre he sido una persona muy curiosa lo que me ha llevado a tener intereses muy variados.",
  "Estoy seguro de que podemos tener una conversación increíble. ¡Conectemos!",
];

export default function About() {
  return (
    <section className={styles.main}>
      <div className={styles.mainContent}>
        <Bio description={description} content={content}>
          <p>
            Soy fundador y líder de un equipo de robótica llamado{" "}
            <Link href="https://hiteamgenesis.com">Génesis</Link> conformado por
            más de 30 estudiantes de distintas universidades públicas de México.
          </p>
          <p>
            Actualmente estoy fundando una startup llamada{" "}
            <Link href="https://naptic.app">Naptic</Link> que ayuda a equipos de
            trabajo a ser más eficientes con ayuda de IA.
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
            Siempre he sido una persona muy curiosa lo que me ha llevado a tener
            intereses muy variados. Desde marketing y negocios hasta medicina y
            sociología.
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
