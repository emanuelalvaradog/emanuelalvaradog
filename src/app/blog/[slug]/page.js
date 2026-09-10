import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPost, getPostSlugs } from "@/lib/posts";
import { mdxComponents } from "@/components/mdx";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.brief,
    openGraph: { title: post.title, description: post.brief, type: "article" },
  };
}

export default async function Post({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const otros = getAllPosts().filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <article className="wrap" style={{ paddingBlock: "clamp(44px,8vh,80px)" }}>
      <p className="eyebrow">{post.dateLabel}</p>
      <h1>{post.title}</h1>
      {post.brief ? (
        <p className="lede" style={{ marginTop: "18px", maxWidth: "34ch" }}>{post.brief}</p>
      ) : null}

      <div className="prose" style={{ marginTop: "clamp(30px,5vh,52px)" }}>
        <MDXRemote source={post.content} components={mdxComponents} />
      </div>

      {otros.length ? (
        <section style={{ marginTop: "clamp(48px,8vh,88px)" }}>
          <p className="eyebrow">Seguir leyendo</p>
          <ul className="timeline">
            {otros.map((otro) => (
              <li className="entry" key={otro.slug}>
                <span className="entry-year">{otro.year}</span>
                <div>
                  <h3>
                    <Link href={`/blog/${otro.slug}`}>{otro.title}</Link>
                  </h3>
                  <p>{otro.brief}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}
