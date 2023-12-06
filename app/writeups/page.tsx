import React from "react";
import {
  fetchRawMarkdownFile,
  getWriteupTags,
  getWriteupsMetadata,
} from "@/lib/fetchData";
import { WriteupMetaData, WriteupsRepository } from "@/lib/types";
import { getWriteupsRepository } from "@/lib/fetchData";
import WriteupCard from "@/components/writeup/WriteupCard";
import SearchBar from "@/components/writeup/SearchBar";
import { Badge } from "@/components/ui/badge";

type Props = {};

export default async function Writeups({}: Props) {
  const MetaData: (WriteupMetaData | undefined)[] = await getWriteupsMetadata();
  const Tags: string[] | undefined = await getWriteupTags();

  // const MetaData: WriteupMetaData[] = [
  //   {
  //     Platform: "HackTheBox",
  //     Category: "Android",
  //     Difficulty: "Easy",
  //     Status: "Rooted/Finished",
  //     Type: "Challenge",
  //     Title: "APKey",
  //     tags: null,
  //     CreatedOn: "04-12-2023",
  //   },
  //   {
  //     Platform: "HackTheBox",
  //     Category: "Android",
  //     Difficulty: "Easy",
  //     Status: "Rooted/Finished",
  //     Type: "Challenge",
  //     Title: "APKrypt",
  //     tags: null,
  //     CreatedOn: "04-12-2023",
  //   },
  //   {
  //     Title: "Anchored",
  //     Platform: "HackTheBox",
  //     Type: "Challenge",
  //     Difficulty: "Easy",
  //     Category: "Android",
  //     Status: "Done",
  //     tags: null,
  //     CreatedOn: "04-12-2023",
  //   },
  //   {
  //     Platform: "HackTheBox",
  //     Difficulty: "Easy",
  //     tags: ["MS17-010", "RCE", "Windows"],
  //     Status: "Rooted/Finished",
  //     Type: "Machine",
  //     Title: "Blue",
  //     Category: null,
  //     CreatedOn: "04-12-2023",
  //   },
  //   {
  //     Platform: "TryHackMe",
  //     Difficulty: "Medium",
  //     Status: "Rooted/Finished",
  //     Type: "Machine",
  //     Title: "Capstone Challenge",
  //     Category: null,
  //     tags: null,
  //     CreatedOn: "04-12-2023",
  //   },
  //   {
  //     Platform: "HackTheBox",
  //     Category: "Android",
  //     Difficulty: "Easy",
  //     Status: "Rooted/Finished",
  //     Type: "Challenge",
  //     Title: "Cat",
  //     tags: null,
  //     CreatedOn: "04-12-2023",
  //   },
  //   {
  //     Platform: "HackTheBox",
  //     Difficulty: "Easy",
  //     tags: ["command-injection", "sudo-privesc"],
  //     Status: "Rooted/Finished",
  //     Type: "Machine",
  //     Title: "CozyHosting",
  //     Category: null,
  //     CreatedOn: "04-12-2023",
  //   },
  // ];

  return (
    <div className="w-full flex flex-col justify-start items-center">
      <div className="w-[90%]">
        <SearchBar />
        <div className="w-full flex justify-center flex-wrap">
          {Tags && Tags.map((tag) => <Badge key={tag} className="m-1">{tag}</Badge>)}
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
