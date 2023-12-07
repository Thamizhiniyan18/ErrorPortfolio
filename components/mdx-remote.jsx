import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import React, { Suspense } from "react";
import Image from "next/image";
import Commands from "./writeup/Commands";
import CodeBlock from "./writeup/CodeBlock";
import "highlight.js/styles/github.css";
import { Skeleton } from "./ui/skeleton";

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

const H2 = (props) => {
  const url = props.children
    .toString()
    .toLowerCase()
    .replaceAll(" ", "-")
    .replaceAll(".", "");

  console.log(props.children + "-" + url);

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
};

export default function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
