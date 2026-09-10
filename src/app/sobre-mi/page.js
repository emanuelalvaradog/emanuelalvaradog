import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Sobre mí",
  description:
    "Emanuel Alvarado sobre inteligencia artificial, liderazgo de equipos y la forma en que trabaja.",
};

export default function SobreMi() {
  return (
    <section className="wrap" style={{ paddingBlock: "clamp(44px,8vh,88px)" }}>
      <p className="eyebrow">Sobre mí</p>
      <h1 style={{ maxWidth: "15ch" }}>Construyo con IA y con gente.</h1>

      <figure style={{ margin: "clamp(28px,5vh,48px) 0 0", maxWidth: "340px" }}>
        <Image
          className="portrait"
          src="/emanuel-alvarado.jpg"
          alt="Retrato de Emanuel Alvarado."
          width={900}
          height={900}
          sizes="(max-width: 600px) 100vw, 340px"
        />
      </figure>

      <div className="prose" style={{ marginTop: "clamp(30px,5vh,52px)" }}>
        <p>
          Soy Emanuel Alvarado. Estudié Ingeniería en la ESCOM del Politécnico y
          desde entonces no he dejado de construir: equipos, productos,
          empresas. Hoy lidero iniciativas de inteligencia artificial en
          corporativos y PyMEs, y desarrollo{" "}
          <Link href="/proyectos">productos propios</Link> que la usan de verdad.
        </p>

        <h2>Sobre la IA</h2>
        <p>
          La mayoría de los proyectos de IA no fracasan por la tecnología.
          Fracasan porque nadie cambió cómo trabaja la gente alrededor. El
          modelo casi nunca es el cuello de botella; el cuello de botella es la
          organización que tiene que adoptarlo.
        </p>
        <p>
          Por eso entro por la operación y no por la herramienta. Primero
          entiendo cómo trabaja el equipo hoy —qué revisa, qué copia y pega, qué
          espera tres días— y hasta después decido qué automatizar y hasta
          dónde. Lo que no se puede medir, no lo prometo.
        </p>
        <p>
          Tampoco creo en la demostración. Un piloto que impresiona en una junta
          y muere ahí no es un resultado: es un gasto. La pregunta que me
          importa es si el número que le duele al negocio se movió.
        </p>

        <h2>Sobre liderazgo</h2>
        <p>
          He armado equipos desde cero y he dirigido áreas ya formadas, y las dos
          cosas me enseñaron lo mismo: la autoridad se gana entregando, no con
          el título que traes en la firma del correo.
        </p>
        <p>
          Lo que mejor se me da es arrancar donde hay ambigüedad, cuando todavía
          nadie sabe qué se está construyendo y hay que decidir con información
          incompleta. Leo bien a las personas y calibro rápido el tono de una
          conversación difícil.
        </p>
        <p>
          Lo que me cuesta lo tengo igual de claro: sobre-responsabilizarme.
          Entro a resolver, el equipo se acomoda y termino cargando de más.
          Delego y me quedo encima, no por desconfianza sino porque tengo un
          modelo muy definido de cómo deben quedar las cosas. Trabajo en eso a
          propósito, porque el siguiente nivel para mí no es hacer más: es
          soltar más.
        </p>

        <h2>Cómo trabajo</h2>
        <p>
          Me clavo a fondo en lo que me da curiosidad y luego trato de traducirlo
          para que nadie se sienta tonto escuchándolo. Si no puedes explicar algo
          de forma cercana, todavía no lo entiendes.
        </p>
        <p>
          Prefiero el intento sobre la planeación eterna: construir, corregir en
          caliente y volver a intentar. Y prefiero decir de frente lo que pienso,
          incluso cuando incomoda, antes que quedar bien.
        </p>

        <h2>Hablemos</h2>
        <p>
          Si estás pensando en meter IA a tu operación y no sabes por dónde
          empezar, o quieres construir algo juntos, escríbeme a{" "}
          <a href="mailto:emanuel.alvarado.g@gmail.com">
            emanuel.alvarado.g@gmail.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
