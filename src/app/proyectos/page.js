import { proyectos } from "@/../content/proyectos";

export const metadata = {
  title: "Proyectos",
  description:
    "Lo que Emanuel Alvarado ha construido: iniciativas de IA, productos propios y equipos.",
};

export default function Proyectos() {
  return (
    <section className="wrap" style={{ paddingBlock: "clamp(44px,8vh,88px)" }}>
      <p className="eyebrow">Proyectos</p>
      <h1>Lo que he construido.</h1>
      <p className="lede" style={{ marginTop: "20px" }}>
        Iniciativas de IA, productos propios y equipos.
      </p>

      <ul className="timeline" style={{ marginTop: "clamp(32px,6vh,56px)" }}>
        {proyectos.map((proyecto) => (
          <li className="entry" key={proyecto.title}>
            <span className="entry-year">{proyecto.year}</span>
            <div>
              <h3>
                {proyecto.href ? (
                  <a href={proyecto.href} target="_blank" rel="noopener noreferrer">
                    {proyecto.title}
                    <span className="ext" aria-hidden="true"> ↗</span>
                  </a>
                ) : (
                  proyecto.title
                )}
              </h3>
              <p>{proyecto.summary}</p>
              <div className="entry-meta">
                <span>{proyecto.role}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
