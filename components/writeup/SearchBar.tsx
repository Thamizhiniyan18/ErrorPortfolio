"use client";

import React from "react";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import Link from "next/link";
import { WriteupMetaData } from "@/lib/types";
import { Badge } from "../ui/badge";
import clsx from "clsx";

type Props = { Metadata: (WriteupMetaData | undefined)[] };

const SearchBar = ({ Metadata }: Props) => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <div
        className="w-full h-14 rounded-full border border-primary flex justify-between items-center p-4 pr-1 my-2"
        onClick={() => setOpen((open) => !open)}
      >
        <p className="text-sm text-muted-foreground">
          Click or Press{" "}
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>{" "}
          to Search
        </p>
        <div className="w-12 h-12 flex justify-center items-center rounded-full bg-primary">
          <span className="material-symbols-outlined text-3xl">search</span>
        </div>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Writeups">
            {Metadata.map((data) => (
              <Link
                key={`${data?.Title}`}
                href={`/writeups/${data?.Title}`}
                onClick={() => setOpen(false)}
              >
                <CommandItem className="bg-transparent cursor-pointer">
                  <span className="w-full flex justify-start items-center h-5">
                    {/* <Image /> */}
                    <div className="w-full flex justify-between items-center h-5">
                      <p>{data?.Title}</p>
                      <div className="flex just-start items-center h-5">
                        <Badge className={clsx("mr-1", {})}>{data?.Type}</Badge>
                        <Badge
                          className={clsx("", {
                            "bg-[#9FEF00]": data?.Platform === "HackTheBox",
                            "bg-red-600": data?.Platform === "TryHackMe",
                          })}
                        >
                          {data?.Difficulty}
                        </Badge>
                      </div>
                    </div>
                  </span>
                </CommandItem>
              </Link>
            ))}
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default SearchBar;
