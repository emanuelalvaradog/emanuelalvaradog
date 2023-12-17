import { defineDocumentType, makeSource } from "@contentlayer/source-files";
import rehypeHighlight from "rehype-highlight";

import langPy from "highlight.js/lib/languages/python";
import langJs from "highlight.js/lib/languages/javascript";
import langGo from "highlight.js/lib/languages/go";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "date", required: true },
    brief: { type: "string", required: true },
    heroImage: { type: "string", required: false },
    tags: { type: "list", of: { type: "string" }, required: false },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/blog/${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [
      rehypeHighlight,
      { languages: { js: langJs, py: langJs, go: langGo } },
    ],
  },
});
