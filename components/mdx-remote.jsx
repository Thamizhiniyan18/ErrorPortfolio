import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";
import CodeBlock from "./writeup/CodeBlock";
import "highlight.js/styles/github-dark.css";
import remarkSlug from "remark-slug";
import remarkToc from "remark-toc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeSanitize from "rehype-sanitize";
import { fromHtmlIsomorphic } from "hast-util-from-html-isomorphic";
import remarkGfm from "remark-gfm";
import CustomImage from "./writeup/CustomImage";

const components = {
  img: CustomImage,
  pre: CodeBlock,
};

export default async function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkSlug, remarkToc],
          rehypePlugins: [
            rehypeSanitize,
            [rehypeSlug],
            [
              rehypeAutolinkHeadings,
              {
                content: /** @type {Array<ElementContent>} */ (
                  fromHtmlIsomorphic(
                    '<span class="material-symbols-outlined text-primary text-center mx-2">link</span>',
                    { fragment: true }
                  ).children
                ),
              },
            ],
          ],
        },
        scope: {},
      }}
    />
  );
}
