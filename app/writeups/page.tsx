import React from "react";
import {
  fetchRawMarkdownFile,
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
import { MetaData } from "@/lib/metaData";

export const metadata = {
  title: "Writeups | Thamizhiniyan C S",
  description: "A place where I upload all my Writeups.",
};

type Props = {
  searchParams: {
    tag: string;
    platform: string;
  };
};

export default async function Writeups({ searchParams }: Props) {
  // const MetaData: (WriteupMetaData | undefined)[] = await getWriteupsMetadata();

  // const Tags: string[] | undefined = await getWriteupTags();
  const filter: boolean =
    searchParams.platform || searchParams.tag ? true : false;

  const FilteredMetadata: WriteupMetaData[] | undefined = filterMetadata(
    MetaData as WriteupMetaData[],
    searchParams.platform,
    searchParams.tag
  );

  return (
    <div className="lg:w-[1220px] flex flex-col justify-start items-center">
      <div className="w-full flex flex-col justify-start items-center">
        <SearchBar Metadata={MetaData && MetaData} />
        <div className="w-[98%] flex justify-between flex-wrap">
          <Link
            href="/writeups"
            className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 m-1 cursor-pointer"
          >
            <Badge>All</Badge>
          </Link>
          {/* {Tags && Tags.map((tag) => <WriteupTag tag={tag} key={tag} />)} */}
        </div>
      </div>

      <div className="w-full h-[50px] mt-4 mb-2"></div>

      <div className="w-full grid grid-col-1 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-2">
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
