import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import React, { Suspense } from "react";
import Image from "next/image";
import Commands from "./writeup/Commands";
import CodeBlock from "./writeup/CodeBlock";
import "highlight.js/styles/github.css";
import { Skeleton } from "./ui/skeleton";
import remarkSlug from "remark-slug";
import remarkToc from "remark-toc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeSanitize from "rehype-sanitize";
import { fromHtmlIsomorphic } from "hast-util-from-html-isomorphic";
import remarkGfm from "remark-gfm";
import rehypeToc from "@jsdevtools/rehype-toc";

const H1 = (props) => {
  const url = props.children
    .toString()
    .toLowerCase()
    .replaceAll(" ", "-")
    .replaceAll(".", "");

  return (
    <Link href={`#${url}`} className="">
      <h1 {...props} id={url} className="">
        {props.children}
      </h1>
    </Link>
  );
};

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

const H2 = (props) => {
  const lowerCase = props.children.toString();
  // console.log(lowerCase);
  // const replace_ = lowerCase.replaceAll(" ", "-");
  // console
  //   .log(replace_)

  // const url = props.children

  // TODO: Fix URL parsing
  // .console.log(url);

  const url = slugify(props.children);

  return (
    <Link href={`#${url}`} className="">
      <h2 {...props} id={url} className="">
        {props.children}
      </h2>
    </Link>
  );
};

const H3 = (props) => {
  const url = props.children
    .toString()
    .toLowerCase()
    .replaceAll(" ", "-")
    .replaceAll(".", "");

  return (
    <Link href={`#${url}`} className="">
      <h3 {...props} id={url} className="">
        {props.children}
      </h3>
    </Link>
  );
};

const H4 = (props) => {
  const url = props.children
    .toString()
    .toLowerCase()
    .replaceAll(" ", "-")
    .replaceAll(".", "");

  return (
    <Link href={`#${url}`} className="">
      <h4 {...props} id={url} className="">
        {props.children}
      </h4>
    </Link>
  );
};

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

const CustomImage = (props) => {
  // https://raw.githubusercontent.com/Thamizhiniyan18/Writeups/main/Devvortex/Devvortex.md
  return (
    <div className="w-full">
      {/* <Image
          src={`https://raw.githubusercontent.com/Thamizhiniyan18/Writeups/main/${props.src}`}
          alt={props.alt}
          width={600}
          height={600}
        ></Image> */}

      <Suspense fallback={<Skeleton className="w-[500px] h-[500px]" />}>
        <Link
          href={{
            href: "",
            query: {
              lightbox: true,
            },
          }}
        >
          <Image
            src={`https://raw.githubusercontent.com/Thamizhiniyan18/Writeups/main/${props.src}`}
            alt={`${props.src} writeup related image.`}
            width={500}
            height={500}
            className="rounded-md object-cover"
          />
        </Link>
      </Suspense>

      {/* <Image
              src={`https://raw.githubusercontent.com/Thamizhiniyan18/Writeups/main/${props.src}`}
              alt={props.alt}
              width={800}
              height={800}
            ></Image> */}

      {/* <Suspense fallback={<Skeleton className="w-full h-full" />}>
        <Image
          src={`https://raw.githubusercontent.com/Thamizhiniyan18/Writeups/main/${props.src}`}
          alt={`${props.src} writeup related image.`}
          width={1000}
          height={800}
          className="rounded-md object-cover"
        />
      </Suspense> */}
    </div>
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
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  img: CustomImage,
  pre: CodeBlock,
  a: A,
  code: Commands,
  table: Table,
  p: P,
};

export default function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      // components={{ ...components, ...(props.components || {}) }}
      options={{
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkSlug, remarkToc],
          rehypePlugins: [
            rehypeHighlight,
            rehypeSanitize,
            [rehypeSlug],
            [
              rehypeAutolinkHeadings,
              {
                // behavior: "wrap",
                // content: '<span className="material-symbols-outlined">link</span>',
                content: /** @type {Array<ElementContent>} */ (
                  fromHtmlIsomorphic(
                    '<span class="material-symbols-outlined text-primary text-center mx-2">link</span>',
                    { fragment: true }
                  ).children
                ),
              },
            ],
            // [
            //   rehypeToc,
            //   {
            //     cssClasses: {
            //       toc: "page-outline", // Change the CSS class for the TOC
            //       link: "page-link", // Change the CSS class for links in the TOC
            //     },
            //   },
            // ],
          ],
        },
        scope: {},
      }}
    />
  );
}
