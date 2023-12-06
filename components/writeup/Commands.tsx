"use client";

import React from "react";
import { Badge } from "../ui/badge";
import { ToastAction } from "../ui/toast";
import { useToast } from "../ui/use-toast";

type Props = { children: string };

const Commands = (props: Props) => {
  const { toast } = useToast();

  const copyToClipboard = (contentToCopy: string, name: string) => {
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
    <Badge
      onClick={() => copyToClipboard(props.children, "Command")}
      className="cursor-pointer"
    >
      {props.children}
    </Badge>
  );
};

export default Commands;
