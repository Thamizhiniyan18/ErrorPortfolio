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

type Props = {
  total: number;
  displayed: number;
};

const FilterSortBar = ({ total, displayed }: Props) => {
  const [SortByDate, setSortByDate] = React.useState("latest");
  const [SortByAlpha, setSortByAlpha] = React.useState("none");

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const { replace } = useRouter();

  const sortByDateHandler = (value?: string) => {
    if (value) {
      params.set("sbd", value);
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const sortByAlphaHandler = (value?: string) => {
    if (value) {
      params.set("sba", value);
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const layoutHandler = (value?: string) => {
    if (value) {
      params.set("layout", value);
    } else {
      params.delete("layout");
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
    <div className="w-full h-[50px] mt-4 mb-8 md:mb-2 flex items-center justify-between flex-col">
      <div className="w-full h-[50px] flex items-center justify-between">
        <div className="h-[50px] flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="bg-white/10 text-primary mr-4 w-9 md:w-14"
              >
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
              <Button
                variant="outline"
                className="bg-white/10 text-primary mr-4 w-9 md:w-14"
              >
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
                  value="none"
                  onClick={() => sortByAlphaHandler("none")}
                >
                  Ascending
                </DropdownMenuRadioItem>
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

          <Button
            variant="outline"
            className="bg-white/10 text-primary mr-4 w-9 md:w-14"
            onClick={() => replace("writeups")}
          >
            <span className="material-symbols-outlined">reset_wrench</span>
          </Button>
        </div>

        <div className="h-[50px] flex items-center">
          <div className="hidden md:block text-primary">
            <p>
              Showing{" "}
              <span className="dark:text-white text-black">{displayed}</span>{" "}
              out of <span className="dark:text-white text-black">{total}</span>{" "}
              Writeups
            </p>
          </div>

          <Button
            variant="outline"
            className="bg-white/10 text-primary ml-4 w-9 md:w-14"
            onClick={() => layoutHandler()}
          >
            <span className="material-symbols-outlined">grid_view</span>
          </Button>

          <Button
            variant="outline"
            className="bg-white/10 text-primary ml-4 w-9 md:w-14"
            onClick={() => layoutHandler("list")}
          >
            <span className="material-symbols-outlined">view_list</span>
          </Button>
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-[50px] md:hidden text-primary">
        <p>
          Showing{" "}
          <span className="dark:text-white text-black">{displayed}</span> out of{" "}
          <span className="dark:text-white text-black">{total}</span> Writeups
        </p>
      </div>
    </div>
  );
};

export default FilterSortBar;
