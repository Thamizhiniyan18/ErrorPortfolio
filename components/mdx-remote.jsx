import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import React from "react";

const H1 = (props) => {
  return (
    <Link href={`#${props.children}`} className="">
      <h1 {...props} id={props.children} className="leading-3">
        {props.children}
      </h1>
    </Link>
  );
};

const CustomImage = (props) => {
  console.log(props);
  // return <Image></Image>;
};

const components = {
  h1: H1,
  img: CustomImage,
};

export default function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
