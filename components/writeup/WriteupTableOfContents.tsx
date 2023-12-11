import React from "react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import { getTableOfContents } from "@/lib/toc";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TOC } from "../toc";

type Props = { Content: string | undefined };

const WriteupTableOfContents = async ({ Content }: Props) => {
  const toc = Content && (await getTableOfContents(Content));

  return (
    <>
      <section className="hidden lg:block fixed w-[300px] xl:w-[400px] h-[100vh-100px]">
        <ScrollArea>
          <h2 className="w-full text-center p-2 border-none">
            Table of Contents
          </h2>
          {toc && <TOC toc={toc} />}
        </ScrollArea>
      </section>
      <Sheet>
        <SheetTrigger
          id="SheetTriggerTOC"
          className="fixed bottom-32 bg-primary text-white flex justify-center items-center right-10 z-[9999] rounded-full p-0 w-14 h-14  xl:hidden"
        >
          <span className="material-symbols-outlined">toc</span>
        </SheetTrigger>
        <SheetContent side="left" className="xl:hidden">
          <SheetHeader>
            <h2 className="w-full text-center p-2 border-none">
              Table of Contents
            </h2>
          </SheetHeader>
          {toc && <TOC toc={toc} />}
        </SheetContent>
      </Sheet>
    </>
  );
};

export default WriteupTableOfContents;
