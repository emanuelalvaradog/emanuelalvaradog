import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts().slice(0, 2);

  return (
    <>
      <section className="wrap-wide" style={{ paddingBlock: "clamp(52px,11vh,110px) clamp(36px,6vh,64px)" }}>
        <div className="hero-grid">
          <div>
            <p className="eyebrow">Emanuel Alvarado</p>
            <h1 style={{ maxWidth: "16ch" }}>
              Quería ser doctor. La tecnología escalaba mejor.
            </h1>
            <div className="prose" style={{ marginTop: "clamp(26px,4vh,40px)" }}>
              <p>
                De niño quería estudiar medicina para ayudar a la mayor cantidad
                de gente posible. Cuando entendí que un doctor atiende a uno a
                la vez, busqué otra forma de llegar más lejos y la encontré
                construyendo software.
              </p>
              <p>
                Hoy lidero iniciativas de inteligencia artificial en
                corporativos y PyMEs.
              </p>
              <p>
                También construyo productos propios: <strong>Amyra</strong>, un
                agente que contesta y agenda por estudios, spas y clínicas, y{" "}
                <strong>Kipu</strong>, un asistente de finanzas que vive dentro
                de WhatsApp.
              </p>
            </div>
          </div>

          <figure className="hero-portrait" style={{ margin: 0 }}>
            <Image
              className="portrait"
              src="/emanuel-alvarado.jpg"
              alt="Retrato de Emanuel Alvarado."
              width={900}
              height={900}
              priority
              sizes="(max-width: 760px) 260px, 34vw"
            />
          </figure>
        </div>
      </section>

      <section className="wrap" style={{ paddingBlock: "clamp(20px,4vh,44px)" }}>
        <p className="eyebrow">Últimos escritos</p>
        <ul className="timeline">
          {posts.map((post) => (
            <li className="entry" key={post.slug}>
              <span className="entry-year">{post.year}</span>
              <div>
                <h3>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p>{post.brief}</p>
              </div>
            </li>
          ))}
        </ul>
        <p style={{ marginTop: "24px", fontFamily: "var(--sans)", fontSize: ".88rem" }}>
          <Link href="/blog">Ver todos los escritos →</Link>
        </p>
      </section>
    </>
  );
}
