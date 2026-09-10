import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Escritos",
  description: "Textos de Emanuel Alvarado sobre decisiones, identidad y el oficio de construir.",
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <section className="wrap" style={{ paddingBlock: "clamp(44px,8vh,88px)" }}>
      <p className="eyebrow">Escritos</p>
      <h1>Lo que voy pensando.</h1>
      <p className="lede" style={{ marginTop: "20px" }}>
        Escribo para entender lo que me pasa. Si algo de esto te sirve, mejor.
      </p>

      <ul className="timeline" style={{ marginTop: "clamp(32px,6vh,56px)" }}>
        {posts.map((post) => (
          <li className="entry" key={post.slug}>
            <span className="entry-year">{post.year}</span>
            <div>
              <h3>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p>{post.brief}</p>
              <div className="entry-meta">
                <span>{post.dateLabel}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
