import React from "react";
import {
  fetchRawMarkdownFile,
  getWriteupTags,
  getWriteupsMetadata,
} from "@/lib/fetchData";
import { WriteupMetaData } from "@/lib/types";
import WriteupCard from "@/components/writeup/WriteupCard";
import SearchBar from "@/components/writeup/SearchBar";
import { Badge } from "@/components/ui/badge";
import WriteupTag from "@/components/writeup/WriteupTag";

export const metadata = {
  title: "Writeups | Thamizhiniyan C S",
  description: "A place where I upload all my Writeups.",
};

type Props = {};

export default async function Writeups({}: Props) {
  const MetaData: (WriteupMetaData | undefined)[] = await getWriteupsMetadata();
  const Tags: string[] | undefined = await getWriteupTags();

  return (
    <div className="lg:w-[1220px] flex flex-col justify-start items-center">
      <div className="w-full flex flex-col justify-start items-center">
        <SearchBar Metadata={MetaData && MetaData} />
        <div className="w-[98%] flex justify-between flex-wrap">
          {Tags && Tags.map((tag) => <WriteupTag tag={tag} key={tag} />)}
        </div>
      </div>

      <div className="w-full h-[50px] mt-4 mb-2"></div>

      <div className="w-full grid grid-col-1 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-2">
        {MetaData &&
          MetaData.map(
            (each, index) =>
              each && <WriteupCard key={`${each.Title}_${index}`} data={each} />
          )}
      </div>
    </div>
  );
}
