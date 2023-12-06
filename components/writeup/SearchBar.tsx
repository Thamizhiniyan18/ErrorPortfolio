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

type Props = {};

const SearchBar = ({}: Props) => {
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

          {/* <CommandGroup heading="Passwords">
            {passwords.map((password) => (
              <Link
                key={`${password.id}`}
                href={{
                  pathname: "/dashboard/passwords",
                  query: { id: password.id },
                }}
                onClick={() => setOpen(false)}
              >
                <CommandItem className="bg-transparent cursor-pointer">
                  <span className="full flex justify-start items-center h-5">
                    <span className="material-symbols-outlined w-5 h-5 mr-3 text-primary">
                      password
                    </span>
                    {password.account_description}
                  </span>
                </CommandItem>
              </Link>
            ))}
          </CommandGroup>
          <CommandSeparator /> */}

          <CommandGroup heading="Recovery Keys">
            <Link
              href={`dashboard/recoverykeys?id=1`}
              onClick={() => setOpen(false)}
            >
              <CommandItem className="bg-transparent cursor-pointer">
                <span className="full flex justify-start items-center h-5">
                  <span className="material-symbols-outlined w-5 h-5 mr-3 text-primary">
                    key
                  </span>
                  Recovery Keys
                </span>
              </CommandItem>
            </Link>
          </CommandGroup>
          <CommandSeparator />

          <CommandGroup heading="Cards">
            <Link href={`/dashboard/cards?id=1`} onClick={() => setOpen(false)}>
              <CommandItem className="bg-transparent cursor-pointer">
                <span className="full flex justify-start items-center h-5">
                  <span className="material-symbols-outlined w-5 h-5 mr-3 text-primary">
                    credit_card
                  </span>
                  Cards
                </span>
              </CommandItem>
            </Link>
          </CommandGroup>
          <CommandSeparator />

          <CommandGroup heading="Notes">
            <Link href={`/dashboard/notes?id=1`} onClick={() => setOpen(false)}>
              <CommandItem className="bg-transparent cursor-pointer">
                <span className="full flex justify-start items-center h-5">
                  <span className="material-symbols-outlined w-5 h-5 mr-3 text-primary">
                    notes
                  </span>
                  Notes
                </span>
              </CommandItem>
            </Link>
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default SearchBar;
