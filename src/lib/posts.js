import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

/** Convierte "Sept 30 2023" y variantes a Date. */
function parseDate(value) {
  if (!value) return null;
  const normalized = String(value).replace("Sept", "Sep");
  const date = new Date(normalized);
  return Number.isNaN(date.getTime()) ? null : date;
}

export function getPostSlugs() {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getPost(slug) {
  const file = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;

  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  const date = parseDate(data.publishedAt);

  return {
    slug,
    title: data.title ?? slug,
    brief: data.brief ?? "",
    tags: data.tags ?? [],
    date,
    year: date ? date.getFullYear() : null,
    dateLabel: date
      ? new Intl.DateTimeFormat("es-MX", { day: "numeric", month: "long", year: "numeric" }).format(date)
      : "",
    content,
  };
}

/** Posts del más reciente al más antiguo. */
export function getAllPosts() {
  return getPostSlugs()
    .map(getPost)
    .filter(Boolean)
    .sort((a, b) => (b.date?.getTime() ?? 0) - (a.date?.getTime() ?? 0));
}
