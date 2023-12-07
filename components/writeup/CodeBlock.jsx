"use client";

import React from "react";
import { ToastAction } from "../ui/toast";
import { useToast } from "../ui/use-toast";
import { Card, CardContent, CardHeader } from "../ui/card";
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
    <Card className="w-full bg-white/10 rounded-xl border border-primary">
      <CardHeader className="w-full h-5 p-4 bg-primary rounded-t-xl flex flex-row items-center">
        <p>{html.language} </p>
      </CardHeader>
      <CardContent className="bg-[var(codeblock)] p-4 rounded-b-xl">
        <pre className="relative rounded-b-xl ">
          <ScrollArea>
            <Button
              variant="outline"
              size="icon"
              onClick={() => copyToClipboard(code, "Code Block")}
              className="absolute top-2 right-2 cursor-pointer flex justify-center items-center w-10 h-10 rounded-xl border hover:bg-primary"
            >
              <span className="material-symbols-outlined">content_copy</span>
            </Button>
            <code
              className="w-full rounded-b-xl"
              dangerouslySetInnerHTML={{ __html: html.value }}
              // style={{backgroundColor: "none !important" }}
            />
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </pre>
      </CardContent>
    </Card>
  );
};

export default CodeBlock;
