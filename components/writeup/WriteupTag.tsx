"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = { tag: string };

const WriteupTag = ({ tag }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const params = new URLSearchParams(searchParams);

  const tagParamHandler = (value?: string) => {
    if (value) {
      params.set("tag", value);
    } else {
      params.delete("tag");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Badge
      key={tag}
      className="m-1 cursor-pointer"
      onClick={() => tagParamHandler(tag)}
    >
      {tag}
    </Badge>
  );
};

export default WriteupTag;
