import React from "react";
import { getWriteupTags, getWriteupsMetadata } from "@/lib/fetchData";
import { filterMetadata } from "@/lib/filterData";
import { WriteupMetaData } from "@/lib/types";
import WriteupCard from "@/components/writeup/WriteupCard";
import WriteupCardSmall from "@/components/writeup/WriteupCardSmall";
import SearchBar from "@/components/writeup/SearchBar";
import { Badge } from "@/components/ui/badge";
import WriteupTag from "@/components/writeup/WriteupTag";
import Link from "next/link";
import { TempMetaData } from "@/lib/metaData";
import FilterSortBar from "@/components/writeup/FilterSortBar";
import { SortByAlpha, SortByDate } from "@/lib/sortData";

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
    layout: string;
  };
};

export default async function Writeups({ searchParams }: Props) {
  // const MetaData: (WriteupMetaData | undefined)[] = await getWriteupsMetadata();
  const MetaData: (WriteupMetaData | undefined)[] = TempMetaData;

  const Tags: string[] | undefined = await getWriteupTags();
  const filter: boolean =
    searchParams.platform || searchParams.tag ? true : false;

  const FilteredMetadata: WriteupMetaData[] | undefined = filterMetadata(
    MetaData as WriteupMetaData[],
    searchParams.platform,
    searchParams.tag
  );

  let SortedMetaData: WriteupMetaData[] | undefined;

  if (searchParams.sbd === "latest" || searchParams.sbd === "oldest") {
    if (FilteredMetadata) {
      SortedMetaData = SortByDate(searchParams.sbd, FilteredMetadata);
    } else {
      if (MetaData)
        SortedMetaData = SortByDate(
          searchParams.sbd,
          MetaData as WriteupMetaData[]
        );
    }
  }

  if (searchParams.sba === "ascending" || searchParams.sba === "descending") {
    if (FilteredMetadata) {
      SortedMetaData = SortByAlpha(searchParams.sba, FilteredMetadata);
    } else {
      if (MetaData)
        SortedMetaData = SortByAlpha(
          searchParams.sba,
          MetaData as WriteupMetaData[]
        );
    }
  }

  let DataToDisplay: (WriteupMetaData | undefined)[];

  if (SortedMetaData) DataToDisplay = SortedMetaData;
  else if (FilteredMetadata) DataToDisplay = FilteredMetadata;
  else DataToDisplay = MetaData;

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

      <FilterSortBar total={MetaData.length} displayed={DataToDisplay.length} />

      <div className="w-full grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 mt-2">
        {filter &&
          FilteredMetadata &&
          DataToDisplay.map(
            (each, index) =>
              each &&
              (searchParams.layout === "list" ? (
                <WriteupCardSmall key={`${each.Title}_${index}`} data={each} />
              ) : (
                <WriteupCard key={`${each.Title}_${index}`} data={each} />
              ))
          )}

        {filter && !FilteredMetadata && <h3>No Writeup Found !!!</h3>}

        {!filter &&
          !searchParams.platform &&
          !searchParams.tag &&
          DataToDisplay.map(
            (each, index) =>
              each &&
              (searchParams.layout === "list" ? (
                <WriteupCardSmall key={`${each.Title}_${index}`} data={each} />
              ) : (
                <WriteupCard key={`${each.Title}_${index}`} data={each} />
              ))
          )}
      </div>
    </div>
  );
}
