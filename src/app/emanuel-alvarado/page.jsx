"use client";

import { Bio, Navbar, SocialMedia } from "@/components";
import styles from "@/styles/about.module.scss";

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
      <Navbar />
      <Bio description={description} content={content} />
      <SocialMedia />
    </section>
  );
}
