import { allPosts } from "contentlayer/generated";
import styles from "@/styles/blogPost.module.scss";
import { Mdx, SocialMedia, Subscribe } from "../../../components";
import "/src/styles/highlight-js/atom-one-dark.css";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  const { title, publishedAt, brief } = post;

  const ogImage = "";

  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return {
    title,
    description: brief,
    openGraph: {
      title,
      description: brief,
      type: "article",
      publishedTime: publishedAt,
      url: `https://emanuelalvarado.com/blog/${params.slug}`,
      images: [
        {
          url: "https://emanuelalvarado.com/emanuelalvarado.jpeg",
          width: 1920,
          height: 1080,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: brief,
      images: [
        {
          url: "https://emanuelalvarado.com/emanuelalvarado.jpeg",
          width: 1920,
          height: 1080,
        },
      ],
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
        <p>{post.brief}</p>
        <time dateTime={post.publishedAt}></time>
      </div>
      <hr />
      <Mdx code={post.body.code} />
      {/* <Subscribe type={"post"} /> */}
      <SocialMedia />
    </article>
  );
}
