import { allPosts } from "contentlayer/generated";
import styles from "@/styles/blogPost.module.scss";
import { Mdx, SocialMedia } from "../../../components";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  const { title, publishedAt, summary } = post;

  const ogImage = "";

  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return {
    title,
    description: summary,
    openGraph: {
      title,
      description: summary,
      type: "article",
      publishedTime: publishedAt,
      url: `https://emanuelalvarado.com/blog/${params.slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: summary,
      images: [ogImage],
    },
  };
};

export default function PostLayout({ params }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return (
    <article className={styles.main}>
      <div className={styles.mainHeader}>
        <h1>{post.title}</h1>
        <p>{post.summary}</p>
        <time dateTime={post.publishedAt}></time>
      </div>
      <hr />
      <Mdx code={post.body.code} />
      <SocialMedia />
    </article>
  );
}
