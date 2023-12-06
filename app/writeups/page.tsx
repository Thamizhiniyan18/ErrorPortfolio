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

export const metadata = {
  title: "Writeups | Thamizhiniyan C S",
  description: "A place where I upload all my Writeups.",
};

type Props = {};

export default async function Writeups({}: Props) {
  const MetaData: (WriteupMetaData | undefined)[] = await getWriteupsMetadata();
  const Tags: string[] | undefined = await getWriteupTags();

  return (
    <div className="w-full flex flex-col justify-start items-center">
      <div className="w-[90%]">
        <SearchBar Metadata={MetaData && MetaData} />
        <div className="w-full flex justify-center flex-wrap">
          {Tags &&
            Tags.map((tag) => (
              <Badge key={tag} className="m-1">
                {tag}
              </Badge>
            ))}
        </div>
      </div>
      <div className="w-full lg:w-[90%] grid grid-col-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 p-4">
        {MetaData &&
          MetaData.map(
            (each, index) =>
              each && <WriteupCard key={`${each.Title}_${index}`} data={each} />
          )}
      </div>
    </div>
  );
}
