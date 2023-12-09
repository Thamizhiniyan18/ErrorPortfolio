"use client";

import React from "react";
import { ToastAction } from "../ui/toast";
import { useToast } from "../ui/use-toast";
import hljs from "highlight.js";
import { Button } from "../ui/button";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

const CodeBlock = (props) => {
  const { toast } = useToast();
  const code = props.children.props.children;
  const html = hljs.highlightAuto(code);

  const copyToClipboard = (contentToCopy, name) => {
    navigator.clipboard
      .writeText(contentToCopy)
      .then(() =>
        toast({
          title: `${name} Copied Successfully`,
        })
      )
      .catch((error) => {
        console.log(error);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with copying to clipboard.",
          action: (
            <ToastAction
              altText="Try again"
              onClick={() => copyToClipboard(contentToCopy, name)}
            >
              Try again
            </ToastAction>
          ),
        });
      });
  };

  return (
    <pre className="relative rounded-b-xl ">
      <div className="CodeLanguage px-4 text-primary">
        <p>#! /bin/{html.language} </p>
        <Button
          variant="outline"
          size="icon"
          onClick={() => copyToClipboard(code, "Code Block")}
          className="cursor-pointer flex justify-center items-center w-10 h-10 rounded-xl border hover:bg-primary"
        >
          <span className="material-symbols-outlined">content_copy</span>
        </Button>
      </div>
      <ScrollArea id="WriteupCodeBlock" className="w-full p-4">
        <code
          className="w-full rounded-b-xl min-h-[100px]"
          dangerouslySetInnerHTML={{ __html: html.value }}
        />
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </pre>
  );
};

export default CodeBlock;
