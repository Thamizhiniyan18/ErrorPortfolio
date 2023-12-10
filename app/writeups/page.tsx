import React from "react";
import {
  filterMetadata,
  getWriteupTags,
  getWriteupsMetadata,
} from "@/lib/fetchData";
import { WriteupMetaData } from "@/lib/types";
import WriteupCard from "@/components/writeup/WriteupCard";
import SearchBar from "@/components/writeup/SearchBar";
import { Badge } from "@/components/ui/badge";
import WriteupTag from "@/components/writeup/WriteupTag";
import Link from "next/link";
import { TempMetaData } from "@/lib/metaData";
import FilterSortBar from "@/components/writeup/FilterSortBar";

export const metadata = {
  title: "Writeups | Thamizhiniyan C S",
  description: "A place where I upload all my Writeups.",
};

type Props = {
  searchParams: {
    tag: string;
    platform: string;
    sbd: string;
    sba: string;
  };
};

export default async function Writeups({ searchParams }: Props) {
  const MetaData: (WriteupMetaData | undefined)[] = await getWriteupsMetadata();
  // const MetaData: (WriteupMetaData | undefined)[] = TempMetaData;

  const Tags: string[] | undefined = await getWriteupTags();
  const filter: boolean =
    searchParams.platform ||
    searchParams.tag ||
    searchParams.sbd ||
    searchParams.sba
      ? true
      : false;

  const FilteredMetadata: WriteupMetaData[] | undefined = filterMetadata(
    MetaData as WriteupMetaData[],
    searchParams.platform,
    searchParams.tag,
    searchParams.sbd,
    searchParams.sba
  );

  return (
    <div className="lg:w-[1220px] xl:w-[1620px] flex flex-col justify-start items-center">
      <div className="w-full flex flex-col justify-start items-center">
        <SearchBar Metadata={MetaData && MetaData} />
        <div className="w-[98%] flex justify-between flex-wrap">
          <Link
            href="/writeups"
            className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 m-1 cursor-pointer"
          >
            <Badge>All</Badge>
          </Link>
          {Tags && Tags.map((tag) => <WriteupTag tag={tag} key={tag} />)}
        </div>
      </div>

      <FilterSortBar />

      <div className="w-full grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 mt-2">
        {filter &&
          FilteredMetadata &&
          FilteredMetadata.map(
            (each, index) =>
              each && <WriteupCard key={`${each.Title}_${index}`} data={each} />
          )}

        {filter && !FilteredMetadata && <h3>No Writeup Found !!!</h3>}

        {!filter &&
          !searchParams.platform &&
          !searchParams.tag &&
          MetaData.map(
            (each, index) =>
              each && <WriteupCard key={`${each.Title}_${index}`} data={each} />
          )}
      </div>
    </div>
  );
}
