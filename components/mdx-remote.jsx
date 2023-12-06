import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import Commands from "./writeup/Commands";

const H1 = (props) => {
  return (
    <Link href={`#${props.children}`} className="">
      <h1 {...props} id={props.children} className="">
        {props.children}
      </h1>
    </Link>
  );
};

const H2 = (props) => {
  return (
    <Link href={`#${props.children}`} className="">
      <h2 {...props} id={props.children} className="">
        {props.children}
      </h2>
    </Link>
  );
};

const H3 = (props) => {
  return (
    <Link href={`#${props.children}`} className="">
      <h3 {...props} id={props.children} className="">
        {props.children}
      </h3>
    </Link>
  );
};

const H4 = (props) => {
  return (
    <Link href={`#${props.children}`} className="">
      <h4 {...props} id={props.children} className="">
        {props.children}
      </h4>
    </Link>
  );
};

const Pre = (props) => {
  // console.log(props);

  if (props.children.type === "code") {
    const html = hljs.highlightAuto(props.children.props.children).value;

    // console.log(
    //   "----------------------------------------------------------------"
    // );
    // console.log(html);

    return <pre>{html}</pre>;
  }
};

const A = (props) => {
  return (
    <Link href={props.href} target="_blank" className="text-primary">
      {props.children}
    </Link>
  );
};

const CustomImage = (props) => {
  // https://raw.githubusercontent.com/Thamizhiniyan18/Writeups/main/Devvortex/Devvortex.md
  return (
    <Dialog>
      <DialogTrigger>
        <Image
          src={`https://raw.githubusercontent.com/Thamizhiniyan18/Writeups/main/${props.src}`}
          alt={props.alt}
          width={600}
          height={600}
        ></Image>
      </DialogTrigger>
      <DialogContent className="bg-none border-none w-[00vw] h-[100vh] max-w-[100vw] max-h-[100vw] flex justify-center items-center">
        <DialogHeader>
          {/* <DialogTitle>Are you sure absolutely sure?</DialogTitle> */}
          <DialogDescription>
            <Image
              src={`https://raw.githubusercontent.com/Thamizhiniyan18/Writeups/main/${props.src}`}
              alt={props.alt}
              width={800}
              height={800}
            ></Image>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  img: CustomImage,
  pre: Pre,
  a: A,
  code: Commands,
};

export default function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
