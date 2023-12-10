import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

type Props = {};

const ScrollToUp = (props: Props) => {
  return (
    <Button className="fixed bottom-10 right-10 z-[9999] rounded-full p-0 w-10 h-10">
      <Link
        href="#ScrollToTop"
        className="w-full h-full flex justify-center items-center "
      >
        <span className="material-symbols-outlined">arrow_upward</span>
      </Link>
    </Button>
  );
};

export default ScrollToUp;
