import React from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Separator } from "./ui/separator";

type Props = {};

const pages: {
  title: string;
  href: string;
  description?: string;
  sections: { title: string; href: string; description?: string }[];
}[] = [
  {
    title: "Home",
    href: "/",
    sections: [
      {
        title: "Thamizhiniyan C S",
        href: "/",
        description: "All the Writeups that I have written so far.",
      },
      {
        title: "About",
        href: "/#About",
        description: "HackTheBox Writeups.",
      },
      {
        title: "Latest Writeups",
        href: "/writeups?sbd=latest",
        description: "TryHackMe Writeups.",
      },
    ],
  },
  {
    title: "Writeups",
    href: "/Writeups",
    sections: [
      {
        title: "All",
        href: "/writeups?sbd=latest",
        description: "All the Writeups that I have written so far.",
      },
      {
        title: "HackTheBox",
        href: "/writeups?platform=hackthebox&sbd=latest",
        description: "HackTheBox Writeups.",
      },
      {
        title: "TryHackMe",
        href: "/writeups?platform=tryhackme&sbd=latest",
        description: "TryHackMe Writeups.",
      },
    ],
  },
];

const NavBarMobile = (props: Props) => {
  const date = new Date();

  return (
    <div className="flex xl:hidden z-[45] bg-background fixed top-0 left-0 w-full h-[100px] justify-between items-center px-10">
      <Link href="/">
        <h1 className="text-sm md:text-2xl">Thamizhiniyan C S</h1>
      </Link>
      <div className="flex items-center ">
        <ModeToggle />

        <Sheet>
          <SheetTrigger className="xl:hidden inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9 text-primary ml-4">
            <span className="material-symbols-outlined">menu_open</span>
          </SheetTrigger>
          <SheetContent side="right" className="xl:hidden">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>Choose your destination.</SheetDescription>
            </SheetHeader>

            <div className="w-full p-4">
              {pages.map((page) => (
                <div key="" className="mb-8">
                  <h3 className="text-primary">{page.title}</h3>
                  {page.sections.map((section) => (
                    <Link
                      href={section.href}
                      key=""
                      className="w-full h-10 flex items-center"
                    >
                      <Separator
                        className="w-[1px] bg-primary mx-4"
                        orientation="vertical"
                      />
                      <h5>{section.title}</h5>
                    </Link>
                  ))}
                </div>
              ))}
            </div>

            <SheetFooter className="flex flex-col justify-center items-center">
              <p className="text-slate-500 text-xs tracking-widest">
                Designed & Developed by
              </p>
              <p className="text-primary leading-[.5rem]">Thamizhiniyan C S</p>
              <p className="text-slate-500 text-xs tracking-widest">
                Copyrights &#169; {date.getFullYear()}
              </p>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default NavBarMobile;
