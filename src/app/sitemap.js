import { allPosts, Post } from "contentlayer/generated";

export default function sitemap() {
  const baseUrl = "https://emanuelalvarado.com";

  const blogPosts = allPosts.map((post) => {
    const { url, publishedAt } = post;

    return {
      url: `${baseUrl}${url}`,
      lastModified: publishedAt,
      changeFrequency: "never",
      priority: 0.7,
    };
  });

  const lastBlogPost = blogPosts[0];

  const pages = [
    {
      url: `${baseUrl}`,
      lastModified: "2023-05-18",
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/emanuel-alvarado`,
      lastModified: "2023-05-18",
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: `${lastBlogPost.lastModified}`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: "2023-05-18",
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  return [...pages, ...blogPosts];
}
