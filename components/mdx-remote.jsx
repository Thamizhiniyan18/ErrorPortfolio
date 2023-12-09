import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import React, { Suspense } from "react";
import Image from "next/image";
import Commands from "./writeup/Commands";
import CodeBlock from "./writeup/CodeBlock";
import "highlight.js/styles/github-dark.css";
import { Skeleton } from "./ui/skeleton";
import remarkSlug from "remark-slug";
import remarkToc from "remark-toc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeSanitize from "rehype-sanitize";
import { fromHtmlIsomorphic } from "hast-util-from-html-isomorphic";
import remarkGfm from "remark-gfm";
import CustomImage from "./writeup/CustomImage";

const A = (props) => {
  return (
    <Link
      href={props.href}
      target="_blank"
      className="BlogHeadingLinks text-primary my-2"
    >
      {props.children}
    </Link>
  );
};

function Table({ data }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

const P = ({ children }) => {
  if (children.toString().startsWith("|")) {
    const headers = [];
    let rows;

    children.forEach((child) => {
      if (child instanceof Object) {
        headers.push(child.props.children);
      } else {
        if (child !== "|") {
          if (child.toString().split("\n") instanceof Array) {
            let data = child.toString().split("\n");
            let dataSet = [];
            data.forEach((each) => {
              if (each !== "|") {
                let tempData = [];
                each.split("|").forEach((e) => {
                  if (e !== "" && e !== "---") {
                    tempData.push(e);
                  }
                });
                dataSet.push(tempData);
              }
            });
            rows = dataSet;
          } else {
            if (child !== "|") rows.push(child.toString().split("\n"));
          }
        }
      }
    });

    return <Table data={{ headers, rows }} />;
  } else {
    return <p>{children}</p>;
  }
};

const components = {
  // img: CustomImage,
  pre: CodeBlock,
  // a: A,
  // table: Table,
  // p: P,
  // code: Commands,
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
            // [
            //   rehypeHighlight,
            //   {
            //     detect: true,
            //   },
            // ],
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
