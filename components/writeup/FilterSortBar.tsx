"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const FilterSortBar = () => {
  const [SortByDate, setSortByDate] = React.useState("latest");
  const [SortByAlpha, setSortByAlpha] = React.useState("ascending");

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const { replace } = useRouter();

  const sortByDateHandler = (value?: string) => {
    if (value) {
      params.set("sbd", value);
    } else {
      params.delete("sbd");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const sortByAlphaHandler = (value?: string) => {
    if (value) {
      params.set("sba", value);
    } else {
      params.delete("sba");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  //   React.useEffect(() => {
  //     const urlparams = new URLSearchParams(searchParams);
  //     if (urlparams.has("sbd")) {
  //       const sort = urlparams.get("sbd");
  //       if (sort === "latest" || sort === "ascending") {
  //       }
  //     } else {
  //       urlparams.get("sort");
  //     }
  //   }, [searchParams]);

  return (
    <div className="w-full h-[50px] mt-4 mb-2 flex items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <span className="material-symbols-outlined">sort</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Sort By Date </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={SortByDate}
            onValueChange={setSortByDate}
          >
            <DropdownMenuRadioItem
              value="latest"
              onClick={() => sortByDateHandler("latest")}
            >
              Latest
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              value="oldest"
              onClick={() => sortByDateHandler("oldest")}
            >
              Oldest
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <span className="material-symbols-outlined">sort_by_alpha</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Sort By Date </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={SortByAlpha}
            onValueChange={setSortByAlpha}
          >
            <DropdownMenuRadioItem
              value="ascending"
              onClick={() => sortByAlphaHandler("ascending")}
            >
              Ascending
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              value="descending"
              onClick={() => sortByAlphaHandler("descending")}
            >
              Descending
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <Button variant="outline" size="icon" onClick={() => replace("writeups")}>
        <span className="material-symbols-outlined">reset_wrench</span>
      </Button>
    </div>
  );
};

export default FilterSortBar;
