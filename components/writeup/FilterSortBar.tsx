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
import clsx from "clsx";

type Props = {
  total: number;
  displayed: number;
};

const FilterSortBar = ({ total, displayed }: Props) => {
  const [SortByDate, setSortByDate] = React.useState("latest");
  const [SortByAlpha, setSortByAlpha] = React.useState("none");
  const [layout, setLayout] = React.useState("");

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
    if (value === "none") {
      replace(`${pathname}`);
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const layoutHandler = (value?: string) => {
    if (value) {
      params.set("layout", value);
      setLayout(value);
    } else {
      params.delete("layout");
      setLayout("");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  React.useEffect(() => {
    const urlparams = new URLSearchParams(searchParams);

    if (urlparams.has("sbd")) {
      const value = urlparams.get("sbd");
      if (value === "latest" || value === "oldest") {
        setSortByDate(value);
      }
    } else {
      urlparams.delete("sbd");
      replace(`${pathname}?${urlparams.toString()}`);
    }

    if (urlparams.has("sba")) {
      const value = urlparams.get("sba");
      if (value === "ascending" || value === "descending" || value === "none") {
        setSortByAlpha(value);
        if (value === "none") {
          urlparams.delete("sba");
          replace(`${pathname}?${urlparams.toString()}`);
        }
      }
    } else {
      urlparams.delete("sba");
      replace(`${pathname}?${urlparams.toString()}`);
    }

    if (urlparams.has("layout")) {
      const value = urlparams.get("layout");
      if (value === "list") {
        setLayout(value);
      }
    } else {
      urlparams.delete("layout");
      setLayout("");
      replace(`${pathname}?${urlparams.toString()}`);
    }
  }, [searchParams, pathname, replace]);

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
                  None
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
            onClick={() =>
              replace(`/writeups${layout === "list" ? "?layout=list" : ""}`)
            }
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
            className={clsx("bg-white/10 text-primary ml-4 w-9 md:w-14", {
              "text-white": layout === "",
            })}
            onClick={() => layoutHandler()}
          >
            <span className="material-symbols-outlined">grid_view</span>
          </Button>

          <Button
            variant="outline"
            className={clsx("bg-white/10 text-primary ml-4 w-9 md:w-14", {
              "text-white": layout === "list",
            })}
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
